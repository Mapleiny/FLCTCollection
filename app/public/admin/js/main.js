var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("servers/baseServer", ['angular2/core', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, http_1;
    var StatusCode, BaseServer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
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
            exports_1("StatusCode", StatusCode);
            let BaseServer = class BaseServer {
                constructor(http) {
                    this.http = http;
                }
                post(url, params, options) {
                    let body = JSON.stringify(params);
                    let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    options = options || new http_1.RequestOptions({ headers: headers });
                    return this.http
                        .post(url, body, options)
                        .toPromise()
                        .then(this.extractData)
                        .catch(this.handleError);
                }
                get(url, params, options) {
                    let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    options = options || new http_1.RequestOptions({ headers: headers });
                    let searchParams = new http_1.URLSearchParams();
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
                }
                componentUrl(path) {
                    if (path instanceof Array) {
                        path = path.join('/');
                    }
                    return this.baseUrl + '/' + path;
                }
                extractData(res) {
                    let body = res.json();
                    return body || {};
                }
                handleError(error) {
                    console.error('An error occurred', error);
                    return Promise.reject(error.message || error);
                }
            };
            BaseServer = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http])
            ], BaseServer);
            exports_1("BaseServer", BaseServer);
        }
    }
});
System.register("servers/userServer", ['rxjs/add/operator/toPromise', "servers/baseServer"], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var baseServer_1;
    var UserServer;
    return {
        setters:[
            function (_1) {},
            function (baseServer_1_1) {
                baseServer_1 = baseServer_1_1;
            }],
        execute: function() {
            class UserServer extends baseServer_1.BaseServer {
                constructor(http) {
                    super(http);
                    this.http = http;
                    this.userBaseUrl = '/api/user';
                }
                getUserInfo(username) {
                    let url = this.userBaseUrl + '/username';
                    return this.get(url);
                }
                validate(username, password) {
                    let url = this.userBaseUrl + '/validate';
                    return this.post(url, {
                        username: username,
                        password: password
                    });
                }
            }
            exports_2("UserServer", UserServer);
        }
    }
});
System.register("login/login", ['angular2/core', 'angular2/router', "servers/baseServer", "servers/userServer"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_2, router_1, baseServer_2, userServer_1;
    var Login;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (baseServer_2_1) {
                baseServer_2 = baseServer_2_1;
            },
            function (userServer_1_1) {
                userServer_1 = userServer_1_1;
            }],
        execute: function() {
            let Login = class Login {
                constructor(userServer, router) {
                    this.userServer = userServer;
                    this.router = router;
                }
                login(username, password) {
                    let self = this;
                    this.userServer.validate(username, password).then(function (result) {
                        if (result.code == baseServer_2.StatusCode.success) {
                            window.localStorage.setItem('userInfo', JSON.stringify(result.data));
                            self.loginSuccess();
                        }
                        else {
                            self.loginError(result.message);
                        }
                    }).catch(function (result) {
                        self.loginError(result.message);
                    });
                }
                loginSuccess() {
                    this.router.navigate(['Desktop']);
                }
                loginError(error) {
                    console.log(error);
                }
            };
            Login = __decorate([
                core_2.Component({
                    selector: 'login.login',
                    templateUrl: 'template/login.html',
                    providers: [userServer_1.UserServer]
                }), 
                __metadata('design:paramtypes', [userServer_1.UserServer, router_1.Router])
            ], Login);
            exports_3("Login", Login);
        }
    }
});
System.register("desktop/header", ['angular2/core', 'angular2/router'], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var core_3, router_2;
    var Header;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (router_2_1) {
                router_2 = router_2_1;
            }],
        execute: function() {
            let Header = class Header {
                constructor() {
                }
            };
            Header = __decorate([
                core_3.Component({
                    'selector': 'page-header',
                    'templateUrl': 'template/header.html',
                    'directives': [router_2.RouterLink]
                }), 
                __metadata('design:paramtypes', [])
            ], Header);
            exports_4("Header", Header);
        }
    }
});
System.register("servers/blogServer", ['rxjs/add/operator/toPromise', "servers/baseServer"], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var baseServer_3;
    var BlogServer;
    return {
        setters:[
            function (_2) {},
            function (baseServer_3_1) {
                baseServer_3 = baseServer_3_1;
            }],
        execute: function() {
            class BlogServer extends baseServer_3.BaseServer {
                constructor(http) {
                    super(http);
                    this.http = http;
                    this.baseUrl = '/api/blog';
                }
                public(content) {
                    let url = this.componentUrl('post');
                    return this.post(url, content);
                }
                list() {
                    let url = this.componentUrl('posts');
                    return this.get(url);
                }
                getPost(postId) {
                    let url = this.componentUrl(['post', postId]);
                    return this.get(url);
                }
                update(id, content) {
                    let url = this.componentUrl(['update', id]);
                    return this.post(url, content);
                }
                delete(postIds) {
                    let url = this.componentUrl('delete');
                    if (!(postIds instanceof Array)) {
                        postIds = [postIds];
                    }
                    return this.post(url, postIds);
                }
            }
            exports_5("BlogServer", BlogServer);
        }
    }
});
System.register("desktop/editor/editor", ['angular2/core', 'angular2/router', "servers/baseServer", "servers/blogServer"], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var core_4, router_3, baseServer_4, blogServer_1;
    var Editor;
    return {
        setters:[
            function (core_4_1) {
                core_4 = core_4_1;
            },
            function (router_3_1) {
                router_3 = router_3_1;
            },
            function (baseServer_4_1) {
                baseServer_4 = baseServer_4_1;
            },
            function (blogServer_1_1) {
                blogServer_1 = blogServer_1_1;
            }],
        execute: function() {
            let Editor = class Editor {
                constructor(blogServer, router, routeParams) {
                    this.blogServer = blogServer;
                    this.router = router;
                    this.routeParams = routeParams;
                }
                ngOnInit() {
                    this.eidtContentId = this.routeParams.get('id');
                }
                ngAfterViewInit() {
                    let self = this;
                    tinymce.init({
                        selector: '#editor-container .editor textarea',
                        height: 300,
                        plugins: [
                            'advlist autolink lists link image preview anchor',
                            'searchreplace code fullscreen',
                            'insertdatetime media table contextmenu code textcolor'
                        ],
                        toolbar: 'bold italic | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
                        // skin_url:'/admin/css',
                        skin: 'cool',
                        statusbar: false,
                        menubar: false
                    });
                    this.blogServer.getPost(this.eidtContentId).then(function (result) {
                        if (result.code == baseServer_4.StatusCode.success) {
                            self.blogTitle = result.data.title;
                            tinymce.activeEditor.setContent(result.data.content);
                        }
                        else {
                            this.eidtContentId = null;
                        }
                    });
                }
                post() {
                    this.blogContent = tinymce.activeEditor.getContent();
                    if (this.eidtContentId) {
                        this.blogServer.update(this.eidtContentId, {
                            title: this.blogTitle,
                            content: this.blogContent
                        }).then(function (data) {
                            console.log(data);
                        });
                    }
                    else {
                        this.blogServer.public({
                            title: this.blogTitle,
                            content: this.blogContent
                        }).then(function (data) {
                            console.log(data);
                        });
                    }
                }
            };
            Editor = __decorate([
                core_4.Component({
                    selector: 'editor.editor',
                    templateUrl: 'template/editor.html',
                    providers: [blogServer_1.BlogServer]
                }), 
                __metadata('design:paramtypes', [blogServer_1.BlogServer, router_3.Router, router_3.RouteParams])
            ], Editor);
            exports_6("Editor", Editor);
        }
    }
});
System.register("desktop/navigation", ['angular2/core', 'angular2/router'], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var core_5, router_4;
    var Navigation;
    return {
        setters:[
            function (core_5_1) {
                core_5 = core_5_1;
            },
            function (router_4_1) {
                router_4 = router_4_1;
            }],
        execute: function() {
            let Navigation = class Navigation {
                constructor(router) {
                    this.router = router;
                }
            };
            Navigation = __decorate([
                core_5.Component({
                    'selector': 'navigation',
                    'templateUrl': 'template/navigation.html',
                    'directives': [router_4.RouterLink]
                }), 
                __metadata('design:paramtypes', [router_4.Router])
            ], Navigation);
            exports_7("Navigation", Navigation);
        }
    }
});
System.register("desktop/panel/dashboard", ['angular2/core'], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var core_6;
    var Dashboard;
    return {
        setters:[
            function (core_6_1) {
                core_6 = core_6_1;
            }],
        execute: function() {
            let Dashboard = class Dashboard {
            };
            Dashboard = __decorate([
                core_6.Component({
                    'selector': 'dashboard.dashboard',
                    'templateUrl': 'template/dashboard.html'
                }), 
                __metadata('design:paramtypes', [])
            ], Dashboard);
            exports_8("Dashboard", Dashboard);
        }
    }
});
System.register("desktop/panel/article", ['angular2/core', 'angular2/router', "servers/baseServer", "servers/blogServer"], function(exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var core_7, router_5, baseServer_5, blogServer_2;
    var Article;
    return {
        setters:[
            function (core_7_1) {
                core_7 = core_7_1;
            },
            function (router_5_1) {
                router_5 = router_5_1;
            },
            function (baseServer_5_1) {
                baseServer_5 = baseServer_5_1;
            },
            function (blogServer_2_1) {
                blogServer_2 = blogServer_2_1;
            }],
        execute: function() {
            let Article = class Article {
                constructor(blogServer, router) {
                    this.blogServer = blogServer;
                    this.router = router;
                }
                ngOnInit() {
                    let self = this;
                    this.blogServer.list().then(function (result) {
                        if (result.code == baseServer_5.StatusCode.success) {
                            self.blogList = result.data.list;
                            self.count = result.data.count;
                            self.page = result.data.page;
                        }
                        else {
                            console.log(result);
                        }
                    }).catch(function (result) {
                        console.log(result);
                    });
                }
                editContent(id) {
                    this.router.navigate(['/Desktop/Editor', { id: id }]);
                }
            };
            Article = __decorate([
                core_7.Component({
                    selector: 'article.article',
                    templateUrl: 'template/article.html',
                    providers: [blogServer_2.BlogServer]
                }), 
                __metadata('design:paramtypes', [blogServer_2.BlogServer, router_5.Router])
            ], Article);
            exports_9("Article", Article);
        }
    }
});
System.register("desktop/panel/panel", ['angular2/core', 'angular2/router', "desktop/navigation", "desktop/panel/dashboard", "desktop/panel/article"], function(exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var core_8, router_6, navigation_1, dashboard_1, article_1;
    var Panel;
    return {
        setters:[
            function (core_8_1) {
                core_8 = core_8_1;
            },
            function (router_6_1) {
                router_6 = router_6_1;
            },
            function (navigation_1_1) {
                navigation_1 = navigation_1_1;
            },
            function (dashboard_1_1) {
                dashboard_1 = dashboard_1_1;
            },
            function (article_1_1) {
                article_1 = article_1_1;
            }],
        execute: function() {
            let Panel = class Panel {
                constructor(router) {
                    this.router = router;
                }
            };
            Panel = __decorate([
                core_8.Component({
                    'selector': 'panel.admin-panel',
                    'templateUrl': 'template/panel.html',
                    'directives': [router_6.RouterLink, router_6.ROUTER_DIRECTIVES, navigation_1.Navigation]
                }),
                router_6.RouteConfig([
                    { path: '/', component: dashboard_1.Dashboard, as: 'Dashboard', useAsDefault: true },
                    { path: '/article', component: article_1.Article, as: 'Article' }
                ]), 
                __metadata('design:paramtypes', [router_6.Router])
            ], Panel);
            exports_10("Panel", Panel);
        }
    }
});
System.register("desktop/desktop", ['angular2/core', 'angular2/router', "desktop/header", "desktop/editor/editor", "desktop/panel/panel"], function(exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var core_9, router_7, header_1, editor_1, panel_1;
    var Desktop;
    return {
        setters:[
            function (core_9_1) {
                core_9 = core_9_1;
            },
            function (router_7_1) {
                router_7 = router_7_1;
            },
            function (header_1_1) {
                header_1 = header_1_1;
            },
            function (editor_1_1) {
                editor_1 = editor_1_1;
            },
            function (panel_1_1) {
                panel_1 = panel_1_1;
            }],
        execute: function() {
            let Desktop = class Desktop {
                constructor(router) {
                    this.router = router;
                }
            };
            Desktop = __decorate([
                core_9.Component({
                    'selector': 'desktop.desktop',
                    'templateUrl': 'template/desktop.html',
                    'directives': [router_7.RouterLink, router_7.ROUTER_DIRECTIVES, header_1.Header]
                }),
                router_7.RouteConfig([
                    { path: '/...', component: panel_1.Panel, as: 'Panel', useAsDefault: true },
                    { path: '/editor-new', component: editor_1.Editor, as: 'EditorNew' },
                    { path: '/editor/:id', component: editor_1.Editor, as: 'Editor' },
                ]), 
                __metadata('design:paramtypes', [router_7.Router])
            ], Desktop);
            exports_11("Desktop", Desktop);
        }
    }
});
System.register("app", ['angular2/core', 'angular2/router', "login/login", "desktop/desktop"], function(exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    var core_10, router_8, login_1, desktop_1;
    var App;
    return {
        setters:[
            function (core_10_1) {
                core_10 = core_10_1;
            },
            function (router_8_1) {
                router_8 = router_8_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            },
            function (desktop_1_1) {
                desktop_1 = desktop_1_1;
            }],
        execute: function() {
            let App = class App {
                constructor(router) {
                    this.router = router;
                    let self = this;
                    this.router.subscribe(function (value) {
                        self.checkLogin();
                    });
                }
                ngOnChanges() {
                    this.checkLogin();
                }
                checkLogin() {
                    if (!this.router.isRouteActive(this.router.generate(['Login']))) {
                        let userInfo = JSON.parse(window.localStorage.getItem('userInfo'));
                        if (!userInfo) {
                            this.router.navigate(['/Login']);
                        }
                    }
                }
            };
            App = __decorate([
                core_10.Component({
                    'selector': 'body',
                    'templateUrl': 'template/main.html',
                    'directives': [router_8.RouterLink, router_8.ROUTER_DIRECTIVES]
                }),
                router_8.RouteConfig([
                    { path: '/Login', component: login_1.Login, as: 'Login', useAsDefault: true },
                    { path: '/...', component: desktop_1.Desktop, as: 'Desktop' }
                ]), 
                __metadata('design:paramtypes', [router_8.Router])
            ], App);
            exports_12("App", App);
        }
    }
});
System.config({
    'paths': {
        'main': '/admin/js/main',
        'template': '/admin/template'
    },
    'packages': {
        'dist': {
            'format': 'amd',
            'defaultExtension': 'js'
        }
    }
});
System.import('main');
System.register("main", ['angular2/platform/browser', 'angular2/core', 'angular2/router', 'angular2/http', "app"], function(exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    var browser_1, core_11, router_9, http_2, app_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_11_1) {
                core_11 = core_11_1;
            },
            function (router_9_1) {
                router_9 = router_9_1;
            },
            function (http_2_1) {
                http_2 = http_2_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_1.App, [router_9.ROUTER_PROVIDERS, http_2.HTTP_PROVIDERS, core_11.provide(router_9.LocationStrategy, { useClass: router_9.HashLocationStrategy })]);
        }
    }
});
