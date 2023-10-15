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

/***/ "./src/app/animation/loading/loading.component.css":
/*!*********************************************************!*\
  !*** ./src/app/animation/loading/loading.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  "

/***/ }),

/***/ "./src/app/animation/loading/loading.component.html":
/*!**********************************************************!*\
  !*** ./src/app/animation/loading/loading.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\">\n    <div class=\"lds-spinner\"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/animation/loading/loading.component.ts":
/*!********************************************************!*\
  !*** ./src/app/animation/loading/loading.component.ts ***!
  \********************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/animation/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.css */ "./src/app/animation/loading/loading.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-side-nav></app-side-nav>\n<div id=\"page\">\n\n    <router-outlet></router-outlet>\n\n</div>\n<app-footer></app-footer>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'TeamUsMoviesManager';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_detailed_view_detailed_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/detailed-view/detailed-view.component */ "./src/app/components/detailed-view/detailed-view.component.ts");
/* harmony import */ var _components_preview_cast_preview_cast_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/preview-cast/preview-cast.component */ "./src/app/components/preview-cast/preview-cast.component.ts");
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./safe.pipe */ "./src/app/safe.pipe.ts");
/* harmony import */ var _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/side-nav/side-nav.component */ "./src/app/components/side-nav/side-nav.component.ts");
/* harmony import */ var _components_tv_detailde_view_tv_detailde_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/tv-detailde-view/tv-detailde-view.component */ "./src/app/components/tv-detailde-view/tv-detailde-view.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _components_star_details_star_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/star-details/star-details.component */ "./src/app/components/star-details/star-details.component.ts");
/* harmony import */ var _components_full_cast_full_cast_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/full-cast/full-cast.component */ "./src/app/components/full-cast/full-cast.component.ts");
/* harmony import */ var angular_image_slider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-image-slider */ "./node_modules/angular-image-slider/fesm5/angular-image-slider.js");
/* harmony import */ var _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/search-results/search-results.component */ "./src/app/components/search-results/search-results.component.ts");
/* harmony import */ var _components_tv_preview_cast_tv_preview_cast_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/tv-preview-cast/tv-preview-cast.component */ "./src/app/components/tv-preview-cast/tv-preview-cast.component.ts");
/* harmony import */ var _components_review_n_preview_review_n_preview_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/review-n-preview/review-n-preview.component */ "./src/app/components/review-n-preview/review-n-preview.component.ts");
/* harmony import */ var _youtube_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./youtube.pipe */ "./src/app/youtube.pipe.ts");
/* harmony import */ var _components_browse_browse_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/browse/browse.component */ "./src/app/components/browse/browse.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _animation_loading_loading_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./animation/loading/loading.component */ "./src/app/animation/loading/loading.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_download_movies_download_movies_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/download-movies/download-movies.component */ "./src/app/components/download-movies/download-movies.component.ts");
/* harmony import */ var _components_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/contactus/contactus.component */ "./src/app/components/contactus/contactus.component.ts");
/* harmony import */ var _components_download_series_download_series_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/download-series/download-series.component */ "./src/app/components/download-series/download-series.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'Home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'detailView/:id', component: _components_detailed_view_detailed_view_component__WEBPACK_IMPORTED_MODULE_7__["DetailedViewComponent"] },
    { path: 'tv-detailed-view/:id', component: _components_tv_detailde_view_tv_detailde_view_component__WEBPACK_IMPORTED_MODULE_11__["TvDetaildeViewComponent"] },
    { path: 'star-details/:id', component: _components_star_details_star_details_component__WEBPACK_IMPORTED_MODULE_14__["StarDetailsComponent"] },
    { path: 'full-cast', component: _components_full_cast_full_cast_component__WEBPACK_IMPORTED_MODULE_15__["FullCastComponent"] },
    { path: 'search/:name', component: _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_17__["SearchResultsComponent"] },
    { path: 'Browse/:page', component: _components_browse_browse_component__WEBPACK_IMPORTED_MODULE_21__["BrowseComponent"] },
    { path: 'footer', component: _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_24__["FooterComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _components_detailed_view_detailed_view_component__WEBPACK_IMPORTED_MODULE_7__["DetailedViewComponent"],
                _components_preview_cast_preview_cast_component__WEBPACK_IMPORTED_MODULE_8__["PreviewCastComponent"],
                _safe_pipe__WEBPACK_IMPORTED_MODULE_9__["SafePipe"],
                _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_10__["SideNavComponent"],
                _components_tv_detailde_view_tv_detailde_view_component__WEBPACK_IMPORTED_MODULE_11__["TvDetaildeViewComponent"],
                _components_star_details_star_details_component__WEBPACK_IMPORTED_MODULE_14__["StarDetailsComponent"],
                _components_full_cast_full_cast_component__WEBPACK_IMPORTED_MODULE_15__["FullCastComponent"],
                _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_17__["SearchResultsComponent"],
                _components_tv_preview_cast_tv_preview_cast_component__WEBPACK_IMPORTED_MODULE_18__["TvPreviewCastComponent"],
                _components_review_n_preview_review_n_preview_component__WEBPACK_IMPORTED_MODULE_19__["ReviewNPreviewComponent"],
                _youtube_pipe__WEBPACK_IMPORTED_MODULE_20__["YoutubePipe"],
                _components_browse_browse_component__WEBPACK_IMPORTED_MODULE_21__["BrowseComponent"],
                _animation_loading_loading_component__WEBPACK_IMPORTED_MODULE_23__["LoadingComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_24__["FooterComponent"],
                _components_download_movies_download_movies_component__WEBPACK_IMPORTED_MODULE_25__["DownloadMoviesComponent"],
                _components_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_26__["ContactusComponent"],
                _components_download_series_download_series_component__WEBPACK_IMPORTED_MODULE_27__["DownloadSeriesComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
                angular_image_slider__WEBPACK_IMPORTED_MODULE_16__["SliderModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_22__["NgxSpinnerModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/browse/browse.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/browse/browse.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/browse/browse.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/browse/browse.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"browse\">\n  <div class=\"hanging-nav\">\n    <div class=\"pagination\">\n      <div class=\"left\">\n        <a href=\"javascript:void(0)\" (click)=\"back()\"\n          ><i class=\"la la-chevron-left\"></i\n        ></a>\n      </div>\n      <div class=\"right\">\n        <a href=\"javascript:void(0)\" (click)=\"next()\"\n          ><i class=\"la la-chevron-right\"></i\n        ></a>\n      </div>\n    </div>\n  </div>\n  <div class=\"choice-btn\">\n    <a href=\"javascript:void(0)\" class=\"choice-btn__movie\" (click)=\"showMovie()\"\n      >Movies</a\n    >\n    <a href=\"javascript:void(0)\" class=\"choice-btn__series\" (click)=\"showSeries()\"\n      >Series</a\n    >\n  </div>\n  \n  <app-loading *ngIf=\"pageload\"></app-loading>\n  <div *ngIf=\"!pageload\">\n    <section *ngIf=\"movie\">\n      <div class=\"section group\">\n        <div class=\"col span_1_of_3\" *ngFor=\"let list of movies; let i = index\">\n          <div class=\"movie-poster\" *ngIf=\"i <= 20\">\n            <div class=\"movie-poster__detail\">\n              <h3 class=\"movie-box__title\">{{ list.original_title }}</h3>\n              <ul class=\"movie-box__info\">\n                <li>\n                  <p>Release Date:{{ list.release_date }}</p>\n                </li>\n                <li>\n                  <a\n                    class=\"btn btn-white-view\"\n                    [routerLink]=\"['/detailView', list.id]\"\n                    >view</a\n                  >\n                </li>\n              </ul>\n            </div>\n            <div class=\"movie-poster__image\">\n              <img\n                src=\"https://image.tmdb.org/t/p/w400/{{ list.poster_path }}\"\n                alt=\"{{ list.original_title }}\"\n                class=\"movie-box__img\"\n              />\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  \n    <section *ngIf=\"series\">\n      <div class=\"section group\">\n        <div\n          class=\"col span_1_of_3\"\n          *ngFor=\"let list of popSeries; let i = index\"\n        >\n          <div class=\"movie-poster\" *ngIf=\"i <= 20\">\n            <div class=\"movie-poster__detail\">\n              <h3 class=\"movie-box__title\">{{ list.original_name }}</h3>\n              <ul class=\"movie-box__info\">\n                <li>\n                  <p>First Aired on:{{ list.first_air_date }}</p>\n                </li>\n                <li>\n                  <a\n                    class=\"btn btn-white-view\"\n                    [routerLink]=\"['/tv-detailed-view', list.id]\"\n                    >view</a\n                  >\n                </li>\n              </ul>\n            </div>\n            <div class=\"movie-poster__image\">\n              <img\n                src=\"https://image.tmdb.org/t/p/w400/{{ list.poster_path }}\"\n                alt=\"{{ list.original_title }}\"\n                class=\"movie-box__img\"\n              />\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n  \n</div>\n"

/***/ }),

/***/ "./src/app/components/browse/browse.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/browse/browse.component.ts ***!
  \*******************************************************/
/*! exports provided: BrowseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseComponent", function() { return BrowseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_tmdb_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/tmdb.service */ "./src/app/shared/tmdb.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BrowseComponent = /** @class */ (function () {
    function BrowseComponent(tmdb, route, router) {
        this.tmdb = tmdb;
        this.route = route;
        this.router = router;
        this.movie = true;
        this.series = false;
        this.pageload = true;
    }
    BrowseComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.pageload = false;
        }, 3500);
        this.route.params.subscribe(function (params) {
            _this.page = params['page'];
            console.log(_this.page);
            _this.showMovies(_this.page);
            _this.showpopSeries(_this.page);
        });
    };
    BrowseComponent.prototype.showMovies = function (id) {
        var _this = this;
        this.tmdb.getPopularMovies(id).subscribe(function (data) {
            _this.movies = data['results'];
        });
    };
    BrowseComponent.prototype.showpopSeries = function (id) {
        var _this = this;
        this.tmdb.getPopularSeries(id).subscribe(function (data) {
            _this.popSeries = data['results'];
        });
    };
    BrowseComponent.prototype.next = function () {
        var _this = this;
        this.page++;
        this.router.navigate(['/Browse', this.page]);
        this.pageload = true;
        setTimeout(function () {
            _this.pageload = false;
        }, 3500);
    };
    BrowseComponent.prototype.back = function () {
        var _this = this;
        this.page--;
        if (this.page !== 0) {
            this.router.navigate(['/Browse', this.page]);
            this.pageload = true;
            setTimeout(function () {
                _this.pageload = false;
            }, 3500);
        }
    };
    BrowseComponent.prototype.showMovie = function () {
        this.movie = true;
        this.series = !this.series;
    };
    BrowseComponent.prototype.showSeries = function () {
        this.movie = !this.movie;
        this.series = true;
    };
    BrowseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-browse',
            template: __webpack_require__(/*! ./browse.component.html */ "./src/app/components/browse/browse.component.html"),
            styles: [__webpack_require__(/*! ./browse.component.css */ "./src/app/components/browse/browse.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_tmdb_service__WEBPACK_IMPORTED_MODULE_1__["TmdbService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BrowseComponent);
    return BrowseComponent;
}());



/***/ }),

/***/ "./src/app/components/contactus/contactus.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/contactus/contactus.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/contactus/contactus.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/contactus/contactus.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contactus works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/contactus/contactus.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/contactus/contactus.component.ts ***!
  \*************************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactusComponent = /** @class */ (function () {
    function ContactusComponent() {
    }
    ContactusComponent.prototype.ngOnInit = function () {
    };
    ContactusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contactus',
            template: __webpack_require__(/*! ./contactus.component.html */ "./src/app/components/contactus/contactus.component.html"),
            styles: [__webpack_require__(/*! ./contactus.component.css */ "./src/app/components/contactus/contactus.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "./src/app/components/detailed-view/detailed-view.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/detailed-view/detailed-view.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/detailed-view/detailed-view.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/detailed-view/detailed-view.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"detailed-page\">\n  <div class=\"section group from-top-4\">\n    <div class=\"col span_1_of_3\">\n      <div class=\"poster-img\">\n        <img src=\"https://image.tmdb.org/t/p/w400/{{movieDetail.poster_path}}\" alt=\"\" class=\"poster-img__image\">\n      </div>\n    </div>\n    <div class=\"col span_2_of_3\">\n      <div class=\"mv-detail\">\n        <h2 class=\"mv-detail__title\">\n          {{movieDetail.original_title}}\n        </h2>\n        <div class=\"mv-detail__syn\">\n          <h2>SYNOPSIS</h2>\n          <p class=\"syn-word\">{{movieDetail.overview}}</p>\n        </div>\n        <div class=\"mv-detail__tags\">\n          <ul class=\"tags\">\n            <li *ngFor=\"let tags of genre\">\n              <i class=\"icon-Tag\"></i>{{tags.name}}\n            </li>\n          </ul>\n        </div>\n  \n        <div class=\"mv-detail__rates\">\n          <ul class=\"rated-data\">\n            <li><i class=\"icon-Video\"></i>Status: {{movieDetail.status}}</li>\n            <li><i class=\"icon-Clock\"></i>Runtime: {{movieDetail.runtime}}min</li>\n            <li><i class=\"icon-Users\"></i> Language:\n              <ul class=\"lang-list\">\n                <li *ngFor=\"let lang of language\"> {{lang.name}}</li>\n              </ul>\n  \n  \n            </li>\n            <li><i class=\"icon-BarGraph\"></i>Popularity:{{movieDetail.popularity}}</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n  <section class=\"movie-vid-n-rev\">\n      <app-review-n-preview [id]=\"id\" [name]=\"name\"></app-review-n-preview>\n    </section>\n  \n    <app-download-movies [id]=\"id\"></app-download-movies>\n  \n  \n  <section class=\"cast-section\">\n        <app-preview-cast></app-preview-cast>\n  </section>\n  \n  \n</div>\n"

/***/ }),

/***/ "./src/app/components/detailed-view/detailed-view.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/detailed-view/detailed-view.component.ts ***!
  \*********************************************************************/
/*! exports provided: DetailedViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailedViewComponent", function() { return DetailedViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_tmdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/tmdb.service */ "./src/app/shared/tmdb.service.ts");
/* harmony import */ var _shared_yts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/yts.service */ "./src/app/shared/yts.service.ts");
/* harmony import */ var _shared_tus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/tus.service */ "./src/app/shared/tus.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DetailedViewComponent = /** @class */ (function () {
    function DetailedViewComponent(route, tmdb, yts, sanitizer, tus) {
        this.route = route;
        this.tmdb = tmdb;
        this.yts = yts;
        this.sanitizer = sanitizer;
        this.tus = tus;
        this.movieDetail = [];
        this.credits = [];
        this.language = [];
        this.Downlables = [];
        this.url = [];
        this.gMagnet = [];
        this.link_1337 = [];
        this.link_1337_gMagnet = [];
        this.name = 'movies';
    }
    DetailedViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.feedMe();
        this.getCredit();
    };
    DetailedViewComponent.prototype.feedMe = function () {
        var _this = this;
        this.tmdb.getMovieDetail(this.id).subscribe(function (Data) {
            _this.movieDetail = Data;
            _this.genre = Data['genres'];
            _this.language = Data['spoken_languages'];
            _this.passMe = _this.movieDetail['original_title'];
            _this.getDownloadFile(_this.passMe);
            _this.getIt_1337(_this.passMe);
            _this.getIt_limetorrent(_this.passMe);
        });
    };
    DetailedViewComponent.prototype.getCredit = function () {
        var _this = this;
        this.tmdb.getMovieCredits(this.id).subscribe(function (Data) {
            _this.credits = Data['cast'];
        });
    };
    DetailedViewComponent.prototype.getDownloadFile = function (title) {
        var _this = this;
        this.yts.getDownlodableTorrent(title).subscribe(function (data) {
            _this.Downlables = data['data']['movies'][0]['torrents'];
            for (var i = 0; i < _this.Downlables.length; i++) {
                _this.magnetHash = data['data']['movies'][0]['torrents'][i]['hash'];
                _this.magnetUrl = data['data']['movies'][0]['torrents'][i]['url'];
                // tslint:disable-next-line:max-line-length
                _this.magnet = "magnet:?xt=urn:btih:" + _this.magnetHash + "&dn=" + _this.magnetUrl + "+Encoded+Movie+Name&tr=http://track.one:1234/announce&tr=udp://track.two:80";
                _this.gMagnet.push(_this.magnet);
            }
        });
    };
    DetailedViewComponent.prototype.cleanURL = function (oldURL) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(oldURL);
    };
    DetailedViewComponent.prototype.getIt_1337 = function (name) {
        var _this = this;
        this.tus.getmovie_1337(name).subscribe(function (data) {
            _this.link_1337 = data;
            for (var i = 0; i < _this.link_1337.length; i++) {
                _this.link_1337_magnet = data[i]['magnet'];
                _this.link_1337_gMagnet.push(_this.link_1337_magnet);
            }
        });
    };
    DetailedViewComponent.prototype.getIt_limetorrent = function (name) {
        var _this = this;
        this.tus.getmovie_limetorrent(name).subscribe(function (data) {
            _this.link_limetorrent = data;
        });
    };
    DetailedViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detailed-view',
            template: __webpack_require__(/*! ./detailed-view.component.html */ "./src/app/components/detailed-view/detailed-view.component.html"),
            styles: [__webpack_require__(/*! ./detailed-view.component.css */ "./src/app/components/detailed-view/detailed-view.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_tmdb_service__WEBPACK_IMPORTED_MODULE_2__["TmdbService"],
            _shared_yts_service__WEBPACK_IMPORTED_MODULE_3__["YtsService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"],
            _shared_tus_service__WEBPACK_IMPORTED_MODULE_4__["TusService"]])
    ], DetailedViewComponent);
    return DetailedViewComponent;
}());



/***/ }),

/***/ "./src/app/components/download-movies/download-movies.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/download-movies/download-movies.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/download-movies/download-movies.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/download-movies/download-movies.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"download-section\">\n    <mat-tab-group class=\"tab-menu\">\n    <mat-tab label=\"YTS HD\">\n      <table class=\"table-list\">\n        <tr *ngFor=\"let quality of Downlables\">\n          <td class=\"table-list__item\">{{quality.quality}}</td>\n          <td class=\"table-list__item\">{{quality.size}}</td>\n          <td class=\"table-list__item\"><a href=\"{{quality.url}}\">\n              <i class=\"la la-link\"></i>\n            </a></td>\n          <td class=\"table-list__item\"><a [href]=\"gMagnet | safe: 'resourceUrl'\">\n              <i class=\"la la-magnet\"></i>\n            </a></td>\n        </tr>\n      </table>\n      \n    </mat-tab>\n    <mat-tab label=\"1337x\"> \n     \n    </mat-tab>\n  </mat-tab-group>\n</section>"

/***/ }),

/***/ "./src/app/components/download-movies/download-movies.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/download-movies/download-movies.component.ts ***!
  \*************************************************************************/
/*! exports provided: DownloadMoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadMoviesComponent", function() { return DownloadMoviesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_tmdb_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/tmdb.service */ "./src/app/shared/tmdb.service.ts");
/* harmony import */ var _shared_yts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/yts.service */ "./src/app/shared/yts.service.ts");
/* harmony import */ var _shared_tus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/tus.service */ "./src/app/shared/tus.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DownloadMoviesComponent = /** @class */ (function () {
    function DownloadMoviesComponent(tmdb, yts, sanitizer, tus) {
        this.tmdb = tmdb;
        this.yts = yts;
        this.sanitizer = sanitizer;
        this.tus = tus;
        this.movieDetail = [];
        this.Downlables = [];
        this.url = [];
        this.gMagnet = [];
        this.link_1337 = [];
        this.link_1337_gMagnet = [];
        this.name = 'movies';
    }
    DownloadMoviesComponent.prototype.ngOnInit = function () {
        this.feedMe();
    };
    DownloadMoviesComponent.prototype.feedMe = function () {
        var _this = this;
        this.tmdb.getMovieDetail(this.id).subscribe(function (Data) {
            _this.movieDetail = Data;
            _this.passMe = _this.movieDetail['original_title'];
            _this.getDownloadFile(_this.passMe);
            _this.getIt_1337(_this.passMe);
            _this.getIt_limetorrent(_this.passMe);
        });
    };
    DownloadMoviesComponent.prototype.getDownloadFile = function (title) {
        var _this = this;
        this.yts.getDownlodableTorrent(title).subscribe(function (data) {
            _this.Downlables = data['data']['movies'][0]['torrents'];
            for (var i = 0; i < _this.Downlables.length; i++) {
                _this.magnetHash = data['data']['movies'][0]['torrents'][i]['hash'];
                _this.magnetUrl = data['data']['movies'][0]['torrents'][i]['url'];
                // tslint:disable-next-line:max-line-length
                _this.magnet = "magnet:?xt=urn:btih:" + _this.magnetHash + "&dn=" + _this.magnetUrl + "+Encoded+Movie+Name&tr=http://track.one:1234/announce&tr=udp://track.two:80";
                _this.gMagnet.push(_this.magnet);
            }
        });
    };
    DownloadMoviesComponent.prototype.getIt_1337 = function (name) {
        var _this = this;
        this.tus.getmovie_1337(name).subscribe(function (data) {
            _this.link_1337 = data;
            for (var i = 0; i < _this.link_1337.length; i++) {
                _this.link_1337_magnet = data[i]['magnet'];
                _this.link_1337_gMagnet.push(_this.link_1337_magnet);
            }
        });
    };
    DownloadMoviesComponent.prototype.getIt_limetorrent = function (name) {
        var _this = this;
        this.tus.getmovie_limetorrent(name).subscribe(function (data) {
            _this.link_limetorrent = data;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DownloadMoviesComponent.prototype, "id", void 0);
    DownloadMoviesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-download-movies',
            template: __webpack_require__(/*! ./download-movies.component.html */ "./src/app/components/download-movies/download-movies.component.html"),
            styles: [__webpack_require__(/*! ./download-movies.component.css */ "./src/app/components/download-movies/download-movies.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_tmdb_service__WEBPACK_IMPORTED_MODULE_1__["TmdbService"],
            _shared_yts_service__WEBPACK_IMPORTED_MODULE_2__["YtsService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"],
            _shared_tus_service__WEBPACK_IMPORTED_MODULE_3__["TusService"]])
    ], DownloadMoviesComponent);
    return DownloadMoviesComponent;
}());



/***/ }),

/***/ "./src/app/components/download-series/download-series.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/download-series/download-series.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/download-series/download-series.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/download-series/download-series.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"episode-list\">\n  <app-loading *ngIf=\"loading\"></app-loading>\n  <div *ngIf=\"!loading\" class=\"series-section\">\n    <table class=\"table-list\">\n        <tr *ngFor=\"let episodes of series\" class=\"tbody\">\n            <td class=\"table-list__item\">{{episodes.episode}}</td>\n            <td class=\"table-list__item\">{{episodes.size}}</td>\n            <td class=\"table-list__item\"><a href=\"{{episodes.url}}\">\n                <i class=\"la la-cloud-download\"></i>\n            </a></td>\n       </tr>\n      </table>\n  </div>\n\n\n</section>"

/***/ }),

/***/ "./src/app/components/download-series/download-series.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/download-series/download-series.component.ts ***!
  \*************************************************************************/
/*! exports provided: DownloadSeriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadSeriesComponent", function() { return DownloadSeriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _teamusapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../teamusapi.service */ "./src/app/teamusapi.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DownloadSeriesComponent = /** @class */ (function () {
    function DownloadSeriesComponent(tas) {
        this.tas = tas;
        this.loading = true;
    }
    DownloadSeriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.loading = false;
        }, 3000);
        this.getInfo(this.id);
    };
    DownloadSeriesComponent.prototype.getInfo = function (id) {
        var _this = this;
        this.tas.getdetails(id).subscribe(function (data) {
            _this.name = data['original_name'];
            _this.getFiles(_this.name);
        });
    };
    DownloadSeriesComponent.prototype.getFiles = function (title) {
        var _this = this;
        this.tas.getSeries(title).subscribe(function (res) {
            _this.series = res;
        }, function (err) {
            _this.error = err;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DownloadSeriesComponent.prototype, "id", void 0);
    DownloadSeriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-download-series',
            template: __webpack_require__(/*! ./download-series.component.html */ "./src/app/components/download-series/download-series.component.html"),
            styles: [__webpack_require__(/*! ./download-series.component.css */ "./src/app/components/download-series/download-series.component.css")]
        }),
        __metadata("design:paramtypes", [_teamusapi_service__WEBPACK_IMPORTED_MODULE_1__["TeamusapiService"]])
    ], DownloadSeriesComponent);
    return DownloadSeriesComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/full-cast/full-cast.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/full-cast/full-cast.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/full-cast/full-cast.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/full-cast/full-cast.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full-cast\">\n  <mat-tab-group animationDuration=\"0ms\" mat-align-tabs=\"center\">\n    <mat-tab label=\"Cast\"> \n        <div class=\"cast\">\n            <h2>Cast</h2>\n            <div class=\"section group clearfix\">\n              <div *ngFor=\"let cast of actorPicture,let i = index\">\n             \n                  <div class=\"col span_1_of_3\">\n                    <div class=\"cast-thumbnail\">\n                      <ng-template *ngIf=\"cast.profile_path!= null;then showPoster;else hidePoster\"></ng-template>\n                      <ng-template #showPoster>\n                        <img class=\"cast-img\" src=\"https://image.tmdb.org/t/p/w400/{{cast.profile_path}}\" alt=\"\">\n                      </ng-template>\n                      <ng-template #hidePoster>\n                        <div class=\"search-result__thumbnail\">\n                          <h4>No poster found</h4>\n                        </div>\n                      </ng-template>\n                    </div>\n                    <div class=\"cast-name\">\n                      <a class=\"cast-details\" [routerLink]=\"['/star-details',cast.id]\">{{cast.name}}</a><br>\n                      as <br>{{cast.character}}\n                    </div>\n          \n                  </div>\n                </div>\n              </div>\n          \n          \n          \n            </div>\n    </mat-tab>\n    <mat-tab label=\"Crew\" *ngIf=\"crewIsEmpty\"> \n        <div class=\"cast\" style=\"background-color: transparent;\">\n            <h2>Crew</h2>\n            <div class=\"section group clearfix\">\n              <div *ngFor=\"let cast of crewPicture,let i = index\">\n               \n                  <div class=\"col span_1_of_3\">\n                    <div class=\"cast-thumbnail\">\n                      <ng-template *ngIf=\"cast.profile_path!= null;then showPoster;else hidePoster\"></ng-template>\n                      <ng-template #showPoster>\n                        <img class=\"cast-img\" src=\"https://image.tmdb.org/t/p/w400/{{cast.profile_path}}\" alt=\"\">\n                      </ng-template>\n                      <ng-template #hidePoster>\n                        <div class=\"search-result__thumbnail\">\n                          <h4>No poster found</h4>\n                        </div>\n                      </ng-template>\n                    </div>\n                    <div class=\"cast-name\">\n                      <a class=\"cast-details\" [routerLink]=\"['/star-details',cast.id]\">{{cast.name}}</a><br>\n                      <br>{{cast.job}}\n                    </div>\n          \n                  </div>\n                </div>\n              </div>\n          \n          \n          \n            </div>  \n    </mat-tab>\n</mat-tab-group>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/full-cast/full-cast.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/full-cast/full-cast.component.ts ***!
  \*************************************************************/
/*! exports provided: FullCastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullCastComponent", function() { return FullCastComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_tmdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/tmdb.service */ "./src/app/shared/tmdb.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FullCastComponent = /** @class */ (function () {
    function FullCastComponent(route, tmdb) {
        this.route = route;
        this.tmdb = tmdb;
        this.crewIsEmpty = false;
        this.actorList = [];
        this.actorPicture = [];
        this.crewPicture = [];
    }
    FullCastComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (Params) {
            _this.isTrue = Params['series'];
            _this.id = Params['id'];
        });
        if (this.isTrue === 'false') {
            this.getCredit(this.id);
        }
        else {
            this.getTvCredit(this.id);
        }
    };
    FullCastComponent.prototype.getCredit = function (id) {
        var _this = this;
        this.tmdb.getMovieCredits(id).subscribe(function (data) {
            _this.credits = data['cast'];
            _this.crew = data['crew'];
            for (var i = 0; i < _this.credits.length; i++) {
                if (data['cast'][i]['profile_path'] != null) {
                    _this.actorPicture.push(data['cast'][i]);
                }
            }
            for (var i = 0; i < _this.crew.length; i++) {
                if (data['crew'][i]['profile_path'] != null) {
                    _this.crewPicture.push(data['crew'][i]);
                }
            }
            if (_this.crew.length > 0) {
                _this.crewIsEmpty = true;
            }
        });
    };
    FullCastComponent.prototype.getTvCredit = function (id) {
        var _this = this;
        this.tmdb.getTvCredits(id).subscribe(function (data) {
            _this.credits = data['cast'];
            _this.crew = data['crew'];
            for (var i = 0; i < _this.credits.length; i++) {
                if (data['cast'][i]['profile_path'] != null) {
                    _this.actorPicture.push(data['cast'][i]);
                }
            }
            for (var i = 0; i < _this.crew.length; i++) {
                if (data['crew'][i]['profile_path'] != null) {
                    _this.crewPicture.push(data['crew'][i]);
                }
            }
            if (_this.crew.length > 0) {
                _this.crewIsEmpty = true;
            }
        });
    };
    FullCastComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-full-cast',
            template: __webpack_require__(/*! ./full-cast.component.html */ "./src/app/components/full-cast/full-cast.component.html"),
            styles: [__webpack_require__(/*! ./full-cast.component.css */ "./src/app/components/full-cast/full-cast.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_tmdb_service__WEBPACK_IMPORTED_MODULE_2__["TmdbService"]])
    ], FullCastComponent);
    return FullCastComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-loading *ngIf=\"pageload\"></app-loading>\n\n<div *ngIf=\"!pageload\">\n    <section class=\"movie-list\">\n        <div class=\"section group\">\n          <div class=\"col span_1_of_3\" *ngFor=\"let list of list,let i = index\">\n            <div class=\"movie-poster\" *ngIf=\"i <= 20\">\n              <div class=\"movie-poster__detail\">\n                <h3 class=\"movie-box__title\">\n        \n        \n                  <ng-template *ngIf=\"list.original_title;then movie;else series\">\n                  </ng-template>\n        \n                  <ng-template #movie>{{list.original_title}}</ng-template>\n                  <ng-template #series>{{list.original_name}}</ng-template>\n        \n        \n                </h3>\n                <ul class=\"movie-box__info\">\n                  <ng-template *ngIf=\"list.release_date;then moviedate;else seriesdate\">\n                  </ng-template>\n        \n                  <ng-template #moviedate>\n                    <li><p>Release Date:{{list.release_date}}</p></li>\n                    <li>\n                      <a class=\"btn btn-white-view\" [routerLink]=\"[ '/detailView',list.id]\">view</a>\n                    </li>\n                  </ng-template>\n                  <ng-template #seriesdate>\n                    <li>\n                      <p>First Aired on:{{list.first_air_date}}</p>\n                      \n                    </li>\n                    <li>\n                      <a class=\"btn btn-white-view\" [routerLink]=\"[ '/tv-detailed-view',list.id]\">view</a>\n                    </li>\n                  </ng-template>\n                </ul>\n              </div>\n              <div class=\"movie-poster__image\">\n                <img src=\"https://image.tmdb.org/t/p/w400/{{list.poster_path}}\" alt=\"{{list.original_title}}\" class=\"movie-box__img\">\n              </div>\n        \n        \n            </div>\n          </div>\n        </div>\n      </section>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_tmdb_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/tmdb.service */ "./src/app/shared/tmdb.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(api, router) {
        this.api = api;
        this.router = router;
        this.list = [];
        this.genre = [];
        this.pageload = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.pageload = false;
        }, 3000);
        this.showPopular();
    };
    HomeComponent.prototype.showPopular = function () {
        var _this = this;
        this.api.getTrending().subscribe(function (data) {
            _this.list = data['results'];
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_tmdb_service__WEBPACK_IMPORTED_MODULE_1__["TmdbService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/preview-cast/preview-cast.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/preview-cast/preview-cast.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/preview-cast/preview-cast.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/preview-cast/preview-cast.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cast\">\n    <h2>Cast</h2>\n      <div class=\"section group\">\n        <div *ngFor=\"let cast of actorPicture,let i = index\">\n          <div *ngIf=\"i <= 5\">\n              <div class=\"col span_1_of_3\" >\n                  <div class=\"cast-thumbnail\" >\n                    <ng-template *ngIf=\"cast.profile_path!= null;then showPoster;else hidePoster\"></ng-template>\n                    <ng-template #showPoster>\n                      <img class=\"cast-img\" src=\"https://image.tmdb.org/t/p/w400/{{cast.profile_path}}\" alt=\"\">\n                    </ng-template>\n                    <ng-template #hidePoster>\n                      <div class=\"search-result__thumbnail\">\n                        <h4>No poster found</h4>\n                      </div>\n                    </ng-template>\n                  </div>\n                  <div class=\"cast-name\">\n                    <a class=\"cast-detail\" [routerLink]=\"['/star-details',cast.id]\">{{cast.name}}</a><br>\n                    as <br>{{cast.character}}\n                  </div>\n                  \n                </div>\n          </div>\n        </div>\n        \n    \n       \n      </div>\n    \n      <a class=\"btn btn-white-view cast-full\" [routerLink]=\"['/full-cast']\" [queryParams]=\"{'id': id,'series':false}\">\n        See fullcast\n        <i class=\"la la-angle-double-right\"></i></a>\n    </div>\n    "

/***/ }),

/***/ "./src/app/components/preview-cast/preview-cast.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/preview-cast/preview-cast.component.ts ***!
  \*******************************************************************/
/*! exports provided: PreviewCastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewCastComponent", function() { return PreviewCastComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_tmdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/tmdb.service */ "./src/app/shared/tmdb.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PreviewCastComponent = /** @class */ (function () {
    function PreviewCastComponent(route, tmdb) {
        this.route = route;
        this.tmdb = tmdb;
        this.actorPicture = [];
    }
    PreviewCastComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.getCredit(this.id);
    };
    PreviewCastComponent.prototype.getCredit = function (id) {
        var _this = this;
        this.tmdb.getMovieCredits(id).subscribe(function (data) {
            _this.credits = data['cast'];
            for (var i = 0; i < _this.credits.length; i++) {
                if (data['cast'][i]['profile_path'] != null) {
                    _this.actorPicture.push(data['cast'][i]);
                }
            }
        });
    };
    PreviewCastComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-preview-cast',
            template: __webpack_require__(/*! ./preview-cast.component.html */ "./src/app/components/preview-cast/preview-cast.component.html"),
            styles: [__webpack_require__(/*! ./preview-cast.component.css */ "./src/app/components/preview-cast/preview-cast.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_tmdb_service__WEBPACK_IMPORTED_MODULE_2__["TmdbService"]])
    ], PreviewCastComponent);
    return PreviewCastComponent;
}());



/***/ }),

/***/ "./src/app/components/review-n-preview/review-n-preview.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/review-n-preview/review-n-preview.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/review-n-preview/review-n-preview.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/review-n-preview/review-n-preview.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section group\">\n    <div *ngFor=\"let list of pure_links, let i = index\">\n      <div *ngIf=\"i === 0\">\n          <iframe width=\"100%\" height=\"550px\" [src]=\"list.url | youtube\" frameborder=\"0\" allowfullscreen></iframe>\n        </div>\n      </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/review-n-preview/review-n-preview.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/review-n-preview/review-n-preview.component.ts ***!
  \***************************************************************************/
/*! exports provided: ReviewNPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewNPreviewComponent", function() { return ReviewNPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_tmdb_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/tmdb.service */ "./src/app/shared/tmdb.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReviewNPreviewComponent = /** @class */ (function () {
    function ReviewNPreviewComponent(tmdb, sanitizer) {
        this.tmdb = tmdb;
        this.sanitizer = sanitizer;
        this.pure_links = [];
        this.tv = [];
    }
    ReviewNPreviewComponent.prototype.ngOnInit = function () {
        console.log(this.name);
        if (this.name === 'series') {
            this.getTvTrailer(this.id);
            console.log(this.name);
            console.log(this.id);
        }
        else if (this.name === 'movies') {
            this.getTrailer(this.id);
            console.log(this.name);
        }
    };
    ReviewNPreviewComponent.prototype.getTrailer = function (id) {
        var _this = this;
        this.tmdb.getVideos(id).subscribe(function (data) {
            _this.list = data['results'];
            for (var i = 0; i < _this.list.length; i++) {
                _this.link = { url: '//www.youtube.com/embed/' + data['results'][i]['key'] };
                _this.pure_links.push(_this.link);
            }
        });
    };
    ReviewNPreviewComponent.prototype.getTvTrailer = function (id) {
        var _this = this;
        this.tmdb.getTvVideos(id).subscribe(function (data) {
            _this.tv = data['results'];
            if (_this.tv) {
                for (var i = 0; i < _this.tv.length; i++) {
                    _this.link = { url: '//www.youtube.com/embed/' + data['results'][i]['key'] };
                    _this.pure_links.push(_this.link);
                }
            }
            else {
                _this.text = 'there is no trailer at the momemt';
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ReviewNPreviewComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ReviewNPreviewComponent.prototype, "name", void 0);
    ReviewNPreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-review-n-preview',
            template: __webpack_require__(/*! ./review-n-preview.component.html */ "./src/app/components/review-n-preview/review-n-preview.component.html"),
            styles: [__webpack_require__(/*! ./review-n-preview.component.css */ "./src/app/components/review-n-preview/review-n-preview.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_tmdb_service__WEBPACK_IMPORTED_MODULE_1__["TmdbService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], ReviewNPreviewComponent);
    return ReviewNPreviewComponent;
}());



/***/ }),

/***/ "./src/app/components/search-results/search-results.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/search-results/search-results.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/search-results/search-results.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/search-results/search-results.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-result\">\n  <h1>Matching Results</h1>\n  <app-loading *ngIf=\"pageload\"></app-loading>\n  <div *ngIf=\"!pageload\">\n      <ul class=\"search-result__list\" *ngFor=\"let result of result\" [ngSwitch]=\"result.media_type\">\n          <li *ngSwitchCase=\"'person'\">\n            <a [routerLink]=\"['/star-details',result.id]\" class=\"section group\">\n              <div class=\"col span_1_of_2\">\n                <ng-template *ngIf=\"result.profile_path!= null;then showPoster;else hidePoster\"></ng-template>\n                <ng-template #showPoster>\n                  <img class=\"search-result__thumbnail\" src=\"https://image.tmdb.org/t/p/w400/{{result.profile_path}}\" alt=\"\">\n                </ng-template>\n                <ng-template #hidePoster>\n                  <div class=\"search-result__thumbnail\">\n                    <h4>No poster found</h4>\n                  </div>\n                </ng-template>\n              </div>\n              <div class=\"col span_1_of_2\">\n             <div class=\"search-list__detail\">\n               <p class=\"search-result__info\">{{result.name}}</p>\n               <p class=\"search-result__info\"><i class=\"la la-star-o\"></i>popularity: {{result.popularity}}</p>\n               <p class=\"search-result__info\"><i class=\"la la-user\"></i>media_type: {{result.media_type}}</p>\n               <p class=\"search-result__info\"></p>\n             </div>\n              </div>\n            </a>\n          </li>\n          <li *ngSwitchCase=\"'movie'\">\n              <a [routerLink]=\"['/detailView',result.id]\" class=\"section group\">\n                <div class=\"col span_1_of_2\">\n                  <ng-template *ngIf=\"result.poster_path!= null;then showPoster;else hidePoster\"></ng-template>\n                  <ng-template #showPoster>\n                    <img class=\"search-result__thumbnail\" src=\"https://image.tmdb.org/t/p/w400/{{result.poster_path}}\" alt=\"\">\n                  </ng-template>\n                  <ng-template #hidePoster>\n                    <div class=\"search-result__thumbnail\">\n                      <h4>No poster found</h4>\n                    </div>\n                  </ng-template>\n                </div>\n                <div class=\"col span_1_of_2\">\n               <div class=\"search-list__detail\">\n                 <p class=\"search-result__info\">{{result.original_title}}</p>\n                 <p class=\"search-result__info\"><i class=\"la la-star-o\"></i>popularity: {{result.popularity}}</p>\n                 <p class=\"search-result__info\"><i class=\"la la-user\"></i>media_type: {{result.media_type}}</p>\n                 <p class=\"search-result__info\"><i class=\"la la-calendar-o\"></i>release date: {{result.release_date}}</p>\n               </div>\n                </div>\n              </a>\n          </li>\n          <li *ngSwitchCase=\"'tv'\">\n              <a [routerLink]=\"['/tv-detailed-view',result.id]\" class=\"section group\">\n                <div class=\"col span_1_of_2\">\n                  <ng-template *ngIf=\"result.poster_path!= null;then showPoster;else hidePoster\"></ng-template>\n                  <ng-template #showPoster>\n                    <img class=\"search-result__thumbnail\" src=\"https://image.tmdb.org/t/p/w400/{{result.poster_path}}\" alt=\"\">\n                  </ng-template>\n                  <ng-template #hidePoster>\n                    <div class=\"search-result__thumbnail\">\n                      <h4>No poster found</h4>\n                    </div>\n                  </ng-template>\n                </div>\n                <div class=\"col span_1_of_2\">\n               <div class=\"search-list__detail\">\n                 <p class=\"search-result__info\">{{result.original_name}}</p>\n                 <p class=\"search-result__info\"><i class=\"la la-star-o\"></i>popularity: {{result.popularity}}</p>\n                 <p class=\"search-result__info\"><i class=\"la la-user\"></i>media_type: {{result.media_type}}</p>\n                 <p class=\"search-result__info\"><i class=\"la la-calendar-o\"></i>first air date: {{result.first_air_date}}</p>\n               </div>\n                </div>\n              </a>\n          </li>\n        </ul>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/search-results/search-results.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/search-results/search-results.component.ts ***!
  \***********************************************************************/
/*! exports provided: SearchResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultsComponent", function() { return SearchResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_tmdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/tmdb.service */ "./src/app/shared/tmdb.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchResultsComponent = /** @class */ (function () {
    function SearchResultsComponent(route, tmdb) {
        this.route = route;
        this.tmdb = tmdb;
        this.realGenre = [];
        this.pageload = true;
    }
    SearchResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.pageload = false;
        }, 2000);
        this.sub = this.route.params.subscribe(function (params) {
            _this.keyword = params['name'];
            _this.pageload = false;
            _this.getSearchResult(_this.keyword);
        });
    };
    SearchResultsComponent.prototype.getSearchResult = function (key) {
        var _this = this;
        this.tmdb.searchMe(key).subscribe(function (data) {
            _this.result = data['results'];
        });
    };
    SearchResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-results',
            template: __webpack_require__(/*! ./search-results.component.html */ "./src/app/components/search-results/search-results.component.html"),
            styles: [__webpack_require__(/*! ./search-results.component.css */ "./src/app/components/search-results/search-results.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_tmdb_service__WEBPACK_IMPORTED_MODULE_2__["TmdbService"]])
    ], SearchResultsComponent);
    return SearchResultsComponent;
}());



/***/ }),

/***/ "./src/app/components/side-nav/side-nav.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/side-nav/side-nav.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/side-nav/side-nav.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/side-nav/side-nav.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-menu clearfix\">\n  <ul class=\"nav-list \">\n    <li class=\"nav-item\"><a href=\"#\" class=\"nav-link\" routerLink=\"Home\"><i class=\"la la-home\"></i>\n      <p>Home</p>\n    </a></li>\n    <li class=\"nav-item\">\n      <a href=\"#\" routerLink=\"Browse/1\" class=\"nav-link\">\n        <i class=\"la la-film\"></i>\n        <p>Browse</p>\n      </a>\n      </li>\n    <li class=\"nav-item\"><a href=\"javascript:void(0)\" (click)=\"showbar()\" class=\"nav-link hidden-value\" ><i class=\"la la-search\"></i>\n     <p>Search</p> \n    </a></li>\n    <li class=\"nav-item\"><a href=\"\" class=\"nav-link\"><i class=\"la la-info-circle\"></i>\n      <p>About-Us</p>\n    </a></li>\n    <li class=\"nav-item\" *ngIf=\"showBar\">\n      <div class=\"search-area\">\n     \n        <input (keydown.enter)=\"goToSearch(search.value)\"  type=\"text\" class=\"search-area__box\" #search>\n          <a class=\"search-area__icon\"><i class=\"la la-search\"></i></a>\n      </div>\n    </li>\n  </ul>\n \n</div>\n\n<div class=\"show\" *ngIf=\"showBar\">\n  <div class=\"search-tablet\">   \n    <input (keydown.enter)=\"goToSearch(search.value)\"  type=\"text\" class=\"search-tablet__box\" #search>\n      \n  </div>\n  \n</div>\n<input  (keydown.enter)=\"goToSearch(search.value)\" [@slideIn]='state' type=\"text\" class=\"search-mobile__box\" #search>\n<input  (keydown.enter)=\"goToSearch(keyword.value)\" [@slideIn375]='state' type=\"text\" class=\"search-mobile__375px\" #keyword>\n<a class=\"show-mobile-480-px\"  (click)='showMe()'>\n <i class=\"la la-search\"></i>     \n</a>\n\n"

/***/ }),

/***/ "./src/app/components/side-nav/side-nav.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/side-nav/side-nav.component.ts ***!
  \***********************************************************/
/*! exports provided: SideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return SideNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SideNavComponent = /** @class */ (function () {
    function SideNavComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.showBar = false;
        this.state = 'hidden';
    }
    SideNavComponent.prototype.ngOnInit = function () {
    };
    SideNavComponent.prototype.goToSearch = function (term) {
        this.router.navigate(['/search', term]);
        this.showBar = !this.showBar;
    };
    SideNavComponent.prototype.showbar = function () {
        this.showBar = !this.showBar;
    };
    SideNavComponent.prototype.showMe = function () {
        this.state = this.state === 'hidden' ? 'displayed' : 'hidden';
    };
    SideNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-nav',
            template: __webpack_require__(/*! ./side-nav.component.html */ "./src/app/components/side-nav/side-nav.component.html"),
            styles: [__webpack_require__(/*! ./side-nav.component.css */ "./src/app/components/side-nav/side-nav.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slideIn', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: '0',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('displayed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: '1',
                        margin: '152% 0 0 40%',
                        transform: 'rotateZ(0deg)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hidden <=> displayed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('880ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        margin: '173% 0 0 43%', transform: 'rotateZ(-45deg)', opacity: '1'
                    })))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slideIn375', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: '0',
                        margin: '220% 0px 0px 64%'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('displayed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: '1',
                        margin: '193% 0px 0px 34%',
                        transform: 'rotateZ(0deg)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hidden <=> displayed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('880ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        margin: '212% 0px 0px 45%', transform: 'rotateZ(-45deg)', opacity: '1'
                    })))
                ])
            ]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SideNavComponent);
    return SideNavComponent;
}());



/***/ }),

/***/ "./src/app/components/star-details/star-details.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/star-details/star-details.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/star-details/star-details.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/star-details/star-details.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"star-page\">\n  <div class=\"section group from-top-4\">\n  <div class=\"col span_1_of_3\">\n    <div class=\"poster-img\">\n      <img src=\"https://image.tmdb.org/t/p/w400/{{personal.profile_path}}\" alt=\"\" class=\"poster-img__image\">\n    </div>\n  </div>\n  <div class=\"col span_2_of_3\">\n    <div class=\"mv-detail\">\n      <h2 class=\"mv-detail__title\">\n        {{personal.name}}\n      </h2>\n      <div class=\"star-detailed\">\n        <ul class=\"star-data\">\n          <li>Name: {{personal.name}}</li>\n          <li>Also known as:\n            <ul class=\"star-aka clearfix\">\n              <li *ngFor=\"let name of aka\"> {{name}}</li>\n            </ul>\n          </li>\n          <li>\n            <p class=\"star-info\">BirthDate:<span>{{personal.birthday}}</span></p>\n          </li>\n          <li>\n            <p class=\"star-info\">Place of birth: <span>{{personal.place_of_birth}}</span></p>\n          </li>\n          <li>\n            <p class=\"star-info\">DeathDate:<span>{{personal.deathday}}</span></p>\n          </li>\n          <li>\n            <p class=\"star-info\">Popularity:<span>{{personal.popularity}}</span></p>\n          </li>\n          <li>Homepage:<a href=\"{{personal.homepage}}\" class=\"star-link\">{{personal.homepage}}</a></li>\n        </ul>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<section class=\"star-history\">\n  <div class=\"star-biography\">\n    <h2>BIOGRAPHY</h2>\n  </div>\n  <p class=\"star-history__text\">\n    {{personal.biography}}\n  </p>\n</section>\n\n<section class=\"film\">\n  <h2>Cast</h2>\n  <div id=\"container\">\n\n    <div id=\"grid\" class=\"image-cropper\">\n      <div class=\"img\" *ngFor=\"let url of Act; let i = index\">\n        <div class=\"img-info\">\n          <h3 class=\"img-info__title\">\n            <ng-template *ngIf=\"url.original_title;then movie;else series\">\n            </ng-template>\n\n            <ng-template #movie>{{url.original_title}}</ng-template>\n            <ng-template #series>{{url.original_name}}</ng-template>\n\n\n          </h3>\n          <ul class=\"img-info__list\">\n            <ng-template *ngIf=\"url.release_date;then moviedate;else seriesdate\">\n            </ng-template>\n\n            <ng-template #moviedate>\n              <li>Character:{{url.character}}</li>\n              <li>Release Date:{{url.release_date}}</li>\n              <li>\n                <a class=\"btn btn-white-view\" [routerLink]=\"[ '/detailView',url.id]\">view</a>\n              </li>\n            </ng-template>\n            <ng-template #seriesdate>\n                <li>Release Date:{{url.character}}</li>\n              <li>\n                First Aired on:{{url.first_air_date}}\n              </li>\n              <li>\n                <a class=\"btn btn-white-view\" [routerLink]=\"[ '/tv-detailed-view',url.id]\">view</a>\n              </li>\n            </ng-template>\n          </ul>\n        </div>\n\n        <ng-template *ngIf=\"url.poster_path!= null;then showPoster;else hidePoster\"></ng-template>\n\n\n        <ng-template #showPoster>\n          <img [@move]=\"state\" (@move.done)=\"onFinish($event)\" (@move.start)=\"onStart($event)\" [attr.class]=\"i\" src=\"https://image.tmdb.org/t/p/w400/{{url.poster_path}}\"\n          alt=\"\" />\n        </ng-template>\n        <ng-template #hidePoster>\n          <div class=\"no-poster\">\n              <h4>No poster found</h4>\n          </div>\n          \n         \n        </ng-template>\n        \n      </div>\n\n    </div>\n    <div>\n      <a id=\"slider-buttons-left\" (click)=\"moveLeft()\">&#10094;</a>\n      <a id=\"slider-buttons-right\" (click)=\"moveRight()\">&#10095;</a>\n    </div>\n  </div>\n\n</section>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/components/star-details/star-details.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/star-details/star-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: StarDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarDetailsComponent", function() { return StarDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _shared_tmdb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/tmdb.service */ "./src/app/shared/tmdb.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StarDetailsComponent = /** @class */ (function () {
    function StarDetailsComponent(route, tmdb) {
        this.route = route;
        this.tmdb = tmdb;
        this.imagesUrl = [];
        this.state = 'void';
        this.disableSliderButtons = false;
    }
    StarDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.getPersonDetail(this.id);
        this.getPersonsCredit(this.id);
    };
    StarDetailsComponent.prototype.getPersonDetail = function (id) {
        var _this = this;
        this.tmdb.getPerson(id).subscribe(function (data) {
            _this.personal = data;
            _this.aka = data['also_known_as'];
        });
    };
    StarDetailsComponent.prototype.getPersonsCredit = function (id) {
        var _this = this;
        this.tmdb.getPersonMovie(id).subscribe(function (data) {
            _this.Act = data['cast'];
            _this.Crew = data['crew'];
        });
    };
    // animations
    StarDetailsComponent.prototype.imageRotate = function (arr, reverse) {
        if (reverse) {
            arr.unshift(arr.pop());
        }
        else {
            arr.push(arr.shift());
        }
        return arr;
    };
    StarDetailsComponent.prototype.moveLeft = function () {
        if (this.disableSliderButtons) {
            return;
        }
        this.state = 'right';
        this.imageRotate(this.Act, true);
    };
    StarDetailsComponent.prototype.moveRight = function () {
        if (this.disableSliderButtons) {
            return;
        }
        this.state = 'left';
        this.imageRotate(this.Act, false);
    };
    StarDetailsComponent.prototype.onFinish = function ($event) {
        this.state = 'void';
        this.disableSliderButtons = false;
    };
    StarDetailsComponent.prototype.onStart = function ($event) {
        this.disableSliderButtons = true;
    };
    StarDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-star-details',
            template: __webpack_require__(/*! ./star-details.component.html */ "./src/app/components/star-details/star-details.component.html"),
            styles: [__webpack_require__(/*! ./star-details.component.css */ "./src/app/components/star-details/star-details.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('move', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(0)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => left', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(100%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(200)
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('left => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(0)' }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => right', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(-100%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(200)
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('right => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(0)' }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _shared_tmdb_service__WEBPACK_IMPORTED_MODULE_3__["TmdbService"]])
    ], StarDetailsComponent);
    return StarDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/tv-detailde-view/tv-detailde-view.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/tv-detailde-view/tv-detailde-view.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/tv-detailde-view/tv-detailde-view.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/tv-detailde-view/tv-detailde-view.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"series-detail\">\n    <div class=\"section group from-top-4\">\n        <div class=\"col span_1_of_3\">\n          <div class=\"poster-img\">\n            <img src=\"https://image.tmdb.org/t/p/w400/{{tvdetail.poster_path}}\" alt=\"\" class=\"poster-img__image\">\n          </div>\n        </div>\n        <div class=\"col span_2_of_3\">\n          <div class=\"mv-detail\">\n            <h2 class=\"mv-detail__title\">\n              {{tvdetail.original_name}}\n            </h2>\n            <div class=\"mv-detail__syn\">\n              <h2>SYNOPSIS</h2>\n              <p class=\"syn-word\">{{tvdetail.overview}}</p>\n            </div>\n            <div class=\"mv-detail__tags\">\n              <ul class=\"tags\">\n                <li *ngFor=\"let tags of genre\">\n                  <i class=\"icon-Tag\"></i>{{tags.name}}\n                </li>\n              </ul>\n            </div>\n            <div class=\"mv-detail__rates\">\n              <ul class=\"rated-data\">\n                <li><i class=\"icon-Video\"></i>Status: {{tvdetail.status}}</li>\n                <li><i class=\"icon-BarGraph\"></i>Popularity:{{tvdetail.popularity}}</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n      <section class=\"movie-vid-n-rev\">\n          <app-review-n-preview [id]=\"id\" [name]=\"series\"></app-review-n-preview>\n      </section>\n      \n  \n      \n      \n      <section class=\"cast-area\">\n        <app-tv-preview-cast></app-tv-preview-cast>\n      </section>\n\n      <app-download-series [id]=\"id\"></app-download-series>\n      \n</div>\n\n"

/***/ }),

/***/ "./src/app/components/tv-detailde-view/tv-detailde-view.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/tv-detailde-view/tv-detailde-view.component.ts ***!
  \***************************************************************************/
/*! exports provided: TvDetaildeViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvDetaildeViewComponent", function() { return TvDetaildeViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_tus_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/tus.service */ "./src/app/shared/tus.service.ts");
/* harmony import */ var _shared_tmdb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/tmdb.service */ "./src/app/shared/tmdb.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TvDetaildeViewComponent = /** @class */ (function () {
    function TvDetaildeViewComponent(tus, route, tmdb) {
        this.tus = tus;
        this.route = route;
        this.tmdb = tmdb;
        this.tvdetail = [];
        this.episodes = [];
        this.series = 'series';
    }
    TvDetaildeViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.getInfo();
    };
    TvDetaildeViewComponent.prototype.getInfo = function () {
        var _this = this;
        this.tus.getdetails(this.id).subscribe(function (data) {
            _this.tvdetail = data;
            _this.genre = data['genres'];
            _this.name = data['original_name'];
            console.log(_this.name);
        });
    };
    TvDetaildeViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tv-detailde-view',
            template: __webpack_require__(/*! ./tv-detailde-view.component.html */ "./src/app/components/tv-detailde-view/tv-detailde-view.component.html"),
            styles: [__webpack_require__(/*! ./tv-detailde-view.component.css */ "./src/app/components/tv-detailde-view/tv-detailde-view.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_tus_service__WEBPACK_IMPORTED_MODULE_2__["TusService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_tmdb_service__WEBPACK_IMPORTED_MODULE_3__["TmdbService"]])
    ], TvDetaildeViewComponent);
    return TvDetaildeViewComponent;
}());



/***/ }),

/***/ "./src/app/components/tv-preview-cast/tv-preview-cast.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/tv-preview-cast/tv-preview-cast.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/tv-preview-cast/tv-preview-cast.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/tv-preview-cast/tv-preview-cast.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cast\">\n  <h2>Cast</h2>\n  <div class=\"section group\">\n    <div *ngFor=\"let cast of cast | slice:0:6; let i = index\">\n\n        <div class=\"col span_1_of_3\">\n          <div class=\"cast-thumbnail\">\n            <ng-template *ngIf=\"cast.profile_path!= null;then showPoster;else hidePoster\"></ng-template>\n            <ng-template #showPoster>\n              <img class=\"cast-img\" src=\"https://image.tmdb.org/t/p/w400/{{cast.profile_path}}\" alt=\"\">\n            </ng-template>\n            <ng-template #hidePoster>\n              <div class=\"search-result__thumbnail\">\n                <h4>No poster found</h4>\n              </div>\n            </ng-template>\n          </div>\n          <div class=\"cast-name\">\n            <a class=\"cast-detail\" [routerLink]=\"['/star-details',cast.id]\">{{cast.name}}</a><br>\n            as <br>{{cast.character}}\n          </div>\n\n        </div>\n   \n    </div>\n\n\n\n  </div>\n\n\n  <a class=\"btn btn-white-view cast-full\" [routerLink]=\"['/full-cast']\"   [queryParams]=\"{'id': id,'series':true}\">\n    See fullcast\n    <i class=\"la la-angle-double-right\"></i></a>\n</div>"

/***/ }),

/***/ "./src/app/components/tv-preview-cast/tv-preview-cast.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/tv-preview-cast/tv-preview-cast.component.ts ***!
  \*************************************************************************/
/*! exports provided: TvPreviewCastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvPreviewCastComponent", function() { return TvPreviewCastComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_tmdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/tmdb.service */ "./src/app/shared/tmdb.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TvPreviewCastComponent = /** @class */ (function () {
    function TvPreviewCastComponent(route, tmdb) {
        this.route = route;
        this.tmdb = tmdb;
        this.sizedCast = [];
        this.actorPicture = [];
    }
    TvPreviewCastComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.getTvCredit(this.id);
    };
    TvPreviewCastComponent.prototype.getTvCredit = function (id) {
        var _this = this;
        this.tmdb.getTvCredits(id).subscribe(function (data) {
            _this.cast = data['cast'];
            for (var i = 0; i < _this.cast.length; i++) {
                if (data['cast'][i]['profile_path'] != null) {
                    _this.actorPicture.push(data['cast'][i]);
                }
            }
        });
    };
    TvPreviewCastComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tv-preview-cast',
            template: __webpack_require__(/*! ./tv-preview-cast.component.html */ "./src/app/components/tv-preview-cast/tv-preview-cast.component.html"),
            styles: [__webpack_require__(/*! ./tv-preview-cast.component.css */ "./src/app/components/tv-preview-cast/tv-preview-cast.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_tmdb_service__WEBPACK_IMPORTED_MODULE_2__["TmdbService"]])
    ], TvPreviewCastComponent);
    return TvPreviewCastComponent;
}());



/***/ }),

/***/ "./src/app/safe.pipe.ts":
/*!******************************!*\
  !*** ./src/app/safe.pipe.ts ***!
  \******************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (value, type) {
        switch (type) {
            case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default: throw new Error("Invalid safe type specified: " + type);
        }
    };
    SafePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'safe'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "./src/app/shared/tmdb.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/tmdb.service.ts ***!
  \****************************************/
/*! exports provided: TmdbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmdbService", function() { return TmdbService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TmdbService = /** @class */ (function () {
    function TmdbService(http) {
        this.http = http;
        this.api_key = 'b8d25429d24bd53e8efe9922190e3e91';
    }
    TmdbService.prototype.getTrending = function () {
        return this.http.get("https://api.themoviedb.org/3/trending/all/day?api_key=" + this.api_key);
    };
    TmdbService.prototype.getGenre = function () {
        return this.http.get("https://api.themoviedb.org/3/genre/movie/list?api_key=" + this.api_key + "&language=en-US");
    };
    TmdbService.prototype.getMovieDetail = function (id) {
        return this.http.get("https://api.themoviedb.org/3/movie/" + id + "?api_key=" + this.api_key + "&language=en-US");
    };
    TmdbService.prototype.getMovieCredits = function (id) {
        return this.http.get("https://api.themoviedb.org/3/movie/" + id + "/credits?api_key=" + this.api_key);
    };
    TmdbService.prototype.getPerson = function (id) {
        return this.http.get("https://api.themoviedb.org/3/person/" + id + "?api_key=" + this.api_key);
    };
    TmdbService.prototype.getPersonMovie = function (id) {
        return this.http.get("https://api.themoviedb.org/3/person/" + id + "/movie_credits?api_key=" + this.api_key + "&language=en-US");
    };
    TmdbService.prototype.searchMe = function (term) {
        // tslint:disable-next-line:max-line-length
        return this.http.get("https://api.themoviedb.org/3/search/multi?api_key=" + this.api_key + "&language=en-US&query=" + term + "&page=1&include_adult=true");
    };
    TmdbService.prototype.genreName = function () {
        return this.http.get("https://api.themoviedb.org/3/genre/movie/list?api_key=" + this.api_key + "&language=en-US");
    };
    TmdbService.prototype.getTvCredits = function (id) {
        return this.http.get("https://api.themoviedb.org/3/tv/" + id + "/credits?api_key=" + this.api_key + "&language=en-US");
    };
    TmdbService.prototype.getVideos = function (id) {
        return this.http.get("https://api.themoviedb.org/3/movie/" + id + "/videos?api_key=" + this.api_key + "&language=en-US");
    };
    TmdbService.prototype.getPopularMovies = function (id) {
        return this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=" + this.api_key + "&language=en-US&page=" + id);
    };
    TmdbService.prototype.getPopularSeries = function (id) {
        return this.http.get("https://api.themoviedb.org/3/tv/popular?api_key=" + this.api_key + "&language=en-US&page=" + id);
    };
    TmdbService.prototype.getTvVideos = function (id) {
        return this.http.get("https://api.themoviedb.org/3/tv/" + id + "/videos?api_key=" + this.api_key + "&language=en-US");
    };
    TmdbService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TmdbService);
    return TmdbService;
}());



/***/ }),

/***/ "./src/app/shared/tus.service.ts":
/*!***************************************!*\
  !*** ./src/app/shared/tus.service.ts ***!
  \***************************************/
/*! exports provided: TusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TusService", function() { return TusService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TusService = /** @class */ (function () {
    function TusService(http) {
        this.http = http;
        this.api_key = 'b8d25429d24bd53e8efe9922190e3e91';
        this.api_root = 'http://localhost/scrape/index.php';
    }
    TusService.prototype.getdetails = function (id) {
        // tslint:disable-next-line:max-line-length
        return this.http.get("https://api.themoviedb.org/3/tv/" + id + "?api_key=" + this.api_key + "&language=en-US&append_to_response=last_episode_to_air");
    };
    TusService.prototype.getEpisodes = function (name) {
        return this.http.get(this.api_root + "/todaytvseries/" + name);
    };
    TusService.prototype.getmovie_1337 = function (name) {
        return this.http.get(this.api_root + "/1337x/" + name);
    };
    TusService.prototype.getmovie_limetorrent = function (name) {
        return this.http.get(this.api_root + "/limetorrent/" + name);
    };
    TusService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TusService);
    return TusService;
}());



/***/ }),

/***/ "./src/app/shared/yts.service.ts":
/*!***************************************!*\
  !*** ./src/app/shared/yts.service.ts ***!
  \***************************************/
/*! exports provided: YtsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YtsService", function() { return YtsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var YtsService = /** @class */ (function () {
    function YtsService(yts) {
        this.yts = yts;
        this.apiRoot = 'https://yts.am/api/v2/';
    }
    YtsService.prototype.getDownlodableTorrent = function (term) {
        return this.yts.get(this.apiRoot + "/list_movies.json?query_term=" + term);
    };
    YtsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], YtsService);
    return YtsService;
}());



/***/ }),

/***/ "./src/app/teamusapi.service.ts":
/*!**************************************!*\
  !*** ./src/app/teamusapi.service.ts ***!
  \**************************************/
/*! exports provided: TeamusapiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamusapiService", function() { return TeamusapiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TeamusapiService = /** @class */ (function () {
    function TeamusapiService(http) {
        this.http = http;
        this.baseUrl = 'https://teamusapi.000webhostapp.com/index.php';
        this.api_key = 'b8d25429d24bd53e8efe9922190e3e91';
    }
    TeamusapiService.prototype.getSeries = function (title) {
        var _this = this;
        return this.http.get(this.baseUrl + "/todaytvseries/" + title).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            _this.series = res['data'];
            return _this.series;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    TeamusapiService.prototype.handleError = function (error) {
        console.log(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Error! something went wrong.');
    };
    TeamusapiService.prototype.getdetails = function (id) {
        // tslint:disable-next-line:max-line-length
        return this.http.get("https://api.themoviedb.org/3/tv/" + id + "?api_key=" + this.api_key + "&language=en-US&append_to_response=last_episode_to_air");
    };
    TeamusapiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TeamusapiService);
    return TeamusapiService;
}());



/***/ }),

/***/ "./src/app/youtube.pipe.ts":
/*!*********************************!*\
  !*** ./src/app/youtube.pipe.ts ***!
  \*********************************/
/*! exports provided: YoutubePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubePipe", function() { return YoutubePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var YoutubePipe = /** @class */ (function () {
    function YoutubePipe(dom) {
        this.dom = dom;
    }
    YoutubePipe.prototype.transform = function (value, args) {
        return this.dom.bypassSecurityTrustResourceUrl(value);
    };
    YoutubePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'youtube'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], YoutubePipe);
    return YoutubePipe;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bboxxadmin/WebstormProjects/teamusmoviesmanager/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map