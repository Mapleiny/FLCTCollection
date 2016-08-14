var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
System.register("common/navigation", ['angular2/core', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1;
    var Navigation;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            Navigation = (function () {
                function Navigation(router) {
                    this.router = router;
                }
                Navigation = __decorate([
                    core_1.Component({
                        'selector': 'header.navigation',
                        'templateUrl': '/blog/template/navigation.html',
                        'directives': [router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], Navigation);
                return Navigation;
            }());
            exports_1("Navigation", Navigation);
        }
    }
});
System.register("servers/baseServer", ['angular2/core', 'angular2/http'], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_2, http_1;
    var StatusCode, BaseServer;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            (function (StatusCode) {
                StatusCode[StatusCode["success"] = 0] = "success";
                StatusCode[StatusCode["unauthorized"] = 100] = "unauthorized";
                StatusCode[StatusCode["accounterror"] = 101] = "accounterror";
                StatusCode[StatusCode["missparams"] = 200] = "missparams";
                StatusCode[StatusCode["universal"] = 500] = "universal";
            })(StatusCode || (StatusCode = {}));
            exports_2("StatusCode", StatusCode);
            BaseServer = (function () {
                function BaseServer(http) {
                    this.http = http;
                }
                BaseServer.prototype.post = function (url, params, options) {
                    var body = JSON.stringify(params);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    options = options || new http_1.RequestOptions({ headers: headers });
                    return this.http
                        .post(url, body, options)
                        .toPromise()
                        .then(this.extractData)
                        .catch(this.handleError);
                };
                BaseServer.prototype.get = function (url, params, options) {
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    options = options || new http_1.RequestOptions({ headers: headers });
                    var searchParams = new http_1.URLSearchParams();
                    if (params) {
                        for (var key in params) {
                            searchParams.set(key, params[key]);
                        }
                    }
                    options.search = searchParams;
                    return this.http
                        .get(url, options)
                        .toPromise()
                        .then(this.extractData)
                        .catch(this.handleError);
                };
                BaseServer.prototype.componentUrl = function (path) {
                    if (path instanceof Array) {
                        path = path.join('/');
                    }
                    return this.baseUrl + '/' + path;
                };
                BaseServer.prototype.extractData = function (res) {
                    var body = res.json();
                    return body || {};
                };
                BaseServer.prototype.handleError = function (error) {
                    console.error('An error occurred', error);
                    return Promise.reject(error.message || error);
                };
                BaseServer = __decorate([
                    core_2.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], BaseServer);
                return BaseServer;
            }());
            exports_2("BaseServer", BaseServer);
        }
    }
});
System.register("servers/userServer", ['rxjs/add/operator/toPromise', "servers/baseServer"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var baseServer_1;
    var UserServer;
    return {
        setters:[
            function (_1) {},
            function (baseServer_1_1) {
                baseServer_1 = baseServer_1_1;
            }],
        execute: function() {
            UserServer = (function (_super) {
                __extends(UserServer, _super);
                function UserServer(http) {
                    _super.call(this, http);
                    this.http = http;
                    this.userBaseUrl = '/api/user';
                }
                UserServer.prototype.getUserInfo = function (username) {
                    var url = this.userBaseUrl + '/username';
                    return this.get(url);
                };
                UserServer.prototype.validate = function (username, password) {
                    var url = this.userBaseUrl + '/validate';
                    return this.post(url, {
                        username: username,
                        password: password
                    });
                };
                return UserServer;
            }(baseServer_1.BaseServer));
            exports_3("UserServer", UserServer);
        }
    }
});
System.register("servers/blogServer", ['rxjs/add/operator/toPromise', "servers/baseServer"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var baseServer_2;
    var BlogServer;
    var exportedNames_1 = {
        'BlogServer': true
    };
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default"&& !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_4(exports);
    }
    return {
        setters:[
            function (_2) {},
            function (baseServer_2_1) {
                baseServer_2 = baseServer_2_1;
                exportStar_1(baseServer_2_1);
            }],
        execute: function() {
            BlogServer = (function (_super) {
                __extends(BlogServer, _super);
                function BlogServer(http) {
                    _super.call(this, http);
                    this.http = http;
                    this.baseUrl = '/api/blog';
                }
                BlogServer.prototype.public = function (content) {
                    var url = this.componentUrl('post');
                    return this.post(url, content);
                };
                BlogServer.prototype.list = function () {
                    var url = this.componentUrl('posts');
                    return this.get(url);
                };
                BlogServer.prototype.getPost = function (postId) {
                    var url = this.componentUrl(['post', postId]);
                    return this.get(url);
                };
                BlogServer.prototype.update = function (id, content) {
                    var url = this.componentUrl(['update', id]);
                    return this.post(url, content);
                };
                BlogServer.prototype.delete = function (postIds) {
                    var url = this.componentUrl('delete');
                    if (!(postIds instanceof Array)) {
                        postIds = [postIds];
                    }
                    return this.post(url, postIds);
                };
                return BlogServer;
            }(baseServer_2.BaseServer));
            exports_4("BlogServer", BlogServer);
        }
    }
});
System.register("blog/listView", ['angular2/core', 'angular2/router', 'angular2/platform/browser', "servers/blogServer", "servers/baseServer"], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var core_3, router_2, browser_1, blogServer_1, baseServer_4;
    var ListView;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (router_2_1) {
                router_2 = router_2_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (blogServer_1_1) {
                blogServer_1 = blogServer_1_1;
            },
            function (baseServer_4_1) {
                baseServer_4 = baseServer_4_1;
            }],
        execute: function() {
            ListView = (function () {
                function ListView(applicationRef, blogServer, router, titleService) {
                    this.applicationRef = applicationRef;
                    this.blogServer = blogServer;
                    this.router = router;
                    this.titleService = titleService;
                    this.titleService.setTitle('Blog');
                }
                ListView.prototype.ngOnInit = function () {
                    var _this = this;
                    this.blogServer.list().then(function (result) {
                        if (result.code == baseServer_4.StatusCode.success) {
                            _this.blogList = result.data.list;
                            _this.count = result.data.count;
                            _this.page = result.data.page;
                            _this.applicationRef.tick();
                        }
                        else {
                            console.log(result);
                        }
                    }).catch(function (result) {
                        console.log(result);
                    });
                };
                ListView.prototype.postDetail = function (id) {
                    this.router.navigate(['Detail', 'dsadas']);
                };
                ListView = __decorate([
                    core_3.Component({
                        'selector': 'section.blog-list',
                        'templateUrl': '/blog/template/listView.html',
                        'directives': [router_2.RouterLink],
                        'providers': [blogServer_1.BlogServer, browser_1.Title]
                    }), 
                    __metadata('design:paramtypes', [core_3.ApplicationRef, blogServer_1.BlogServer, router_2.Router, browser_1.Title])
                ], ListView);
                return ListView;
            }());
            exports_5("ListView", ListView);
        }
    }
});
System.register("blog/detail", ['angular2/core', 'angular2/platform/browser', 'angular2/router', "servers/blogServer"], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var core_4, browser_2, router_3, blogServer_2;
    var Detail;
    return {
        setters:[
            function (core_4_1) {
                core_4 = core_4_1;
            },
            function (browser_2_1) {
                browser_2 = browser_2_1;
            },
            function (router_3_1) {
                router_3 = router_3_1;
            },
            function (blogServer_2_1) {
                blogServer_2 = blogServer_2_1;
            }],
        execute: function() {
            Detail = (function () {
                function Detail(applicationRef, blogServer, router, routeParams, titleService) {
                    this.applicationRef = applicationRef;
                    this.blogServer = blogServer;
                    this.router = router;
                    this.routeParams = routeParams;
                    this.titleService = titleService;
                    this.article = {
                        title: '',
                        content: ''
                    };
                }
                Detail.prototype.ngOnInit = function () {
                    var _this = this;
                    this.postId = this.routeParams.get('id');
                    this.blogServer.getPost(this.postId).then(function (result) {
                        if (result.code == blogServer_2.StatusCode.success) {
                            _this.titleService.setTitle(result.data.title.toString());
                            _this.article = result.data;
                            _this.applicationRef.tick();
                        }
                        else {
                            _this.postId = null;
                        }
                    });
                };
                Detail = __decorate([
                    core_4.Component({
                        'selector': 'section.blog-detail',
                        'templateUrl': '/blog/template/detail.html',
                        'directives': [router_3.RouterLink],
                        'providers': [blogServer_2.BlogServer, browser_2.Title]
                    }), 
                    __metadata('design:paramtypes', [core_4.ApplicationRef, blogServer_2.BlogServer, router_3.Router, router_3.RouteParams, browser_2.Title])
                ], Detail);
                return Detail;
            }());
            exports_6("Detail", Detail);
        }
    }
});
System.register("blog/blog", ['angular2/core', 'angular2/router', "common/navigation", "blog/listView", "blog/detail"], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var core_5, router_4, navigation_1, listView_1, detail_1;
    var Blog;
    return {
        setters:[
            function (core_5_1) {
                core_5 = core_5_1;
            },
            function (router_4_1) {
                router_4 = router_4_1;
            },
            function (navigation_1_1) {
                navigation_1 = navigation_1_1;
            },
            function (listView_1_1) {
                listView_1 = listView_1_1;
            },
            function (detail_1_1) {
                detail_1 = detail_1_1;
            }],
        execute: function() {
            Blog = (function () {
                function Blog() {
                }
                Blog = __decorate([
                    core_5.Component({
                        'selector': 'blog.blog',
                        'templateUrl': '/blog/template/blog.html',
                        'directives': [router_4.RouterLink, router_4.ROUTER_DIRECTIVES, navigation_1.Navigation]
                    }),
                    router_4.RouteConfig([
                        { path: '/', component: listView_1.ListView, as: 'Posts', useAsDefault: true },
                        { path: '/post/:id', component: detail_1.Detail, as: 'Detail' }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], Blog);
                return Blog;
            }());
            exports_7("Blog", Blog);
        }
    }
});
System.register("app", ['angular2/core', "blog/blog", 'angular2/router'], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var core_6, blog_1, router_5;
    var App;
    return {
        setters:[
            function (core_6_1) {
                core_6 = core_6_1;
            },
            function (blog_1_1) {
                blog_1 = blog_1_1;
            },
            function (router_5_1) {
                router_5 = router_5_1;
            }],
        execute: function() {
            App = (function () {
                function App(applicationRef, router) {
                    var _this = this;
                    this.applicationRef = applicationRef;
                    this.router = router;
                    this.router.subscribe(function () {
                        _this.applicationRef.tick();
                    });
                }
                App = __decorate([
                    core_6.Component({
                        'selector': 'body',
                        'templateUrl': '/blog/template/main.html',
                        'directives': [router_5.RouterLink, router_5.ROUTER_DIRECTIVES]
                    }),
                    router_5.RouteConfig([
                        { path: '/...', component: blog_1.Blog, as: 'Blog', useAsDefault: true },
                    ]), 
                    __metadata('design:paramtypes', [core_6.ApplicationRef, router_5.Router])
                ], App);
                return App;
            }());
            exports_8("App", App);
        }
    }
});
System.config({
    'paths': {
        'main': '/blog/js/main',
        'template': '/blog/template'
    },
    'packages': {
        'dist': {
            'format': 'amd',
            'defaultExtension': 'js'
        }
    }
});
System.import('main');
System.register("main", ['angular2/platform/browser', 'angular2/core', 'angular2/router', 'angular2/http', "app"], function(exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var browser_3, core_7, router_6, http_2, app_1;
    return {
        setters:[
            function (browser_3_1) {
                browser_3 = browser_3_1;
            },
            function (core_7_1) {
                core_7 = core_7_1;
            },
            function (router_6_1) {
                router_6 = router_6_1;
            },
            function (http_2_1) {
                http_2 = http_2_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            }],
        execute: function() {
            browser_3.bootstrap(app_1.App, [router_6.ROUTER_PROVIDERS, http_2.HTTP_PROVIDERS, core_7.provide(router_6.LocationStrategy, { useClass: router_6.HashLocationStrategy })]);
        }
    }
});
