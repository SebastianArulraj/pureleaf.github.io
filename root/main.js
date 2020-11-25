(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/adminpanel/adminpanel.component.html":
/*!******************************************************!*\
  !*** ./src/app/adminpanel/adminpanel.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  adminpanel works!\n</p>\n"

/***/ }),

/***/ "./src/app/adminpanel/adminpanel.component.scss":
/*!******************************************************!*\
  !*** ./src/app/adminpanel/adminpanel.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWlucGFuZWwvYWRtaW5wYW5lbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/adminpanel/adminpanel.component.ts":
/*!****************************************************!*\
  !*** ./src/app/adminpanel/adminpanel.component.ts ***!
  \****************************************************/
/*! exports provided: AdminpanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminpanelComponent", function() { return AdminpanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminpanelComponent = /** @class */ (function () {
    function AdminpanelComponent() {
    }
    AdminpanelComponent.prototype.ngOnInit = function () {
    };
    AdminpanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adminpanel',
            template: __webpack_require__(/*! ./adminpanel.component.html */ "./src/app/adminpanel/adminpanel.component.html"),
            styles: [__webpack_require__(/*! ./adminpanel.component.scss */ "./src/app/adminpanel/adminpanel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminpanelComponent);
    return AdminpanelComponent;
}());



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
/* harmony import */ var _forgotpasswrod_forgotpasswrod_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgotpasswrod/forgotpasswrod.component */ "./src/app/forgotpasswrod/forgotpasswrod.component.ts");
/* harmony import */ var _resetpasswrod_resetpasswrod_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetpasswrod/resetpasswrod.component */ "./src/app/resetpasswrod/resetpasswrod.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");








var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'reset-password', component: _resetpasswrod_resetpasswrod_component__WEBPACK_IMPORTED_MODULE_2__["ResetpasswrodComponent"] },
    { path: 'forgot-password', component: _forgotpasswrod_forgotpasswrod_component__WEBPACK_IMPORTED_MODULE_1__["ForgotpasswrodComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div> -->\n<!-- <h2>Here are some links to help you start: </h2> -->\n<!-- <ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul> -->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "router-outlet {\n  height: 100vh;\n  margin: 0px; }\n\n.container {\n  height: 100vh;\n  background: black;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFNlYmFcXFB1cmVsZWFmL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsV0FBVyxFQUFBOztBQUViO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJyb3V0ZXItb3V0bGV0e1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'Pureleaf';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.navigate(['login']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _global_global_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./global/global.component */ "./src/app/global/global.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _forgotpasswrod_forgotpasswrod_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./forgotpasswrod/forgotpasswrod.component */ "./src/app/forgotpasswrod/forgotpasswrod.component.ts");
/* harmony import */ var _resetpasswrod_resetpasswrod_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./resetpasswrod/resetpasswrod.component */ "./src/app/resetpasswrod/resetpasswrod.component.ts");
/* harmony import */ var _adminpanel_adminpanel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./adminpanel/adminpanel.component */ "./src/app/adminpanel/adminpanel.component.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");








// import { routing } from './app.routing';






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"],
                _global_global_component__WEBPACK_IMPORTED_MODULE_7__["GlobalComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _forgotpasswrod_forgotpasswrod_component__WEBPACK_IMPORTED_MODULE_10__["ForgotpasswrodComponent"],
                _resetpasswrod_resetpasswrod_component__WEBPACK_IMPORTED_MODULE_11__["ResetpasswrodComponent"],
                _adminpanel_adminpanel_component__WEBPACK_IMPORTED_MODULE_12__["AdminpanelComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], angular_font_awesome__WEBPACK_IMPORTED_MODULE_13__["AngularFontAwesomeModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/forgotpasswrod/forgotpasswrod.component.html":
/*!**************************************************************!*\
  !*** ./src/app/forgotpasswrod/forgotpasswrod.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mainCard text-center\">\n  <div class=\"col-7 mycard\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <img src=\"../../assets/imgs/20201022_182726.png\" style=\"height: 250px;width: 250px;margin-top: 0px;margin-bottom: 0px;filter: drop-shadow(2px 4px 6px green);\">\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\"><label><b>Email</b></label></div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\"><input type=\"text\" class=\"uname\" placeholder=\"Enter your email\"></div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <button class=\"login-btn\" (click)=\"OnSubmit()\">Submit</button><br>\n        <br>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/forgotpasswrod/forgotpasswrod.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/forgotpasswrod/forgotpasswrod.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".maindiv {\n  background-image: url('imgs.jpg'); }\n\n.card-center {\n  margin-top: 30%;\n  margin-left: 35%;\n  width: 30%; }\n\n.uname {\n  border-radius: 10px;\n  box-shadow: 2px 2px;\n  border: none;\n  background-color: #ff000000;\n  text-decoration: none; }\n\n.cardj {\n  margin: auto;\n  margin-left: 52%; }\n\n.mainCard {\n  background-image: url('imgd.jpg');\n  min-height: 100vh;\n  margin: 0;\n  margin-top: 0px; }\n\n.mycard {\n  margin: auto;\n  background-color: #fff5f53d;\n  border: none;\n  border-radius: 12px;\n  box-shadow: 0 0 10px #fff; }\n\n.login-btn {\n  border-radius: 12px;\n  background-color: #ff000000;\n  color: 0;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  box-shadow: 2px 2px green; }\n\n.mylogin {\n  margin-right: auto;\n  margin-left: auto;\n  width: 250px; }\n\n::-moz-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: black;\n  opacity: 1;\n  /* Firefox */\n  text-align: center;\n  font-size: 13px; }\n\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: black;\n  opacity: 1;\n  /* Firefox */\n  text-align: center;\n  font-size: 13px; }\n\n:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: black;\n  text-align: center;\n  font-size: 13px; }\n\n::-ms-input-placeholder {\n  /* Microsoft Edge */\n  color: black;\n  text-align: center;\n  font-size: 13px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290cGFzc3dyb2QvRDpcXFNlYmFcXFB1cmVsZWFmL3NyY1xcYXBwXFxmb3Jnb3RwYXNzd3JvZFxcZm9yZ290cGFzc3dyb2QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBbUQsRUFBQTs7QUFHckQ7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFVBQVUsRUFBQTs7QUFHWjtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsaUNBQW1EO0VBQ25ELGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsZUFBZSxFQUFBOztBQUdqQjtFQUVFLFlBQVk7RUFDWiwyQkFBMkI7RUFFM0IsWUFBWTtFQUNaLG1CQUFtQjtFQUVuQix5QkFBeUIsRUFBQTs7QUFJM0I7RUFDRSxtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLFFBQTJCO0VBQzNCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIseUJBQXlCLEVBQUE7O0FBRTFCO0VBRUMsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZLEVBQUE7O0FBR2I7RUFBZ0IseUNBQUE7RUFDZixZQUFZO0VBQ1osVUFBVTtFQUFFLFlBQUE7RUFDWixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUpoQjtFQUFnQix5Q0FBQTtFQUNmLFlBQVk7RUFDWixVQUFVO0VBQUUsWUFBQTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBR2pCO0VBQXlCLDRCQUFBO0VBQ3ZCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUdqQjtFQUEwQixtQkFBQTtFQUN4QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdHBhc3N3cm9kL2ZvcmdvdHBhc3N3cm9kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5kaXZ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1ncy9pbWdzLmpwZycpO1xyXG59XHJcblxyXG4uY2FyZC1jZW50ZXJ7XHJcbiAgbWFyZ2luLXRvcDogMzAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAzNSU7XHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG5cclxuLnVuYW1le1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmNhcmRqe1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tbGVmdDogNTIlO1xyXG59XHJcblxyXG4ubWFpbkNhcmR7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1ncy9pbWdkLmpwZycpO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIG1hcmdpbjogMDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5teWNhcmR7XHJcbiAgLy8gbWFyZ2luLXRvcDogMWVtO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmNWY1M2Q7XHJcbiAgLy8gbWFyZ2luLXJpZ2h0OiAyMCU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgLy8gaGVpZ2h0OiA5MCU7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggI2ZmZjtcclxuICAvLyB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4ubG9naW4tYnRue1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDAwO1xyXG4gIGNvbG9yOiByZWQoJGNvbG9yOiAjMDAwMDAwKTtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggZ3JlZW47XHJcbn1cclxuIC5teWxvZ2lue1xyXG4gIC8vIG1hcmdpbi10b3A6IDE1JTtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gfVxyXG5cclxuIDo6cGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cclxuICBjb2xvcjogYmxhY2s7XHJcbiAgb3BhY2l0eTogMTsgLyogRmlyZWZveCAqL1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG46Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIE1pY3Jvc29mdCBFZGdlICovXHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/forgotpasswrod/forgotpasswrod.component.ts":
/*!************************************************************!*\
  !*** ./src/app/forgotpasswrod/forgotpasswrod.component.ts ***!
  \************************************************************/
/*! exports provided: ForgotpasswrodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswrodComponent", function() { return ForgotpasswrodComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ForgotpasswrodComponent = /** @class */ (function () {
    function ForgotpasswrodComponent(router) {
        this.router = router;
    }
    ForgotpasswrodComponent.prototype.ngOnInit = function () {
    };
    ForgotpasswrodComponent.prototype.OnSubmit = function () {
        this.router.navigateByUrl("reset-password");
    };
    ForgotpasswrodComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-forgotpasswrod',
            template: __webpack_require__(/*! ./forgotpasswrod.component.html */ "./src/app/forgotpasswrod/forgotpasswrod.component.html"),
            styles: [__webpack_require__(/*! ./forgotpasswrod.component.scss */ "./src/app/forgotpasswrod/forgotpasswrod.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ForgotpasswrodComponent);
    return ForgotpasswrodComponent;
}());



/***/ }),

/***/ "./src/app/global/global.component.html":
/*!**********************************************!*\
  !*** ./src/app/global/global.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  global works!\n</p>\n"

/***/ }),

/***/ "./src/app/global/global.component.scss":
/*!**********************************************!*\
  !*** ./src/app/global/global.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC9nbG9iYWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/global/global.component.ts":
/*!********************************************!*\
  !*** ./src/app/global/global.component.ts ***!
  \********************************************/
/*! exports provided: GlobalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalComponent", function() { return GlobalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GlobalComponent = /** @class */ (function () {
    function GlobalComponent() {
    }
    GlobalComponent.prototype.ngOnInit = function () {
    };
    GlobalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-global',
            template: __webpack_require__(/*! ./global.component.html */ "./src/app/global/global.component.html"),
            styles: [__webpack_require__(/*! ./global.component.scss */ "./src/app/global/global.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GlobalComponent);
    return GlobalComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color: #f1f3f6;\">\n<div class=\"row text-center \">\n  <div class=\"col-12\">\n    <h1>Welcome!</h1>\n    <img src=\"../../assets/imgs/20201022_182726.png\" style=\"height: 250px;width: 250px;margin-top: 0px;margin-bottom: 0px;filter: drop-shadow(2px 4px 6px green);\">\n  </div>\n</div>\n\n<div class=\"row text-center\">\n  <div class=\"col-12\" >\n    <!-- <h1>Welcome!</h1>\n    <img src=\"../../assets/imgs/20201022_182726.png\" style=\"height: 250px;width: 250px;margin-top: 0px;margin-bottom: 0px;\"> -->\n    <h1>Deal of the day</h1>\n    <div class=\"row ml-2 mr-2\">\n      <div class=\"col-1\"></div>\n      <div class=\"col-5 mr-2\" style=\"background-color: white;\">\n        <img src=\"../../assets/imgs/20201022_182726.png\" style=\"height: 250px;width: 250px;margin-top: 0px;margin-bottom: 0px;\">\n        <div>🥝Upto 60% off on vegitables</div>\n      </div>\n      <div class=\"col-5 ml-2\" style=\"background-color: white;\">\n        <img src=\"../../assets/imgs/20201022_182726.png\" style=\"height: 250px;width: 250px;margin-top: 0px;margin-bottom: 0px;\">\n        <div>🥝Upto 90% off on fruits</div>\n      </div>\n      <div class=\"col-1\"></div>\n    </div>\n    <h1>Hot deals of the week</h1>\n    <div class=\"row ml-2 mr-2\">\n      <div class=\"col-1\"></div>\n      <div class=\"col-5 product-Card1 mr-2\" style=\"background-color: white;\">\n        <img src=\"../../assets/imgs/20201022_182726.png\" style=\"height: 250px;width: 250px;margin-top: 0px;margin-bottom: 0px;\">\n        <div>🥝Upto 60% off</div>\n      </div>\n      <div class=\"col-5 product-Card1 ml-2\" style=\"background-color: white;\">\n        <img src=\"../../assets/imgs/20201022_182726.png\" style=\"height: 250px;width: 250px;margin-top: 0px;margin-bottom: 0px;\">\n        <div>🥝Upto 90% off</div>\n      </div>\n      <div class=\"col-1\"></div>\n    </div>\n  </div>\n</div>\n<div class=\"row text-center footerdiv\">\n  <div class=\"col-4 footerdiv1 footerdiv\">\n    <img src=\"../../assets/imgs/20201022_182726.png\" style=\"height: 250px;width: 250px;margin-top: 0px;margin-bottom: 0px;filter: drop-shadow(2px 4px 6px green);\">\n  </div>\n  <div class=\"col-4 text-left footerdiv\">\n    <!-- <div class=\"mt-4\"> -->\n      <p>Contact Us:</p><br>\n      <p><img src=\"../../assets/imgs/584856ade0bb315b0f7675ab.png\" style=\"height: 45px;width: 45px;\">&nbsp;support.pureleaf@gmail.com</p>\n      <p><img src=\"../../assets/imgs/insta.png\" style=\"height: 45px;width: 45px;\">&nbsp;<a href=\"https://instagram.com/pureleaf.live?igshid=s3jgg1sejfb\" target=\"_blank\" style=\"text-decoration: underline;text-transform: none;color: #ff9f00;\">/pureleaf.live</a></p>\n      <p><img src=\"../../assets/imgs/b7c8e160dd85c3810cc56e8fb2616772.png\" style=\"height: 45px;width: 45px;\">&nbsp;<a href=\"https://www.facebook.com/PureLeaf.live/\" target=\"_blank\" style=\"text-decoration: underline;text-transform: none;color: #ff9f00;\">/PureLeaf.live</a></p>\n      <p><img src=\"../../assets/imgs/510bd37b99318b528d9be89b1cc55c26.png\" style=\"height: 45px;width: 45px;\">&nbsp;<a href=\"https://wa.me/918220869898\" target=\"_blank\" style=\"text-decoration: underline;text-transform: none;color:#ff9f00\">+91-8220869898</a></p>\n    <!-- </div> -->\n  </div>\n  <div class=\"col-4 text-left footerdiv\">\n    <p>About Us:</p>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-Card {\n  border-right: 1px solid black; }\n\n.product-Card1 {\n  margin-bottom: 20px; }\n\n.gridf {\n  background-image: linear-gradient(to bottom left, rgba(138, 219, 122, 0.979), #cdff0059); }\n\n.grids {\n  background-image: linear-gradient(to top left, #d9d4f9, #ff000073, #ebff0066); }\n\n.grids1 {\n  background-image: linear-gradient(to top left, #d9d4f9, #ff00004a, #ebff004f, #0080005e); }\n\n.footerdiv {\n  margin-top: 50px;\n  color: #ff9f00;\n  background-color: #172337; }\n\n.footerdiv1 {\n  border-right: 1px solid grey;\n  margin-bottom: 30px; }\n\n.main-body1 {\n  background: repeating-radial-gradient(circle at bottom left, #fedc00 0, #fedc00 5.55555556%, #fcb712 0, #fcb712 11.11111111%, #f7921e 0, #f7921e 16.66666667%, #e87f24 0, #e87f24 22.22222222%, #dd6227 0, #dd6227 27.77777778%, #dc4c27 0, #dc4c27 33.33333333%, #ca3435 0, #ca3435 38.88888889%, #b82841 0, #b82841 44.44444444%, #953751 0, #953751 50%, #364c88 0, #364c88 55.55555556%, #16599d 0, #16599d 61.11111111%, #02609e 0, #02609e 66.66666667%, #0073a9 0, #0073a9 72.22222222%, #008aa4 0, #008aa4 77.77777778%, #239a87 0, #239a87 83.33333333%, #7cba6d 0, #7cba6d 88.88888889%, #becc2f 0, #becc2f 94.44444444%, #e0d81d 0, #e0d81d 100%), repeating-radial-gradient(circle at bottom right, #fedc00 0, #fedc00 5.55555556%, #fcb712 0, #fcb712 11.11111111%, #f7921e 0, #f7921e 16.66666667%, #e87f24 0, #e87f24 22.22222222%, #dd6227 0, #dd6227 27.77777778%, #dc4c27 0, #dc4c27 33.33333333%, #ca3435 0, #ca3435 38.88888889%, #b82841 0, #b82841 44.44444444%, #953751 0, #953751 50%, #364c88 0, #364c88 55.55555556%, #16599d 0, #16599d 61.11111111%, #02609e 0, #02609e 66.66666667%, #0073a9 0, #0073a9 72.22222222%, #008aa4 0, #008aa4 77.77777778%, #239a87 0, #239a87 83.33333333%, #7cba6d 0, #7cba6d 88.88888889%, #becc2f 0, #becc2f 94.44444444%, #e0d81d 0, #e0d81d 100%); }\n\n.up-title {\n  --stripe: #cfd8dc;\n  --bg: #e1e1e1;\n  background: linear-gradient(135deg, var(--bg) 25%, transparent 25%) -50px 0, linear-gradient(225deg, var(--bg) 25%, transparent 25%) -50px 0, linear-gradient(315deg, var(--bg) 25%, transparent 25%), linear-gradient(45deg, var(--bg) 25%, transparent 25%);\n  background-size: 100px 100px;\n  background-color: var(--stripe); }\n\n/* Color Palette */\n\n/* Background styles */\n\n.main-body2 {\n  background: radial-gradient(circle closest-side at 50px 50px, #FB8B24 3px, transparent 0), radial-gradient(circle closest-side at 40px 60px, #FB8B24 3px, transparent 0), radial-gradient(circle closest-side at 60px 60px, #FB8B24 3px, transparent 0), radial-gradient(circle closest-side at 50px 70px, #FB8B24 3px, transparent 0), radial-gradient(circle closest-side at 150px 165px, #FB8B24 3px, transparent 0), radial-gradient(circle closest-side at 140px 175px, #FB8B24 3px, transparent 0), radial-gradient(circle closest-side at 160px 175px, #FB8B24 3px, transparent 0), radial-gradient(circle closest-side at 150px 185px, #FB8B24 3px, transparent 0), radial-gradient(ellipse closest-side at 50px 60px, #F9A734 18px, transparent 0), radial-gradient(ellipse closest-side at 150px 175px, #F9A734 18px, transparent 0), radial-gradient(circle closest-side at 30px 40px, #d9d4f9 15px, transparent 0), radial-gradient(circle closest-side at 40px 35px, #36964C 15px, transparent 0), radial-gradient(circle closest-side at 70px 40px, #d9d4f9 15px, transparent 0), radial-gradient(circle closest-side at 60px 35px, #286E38 15px, transparent 0), radial-gradient(circle closest-side at 130px 155px, #d9d4f9 15px, transparent 0), radial-gradient(circle closest-side at 140px 150px, #36964C 15px, transparent 0), radial-gradient(circle at 170px 155px, #d9d4f9 15px, transparent 0), radial-gradient(circle at 160px 150px, #286E38 15px, transparent 0);\n  background-color: #d9d4f9;\n  background-size: 180px 210px;\n  -webkit-animation: animatedBackground 0.5s cubic-bezier(0.61, -0.64, 0.58, 1.46) forwards;\n          animation: animatedBackground 0.5s cubic-bezier(0.61, -0.64, 0.58, 1.46) forwards; }\n\n/* Animation */\n\n@-webkit-keyframes animatedBackground {\n  from {\n    background-position: 0 50%; }\n  to {\n    background-position: 0 0; } }\n\n@keyframes animatedBackground {\n  from {\n    background-position: 0 50%; }\n  to {\n    background-position: 0 0; } }\n\n.products {\n  background-color: #d9d4f9; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcU2ViYVxcUHVyZWxlYWYvc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBNkIsRUFBQTs7QUFJL0I7RUFHRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSx3RkFBd0YsRUFBQTs7QUFHMUY7RUFHRSw2RUFBNkUsRUFBQTs7QUFHL0U7RUFJRSx3RkFBdUYsRUFBQTs7QUFJekY7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLDRCQUE0QjtFQUM1QixtQkFBbUIsRUFBQTs7QUEwQ3JCO0VBQ0MsK3VDQUUyRCxFQUFBOztBQUs1RDtFQUNFLGlCQUFTO0VBQ1QsYUFBSztFQUVMLDZQQUd3RDtFQUN4RCw0QkFBNEI7RUFDNUIsK0JBQStCLEVBQUE7O0FBR2pDLGtCQUFBOztBQVNBLHNCQUFBOztBQUVBO0VBQ0MsNDVDQTBCc0U7RUFFdEUseUJBdENpQjtFQXVDakIsNEJBQTRCO0VBQzVCLHlGQUEyRTtVQUEzRSxpRkFBMkUsRUFBQTs7QUFJNUUsY0FBQTs7QUFFQTtFQUNDO0lBQU8sMEJBQTBCLEVBQUE7RUFDakM7SUFBSyx3QkFBd0IsRUFBQSxFQUFBOztBQUY5QjtFQUNDO0lBQU8sMEJBQTBCLEVBQUE7RUFDakM7SUFBSyx3QkFBd0IsRUFBQSxFQUFBOztBQUc5QjtFQUNFLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtQ2FyZHtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZDlkNGY5O1xyXG59XHJcblxyXG4ucHJvZHVjdC1DYXJkMXtcclxuICAvLyBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2IoMTk2LCAxOTIsIDE5Mik7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2Q5ZDRmOTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uZ3JpZGZ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSBsZWZ0LCByZ2JhKDEzOCwgMjE5LCAxMjIsIDAuOTc5KSwgI2NkZmYwMDU5KTtcclxufVxyXG5cclxuLmdyaWRze1xyXG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgI2Q5ZDRmOSwgIzdiZmYwMGJhKTtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIGxlZnQsICNkOWQ0ZjksICNmZjAwMDA3MywjMDAwMGZmNjYpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgbGVmdCwgI2Q5ZDRmOSwgI2ZmMDAwMDczLCAjZWJmZjAwNjYpO1xyXG59XHJcblxyXG4uZ3JpZHMxe1xyXG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgI2Q5ZDRmOSwgIzdiZmYwMGJhKTtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIGxlZnQsICNkOWQ0ZjksICNmZjAwMDA3MywjMDAwMGZmNjYpO1xyXG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgbGVmdCwgI2Q5ZDRmOSwgI2ZmMDAwMDczLCAjZWJmZjAwNjYpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgbGVmdCwgI2Q5ZDRmOSwgI2ZmMDAwMDRhLCAjZWJmZjAwNGYsIzAwODAwMDVlKTtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIGxlZnQsICNkOWQ0ZjksICNmZjAwMDA0MiwgI2ViZmYwMDY2KTtcclxufVxyXG5cclxuLmZvb3RlcmRpdntcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIGNvbG9yOiAjZmY5ZjAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzIzMzc7XHJcbn1cclxuLmZvb3RlcmRpdjF7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JleTtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4kY29sb3JzIDogI2ZlZGMwMCAwLFxyXG5cdFx0XHQjZmVkYzAwIDEvMTggKiAxMDAlLFxyXG5cdFx0XHQjZmNiNzEyIDAsXHJcblx0XHRcdCNmY2I3MTIgMi8xOCAqIDEwMCUsXHJcblx0XHRcdCNmNzkyMWUgMCxcclxuXHRcdFx0I2Y3OTIxZSAzLzE4ICogMTAwJSxcclxuXHRcdFx0I2U4N2YyNCAwLFxyXG5cdFx0XHQjZTg3ZjI0IDQvMTggKiAxMDAlLFxyXG5cdFx0XHQjZGQ2MjI3IDAsXHJcblx0XHRcdCNkZDYyMjcgNS8xOCAqIDEwMCUsXHJcblx0XHRcdCNkYzRjMjcgMCxcclxuXHRcdFx0I2RjNGMyNyA2LzE4ICogMTAwJSxcclxuXHRcdFx0I2NhMzQzNSAwLFxyXG5cdFx0XHQjY2EzNDM1IDcvMTggKiAxMDAlLFxyXG5cdFx0XHQjYjgyODQxIDAsXHJcblx0XHRcdCNiODI4NDEgOC8xOCAqIDEwMCUsXHJcblx0XHRcdCM5NTM3NTEgMCxcclxuXHRcdFx0Izk1Mzc1MSA5LzE4ICogMTAwJSxcclxuXHRcdFx0IzM2NGM4OCAwLFxyXG5cdFx0XHQjMzY0Yzg4IDEwLzE4ICogMTAwJSxcclxuXHRcdFx0IzE2NTk5ZCAwLFxyXG5cdFx0XHQjMTY1OTlkIDExLzE4ICogMTAwJSxcclxuXHRcdFx0IzAyNjA5ZSAwLFxyXG5cdFx0XHQjMDI2MDllIDEyLzE4ICogMTAwJSxcclxuXHRcdFx0IzAwNzNhOSAwLFxyXG5cdFx0XHQjMDA3M2E5IDEzLzE4ICogMTAwJSxcclxuXHRcdFx0IzAwOGFhNCAwLFxyXG5cdFx0XHQjMDA4YWE0IDE0LzE4ICogMTAwJSxcclxuXHRcdFx0IzIzOWE4NyAwLFxyXG5cdFx0XHQjMjM5YTg3IDE1LzE4ICogMTAwJSxcclxuXHRcdFx0IzdjYmE2ZCAwLFxyXG5cdFx0XHQjN2NiYTZkIDE2LzE4ICogMTAwJSxcclxuXHRcdFx0I2JlY2MyZiAwLFxyXG5cdFx0XHQjYmVjYzJmIDE3LzE4ICogMTAwJSxcclxuXHRcdFx0I2UwZDgxZCAwLFxyXG5cdFx0XHQjZTBkODFkIDE4LzE4ICogMTAwJTtcclxuXHJcbi8vICRjb2xvcnMgOiAjZmVkYzAwLCAjZmNiNzEyLCAjZjc5MjFlLCAjZTg3ZjI0LCAjZGQ2MjI3LCAjZGM0YzI3LCAjY2EzNDM1LCAjYjgyODQxLCAjOTUzNzUxLCAjMzY0Yzg4LCAjMTY1OTlkLCAjMDI2MDllLCAjMDA3M2E5LCAjMDA4YWE0LCAjMjM5YTg3LCAjN2NiYTZkLCAjYmVjYzJmLCAjZTBkODFkO1xyXG5cclxuLm1haW4tYm9keTEge1xyXG5cdGJhY2tncm91bmQ6XHJcblx0XHRyZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCBib3R0b20gbGVmdCwgJGNvbG9ycyksXHJcblx0XHRyZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCBib3R0b20gcmlnaHQsICRjb2xvcnMpO1xyXG5cdC8vIGJhY2tncm91bmQtYmxlbmQtbW9kZTogb3ZlcmxheTtcclxuXHQvLyBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4udXAtdGl0bGUge1xyXG4gIC0tc3RyaXBlOiAjY2ZkOGRjO1xyXG4gIC0tYmc6ICNlMWUxZTE7XHJcblxyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWJnKSAyNSUsIHRyYW5zcGFyZW50IDI1JSkgLTUwcHggMCxcclxuICAgIGxpbmVhci1ncmFkaWVudCgyMjVkZWcsIHZhcigtLWJnKSAyNSUsIHRyYW5zcGFyZW50IDI1JSkgLTUwcHggMCxcclxuICAgIGxpbmVhci1ncmFkaWVudCgzMTVkZWcsIHZhcigtLWJnKSAyNSUsIHRyYW5zcGFyZW50IDI1JSksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHZhcigtLWJnKSAyNSUsIHRyYW5zcGFyZW50IDI1JSk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDBweCAxMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdHJpcGUpO1xyXG59XHJcblxyXG4vKiBDb2xvciBQYWxldHRlICovXHJcblxyXG4kc29mdFBpbms6ICNkOWQ0Zjk7XHJcbiR5ZWxsb3c6ICNGOUE3MzQ7XHJcbiREYXJrWWVsbG93OiAjRkI4QjI0O1xyXG4kZ3JlZW46ICMzNjk2NEM7XHJcbiREYXJrR3JlZW46ICMyODZFMzg7XHJcblxyXG5cclxuLyogQmFja2dyb3VuZCBzdHlsZXMgKi9cclxuXHJcbi5tYWluLWJvZHkyIHtcclxuXHRiYWNrZ3JvdW5kOlxyXG5cdC8qIFBpbmVhcHBsZSBkZXRhaWxzICovXHJcblx0cmFkaWFsLWdyYWRpZW50KGNpcmNsZSBjbG9zZXN0LXNpZGUgYXQgNTBweCA1MHB4LCAkRGFya1llbGxvdyAzcHgsIHRyYW5zcGFyZW50IDApLFxyXG5cdHJhZGlhbC1ncmFkaWVudChjaXJjbGUgY2xvc2VzdC1zaWRlIGF0IDQwcHggNjBweCwgJERhcmtZZWxsb3cgM3B4LCB0cmFuc3BhcmVudCAwKSxcclxuXHRyYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGNsb3Nlc3Qtc2lkZSBhdCA2MHB4IDYwcHgsICREYXJrWWVsbG93IDNweCwgdHJhbnNwYXJlbnQgMCksXHJcblx0cmFkaWFsLWdyYWRpZW50KGNpcmNsZSBjbG9zZXN0LXNpZGUgYXQgNTBweCA3MHB4LCAkRGFya1llbGxvdyAzcHgsIHRyYW5zcGFyZW50IDApLFxyXG5cclxuXHRyYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGNsb3Nlc3Qtc2lkZSBhdCAxNTBweCAxNjVweCwgJERhcmtZZWxsb3cgM3B4LCB0cmFuc3BhcmVudCAwKSxcclxuXHRyYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGNsb3Nlc3Qtc2lkZSBhdCAxNDBweCAxNzVweCwgJERhcmtZZWxsb3cgM3B4LCB0cmFuc3BhcmVudCAwKSxcclxuXHRyYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGNsb3Nlc3Qtc2lkZSBhdCAxNjBweCAxNzVweCwgJERhcmtZZWxsb3cgM3B4LCB0cmFuc3BhcmVudCAwKSxcclxuXHRyYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGNsb3Nlc3Qtc2lkZSBhdCAxNTBweCAxODVweCwgJERhcmtZZWxsb3cgM3B4LCB0cmFuc3BhcmVudCAwKSxcclxuXHJcblx0LyogUGluZWFwcGxlIGJhc2UgKi9cclxuXHRyYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBjbG9zZXN0LXNpZGUgYXQgNTBweCA2MHB4LCAkeWVsbG93IDE4cHgsIHRyYW5zcGFyZW50IDApLFxyXG5cclxuXHRyYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBjbG9zZXN0LXNpZGUgYXQgMTUwcHggMTc1cHgsICR5ZWxsb3cgMThweCwgdHJhbnNwYXJlbnQgMCksXHJcblxyXG5cdC8qIFBpbmVhcHBsZSBsZWFmcyAqL1xyXG5cdHJhZGlhbC1ncmFkaWVudChjaXJjbGUgY2xvc2VzdC1zaWRlIGF0IDMwcHggNDBweCwgJHNvZnRQaW5rIDE1cHgsIHRyYW5zcGFyZW50IDApLFxyXG5cdHJhZGlhbC1ncmFkaWVudChjaXJjbGUgY2xvc2VzdC1zaWRlIGF0IDQwcHggMzVweCwgJGdyZWVuIDE1cHgsIHRyYW5zcGFyZW50IDApLFxyXG5cdHJhZGlhbC1ncmFkaWVudChjaXJjbGUgY2xvc2VzdC1zaWRlIGF0IDcwcHggNDBweCwgJHNvZnRQaW5rIDE1cHgsIHRyYW5zcGFyZW50IDApLFxyXG5cdHJhZGlhbC1ncmFkaWVudChjaXJjbGUgY2xvc2VzdC1zaWRlIGF0IDYwcHggMzVweCwgJERhcmtHcmVlbiAxNXB4LCB0cmFuc3BhcmVudCAwKSxcclxuXHJcblx0cmFkaWFsLWdyYWRpZW50KGNpcmNsZSBjbG9zZXN0LXNpZGUgYXQgMTMwcHggMTU1cHgsICRzb2Z0UGluayAxNXB4LCB0cmFuc3BhcmVudCAwKSxcclxuXHRyYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGNsb3Nlc3Qtc2lkZSBhdCAxNDBweCAxNTBweCwgJGdyZWVuIDE1cHgsIHRyYW5zcGFyZW50IDApLFxyXG5cdHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMTcwcHggMTU1cHgsICRzb2Z0UGluayAxNXB4LCB0cmFuc3BhcmVudCAwKSxcclxuXHRyYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDE2MHB4IDE1MHB4LCAkRGFya0dyZWVuIDE1cHgsIHRyYW5zcGFyZW50IDApXHJcblx0O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICRzb2Z0UGluaztcclxuXHRiYWNrZ3JvdW5kLXNpemU6IDE4MHB4IDIxMHB4O1xyXG5cdGFuaW1hdGlvbjogYW5pbWF0ZWRCYWNrZ3JvdW5kIC41cyBjdWJpYy1iZXppZXIoLjYxLC0wLjY0LC41OCwxLjQ2KSBmb3J3YXJkcztcclxufVxyXG5cclxuXHJcbi8qIEFuaW1hdGlvbiAqL1xyXG5cclxuQGtleWZyYW1lcyBhbmltYXRlZEJhY2tncm91bmQge1xyXG5cdGZyb20geyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDUwJTsgfVxyXG5cdHRvIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwOyB9XHJcbn1cclxuXHJcbi5wcm9kdWN0c3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDlkNGY5O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mainCard text-center\">\n  <div class=\"col-7 mycard\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <img src=\"../../assets/imgs/20201022_182726.png\" style=\"height: 250px;width: 250px;margin-top: 0px;margin-bottom: 0px;filter: drop-shadow(2px 4px 6px green);\">\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\"><label><b>Username</b></label></div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\"><input type=\"text\" class=\"uname\" placeholder=\"Enter your username/email\"></div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\"><label><b>Password</b></label></div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\"><input type=\"password\" class=\"uname\" placeholder=\"Enter your password\"></div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <button class=\"login-btn\" (click)=\"login()\">Login</button><br>\n        <button class=\"login-btn1\" (click)=\"Forgotpassword()\">Forgot Password?</button><br>\n        <!-- <a href=\"forgot-password\">Forgot Password?</a><br> -->\n        <label>(OR)</label><br>\n        <button class=\"login-btn\" (click)=\"register()\">Register</button><br>\n        <br>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".maindiv {\n  background-image: url('imgs.jpg'); }\n\n.card-center {\n  margin-top: 30%;\n  margin-left: 35%;\n  width: 30%; }\n\n.uname {\n  border-radius: 10px;\n  box-shadow: 2px 2px;\n  border: none;\n  background-color: #ff000000;\n  text-decoration: none; }\n\n.cardj {\n  margin: auto;\n  margin-left: 52%; }\n\n.mainCard {\n  background-image: url('imgd.jpg');\n  min-height: 100vh;\n  margin: 0;\n  margin-top: 0px; }\n\n.mycard {\n  margin: auto;\n  background-color: #fff5f53d;\n  border: none;\n  border-radius: 12px;\n  box-shadow: 0 0 10px #fff; }\n\n.login-btn {\n  border-radius: 12px;\n  background-color: #ff000000;\n  color: 0;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  box-shadow: 2px 2px green; }\n\n.login-btn1 {\n  background-color: #ff000000;\n  color: 0;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  box-shadow: 2px 2px green;\n  border: none;\n  border-color: #ff000000; }\n\n.mylogin {\n  margin-right: auto;\n  margin-left: auto;\n  width: 250px; }\n\n::-moz-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: black;\n  opacity: 1;\n  /* Firefox */\n  text-align: center;\n  font-size: 13px; }\n\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: black;\n  opacity: 1;\n  /* Firefox */\n  text-align: center;\n  font-size: 13px; }\n\n:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: black;\n  text-align: center;\n  font-size: 13px; }\n\n::-ms-input-placeholder {\n  /* Microsoft Edge */\n  color: black;\n  text-align: center;\n  font-size: 13px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXFNlYmFcXFB1cmVsZWFmL3NyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBbUQsRUFBQTs7QUFHckQ7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFVBQVUsRUFBQTs7QUFHWjtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsaUNBQW1EO0VBQ25ELGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsZUFBZSxFQUFBOztBQUdqQjtFQUVFLFlBQVk7RUFDWiwyQkFBMkI7RUFFM0IsWUFBWTtFQUNaLG1CQUFtQjtFQUVuQix5QkFBeUIsRUFBQTs7QUFJM0I7RUFDRSxtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLFFBQTJCO0VBQzNCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIseUJBQXlCLEVBQUE7O0FBRzNCO0VBRUUsMkJBQTJCO0VBQzNCLFFBQTJCO0VBQzNCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWix1QkFBdUIsRUFBQTs7QUFFeEI7RUFFQyxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVksRUFBQTs7QUFHYjtFQUFnQix5Q0FBQTtFQUNmLFlBQVk7RUFDWixVQUFVO0VBQUUsWUFBQTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBSmhCO0VBQWdCLHlDQUFBO0VBQ2YsWUFBWTtFQUNaLFVBQVU7RUFBRSxZQUFBO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFHakI7RUFBeUIsNEJBQUE7RUFDdkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBR2pCO0VBQTBCLG1CQUFBO0VBQ3hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbmRpdntcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWdzL2ltZ3MuanBnJyk7XHJcbn1cclxuXHJcbi5jYXJkLWNlbnRlcntcclxuICBtYXJnaW4tdG9wOiAzMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDM1JTtcclxuICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG4udW5hbWV7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAycHggMnB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwMDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uY2FyZGp7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiA1MiU7XHJcbn1cclxuXHJcbi5tYWluQ2FyZHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWdzL2ltZ2QuanBnJyk7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLm15Y2FyZHtcclxuICAvLyBtYXJnaW4tdG9wOiAxZW07XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY1ZjUzZDtcclxuICAvLyBtYXJnaW4tcmlnaHQ6IDIwJTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAvLyBoZWlnaHQ6IDkwJTtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCAjZmZmO1xyXG4gIC8vIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5sb2dpbi1idG57XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwMDA7XHJcbiAgY29sb3I6IHJlZCgkY29sb3I6ICMwMDAwMDApO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCBncmVlbjtcclxufVxyXG5cclxuLmxvZ2luLWJ0bjF7XHJcbiAgLy8gYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwMDA7XHJcbiAgY29sb3I6IHJlZCgkY29sb3I6ICMwMDAwMDApO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCBncmVlbjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmYwMDAwMDA7XHJcbn1cclxuIC5teWxvZ2lue1xyXG4gIC8vIG1hcmdpbi10b3A6IDE1JTtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gfVxyXG5cclxuIDo6cGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cclxuICBjb2xvcjogYmxhY2s7XHJcbiAgb3BhY2l0eTogMTsgLyogRmlyZWZveCAqL1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG46Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIE1pY3Jvc29mdCBFZGdlICovXHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.register = function () {
        this.router.navigateByUrl("register");
    };
    LoginComponent.prototype.login = function () {
        this.router.navigateByUrl("home");
    };
    LoginComponent.prototype.Forgotpassword = function () {
        this.router.navigateByUrl("forgot-password");
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  products works!\n</p>\n"

/***/ }),

/***/ "./src/app/products/products.component.scss":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/products/products.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div style=\"text-align:center\" class=\"mainCard\">\n  <img src=\"../../assets/imgs/20201022_182726.png\" style=\"height: 250px;width: 250px;margin-top: 0px;margin-bottom: 0px;\">\n  <div class=\"mylogin\">\n    <div class=\"mycard\">\n      <br>\n      <div class=\"row ml-1\">\n        <div class=\"col-lg-4 col-sm4 col-md-4 text-left\"><b>Name</b></div>\n        <div class=\"col-4 col-sm4 col-md-4 text-left\"><input type=\"text\" class=\"uname\" placeholder=\"Enter your FirstName\"></div>\n        <div class=\"col-4 col-sm4 col-md-4 text-left\"><input type=\"text\" class=\"uname\" placeholder=\"Enter your LastName\"></div>\n      </div>\n      <div class=\"row mt-1 ml-1\">\n        <div class=\"col-4 col-sm4 col-md-4 text-left\"><b>Address</b></div>\n        <div class=\"col-8 col-sm4 col-md-4 text-left\"><textarea rows=\"3\" cols=\"50\" class=\"mytxt\" placeholder=\"Enter your Address for delivery and billing\"></textarea></div>\n      </div>\n      <div class=\"row mt-1 ml-1\">\n        <div class=\"col-4 col-sm4 col-md-4 text-left\"><b>Phone Number</b></div>\n        <div class=\"col-8 col-sm4 col-md-4 text-left\"><input type=\"text\" class=\"uname\" placeholder=\"Enter your Phone Number\"></div>\n      </div>\n      <div class=\"row mt-1 ml-1\">\n        <div class=\"col-4 col-sm4 col-md-4 text-left\"><b>Email</b></div>\n        <div class=\"col-8 col-sm4 col-md-4 text-left\"><input type=\"text\" class=\"uname\" placeholder=\"Enter your email\"></div>\n      </div>\n      <div class=\"row mt-1 ml-1\">\n        <div class=\"col-4 col-sm4 col-md-4 text-left\"><b>Password</b></div>\n        <div class=\"col-8 col-sm4 col-md-4 text-left\"><input type=\"password\" class=\"uname\" placeholder=\"Enter your Password\"></div>\n      </div>\n      <div class=\"row mt-1 ml-1\">\n        <div class=\"col-4 col-sm4 col-md-4 text-left\"><b>Re-Type Password</b></div>\n        <div class=\"col-8 col-sm4 col-md-4 text-left\"><input type=\"password\" class=\"uname\" placeholder=\"Re-Type your Password\"></div>\n      </div>\n      <div style=\"margin-top: 2em;margin-bottom: 2em;\">\n        <button class=\"login-btn\">Register</button><br>\n        <br>\n      </div>\n    </div>\n  </div>\n</div> -->\n\n<div class=\"row mainCard text-center\">\n  <div class=\"col-7 mycard\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <img src=\"../../assets/imgs/20201022_182726.png\" style=\"height: 250px;width: 250px;margin-top: 0px;margin-bottom: 0px;filter: drop-shadow(2px 4px 6px green);\">\n      </div>\n    </div>\n    <div class=\"row ml-1\">\n      <div class=\"col-lg-4 col-sm4 col-md-4 text-left\"><b>Name</b></div>\n      <div class=\"col-4 col-sm4 col-md-4 text-left\"><input type=\"text\" class=\"uname\" placeholder=\"Enter your FirstName\"></div>\n    </div>\n    <!-- <div class=\"row ml-1\">\n      <div class=\"col-4 col-sm4 col-md-4 text-left\"><input type=\"text\" class=\"uname\" placeholder=\"Enter your LastName\"></div>\n    </div> -->\n    <div class=\"row mt-1 ml-1\">\n      <div class=\"col-4 col-sm4 col-md-4 text-left\"><b>Address</b></div>\n      <div class=\"col-8 col-sm4 col-md-4 text-left\"><textarea rows=\"3\" cols=\"50\" class=\"mytxt\" placeholder=\"Enter your Address for delivery and billing\"></textarea></div>\n    </div>\n    <div class=\"row mt-1 ml-1\">\n      <div class=\"col-4 col-sm4 col-md-4 text-left\"><b>Phone Number</b></div>\n      <div class=\"col-8 col-sm4 col-md-4 text-left\"><input type=\"text\" class=\"uname\" placeholder=\"Enter your Phone Number\"></div>\n    </div>\n    <div class=\"row mt-1 ml-1\">\n      <div class=\"col-4 col-sm4 col-md-4 text-left\"><b>Email</b></div>\n      <div class=\"col-8 col-sm4 col-md-4 text-left\"><input type=\"text\" class=\"uname\" placeholder=\"Enter your email\"></div>\n    </div>\n    <div class=\"row mt-1 ml-1\">\n      <div class=\"col-4 col-sm4 col-md-4 text-left\"><b>Password</b></div>\n      <div class=\"col-8 col-sm4 col-md-4 text-left\"><input type=\"password\" class=\"uname\" placeholder=\"Enter your Password\"></div>\n    </div>\n    <div class=\"row mt-1 ml-1\">\n      <div class=\"col-4 col-sm4 col-md-4 text-left\"><b>Re-Type Password</b></div>\n      <div class=\"col-8 col-sm4 col-md-4 text-left\"><input type=\"password\" class=\"uname\" placeholder=\"Re-Type your Password\"></div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <button class=\"login-btn\" (click)=\"OnSubmit()\">Register</button><br>\n        <br>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".maindiv {\n  background-image: url('imgs.jpg'); }\n\n.card-center {\n  margin-top: 30%;\n  margin-left: 35%;\n  width: 30%; }\n\n.uname {\n  border-radius: 10px;\n  box-shadow: 2px 2px;\n  border: none;\n  background-color: #ff000000;\n  text-decoration: none; }\n\n.mainCard {\n  background-image: url('imgd.jpg');\n  min-height: 100vh;\n  margin: 0;\n  margin-top: 0px; }\n\n.mycard {\n  margin: auto;\n  background-color: #fff5f53d;\n  border: none;\n  border-radius: 12px;\n  box-shadow: 0 0 10px #fff; }\n\n.login-btn {\n  border-radius: 12px;\n  background-color: #ff000000;\n  color: 0;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  box-shadow: 2px 2px green; }\n\n.mylogin {\n  margin-right: auto;\n  margin-left: auto;\n  width: 620px; }\n\n::-moz-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: black;\n  opacity: 1;\n  /* Firefox */\n  text-align: center;\n  font-size: 13px; }\n\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: black;\n  opacity: 1;\n  /* Firefox */\n  text-align: center;\n  font-size: 13px; }\n\n:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: black;\n  text-align: center;\n  font-size: 13px; }\n\n::-ms-input-placeholder {\n  /* Microsoft Edge */\n  color: black;\n  text-align: center;\n  font-size: 13px; }\n\n.mytxt {\n  border-radius: 10px;\n  box-shadow: 2px 2px black;\n  background-color: #ff000000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvRDpcXFNlYmFcXFB1cmVsZWFmL3NyY1xcYXBwXFxyZWdpc3RlclxccmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBbUQsRUFBQTs7QUFHckQ7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFVBQVUsRUFBQTs7QUFHWjtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxpQ0FBbUQ7RUFDbkQsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxlQUFlLEVBQUE7O0FBR2pCO0VBRUUsWUFBWTtFQUNaLDJCQUEyQjtFQUUzQixZQUFZO0VBQ1osbUJBQW1CO0VBRW5CLHlCQUF5QixFQUFBOztBQUkzQjtFQUNFLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsUUFBMkI7RUFDM0IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQix5QkFBeUIsRUFBQTs7QUFFMUI7RUFFQyxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVksRUFBQTs7QUFHYjtFQUFnQix5Q0FBQTtFQUNmLFlBQVk7RUFDWixVQUFVO0VBQUUsWUFBQTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBSmhCO0VBQWdCLHlDQUFBO0VBQ2YsWUFBWTtFQUNaLFVBQVU7RUFBRSxZQUFBO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFHakI7RUFBeUIsNEJBQUE7RUFDdkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBR2pCO0VBQTBCLG1CQUFBO0VBQ3hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsMkJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluZGl2e1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZ3MvaW1ncy5qcGcnKTtcclxufVxyXG5cclxuLmNhcmQtY2VudGVye1xyXG4gIG1hcmdpbi10b3A6IDMwJTtcclxuICBtYXJnaW4tbGVmdDogMzUlO1xyXG4gIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbi51bmFtZXtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDAwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5tYWluQ2FyZHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWdzL2ltZ2QuanBnJyk7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLm15Y2FyZHtcclxuICAvLyBtYXJnaW4tdG9wOiAxZW07XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY1ZjUzZDtcclxuICAvLyBtYXJnaW4tcmlnaHQ6IDIwJTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAvLyBoZWlnaHQ6IDkwJTtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCAjZmZmO1xyXG4gIC8vIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5sb2dpbi1idG57XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwMDA7XHJcbiAgY29sb3I6IHJlZCgkY29sb3I6ICMwMDAwMDApO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCBncmVlbjtcclxufVxyXG4gLm15bG9naW57XHJcbiAgLy8gbWFyZ2luLXRvcDogMTUlO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICB3aWR0aDogNjIwcHg7XHJcbiB9XHJcblxyXG4gOjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogTWljcm9zb2Z0IEVkZ2UgKi9cclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLm15dHh0e1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwMDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router) {
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.OnSubmit = function () {
        this.router.navigateByUrl("login");
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/resetpasswrod/resetpasswrod.component.html":
/*!************************************************************!*\
  !*** ./src/app/resetpasswrod/resetpasswrod.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mainCard text-center\">\n  <div class=\"col-7 mycard\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <img src=\"../../assets/imgs/20201022_182726.png\" style=\"height: 250px;width: 250px;margin-top: 0px;margin-bottom: 0px;filter: drop-shadow(2px 4px 6px green);\">\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\"><label><b>OTP</b></label></div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\"><input type=\"text\" class=\"uname\" placeholder=\"Enter your email\"></div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\"><label><b>Password</b></label></div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\"><input type=\"password\" class=\"uname\" placeholder=\"Enter your email\"></div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\"><label><b>Re-Type Password</b></label></div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\"><input type=\"password\" class=\"uname\" placeholder=\"Enter your email\"></div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <button class=\"login-btn\" (click)=\"onSubmit()\">Submit</button><br>\n        <br>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/resetpasswrod/resetpasswrod.component.scss":
/*!************************************************************!*\
  !*** ./src/app/resetpasswrod/resetpasswrod.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".maindiv {\n  background-image: url('imgs.jpg'); }\n\n.card-center {\n  margin-top: 30%;\n  margin-left: 35%;\n  width: 30%; }\n\n.uname {\n  border-radius: 10px;\n  box-shadow: 2px 2px;\n  border: none;\n  background-color: #ff000000;\n  text-decoration: none; }\n\n.cardj {\n  margin: auto;\n  margin-left: 52%; }\n\n.mainCard {\n  background-image: url('imgd.jpg');\n  min-height: 100vh;\n  margin: 0;\n  margin-top: 0px; }\n\n.mycard {\n  margin: auto;\n  background-color: #fff5f53d;\n  border: none;\n  border-radius: 12px;\n  box-shadow: 0 0 10px #fff; }\n\n.login-btn {\n  border-radius: 12px;\n  background-color: #ff000000;\n  color: 0;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  box-shadow: 2px 2px green; }\n\n.mylogin {\n  margin-right: auto;\n  margin-left: auto;\n  width: 250px; }\n\n::-moz-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: black;\n  opacity: 1;\n  /* Firefox */\n  text-align: center;\n  font-size: 13px; }\n\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: black;\n  opacity: 1;\n  /* Firefox */\n  text-align: center;\n  font-size: 13px; }\n\n:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: black;\n  text-align: center;\n  font-size: 13px; }\n\n::-ms-input-placeholder {\n  /* Microsoft Edge */\n  color: black;\n  text-align: center;\n  font-size: 13px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZXRwYXNzd3JvZC9EOlxcU2ViYVxcUHVyZWxlYWYvc3JjXFxhcHBcXHJlc2V0cGFzc3dyb2RcXHJlc2V0cGFzc3dyb2QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBbUQsRUFBQTs7QUFHckQ7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFVBQVUsRUFBQTs7QUFHWjtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsaUNBQW1EO0VBQ25ELGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsZUFBZSxFQUFBOztBQUdqQjtFQUVFLFlBQVk7RUFDWiwyQkFBMkI7RUFFM0IsWUFBWTtFQUNaLG1CQUFtQjtFQUVuQix5QkFBeUIsRUFBQTs7QUFJM0I7RUFDRSxtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLFFBQTJCO0VBQzNCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIseUJBQXlCLEVBQUE7O0FBRTFCO0VBRUMsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZLEVBQUE7O0FBR2I7RUFBZ0IseUNBQUE7RUFDZixZQUFZO0VBQ1osVUFBVTtFQUFFLFlBQUE7RUFDWixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUpoQjtFQUFnQix5Q0FBQTtFQUNmLFlBQVk7RUFDWixVQUFVO0VBQUUsWUFBQTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBR2pCO0VBQXlCLDRCQUFBO0VBQ3ZCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUdqQjtFQUEwQixtQkFBQTtFQUN4QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Jlc2V0cGFzc3dyb2QvcmVzZXRwYXNzd3JvZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluZGl2e1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZ3MvaW1ncy5qcGcnKTtcclxufVxyXG5cclxuLmNhcmQtY2VudGVye1xyXG4gIG1hcmdpbi10b3A6IDMwJTtcclxuICBtYXJnaW4tbGVmdDogMzUlO1xyXG4gIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbi51bmFtZXtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDAwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5jYXJkantcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IDUyJTtcclxufVxyXG5cclxuLm1haW5DYXJke1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZ3MvaW1nZC5qcGcnKTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBtYXJnaW46IDA7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcblxyXG4ubXljYXJke1xyXG4gIC8vIG1hcmdpbi10b3A6IDFlbTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjVmNTNkO1xyXG4gIC8vIG1hcmdpbi1yaWdodDogMjAlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIC8vIGhlaWdodDogOTAlO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNmZmY7XHJcbiAgLy8gd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmxvZ2luLWJ0bntcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDAwMDtcclxuICBjb2xvcjogcmVkKCRjb2xvcjogIzAwMDAwMCk7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBib3gtc2hhZG93OiAycHggMnB4IGdyZWVuO1xyXG59XHJcbiAubXlsb2dpbntcclxuICAvLyBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIHdpZHRoOiAyNTBweDtcclxuIH1cclxuXHJcbiA6OnBsYWNlaG9sZGVyIHsgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBNaWNyb3NvZnQgRWRnZSAqL1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/resetpasswrod/resetpasswrod.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/resetpasswrod/resetpasswrod.component.ts ***!
  \**********************************************************/
/*! exports provided: ResetpasswrodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpasswrodComponent", function() { return ResetpasswrodComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ResetpasswrodComponent = /** @class */ (function () {
    function ResetpasswrodComponent(router) {
        this.router = router;
    }
    ResetpasswrodComponent.prototype.ngOnInit = function () {
    };
    ResetpasswrodComponent.prototype.onSubmit = function () {
        this.router.navigateByUrl('login');
    };
    ResetpasswrodComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-resetpasswrod',
            template: __webpack_require__(/*! ./resetpasswrod.component.html */ "./src/app/resetpasswrod/resetpasswrod.component.html"),
            styles: [__webpack_require__(/*! ./resetpasswrod.component.scss */ "./src/app/resetpasswrod/resetpasswrod.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ResetpasswrodComponent);
    return ResetpasswrodComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Seba\Pureleaf\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map