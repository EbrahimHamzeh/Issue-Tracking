(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-authentication-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/authentication/access-denied/access-denied.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentication/access-denied/access-denied.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  access-denied works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/authentication/login/login.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentication/login/login.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-toolbar dir=rtl color=\"primary\" style=\"height: 100vh;\">سیستم پشتیبانی</mat-toolbar>\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"login-main\">\n    <mat-card dir=rtl>\n        <mat-card-header>\n            <mat-card-title>ورود</mat-card-title>\n        </mat-card-header>\n        <form (ngSubmit)=\"onSubmit(form)\" #form=\"ngForm\"> \n            <mat-card-content fxLayout=\"column\">\n                <mat-form-field>\n                    <input matInput placeholder=\"نام‌کاربری\" #username=\"ngModel\" required [(ngModel)]=\"model.username\">\n                    <mat-error *ngIf=\"username.invalid && username.touched\">نام‌کاربری نا معتبر می‌باشد.</mat-error>\n                </mat-form-field>\n                <mat-form-field>\n                    <input type=\"password\" matInput placeholder=\"رمزعبور\" #password=\"ngModel\" required [(ngModel)]=\"model.password\">\n                    <mat-error *ngIf=\"password.invalid && password.touched\">رمزعبور نا معتبر می‌باشد.</mat-error>\n                </mat-form-field>\n                <mat-form-field>\n                     <input type=\"checkbox\"  #rememberMe=\"ngModel\" matInput [(ngModel)]=\"model.rememberMe\">مرا به ‌خاطر بسپار \n                     <mat-checkbox #rememberMe=\"ngModel\" matInput [(ngModel)]=\"model.rememberMe\"></mat-checkbox>\n                 </mat-form-field> \n            </mat-card-content>\n            <mat-card-actions>\n                <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"form.invalid \">ورود</button>\n            </mat-card-actions>\n        </form>\n    </mat-card>\n</div> -->\n\n<mat-toolbar color=\"primary\">\n    <span>سیستم پشتیبانی</span>\n</mat-toolbar>\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"login-main\">\n    <mat-card class=\"my-card\">\n        <mat-card-header>\n            <mat-card-title>ورود</mat-card-title>\n        </mat-card-header>\n        <form (ngSubmit)=\"onSubmit(form)\" #form=\"ngForm\">\n            <mat-card-content fxLayout=\"column\" dir=\"rtl\">\n                <mat-form-field>\n                    <input matInput placeholder=\"نام‌کاربری\" name=\"username\" #username=\"ngModel\" required\n                        [(ngModel)]=\"model.username\">\n                    <mat-error *ngIf=\"username.invalid && username.touched\">نام‌کاربری نامعتبر می‌باشد.</mat-error>\n                </mat-form-field>\n                <mat-form-field>\n                    <input type=\"password\" matInput placeholder=\"رمزعبور\" name=\"password\" #password=\"ngModel\" required\n                        [(ngModel)]=\"model.password\">\n                    <mat-error *ngIf=\"password.invalid && password.touched\">رمزعبور نامعتبر می‌باشد.</mat-error>\n                </mat-form-field>\n                <mat-checkbox #rememberMe=\"ngModel\" name=\"rememberMe\" [(ngModel)]=\"model.rememberMe\">مرا به ‌خاطر بسپار\n                </mat-checkbox>\n            </mat-card-content>\n            <mat-card-actions>\n                <button type=\"submit\" mat-raised-button [disabled]=\"form.invalid \" color=\"primary\">ورود</button>\n            </mat-card-actions>\n        </form>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/authentication/access-denied/access-denied.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/authentication/access-denied/access-denied.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2FjY2Vzcy1kZW5pZWQvYWNjZXNzLWRlbmllZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/authentication/access-denied/access-denied.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/authentication/access-denied/access-denied.component.ts ***!
  \*************************************************************************/
/*! exports provided: AccessDeniedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessDeniedComponent", function() { return AccessDeniedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AccessDeniedComponent = class AccessDeniedComponent {
    constructor() { }
    ngOnInit() {
    }
};
AccessDeniedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-access-denied',
        template: __webpack_require__(/*! raw-loader!./access-denied.component.html */ "./node_modules/raw-loader/index.js!./src/app/authentication/access-denied/access-denied.component.html"),
        styles: [__webpack_require__(/*! ./access-denied.component.css */ "./src/app/authentication/access-denied/access-denied.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AccessDeniedComponent);



/***/ }),

/***/ "./src/app/authentication/authentication-layout.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/authentication/authentication-layout.component.ts ***!
  \*******************************************************************/
/*! exports provided: AuthenticationLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationLayoutComponent", function() { return AuthenticationLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthenticationLayoutComponent = class AuthenticationLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AuthenticationLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-authentication-layout',
        template: '<router-outlet></router-outlet>'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AuthenticationLayoutComponent);



/***/ }),

/***/ "./src/app/authentication/authentication-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/authentication/authentication-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AuthenticationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationRoutingModule", function() { return AuthenticationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _authentication_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication-layout.component */ "./src/app/authentication/authentication-layout.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/authentication/login/login.component.ts");
/* harmony import */ var _access_denied_access_denied_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./access-denied/access-denied.component */ "./src/app/authentication/access-denied/access-denied.component.ts");
/* harmony import */ var _core_services_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/services/auth-guard */ "./src/app/core/services/auth-guard.ts");







const routes = [
    {
        path: 'user',
        component: _authentication_layout_component__WEBPACK_IMPORTED_MODULE_3__["AuthenticationLayoutComponent"],
        children: [
            { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], pathMatch: 'full' },
            { path: 'accessDenied', component: _access_denied_access_denied_component__WEBPACK_IMPORTED_MODULE_5__["AccessDeniedComponent"],
                data: {
                    permission: {
                        permittedRoles: ['Admin', 'User']
                    }
                },
                canActivate: [_core_services_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] }
        ]
    }
];
let AuthenticationRoutingModule = class AuthenticationRoutingModule {
};
AuthenticationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AuthenticationRoutingModule);



/***/ }),

/***/ "./src/app/authentication/authentication.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication-routing.module */ "./src/app/authentication/authentication-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/authentication/login/login.component.ts");
/* harmony import */ var _authentication_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authentication-layout.component */ "./src/app/authentication/authentication-layout.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _access_denied_access_denied_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./access-denied/access-denied.component */ "./src/app/authentication/access-denied/access-denied.component.ts");








let AuthenticationModule = class AuthenticationModule {
};
AuthenticationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _authentication_layout_component__WEBPACK_IMPORTED_MODULE_5__["AuthenticationLayoutComponent"], _access_denied_access_denied_component__WEBPACK_IMPORTED_MODULE_7__["AccessDeniedComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _authentication_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthenticationRoutingModule"]
        ]
    })
], AuthenticationModule);



/***/ }),

/***/ "./src/app/authentication/login/login.component.css":
/*!**********************************************************!*\
  !*** ./src/app/authentication/login/login.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spacer {\r\n  flex: 1 1 auto;\r\n}\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hdXRoZW50aWNhdGlvbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/authentication/login/login.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginComponent = class LoginComponent {
    constructor(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.model = { username: '', password: '', rememberMe: false };
        this.error = '';
        this.returnUrl = null;
    }
    ngOnInit() {
        this.authService.logout(false);
        // tslint:disable-next-line:no-string-literal
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
    }
    onSubmit(form) {
        console.log(form);
        this.error = '';
        this.authService.login(this.model)
            .subscribe(isLoggedIn => {
            if (isLoggedIn) {
                if (this.returnUrl) {
                    this.router.navigate([this.returnUrl]);
                }
                else {
                    this.router.navigate(['/dashboard/panel/list']);
                }
            }
        }, (error) => {
            console.error('Login error', error);
            if (error.status === 401) {
                this.error = 'Invalid User name or Password. Please try again.';
            }
            else {
                this.error = `${error.statusText}: ${error.message}`;
            }
        });
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/authentication/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/authentication/login/login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/core/services/auth-guard.ts":
/*!*********************************************!*\
  !*** ./src/app/core/services/auth-guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/services/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.permissionObjectKey = 'permission';
    }
    canActivate(route, state) {
        const permissionData = route.data[this.permissionObjectKey];
        const returnUrl = state.url;
        return this.hasAuthUserAccessToThisRoute(permissionData, returnUrl);
    }
    canActivateChild(childRoute, state) {
        const permissionData = childRoute.data[this.permissionObjectKey];
        const returnUrl = state.url;
        return this.hasAuthUserAccessToThisRoute(permissionData, returnUrl);
    }
    canLoad(route) {
        if (route.data) {
            const permissionData = route.data[this.permissionObjectKey];
            const returnUrl = `/${route.path}`;
            return this.hasAuthUserAccessToThisRoute(permissionData, returnUrl);
        }
        else {
            return true;
        }
    }
    hasAuthUserAccessToThisRoute(permissionData, returnUrl) {
        if (!this.authService.isAuthUserLoggedIn()) {
            this.showAccessDenied(returnUrl);
            return false;
        }
        if (!permissionData) {
            return true;
        }
        if (Array.isArray(permissionData.deniedRoles) && Array.isArray(permissionData.permittedRoles)) {
            throw new Error('Don\'t set both "deniedRoles" and "permittedRoles" in route data.');
        }
        if (Array.isArray(permissionData.permittedRoles)) {
            const isInRole = this.authService.isAuthUserInRoles(permissionData.permittedRoles);
            if (isInRole) {
                return true;
            }
            this.showAccessDenied(returnUrl);
            return false;
        }
        if (Array.isArray(permissionData.deniedRoles)) {
            const isInRole = this.authService.isAuthUserInRoles(permissionData.deniedRoles);
            if (!isInRole) {
                return true;
            }
            this.showAccessDenied(returnUrl);
            return false;
        }
        return true;
    }
    showAccessDenied(returnUrl) {
        // tslint:disable-next-line:object-literal-shorthand
        this.router.navigate(['/accessDenied'], { queryParams: { returnUrl: returnUrl } });
    }
};
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], AuthGuard);



/***/ })

}]);
//# sourceMappingURL=authentication-authentication-module.js.map