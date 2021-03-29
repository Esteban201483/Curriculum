(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/css-vars-ponyfill/dist/css-vars-ponyfill.esm.js":
    /*!**********************************************************************!*\
      !*** ./node_modules/css-vars-ponyfill/dist/css-vars-ponyfill.esm.js ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesCssVarsPonyfillDistCssVarsPonyfillEsmJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /*!
       * css-vars-ponyfill
       * v2.3.2
       * https://jhildenbiddle.github.io/css-vars-ponyfill/
       * (c) 2018-2020 John Hildenbiddle <http://hildenbiddle.com>
       * MIT license
       */


      function _extends() {
        _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }

          return target;
        };

        return _extends.apply(this, arguments);
      }

      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }

      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
      }

      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
      }

      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }

      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;

        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }

        return arr2;
      }

      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      /*!
       * get-css-data
       * v1.8.0
       * https://github.com/jhildenbiddle/get-css-data
       * (c) 2018-2020 John Hildenbiddle <http://hildenbiddle.com>
       * MIT license
       */


      function getUrls(urls) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var settings = {
          mimeType: options.mimeType || null,
          onBeforeSend: options.onBeforeSend || Function.prototype,
          onSuccess: options.onSuccess || Function.prototype,
          onError: options.onError || Function.prototype,
          onComplete: options.onComplete || Function.prototype
        };
        var urlArray = Array.isArray(urls) ? urls : [urls];
        var urlQueue = Array.apply(null, Array(urlArray.length)).map(function (x) {
          return null;
        });

        function isValidCss() {
          var cssText = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
          var isHTML = cssText.trim().charAt(0) === "<";
          return !isHTML;
        }

        function onError(xhr, urlIndex) {
          settings.onError(xhr, urlArray[urlIndex], urlIndex);
        }

        function onSuccess(responseText, urlIndex) {
          var returnVal = settings.onSuccess(responseText, urlArray[urlIndex], urlIndex);
          responseText = returnVal === false ? "" : returnVal || responseText;
          urlQueue[urlIndex] = responseText;

          if (urlQueue.indexOf(null) === -1) {
            settings.onComplete(urlQueue);
          }
        }

        var parser = document.createElement("a");
        urlArray.forEach(function (url, i) {
          parser.setAttribute("href", url);
          parser.href = String(parser.href);
          var isIElte9 = Boolean(document.all && !window.atob);
          var isIElte9CORS = isIElte9 && parser.host.split(":")[0] !== location.host.split(":")[0];

          if (isIElte9CORS) {
            var isSameProtocol = parser.protocol === location.protocol;

            if (isSameProtocol) {
              var xdr = new XDomainRequest();
              xdr.open("GET", url);
              xdr.timeout = 0;
              xdr.onprogress = Function.prototype;
              xdr.ontimeout = Function.prototype;

              xdr.onload = function () {
                if (isValidCss(xdr.responseText)) {
                  onSuccess(xdr.responseText, i);
                } else {
                  onError(xdr, i);
                }
              };

              xdr.onerror = function (err) {
                onError(xdr, i);
              };

              setTimeout(function () {
                xdr.send();
              }, 0);
            } else {
              console.warn("Internet Explorer 9 Cross-Origin (CORS) requests must use the same protocol (".concat(url, ")"));
              onError(null, i);
            }
          } else {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url);

            if (settings.mimeType && xhr.overrideMimeType) {
              xhr.overrideMimeType(settings.mimeType);
            }

            settings.onBeforeSend(xhr, url, i);

            xhr.onreadystatechange = function () {
              if (xhr.readyState === 4) {
                if (xhr.status === 200 && isValidCss(xhr.responseText)) {
                  onSuccess(xhr.responseText, i);
                } else {
                  onError(xhr, i);
                }
              }
            };

            xhr.send();
          }
        });
      }
      /**
       * Gets CSS data from <style> and <link> nodes (including @imports), then
       * returns data in order processed by DOM. Allows specifying nodes to
       * include/exclude and filtering CSS data using RegEx.
       *
       * @preserve
       * @param {object}   [options] The options object
       * @param {object}   [options.rootElement=document] Root element to traverse for
       *                   <link> and <style> nodes.
       * @param {string}   [options.include] CSS selector matching <link> and <style>
       *                   nodes to include
       * @param {string}   [options.exclude] CSS selector matching <link> and <style>
       *                   nodes to exclude
       * @param {object}   [options.filter] Regular expression used to filter node CSS
       *                   data. Each block of CSS data is tested against the filter,
       *                   and only matching data is included.
       * @param {boolean}  [options.skipDisabled=true] Determines if disabled
       *                   stylesheets will be skipped while collecting CSS data.
       * @param {boolean}  [options.useCSSOM=false] Determines if CSS data will be
       *                   collected from a stylesheet's runtime values instead of its
       *                   text content. This is required to get accurate CSS data
       *                   when a stylesheet has been modified using the deleteRule()
       *                   or insertRule() methods because these modifications will
       *                   not be reflected in the stylesheet's text content.
       * @param {function} [options.onBeforeSend] Callback before XHR is sent. Passes
       *                   1) the XHR object, 2) source node reference, and 3) the
       *                   source URL as arguments.
       * @param {function} [options.onSuccess] Callback on each CSS node read. Passes
       *                   1) CSS text, 2) source node reference, and 3) the source
       *                   URL as arguments.
       * @param {function} [options.onError] Callback on each error. Passes 1) the XHR
       *                   object for inspection, 2) soure node reference, and 3) the
       *                   source URL that failed (either a <link> href or an @import)
       *                   as arguments
       * @param {function} [options.onComplete] Callback after all nodes have been
       *                   processed. Passes 1) concatenated CSS text, 2) an array of
       *                   CSS text in DOM order, and 3) an array of nodes in DOM
       *                   order as arguments.
       *
       * @example
       *
       *   getCssData({
       *     rootElement : document,
       *     include     : 'style,link[rel="stylesheet"]',
       *     exclude     : '[href="skip.css"]',
       *     filter      : /red/,
       *     skipDisabled: true,
       *     useCSSOM    : false,
       *     onBeforeSend(xhr, node, url) {
       *       // ...
       *     }
       *     onSuccess(cssText, node, url) {
       *       // ...
       *     }
       *     onError(xhr, node, url) {
       *       // ...
       *     },
       *     onComplete(cssText, cssArray, nodeArray) {
       *       // ...
       *     }
       *   });
       */


      function getCssData(options) {
        var regex = {
          cssComments: /\/\*[\s\S]+?\*\//g,
          cssImports: /(?:@import\s*)(?:url\(\s*)?(?:['"])([^'"]*)(?:['"])(?:\s*\))?(?:[^;]*;)/g
        };
        var settings = {
          rootElement: options.rootElement || document,
          include: options.include || 'style,link[rel="stylesheet"]',
          exclude: options.exclude || null,
          filter: options.filter || null,
          skipDisabled: options.skipDisabled !== false,
          useCSSOM: options.useCSSOM || false,
          onBeforeSend: options.onBeforeSend || Function.prototype,
          onSuccess: options.onSuccess || Function.prototype,
          onError: options.onError || Function.prototype,
          onComplete: options.onComplete || Function.prototype
        };
        var sourceNodes = Array.apply(null, settings.rootElement.querySelectorAll(settings.include)).filter(function (node) {
          return !matchesSelector(node, settings.exclude);
        });
        var cssArray = Array.apply(null, Array(sourceNodes.length)).map(function (x) {
          return null;
        });

        function handleComplete() {
          var isComplete = cssArray.indexOf(null) === -1;

          if (isComplete) {
            var cssText = cssArray.join("");
            settings.onComplete(cssText, cssArray, sourceNodes);
          }
        }

        function handleSuccess(cssText, cssIndex, node, sourceUrl) {
          var returnVal = settings.onSuccess(cssText, node, sourceUrl);
          cssText = returnVal !== undefined && Boolean(returnVal) === false ? "" : returnVal || cssText;
          resolveImports(cssText, node, sourceUrl, function (resolvedCssText, errorData) {
            if (cssArray[cssIndex] === null) {
              errorData.forEach(function (data) {
                return settings.onError(data.xhr, node, data.url);
              });

              if (!settings.filter || settings.filter.test(resolvedCssText)) {
                cssArray[cssIndex] = resolvedCssText;
              } else {
                cssArray[cssIndex] = "";
              }

              handleComplete();
            }
          });
        }

        function parseImportData(cssText, baseUrl) {
          var ignoreRules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
          var importData = {};
          importData.rules = (cssText.replace(regex.cssComments, "").match(regex.cssImports) || []).filter(function (rule) {
            return ignoreRules.indexOf(rule) === -1;
          });
          importData.urls = importData.rules.map(function (rule) {
            return rule.replace(regex.cssImports, "$1");
          });
          importData.absoluteUrls = importData.urls.map(function (url) {
            return getFullUrl(url, baseUrl);
          });
          importData.absoluteRules = importData.rules.map(function (rule, i) {
            var oldUrl = importData.urls[i];
            var newUrl = getFullUrl(importData.absoluteUrls[i], baseUrl);
            return rule.replace(oldUrl, newUrl);
          });
          return importData;
        }

        function resolveImports(cssText, node, baseUrl, callbackFn) {
          var __errorData = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];

          var __errorRules = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];

          var importData = parseImportData(cssText, baseUrl, __errorRules);

          if (importData.rules.length) {
            getUrls(importData.absoluteUrls, {
              onBeforeSend: function onBeforeSend(xhr, url, urlIndex) {
                settings.onBeforeSend(xhr, node, url);
              },
              onSuccess: function onSuccess(cssText, url, urlIndex) {
                var returnVal = settings.onSuccess(cssText, node, url);
                cssText = returnVal === false ? "" : returnVal || cssText;
                var responseImportData = parseImportData(cssText, url, __errorRules);
                responseImportData.rules.forEach(function (rule, i) {
                  cssText = cssText.replace(rule, responseImportData.absoluteRules[i]);
                });
                return cssText;
              },
              onError: function onError(xhr, url, urlIndex) {
                __errorData.push({
                  xhr: xhr,
                  url: url
                });

                __errorRules.push(importData.rules[urlIndex]);

                resolveImports(cssText, node, baseUrl, callbackFn, __errorData, __errorRules);
              },
              onComplete: function onComplete(responseArray) {
                responseArray.forEach(function (importText, i) {
                  cssText = cssText.replace(importData.rules[i], importText);
                });
                resolveImports(cssText, node, baseUrl, callbackFn, __errorData, __errorRules);
              }
            });
          } else {
            callbackFn(cssText, __errorData);
          }
        }

        if (sourceNodes.length) {
          sourceNodes.forEach(function (node, i) {
            var linkHref = node.getAttribute("href");
            var linkRel = node.getAttribute("rel");
            var isLink = node.nodeName === "LINK" && linkHref && linkRel && linkRel.toLowerCase().indexOf("stylesheet") !== -1;
            var isSkip = settings.skipDisabled === false ? false : node.disabled;
            var isStyle = node.nodeName === "STYLE";

            if (isLink && !isSkip) {
              getUrls(linkHref, {
                mimeType: "text/css",
                onBeforeSend: function onBeforeSend(xhr, url, urlIndex) {
                  settings.onBeforeSend(xhr, node, url);
                },
                onSuccess: function onSuccess(cssText, url, urlIndex) {
                  var sourceUrl = getFullUrl(linkHref);
                  handleSuccess(cssText, i, node, sourceUrl);
                },
                onError: function onError(xhr, url, urlIndex) {
                  cssArray[i] = "";
                  settings.onError(xhr, node, url);
                  handleComplete();
                }
              });
            } else if (isStyle && !isSkip) {
              var cssText = node.textContent;

              if (settings.useCSSOM) {
                cssText = Array.apply(null, node.sheet.cssRules).map(function (rule) {
                  return rule.cssText;
                }).join("");
              }

              handleSuccess(cssText, i, node, location.href);
            } else {
              cssArray[i] = "";
              handleComplete();
            }
          });
        } else {
          settings.onComplete("", []);
        }
      }

      function getFullUrl(url, base) {
        var d = document.implementation.createHTMLDocument("");
        var b = d.createElement("base");
        var a = d.createElement("a");
        d.head.appendChild(b);
        d.body.appendChild(a);
        b.href = base || document.baseURI || (document.querySelector("base") || {}).href || location.href;
        a.href = url;
        return a.href;
      }

      function matchesSelector(elm, selector) {
        var matches = elm.matches || elm.matchesSelector || elm.webkitMatchesSelector || elm.mozMatchesSelector || elm.msMatchesSelector || elm.oMatchesSelector;
        return matches.call(elm, selector);
      }

      var balancedMatch = balanced;

      function balanced(a, b, str) {
        if (a instanceof RegExp) a = maybeMatch(a, str);
        if (b instanceof RegExp) b = maybeMatch(b, str);
        var r = range(a, b, str);
        return r && {
          start: r[0],
          end: r[1],
          pre: str.slice(0, r[0]),
          body: str.slice(r[0] + a.length, r[1]),
          post: str.slice(r[1] + b.length)
        };
      }

      function maybeMatch(reg, str) {
        var m = str.match(reg);
        return m ? m[0] : null;
      }

      balanced.range = range;

      function range(a, b, str) {
        var begs, beg, left, right, result;
        var ai = str.indexOf(a);
        var bi = str.indexOf(b, ai + 1);
        var i = ai;

        if (ai >= 0 && bi > 0) {
          begs = [];
          left = str.length;

          while (i >= 0 && !result) {
            if (i == ai) {
              begs.push(i);
              ai = str.indexOf(a, i + 1);
            } else if (begs.length == 1) {
              result = [begs.pop(), bi];
            } else {
              beg = begs.pop();

              if (beg < left) {
                left = beg;
                right = bi;
              }

              bi = str.indexOf(b, i + 1);
            }

            i = ai < bi && ai >= 0 ? ai : bi;
          }

          if (begs.length) {
            result = [left, right];
          }
        }

        return result;
      }

      function parseCss(css) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var defaults = {
          preserveStatic: true,
          removeComments: false
        };

        var settings = _extends({}, defaults, options);

        var errors = [];

        function error(msg) {
          throw new Error("CSS parse error: ".concat(msg));
        }

        function match(re) {
          var m = re.exec(css);

          if (m) {
            css = css.slice(m[0].length);
            return m;
          }
        }

        function open() {
          return match(/^{\s*/);
        }

        function close() {
          return match(/^}/);
        }

        function whitespace() {
          match(/^\s*/);
        }

        function comment() {
          whitespace();

          if (css[0] !== "/" || css[1] !== "*") {
            return;
          }

          var i = 2;

          while (css[i] && (css[i] !== "*" || css[i + 1] !== "/")) {
            i++;
          }

          if (!css[i]) {
            return error("end of comment is missing");
          }

          var str = css.slice(2, i);
          css = css.slice(i + 2);
          return {
            type: "comment",
            comment: str
          };
        }

        function comments() {
          var cmnts = [];
          var c;

          while (c = comment()) {
            cmnts.push(c);
          }

          return settings.removeComments ? [] : cmnts;
        }

        function selector() {
          whitespace();

          while (css[0] === "}") {
            error("extra closing bracket");
          }

          var m = match(/^(("(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^{])+)/);

          if (m) {
            return m[0].trim().replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, "").replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function (m) {
              return m.replace(/,/g, "‌");
            }).split(/\s*(?![^(]*\)),\s*/).map(function (s) {
              return s.replace(/\u200C/g, ",");
            });
          }
        }

        function declaration() {
          if (css[0] === "@") {
            return at_rule();
          }

          match(/^([;\s]*)+/);
          var comment_regexp = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
          var prop = match(/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);

          if (!prop) {
            return;
          }

          prop = prop[0].trim();

          if (!match(/^:\s*/)) {
            return error("property missing ':'");
          }

          var val = match(/^((?:\/\*.*?\*\/|'(?:\\'|.)*?'|"(?:\\"|.)*?"|\((\s*'(?:\\'|.)*?'|"(?:\\"|.)*?"|[^)]*?)\s*\)|[^};])+)/);
          var ret = {
            type: "declaration",
            property: prop.replace(comment_regexp, ""),
            value: val ? val[0].replace(comment_regexp, "").trim() : ""
          };
          match(/^[;\s]*/);
          return ret;
        }

        function declarations() {
          if (!open()) {
            return error("missing '{'");
          }

          var d;
          var decls = comments();

          while (d = declaration()) {
            decls.push(d);
            decls = decls.concat(comments());
          }

          if (!close()) {
            return error("missing '}'");
          }

          return decls;
        }

        function keyframe() {
          whitespace();
          var vals = [];
          var m;

          while (m = match(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/)) {
            vals.push(m[1]);
            match(/^,\s*/);
          }

          if (vals.length) {
            return {
              type: "keyframe",
              values: vals,
              declarations: declarations()
            };
          }
        }

        function at_keyframes() {
          var m = match(/^@([-\w]+)?keyframes\s*/);

          if (!m) {
            return;
          }

          var vendor = m[1];
          m = match(/^([-\w]+)\s*/);

          if (!m) {
            return error("@keyframes missing name");
          }

          var name = m[1];

          if (!open()) {
            return error("@keyframes missing '{'");
          }

          var frame;
          var frames = comments();

          while (frame = keyframe()) {
            frames.push(frame);
            frames = frames.concat(comments());
          }

          if (!close()) {
            return error("@keyframes missing '}'");
          }

          return {
            type: "keyframes",
            name: name,
            vendor: vendor,
            keyframes: frames
          };
        }

        function at_page() {
          var m = match(/^@page */);

          if (m) {
            var sel = selector() || [];
            return {
              type: "page",
              selectors: sel,
              declarations: declarations()
            };
          }
        }

        function at_page_margin_box() {
          var m = match(/@(top|bottom|left|right)-(left|center|right|top|middle|bottom)-?(corner)?\s*/);

          if (m) {
            var name = "".concat(m[1], "-").concat(m[2]) + (m[3] ? "-".concat(m[3]) : "");
            return {
              type: "page-margin-box",
              name: name,
              declarations: declarations()
            };
          }
        }

        function at_fontface() {
          var m = match(/^@font-face\s*/);

          if (m) {
            return {
              type: "font-face",
              declarations: declarations()
            };
          }
        }

        function at_supports() {
          var m = match(/^@supports *([^{]+)/);

          if (m) {
            return {
              type: "supports",
              supports: m[1].trim(),
              rules: rules()
            };
          }
        }

        function at_host() {
          var m = match(/^@host\s*/);

          if (m) {
            return {
              type: "host",
              rules: rules()
            };
          }
        }

        function at_media() {
          var m = match(/^@media([^{]+)*/);

          if (m) {
            return {
              type: "media",
              media: (m[1] || "").trim(),
              rules: rules()
            };
          }
        }

        function at_custom_m() {
          var m = match(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);

          if (m) {
            return {
              type: "custom-media",
              name: m[1].trim(),
              media: m[2].trim()
            };
          }
        }

        function at_document() {
          var m = match(/^@([-\w]+)?document *([^{]+)/);

          if (m) {
            return {
              type: "document",
              document: m[2].trim(),
              vendor: m[1] ? m[1].trim() : null,
              rules: rules()
            };
          }
        }

        function at_x() {
          var m = match(/^@(import|charset|namespace)\s*([^;]+);/);

          if (m) {
            return {
              type: m[1],
              name: m[2].trim()
            };
          }
        }

        function at_rule() {
          whitespace();

          if (css[0] === "@") {
            var ret = at_x() || at_fontface() || at_media() || at_keyframes() || at_supports() || at_document() || at_custom_m() || at_host() || at_page() || at_page_margin_box();

            if (ret && !settings.preserveStatic) {
              var hasVarFunc = false;

              if (ret.declarations) {
                hasVarFunc = ret.declarations.some(function (decl) {
                  return /var\(/.test(decl.value);
                });
              } else {
                var arr = ret.keyframes || ret.rules || [];
                hasVarFunc = arr.some(function (obj) {
                  return (obj.declarations || []).some(function (decl) {
                    return /var\(/.test(decl.value);
                  });
                });
              }

              return hasVarFunc ? ret : {};
            }

            return ret;
          }
        }

        function rule() {
          if (!settings.preserveStatic) {
            var balancedMatch$1 = balancedMatch("{", "}", css);

            if (balancedMatch$1) {
              var hasVarDecl = /:(?:root|host)(?![.:#(])/.test(balancedMatch$1.pre) && /--\S*\s*:/.test(balancedMatch$1.body);
              var hasVarFunc = /var\(/.test(balancedMatch$1.body);

              if (!hasVarDecl && !hasVarFunc) {
                css = css.slice(balancedMatch$1.end + 1);
                return {};
              }
            }
          }

          var sel = selector() || [];
          var decls = settings.preserveStatic ? declarations() : declarations().filter(function (decl) {
            var hasVarDecl = sel.some(function (s) {
              return /:(?:root|host)(?![.:#(])/.test(s);
            }) && /^--\S/.test(decl.property);
            var hasVarFunc = /var\(/.test(decl.value);
            return hasVarDecl || hasVarFunc;
          });

          if (!sel.length) {
            error("selector missing");
          }

          return {
            type: "rule",
            selectors: sel,
            declarations: decls
          };
        }

        function rules(core) {
          if (!core && !open()) {
            return error("missing '{'");
          }

          var node;
          var rules = comments();

          while (css.length && (core || css[0] !== "}") && (node = at_rule() || rule())) {
            if (node.type) {
              rules.push(node);
            }

            rules = rules.concat(comments());
          }

          if (!core && !close()) {
            return error("missing '}'");
          }

          return rules;
        }

        return {
          type: "stylesheet",
          stylesheet: {
            rules: rules(true),
            errors: errors
          }
        };
      }

      function parseVars(cssData) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var defaults = {
          parseHost: false,
          store: {},
          onWarning: function onWarning() {}
        };

        var settings = _extends({}, defaults, options);

        var reVarDeclSelectors = new RegExp(":".concat(settings.parseHost ? "host" : "root", "$"));

        if (typeof cssData === "string") {
          cssData = parseCss(cssData, settings);
        }

        cssData.stylesheet.rules.forEach(function (rule) {
          if (rule.type !== "rule" || !rule.selectors.some(function (s) {
            return reVarDeclSelectors.test(s);
          })) {
            return;
          }

          rule.declarations.forEach(function (decl, i) {
            var prop = decl.property;
            var value = decl.value;

            if (prop && prop.indexOf("--") === 0) {
              settings.store[prop] = value;
            }
          });
        });
        return settings.store;
      }

      function stringifyCss(tree) {
        var delim = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        var cb = arguments.length > 2 ? arguments[2] : undefined;
        var renderMethods = {
          charset: function charset(node) {
            return "@charset " + node.name + ";";
          },
          comment: function comment(node) {
            return node.comment.indexOf("__CSSVARSPONYFILL") === 0 ? "/*" + node.comment + "*/" : "";
          },
          "custom-media": function customMedia(node) {
            return "@custom-media " + node.name + " " + node.media + ";";
          },
          declaration: function declaration(node) {
            return node.property + ":" + node.value + ";";
          },
          document: function document(node) {
            return "@" + (node.vendor || "") + "document " + node.document + "{" + visit(node.rules) + "}";
          },
          "font-face": function fontFace(node) {
            return "@font-face" + "{" + visit(node.declarations) + "}";
          },
          host: function host(node) {
            return "@host" + "{" + visit(node.rules) + "}";
          },
          "import": function _import(node) {
            return "@import " + node.name + ";";
          },
          keyframe: function keyframe(node) {
            return node.values.join(",") + "{" + visit(node.declarations) + "}";
          },
          keyframes: function keyframes(node) {
            return "@" + (node.vendor || "") + "keyframes " + node.name + "{" + visit(node.keyframes) + "}";
          },
          media: function media(node) {
            return "@media " + node.media + "{" + visit(node.rules) + "}";
          },
          namespace: function namespace(node) {
            return "@namespace " + node.name + ";";
          },
          page: function page(node) {
            return "@page " + (node.selectors.length ? node.selectors.join(", ") : "") + "{" + visit(node.declarations) + "}";
          },
          "page-margin-box": function pageMarginBox(node) {
            return "@" + node.name + "{" + visit(node.declarations) + "}";
          },
          rule: function rule(node) {
            var decls = node.declarations;

            if (decls.length) {
              return node.selectors.join(",") + "{" + visit(decls) + "}";
            }
          },
          supports: function supports(node) {
            return "@supports " + node.supports + "{" + visit(node.rules) + "}";
          }
        };

        function visit(nodes) {
          var buf = "";

          for (var i = 0; i < nodes.length; i++) {
            var n = nodes[i];

            if (cb) {
              cb(n);
            }

            var txt = renderMethods[n.type](n);

            if (txt) {
              buf += txt;

              if (txt.length && n.selectors) {
                buf += delim;
              }
            }
          }

          return buf;
        }

        return visit(tree.stylesheet.rules);
      }

      function walkCss(node, fn) {
        node.rules.forEach(function (rule) {
          if (rule.rules) {
            walkCss(rule, fn);
            return;
          }

          if (rule.keyframes) {
            rule.keyframes.forEach(function (keyframe) {
              if (keyframe.type === "keyframe") {
                fn(keyframe.declarations, rule);
              }
            });
            return;
          }

          if (!rule.declarations) {
            return;
          }

          fn(rule.declarations, node);
        });
      }

      var VAR_PROP_IDENTIFIER = "--";
      var VAR_FUNC_IDENTIFIER = "var";

      function transformCss(cssData) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var defaults = {
          preserveStatic: true,
          preserveVars: false,
          variables: {},
          onWarning: function onWarning() {}
        };

        var settings = _extends({}, defaults, options);

        if (typeof cssData === "string") {
          cssData = parseCss(cssData, settings);
        }

        walkCss(cssData.stylesheet, function (declarations, node) {
          for (var i = 0; i < declarations.length; i++) {
            var decl = declarations[i];
            var type = decl.type;
            var prop = decl.property;
            var value = decl.value;

            if (type !== "declaration") {
              continue;
            }

            if (!settings.preserveVars && prop && prop.indexOf(VAR_PROP_IDENTIFIER) === 0) {
              declarations.splice(i, 1);
              i--;
              continue;
            }

            if (value.indexOf(VAR_FUNC_IDENTIFIER + "(") !== -1) {
              var resolvedValue = resolveValue(value, settings);

              if (resolvedValue !== decl.value) {
                resolvedValue = fixNestedCalc(resolvedValue);

                if (!settings.preserveVars) {
                  decl.value = resolvedValue;
                } else {
                  declarations.splice(i, 0, {
                    type: type,
                    property: prop,
                    value: resolvedValue
                  });
                  i++;
                }
              }
            }
          }
        });
        return stringifyCss(cssData);
      }

      function fixNestedCalc(value) {
        var reCalcVal = /calc\(([^)]+)\)/g;
        (value.match(reCalcVal) || []).forEach(function (match) {
          var newVal = "calc".concat(match.split("calc").join(""));
          value = value.replace(match, newVal);
        });
        return value;
      }

      function resolveValue(value) {
        var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var __recursiveFallback = arguments.length > 2 ? arguments[2] : undefined;

        if (value.indexOf("var(") === -1) {
          return value;
        }

        var valueData = balancedMatch("(", ")", value);

        function resolveFunc(value) {
          var name = value.split(",")[0].replace(/[\s\n\t]/g, "");
          var fallback = (value.match(/(?:\s*,\s*){1}(.*)?/) || [])[1];
          var match = Object.prototype.hasOwnProperty.call(settings.variables, name) ? String(settings.variables[name]) : undefined;
          var replacement = match || (fallback ? String(fallback) : undefined);
          var unresolvedFallback = __recursiveFallback || value;

          if (!match) {
            settings.onWarning('variable "'.concat(name, '" is undefined'));
          }

          if (replacement && replacement !== "undefined" && replacement.length > 0) {
            return resolveValue(replacement, settings, unresolvedFallback);
          } else {
            return "var(".concat(unresolvedFallback, ")");
          }
        }

        if (!valueData) {
          if (value.indexOf("var(") !== -1) {
            settings.onWarning('missing closing ")" in the value "'.concat(value, '"'));
          }

          return value;
        } else if (valueData.pre.slice(-3) === "var") {
          var isEmptyVarFunc = valueData.body.trim().length === 0;

          if (isEmptyVarFunc) {
            settings.onWarning("var() must contain a non-whitespace string");
            return value;
          } else {
            return valueData.pre.slice(0, -3) + resolveFunc(valueData.body) + resolveValue(valueData.post, settings);
          }
        } else {
          return valueData.pre + "(".concat(resolveValue(valueData.body, settings), ")") + resolveValue(valueData.post, settings);
        }
      }

      var isBrowser = typeof window !== "undefined";
      var isNativeSupport = isBrowser && window.CSS && window.CSS.supports && window.CSS.supports("(--a: 0)");
      var counters = {
        group: 0,
        job: 0
      };
      var defaults = {
        rootElement: isBrowser ? document : null,
        shadowDOM: false,
        include: "style,link[rel=stylesheet]",
        exclude: "",
        variables: {},
        onlyLegacy: true,
        preserveStatic: true,
        preserveVars: false,
        silent: false,
        updateDOM: true,
        updateURLs: true,
        watch: null,
        onBeforeSend: function onBeforeSend() {},
        onError: function onError() {},
        onWarning: function onWarning() {},
        onSuccess: function onSuccess() {},
        onComplete: function onComplete() {},
        onFinally: function onFinally() {}
      };
      var regex = {
        cssComments: /\/\*[\s\S]+?\*\//g,
        cssKeyframes: /@(?:-\w*-)?keyframes/,
        cssMediaQueries: /@media[^{]+\{([\s\S]+?})\s*}/g,
        cssUrls: /url\((?!['"]?(?:data|http|\/\/):)['"]?([^'")]*)['"]?\)/g,
        cssVarDeclRules: /(?::(?:root|host)(?![.:#(])[\s,]*[^{]*{\s*[^}]*})/g,
        cssVarDecls: /(?:[\s;]*)(-{2}\w[\w-]*)(?:\s*:\s*)([^;]*);/g,
        cssVarFunc: /var\(\s*--[\w-]/,
        cssVars: /(?:(?::(?:root|host)(?![.:#(])[\s,]*[^{]*{\s*[^;]*;*\s*)|(?:var\(\s*))(--[^:)]+)(?:\s*[:)])/
      };
      var variableStore = {
        dom: {},
        job: {},
        user: {}
      };
      var cssVarsIsRunning = false;
      var cssVarsObserver = null;
      var cssVarsSrcNodeCount = 0;
      var debounceTimer = null;
      var isShadowDOMReady = false;
      /**
       * Fetches, parses, and transforms CSS custom properties from specified
       * <style> and <link> elements into static values, then appends a new <style>
       * element with static values to the DOM to provide CSS custom property
       * compatibility for legacy browsers. Also provides a single interface for
       * live updates of runtime values in both modern and legacy browsers.
       *
       * @preserve
       * @param {object}   [options] Options object
       * @param {object}   [options.rootElement=document] Root element to traverse for
       *                   <link> and <style> nodes
       * @param {boolean}  [options.shadowDOM=false] Determines if shadow DOM <link>
       *                   and <style> nodes will be processed.
       * @param {string}   [options.include="style,link[rel=stylesheet]"] CSS selector
       *                   matching <link re="stylesheet"> and <style> nodes to
       *                   process
       * @param {string}   [options.exclude] CSS selector matching <link
       *                   rel="stylehseet"> and <style> nodes to exclude from those
       *                   matches by options.include
       * @param {object}   [options.variables] A map of custom property name/value
       *                   pairs. Property names can omit or include the leading
       *                   double-hyphen (—), and values specified will override
       *                   previous values
       * @param {boolean}  [options.onlyLegacy=true] Determines if the ponyfill will
       *                   only generate legacy-compatible CSS in browsers that lack
       *                   native support (i.e., legacy browsers)
       * @param {boolean}  [options.preserveStatic=true] Determines if CSS
       *                   declarations that do not reference a custom property will
       *                   be preserved in the transformed CSS
       * @param {boolean}  [options.preserveVars=false] Determines if CSS custom
       *                   property declarations will be preserved in the transformed
       *                   CSS
       * @param {boolean}  [options.silent=false] Determines if warning and error
       *                   messages will be displayed on the console
       * @param {boolean}  [options.updateDOM=true] Determines if the ponyfill will
       *                   update the DOM after processing CSS custom properties
       * @param {boolean}  [options.updateURLs=true] Determines if relative url()
       *                   paths will be converted to absolute urls in external CSS
       * @param {boolean}  [options.watch=false] Determines if a MutationObserver will
       *                   be created that will execute the ponyfill when a <link> or
       *                   <style> DOM mutation is observed
       * @param {function} [options.onBeforeSend] Callback before XHR is sent. Passes
       *                   1) the XHR object, 2) source node reference, and 3) the
       *                   source URL as arguments
       * @param {function} [options.onError] Callback after a CSS parsing error has
       *                   occurred or an XHR request has failed. Passes 1) an error
       *                   message, and 2) source node reference, 3) xhr, and 4 url as
       *                   arguments.
       * @param {function} [options.onWarning] Callback after each CSS parsing warning
       *                   has occurred. Passes 1) a warning message as an argument.
       * @param {function} [options.onSuccess] Callback after CSS data has been
       *                   collected from each node and before CSS custom properties
       *                   have been transformed. Allows modifying the CSS data before
       *                   it is transformed by returning any string value (or false
       *                   to skip). Passes 1) CSS text, 2) source node reference, and
       *                   3) the source URL as arguments.
       * @param {function} [options.onComplete] Callback after all CSS has been
       *                   processed, legacy-compatible CSS has been generated, and
       *                   (optionally) the DOM has been updated. Passes 1) a CSS
       *                   string with CSS variable values resolved, 2) an array of
       *                   output <style> node references that have been appended to
       *                   the DOM, 3) an object containing all custom properies names
       *                   and values, and 4) the ponyfill execution time in
       *                   milliseconds.
       * @param {function} [options.onFinally] Callback in modern and legacy browsers
       *                   after the ponyfill has finished all tasks. Passes 1) a
       *                   boolean indicating if the last ponyfill call resulted in a
       *                   style change, 2) a boolean indicating if the current
       *                   browser provides native support for CSS custom properties,
       *                   and 3) the ponyfill execution time in milliseconds.
       * @example
       *
       *   cssVars({
       *     rootElement   : document,
       *     shadowDOM     : false,
       *     include       : 'style,link[rel="stylesheet"]',
       *     exclude       : '',
       *     variables     : {},
       *     onlyLegacy    : true,
       *     preserveStatic: true,
       *     preserveVars  : false,
       *     silent        : false,
       *     updateDOM     : true,
       *     updateURLs    : true,
       *     watch         : false,
       *     onBeforeSend(xhr, node, url) {},
       *     onError(message, node, xhr, url) {},
       *     onWarning(message) {},
       *     onSuccess(cssText, node, url) {},
       *     onComplete(cssText, styleNode, cssVariables, benchmark) {},
       *     onFinally(hasChanged, hasNativeSupport, benchmark)
       *   });
       */

      function cssVars() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var msgPrefix = "cssVars(): ";

        var settings = _extends({}, defaults, options);

        function handleError(message, sourceNode, xhr, url) {
          if (!settings.silent && window.console) {
            console.error("".concat(msgPrefix).concat(message, "\n"), sourceNode);
          }

          settings.onError(message, sourceNode, xhr, url);
        }

        function handleWarning(message) {
          if (!settings.silent && window.console) {
            console.warn("".concat(msgPrefix).concat(message));
          }

          settings.onWarning(message);
        }

        function handleFinally(hasChanged) {
          settings.onFinally(Boolean(hasChanged), isNativeSupport, getTimeStamp() - settings.__benchmark);
        }

        if (!isBrowser) {
          return;
        }

        if (settings.watch) {
          settings.watch = defaults.watch;
          addMutationObserver(settings);
          cssVars(settings);
          return;
        } else if (settings.watch === false && cssVarsObserver) {
          cssVarsObserver.disconnect();
          cssVarsObserver = null;
        }

        if (!settings.__benchmark) {
          if (cssVarsIsRunning === settings.rootElement) {
            cssVarsDebounced(options);
            return;
          }

          settings.__benchmark = getTimeStamp();
          settings.exclude = [cssVarsObserver ? '[data-cssvars]:not([data-cssvars=""])' : '[data-cssvars="out"]', settings.exclude].filter(function (selector) {
            return selector;
          }).join(",");
          settings.variables = fixVarNames(settings.variables);

          if (!cssVarsObserver) {
            var outNodes = Array.apply(null, settings.rootElement.querySelectorAll('[data-cssvars="out"]'));
            outNodes.forEach(function (outNode) {
              var dataGroup = outNode.getAttribute("data-cssvars-group");
              var srcNode = dataGroup ? settings.rootElement.querySelector('[data-cssvars="src"][data-cssvars-group="'.concat(dataGroup, '"]')) : null;

              if (!srcNode) {
                outNode.parentNode.removeChild(outNode);
              }
            });

            if (cssVarsSrcNodeCount) {
              var srcNodes = settings.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars="out"])');

              if (srcNodes.length < cssVarsSrcNodeCount) {
                cssVarsSrcNodeCount = srcNodes.length;
                variableStore.dom = {};
              }
            }
          }
        }

        if (document.readyState !== "loading") {
          if (isNativeSupport && settings.onlyLegacy) {
            var hasVarChange = false;

            if (settings.updateDOM) {
              var targetElm = settings.rootElement.host || (settings.rootElement === document ? document.documentElement : settings.rootElement);
              Object.keys(settings.variables).forEach(function (key) {
                var varValue = settings.variables[key];
                hasVarChange = hasVarChange || varValue !== getComputedStyle(targetElm).getPropertyValue(key);
                targetElm.style.setProperty(key, varValue);
              });
            }

            handleFinally(hasVarChange);
          } else if (!isShadowDOMReady && (settings.shadowDOM || settings.rootElement.shadowRoot || settings.rootElement.host)) {
            getCssData({
              rootElement: defaults.rootElement,
              include: defaults.include,
              exclude: settings.exclude,
              skipDisabled: false,
              onSuccess: function onSuccess(cssText, node, url) {
                cssText = cssText.replace(regex.cssComments, "").replace(regex.cssMediaQueries, "");
                cssText = (cssText.match(regex.cssVarDeclRules) || []).join("");
                return cssText || false;
              },
              onComplete: function onComplete(cssText, cssArray, nodeArray) {
                parseVars(cssText, {
                  store: variableStore.dom,
                  onWarning: handleWarning
                });
                isShadowDOMReady = true;
                cssVars(settings);
              }
            });
          } else {
            cssVarsIsRunning = settings.rootElement;
            getCssData({
              rootElement: settings.rootElement,
              include: settings.include,
              exclude: settings.exclude,
              skipDisabled: false,
              onBeforeSend: settings.onBeforeSend,
              onError: function onError(xhr, node, url) {
                var responseUrl = xhr.responseURL || getFullUrl$1(url, location.href);
                var statusText = xhr.statusText ? "(".concat(xhr.statusText, ")") : "Unspecified Error" + (xhr.status === 0 ? " (possibly CORS related)" : "");
                var errorMsg = "CSS XHR Error: ".concat(responseUrl, " ").concat(xhr.status, " ").concat(statusText);
                handleError(errorMsg, node, xhr, responseUrl);
              },
              onSuccess: function onSuccess(cssText, node, url) {
                var isLink = node.tagName === "LINK";
                var isStyleImport = node.tagName === "STYLE" && cssText !== node.textContent;
                var returnVal = settings.onSuccess(cssText, node, url);
                cssText = returnVal !== undefined && Boolean(returnVal) === false ? "" : returnVal || cssText;

                if (settings.updateURLs && (isLink || isStyleImport)) {
                  cssText = fixRelativeCssUrls(cssText, url);
                }

                return cssText;
              },
              onComplete: function onComplete(cssText, cssArray) {
                var nodeArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

                var currentVars = _extends({}, variableStore.dom, variableStore.user);

                var hasVarChange = false;
                variableStore.job = {};
                nodeArray.forEach(function (node, i) {
                  var nodeCSS = cssArray[i];

                  if (regex.cssVars.test(nodeCSS)) {
                    try {
                      var cssTree = parseCss(nodeCSS, {
                        preserveStatic: settings.preserveStatic,
                        removeComments: true
                      });
                      parseVars(cssTree, {
                        parseHost: Boolean(settings.rootElement.host),
                        store: variableStore.dom,
                        onWarning: handleWarning
                      });
                      node.__cssVars = {
                        tree: cssTree
                      };
                    } catch (err) {
                      handleError(err.message, node);
                    }
                  }
                });

                _extends(variableStore.job, variableStore.dom);

                if (settings.updateDOM) {
                  _extends(variableStore.user, settings.variables);

                  _extends(variableStore.job, variableStore.user);
                } else {
                  _extends(variableStore.job, variableStore.user, settings.variables);

                  _extends(currentVars, settings.variables);
                }

                hasVarChange = counters.job > 0 && Boolean(Object.keys(variableStore.job).length > Object.keys(currentVars).length || Boolean(Object.keys(currentVars).length && Object.keys(variableStore.job).some(function (key) {
                  return variableStore.job[key] !== currentVars[key];
                })));

                if (hasVarChange) {
                  resetCssNodes(settings.rootElement);
                  cssVars(settings);
                } else {
                  var outCssArray = [];
                  var outNodeArray = [];
                  var hasKeyframesWithVars = false;

                  if (settings.updateDOM) {
                    counters.job++;
                  }

                  nodeArray.forEach(function (node, i) {
                    var isSkip = !node.__cssVars;

                    if (node.__cssVars) {
                      try {
                        transformCss(node.__cssVars.tree, _extends({}, settings, {
                          variables: variableStore.job,
                          onWarning: handleWarning
                        }));
                        var outCss = stringifyCss(node.__cssVars.tree);

                        if (settings.updateDOM) {
                          var nodeCSS = cssArray[i];
                          var hasCSSVarFunc = regex.cssVarFunc.test(nodeCSS);

                          if (!node.getAttribute("data-cssvars")) {
                            node.setAttribute("data-cssvars", "src");
                          }

                          if (outCss.length && hasCSSVarFunc) {
                            var dataGroup = node.getAttribute("data-cssvars-group") || ++counters.group;
                            var outCssNoSpaces = outCss.replace(/\s/g, "");
                            var outNode = settings.rootElement.querySelector('[data-cssvars="out"][data-cssvars-group="'.concat(dataGroup, '"]')) || document.createElement("style");
                            hasKeyframesWithVars = hasKeyframesWithVars || regex.cssKeyframes.test(outCss);

                            if (settings.preserveStatic) {
                              node.sheet.disabled = true;
                            }

                            if (!outNode.hasAttribute("data-cssvars")) {
                              outNode.setAttribute("data-cssvars", "out");
                            }

                            if (outCssNoSpaces === node.textContent.replace(/\s/g, "")) {
                              isSkip = true;

                              if (outNode && outNode.parentNode) {
                                node.removeAttribute("data-cssvars-group");
                                outNode.parentNode.removeChild(outNode);
                              }
                            } else if (outCssNoSpaces !== outNode.textContent.replace(/\s/g, "")) {
                              [node, outNode].forEach(function (n) {
                                n.setAttribute("data-cssvars-job", counters.job);
                                n.setAttribute("data-cssvars-group", dataGroup);
                              });
                              outNode.textContent = outCss;
                              outCssArray.push(outCss);
                              outNodeArray.push(outNode);

                              if (!outNode.parentNode) {
                                node.parentNode.insertBefore(outNode, node.nextSibling);
                              }
                            }
                          }
                        } else {
                          if (node.textContent.replace(/\s/g, "") !== outCss) {
                            outCssArray.push(outCss);
                          }
                        }
                      } catch (err) {
                        handleError(err.message, node);
                      }
                    }

                    if (isSkip) {
                      node.setAttribute("data-cssvars", "skip");
                    }

                    if (!node.hasAttribute("data-cssvars-job")) {
                      node.setAttribute("data-cssvars-job", counters.job);
                    }
                  });
                  cssVarsSrcNodeCount = settings.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars="out"])').length;

                  if (settings.shadowDOM) {
                    var elms = [settings.rootElement].concat(_toConsumableArray(settings.rootElement.querySelectorAll("*")));

                    for (var i = 0, elm; elm = elms[i]; ++i) {
                      if (elm.shadowRoot && elm.shadowRoot.querySelector("style")) {
                        var shadowSettings = _extends({}, settings, {
                          rootElement: elm.shadowRoot
                        });

                        cssVars(shadowSettings);
                      }
                    }
                  }

                  if (settings.updateDOM && hasKeyframesWithVars) {
                    fixKeyframes(settings.rootElement);
                  }

                  cssVarsIsRunning = false;
                  settings.onComplete(outCssArray.join(""), outNodeArray, JSON.parse(JSON.stringify(variableStore.job)), getTimeStamp() - settings.__benchmark);
                  handleFinally(outNodeArray.length);
                }
              }
            });
          }
        } else {
          document.addEventListener("DOMContentLoaded", function init(evt) {
            cssVars(options);
            document.removeEventListener("DOMContentLoaded", init);
          });
        }
      }

      cssVars.reset = function () {
        counters.job = 0;
        counters.group = 0;
        cssVarsIsRunning = false;

        if (cssVarsObserver) {
          cssVarsObserver.disconnect();
          cssVarsObserver = null;
        }

        cssVarsSrcNodeCount = 0;
        debounceTimer = null;
        isShadowDOMReady = false;

        for (var prop in variableStore) {
          variableStore[prop] = {};
        }
      };

      function addMutationObserver(settings) {
        function isDisabled(node) {
          var isDisabledAttr = node.hasAttribute("disabled");
          var isDisabledSheet = (node.sheet || {}).disabled;
          return isDisabledAttr || isDisabledSheet;
        }

        function isLink(node) {
          var isStylesheet = node.tagName === "LINK" && (node.getAttribute("rel") || "").indexOf("stylesheet") !== -1;
          return isStylesheet && !isDisabled(node);
        }

        function isStyle(node) {
          return node.tagName === "STYLE" && !isDisabled(node);
        }

        function isValidAddMutation(mutationNodes) {
          return Array.apply(null, mutationNodes).some(function (node) {
            var isElm = node.nodeType === 1;
            var hasAttr = isElm && node.hasAttribute("data-cssvars");
            var isStyleWithVars = isStyle(node) && regex.cssVars.test(node.textContent);
            var isValid = !hasAttr && (isLink(node) || isStyleWithVars);
            return isValid;
          });
        }

        function isValidRemoveMutation(mutationNodes) {
          return Array.apply(null, mutationNodes).some(function (node) {
            var isElm = node.nodeType === 1;
            var isOutNode = isElm && node.getAttribute("data-cssvars") === "out";
            var isSrcNode = isElm && node.getAttribute("data-cssvars") === "src";
            var isValid = isSrcNode;

            if (isSrcNode || isOutNode) {
              var dataGroup = node.getAttribute("data-cssvars-group");
              var orphanNode = settings.rootElement.querySelector('[data-cssvars-group="'.concat(dataGroup, '"]'));

              if (isSrcNode) {
                resetCssNodes(settings.rootElement);
                variableStore.dom = {};
              }

              if (orphanNode) {
                orphanNode.parentNode.removeChild(orphanNode);
              }
            }

            return isValid;
          });
        }

        if (!window.MutationObserver) {
          return;
        }

        if (cssVarsObserver) {
          cssVarsObserver.disconnect();
          cssVarsObserver = null;
        }

        cssVarsObserver = new MutationObserver(function (mutations) {
          var hasValidMutation = mutations.some(function (mutation) {
            var isValid = false;

            if (mutation.type === "attributes") {
              isValid = isLink(mutation.target);
            } else if (mutation.type === "childList") {
              isValid = isValidAddMutation(mutation.addedNodes) || isValidRemoveMutation(mutation.removedNodes);
            }

            return isValid;
          });

          if (hasValidMutation) {
            cssVars(settings);
          }
        });
        cssVarsObserver.observe(document.documentElement, {
          attributes: true,
          attributeFilter: ["disabled", "href"],
          childList: true,
          subtree: true
        });
      }

      function cssVarsDebounced(settings) {
        var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(function () {
          settings.__benchmark = null;
          cssVars(settings);
        }, delay);
      }

      function fixKeyframes(rootElement) {
        var animationNameProp = ["animation-name", "-moz-animation-name", "-webkit-animation-name"].filter(function (prop) {
          return getComputedStyle(document.body)[prop];
        })[0];

        if (animationNameProp) {
          var allNodes = rootElement.getElementsByTagName("*");
          var keyframeNodes = [];
          var nameMarker = "__CSSVARSPONYFILL-KEYFRAMES__";

          for (var i = 0, len = allNodes.length; i < len; i++) {
            var node = allNodes[i];
            var animationName = getComputedStyle(node)[animationNameProp];

            if (animationName !== "none") {
              node.style[animationNameProp] += nameMarker;
              keyframeNodes.push(node);
            }
          }

          void document.body.offsetHeight;

          for (var _i = 0, _len = keyframeNodes.length; _i < _len; _i++) {
            var nodeStyle = keyframeNodes[_i].style;
            nodeStyle[animationNameProp] = nodeStyle[animationNameProp].replace(nameMarker, "");
          }
        }
      }

      function fixRelativeCssUrls(cssText, baseUrl) {
        var cssUrls = cssText.replace(regex.cssComments, "").match(regex.cssUrls) || [];
        cssUrls.forEach(function (cssUrl) {
          var oldUrl = cssUrl.replace(regex.cssUrls, "$1");
          var newUrl = getFullUrl$1(oldUrl, baseUrl);
          cssText = cssText.replace(cssUrl, cssUrl.replace(oldUrl, newUrl));
        });
        return cssText;
      }

      function fixVarNames() {
        var varObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var reLeadingHyphens = /^-{2}/;
        return Object.keys(varObj).reduce(function (obj, value) {
          var key = reLeadingHyphens.test(value) ? value : "--".concat(value.replace(/^-+/, ""));
          obj[key] = varObj[value];
          return obj;
        }, {});
      }

      function getFullUrl$1(url) {
        var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : location.href;
        var d = document.implementation.createHTMLDocument("");
        var b = d.createElement("base");
        var a = d.createElement("a");
        d.head.appendChild(b);
        d.body.appendChild(a);
        b.href = base;
        a.href = url;
        return a.href;
      }

      function getTimeStamp() {
        return isBrowser && (window.performance || {}).now ? window.performance.now() : new Date().getTime();
      }

      function resetCssNodes(rootElement) {
        var resetNodes = Array.apply(null, rootElement.querySelectorAll('[data-cssvars="skip"],[data-cssvars="src"]'));
        resetNodes.forEach(function (node) {
          return node.setAttribute("data-cssvars", "");
        });
      }
      /* harmony default export */


      __webpack_exports__["default"] = cssVars; //# sourceMappingURL=css-vars-ponyfill.esm.js.map

      /***/
    },

    /***/
    "./src/app-routing.module.ts":
    /*!***********************************!*\
      !*** ./src/app-routing.module.ts ***!
      \***********************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_index_component_index_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/index-component/index-component.component */
      "./src/app/index-component/index-component.component.ts");
      /* harmony import */


      var src_app_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/project-details/project-details.component */
      "./src/app/project-details/project-details.component.ts");
      /* harmony import */


      var src_app_projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/projects-list/projects-list.component */
      "./src/app/projects-list/projects-list.component.ts");

      var routes = [{
        path: "",
        component: src_app_index_component_index_component_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponentComponent"]
      }, {
        path: "project/:id",
        component: src_app_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_3__["ProjectDetailsComponent"]
      }, {
        path: "projects",
        component: src_app_projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsListComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app-footer/app-footer.component.ts":
    /*!****************************************************!*\
      !*** ./src/app/app-footer/app-footer.component.ts ***!
      \****************************************************/

    /*! exports provided: AppFooterComponent */

    /***/
    function srcAppAppFooterAppFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppFooterComponent", function () {
        return AppFooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AppFooterComponent = /*#__PURE__*/function () {
        function AppFooterComponent() {
          _classCallCheck(this, AppFooterComponent);
        }

        _createClass(AppFooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AppFooterComponent;
      }();

      AppFooterComponent.ɵfac = function AppFooterComponent_Factory(t) {
        return new (t || AppFooterComponent)();
      };

      AppFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppFooterComponent,
        selectors: [["app-app-footer"]],
        decls: 2,
        vars: 0,
        template: function AppFooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "app-footer works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1mb290ZXIvYXBwLWZvb3Rlci5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppFooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-app-footer',
            templateUrl: './app-footer.component.html',
            styleUrls: ['./app-footer.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/app-header/app-header.component.ts":
    /*!****************************************************!*\
      !*** ./src/app/app-header/app-header.component.ts ***!
      \****************************************************/

    /*! exports provided: AppHeaderComponent */

    /***/
    function srcAppAppHeaderAppHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function () {
        return AppHeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AppHeaderComponent = /*#__PURE__*/function () {
        function AppHeaderComponent() {
          _classCallCheck(this, AppHeaderComponent);
        }

        _createClass(AppHeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AppHeaderComponent;
      }();

      AppHeaderComponent.ɵfac = function AppHeaderComponent_Factory(t) {
        return new (t || AppHeaderComponent)();
      };

      AppHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppHeaderComponent,
        selectors: [["app-app-header"]],
        decls: 2,
        vars: 0,
        template: function AppHeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "app-header works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1oZWFkZXIvYXBwLWhlYWRlci5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppHeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-app-header',
            templateUrl: './app-header.component.html',
            styleUrls: ['./app-header.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/app-menu/app-menu.component.ts":
    /*!************************************************!*\
      !*** ./src/app/app-menu/app-menu.component.ts ***!
      \************************************************/

    /*! exports provided: AppMenuComponent */

    /***/
    function srcAppAppMenuAppMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppMenuComponent", function () {
        return AppMenuComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AppMenuComponent = /*#__PURE__*/function () {
        function AppMenuComponent() {
          _classCallCheck(this, AppMenuComponent);
        }

        _createClass(AppMenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AppMenuComponent;
      }();

      AppMenuComponent.ɵfac = function AppMenuComponent_Factory(t) {
        return new (t || AppMenuComponent)();
      };

      AppMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppMenuComponent,
        selectors: [["app-app-menu"]],
        decls: 0,
        vars: 0,
        template: function AppMenuComponent_Template(rf, ctx) {},
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1tZW51L2FwcC1tZW51LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppMenuComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-app-menu',
            templateUrl: './app-menu.component.html',
            styleUrls: ['./app-menu.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./menu/menu.component */
      "./src/app/menu/menu.component.ts");
      /* harmony import */


      var _personal_title_personal_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./personal-title/personal-title.component */
      "./src/app/personal-title/personal-title.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./footer/footer.component */
      "./src/app/footer/footer.component.ts");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'proyectoSerio';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 4,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-personal-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
          }
        },
        directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"], _personal_title_personal_title_component__WEBPACK_IMPORTED_MODULE_2__["PersonalTitleComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./header/header.component */
      "./src/app/header/header.component.ts");
      /* harmony import */


      var _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./menu/menu.component */
      "./src/app/menu/menu.component.ts");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./footer/footer.component */
      "./src/app/footer/footer.component.ts");
      /* harmony import */


      var _app_header_app_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app-header/app-header.component */
      "./src/app/app-header/app-header.component.ts");
      /* harmony import */


      var _app_menu_app_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app-menu/app-menu.component */
      "./src/app/app-menu/app-menu.component.ts");
      /* harmony import */


      var _app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app-footer/app-footer.component */
      "./src/app/app-footer/app-footer.component.ts");
      /* harmony import */


      var _personal_title_personal_title_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./personal-title/personal-title.component */
      "./src/app/personal-title/personal-title.component.ts");
      /* harmony import */


      var _contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./contact-info/contact-info.component */
      "./src/app/contact-info/contact-info.component.ts");
      /* harmony import */


      var _technical_skills_technical_skills_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./technical-skills/technical-skills.component */
      "./src/app/technical-skills/technical-skills.component.ts");
      /* harmony import */


      var _soft_kills_soft_kills_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./soft-kills/soft-kills.component */
      "./src/app/soft-kills/soft-kills.component.ts");
      /* harmony import */


      var _soft_skills_soft_skills_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./soft-skills/soft-skills.component */
      "./src/app/soft-skills/soft-skills.component.ts");
      /* harmony import */


      var _projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./projects-list/projects-list.component */
      "./src/app/projects-list/projects-list.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../app-routing.module */
      "./src/app-routing.module.ts");
      /* harmony import */


      var _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./project-details/project-details.component */
      "./src/app/project-details/project-details.component.ts");
      /* harmony import */


      var _index_component_index_component_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./index-component/index-component.component */
      "./src/app/index-component/index-component.component.ts");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _app_header_app_header_component__WEBPACK_IMPORTED_MODULE_6__["AppHeaderComponent"], _app_menu_app_menu_component__WEBPACK_IMPORTED_MODULE_7__["AppMenuComponent"], _app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_8__["AppFooterComponent"], _personal_title_personal_title_component__WEBPACK_IMPORTED_MODULE_9__["PersonalTitleComponent"], _contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_10__["ContactInfoComponent"], _technical_skills_technical_skills_component__WEBPACK_IMPORTED_MODULE_11__["TechnicalSkillsComponent"], _soft_kills_soft_kills_component__WEBPACK_IMPORTED_MODULE_12__["SoftKillsComponent"], _soft_skills_soft_skills_component__WEBPACK_IMPORTED_MODULE_13__["SoftSkillsComponent"], _projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_14__["ProjectsListComponent"], _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_16__["ProjectDetailsComponent"], _index_component_index_component_component__WEBPACK_IMPORTED_MODULE_17__["IndexComponentComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _app_header_app_header_component__WEBPACK_IMPORTED_MODULE_6__["AppHeaderComponent"], _app_menu_app_menu_component__WEBPACK_IMPORTED_MODULE_7__["AppMenuComponent"], _app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_8__["AppFooterComponent"], _personal_title_personal_title_component__WEBPACK_IMPORTED_MODULE_9__["PersonalTitleComponent"], _contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_10__["ContactInfoComponent"], _technical_skills_technical_skills_component__WEBPACK_IMPORTED_MODULE_11__["TechnicalSkillsComponent"], _soft_kills_soft_kills_component__WEBPACK_IMPORTED_MODULE_12__["SoftKillsComponent"], _soft_skills_soft_skills_component__WEBPACK_IMPORTED_MODULE_13__["SoftSkillsComponent"], _projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_14__["ProjectsListComponent"], _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_16__["ProjectDetailsComponent"], _index_component_index_component_component__WEBPACK_IMPORTED_MODULE_17__["IndexComponentComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/contact-info/contact-info.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/contact-info/contact-info.component.ts ***!
      \********************************************************/

    /*! exports provided: ContactInfoComponent */

    /***/
    function srcAppContactInfoContactInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactInfoComponent", function () {
        return ContactInfoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ContactInfoComponent = /*#__PURE__*/function () {
        function ContactInfoComponent() {
          _classCallCheck(this, ContactInfoComponent);
        }

        _createClass(ContactInfoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ContactInfoComponent;
      }();

      ContactInfoComponent.ɵfac = function ContactInfoComponent_Factory(t) {
        return new (t || ContactInfoComponent)();
      };

      ContactInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContactInfoComponent,
        selectors: [["app-contact-info"]],
        decls: 18,
        vars: 0,
        consts: [["id", "contactInfo", 1, "subsection"], [1, "subsectionTitle"], [1, "row", "col-12", "subsectionContent"], ["src", "assets/github.png", 1, "serviceImage"], [1, "serviceText"], ["href", "https://github.com/Esteban201483"], [1, "row", "col-12"], ["src", "assets/gmail.png", 1, "serviceImage", "gmail"], ["href", "mailto:Esteban201483@gmail.com"], ["src", "assets/whatsapp.png", 1, "serviceImage"], ["href", "tel:+50687553317"]],
        template: function ContactInfoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contact info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Esteban201483");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Esteban201483@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "(+506)87553317");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".serviceText[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]\n{\n\tcolor: var(--main-color);\n}\n\n.serviceText[_ngcontent-%COMP%]\n {\n\t display: inline;\n\t margin-left: 3%;\n }\n\n.serviceImage[_ngcontent-%COMP%]\n{\n\tmargin-left: 4%;\n\theight: 32px;\n\twidth: 32px;\n\tdisplay: inline;\n}\n\n.gmail[_ngcontent-%COMP%]{\n\theight: 32px;\n}\n\n.row[_ngcontent-%COMP%]{\n\tmargin-bottom: 8px;\n}\n\n\n\n@media only screen and (max-width: 760px) {\n\t.serviceImage[_ngcontent-%COMP%]\n\t{\n\t\theight: 32px;\n\t\twidth: 24px;\n\t\tmargin-right: 8px;\n\t}\n\n\t.gmail[_ngcontent-%COMP%]{\n\t\theight: 24px;\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC1pbmZvL2NvbnRhY3QtaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDLHdCQUF3QjtBQUN6Qjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsZUFBZTtDQUNoQjs7QUFFRDs7Q0FFQyxlQUFlO0NBQ2YsWUFBWTtDQUNaLFdBQVc7Q0FDWCxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsWUFBWTtBQUNiOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUlBLGFBQWE7O0FBQ2I7Q0FDQzs7RUFFQyxZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtDQUNsQjs7Q0FFQTtFQUNDLFlBQVk7Q0FDYjtBQUNEIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC1pbmZvL2NvbnRhY3QtaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlcnZpY2VUZXh0ID4gYVxue1xuXHRjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG59XG5cbi5zZXJ2aWNlVGV4dFxuIHtcblx0IGRpc3BsYXk6IGlubGluZTtcblx0IG1hcmdpbi1sZWZ0OiAzJTtcbiB9XG5cbi5zZXJ2aWNlSW1hZ2Vcbntcblx0bWFyZ2luLWxlZnQ6IDQlO1xuXHRoZWlnaHQ6IDMycHg7XG5cdHdpZHRoOiAzMnB4O1xuXHRkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5nbWFpbHtcblx0aGVpZ2h0OiAzMnB4O1xufVxuXG4ucm93e1xuXHRtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cblxuXG4vKlJlc3BvbnNpdmUqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCkge1xuXHQuc2VydmljZUltYWdlXG5cdHtcblx0XHRoZWlnaHQ6IDMycHg7XG5cdFx0d2lkdGg6IDI0cHg7XG5cdFx0bWFyZ2luLXJpZ2h0OiA4cHg7XG5cdH1cblxuXHQuZ21haWx7XG5cdFx0aGVpZ2h0OiAyNHB4O1xuXHR9XG59XG5cblxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactInfoComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-contact-info',
            templateUrl: './contact-info.component.html',
            styleUrls: ['./contact-info.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/footer/footer.component.ts":
    /*!********************************************!*\
      !*** ./src/app/footer/footer.component.ts ***!
      \********************************************/

    /*! exports provided: FooterComponent */

    /***/
    function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 4,
        vars: 0,
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "This website was developed using Angular 10.0.8");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["footer[_ngcontent-%COMP%]    > hr[_ngcontent-%COMP%]\n{\n\tmargin-top: 2%;\n\tcolor:var(--secondary-color);\n}\n\nfooter[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]\n{\n\tcolor: var(--secondary-dark-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDLGNBQWM7Q0FDZCw0QkFBNEI7QUFDN0I7O0FBRUE7O0NBRUMsa0NBQWtDO0FBQ25DIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyID4gaHJcbntcblx0bWFyZ2luLXRvcDogMiU7XG5cdGNvbG9yOnZhcigtLXNlY29uZGFyeS1jb2xvcik7XG59XG5cbmZvb3RlciA+IHBcbntcblx0Y29sb3I6IHZhcigtLXNlY29uZGFyeS1kYXJrLWNvbG9yKTtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/header/header.component.ts":
    /*!********************************************!*\
      !*** ./src/app/header/header.component.ts ***!
      \********************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent() {
          _classCallCheck(this, HeaderComponent);
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)();
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 1,
        vars: 0,
        consts: [["id", "siteHeader"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
          }
        },
        styles: ["#siteHeader[_ngcontent-%COMP%]\n{\n\tbackground-color: var(--main-color);\n\tpadding-bottom: 6.5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDLG1DQUFtQztDQUNuQyxvQkFBb0I7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2l0ZUhlYWRlclxue1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcblx0cGFkZGluZy1ib3R0b206IDYuNSU7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/index-component/index-component.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/index-component/index-component.component.ts ***!
      \**************************************************************/

    /*! exports provided: IndexComponentComponent */

    /***/
    function srcAppIndexComponentIndexComponentComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IndexComponentComponent", function () {
        return IndexComponentComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../contact-info/contact-info.component */
      "./src/app/contact-info/contact-info.component.ts");
      /* harmony import */


      var _technical_skills_technical_skills_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../technical-skills/technical-skills.component */
      "./src/app/technical-skills/technical-skills.component.ts");
      /* harmony import */


      var _soft_skills_soft_skills_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../soft-skills/soft-skills.component */
      "./src/app/soft-skills/soft-skills.component.ts");
      /* harmony import */


      var _projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../projects-list/projects-list.component */
      "./src/app/projects-list/projects-list.component.ts");

      var IndexComponentComponent = /*#__PURE__*/function () {
        function IndexComponentComponent() {
          _classCallCheck(this, IndexComponentComponent);
        }

        _createClass(IndexComponentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return IndexComponentComponent;
      }();

      IndexComponentComponent.ɵfac = function IndexComponentComponent_Factory(t) {
        return new (t || IndexComponentComponent)();
      };

      IndexComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: IndexComponentComponent,
        selectors: [["app-index-component"]],
        decls: 4,
        vars: 0,
        template: function IndexComponentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-contact-info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-technical-skills");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-soft-skills");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-projects-list");
          }
        },
        directives: [_contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_1__["ContactInfoComponent"], _technical_skills_technical_skills_component__WEBPACK_IMPORTED_MODULE_2__["TechnicalSkillsComponent"], _soft_skills_soft_skills_component__WEBPACK_IMPORTED_MODULE_3__["SoftSkillsComponent"], _projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsListComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZGV4LWNvbXBvbmVudC9pbmRleC1jb21wb25lbnQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndexComponentComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-index-component',
            templateUrl: './index-component.component.html',
            styleUrls: ['./index-component.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/menu/menu.component.ts":
    /*!****************************************!*\
      !*** ./src/app/menu/menu.component.ts ***!
      \****************************************/

    /*! exports provided: MenuComponent */

    /***/
    function srcAppMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
        return MenuComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var MenuComponent = /*#__PURE__*/function () {
        function MenuComponent() {
          _classCallCheck(this, MenuComponent);
        }

        _createClass(MenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MenuComponent;
      }();

      MenuComponent.ɵfac = function MenuComponent_Factory(t) {
        return new (t || MenuComponent)();
      };

      MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MenuComponent,
        selectors: [["app-menu"]],
        decls: 11,
        vars: 0,
        consts: [["id", "mainMenu"], ["id", "mainMenuItems"], ["routerLink", "/"], ["routerLink", "/projects"], ["routerLink", "/certifications"]],
        template: function MenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Index");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Certifications");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: ["#mainMenuItems[_ngcontent-%COMP%]\n{\n\tmargin-top: 0;\n\tlist-style: none;\n\tpadding-top: 1%;\n\tpadding-bottom: 1%;\n\n}\n\n#mainMenuItems[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover\n{\n\ttext-decoration: underline;\n\t\n}\n\n#mainMenuItems[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]\n{\n\ttext-decoration: none;\n\tcolor: white;\n\tfont-weight: bold;\n\tfont-size: 1.35em;\n\tpadding-top: 1%;\n\tpadding-bottom: 1%;\n\tpadding-left: 2.5%;\n\tpadding-right: 2.5%;\n}\n\n#mainMenu[_ngcontent-%COMP%]\n{\n\tbackground-color: var(--main-color);\n\twidth: 100%;\n}\n\n#mainMenuItems[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]\n{\n\tdisplay: inline;\n}\n\n\n\n@media only screen and (max-width: 760px) {\n\t#mainMenuItems[_ngcontent-%COMP%]{\n\t\tdisplay: -ms-flexbox;\n\t\tdisplay: flex;\n\t\t-ms-flex-direction: column;\n\t\t    flex-direction: column;\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUMsYUFBYTtDQUNiLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2Ysa0JBQWtCOztBQUVuQjs7QUFFQTs7Q0FFQywwQkFBMEI7Q0FDMUIsdUNBQXVDO0FBQ3hDOztBQUlBOztDQUVDLHFCQUFxQjtDQUNyQixZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCLGlCQUFpQjtDQUNqQixlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQixtQkFBbUI7QUFDcEI7O0FBRUE7O0NBRUMsbUNBQW1DO0NBQ25DLFdBQVc7QUFDWjs7QUFFQTs7Q0FFQyxlQUFlO0FBQ2hCOztBQUVBLGFBQWE7O0FBRWI7Q0FDQztFQUNDLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDBCQUFzQjtNQUF0QixzQkFBc0I7Q0FDdkI7QUFDRCIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21haW5NZW51SXRlbXNcbntcblx0bWFyZ2luLXRvcDogMDtcblx0bGlzdC1zdHlsZTogbm9uZTtcblx0cGFkZGluZy10b3A6IDElO1xuXHRwYWRkaW5nLWJvdHRvbTogMSU7XG5cbn1cblxuI21haW5NZW51SXRlbXMgYTpob3Zlclxue1xuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcblx0LypiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTsqL1xufVxuXG5cblxuI21haW5NZW51SXRlbXMgYVxue1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdGZvbnQtc2l6ZTogMS4zNWVtO1xuXHRwYWRkaW5nLXRvcDogMSU7XG5cdHBhZGRpbmctYm90dG9tOiAxJTtcblx0cGFkZGluZy1sZWZ0OiAyLjUlO1xuXHRwYWRkaW5nLXJpZ2h0OiAyLjUlO1xufVxuXG4jbWFpbk1lbnVcbntcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG4jbWFpbk1lbnVJdGVtcyBsaVxue1xuXHRkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi8qUmVzcG9uc2l2ZSovXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpIHtcblx0I21haW5NZW51SXRlbXN7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHR9XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-menu',
            templateUrl: './menu.component.html',
            styleUrls: ['./menu.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/personal-title/personal-title.component.ts":
    /*!************************************************************!*\
      !*** ./src/app/personal-title/personal-title.component.ts ***!
      \************************************************************/

    /*! exports provided: PersonalTitleComponent */

    /***/
    function srcAppPersonalTitlePersonalTitleComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PersonalTitleComponent", function () {
        return PersonalTitleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var PersonalTitleComponent = /*#__PURE__*/function () {
        function PersonalTitleComponent() {
          _classCallCheck(this, PersonalTitleComponent);
        }

        _createClass(PersonalTitleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PersonalTitleComponent;
      }();

      PersonalTitleComponent.ɵfac = function PersonalTitleComponent_Factory(t) {
        return new (t || PersonalTitleComponent)();
      };

      PersonalTitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PersonalTitleComponent,
        selectors: [["app-personal-title"]],
        decls: 11,
        vars: 0,
        consts: [["id", "personalContainer"], [1, "row"], [1, "col-3", "col-sm-1", "row"], ["id", "personalImage", "src", "assets/profile.jpg"], [1, "col-9", "col-sm-9", "row"], [1, "subpersonalContainer", "row", "col-12"], [1, "personalTitle", "ml8Percent"]],
        template: function PersonalTitleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Esteban Rojas Sol\xEDs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Junior Software Developer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["#personalImage[_ngcontent-%COMP%]\n{\n\n\tborder-radius: 15%;\n\tdisplay: block;\n\n\twidth: 100px;\n\theight: 100px;\n}\n\n#personalContainer[_ngcontent-%COMP%]\n{\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-direction: row;\n\t    flex-direction: row;\n\t-ms-flex-wrap: wrap;\n\t    flex-wrap: wrap;\n\tmargin-bottom: 24px;\n\tmargin-top: 24px;\n\tmargin-left: 8%;\n\t\n}\n\n.subpersonalContainer[_ngcontent-%COMP%]\n{\n\tmargin-left: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyc29uYWwtdGl0bGUvcGVyc29uYWwtdGl0bGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0NBR0Msa0JBQWtCO0NBQ2xCLGNBQWM7O0NBRWQsWUFBWTtDQUNaLGFBQWE7QUFDZDs7QUFFQTs7Q0FFQyxvQkFBYTtDQUFiLGFBQWE7Q0FDYix1QkFBbUI7S0FBbkIsbUJBQW1CO0NBQ25CLG1CQUFlO0tBQWYsZUFBZTtDQUNmLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIsZUFBZTs7QUFFaEI7O0FBRUE7O0NBRUMsZ0JBQWdCO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcGVyc29uYWwtdGl0bGUvcGVyc29uYWwtdGl0bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwZXJzb25hbEltYWdlXG57XG5cblx0Ym9yZGVyLXJhZGl1czogMTUlO1xuXHRkaXNwbGF5OiBibG9jaztcblxuXHR3aWR0aDogMTAwcHg7XG5cdGhlaWdodDogMTAwcHg7XG59XG5cbiNwZXJzb25hbENvbnRhaW5lclxue1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdG1hcmdpbi1ib3R0b206IDI0cHg7XG5cdG1hcmdpbi10b3A6IDI0cHg7XG5cdG1hcmdpbi1sZWZ0OiA4JTtcblx0XG59XG5cbi5zdWJwZXJzb25hbENvbnRhaW5lclxue1xuXHRtYXJnaW4tbGVmdDogMTAlO1xufSAiXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonalTitleComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-personal-title',
            templateUrl: './personal-title.component.html',
            styleUrls: ['./personal-title.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/project-details/project-details.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/project-details/project-details.component.ts ***!
      \**************************************************************/

    /*! exports provided: ProjectDetailsComponent */

    /***/
    function srcAppProjectDetailsProjectDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectDetailsComponent", function () {
        return ProjectDetailsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _projects_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../projects-service.service */
      "./src/app/projects-service.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function ProjectDetailsComponent_li_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tecnology_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tecnology_r2);
        }
      }

      function ProjectDetailsComponent_section_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Go to Repository with code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r1.project.repository, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      var ProjectDetailsComponent = /*#__PURE__*/function () {
        function ProjectDetailsComponent(route, projectService, location) {
          _classCallCheck(this, ProjectDetailsComponent);

          this.route = route;
          this.projectService = projectService;
          this.location = location;
        }

        _createClass(ProjectDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getProject();
          }
        }, {
          key: "getProject",
          value: function getProject() {
            var _this = this;

            //Obtains the project id from the activated route
            var id = this.route.snapshot.paramMap.get('id');
            this.projectService.getProject(Number(id)).subscribe(function (project) {
              return _this.project = project;
            });
          }
        }]);

        return ProjectDetailsComponent;
      }();

      ProjectDetailsComponent.ɵfac = function ProjectDetailsComponent_Factory(t) {
        return new (t || ProjectDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_projects_service_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]));
      };

      ProjectDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProjectDetailsComponent,
        selectors: [["app-project-details"]],
        decls: 13,
        vars: 4,
        consts: [[1, "subsection"], [1, "subsectionTitle"], [2, "margin-left", "3.5%"], ["id", "projectDescription", 1, "projectElement"], ["id", "technologiesList", 1, "subsectionList"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "href"]],
        template: function ProjectDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Technologies Utilized");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProjectDetailsComponent_li_11_Template, 2, 1, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProjectDetailsComponent_section_12_Template, 6, 1, "section", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.description);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.project.technologies);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project.repository !== "");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        styles: [".projectElement[_ngcontent-%COMP%]\n{\n\tmargin-bottom: 3%;\n}\n\n.subsection[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]\n{\n\tmargin-left: 3%;\n}\n\n#projectDescription[_ngcontent-%COMP%]\n{\n\twhite-space: pre-line;\n}\n\na[_ngcontent-%COMP%]\n{\n\tcolor: var(--main-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC1kZXRhaWxzL3Byb2plY3QtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDLGlCQUFpQjtBQUNsQjs7QUFFQTs7Q0FFQyxlQUFlO0FBQ2hCOztBQUVBOztDQUVDLHFCQUFxQjtBQUN0Qjs7QUFFQTs7Q0FFQyx3QkFBd0I7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0LWRldGFpbHMvcHJvamVjdC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdEVsZW1lbnRcbntcblx0bWFyZ2luLWJvdHRvbTogMyU7XG59XG5cbi5zdWJzZWN0aW9uIHBcbntcblx0bWFyZ2luLWxlZnQ6IDMlO1xufVxuXG4jcHJvamVjdERlc2NyaXB0aW9uXG57XG5cdHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbn1cblxuYVxue1xuXHRjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectDetailsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-project-details',
            templateUrl: './project-details.component.html',
            styleUrls: ['./project-details.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _projects_service_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsServiceService"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/projectData.ts":
    /*!********************************!*\
      !*** ./src/app/projectData.ts ***!
      \********************************/

    /*! exports provided: PROJECTS */

    /***/
    function srcAppProjectDataTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PROJECTS", function () {
        return PROJECTS;
      });
      /**
       * This file contains all the projects developed by myself.
       * TODO: use Database, possibly Mongo
       */


      var PROJECTS = [{
        id: 0,
        name: "Personal Website using Angular",
        summary: "A very nice project jeje",
        description: "Personal website to add information about the projects in which I participated. The projects data is stored in a Typescript exported array and is obtained by the" + " components using the Observer design pattern.",
        technologies: ["Angular", "Javascript (Front End)", "Amazon EC2", "Nginx"],
        tags: ["PHP", "Javascript (Front End)", "Bootstrap"],
        repository: "https://github.com/Esteban201483/Curriculum"
      },
      /*{id: 1, name: "Request Management System", summary: "A very nice project jeje",
      description: "A very long text goes here",
      technologies: ["PHP with PHPCake Framework", "Javascript (Front End)", "Bootstrap", "JQuery", "MySQL", "Apache"],
      tags: ["PHP", "Javascript (Front End)","Bootstrap"]},*/
      {
        id: 2,
        name: "Labyrinth Game Web Implementation",
        summary: "A very nice project jeje",
        description: "The game consists in a board of nXm size filled with treasures, in which each board token is a way that allows movement in certains directions. Each player have five treasures " + "assigned, but the players can only see their wanted treasure. Also, each nth odd row and column have and arrow that allows insertions in that position.\n\n" + "The game's objective is to capture all the assigned treasures. Each turn consists of two steps. The first step is to realice an insertion. The token board to insert will be an random" + " token in the first turn. When the player realice an insertion, the inserted token will realice an offset, what will expulse a token of the board. The expulsed token board will be the" + " inserted token board of the next turn. The second step of the game is to move to an allowed position. If the player moves to the same position than his searched treasure, then the" + " treasure will be captured and the next treasure will be asigned\n\n" + " In order to play, the player have to create or join to a game room. Either choices requiere that user input a name. If the player create a game room, then he or she has to indicate the" + " players ammount and board size. When a game room is created, a random ID will be generated and the user must share this ID with the people that he wants to join, in order to avoid stranger players\n\n" + "When all the requiered players joins the game room, the games starts automatically.\n\n This web game was the Application Web course's project.\n\n This project was developed in pairs",
        technologies: ["Javascript (Front End) with Express Framework", "Javascript (Back End)", "Socket.io", "JQuery", "Bootstrap"],
        tags: [],
        repository: "https://github.com/Esteban201483/appweb20a-Esteban-Joel.git"
      }, {
        id: 3,
        name: "Course Management System",
        summary: "A very nice project jeje",
        description: "A website that allows the creation of courses and dynamic forms to register in a course. Each dynamic form is composed of questions present in the database, and the" + "system administrator can create forms using that questions. This project was developed under Engineering Software course, in a six members team based.",
        technologies: ["PHP", "Javascript (Front End)", "Bootstrap", "Apache", "Oracle DBMS", "JIRA for project management"],
        tags: [],
        repository: "https://github.com/Blightning97/Registro-OTS"
      }, {
        id: 4,
        name: "Studying spaces searching App",
        summary: "A very nice project jeje",
        description: "This app allows the user to create studying spaces inside an university, in order to let other students to join the studying space and made comments.\n\n" + "The Google Maps API is used to display all studying spaces, using the bookmark functionality. Also, uses points established by latitude and longitude to create a polygon to avoid" + " the creation of studying spaces outside the university\n\n" + " In order to made a commentary, the user must send a joining request to the creator. If the creator accepts the request then the user is allowed to made commentaries in that" + "studying space \n\n" + "Recycler Views and ListViews are used in order to display commentaries and users joined in the studying space.\n\n" + "This project was developer under five members team.",
        technologies: ["Java, for Android development", "Firebase", "Google Maps API", "JIRA for project management"],
        tags: [],
        repository: ""
      }];
      /***/
    },

    /***/
    "./src/app/projects-list/projects-list.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/projects-list/projects-list.component.ts ***!
      \**********************************************************/

    /*! exports provided: ProjectsListComponent */

    /***/
    function srcAppProjectsListProjectsListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectsListComponent", function () {
        return ProjectsListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _projects_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../projects-service.service */
      "./src/app/projects-service.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      function ProjectsListComponent_tr_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "More Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/project/", project_r1.id, "");
        }
      }

      var ProjectsListComponent = /*#__PURE__*/function () {
        function ProjectsListComponent(projectService) {
          _classCallCheck(this, ProjectsListComponent);

          this.projectService = projectService;
        }

        _createClass(ProjectsListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getProjects();
          }
        }, {
          key: "getProjects",
          value: function getProjects() {
            var _this2 = this;

            this.projectService.getProjects().subscribe(function (projects) {
              return _this2.projects = projects;
            });
          }
        }]);

        return ProjectsListComponent;
      }();

      ProjectsListComponent.ɵfac = function ProjectsListComponent_Factory(t) {
        return new (t || ProjectsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_projects_service_service__WEBPACK_IMPORTED_MODULE_1__["ProjectsServiceService"]));
      };

      ProjectsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProjectsListComponent,
        selectors: [["app-projects-list"]],
        decls: 12,
        vars: 1,
        consts: [["id", "projectsContainer", 1, "subsection"], [1, "subsectionTitle"], ["id", "projectCards subsectionContent", 1, ""], ["id", "cardContainer"], [4, "ngFor", "ngForOf"], [1, "projectLink", 3, "routerLink"]],
        template: function ProjectsListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Project Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProjectsListComponent_tr_11_Template, 6, 2, "tr", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
        styles: ["#projectCards[_ngcontent-%COMP%]\n{\n\twidth: 100%;\n\tmargin-left:3%;\n}\n#cardContainer[_ngcontent-%COMP%], #cardContainer[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], #cardContainer[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]\n{\t\n\tborder: 0.5px solid black;\n\tborder-collapse: collapse;\n\ttext-align: center;\n\tpadding : 1.1%;\n}\n#cardContainer[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n\tbackground-color: #f6f5f5;\n  }\n#cardContainer[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]\n{\n\tbackground-color: var(--main-color);\n\tcolor:white;\n}\n#cardContainer[_ngcontent-%COMP%]\n{\n\tmargin-bottom: 10px;\n\tmax-width: 60%;\n\tmargin-right: 10%;\n}\n.projectLink[_ngcontent-%COMP%]\n{\n\tcolor: var(--main-dark-color);\n}\n.card[_ngcontent-%COMP%]\n{\n\t\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMtbGlzdC9wcm9qZWN0cy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUMsV0FBVztDQUNYLGNBQWM7QUFDZjtBQUNBOztDQUVDLHlCQUF5QjtDQUN6Qix5QkFBeUI7Q0FDekIsa0JBQWtCO0NBQ2xCLGNBQWM7QUFDZjtBQUVBO0NBQ0MseUJBQXlCO0VBQ3hCO0FBRUY7O0NBRUMsbUNBQW1DO0NBQ25DLFdBQVc7QUFDWjtBQUVBOztDQUVDLG1CQUFtQjtDQUNuQixjQUFjO0NBQ2QsaUJBQWlCO0FBQ2xCO0FBRUE7O0NBRUMsNkJBQTZCO0FBQzlCO0FBRUE7Ozs7QUFJQSIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzLWxpc3QvcHJvamVjdHMtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Byb2plY3RDYXJkc1xue1xuXHR3aWR0aDogMTAwJTtcblx0bWFyZ2luLWxlZnQ6MyU7XG59XG4jY2FyZENvbnRhaW5lciwgI2NhcmRDb250YWluZXIgdGgsICNjYXJkQ29udGFpbmVyIHRkXG57XHRcblx0Ym9yZGVyOiAwLjVweCBzb2xpZCBibGFjaztcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRwYWRkaW5nIDogMS4xJTtcbn1cblxuI2NhcmRDb250YWluZXIgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y2ZjVmNTtcbiAgfVxuXG4jY2FyZENvbnRhaW5lciB0aGVhZFxue1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcblx0Y29sb3I6d2hpdGU7XG59XG5cbiNjYXJkQ29udGFpbmVyXG57XG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XG5cdG1heC13aWR0aDogNjAlO1xuXHRtYXJnaW4tcmlnaHQ6IDEwJTtcbn1cblxuLnByb2plY3RMaW5rXG57XG5cdGNvbG9yOiB2YXIoLS1tYWluLWRhcmstY29sb3IpO1xufVxuXG4uY2FyZFxue1xuXHRcblxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-projects-list',
            templateUrl: './projects-list.component.html',
            styleUrls: ['./projects-list.component.css']
          }]
        }], function () {
          return [{
            type: _projects_service_service__WEBPACK_IMPORTED_MODULE_1__["ProjectsServiceService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/projects-service.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/projects-service.service.ts ***!
      \*********************************************/

    /*! exports provided: ProjectsServiceService */

    /***/
    function srcAppProjectsServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectsServiceService", function () {
        return ProjectsServiceService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _projectData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./projectData */
      "./src/app/projectData.ts");

      var ProjectsServiceService = /*#__PURE__*/function () {
        function ProjectsServiceService() {
          _classCallCheck(this, ProjectsServiceService);
        }

        _createClass(ProjectsServiceService, [{
          key: "getProjects",
          value: function getProjects() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_projectData__WEBPACK_IMPORTED_MODULE_2__["PROJECTS"]);
          }
        }, {
          key: "getProject",
          value: function getProject(id) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_projectData__WEBPACK_IMPORTED_MODULE_2__["PROJECTS"].find(function (project) {
              return project.id === id;
            }));
          }
        }]);

        return ProjectsServiceService;
      }();

      ProjectsServiceService.ɵfac = function ProjectsServiceService_Factory(t) {
        return new (t || ProjectsServiceService)();
      };

      ProjectsServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ProjectsServiceService,
        factory: ProjectsServiceService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsServiceService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/soft-kills/soft-kills.component.ts":
    /*!****************************************************!*\
      !*** ./src/app/soft-kills/soft-kills.component.ts ***!
      \****************************************************/

    /*! exports provided: SoftKillsComponent */

    /***/
    function srcAppSoftKillsSoftKillsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SoftKillsComponent", function () {
        return SoftKillsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SoftKillsComponent = /*#__PURE__*/function () {
        function SoftKillsComponent() {
          _classCallCheck(this, SoftKillsComponent);
        }

        _createClass(SoftKillsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SoftKillsComponent;
      }();

      SoftKillsComponent.ɵfac = function SoftKillsComponent_Factory(t) {
        return new (t || SoftKillsComponent)();
      };

      SoftKillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SoftKillsComponent,
        selectors: [["app-soft-kills"]],
        decls: 2,
        vars: 0,
        template: function SoftKillsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "soft-kills works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvZnQta2lsbHMvc29mdC1raWxscy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SoftKillsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-soft-kills',
            templateUrl: './soft-kills.component.html',
            styleUrls: ['./soft-kills.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/soft-skills/soft-skills.component.ts":
    /*!******************************************************!*\
      !*** ./src/app/soft-skills/soft-skills.component.ts ***!
      \******************************************************/

    /*! exports provided: SoftSkillsComponent */

    /***/
    function srcAppSoftSkillsSoftSkillsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SoftSkillsComponent", function () {
        return SoftSkillsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SoftSkillsComponent = /*#__PURE__*/function () {
        function SoftSkillsComponent() {
          _classCallCheck(this, SoftSkillsComponent);
        }

        _createClass(SoftSkillsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SoftSkillsComponent;
      }();

      SoftSkillsComponent.ɵfac = function SoftSkillsComponent_Factory(t) {
        return new (t || SoftSkillsComponent)();
      };

      SoftSkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SoftSkillsComponent,
        selectors: [["app-soft-skills"]],
        decls: 10,
        vars: 0,
        consts: [["id", "softSkills", 1, "subsection"], [1, "subsectionTitle"], [1, "subsectionList", "subsectionContent"]],
        template: function SoftSkillsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Soft Skills");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Autodidact, with passion for acquiere new knowledge.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Teamwork, including communication.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Creativity. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvZnQtc2tpbGxzL3NvZnQtc2tpbGxzLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SoftSkillsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-soft-skills',
            templateUrl: './soft-skills.component.html',
            styleUrls: ['./soft-skills.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/technical-skills/technical-skills.component.ts":
    /*!****************************************************************!*\
      !*** ./src/app/technical-skills/technical-skills.component.ts ***!
      \****************************************************************/

    /*! exports provided: TechnicalSkillsComponent */

    /***/
    function srcAppTechnicalSkillsTechnicalSkillsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TechnicalSkillsComponent", function () {
        return TechnicalSkillsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var TechnicalSkillsComponent = /*#__PURE__*/function () {
        function TechnicalSkillsComponent() {
          _classCallCheck(this, TechnicalSkillsComponent);
        }

        _createClass(TechnicalSkillsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TechnicalSkillsComponent;
      }();

      TechnicalSkillsComponent.ɵfac = function TechnicalSkillsComponent_Factory(t) {
        return new (t || TechnicalSkillsComponent)();
      };

      TechnicalSkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TechnicalSkillsComponent,
        selectors: [["app-technical-skills"]],
        decls: 14,
        vars: 0,
        consts: [["id", "technicalSkills", 1, "subsection"], [1, "subsectionTitle"], [1, "subsectionList", "subsectionContent"]],
        template: function TechnicalSkillsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Technical Skills");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Experience using Javascript, PHP, Java, C# and Python.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Knowledge in SQL databases. Also, experience using Oracle DBMS, MySQL, SQLite and Microsoft SQL Server.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Experience using NodeJS with Express Framework, Websockets and Bootstrap. Also, knowledge in Angular Framework (including this site).");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Knowledge in Human-Computer Interaction field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Apache, Nginx and Amazon EC2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlY2huaWNhbC1za2lsbHMvdGVjaG5pY2FsLXNraWxscy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TechnicalSkillsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-technical-skills',
            templateUrl: './technical-skills.component.html',
            styleUrls: ['./technical-skills.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
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

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var css_vars_ponyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! css-vars-ponyfill */
      "./node_modules/css-vars-ponyfill/dist/css-vars-ponyfill.esm.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });

      Object(css_vars_ponyfill__WEBPACK_IMPORTED_MODULE_2__["default"])({
        preserveVars: true,
        watch: true
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/esteban/Documents/Curriculum/old curriculum/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map