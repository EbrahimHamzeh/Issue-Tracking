import { Directive, Input, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[isVisibleForAuthUser]'
})
export class IsVisibleForAuthUserDirective implements OnInit, OnDestroy {

  private subscription: Subscription | null = null;

  @Input() isVisibleForRoles: string[] | null = null;

  constructor(
    private elem: ElementRef,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.subscription = this.authService.authStatus$.subscribe(status => this.changeVisibility(status));
    this.changeVisibility(this.authService.isAuthUserLoggedIn());
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private changeVisibility(status) {
    const isInRoles = !this.isVisibleForRoles ? true : this.authService.isAuthUserInRoles(this.isVisibleForRoles);
    this.elem.nativeElement.style.display = isInRoles && status ? '' : 'none';
  }

}
