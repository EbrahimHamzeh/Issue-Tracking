(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <div fxFlex=\"1 1 20%\" fxFlexAlign=\"center center\">\n            <mat-card class=\"example-card\" dir=\"rtl\">\n                    <mat-card-header>\n                      <div mat-card-avatar class=\"example-header-image\"></div>\n                      <mat-card-title>ورود</mat-card-title>\n                      <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n                    </mat-card-header>\n                    <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n                    <mat-card-content>\n                      <p>\n                        The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n                        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n                        bred for hunting.\n                      </p>\n                    </mat-card-content>\n                    <mat-card-actions>\n                      <button mat-button>ورود</button>\n                      <!-- <button mat-button>SHARE</button> -->\n                    </mat-card-actions>\n                  </mat-card>\n    </div>\n</div>"

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



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n    max-width: 400px;\r\n  }\r\n  \r\n  .example-header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxtRkFBbUY7SUFDbkYsc0JBQXNCO0VBQ3hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkIHtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWhlYWRlci1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfSJdfQ== */"

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
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
        ]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [CoreModule])
], CoreModule);



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
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]
        ],
        entryComponents: [
        // All components about to be loaded "dynamically" need to be declared in the entryComponents section.
        ],
        declarations: [
        // common and shared components/directives/pipes between more than one module and components will be listed here.
        ],
        exports: [
            // common and shared components/directives/pipes between more than one module and components will be listed here.
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]
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