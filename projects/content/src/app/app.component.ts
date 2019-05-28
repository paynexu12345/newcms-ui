import { Component, OnInit } from "@angular/core";
import {
  Router,
  NavigationEnd,
  NavigationStart,
  ActivatedRoute
} from "@angular/router";
import { Subscription } from 'rxjs';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";
  subscription: Subscription;
  constructor(
    public router: Router,
    public acRouter: ActivatedRoute,
    // public globalService: GlobalService,
    // public authService: AuthService,
    // public baseService:BaseService,
    // public settingsAquire:SettingsAcquire
  ) {}
  // menus:CMSModule[] = deepCopy(CMS_MENUS);
  
  // showLoading_OnNavigationStart() {
  //   this.router.events.subscribe(event => {
  //     if (event instanceof NavigationStart) {
  //       this.globalService.loadingBarIsShow = true;
  //     }
  //   });
  // }
  // hideLoading_OnNavigationEnd() {
  //   this.router.events.subscribe(event => {
  //     if (event instanceof NavigationEnd) {
  //       this.globalService.loadingBarIsShow = false;
  //     }
  //   });
  // }
  // hideMessage_OnNavigationEnd() {
  //   this.router.events.subscribe(event => {
  //     if (event instanceof NavigationEnd) {
  //       if (this.globalService.messageRef) this.globalService.messageRef.hide();
  //     }
  //   });
  // }
  // intervalCheckTokenShouldRefresh(){
  //   setInterval(()=>{
  //     if(this.authService.checkTokenExpired()&&!this.authService.isRequestingRefreshToken){
  //       if(this.authService.getPartnerFromStorage()){
  //         this.authService.requestRefreshToken(this.authService.getPartnerFromStorage().partnerId,false);
  //       }
  //       else{
  //         this.authService.requestRefreshToken("",false);
  //       }
  //     }
  //   },1000)
  // }

  // setLoggerLevel(){
  // }
  // subscribeSettingsAcquireSuccess(){
  //   this.settingsAquire.reqSuccess.subscribe((res:Permission[])=>{
  //     this.globalService.generateDynamicModules(res,this.menus)
  //   })
  // }

  ngOnInit() {
    // changePageTitle([]);
    // this.showLoading_OnNavigationStart();
    // this.hideLoading_OnNavigationEnd();
    // this.hideMessage_OnNavigationEnd();
    // this.setLoggerLevel();
    // this.subscribeSettingsAcquireSuccess();
  }
}
