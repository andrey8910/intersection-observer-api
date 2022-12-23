import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-video-play-on-scroll',
  templateUrl: './video-play-on-scroll.component.html',
  styleUrls: ['./video-play-on-scroll.component.css']
})
export class VideoPlayOnScrollComponent implements OnInit, AfterViewInit {
  private videos : HTMLVideoElement[] = []

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.videos = this.elementRef.nativeElement.querySelectorAll('video')
    this.videos.forEach(video => this.videoObserver.observe(video))

  }

  private videoObserver = new IntersectionObserver(
    ([entries]:any) => {
      const video: HTMLVideoElement = entries.target
      if(video.currentTime === 0) return;
      if(!entries.isIntersecting || entries.intersectionRatio <= 0.2){
       video.pause()
      }else{
        video.play()
      }
    },
    {
      threshold: [0.2, 0.8]
    }
  );

}
