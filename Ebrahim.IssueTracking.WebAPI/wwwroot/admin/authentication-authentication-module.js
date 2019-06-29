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

module.exports = "<!-- <mat-toolbar dir=rtl color=\"primary\" style=\"height: 100vh;\">سیستم پشتیبانی</mat-toolbar>\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"login-main\">\n    <mat-card dir=rtl>\n        <mat-card-header>\n            <mat-card-title>ورود</mat-card-title>\n        </mat-card-header>\n        <form (ngSubmit)=\"onSubmit(form)\" #form=\"ngForm\"> \n            <mat-card-content fxLayout=\"column\">\n                <mat-form-field>\n                    <input matInput placeholder=\"نام‌کاربری\" #username=\"ngModel\" required [(ngModel)]=\"model.username\">\n                    <mat-error *ngIf=\"username.invalid && username.touched\">نام‌کاربری نا معتبر می‌باشد.</mat-error>\n                </mat-form-field>\n                <mat-form-field>\n                    <input type=\"password\" matInput placeholder=\"رمزعبور\" #password=\"ngModel\" required [(ngModel)]=\"model.password\">\n                    <mat-error *ngIf=\"password.invalid && password.touched\">رمزعبور نا معتبر می‌باشد.</mat-error>\n                </mat-form-field>\n                <mat-form-field>\n                     <input type=\"checkbox\"  #rememberMe=\"ngModel\" matInput [(ngModel)]=\"model.rememberMe\">مرا به ‌خاطر بسپار \n                     <mat-checkbox #rememberMe=\"ngModel\" matInput [(ngModel)]=\"model.rememberMe\"></mat-checkbox>\n                 </mat-form-field> \n            </mat-card-content>\n            <mat-card-actions>\n                <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"form.invalid \">ورود</button>\n            </mat-card-actions>\n        </form>\n    </mat-card>\n</div> -->\n\n<mat-toolbar color=\"primary\">\n    <span>سیستم پشتیبانی</span>\n</mat-toolbar>\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"login-main\">\n    <mat-card class=\"my-card\">\n        <mat-card-header>\n            <mat-card-title>ورود</mat-card-title>\n        </mat-card-header>\n        <form (ngSubmit)=\"onSubmit(form)\" #form=\"ngForm\">\n            <mat-card-content fxLayout=\"column\" dir=\"rtl\">\n                <mat-form-field>\n                    <input matInput placeholder=\"نام‌کاربری\" name=\"username\" #username=\"ngModel\" required\n                        [(ngModel)]=\"model.username\">\n                    <mat-error *ngIf=\"username.invalid && username.touched\">نام‌کاربری نامعتبر می‌باشد.</mat-error>\n                </mat-form-field>\n                <mat-form-field>\n                    <input type=\"password\" matInput placeholder=\"رمزعبور\" name=\"password\" #password=\"ngModel\" required\n                        [(ngModel)]=\"model.password\">\n                    <mat-error *ngIf=\"password.invalid && password.touched\">رمزعبور نامعتبر می‌باشد.</mat-error>\n                </mat-form-field>\n                 <!-- <mat-form-field> -->\n                     <!-- <input type=\"checkbox\" matInput name=\"rememberMe\" #rememberMe=\"ngModel\" matInput [(ngModel)]=\"model.rememberMe\">مرا به ‌خاطر بسپار  -->\n                     <mat-checkbox #rememberMe=\"ngModel\" name=\"rememberMe\" [(ngModel)]=\"model.rememberMe\">مرا به ‌خاطر بسپار</mat-checkbox>\n                <!-- </mat-form-field> -->\n            </mat-card-content>\n            <mat-card-actions>\n                <button type=\"submit\" mat-raised-button [disabled]=\"form.invalid \" color=\"primary\">ورود</button>\n            </mat-card-actions>\n        </form>\n    </mat-card>\n</div>"

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





const routes = [
    {
        path: 'user',
        component: _authentication_layout_component__WEBPACK_IMPORTED_MODULE_3__["AuthenticationLayoutComponent"],
        children: [
            { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], pathMatch: 'full' }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.config */ "./src/app/core/services/app.config.ts");
/* harmony import */ var _api_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api-config.service */ "./src/app/core/services/api-config.service.ts");
/* harmony import */ var _token_store_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./token-store.service */ "./src/app/core/services/token-store.service.ts");
/* harmony import */ var _refresh_token_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./refresh-token.service */ "./src/app/core/services/refresh-token.service.ts");
/* harmony import */ var _models_auth_token_type__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../models/auth-token-type */ "./src/app/core/models/auth-token-type.ts");











let AuthService = class AuthService {
    constructor(http, router, appConfig, apiConfigService, tokenStoreService, refreshTokenService) {
        this.http = http;
        this.router = router;
        this.appConfig = appConfig;
        this.apiConfigService = apiConfigService;
        this.tokenStoreService = tokenStoreService;
        this.refreshTokenService = refreshTokenService;
        this.authStatusSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.authStatus$ = this.authStatusSource.asObservable();
    }
    login(credentials) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http
            .post(`${this.appConfig.apiEndpoint}/${this.apiConfigService.configuration.loginPath}`, credentials, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
            this.tokenStoreService.setRememberMe(credentials.rememberMe);
            if (!response) {
                console.error('There is no `{\'' + this.apiConfigService.configuration.accessTokenObjectKey +
                    '\':\'...\',\'' + this.apiConfigService.configuration.refreshTokenObjectKey + '\':\'...value...\'}` response after login.');
                this.authStatusSource.next(false);
                return false;
            }
            this.tokenStoreService.storeLoginSession(response);
            console.log('Logged-in user info', this.getAuthUser);
            this.refreshTokenService.scheduleRefreshtoken(true, true);
            this.authStatusSource.next(true);
            return true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error)));
    }
    logout(navigateToHome) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        const refreshToken = encodeURIComponent(this.tokenStoreService.getRawAuthToken(_models_auth_token_type__WEBPACK_IMPORTED_MODULE_10__["AuthTokenType"].RefreshToken));
        this.http
            .get(`${this.appConfig.apiEndpoint}/${this.apiConfigService.configuration.logoutPath}?refreshToken=${refreshToken}`, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => response || {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => {
            this.tokenStoreService.deleteAuthTokens();
            this.refreshTokenService.unscheduleRefreshtoken(true);
            this.authStatusSource.next(false);
            if (navigateToHome) {
                this.router.navigate(['/']);
            }
        }))
            .subscribe(result => {
            console.log('logout', result);
        });
    }
    isAuthUserLoggedIn() {
        return this.tokenStoreService.hasStoredAccessAndRefreshTokens() &&
            !this.tokenStoreService.isAccessTokenExpired();
    }
    getAuthUser() {
        if (!this.isAuthUserLoggedIn()) {
            return null;
        }
        const decodedToken = this.tokenStoreService.getDecodedAccessToken();
        const roles = this.tokenStoreService.getDecodedTokenRoles();
        return Object.freeze({
            userId: decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'],
            userName: decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
            displayName: decodedToken.DisplayName,
            roles
        });
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BrowserStorageService = class BrowserStorageService {
    getSession(key) {
        const data = window.sessionStorage.getItem(key);
        if (data) {
            return JSON.parse(data);
        }
        else {
            return null;
        }
    }
    setSession(key, value) {
        const data = value === undefined ? '' : JSON.stringify(value);
        window.sessionStorage.setItem(key, data);
    }
    removeSession(key) {
        window.sessionStorage.removeItem(key);
    }
    removeAllSessions() {
        for (const key in window.sessionStorage) {
            if (window.sessionStorage.hasOwnProperty(key)) {
                this.removeSession(key);
            }
        }
    }
    getLocal(key) {
        const data = window.localStorage.getItem(key);
        if (data) {
            return JSON.parse(data);
        }
        else {
            return null;
        }
    }
    setLocal(key, value) {
        const data = value === undefined ? '' : JSON.stringify(value);
        window.localStorage.setItem(key, data);
    }
    removeLocal(key) {
        window.localStorage.removeItem(key);
    }
    removeAllLocals() {
        for (const key in window.localStorage) {
            if (window.localStorage.hasOwnProperty(key)) {
                this.removeLocal(key);
            }
        }
    }
};
BrowserStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BrowserStorageService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _token_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./token-store.service */ "./src/app/core/services/token-store.service.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.config */ "./src/app/core/services/app.config.ts");
/* harmony import */ var _api_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api-config.service */ "./src/app/core/services/api-config.service.ts");
/* harmony import */ var _browser_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./browser-storage.service */ "./src/app/core/services/browser-storage.service.ts");
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils.service */ "./src/app/core/services/utils.service.ts");
/* harmony import */ var _models_auth_token_type__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../models/auth-token-type */ "./src/app/core/models/auth-token-type.ts");











let RefreshTokenService = class RefreshTokenService {
    constructor(tokenStorageService, appConfig, apiConfigService, http, browserStorageService, utilsService) {
        this.tokenStorageService = tokenStorageService;
        this.appConfig = appConfig;
        this.apiConfigService = apiConfigService;
        this.http = http;
        this.browserStorageService = browserStorageService;
        this.utilsService = utilsService;
        this.refreshTokenTimerCheckId = 'is_refreshToken_timer_started';
        this.refreshTokenSubscription = null;
    }
    scheduleRefreshtoken(isAuthUserLoggedIn, calledFromLogin) {
        this.unscheduleRefreshtoken(false);
        if (!isAuthUserLoggedIn) {
            return;
        }
        const expDateUtc = this.tokenStorageService.getAccessTokenExpirationDateUtc();
        if (!expDateUtc) {
            throw new Error('This access token has not the "exp" property.');
        }
        const expiresAtUtc = expDateUtc.valueOf();
        const nowUtc = new Date().valueOf();
        const threeSeconds = 3000;
        const initialDelay = Math.max(threeSeconds, expiresAtUtc - nowUtc - threeSeconds);
        console.log('Initial scheduleRefreshToken Delay(ms)', initialDelay);
        const timerSource$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(initialDelay);
        this.refreshTokenSubscription = timerSource$.subscribe(() => {
            if (calledFromLogin) {
                this.refreshToken(isAuthUserLoggedIn);
            }
            else {
                this.scheduleRefreshtoken(isAuthUserLoggedIn, false);
            }
        });
        if (calledFromLogin) {
            this.setRefreshTokenTimerStarted();
        }
    }
    setRefreshTokenTimerStarted() {
        this.browserStorageService.setLocal(this.refreshTokenTimerCheckId, { isStarted: true });
    }
    unscheduleRefreshtoken(cancelTimerCheckToken) {
        if (this.refreshTokenSubscription) {
            this.refreshTokenSubscription.unsubscribe();
        }
        if (cancelTimerCheckToken) {
            this.deleteRefreshTokenTimerCheckId();
        }
    }
    refreshToken(isAuthUserLoggedIn) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        const model = { refreshToken: this.tokenStorageService.getRawAuthToken(_models_auth_token_type__WEBPACK_IMPORTED_MODULE_10__["AuthTokenType"].RefreshToken) };
        return this.http
            .post(`${this.appConfig.apiEndpoint}/${this.apiConfigService.configuration.refreshTokenPath}`, model, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => response || {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error)))
            .subscribe(result => {
            console.log('RefreshToken Result', result);
            this.tokenStorageService.storeLoginSession(result);
            this.scheduleRefreshtoken(isAuthUserLoggedIn, false);
        });
    }
    deleteRefreshTokenTimerCheckId() {
        this.browserStorageService.removeLocal(this.refreshTokenTimerCheckId);
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _browser_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./browser-storage.service */ "./src/app/core/services/browser-storage.service.ts");
/* harmony import */ var _api_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api-config.service */ "./src/app/core/services/api-config.service.ts");
/* harmony import */ var _models_auth_token_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/auth-token-type */ "./src/app/core/models/auth-token-type.ts");
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils.service */ "./src/app/core/services/utils.service.ts");







let TokenStoreService = class TokenStoreService {
    constructor(browserStorageService, utilsService, apiConfigService) {
        this.browserStorageService = browserStorageService;
        this.utilsService = utilsService;
        this.apiConfigService = apiConfigService;
        this.rememberMeToken = 'rememberMe_token';
    }
    // برای بیرون کشیدن اطلاعات توکن از حافطه مرورگر
    getRawAuthToken(tokenType) {
        if (this.rememberMe()) {
            return this.browserStorageService.getLocal(_models_auth_token_type__WEBPACK_IMPORTED_MODULE_5__["AuthTokenType"][tokenType]);
        }
        else {
            return this.browserStorageService.getSession(_models_auth_token_type__WEBPACK_IMPORTED_MODULE_5__["AuthTokenType"][tokenType]);
        }
    }
    // برای دیکد کردن اطلاعات توکن ارسالی از سرور
    getDecodedAccessToken() {
        return jwt_decode__WEBPACK_IMPORTED_MODULE_2__(this.getRawAuthToken(_models_auth_token_type__WEBPACK_IMPORTED_MODULE_5__["AuthTokenType"].AccessToken));
    }
    // نمایش نام نمایشی کاربر
    getAuthUserDisplayName() {
        return this.getDecodedAccessToken().DisplayName;
    }
    // تشخیص تاریخ از بین رفتن اعتبار توکن
    getAccessTokenExpirationDateUtc() {
        const decode = this.getDecodedAccessToken();
        if (decode.exp === undefined) {
            return null;
        }
        const date = new Date(0); // The 0 sets the date to the epoch
        date.setUTCSeconds(decode.exp);
        return date;
    }
    // اگر اعتبار توکن تموم شده باشه boolean  برمیگردونه
    isAccessTokenExpired() {
        const expirationDateUtc = this.getAccessTokenExpirationDateUtc();
        if (!expirationDateUtc) {
            return true;
        }
        return !(expirationDateUtc.valueOf() > new Date().valueOf());
    }
    // ثبت توکن برای اساس مرابه خاطربسپار
    setToken(tokenType, tokenValue) {
        if (this.utilsService.isEmptyString(tokenValue)) {
            console.error(`${_models_auth_token_type__WEBPACK_IMPORTED_MODULE_5__["AuthTokenType"][tokenType]} is null or empty.`);
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
    }
    getDecodedTokenRoles() {
        const decodedToken = this.getDecodedAccessToken();
        const roles = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
        if (!roles) {
            return null;
        }
        if (Array.isArray(roles)) {
            return roles.map(role => role.toLowerCase());
        }
        else {
            return [roles.toLowerCase()];
        }
    }
    // ذخیره توکن ها
    storeLoginSession(response) {
        this.setToken(_models_auth_token_type__WEBPACK_IMPORTED_MODULE_5__["AuthTokenType"].AccessToken, response[this.apiConfigService.configuration.accessTokenObjectKey]);
        this.setToken(_models_auth_token_type__WEBPACK_IMPORTED_MODULE_5__["AuthTokenType"].RefreshToken, response[this.apiConfigService.configuration.refreshTokenObjectKey]);
    }
    // حذف توکن های اعتبار سنجی
    deleteAuthTokens() {
        if (this.rememberMe()) {
            this.browserStorageService.removeLocal(_models_auth_token_type__WEBPACK_IMPORTED_MODULE_5__["AuthTokenType"][_models_auth_token_type__WEBPACK_IMPORTED_MODULE_5__["AuthTokenType"].AccessToken]);
            this.browserStorageService.removeLocal(_models_auth_token_type__WEBPACK_IMPORTED_MODULE_5__["AuthTokenType"][_models_auth_token_type__WEBPACK_IMPORTED_MODULE_5__["AuthTokenType"].RefreshToken]);
        }
        else {
            this.browserStorageService.removeSession(_models_auth_token_type__WEBPACK_IMPORTED_MODULE_5__["AuthTokenType"][_models_auth_token_type__WEBPACK_IMPORTED_MODULE_5__["AuthTokenType"].AccessToken]);
            this.browserStorageService.removeSession(_models_auth_token_type__WEBPACK_IMPORTED_MODULE_5__["AuthTokenType"][_models_auth_token_type__WEBPACK_IMPORTED_MODULE_5__["AuthTokenType"].RefreshToken]);
        }
        this.browserStorageService.removeLocal(this.rememberMeToken);
    }
    // آیا گزینه مرا به خاطر بسپار را کاربر انتخاب کرده است؟
    rememberMe() {
        return this.browserStorageService.getLocal(this.rememberMeToken) === true;
    }
    // مقدار دهی مرا به خاطر بسپار
    setRememberMe(value) {
        this.browserStorageService.setLocal(this.rememberMeToken, value);
    }
    // آیا مقدار توکنها ذخیره شده است؟
    hasStoredAccessAndRefreshTokens() {
        const accessToken = this.getRawAuthToken(_models_auth_token_type__WEBPACK_IMPORTED_MODULE_5__["AuthTokenType"].AccessToken);
        const refreshToken = this.getRawAuthToken(_models_auth_token_type__WEBPACK_IMPORTED_MODULE_5__["AuthTokenType"].RefreshToken);
        return !this.utilsService.isEmptyString(accessToken) && !this.utilsService.isEmptyString(refreshToken);
    }
};
TokenStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_browser_storage_service__WEBPACK_IMPORTED_MODULE_3__["BrowserStorageService"],
        _utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"],
        _api_config_service__WEBPACK_IMPORTED_MODULE_4__["ApiConfigService"]])
], TokenStoreService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UtilsService = class UtilsService {
    constructor() { }
    isEmptyString(value) {
        return !value || 0 === value.length;
    }
};
UtilsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], UtilsService);



/***/ })

}]);
//# sourceMappingURL=authentication-authentication-module.js.map