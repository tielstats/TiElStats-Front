import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonImgComponent } from './button-img.component';

describe('ButtonImgComponent', () => {
  let component: ButtonImgComponent;
  let fixture: ComponentFixture<ButtonImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
