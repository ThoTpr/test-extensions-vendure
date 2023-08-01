import type { ID } from "@vendure/core";
import { GiftCardStatus } from "../enums/gift-card-status";
import { GiftCardType } from "../enums/gift-card-type";

export type GiftCardDetail = {
  id: ID; //numéro de la carte
  cardType?: GiftCardType; // optionnel
  status: GiftCardStatus;
  buyerId: ID; // optionnel
  carrierId: ID; // optionnel
  orderId?: ID; // optionnel
  expirationDate: Date;
  isExpirationNotificationEnabled: boolean;
  initialAmount: number;
  cardBalance: number;
  plannedActivationDate: Date;
  activationDate?: Date; // optionnel
  opposedAt?: Date | null; // optionnel
  amountAtOpposition?: number; // optionnel
  createdAt: Date;
  updatedAt: Date;
  lastTestSync: Date;
};
