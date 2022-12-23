import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageLoadingOnScrollComponent } from './image-loading-on-scroll.component';

describe('ImageLoadingOnScrollComponent', () => {
  let component: ImageLoadingOnScrollComponent;
  let fixture: ComponentFixture<ImageLoadingOnScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageLoadingOnScrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageLoadingOnScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
