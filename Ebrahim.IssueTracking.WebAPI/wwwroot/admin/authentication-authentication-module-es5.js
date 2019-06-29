(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-authentication-module"],{

/***/ "./node_modules/jwt-decode/lib/atob.js":
/*!*********************************************!*\
  !*** ./node_modules/jwt-decode/lib/atob.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The code was extracted from:
 * https://github.com/davidchambers/Base64.js
 */

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function InvalidCharacterError(message) {
  this.message = message;
}

InvalidCharacterError.prototype = new Error();
InvalidCharacterError.prototype.name = 'InvalidCharacterError';

function polyfill (input) {
  var str = String(input).replace(/=+$/, '');
  if (str.length % 4 == 1) {
    throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
  }
  for (
    // initialize result and counters
    var bc = 0, bs, buffer, idx = 0, output = '';
    // get next character
    buffer = str.charAt(idx++);
    // character found in table? initialize bit storage and add its ascii value;
    ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
      // and if not first of each 4 characters,
      // convert the first 8 bits to one ascii character
      bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
  ) {
    // try to find character in table (0-63, not found => -1)
    buffer = chars.indexOf(buffer);
  }
  return output;
}


module.exports = typeof window !== 'undefined' && window.atob && window.atob.bind(window) || polyfill;


/***/ }),

/***/ "./node_modules/jwt-decode/lib/base64_url_decode.js":
/*!**********************************************************!*\
  !*** ./node_modules/jwt-decode/lib/base64_url_decode.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var atob = __webpack_require__(/*! ./atob */ "./node_modules/jwt-decode/lib/atob.js");

function b64DecodeUnicode(str) {
  return decodeURIComponent(atob(str).replace(/(.)/g, function (m, p) {
    var code = p.charCodeAt(0).toString(16).toUpperCase();
    if (code.length < 2) {
      code = '0' + code;
    }
    return '%' + code;
  }));
}

module.exports = function(str) {
  var output = str.replace(/-/g, "+").replace(/_/g, "/");
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += "==";
      break;
    case 3:
      output += "=";
      break;
    default:
      throw "Illegal base64url string!";
  }

  try{
    return b64DecodeUnicode(output);
  } catch (err) {
    return atob(output);
  }
};


/***/ }),

/***/ "./node_modules/jwt-decode/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/jwt-decode/lib/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base64_url_decode = __webpack_require__(/*! ./base64_url_decode */ "./node_modules/jwt-decode/lib/base64_url_decode.js");

function InvalidTokenError(message) {
  this.message = message;
}

InvalidTokenError.prototype = new Error();
InvalidTokenError.prototype.name = 'InvalidTokenError';

module.exports = function (token,options) {
  if (typeof token !== 'string') {
    throw new InvalidTokenError('Invalid token specified');
  }

  options = options || {};
  var pos = options.header === true ? 0 : 1;
  try {
    return JSON.parse(base64_url_decode(token.split('.')[pos]));
  } catch (e) {
    throw new InvalidTokenError('Invalid token specified: ' + e.message);
  }
};

module.exports.InvalidTokenError = InvalidTokenError;


/***/ }),

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AccessDeniedComponent = /** @class */ (function () {
    function AccessDeniedComponent() {
    }
    AccessDeniedComponent.prototype.ngOnInit = function () {
    };
    AccessDeniedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-access-denied',
            template: __webpack_require__(/*! raw-loader!./access-denied.component.html */ "./node_modules/raw-loader/index.js!./src/app/authentication/access-denied/access-denied.component.html"),
            styles: [__webpack_require__(/*! ./access-denied.component.css */ "./src/app/authentication/access-denied/access-denied.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AccessDeniedComponent);
    return AccessDeniedComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthenticationLayoutComponent = /** @class */ (function () {
    function AuthenticationLayoutComponent() {
    }
    AuthenticationLayoutComponent.prototype.ngOnInit = function () {
    };
    AuthenticationLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-authentication-layout',
            template: '<router-outlet></router-outlet>'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthenticationLayoutComponent);
    return AuthenticationLayoutComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication-layout.component */ "./src/app/authentication/authentication-layout.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/authentication/login/login.component.ts");
/* harmony import */ var _access_denied_access_denied_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./access-denied/access-denied.component */ "./src/app/authentication/access-denied/access-denied.component.ts");
/* harmony import */ var _core_services_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/services/auth-guard */ "./src/app/core/services/auth-guard.ts");







var routes = [
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
var AuthenticationRoutingModule = /** @class */ (function () {
    function AuthenticationRoutingModule() {
    }
    AuthenticationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthenticationRoutingModule);
    return AuthenticationRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication-routing.module */ "./src/app/authentication/authentication-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/authentication/login/login.component.ts");
/* harmony import */ var _authentication_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authentication-layout.component */ "./src/app/authentication/authentication-layout.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _access_denied_access_denied_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./access-denied/access-denied.component */ "./src/app/authentication/access-denied/access-denied.component.ts");








var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
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
    return AuthenticationModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.model = { username: '', password: '', rememberMe: false };
        this.error = '';
        this.returnUrl = null;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.authService.logout(false);
        // tslint:disable-next-line:no-string-literal
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
    };
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        console.log(form);
        this.error = '';
        this.authService.login(this.model)
            .subscribe(function (isLoggedIn) {
            if (isLoggedIn) {
                if (_this.returnUrl) {
                    _this.router.navigate([_this.returnUrl]);
                }
                else {
                    _this.router.navigate(['/dashboard/panel/list']);
                }
            }
        }, function (error) {
            console.error('Login error', error);
            if (error.status === 401) {
                _this.error = 'Invalid User name or Password. Please try again.';
            }
            else {
                _this.error = error.statusText + ": " + error.message;
            }
        });
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
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/core/models/auth-token-type.ts":
/*!************************************************!*\
  !*** ./src/app/core/models/auth-token-type.ts ***!
  \************************************************/
/*! exports provided: AuthTokenType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthTokenType", function() { return AuthTokenType; });
var AuthTokenType;
(function (AuthTokenType) {
    AuthTokenType[AuthTokenType["AccessToken"] = 0] = "AccessToken";
    AuthTokenType[AuthTokenType["RefreshToken"] = 1] = "RefreshToken";
})(AuthTokenType || (AuthTokenType = {}));


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
        this.permissionObjectKey = 'permission';
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var permissionData = route.data[this.permissionObjectKey];
        var returnUrl = state.url;
        return this.hasAuthUserAccessToThisRoute(permissionData, returnUrl);
    };
    AuthGuard.prototype.canActivateChild = function (childRoute, state) {
        var permissionData = childRoute.data[this.permissionObjectKey];
        var returnUrl = state.url;
        return this.hasAuthUserAccessToThisRoute(permissionData, returnUrl);
    };
    AuthGuard.prototype.canLoad = function (route) {
        if (route.data) {
            var permissionData = route.data[this.permissionObjectKey];
            var returnUrl = "/" + route.path;
            return this.hasAuthUserAccessToThisRoute(permissionData, returnUrl);
        }
        else {
            return true;
        }
    };
    AuthGuard.prototype.hasAuthUserAccessToThisRoute = function (permissionData, returnUrl) {
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
            var isInRole = this.authService.isAuthUserInRoles(permissionData.permittedRoles);
            if (isInRole) {
                return true;
            }
            this.showAccessDenied(returnUrl);
            return false;
        }
        if (Array.isArray(permissionData.deniedRoles)) {
            var isInRole = this.authService.isAuthUserInRoles(permissionData.deniedRoles);
            if (!isInRole) {
                return true;
            }
            this.showAccessDenied(returnUrl);
            return false;
        }
        return true;
    };
    AuthGuard.prototype.showAccessDenied = function (returnUrl) {
        // tslint:disable-next-line:object-literal-shorthand
        this.router.navigate(['/accessDenied'], { queryParams: { returnUrl: returnUrl } });
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.config */ "./src/app/core/services/app.config.ts");
/* harmony import */ var _api_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api-config.service */ "./src/app/core/services/api-config.service.ts");
/* harmony import */ var _token_store_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./token-store.service */ "./src/app/core/services/token-store.service.ts");
/* harmony import */ var _refresh_token_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./refresh-token.service */ "./src/app/core/services/refresh-token.service.ts");
/* harmony import */ var _models_auth_token_type__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../models/auth-token-type */ "./src/app/core/models/auth-token-type.ts");











var AuthService = /** @class */ (function () {
    function AuthService(http, router, appConfig, apiConfigService, tokenStoreService, refreshTokenService) {
        this.http = http;
        this.router = router;
        this.appConfig = appConfig;
        this.apiConfigService = apiConfigService;
        this.tokenStoreService = tokenStoreService;
        this.refreshTokenService = refreshTokenService;
        this.authStatusSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.authStatus$ = this.authStatusSource.asObservable();
    }
    AuthService.prototype.login = function (credentials) {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http
            .post(this.appConfig.apiEndpoint + "/" + this.apiConfigService.configuration.loginPath, credentials, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            _this.tokenStoreService.setRememberMe(credentials.rememberMe);
            if (!response) {
                console.error('There is no `{\'' + _this.apiConfigService.configuration.accessTokenObjectKey +
                    '\':\'...\',\'' + _this.apiConfigService.configuration.refreshTokenObjectKey + '\':\'...value...\'}` response after login.');
                _this.authStatusSource.next(false);
                return false;
            }
            _this.tokenStoreService.storeLoginSession(response);
            console.log('Logged-in user info', _this.getAuthUser);
            _this.refreshTokenService.scheduleRefreshtoken(true, true);
            _this.authStatusSource.next(true);
            return true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error); }));
    };
    AuthService.prototype.logout = function (navigateToHome) {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        var refreshToken = encodeURIComponent(this.tokenStoreService.getRawAuthToken(_models_auth_token_type__WEBPACK_IMPORTED_MODULE_10__["AuthTokenType"].RefreshToken));
        this.http
            .get(this.appConfig.apiEndpoint + "/" + this.apiConfigService.configuration.logoutPath + "?refreshToken=" + refreshToken, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response || {}; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
            _this.tokenStoreService.deleteAuthTokens();
            _this.refreshTokenService.unscheduleRefreshtoken(true);
            _this.authStatusSource.next(false);
            if (navigateToHome) {
                _this.router.navigate(['/']);
            }
        }))
            .subscribe(function (result) {
            console.log('logout', result);
        });
    };
    AuthService.prototype.isAuthUserInRoles = function (requiredRoles) {
        var user = this.getAuthUser();
        if (!user || !user.roles) {
            return false;
        }
        if (user.roles.indexOf(this.apiConfigService.configuration.adminRoleName.toLocaleLowerCase()) >= 0) {
            return true;
        }
        return requiredRoles.some(function (requiredRole) {
            if (user.roles) {
                return user.roles.indexOf(requiredRole.toLowerCase()) >= 0;
            }
            else {
                return false;
            }
        });
    };
    AuthService.prototype.isAuthUserLoggedIn = function () {
        return this.tokenStoreService.hasStoredAccessAndRefreshTokens() &&
            !this.tokenStoreService.isAccessTokenExpired();
    };
    AuthService.prototype.getAuthUser = function () {
        if (!this.isAuthUserLoggedIn()) {
            return null;
        }
        var decodedToken = this.tokenStoreService.getDecodedAccessToken();
        var roles = this.tokenStoreService.getDecodedTokenRoles();
        return Object.freeze({
            userId: decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'],
            userName: decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
            displayName: decodedToken.DisplayName,
            roles: roles
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_app_config__WEBPACK_IMPORTED_MODULE_6__["APP_CONFIG"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], Object, _api_config_service__WEBPACK_IMPORTED_MODULE_7__["ApiConfigService"],
            _token_store_service__WEBPACK_IMPORTED_MODULE_8__["TokenStoreService"],
            _refresh_token_service__WEBPACK_IMPORTED_MODULE_9__["RefreshTokenService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/services/browser-storage.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/services/browser-storage.service.ts ***!
  \**********************************************************/
/*! exports provided: BrowserStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserStorageService", function() { return BrowserStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BrowserStorageService = /** @class */ (function () {
    function BrowserStorageService() {
    }
    BrowserStorageService.prototype.getSession = function (key) {
        var data = window.sessionStorage.getItem(key);
        if (data) {
            return JSON.parse(data);
        }
        else {
            return null;
        }
    };
    BrowserStorageService.prototype.setSession = function (key, value) {
        var data = value === undefined ? '' : JSON.stringify(value);
        window.sessionStorage.setItem(key, data);
    };
    BrowserStorageService.prototype.removeSession = function (key) {
        window.sessionStorage.removeItem(key);
    };
    BrowserStorageService.prototype.removeAllSessions = function () {
        for (var key in window.sessionStorage) {
            if (window.sessionStorage.hasOwnProperty(key)) {
                this.removeSession(key);
            }
        }
    };
    BrowserStorageService.prototype.getLocal = function (key) {
        var data = window.localStorage.getItem(key);
        if (data) {
            return JSON.parse(data);
        }
        else {
            return null;
        }
    };
    BrowserStorageService.prototype.setLocal = function (key, value) {
        var data = value === undefined ? '' : JSON.stringify(value);
        window.localStorage.setItem(key, data);
    };
    BrowserStorageService.prototype.removeLocal = function (key) {
        window.localStorage.removeItem(key);
    };
    BrowserStorageService.prototype.removeAllLocals = function () {
        for (var key in window.localStorage) {
            if (window.localStorage.hasOwnProperty(key)) {
                this.removeLocal(key);
            }
        }
    };
    BrowserStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], BrowserStorageService);
    return BrowserStorageService;
}());



/***/ }),

/***/ "./src/app/core/services/refresh-token.service.ts":
/*!********************************************************!*\
  !*** ./src/app/core/services/refresh-token.service.ts ***!
  \********************************************************/
/*! exports provided: RefreshTokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshTokenService", function() { return RefreshTokenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _token_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./token-store.service */ "./src/app/core/services/token-store.service.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.config */ "./src/app/core/services/app.config.ts");
/* harmony import */ var _api_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api-config.service */ "./src/app/core/services/api-config.service.ts");
/* harmony import */ var _browser_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./browser-storage.service */ "./src/app/core/services/browser-storage.service.ts");
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils.service */ "./src/app/core/services/utils.service.ts");
/* harmony import */ var _models_auth_token_type__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../models/auth-token-type */ "./src/app/core/models/auth-token-type.ts");











var RefreshTokenService = /** @class */ (function () {
    function RefreshTokenService(tokenStorageService, appConfig, apiConfigService, http, browserStorageService, utilsService) {
        this.tokenStorageService = tokenStorageService;
        this.appConfig = appConfig;
        this.apiConfigService = apiConfigService;
        this.http = http;
        this.browserStorageService = browserStorageService;
        this.utilsService = utilsService;
        this.refreshTokenTimerCheckId = 'is_refreshToken_timer_started';
        this.refreshTokenSubscription = null;
    }
    RefreshTokenService.prototype.scheduleRefreshtoken = function (isAuthUserLoggedIn, calledFromLogin) {
        var _this = this;
        this.unscheduleRefreshtoken(false);
        if (!isAuthUserLoggedIn) {
            return;
        }
        var expDateUtc = this.tokenStorageService.getAccessTokenExpirationDateUtc();
        if (!expDateUtc) {
            throw new Error('This access token has not the "exp" property.');
        }
        var expiresAtUtc = expDateUtc.valueOf();
        var nowUtc = new Date().valueOf();
        var threeSeconds = 3000;
        var initialDelay = Math.max(threeSeconds, expiresAtUtc - nowUtc - threeSeconds);
        console.log('Initial scheduleRefreshToken Delay(ms)', initialDelay);
        var timerSource$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(initialDelay);
        this.refreshTokenSubscription = timerSource$.subscribe(function () {
            if (calledFromLogin) {
                _this.refreshToken(isAuthUserLoggedIn);
            }
            else {
                _this.scheduleRefreshtoken(isAuthUserLoggedIn, false);
            }
        });
        if (calledFromLogin) {
            this.setRefreshTokenTimerStarted();
        }
    };
    RefreshTokenService.prototype.setRefreshTokenTimerStarted = function () {
        this.browserStorageService.setLocal(this.refreshTokenTimerCheckId, { isStarted: true });
    };
    RefreshTokenService.prototype.unscheduleRefreshtoken = function (cancelTimerCheckToken) {
        if (this.refreshTokenSubscription) {
            this.refreshTokenSubscription.unsubscribe();
        }
        if (cancelTimerCheckToken) {
            this.deleteRefreshTokenTimerCheckId();
        }
    };
    RefreshTokenService.prototype.refreshToken = function (isAuthUserLoggedIn) {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        var model = { refreshToken: this.tokenStorageService.getRawAuthToken(_models_auth_token_type__WEBPACK_IMPORTED_MODULE_10__["AuthTokenType"].RefreshToken) };
        return this.http
            .post(this.appConfig.apiEndpoint + "/" + this.apiConfigService.configuration.refreshTokenPath, model, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response || {}; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error); }))
            .subscribe(function (result) {
            console.log('RefreshToken Result', result);
            _this.tokenStorageService.storeLoginSession(result);
            _this.scheduleRefreshtoken(isAuthUserLoggedIn, false);
        });
    };
    RefreshTokenService.prototype.deleteRefreshTokenTimerCheckId = function () {
        this.browserStorageService.removeLocal(this.refreshTokenTimerCheckId);
    };
    RefreshTokenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_app_config__WEBPACK_IMPORTED_MODULE_6__["APP_CONFIG"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_token_store_service__WEBPACK_IMPORTED_MODULE_5__["TokenStoreService"], Object, _api_config_service__WEBPACK_IMPORTED_MODULE_7__["ApiConfigService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _browser_storage_service__WEBPACK_IMPORTED_MODULE_8__["BrowserStorageService"],
            _utils_service__WEBPACK_IMPORTED_MODULE_9__["UtilsService"]])
    ], RefreshTokenService);
    return RefreshTokenService;
}());



/***/ }),

/***/ "./src/app/core/services/token-store.service.ts":
/*!******************************************************!*\
  !*** ./src/app/core/services/token-store.service.ts ***!
  \******************************************************/
/*! exports provided: TokenStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStoreService", function() { return TokenStoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _browser_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./browser-storage.service */ "./src/app/core/services/browser-storage.service.ts");
/* harmony import */ var _api_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api-config.service */ "./src/app/core/services/api-config.service.ts");
/* harmony import */ var _models_auth_token_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/auth-token-type */ "./src/app/core/models/auth-token-type.ts");
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils.service */ "./src/app/core/services/utils.service.ts");







var TokenStoreService = /** @class */ (function () {
    function TokenStoreService(browserStorageService, utilsService, apiConfigService) {
        this.browserStorageService = browserStorageService;
        this.utilsService = utilsService;
        this.apiConfigService = apiConfigService;
        this.rememberMeToken = 'rememberMe_token';
    }
    // برای بیرون کشیدن اطلاعات توکن از حافطه مرورگر
    TokenStoreService.prototype.getRawAuthToken = function (tokenType) {
        if (this.rememberMe()) {
            return this.browserStorageService.getLocal(_models_auth_token_type__WEBPACK_IMPORTED_MODULE_5__["AuthTokenType"][tokenType]);
        }
        else {
            return this.browserStorageService.getSession(_models_auth_token_type__WEBPACK_IMPORTED_MODULE_5__["AuthTokenType"][tokenType]);
        }
    };
    // برای دیکد کردن اطلاعات توکن ارسالی از سرور
    TokenStoreService.prototype.getDecodedAccessToken = function () {
        return jwt_decode__WEBPACK_IMPORTED_MODULE_2__(this.getRawAuthToken(_models_auth_token_type__WEBPACK_IMPORTED_MODULE_5__["AuthTokenType"].AccessToken));
    };
    // نمایش نام نمایشی کاربر
    TokenStoreService.prototype.getAuthUserDisplayName = function () {
        return this.getDecodedAccessToken().DisplayName;
    };
    // تشخیص تاریخ از بین رفتن اعتبار توکن
    TokenStoreService.prototype.getAccessTokenExpirationDateUtc = function () {
        var decode = this.getDecodedAccessToken();
        if (decode.exp === undefined) {
            return null;
        }
        var date = new Date(0); // The 0 sets the date to the epoch
        date.setUTCSeconds(decode.exp);
        return date;
    };
    // اگر اعتبار توکن تموم شده باشه boolean  برمیگردونه
    TokenStoreService.prototype.isAccessTokenExpired = function () {
        var expirationDateUtc = this.getAccessTokenExpirationDateUtc();
        if (!expirationDateUtc) {
            return true;
        }
        return !(expirationDateUtc.valueOf() > new Date().valueOf());
    };
    // ثبت توکن برای اساس مرابه خاطربسپار
    TokenStoreService.prototype.setToken = function (tokenType, tokenValue) {
        if (this.utilsService.isEmptyString(tokenValue)) {
            console.error(_models_auth_token_type__WEBPACK_IMPORTED_MODULE_5__["AuthTokenType"][tokenType] + " is null or empty.");
        }
        if (tokenType === _models_auth_token_type__WEBPACK_IMPORTED_MODULE_5__["AuthTokenType"].AccessToken && this.utilsService.isEmptyString(tokenValue)) {
            throw new Error('AccessToken can\'t be null or empty.');
        }
        if (this.rememberMe()) {
            this.browserStorageService.setLocal(_models_auth_token_type__WEBPACK_IMPORTED_MODULE_5__["AuthTokenType"][tokenType], tokenValue);
        }
        else {
            this.browserStorageService.setSession(_models_auth_token_type__WEBPACK_IMPORTED_MODULE_5__["AuthTokenType"][tokenType], tokenValue);
        }
    };
    TokenStoreService.prototype.getDecodedTokenRoles = function () {
        var decodedToken = this.getDecodedAccessToken();
        var roles = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
        if (!roles) {
            return null;
        }
        if (Array.isArray(roles)) {
            return roles.map(function (role) { return role.toLowerCase(); });
        }
        else {
            return [roles.toLowerCase()];
        }
    };
    // ذخیره توکن ها
    TokenStoreService.prototype.storeLoginSession = function (response) {
        this.setToken(_models_auth_token_type__WEBPACK_IMPORTED_MODULE_5__["AuthTokenType"].AccessToken, response[this.apiConfigService.configuration.accessTokenObjectKey]);
        this.setToken(_models_auth_token_type__WEBPACK_IMPORTED_MODULE_5__["AuthTokenType"].RefreshToken, response[this.apiConfigService.configuration.refreshTokenObjectKey]);
    };
    // حذف توکن های اعتبار سنجی
    TokenStoreService.prototype.deleteAuthTokens = function () {
        if (this.rememberMe()) {
            this.browserStorageService.removeLocal(_models_auth_token_type__WEBPACK_IMPORTED_MODULE_5__["AuthTokenType"][_models_auth_token_type__WEBPACK_IMPORTED_MODULE_5__["AuthTokenType"].AccessToken]);
            this.browserStorageService.removeLocal(_models_auth_token_type__WEBPACK_IMPORTED_MODULE_5__["AuthTokenType"][_models_auth_token_type__WEBPACK_IMPORTED_MODULE_5__["AuthTokenType"].RefreshToken]);
        }
        else {
            this.browserStorageService.removeSession(_models_auth_token_type__WEBPACK_IMPORTED_MODULE_5__["AuthTokenType"][_models_auth_token_type__WEBPACK_IMPORTED_MODULE_5__["AuthTokenType"].AccessToken]);
            this.browserStorageService.removeSession(_models_auth_token_type__WEBPACK_IMPORTED_MODULE_5__["AuthTokenType"][_models_auth_token_type__WEBPACK_IMPORTED_MODULE_5__["AuthTokenType"].RefreshToken]);
        }
        this.browserStorageService.removeLocal(this.rememberMeToken);
    };
    // آیا گزینه مرا به خاطر بسپار را کاربر انتخاب کرده است؟
    TokenStoreService.prototype.rememberMe = function () {
        return this.browserStorageService.getLocal(this.rememberMeToken) === true;
    };
    // مقدار دهی مرا به خاطر بسپار
    TokenStoreService.prototype.setRememberMe = function (value) {
        this.browserStorageService.setLocal(this.rememberMeToken, value);
    };
    // آیا مقدار توکنها ذخیره شده است؟
    TokenStoreService.prototype.hasStoredAccessAndRefreshTokens = function () {
        var accessToken = this.getRawAuthToken(_models_auth_token_type__WEBPACK_IMPORTED_MODULE_5__["AuthTokenType"].AccessToken);
        var refreshToken = this.getRawAuthToken(_models_auth_token_type__WEBPACK_IMPORTED_MODULE_5__["AuthTokenType"].RefreshToken);
        return !this.utilsService.isEmptyString(accessToken) && !this.utilsService.isEmptyString(refreshToken);
    };
    TokenStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_browser_storage_service__WEBPACK_IMPORTED_MODULE_3__["BrowserStorageService"],
            _utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"],
            _api_config_service__WEBPACK_IMPORTED_MODULE_4__["ApiConfigService"]])
    ], TokenStoreService);
    return TokenStoreService;
}());



/***/ }),

/***/ "./src/app/core/services/utils.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/utils.service.ts ***!
  \************************************************/
/*! exports provided: UtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return UtilsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UtilsService = /** @class */ (function () {
    function UtilsService() {
    }
    UtilsService.prototype.isEmptyString = function (value) {
        return !value || 0 === value.length;
    };
    UtilsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UtilsService);
    return UtilsService;
}());



/***/ })

}]);
//# sourceMappingURL=authentication-authentication-module-es5.js.map