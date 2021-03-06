import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'project-shared/components/login/login.component';
import { EnterCheckComponent } from 'project-shared/components/enter-check/enter-check.component';
import { LoginCheck } from 'project-shared/services/security/login-check';
import { PartnerCheck } from 'project-shared/services/security/partner-check.service';
import { SettingsAcquire } from 'project-shared/services/security/settings-acquire';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path:"",
    component:EnterCheckComponent,
    canActivate:[LoginCheck,PartnerCheck,SettingsAcquire],
    children:[

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
