(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/panel/dashboard/dashboard-list/dashboard-list.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/panel/dashboard/dashboard-list/dashboard-list.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard-list works!\n</p>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardListComponent = /** @class */ (function () {
    function DashboardListComponent() {
    }
    DashboardListComponent.prototype.ngOnInit = function () {
    };
    DashboardListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-list',
            template: __webpack_require__(/*! raw-loader!./dashboard-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/panel/dashboard/dashboard-list/dashboard-list.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-list.component.css */ "./src/app/panel/dashboard/dashboard-list/dashboard-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardListComponent);
    return DashboardListComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_list_dashboard_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-list/dashboard-list.component */ "./src/app/panel/dashboard/dashboard-list/dashboard-list.component.ts");
/* harmony import */ var src_app_shared_Layout_panel_layout_panel_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/Layout/panel-layout/panel-layout.component */ "./src/app/shared/Layout/panel-layout/panel-layout.component.ts");





var routes = [
    {
        path: 'panel',
        component: src_app_shared_Layout_panel_layout_panel_layout_component__WEBPACK_IMPORTED_MODULE_4__["PanelLayoutComponent"],
        children: [
            { path: 'list', component: _dashboard_list_dashboard_list_component__WEBPACK_IMPORTED_MODULE_3__["DashboardListComponent"], pathMatch: 'full' }
        ]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/panel/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_list_dashboard_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-list/dashboard-list.component */ "./src/app/panel/dashboard/dashboard-list/dashboard-list.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");






var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
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
    return DashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=panel-dashboard-dashboard-module-es5.js.map