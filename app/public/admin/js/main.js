var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("login/login", ['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var Login;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let Login = class Login {
            };
            Login = __decorate([
                core_1.Component({
                    'selector': 'login.login',
                    'templateUrl': 'template/login.html'
                }), 
                __metadata('design:paramtypes', [])
            ], Login);
            exports_1("Login", Login);
        }
    }
});
System.register("desktop/header", ['angular2/core', 'angular2/router'], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_2, router_1;
    var Header;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            let Header = class Header {
                constructor() {
                }
            };
            Header = __decorate([
                core_2.Component({
                    'selector': 'page-header',
                    'templateUrl': 'template/header.html',
                    'directives': [router_1.RouterLink]
                }), 
                __metadata('design:paramtypes', [])
            ], Header);
            exports_2("Header", Header);
        }
    }
});
System.register("desktop/editor/editor", ['angular2/core'], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_3;
    var Editor;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            }],
        execute: function() {
            // import * as wysihtml5 from 'wysihtml5'
            let Editor = class Editor {
                constructor(elementRef) {
                    this.elementRef = elementRef;
                }
                ngAfterViewInit() {
                    tinymce.init({
                        selector: '#editor-container .editor textarea',
                        height: 300,
                        // plugins: [
                        // 	'advlist autolink lists link image preview anchor',
                        // 	'searchreplace code fullscreen',
                        // 	'insertdatetime media table contextmenu code'
                        // ],
                        toolbar: 'bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
                        // skin_url:'/admin/css',
                        skin: 'cool',
                        statusbar: false,
                        menubar: false,
                        setup: function (editor) {
                            // editor.addButton('mybutton',{
                            // 	classes:'tool-btn',
                            // 	text : '',
                            // 	icon : 'bold',
                            // 	onclick:function(){
                            // 	}
                            // });
                        }
                    });
                    // console.log(tinymce.Editor.schema.getCustomElements());
                }
            };
            Editor = __decorate([
                core_3.Component({
                    'selector': 'editor.editor',
                    'templateUrl': 'template/editor.html'
                }), 
                __metadata('design:paramtypes', [core_3.ElementRef])
            ], Editor);
            exports_3("Editor", Editor);
        }
    }
});
System.register("desktop/navigation", ['angular2/core', 'angular2/router'], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var core_4, router_2;
    var Navigation;
    return {
        setters:[
            function (core_4_1) {
                core_4 = core_4_1;
            },
            function (router_2_1) {
                router_2 = router_2_1;
            }],
        execute: function() {
            let Navigation = class Navigation {
                constructor(router) {
                    this.router = router;
                }
            };
            Navigation = __decorate([
                core_4.Component({
                    'selector': 'navigation',
                    'templateUrl': 'template/navigation.html',
                    'directives': [router_2.RouterLink]
                }), 
                __metadata('design:paramtypes', [router_2.Router])
            ], Navigation);
            exports_4("Navigation", Navigation);
        }
    }
});
System.register("desktop/panel/dashboard", ['angular2/core'], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var core_5;
    var Dashboard;
    return {
        setters:[
            function (core_5_1) {
                core_5 = core_5_1;
            }],
        execute: function() {
            let Dashboard = class Dashboard {
            };
            Dashboard = __decorate([
                core_5.Component({
                    'selector': 'dashboard.dashboard',
                    'templateUrl': 'template/dashboard.html'
                }), 
                __metadata('design:paramtypes', [])
            ], Dashboard);
            exports_5("Dashboard", Dashboard);
        }
    }
});
System.register("desktop/panel/article", ['angular2/core'], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var core_6;
    var Article;
    return {
        setters:[
            function (core_6_1) {
                core_6 = core_6_1;
            }],
        execute: function() {
            let Article = class Article {
            };
            Article = __decorate([
                core_6.Component({
                    'selector': 'article.article',
                    'templateUrl': 'template/article.html'
                }), 
                __metadata('design:paramtypes', [])
            ], Article);
            exports_6("Article", Article);
        }
    }
});
System.register("desktop/panel/panel", ['angular2/core', 'angular2/router', "desktop/navigation", "desktop/panel/dashboard", "desktop/panel/article"], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var core_7, router_3, navigation_1, dashboard_1, article_1;
    var Panel;
    return {
        setters:[
            function (core_7_1) {
                core_7 = core_7_1;
            },
            function (router_3_1) {
                router_3 = router_3_1;
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
                core_7.Component({
                    'selector': 'panel',
                    'templateUrl': 'template/panel.html',
                    'directives': [router_3.RouterLink, router_3.ROUTER_DIRECTIVES, navigation_1.Navigation]
                }),
                router_3.RouteConfig([
                    { path: '/', component: dashboard_1.Dashboard, as: 'Dashboard', useAsDefault: true },
                    { path: '/article', component: article_1.Article, as: 'Article' }
                ]), 
                __metadata('design:paramtypes', [router_3.Router])
            ], Panel);
            exports_7("Panel", Panel);
        }
    }
});
System.register("desktop/desktop", ['angular2/core', 'angular2/router', "desktop/header", "desktop/editor/editor", "desktop/panel/panel"], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var core_8, router_4, header_1, editor_1, panel_1;
    var Desktop;
    return {
        setters:[
            function (core_8_1) {
                core_8 = core_8_1;
            },
            function (router_4_1) {
                router_4 = router_4_1;
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
                core_8.Component({
                    'selector': 'desktop.desktop',
                    'templateUrl': 'template/desktop.html',
                    'directives': [router_4.RouterLink, router_4.ROUTER_DIRECTIVES, header_1.Header],
                }),
                router_4.RouteConfig([
                    { path: '/...', component: panel_1.Panel, as: 'Panel', useAsDefault: true },
                    { path: '/editor', component: editor_1.Editor, as: 'Editor' },
                ]), 
                __metadata('design:paramtypes', [router_4.Router])
            ], Desktop);
            exports_8("Desktop", Desktop);
        }
    }
});
System.register("app", ['angular2/core', 'angular2/router', "login/login", "desktop/desktop"], function(exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var core_9, router_5, login_1, desktop_1;
    var App;
    return {
        setters:[
            function (core_9_1) {
                core_9 = core_9_1;
            },
            function (router_5_1) {
                router_5 = router_5_1;
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
                }
            };
            App = __decorate([
                core_9.Component({
                    'selector': 'body',
                    'templateUrl': 'template/main.html',
                    'directives': [router_5.RouterLink, router_5.ROUTER_DIRECTIVES]
                }),
                router_5.RouteConfig([
                    { path: '/Login', component: login_1.Login, as: 'Login', useAsDefault: true },
                    { path: '/...', component: desktop_1.Desktop, as: 'Desktop' }
                ]), 
                __metadata('design:paramtypes', [router_5.Router])
            ], App);
            exports_9("App", App);
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
System.register("main", ['angular2/platform/browser', 'angular2/core', 'angular2/router', "app"], function(exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var browser_1, core_10, router_6, app_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_10_1) {
                core_10 = core_10_1;
            },
            function (router_6_1) {
                router_6 = router_6_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_1.App, [router_6.ROUTER_PROVIDERS, core_10.provide(router_6.LocationStrategy, { useClass: router_6.HashLocationStrategy })]);
        }
    }
});
System.register("desktop/editor/parserRules", [], function(exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var parserRules;
    return {
        setters:[],
        execute: function() {
            exports_11("parserRules", parserRules = {
                /**
                 * CSS Class white-list
                 * Following css classes won't be removed when parsed by the wysihtml5 html parser
                 */
                "classes": {
                    "wysiwyg-clear-both": 1,
                    "wysiwyg-clear-left": 1,
                    "wysiwyg-clear-right": 1,
                    "wysiwyg-color-aqua": 1,
                    "wysiwyg-color-black": 1,
                    "wysiwyg-color-blue": 1,
                    "wysiwyg-color-fuchsia": 1,
                    "wysiwyg-color-gray": 1,
                    "wysiwyg-color-green": 1,
                    "wysiwyg-color-lime": 1,
                    "wysiwyg-color-maroon": 1,
                    "wysiwyg-color-navy": 1,
                    "wysiwyg-color-olive": 1,
                    "wysiwyg-color-purple": 1,
                    "wysiwyg-color-red": 1,
                    "wysiwyg-color-silver": 1,
                    "wysiwyg-color-teal": 1,
                    "wysiwyg-color-white": 1,
                    "wysiwyg-color-yellow": 1,
                    "wysiwyg-float-left": 1,
                    "wysiwyg-float-right": 1,
                    "wysiwyg-font-size-large": 1,
                    "wysiwyg-font-size-larger": 1,
                    "wysiwyg-font-size-medium": 1,
                    "wysiwyg-font-size-small": 1,
                    "wysiwyg-font-size-smaller": 1,
                    "wysiwyg-font-size-x-large": 1,
                    "wysiwyg-font-size-x-small": 1,
                    "wysiwyg-font-size-xx-large": 1,
                    "wysiwyg-font-size-xx-small": 1,
                    "wysiwyg-text-align-center": 1,
                    "wysiwyg-text-align-justify": 1,
                    "wysiwyg-text-align-left": 1,
                    "wysiwyg-text-align-right": 1
                },
                "tags": {
                    "tr": {
                        "add_class": {
                            "align": "align_text"
                        }
                    },
                    "strike": {
                        "remove": 1
                    },
                    "form": {
                        "rename_tag": "div"
                    },
                    "rt": {
                        "rename_tag": "span"
                    },
                    "code": {},
                    "acronym": {
                        "rename_tag": "span"
                    },
                    "br": {
                        "add_class": {
                            "clear": "clear_br"
                        }
                    },
                    "details": {
                        "rename_tag": "div"
                    },
                    "h4": {
                        "add_class": {
                            "align": "align_text"
                        }
                    },
                    "em": {},
                    "title": {
                        "remove": 1
                    },
                    "multicol": {
                        "rename_tag": "div"
                    },
                    "figure": {
                        "rename_tag": "div"
                    },
                    "xmp": {
                        "rename_tag": "span"
                    },
                    "small": {
                        "rename_tag": "span",
                        "set_class": "wysiwyg-font-size-smaller"
                    },
                    "area": {
                        "remove": 1
                    },
                    "time": {
                        "rename_tag": "span"
                    },
                    "dir": {
                        "rename_tag": "ul"
                    },
                    "bdi": {
                        "rename_tag": "span"
                    },
                    "command": {
                        "remove": 1
                    },
                    "ul": {},
                    "progress": {
                        "rename_tag": "span"
                    },
                    "dfn": {
                        "rename_tag": "span"
                    },
                    "iframe": {
                        "remove": 1
                    },
                    "figcaption": {
                        "rename_tag": "div"
                    },
                    "a": {
                        "check_attributes": {
                            "href": "url"
                        },
                        "set_attributes": {
                            "rel": "nofollow",
                            "target": "_blank"
                        }
                    },
                    "img": {
                        "check_attributes": {
                            "width": "numbers",
                            "alt": "alt",
                            "src": "url",
                            "height": "numbers"
                        },
                        "add_class": {
                            "align": "align_img"
                        }
                    },
                    "rb": {
                        "rename_tag": "span"
                    },
                    "footer": {
                        "rename_tag": "div"
                    },
                    "noframes": {
                        "remove": 1
                    },
                    "abbr": {
                        "rename_tag": "span"
                    },
                    "u": {},
                    "bgsound": {
                        "remove": 1
                    },
                    "sup": {
                        "rename_tag": "span"
                    },
                    "address": {
                        "rename_tag": "div"
                    },
                    "basefont": {
                        "remove": 1
                    },
                    "nav": {
                        "rename_tag": "div"
                    },
                    "h1": {
                        "add_class": {
                            "align": "align_text"
                        }
                    },
                    "head": {
                        "remove": 1
                    },
                    "tbody": {
                        "add_class": {
                            "align": "align_text"
                        }
                    },
                    "dd": {
                        "rename_tag": "div"
                    },
                    "s": {
                        "rename_tag": "span"
                    },
                    "li": {},
                    "td": {
                        "check_attributes": {
                            "rowspan": "numbers",
                            "colspan": "numbers"
                        },
                        "add_class": {
                            "align": "align_text"
                        }
                    },
                    "object": {
                        "remove": 1
                    },
                    "div": {
                        "add_class": {
                            "align": "align_text"
                        }
                    },
                    "option": {
                        "rename_tag": "span"
                    },
                    "select": {
                        "rename_tag": "span"
                    },
                    "i": {},
                    "track": {
                        "remove": 1
                    },
                    "wbr": {
                        "remove": 1
                    },
                    "fieldset": {
                        "rename_tag": "div"
                    },
                    "big": {
                        "rename_tag": "span",
                        "set_class": "wysiwyg-font-size-larger"
                    },
                    "button": {
                        "rename_tag": "span"
                    },
                    "noscript": {
                        "remove": 1
                    },
                    "svg": {
                        "remove": 1
                    },
                    "input": {
                        "remove": 1
                    },
                    "table": {},
                    "keygen": {
                        "remove": 1
                    },
                    "h5": {
                        "add_class": {
                            "align": "align_text"
                        }
                    },
                    "meta": {
                        "remove": 1
                    },
                    "map": {
                        "rename_tag": "div"
                    },
                    "isindex": {
                        "remove": 1
                    },
                    "mark": {
                        "rename_tag": "span"
                    },
                    "caption": {
                        "add_class": {
                            "align": "align_text"
                        }
                    },
                    "tfoot": {
                        "add_class": {
                            "align": "align_text"
                        }
                    },
                    "base": {
                        "remove": 1
                    },
                    "video": {
                        "remove": 1
                    },
                    "strong": {},
                    "canvas": {
                        "remove": 1
                    },
                    "output": {
                        "rename_tag": "span"
                    },
                    "marquee": {
                        "rename_tag": "span"
                    },
                    "b": {},
                    "q": {
                        "check_attributes": {
                            "cite": "url"
                        }
                    },
                    "applet": {
                        "remove": 1
                    },
                    "span": {},
                    "rp": {
                        "rename_tag": "span"
                    },
                    "spacer": {
                        "remove": 1
                    },
                    "source": {
                        "remove": 1
                    },
                    "aside": {
                        "rename_tag": "div"
                    },
                    "frame": {
                        "remove": 1
                    },
                    "section": {
                        "rename_tag": "div"
                    },
                    "body": {
                        "rename_tag": "div"
                    },
                    "ol": {},
                    "nobr": {
                        "rename_tag": "span"
                    },
                    "html": {
                        "rename_tag": "div"
                    },
                    "summary": {
                        "rename_tag": "span"
                    },
                    "var": {
                        "rename_tag": "span"
                    },
                    "del": {
                        "remove": 1
                    },
                    "blockquote": {
                        "check_attributes": {
                            "cite": "url"
                        }
                    },
                    "style": {
                        "remove": 1
                    },
                    "device": {
                        "remove": 1
                    },
                    "meter": {
                        "rename_tag": "span"
                    },
                    "h3": {
                        "add_class": {
                            "align": "align_text"
                        }
                    },
                    "textarea": {
                        "rename_tag": "span"
                    },
                    "embed": {
                        "remove": 1
                    },
                    "hgroup": {
                        "rename_tag": "div"
                    },
                    "font": {
                        "rename_tag": "span",
                        "add_class": {
                            "size": "size_font"
                        }
                    },
                    "tt": {
                        "rename_tag": "span"
                    },
                    "noembed": {
                        "remove": 1
                    },
                    "thead": {
                        "add_class": {
                            "align": "align_text"
                        }
                    },
                    "blink": {
                        "rename_tag": "span"
                    },
                    "plaintext": {
                        "rename_tag": "span"
                    },
                    "xml": {
                        "remove": 1
                    },
                    "h6": {
                        "add_class": {
                            "align": "align_text"
                        }
                    },
                    "param": {
                        "remove": 1
                    },
                    "th": {
                        "check_attributes": {
                            "rowspan": "numbers",
                            "colspan": "numbers"
                        },
                        "add_class": {
                            "align": "align_text"
                        }
                    },
                    "legend": {
                        "rename_tag": "span"
                    },
                    "hr": {},
                    "label": {
                        "rename_tag": "span"
                    },
                    "dl": {
                        "rename_tag": "div"
                    },
                    "kbd": {
                        "rename_tag": "span"
                    },
                    "listing": {
                        "rename_tag": "div"
                    },
                    "dt": {
                        "rename_tag": "span"
                    },
                    "nextid": {
                        "remove": 1
                    },
                    "pre": {},
                    "center": {
                        "rename_tag": "div",
                        "set_class": "wysiwyg-text-align-center"
                    },
                    "audio": {
                        "remove": 1
                    },
                    "datalist": {
                        "rename_tag": "span"
                    },
                    "samp": {
                        "rename_tag": "span"
                    },
                    "col": {
                        "remove": 1
                    },
                    "article": {
                        "rename_tag": "div"
                    },
                    "cite": {},
                    "link": {
                        "remove": 1
                    },
                    "script": {
                        "remove": 1
                    },
                    "bdo": {
                        "rename_tag": "span"
                    },
                    "menu": {
                        "rename_tag": "ul"
                    },
                    "colgroup": {
                        "remove": 1
                    },
                    "ruby": {
                        "rename_tag": "span"
                    },
                    "h2": {
                        "add_class": {
                            "align": "align_text"
                        }
                    },
                    "ins": {
                        "rename_tag": "span"
                    },
                    "p": {
                        "add_class": {
                            "align": "align_text"
                        }
                    },
                    "sub": {
                        "rename_tag": "span"
                    },
                    "comment": {
                        "remove": 1
                    },
                    "frameset": {
                        "remove": 1
                    },
                    "optgroup": {
                        "rename_tag": "span"
                    },
                    "header": {
                        "rename_tag": "div"
                    }
                }
            });
        }
    }
});
