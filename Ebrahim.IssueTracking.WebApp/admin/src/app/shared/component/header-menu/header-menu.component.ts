import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router, NavigationStart, RouteConfigLoadStart, RouteConfigLoadEnd, NavigationEnd, NavigationCancel } from '@angular/router';

import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit, OnDestroy {

  isLoggedIn = false;
  subscription: Subscription | null = null;
  displayName = '';

  @ViewChild('ktHeader', { static: false }) ktHeader: ElementRef;

  constructor(private authService: AuthService,
              private router: Router,
              public loader: LoadingBarService) {

    // page progress bar percentage
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // set page progress bar loading to start on NavigationStart event router
        this.loader.start();
      }
      if (event instanceof RouteConfigLoadStart) {
        this.loader.increment(35);
      }
      if (event instanceof RouteConfigLoadEnd) {
        this.loader.increment(75);
      }
      if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
        // set page progress bar loading to end on NavigationEnd event router
        this.loader.complete();
      }
    });
  }

  ngOnInit() {
    this.subscription = this.authService.authStatus$.subscribe(status => {
      this.isLoggedIn = status;
      if (status) {
        const authUser = this.authService.getAuthUser();
        this.displayName = authUser ? authUser.displayName : '';
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  logout() {
    this.authService.logout(true);
  }

}
