import { Injectable } from "@nestjs/common";
import {
  Channel,
  ID,
  RequestContext,
  TransactionalConnection,
} from "@vendure/core";

@Injectable()
export class CustomerExtensionService {
  constructor(
    private readonly transactionalConnection: TransactionalConnection
  ) {}

  getCustomerChannels(ctx: RequestContext, id: ID) {
    return this.transactionalConnection
      .getRepository(ctx, Channel)
      .createQueryBuilder()
      .innerJoin("customer_channels_channel", "ccc", "ccc.channelId = id")
      .innerJoin("customer", "c", "ccc.customerId = c.id")
      .where(`c.id = :id`, { id })
      .andWhere("code != '__default_channel__'")
      .select("code")
      .execute()
      .then((result) => {
        return result.map((channel: any) => ({ code: channel.code }));
      });
  }

  /**
   * Deletes a customer from a channel and returns updated list
   * @param ctx Request context provided by Vendure
   * @param customerId
   * @param channelCode
   * @returns the updated list of channels for the user
   */
  async removeCustomerFromChannel(
    ctx: RequestContext,
    customerId: ID,
    channelCode: string
  ) {
    const channelQuery = await this.transactionalConnection
      .getRepository(ctx, Channel)
      .createQueryBuilder("channel")
      .select("channel.id")
      .where("channel.code = :channelCode", { channelCode })
      .getRawOne();

    await this.transactionalConnection
      .getRepository(ctx, "customer_channels_channel")
      .createQueryBuilder("ccc")
      .delete()
      .from("customer_channels_channel")
      .where("customerId = :customerId", { customerId })
      .andWhere("channelId = :channelId", {
        channelId: channelQuery.channel_id,
      })
      .execute();

    return this.getCustomerChannels(ctx, customerId);
  }
}
