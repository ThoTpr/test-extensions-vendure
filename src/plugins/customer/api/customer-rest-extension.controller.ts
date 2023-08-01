import { Controller, Delete, Get, Param } from "@nestjs/common";
import { Ctx, RequestContext } from "@vendure/core";
import { CustomerExtensionService } from "./customer-extension.service";

@Controller("customers")
export class CustomerRestExtensionController {
  constructor(private customerExtensionService: CustomerExtensionService) {}

  @Get(":id/channels")
  getChannelsForCustomer(@Ctx() ctx: RequestContext, @Param("id") id: string) {
    return this.customerExtensionService.getCustomerChannels(ctx, id);
  }

  @Delete(":id/channels/:channelCode")
  removeCustomerFromChannel(
    @Ctx() ctx: RequestContext,
    @Param("id") id: string,
    @Param("channelCode") channelCode: string
  ) {
    return this.customerExtensionService.removeCustomerFromChannel(
      ctx,
      id,
      channelCode
    );
  }
}
