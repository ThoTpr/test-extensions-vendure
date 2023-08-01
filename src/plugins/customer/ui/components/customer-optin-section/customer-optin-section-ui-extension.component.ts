import { Component, OnInit } from "@angular/core";
import { UntypedFormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { CustomDetailComponent } from "@vendure/admin-ui/core";
import { ID } from "@vendure/core";
import { Observable } from "rxjs";
import { CustomerOptinSectionUiExtensionService } from "../../services/customer-optin-section-ui-extension.service";
import { CustomerOptin } from "./types/customer-optin";

@Component({
  templateUrl: "./customer-optin-section-ui-extension.component.html",
  styleUrls: ["./customer-optin-section-ui-extension.component.scss"],
})
export class CustomerOptinSectionUiExtensionComponent
  implements CustomDetailComponent, OnInit
{
  constructor(
    private customerOptinSectionUiExtensionService: CustomerOptinSectionUiExtensionService,
    private route: ActivatedRoute
  ) {}
  customerId: ID;
  entity$: Observable<CustomerOptin[]>;
  detailForm: UntypedFormGroup;
  optinArray: any;
  ngOnInit(): void {
    this.customerId = this.route.snapshot.params["id"];
    this.customerOptinSectionUiExtensionService
      .getOptin().subscribe(data => {
        this.optinArray = Object.entries(data)})
    this.customerOptinSectionUiExtensionService.refreshOptin(+this.customerId)
  }

  updateOptin(value: any) {
    console.log(value)
      this.customerOptinSectionUiExtensionService.updateOptin(+this.customerId, value);
  }
}
