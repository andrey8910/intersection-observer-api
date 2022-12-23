import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuActiveOnScrollComponent } from './menu-active-on-scroll.component';

describe('MenuActiveOnScrollComponent', () => {
  let component: MenuActiveOnScrollComponent;
  let fixture: ComponentFixture<MenuActiveOnScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuActiveOnScrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuActiveOnScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
