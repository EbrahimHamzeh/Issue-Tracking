(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/panel/dashboard/dashboard-list/dashboard-list.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/panel/dashboard/dashboard-list/dashboard-list.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"row\">\n\t<div class=\"col-xl-6\">\n\t\t<div class=\"row row-full-height\">\n\t\t\t<div class=\"col-sm-12 col-md-12 col-lg-6\">\n\t\t\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid-half kt-portlet--border-bottom-brand'\">\n\t\t\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fluid'\">\n\t\t\t\t\t\t<kt-widget26 [value]=\"570\" [desc]=\"'Total Sales'\" [options]=\"chartOptions1\"></kt-widget26>\n\t\t\t\t\t</kt-portlet-body>\n\t\t\t\t</kt-portlet>\n\n\t\t\t\t<div class=\"kt-space-20\"></div>\n\n\t\t\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid-half kt-portlet--border-bottom-brand'\">\n\t\t\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fluid'\">\n\t\t\t\t\t\t<kt-widget26 [value]=\"640\" [desc]=\"'Completed Transactions'\" [options]=\"chartOptions2\"></kt-widget26>\n\t\t\t\t\t</kt-portlet-body>\n\t\t\t\t</kt-portlet>\n\t\t\t</div>\n\n\t\t\t<div class=\"col-sm-12 col-md-12 col-lg-6\">\n\t\t\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid-half kt-portlet--border-bottom-brand'\">\n\t\t\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fluid'\">\n\t\t\t\t\t\t<kt-widget26 [value]=\"'234+'\" [desc]=\"'Transactions'\" [options]=\"chartOptions3\"></kt-widget26>\n\t\t\t\t\t</kt-portlet-body>\n\t\t\t\t</kt-portlet>\n\n\t\t\t\t<div class=\"kt-space-20\"></div>\n\n\t\t\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid-half kt-portlet--border-bottom-brand'\">\n\t\t\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fluid'\">\n\t\t\t\t\t\t<kt-widget26 [value]=\"'4.4M$'\" [desc]=\"'Paid Comissions'\" [options]=\"chartOptions4\"></kt-widget26>\n\t\t\t\t\t</kt-portlet-body>\n\t\t\t\t</kt-portlet>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-xl-6\">\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n\t\t\t<kt-portlet-header [title]=\"'Order Statistics'\">\n\t\t\t\t<ng-container ktPortletTools>\n\t\t\t\t\t<kt-context-menu2></kt-context-menu2>\n\t\t\t\t</ng-container>\n\t\t\t</kt-portlet-header>\n\t\t\t<kt-portlet-body>\n\t\t\t\t<kt-widget12></kt-widget12>\n\t\t\t</kt-portlet-body>\n\t\t</kt-portlet>\n\t</div>\n</div>\n\n\n<kt-portlet>\n\t<kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n\t\t<div class=\"row row-no-padding row-col-separator-xl\">\n\t\t\t<div class=\"col-xl-4\">\n\t\t\t\t<kt-widget1></kt-widget1>\n\t\t\t</div>\n\t\t\t<div class=\"col-xl-4\">\n\t\t\t\t<kt-widget14 [title]=\"'Daily Sales'\" [desc]=\"'Check out each collumn for more details'\"></kt-widget14>\n\t\t\t</div>\n\t\t\t<div class=\"col-xl-4\">\n\t\t\t\t<kt-widget14 [title]=\"'Revenue Change'\" [desc]=\"'Revenue change breakdown by cities'\"></kt-widget14>\n\t\t\t</div>\n\t\t</div>\n\t</kt-portlet-body>\n</kt-portlet>\n\n\n<div class=\"row\">\n\t<div class=\"col-xl-4\">\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n\t\t\t<kt-portlet-header [title]=\"'Download Files'\">\n\t\t\t\t<ng-container ktPortletTools>\n\t\t\t\t\t<kt-context-menu2></kt-context-menu2>\n\t\t\t\t</ng-container>\n\t\t\t</kt-portlet-header>\n\t\t\t<kt-portlet-body>\n\t\t\t\t<kt-widget4 [data]=\"widget4_1\">\n\t\t\t\t\t<ng-template #actionTemplate let-item=\"item\">\n\t\t\t\t\t\t<div class=\"kt-widget4__tools\">\n\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-clean btn-icon btn-sm\">\n\t\t\t\t\t\t\t\t<i class=\"flaticon2-download-symbol-of-down-arrow-in-a-rectangle\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</kt-widget4>\n\t\t\t</kt-portlet-body>\n\t\t</kt-portlet>\n\t</div>\n\t<div class=\"col-xl-4\">\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n\t\t\t<kt-portlet-header [title]=\"'New Users'\">\n\t\t\t\t<ng-container ktPortletTools>\n\t\t\t\t\t<kt-context-menu2></kt-context-menu2>\n\t\t\t\t</ng-container>\n\t\t\t</kt-portlet-header>\n\t\t\t<kt-portlet-body>\n\t\t\t\t<kt-widget4 [data]=\"widget4_2\">\n\t\t\t\t\t<ng-template #actionTemplate let-item=\"item\">\n\t\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-sm\" [ngClass]=\"item.buttonClass\">Follow</a>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</kt-widget4>\n\t\t\t</kt-portlet-body>\n\t\t</kt-portlet>\n\t</div>\n\t<div class=\"col-xl-4\">\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n\t\t\t<kt-portlet-header [title]=\"'Latest Updates'\">\n\t\t\t\t<ng-container ktPortletTools>\n\t\t\t\t\t<kt-context-menu2></kt-context-menu2>\n\t\t\t\t</ng-container>\n\t\t\t</kt-portlet-header>\n\t\t\t<kt-portlet-body>\n\t\t\t\t<kt-widget4 [data]=\"widget4_3\">\n\t\t\t\t\t<ng-template #actionTemplate let-item=\"item\">\n\t\t\t\t\t\t<span class=\"kt-widget4__number\" [ngClass]=\"item.valueColor\">{{item.value}}</span>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</kt-widget4>\n\t\t\t</kt-portlet-body>\n\t\t</kt-portlet>\n\t</div>\n</div>\n\n\n<div class=\"row\">\n\t<div class=\"col-xl-8\">\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n\t\t\t<kt-portlet-header [title]=\"'Exclusive Datatable'\" [class]=\"'kt-portlet__head--lg kt-portlet__head--noborder kt-portlet__head--break-sm'\">\n\t\t\t\t<ng-container ktPortletTools>\n\t\t\t\t\t<kt-context-menu></kt-context-menu>\n\t\t\t\t</ng-container>\n\t\t\t</kt-portlet-header>\n\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n\t\t\t\t<kt-data-table></kt-data-table>\n\t\t\t</kt-portlet-body>\n\t\t</kt-portlet>\n\t</div>\n\t<div class=\"col-xl-4\">\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n\t\t\t<kt-portlet-header [title]=\"'Authors Profit'\">\n\t\t\t\t<ng-container ktPortletTools>\n\t\t\t\t\t<kt-context-menu2></kt-context-menu2>\n\t\t\t\t</ng-container>\n\t\t\t</kt-portlet-header>\n\t\t\t<kt-portlet-body>\n\t\t\t\t<kt-widget4 [data]=\"widget4_4\">\n\t\t\t\t\t<ng-template #actionTemplate let-item=\"item\">\n\t\t\t\t\t\t<span class=\"kt-widget4__number\" [ngClass]=\"item.valueColor\">{{item.value}}</span>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</kt-widget4>\n\t\t\t</kt-portlet-body>\n\t\t</kt-portlet>\n\t</div>\n</div> -->\n\n\n<!-- <div class=\"row\">\n\t<div class=\"col-xl-8\">\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n\t\t\t<kt-portlet-header [title]=\"'Best Sellers'\">\n\t\t\t\t<ng-container ktPortletTools>\n\t\t\t\t\t<kt-context-menu2></kt-context-menu2>\n\t\t\t\t</ng-container>\n\t\t\t</kt-portlet-header>\n\t\t\t<kt-portlet-body>\n\t\t\t\t<kt-widget5></kt-widget5>\n\t\t\t</kt-portlet-body>\n\t\t</kt-portlet>\n\t</div>\n\t<div class=\"col-xl-4\">\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n\t\t\t<kt-portlet-header [title]=\"'Recent Activities'\">\n\t\t\t\t<ng-container ktPortletTools>\n\t\t\t\t\t<kt-context-menu2></kt-context-menu2>\n\t\t\t\t</ng-container>\n\t\t\t</kt-portlet-header>\n\t\t\t<kt-portlet-body>\n\t\t\t\t<kt-timeline2></kt-timeline2>\n\t\t\t</kt-portlet-body>\n\t\t</kt-portlet>\n\t</div>\n</div> -->\n\n\n<!--\n<kt-portlet>\n\t<kt-portlet-header>\n\t\t<ng-container ktPortletTitle>\n\t\t</ng-container>\n\t\t<ng-container ktPortletTools>\n\t\t</ng-container>\n\t</kt-portlet-header>\n\t<kt-portlet-body></kt-portlet-body>\n\t<kt-portlet-footer></kt-portlet-footer>\n</kt-portlet>\n--> -->\n"

/***/ }),

/***/ "./src/app/panel/dashboard/dashboard-list/dashboard-list.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/panel/dashboard/dashboard-list/dashboard-list.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhbmVsL2Rhc2hib2FyZC9kYXNoYm9hcmQtbGlzdC9kYXNoYm9hcmQtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/panel/dashboard/dashboard-list/dashboard-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/panel/dashboard/dashboard-list/dashboard-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: DashboardListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardListComponent", function() { return DashboardListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardListComponent = class DashboardListComponent {
    // widget4_1: Widget4Data;
    // widget4_2: Widget4Data;
    // widget4_3: Widget4Data;
    // widget4_4: Widget4Data;
    constructor() {
    }
    ngOnInit() {
        this.chartOptions1 = {
            data: [10, 14, 18, 11, 9, 12, 14, 17, 18, 14],
            color: 'red',
            border: 3
        };
        this.chartOptions2 = {
            data: [11, 12, 18, 13, 11, 12, 15, 13, 19, 15],
            color: 'white',
            border: 3
        };
        this.chartOptions3 = {
            data: [12, 12, 18, 11, 15, 12, 13, 16, 11, 18],
            color: 'green',
            border: 3
        };
        this.chartOptions4 = {
            data: [11, 9, 13, 18, 13, 15, 14, 13, 18, 15],
            color: 'black',
            border: 3
        };
        // // @ts-ignore
        // this.widget4_1 = shuffle([
        //   {
        //     pic: './assets/media/files/doc.svg',
        //     title: 'Metronic Documentation',
        //     url: 'https://keenthemes.com.my/metronic',
        //   }, {
        //     pic: './assets/media/files/jpg.svg',
        //     title: 'Project Launch Evgent',
        //     url: 'https://keenthemes.com.my/metronic',
        //   }, {
        //     pic: './assets/media/files/pdf.svg',
        //     title: 'Full Developer Manual For 4.7',
        //     url: 'https://keenthemes.com.my/metronic',
        //   }, {
        //     pic: './assets/media/files/javascript.svg',
        //     title: 'Make JS Great Again',
        //     url: 'https://keenthemes.com.my/metronic',
        //   }, {
        //     pic: './assets/media/files/zip.svg',
        //     title: 'Download Ziped version OF 5.0',
        //     url: 'https://keenthemes.com.my/metronic',
        //   }, {
        //     pic: './assets/media/files/pdf.svg',
        //     title: 'Finance Report 2016/2017',
        //     url: 'https://keenthemes.com.my/metronic',
        //   },
        // ]);
        // // @ts-ignore
        // this.widget4_2 = shuffle([
        //   {
        //     pic: './assets/media/users/100_4.jpg',
        //     username: 'Anna Strong',
        //     desc: 'Visual Designer,Google Inc.',
        //     url: 'https://keenthemes.com.my/metronic',
        //     buttonClass: 'btn-label-brand'
        //   }, {
        //     pic: './assets/media/users/100_14.jpg',
        //     username: 'Milano Esco',
        //     desc: 'Product Designer, Apple Inc.',
        //     url: 'https://keenthemes.com.my/metronic',
        //     buttonClass: 'btn-label-warning'
        //   }, {
        //     pic: './assets/media/users/100_11.jpg',
        //     username: 'Nick Bold',
        //     desc: 'Web Developer, Facebook Inc.',
        //     url: 'https://keenthemes.com.my/metronic',
        //     buttonClass: 'btn-label-danger'
        //   }, {
        //     pic: './assets/media/users/100_1.jpg',
        //     username: 'Wilter Delton',
        //     desc: 'Project Manager, Amazon Inc.',
        //     url: 'https://keenthemes.com.my/metronic',
        //     buttonClass: 'btn-label-success'
        //   }, {
        //     pic: './assets/media/users/100_5.jpg',
        //     username: 'Nick Stone',
        //     desc: 'Visual Designer, Github Inc.',
        //     url: 'https://keenthemes.com.my/metronic',
        //     buttonClass: 'btn-label-dark'
        //   },
        // ]);
        // // @ts-ignore
        // this.widget4_3 = shuffle([
        //   {
        //     icon: 'flaticon-pie-chart-1 kt-font-info',
        //     title: 'Metronic v6 has been arrived!',
        //     url: 'https://keenthemes.com.my/metronic',
        //     value: '+$500',
        //     valueColor: 'kt-font-info'
        //   }, {
        //     icon: 'flaticon-safe-shield-protection kt-font-success',
        //     title: 'Metronic community meet-up 2019 in Rome.',
        //     url: 'https://keenthemes.com.my/metronic',
        //     value: '+$1260',
        //     valueColor: 'kt-font-success'
        //   }, {
        //     icon: 'flaticon2-line-chart kt-font-danger',
        //     title: 'Metronic Angular 7 version will be landing soon..',
        //     url: 'https://keenthemes.com.my/metronic',
        //     value: '+$1080',
        //     valueColor: 'kt-font-danger'
        //   }, {
        //     icon: 'flaticon2-pie-chart-1 kt-font-primary',
        //     title: 'ale! Purchase Metronic at 70% off for limited time',
        //     url: 'https://keenthemes.com.my/metronic',
        //     value: '70% Off!',
        //     valueColor: 'kt-font-primary'
        //   }, {
        //     icon: 'flaticon2-rocket kt-font-brand',
        //     title: 'Metronic VueJS version is in progress. Stay tuned!',
        //     url: 'https://keenthemes.com.my/metronic',
        //     value: '+134',
        //     valueColor: 'kt-font-brand'
        //   }, {
        //     icon: 'flaticon2-notification kt-font-warning',
        //     title: 'Black Friday! Purchase Metronic at ever lowest 90% off for limited time',
        //     url: 'https://keenthemes.com.my/metronic',
        //     value: '70% Off!',
        //     valueColor: 'kt-font-warning'
        //   }, {
        //     icon: 'flaticon2-file kt-font-focus',
        //     title: 'Metronic React version is in progress.',
        //     url: 'https://keenthemes.com.my/metronic',
        //     value: '+13%',
        //     valueColor: 'kt-font-focus'
        //   },
        // ]);
        // // @ts-ignore
        // this.widget4_4 = shuffle([
        //   {
        //     pic: './assets/media/client-logos/logo5.png',
        //     title: 'Trump Themes',
        //     desc: 'Make Metronic Great Again',
        //     url: 'https://keenthemes.com.my/metronic',
        //     value: '+$2500',
        //     valueColor: 'kt-font-brand'
        //   }, {
        //     pic: './assets/media/client-logos/logo4.png',
        //     title: 'StarBucks',
        //     desc: 'Good Coffee & Snacks',
        //     url: 'https://keenthemes.com.my/metronic',
        //     value: '-$290',
        //     valueColor: 'kt-font-brand'
        //   }, {
        //     pic: './assets/media/client-logos/logo3.png',
        //     title: 'Phyton',
        //     desc: 'A Programming Language',
        //     url: 'https://keenthemes.com.my/metronic',
        //     value: '+$17',
        //     valueColor: 'kt-font-brand'
        //   }, {
        //     pic: './assets/media/client-logos/logo2.png',
        //     title: 'GreenMakers',
        //     desc: 'Make Green Great Again',
        //     url: 'https://keenthemes.com.my/metronic',
        //     value: '-$2.50',
        //     valueColor: 'kt-font-brand'
        //   }, {
        //     pic: './assets/media/client-logos/logo1.png',
        //     title: 'FlyThemes',
        //     desc: 'A Let\'s Fly Fast Again Language',
        //     url: 'https://keenthemes.com.my/metronic',
        //     value: '+200',
        //     valueColor: 'kt-font-brand'
        //   },
        // ]);
    }
};
DashboardListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard-list',
        template: __webpack_require__(/*! raw-loader!./dashboard-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/panel/dashboard/dashboard-list/dashboard-list.component.html"),
        styles: [__webpack_require__(/*! ./dashboard-list.component.css */ "./src/app/panel/dashboard/dashboard-list/dashboard-list.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DashboardListComponent);



/***/ }),

/***/ "./src/app/panel/dashboard/dashboard-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/panel/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_list_dashboard_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-list/dashboard-list.component */ "./src/app/panel/dashboard/dashboard-list/dashboard-list.component.ts");




const routes = [{
        path: '',
        component: _dashboard_list_dashboard_list_component__WEBPACK_IMPORTED_MODULE_3__["DashboardListComponent"],
        pathMatch: 'full'
    }];
let DashboardRoutingModule = class DashboardRoutingModule {
};
DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DashboardRoutingModule);



/***/ }),

/***/ "./src/app/panel/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/panel/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/panel/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_list_dashboard_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-list/dashboard-list.component */ "./src/app/panel/dashboard/dashboard-list/dashboard-list.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");






let DashboardModule = class DashboardModule {
};
DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_dashboard_list_dashboard_list_component__WEBPACK_IMPORTED_MODULE_4__["DashboardListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"]
        ]
    })
], DashboardModule);



/***/ })

}]);
//# sourceMappingURL=panel-dashboard-dashboard-module.js.map