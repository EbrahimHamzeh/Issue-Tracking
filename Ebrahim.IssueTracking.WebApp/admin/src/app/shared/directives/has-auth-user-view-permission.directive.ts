import { Directive, Input, TemplateRef, ViewContainerRef, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Subscription } from 'rxjs';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[hasAuthUserViewPermission]'
})
export class HasAuthUserViewPermissionDirective implements OnInit, OnDestroy {
  private isVisible = false;
  private requiredRoles: string[] | null = null;
  private subscription: Subscription | null = null;

  @Input()
  set hasAuthUserViewPermission(roles: string[] | null) {
    this.requiredRoles = roles;
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
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

  private changeVisibility(status: boolean) {
    const isInRoles = !this.requiredRoles ? true : this.authService.isAuthUserInRoles(this.requiredRoles);
    if (isInRoles && status) {
      if (!this.isVisible) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.isVisible = true;
      }
    } else {
      this.isVisible = false;
      this.viewContainer.clear();
    }
  }

}
