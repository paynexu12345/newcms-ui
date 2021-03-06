import { Component, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "cms-header",
  styleUrls: ["./header.component.css"],
  templateUrl: "./header.component.html"
})
export class HeaderComponent {
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    // public globalService: GlobalService,
    // public idpLoginService: IdpLoginService,
    // public pageModeService: PageModeService,
    // public settingService: PartnerService,
    // public baseService: BaseService,
    // public authService: AuthService
  ) {}
  toggleMessage = "Toggle navigation";
  partners: any[] = [];

  // get activePartner() {
  //   return this.authService.getPartnerFromStorage();
  // }

  // set activePartner(val) {
  //   this.authService.setPartnerToStorage(val);
  // }
  @Input() config;
  // handlePartnerssChange($event) {
  //   this.activePartner = $event;
  //   this.authService.requestRefreshToken($event.partnerId).then(res => {
  //     if (res == "success") {
  //       this.router.navigateByUrl("content/dashboard");
  //       window.location.reload();
  //     }
  //   });
  // }

  handleModulesChange($event) {
    location.href = $event.url;
  }

  ngOnInit() {
    // if (this.globalService.isAdminUser)
    //   this.settingService.getPartners().then(res => {
    //     if (!res.message) {
    //       this.partners = res.values;
    //       if (!this.authService.getPartnerFromStorage()) {
    //         this.activePartner = this.partners[0];
    //       }
    //     }
    //   });
  }
}
