import { Component } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {Meta, Title} from "@angular/platform-browser";
import {filter, tap} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private ILS = 'img-loading-scroll';
  private VPOS = 'video-play-on-scroll';
  private MAOS = 'menu-active-on-scroll';
  private IS = 'infinite-scroll';



  private PAGE_LIST = {
    [this.ILS] : "Завантаження картинки при скролі",
    [this.VPOS] : "Зупинка програвання відео при скролі",
    [this.MAOS] : "Зміна активного пункту меню при скролі",
    [this.IS] : "Нескінчкнній скрол",

  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta
  ) {
  }


  ngOnInit() {
    this.init();
  }

  private init(){
    this.router.events.pipe(
      filter((event:any) => event instanceof NavigationEnd),
      tap((res) => {
        const v = res.url.slice(1);
        this.titleService.setTitle(this.PAGE_LIST[v] ? this.PAGE_LIST[v] : 'Scroll');
        console.log(this.metaService.getTag("property='og:site_name'")?.content)
      })
    ).subscribe()


  }


}
