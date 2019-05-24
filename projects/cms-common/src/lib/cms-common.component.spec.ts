import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsCommonComponent } from './cms-common.component';

describe('CmsCommonComponent', () => {
  let component: CmsCommonComponent;
  let fixture: ComponentFixture<CmsCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmsCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
