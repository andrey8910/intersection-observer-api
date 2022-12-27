import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {finalize, tap} from "rxjs";

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfiniteScrollComponent implements OnInit, AfterViewInit {

  public posts: any[] = [];
  private nextPage = 2

  public infiniteObserver = new IntersectionObserver(
    ([entry], observer) =>{
      if(entry.isIntersecting){
        observer.unobserve(entry.target)
        console.log(entry)
       // this.ref.markForCheck();
        this.loadPosts(this.nextPage++)
        this.ref.markForCheck();
      }
    },
    {
      threshold: 1
    }
  )

  public loadPosts = (page = 1) => {
    this.httpClient.get(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`).pipe(
      tap((posts:any )=> {
        if(posts.length > 0){
          this.posts.push(...posts)
          this.ref.markForCheck();

          setTimeout(() => {
            const lastPost: any = this.elementRef.nativeElement.getElementsByClassName('last-post').item(0)
            if(lastPost){
              this.infiniteObserver.observe(lastPost)
            }
          }, 1000);
        }

      }),
      finalize(() => {})
    ).subscribe()

  }



  constructor(private httpClient: HttpClient,
              private elementRef: ElementRef,
              private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loadPosts()

  }

  ngAfterViewInit() {
  }

}
