import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPlayOnScrollComponent } from './video-play-on-scroll.component';

describe('VideoPlayOnScrollComponent', () => {
  let component: VideoPlayOnScrollComponent;
  let fixture: ComponentFixture<VideoPlayOnScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoPlayOnScrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoPlayOnScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
