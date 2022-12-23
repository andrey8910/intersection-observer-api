import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu-active-on-scroll',
  templateUrl: './menu-active-on-scroll.component.html',
  styleUrls: ['./menu-active-on-scroll.component.css']
})
export class MenuActiveOnScrollComponent implements OnInit, AfterViewInit  {

  public sections: HTMLDivElement[] = []
  public links: HTMLLinkElement[] = []


  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.sections = this.elementRef.nativeElement.querySelectorAll('.section')
    this.links = this.elementRef.nativeElement.querySelectorAll('.menu-item')

    this.sections.forEach(s => this.sectionObserver.observe(s))
  }

  public sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry:any) => {

      if(entry.isIntersecting && entry.intersectionRatio > 0.5){
        this.links.forEach(link => {
          link.classList.remove('active')
          const activeId = entry.target.id
          const activeLink = this.elementRef.nativeElement.querySelector(
            `.menu-item[href="/menu-active-on-scroll/#${activeId}"]`
          )
          if (activeLink) {
            activeLink.classList.add('active')
          }

        })
      }
    })
  }, {
    threshold: [0.2, 0.5, 0.8],
  })




}
