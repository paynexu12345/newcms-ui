import { Component, Input } from "@angular/core";
import { Breadcrumb } from "./class";
@Component({
  selector: "breadcrumb",
  template: `
    <ol class="breadcrumb">
      <li *ngFor="let breadCrumb of breadCrumbs; let i = index">
        <a
          class="link"
          *ngIf="breadCrumb.routerLink"
          [routerLink]="breadCrumb.routerLink"
          [queryParams]="breadCrumb?.queryParams"
          >{{ breadCrumb.name }}</a
        >
        <ng-container *ngIf="!breadCrumb.routerLink">{{ breadCrumb.name }}</ng-container>
      </li>
    </ol>
  `
})
export class BreadcrumbComponent {
  constructor() {}
  @Input("config") breadCrumbs: Breadcrumb[] = [];
  ngOnInit() {}
}
