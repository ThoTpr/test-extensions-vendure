export type CustomerOptin = {
  optinId: number;
  topPersonalEmail: boolean;
  topPersonalEmailPartner: boolean;
  topPersonalEmailStudies: boolean;
  topProfessionalEmail: boolean;
  topPersonalMail: boolean;
  topPersonalMailPartner: boolean;
  topPersonalMailStudies: boolean;
  topProfessionalMail: boolean;
  topPersonalSms: boolean;
  topPersonalSmsPartner: boolean;
  topPersonalSmsStudies: boolean;
  topProfessionalSms: boolean;
  topPersonalCall: boolean;
  topPersonalCallPartner: boolean;
  topPersonalCallStudies: boolean;
  topProfessionalCall: boolean;
  topTestNewsletter: boolean;
  lifecycleHolderStatusCode?: string;
  topTestNewsletterPartner: boolean;
  communicationId?: number;
  topSourceApplication?: string;
}