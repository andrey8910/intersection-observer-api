import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-image-loading-on-scroll',
  templateUrl: './image-loading-on-scroll.component.html',
  styleUrls: ['./image-loading-on-scroll.component.css']
})
export class ImageLoadingOnScrollComponent implements OnInit, AfterViewInit  {

  public images : HTMLImageElement[] = []

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.images = this.elementRef.nativeElement.querySelectorAll('img')
    this.images.forEach(image => this.imageObserver.observe(image))
  }

  public imageObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry : any) => {
        if(entry.isIntersecting && entry.target !== null ){
          entry.target.src = entry.target.dataset.src

          observer.unobserve(entry.target)
        }
      })
    },
    {
      rootMargin: '50px 0px 0px'
    }
  )
}
