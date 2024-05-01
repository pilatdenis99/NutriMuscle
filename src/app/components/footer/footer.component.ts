import { Component, HostListener } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
import {NzFooterComponent} from "ng-zorro-antd/layout";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {NzIconDirective} from "ng-zorro-antd/icon";

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  imports: [NzFooterComponent, NzRowDirective, NzColDirective, NzIconDirective],
})
export class FooterComponent {
  isMobile: boolean = false;
  breakpoint: number = 768;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    this.checkWindowSize();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkWindowSize();
  }

  public checkWindowSize() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth < this.breakpoint;
    }
  }

}
