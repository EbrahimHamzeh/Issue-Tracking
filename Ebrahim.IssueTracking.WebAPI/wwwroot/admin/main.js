(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./authentication/authentication.module": [
		"./src/app/authentication/authentication.module.ts",
		"authentication-authentication-module"
	],
	"./panel/dashboard/dashboard.module": [
		"./src/app/panel/dashboard/dashboard.module.ts",
		"panel-dashboard-dashboard-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/Layout/panel-layout/panel-layout.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/Layout/panel-layout/panel-layout.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-menu></app-header-menu>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/component/header-menu/header-menu.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/component/header-menu/header-menu.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 100vh;\">\n    <mat-toolbar color=\"primary\" dir=\"rtl\">\n      <button mat-button [matMenuTriggerFor]=\"menu\">Menu</button>\n      <mat-menu #menu=\"matMenu\">\n        <button mat-menu-item>Item 1</button>\n        <button mat-menu-item>Item 2</button>\n      </mat-menu>\n      <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n      <mat-menu #menu=\"matMenu\">\n        <button mat-menu-item>\n          <mat-icon>dialpad</mat-icon>\n          <span>Redial</span>\n        </button>\n        <button mat-menu-item disabled>\n          <mat-icon>voicemail</mat-icon>\n          <span>Check voice mail</span>\n        </button>\n        <button mat-menu-item>\n          <mat-icon>notifications_off</mat-icon>\n          <span>Disable alerts</span>\n        </button>\n      </mat-menu>\n      <button mat-button [matMenuTriggerFor]=\"animals\">Animal index</button>\n  \n      <mat-menu #animals=\"matMenu\">\n        <button mat-menu-item [matMenuTriggerFor]=\"vertebrates\">Vertebrates</button>\n        <button mat-menu-item [matMenuTriggerFor]=\"invertebrates\">Invertebrates</button>\n      </mat-menu>\n  \n      <mat-menu #vertebrates=\"matMenu\">\n        <button mat-menu-item [matMenuTriggerFor]=\"fish\">Fishes</button>\n        <button mat-menu-item [matMenuTriggerFor]=\"amphibians\">Amphibians</button>\n        <button mat-menu-item [matMenuTriggerFor]=\"reptiles\">Reptiles</button>\n        <button mat-menu-item>Birds</button>\n        <button mat-menu-item>Mammals</button>\n      </mat-menu>\n  \n      <mat-menu #invertebrates=\"matMenu\">\n        <button mat-menu-item>Insects</button>\n        <button mat-menu-item>Molluscs</button>\n        <button mat-menu-item>Crustaceans</button>\n        <button mat-menu-item>Corals</button>\n        <button mat-menu-item>Arachnids</button>\n        <button mat-menu-item>Velvet worms</button>\n        <button mat-menu-item>Horseshoe crabs</button>\n      </mat-menu>\n  \n      <mat-menu #fish=\"matMenu\">\n        <button mat-menu-item>Baikal oilfish</button>\n        <button mat-menu-item>Bala shark</button>\n        <button mat-menu-item>Ballan wrasse</button>\n        <button mat-menu-item>Bamboo shark</button>\n        <button mat-menu-item>Banded killifish</button>\n      </mat-menu>\n  \n      <mat-menu #amphibians=\"matMenu\">\n        <button mat-menu-item>Sonoran desert toad</button>\n        <button mat-menu-item>Western toad</button>\n        <button mat-menu-item>Arroyo toad</button>\n        <button mat-menu-item>Yosemite toad</button>\n      </mat-menu>\n  \n      <mat-menu #reptiles=\"matMenu\">\n        <button mat-menu-item>Banded Day Gecko</button>\n        <button mat-menu-item>Banded Gila Monster</button>\n        <button mat-menu-item>Black Tree Monitor</button>\n        <button mat-menu-item>Blue Spiny Lizard</button>\n        <button mat-menu-item disabled>Velociraptor</button>\n      </mat-menu>\n  \n      <span class=\"example-spacer\"></span>\n  \n      <div fxShow=\"true\" fxHide.lt-md=\"true\">\n        <a href=\"#\" mat-button>کاربران</a>\n        <a href=\"#\" mat-button>کارشناسان</a>\n        <a href=\"#\" mat-button>تیکت‌ها</a>\n        <a [routerLink]=\"['/dashboard/panel/list'] \"mat-button>داشبورد</a>\n        <a href=\"#\" mat-button>تنظیمات</a>\n        <a (click)=\"logout()\" mat-button>خروج</a>\n        <mat-menu #menu=\"matMenu\">\n          <button mat-menu-item>\n            <mat-icon>dialpad</mat-icon>\n            <span>Redial</span>\n          </button>\n          <button mat-menu-item disabled>\n            <mat-icon>voicemail</mat-icon>\n            <span>Check voice mail</span>\n          </button>\n          <button mat-menu-item>\n            <mat-icon>notifications_off</mat-icon>\n            <span>Disable alerts</span>\n          </button>\n        </mat-menu>\n      </div>\n      <span>سیستم پشتیبانی</span>\n    </mat-toolbar>\n  </div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    { path: 'authentication', loadChildren: './authentication/authentication.module#AuthenticationModule' },
    { path: 'dashboard', loadChildren: './panel/dashboard/dashboard.module#DashboardModule' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'admin';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: '<router-outlet></router-outlet>'
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/auth.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/core/auth.interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_token_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/token-store.service */ "./src/app/core/services/token-store.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_auth_token_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/auth-token-type */ "./src/app/core/models/auth-token-type.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let AuthInterceptor = class AuthInterceptor {
    constructor(tokenStorageService, router) {
        this.tokenStorageService = tokenStorageService;
        this.router = router;
        this.delayBetweenRetriesMs = 1000;
        this.numberOfRetries = 3;
        this.authorizationHeader = 'Authorization';
    }
    intercept(request, next) {
        const accessToken = this.tokenStorageService.getRawAuthToken(_models_auth_token_type__WEBPACK_IMPORTED_MODULE_5__["AuthTokenType"].AccessToken);
        if (accessToken) {
            request = request.clone({
                headers: request.headers.set(this.authorizationHeader, `Bearer ${accessToken}`)
            });
            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retryWhen"])(errors => errors.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])((error, retryAttempt) => {
                if (retryAttempt === this.numberOfRetries - 1) {
                    console.log(`HTTP call '${request.method} ${request.url}' failed after ${this.numberOfRetries} retries.`);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error); // no retry
                }
                switch (error.status) {
                    case 400:
                    case 404:
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error); // no retry
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(error); // retry
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["delay"])(this.delayBetweenRetriesMs), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(this.numberOfRetries))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])((error, caught) => {
                console.error({ error, caught });
                if (error.status === 401 || error.status === 403) {
                    const newRequest = this.getNewAuthRequest(request);
                    if (newRequest) {
                        console.log('Try new AuthRequest ...');
                        return next.handle(newRequest);
                    }
                    this.router.navigate(['/authentication/user/accessDenied']);
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
            }));
        }
        else {
            // login page
            return next.handle(request);
        }
    }
    getNewAuthRequest(request) {
        const newStoredToken = this.tokenStorageService.getRawAuthToken(_models_auth_token_type__WEBPACK_IMPORTED_MODULE_5__["AuthTokenType"].AccessToken);
        const requestAccessTokenHeader = request.headers.get(this.authorizationHeader);
        if (!newStoredToken || !requestAccessTokenHeader) {
            // tslint:disable-next-line:max-line-length
            console.log('There is no new AccessToken.', {
                // tslint:disable-next-line:object-literal-shorthand
                requestAccessTokenHeader: requestAccessTokenHeader,
                // tslint:disable-next-line:object-literal-shorthand
                newStoredToken: newStoredToken
            });
            return null;
        }
        const newAccessTokenHeader = `Bearer ${newStoredToken}`;
        if (requestAccessTokenHeader === newAccessTokenHeader) {
            // tslint:disable-next-line:max-line-length
            console.log('There is no new AccessToken.', {
                // tslint:disable-next-line:object-literal-shorthand
                requestAccessTokenHeader: requestAccessTokenHeader,
                // tslint:disable-next-line:object-literal-shorthand
                newAccessTokenHeader: newAccessTokenHeader
            });
            return null;
        }
        return request.clone({ headers: request.headers.set(this.authorizationHeader, newAccessTokenHeader) });
    }
};
AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_token_store_service__WEBPACK_IMPORTED_MODULE_2__["TokenStoreService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], AuthInterceptor);



/***/ }),

/***/ "./src/app/core/core-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/core/core-routing.module.ts ***!
  \*********************************************/
/*! exports provided: CoreRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreRoutingModule", function() { return CoreRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let CoreRoutingModule = class CoreRoutingModule {
};
CoreRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CoreRoutingModule);



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _core_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core-routing.module */ "./src/app/core/core-routing.module.ts");
/* harmony import */ var _services_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/app.config */ "./src/app/core/services/app.config.ts");
/* harmony import */ var _services_api_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/api-config.service */ "./src/app/core/services/api-config.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.interceptor */ "./src/app/core/auth.interceptor.ts");
/* harmony import */ var _services_xsrf_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/xsrf.interceptor */ "./src/app/core/services/xsrf.interceptor.ts");









let CoreModule = class CoreModule {
    constructor(core) {
        if (core) {
            throw new Error('CoreModule should be imported ONLY in AppModule.');
        }
    }
};
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _core_routing_module__WEBPACK_IMPORTED_MODULE_3__["CoreRoutingModule"]
        ],
        exports: [
        // components that are used in app.component.ts will be listed here.
        ],
        declarations: [
        // components that are used in app.component.ts will be listed here.
        ],
        providers: [
            /* ``No`` global singleton services of the whole app should be listed here anymore!
               Since they'll be already provided in AppModule using the `tree-shakable providers` of Angular 6.x+ (providedIn: 'root').
               This new feature allows cleaning up the providers section from the CoreModule.
               But if you want to provide something with an InjectionToken other that its class, you still have to use this section.
            */
            {
                provide: _services_app_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONFIG"],
                useValue: _services_app_config__WEBPACK_IMPORTED_MODULE_4__["AppConfig"]
            },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                useClass: _services_xsrf_interceptor__WEBPACK_IMPORTED_MODULE_8__["XsrfInterceptor"],
                multi: true
            },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                useClass: _auth_interceptor__WEBPACK_IMPORTED_MODULE_7__["AuthInterceptor"],
                multi: true
            },
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
                useFactory: (config) => () => config.loadApiConfig(),
                deps: [_services_api_config_service__WEBPACK_IMPORTED_MODULE_5__["ApiConfigService"]],
                multi: true
            }
        ]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [CoreModule])
], CoreModule);



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

/***/ "./src/app/core/services/api-config.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/services/api-config.service.ts ***!
  \*****************************************************/
/*! exports provided: ApiConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiConfigService", function() { return ApiConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.config */ "./src/app/core/services/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let ApiConfigService = class ApiConfigService {
    constructor(injector, appConfig) {
        this.injector = injector;
        this.appConfig = appConfig;
        this.config = null;
    }
    loadApiConfig() {
        const http = this.injector.get(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]);
        const url = `${this.appConfig.apiEndpoint}/${this.appConfig.apiSettingsPath}`;
        return http.get(url)
            .toPromise()
            .then(config => {
            this.config = config;
            console.log('ApiConfig', this.config);
        })
            .catch(err => {
            console.error(`Failed to loadApiConfig(). Make sure ${url} is accessible.`, this.config);
            return Promise.reject(err);
        });
    }
    get configuration() {
        if (!this.config) {
            throw new Error('Attempted to access configuration property before configuration data was loaded.');
        }
        return this.config;
    }
};
ApiConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], Object])
], ApiConfigService);



/***/ }),

/***/ "./src/app/core/services/app.config.ts":
/*!*********************************************!*\
  !*** ./src/app/core/services/app.config.ts ***!
  \*********************************************/
/*! exports provided: APP_CONFIG, AppConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_CONFIG", function() { return APP_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfig", function() { return AppConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

let APP_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('app.config');
const AppConfig = {
    apiEndpoint: '/api',
    apiSettingsPath: 'ApiSettings'
};


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
                this.router.navigate(['/authentication/user/login']);
            }
        }))
            .subscribe(result => {
            console.log('logout', result);
        });
    }
    isAuthUserInRoles(requiredRoles) {
        const user = this.getAuthUser();
        if (!user || !user.roles) {
            return false;
        }
        if (user.roles.indexOf(this.apiConfigService.configuration.adminRoleName.toLocaleLowerCase()) >= 0) {
            return true;
        }
        return requiredRoles.some(requiredRole => {
            if (user.roles) {
                return user.roles.indexOf(requiredRole.toLowerCase()) >= 0;
            }
            else {
                return false;
            }
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



/***/ }),

/***/ "./src/app/core/services/xsrf.interceptor.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/xsrf.interceptor.ts ***!
  \***************************************************/
/*! exports provided: XsrfInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XsrfInterceptor", function() { return XsrfInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let XsrfInterceptor = class XsrfInterceptor {
    constructor(tokenExtractor) {
        this.tokenExtractor = tokenExtractor;
    }
    intercept(request, next) {
        /*
            const lcUrl = request.url.toLowerCase();
            if (request.method === "GET" || request.method === "HEAD" ||
              lcUrl.startsWith("http://") || lcUrl.startsWith("https://")) {
              console.log("Original HttpXsrfInterceptor skips both non-mutating requests and absolute URLs.");
              console.log("Skipped request", { lcUrl: lcUrl, method: request.method });
            }
        */
        if (request.method === 'POST') {
            const headerName = 'X-XSRF-TOKEN';
            const token = this.tokenExtractor.getToken();
            if (token && !request.headers.has(headerName)) {
                request = request.clone({
                    headers: request.headers.set(headerName, token)
                });
            }
        }
        return next.handle(request);
    }
};
XsrfInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpXsrfTokenExtractor"]])
], XsrfInterceptor);



/***/ }),

/***/ "./src/app/shared/Layout/panel-layout/panel-layout.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/shared/Layout/panel-layout/panel-layout.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\r\n  padding: 0 14px;\r\n}\r\n\r\n.example-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL0xheW91dC9wYW5lbC1sYXlvdXQvcGFuZWwtbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9MYXlvdXQvcGFuZWwtbGF5b3V0L3BhbmVsLWxheW91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtaWNvbiB7XHJcbiAgcGFkZGluZzogMCAxNHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/shared/Layout/panel-layout/panel-layout.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/Layout/panel-layout/panel-layout.component.ts ***!
  \**********************************************************************/
/*! exports provided: PanelLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelLayoutComponent", function() { return PanelLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PanelLayoutComponent = class PanelLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
PanelLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-panel-layout',
        template: __webpack_require__(/*! raw-loader!./panel-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/Layout/panel-layout/panel-layout.component.html"),
        styles: [__webpack_require__(/*! ./panel-layout.component.css */ "./src/app/shared/Layout/panel-layout/panel-layout.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PanelLayoutComponent);



/***/ }),

/***/ "./src/app/shared/component/header-menu/header-menu.component.css":
/*!************************************************************************!*\
  !*** ./src/app/shared/component/header-menu/header-menu.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvaGVhZGVyLW1lbnUvaGVhZGVyLW1lbnUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/component/header-menu/header-menu.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/component/header-menu/header-menu.component.ts ***!
  \***********************************************************************/
/*! exports provided: HeaderMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderMenuComponent", function() { return HeaderMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");



let HeaderMenuComponent = class HeaderMenuComponent {
    constructor(authService) {
        this.authService = authService;
        this.isLoggedIn = false;
        this.subscription = null;
        this.displayName = '';
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
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    logout() {
        this.authService.logout(true);
    }
};
HeaderMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header-menu',
        template: __webpack_require__(/*! raw-loader!./header-menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/component/header-menu/header-menu.component.html"),
        styles: [__webpack_require__(/*! ./header-menu.component.css */ "./src/app/shared/component/header-menu/header-menu.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], HeaderMenuComponent);



/***/ }),

/***/ "./src/app/shared/material/material.module.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/material/material.module.ts ***!
  \****************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"]
        ],
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"]
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material/material.module */ "./src/app/shared/material/material.module.ts");
/* harmony import */ var _Layout_panel_layout_panel_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Layout/panel-layout/panel-layout.component */ "./src/app/shared/Layout/panel-layout/panel-layout.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _component_header_menu_header_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/header-menu/header-menu.component */ "./src/app/shared/component/header-menu/header-menu.component.ts");

var SharedModule_1;









let SharedModule = SharedModule_1 = class SharedModule {
    static forRoot() {
        // Forcing the whole app to use the returned providers from the AppModule only.
        return {
            ngModule: SharedModule_1,
            providers: [ /* All of your services here. It will hold the services needed by `itself`. */]
        };
    }
};
SharedModule = SharedModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
        ],
        entryComponents: [
        // All components about to be loaded "dynamically" need to be declared in the entryComponents section.
        ],
        declarations: [
            _component_header_menu_header_menu_component__WEBPACK_IMPORTED_MODULE_9__["HeaderMenuComponent"],
            _Layout_panel_layout_panel_layout_component__WEBPACK_IMPORTED_MODULE_7__["PanelLayoutComponent"]
            // common and shared components/directives/pipes between more than one module and components will be listed here.
        ],
        exports: [
            // common and shared components/directives/pipes between more than one module and components will be listed here.
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _Layout_panel_layout_panel_layout_component__WEBPACK_IMPORTED_MODULE_7__["PanelLayoutComponent"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Project\Ebrahim.IssueTracking\BackEnd\Ebrahim.IssueTracking.WebApp\admin\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map