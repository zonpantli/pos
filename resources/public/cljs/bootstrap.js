var COMPILED = !0, goog = goog || {};
goog.global = this;
goog.DEBUG = !0;
goog.LOCALE = "en";
goog.evalWorksForGlobals_ = null;
goog.provide = function(a) {
  if(!COMPILED) {
    if(goog.getObjectByName(a) && !goog.implicitNamespaces_[a]) {
      throw Error('Namespace "' + a + '" already declared.');
    }
    for(var b = a;b = b.substring(0, b.lastIndexOf("."));) {
      goog.implicitNamespaces_[b] = !0
    }
  }
  goog.exportPath_(a)
};
goog.setTestOnly = function(a) {
  if(COMPILED && !goog.DEBUG) {
    throw a = a || "", Error("Importing test-only code into non-debug environment" + a ? ": " + a : ".");
  }
};
if(!COMPILED) {
  goog.implicitNamespaces_ = {}
}
goog.exportPath_ = function(a, b, c) {
  a = a.split(".");
  c = c || goog.global;
  !(a[0] in c) && c.execScript && c.execScript("var " + a[0]);
  for(var d;a.length && (d = a.shift());) {
    !a.length && goog.isDef(b) ? c[d] = b : c = c[d] ? c[d] : c[d] = {}
  }
};
goog.getObjectByName = function(a, b) {
  for(var c = a.split("."), d = b || goog.global, e;e = c.shift();) {
    if(goog.isDefAndNotNull(d[e])) {
      d = d[e]
    }else {
      return null
    }
  }
  return d
};
goog.globalize = function(a, b) {
  var c = b || goog.global, d;
  for(d in a) {
    c[d] = a[d]
  }
};
goog.addDependency = function(a, b, c) {
  if(!COMPILED) {
    for(var d, a = a.replace(/\\/g, "/"), e = goog.dependencies_, f = 0;d = b[f];f++) {
      e.nameToPath[d] = a, a in e.pathToNames || (e.pathToNames[a] = {}), e.pathToNames[a][d] = !0
    }
    for(d = 0;b = c[d];d++) {
      a in e.requires || (e.requires[a] = {}), e.requires[a][b] = !0
    }
  }
};
goog.require = function(a) {
  if(!COMPILED && !goog.getObjectByName(a)) {
    var b = goog.getPathFromDeps_(a);
    if(b) {
      goog.included_[b] = !0, goog.writeScripts_()
    }else {
      throw a = "goog.require could not find: " + a, goog.global.console && goog.global.console.error(a), Error(a);
    }
  }
};
goog.basePath = "";
goog.nullFunction = function() {
};
goog.identityFunction = function(a) {
  return a
};
goog.abstractMethod = function() {
  throw Error("unimplemented abstract method");
};
goog.addSingletonGetter = function(a) {
  a.getInstance = function() {
    return a.instance_ || (a.instance_ = new a)
  }
};
if(!COMPILED) {
  goog.included_ = {}, goog.dependencies_ = {pathToNames:{}, nameToPath:{}, requires:{}, visited:{}, written:{}}, goog.inHtmlDocument_ = function() {
    var a = goog.global.document;
    return"undefined" != typeof a && "write" in a
  }, goog.findBasePath_ = function() {
    if(goog.global.CLOSURE_BASE_PATH) {
      goog.basePath = goog.global.CLOSURE_BASE_PATH
    }else {
      if(goog.inHtmlDocument_()) {
        for(var a = goog.global.document.getElementsByTagName("script"), b = a.length - 1;0 <= b;--b) {
          var c = a[b].src, d = c.lastIndexOf("?"), d = -1 == d ? c.length : d;
          if("base.js" == c.substr(d - 7, 7)) {
            goog.basePath = c.substr(0, d - 7);
            break
          }
        }
      }
    }
  }, goog.importScript_ = function(a) {
    var b = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_;
    !goog.dependencies_.written[a] && b(a) && (goog.dependencies_.written[a] = !0)
  }, goog.writeScriptTag_ = function(a) {
    return goog.inHtmlDocument_() ? (goog.global.document.write('<script type="text/javascript" src="' + a + '"><\/script>'), !0) : !1
  }, goog.writeScripts_ = function() {
    function a(e) {
      if(!(e in d.written)) {
        if(!(e in d.visited) && (d.visited[e] = !0, e in d.requires)) {
          for(var g in d.requires[e]) {
            if(g in d.nameToPath) {
              a(d.nameToPath[g])
            }else {
              if(!goog.getObjectByName(g)) {
                throw Error("Undefined nameToPath for " + g);
              }
            }
          }
        }
        e in c || (c[e] = !0, b.push(e))
      }
    }
    var b = [], c = {}, d = goog.dependencies_, e;
    for(e in goog.included_) {
      d.written[e] || a(e)
    }
    for(e = 0;e < b.length;e++) {
      if(b[e]) {
        goog.importScript_(goog.basePath + b[e])
      }else {
        throw Error("Undefined script input");
      }
    }
  }, goog.getPathFromDeps_ = function(a) {
    return a in goog.dependencies_.nameToPath ? goog.dependencies_.nameToPath[a] : null
  }, goog.findBasePath_(), goog.global.CLOSURE_NO_DEPS || goog.importScript_(goog.basePath + "deps.js")
}
goog.typeOf = function(a) {
  var b = typeof a;
  if("object" == b) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return b
      }
      var c = Object.prototype.toString.call(a);
      if("[object Window]" == c) {
        return"object"
      }
      if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == b && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return b
};
goog.propertyIsEnumerableCustom_ = function(a, b) {
  if(b in a) {
    for(var c in a) {
      if(c == b && Object.prototype.hasOwnProperty.call(a, b)) {
        return!0
      }
    }
  }
  return!1
};
goog.propertyIsEnumerable_ = function(a, b) {
  return a instanceof Object ? Object.prototype.propertyIsEnumerable.call(a, b) : goog.propertyIsEnumerableCustom_(a, b)
};
goog.isDef = function(a) {
  return void 0 !== a
};
goog.isNull = function(a) {
  return null === a
};
goog.isDefAndNotNull = function(a) {
  return null != a
};
goog.isArray = function(a) {
  return"array" == goog.typeOf(a)
};
goog.isArrayLike = function(a) {
  var b = goog.typeOf(a);
  return"array" == b || "object" == b && "number" == typeof a.length
};
goog.isDateLike = function(a) {
  return goog.isObject(a) && "function" == typeof a.getFullYear
};
goog.isString = function(a) {
  return"string" == typeof a
};
goog.isBoolean = function(a) {
  return"boolean" == typeof a
};
goog.isNumber = function(a) {
  return"number" == typeof a
};
goog.isFunction = function(a) {
  return"function" == goog.typeOf(a)
};
goog.isObject = function(a) {
  a = goog.typeOf(a);
  return"object" == a || "array" == a || "function" == a
};
goog.getUid = function(a) {
  return a[goog.UID_PROPERTY_] || (a[goog.UID_PROPERTY_] = ++goog.uidCounter_)
};
goog.removeUid = function(a) {
  "removeAttribute" in a && a.removeAttribute(goog.UID_PROPERTY_);
  try {
    delete a[goog.UID_PROPERTY_]
  }catch(b) {
  }
};
goog.UID_PROPERTY_ = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36);
goog.uidCounter_ = 0;
goog.getHashCode = goog.getUid;
goog.removeHashCode = goog.removeUid;
goog.cloneObject = function(a) {
  var b = goog.typeOf(a);
  if("object" == b || "array" == b) {
    if(a.clone) {
      return a.clone()
    }
    var b = "array" == b ? [] : {}, c;
    for(c in a) {
      b[c] = goog.cloneObject(a[c])
    }
    return b
  }
  return a
};
goog.bindNative_ = function(a, b, c) {
  return a.call.apply(a.bind, arguments)
};
goog.bindJs_ = function(a, b, c) {
  var d = b || goog.global;
  if(2 < arguments.length) {
    var e = Array.prototype.slice.call(arguments, 2);
    return function() {
      var b = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(b, e);
      return a.apply(d, b)
    }
  }
  return function() {
    return a.apply(d, arguments)
  }
};
goog.bind = function(a, b, c) {
  goog.bind = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? goog.bindNative_ : goog.bindJs_;
  return goog.bind.apply(null, arguments)
};
goog.partial = function(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = Array.prototype.slice.call(arguments);
    b.unshift.apply(b, c);
    return a.apply(this, b)
  }
};
goog.mixin = function(a, b) {
  for(var c in b) {
    a[c] = b[c]
  }
};
goog.now = Date.now || function() {
  return+new Date
};
goog.globalEval = function(a) {
  if(goog.global.execScript) {
    goog.global.execScript(a, "JavaScript")
  }else {
    if(goog.global.eval) {
      if(null == goog.evalWorksForGlobals_) {
        goog.global.eval("var _et_ = 1;"), "undefined" != typeof goog.global._et_ ? (delete goog.global._et_, goog.evalWorksForGlobals_ = !0) : goog.evalWorksForGlobals_ = !1
      }
      if(goog.evalWorksForGlobals_) {
        goog.global.eval(a)
      }else {
        var b = goog.global.document, c = b.createElement("script");
        c.type = "text/javascript";
        c.defer = !1;
        c.appendChild(b.createTextNode(a));
        b.body.appendChild(c);
        b.body.removeChild(c)
      }
    }else {
      throw Error("goog.globalEval not available");
    }
  }
};
goog.getCssName = function(a, b) {
  var c = function(a) {
    return goog.cssNameMapping_[a] || a
  }, d;
  d = goog.cssNameMapping_ ? "BY_WHOLE" == goog.cssNameMappingStyle_ ? c : function(a) {
    for(var a = a.split("-"), b = [], d = 0;d < a.length;d++) {
      b.push(c(a[d]))
    }
    return b.join("-")
  } : function(a) {
    return a
  };
  return b ? a + "-" + d(b) : d(a)
};
goog.setCssNameMapping = function(a, b) {
  goog.cssNameMapping_ = a;
  goog.cssNameMappingStyle_ = b
};
goog.getMsg = function(a, b) {
  var c = b || {}, d;
  for(d in c) {
    var e = ("" + c[d]).replace(/\$/g, "$$$$"), a = a.replace(RegExp("\\{\\$" + d + "\\}", "gi"), e)
  }
  return a
};
goog.exportSymbol = function(a, b, c) {
  goog.exportPath_(a, b, c)
};
goog.exportProperty = function(a, b, c) {
  a[b] = c
};
goog.inherits = function(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.superClass_ = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
};
goog.base = function(a, b, c) {
  var d = arguments.callee.caller;
  if(d.superClass_) {
    return d.superClass_.constructor.apply(a, Array.prototype.slice.call(arguments, 1))
  }
  for(var e = Array.prototype.slice.call(arguments, 2), f = !1, g = a.constructor;g;g = g.superClass_ && g.superClass_.constructor) {
    if(g.prototype[b] === d) {
      f = !0
    }else {
      if(f) {
        return g.prototype[b].apply(a, e)
      }
    }
  }
  if(a[b] === d) {
    return a.constructor.prototype[b].apply(a, e)
  }
  throw Error("goog.base called from a method of one name to a method of a different name");
};
goog.scope = function(a) {
  a.call(goog.global)
};
goog.disposable = {};
goog.disposable.IDisposable = function() {
};
goog.Disposable = function() {
  goog.Disposable.ENABLE_MONITORING && (goog.Disposable.instances_[goog.getUid(this)] = this)
};
goog.Disposable.ENABLE_MONITORING = !1;
goog.Disposable.instances_ = {};
goog.Disposable.getUndisposedObjects = function() {
  var a = [], b;
  for(b in goog.Disposable.instances_) {
    goog.Disposable.instances_.hasOwnProperty(b) && a.push(goog.Disposable.instances_[Number(b)])
  }
  return a
};
goog.Disposable.clearUndisposedObjects = function() {
  goog.Disposable.instances_ = {}
};
goog.Disposable.prototype.disposed_ = !1;
goog.Disposable.prototype.isDisposed = function() {
  return this.disposed_
};
goog.Disposable.prototype.getDisposed = goog.Disposable.prototype.isDisposed;
goog.Disposable.prototype.dispose = function() {
  if(!this.disposed_ && (this.disposed_ = !0, this.disposeInternal(), goog.Disposable.ENABLE_MONITORING)) {
    var a = goog.getUid(this);
    if(!goog.Disposable.instances_.hasOwnProperty(a)) {
      throw Error(this + " did not call the goog.Disposable base constructor or was disposed of after a clearUndisposedObjects call");
    }
    delete goog.Disposable.instances_[a]
  }
};
goog.Disposable.prototype.disposeInternal = function() {
};
goog.dispose = function(a) {
  a && "function" == typeof a.dispose && a.dispose()
};
goog.debug = {};
goog.debug.Error = function(a) {
  this.stack = Error().stack || "";
  if(a) {
    this.message = "" + a
  }
};
goog.inherits(goog.debug.Error, Error);
goog.debug.Error.prototype.name = "CustomError";
goog.string = {};
goog.string.Unicode = {NBSP:"\u00a0"};
goog.string.startsWith = function(a, b) {
  return 0 == a.lastIndexOf(b, 0)
};
goog.string.endsWith = function(a, b) {
  var c = a.length - b.length;
  return 0 <= c && a.indexOf(b, c) == c
};
goog.string.caseInsensitiveStartsWith = function(a, b) {
  return 0 == goog.string.caseInsensitiveCompare(b, a.substr(0, b.length))
};
goog.string.caseInsensitiveEndsWith = function(a, b) {
  return 0 == goog.string.caseInsensitiveCompare(b, a.substr(a.length - b.length, b.length))
};
goog.string.subs = function(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = ("" + arguments[c]).replace(/\$/g, "$$$$"), a = a.replace(/\%s/, d)
  }
  return a
};
goog.string.collapseWhitespace = function(a) {
  return a.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "")
};
goog.string.isEmpty = function(a) {
  return/^[\s\xa0]*$/.test(a)
};
goog.string.isEmptySafe = function(a) {
  return goog.string.isEmpty(goog.string.makeSafe(a))
};
goog.string.isBreakingWhitespace = function(a) {
  return!/[^\t\n\r ]/.test(a)
};
goog.string.isAlpha = function(a) {
  return!/[^a-zA-Z]/.test(a)
};
goog.string.isNumeric = function(a) {
  return!/[^0-9]/.test(a)
};
goog.string.isAlphaNumeric = function(a) {
  return!/[^a-zA-Z0-9]/.test(a)
};
goog.string.isSpace = function(a) {
  return" " == a
};
goog.string.isUnicodeChar = function(a) {
  return 1 == a.length && " " <= a && "~" >= a || "\u0080" <= a && "\ufffd" >= a
};
goog.string.stripNewlines = function(a) {
  return a.replace(/(\r\n|\r|\n)+/g, " ")
};
goog.string.canonicalizeNewlines = function(a) {
  return a.replace(/(\r\n|\r|\n)/g, "\n")
};
goog.string.normalizeWhitespace = function(a) {
  return a.replace(/\xa0|\s/g, " ")
};
goog.string.normalizeSpaces = function(a) {
  return a.replace(/\xa0|[ \t]+/g, " ")
};
goog.string.trim = function(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
};
goog.string.trimLeft = function(a) {
  return a.replace(/^[\s\xa0]+/, "")
};
goog.string.trimRight = function(a) {
  return a.replace(/[\s\xa0]+$/, "")
};
goog.string.caseInsensitiveCompare = function(a, b) {
  var c = ("" + a).toLowerCase(), d = ("" + b).toLowerCase();
  return c < d ? -1 : c == d ? 0 : 1
};
goog.string.numerateCompareRegExp_ = /(\.\d+)|(\d+)|(\D+)/g;
goog.string.numerateCompare = function(a, b) {
  if(a == b) {
    return 0
  }
  if(!a) {
    return-1
  }
  if(!b) {
    return 1
  }
  for(var c = a.toLowerCase().match(goog.string.numerateCompareRegExp_), d = b.toLowerCase().match(goog.string.numerateCompareRegExp_), e = Math.min(c.length, d.length), f = 0;f < e;f++) {
    var g = c[f], h = d[f];
    if(g != h) {
      c = parseInt(g, 10);
      return!isNaN(c) && (d = parseInt(h, 10), !isNaN(d) && c - d) ? c - d : g < h ? -1 : 1
    }
  }
  return c.length != d.length ? c.length - d.length : a < b ? -1 : 1
};
goog.string.encodeUriRegExp_ = /^[a-zA-Z0-9\-_.!~*'()]*$/;
goog.string.urlEncode = function(a) {
  a = "" + a;
  return!goog.string.encodeUriRegExp_.test(a) ? encodeURIComponent(a) : a
};
goog.string.urlDecode = function(a) {
  return decodeURIComponent(a.replace(/\+/g, " "))
};
goog.string.newLineToBr = function(a, b) {
  return a.replace(/(\r\n|\r|\n)/g, b ? "<br />" : "<br>")
};
goog.string.htmlEscape = function(a, b) {
  if(b) {
    return a.replace(goog.string.amperRe_, "&amp;").replace(goog.string.ltRe_, "&lt;").replace(goog.string.gtRe_, "&gt;").replace(goog.string.quotRe_, "&quot;")
  }
  if(!goog.string.allRe_.test(a)) {
    return a
  }
  -1 != a.indexOf("&") && (a = a.replace(goog.string.amperRe_, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(goog.string.ltRe_, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(goog.string.gtRe_, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(goog.string.quotRe_, "&quot;"));
  return a
};
goog.string.amperRe_ = /&/g;
goog.string.ltRe_ = /</g;
goog.string.gtRe_ = />/g;
goog.string.quotRe_ = /\"/g;
goog.string.allRe_ = /[&<>\"]/;
goog.string.unescapeEntities = function(a) {
  return goog.string.contains(a, "&") ? "document" in goog.global && !goog.string.contains(a, "<") ? goog.string.unescapeEntitiesUsingDom_(a) : goog.string.unescapePureXmlEntities_(a) : a
};
goog.string.unescapeEntitiesUsingDom_ = function(a) {
  var b = goog.global.document.createElement("div");
  b.innerHTML = "<pre>x" + a + "</pre>";
  if(b.firstChild[goog.string.NORMALIZE_FN_]) {
    b.firstChild[goog.string.NORMALIZE_FN_]()
  }
  a = b.firstChild.firstChild.nodeValue.slice(1);
  b.innerHTML = "";
  return goog.string.canonicalizeNewlines(a)
};
goog.string.unescapePureXmlEntities_ = function(a) {
  return a.replace(/&([^;]+);/g, function(a, c) {
    switch(c) {
      case "amp":
        return"&";
      case "lt":
        return"<";
      case "gt":
        return">";
      case "quot":
        return'"';
      default:
        if("#" == c.charAt(0)) {
          var d = Number("0" + c.substr(1));
          if(!isNaN(d)) {
            return String.fromCharCode(d)
          }
        }
        return a
    }
  })
};
goog.string.NORMALIZE_FN_ = "normalize";
goog.string.whitespaceEscape = function(a, b) {
  return goog.string.newLineToBr(a.replace(/  /g, " &#160;"), b)
};
goog.string.stripQuotes = function(a, b) {
  for(var c = b.length, d = 0;d < c;d++) {
    var e = 1 == c ? b : b.charAt(d);
    if(a.charAt(0) == e && a.charAt(a.length - 1) == e) {
      return a.substring(1, a.length - 1)
    }
  }
  return a
};
goog.string.truncate = function(a, b, c) {
  c && (a = goog.string.unescapeEntities(a));
  a.length > b && (a = a.substring(0, b - 3) + "...");
  c && (a = goog.string.htmlEscape(a));
  return a
};
goog.string.truncateMiddle = function(a, b, c, d) {
  c && (a = goog.string.unescapeEntities(a));
  if(d) {
    d > b && (d = b);
    var e = a.length - d, a = a.substring(0, b - d) + "..." + a.substring(e)
  }else {
    a.length > b && (d = Math.floor(b / 2), e = a.length - d, a = a.substring(0, d + b % 2) + "..." + a.substring(e))
  }
  c && (a = goog.string.htmlEscape(a));
  return a
};
goog.string.specialEscapeChars_ = {"\x00":"\\0", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\u000b":"\\x0B", '"':'\\"', "\\":"\\\\"};
goog.string.jsEscapeCache_ = {"'":"\\'"};
goog.string.quote = function(a) {
  a = "" + a;
  if(a.quote) {
    return a.quote()
  }
  for(var b = ['"'], c = 0;c < a.length;c++) {
    var d = a.charAt(c), e = d.charCodeAt(0);
    b[c + 1] = goog.string.specialEscapeChars_[d] || (31 < e && 127 > e ? d : goog.string.escapeChar(d))
  }
  b.push('"');
  return b.join("")
};
goog.string.escapeString = function(a) {
  for(var b = [], c = 0;c < a.length;c++) {
    b[c] = goog.string.escapeChar(a.charAt(c))
  }
  return b.join("")
};
goog.string.escapeChar = function(a) {
  if(a in goog.string.jsEscapeCache_) {
    return goog.string.jsEscapeCache_[a]
  }
  if(a in goog.string.specialEscapeChars_) {
    return goog.string.jsEscapeCache_[a] = goog.string.specialEscapeChars_[a]
  }
  var b = a, c = a.charCodeAt(0);
  if(31 < c && 127 > c) {
    b = a
  }else {
    if(256 > c) {
      if(b = "\\x", 16 > c || 256 < c) {
        b += "0"
      }
    }else {
      b = "\\u", 4096 > c && (b += "0")
    }
    b += c.toString(16).toUpperCase()
  }
  return goog.string.jsEscapeCache_[a] = b
};
goog.string.toMap = function(a) {
  for(var b = {}, c = 0;c < a.length;c++) {
    b[a.charAt(c)] = !0
  }
  return b
};
goog.string.contains = function(a, b) {
  return-1 != a.indexOf(b)
};
goog.string.removeAt = function(a, b, c) {
  var d = a;
  0 <= b && b < a.length && 0 < c && (d = a.substr(0, b) + a.substr(b + c, a.length - b - c));
  return d
};
goog.string.remove = function(a, b) {
  var c = RegExp(goog.string.regExpEscape(b), "");
  return a.replace(c, "")
};
goog.string.removeAll = function(a, b) {
  var c = RegExp(goog.string.regExpEscape(b), "g");
  return a.replace(c, "")
};
goog.string.regExpEscape = function(a) {
  return("" + a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
};
goog.string.repeat = function(a, b) {
  return Array(b + 1).join(a)
};
goog.string.padNumber = function(a, b, c) {
  a = goog.isDef(c) ? a.toFixed(c) : "" + a;
  c = a.indexOf(".");
  if(-1 == c) {
    c = a.length
  }
  return goog.string.repeat("0", Math.max(0, b - c)) + a
};
goog.string.makeSafe = function(a) {
  return null == a ? "" : "" + a
};
goog.string.buildString = function(a) {
  return Array.prototype.join.call(arguments, "")
};
goog.string.getRandomString = function() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ goog.now()).toString(36)
};
goog.string.compareVersions = function(a, b) {
  for(var c = 0, d = goog.string.trim("" + a).split("."), e = goog.string.trim("" + b).split("."), f = Math.max(d.length, e.length), g = 0;0 == c && g < f;g++) {
    var h = d[g] || "", i = e[g] || "", j = RegExp("(\\d*)(\\D*)", "g"), k = RegExp("(\\d*)(\\D*)", "g");
    do {
      var m = j.exec(h) || ["", "", ""], l = k.exec(i) || ["", "", ""];
      if(0 == m[0].length && 0 == l[0].length) {
        break
      }
      var c = 0 == m[1].length ? 0 : parseInt(m[1], 10), n = 0 == l[1].length ? 0 : parseInt(l[1], 10), c = goog.string.compareElements_(c, n) || goog.string.compareElements_(0 == m[2].length, 0 == l[2].length) || goog.string.compareElements_(m[2], l[2])
    }while(0 == c)
  }
  return c
};
goog.string.compareElements_ = function(a, b) {
  return a < b ? -1 : a > b ? 1 : 0
};
goog.string.HASHCODE_MAX_ = 4294967296;
goog.string.hashCode = function(a) {
  for(var b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= goog.string.HASHCODE_MAX_
  }
  return b
};
goog.string.uniqueStringCounter_ = 2147483648 * Math.random() | 0;
goog.string.createUniqueString = function() {
  return"goog_" + goog.string.uniqueStringCounter_++
};
goog.string.toNumber = function(a) {
  var b = Number(a);
  return 0 == b && goog.string.isEmpty(a) ? NaN : b
};
goog.string.toCamelCaseCache_ = {};
goog.string.toCamelCase = function(a) {
  return goog.string.toCamelCaseCache_[a] || (goog.string.toCamelCaseCache_[a] = ("" + a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase()
  }))
};
goog.string.toSelectorCaseCache_ = {};
goog.string.toSelectorCase = function(a) {
  return goog.string.toSelectorCaseCache_[a] || (goog.string.toSelectorCaseCache_[a] = ("" + a).replace(/([A-Z])/g, "-$1").toLowerCase())
};
goog.asserts = {};
goog.asserts.ENABLE_ASSERTS = goog.DEBUG;
goog.asserts.AssertionError = function(a, b) {
  b.unshift(a);
  goog.debug.Error.call(this, goog.string.subs.apply(null, b));
  b.shift();
  this.messagePattern = a
};
goog.inherits(goog.asserts.AssertionError, goog.debug.Error);
goog.asserts.AssertionError.prototype.name = "AssertionError";
goog.asserts.doAssertFailure_ = function(a, b, c, d) {
  var e = "Assertion failed";
  if(c) {
    var e = e + (": " + c), f = d
  }else {
    a && (e += ": " + a, f = b)
  }
  throw new goog.asserts.AssertionError("" + e, f || []);
};
goog.asserts.assert = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !a && goog.asserts.doAssertFailure_("", null, b, Array.prototype.slice.call(arguments, 2));
  return a
};
goog.asserts.fail = function(a, b) {
  if(goog.asserts.ENABLE_ASSERTS) {
    throw new goog.asserts.AssertionError("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
  }
};
goog.asserts.assertNumber = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !goog.isNumber(a) && goog.asserts.doAssertFailure_("Expected number but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a
};
goog.asserts.assertString = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !goog.isString(a) && goog.asserts.doAssertFailure_("Expected string but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a
};
goog.asserts.assertFunction = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !goog.isFunction(a) && goog.asserts.doAssertFailure_("Expected function but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a
};
goog.asserts.assertObject = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !goog.isObject(a) && goog.asserts.doAssertFailure_("Expected object but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a
};
goog.asserts.assertArray = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !goog.isArray(a) && goog.asserts.doAssertFailure_("Expected array but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a
};
goog.asserts.assertBoolean = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !goog.isBoolean(a) && goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a
};
goog.asserts.assertInstanceof = function(a, b, c, d) {
  goog.asserts.ENABLE_ASSERTS && !(a instanceof b) && goog.asserts.doAssertFailure_("instanceof check failed.", null, c, Array.prototype.slice.call(arguments, 3))
};
goog.array = {};
goog.NATIVE_ARRAY_PROTOTYPES = !0;
goog.array.peek = function(a) {
  return a[a.length - 1]
};
goog.array.ARRAY_PROTOTYPE_ = Array.prototype;
goog.array.indexOf = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.indexOf ? function(a, b, c) {
  goog.asserts.assert(null != a.length);
  return goog.array.ARRAY_PROTOTYPE_.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if(goog.isString(a)) {
    return!goog.isString(b) || 1 != b.length ? -1 : a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
};
goog.array.lastIndexOf = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.lastIndexOf ? function(a, b, c) {
  goog.asserts.assert(null != a.length);
  return goog.array.ARRAY_PROTOTYPE_.lastIndexOf.call(a, b, null == c ? a.length - 1 : c)
} : function(a, b, c) {
  c = null == c ? a.length - 1 : c;
  0 > c && (c = Math.max(0, a.length + c));
  if(goog.isString(a)) {
    return!goog.isString(b) || 1 != b.length ? -1 : a.lastIndexOf(b, c)
  }
  for(;0 <= c;c--) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
};
goog.array.forEach = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.forEach ? function(a, b, c) {
  goog.asserts.assert(null != a.length);
  goog.array.ARRAY_PROTOTYPE_.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = goog.isString(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a)
  }
};
goog.array.forEachRight = function(a, b, c) {
  for(var d = a.length, e = goog.isString(a) ? a.split("") : a, d = d - 1;0 <= d;--d) {
    d in e && b.call(c, e[d], d, a)
  }
};
goog.array.filter = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.filter ? function(a, b, c) {
  goog.asserts.assert(null != a.length);
  return goog.array.ARRAY_PROTOTYPE_.filter.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = [], f = 0, g = goog.isString(a) ? a.split("") : a, h = 0;h < d;h++) {
    if(h in g) {
      var i = g[h];
      b.call(c, i, h, a) && (e[f++] = i)
    }
  }
  return e
};
goog.array.map = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.map ? function(a, b, c) {
  goog.asserts.assert(null != a.length);
  return goog.array.ARRAY_PROTOTYPE_.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = Array(d), f = goog.isString(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in f && (e[g] = b.call(c, f[g], g, a))
  }
  return e
};
goog.array.reduce = function(a, b, c, d) {
  if(a.reduce) {
    return d ? a.reduce(goog.bind(b, d), c) : a.reduce(b, c)
  }
  var e = c;
  goog.array.forEach(a, function(c, g) {
    e = b.call(d, e, c, g, a)
  });
  return e
};
goog.array.reduceRight = function(a, b, c, d) {
  if(a.reduceRight) {
    return d ? a.reduceRight(goog.bind(b, d), c) : a.reduceRight(b, c)
  }
  var e = c;
  goog.array.forEachRight(a, function(c, g) {
    e = b.call(d, e, c, g, a)
  });
  return e
};
goog.array.some = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.some ? function(a, b, c) {
  goog.asserts.assert(null != a.length);
  return goog.array.ARRAY_PROTOTYPE_.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = goog.isString(a) ? a.split("") : a, f = 0;f < d;f++) {
    if(f in e && b.call(c, e[f], f, a)) {
      return!0
    }
  }
  return!1
};
goog.array.every = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.every ? function(a, b, c) {
  goog.asserts.assert(null != a.length);
  return goog.array.ARRAY_PROTOTYPE_.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = goog.isString(a) ? a.split("") : a, f = 0;f < d;f++) {
    if(f in e && !b.call(c, e[f], f, a)) {
      return!1
    }
  }
  return!0
};
goog.array.find = function(a, b, c) {
  b = goog.array.findIndex(a, b, c);
  return 0 > b ? null : goog.isString(a) ? a.charAt(b) : a[b]
};
goog.array.findIndex = function(a, b, c) {
  for(var d = a.length, e = goog.isString(a) ? a.split("") : a, f = 0;f < d;f++) {
    if(f in e && b.call(c, e[f], f, a)) {
      return f
    }
  }
  return-1
};
goog.array.findRight = function(a, b, c) {
  b = goog.array.findIndexRight(a, b, c);
  return 0 > b ? null : goog.isString(a) ? a.charAt(b) : a[b]
};
goog.array.findIndexRight = function(a, b, c) {
  for(var d = a.length, e = goog.isString(a) ? a.split("") : a, d = d - 1;0 <= d;d--) {
    if(d in e && b.call(c, e[d], d, a)) {
      return d
    }
  }
  return-1
};
goog.array.contains = function(a, b) {
  return 0 <= goog.array.indexOf(a, b)
};
goog.array.isEmpty = function(a) {
  return 0 == a.length
};
goog.array.clear = function(a) {
  if(!goog.isArray(a)) {
    for(var b = a.length - 1;0 <= b;b--) {
      delete a[b]
    }
  }
  a.length = 0
};
goog.array.insert = function(a, b) {
  goog.array.contains(a, b) || a.push(b)
};
goog.array.insertAt = function(a, b, c) {
  goog.array.splice(a, c, 0, b)
};
goog.array.insertArrayAt = function(a, b, c) {
  goog.partial(goog.array.splice, a, c, 0).apply(null, b)
};
goog.array.insertBefore = function(a, b, c) {
  var d;
  2 == arguments.length || 0 > (d = goog.array.indexOf(a, c)) ? a.push(b) : goog.array.insertAt(a, b, d)
};
goog.array.remove = function(a, b) {
  var c = goog.array.indexOf(a, b), d;
  (d = 0 <= c) && goog.array.removeAt(a, c);
  return d
};
goog.array.removeAt = function(a, b) {
  goog.asserts.assert(null != a.length);
  return 1 == goog.array.ARRAY_PROTOTYPE_.splice.call(a, b, 1).length
};
goog.array.removeIf = function(a, b, c) {
  b = goog.array.findIndex(a, b, c);
  return 0 <= b ? (goog.array.removeAt(a, b), !0) : !1
};
goog.array.concat = function(a) {
  return goog.array.ARRAY_PROTOTYPE_.concat.apply(goog.array.ARRAY_PROTOTYPE_, arguments)
};
goog.array.clone = function(a) {
  if(goog.isArray(a)) {
    return goog.array.concat(a)
  }
  for(var b = [], c = 0, d = a.length;c < d;c++) {
    b[c] = a[c]
  }
  return b
};
goog.array.toArray = function(a) {
  return goog.isArray(a) ? goog.array.concat(a) : goog.array.clone(a)
};
goog.array.extend = function(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = arguments[c], e;
    if(goog.isArray(d) || (e = goog.isArrayLike(d)) && d.hasOwnProperty("callee")) {
      a.push.apply(a, d)
    }else {
      if(e) {
        for(var f = a.length, g = d.length, h = 0;h < g;h++) {
          a[f + h] = d[h]
        }
      }else {
        a.push(d)
      }
    }
  }
};
goog.array.splice = function(a, b, c, d) {
  goog.asserts.assert(null != a.length);
  return goog.array.ARRAY_PROTOTYPE_.splice.apply(a, goog.array.slice(arguments, 1))
};
goog.array.slice = function(a, b, c) {
  goog.asserts.assert(null != a.length);
  return 2 >= arguments.length ? goog.array.ARRAY_PROTOTYPE_.slice.call(a, b) : goog.array.ARRAY_PROTOTYPE_.slice.call(a, b, c)
};
goog.array.removeDuplicates = function(a, b) {
  for(var c = b || a, d = {}, e = 0, f = 0;f < a.length;) {
    var g = a[f++], h = goog.isObject(g) ? "o" + goog.getUid(g) : (typeof g).charAt(0) + g;
    Object.prototype.hasOwnProperty.call(d, h) || (d[h] = !0, c[e++] = g)
  }
  c.length = e
};
goog.array.binarySearch = function(a, b, c) {
  return goog.array.binarySearch_(a, c || goog.array.defaultCompare, !1, b)
};
goog.array.binarySelect = function(a, b, c) {
  return goog.array.binarySearch_(a, b, !0, void 0, c)
};
goog.array.binarySearch_ = function(a, b, c, d, e) {
  for(var f = 0, g = a.length, h;f < g;) {
    var i = f + g >> 1, j;
    j = c ? b.call(e, a[i], i, a) : b(d, a[i]);
    0 < j ? f = i + 1 : (g = i, h = !j)
  }
  return h ? f : ~f
};
goog.array.sort = function(a, b) {
  goog.asserts.assert(null != a.length);
  goog.array.ARRAY_PROTOTYPE_.sort.call(a, b || goog.array.defaultCompare)
};
goog.array.stableSort = function(a, b) {
  for(var c = 0;c < a.length;c++) {
    a[c] = {index:c, value:a[c]}
  }
  var d = b || goog.array.defaultCompare;
  goog.array.sort(a, function(a, b) {
    return d(a.value, b.value) || a.index - b.index
  });
  for(c = 0;c < a.length;c++) {
    a[c] = a[c].value
  }
};
goog.array.sortObjectsByKey = function(a, b, c) {
  var d = c || goog.array.defaultCompare;
  goog.array.sort(a, function(a, c) {
    return d(a[b], c[b])
  })
};
goog.array.isSorted = function(a, b, c) {
  for(var b = b || goog.array.defaultCompare, d = 1;d < a.length;d++) {
    var e = b(a[d - 1], a[d]);
    if(0 < e || 0 == e && c) {
      return!1
    }
  }
  return!0
};
goog.array.equals = function(a, b, c) {
  if(!goog.isArrayLike(a) || !goog.isArrayLike(b) || a.length != b.length) {
    return!1
  }
  for(var d = a.length, c = c || goog.array.defaultCompareEquality, e = 0;e < d;e++) {
    if(!c(a[e], b[e])) {
      return!1
    }
  }
  return!0
};
goog.array.compare = function(a, b, c) {
  return goog.array.equals(a, b, c)
};
goog.array.defaultCompare = function(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
};
goog.array.defaultCompareEquality = function(a, b) {
  return a === b
};
goog.array.binaryInsert = function(a, b, c) {
  c = goog.array.binarySearch(a, b, c);
  return 0 > c ? (goog.array.insertAt(a, b, -(c + 1)), !0) : !1
};
goog.array.binaryRemove = function(a, b, c) {
  b = goog.array.binarySearch(a, b, c);
  return 0 <= b ? goog.array.removeAt(a, b) : !1
};
goog.array.bucket = function(a, b) {
  for(var c = {}, d = 0;d < a.length;d++) {
    var e = a[d], f = b(e, d, a);
    goog.isDef(f) && (c[f] || (c[f] = [])).push(e)
  }
  return c
};
goog.array.repeat = function(a, b) {
  for(var c = [], d = 0;d < b;d++) {
    c[d] = a
  }
  return c
};
goog.array.flatten = function(a) {
  for(var b = [], c = 0;c < arguments.length;c++) {
    var d = arguments[c];
    goog.isArray(d) ? b.push.apply(b, goog.array.flatten.apply(null, d)) : b.push(d)
  }
  return b
};
goog.array.rotate = function(a, b) {
  goog.asserts.assert(null != a.length);
  a.length && (b %= a.length, 0 < b ? goog.array.ARRAY_PROTOTYPE_.unshift.apply(a, a.splice(-b, b)) : 0 > b && goog.array.ARRAY_PROTOTYPE_.push.apply(a, a.splice(0, -b)));
  return a
};
goog.array.zip = function(a) {
  if(!arguments.length) {
    return[]
  }
  for(var b = [], c = 0;;c++) {
    for(var d = [], e = 0;e < arguments.length;e++) {
      var f = arguments[e];
      if(c >= f.length) {
        return b
      }
      d.push(f[c])
    }
    b.push(d)
  }
};
goog.array.shuffle = function(a, b) {
  for(var c = b || Math.random, d = a.length - 1;0 < d;d--) {
    var e = Math.floor(c() * (d + 1)), f = a[d];
    a[d] = a[e];
    a[e] = f
  }
};
goog.debug.entryPointRegistry = {};
goog.debug.EntryPointMonitor = function() {
};
goog.debug.entryPointRegistry.refList_ = [];
goog.debug.entryPointRegistry.register = function(a) {
  goog.debug.entryPointRegistry.refList_[goog.debug.entryPointRegistry.refList_.length] = a
};
goog.debug.entryPointRegistry.monitorAll = function(a) {
  for(var a = goog.bind(a.wrap, a), b = 0;b < goog.debug.entryPointRegistry.refList_.length;b++) {
    goog.debug.entryPointRegistry.refList_[b](a)
  }
};
goog.debug.entryPointRegistry.unmonitorAllIfPossible = function(a) {
  for(var a = goog.bind(a.unwrap, a), b = 0;b < goog.debug.entryPointRegistry.refList_.length;b++) {
    goog.debug.entryPointRegistry.refList_[b](a)
  }
};
goog.debug.errorHandlerWeakDep = {protectEntryPoint:function(a) {
  return a
}};
goog.userAgent = {};
goog.userAgent.ASSUME_IE = !1;
goog.userAgent.ASSUME_GECKO = !1;
goog.userAgent.ASSUME_WEBKIT = !1;
goog.userAgent.ASSUME_MOBILE_WEBKIT = !1;
goog.userAgent.ASSUME_OPERA = !1;
goog.userAgent.BROWSER_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_GECKO || goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_OPERA;
goog.userAgent.getUserAgentString = function() {
  return goog.global.navigator ? goog.global.navigator.userAgent : null
};
goog.userAgent.getNavigator = function() {
  return goog.global.navigator
};
goog.userAgent.init_ = function() {
  goog.userAgent.detectedOpera_ = !1;
  goog.userAgent.detectedIe_ = !1;
  goog.userAgent.detectedWebkit_ = !1;
  goog.userAgent.detectedMobile_ = !1;
  goog.userAgent.detectedGecko_ = !1;
  var a;
  if(!goog.userAgent.BROWSER_KNOWN_ && (a = goog.userAgent.getUserAgentString())) {
    var b = goog.userAgent.getNavigator();
    goog.userAgent.detectedOpera_ = 0 == a.indexOf("Opera");
    goog.userAgent.detectedIe_ = !goog.userAgent.detectedOpera_ && -1 != a.indexOf("MSIE");
    goog.userAgent.detectedWebkit_ = !goog.userAgent.detectedOpera_ && -1 != a.indexOf("WebKit");
    goog.userAgent.detectedMobile_ = goog.userAgent.detectedWebkit_ && -1 != a.indexOf("Mobile");
    goog.userAgent.detectedGecko_ = !goog.userAgent.detectedOpera_ && !goog.userAgent.detectedWebkit_ && "Gecko" == b.product
  }
};
goog.userAgent.BROWSER_KNOWN_ || goog.userAgent.init_();
goog.userAgent.OPERA = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_OPERA : goog.userAgent.detectedOpera_;
goog.userAgent.IE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_IE : goog.userAgent.detectedIe_;
goog.userAgent.GECKO = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_GECKO : goog.userAgent.detectedGecko_;
goog.userAgent.WEBKIT = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_MOBILE_WEBKIT : goog.userAgent.detectedWebkit_;
goog.userAgent.MOBILE = goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.detectedMobile_;
goog.userAgent.SAFARI = goog.userAgent.WEBKIT;
goog.userAgent.determinePlatform_ = function() {
  var a = goog.userAgent.getNavigator();
  return a && a.platform || ""
};
goog.userAgent.PLATFORM = goog.userAgent.determinePlatform_();
goog.userAgent.ASSUME_MAC = !1;
goog.userAgent.ASSUME_WINDOWS = !1;
goog.userAgent.ASSUME_LINUX = !1;
goog.userAgent.ASSUME_X11 = !1;
goog.userAgent.PLATFORM_KNOWN_ = goog.userAgent.ASSUME_MAC || goog.userAgent.ASSUME_WINDOWS || goog.userAgent.ASSUME_LINUX || goog.userAgent.ASSUME_X11;
goog.userAgent.initPlatform_ = function() {
  goog.userAgent.detectedMac_ = goog.string.contains(goog.userAgent.PLATFORM, "Mac");
  goog.userAgent.detectedWindows_ = goog.string.contains(goog.userAgent.PLATFORM, "Win");
  goog.userAgent.detectedLinux_ = goog.string.contains(goog.userAgent.PLATFORM, "Linux");
  goog.userAgent.detectedX11_ = !!goog.userAgent.getNavigator() && goog.string.contains(goog.userAgent.getNavigator().appVersion || "", "X11")
};
goog.userAgent.PLATFORM_KNOWN_ || goog.userAgent.initPlatform_();
goog.userAgent.MAC = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_MAC : goog.userAgent.detectedMac_;
goog.userAgent.WINDOWS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_WINDOWS : goog.userAgent.detectedWindows_;
goog.userAgent.LINUX = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_LINUX : goog.userAgent.detectedLinux_;
goog.userAgent.X11 = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_X11 : goog.userAgent.detectedX11_;
goog.userAgent.determineVersion_ = function() {
  var a = "", b;
  goog.userAgent.OPERA && goog.global.opera ? (a = goog.global.opera.version, a = "function" == typeof a ? a() : a) : (goog.userAgent.GECKO ? b = /rv\:([^\);]+)(\)|;)/ : goog.userAgent.IE ? b = /MSIE\s+([^\);]+)(\)|;)/ : goog.userAgent.WEBKIT && (b = /WebKit\/(\S+)/), b && (a = (a = b.exec(goog.userAgent.getUserAgentString())) ? a[1] : ""));
  return goog.userAgent.IE && (b = goog.userAgent.getDocumentMode_(), b > parseFloat(a)) ? "" + b : a
};
goog.userAgent.getDocumentMode_ = function() {
  var a = goog.global.document;
  return a ? a.documentMode : void 0
};
goog.userAgent.VERSION = goog.userAgent.determineVersion_();
goog.userAgent.compare = function(a, b) {
  return goog.string.compareVersions(a, b)
};
goog.userAgent.isVersionCache_ = {};
goog.userAgent.isVersion = function(a) {
  return goog.userAgent.isVersionCache_[a] || (goog.userAgent.isVersionCache_[a] = 0 <= goog.string.compareVersions(goog.userAgent.VERSION, a))
};
goog.events = {};
goog.events.BrowserFeature = {HAS_W3C_BUTTON:!goog.userAgent.IE || goog.userAgent.isVersion("9"), SET_KEY_CODE_TO_PREVENT_DEFAULT:goog.userAgent.IE && !goog.userAgent.isVersion("8")};
goog.events.Event = function(a, b) {
  goog.Disposable.call(this);
  this.type = a;
  this.currentTarget = this.target = b
};
goog.inherits(goog.events.Event, goog.Disposable);
goog.events.Event.prototype.disposeInternal = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
goog.events.Event.prototype.propagationStopped_ = !1;
goog.events.Event.prototype.returnValue_ = !0;
goog.events.Event.prototype.stopPropagation = function() {
  this.propagationStopped_ = !0
};
goog.events.Event.prototype.preventDefault = function() {
  this.returnValue_ = !1
};
goog.events.Event.stopPropagation = function(a) {
  a.stopPropagation()
};
goog.events.Event.preventDefault = function(a) {
  a.preventDefault()
};
goog.events.EventType = {CLICK:"click", DBLCLICK:"dblclick", MOUSEDOWN:"mousedown", MOUSEUP:"mouseup", MOUSEOVER:"mouseover", MOUSEOUT:"mouseout", MOUSEMOVE:"mousemove", SELECTSTART:"selectstart", KEYPRESS:"keypress", KEYDOWN:"keydown", KEYUP:"keyup", BLUR:"blur", FOCUS:"focus", DEACTIVATE:"deactivate", FOCUSIN:goog.userAgent.IE ? "focusin" : "DOMFocusIn", FOCUSOUT:goog.userAgent.IE ? "focusout" : "DOMFocusOut", CHANGE:"change", SELECT:"select", SUBMIT:"submit", INPUT:"input", PROPERTYCHANGE:"propertychange", 
DRAGSTART:"dragstart", DRAGENTER:"dragenter", DRAGOVER:"dragover", DRAGLEAVE:"dragleave", DROP:"drop", TOUCHSTART:"touchstart", TOUCHMOVE:"touchmove", TOUCHEND:"touchend", TOUCHCANCEL:"touchcancel", CONTEXTMENU:"contextmenu", ERROR:"error", HELP:"help", LOAD:"load", LOSECAPTURE:"losecapture", READYSTATECHANGE:"readystatechange", RESIZE:"resize", SCROLL:"scroll", UNLOAD:"unload", HASHCHANGE:"hashchange", PAGEHIDE:"pagehide", PAGESHOW:"pageshow", POPSTATE:"popstate", COPY:"copy", PASTE:"paste", CUT:"cut", 
MESSAGE:"message", CONNECT:"connect"};
goog.reflect = {};
goog.reflect.object = function(a, b) {
  return b
};
goog.reflect.sinkValue = new Function("a", "return a");
goog.events.BrowserEvent = function(a, b) {
  a && this.init(a, b)
};
goog.inherits(goog.events.BrowserEvent, goog.events.Event);
goog.events.BrowserEvent.MouseButton = {LEFT:0, MIDDLE:1, RIGHT:2};
goog.events.BrowserEvent.IEButtonMap = [1, 4, 2];
goog.events.BrowserEvent.prototype.target = null;
goog.events.BrowserEvent.prototype.relatedTarget = null;
goog.events.BrowserEvent.prototype.offsetX = 0;
goog.events.BrowserEvent.prototype.offsetY = 0;
goog.events.BrowserEvent.prototype.clientX = 0;
goog.events.BrowserEvent.prototype.clientY = 0;
goog.events.BrowserEvent.prototype.screenX = 0;
goog.events.BrowserEvent.prototype.screenY = 0;
goog.events.BrowserEvent.prototype.button = 0;
goog.events.BrowserEvent.prototype.keyCode = 0;
goog.events.BrowserEvent.prototype.charCode = 0;
goog.events.BrowserEvent.prototype.ctrlKey = !1;
goog.events.BrowserEvent.prototype.altKey = !1;
goog.events.BrowserEvent.prototype.shiftKey = !1;
goog.events.BrowserEvent.prototype.metaKey = !1;
goog.events.BrowserEvent.prototype.platformModifierKey = !1;
goog.events.BrowserEvent.prototype.event_ = null;
goog.events.BrowserEvent.prototype.init = function(a, b) {
  var c = this.type = a.type;
  goog.events.Event.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(goog.userAgent.GECKO) {
      try {
        goog.reflect.sinkValue(d.nodeName)
      }catch(e) {
        d = null
      }
    }
  }else {
    if(c == goog.events.EventType.MOUSEOVER) {
      d = a.fromElement
    }else {
      if(c == goog.events.EventType.MOUSEOUT) {
        d = a.toElement
      }
    }
  }
  this.relatedTarget = d;
  this.offsetX = void 0 !== a.offsetX ? a.offsetX : a.layerX;
  this.offsetY = void 0 !== a.offsetY ? a.offsetY : a.layerY;
  this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
  this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.platformModifierKey = goog.userAgent.MAC ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.event_ = a;
  delete this.returnValue_;
  delete this.propagationStopped_
};
goog.events.BrowserEvent.prototype.isButton = function(a) {
  return goog.events.BrowserFeature.HAS_W3C_BUTTON ? this.event_.button == a : "click" == this.type ? a == goog.events.BrowserEvent.MouseButton.LEFT : !!(this.event_.button & goog.events.BrowserEvent.IEButtonMap[a])
};
goog.events.BrowserEvent.prototype.isMouseActionButton = function() {
  return this.isButton(goog.events.BrowserEvent.MouseButton.LEFT) && !(goog.userAgent.WEBKIT && goog.userAgent.MAC && this.ctrlKey)
};
goog.events.BrowserEvent.prototype.stopPropagation = function() {
  goog.events.BrowserEvent.superClass_.stopPropagation.call(this);
  this.event_.stopPropagation ? this.event_.stopPropagation() : this.event_.cancelBubble = !0
};
goog.events.BrowserEvent.prototype.preventDefault = function() {
  goog.events.BrowserEvent.superClass_.preventDefault.call(this);
  var a = this.event_;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = !1, goog.events.BrowserFeature.SET_KEY_CODE_TO_PREVENT_DEFAULT) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
goog.events.BrowserEvent.prototype.getBrowserEvent = function() {
  return this.event_
};
goog.events.BrowserEvent.prototype.disposeInternal = function() {
  goog.events.BrowserEvent.superClass_.disposeInternal.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.event_ = null
};
goog.events.EventWrapper = function() {
};
goog.events.EventWrapper.prototype.listen = function() {
};
goog.events.EventWrapper.prototype.unlisten = function() {
};
goog.events.Listener = function() {
};
goog.events.Listener.counter_ = 0;
goog.events.Listener.prototype.key = 0;
goog.events.Listener.prototype.removed = !1;
goog.events.Listener.prototype.callOnce = !1;
goog.events.Listener.prototype.init = function(a, b, c, d, e, f) {
  if(goog.isFunction(a)) {
    this.isFunctionListener_ = !0
  }else {
    if(a && a.handleEvent && goog.isFunction(a.handleEvent)) {
      this.isFunctionListener_ = !1
    }else {
      throw Error("Invalid listener argument");
    }
  }
  this.listener = a;
  this.proxy = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.handler = f;
  this.callOnce = !1;
  this.key = ++goog.events.Listener.counter_;
  this.removed = !1
};
goog.events.Listener.prototype.handleEvent = function(a) {
  return this.isFunctionListener_ ? this.listener.call(this.handler || this.src, a) : this.listener.handleEvent.call(this.listener, a)
};
goog.structs = {};
goog.structs.SimplePool = function(a, b) {
  goog.Disposable.call(this);
  this.maxCount_ = b;
  this.freeQueue_ = [];
  this.createInitial_(a)
};
goog.inherits(goog.structs.SimplePool, goog.Disposable);
goog.structs.SimplePool.prototype.createObjectFn_ = null;
goog.structs.SimplePool.prototype.disposeObjectFn_ = null;
goog.structs.SimplePool.prototype.setCreateObjectFn = function(a) {
  this.createObjectFn_ = a
};
goog.structs.SimplePool.prototype.setDisposeObjectFn = function(a) {
  this.disposeObjectFn_ = a
};
goog.structs.SimplePool.prototype.getObject = function() {
  return this.freeQueue_.length ? this.freeQueue_.pop() : this.createObject()
};
goog.structs.SimplePool.prototype.releaseObject = function(a) {
  this.freeQueue_.length < this.maxCount_ ? this.freeQueue_.push(a) : this.disposeObject(a)
};
goog.structs.SimplePool.prototype.createInitial_ = function(a) {
  if(a > this.maxCount_) {
    throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");
  }
  for(var b = 0;b < a;b++) {
    this.freeQueue_.push(this.createObject())
  }
};
goog.structs.SimplePool.prototype.createObject = function() {
  return this.createObjectFn_ ? this.createObjectFn_() : {}
};
goog.structs.SimplePool.prototype.disposeObject = function(a) {
  if(this.disposeObjectFn_) {
    this.disposeObjectFn_(a)
  }else {
    if(goog.isObject(a)) {
      if(goog.isFunction(a.dispose)) {
        a.dispose()
      }else {
        for(var b in a) {
          delete a[b]
        }
      }
    }
  }
};
goog.structs.SimplePool.prototype.disposeInternal = function() {
  goog.structs.SimplePool.superClass_.disposeInternal.call(this);
  for(var a = this.freeQueue_;a.length;) {
    this.disposeObject(a.pop())
  }
  delete this.freeQueue_
};
goog.userAgent.jscript = {};
goog.userAgent.jscript.ASSUME_NO_JSCRIPT = !1;
goog.userAgent.jscript.init_ = function() {
  goog.userAgent.jscript.DETECTED_HAS_JSCRIPT_ = "ScriptEngine" in goog.global && "JScript" == goog.global.ScriptEngine();
  goog.userAgent.jscript.DETECTED_VERSION_ = goog.userAgent.jscript.DETECTED_HAS_JSCRIPT_ ? goog.global.ScriptEngineMajorVersion() + "." + goog.global.ScriptEngineMinorVersion() + "." + goog.global.ScriptEngineBuildVersion() : "0"
};
goog.userAgent.jscript.ASSUME_NO_JSCRIPT || goog.userAgent.jscript.init_();
goog.userAgent.jscript.HAS_JSCRIPT = goog.userAgent.jscript.ASSUME_NO_JSCRIPT ? !1 : goog.userAgent.jscript.DETECTED_HAS_JSCRIPT_;
goog.userAgent.jscript.VERSION = goog.userAgent.jscript.ASSUME_NO_JSCRIPT ? "0" : goog.userAgent.jscript.DETECTED_VERSION_;
goog.userAgent.jscript.isVersion = function(a) {
  return 0 <= goog.string.compareVersions(goog.userAgent.jscript.VERSION, a)
};
goog.events.pools = {};
goog.events.ASSUME_GOOD_GC = !1;
(function() {
  function a() {
    return{count_:0, remaining_:0}
  }
  function b() {
    return[]
  }
  function c() {
    var a = function(b) {
      return g.call(a.src, a.key, b)
    };
    return a
  }
  function d() {
    return new goog.events.Listener
  }
  function e() {
    return new goog.events.BrowserEvent
  }
  var f = !goog.events.ASSUME_GOOD_GC && goog.userAgent.jscript.HAS_JSCRIPT && !goog.userAgent.jscript.isVersion("5.7"), g;
  goog.events.pools.setProxyCallbackFunction = function(a) {
    g = a
  };
  if(f) {
    goog.events.pools.getObject = function() {
      return h.getObject()
    };
    goog.events.pools.releaseObject = function(a) {
      h.releaseObject(a)
    };
    goog.events.pools.getArray = function() {
      return i.getObject()
    };
    goog.events.pools.releaseArray = function(a) {
      i.releaseObject(a)
    };
    goog.events.pools.getProxy = function() {
      return j.getObject()
    };
    goog.events.pools.releaseProxy = function() {
      j.releaseObject(c())
    };
    goog.events.pools.getListener = function() {
      return k.getObject()
    };
    goog.events.pools.releaseListener = function(a) {
      k.releaseObject(a)
    };
    goog.events.pools.getEvent = function() {
      return m.getObject()
    };
    goog.events.pools.releaseEvent = function(a) {
      m.releaseObject(a)
    };
    var h = new goog.structs.SimplePool(0, 600);
    h.setCreateObjectFn(a);
    var i = new goog.structs.SimplePool(0, 600);
    i.setCreateObjectFn(b);
    var j = new goog.structs.SimplePool(0, 600);
    j.setCreateObjectFn(c);
    var k = new goog.structs.SimplePool(0, 600);
    k.setCreateObjectFn(d);
    var m = new goog.structs.SimplePool(0, 600);
    m.setCreateObjectFn(e)
  }else {
    goog.events.pools.getObject = a, goog.events.pools.releaseObject = goog.nullFunction, goog.events.pools.getArray = b, goog.events.pools.releaseArray = goog.nullFunction, goog.events.pools.getProxy = c, goog.events.pools.releaseProxy = goog.nullFunction, goog.events.pools.getListener = d, goog.events.pools.releaseListener = goog.nullFunction, goog.events.pools.getEvent = e, goog.events.pools.releaseEvent = goog.nullFunction
  }
})();
goog.object = {};
goog.object.forEach = function(a, b, c) {
  for(var d in a) {
    b.call(c, a[d], d, a)
  }
};
goog.object.filter = function(a, b, c) {
  var d = {}, e;
  for(e in a) {
    b.call(c, a[e], e, a) && (d[e] = a[e])
  }
  return d
};
goog.object.map = function(a, b, c) {
  var d = {}, e;
  for(e in a) {
    d[e] = b.call(c, a[e], e, a)
  }
  return d
};
goog.object.some = function(a, b, c) {
  for(var d in a) {
    if(b.call(c, a[d], d, a)) {
      return!0
    }
  }
  return!1
};
goog.object.every = function(a, b, c) {
  for(var d in a) {
    if(!b.call(c, a[d], d, a)) {
      return!1
    }
  }
  return!0
};
goog.object.getCount = function(a) {
  var b = 0, c;
  for(c in a) {
    b++
  }
  return b
};
goog.object.getAnyKey = function(a) {
  for(var b in a) {
    return b
  }
};
goog.object.getAnyValue = function(a) {
  for(var b in a) {
    return a[b]
  }
};
goog.object.contains = function(a, b) {
  return goog.object.containsValue(a, b)
};
goog.object.getValues = function(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
};
goog.object.getKeys = function(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
};
goog.object.getValueByKeys = function(a, b) {
  for(var c = goog.isArrayLike(b), d = c ? b : arguments, c = c ? 0 : 1;c < d.length && !(a = a[d[c]], !goog.isDef(a));c++) {
  }
  return a
};
goog.object.containsKey = function(a, b) {
  return b in a
};
goog.object.containsValue = function(a, b) {
  for(var c in a) {
    if(a[c] == b) {
      return!0
    }
  }
  return!1
};
goog.object.findKey = function(a, b, c) {
  for(var d in a) {
    if(b.call(c, a[d], d, a)) {
      return d
    }
  }
};
goog.object.findValue = function(a, b, c) {
  return(b = goog.object.findKey(a, b, c)) && a[b]
};
goog.object.isEmpty = function(a) {
  for(var b in a) {
    return!1
  }
  return!0
};
goog.object.clear = function(a) {
  for(var b in a) {
    delete a[b]
  }
};
goog.object.remove = function(a, b) {
  var c;
  (c = b in a) && delete a[b];
  return c
};
goog.object.add = function(a, b, c) {
  if(b in a) {
    throw Error('The object already contains the key "' + b + '"');
  }
  goog.object.set(a, b, c)
};
goog.object.get = function(a, b, c) {
  return b in a ? a[b] : c
};
goog.object.set = function(a, b, c) {
  a[b] = c
};
goog.object.setIfUndefined = function(a, b, c) {
  return b in a ? a[b] : a[b] = c
};
goog.object.clone = function(a) {
  var b = {}, c;
  for(c in a) {
    b[c] = a[c]
  }
  return b
};
goog.object.unsafeClone = function(a) {
  var b = goog.typeOf(a);
  if("object" == b || "array" == b) {
    if(a.clone) {
      return a.clone()
    }
    var b = "array" == b ? [] : {}, c;
    for(c in a) {
      b[c] = goog.object.unsafeClone(a[c])
    }
    return b
  }
  return a
};
goog.object.transpose = function(a) {
  var b = {}, c;
  for(c in a) {
    b[a[c]] = c
  }
  return b
};
goog.object.PROTOTYPE_FIELDS_ = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
goog.object.extend = function(a, b) {
  for(var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for(c in d) {
      a[c] = d[c]
    }
    for(var f = 0;f < goog.object.PROTOTYPE_FIELDS_.length;f++) {
      c = goog.object.PROTOTYPE_FIELDS_[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
};
goog.object.create = function(a) {
  var b = arguments.length;
  if(1 == b && goog.isArray(arguments[0])) {
    return goog.object.create.apply(null, arguments[0])
  }
  if(b % 2) {
    throw Error("Uneven number of arguments");
  }
  for(var c = {}, d = 0;d < b;d += 2) {
    c[arguments[d]] = arguments[d + 1]
  }
  return c
};
goog.object.createSet = function(a) {
  var b = arguments.length;
  if(1 == b && goog.isArray(arguments[0])) {
    return goog.object.createSet.apply(null, arguments[0])
  }
  for(var c = {}, d = 0;d < b;d++) {
    c[arguments[d]] = !0
  }
  return c
};
goog.events.listeners_ = {};
goog.events.listenerTree_ = {};
goog.events.sources_ = {};
goog.events.onString_ = "on";
goog.events.onStringMap_ = {};
goog.events.keySeparator_ = "_";
goog.events.listen = function(a, b, c, d, e) {
  if(b) {
    if(goog.isArray(b)) {
      for(var f = 0;f < b.length;f++) {
        goog.events.listen(a, b[f], c, d, e)
      }
      return null
    }
    var d = !!d, g = goog.events.listenerTree_;
    b in g || (g[b] = goog.events.pools.getObject());
    g = g[b];
    d in g || (g[d] = goog.events.pools.getObject(), g.count_++);
    var g = g[d], h = goog.getUid(a), i;
    g.remaining_++;
    if(g[h]) {
      i = g[h];
      for(f = 0;f < i.length;f++) {
        if(g = i[f], g.listener == c && g.handler == e) {
          if(g.removed) {
            break
          }
          return i[f].key
        }
      }
    }else {
      i = g[h] = goog.events.pools.getArray(), g.count_++
    }
    f = goog.events.pools.getProxy();
    f.src = a;
    g = goog.events.pools.getListener();
    g.init(c, f, a, b, d, e);
    c = g.key;
    f.key = c;
    i.push(g);
    goog.events.listeners_[c] = g;
    goog.events.sources_[h] || (goog.events.sources_[h] = goog.events.pools.getArray());
    goog.events.sources_[h].push(g);
    a.addEventListener ? (a == goog.global || !a.customEvent_) && a.addEventListener(b, f, d) : a.attachEvent(goog.events.getOnString_(b), f);
    return c
  }
  throw Error("Invalid event type");
};
goog.events.listenOnce = function(a, b, c, d, e) {
  if(goog.isArray(b)) {
    for(var f = 0;f < b.length;f++) {
      goog.events.listenOnce(a, b[f], c, d, e)
    }
    return null
  }
  a = goog.events.listen(a, b, c, d, e);
  goog.events.listeners_[a].callOnce = !0;
  return a
};
goog.events.listenWithWrapper = function(a, b, c, d, e) {
  b.listen(a, c, d, e)
};
goog.events.unlisten = function(a, b, c, d, e) {
  if(goog.isArray(b)) {
    for(var f = 0;f < b.length;f++) {
      goog.events.unlisten(a, b[f], c, d, e)
    }
    return null
  }
  d = !!d;
  a = goog.events.getListeners_(a, b, d);
  if(!a) {
    return!1
  }
  for(f = 0;f < a.length;f++) {
    if(a[f].listener == c && a[f].capture == d && a[f].handler == e) {
      return goog.events.unlistenByKey(a[f].key)
    }
  }
  return!1
};
goog.events.unlistenByKey = function(a) {
  if(!goog.events.listeners_[a]) {
    return!1
  }
  var b = goog.events.listeners_[a];
  if(b.removed) {
    return!1
  }
  var c = b.src, d = b.type, e = b.proxy, f = b.capture;
  c.removeEventListener ? (c == goog.global || !c.customEvent_) && c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(goog.events.getOnString_(d), e);
  c = goog.getUid(c);
  e = goog.events.listenerTree_[d][f][c];
  if(goog.events.sources_[c]) {
    var g = goog.events.sources_[c];
    goog.array.remove(g, b);
    0 == g.length && delete goog.events.sources_[c]
  }
  b.removed = !0;
  e.needsCleanup_ = !0;
  goog.events.cleanUp_(d, f, c, e);
  delete goog.events.listeners_[a];
  return!0
};
goog.events.unlistenWithWrapper = function(a, b, c, d, e) {
  b.unlisten(a, c, d, e)
};
goog.events.cleanUp_ = function(a, b, c, d) {
  if(!d.locked_ && d.needsCleanup_) {
    for(var e = 0, f = 0;e < d.length;e++) {
      if(d[e].removed) {
        var g = d[e].proxy;
        g.src = null;
        goog.events.pools.releaseProxy(g);
        goog.events.pools.releaseListener(d[e])
      }else {
        e != f && (d[f] = d[e]), f++
      }
    }
    d.length = f;
    d.needsCleanup_ = !1;
    0 == f && (goog.events.pools.releaseArray(d), delete goog.events.listenerTree_[a][b][c], goog.events.listenerTree_[a][b].count_--, 0 == goog.events.listenerTree_[a][b].count_ && (goog.events.pools.releaseObject(goog.events.listenerTree_[a][b]), delete goog.events.listenerTree_[a][b], goog.events.listenerTree_[a].count_--), 0 == goog.events.listenerTree_[a].count_ && (goog.events.pools.releaseObject(goog.events.listenerTree_[a]), delete goog.events.listenerTree_[a]))
  }
};
goog.events.removeAll = function(a, b, c) {
  var d = 0, e = null == b, f = null == c, c = !!c;
  if(null == a) {
    goog.object.forEach(goog.events.sources_, function(a) {
      for(var g = a.length - 1;0 <= g;g--) {
        var h = a[g];
        if((e || b == h.type) && (f || c == h.capture)) {
          goog.events.unlistenByKey(h.key), d++
        }
      }
    })
  }else {
    if(a = goog.getUid(a), goog.events.sources_[a]) {
      for(var a = goog.events.sources_[a], g = a.length - 1;0 <= g;g--) {
        var h = a[g];
        if((e || b == h.type) && (f || c == h.capture)) {
          goog.events.unlistenByKey(h.key), d++
        }
      }
    }
  }
  return d
};
goog.events.getListeners = function(a, b, c) {
  return goog.events.getListeners_(a, b, c) || []
};
goog.events.getListeners_ = function(a, b, c) {
  var d = goog.events.listenerTree_;
  return b in d && (d = d[b], c in d && (d = d[c], a = goog.getUid(a), d[a])) ? d[a] : null
};
goog.events.getListener = function(a, b, c, d, e) {
  d = !!d;
  if(a = goog.events.getListeners_(a, b, d)) {
    for(b = 0;b < a.length;b++) {
      if(a[b].listener == c && a[b].capture == d && a[b].handler == e) {
        return a[b]
      }
    }
  }
  return null
};
goog.events.hasListener = function(a, b, c) {
  var a = goog.getUid(a), d = goog.events.sources_[a];
  if(d) {
    var e = goog.isDef(b), f = goog.isDef(c);
    return e && f ? (d = goog.events.listenerTree_[b], !!d && !!d[c] && a in d[c]) : !e && !f ? !0 : goog.array.some(d, function(a) {
      return e && a.type == b || f && a.capture == c
    })
  }
  return!1
};
goog.events.expose = function(a) {
  var b = [], c;
  for(c in a) {
    a[c] && a[c].id ? b.push(c + " = " + a[c] + " (" + a[c].id + ")") : b.push(c + " = " + a[c])
  }
  return b.join("\n")
};
goog.events.getOnString_ = function(a) {
  return a in goog.events.onStringMap_ ? goog.events.onStringMap_[a] : goog.events.onStringMap_[a] = goog.events.onString_ + a
};
goog.events.fireListeners = function(a, b, c, d) {
  var e = goog.events.listenerTree_;
  return b in e && (e = e[b], c in e) ? goog.events.fireListeners_(e[c], a, b, c, d) : !0
};
goog.events.fireListeners_ = function(a, b, c, d, e) {
  var f = 1, b = goog.getUid(b);
  if(a[b]) {
    a.remaining_--;
    a = a[b];
    a.locked_ ? a.locked_++ : a.locked_ = 1;
    try {
      for(var g = a.length, h = 0;h < g;h++) {
        var i = a[h];
        i && !i.removed && (f &= !1 !== goog.events.fireListener(i, e))
      }
    }finally {
      a.locked_--, goog.events.cleanUp_(c, d, b, a)
    }
  }
  return Boolean(f)
};
goog.events.fireListener = function(a, b) {
  var c = a.handleEvent(b);
  a.callOnce && goog.events.unlistenByKey(a.key);
  return c
};
goog.events.getTotalListenerCount = function() {
  return goog.object.getCount(goog.events.listeners_)
};
goog.events.dispatchEvent = function(a, b) {
  var c = b.type || b, d = goog.events.listenerTree_;
  if(!(c in d)) {
    return!0
  }
  if(goog.isString(b)) {
    b = new goog.events.Event(b, a)
  }else {
    if(b instanceof goog.events.Event) {
      b.target = b.target || a
    }else {
      var e = b, b = new goog.events.Event(c, a);
      goog.object.extend(b, e)
    }
  }
  var e = 1, f, d = d[c], c = !0 in d, g;
  if(c) {
    f = [];
    for(g = a;g;g = g.getParentEventTarget()) {
      f.push(g)
    }
    g = d[!0];
    g.remaining_ = g.count_;
    for(var h = f.length - 1;!b.propagationStopped_ && 0 <= h && g.remaining_;h--) {
      b.currentTarget = f[h], e &= goog.events.fireListeners_(g, f[h], b.type, !0, b) && !1 != b.returnValue_
    }
  }
  if(!1 in d) {
    if(g = d[!1], g.remaining_ = g.count_, c) {
      for(h = 0;!b.propagationStopped_ && h < f.length && g.remaining_;h++) {
        b.currentTarget = f[h], e &= goog.events.fireListeners_(g, f[h], b.type, !1, b) && !1 != b.returnValue_
      }
    }else {
      for(d = a;!b.propagationStopped_ && d && g.remaining_;d = d.getParentEventTarget()) {
        b.currentTarget = d, e &= goog.events.fireListeners_(g, d, b.type, !1, b) && !1 != b.returnValue_
      }
    }
  }
  return Boolean(e)
};
goog.events.protectBrowserEventEntryPoint = function(a) {
  goog.events.handleBrowserEvent_ = a.protectEntryPoint(goog.events.handleBrowserEvent_);
  goog.events.pools.setProxyCallbackFunction(goog.events.handleBrowserEvent_)
};
goog.events.handleBrowserEvent_ = function(a, b) {
  if(!goog.events.listeners_[a]) {
    return!0
  }
  var c = goog.events.listeners_[a], d = c.type, e = goog.events.listenerTree_;
  if(!(d in e)) {
    return!0
  }
  var e = e[d], f, g;
  if(goog.events.synthesizeEventPropagation_()) {
    f = b || goog.getObjectByName("window.event");
    var h = !0 in e, i = !1 in e;
    if(h) {
      if(goog.events.isMarkedIeEvent_(f)) {
        return!0
      }
      goog.events.markIeEvent_(f)
    }
    var j = goog.events.pools.getEvent();
    j.init(f, this);
    f = !0;
    try {
      if(h) {
        for(var k = goog.events.pools.getArray(), m = j.currentTarget;m;m = m.parentNode) {
          k.push(m)
        }
        g = e[!0];
        g.remaining_ = g.count_;
        for(var l = k.length - 1;!j.propagationStopped_ && 0 <= l && g.remaining_;l--) {
          j.currentTarget = k[l], f &= goog.events.fireListeners_(g, k[l], d, !0, j)
        }
        if(i) {
          g = e[!1];
          g.remaining_ = g.count_;
          for(l = 0;!j.propagationStopped_ && l < k.length && g.remaining_;l++) {
            j.currentTarget = k[l], f &= goog.events.fireListeners_(g, k[l], d, !1, j)
          }
        }
      }else {
        f = goog.events.fireListener(c, j)
      }
    }finally {
      if(k) {
        k.length = 0, goog.events.pools.releaseArray(k)
      }
      j.dispose();
      goog.events.pools.releaseEvent(j)
    }
    return f
  }
  d = new goog.events.BrowserEvent(b, this);
  try {
    f = goog.events.fireListener(c, d)
  }finally {
    d.dispose()
  }
  return f
};
goog.events.pools.setProxyCallbackFunction(goog.events.handleBrowserEvent_);
goog.events.markIeEvent_ = function(a) {
  var b = !1;
  if(0 == a.keyCode) {
    try {
      a.keyCode = -1;
      return
    }catch(c) {
      b = !0
    }
  }
  if(b || void 0 == a.returnValue) {
    a.returnValue = !0
  }
};
goog.events.isMarkedIeEvent_ = function(a) {
  return 0 > a.keyCode || void 0 != a.returnValue
};
goog.events.uniqueIdCounter_ = 0;
goog.events.getUniqueId = function(a) {
  return a + "_" + goog.events.uniqueIdCounter_++
};
goog.events.synthesizeEventPropagation_ = function() {
  if(void 0 === goog.events.requiresSyntheticEventPropagation_) {
    goog.events.requiresSyntheticEventPropagation_ = goog.userAgent.IE && !goog.global.addEventListener
  }
  return goog.events.requiresSyntheticEventPropagation_
};
goog.debug.entryPointRegistry.register(function(a) {
  goog.events.handleBrowserEvent_ = a(goog.events.handleBrowserEvent_);
  goog.events.pools.setProxyCallbackFunction(goog.events.handleBrowserEvent_)
});
goog.events.EventTarget = function() {
  goog.Disposable.call(this)
};
goog.inherits(goog.events.EventTarget, goog.Disposable);
goog.events.EventTarget.prototype.customEvent_ = !0;
goog.events.EventTarget.prototype.parentEventTarget_ = null;
goog.events.EventTarget.prototype.getParentEventTarget = function() {
  return this.parentEventTarget_
};
goog.events.EventTarget.prototype.setParentEventTarget = function(a) {
  this.parentEventTarget_ = a
};
goog.events.EventTarget.prototype.addEventListener = function(a, b, c, d) {
  goog.events.listen(this, a, b, c, d)
};
goog.events.EventTarget.prototype.removeEventListener = function(a, b, c, d) {
  goog.events.unlisten(this, a, b, c, d)
};
goog.events.EventTarget.prototype.dispatchEvent = function(a) {
  return goog.events.dispatchEvent(this, a)
};
goog.events.EventTarget.prototype.disposeInternal = function() {
  goog.events.EventTarget.superClass_.disposeInternal.call(this);
  goog.events.removeAll(this);
  this.parentEventTarget_ = null
};
goog.Timer = function(a, b) {
  goog.events.EventTarget.call(this);
  this.interval_ = a || 1;
  this.timerObject_ = b || goog.Timer.defaultTimerObject;
  this.boundTick_ = goog.bind(this.tick_, this);
  this.last_ = goog.now()
};
goog.inherits(goog.Timer, goog.events.EventTarget);
goog.Timer.MAX_TIMEOUT_ = 2147483647;
goog.Timer.prototype.enabled = !1;
goog.Timer.defaultTimerObject = goog.global.window;
goog.Timer.intervalScale = 0.8;
goog.Timer.prototype.timer_ = null;
goog.Timer.prototype.getInterval = function() {
  return this.interval_
};
goog.Timer.prototype.setInterval = function(a) {
  this.interval_ = a;
  this.timer_ && this.enabled ? (this.stop(), this.start()) : this.timer_ && this.stop()
};
goog.Timer.prototype.tick_ = function() {
  if(this.enabled) {
    var a = goog.now() - this.last_;
    if(0 < a && a < this.interval_ * goog.Timer.intervalScale) {
      this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_ - a)
    }else {
      if(this.dispatchTick(), this.enabled) {
        this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_), this.last_ = goog.now()
      }
    }
  }
};
goog.Timer.prototype.dispatchTick = function() {
  this.dispatchEvent(goog.Timer.TICK)
};
goog.Timer.prototype.start = function() {
  this.enabled = !0;
  if(!this.timer_) {
    this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_), this.last_ = goog.now()
  }
};
goog.Timer.prototype.stop = function() {
  this.enabled = !1;
  if(this.timer_) {
    this.timerObject_.clearTimeout(this.timer_), this.timer_ = null
  }
};
goog.Timer.prototype.disposeInternal = function() {
  goog.Timer.superClass_.disposeInternal.call(this);
  this.stop();
  delete this.timerObject_
};
goog.Timer.TICK = "tick";
goog.Timer.callOnce = function(a, b, c) {
  if(goog.isFunction(a)) {
    c && (a = goog.bind(a, c))
  }else {
    if(a && "function" == typeof a.handleEvent) {
      a = goog.bind(a.handleEvent, a)
    }else {
      throw Error("Invalid listener argument");
    }
  }
  return b > goog.Timer.MAX_TIMEOUT_ ? -1 : goog.Timer.defaultTimerObject.setTimeout(a, b || 0)
};
goog.Timer.clear = function(a) {
  goog.Timer.defaultTimerObject.clearTimeout(a)
};
goog.date = {};
goog.date.weekDay = {MON:0, TUE:1, WED:2, THU:3, FRI:4, SAT:5, SUN:6};
goog.date.month = {JAN:0, FEB:1, MAR:2, APR:3, MAY:4, JUN:5, JUL:6, AUG:7, SEP:8, OCT:9, NOV:10, DEC:11};
goog.date.formatMonthAndYear = function(a, b) {
  return goog.getMsg("{$monthName} {$yearNum}", {monthName:a, yearNum:b})
};
goog.date.splitDateStringRegex_ = /^(\d{4})(?:(?:-?(\d{2})(?:-?(\d{2}))?)|(?:-?(\d{3}))|(?:-?W(\d{2})(?:-?([1-7]))?))?$/;
goog.date.splitTimeStringRegex_ = /^(\d{2})(?::?(\d{2})(?::?(\d{2})(\.\d+)?)?)?$/;
goog.date.splitTimezoneStringRegex_ = /Z|(?:([-+])(\d{2})(?::?(\d{2}))?)$/;
goog.date.splitDurationRegex_ = /^(-)?P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)D)?(T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+(?:\.\d+)?)S)?)?$/;
goog.date.isLeapYear = function(a) {
  return 0 == a % 4 && (0 != a % 100 || 0 == a % 400)
};
goog.date.isLongIsoYear = function(a) {
  var b = 5 * a + 12 - 4 * (Math.floor(a / 100) - Math.floor(a / 400)), b = b + (Math.floor((a - 100) / 400) - Math.floor((a - 102) / 400)), b = b + (Math.floor((a - 200) / 400) - Math.floor((a - 199) / 400));
  return 5 > b % 28
};
goog.date.getNumberOfDaysInMonth = function(a, b) {
  switch(b) {
    case goog.date.month.FEB:
      return goog.date.isLeapYear(a) ? 29 : 28;
    case goog.date.month.JUN:
    ;
    case goog.date.month.SEP:
    ;
    case goog.date.month.NOV:
    ;
    case goog.date.month.APR:
      return 30
  }
  return 31
};
goog.date.isSameDay = function(a, b) {
  var c = b || new Date;
  return a.getDate() == c.getDate() && goog.date.isSameMonth(a, c)
};
goog.date.isSameMonth = function(a, b) {
  var c = b || new Date;
  return a.getMonth() == c.getMonth() && goog.date.isSameYear(a, c)
};
goog.date.isSameYear = function(a, b) {
  var c = b || new Date;
  return a.getFullYear() == c.getFullYear()
};
goog.date.getWeekNumber = function(a, b, c, d, e) {
  a = new Date(a, b, c);
  d = d || goog.date.weekDay.THU;
  e = e || goog.date.weekDay.MON;
  b = ((a.getDay() + 6) % 7 - e + 7) % 7;
  e = a.valueOf() + 864E5 * ((d - e + 7) % 7 - b);
  d = (new Date((new Date(e)).getFullYear(), 0, 1)).valueOf();
  return Math.floor(Math.round((e - d) / 864E5) / 7) + 1
};
goog.date.fromIsoString = function(a) {
  var b = new goog.date.DateTime(2E3);
  return goog.date.setIso8601DateTime(b, a) ? b : null
};
goog.date.setIso8601DateTime = function(a, b) {
  var b = goog.string.trim(b), c = -1 == b.indexOf("T") ? " " : "T", c = b.split(c);
  return goog.date.setIso8601DateOnly_(a, c[0]) && (2 > c.length || goog.date.setIso8601TimeOnly_(a, c[1]))
};
goog.date.setIso8601DateOnly_ = function(a, b) {
  var c = b.match(goog.date.splitDateStringRegex_);
  if(!c) {
    return!1
  }
  var d = c[2], e = c[3], f = c[4], g = c[5], h = c[6] || 1;
  a.setFullYear(c[1]);
  f ? (a.setDate(1), a.setMonth(0), a.add(new goog.date.Interval(goog.date.Interval.DAYS, f - 1))) : g ? goog.date.setDateFromIso8601Week_(a, g, h) : (d && (a.setDate(1), a.setMonth(d - 1)), e && a.setDate(e));
  return!0
};
goog.date.setDateFromIso8601Week_ = function(a, b, c) {
  a.setMonth(0);
  a.setDate(1);
  var d = a.getDay() || 7, b = new goog.date.Interval(goog.date.Interval.DAYS, (4 >= d ? 1 - d : 8 - d) + (Number(c) + 7 * (Number(b) - 1)) - 1);
  a.add(b)
};
goog.date.setIso8601TimeOnly_ = function(a, b) {
  var c = b.match(goog.date.splitTimezoneStringRegex_), d = 0;
  c && ("Z" != c[0] && (d = 60 * c[2] + Number(c[3]), d *= "-" == c[1] ? 1 : -1), d -= a.getTimezoneOffset(), b = b.substr(0, b.length - c[0].length));
  c = b.match(goog.date.splitTimeStringRegex_);
  if(!c) {
    return!1
  }
  a.setHours(c[1]);
  a.setMinutes(c[2] || 0);
  a.setSeconds(c[3] || 0);
  a.setMilliseconds(c[4] ? 1E3 * c[4] : 0);
  0 != d && a.setTime(a.getTime() + 6E4 * d);
  return!0
};
goog.date.Interval = function(a, b, c, d, e, f) {
  goog.isString(a) ? (this.years = a == goog.date.Interval.YEARS ? b : 0, this.months = a == goog.date.Interval.MONTHS ? b : 0, this.days = a == goog.date.Interval.DAYS ? b : 0, this.hours = a == goog.date.Interval.HOURS ? b : 0, this.minutes = a == goog.date.Interval.MINUTES ? b : 0, this.seconds = a == goog.date.Interval.SECONDS ? b : 0) : (this.years = a || 0, this.months = b || 0, this.days = c || 0, this.hours = d || 0, this.minutes = e || 0, this.seconds = f || 0)
};
goog.date.Interval.fromIsoString = function(a) {
  a = a.match(goog.date.splitDurationRegex_);
  if(!a) {
    return null
  }
  var b = !(a[6] || a[7] || a[8]);
  if(b && !a[2] && !a[3] && !a[4] || b && a[5]) {
    return null
  }
  var b = a[1], c = parseInt(a[2], 10) || 0, d = parseInt(a[3], 10) || 0, e = parseInt(a[4], 10) || 0, f = parseInt(a[6], 10) || 0, g = parseInt(a[7], 10) || 0, a = parseFloat(a[8]) || 0;
  return b ? new goog.date.Interval(-c, -d, -e, -f, -g, -a) : new goog.date.Interval(c, d, e, f, g, a)
};
goog.date.Interval.prototype.toIsoString = function(a) {
  var b = Math.min(this.years, this.months, this.days, this.hours, this.minutes, this.seconds), c = Math.max(this.years, this.months, this.days, this.hours, this.minutes, this.seconds);
  if(0 > b && 0 < c) {
    return null
  }
  if(!a && 0 == b && 0 == c) {
    return"PT0S"
  }
  c = [];
  0 > b && c.push("-");
  c.push("P");
  (this.years || a) && c.push(Math.abs(this.years) + "Y");
  (this.months || a) && c.push(Math.abs(this.months) + "M");
  (this.days || a) && c.push(Math.abs(this.days) + "D");
  if(this.hours || this.minutes || this.seconds || a) {
    c.push("T"), (this.hours || a) && c.push(Math.abs(this.hours) + "H"), (this.minutes || a) && c.push(Math.abs(this.minutes) + "M"), (this.seconds || a) && c.push(Math.abs(this.seconds) + "S")
  }
  return c.join("")
};
goog.date.Interval.prototype.equals = function(a) {
  return a.years == this.years && a.months == this.months && a.days == this.days && a.hours == this.hours && a.minutes == this.minutes && a.seconds == this.seconds
};
goog.date.Interval.prototype.clone = function() {
  return new goog.date.Interval(this.years, this.months, this.days, this.hours, this.minutes, this.seconds)
};
goog.date.Interval.YEARS = "y";
goog.date.Interval.MONTHS = "m";
goog.date.Interval.DAYS = "d";
goog.date.Interval.HOURS = "h";
goog.date.Interval.MINUTES = "n";
goog.date.Interval.SECONDS = "s";
goog.date.Interval.prototype.getInverse = function() {
  return this.times(-1)
};
goog.date.Interval.prototype.times = function(a) {
  return new goog.date.Interval(this.years * a, this.months * a, this.days * a, this.hours * a, this.minutes * a, this.seconds * a)
};
goog.date.Interval.prototype.getTotalSeconds = function() {
  goog.asserts.assert(0 == this.years && 0 == this.months);
  return 60 * (60 * (24 * this.days + this.hours) + this.minutes) + this.seconds
};
goog.date.Interval.prototype.add = function(a) {
  this.years += a.years;
  this.months += a.months;
  this.days += a.days;
  this.hours += a.hours;
  this.minutes += a.minutes;
  this.seconds += a.seconds
};
goog.date.Date = function(a, b, c) {
  goog.isNumber(a) ? (this.date_ = new Date(a, b || 0, c || 1), this.maybeFixDst_(c || 1)) : goog.isObject(a) ? (this.date_ = new Date(a.getFullYear(), a.getMonth(), a.getDate()), this.maybeFixDst_(a.getDate())) : (this.date_ = new Date, this.date_.setHours(0), this.date_.setMinutes(0), this.date_.setSeconds(0), this.date_.setMilliseconds(0))
};
goog.date.Date.prototype.firstDayOfWeek_ = goog.date.weekDay.MON;
goog.date.Date.prototype.firstWeekCutOffDay_ = goog.date.weekDay.THU;
goog.date.Date.prototype.clone = function() {
  var a = new goog.date.Date(this.date_);
  a.firstDayOfWeek_ = this.firstDayOfWeek_;
  a.firstWeekCutOffDay_ = this.firstWeekCutOffDay_;
  return a
};
goog.date.Date.prototype.getFullYear = function() {
  return this.date_.getFullYear()
};
goog.date.Date.prototype.getYear = function() {
  return this.getFullYear()
};
goog.date.Date.prototype.getMonth = function() {
  return this.date_.getMonth()
};
goog.date.Date.prototype.getDate = function() {
  return this.date_.getDate()
};
goog.date.Date.prototype.getTime = function() {
  return this.date_.getTime()
};
goog.date.Date.prototype.getDay = function() {
  return this.date_.getDay()
};
goog.date.Date.prototype.getIsoWeekday = function() {
  return(this.getDay() + 6) % 7
};
goog.date.Date.prototype.getWeekday = function() {
  return(this.getIsoWeekday() - this.firstDayOfWeek_ + 7) % 7
};
goog.date.Date.prototype.getUTCFullYear = function() {
  return this.date_.getUTCFullYear()
};
goog.date.Date.prototype.getUTCMonth = function() {
  return this.date_.getUTCMonth()
};
goog.date.Date.prototype.getUTCDate = function() {
  return this.date_.getUTCDate()
};
goog.date.Date.prototype.getUTCDay = function() {
  return this.date_.getDay()
};
goog.date.Date.prototype.getUTCHours = function() {
  return this.date_.getUTCHours()
};
goog.date.Date.prototype.getUTCMinutes = function() {
  return this.date_.getUTCMinutes()
};
goog.date.Date.prototype.getUTCIsoWeekday = function() {
  return(this.date_.getUTCDay() + 6) % 7
};
goog.date.Date.prototype.getUTCWeekday = function() {
  return(this.getUTCIsoWeekday() - this.firstDayOfWeek_ + 7) % 7
};
goog.date.Date.prototype.getFirstDayOfWeek = function() {
  return this.firstDayOfWeek_
};
goog.date.Date.prototype.getFirstWeekCutOffDay = function() {
  return this.firstWeekCutOffDay_
};
goog.date.Date.prototype.getNumberOfDaysInMonth = function() {
  return goog.date.getNumberOfDaysInMonth(this.getFullYear(), this.getMonth())
};
goog.date.Date.prototype.getWeekNumber = function() {
  return goog.date.getWeekNumber(this.getFullYear(), this.getMonth(), this.getDate(), this.firstWeekCutOffDay_, this.firstDayOfWeek_)
};
goog.date.Date.prototype.getDayOfYear = function() {
  for(var a = this.getDate(), b = this.getFullYear(), c = this.getMonth() - 1;0 <= c;c--) {
    a += goog.date.getNumberOfDaysInMonth(b, c)
  }
  return a
};
goog.date.Date.prototype.getTimezoneOffset = function() {
  return this.date_.getTimezoneOffset()
};
goog.date.Date.prototype.getTimezoneOffsetString = function() {
  var a;
  a = this.getTimezoneOffset();
  if(0 == a) {
    a = "Z"
  }else {
    var b = Math.abs(a) / 60, c = Math.floor(b), b = 60 * (b - c);
    a = (0 < a ? "-" : "+") + goog.string.padNumber(c, 2) + ":" + goog.string.padNumber(b, 2)
  }
  return a
};
goog.date.Date.prototype.set = function(a) {
  this.date_ = new Date(a.getFullYear(), a.getMonth(), a.getDate())
};
goog.date.Date.prototype.setFullYear = function(a) {
  this.date_.setFullYear(a)
};
goog.date.Date.prototype.setYear = function(a) {
  this.setFullYear(a)
};
goog.date.Date.prototype.setMonth = function(a) {
  this.date_.setMonth(a)
};
goog.date.Date.prototype.setDate = function(a) {
  this.date_.setDate(a)
};
goog.date.Date.prototype.setTime = function(a) {
  this.date_.setTime(a)
};
goog.date.Date.prototype.setUTCFullYear = function(a) {
  this.date_.setUTCFullYear(a)
};
goog.date.Date.prototype.setUTCMonth = function(a) {
  this.date_.setUTCMonth(a)
};
goog.date.Date.prototype.setUTCDate = function(a) {
  this.date_.setUTCDate(a)
};
goog.date.Date.prototype.setFirstDayOfWeek = function(a) {
  this.firstDayOfWeek_ = a
};
goog.date.Date.prototype.setFirstWeekCutOffDay = function(a) {
  this.firstWeekCutOffDay_ = a
};
goog.date.Date.prototype.add = function(a) {
  if(a.years || a.months) {
    var b = this.getMonth() + a.months + 12 * a.years, c = this.getYear() + Math.floor(b / 12), b = b % 12;
    0 > b && (b += 12);
    var d = goog.date.getNumberOfDaysInMonth(c, b), d = Math.min(d, this.getDate());
    this.setDate(1);
    this.setFullYear(c);
    this.setMonth(b);
    this.setDate(d)
  }
  a.days && (b = new Date(this.getYear(), this.getMonth(), this.getDate(), 12), a = new Date(b.getTime() + 864E5 * a.days), this.setDate(1), this.setFullYear(a.getFullYear()), this.setMonth(a.getMonth()), this.setDate(a.getDate()), this.maybeFixDst_(a.getDate()))
};
goog.date.Date.prototype.toIsoString = function(a, b) {
  return[this.getFullYear(), goog.string.padNumber(this.getMonth() + 1, 2), goog.string.padNumber(this.getDate(), 2)].join(a ? "-" : "") + (b ? this.getTimezoneOffsetString() : "")
};
goog.date.Date.prototype.toUTCIsoString = function(a, b) {
  return[this.getUTCFullYear(), goog.string.padNumber(this.getUTCMonth() + 1, 2), goog.string.padNumber(this.getUTCDate(), 2)].join(a ? "-" : "") + (b ? "Z" : "")
};
goog.date.Date.prototype.equals = function(a) {
  return this.getYear() == a.getYear() && this.getMonth() == a.getMonth() && this.getDate() == a.getDate()
};
goog.date.Date.prototype.toString = function() {
  return this.toIsoString()
};
goog.date.Date.prototype.maybeFixDst_ = function(a) {
  this.getDate() != a && (a = this.getDate() < a ? 1 : -1, this.date_.setUTCHours(this.date_.getUTCHours() + a))
};
goog.date.Date.prototype.valueOf = function() {
  return this.date_.valueOf()
};
goog.date.DateTime = function(a, b, c, d, e, f, g) {
  this.date_ = goog.isNumber(a) ? new Date(a, b || 0, c || 1, d || 0, e || 0, f || 0, g || 0) : new Date(a ? a.getTime() : goog.now())
};
goog.inherits(goog.date.DateTime, goog.date.Date);
goog.date.DateTime.fromRfc822String = function(a) {
  a = new Date(a);
  return!isNaN(a.getTime()) ? new goog.date.DateTime(a) : null
};
goog.date.DateTime.prototype.getHours = function() {
  return this.date_.getHours()
};
goog.date.DateTime.prototype.getMinutes = function() {
  return this.date_.getMinutes()
};
goog.date.DateTime.prototype.getSeconds = function() {
  return this.date_.getSeconds()
};
goog.date.DateTime.prototype.getMilliseconds = function() {
  return this.date_.getMilliseconds()
};
goog.date.DateTime.prototype.getUTCDay = function() {
  return this.date_.getUTCDay()
};
goog.date.DateTime.prototype.getUTCHours = function() {
  return this.date_.getUTCHours()
};
goog.date.DateTime.prototype.getUTCMinutes = function() {
  return this.date_.getUTCMinutes()
};
goog.date.DateTime.prototype.getUTCSeconds = function() {
  return this.date_.getUTCSeconds()
};
goog.date.DateTime.prototype.getUTCMilliseconds = function() {
  return this.date_.getUTCMilliseconds()
};
goog.date.DateTime.prototype.setHours = function(a) {
  this.date_.setHours(a)
};
goog.date.DateTime.prototype.setMinutes = function(a) {
  this.date_.setMinutes(a)
};
goog.date.DateTime.prototype.setSeconds = function(a) {
  this.date_.setSeconds(a)
};
goog.date.DateTime.prototype.setMilliseconds = function(a) {
  this.date_.setMilliseconds(a)
};
goog.date.DateTime.prototype.setUTCHours = function(a) {
  this.date_.setUTCHours(a)
};
goog.date.DateTime.prototype.setUTCMinutes = function(a) {
  this.date_.setUTCMinutes(a)
};
goog.date.DateTime.prototype.setUTCSeconds = function(a) {
  this.date_.setUTCSeconds(a)
};
goog.date.DateTime.prototype.setUTCMilliseconds = function(a) {
  this.date_.setUTCMilliseconds(a)
};
goog.date.DateTime.prototype.add = function(a) {
  goog.date.Date.prototype.add.call(this, a);
  a.hours && this.setHours(this.date_.getHours() + a.hours);
  a.minutes && this.setMinutes(this.date_.getMinutes() + a.minutes);
  a.seconds && this.setSeconds(this.date_.getSeconds() + a.seconds)
};
goog.date.DateTime.prototype.toIsoString = function(a, b) {
  var c = goog.date.Date.prototype.toIsoString.call(this, a);
  return a ? c + " " + goog.string.padNumber(this.getHours(), 2) + ":" + goog.string.padNumber(this.getMinutes(), 2) + ":" + goog.string.padNumber(this.getSeconds(), 2) + (b ? this.getTimezoneOffsetString() : "") : c + "T" + goog.string.padNumber(this.getHours(), 2) + goog.string.padNumber(this.getMinutes(), 2) + goog.string.padNumber(this.getSeconds(), 2) + (b ? this.getTimezoneOffsetString() : "")
};
goog.date.DateTime.prototype.toXmlDateTime = function(a) {
  return goog.date.Date.prototype.toIsoString.call(this, !0) + "T" + goog.string.padNumber(this.getHours(), 2) + ":" + goog.string.padNumber(this.getMinutes(), 2) + ":" + goog.string.padNumber(this.getSeconds(), 2) + (a ? this.getTimezoneOffsetString() : "")
};
goog.date.DateTime.prototype.toUTCIsoString = function(a, b) {
  var c = goog.date.Date.prototype.toUTCIsoString.call(this, a);
  return a ? c + " " + goog.string.padNumber(this.getUTCHours(), 2) + ":" + goog.string.padNumber(this.getUTCMinutes(), 2) + ":" + goog.string.padNumber(this.getUTCSeconds(), 2) + (b ? "Z" : "") : c + "T" + goog.string.padNumber(this.getUTCHours(), 2) + goog.string.padNumber(this.getUTCMinutes(), 2) + goog.string.padNumber(this.getUTCSeconds(), 2) + (b ? "Z" : "")
};
goog.date.DateTime.prototype.equals = function(a) {
  return this.getTime() == a.getTime()
};
goog.date.DateTime.prototype.toString = function() {
  return this.toIsoString()
};
goog.date.DateTime.prototype.toUsTimeString = function(a, b, c) {
  var d = this.getHours();
  goog.isDef(b) || (b = !0);
  var e = 12 == d;
  12 < d && (d -= 12, e = !0);
  0 == d && b && (d = 12);
  a = a ? goog.string.padNumber(d, 2) : "" + d;
  d = this.getMinutes();
  if(!c || 0 < d) {
    a += ":" + goog.string.padNumber(d, 2)
  }
  b && (b = goog.getMsg("am"), c = goog.getMsg("pm"), a += e ? c : b);
  return a
};
goog.date.DateTime.prototype.toIsoTimeString = function(a) {
  var b = this.getHours(), b = goog.string.padNumber(b, 2) + ":" + goog.string.padNumber(this.getMinutes(), 2);
  if(!goog.isDef(a) || a) {
    b += ":" + goog.string.padNumber(this.getSeconds(), 2)
  }
  return b
};
goog.date.DateTime.prototype.clone = function() {
  var a = new goog.date.DateTime(this.date_);
  a.setFirstDayOfWeek(this.getFirstDayOfWeek());
  a.setFirstWeekCutOffDay(this.getFirstWeekCutOffDay());
  return a
};
goog.string.StringBuffer = function(a, b) {
  this.buffer_ = goog.userAgent.jscript.HAS_JSCRIPT ? [] : "";
  null != a && this.append.apply(this, arguments)
};
goog.string.StringBuffer.prototype.set = function(a) {
  this.clear();
  this.append(a)
};
goog.userAgent.jscript.HAS_JSCRIPT ? (goog.string.StringBuffer.prototype.bufferLength_ = 0, goog.string.StringBuffer.prototype.append = function(a, b, c) {
  null == b ? this.buffer_[this.bufferLength_++] = a : (this.buffer_.push.apply(this.buffer_, arguments), this.bufferLength_ = this.buffer_.length);
  return this
}) : goog.string.StringBuffer.prototype.append = function(a, b, c) {
  this.buffer_ += a;
  if(null != b) {
    for(var d = 1;d < arguments.length;d++) {
      this.buffer_ += arguments[d]
    }
  }
  return this
};
goog.string.StringBuffer.prototype.clear = function() {
  goog.userAgent.jscript.HAS_JSCRIPT ? this.bufferLength_ = this.buffer_.length = 0 : this.buffer_ = ""
};
goog.string.StringBuffer.prototype.getLength = function() {
  return this.toString().length
};
goog.string.StringBuffer.prototype.toString = function() {
  if(goog.userAgent.jscript.HAS_JSCRIPT) {
    var a = this.buffer_.join("");
    this.clear();
    a && this.append(a);
    return a
  }
  return this.buffer_
};
var cljs = {core:{}};
cljs.core._STAR_print_fn_STAR_ = function() {
  throw Error("No *print-fn* fn set for evaluation environment");
};
cljs.core.truth_ = function(a) {
  return null != a && !1 !== a
};
cljs.core.type_satisfies_ = function(a, b) {
  var c = a[goog.typeOf.call(null, b)];
  if(cljs.core.truth_(c)) {
    return c
  }
  c = a._;
  return cljs.core.truth_(c) ? c : !1
};
cljs.core.is_proto_ = function(a) {
  return a.constructor.prototype === a
};
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = function(a, b) {
  return Error.call(null, "No protocol method " + a + " defined for type " + goog.typeOf.call(null, b) + ": " + b)
};
cljs.core.aclone = function(a) {
  return Array.prototype.slice.call(a)
};
cljs.core.array = function(a) {
  return Array.prototype.slice.call(arguments)
};
cljs.core.aget = function(a, b) {
  return a[b]
};
cljs.core.aset = function(a, b, c) {
  return a[b] = c
};
cljs.core.alength = function(a) {
  return a.length
};
cljs.core.IFn = {};
cljs.core._invoke = function() {
  var a = null;
  return function(a, c, d, e, f, g, h, i, j, k, m, l, n, o, q, p, r, s, t, u, la) {
    switch(arguments.length) {
      case 1:
        var v;
        if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IFn$_invoke : a)) {
          v = a.cljs$core$IFn$_invoke(a)
        }else {
          var w;
          var ma = cljs.core._invoke[goog.typeOf.call(null, a)];
          if(cljs.core.truth_(ma)) {
            w = ma
          }else {
            var na = cljs.core._invoke._;
            if(cljs.core.truth_(na)) {
              w = na
            }else {
              throw cljs.core.missing_protocol.call(null, "IFn.-invoke", a);
            }
          }
          v = w.call(null, a)
        }
        return v;
      case 2:
        var x;
        if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IFn$_invoke : a)) {
          x = a.cljs$core$IFn$_invoke(a, c)
        }else {
          var y;
          var oa = cljs.core._invoke[goog.typeOf.call(null, a)];
          if(cljs.core.truth_(oa)) {
            y = oa
          }else {
            var pa = cljs.core._invoke._;
            if(cljs.core.truth_(pa)) {
              y = pa
            }else {
              throw cljs.core.missing_protocol.call(null, "IFn.-invoke", a);
            }
          }
          x = y.call(null, a, c)
        }
        return x;
      case 3:
        var z;
        if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IFn$_invoke : a)) {
          z = a.cljs$core$IFn$_invoke(a, c, d)
        }else {
          var A;
          var qa = cljs.core._invoke[goog.typeOf.call(null, a)];
          if(cljs.core.truth_(qa)) {
            A = qa
          }else {
            var ra = cljs.core._invoke._;
            if(cljs.core.truth_(ra)) {
              A = ra
            }else {
              throw cljs.core.missing_protocol.call(null, "IFn.-invoke", a);
            }
          }
          z = A.call(null, a, c, d)
        }
        return z;
      case 4:
        var B;
        if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IFn$_invoke : a)) {
          B = a.cljs$core$IFn$_invoke(a, c, d, e)
        }else {
          var C;
          var sa = cljs.core._invoke[goog.typeOf.call(null, a)];
          if(cljs.core.truth_(sa)) {
            C = sa
          }else {
            var ta = cljs.core._invoke._;
            if(cljs.core.truth_(ta)) {
              C = ta
            }else {
              throw cljs.core.missing_protocol.call(null, "IFn.-invoke", a);
            }
          }
          B = C.call(null, a, c, d, e)
        }
        return B;
      case 5:
        var D;
        if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IFn$_invoke : a)) {
          D = a.cljs$core$IFn$_invoke(a, c, d, e, f)
        }else {
          var E;
          var ua = cljs.core._invoke[goog.typeOf.call(null, a)];
          if(cljs.core.truth_(ua)) {
            E = ua
          }else {
            var va = cljs.core._invoke._;
            if(cljs.core.truth_(va)) {
              E = va
            }else {
              throw cljs.core.missing_protocol.call(null, "IFn.-invoke", a);
            }
          }
          D = E.call(null, a, c, d, e, f)
        }
        return D;
      case 6:
        var F;
        if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IFn$_invoke : a)) {
          F = a.cljs$core$IFn$_invoke(a, c, d, e, f, g)
        }else {
          var G;
          var wa = cljs.core._invoke[goog.typeOf.call(null, a)];
          if(cljs.core.truth_(wa)) {
            G = wa
          }else {
            var xa = cljs.core._invoke._;
            if(cljs.core.truth_(xa)) {
              G = xa
            }else {
              throw cljs.core.missing_protocol.call(null, "IFn.-invoke", a);
            }
          }
          F = G.call(null, a, c, d, e, f, g)
        }
        return F;
      case 7:
        var H;
        if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IFn$_invoke : a)) {
          H = a.cljs$core$IFn$_invoke(a, c, d, e, f, g, h)
        }else {
          var I;
          var ya = cljs.core._invoke[goog.typeOf.call(null, a)];
          if(cljs.core.truth_(ya)) {
            I = ya
          }else {
            var za = cljs.core._invoke._;
            if(cljs.core.truth_(za)) {
              I = za
            }else {
              throw cljs.core.missing_protocol.call(null, "IFn.-invoke", a);
            }
          }
          H = I.call(null, a, c, d, e, f, g, h)
        }
        return H;
      case 8:
        var J;
        if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IFn$_invoke : a)) {
          J = a.cljs$core$IFn$_invoke(a, c, d, e, f, g, h, i)
        }else {
          var K;
          var Aa = cljs.core._invoke[goog.typeOf.call(null, a)];
          if(cljs.core.truth_(Aa)) {
            K = Aa
          }else {
            var Ba = cljs.core._invoke._;
            if(cljs.core.truth_(Ba)) {
              K = Ba
            }else {
              throw cljs.core.missing_protocol.call(null, "IFn.-invoke", a);
            }
          }
          J = K.call(null, a, c, d, e, f, g, h, i)
        }
        return J;
      case 9:
        var L;
        if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IFn$_invoke : a)) {
          L = a.cljs$core$IFn$_invoke(a, c, d, e, f, g, h, i, j)
        }else {
          var M;
          var Ca = cljs.core._invoke[goog.typeOf.call(null, a)];
          if(cljs.core.truth_(Ca)) {
            M = Ca
          }else {
            var Da = cljs.core._invoke._;
            if(cljs.core.truth_(Da)) {
              M = Da
            }else {
              throw cljs.core.missing_protocol.call(null, "IFn.-invoke", a);
            }
          }
          L = M.call(null, a, c, d, e, f, g, h, i, j)
        }
        return L;
      case 10:
        var N;
        if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IFn$_invoke : a)) {
          N = a.cljs$core$IFn$_invoke(a, c, d, e, f, g, h, i, j, k)
        }else {
          var O;
          var Ea = cljs.core._invoke[goog.typeOf.call(null, a)];
          if(cljs.core.truth_(Ea)) {
            O = Ea
          }else {
            var Fa = cljs.core._invoke._;
            if(cljs.core.truth_(Fa)) {
              O = Fa
            }else {
              throw cljs.core.missing_protocol.call(null, "IFn.-invoke", a);
            }
          }
          N = O.call(null, a, c, d, e, f, g, h, i, j, k)
        }
        return N;
      case 11:
        var P;
        if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IFn$_invoke : a)) {
          P = a.cljs$core$IFn$_invoke(a, c, d, e, f, g, h, i, j, k, m)
        }else {
          var Q;
          var Ga = cljs.core._invoke[goog.typeOf.call(null, a)];
          if(cljs.core.truth_(Ga)) {
            Q = Ga
          }else {
            var Ha = cljs.core._invoke._;
            if(cljs.core.truth_(Ha)) {
              Q = Ha
            }else {
              throw cljs.core.missing_protocol.call(null, "IFn.-invoke", a);
            }
          }
          P = Q.call(null, a, c, d, e, f, g, h, i, j, k, m)
        }
        return P;
      case 12:
        var R;
        if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IFn$_invoke : a)) {
          R = a.cljs$core$IFn$_invoke(a, c, d, e, f, g, h, i, j, k, m, l)
        }else {
          var S;
          var Ia = cljs.core._invoke[goog.typeOf.call(null, a)];
          if(cljs.core.truth_(Ia)) {
            S = Ia
          }else {
            var Ja = cljs.core._invoke._;
            if(cljs.core.truth_(Ja)) {
              S = Ja
            }else {
              throw cljs.core.missing_protocol.call(null, "IFn.-invoke", a);
            }
          }
          R = S.call(null, a, c, d, e, f, g, h, i, j, k, m, l)
        }
        return R;
      case 13:
        var T;
        if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IFn$_invoke : a)) {
          T = a.cljs$core$IFn$_invoke(a, c, d, e, f, g, h, i, j, k, m, l, n)
        }else {
          var U;
          var Ka = cljs.core._invoke[goog.typeOf.call(null, a)];
          if(cljs.core.truth_(Ka)) {
            U = Ka
          }else {
            var La = cljs.core._invoke._;
            if(cljs.core.truth_(La)) {
              U = La
            }else {
              throw cljs.core.missing_protocol.call(null, "IFn.-invoke", a);
            }
          }
          T = U.call(null, a, c, d, e, f, g, h, i, j, k, m, l, n)
        }
        return T;
      case 14:
        var V;
        if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IFn$_invoke : a)) {
          V = a.cljs$core$IFn$_invoke(a, c, d, e, f, g, h, i, j, k, m, l, n, o)
        }else {
          var W;
          var Ma = cljs.core._invoke[goog.typeOf.call(null, a)];
          if(cljs.core.truth_(Ma)) {
            W = Ma
          }else {
            var Na = cljs.core._invoke._;
            if(cljs.core.truth_(Na)) {
              W = Na
            }else {
              throw cljs.core.missing_protocol.call(null, "IFn.-invoke", a);
            }
          }
          V = W.call(null, a, c, d, e, f, g, h, i, j, k, m, l, n, o)
        }
        return V;
      case 15:
        var X;
        if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IFn$_invoke : a)) {
          X = a.cljs$core$IFn$_invoke(a, c, d, e, f, g, h, i, j, k, m, l, n, o, q)
        }else {
          var Y;
          var Oa = cljs.core._invoke[goog.typeOf.call(null, a)];
          if(cljs.core.truth_(Oa)) {
            Y = Oa
          }else {
            var Pa = cljs.core._invoke._;
            if(cljs.core.truth_(Pa)) {
              Y = Pa
            }else {
              throw cljs.core.missing_protocol.call(null, "IFn.-invoke", a);
            }
          }
          X = Y.call(null, a, c, d, e, f, g, h, i, j, k, m, l, n, o, q)
        }
        return X;
      case 16:
        var Z;
        if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IFn$_invoke : a)) {
          Z = a.cljs$core$IFn$_invoke(a, c, d, e, f, g, h, i, j, k, m, l, n, o, q, p)
        }else {
          var aa;
          var Qa = cljs.core._invoke[goog.typeOf.call(null, a)];
          if(cljs.core.truth_(Qa)) {
            aa = Qa
          }else {
            var Ra = cljs.core._invoke._;
            if(cljs.core.truth_(Ra)) {
              aa = Ra
            }else {
              throw cljs.core.missing_protocol.call(null, "IFn.-invoke", a);
            }
          }
          Z = aa.call(null, a, c, d, e, f, g, h, i, j, k, m, l, n, o, q, p)
        }
        return Z;
      case 17:
        var ba;
        if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IFn$_invoke : a)) {
          ba = a.cljs$core$IFn$_invoke(a, c, d, e, f, g, h, i, j, k, m, l, n, o, q, p, r)
        }else {
          var ca;
          var Sa = cljs.core._invoke[goog.typeOf.call(null, a)];
          if(cljs.core.truth_(Sa)) {
            ca = Sa
          }else {
            var Ta = cljs.core._invoke._;
            if(cljs.core.truth_(Ta)) {
              ca = Ta
            }else {
              throw cljs.core.missing_protocol.call(null, "IFn.-invoke", a);
            }
          }
          ba = ca.call(null, a, c, d, e, f, g, h, i, j, k, m, l, n, o, q, p, r)
        }
        return ba;
      case 18:
        var da;
        if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IFn$_invoke : a)) {
          da = a.cljs$core$IFn$_invoke(a, c, d, e, f, g, h, i, j, k, m, l, n, o, q, p, r, s)
        }else {
          var ea;
          var Ua = cljs.core._invoke[goog.typeOf.call(null, a)];
          if(cljs.core.truth_(Ua)) {
            ea = Ua
          }else {
            var Va = cljs.core._invoke._;
            if(cljs.core.truth_(Va)) {
              ea = Va
            }else {
              throw cljs.core.missing_protocol.call(null, "IFn.-invoke", a);
            }
          }
          da = ea.call(null, a, c, d, e, f, g, h, i, j, k, m, l, n, o, q, p, r, s)
        }
        return da;
      case 19:
        var fa;
        if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IFn$_invoke : a)) {
          fa = a.cljs$core$IFn$_invoke(a, c, d, e, f, g, h, i, j, k, m, l, n, o, q, p, r, s, t)
        }else {
          var ga;
          var Wa = cljs.core._invoke[goog.typeOf.call(null, a)];
          if(cljs.core.truth_(Wa)) {
            ga = Wa
          }else {
            var Xa = cljs.core._invoke._;
            if(cljs.core.truth_(Xa)) {
              ga = Xa
            }else {
              throw cljs.core.missing_protocol.call(null, "IFn.-invoke", a);
            }
          }
          fa = ga.call(null, a, c, d, e, f, g, h, i, j, k, m, l, n, o, q, p, r, s, t)
        }
        return fa;
      case 20:
        var ha;
        if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IFn$_invoke : a)) {
          ha = a.cljs$core$IFn$_invoke(a, c, d, e, f, g, h, i, j, k, m, l, n, o, q, p, r, s, t, u)
        }else {
          var ia;
          var Ya = cljs.core._invoke[goog.typeOf.call(null, a)];
          if(cljs.core.truth_(Ya)) {
            ia = Ya
          }else {
            var Za = cljs.core._invoke._;
            if(cljs.core.truth_(Za)) {
              ia = Za
            }else {
              throw cljs.core.missing_protocol.call(null, "IFn.-invoke", a);
            }
          }
          ha = ia.call(null, a, c, d, e, f, g, h, i, j, k, m, l, n, o, q, p, r, s, t, u)
        }
        return ha;
      case 21:
        var ja;
        if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IFn$_invoke : a)) {
          ja = a.cljs$core$IFn$_invoke(a, c, d, e, f, g, h, i, j, k, m, l, n, o, q, p, r, s, t, u, la)
        }else {
          var ka;
          var $a = cljs.core._invoke[goog.typeOf.call(null, a)];
          if(cljs.core.truth_($a)) {
            ka = $a
          }else {
            var ab = cljs.core._invoke._;
            if(cljs.core.truth_(ab)) {
              ka = ab
            }else {
              throw cljs.core.missing_protocol.call(null, "IFn.-invoke", a);
            }
          }
          ja = ka.call(null, a, c, d, e, f, g, h, i, j, k, m, l, n, o, q, p, r, s, t, u, la)
        }
        return ja
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.ICounted = {};
cljs.core._count = function(a) {
  if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$ICounted$_count : a)) {
    a = a.cljs$core$ICounted$_count(a)
  }else {
    var b;
    b = cljs.core._count[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(b) && (b = cljs.core._count._, !cljs.core.truth_(b))) {
      throw cljs.core.missing_protocol.call(null, "ICounted.-count", a);
    }
    a = b.call(null, a)
  }
  return a
};
cljs.core.IEmptyableCollection = {};
cljs.core._empty = function(a) {
  if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IEmptyableCollection$_empty : a)) {
    a = a.cljs$core$IEmptyableCollection$_empty(a)
  }else {
    var b;
    b = cljs.core._empty[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(b) && (b = cljs.core._empty._, !cljs.core.truth_(b))) {
      throw cljs.core.missing_protocol.call(null, "IEmptyableCollection.-empty", a);
    }
    a = b.call(null, a)
  }
  return a
};
cljs.core.ICollection = {};
cljs.core._conj = function(a, b) {
  var c;
  if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$ICollection$_conj : a)) {
    c = a.cljs$core$ICollection$_conj(a, b)
  }else {
    c = cljs.core._conj[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(c) && (c = cljs.core._conj._, !cljs.core.truth_(c))) {
      throw cljs.core.missing_protocol.call(null, "ICollection.-conj", a);
    }
    c = c.call(null, a, b)
  }
  return c
};
cljs.core.IIndexed = {};
cljs.core._nth = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        var e;
        if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IIndexed$_nth : a)) {
          e = a.cljs$core$IIndexed$_nth(a, c)
        }else {
          e = cljs.core._nth[goog.typeOf.call(null, a)];
          if(!cljs.core.truth_(e) && (e = cljs.core._nth._, !cljs.core.truth_(e))) {
            throw cljs.core.missing_protocol.call(null, "IIndexed.-nth", a);
          }
          e = e.call(null, a, c)
        }
        return e;
      case 3:
        if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IIndexed$_nth : a)) {
          e = a.cljs$core$IIndexed$_nth(a, c, d)
        }else {
          e = cljs.core._nth[goog.typeOf.call(null, a)];
          if(!cljs.core.truth_(e) && (e = cljs.core._nth._, !cljs.core.truth_(e))) {
            throw cljs.core.missing_protocol.call(null, "IIndexed.-nth", a);
          }
          e = e.call(null, a, c, d)
        }
        return e
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.ISeq = {};
cljs.core._first = function(a) {
  if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$ISeq$_first : a)) {
    a = a.cljs$core$ISeq$_first(a)
  }else {
    var b;
    b = cljs.core._first[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(b) && (b = cljs.core._first._, !cljs.core.truth_(b))) {
      throw cljs.core.missing_protocol.call(null, "ISeq.-first", a);
    }
    a = b.call(null, a)
  }
  return a
};
cljs.core._rest = function(a) {
  if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$ISeq$_rest : a)) {
    a = a.cljs$core$ISeq$_rest(a)
  }else {
    var b;
    b = cljs.core._rest[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(b) && (b = cljs.core._rest._, !cljs.core.truth_(b))) {
      throw cljs.core.missing_protocol.call(null, "ISeq.-rest", a);
    }
    a = b.call(null, a)
  }
  return a
};
cljs.core.ILookup = {};
cljs.core._lookup = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        var e;
        if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$ILookup$_lookup : a)) {
          e = a.cljs$core$ILookup$_lookup(a, c)
        }else {
          e = cljs.core._lookup[goog.typeOf.call(null, a)];
          if(!cljs.core.truth_(e) && (e = cljs.core._lookup._, !cljs.core.truth_(e))) {
            throw cljs.core.missing_protocol.call(null, "ILookup.-lookup", a);
          }
          e = e.call(null, a, c)
        }
        return e;
      case 3:
        if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$ILookup$_lookup : a)) {
          e = a.cljs$core$ILookup$_lookup(a, c, d)
        }else {
          e = cljs.core._lookup[goog.typeOf.call(null, a)];
          if(!cljs.core.truth_(e) && (e = cljs.core._lookup._, !cljs.core.truth_(e))) {
            throw cljs.core.missing_protocol.call(null, "ILookup.-lookup", a);
          }
          e = e.call(null, a, c, d)
        }
        return e
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = function(a, b) {
  var c;
  if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IAssociative$_contains_key_QMARK_ : a)) {
    c = a.cljs$core$IAssociative$_contains_key_QMARK_(a, b)
  }else {
    c = cljs.core._contains_key_QMARK_[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(c) && (c = cljs.core._contains_key_QMARK_._, !cljs.core.truth_(c))) {
      throw cljs.core.missing_protocol.call(null, "IAssociative.-contains-key?", a);
    }
    c = c.call(null, a, b)
  }
  return c
};
cljs.core._assoc = function(a, b, c) {
  if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IAssociative$_assoc : a)) {
    a = a.cljs$core$IAssociative$_assoc(a, b, c)
  }else {
    var d;
    d = cljs.core._assoc[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(d) && (d = cljs.core._assoc._, !cljs.core.truth_(d))) {
      throw cljs.core.missing_protocol.call(null, "IAssociative.-assoc", a);
    }
    a = d.call(null, a, b, c)
  }
  return a
};
cljs.core.IMap = {};
cljs.core._dissoc = function(a, b) {
  var c;
  if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IMap$_dissoc : a)) {
    c = a.cljs$core$IMap$_dissoc(a, b)
  }else {
    c = cljs.core._dissoc[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(c) && (c = cljs.core._dissoc._, !cljs.core.truth_(c))) {
      throw cljs.core.missing_protocol.call(null, "IMap.-dissoc", a);
    }
    c = c.call(null, a, b)
  }
  return c
};
cljs.core.ISet = {};
cljs.core._disjoin = function(a, b) {
  var c;
  if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$ISet$_disjoin : a)) {
    c = a.cljs$core$ISet$_disjoin(a, b)
  }else {
    c = cljs.core._disjoin[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(c) && (c = cljs.core._disjoin._, !cljs.core.truth_(c))) {
      throw cljs.core.missing_protocol.call(null, "ISet.-disjoin", a);
    }
    c = c.call(null, a, b)
  }
  return c
};
cljs.core.IStack = {};
cljs.core._peek = function(a) {
  if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IStack$_peek : a)) {
    a = a.cljs$core$IStack$_peek(a)
  }else {
    var b;
    b = cljs.core._peek[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(b) && (b = cljs.core._peek._, !cljs.core.truth_(b))) {
      throw cljs.core.missing_protocol.call(null, "IStack.-peek", a);
    }
    a = b.call(null, a)
  }
  return a
};
cljs.core._pop = function(a) {
  if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IStack$_pop : a)) {
    a = a.cljs$core$IStack$_pop(a)
  }else {
    var b;
    b = cljs.core._pop[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(b) && (b = cljs.core._pop._, !cljs.core.truth_(b))) {
      throw cljs.core.missing_protocol.call(null, "IStack.-pop", a);
    }
    a = b.call(null, a)
  }
  return a
};
cljs.core.IVector = {};
cljs.core._assoc_n = function(a, b, c) {
  if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IVector$_assoc_n : a)) {
    a = a.cljs$core$IVector$_assoc_n(a, b, c)
  }else {
    var d;
    d = cljs.core._assoc_n[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(d) && (d = cljs.core._assoc_n._, !cljs.core.truth_(d))) {
      throw cljs.core.missing_protocol.call(null, "IVector.-assoc-n", a);
    }
    a = d.call(null, a, b, c)
  }
  return a
};
cljs.core.IDeref = {};
cljs.core._deref = function(a) {
  if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IDeref$_deref : a)) {
    a = a.cljs$core$IDeref$_deref(a)
  }else {
    var b;
    b = cljs.core._deref[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(b) && (b = cljs.core._deref._, !cljs.core.truth_(b))) {
      throw cljs.core.missing_protocol.call(null, "IDeref.-deref", a);
    }
    a = b.call(null, a)
  }
  return a
};
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = function(a, b, c) {
  if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IDerefWithTimeout$_deref_with_timeout : a)) {
    a = a.cljs$core$IDerefWithTimeout$_deref_with_timeout(a, b, c)
  }else {
    var d;
    d = cljs.core._deref_with_timeout[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(d) && (d = cljs.core._deref_with_timeout._, !cljs.core.truth_(d))) {
      throw cljs.core.missing_protocol.call(null, "IDerefWithTimeout.-deref-with-timeout", a);
    }
    a = d.call(null, a, b, c)
  }
  return a
};
cljs.core.IMeta = {};
cljs.core._meta = function(a) {
  if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IMeta$_meta : a)) {
    a = a.cljs$core$IMeta$_meta(a)
  }else {
    var b;
    b = cljs.core._meta[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(b) && (b = cljs.core._meta._, !cljs.core.truth_(b))) {
      throw cljs.core.missing_protocol.call(null, "IMeta.-meta", a);
    }
    a = b.call(null, a)
  }
  return a
};
cljs.core.IWithMeta = {};
cljs.core._with_meta = function(a, b) {
  var c;
  if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IWithMeta$_with_meta : a)) {
    c = a.cljs$core$IWithMeta$_with_meta(a, b)
  }else {
    c = cljs.core._with_meta[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(c) && (c = cljs.core._with_meta._, !cljs.core.truth_(c))) {
      throw cljs.core.missing_protocol.call(null, "IWithMeta.-with-meta", a);
    }
    c = c.call(null, a, b)
  }
  return c
};
cljs.core.IReduce = {};
cljs.core._reduce = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        var e;
        if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IReduce$_reduce : a)) {
          e = a.cljs$core$IReduce$_reduce(a, c)
        }else {
          e = cljs.core._reduce[goog.typeOf.call(null, a)];
          if(!cljs.core.truth_(e) && (e = cljs.core._reduce._, !cljs.core.truth_(e))) {
            throw cljs.core.missing_protocol.call(null, "IReduce.-reduce", a);
          }
          e = e.call(null, a, c)
        }
        return e;
      case 3:
        if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IReduce$_reduce : a)) {
          e = a.cljs$core$IReduce$_reduce(a, c, d)
        }else {
          e = cljs.core._reduce[goog.typeOf.call(null, a)];
          if(!cljs.core.truth_(e) && (e = cljs.core._reduce._, !cljs.core.truth_(e))) {
            throw cljs.core.missing_protocol.call(null, "IReduce.-reduce", a);
          }
          e = e.call(null, a, c, d)
        }
        return e
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.IEquiv = {};
cljs.core._equiv = function(a, b) {
  var c;
  if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IEquiv$_equiv : a)) {
    c = a.cljs$core$IEquiv$_equiv(a, b)
  }else {
    c = cljs.core._equiv[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(c) && (c = cljs.core._equiv._, !cljs.core.truth_(c))) {
      throw cljs.core.missing_protocol.call(null, "IEquiv.-equiv", a);
    }
    c = c.call(null, a, b)
  }
  return c
};
cljs.core.IHash = {};
cljs.core._hash = function(a) {
  if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IHash$_hash : a)) {
    a = a.cljs$core$IHash$_hash(a)
  }else {
    var b;
    b = cljs.core._hash[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(b) && (b = cljs.core._hash._, !cljs.core.truth_(b))) {
      throw cljs.core.missing_protocol.call(null, "IHash.-hash", a);
    }
    a = b.call(null, a)
  }
  return a
};
cljs.core.ISeqable = {};
cljs.core._seq = function(a) {
  if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$ISeqable$_seq : a)) {
    a = a.cljs$core$ISeqable$_seq(a)
  }else {
    var b;
    b = cljs.core._seq[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(b) && (b = cljs.core._seq._, !cljs.core.truth_(b))) {
      throw cljs.core.missing_protocol.call(null, "ISeqable.-seq", a);
    }
    a = b.call(null, a)
  }
  return a
};
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = function(a, b) {
  var c;
  if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IPrintable$_pr_seq : a)) {
    c = a.cljs$core$IPrintable$_pr_seq(a, b)
  }else {
    c = cljs.core._pr_seq[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(c) && (c = cljs.core._pr_seq._, !cljs.core.truth_(c))) {
      throw cljs.core.missing_protocol.call(null, "IPrintable.-pr-seq", a);
    }
    c = c.call(null, a, b)
  }
  return c
};
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = function(a) {
  if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IPending$_realized_QMARK_ : a)) {
    a = a.cljs$core$IPending$_realized_QMARK_(a)
  }else {
    var b;
    b = cljs.core._realized_QMARK_[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(b) && (b = cljs.core._realized_QMARK_._, !cljs.core.truth_(b))) {
      throw cljs.core.missing_protocol.call(null, "IPending.-realized?", a);
    }
    a = b.call(null, a)
  }
  return a
};
cljs.core.IWatchable = {};
cljs.core._notify_watches = function(a, b, c) {
  if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IWatchable$_notify_watches : a)) {
    a = a.cljs$core$IWatchable$_notify_watches(a, b, c)
  }else {
    var d;
    d = cljs.core._notify_watches[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(d) && (d = cljs.core._notify_watches._, !cljs.core.truth_(d))) {
      throw cljs.core.missing_protocol.call(null, "IWatchable.-notify-watches", a);
    }
    a = d.call(null, a, b, c)
  }
  return a
};
cljs.core._add_watch = function(a, b, c) {
  if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IWatchable$_add_watch : a)) {
    a = a.cljs$core$IWatchable$_add_watch(a, b, c)
  }else {
    var d;
    d = cljs.core._add_watch[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(d) && (d = cljs.core._add_watch._, !cljs.core.truth_(d))) {
      throw cljs.core.missing_protocol.call(null, "IWatchable.-add-watch", a);
    }
    a = d.call(null, a, b, c)
  }
  return a
};
cljs.core._remove_watch = function(a, b) {
  var c;
  if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IWatchable$_remove_watch : a)) {
    c = a.cljs$core$IWatchable$_remove_watch(a, b)
  }else {
    c = cljs.core._remove_watch[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(c) && (c = cljs.core._remove_watch._, !cljs.core.truth_(c))) {
      throw cljs.core.missing_protocol.call(null, "IWatchable.-remove-watch", a);
    }
    c = c.call(null, a, b)
  }
  return c
};
cljs.core.identical_QMARK_ = function(a, b) {
  return a === b
};
cljs.core._EQ_ = function(a, b) {
  return cljs.core._equiv.call(null, a, b)
};
cljs.core.nil_QMARK_ = function(a) {
  return null === a
};
cljs.core.type = function(a) {
  return a.constructor
};
cljs.core.IHash["null"] = !0;
cljs.core._hash["null"] = function() {
  return 0
};
cljs.core.ILookup["null"] = !0;
cljs.core._lookup["null"] = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return null;
      case 3:
        return d
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.IAssociative["null"] = !0;
cljs.core._assoc["null"] = function(a, b, c) {
  return cljs.core.hash_map.call(null, b, c)
};
cljs.core.ICollection["null"] = !0;
cljs.core._conj["null"] = function(a, b) {
  return cljs.core.list.call(null, b)
};
cljs.core.IReduce["null"] = !0;
cljs.core._reduce["null"] = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return c.call(null);
      case 3:
        return d
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.IPrintable["null"] = !0;
cljs.core._pr_seq["null"] = function() {
  return cljs.core.list.call(null, "nil")
};
cljs.core.ISet["null"] = !0;
cljs.core._disjoin["null"] = function() {
  return null
};
cljs.core.ICounted["null"] = !0;
cljs.core._count["null"] = function() {
  return 0
};
cljs.core.IStack["null"] = !0;
cljs.core._peek["null"] = function() {
  return null
};
cljs.core._pop["null"] = function() {
  return null
};
cljs.core.ISeq["null"] = !0;
cljs.core._first["null"] = function() {
  return null
};
cljs.core._rest["null"] = function() {
  return cljs.core.list.call(null)
};
cljs.core.IEquiv["null"] = !0;
cljs.core._equiv["null"] = function(a, b) {
  return null === b
};
cljs.core.IWithMeta["null"] = !0;
cljs.core._with_meta["null"] = function() {
  return null
};
cljs.core.IMeta["null"] = !0;
cljs.core._meta["null"] = function() {
  return null
};
cljs.core.IIndexed["null"] = !0;
cljs.core._nth["null"] = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return null;
      case 3:
        return d
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.IEmptyableCollection["null"] = !0;
cljs.core._empty["null"] = function() {
  return null
};
cljs.core.IMap["null"] = !0;
cljs.core._dissoc["null"] = function() {
  return null
};
Date.prototype.cljs$core$IEquiv$ = !0;
Date.prototype.cljs$core$IEquiv$_equiv = function(a, b) {
  return a.toString() === b.toString()
};
cljs.core.IHash.number = !0;
cljs.core._hash.number = function(a) {
  return a
};
cljs.core.IEquiv.number = !0;
cljs.core._equiv.number = function(a, b) {
  return a === b
};
cljs.core.IHash["boolean"] = !0;
cljs.core._hash["boolean"] = function(a) {
  return!0 === a ? 1 : 0
};
cljs.core.IHash["function"] = !0;
cljs.core._hash["function"] = function(a) {
  return goog.getUid.call(null, a)
};
cljs.core.inc = function(a) {
  return a + 1
};
cljs.core.ci_reduce = function() {
  var a = null;
  return function(a, c, d, e) {
    switch(arguments.length) {
      case 2:
        var f;
        a: {
          if(cljs.core.truth_(cljs.core._EQ_.call(null, 0, cljs.core._count.call(null, a)))) {
            f = c.call(null)
          }else {
            for(var g = cljs.core._nth.call(null, a, 0), h = 1;;) {
              if(cljs.core.truth_(h < cljs.core._count.call(null, a))) {
                g = c.call(null, g, cljs.core._nth.call(null, a, h)), h += 1
              }else {
                f = g;
                break a
              }
            }
          }
        }
        return f;
      case 3:
        a: {
          f = d;
          for(h = 0;;) {
            if(cljs.core.truth_(h < cljs.core._count.call(null, a))) {
              f = c.call(null, f, cljs.core._nth.call(null, a, h)), h += 1
            }else {
              g = f;
              break a
            }
          }
        }
        return g;
      case 4:
        a: {
          f = d;
          for(g = e;;) {
            if(cljs.core.truth_(g < cljs.core._count.call(null, a))) {
              f = c.call(null, f, cljs.core._nth.call(null, a, g)), g += 1
            }else {
              h = f;
              break a
            }
          }
        }
        return h
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.IndexedSeq = function(a, b) {
  this.a = a;
  this.i = b
};
cljs.core.IndexedSeq.cljs$core$IPrintable$_pr_seq = function() {
  return cljs.core.list.call(null, "cljs.core.IndexedSeq")
};
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = !0;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = function(a) {
  return cljs.core.hash_coll.call(null, a)
};
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = !0;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return cljs.core.ci_reduce.call(null, this.a, c, this.a[this.i], this.i + 1);
      case 3:
        return cljs.core.ci_reduce.call(null, this.a, c, d, this.i)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = !0;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = function(a, b) {
  return cljs.core.cons.call(null, b, a)
};
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = !0;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = function(a, b) {
  return cljs.core.equiv_sequential.call(null, a, b)
};
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = !0;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = !0;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        var e = c + this.i;
        return cljs.core.truth_(e < this.a.length) ? this.a[e] : null;
      case 3:
        return e = c + this.i, cljs.core.truth_(e < this.a.length) ? this.a[e] : d
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = !0;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = function() {
  return this.a.length - this.i
};
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = !0;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = function() {
  return this.a[this.i]
};
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = function() {
  return cljs.core.truth_(this.i + 1 < this.a.length) ? new cljs.core.IndexedSeq(this.a, this.i + 1) : cljs.core.list.call(null)
};
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = !0;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = function(a) {
  return a
};
cljs.core.prim_seq = function(a, b) {
  return cljs.core.truth_(cljs.core._EQ_.call(null, 0, a.length)) ? null : new cljs.core.IndexedSeq(a, b)
};
cljs.core.array_seq = function(a, b) {
  return cljs.core.prim_seq.call(null, a, b)
};
cljs.core.IReduce.array = !0;
cljs.core._reduce.array = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return cljs.core.ci_reduce.call(null, a, c);
      case 3:
        return cljs.core.ci_reduce.call(null, a, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.ILookup.array = !0;
cljs.core._lookup.array = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return a[c];
      case 3:
        return cljs.core._nth.call(null, a, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.IIndexed.array = !0;
cljs.core._nth.array = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return cljs.core.truth_(c < a.length) ? a[c] : null;
      case 3:
        return cljs.core.truth_(c < a.length) ? a[c] : d
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.ICounted.array = !0;
cljs.core._count.array = function(a) {
  return a.length
};
cljs.core.ISeqable.array = !0;
cljs.core._seq.array = function(a) {
  return cljs.core.array_seq.call(null, a, 0)
};
cljs.core.seq = function(a) {
  return cljs.core.truth_(a) ? cljs.core._seq.call(null, a) : null
};
cljs.core.first = function(a) {
  a = cljs.core.seq.call(null, a);
  return cljs.core.truth_(a) ? cljs.core._first.call(null, a) : null
};
cljs.core.rest = function(a) {
  return cljs.core._rest.call(null, cljs.core.seq.call(null, a))
};
cljs.core.next = function(a) {
  return cljs.core.truth_(a) ? cljs.core.seq.call(null, cljs.core.rest.call(null, a)) : null
};
cljs.core.second = function(a) {
  return cljs.core.first.call(null, cljs.core.next.call(null, a))
};
cljs.core.ffirst = function(a) {
  return cljs.core.first.call(null, cljs.core.first.call(null, a))
};
cljs.core.nfirst = function(a) {
  return cljs.core.next.call(null, cljs.core.first.call(null, a))
};
cljs.core.fnext = function(a) {
  return cljs.core.first.call(null, cljs.core.next.call(null, a))
};
cljs.core.nnext = function(a) {
  return cljs.core.next.call(null, cljs.core.next.call(null, a))
};
cljs.core.last = function(a) {
  for(;;) {
    if(cljs.core.truth_(cljs.core.next.call(null, a))) {
      a = cljs.core.next.call(null, a)
    }else {
      return cljs.core.first.call(null, a)
    }
  }
};
cljs.core.ICounted._ = !0;
cljs.core._count._ = function(a) {
  for(var a = cljs.core.seq.call(null, a), b = 0;;) {
    if(cljs.core.truth_(a)) {
      a = cljs.core.next.call(null, a), b += 1
    }else {
      return b
    }
  }
};
cljs.core.IEquiv._ = !0;
cljs.core._equiv._ = function(a, b) {
  return a === b
};
cljs.core.not = function(a) {
  return cljs.core.truth_(a) ? !1 : !0
};
cljs.core.conj = function() {
  var a = null, b = function() {
    var b = function(b, c, d) {
      for(;;) {
        if(cljs.core.truth_(d)) {
          b = a.call(null, b, c), c = cljs.core.first.call(null, d), d = cljs.core.next.call(null, d)
        }else {
          return a.call(null, b, c)
        }
      }
    }, d = function(a, d, g) {
      var h = null;
      goog.isDef(g) && (h = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, a, d, h)
    };
    d.cljs$lang$maxFixedArity = 2;
    d.cljs$lang$applyTo = function(a) {
      var d = cljs.core.first(a), g = cljs.core.first(cljs.core.next(a)), a = cljs.core.rest(cljs.core.next(a));
      return b.call(this, d, g, a)
    };
    return d
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 2:
        return cljs.core._conj.call(null, a, d);
      default:
        return b.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = b.cljs$lang$applyTo;
  return a
}();
cljs.core.empty = function(a) {
  return cljs.core._empty.call(null, a)
};
cljs.core.count = function(a) {
  return cljs.core._count.call(null, a)
};
cljs.core.nth = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return cljs.core._nth.call(null, a, Math.floor(c));
      case 3:
        return cljs.core._nth.call(null, a, Math.floor(c), d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.get = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return cljs.core._lookup.call(null, a, c);
      case 3:
        return cljs.core._lookup.call(null, a, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.assoc = function() {
  var a = null, b = function() {
    var b = function(b, c, d, h) {
      for(;;) {
        if(b = a.call(null, b, c, d), cljs.core.truth_(h)) {
          c = cljs.core.first.call(null, h), d = cljs.core.second.call(null, h), h = cljs.core.nnext.call(null, h)
        }else {
          return b
        }
      }
    }, d = function(a, d, g, h) {
      var i = null;
      goog.isDef(h) && (i = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, a, d, g, i)
    };
    d.cljs$lang$maxFixedArity = 3;
    d.cljs$lang$applyTo = function(a) {
      var d = cljs.core.first(a), g = cljs.core.first(cljs.core.next(a)), h = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
      return b.call(this, d, g, h, a)
    };
    return d
  }(), a = function(a, d, e, f) {
    switch(arguments.length) {
      case 3:
        return cljs.core._assoc.call(null, a, d, e);
      default:
        return b.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 3;
  a.cljs$lang$applyTo = b.cljs$lang$applyTo;
  return a
}();
cljs.core.dissoc = function() {
  var a = null, b = function() {
    var b = function(b, c, d) {
      for(;;) {
        if(b = a.call(null, b, c), cljs.core.truth_(d)) {
          c = cljs.core.first.call(null, d), d = cljs.core.next.call(null, d)
        }else {
          return b
        }
      }
    }, d = function(a, d, g) {
      var h = null;
      goog.isDef(g) && (h = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, a, d, h)
    };
    d.cljs$lang$maxFixedArity = 2;
    d.cljs$lang$applyTo = function(a) {
      var d = cljs.core.first(a), g = cljs.core.first(cljs.core.next(a)), a = cljs.core.rest(cljs.core.next(a));
      return b.call(this, d, g, a)
    };
    return d
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return a;
      case 2:
        return cljs.core._dissoc.call(null, a, d);
      default:
        return b.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = b.cljs$lang$applyTo;
  return a
}();
cljs.core.with_meta = function(a, b) {
  return cljs.core._with_meta.call(null, a, b)
};
cljs.core.meta = function(a) {
  return cljs.core.truth_(function() {
    return cljs.core.truth_(function() {
      if(cljs.core.truth_(a)) {
        var b = a.cljs$core$IMeta$;
        return cljs.core.truth_(b) ? cljs.core.not.call(null, a.hasOwnProperty("cljs$core$IMeta$")) : b
      }
      return a
    }()) ? !0 : cljs.core.type_satisfies_.call(null, cljs.core.IMeta, a)
  }()) ? cljs.core._meta.call(null, a) : null
};
cljs.core.peek = function(a) {
  return cljs.core._peek.call(null, a)
};
cljs.core.pop = function(a) {
  return cljs.core._pop.call(null, a)
};
cljs.core.disj = function() {
  var a = null, b = function() {
    var b = function(b, c, d) {
      for(;;) {
        if(b = a.call(null, b, c), cljs.core.truth_(d)) {
          c = cljs.core.first.call(null, d), d = cljs.core.next.call(null, d)
        }else {
          return b
        }
      }
    }, d = function(a, d, g) {
      var h = null;
      goog.isDef(g) && (h = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, a, d, h)
    };
    d.cljs$lang$maxFixedArity = 2;
    d.cljs$lang$applyTo = function(a) {
      var d = cljs.core.first(a), g = cljs.core.first(cljs.core.next(a)), a = cljs.core.rest(cljs.core.next(a));
      return b.call(this, d, g, a)
    };
    return d
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return a;
      case 2:
        return cljs.core._disjoin.call(null, a, d);
      default:
        return b.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = b.cljs$lang$applyTo;
  return a
}();
cljs.core.hash = function(a) {
  return cljs.core._hash.call(null, a)
};
cljs.core.empty_QMARK_ = function(a) {
  return cljs.core.not.call(null, cljs.core.seq.call(null, a))
};
cljs.core.coll_QMARK_ = function(a) {
  return cljs.core.truth_(null === a) ? !1 : cljs.core.truth_(function() {
    if(cljs.core.truth_(a)) {
      var b = a.cljs$core$ICollection$;
      return cljs.core.truth_(b) ? cljs.core.not.call(null, a.hasOwnProperty("cljs$core$ICollection$")) : b
    }
    return a
  }()) ? !0 : cljs.core.type_satisfies_.call(null, cljs.core.ICollection, a)
};
cljs.core.set_QMARK_ = function(a) {
  return cljs.core.truth_(null === a) ? !1 : cljs.core.truth_(function() {
    if(cljs.core.truth_(a)) {
      var b = a.cljs$core$ISet$;
      return cljs.core.truth_(b) ? cljs.core.not.call(null, a.hasOwnProperty("cljs$core$ISet$")) : b
    }
    return a
  }()) ? !0 : cljs.core.type_satisfies_.call(null, cljs.core.ISet, a)
};
cljs.core.associative_QMARK_ = function(a) {
  return cljs.core.truth_(function() {
    if(cljs.core.truth_(a)) {
      var b = a.cljs$core$IAssociative$;
      return cljs.core.truth_(b) ? cljs.core.not.call(null, a.hasOwnProperty("cljs$core$IAssociative$")) : b
    }
    return a
  }()) ? !0 : cljs.core.type_satisfies_.call(null, cljs.core.IAssociative, a)
};
cljs.core.sequential_QMARK_ = function(a) {
  return cljs.core.truth_(function() {
    if(cljs.core.truth_(a)) {
      var b = a.cljs$core$ISequential$;
      return cljs.core.truth_(b) ? cljs.core.not.call(null, a.hasOwnProperty("cljs$core$ISequential$")) : b
    }
    return a
  }()) ? !0 : cljs.core.type_satisfies_.call(null, cljs.core.ISequential, a)
};
cljs.core.counted_QMARK_ = function(a) {
  return cljs.core.truth_(function() {
    if(cljs.core.truth_(a)) {
      var b = a.cljs$core$ICounted$;
      return cljs.core.truth_(b) ? cljs.core.not.call(null, a.hasOwnProperty("cljs$core$ICounted$")) : b
    }
    return a
  }()) ? !0 : cljs.core.type_satisfies_.call(null, cljs.core.ICounted, a)
};
cljs.core.map_QMARK_ = function(a) {
  return cljs.core.truth_(null === a) ? !1 : cljs.core.truth_(function() {
    if(cljs.core.truth_(a)) {
      var b = a.cljs$core$IMap$;
      return cljs.core.truth_(b) ? cljs.core.not.call(null, a.hasOwnProperty("cljs$core$IMap$")) : b
    }
    return a
  }()) ? !0 : cljs.core.type_satisfies_.call(null, cljs.core.IMap, a)
};
cljs.core.vector_QMARK_ = function(a) {
  return cljs.core.truth_(function() {
    if(cljs.core.truth_(a)) {
      var b = a.cljs$core$IVector$;
      return cljs.core.truth_(b) ? cljs.core.not.call(null, a.hasOwnProperty("cljs$core$IVector$")) : b
    }
    return a
  }()) ? !0 : cljs.core.type_satisfies_.call(null, cljs.core.IVector, a)
};
cljs.core.js_obj = function() {
  return{}
};
cljs.core.js_keys = function(a) {
  var b = [];
  goog.object.forEach.call(null, a, function(a, d) {
    return b.push(d)
  });
  return b
};
cljs.core.js_delete = function(a, b) {
  return delete a[b]
};
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
cljs.core.false_QMARK_ = function(a) {
  return!1 === a
};
cljs.core.true_QMARK_ = function(a) {
  return!0 === a
};
cljs.core.undefined_QMARK_ = function(a) {
  return void 0 === a
};
cljs.core.instance_QMARK_ = function(a, b) {
  return null != b && (b instanceof a || b.constructor === a || a === Object)
};
cljs.core.seq_QMARK_ = function(a) {
  return cljs.core.truth_(null === a) ? !1 : cljs.core.truth_(function() {
    if(cljs.core.truth_(a)) {
      var b = a.cljs$core$ISeq$;
      return cljs.core.truth_(b) ? cljs.core.not.call(null, a.hasOwnProperty("cljs$core$ISeq$")) : b
    }
    return a
  }()) ? !0 : cljs.core.type_satisfies_.call(null, cljs.core.ISeq, a)
};
cljs.core.boolean$ = function(a) {
  return cljs.core.truth_(a) ? !0 : !1
};
cljs.core.string_QMARK_ = function(a) {
  var b = goog.isString.call(null, a);
  return cljs.core.truth_(b) ? cljs.core.not.call(null, function() {
    var b = cljs.core._EQ_.call(null, a.charAt(0), "\ufdd0");
    return cljs.core.truth_(b) ? b : cljs.core._EQ_.call(null, a.charAt(0), "\ufdd1")
  }()) : b
};
cljs.core.keyword_QMARK_ = function(a) {
  var b = goog.isString.call(null, a);
  return cljs.core.truth_(b) ? cljs.core._EQ_.call(null, a.charAt(0), "\ufdd0") : b
};
cljs.core.symbol_QMARK_ = function(a) {
  var b = goog.isString.call(null, a);
  return cljs.core.truth_(b) ? cljs.core._EQ_.call(null, a.charAt(0), "\ufdd1") : b
};
cljs.core.number_QMARK_ = function(a) {
  return goog.isNumber.call(null, a)
};
cljs.core.fn_QMARK_ = function(a) {
  return goog.isFunction.call(null, a)
};
cljs.core.integer_QMARK_ = function(a) {
  var b = cljs.core.number_QMARK_.call(null, a);
  return cljs.core.truth_(b) ? a == a.toFixed() : b
};
cljs.core.contains_QMARK_ = function(a, b) {
  return cljs.core.truth_(cljs.core._lookup.call(null, a, b, cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel) ? !1 : !0
};
cljs.core.find = function(a, b) {
  return cljs.core.truth_(function() {
    if(cljs.core.truth_(a)) {
      var c = cljs.core.associative_QMARK_.call(null, a);
      return cljs.core.truth_(c) ? cljs.core.contains_QMARK_.call(null, a, b) : c
    }
    return a
  }()) ? cljs.core.PersistentVector.fromArray([b, cljs.core._lookup.call(null, a, b)]) : null
};
cljs.core.distinct_QMARK_ = function() {
  var a = null, b = function() {
    var a = function(a, b, c) {
      if(cljs.core.truth_(cljs.core.not.call(null, cljs.core._EQ_.call(null, a, b)))) {
        a = cljs.core.set([b, a]);
        for(b = c;;) {
          var d = cljs.core.first.call(null, b), c = cljs.core.next.call(null, b);
          if(cljs.core.truth_(b)) {
            if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null, a, d))) {
              return!1
            }
            a = cljs.core.conj.call(null, a, d);
            b = c
          }else {
            return!0
          }
        }
      }else {
        return!1
      }
    }, b = function(b, d, g) {
      var h = null;
      goog.isDef(g) && (h = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return a.call(this, b, d, h)
    };
    b.cljs$lang$maxFixedArity = 2;
    b.cljs$lang$applyTo = function(b) {
      var d = cljs.core.first(b), g = cljs.core.first(cljs.core.next(b)), b = cljs.core.rest(cljs.core.next(b));
      return a.call(this, d, g, b)
    };
    return b
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return cljs.core.not.call(null, cljs.core._EQ_.call(null, a, d));
      default:
        return b.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = b.cljs$lang$applyTo;
  return a
}();
cljs.core.compare = function(a, b) {
  return goog.array.defaultCompare.call(null, a, b)
};
cljs.core.fn__GT_comparator = function(a) {
  return cljs.core.truth_(cljs.core._EQ_.call(null, a, cljs.core.compare)) ? cljs.core.compare : function(b, c) {
    var d = a.call(null, b, c);
    return cljs.core.truth_(cljs.core.number_QMARK_.call(null, d)) ? d : cljs.core.truth_(d) ? -1 : cljs.core.truth_(a.call(null, c, b)) ? 1 : 0
  }
};
cljs.core.sort = function() {
  var a = null;
  return a = function(b, c) {
    switch(arguments.length) {
      case 1:
        return a.call(null, cljs.core.compare, b);
      case 2:
        var d;
        cljs.core.truth_(cljs.core.seq.call(null, c)) ? (d = cljs.core.to_array.call(null, c), goog.array.stableSort.call(null, d, cljs.core.fn__GT_comparator.call(null, b)), d = cljs.core.seq.call(null, d)) : d = cljs.core.List.EMPTY;
        return d
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.sort_by = function() {
  var a = null, b = function(a, b, e) {
    return cljs.core.sort.call(null, function(e, g) {
      return cljs.core.fn__GT_comparator.call(null, b).call(null, a.call(null, e), a.call(null, g))
    }, e)
  };
  return a = function(c, d, e) {
    switch(arguments.length) {
      case 2:
        return a.call(null, c, cljs.core.compare, d);
      case 3:
        return b.call(this, c, d, e)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.reduce = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return cljs.core._reduce.call(null, c, a);
      case 3:
        return cljs.core._reduce.call(null, d, a, c)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.seq_reduce = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        var e;
        e = cljs.core.seq.call(null, c);
        e = cljs.core.truth_(e) ? cljs.core.reduce.call(null, a, cljs.core.first.call(null, e), cljs.core.next.call(null, e)) : a.call(null);
        return e;
      case 3:
        a: {
          for(var f = c, g = cljs.core.seq.call(null, d);;) {
            if(cljs.core.truth_(g)) {
              f = a.call(null, f, cljs.core.first.call(null, g)), g = cljs.core.next.call(null, g)
            }else {
              e = f;
              break a
            }
          }
        }
        return e
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.IReduce._ = !0;
cljs.core._reduce._ = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return cljs.core.seq_reduce.call(null, c, a);
      case 3:
        return cljs.core.seq_reduce.call(null, c, d, a)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core._PLUS_ = function() {
  var a = null, b = function() {
    var b = function(b, c, f) {
      var g = null;
      goog.isDef(f) && (g = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return cljs.core.reduce.call(null, a, b + c, g)
    };
    b.cljs$lang$maxFixedArity = 2;
    b.cljs$lang$applyTo = function(b) {
      var c = cljs.core.first(b), f = cljs.core.first(cljs.core.next(b)), b = cljs.core.rest(cljs.core.next(b));
      return cljs.core.reduce.call(null, a, c + f, b)
    };
    return b
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 0:
        return 0;
      case 1:
        return a;
      case 2:
        return a + d;
      default:
        return b.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = b.cljs$lang$applyTo;
  return a
}();
cljs.core._ = function() {
  var a = null, b = function() {
    var b = function(b, c, f) {
      var g = null;
      goog.isDef(f) && (g = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return cljs.core.reduce.call(null, a, b - c, g)
    };
    b.cljs$lang$maxFixedArity = 2;
    b.cljs$lang$applyTo = function(b) {
      var c = cljs.core.first(b), f = cljs.core.first(cljs.core.next(b)), b = cljs.core.rest(cljs.core.next(b));
      return cljs.core.reduce.call(null, a, c - f, b)
    };
    return b
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return-a;
      case 2:
        return a - d;
      default:
        return b.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = b.cljs$lang$applyTo;
  return a
}();
cljs.core._STAR_ = function() {
  var a = null, b = function() {
    var b = function(b, c, f) {
      var g = null;
      goog.isDef(f) && (g = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return cljs.core.reduce.call(null, a, b * c, g)
    };
    b.cljs$lang$maxFixedArity = 2;
    b.cljs$lang$applyTo = function(b) {
      var c = cljs.core.first(b), f = cljs.core.first(cljs.core.next(b)), b = cljs.core.rest(cljs.core.next(b));
      return cljs.core.reduce.call(null, a, c * f, b)
    };
    return b
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 0:
        return 1;
      case 1:
        return a;
      case 2:
        return a * d;
      default:
        return b.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = b.cljs$lang$applyTo;
  return a
}();
cljs.core._SLASH_ = function() {
  var a = null, b = function() {
    var b = function(b, c, f) {
      var g = null;
      goog.isDef(f) && (g = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return cljs.core.reduce.call(null, a, a.call(null, b, c), g)
    };
    b.cljs$lang$maxFixedArity = 2;
    b.cljs$lang$applyTo = function(b) {
      var c = cljs.core.first(b), f = cljs.core.first(cljs.core.next(b)), b = cljs.core.rest(cljs.core.next(b));
      return cljs.core.reduce.call(null, a, a.call(null, c, f), b)
    };
    return b
  }(), a = function(c, d, e) {
    switch(arguments.length) {
      case 1:
        return a.call(null, 1, c);
      case 2:
        return c / d;
      default:
        return b.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = b.cljs$lang$applyTo;
  return a
}();
cljs.core._LT_ = function() {
  var a = null, b = function() {
    var a = function(a, b, c) {
      for(;;) {
        if(cljs.core.truth_(a < b)) {
          if(cljs.core.truth_(cljs.core.next.call(null, c))) {
            a = b, b = cljs.core.first.call(null, c), c = cljs.core.next.call(null, c)
          }else {
            return b < cljs.core.first.call(null, c)
          }
        }else {
          return!1
        }
      }
    }, b = function(b, d, g) {
      var h = null;
      goog.isDef(g) && (h = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return a.call(this, b, d, h)
    };
    b.cljs$lang$maxFixedArity = 2;
    b.cljs$lang$applyTo = function(b) {
      var d = cljs.core.first(b), g = cljs.core.first(cljs.core.next(b)), b = cljs.core.rest(cljs.core.next(b));
      return a.call(this, d, g, b)
    };
    return b
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a < d;
      default:
        return b.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = b.cljs$lang$applyTo;
  return a
}();
cljs.core._LT__EQ_ = function() {
  var a = null, b = function() {
    var a = function(a, b, c) {
      for(;;) {
        if(cljs.core.truth_(a <= b)) {
          if(cljs.core.truth_(cljs.core.next.call(null, c))) {
            a = b, b = cljs.core.first.call(null, c), c = cljs.core.next.call(null, c)
          }else {
            return b <= cljs.core.first.call(null, c)
          }
        }else {
          return!1
        }
      }
    }, b = function(b, d, g) {
      var h = null;
      goog.isDef(g) && (h = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return a.call(this, b, d, h)
    };
    b.cljs$lang$maxFixedArity = 2;
    b.cljs$lang$applyTo = function(b) {
      var d = cljs.core.first(b), g = cljs.core.first(cljs.core.next(b)), b = cljs.core.rest(cljs.core.next(b));
      return a.call(this, d, g, b)
    };
    return b
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a <= d;
      default:
        return b.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = b.cljs$lang$applyTo;
  return a
}();
cljs.core._GT_ = function() {
  var a = null, b = function() {
    var a = function(a, b, c) {
      for(;;) {
        if(cljs.core.truth_(a > b)) {
          if(cljs.core.truth_(cljs.core.next.call(null, c))) {
            a = b, b = cljs.core.first.call(null, c), c = cljs.core.next.call(null, c)
          }else {
            return b > cljs.core.first.call(null, c)
          }
        }else {
          return!1
        }
      }
    }, b = function(b, d, g) {
      var h = null;
      goog.isDef(g) && (h = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return a.call(this, b, d, h)
    };
    b.cljs$lang$maxFixedArity = 2;
    b.cljs$lang$applyTo = function(b) {
      var d = cljs.core.first(b), g = cljs.core.first(cljs.core.next(b)), b = cljs.core.rest(cljs.core.next(b));
      return a.call(this, d, g, b)
    };
    return b
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a > d;
      default:
        return b.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = b.cljs$lang$applyTo;
  return a
}();
cljs.core._GT__EQ_ = function() {
  var a = null, b = function() {
    var a = function(a, b, c) {
      for(;;) {
        if(cljs.core.truth_(a >= b)) {
          if(cljs.core.truth_(cljs.core.next.call(null, c))) {
            a = b, b = cljs.core.first.call(null, c), c = cljs.core.next.call(null, c)
          }else {
            return b >= cljs.core.first.call(null, c)
          }
        }else {
          return!1
        }
      }
    }, b = function(b, d, g) {
      var h = null;
      goog.isDef(g) && (h = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return a.call(this, b, d, h)
    };
    b.cljs$lang$maxFixedArity = 2;
    b.cljs$lang$applyTo = function(b) {
      var d = cljs.core.first(b), g = cljs.core.first(cljs.core.next(b)), b = cljs.core.rest(cljs.core.next(b));
      return a.call(this, d, g, b)
    };
    return b
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a >= d;
      default:
        return b.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = b.cljs$lang$applyTo;
  return a
}();
cljs.core.dec = function(a) {
  return a - 1
};
cljs.core.max = function() {
  var a = null, b = function() {
    var b = function(b, c, f) {
      var g = null;
      goog.isDef(f) && (g = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return cljs.core.reduce.call(null, a, b > c ? b : c, g)
    };
    b.cljs$lang$maxFixedArity = 2;
    b.cljs$lang$applyTo = function(b) {
      var c = cljs.core.first(b), f = cljs.core.first(cljs.core.next(b)), b = cljs.core.rest(cljs.core.next(b));
      return cljs.core.reduce.call(null, a, c > f ? c : f, b)
    };
    return b
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return a;
      case 2:
        return a > d ? a : d;
      default:
        return b.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = b.cljs$lang$applyTo;
  return a
}();
cljs.core.min = function() {
  var a = null, b = function() {
    var b = function(b, c, f) {
      var g = null;
      goog.isDef(f) && (g = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return cljs.core.reduce.call(null, a, b < c ? b : c, g)
    };
    b.cljs$lang$maxFixedArity = 2;
    b.cljs$lang$applyTo = function(b) {
      var c = cljs.core.first(b), f = cljs.core.first(cljs.core.next(b)), b = cljs.core.rest(cljs.core.next(b));
      return cljs.core.reduce.call(null, a, c < f ? c : f, b)
    };
    return b
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return a;
      case 2:
        return a < d ? a : d;
      default:
        return b.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = b.cljs$lang$applyTo;
  return a
}();
cljs.core.fix = function(a) {
  return cljs.core.truth_(0 <= a) ? Math.floor.call(null, a) : Math.ceil.call(null, a)
};
cljs.core.mod = function(a, b) {
  return a % b
};
cljs.core.quot = function(a, b) {
  return cljs.core.fix.call(null, (a - a % b) / b)
};
cljs.core.rem = function(a, b) {
  var c = cljs.core.quot.call(null, a, b);
  return a - b * c
};
cljs.core.rand = function() {
  var a = null;
  return a = function(b) {
    switch(arguments.length) {
      case 0:
        return Math.random.call(null);
      case 1:
        return b * a.call(null)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.rand_int = function(a) {
  return cljs.core.fix.call(null, cljs.core.rand.call(null, a))
};
cljs.core.bit_xor = function(a, b) {
  return a ^ b
};
cljs.core.bit_and = function(a, b) {
  return a & b
};
cljs.core.bit_or = function(a, b) {
  return a | b
};
cljs.core.bit_and_not = function(a, b) {
  return a & ~b
};
cljs.core.bit_clear = function(a, b) {
  return a & ~(1 << b)
};
cljs.core.bit_flip = function(a, b) {
  return a ^ 1 << b
};
cljs.core.bit_not = function(a) {
  return~a
};
cljs.core.bit_set = function(a, b) {
  return a | 1 << b
};
cljs.core.bit_test = function(a, b) {
  return 0 != (a & 1 << b)
};
cljs.core.bit_shift_left = function(a, b) {
  return a << b
};
cljs.core.bit_shift_right = function(a, b) {
  return a >> b
};
cljs.core._EQ__EQ_ = function() {
  var a = null, b = function() {
    var b = function(b, c, d) {
      for(;;) {
        if(cljs.core.truth_(a.call(null, b, c))) {
          if(cljs.core.truth_(cljs.core.next.call(null, d))) {
            b = c, c = cljs.core.first.call(null, d), d = cljs.core.next.call(null, d)
          }else {
            return a.call(null, c, cljs.core.first.call(null, d))
          }
        }else {
          return!1
        }
      }
    }, d = function(a, d, g) {
      var h = null;
      goog.isDef(g) && (h = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, a, d, h)
    };
    d.cljs$lang$maxFixedArity = 2;
    d.cljs$lang$applyTo = function(a) {
      var d = cljs.core.first(a), g = cljs.core.first(cljs.core.next(a)), a = cljs.core.rest(cljs.core.next(a));
      return b.call(this, d, g, a)
    };
    return d
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return cljs.core._equiv.call(null, a, d);
      default:
        return b.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = b.cljs$lang$applyTo;
  return a
}();
cljs.core.pos_QMARK_ = function(a) {
  return 0 < a
};
cljs.core.zero_QMARK_ = function(a) {
  return 0 === a
};
cljs.core.neg_QMARK_ = function(a) {
  return 0 > a
};
cljs.core.nthnext = function(a, b) {
  for(var c = b, d = cljs.core.seq.call(null, a);;) {
    if(cljs.core.truth_(function() {
      var a = d;
      return cljs.core.truth_(a) ? 0 < c : a
    }())) {
      var e = c - 1, f = cljs.core.next.call(null, d), c = e, d = f
    }else {
      return d
    }
  }
};
cljs.core.IIndexed._ = !0;
cljs.core._nth._ = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        var e;
        e = cljs.core.nthnext.call(null, a, c);
        if(cljs.core.truth_(e)) {
          e = cljs.core.first.call(null, e)
        }else {
          throw Error("Index out of bounds");
        }
        return e;
      case 3:
        return e = cljs.core.nthnext.call(null, a, c), e = cljs.core.truth_(e) ? cljs.core.first.call(null, e) : d, e
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.str_STAR_ = function() {
  var a = null, b = function() {
    var b = function(b, c) {
      return function(b, c) {
        for(;;) {
          if(cljs.core.truth_(c)) {
            var d = b.append(a.call(null, cljs.core.first.call(null, c))), e = cljs.core.next.call(null, c), b = d, c = e
          }else {
            return a.call(null, b)
          }
        }
      }.call(null, new goog.string.StringBuffer(a.call(null, b)), c)
    }, d = function(a, d) {
      var g = null;
      goog.isDef(d) && (g = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, a, g)
    };
    d.cljs$lang$maxFixedArity = 1;
    d.cljs$lang$applyTo = function(a) {
      var d = cljs.core.first(a), a = cljs.core.rest(a);
      return b.call(this, d, a)
    };
    return d
  }(), a = function(a, d) {
    switch(arguments.length) {
      case 0:
        return"";
      case 1:
        return cljs.core.truth_(null === a) ? "" : cljs.core.truth_("\ufdd0'else") ? a.toString() : null;
      default:
        return b.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 1;
  a.cljs$lang$applyTo = b.cljs$lang$applyTo;
  return a
}();
cljs.core.str = function() {
  var a = null, b = function() {
    var b = function(b, c) {
      return function(b, c) {
        for(;;) {
          if(cljs.core.truth_(c)) {
            var d = b.append(a.call(null, cljs.core.first.call(null, c))), e = cljs.core.next.call(null, c), b = d, c = e
          }else {
            return cljs.core.str_STAR_.call(null, b)
          }
        }
      }.call(null, new goog.string.StringBuffer(a.call(null, b)), c)
    }, d = function(a, d) {
      var g = null;
      goog.isDef(d) && (g = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, a, g)
    };
    d.cljs$lang$maxFixedArity = 1;
    d.cljs$lang$applyTo = function(a) {
      var d = cljs.core.first(a), a = cljs.core.rest(a);
      return b.call(this, d, a)
    };
    return d
  }(), a = function(a, d) {
    switch(arguments.length) {
      case 0:
        return"";
      case 1:
        return cljs.core.truth_(cljs.core.symbol_QMARK_.call(null, a)) ? a.substring(2, a.length) : cljs.core.truth_(cljs.core.keyword_QMARK_.call(null, a)) ? cljs.core.str_STAR_.call(null, ":", a.substring(2, a.length)) : cljs.core.truth_(null === a) ? "" : cljs.core.truth_("\ufdd0'else") ? a.toString() : null;
      default:
        return b.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 1;
  a.cljs$lang$applyTo = b.cljs$lang$applyTo;
  return a
}();
cljs.core.subs = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return a.substring(c);
      case 3:
        return a.substring(c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.symbol = function() {
  var a = null;
  return a = function(b, c) {
    switch(arguments.length) {
      case 1:
        return cljs.core.truth_(cljs.core.symbol_QMARK_.call(null, b)) || cljs.core.truth_(cljs.core.keyword_QMARK_.call(null, b)) && cljs.core.str_STAR_.call(null, "\ufdd1", "'", cljs.core.subs.call(null, b, 2)), cljs.core.str_STAR_.call(null, "\ufdd1", "'", b);
      case 2:
        return a.call(null, cljs.core.str_STAR_.call(null, b, "/", c))
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.keyword = function() {
  var a = null;
  return a = function(b, c) {
    switch(arguments.length) {
      case 1:
        return cljs.core.truth_(cljs.core.keyword_QMARK_.call(null, b)) ? b : cljs.core.truth_(cljs.core.symbol_QMARK_.call(null, b)) ? cljs.core.str_STAR_.call(null, "\ufdd0", "'", cljs.core.subs.call(null, b, 2)) : cljs.core.truth_("\ufdd0'else") ? cljs.core.str_STAR_.call(null, "\ufdd0", "'", b) : null;
      case 2:
        return a.call(null, cljs.core.str_STAR_.call(null, b, "/", c))
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.equiv_sequential = function(a, b) {
  return cljs.core.boolean$.call(null, cljs.core.truth_(cljs.core.sequential_QMARK_.call(null, b)) ? function() {
    for(var c = cljs.core.seq.call(null, a), d = cljs.core.seq.call(null, b);;) {
      if(cljs.core.truth_(null === c)) {
        return null === d
      }
      if(cljs.core.truth_(null === d)) {
        return!1
      }
      if(cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.first.call(null, c), cljs.core.first.call(null, d)))) {
        c = cljs.core.next.call(null, c), d = cljs.core.next.call(null, d)
      }else {
        return cljs.core.truth_("\ufdd0'else") ? !1 : null
      }
    }
  }() : null)
};
cljs.core.hash_combine = function(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2)
};
cljs.core.hash_coll = function(a) {
  return cljs.core.reduce.call(null, function(a, c) {
    return cljs.core.hash_combine.call(null, a, cljs.core.hash.call(null, c))
  }, cljs.core.hash.call(null, cljs.core.first.call(null, a)), cljs.core.next.call(null, a))
};
cljs.core.extend_object_BANG_ = function(a, b) {
  var c = cljs.core.seq.call(null, b);
  if(cljs.core.truth_(c)) {
    var d = cljs.core.first.call(null, c);
    cljs.core.nth.call(null, d, 0, null);
    for(cljs.core.nth.call(null, d, 1, null);;) {
      var e = d, d = cljs.core.nth.call(null, e, 0, null), e = cljs.core.nth.call(null, e, 1, null), d = cljs.core.name.call(null, d);
      a[d] = e;
      c = cljs.core.next.call(null, c);
      if(cljs.core.truth_(c)) {
        d = c, c = cljs.core.first.call(null, d), e = d, d = c, c = e
      }else {
        break
      }
    }
  }
  return a
};
cljs.core.List = function(a, b, c, d) {
  this.meta = a;
  this.first = b;
  this.rest = c;
  this.count = d
};
cljs.core.List.cljs$core$IPrintable$_pr_seq = function() {
  return cljs.core.list.call(null, "cljs.core.List")
};
cljs.core.List.prototype.cljs$core$IHash$ = !0;
cljs.core.List.prototype.cljs$core$IHash$_hash = function(a) {
  return cljs.core.hash_coll.call(null, a)
};
cljs.core.List.prototype.cljs$core$ISequential$ = !0;
cljs.core.List.prototype.cljs$core$ICollection$ = !0;
cljs.core.List.prototype.cljs$core$ICollection$_conj = function(a, b) {
  return new cljs.core.List(this.meta, b, a, this.count + 1)
};
cljs.core.List.prototype.cljs$core$ISeqable$ = !0;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = function(a) {
  return a
};
cljs.core.List.prototype.cljs$core$ICounted$ = !0;
cljs.core.List.prototype.cljs$core$ICounted$_count = function() {
  return this.count
};
cljs.core.List.prototype.cljs$core$IStack$ = !0;
cljs.core.List.prototype.cljs$core$IStack$_peek = function() {
  return this.first
};
cljs.core.List.prototype.cljs$core$IStack$_pop = function(a) {
  return cljs.core._rest.call(null, a)
};
cljs.core.List.prototype.cljs$core$ISeq$ = !0;
cljs.core.List.prototype.cljs$core$ISeq$_first = function() {
  return this.first
};
cljs.core.List.prototype.cljs$core$ISeq$_rest = function() {
  return this.rest
};
cljs.core.List.prototype.cljs$core$IEquiv$ = !0;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = function(a, b) {
  return cljs.core.equiv_sequential.call(null, a, b)
};
cljs.core.List.prototype.cljs$core$IWithMeta$ = !0;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = function(a, b) {
  return new cljs.core.List(b, this.first, this.rest, this.count)
};
cljs.core.List.prototype.cljs$core$IMeta$ = !0;
cljs.core.List.prototype.cljs$core$IMeta$_meta = function() {
  return this.meta
};
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = !0;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = function() {
  return cljs.core.List.EMPTY
};
cljs.core.EmptyList = function(a) {
  this.meta = a
};
cljs.core.EmptyList.cljs$core$IPrintable$_pr_seq = function() {
  return cljs.core.list.call(null, "cljs.core.EmptyList")
};
cljs.core.EmptyList.prototype.cljs$core$IHash$ = !0;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = function(a) {
  return cljs.core.hash_coll.call(null, a)
};
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = !0;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = !0;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = function(a, b) {
  return new cljs.core.List(this.meta, b, null, 1)
};
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = !0;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = function() {
  return null
};
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = !0;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = function() {
  return 0
};
cljs.core.EmptyList.prototype.cljs$core$IStack$ = !0;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = function() {
  return null
};
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = function() {
  return null
};
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = !0;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = function() {
  return null
};
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = function() {
  return null
};
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = !0;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = function(a, b) {
  return cljs.core.equiv_sequential.call(null, a, b)
};
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = !0;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = function(a, b) {
  return new cljs.core.EmptyList(b)
};
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = !0;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = function() {
  return this.meta
};
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = !0;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = function(a) {
  return a
};
cljs.core.List.EMPTY = new cljs.core.EmptyList(null);
cljs.core.reverse = function(a) {
  return cljs.core.reduce.call(null, cljs.core.conj, cljs.core.List.EMPTY, a)
};
cljs.core.list = function() {
  var a = function(a) {
    return cljs.core.reduce.call(null, cljs.core.conj, cljs.core.List.EMPTY, cljs.core.reverse.call(null, a))
  }, b = function(b) {
    var d = null;
    goog.isDef(b) && (d = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
    return a.call(this, d)
  };
  b.cljs$lang$maxFixedArity = 0;
  b.cljs$lang$applyTo = function(b) {
    b = cljs.core.seq(b);
    return a.call(this, b)
  };
  return b
}();
cljs.core.Cons = function(a, b, c) {
  this.meta = a;
  this.first = b;
  this.rest = c
};
cljs.core.Cons.cljs$core$IPrintable$_pr_seq = function() {
  return cljs.core.list.call(null, "cljs.core.Cons")
};
cljs.core.Cons.prototype.cljs$core$ISeqable$ = !0;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = function(a) {
  return a
};
cljs.core.Cons.prototype.cljs$core$IHash$ = !0;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = function(a) {
  return cljs.core.hash_coll.call(null, a)
};
cljs.core.Cons.prototype.cljs$core$IEquiv$ = !0;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = function(a, b) {
  return cljs.core.equiv_sequential.call(null, a, b)
};
cljs.core.Cons.prototype.cljs$core$ISequential$ = !0;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = !0;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = function() {
  return cljs.core.with_meta.call(null, cljs.core.List.EMPTY, this.meta)
};
cljs.core.Cons.prototype.cljs$core$ICollection$ = !0;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = function(a, b) {
  return new cljs.core.Cons(null, b, a)
};
cljs.core.Cons.prototype.cljs$core$ISeq$ = !0;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = function() {
  return this.first
};
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = function() {
  return cljs.core.truth_(null === this.rest) ? cljs.core.List.EMPTY : this.rest
};
cljs.core.Cons.prototype.cljs$core$IMeta$ = !0;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = function() {
  return this.meta
};
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = !0;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = function(a, b) {
  return new cljs.core.Cons(b, this.first, this.rest)
};
cljs.core.cons = function(a, b) {
  return new cljs.core.Cons(null, a, b)
};
cljs.core.IReduce.string = !0;
cljs.core._reduce.string = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return cljs.core.ci_reduce.call(null, a, c);
      case 3:
        return cljs.core.ci_reduce.call(null, a, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.ILookup.string = !0;
cljs.core._lookup.string = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return cljs.core._nth.call(null, a, c);
      case 3:
        return cljs.core._nth.call(null, a, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.IIndexed.string = !0;
cljs.core._nth.string = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return cljs.core.truth_(c < cljs.core._count.call(null, a)) ? a.charAt(c) : null;
      case 3:
        return cljs.core.truth_(c < cljs.core._count.call(null, a)) ? a.charAt(c) : d
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.ICounted.string = !0;
cljs.core._count.string = function(a) {
  return a.length
};
cljs.core.ISeqable.string = !0;
cljs.core._seq.string = function(a) {
  return cljs.core.prim_seq.call(null, a, 0)
};
cljs.core.IHash.string = !0;
cljs.core._hash.string = function(a) {
  return goog.string.hashCode.call(null, a)
};
String.prototype.cljs$core$IFn$ = !0;
String.prototype.call = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return cljs.core.get.call(null, c, this.toString());
      case 3:
        return cljs.core.get.call(null, c, this.toString(), d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
String.prototype.apply = function(a, b) {
  return cljs.core.truth_(2 > cljs.core.count.call(null, b)) ? cljs.core.get.call(null, b[0], a) : cljs.core.get.call(null, b[0], a, b[1])
};
cljs.core.lazy_seq_value = function(a) {
  var b = a.x;
  if(cljs.core.truth_(a.realized)) {
    return b
  }
  a.x = b.call(null);
  a.realized = !0;
  return a.x
};
cljs.core.LazySeq = function(a, b, c) {
  this.meta = a;
  this.realized = b;
  this.x = c
};
cljs.core.LazySeq.cljs$core$IPrintable$_pr_seq = function() {
  return cljs.core.list.call(null, "cljs.core.LazySeq")
};
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = !0;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = function(a) {
  return cljs.core.seq.call(null, cljs.core.lazy_seq_value.call(null, a))
};
cljs.core.LazySeq.prototype.cljs$core$IHash$ = !0;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = function(a) {
  return cljs.core.hash_coll.call(null, a)
};
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = !0;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = function(a, b) {
  return cljs.core.equiv_sequential.call(null, a, b)
};
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = !0;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = !0;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = function() {
  return cljs.core.with_meta.call(null, cljs.core.List.EMPTY, this.meta)
};
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = !0;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = function(a, b) {
  return cljs.core.cons.call(null, b, a)
};
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = !0;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = function(a) {
  return cljs.core.first.call(null, cljs.core.lazy_seq_value.call(null, a))
};
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = function(a) {
  return cljs.core.rest.call(null, cljs.core.lazy_seq_value.call(null, a))
};
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = !0;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = function() {
  return this.meta
};
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = !0;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = function(a, b) {
  return new cljs.core.LazySeq(b, this.realized, this.x)
};
cljs.core.to_array = function(a) {
  for(var b = [];;) {
    if(cljs.core.truth_(cljs.core.seq.call(null, a))) {
      b.push(cljs.core.first.call(null, a)), a = cljs.core.next.call(null, a)
    }else {
      return b
    }
  }
};
cljs.core.bounded_count = function(a, b) {
  for(var c = a, d = b, e = 0;;) {
    if(cljs.core.truth_(function() {
      var a = 0 < d;
      return cljs.core.truth_(a) ? cljs.core.seq.call(null, c) : a
    }())) {
      var f = cljs.core.next.call(null, c), g = d - 1, e = e + 1, c = f, d = g
    }else {
      return e
    }
  }
};
cljs.core.spread = function spread(b) {
  return cljs.core.truth_(null === b) ? null : cljs.core.truth_(null === cljs.core.next.call(null, b)) ? cljs.core.seq.call(null, cljs.core.first.call(null, b)) : cljs.core.truth_("\ufdd0'else") ? cljs.core.cons.call(null, cljs.core.first.call(null, b), spread.call(null, cljs.core.next.call(null, b))) : null
};
cljs.core.concat = function() {
  var a = null, b = function() {
    return new cljs.core.LazySeq(null, !1, function() {
      return null
    })
  }, c = function(a) {
    return new cljs.core.LazySeq(null, !1, function() {
      return a
    })
  }, d = function(b, c) {
    return new cljs.core.LazySeq(null, !1, function() {
      var d = cljs.core.seq.call(null, b);
      return cljs.core.truth_(d) ? cljs.core.cons.call(null, cljs.core.first.call(null, d), a.call(null, cljs.core.rest.call(null, d), c)) : c
    })
  }, e = function() {
    var b = function(b, c, d) {
      return function m(a, b) {
        return new cljs.core.LazySeq(null, !1, function() {
          var c = cljs.core.seq.call(null, a);
          return cljs.core.truth_(c) ? cljs.core.cons.call(null, cljs.core.first.call(null, c), m.call(null, cljs.core.rest.call(null, c), b)) : cljs.core.truth_(b) ? m.call(null, cljs.core.first.call(null, b), cljs.core.next.call(null, b)) : null
        })
      }.call(null, a.call(null, b, c), d)
    }, c = function(a, c, d) {
      var e = null;
      goog.isDef(d) && (e = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, a, c, e)
    };
    c.cljs$lang$maxFixedArity = 2;
    c.cljs$lang$applyTo = function(a) {
      var c = cljs.core.first(a), d = cljs.core.first(cljs.core.next(a)), a = cljs.core.rest(cljs.core.next(a));
      return b.call(this, c, d, a)
    };
    return c
  }(), a = function(a, g, h) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return c.call(this, a);
      case 2:
        return d.call(this, a, g);
      default:
        return e.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = e.cljs$lang$applyTo;
  return a
}();
cljs.core.list_STAR_ = function() {
  var a = null, b = function() {
    var a = function(a, b, c, d, i) {
      return cljs.core.cons.call(null, a, cljs.core.cons.call(null, b, cljs.core.cons.call(null, c, cljs.core.cons.call(null, d, cljs.core.spread.call(null, i)))))
    }, b = function(b, d, g, h, i) {
      var j = null;
      goog.isDef(i) && (j = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4), 0));
      return a.call(this, b, d, g, h, j)
    };
    b.cljs$lang$maxFixedArity = 4;
    b.cljs$lang$applyTo = function(b) {
      var d = cljs.core.first(b), g = cljs.core.first(cljs.core.next(b)), h = cljs.core.first(cljs.core.next(cljs.core.next(b))), i = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(b)))), b = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(b))));
      return a.call(this, d, g, h, i, b)
    };
    return b
  }(), a = function(a, d, e, f, g) {
    switch(arguments.length) {
      case 1:
        return cljs.core.seq.call(null, a);
      case 2:
        return cljs.core.cons.call(null, a, d);
      case 3:
        return cljs.core.cons.call(null, a, cljs.core.cons.call(null, d, e));
      case 4:
        return cljs.core.cons.call(null, a, cljs.core.cons.call(null, d, cljs.core.cons.call(null, e, f)));
      default:
        return b.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 4;
  a.cljs$lang$applyTo = b.cljs$lang$applyTo;
  return a
}();
cljs.core.apply = function() {
  var a = null, b = function() {
    var a = function(a, b, c, d, i, j) {
      b = cljs.core.cons.call(null, b, cljs.core.cons.call(null, c, cljs.core.cons.call(null, d, cljs.core.cons.call(null, i, cljs.core.spread.call(null, j)))));
      c = a.cljs$lang$maxFixedArity;
      return cljs.core.truth_(a.cljs$lang$applyTo) ? cljs.core.truth_(cljs.core.bounded_count.call(null, b, c) <= c) ? a.apply(a, cljs.core.to_array.call(null, b)) : a.cljs$lang$applyTo(b) : a.apply(a, cljs.core.to_array.call(null, b))
    }, b = function(b, d, g, h, i, j) {
      var k = null;
      goog.isDef(j) && (k = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5), 0));
      return a.call(this, b, d, g, h, i, k)
    };
    b.cljs$lang$maxFixedArity = 5;
    b.cljs$lang$applyTo = function(b) {
      var d = cljs.core.first(b), g = cljs.core.first(cljs.core.next(b)), h = cljs.core.first(cljs.core.next(cljs.core.next(b))), i = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(b)))), j = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(b))))), b = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(b)))));
      return a.call(this, d, g, h, i, j, b)
    };
    return b
  }(), a = function(a, d, e, f, g, h) {
    switch(arguments.length) {
      case 2:
        var i = a, j = d, k = i.cljs$lang$maxFixedArity;
        return cljs.core.truth_(i.cljs$lang$applyTo) ? cljs.core.truth_(cljs.core.bounded_count.call(null, j, k + 1) <= k) ? i.apply(i, cljs.core.to_array.call(null, j)) : i.cljs$lang$applyTo(j) : i.apply(i, cljs.core.to_array.call(null, j));
      case 3:
        return i = a, j = cljs.core.list_STAR_.call(null, d, e), k = i.cljs$lang$maxFixedArity, cljs.core.truth_(i.cljs$lang$applyTo) ? cljs.core.truth_(cljs.core.bounded_count.call(null, j, k) <= k) ? i.apply(i, cljs.core.to_array.call(null, j)) : i.cljs$lang$applyTo(j) : i.apply(i, cljs.core.to_array.call(null, j));
      case 4:
        return i = a, j = cljs.core.list_STAR_.call(null, d, e, f), k = i.cljs$lang$maxFixedArity, cljs.core.truth_(i.cljs$lang$applyTo) ? cljs.core.truth_(cljs.core.bounded_count.call(null, j, k) <= k) ? i.apply(i, cljs.core.to_array.call(null, j)) : i.cljs$lang$applyTo(j) : i.apply(i, cljs.core.to_array.call(null, j));
      case 5:
        return i = a, j = cljs.core.list_STAR_.call(null, d, e, f, g), k = i.cljs$lang$maxFixedArity, cljs.core.truth_(i.cljs$lang$applyTo) ? cljs.core.truth_(cljs.core.bounded_count.call(null, j, k) <= k) ? i.apply(i, cljs.core.to_array.call(null, j)) : i.cljs$lang$applyTo(j) : i.apply(i, cljs.core.to_array.call(null, j));
      default:
        return b.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 5;
  a.cljs$lang$applyTo = b.cljs$lang$applyTo;
  return a
}();
cljs.core.vary_meta = function() {
  var a = function(a, b, e) {
    return cljs.core.with_meta.call(null, a, cljs.core.apply.call(null, b, cljs.core.meta.call(null, a), e))
  }, b = function(b, d, e) {
    var f = null;
    goog.isDef(e) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
    return a.call(this, b, d, f)
  };
  b.cljs$lang$maxFixedArity = 2;
  b.cljs$lang$applyTo = function(b) {
    var d = cljs.core.first(b), e = cljs.core.first(cljs.core.next(b)), b = cljs.core.rest(cljs.core.next(b));
    return a.call(this, d, e, b)
  };
  return b
}();
cljs.core.not_EQ_ = function() {
  var a = null, b = function() {
    var a = function(a, b, c) {
      var g = null;
      goog.isDef(c) && (g = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return cljs.core.not.call(null, cljs.core.apply.call(null, cljs.core._EQ_, a, b, g))
    };
    a.cljs$lang$maxFixedArity = 2;
    a.cljs$lang$applyTo = function(a) {
      var b = cljs.core.first(a), c = cljs.core.first(cljs.core.next(a)), a = cljs.core.rest(cljs.core.next(a));
      return cljs.core.not.call(null, cljs.core.apply.call(null, cljs.core._EQ_, b, c, a))
    };
    return a
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return!1;
      case 2:
        return cljs.core.not.call(null, cljs.core._EQ_.call(null, a, d));
      default:
        return b.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = b.cljs$lang$applyTo;
  return a
}();
cljs.core.not_empty = function(a) {
  return cljs.core.truth_(cljs.core.seq.call(null, a)) ? a : null
};
cljs.core.every_QMARK_ = function(a, b) {
  for(;;) {
    if(cljs.core.truth_(null === cljs.core.seq.call(null, b))) {
      return!0
    }
    if(cljs.core.truth_(a.call(null, cljs.core.first.call(null, b)))) {
      var c = a, d = cljs.core.next.call(null, b), a = c, b = d
    }else {
      return cljs.core.truth_("\ufdd0'else") ? !1 : null
    }
  }
};
cljs.core.not_every_QMARK_ = function(a, b) {
  return cljs.core.not.call(null, cljs.core.every_QMARK_.call(null, a, b))
};
cljs.core.some = function(a, b) {
  for(;;) {
    if(cljs.core.truth_(cljs.core.seq.call(null, b))) {
      var c = a.call(null, cljs.core.first.call(null, b));
      if(cljs.core.truth_(c)) {
        return c
      }
      var c = a, d = cljs.core.next.call(null, b), a = c, b = d
    }else {
      return null
    }
  }
};
cljs.core.not_any_QMARK_ = function(a, b) {
  return cljs.core.not.call(null, cljs.core.some.call(null, a, b))
};
cljs.core.even_QMARK_ = function(a) {
  if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null, a))) {
    return 0 === (a & 1)
  }
  throw Error(cljs.core.str.call(null, "Argument must be an integer: ", a));
};
cljs.core.odd_QMARK_ = function(a) {
  return cljs.core.not.call(null, cljs.core.even_QMARK_.call(null, a))
};
cljs.core.identity = function(a) {
  return a
};
cljs.core.complement = function(a) {
  return function() {
    var b = null, c = function() {
      var b = function(b, c, d) {
        var h = null;
        goog.isDef(d) && (h = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
        return cljs.core.not.call(null, cljs.core.apply.call(null, a, b, c, h))
      };
      b.cljs$lang$maxFixedArity = 2;
      b.cljs$lang$applyTo = function(b) {
        var c = cljs.core.first(b), d = cljs.core.first(cljs.core.next(b)), b = cljs.core.rest(cljs.core.next(b));
        return cljs.core.not.call(null, cljs.core.apply.call(null, a, c, d, b))
      };
      return b
    }(), b = function(b, e, f) {
      switch(arguments.length) {
        case 0:
          return cljs.core.not.call(null, a.call(null));
        case 1:
          return cljs.core.not.call(null, a.call(null, b));
        case 2:
          return cljs.core.not.call(null, a.call(null, b, e));
        default:
          return c.apply(this, arguments)
      }
      throw"Invalid arity: " + arguments.length;
    };
    b.cljs$lang$maxFixedArity = 2;
    b.cljs$lang$applyTo = c.cljs$lang$applyTo;
    return b
  }()
};
cljs.core.constantly = function(a) {
  return function() {
    var b = function(b) {
      goog.isDef(b) && cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0);
      return a
    };
    b.cljs$lang$maxFixedArity = 0;
    b.cljs$lang$applyTo = function(b) {
      cljs.core.seq(b);
      return a
    };
    return b
  }()
};
cljs.core.comp = function() {
  var a = null, b = function(a, b) {
    return function() {
      var c = null, d = function() {
        var c = function(c, d, g, h) {
          var i = null;
          goog.isDef(h) && (i = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
          return a.call(null, cljs.core.apply.call(null, b, c, d, g, i))
        };
        c.cljs$lang$maxFixedArity = 3;
        c.cljs$lang$applyTo = function(c) {
          var d = cljs.core.first(c), g = cljs.core.first(cljs.core.next(c)), h = cljs.core.first(cljs.core.next(cljs.core.next(c))), c = cljs.core.rest(cljs.core.next(cljs.core.next(c)));
          return a.call(null, cljs.core.apply.call(null, b, d, g, h, c))
        };
        return c
      }(), c = function(c, g, k, m) {
        switch(arguments.length) {
          case 0:
            return a.call(null, b.call(null));
          case 1:
            return a.call(null, b.call(null, c));
          case 2:
            return a.call(null, b.call(null, c, g));
          case 3:
            return a.call(null, b.call(null, c, g, k));
          default:
            return d.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      c.cljs$lang$maxFixedArity = 3;
      c.cljs$lang$applyTo = d.cljs$lang$applyTo;
      return c
    }()
  }, c = function(a, b, c) {
    return function() {
      var d = null, i = function() {
        var d = function(d, h, i, j) {
          var o = null;
          goog.isDef(j) && (o = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
          return a.call(null, b.call(null, cljs.core.apply.call(null, c, d, h, i, o)))
        };
        d.cljs$lang$maxFixedArity = 3;
        d.cljs$lang$applyTo = function(d) {
          var h = cljs.core.first(d), i = cljs.core.first(cljs.core.next(d)), j = cljs.core.first(cljs.core.next(cljs.core.next(d))), d = cljs.core.rest(cljs.core.next(cljs.core.next(d)));
          return a.call(null, b.call(null, cljs.core.apply.call(null, c, h, i, j, d)))
        };
        return d
      }(), d = function(d, h, m, l) {
        switch(arguments.length) {
          case 0:
            return a.call(null, b.call(null, c.call(null)));
          case 1:
            return a.call(null, b.call(null, c.call(null, d)));
          case 2:
            return a.call(null, b.call(null, c.call(null, d, h)));
          case 3:
            return a.call(null, b.call(null, c.call(null, d, h, m)));
          default:
            return i.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      d.cljs$lang$maxFixedArity = 3;
      d.cljs$lang$applyTo = i.cljs$lang$applyTo;
      return d
    }()
  }, d = function() {
    var a = function(a, b, c, d) {
      var e = cljs.core.reverse.call(null, cljs.core.list_STAR_.call(null, a, b, c, d));
      return function() {
        var a = function(a) {
          for(var a = cljs.core.apply.call(null, cljs.core.first.call(null, e), a), b = cljs.core.next.call(null, e);;) {
            if(cljs.core.truth_(b)) {
              a = cljs.core.first.call(null, b).call(null, a), b = cljs.core.next.call(null, b)
            }else {
              return a
            }
          }
        }, b = function(b) {
          var c = null;
          goog.isDef(b) && (c = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
          return a.call(this, c)
        };
        b.cljs$lang$maxFixedArity = 0;
        b.cljs$lang$applyTo = function(b) {
          b = cljs.core.seq(b);
          return a.call(this, b)
        };
        return b
      }()
    }, b = function(b, c, d, f) {
      var k = null;
      goog.isDef(f) && (k = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
      return a.call(this, b, c, d, k)
    };
    b.cljs$lang$maxFixedArity = 3;
    b.cljs$lang$applyTo = function(b) {
      var c = cljs.core.first(b), d = cljs.core.first(cljs.core.next(b)), f = cljs.core.first(cljs.core.next(cljs.core.next(b))), b = cljs.core.rest(cljs.core.next(cljs.core.next(b)));
      return a.call(this, c, d, f, b)
    };
    return b
  }(), a = function(a, f, g, h) {
    switch(arguments.length) {
      case 0:
        return cljs.core.identity;
      case 1:
        return a;
      case 2:
        return b.call(this, a, f);
      case 3:
        return c.call(this, a, f, g);
      default:
        return d.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 3;
  a.cljs$lang$applyTo = d.cljs$lang$applyTo;
  return a
}();
cljs.core.partial = function() {
  var a = null, b = function(a, b) {
    return function() {
      var c = function(c) {
        var d = null;
        goog.isDef(c) && (d = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
        return cljs.core.apply.call(null, a, b, d)
      };
      c.cljs$lang$maxFixedArity = 0;
      c.cljs$lang$applyTo = function(c) {
        c = cljs.core.seq(c);
        return cljs.core.apply.call(null, a, b, c)
      };
      return c
    }()
  }, c = function(a, b, c) {
    return function() {
      var d = function(d) {
        var e = null;
        goog.isDef(d) && (e = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
        return cljs.core.apply.call(null, a, b, c, e)
      };
      d.cljs$lang$maxFixedArity = 0;
      d.cljs$lang$applyTo = function(d) {
        d = cljs.core.seq(d);
        return cljs.core.apply.call(null, a, b, c, d)
      };
      return d
    }()
  }, d = function(a, b, c, d) {
    return function() {
      var e = function(e) {
        var j = null;
        goog.isDef(e) && (j = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
        return cljs.core.apply.call(null, a, b, c, d, j)
      };
      e.cljs$lang$maxFixedArity = 0;
      e.cljs$lang$applyTo = function(e) {
        e = cljs.core.seq(e);
        return cljs.core.apply.call(null, a, b, c, d, e)
      };
      return e
    }()
  }, e = function() {
    var a = function(a, b, c, d, e) {
      return function() {
        var f = function(f) {
          return cljs.core.apply.call(null, a, b, c, d, cljs.core.concat.call(null, e, f))
        }, g = function(a) {
          var b = null;
          goog.isDef(a) && (b = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
          return f.call(this, b)
        };
        g.cljs$lang$maxFixedArity = 0;
        g.cljs$lang$applyTo = function(a) {
          a = cljs.core.seq(a);
          return f.call(this, a)
        };
        return g
      }()
    }, b = function(b, c, d, e, g) {
      var l = null;
      goog.isDef(g) && (l = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4), 0));
      return a.call(this, b, c, d, e, l)
    };
    b.cljs$lang$maxFixedArity = 4;
    b.cljs$lang$applyTo = function(b) {
      var c = cljs.core.first(b), d = cljs.core.first(cljs.core.next(b)), e = cljs.core.first(cljs.core.next(cljs.core.next(b))), g = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(b)))), b = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(b))));
      return a.call(this, c, d, e, g, b)
    };
    return b
  }(), a = function(a, g, h, i, j) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, g);
      case 3:
        return c.call(this, a, g, h);
      case 4:
        return d.call(this, a, g, h, i);
      default:
        return e.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 4;
  a.cljs$lang$applyTo = e.cljs$lang$applyTo;
  return a
}();
cljs.core.fnil = function() {
  var a = null, b = function(a, b) {
    return function() {
      var c = null, d = function() {
        var c = function(c, d, g, h) {
          var i = null;
          goog.isDef(h) && (i = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
          return cljs.core.apply.call(null, a, cljs.core.truth_(null === c) ? b : c, d, g, i)
        };
        c.cljs$lang$maxFixedArity = 3;
        c.cljs$lang$applyTo = function(c) {
          var d = cljs.core.first(c), g = cljs.core.first(cljs.core.next(c)), h = cljs.core.first(cljs.core.next(cljs.core.next(c))), c = cljs.core.rest(cljs.core.next(cljs.core.next(c)));
          return cljs.core.apply.call(null, a, cljs.core.truth_(null === d) ? b : d, g, h, c)
        };
        return c
      }(), c = function(c, g, k, m) {
        switch(arguments.length) {
          case 1:
            return a.call(null, cljs.core.truth_(null === c) ? b : c);
          case 2:
            return a.call(null, cljs.core.truth_(null === c) ? b : c, g);
          case 3:
            return a.call(null, cljs.core.truth_(null === c) ? b : c, g, k);
          default:
            return d.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      c.cljs$lang$maxFixedArity = 3;
      c.cljs$lang$applyTo = d.cljs$lang$applyTo;
      return c
    }()
  }, c = function(a, b, c) {
    return function() {
      var d = null, i = function() {
        var d = function(d, h, i, j) {
          return cljs.core.apply.call(null, a, cljs.core.truth_(null === d) ? b : d, cljs.core.truth_(null === h) ? c : h, i, j)
        }, h = function(a, b, c, e) {
          var f = null;
          goog.isDef(e) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, c, f)
        };
        h.cljs$lang$maxFixedArity = 3;
        h.cljs$lang$applyTo = function(a) {
          var b = cljs.core.first(a), c = cljs.core.first(cljs.core.next(a)), e = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
          return d.call(this, b, c, e, a)
        };
        return h
      }(), d = function(d, h, m, l) {
        switch(arguments.length) {
          case 2:
            return a.call(null, cljs.core.truth_(null === d) ? b : d, cljs.core.truth_(null === h) ? c : h);
          case 3:
            return a.call(null, cljs.core.truth_(null === d) ? b : d, cljs.core.truth_(null === h) ? c : h, m);
          default:
            return i.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      d.cljs$lang$maxFixedArity = 3;
      d.cljs$lang$applyTo = i.cljs$lang$applyTo;
      return d
    }()
  }, d = function(a, b, c, d) {
    return function() {
      var i = null, j = function() {
        var i = function(i, j, k, m) {
          return cljs.core.apply.call(null, a, cljs.core.truth_(null === i) ? b : i, cljs.core.truth_(null === j) ? c : j, cljs.core.truth_(null === k) ? d : k, m)
        }, j = function(a, b, c, d) {
          var e = null;
          goog.isDef(d) && (e = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
          return i.call(this, a, b, c, e)
        };
        j.cljs$lang$maxFixedArity = 3;
        j.cljs$lang$applyTo = function(a) {
          var b = cljs.core.first(a), c = cljs.core.first(cljs.core.next(a)), d = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
          return i.call(this, b, c, d, a)
        };
        return j
      }(), i = function(i, m, l, n) {
        switch(arguments.length) {
          case 2:
            return a.call(null, cljs.core.truth_(null === i) ? b : i, cljs.core.truth_(null === m) ? c : m);
          case 3:
            return a.call(null, cljs.core.truth_(null === i) ? b : i, cljs.core.truth_(null === m) ? c : m, cljs.core.truth_(null === l) ? d : l);
          default:
            return j.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      i.cljs$lang$maxFixedArity = 3;
      i.cljs$lang$applyTo = j.cljs$lang$applyTo;
      return i
    }()
  };
  return function(a, f, g, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, f);
      case 3:
        return c.call(this, a, f, g);
      case 4:
        return d.call(this, a, f, g, h)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.map_indexed = function(a, b) {
  return function d(b, f) {
    return new cljs.core.LazySeq(null, !1, function() {
      var g = cljs.core.seq.call(null, f);
      return cljs.core.truth_(g) ? cljs.core.cons.call(null, a.call(null, b, cljs.core.first.call(null, g)), d.call(null, b + 1, cljs.core.rest.call(null, g))) : null
    })
  }.call(null, 0, b)
};
cljs.core.keep = function keep(b, c) {
  return new cljs.core.LazySeq(null, !1, function() {
    var d = cljs.core.seq.call(null, c);
    if(cljs.core.truth_(d)) {
      var e = b.call(null, cljs.core.first.call(null, d));
      return cljs.core.truth_(null === e) ? keep.call(null, b, cljs.core.rest.call(null, d)) : cljs.core.cons.call(null, e, keep.call(null, b, cljs.core.rest.call(null, d)))
    }
    return null
  })
};
cljs.core.keep_indexed = function(a, b) {
  return function d(b, f) {
    return new cljs.core.LazySeq(null, !1, function() {
      var g = cljs.core.seq.call(null, f);
      if(cljs.core.truth_(g)) {
        var h = a.call(null, b, cljs.core.first.call(null, g));
        return cljs.core.truth_(null === h) ? d.call(null, b + 1, cljs.core.rest.call(null, g)) : cljs.core.cons.call(null, h, d.call(null, b + 1, cljs.core.rest.call(null, g)))
      }
      return null
    })
  }.call(null, 0, b)
};
cljs.core.every_pred = function() {
  var a = null, b = function(a) {
    return function() {
      var b = null, c = function(b, c) {
        return cljs.core.boolean$.call(null, function() {
          var d = a.call(null, b);
          return cljs.core.truth_(d) ? a.call(null, c) : d
        }())
      }, d = function(b, c, d) {
        return cljs.core.boolean$.call(null, function() {
          var e = a.call(null, b);
          return cljs.core.truth_(e) ? (e = a.call(null, c), cljs.core.truth_(e) ? a.call(null, d) : e) : e
        }())
      }, e = function() {
        var c = function(c, d, e, h) {
          return cljs.core.boolean$.call(null, function() {
            var i = b.call(null, c, d, e);
            return cljs.core.truth_(i) ? cljs.core.every_QMARK_.call(null, a, h) : i
          }())
        }, d = function(a, b, d, e) {
          var f = null;
          goog.isDef(e) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
          return c.call(this, a, b, d, f)
        };
        d.cljs$lang$maxFixedArity = 3;
        d.cljs$lang$applyTo = function(a) {
          var b = cljs.core.first(a), d = cljs.core.first(cljs.core.next(a)), e = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
          return c.call(this, b, d, e, a)
        };
        return d
      }(), b = function(b, g, l, n) {
        switch(arguments.length) {
          case 0:
            return!0;
          case 1:
            return cljs.core.boolean$.call(null, a.call(null, b));
          case 2:
            return c.call(this, b, g);
          case 3:
            return d.call(this, b, g, l);
          default:
            return e.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      b.cljs$lang$maxFixedArity = 3;
      b.cljs$lang$applyTo = e.cljs$lang$applyTo;
      return b
    }()
  }, c = function(a, b) {
    return function() {
      var c = null, d = function(c) {
        return cljs.core.boolean$.call(null, function() {
          var d = a.call(null, c);
          return cljs.core.truth_(d) ? b.call(null, c) : d
        }())
      }, e = function(c, d) {
        return cljs.core.boolean$.call(null, function() {
          var e = a.call(null, c);
          return cljs.core.truth_(e) && (e = a.call(null, d), cljs.core.truth_(e)) ? (e = b.call(null, c), cljs.core.truth_(e) ? b.call(null, d) : e) : e
        }())
      }, k = function(c, d, e) {
        return cljs.core.boolean$.call(null, function() {
          var h = a.call(null, c);
          return cljs.core.truth_(h) && (h = a.call(null, d), cljs.core.truth_(h) && (h = a.call(null, e), cljs.core.truth_(h) && (h = b.call(null, c), cljs.core.truth_(h)))) ? (h = b.call(null, d), cljs.core.truth_(h) ? b.call(null, e) : h) : h
        }())
      }, m = function() {
        var d = function(d, e, i, j) {
          return cljs.core.boolean$.call(null, function() {
            var l = c.call(null, d, e, i);
            return cljs.core.truth_(l) ? cljs.core.every_QMARK_.call(null, function(c) {
              var d = a.call(null, c);
              return cljs.core.truth_(d) ? b.call(null, c) : d
            }, j) : l
          }())
        }, e = function(a, b, c, e) {
          var f = null;
          goog.isDef(e) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, c, f)
        };
        e.cljs$lang$maxFixedArity = 3;
        e.cljs$lang$applyTo = function(a) {
          var b = cljs.core.first(a), c = cljs.core.first(cljs.core.next(a)), e = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
          return d.call(this, b, c, e, a)
        };
        return e
      }(), c = function(a, b, c, f) {
        switch(arguments.length) {
          case 0:
            return!0;
          case 1:
            return d.call(this, a);
          case 2:
            return e.call(this, a, b);
          case 3:
            return k.call(this, a, b, c);
          default:
            return m.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      c.cljs$lang$maxFixedArity = 3;
      c.cljs$lang$applyTo = m.cljs$lang$applyTo;
      return c
    }()
  }, d = function(a, b, c) {
    return function() {
      var d = null, e = function(d) {
        return cljs.core.boolean$.call(null, function() {
          var e = a.call(null, d);
          return cljs.core.truth_(e) ? (e = b.call(null, d), cljs.core.truth_(e) ? c.call(null, d) : e) : e
        }())
      }, k = function(d, e) {
        return cljs.core.boolean$.call(null, function() {
          var i = a.call(null, d);
          return cljs.core.truth_(i) && (i = b.call(null, d), cljs.core.truth_(i) && (i = c.call(null, d), cljs.core.truth_(i) && (i = a.call(null, e), cljs.core.truth_(i)))) ? (i = b.call(null, e), cljs.core.truth_(i) ? c.call(null, e) : i) : i
        }())
      }, m = function(d, e, i) {
        return cljs.core.boolean$.call(null, function() {
          var j = a.call(null, d);
          return cljs.core.truth_(j) && (j = b.call(null, d), cljs.core.truth_(j) && (j = c.call(null, d), cljs.core.truth_(j) && (j = a.call(null, e), cljs.core.truth_(j) && (j = b.call(null, e), cljs.core.truth_(j) && (j = c.call(null, e), cljs.core.truth_(j) && (j = a.call(null, i), cljs.core.truth_(j))))))) ? (j = b.call(null, i), cljs.core.truth_(j) ? c.call(null, i) : j) : j
        }())
      }, l = function() {
        var e = function(e, j, l, k) {
          return cljs.core.boolean$.call(null, function() {
            var m = d.call(null, e, j, l);
            return cljs.core.truth_(m) ? cljs.core.every_QMARK_.call(null, function(d) {
              var e = a.call(null, d);
              return cljs.core.truth_(e) ? (e = b.call(null, d), cljs.core.truth_(e) ? c.call(null, d) : e) : e
            }, k) : m
          }())
        }, j = function(a, b, c, d) {
          var f = null;
          goog.isDef(d) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
          return e.call(this, a, b, c, f)
        };
        j.cljs$lang$maxFixedArity = 3;
        j.cljs$lang$applyTo = function(a) {
          var b = cljs.core.first(a), c = cljs.core.first(cljs.core.next(a)), d = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
          return e.call(this, b, c, d, a)
        };
        return j
      }(), d = function(a, b, c, d) {
        switch(arguments.length) {
          case 0:
            return!0;
          case 1:
            return e.call(this, a);
          case 2:
            return k.call(this, a, b);
          case 3:
            return m.call(this, a, b, c);
          default:
            return l.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      d.cljs$lang$maxFixedArity = 3;
      d.cljs$lang$applyTo = l.cljs$lang$applyTo;
      return d
    }()
  }, e = function() {
    var a = function(a, b, c, d) {
      var e = cljs.core.list_STAR_.call(null, a, b, c, d);
      return function() {
        var a = null, b = function(a) {
          return cljs.core.every_QMARK_.call(null, function(b) {
            return b.call(null, a)
          }, e)
        }, c = function(a, b) {
          return cljs.core.every_QMARK_.call(null, function(c) {
            var d = c.call(null, a);
            return cljs.core.truth_(d) ? c.call(null, b) : d
          }, e)
        }, d = function(a, b, c) {
          return cljs.core.every_QMARK_.call(null, function(d) {
            var e = d.call(null, a);
            return cljs.core.truth_(e) ? (e = d.call(null, b), cljs.core.truth_(e) ? d.call(null, c) : e) : e
          }, e)
        }, f = function() {
          var b = function(b, c, d, f) {
            return cljs.core.boolean$.call(null, function() {
              var g = a.call(null, b, c, d);
              return cljs.core.truth_(g) ? cljs.core.every_QMARK_.call(null, function(a) {
                return cljs.core.every_QMARK_.call(null, a, f)
              }, e) : g
            }())
          }, c = function(a, c, d, e) {
            var f = null;
            goog.isDef(e) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
            return b.call(this, a, c, d, f)
          };
          c.cljs$lang$maxFixedArity = 3;
          c.cljs$lang$applyTo = function(a) {
            var c = cljs.core.first(a), d = cljs.core.first(cljs.core.next(a)), e = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
            return b.call(this, c, d, e, a)
          };
          return c
        }(), a = function(a, e, g, h) {
          switch(arguments.length) {
            case 0:
              return!0;
            case 1:
              return b.call(this, a);
            case 2:
              return c.call(this, a, e);
            case 3:
              return d.call(this, a, e, g);
            default:
              return f.apply(this, arguments)
          }
          throw"Invalid arity: " + arguments.length;
        };
        a.cljs$lang$maxFixedArity = 3;
        a.cljs$lang$applyTo = f.cljs$lang$applyTo;
        return a
      }()
    }, b = function(b, c, d, e) {
      var g = null;
      goog.isDef(e) && (g = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
      return a.call(this, b, c, d, g)
    };
    b.cljs$lang$maxFixedArity = 3;
    b.cljs$lang$applyTo = function(b) {
      var c = cljs.core.first(b), d = cljs.core.first(cljs.core.next(b)), e = cljs.core.first(cljs.core.next(cljs.core.next(b))), b = cljs.core.rest(cljs.core.next(cljs.core.next(b)));
      return a.call(this, c, d, e, b)
    };
    return b
  }(), a = function(a, g, h, i) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, g);
      case 3:
        return d.call(this, a, g, h);
      default:
        return e.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 3;
  a.cljs$lang$applyTo = e.cljs$lang$applyTo;
  return a
}();
cljs.core.some_fn = function() {
  var a = null, b = function(a) {
    return function() {
      var b = null, c = function() {
        var c = function(c, d, e, h) {
          c = b.call(null, c, d, e);
          return cljs.core.truth_(c) ? c : cljs.core.some.call(null, a, h)
        }, d = function(a, b, d, e) {
          var f = null;
          goog.isDef(e) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
          return c.call(this, a, b, d, f)
        };
        d.cljs$lang$maxFixedArity = 3;
        d.cljs$lang$applyTo = function(a) {
          var b = cljs.core.first(a), d = cljs.core.first(cljs.core.next(a)), e = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
          return c.call(this, b, d, e, a)
        };
        return d
      }(), b = function(b, d, e, g) {
        switch(arguments.length) {
          case 0:
            return null;
          case 1:
            return a.call(null, b);
          case 2:
            var l = d, n = a.call(null, b);
            return cljs.core.truth_(n) ? n : a.call(null, l);
          case 3:
            var n = d, l = e, o = a.call(null, b);
            cljs.core.truth_(o) ? l = o : (n = a.call(null, n), l = cljs.core.truth_(n) ? n : a.call(null, l));
            return l;
          default:
            return c.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      b.cljs$lang$maxFixedArity = 3;
      b.cljs$lang$applyTo = c.cljs$lang$applyTo;
      return b
    }()
  }, c = function(a, b) {
    return function() {
      var c = null, d = function(c, d, e) {
        var h = a.call(null, c);
        if(cljs.core.truth_(h)) {
          return h
        }
        h = a.call(null, d);
        if(cljs.core.truth_(h)) {
          return h
        }
        h = a.call(null, e);
        if(cljs.core.truth_(h)) {
          return h
        }
        c = b.call(null, c);
        if(cljs.core.truth_(c)) {
          return c
        }
        d = b.call(null, d);
        return cljs.core.truth_(d) ? d : b.call(null, e)
      }, e = function() {
        var d = function(d, e, i, j) {
          d = c.call(null, d, e, i);
          return cljs.core.truth_(d) ? d : cljs.core.some.call(null, function(c) {
            var d = a.call(null, c);
            return cljs.core.truth_(d) ? d : b.call(null, c)
          }, j)
        }, e = function(a, b, c, e) {
          var f = null;
          goog.isDef(e) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, c, f)
        };
        e.cljs$lang$maxFixedArity = 3;
        e.cljs$lang$applyTo = function(a) {
          var b = cljs.core.first(a), c = cljs.core.first(cljs.core.next(a)), e = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
          return d.call(this, b, c, e, a)
        };
        return e
      }(), c = function(c, h, l, n) {
        switch(arguments.length) {
          case 0:
            return null;
          case 1:
            var o = c, q = a.call(null, o);
            return cljs.core.truth_(q) ? q : b.call(null, o);
          case 2:
            var q = c, o = h, p = a.call(null, q);
            cljs.core.truth_(p) ? o = p : (p = a.call(null, o), cljs.core.truth_(p) ? o = p : (q = b.call(null, q), o = cljs.core.truth_(q) ? q : b.call(null, o)));
            return o;
          case 3:
            return d.call(this, c, h, l);
          default:
            return e.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      c.cljs$lang$maxFixedArity = 3;
      c.cljs$lang$applyTo = e.cljs$lang$applyTo;
      return c
    }()
  }, d = function(a, b, c) {
    return function() {
      var d = null, e = function(d, e) {
        var i = a.call(null, d);
        if(cljs.core.truth_(i)) {
          return i
        }
        i = b.call(null, d);
        if(cljs.core.truth_(i)) {
          return i
        }
        i = c.call(null, d);
        if(cljs.core.truth_(i)) {
          return i
        }
        i = a.call(null, e);
        if(cljs.core.truth_(i)) {
          return i
        }
        i = b.call(null, e);
        return cljs.core.truth_(i) ? i : c.call(null, e)
      }, k = function(d, e, i) {
        var j = a.call(null, d);
        if(cljs.core.truth_(j)) {
          return j
        }
        j = b.call(null, d);
        if(cljs.core.truth_(j)) {
          return j
        }
        d = c.call(null, d);
        if(cljs.core.truth_(d)) {
          return d
        }
        d = a.call(null, e);
        if(cljs.core.truth_(d)) {
          return d
        }
        d = b.call(null, e);
        if(cljs.core.truth_(d)) {
          return d
        }
        e = c.call(null, e);
        if(cljs.core.truth_(e)) {
          return e
        }
        e = a.call(null, i);
        if(cljs.core.truth_(e)) {
          return e
        }
        e = b.call(null, i);
        return cljs.core.truth_(e) ? e : c.call(null, i)
      }, m = function() {
        var e = function(e, j, m, k) {
          e = d.call(null, e, j, m);
          return cljs.core.truth_(e) ? e : cljs.core.some.call(null, function(d) {
            var e = a.call(null, d);
            if(cljs.core.truth_(e)) {
              return e
            }
            e = b.call(null, d);
            return cljs.core.truth_(e) ? e : c.call(null, d)
          }, k)
        }, j = function(a, b, c, d) {
          var f = null;
          goog.isDef(d) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
          return e.call(this, a, b, c, f)
        };
        j.cljs$lang$maxFixedArity = 3;
        j.cljs$lang$applyTo = function(a) {
          var b = cljs.core.first(a), c = cljs.core.first(cljs.core.next(a)), d = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
          return e.call(this, b, c, d, a)
        };
        return j
      }(), d = function(d, i, o, q) {
        switch(arguments.length) {
          case 0:
            return null;
          case 1:
            var p;
            p = d;
            var r = a.call(null, p);
            cljs.core.truth_(r) ? p = r : (r = b.call(null, p), p = cljs.core.truth_(r) ? r : c.call(null, p));
            return p;
          case 2:
            return e.call(this, d, i);
          case 3:
            return k.call(this, d, i, o);
          default:
            return m.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      d.cljs$lang$maxFixedArity = 3;
      d.cljs$lang$applyTo = m.cljs$lang$applyTo;
      return d
    }()
  }, e = function() {
    var a = function(a, b, c, d) {
      var e = cljs.core.list_STAR_.call(null, a, b, c, d);
      return function() {
        var a = null, b = function(a) {
          return cljs.core.some.call(null, function(b) {
            return b.call(null, a)
          }, e)
        }, c = function(a, b) {
          return cljs.core.some.call(null, function(c) {
            var d = c.call(null, a);
            return cljs.core.truth_(d) ? d : c.call(null, b)
          }, e)
        }, d = function(a, b, c) {
          return cljs.core.some.call(null, function(d) {
            var e = d.call(null, a);
            if(cljs.core.truth_(e)) {
              return e
            }
            e = d.call(null, b);
            return cljs.core.truth_(e) ? e : d.call(null, c)
          }, e)
        }, f = function() {
          var b = function(b, c, d, f) {
            b = a.call(null, b, c, d);
            return cljs.core.truth_(b) ? b : cljs.core.some.call(null, function(a) {
              return cljs.core.some.call(null, a, f)
            }, e)
          }, c = function(a, c, d, e) {
            var f = null;
            goog.isDef(e) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
            return b.call(this, a, c, d, f)
          };
          c.cljs$lang$maxFixedArity = 3;
          c.cljs$lang$applyTo = function(a) {
            var c = cljs.core.first(a), d = cljs.core.first(cljs.core.next(a)), e = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
            return b.call(this, c, d, e, a)
          };
          return c
        }(), a = function(a, e, g, h) {
          switch(arguments.length) {
            case 0:
              return null;
            case 1:
              return b.call(this, a);
            case 2:
              return c.call(this, a, e);
            case 3:
              return d.call(this, a, e, g);
            default:
              return f.apply(this, arguments)
          }
          throw"Invalid arity: " + arguments.length;
        };
        a.cljs$lang$maxFixedArity = 3;
        a.cljs$lang$applyTo = f.cljs$lang$applyTo;
        return a
      }()
    }, b = function(b, c, d, e) {
      var g = null;
      goog.isDef(e) && (g = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
      return a.call(this, b, c, d, g)
    };
    b.cljs$lang$maxFixedArity = 3;
    b.cljs$lang$applyTo = function(b) {
      var c = cljs.core.first(b), d = cljs.core.first(cljs.core.next(b)), e = cljs.core.first(cljs.core.next(cljs.core.next(b))), b = cljs.core.rest(cljs.core.next(cljs.core.next(b)));
      return a.call(this, c, d, e, b)
    };
    return b
  }(), a = function(a, g, h, i) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, g);
      case 3:
        return d.call(this, a, g, h);
      default:
        return e.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 3;
  a.cljs$lang$applyTo = e.cljs$lang$applyTo;
  return a
}();
cljs.core.map = function() {
  var a = null, b = function(b, c) {
    return new cljs.core.LazySeq(null, !1, function() {
      var d = cljs.core.seq.call(null, c);
      return cljs.core.truth_(d) ? cljs.core.cons.call(null, b.call(null, cljs.core.first.call(null, d)), a.call(null, b, cljs.core.rest.call(null, d))) : null
    })
  }, c = function(b, c, d) {
    return new cljs.core.LazySeq(null, !1, function() {
      var e = cljs.core.seq.call(null, c), j = cljs.core.seq.call(null, d);
      return cljs.core.truth_(cljs.core.truth_(e) ? j : e) ? cljs.core.cons.call(null, b.call(null, cljs.core.first.call(null, e), cljs.core.first.call(null, j)), a.call(null, b, cljs.core.rest.call(null, e), cljs.core.rest.call(null, j))) : null
    })
  }, d = function(b, c, d, e) {
    return new cljs.core.LazySeq(null, !1, function() {
      var j = cljs.core.seq.call(null, c), k = cljs.core.seq.call(null, d), m = cljs.core.seq.call(null, e);
      return cljs.core.truth_(cljs.core.truth_(j) ? cljs.core.truth_(k) ? m : k : j) ? cljs.core.cons.call(null, b.call(null, cljs.core.first.call(null, j), cljs.core.first.call(null, k), cljs.core.first.call(null, m)), a.call(null, b, cljs.core.rest.call(null, j), cljs.core.rest.call(null, k), cljs.core.rest.call(null, m))) : null
    })
  }, e = function() {
    var b = function(b, c, d, e, f) {
      return a.call(null, function(a) {
        return cljs.core.apply.call(null, b, a)
      }, function n(b) {
        return new cljs.core.LazySeq(null, !1, function() {
          var c = a.call(null, cljs.core.seq, b);
          return cljs.core.truth_(cljs.core.every_QMARK_.call(null, cljs.core.identity, c)) ? cljs.core.cons.call(null, a.call(null, cljs.core.first, c), n.call(null, a.call(null, cljs.core.rest, c))) : null
        })
      }.call(null, cljs.core.conj.call(null, f, e, d, c)))
    }, c = function(a, c, d, e, g) {
      var l = null;
      goog.isDef(g) && (l = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, a, c, d, e, l)
    };
    c.cljs$lang$maxFixedArity = 4;
    c.cljs$lang$applyTo = function(a) {
      var c = cljs.core.first(a), d = cljs.core.first(cljs.core.next(a)), e = cljs.core.first(cljs.core.next(cljs.core.next(a))), g = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(a)))), a = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(a))));
      return b.call(this, c, d, e, g, a)
    };
    return c
  }(), a = function(a, g, h, i, j) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, g);
      case 3:
        return c.call(this, a, g, h);
      case 4:
        return d.call(this, a, g, h, i);
      default:
        return e.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 4;
  a.cljs$lang$applyTo = e.cljs$lang$applyTo;
  return a
}();
cljs.core.take = function take(b, c) {
  return new cljs.core.LazySeq(null, !1, function() {
    if(cljs.core.truth_(0 < b)) {
      var d = cljs.core.seq.call(null, c);
      return cljs.core.truth_(d) ? cljs.core.cons.call(null, cljs.core.first.call(null, d), take.call(null, b - 1, cljs.core.rest.call(null, d))) : null
    }
    return null
  })
};
cljs.core.drop = function(a, b) {
  var c = function(a, b) {
    for(;;) {
      var c = cljs.core.seq.call(null, b);
      if(cljs.core.truth_(function() {
        var b = 0 < a;
        return cljs.core.truth_(b) ? c : b
      }())) {
        var g = a - 1, h = cljs.core.rest.call(null, c), a = g, b = h
      }else {
        return c
      }
    }
  };
  return new cljs.core.LazySeq(null, !1, function() {
    return c.call(null, a, b)
  })
};
cljs.core.drop_last = function() {
  var a = null, b = function(a, b) {
    return cljs.core.map.call(null, function(a) {
      return a
    }, b, cljs.core.drop.call(null, a, b))
  };
  return a = function(c, d) {
    switch(arguments.length) {
      case 1:
        return a.call(null, 1, c);
      case 2:
        return b.call(this, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.take_last = function(a, b) {
  for(var c = cljs.core.seq.call(null, b), d = cljs.core.seq.call(null, cljs.core.drop.call(null, a, b));;) {
    if(cljs.core.truth_(d)) {
      c = cljs.core.next.call(null, c), d = cljs.core.next.call(null, d)
    }else {
      return c
    }
  }
};
cljs.core.drop_while = function(a, b) {
  var c = function(a, b) {
    for(;;) {
      var c = cljs.core.seq.call(null, b);
      if(cljs.core.truth_(function() {
        var b = c;
        return cljs.core.truth_(b) ? a.call(null, cljs.core.first.call(null, c)) : b
      }())) {
        var g = a, h = cljs.core.rest.call(null, c), a = g, b = h
      }else {
        return c
      }
    }
  };
  return new cljs.core.LazySeq(null, !1, function() {
    return c.call(null, a, b)
  })
};
cljs.core.cycle = function cycle(b) {
  return new cljs.core.LazySeq(null, !1, function() {
    var c = cljs.core.seq.call(null, b);
    return cljs.core.truth_(c) ? cljs.core.concat.call(null, c, cycle.call(null, c)) : null
  })
};
cljs.core.split_at = function(a, b) {
  return cljs.core.PersistentVector.fromArray([cljs.core.take.call(null, a, b), cljs.core.drop.call(null, a, b)])
};
cljs.core.repeat = function() {
  var a = null, b = function(b) {
    return new cljs.core.LazySeq(null, !1, function() {
      return cljs.core.cons.call(null, b, a.call(null, b))
    })
  };
  return a = function(c, d) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return cljs.core.take.call(null, c, a.call(null, d))
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.replicate = function(a, b) {
  return cljs.core.take.call(null, a, cljs.core.repeat.call(null, b))
};
cljs.core.repeatedly = function() {
  var a = null, b = function(b) {
    return new cljs.core.LazySeq(null, !1, function() {
      return cljs.core.cons.call(null, b.call(null), a.call(null, b))
    })
  };
  return a = function(c, d) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return cljs.core.take.call(null, c, a.call(null, d))
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.iterate = function iterate(b, c) {
  return cljs.core.cons.call(null, c, new cljs.core.LazySeq(null, !1, function() {
    return iterate.call(null, b, b.call(null, c))
  }))
};
cljs.core.interleave = function() {
  var a = null, b = function(b, c) {
    return new cljs.core.LazySeq(null, !1, function() {
      var f = cljs.core.seq.call(null, b), g = cljs.core.seq.call(null, c);
      return cljs.core.truth_(cljs.core.truth_(f) ? g : f) ? cljs.core.cons.call(null, cljs.core.first.call(null, f), cljs.core.cons.call(null, cljs.core.first.call(null, g), a.call(null, cljs.core.rest.call(null, f), cljs.core.rest.call(null, g)))) : null
    })
  }, c = function() {
    var b = function(b, c, d) {
      return new cljs.core.LazySeq(null, !1, function() {
        var e = cljs.core.map.call(null, cljs.core.seq, cljs.core.conj.call(null, d, c, b));
        return cljs.core.truth_(cljs.core.every_QMARK_.call(null, cljs.core.identity, e)) ? cljs.core.concat.call(null, cljs.core.map.call(null, cljs.core.first, e), cljs.core.apply.call(null, a, cljs.core.map.call(null, cljs.core.rest, e))) : null
      })
    }, c = function(a, c, e) {
      var i = null;
      goog.isDef(e) && (i = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, a, c, i)
    };
    c.cljs$lang$maxFixedArity = 2;
    c.cljs$lang$applyTo = function(a) {
      var c = cljs.core.first(a), e = cljs.core.first(cljs.core.next(a)), a = cljs.core.rest(cljs.core.next(a));
      return b.call(this, c, e, a)
    };
    return c
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      default:
        return c.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = c.cljs$lang$applyTo;
  return a
}();
cljs.core.interpose = function(a, b) {
  return cljs.core.drop.call(null, 1, cljs.core.interleave.call(null, cljs.core.repeat.call(null, a), b))
};
cljs.core.flatten1 = function(a) {
  return function c(a, e) {
    return new cljs.core.LazySeq(null, !1, function() {
      var f = cljs.core.seq.call(null, a);
      return cljs.core.truth_(f) ? cljs.core.cons.call(null, cljs.core.first.call(null, f), c.call(null, cljs.core.rest.call(null, f), e)) : cljs.core.truth_(cljs.core.seq.call(null, e)) ? c.call(null, cljs.core.first.call(null, e), cljs.core.rest.call(null, e)) : null
    })
  }.call(null, null, a)
};
cljs.core.mapcat = function() {
  var a = null, b = function() {
    var a = function(a, b, c) {
      var g = null;
      goog.isDef(c) && (g = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return cljs.core.flatten1.call(null, cljs.core.apply.call(null, cljs.core.map, a, b, g))
    };
    a.cljs$lang$maxFixedArity = 2;
    a.cljs$lang$applyTo = function(a) {
      var b = cljs.core.first(a), c = cljs.core.first(cljs.core.next(a)), a = cljs.core.rest(cljs.core.next(a));
      return cljs.core.flatten1.call(null, cljs.core.apply.call(null, cljs.core.map, b, c, a))
    };
    return a
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 2:
        return cljs.core.flatten1.call(null, cljs.core.map.call(null, a, d));
      default:
        return b.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = b.cljs$lang$applyTo;
  return a
}();
cljs.core.filter = function filter(b, c) {
  return new cljs.core.LazySeq(null, !1, function() {
    var d = cljs.core.seq.call(null, c);
    if(cljs.core.truth_(d)) {
      var e = cljs.core.first.call(null, d), d = cljs.core.rest.call(null, d);
      return cljs.core.truth_(b.call(null, e)) ? cljs.core.cons.call(null, e, filter.call(null, b, d)) : filter.call(null, b, d)
    }
    return null
  })
};
cljs.core.remove = function(a, b) {
  return cljs.core.filter.call(null, cljs.core.complement.call(null, a), b)
};
cljs.core.tree_seq = function(a, b, c) {
  return function e(c) {
    return new cljs.core.LazySeq(null, !1, function() {
      return cljs.core.cons.call(null, c, cljs.core.truth_(a.call(null, c)) ? cljs.core.mapcat.call(null, e, b.call(null, c)) : null)
    })
  }.call(null, c)
};
cljs.core.flatten = function(a) {
  return cljs.core.filter.call(null, function(a) {
    return cljs.core.not.call(null, cljs.core.sequential_QMARK_.call(null, a))
  }, cljs.core.rest.call(null, cljs.core.tree_seq.call(null, cljs.core.sequential_QMARK_, cljs.core.seq, a)))
};
cljs.core.into = function(a, b) {
  return cljs.core.reduce.call(null, cljs.core._conj, a, b)
};
cljs.core.partition = function() {
  var a = null, b = function(b, c, f) {
    return new cljs.core.LazySeq(null, !1, function() {
      var g = cljs.core.seq.call(null, f);
      if(cljs.core.truth_(g)) {
        var h = cljs.core.take.call(null, b, g);
        return cljs.core.truth_(cljs.core._EQ_.call(null, b, cljs.core.count.call(null, h))) ? cljs.core.cons.call(null, h, a.call(null, b, c, cljs.core.drop.call(null, c, g))) : null
      }
      return null
    })
  }, c = function(b, c, f, g) {
    return new cljs.core.LazySeq(null, !1, function() {
      var h = cljs.core.seq.call(null, g);
      if(cljs.core.truth_(h)) {
        var i = cljs.core.take.call(null, b, h);
        return cljs.core.truth_(cljs.core._EQ_.call(null, b, cljs.core.count.call(null, i))) ? cljs.core.cons.call(null, i, a.call(null, b, c, f, cljs.core.drop.call(null, c, h))) : cljs.core.list.call(null, cljs.core.take.call(null, b, cljs.core.concat.call(null, i, f)))
      }
      return null
    })
  };
  return a = function(d, e, f, g) {
    switch(arguments.length) {
      case 2:
        return a.call(null, d, d, e);
      case 3:
        return b.call(this, d, e, f);
      case 4:
        return c.call(this, d, e, f, g)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.get_in = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return cljs.core.reduce.call(null, cljs.core.get, a, c);
      case 3:
        var e;
        a: {
          for(var f = cljs.core.lookup_sentinel, g = a, h = cljs.core.seq.call(null, c);;) {
            if(cljs.core.truth_(h)) {
              g = cljs.core.get.call(null, g, cljs.core.first.call(null, h), f);
              if(cljs.core.truth_(f === g)) {
                e = d;
                break a
              }
              h = cljs.core.next.call(null, h)
            }else {
              e = g;
              break a
            }
          }
        }
        return e
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.assoc_in = function assoc_in(b, c, d) {
  var e = cljs.core.nth.call(null, c, 0, null), c = cljs.core.nthnext.call(null, c, 1);
  return cljs.core.truth_(c) ? cljs.core.assoc.call(null, b, e, assoc_in.call(null, cljs.core.get.call(null, b, e), c, d)) : cljs.core.assoc.call(null, b, e, d)
};
cljs.core.update_in = function() {
  var a = function(a, d, e, f) {
    var g = cljs.core.nth.call(null, d, 0, null), d = cljs.core.nthnext.call(null, d, 1);
    return cljs.core.truth_(d) ? cljs.core.assoc.call(null, a, g, cljs.core.apply.call(null, b, cljs.core.get.call(null, a, g), d, e, f)) : cljs.core.assoc.call(null, a, g, cljs.core.apply.call(null, e, cljs.core.get.call(null, a, g), f))
  }, b = function(b, d, e, f) {
    var g = null;
    goog.isDef(f) && (g = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
    return a.call(this, b, d, e, g)
  };
  b.cljs$lang$maxFixedArity = 3;
  b.cljs$lang$applyTo = function(b) {
    var d = cljs.core.first(b), e = cljs.core.first(cljs.core.next(b)), f = cljs.core.first(cljs.core.next(cljs.core.next(b))), b = cljs.core.rest(cljs.core.next(cljs.core.next(b)));
    return a.call(this, d, e, f, b)
  };
  return b
}();
cljs.core.Vector = function(a, b) {
  this.meta = a;
  this.array = b
};
cljs.core.Vector.cljs$core$IPrintable$_pr_seq = function() {
  return cljs.core.list.call(null, "cljs.core.Vector")
};
cljs.core.Vector.prototype.cljs$core$IHash$ = !0;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = function(a) {
  return cljs.core.hash_coll.call(null, a)
};
cljs.core.Vector.prototype.cljs$core$ILookup$ = !0;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return cljs.core._nth.call(null, a, c, null);
      case 3:
        return cljs.core._nth.call(null, a, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.Vector.prototype.cljs$core$IAssociative$ = !0;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = function(a, b, c) {
  a = cljs.core.aclone.call(null, this.array);
  a[b] = c;
  return new cljs.core.Vector(this.meta, a)
};
cljs.core.Vector.prototype.cljs$core$IFn$ = !0;
cljs.core.Vector.prototype.call = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return cljs.core._lookup.call(null, this, c);
      case 3:
        return cljs.core._lookup.call(null, this, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.Vector.prototype.cljs$core$ISequential$ = !0;
cljs.core.Vector.prototype.cljs$core$ICollection$ = !0;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = function(a, b) {
  var c = cljs.core.aclone.call(null, this.array);
  c.push(b);
  return new cljs.core.Vector(this.meta, c)
};
cljs.core.Vector.prototype.cljs$core$IReduce$ = !0;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return cljs.core.ci_reduce.call(null, this.array, c);
      case 3:
        return cljs.core.ci_reduce.call(null, this.array, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.Vector.prototype.cljs$core$ISeqable$ = !0;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = function() {
  var a = this;
  return cljs.core.truth_(0 < a.array.length) ? function c(d) {
    return new cljs.core.LazySeq(null, !1, function() {
      return cljs.core.truth_(d < a.array.length) ? cljs.core.cons.call(null, a.array[d], c.call(null, d + 1)) : null
    })
  }.call(null, 0) : null
};
cljs.core.Vector.prototype.cljs$core$ICounted$ = !0;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = function() {
  return this.array.length
};
cljs.core.Vector.prototype.cljs$core$IStack$ = !0;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = function() {
  var a = this.array.length;
  return cljs.core.truth_(0 < a) ? this.array[a - 1] : null
};
cljs.core.Vector.prototype.cljs$core$IStack$_pop = function() {
  if(cljs.core.truth_(0 < this.array.length)) {
    var a = cljs.core.aclone.call(null, this.array);
    a.pop();
    return new cljs.core.Vector(this.meta, a)
  }
  throw Error("Can't pop empty vector");
};
cljs.core.Vector.prototype.cljs$core$IVector$ = !0;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = function(a, b, c) {
  return cljs.core._assoc.call(null, a, b, c)
};
cljs.core.Vector.prototype.cljs$core$IEquiv$ = !0;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = function(a, b) {
  return cljs.core.equiv_sequential.call(null, a, b)
};
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = !0;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = function(a, b) {
  return new cljs.core.Vector(b, this.array)
};
cljs.core.Vector.prototype.cljs$core$IMeta$ = !0;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = function() {
  return this.meta
};
cljs.core.Vector.prototype.cljs$core$IIndexed$ = !0;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = function() {
  var a = null, b = function(a, b) {
    var c = this;
    return cljs.core.truth_(function() {
      var a = 0 <= b;
      return cljs.core.truth_(a) ? b < c.array.length : a
    }()) ? c.array[b] : null
  }, c = function(a, b, c) {
    var g = this;
    return cljs.core.truth_(function() {
      var a = 0 <= b;
      return cljs.core.truth_(a) ? b < g.array.length : a
    }()) ? g.array[b] : c
  };
  return function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = !0;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = function() {
  return cljs.core.with_meta.call(null, cljs.core.Vector.EMPTY, this.meta)
};
cljs.core.Vector.EMPTY = new cljs.core.Vector(null, []);
cljs.core.Vector.fromArray = function(a) {
  return new cljs.core.Vector(null, a)
};
cljs.core.tail_off = function(a) {
  a = a.cnt;
  return cljs.core.truth_(32 > a) ? 0 : a - 1 >> 5 << 5
};
cljs.core.new_path = function(a, b) {
  for(var c = a, d = b;;) {
    if(cljs.core.truth_(cljs.core._EQ_.call(null, 0, c))) {
      return d
    }
    var e = cljs.core.aclone.call(null, cljs.core.PersistentVector.EMPTY_NODE);
    e[0] = d;
    d = e;
    c -= 5
  }
};
cljs.core.push_tail = function push_tail(b, c, d, e) {
  var f = cljs.core.aclone.call(null, d), g = b.cnt - 1 >> c & 31;
  cljs.core.truth_(cljs.core._EQ_.call(null, 5, c)) ? f[g] = e : (d = d[g], b = cljs.core.truth_(d) ? push_tail.call(null, b, c - 5, d, e) : cljs.core.new_path.call(null, c - 5, e), f[g] = b);
  return f
};
cljs.core.array_for = function(a, b) {
  if(cljs.core.truth_(function() {
    var c = 0 <= b;
    return cljs.core.truth_(c) ? b < a.cnt : c
  }())) {
    if(cljs.core.truth_(b >= cljs.core.tail_off.call(null, a))) {
      return a.tail
    }
    for(var c = a.root, d = a.shift;;) {
      if(cljs.core.truth_(0 < d)) {
        var e = d - 5, c = c[b >> d & 31], d = e
      }else {
        return c
      }
    }
  }else {
    throw Error(cljs.core.str.call(null, "No item ", b, " in vector of length ", a.cnt));
  }
};
cljs.core.do_assoc = function do_assoc(b, c, d, e, f) {
  var g = cljs.core.aclone.call(null, d);
  if(cljs.core.truth_(0 === c)) {
    g[e & 31] = f
  }else {
    var h = e >> c & 31;
    g[h] = do_assoc.call(null, b, c - 5, d[h], e, f)
  }
  return g
};
cljs.core.pop_tail = function pop_tail(b, c, d) {
  var e = b.cnt - 2 >> c & 31;
  if(cljs.core.truth_(5 < c)) {
    var f = pop_tail.call(null, b, c - 5, d[e]);
    if(cljs.core.truth_(function() {
      var b = null === f;
      return cljs.core.truth_(b) ? 0 === e : b
    }())) {
      return null
    }
    b = cljs.core.aclone.call(null, d);
    b[e] = f;
    return b
  }
  if(cljs.core.truth_(0 === e)) {
    return null
  }
  return cljs.core.truth_("\ufdd0'else") ? (b = cljs.core.aclone.call(null, d), b[e] = null, b) : null
};
cljs.core.PersistentVector = function(a, b, c, d, e) {
  this.meta = a;
  this.cnt = b;
  this.shift = c;
  this.root = d;
  this.tail = e
};
cljs.core.PersistentVector.cljs$core$IPrintable$_pr_seq = function() {
  return cljs.core.list.call(null, "cljs.core.PersistentVector")
};
cljs.core.PersistentVector.prototype.cljs$core$IHash$ = !0;
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash = function(a) {
  return cljs.core.hash_coll.call(null, a)
};
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = !0;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return cljs.core._nth.call(null, a, c, null);
      case 3:
        return cljs.core._nth.call(null, a, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = !0;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc = function(a, b, c) {
  var d = this;
  if(cljs.core.truth_(function() {
    var a = 0 <= b;
    return cljs.core.truth_(a) ? b < d.cnt : a
  }())) {
    return cljs.core.truth_(cljs.core.tail_off.call(null, a) <= b) ? (a = cljs.core.aclone.call(null, d.tail), a[b & 31] = c, new cljs.core.PersistentVector(d.meta, d.cnt, d.shift, d.root, a)) : new cljs.core.PersistentVector(d.meta, d.cnt, d.shift, cljs.core.do_assoc.call(null, a, d.shift, d.root, b, c), d.tail)
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, b, d.cnt))) {
    return cljs.core._conj.call(null, a, c)
  }
  if(cljs.core.truth_("\ufdd0'else")) {
    throw Error(cljs.core.str.call(null, "Index ", b, " out of bounds  [0,", d.cnt, "]"));
  }
  return null
};
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = !0;
cljs.core.PersistentVector.prototype.call = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return cljs.core._lookup.call(null, this, c);
      case 3:
        return cljs.core._lookup.call(null, this, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = !0;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = !0;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj = function(a, b) {
  if(cljs.core.truth_(32 > this.cnt - cljs.core.tail_off.call(null, a))) {
    var c = cljs.core.aclone.call(null, this.tail);
    c.push(b);
    return new cljs.core.PersistentVector(this.meta, this.cnt + 1, this.shift, this.root, c)
  }
  var d = this.cnt >> 5 > 1 << this.shift, c = cljs.core.truth_(d) ? this.shift + 5 : this.shift;
  cljs.core.truth_(d) ? (d = cljs.core.aclone.call(null, cljs.core.PersistentVector.EMPTY_NODE), d[0] = this.root, d[1] = cljs.core.new_path.call(null, this.shift, this.tail)) : d = cljs.core.push_tail.call(null, a, this.shift, this.root, this.tail);
  return new cljs.core.PersistentVector(this.meta, this.cnt + 1, c, d, [b])
};
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = !0;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return cljs.core.ci_reduce.call(null, a, c);
      case 3:
        return cljs.core.ci_reduce.call(null, a, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = !0;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq = function(a) {
  var b = this;
  return cljs.core.truth_(0 < b.cnt) ? function d(e) {
    return new cljs.core.LazySeq(null, !1, function() {
      return cljs.core.truth_(e < b.cnt) ? cljs.core.cons.call(null, cljs.core._nth.call(null, a, e), d.call(null, e + 1)) : null
    })
  }.call(null, 0) : null
};
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = !0;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count = function() {
  return this.cnt
};
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = !0;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek = function(a) {
  return cljs.core.truth_(0 < this.cnt) ? cljs.core._nth.call(null, a, this.cnt - 1) : null
};
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop = function(a) {
  var b = this;
  if(cljs.core.truth_(0 === b.cnt)) {
    throw Error("Can't pop empty vector");
  }
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 1, b.cnt))) {
    return cljs.core._with_meta.call(null, cljs.core.PersistentVector.EMPTY, b.meta)
  }
  if(cljs.core.truth_(1 < b.cnt - cljs.core.tail_off.call(null, a))) {
    return new cljs.core.PersistentVector(b.meta, b.cnt - 1, b.shift, b.root, cljs.core.aclone.call(null, b.tail))
  }
  if(cljs.core.truth_("\ufdd0'else")) {
    var a = cljs.core.array_for.call(null, a, b.cnt - 2), c = cljs.core.pop_tail.call(null, b.shift, b.root), d = cljs.core.truth_(null === c) ? cljs.core.PersistentVector.EMPTY_NODE : c, c = b.cnt - 1;
    return cljs.core.truth_(function() {
      var a = 5 < b.shift;
      return cljs.core.truth_(a) ? null === d[1] : a
    }()) ? new cljs.core.PersistentVector(b.meta, c, b.shift - 5, d[0], a) : new cljs.core.PersistentVector(b.meta, c, b.shift, d, a)
  }
  return null
};
cljs.core.PersistentVector.prototype.cljs$core$IVector$ = !0;
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n = function(a, b, c) {
  return cljs.core._assoc.call(null, a, b, c)
};
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = !0;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv = function(a, b) {
  return cljs.core.equiv_sequential.call(null, a, b)
};
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = !0;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta = function(a, b) {
  return new cljs.core.PersistentVector(b, this.cnt, this.shift, this.root, this.tail)
};
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = !0;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta = function() {
  return this.meta
};
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = !0;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth = function() {
  var a = null, b = function(a, b, e) {
    var f = this;
    return cljs.core.truth_(function() {
      var a = 0 <= b;
      return cljs.core.truth_(a) ? b < f.cnt : a
    }()) ? cljs.core._nth.call(null, a, b) : e
  };
  return function(a, d, e) {
    switch(arguments.length) {
      case 2:
        return cljs.core.array_for.call(null, a, d)[d & 31];
      case 3:
        return b.call(this, a, d, e)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = !0;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty = function() {
  return cljs.core.with_meta.call(null, cljs.core.PersistentVector.EMPTY, this.meta)
};
cljs.core.PersistentVector.EMPTY_NODE = Array(32);
cljs.core.PersistentVector.EMPTY = new cljs.core.PersistentVector(null, 0, 5, cljs.core.PersistentVector.EMPTY_NODE, []);
cljs.core.PersistentVector.fromArray = function(a) {
  return cljs.core.into.call(null, cljs.core.PersistentVector.EMPTY, a)
};
cljs.core.vec = function(a) {
  return cljs.core.reduce.call(null, cljs.core.conj, cljs.core.PersistentVector.EMPTY, a)
};
cljs.core.vector = function() {
  var a = function(a) {
    var c = null;
    goog.isDef(a) && (c = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
    return cljs.core.vec.call(null, c)
  };
  a.cljs$lang$maxFixedArity = 0;
  a.cljs$lang$applyTo = function(a) {
    a = cljs.core.seq(a);
    return cljs.core.vec.call(null, a)
  };
  return a
}();
cljs.core.Subvec = function(a, b, c, d) {
  this.meta = a;
  this.v = b;
  this.start = c;
  this.end = d
};
cljs.core.Subvec.cljs$core$IPrintable$_pr_seq = function() {
  return cljs.core.list.call(null, "cljs.core.Subvec")
};
cljs.core.Subvec.prototype.cljs$core$IHash$ = !0;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = function(a) {
  return cljs.core.hash_coll.call(null, a)
};
cljs.core.Subvec.prototype.cljs$core$ILookup$ = !0;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return cljs.core._nth.call(null, a, c, null);
      case 3:
        return cljs.core._nth.call(null, a, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = !0;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = function(a, b, c) {
  a = this.start + b;
  return new cljs.core.Subvec(this.meta, cljs.core._assoc.call(null, this.v, a, c), this.start, this.end > a + 1 ? this.end : a + 1)
};
cljs.core.Subvec.prototype.cljs$core$IFn$ = !0;
cljs.core.Subvec.prototype.call = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return cljs.core._lookup.call(null, this, c);
      case 3:
        return cljs.core._lookup.call(null, this, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.Subvec.prototype.cljs$core$ISequential$ = !0;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = !0;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = function(a, b) {
  return new cljs.core.Subvec(this.meta, cljs.core._assoc_n.call(null, this.v, this.end, b), this.start, this.end + 1)
};
cljs.core.Subvec.prototype.cljs$core$IReduce$ = !0;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return cljs.core.ci_reduce.call(null, a, c);
      case 3:
        return cljs.core.ci_reduce.call(null, a, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = !0;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = function() {
  var a = this;
  return function c(d) {
    return cljs.core.truth_(cljs.core._EQ_.call(null, d, a.end)) ? null : cljs.core.cons.call(null, cljs.core._nth.call(null, a.v, d), new cljs.core.LazySeq(null, !1, function() {
      return c.call(null, d + 1)
    }))
  }.call(null, a.start)
};
cljs.core.Subvec.prototype.cljs$core$ICounted$ = !0;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = function() {
  return this.end - this.start
};
cljs.core.Subvec.prototype.cljs$core$IStack$ = !0;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = function() {
  return cljs.core._nth.call(null, this.v, this.end - 1)
};
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = function() {
  if(cljs.core.truth_(cljs.core._EQ_.call(null, this.start, this.end))) {
    throw Error("Can't pop empty vector");
  }
  return new cljs.core.Subvec(this.meta, this.v, this.start, this.end - 1)
};
cljs.core.Subvec.prototype.cljs$core$IVector$ = !0;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = function(a, b, c) {
  return cljs.core._assoc.call(null, a, b, c)
};
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = !0;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = function(a, b) {
  return cljs.core.equiv_sequential.call(null, a, b)
};
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = !0;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = function(a, b) {
  return new cljs.core.Subvec(b, this.v, this.start, this.end)
};
cljs.core.Subvec.prototype.cljs$core$IMeta$ = !0;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = function() {
  return this.meta
};
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = !0;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return cljs.core._nth.call(null, this.v, this.start + c);
      case 3:
        return cljs.core._nth.call(null, this.v, this.start + c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = !0;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = function() {
  return cljs.core.with_meta.call(null, cljs.core.Vector.EMPTY, this.meta)
};
cljs.core.subvec = function() {
  var a = null;
  return a = function(b, c, d) {
    switch(arguments.length) {
      case 2:
        return a.call(null, b, c, cljs.core.count.call(null, b));
      case 3:
        return new cljs.core.Subvec(null, b, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.PersistentQueueSeq = function(a, b, c) {
  this.meta = a;
  this.front = b;
  this.rear = c
};
cljs.core.PersistentQueueSeq.cljs$core$IPrintable$_pr_seq = function() {
  return cljs.core.list.call(null, "cljs.core.PersistentQueueSeq")
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = !0;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq = function(a) {
  return a
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = !0;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = function(a) {
  return cljs.core.hash_coll.call(null, a)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = !0;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = function(a, b) {
  return cljs.core.equiv_sequential.call(null, a, b)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = !0;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = !0;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = function() {
  return cljs.core.with_meta.call(null, cljs.core.List.EMPTY, this.meta)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = !0;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = function(a, b) {
  return cljs.core.cons.call(null, b, a)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = !0;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = function() {
  return cljs.core._first.call(null, this.front)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = function(a) {
  var b = cljs.core.next.call(null, this.front);
  return cljs.core.truth_(b) ? new cljs.core.PersistentQueueSeq(this.meta, b, this.rear) : cljs.core.truth_(null === this.rear) ? cljs.core._empty.call(null, a) : new cljs.core.PersistentQueueSeq(this.meta, this.rear, null)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = !0;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = function() {
  return this.meta
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = !0;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = function(a, b) {
  return new cljs.core.PersistentQueueSeq(b, this.front, this.rear)
};
cljs.core.PersistentQueue = function(a, b, c, d) {
  this.meta = a;
  this.count = b;
  this.front = c;
  this.rear = d
};
cljs.core.PersistentQueue.cljs$core$IPrintable$_pr_seq = function() {
  return cljs.core.list.call(null, "cljs.core.PersistentQueue")
};
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = !0;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash = function(a) {
  return cljs.core.hash_coll.call(null, a)
};
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = !0;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = !0;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = function(a, b) {
  var c = this;
  return cljs.core.truth_(c.front) ? new cljs.core.PersistentQueue(c.meta, c.count + 1, c.front, cljs.core.conj.call(null, function() {
    var a = c.rear;
    return cljs.core.truth_(a) ? a : cljs.core.PersistentVector.fromArray([])
  }(), b)) : new cljs.core.PersistentQueue(c.meta, c.count + 1, cljs.core.conj.call(null, c.front, b), cljs.core.PersistentVector.fromArray([]))
};
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = !0;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = function() {
  var a = this, b = cljs.core.seq.call(null, a.rear);
  return cljs.core.truth_(function() {
    var c = a.front;
    return cljs.core.truth_(c) ? c : b
  }()) ? new cljs.core.PersistentQueueSeq(null, a.front, cljs.core.seq.call(null, b)) : cljs.core.List.EMPTY
};
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = !0;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = function() {
  return this.count
};
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = !0;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = function() {
  return cljs.core._first.call(null, this.front)
};
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = function(a) {
  return cljs.core.truth_(this.front) ? (a = cljs.core.next.call(null, this.front), cljs.core.truth_(a) ? new cljs.core.PersistentQueue(this.meta, this.count - 1, a, this.rear) : new cljs.core.PersistentQueue(this.meta, this.count - 1, cljs.core.seq.call(null, this.rear), cljs.core.PersistentVector.fromArray([]))) : a
};
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = !0;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = function() {
  return cljs.core.first.call(null, this.front)
};
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = function(a) {
  return cljs.core.rest.call(null, cljs.core.seq.call(null, a))
};
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = !0;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = function(a, b) {
  return cljs.core.equiv_sequential.call(null, a, b)
};
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = !0;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = function(a, b) {
  return new cljs.core.PersistentQueue(b, this.count, this.front, this.rear)
};
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = !0;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = function() {
  return this.meta
};
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = !0;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = function() {
  return cljs.core.PersistentQueue.EMPTY
};
cljs.core.PersistentQueue.EMPTY = new cljs.core.PersistentQueue(null, 0, null, cljs.core.PersistentVector.fromArray([]));
cljs.core.NeverEquiv = function() {
};
cljs.core.NeverEquiv.cljs$core$IPrintable$_pr_seq = function() {
  return cljs.core.list.call(null, "cljs.core.NeverEquiv")
};
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = !0;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = function() {
  return!1
};
cljs.core.never_equiv = new cljs.core.NeverEquiv;
cljs.core.equiv_map = function(a, b) {
  return cljs.core.boolean$.call(null, cljs.core.truth_(cljs.core.map_QMARK_.call(null, b)) ? cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.count.call(null, a), cljs.core.count.call(null, b))) ? cljs.core.every_QMARK_.call(null, cljs.core.identity, cljs.core.map.call(null, function(a) {
    return cljs.core._EQ_.call(null, cljs.core.get.call(null, b, cljs.core.first.call(null, a), cljs.core.never_equiv), cljs.core.second.call(null, a))
  }, a)) : null : null)
};
cljs.core.scan_array = function(a, b, c) {
  for(var d = c.length, e = 0;;) {
    if(cljs.core.truth_(e < d)) {
      if(cljs.core.truth_(cljs.core._EQ_.call(null, b, c[e]))) {
        return e
      }
      e += a
    }else {
      return null
    }
  }
};
cljs.core.obj_map_contains_key_QMARK_ = function() {
  var a = null, b = function(a, b, e, f) {
    return cljs.core.truth_(function() {
      var e = goog.isString.call(null, a);
      return cljs.core.truth_(e) ? b.hasOwnProperty(a) : e
    }()) ? e : f
  };
  return a = function(c, d, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(null, c, d, !0, !1);
      case 4:
        return b.call(this, c, d, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.obj_map_compare_keys = function(a, b) {
  var c = cljs.core.hash.call(null, a), d = cljs.core.hash.call(null, b);
  return cljs.core.truth_(c < d) ? -1 : cljs.core.truth_(c > d) ? 1 : cljs.core.truth_("\ufdd0'else") ? 0 : null
};
cljs.core.ObjMap = function(a, b, c) {
  this.meta = a;
  this.keys = b;
  this.strobj = c
};
cljs.core.ObjMap.cljs$core$IPrintable$_pr_seq = function() {
  return cljs.core.list.call(null, "cljs.core.ObjMap")
};
cljs.core.ObjMap.prototype.cljs$core$IHash$ = !0;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = function(a) {
  return cljs.core.hash_coll.call(null, a)
};
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = !0;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return cljs.core._lookup.call(null, a, c, null);
      case 3:
        return cljs.core.obj_map_contains_key_QMARK_.call(null, c, this.strobj, this.strobj[c], d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = !0;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = function(a, b, c) {
  if(cljs.core.truth_(goog.isString.call(null, b))) {
    var a = goog.object.clone.call(null, this.strobj), d = a.hasOwnProperty(b);
    a[b] = c;
    if(cljs.core.truth_(d)) {
      return new cljs.core.ObjMap(this.meta, this.keys, a)
    }
    c = cljs.core.aclone.call(null, this.keys);
    c.push(b);
    return new cljs.core.ObjMap(this.meta, c, a)
  }
  return cljs.core.with_meta.call(null, cljs.core.into.call(null, cljs.core.hash_map.call(null, b, c), cljs.core.seq.call(null, a)), this.meta)
};
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = function(a, b) {
  return cljs.core.obj_map_contains_key_QMARK_.call(null, b, this.strobj)
};
cljs.core.ObjMap.prototype.cljs$core$IFn$ = !0;
cljs.core.ObjMap.prototype.call = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return cljs.core._lookup.call(null, this, c);
      case 3:
        return cljs.core._lookup.call(null, this, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = !0;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = function(a, b) {
  return cljs.core.truth_(cljs.core.vector_QMARK_.call(null, b)) ? cljs.core._assoc.call(null, a, cljs.core._nth.call(null, b, 0), cljs.core._nth.call(null, b, 1)) : cljs.core.reduce.call(null, cljs.core._conj, a, b)
};
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = !0;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = function() {
  var a = this;
  return cljs.core.truth_(0 < a.keys.length) ? cljs.core.map.call(null, function(b) {
    return cljs.core.vector.call(null, b, a.strobj[b])
  }, a.keys.sort(cljs.core.obj_map_compare_keys)) : null
};
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = !0;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = function() {
  return this.keys.length
};
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = !0;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = function(a, b) {
  return cljs.core.equiv_map.call(null, a, b)
};
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = !0;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = function(a, b) {
  return new cljs.core.ObjMap(b, this.keys, this.strobj)
};
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = !0;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = function() {
  return this.meta
};
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = !0;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = function() {
  return cljs.core.with_meta.call(null, cljs.core.ObjMap.EMPTY, this.meta)
};
cljs.core.ObjMap.prototype.cljs$core$IMap$ = !0;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = function(a, b) {
  var c = this;
  if(cljs.core.truth_(function() {
    var a = goog.isString.call(null, b);
    return cljs.core.truth_(a) ? c.strobj.hasOwnProperty(b) : a
  }())) {
    var d = cljs.core.aclone.call(null, c.keys), e = goog.object.clone.call(null, c.strobj);
    d.splice(cljs.core.scan_array.call(null, 1, b, d), 1);
    cljs.core.js_delete.call(null, e, b);
    return new cljs.core.ObjMap(c.meta, d, e)
  }
  return a
};
cljs.core.ObjMap.EMPTY = new cljs.core.ObjMap(null, [], cljs.core.js_obj.call(null));
cljs.core.ObjMap.fromObject = function(a, b) {
  return new cljs.core.ObjMap(null, a, b)
};
cljs.core.HashMap = function(a, b, c) {
  this.meta = a;
  this.count = b;
  this.hashobj = c
};
cljs.core.HashMap.cljs$core$IPrintable$_pr_seq = function() {
  return cljs.core.list.call(null, "cljs.core.HashMap")
};
cljs.core.HashMap.prototype.cljs$core$IHash$ = !0;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = function(a) {
  return cljs.core.hash_coll.call(null, a)
};
cljs.core.HashMap.prototype.cljs$core$ILookup$ = !0;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return cljs.core._lookup.call(null, a, c, null);
      case 3:
        var e = this.hashobj[cljs.core.hash.call(null, c)], f = cljs.core.truth_(e) ? cljs.core.scan_array.call(null, 2, c, e) : null;
        return cljs.core.truth_(f) ? e[f + 1] : d
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = !0;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = function(a, b, c) {
  var a = cljs.core.hash.call(null, b), d = this.hashobj[a];
  if(cljs.core.truth_(d)) {
    var d = cljs.core.aclone.call(null, d), e = goog.object.clone.call(null, this.hashobj);
    e[a] = d;
    a = cljs.core.scan_array.call(null, 2, b, d);
    if(cljs.core.truth_(a)) {
      return d[a + 1] = c, new cljs.core.HashMap(this.meta, this.count, e)
    }
    d.push(b, c);
    return new cljs.core.HashMap(this.meta, this.count + 1, e)
  }
  d = goog.object.clone.call(null, this.hashobj);
  d[a] = [b, c];
  return new cljs.core.HashMap(this.meta, this.count + 1, d)
};
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = function(a, b) {
  var c = this.hashobj[cljs.core.hash.call(null, b)], c = cljs.core.truth_(c) ? cljs.core.scan_array.call(null, 2, b, c) : null;
  return cljs.core.truth_(c) ? !0 : !1
};
cljs.core.HashMap.prototype.cljs$core$IFn$ = !0;
cljs.core.HashMap.prototype.call = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return cljs.core._lookup.call(null, this, c);
      case 3:
        return cljs.core._lookup.call(null, this, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.HashMap.prototype.cljs$core$ICollection$ = !0;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = function(a, b) {
  return cljs.core.truth_(cljs.core.vector_QMARK_.call(null, b)) ? cljs.core._assoc.call(null, a, cljs.core._nth.call(null, b, 0), cljs.core._nth.call(null, b, 1)) : cljs.core.reduce.call(null, cljs.core._conj, a, b)
};
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = !0;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = function() {
  var a = this;
  if(cljs.core.truth_(0 < a.count)) {
    var b = cljs.core.js_keys.call(null, a.hashobj).sort();
    return cljs.core.mapcat.call(null, function(b) {
      return cljs.core.map.call(null, cljs.core.vec, cljs.core.partition.call(null, 2, a.hashobj[b]))
    }, b)
  }
  return null
};
cljs.core.HashMap.prototype.cljs$core$ICounted$ = !0;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = function() {
  return this.count
};
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = !0;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = function(a, b) {
  return cljs.core.equiv_map.call(null, a, b)
};
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = !0;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = function(a, b) {
  return new cljs.core.HashMap(b, this.count, this.hashobj)
};
cljs.core.HashMap.prototype.cljs$core$IMeta$ = !0;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = function() {
  return this.meta
};
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = !0;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = function() {
  return cljs.core.with_meta.call(null, cljs.core.HashMap.EMPTY, this.meta)
};
cljs.core.HashMap.prototype.cljs$core$IMap$ = !0;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = function(a, b) {
  var c = cljs.core.hash.call(null, b), d = this.hashobj[c], e = cljs.core.truth_(d) ? cljs.core.scan_array.call(null, 2, b, d) : null;
  if(cljs.core.truth_(cljs.core.not.call(null, e))) {
    return a
  }
  var f = goog.object.clone.call(null, this.hashobj);
  cljs.core.truth_(3 > d.length) ? cljs.core.js_delete.call(null, f, c) : (d = cljs.core.aclone.call(null, d), d.splice(e, 2), f[c] = d);
  return new cljs.core.HashMap(this.meta, this.count - 1, f)
};
cljs.core.HashMap.EMPTY = new cljs.core.HashMap(null, 0, cljs.core.js_obj.call(null));
cljs.core.HashMap.fromArrays = function(a, b) {
  for(var c = a.length, d = 0, e = cljs.core.HashMap.EMPTY;;) {
    if(cljs.core.truth_(d < c)) {
      var f = d + 1, e = cljs.core.assoc.call(null, e, a[d], b[d]), d = f
    }else {
      return e
    }
  }
};
cljs.core.hash_map = function() {
  var a = function(a) {
    for(var a = cljs.core.seq.call(null, a), b = cljs.core.HashMap.EMPTY;;) {
      if(cljs.core.truth_(a)) {
        var e = cljs.core.nnext.call(null, a), b = cljs.core.assoc.call(null, b, cljs.core.first.call(null, a), cljs.core.second.call(null, a)), a = e
      }else {
        return b
      }
    }
  }, b = function(b) {
    var d = null;
    goog.isDef(b) && (d = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
    return a.call(this, d)
  };
  b.cljs$lang$maxFixedArity = 0;
  b.cljs$lang$applyTo = function(b) {
    b = cljs.core.seq(b);
    return a.call(this, b)
  };
  return b
}();
cljs.core.keys = function(a) {
  return cljs.core.seq.call(null, cljs.core.map.call(null, cljs.core.first, a))
};
cljs.core.vals = function(a) {
  return cljs.core.seq.call(null, cljs.core.map.call(null, cljs.core.second, a))
};
cljs.core.merge = function() {
  var a = function(a) {
    return cljs.core.truth_(cljs.core.some.call(null, cljs.core.identity, a)) ? cljs.core.reduce.call(null, function(a, b) {
      return cljs.core.conj.call(null, cljs.core.truth_(a) ? a : cljs.core.ObjMap.fromObject([], {}), b)
    }, a) : null
  }, b = function(b) {
    var d = null;
    goog.isDef(b) && (d = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
    return a.call(this, d)
  };
  b.cljs$lang$maxFixedArity = 0;
  b.cljs$lang$applyTo = function(b) {
    b = cljs.core.seq(b);
    return a.call(this, b)
  };
  return b
}();
cljs.core.merge_with = function() {
  var a = function(a, b) {
    if(cljs.core.truth_(cljs.core.some.call(null, cljs.core.identity, b))) {
      var e = function(b, d) {
        var e = cljs.core.first.call(null, d), i = cljs.core.second.call(null, d);
        return cljs.core.truth_(cljs.core.contains_QMARK_.call(null, b, e)) ? cljs.core.assoc.call(null, b, e, a.call(null, cljs.core.get.call(null, b, e), i)) : cljs.core.assoc.call(null, b, e, i)
      };
      return cljs.core.reduce.call(null, function(a, b) {
        return cljs.core.reduce.call(null, e, cljs.core.truth_(a) ? a : cljs.core.ObjMap.fromObject([], {}), cljs.core.seq.call(null, b))
      }, b)
    }
    return null
  }, b = function(b, d) {
    var e = null;
    goog.isDef(d) && (e = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0));
    return a.call(this, b, e)
  };
  b.cljs$lang$maxFixedArity = 1;
  b.cljs$lang$applyTo = function(b) {
    var d = cljs.core.first(b), b = cljs.core.rest(b);
    return a.call(this, d, b)
  };
  return b
}();
cljs.core.select_keys = function(a, b) {
  for(var c = cljs.core.ObjMap.fromObject([], {}), d = cljs.core.seq.call(null, b);;) {
    if(cljs.core.truth_(d)) {
      var e = cljs.core.first.call(null, d), f = cljs.core.get.call(null, a, e, "\ufdd0'user/not-found"), c = cljs.core.truth_(cljs.core.not_EQ_.call(null, f, "\ufdd0'user/not-found")) ? cljs.core.assoc.call(null, c, e, f) : c, d = cljs.core.next.call(null, d)
    }else {
      return c
    }
  }
};
cljs.core.Set = function(a, b) {
  this.meta = a;
  this.hash_map = b
};
cljs.core.Set.cljs$core$IPrintable$_pr_seq = function() {
  return cljs.core.list.call(null, "cljs.core.Set")
};
cljs.core.Set.prototype.cljs$core$IHash$ = !0;
cljs.core.Set.prototype.cljs$core$IHash$_hash = function(a) {
  return cljs.core.hash_coll.call(null, a)
};
cljs.core.Set.prototype.cljs$core$ILookup$ = !0;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return cljs.core._lookup.call(null, a, c, null);
      case 3:
        return cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null, this.hash_map, c)) ? c : d
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.Set.prototype.cljs$core$IFn$ = !0;
cljs.core.Set.prototype.call = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return cljs.core._lookup.call(null, this, c);
      case 3:
        return cljs.core._lookup.call(null, this, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.Set.prototype.cljs$core$ICollection$ = !0;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = function(a, b) {
  return new cljs.core.Set(this.meta, cljs.core.assoc.call(null, this.hash_map, b, null))
};
cljs.core.Set.prototype.cljs$core$ISeqable$ = !0;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = function() {
  return cljs.core.keys.call(null, this.hash_map)
};
cljs.core.Set.prototype.cljs$core$ISet$ = !0;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = function(a, b) {
  return new cljs.core.Set(this.meta, cljs.core.dissoc.call(null, this.hash_map, b))
};
cljs.core.Set.prototype.cljs$core$ICounted$ = !0;
cljs.core.Set.prototype.cljs$core$ICounted$_count = function(a) {
  return cljs.core.count.call(null, cljs.core.seq.call(null, a))
};
cljs.core.Set.prototype.cljs$core$IEquiv$ = !0;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = function(a, b) {
  var c = cljs.core.set_QMARK_.call(null, b);
  return cljs.core.truth_(c) ? (c = cljs.core._EQ_.call(null, cljs.core.count.call(null, a), cljs.core.count.call(null, b)), cljs.core.truth_(c) ? cljs.core.every_QMARK_.call(null, function(b) {
    return cljs.core.contains_QMARK_.call(null, a, b)
  }, b) : c) : c
};
cljs.core.Set.prototype.cljs$core$IWithMeta$ = !0;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = function(a, b) {
  return new cljs.core.Set(b, this.hash_map)
};
cljs.core.Set.prototype.cljs$core$IMeta$ = !0;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = function() {
  return this.meta
};
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = !0;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = function() {
  return cljs.core.with_meta.call(null, cljs.core.Set.EMPTY, this.meta)
};
cljs.core.Set.EMPTY = new cljs.core.Set(null, cljs.core.hash_map.call(null));
cljs.core.set = function(a) {
  for(var a = cljs.core.seq.call(null, a), b = cljs.core.Set.EMPTY;;) {
    if(cljs.core.truth_(cljs.core.not.call(null, cljs.core.empty_QMARK_.call(null, a)))) {
      var c = cljs.core.rest.call(null, a), b = cljs.core.conj.call(null, b, cljs.core.first.call(null, a)), a = c
    }else {
      return b
    }
  }
};
cljs.core.replace = function(a, b) {
  if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null, b))) {
    var c = cljs.core.count.call(null, b);
    return cljs.core.reduce.call(null, function(b, c) {
      var f = cljs.core.find.call(null, a, cljs.core.nth.call(null, b, c));
      return cljs.core.truth_(f) ? cljs.core.assoc.call(null, b, c, cljs.core.second.call(null, f)) : b
    }, b, cljs.core.take.call(null, c, cljs.core.iterate.call(null, cljs.core.inc, 0)))
  }
  return cljs.core.map.call(null, function(b) {
    var c = cljs.core.find.call(null, a, b);
    return cljs.core.truth_(c) ? cljs.core.second.call(null, c) : b
  }, b)
};
cljs.core.distinct = function(a) {
  return function c(a, e) {
    return new cljs.core.LazySeq(null, !1, function() {
      return function(a, d) {
        for(;;) {
          var e = a, i = cljs.core.nth.call(null, e, 0, null), e = cljs.core.seq.call(null, e);
          if(cljs.core.truth_(e)) {
            if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null, d, i))) {
              i = cljs.core.rest.call(null, e), e = d, a = i, d = e
            }else {
              return cljs.core.cons.call(null, i, c.call(null, cljs.core.rest.call(null, e), cljs.core.conj.call(null, d, i)))
            }
          }else {
            return null
          }
        }
      }.call(null, a, e)
    })
  }.call(null, a, cljs.core.set([]))
};
cljs.core.butlast = function(a) {
  for(var b = cljs.core.PersistentVector.fromArray([]);;) {
    if(cljs.core.truth_(cljs.core.next.call(null, a))) {
      b = cljs.core.conj.call(null, b, cljs.core.first.call(null, a)), a = cljs.core.next.call(null, a)
    }else {
      return cljs.core.seq.call(null, b)
    }
  }
};
cljs.core.name = function(a) {
  if(cljs.core.truth_(cljs.core.string_QMARK_.call(null, a))) {
    return a
  }
  if(cljs.core.truth_(function() {
    var b = cljs.core.keyword_QMARK_.call(null, a);
    return cljs.core.truth_(b) ? b : cljs.core.symbol_QMARK_.call(null, a)
  }())) {
    var b = a.lastIndexOf("/");
    return cljs.core.truth_(0 > b) ? cljs.core.subs.call(null, a, 2) : cljs.core.subs.call(null, a, b + 1)
  }
  if(cljs.core.truth_("\ufdd0'else")) {
    throw Error(cljs.core.str.call(null, "Doesn't support name: ", a));
  }
  return null
};
cljs.core.namespace = function(a) {
  if(cljs.core.truth_(function() {
    var b = cljs.core.keyword_QMARK_.call(null, a);
    return cljs.core.truth_(b) ? b : cljs.core.symbol_QMARK_.call(null, a)
  }())) {
    var b = a.lastIndexOf("/");
    return cljs.core.truth_(-1 < b) ? cljs.core.subs.call(null, a, 2, b) : null
  }
  throw Error(cljs.core.str.call(null, "Doesn't support namespace: ", a));
};
cljs.core.zipmap = function(a, b) {
  for(var c = cljs.core.ObjMap.fromObject([], {}), d = cljs.core.seq.call(null, a), e = cljs.core.seq.call(null, b);;) {
    if(cljs.core.truth_(function() {
      var a = d;
      return cljs.core.truth_(a) ? e : a
    }())) {
      var c = cljs.core.assoc.call(null, c, cljs.core.first.call(null, d), cljs.core.first.call(null, e)), f = cljs.core.next.call(null, d), g = cljs.core.next.call(null, e), d = f, e = g
    }else {
      return c
    }
  }
};
cljs.core.max_key = function() {
  var a = null, b = function() {
    var b = function(b, c, d, h) {
      return cljs.core.reduce.call(null, function(c, d) {
        return a.call(null, b, c, d)
      }, a.call(null, b, c, d), h)
    }, d = function(a, d, g, h) {
      var i = null;
      goog.isDef(h) && (i = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, a, d, g, i)
    };
    d.cljs$lang$maxFixedArity = 3;
    d.cljs$lang$applyTo = function(a) {
      var d = cljs.core.first(a), g = cljs.core.first(cljs.core.next(a)), h = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
      return b.call(this, d, g, h, a)
    };
    return d
  }(), a = function(a, d, e, f) {
    switch(arguments.length) {
      case 2:
        return d;
      case 3:
        return cljs.core.truth_(a.call(null, d) > a.call(null, e)) ? d : e;
      default:
        return b.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 3;
  a.cljs$lang$applyTo = b.cljs$lang$applyTo;
  return a
}();
cljs.core.min_key = function() {
  var a = null, b = function() {
    var b = function(b, c, d, h) {
      return cljs.core.reduce.call(null, function(c, d) {
        return a.call(null, b, c, d)
      }, a.call(null, b, c, d), h)
    }, d = function(a, d, g, h) {
      var i = null;
      goog.isDef(h) && (i = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, a, d, g, i)
    };
    d.cljs$lang$maxFixedArity = 3;
    d.cljs$lang$applyTo = function(a) {
      var d = cljs.core.first(a), g = cljs.core.first(cljs.core.next(a)), h = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
      return b.call(this, d, g, h, a)
    };
    return d
  }(), a = function(a, d, e, f) {
    switch(arguments.length) {
      case 2:
        return d;
      case 3:
        return cljs.core.truth_(a.call(null, d) < a.call(null, e)) ? d : e;
      default:
        return b.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 3;
  a.cljs$lang$applyTo = b.cljs$lang$applyTo;
  return a
}();
cljs.core.partition_all = function() {
  var a = null, b = function(b, d, e) {
    return new cljs.core.LazySeq(null, !1, function() {
      var f = cljs.core.seq.call(null, e);
      return cljs.core.truth_(f) ? cljs.core.cons.call(null, cljs.core.take.call(null, b, f), a.call(null, b, d, cljs.core.drop.call(null, d, f))) : null
    })
  };
  return a = function(c, d, e) {
    switch(arguments.length) {
      case 2:
        return a.call(null, c, c, d);
      case 3:
        return b.call(this, c, d, e)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.take_while = function take_while(b, c) {
  return new cljs.core.LazySeq(null, !1, function() {
    var d = cljs.core.seq.call(null, c);
    return cljs.core.truth_(d) ? cljs.core.truth_(b.call(null, cljs.core.first.call(null, d))) ? cljs.core.cons.call(null, cljs.core.first.call(null, d), take_while.call(null, b, cljs.core.rest.call(null, d))) : null : null
  })
};
cljs.core.Range = function(a, b, c, d) {
  this.meta = a;
  this.start = b;
  this.end = c;
  this.step = d
};
cljs.core.Range.cljs$core$IPrintable$_pr_seq = function() {
  return cljs.core.list.call(null, "cljs.core.Range")
};
cljs.core.Range.prototype.cljs$core$IHash$ = !0;
cljs.core.Range.prototype.cljs$core$IHash$_hash = function(a) {
  return cljs.core.hash_coll.call(null, a)
};
cljs.core.Range.prototype.cljs$core$ISequential$ = !0;
cljs.core.Range.prototype.cljs$core$ICollection$ = !0;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = function(a, b) {
  return cljs.core.cons.call(null, b, a)
};
cljs.core.Range.prototype.cljs$core$IReduce$ = !0;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return cljs.core.ci_reduce.call(null, a, c);
      case 3:
        return cljs.core.ci_reduce.call(null, a, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.Range.prototype.cljs$core$ISeqable$ = !0;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = function(a) {
  var b = cljs.core.truth_(0 < this.step) ? cljs.core._LT_ : cljs.core._GT_;
  return cljs.core.truth_(b.call(null, this.start, this.end)) ? a : null
};
cljs.core.Range.prototype.cljs$core$ICounted$ = !0;
cljs.core.Range.prototype.cljs$core$ICounted$_count = function(a) {
  return cljs.core.truth_(cljs.core.not.call(null, cljs.core._seq.call(null, a))) ? 0 : Math.ceil.call(null, (this.end - this.start) / this.step)
};
cljs.core.Range.prototype.cljs$core$ISeq$ = !0;
cljs.core.Range.prototype.cljs$core$ISeq$_first = function() {
  return this.start
};
cljs.core.Range.prototype.cljs$core$ISeq$_rest = function(a) {
  return cljs.core.truth_(cljs.core._seq.call(null, a)) ? new cljs.core.Range(this.meta, this.start + this.step, this.end, this.step) : cljs.core.list.call(null)
};
cljs.core.Range.prototype.cljs$core$IEquiv$ = !0;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = function(a, b) {
  return cljs.core.equiv_sequential.call(null, a, b)
};
cljs.core.Range.prototype.cljs$core$IWithMeta$ = !0;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = function(a, b) {
  return new cljs.core.Range(b, this.start, this.end, this.step)
};
cljs.core.Range.prototype.cljs$core$IMeta$ = !0;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = function() {
  return this.meta
};
cljs.core.Range.prototype.cljs$core$IIndexed$ = !0;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = function() {
  var a = null, b = function(a, b) {
    var c = this;
    if(cljs.core.truth_(b < cljs.core._count.call(null, a))) {
      return c.start + b * c.step
    }
    if(cljs.core.truth_(function() {
      var a = c.start > c.end;
      return cljs.core.truth_(a) ? cljs.core._EQ_.call(null, c.step, 0) : a
    }())) {
      return c.start
    }
    throw Error("Index out of bounds");
  }, c = function(a, b, c) {
    var g = this;
    return cljs.core.truth_(b < cljs.core._count.call(null, a)) ? g.start + b * g.step : cljs.core.truth_(function() {
      var a = g.start > g.end;
      return cljs.core.truth_(a) ? cljs.core._EQ_.call(null, g.step, 0) : a
    }()) ? g.start : c
  };
  return function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = !0;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = function() {
  return cljs.core.with_meta.call(null, cljs.core.List.EMPTY, this.meta)
};
cljs.core.range = function() {
  var a = null;
  return a = function(b, c, d) {
    switch(arguments.length) {
      case 0:
        return a.call(null, 0, Number.MAX_VALUE, 1);
      case 1:
        return a.call(null, 0, b, 1);
      case 2:
        return a.call(null, b, c, 1);
      case 3:
        return new cljs.core.Range(null, b, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.take_nth = function take_nth(b, c) {
  return new cljs.core.LazySeq(null, !1, function() {
    var d = cljs.core.seq.call(null, c);
    return cljs.core.truth_(d) ? cljs.core.cons.call(null, cljs.core.first.call(null, d), take_nth.call(null, b, cljs.core.drop.call(null, b, d))) : null
  })
};
cljs.core.split_with = function(a, b) {
  return cljs.core.PersistentVector.fromArray([cljs.core.take_while.call(null, a, b), cljs.core.drop_while.call(null, a, b)])
};
cljs.core.partition_by = function partition_by(b, c) {
  return new cljs.core.LazySeq(null, !1, function() {
    var d = cljs.core.seq.call(null, c);
    if(cljs.core.truth_(d)) {
      var e = cljs.core.first.call(null, d), f = b.call(null, e), e = cljs.core.cons.call(null, e, cljs.core.take_while.call(null, function(c) {
        return cljs.core._EQ_.call(null, f, b.call(null, c))
      }, cljs.core.next.call(null, d)));
      return cljs.core.cons.call(null, e, partition_by.call(null, b, cljs.core.seq.call(null, cljs.core.drop.call(null, cljs.core.count.call(null, e), d))))
    }
    return null
  })
};
cljs.core.frequencies = function(a) {
  return cljs.core.reduce.call(null, function(a, c) {
    return cljs.core.assoc.call(null, a, c, cljs.core.get.call(null, a, c, 0) + 1)
  }, cljs.core.ObjMap.fromObject([], {}), a)
};
cljs.core.reductions = function() {
  var a = null, b = function(b, c) {
    return new cljs.core.LazySeq(null, !1, function() {
      var f = cljs.core.seq.call(null, c);
      return cljs.core.truth_(f) ? a.call(null, b, cljs.core.first.call(null, f), cljs.core.rest.call(null, f)) : cljs.core.list.call(null, b.call(null))
    })
  }, c = function(b, c, f) {
    return cljs.core.cons.call(null, c, new cljs.core.LazySeq(null, !1, function() {
      var g = cljs.core.seq.call(null, f);
      return cljs.core.truth_(g) ? a.call(null, b, b.call(null, c, cljs.core.first.call(null, g)), cljs.core.rest.call(null, g)) : null
    }))
  };
  return a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.juxt = function() {
  var a = null, b = function(a) {
    return function() {
      var b = null, c = function() {
        var b = function(b, c, d, e) {
          var g = null;
          goog.isDef(e) && (g = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
          return cljs.core.vector.call(null, cljs.core.apply.call(null, a, b, c, d, g))
        };
        b.cljs$lang$maxFixedArity = 3;
        b.cljs$lang$applyTo = function(b) {
          var c = cljs.core.first(b), d = cljs.core.first(cljs.core.next(b)), e = cljs.core.first(cljs.core.next(cljs.core.next(b))), b = cljs.core.rest(cljs.core.next(cljs.core.next(b)));
          return cljs.core.vector.call(null, cljs.core.apply.call(null, a, c, d, e, b))
        };
        return b
      }(), b = function(b, d, e, g) {
        switch(arguments.length) {
          case 0:
            return cljs.core.vector.call(null, a.call(null));
          case 1:
            return cljs.core.vector.call(null, a.call(null, b));
          case 2:
            return cljs.core.vector.call(null, a.call(null, b, d));
          case 3:
            return cljs.core.vector.call(null, a.call(null, b, d, e));
          default:
            return c.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      b.cljs$lang$maxFixedArity = 3;
      b.cljs$lang$applyTo = c.cljs$lang$applyTo;
      return b
    }()
  }, c = function(a, b) {
    return function() {
      var c = null, d = function() {
        var c = function(c, d, e, h) {
          return cljs.core.vector.call(null, cljs.core.apply.call(null, a, c, d, e, h), cljs.core.apply.call(null, b, c, d, e, h))
        }, d = function(a, b, d, e) {
          var f = null;
          goog.isDef(e) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
          return c.call(this, a, b, d, f)
        };
        d.cljs$lang$maxFixedArity = 3;
        d.cljs$lang$applyTo = function(a) {
          var b = cljs.core.first(a), d = cljs.core.first(cljs.core.next(a)), e = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
          return c.call(this, b, d, e, a)
        };
        return d
      }(), c = function(c, e, h, l) {
        switch(arguments.length) {
          case 0:
            return cljs.core.vector.call(null, a.call(null), b.call(null));
          case 1:
            return cljs.core.vector.call(null, a.call(null, c), b.call(null, c));
          case 2:
            return cljs.core.vector.call(null, a.call(null, c, e), b.call(null, c, e));
          case 3:
            return cljs.core.vector.call(null, a.call(null, c, e, h), b.call(null, c, e, h));
          default:
            return d.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      c.cljs$lang$maxFixedArity = 3;
      c.cljs$lang$applyTo = d.cljs$lang$applyTo;
      return c
    }()
  }, d = function(a, b, c) {
    return function() {
      var d = null, e = function() {
        var d = function(d, e, i, j) {
          return cljs.core.vector.call(null, cljs.core.apply.call(null, a, d, e, i, j), cljs.core.apply.call(null, b, d, e, i, j), cljs.core.apply.call(null, c, d, e, i, j))
        }, e = function(a, b, c, e) {
          var f = null;
          goog.isDef(e) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, c, f)
        };
        e.cljs$lang$maxFixedArity = 3;
        e.cljs$lang$applyTo = function(a) {
          var b = cljs.core.first(a), c = cljs.core.first(cljs.core.next(a)), e = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
          return d.call(this, b, c, e, a)
        };
        return e
      }(), d = function(d, i, l, n) {
        switch(arguments.length) {
          case 0:
            return cljs.core.vector.call(null, a.call(null), b.call(null), c.call(null));
          case 1:
            return cljs.core.vector.call(null, a.call(null, d), b.call(null, d), c.call(null, d));
          case 2:
            return cljs.core.vector.call(null, a.call(null, d, i), b.call(null, d, i), c.call(null, d, i));
          case 3:
            return cljs.core.vector.call(null, a.call(null, d, i, l), b.call(null, d, i, l), c.call(null, d, i, l));
          default:
            return e.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      d.cljs$lang$maxFixedArity = 3;
      d.cljs$lang$applyTo = e.cljs$lang$applyTo;
      return d
    }()
  }, e = function() {
    var a = function(a, b, c, d) {
      var e = cljs.core.list_STAR_.call(null, a, b, c, d);
      return function() {
        var a = null, b = function() {
          return cljs.core.reduce.call(null, function(a, b) {
            return cljs.core.conj.call(null, a, b.call(null))
          }, cljs.core.PersistentVector.fromArray([]), e)
        }, c = function(a) {
          return cljs.core.reduce.call(null, function(b, c) {
            return cljs.core.conj.call(null, b, c.call(null, a))
          }, cljs.core.PersistentVector.fromArray([]), e)
        }, d = function(a, b) {
          return cljs.core.reduce.call(null, function(c, d) {
            return cljs.core.conj.call(null, c, d.call(null, a, b))
          }, cljs.core.PersistentVector.fromArray([]), e)
        }, f = function(a, b, c) {
          return cljs.core.reduce.call(null, function(d, e) {
            return cljs.core.conj.call(null, d, e.call(null, a, b, c))
          }, cljs.core.PersistentVector.fromArray([]), e)
        }, g = function() {
          var a = function(a, b, c, d) {
            return cljs.core.reduce.call(null, function(e, f) {
              return cljs.core.conj.call(null, e, cljs.core.apply.call(null, f, a, b, c, d))
            }, cljs.core.PersistentVector.fromArray([]), e)
          }, b = function(b, c, d, e) {
            var f = null;
            goog.isDef(e) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
            return a.call(this, b, c, d, f)
          };
          b.cljs$lang$maxFixedArity = 3;
          b.cljs$lang$applyTo = function(b) {
            var c = cljs.core.first(b), d = cljs.core.first(cljs.core.next(b)), e = cljs.core.first(cljs.core.next(cljs.core.next(b))), b = cljs.core.rest(cljs.core.next(cljs.core.next(b)));
            return a.call(this, c, d, e, b)
          };
          return b
        }(), a = function(a, e, h, i) {
          switch(arguments.length) {
            case 0:
              return b.call(this);
            case 1:
              return c.call(this, a);
            case 2:
              return d.call(this, a, e);
            case 3:
              return f.call(this, a, e, h);
            default:
              return g.apply(this, arguments)
          }
          throw"Invalid arity: " + arguments.length;
        };
        a.cljs$lang$maxFixedArity = 3;
        a.cljs$lang$applyTo = g.cljs$lang$applyTo;
        return a
      }()
    }, b = function(b, c, d, e) {
      var g = null;
      goog.isDef(e) && (g = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
      return a.call(this, b, c, d, g)
    };
    b.cljs$lang$maxFixedArity = 3;
    b.cljs$lang$applyTo = function(b) {
      var c = cljs.core.first(b), d = cljs.core.first(cljs.core.next(b)), e = cljs.core.first(cljs.core.next(cljs.core.next(b))), b = cljs.core.rest(cljs.core.next(cljs.core.next(b)));
      return a.call(this, c, d, e, b)
    };
    return b
  }(), a = function(a, g, h, i) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, g);
      case 3:
        return d.call(this, a, g, h);
      default:
        return e.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 3;
  a.cljs$lang$applyTo = e.cljs$lang$applyTo;
  return a
}();
cljs.core.dorun = function() {
  var a = null, b = function(a, b) {
    for(;;) {
      if(cljs.core.truth_(function() {
        var e = cljs.core.seq.call(null, b);
        return cljs.core.truth_(e) ? 0 < a : e
      }())) {
        var e = a - 1, f = cljs.core.next.call(null, b), a = e, b = f
      }else {
        return null
      }
    }
  };
  return function(a, d) {
    switch(arguments.length) {
      case 1:
        var e;
        a: {
          for(var f = a;;) {
            if(cljs.core.truth_(cljs.core.seq.call(null, f))) {
              f = cljs.core.next.call(null, f)
            }else {
              e = null;
              break a
            }
          }
        }
        return e;
      case 2:
        return b.call(this, a, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.doall = function() {
  var a = null;
  return function(a, c) {
    switch(arguments.length) {
      case 1:
        return cljs.core.dorun.call(null, a), a;
      case 2:
        return cljs.core.dorun.call(null, a, c), c
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.re_matches = function(a, b) {
  var c = a.exec(b);
  return cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.first.call(null, c), b)) ? cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.count.call(null, c), 1)) ? cljs.core.first.call(null, c) : cljs.core.vec.call(null, c) : null
};
cljs.core.re_find = function(a, b) {
  var c = a.exec(b);
  return cljs.core.truth_(null === c) ? null : cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.count.call(null, c), 1)) ? cljs.core.first.call(null, c) : cljs.core.vec.call(null, c)
};
cljs.core.re_seq = function re_seq(b, c) {
  var d = cljs.core.re_find.call(null, b, c), e = c.search(b), f = cljs.core.truth_(cljs.core.coll_QMARK_.call(null, d)) ? cljs.core.first.call(null, d) : d, g = cljs.core.subs.call(null, c, e + cljs.core.count.call(null, f));
  return cljs.core.truth_(d) ? new cljs.core.LazySeq(null, !1, function() {
    return cljs.core.cons.call(null, d, re_seq.call(null, b, g))
  }) : null
};
cljs.core.re_pattern = function(a) {
  var b = cljs.core.re_find.call(null, /^(?:\(\?([idmsux]*)\))?(.*)/, a);
  cljs.core.nth.call(null, b, 0, null);
  a = cljs.core.nth.call(null, b, 1, null);
  b = cljs.core.nth.call(null, b, 2, null);
  return RegExp(b, a)
};
cljs.core.pr_sequential = function(a, b, c, d, e, f) {
  return cljs.core.concat.call(null, cljs.core.PersistentVector.fromArray([b]), cljs.core.flatten1.call(null, cljs.core.interpose.call(null, cljs.core.PersistentVector.fromArray([c]), cljs.core.map.call(null, function(b) {
    return a.call(null, b, e)
  }, f))), cljs.core.PersistentVector.fromArray([d]))
};
cljs.core.string_print = function(a) {
  cljs.core._STAR_print_fn_STAR_.call(null, a);
  return null
};
cljs.core.flush = function() {
  return null
};
cljs.core.pr_seq = function pr_seq(b, c) {
  return cljs.core.truth_(null === b) ? cljs.core.list.call(null, "nil") : cljs.core.truth_(void 0 === b) ? cljs.core.list.call(null, "#<undefined>") : cljs.core.truth_("\ufdd0'else") ? cljs.core.concat.call(null, cljs.core.truth_(function() {
    var d = cljs.core.get.call(null, c, "\ufdd0'meta");
    return cljs.core.truth_(d) ? (d = function() {
      return cljs.core.truth_(function() {
        if(cljs.core.truth_(b)) {
          var c = b.cljs$core$IMeta$;
          return cljs.core.truth_(c) ? cljs.core.not.call(null, b.hasOwnProperty("cljs$core$IMeta$")) : c
        }
        return b
      }()) ? !0 : cljs.core.type_satisfies_.call(null, cljs.core.IMeta, b)
    }(), cljs.core.truth_(d) ? cljs.core.meta.call(null, b) : d) : d
  }()) ? cljs.core.concat.call(null, cljs.core.PersistentVector.fromArray(["^"]), pr_seq.call(null, cljs.core.meta.call(null, b), c), cljs.core.PersistentVector.fromArray([" "])) : null, cljs.core.truth_(function() {
    return cljs.core.truth_(function() {
      if(cljs.core.truth_(b)) {
        var c = b.cljs$core$IPrintable$;
        return cljs.core.truth_(c) ? cljs.core.not.call(null, b.hasOwnProperty("cljs$core$IPrintable$")) : c
      }
      return b
    }()) ? !0 : cljs.core.type_satisfies_.call(null, cljs.core.IPrintable, b)
  }()) ? cljs.core._pr_seq.call(null, b, c) : cljs.core.list.call(null, "#<", cljs.core.str.call(null, b), ">")) : null
};
cljs.core.pr_sb = function(a, b) {
  var c = cljs.core.first.call(null, a), d = new goog.string.StringBuffer, e = cljs.core.seq.call(null, a);
  if(cljs.core.truth_(e)) {
    for(var f = cljs.core.first.call(null, e);;) {
      cljs.core.truth_(f === c) || d.append(" ");
      var g = cljs.core.seq.call(null, cljs.core.pr_seq.call(null, f, b));
      if(cljs.core.truth_(g)) {
        for(f = cljs.core.first.call(null, g);;) {
          if(d.append(f), f = cljs.core.next.call(null, g), cljs.core.truth_(f)) {
            g = f, f = cljs.core.first.call(null, g)
          }else {
            break
          }
        }
      }
      e = cljs.core.next.call(null, e);
      if(cljs.core.truth_(e)) {
        f = e, e = cljs.core.first.call(null, f), g = f, f = e, e = g
      }else {
        break
      }
    }
  }
  return d
};
cljs.core.pr_str_with_opts = function(a, b) {
  return cljs.core.str.call(null, cljs.core.pr_sb.call(null, a, b))
};
cljs.core.prn_str_with_opts = function(a, b) {
  var c = cljs.core.pr_sb.call(null, a, b);
  c.append("\n");
  return cljs.core.str.call(null, c)
};
cljs.core.pr_with_opts = function(a, b) {
  var c = cljs.core.first.call(null, a), d = cljs.core.seq.call(null, a);
  if(cljs.core.truth_(d)) {
    for(var e = cljs.core.first.call(null, d);;) {
      cljs.core.truth_(e === c) || cljs.core.string_print.call(null, " ");
      var f = cljs.core.seq.call(null, cljs.core.pr_seq.call(null, e, b));
      if(cljs.core.truth_(f)) {
        for(e = cljs.core.first.call(null, f);;) {
          if(cljs.core.string_print.call(null, e), e = cljs.core.next.call(null, f), cljs.core.truth_(e)) {
            f = e, e = cljs.core.first.call(null, f)
          }else {
            break
          }
        }
      }
      d = cljs.core.next.call(null, d);
      if(cljs.core.truth_(d)) {
        e = d, d = cljs.core.first.call(null, e), f = e, e = d, d = f
      }else {
        return null
      }
    }
  }else {
    return null
  }
};
cljs.core.newline = function(a) {
  cljs.core.string_print.call(null, "\n");
  return cljs.core.truth_(cljs.core.get.call(null, a, "\ufdd0'flush-on-newline")) ? cljs.core.flush.call(null) : null
};
cljs.core._STAR_flush_on_newline_STAR_ = !0;
cljs.core._STAR_print_readably_STAR_ = !0;
cljs.core._STAR_print_meta_STAR_ = !1;
cljs.core._STAR_print_dup_STAR_ = !1;
cljs.core.pr_opts = function() {
  return cljs.core.ObjMap.fromObject(["\ufdd0'flush-on-newline", "\ufdd0'readably", "\ufdd0'meta", "\ufdd0'dup"], {"\ufdd0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_, "\ufdd0'readably":cljs.core._STAR_print_readably_STAR_, "\ufdd0'meta":cljs.core._STAR_print_meta_STAR_, "\ufdd0'dup":cljs.core._STAR_print_dup_STAR_})
};
cljs.core.pr_str = function() {
  var a = function(a) {
    return cljs.core.pr_str_with_opts.call(null, a, cljs.core.pr_opts.call(null))
  }, b = function(b) {
    var d = null;
    goog.isDef(b) && (d = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
    return a.call(this, d)
  };
  b.cljs$lang$maxFixedArity = 0;
  b.cljs$lang$applyTo = function(b) {
    b = cljs.core.seq(b);
    return a.call(this, b)
  };
  return b
}();
cljs.core.prn_str = function() {
  var a = function(a) {
    return cljs.core.prn_str_with_opts.call(null, a, cljs.core.pr_opts.call(null))
  }, b = function(b) {
    var d = null;
    goog.isDef(b) && (d = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
    return a.call(this, d)
  };
  b.cljs$lang$maxFixedArity = 0;
  b.cljs$lang$applyTo = function(b) {
    b = cljs.core.seq(b);
    return a.call(this, b)
  };
  return b
}();
cljs.core.pr = function() {
  var a = function(a) {
    return cljs.core.pr_with_opts.call(null, a, cljs.core.pr_opts.call(null))
  }, b = function(b) {
    var d = null;
    goog.isDef(b) && (d = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
    return a.call(this, d)
  };
  b.cljs$lang$maxFixedArity = 0;
  b.cljs$lang$applyTo = function(b) {
    b = cljs.core.seq(b);
    return a.call(this, b)
  };
  return b
}();
cljs.core.print = function() {
  var a = function(a) {
    return cljs.core.pr_with_opts.call(null, a, cljs.core.assoc.call(null, cljs.core.pr_opts.call(null), "\ufdd0'readably", !1))
  }, b = function(b) {
    var d = null;
    goog.isDef(b) && (d = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
    return a.call(this, d)
  };
  b.cljs$lang$maxFixedArity = 0;
  b.cljs$lang$applyTo = function(b) {
    b = cljs.core.seq(b);
    return a.call(this, b)
  };
  return b
}();
cljs.core.print_str = function() {
  var a = function(a) {
    return cljs.core.pr_str_with_opts.call(null, a, cljs.core.assoc.call(null, cljs.core.pr_opts.call(null), "\ufdd0'readably", !1))
  }, b = function(b) {
    var d = null;
    goog.isDef(b) && (d = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
    return a.call(this, d)
  };
  b.cljs$lang$maxFixedArity = 0;
  b.cljs$lang$applyTo = function(b) {
    b = cljs.core.seq(b);
    return a.call(this, b)
  };
  return b
}();
cljs.core.println = function() {
  var a = function(a) {
    cljs.core.pr_with_opts.call(null, a, cljs.core.assoc.call(null, cljs.core.pr_opts.call(null), "\ufdd0'readably", !1));
    return cljs.core.newline.call(null, cljs.core.pr_opts.call(null))
  }, b = function(b) {
    var d = null;
    goog.isDef(b) && (d = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
    return a.call(this, d)
  };
  b.cljs$lang$maxFixedArity = 0;
  b.cljs$lang$applyTo = function(b) {
    b = cljs.core.seq(b);
    return a.call(this, b)
  };
  return b
}();
cljs.core.println_str = function() {
  var a = function(a) {
    return cljs.core.prn_str_with_opts.call(null, a, cljs.core.assoc.call(null, cljs.core.pr_opts.call(null), "\ufdd0'readably", !1))
  }, b = function(b) {
    var d = null;
    goog.isDef(b) && (d = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
    return a.call(this, d)
  };
  b.cljs$lang$maxFixedArity = 0;
  b.cljs$lang$applyTo = function(b) {
    b = cljs.core.seq(b);
    return a.call(this, b)
  };
  return b
}();
cljs.core.prn = function() {
  var a = function(a) {
    cljs.core.pr_with_opts.call(null, a, cljs.core.pr_opts.call(null));
    return cljs.core.newline.call(null, cljs.core.pr_opts.call(null))
  }, b = function(b) {
    var d = null;
    goog.isDef(b) && (d = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
    return a.call(this, d)
  };
  b.cljs$lang$maxFixedArity = 0;
  b.cljs$lang$applyTo = function(b) {
    b = cljs.core.seq(b);
    return a.call(this, b)
  };
  return b
}();
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = !0;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = function(a, b) {
  return cljs.core.pr_sequential.call(null, function(a) {
    return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
cljs.core.IPrintable.number = !0;
cljs.core._pr_seq.number = function(a) {
  return cljs.core.list.call(null, cljs.core.str.call(null, a))
};
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = !0;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = function(a, b) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", b, a)
};
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = !0;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq = function(a, b) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "[", " ", "]", b, a)
};
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = !0;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = function(a, b) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", b, a)
};
cljs.core.IPrintable["boolean"] = !0;
cljs.core._pr_seq["boolean"] = function(a) {
  return cljs.core.list.call(null, cljs.core.str.call(null, a))
};
cljs.core.Set.prototype.cljs$core$IPrintable$ = !0;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = function(a, b) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "#{", " ", "}", b, a)
};
cljs.core.IPrintable.string = !0;
cljs.core._pr_seq.string = function(a, b) {
  return cljs.core.truth_(cljs.core.keyword_QMARK_.call(null, a)) ? cljs.core.list.call(null, cljs.core.str.call(null, ":", function() {
    var b = cljs.core.namespace.call(null, a);
    return cljs.core.truth_(b) ? cljs.core.str.call(null, b, "/") : null
  }(), cljs.core.name.call(null, a))) : cljs.core.truth_(cljs.core.symbol_QMARK_.call(null, a)) ? cljs.core.list.call(null, cljs.core.str.call(null, function() {
    var b = cljs.core.namespace.call(null, a);
    return cljs.core.truth_(b) ? cljs.core.str.call(null, b, "/") : null
  }(), cljs.core.name.call(null, a))) : cljs.core.truth_("\ufdd0'else") ? cljs.core.list.call(null, cljs.core.truth_("\ufdd0'readably".call(null, b)) ? goog.string.quote.call(null, a) : a) : null
};
cljs.core.Vector.prototype.cljs$core$IPrintable$ = !0;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = function(a, b) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "[", " ", "]", b, a)
};
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = !0;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq = function(a, b) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "[", " ", "]", b, a)
};
cljs.core.List.prototype.cljs$core$IPrintable$ = !0;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = function(a, b) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", b, a)
};
cljs.core.IPrintable.array = !0;
cljs.core._pr_seq.array = function(a, b) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "#<Array [", ", ", "]>", b, a)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$ = !0;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$_pr_seq = function(a, b) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", b, a)
};
cljs.core.IPrintable["function"] = !0;
cljs.core._pr_seq["function"] = function(a) {
  return cljs.core.list.call(null, "#<", cljs.core.str.call(null, a), ">")
};
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = !0;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = function() {
  return cljs.core.list.call(null, "()")
};
cljs.core.Cons.prototype.cljs$core$IPrintable$ = !0;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = function(a, b) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", b, a)
};
cljs.core.Range.prototype.cljs$core$IPrintable$ = !0;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = function(a, b) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", b, a)
};
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = !0;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = function(a, b) {
  return cljs.core.pr_sequential.call(null, function(a) {
    return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
cljs.core.Atom = function(a, b, c, d) {
  this.state = a;
  this.meta = b;
  this.validator = c;
  this.watches = d
};
cljs.core.Atom.cljs$core$IPrintable$_pr_seq = function() {
  return cljs.core.list.call(null, "cljs.core.Atom")
};
cljs.core.Atom.prototype.cljs$core$IHash$ = !0;
cljs.core.Atom.prototype.cljs$core$IHash$_hash = function(a) {
  return goog.getUid.call(null, a)
};
cljs.core.Atom.prototype.cljs$core$IWatchable$ = !0;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = function(a, b, c) {
  var d = cljs.core.seq.call(null, this.watches);
  if(cljs.core.truth_(d)) {
    var e = cljs.core.first.call(null, d);
    cljs.core.nth.call(null, e, 0, null);
    for(cljs.core.nth.call(null, e, 1, null);;) {
      var f = e, e = cljs.core.nth.call(null, f, 0, null), f = cljs.core.nth.call(null, f, 1, null);
      f.call(null, e, a, b, c);
      d = cljs.core.next.call(null, d);
      if(cljs.core.truth_(d)) {
        e = d, d = cljs.core.first.call(null, e), f = e, e = d, d = f
      }else {
        return null
      }
    }
  }else {
    return null
  }
};
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch = function(a, b, c) {
  return a.watches = cljs.core.assoc.call(null, this.watches, b, c)
};
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = function(a, b) {
  return a.watches = cljs.core.dissoc.call(null, this.watches, b)
};
cljs.core.Atom.prototype.cljs$core$IPrintable$ = !0;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = function(a, b) {
  return cljs.core.concat.call(null, cljs.core.PersistentVector.fromArray(["#<Atom: "]), cljs.core._pr_seq.call(null, this.state, b), ">")
};
cljs.core.Atom.prototype.cljs$core$IMeta$ = !0;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = function() {
  return this.meta
};
cljs.core.Atom.prototype.cljs$core$IDeref$ = !0;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = function() {
  return this.state
};
cljs.core.Atom.prototype.cljs$core$IEquiv$ = !0;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = function(a, b) {
  return a === b
};
cljs.core.atom = function() {
  var a = null, b = function() {
    var a = function(a, b) {
      var c = cljs.core.truth_(cljs.core.seq_QMARK_.call(null, b)) ? cljs.core.apply.call(null, cljs.core.hash_map, b) : b, d = cljs.core.get.call(null, c, "\ufdd0'validator"), c = cljs.core.get.call(null, c, "\ufdd0'meta");
      return new cljs.core.Atom(a, c, d, null)
    }, b = function(b, d) {
      var g = null;
      goog.isDef(d) && (g = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0));
      return a.call(this, b, g)
    };
    b.cljs$lang$maxFixedArity = 1;
    b.cljs$lang$applyTo = function(b) {
      var d = cljs.core.first(b), b = cljs.core.rest(b);
      return a.call(this, d, b)
    };
    return b
  }(), a = function(a, d) {
    switch(arguments.length) {
      case 1:
        return new cljs.core.Atom(a, null, null, null);
      default:
        return b.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 1;
  a.cljs$lang$applyTo = b.cljs$lang$applyTo;
  return a
}();
cljs.core.reset_BANG_ = function(a, b) {
  var c = a.validator;
  if(cljs.core.truth_(c) && !cljs.core.truth_(c.call(null, b))) {
    throw Error(cljs.core.str.call(null, "Assert failed: ", "Validator rejected reference state", "\n", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'validate", "\ufdd1'new-value"), cljs.core.hash_map("\ufdd0'line", 3282)))));
  }
  c = a.state;
  a.state = b;
  cljs.core._notify_watches.call(null, a, c, b);
  return b
};
cljs.core.swap_BANG_ = function() {
  var a = null, b = function() {
    var a = function(a, b, c, g, h, i) {
      var j = null;
      goog.isDef(i) && (j = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5), 0));
      return cljs.core.reset_BANG_.call(null, a, cljs.core.apply.call(null, b, a.state, c, g, h, j))
    };
    a.cljs$lang$maxFixedArity = 5;
    a.cljs$lang$applyTo = function(a) {
      var b = cljs.core.first(a), c = cljs.core.first(cljs.core.next(a)), g = cljs.core.first(cljs.core.next(cljs.core.next(a))), h = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(a)))), i = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(a))))), a = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(a)))));
      return cljs.core.reset_BANG_.call(null, b, cljs.core.apply.call(null, c, b.state, g, h, i, a))
    };
    return a
  }(), a = function(a, d, e, f, g, h) {
    switch(arguments.length) {
      case 2:
        return cljs.core.reset_BANG_.call(null, a, d.call(null, a.state));
      case 3:
        return cljs.core.reset_BANG_.call(null, a, d.call(null, a.state, e));
      case 4:
        return cljs.core.reset_BANG_.call(null, a, d.call(null, a.state, e, f));
      case 5:
        return cljs.core.reset_BANG_.call(null, a, d.call(null, a.state, e, f, g));
      default:
        return b.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 5;
  a.cljs$lang$applyTo = b.cljs$lang$applyTo;
  return a
}();
cljs.core.compare_and_set_BANG_ = function(a, b, c) {
  return cljs.core.truth_(cljs.core._EQ_.call(null, a.state, b)) ? (cljs.core.reset_BANG_.call(null, a, c), !0) : !1
};
cljs.core.deref = function(a) {
  return cljs.core._deref.call(null, a)
};
cljs.core.set_validator_BANG_ = function(a, b) {
  return a.validator = b
};
cljs.core.get_validator = function(a) {
  return a.validator
};
cljs.core.alter_meta_BANG_ = function() {
  var a = function(a, c, d) {
    var e = null;
    goog.isDef(d) && (e = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
    return a.meta = cljs.core.apply.call(null, c, a.meta, e)
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = function(a) {
    var c = cljs.core.first(a), d = cljs.core.first(cljs.core.next(a)), a = cljs.core.rest(cljs.core.next(a));
    return c.meta = cljs.core.apply.call(null, d, c.meta, a)
  };
  return a
}();
cljs.core.reset_meta_BANG_ = function(a, b) {
  return a.meta = b
};
cljs.core.add_watch = function(a, b, c) {
  return cljs.core._add_watch.call(null, a, b, c)
};
cljs.core.remove_watch = function(a, b) {
  return cljs.core._remove_watch.call(null, a, b)
};
cljs.core.gensym_counter = null;
cljs.core.gensym = function() {
  var a = null;
  return a = function(b) {
    switch(arguments.length) {
      case 0:
        return a.call(null, "G__");
      case 1:
        if(cljs.core.truth_(null === cljs.core.gensym_counter)) {
          cljs.core.gensym_counter = cljs.core.atom.call(null, 0)
        }
        return cljs.core.symbol.call(null, cljs.core.str.call(null, b, cljs.core.swap_BANG_.call(null, cljs.core.gensym_counter, cljs.core.inc)))
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;
cljs.core.Delay = function(a, b) {
  this.state = a;
  this.f = b
};
cljs.core.Delay.cljs$core$IPrintable$_pr_seq = function() {
  return cljs.core.list.call(null, "cljs.core.Delay")
};
cljs.core.Delay.prototype.cljs$core$IPending$ = !0;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = function() {
  return"\ufdd0'done".call(null, cljs.core.deref.call(null, this.state))
};
cljs.core.Delay.prototype.cljs$core$IDeref$ = !0;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = function() {
  var a = this;
  return"\ufdd0'value".call(null, cljs.core.swap_BANG_.call(null, a.state, function(b) {
    var b = cljs.core.truth_(cljs.core.seq_QMARK_.call(null, b)) ? cljs.core.apply.call(null, cljs.core.hash_map, b) : b, c = cljs.core.get.call(null, b, "\ufdd0'done");
    return cljs.core.truth_(c) ? b : cljs.core.ObjMap.fromObject(["\ufdd0'done", "\ufdd0'value"], {"\ufdd0'done":!0, "\ufdd0'value":a.f.call(null)})
  }))
};
cljs.core.delay_QMARK_ = function(a) {
  return cljs.core.instance_QMARK_.call(null, cljs.core.Delay, a)
};
cljs.core.force = function(a) {
  return cljs.core.truth_(cljs.core.delay_QMARK_.call(null, a)) ? cljs.core.deref.call(null, a) : a
};
cljs.core.realized_QMARK_ = function(a) {
  return cljs.core._realized_QMARK_.call(null, a)
};
cljs.core.js__GT_clj = function() {
  var a = function(a, b) {
    var e = cljs.core.truth_(cljs.core.seq_QMARK_.call(null, b)) ? cljs.core.apply.call(null, cljs.core.hash_map, b) : b, e = cljs.core.get.call(null, e, "\ufdd0'keywordize-keys"), f = cljs.core.truth_(e) ? cljs.core.keyword : cljs.core.str;
    return function h(a) {
      return cljs.core.truth_(cljs.core.seq_QMARK_.call(null, a)) ? cljs.core.doall.call(null, cljs.core.map.call(null, h, a)) : cljs.core.truth_(cljs.core.coll_QMARK_.call(null, a)) ? cljs.core.into.call(null, cljs.core.empty.call(null, a), cljs.core.map.call(null, h, a)) : cljs.core.truth_(goog.isArray.call(null, a)) ? cljs.core.vec.call(null, cljs.core.map.call(null, h, a)) : cljs.core.truth_(goog.isObject.call(null, a)) ? cljs.core.into.call(null, cljs.core.ObjMap.fromObject([], {}), function() {
        return function k(b) {
          return new cljs.core.LazySeq(null, !1, function() {
            for(;;) {
              if(cljs.core.truth_(cljs.core.seq.call(null, b))) {
                var c = cljs.core.first.call(null, b);
                return cljs.core.cons.call(null, cljs.core.PersistentVector.fromArray([f.call(null, c), h.call(null, a[c])]), k.call(null, cljs.core.rest.call(null, b)))
              }
              return null
            }
          })
        }.call(null, cljs.core.js_keys.call(null, a))
      }()) : cljs.core.truth_("\ufdd0'else") ? a : null
    }.call(null, a)
  }, b = function(b, d) {
    var e = null;
    goog.isDef(d) && (e = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0));
    return a.call(this, b, e)
  };
  b.cljs$lang$maxFixedArity = 1;
  b.cljs$lang$applyTo = function(b) {
    var d = cljs.core.first(b), b = cljs.core.rest(b);
    return a.call(this, d, b)
  };
  return b
}();
cljs.core.memoize = function(a) {
  var b = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {}));
  return function() {
    var c = function(c) {
      var d = cljs.core.get.call(null, cljs.core.deref.call(null, b), c);
      if(cljs.core.truth_(d)) {
        return d
      }
      d = cljs.core.apply.call(null, a, c);
      cljs.core.swap_BANG_.call(null, b, cljs.core.assoc, c, d);
      return d
    }, d = function(a) {
      var b = null;
      goog.isDef(a) && (b = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
      return c.call(this, b)
    };
    d.cljs$lang$maxFixedArity = 0;
    d.cljs$lang$applyTo = function(a) {
      a = cljs.core.seq(a);
      return c.call(this, a)
    };
    return d
  }()
};
cljs.core.trampoline = function() {
  var a = null, b = function() {
    var b = function(b, c) {
      return a.call(null, function() {
        return cljs.core.apply.call(null, b, c)
      })
    }, d = function(a, d) {
      var g = null;
      goog.isDef(d) && (g = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, a, g)
    };
    d.cljs$lang$maxFixedArity = 1;
    d.cljs$lang$applyTo = function(a) {
      var d = cljs.core.first(a), a = cljs.core.rest(a);
      return b.call(this, d, a)
    };
    return d
  }(), a = function(a, d) {
    switch(arguments.length) {
      case 1:
        var e;
        a: {
          for(var f = a;;) {
            if(f = f.call(null), !cljs.core.truth_(cljs.core.fn_QMARK_.call(null, f))) {
              e = f;
              break a
            }
          }
        }
        return e;
      default:
        return b.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 1;
  a.cljs$lang$applyTo = b.cljs$lang$applyTo;
  return a
}();
cljs.core.rand = function() {
  var a = null;
  return a = function(b) {
    switch(arguments.length) {
      case 0:
        return a.call(null, 1);
      case 1:
        return Math.random() * b
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.rand_int = function(a) {
  return Math.floor(Math.random() * a)
};
cljs.core.rand_nth = function(a) {
  return cljs.core.nth.call(null, a, cljs.core.rand_int.call(null, cljs.core.count.call(null, a)))
};
cljs.core.group_by = function(a, b) {
  return cljs.core.reduce.call(null, function(b, d) {
    var e = a.call(null, d);
    return cljs.core.assoc.call(null, b, e, cljs.core.conj.call(null, cljs.core.get.call(null, b, e, cljs.core.PersistentVector.fromArray([])), d))
  }, cljs.core.ObjMap.fromObject([], {}), b)
};
cljs.core.make_hierarchy = function() {
  return cljs.core.ObjMap.fromObject(["\ufdd0'parents", "\ufdd0'descendants", "\ufdd0'ancestors"], {"\ufdd0'parents":cljs.core.ObjMap.fromObject([], {}), "\ufdd0'descendants":cljs.core.ObjMap.fromObject([], {}), "\ufdd0'ancestors":cljs.core.ObjMap.fromObject([], {})})
};
cljs.core.global_hierarchy = cljs.core.atom.call(null, cljs.core.make_hierarchy.call(null));
cljs.core.isa_QMARK_ = function() {
  var a = null, b = function(b, d, e) {
    var f = cljs.core._EQ_.call(null, d, e);
    if(cljs.core.truth_(f)) {
      return f
    }
    f = cljs.core.contains_QMARK_.call(null, "\ufdd0'ancestors".call(null, b).call(null, d), e);
    if(cljs.core.truth_(f)) {
      return f
    }
    f = cljs.core.vector_QMARK_.call(null, e);
    if(cljs.core.truth_(f)) {
      if(f = cljs.core.vector_QMARK_.call(null, d), cljs.core.truth_(f)) {
        if(f = cljs.core._EQ_.call(null, cljs.core.count.call(null, e), cljs.core.count.call(null, d)), cljs.core.truth_(f)) {
          for(var g = !0, h = 0;;) {
            if(cljs.core.truth_(function() {
              var a = cljs.core.not.call(null, g);
              return cljs.core.truth_(a) ? a : cljs.core._EQ_.call(null, h, cljs.core.count.call(null, e))
            }())) {
              return g
            }
            var f = a.call(null, b, d.call(null, h), e.call(null, h)), i = h + 1, g = f, h = i
          }
        }else {
          return f
        }
      }else {
        return f
      }
    }else {
      return f
    }
  };
  return a = function(c, d, e) {
    switch(arguments.length) {
      case 2:
        return a.call(null, cljs.core.deref.call(null, cljs.core.global_hierarchy), c, d);
      case 3:
        return b.call(this, c, d, e)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.parents = function() {
  var a = null;
  return a = function(b, c) {
    switch(arguments.length) {
      case 1:
        return a.call(null, cljs.core.deref.call(null, cljs.core.global_hierarchy), b);
      case 2:
        return cljs.core.not_empty.call(null, cljs.core.get.call(null, "\ufdd0'parents".call(null, b), c))
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.ancestors = function() {
  var a = null;
  return a = function(b, c) {
    switch(arguments.length) {
      case 1:
        return a.call(null, cljs.core.deref.call(null, cljs.core.global_hierarchy), b);
      case 2:
        return cljs.core.not_empty.call(null, cljs.core.get.call(null, "\ufdd0'ancestors".call(null, b), c))
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.descendants = function() {
  var a = null;
  return a = function(b, c) {
    switch(arguments.length) {
      case 1:
        return a.call(null, cljs.core.deref.call(null, cljs.core.global_hierarchy), b);
      case 2:
        return cljs.core.not_empty.call(null, cljs.core.get.call(null, "\ufdd0'descendants".call(null, b), c))
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.derive = function() {
  var a = null, b = function(a, b, e) {
    if(!cljs.core.truth_(cljs.core.not_EQ_.call(null, b, e))) {
      throw Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'not=", "\ufdd1'tag", "\ufdd1'parent"), cljs.core.hash_map("\ufdd0'line", 3570)))));
    }
    var f = "\ufdd0'parents".call(null, a), g = "\ufdd0'descendants".call(null, a), h = "\ufdd0'ancestors".call(null, a), i = function(a, b, c, d, e) {
      return cljs.core.reduce.call(null, function(a, b) {
        return cljs.core.assoc.call(null, a, b, cljs.core.reduce.call(null, cljs.core.conj, cljs.core.get.call(null, e, b, cljs.core.set([])), cljs.core.cons.call(null, d, e.call(null, d))))
      }, a, cljs.core.cons.call(null, b, c.call(null, b)))
    };
    if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null, f.call(null, b), e))) {
      b = null
    }else {
      if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null, h.call(null, b), e))) {
        throw Error(cljs.core.str.call(null, b, "already has", e, "as ancestor"));
      }
      if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null, h.call(null, e), b))) {
        throw Error(cljs.core.str.call(null, "Cyclic derivation:", e, "has", b, "as ancestor"));
      }
      b = cljs.core.ObjMap.fromObject(["\ufdd0'parents", "\ufdd0'ancestors", "\ufdd0'descendants"], {"\ufdd0'parents":cljs.core.assoc.call(null, "\ufdd0'parents".call(null, a), b, cljs.core.conj.call(null, cljs.core.get.call(null, f, b, cljs.core.set([])), e)), "\ufdd0'ancestors":i.call(null, "\ufdd0'ancestors".call(null, a), b, g, e, h), "\ufdd0'descendants":i.call(null, "\ufdd0'descendants".call(null, a), e, h, b, g)})
    }
    return cljs.core.truth_(b) ? b : a
  };
  return a = function(c, d, e) {
    switch(arguments.length) {
      case 2:
        if(!cljs.core.truth_(cljs.core.namespace.call(null, d))) {
          throw Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'namespace", "\ufdd1'parent"), cljs.core.hash_map("\ufdd0'line", 3566)))));
        }
        cljs.core.swap_BANG_.call(null, cljs.core.global_hierarchy, a, c, d);
        return null;
      case 3:
        return b.call(this, c, d, e)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.underive = function() {
  var a = null, b = function(a, b, e) {
    var f = "\ufdd0'parents".call(null, a), g = cljs.core.truth_(f.call(null, b)) ? cljs.core.disj.call(null, f.call(null, b), e) : cljs.core.set([]), g = cljs.core.truth_(cljs.core.not_empty.call(null, g)) ? cljs.core.assoc.call(null, f, b, g) : cljs.core.dissoc.call(null, f, b), g = cljs.core.flatten.call(null, cljs.core.map.call(null, function(a) {
      return cljs.core.cons.call(null, cljs.core.first.call(null, a), cljs.core.interpose.call(null, cljs.core.first.call(null, a), cljs.core.second.call(null, a)))
    }, cljs.core.seq.call(null, g)));
    return cljs.core.truth_(cljs.core.contains_QMARK_.call(null, f.call(null, b), e)) ? cljs.core.reduce.call(null, function(a, b) {
      return cljs.core.apply.call(null, cljs.core.derive, a, b)
    }, cljs.core.make_hierarchy.call(null), cljs.core.partition.call(null, 2, g)) : a
  };
  return a = function(c, d, e) {
    switch(arguments.length) {
      case 2:
        return cljs.core.swap_BANG_.call(null, cljs.core.global_hierarchy, a, c, d), null;
      case 3:
        return b.call(this, c, d, e)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.reset_cache = function(a, b, c, d) {
  cljs.core.swap_BANG_.call(null, a, function() {
    return cljs.core.deref.call(null, b)
  });
  return cljs.core.swap_BANG_.call(null, c, function() {
    return cljs.core.deref.call(null, d)
  })
};
cljs.core.prefers_STAR_ = function prefers_STAR_(b, c, d) {
  var e = cljs.core.deref.call(null, d).call(null, b), e = cljs.core.truth_(cljs.core.truth_(e) ? e.call(null, c) : e) ? !0 : null;
  if(cljs.core.truth_(e)) {
    return e
  }
  e = function() {
    for(var e = cljs.core.parents.call(null, c);;) {
      if(cljs.core.truth_(0 < cljs.core.count.call(null, e))) {
        cljs.core.truth_(prefers_STAR_.call(null, b, cljs.core.first.call(null, e), d)), e = cljs.core.rest.call(null, e)
      }else {
        return null
      }
    }
  }();
  if(cljs.core.truth_(e)) {
    return e
  }
  e = function() {
    for(var e = cljs.core.parents.call(null, b);;) {
      if(cljs.core.truth_(0 < cljs.core.count.call(null, e))) {
        cljs.core.truth_(prefers_STAR_.call(null, cljs.core.first.call(null, e), c, d)), e = cljs.core.rest.call(null, e)
      }else {
        return null
      }
    }
  }();
  return cljs.core.truth_(e) ? e : !1
};
cljs.core.dominates = function(a, b, c) {
  c = cljs.core.prefers_STAR_.call(null, a, b, c);
  return cljs.core.truth_(c) ? c : cljs.core.isa_QMARK_.call(null, a, b)
};
cljs.core.find_and_cache_best_method = function find_and_cache_best_method(b, c, d, e, f, g, h) {
  var i = cljs.core.reduce.call(null, function(d, e) {
    var g = cljs.core.nth.call(null, e, 0, null);
    cljs.core.nth.call(null, e, 1, null);
    if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null, c, g))) {
      var h = cljs.core.truth_(function() {
        var b = null === d;
        return cljs.core.truth_(b) ? b : cljs.core.dominates.call(null, g, cljs.core.first.call(null, d), f)
      }()) ? e : d;
      if(!cljs.core.truth_(cljs.core.dominates.call(null, cljs.core.first.call(null, h), g, f))) {
        throw Error(cljs.core.str.call(null, "Multiple methods in multimethod '", b, "' match dispatch value: ", c, " -> ", g, " and ", cljs.core.first.call(null, h), ", and neither is preferred"));
      }
      return h
    }
    return d
  }, null, cljs.core.deref.call(null, e));
  if(cljs.core.truth_(i)) {
    if(cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.deref.call(null, h), cljs.core.deref.call(null, d)))) {
      return cljs.core.swap_BANG_.call(null, g, cljs.core.assoc, c, cljs.core.second.call(null, i)), cljs.core.second.call(null, i)
    }
    cljs.core.reset_cache.call(null, g, e, h, d);
    return find_and_cache_best_method.call(null, b, c, d, e, f, g, h)
  }
  return null
};
cljs.core.IMultiFn = {};
cljs.core._reset = function(a) {
  if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IMultiFn$_reset : a)) {
    a = a.cljs$core$IMultiFn$_reset(a)
  }else {
    var b;
    b = cljs.core._reset[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(b) && (b = cljs.core._reset._, !cljs.core.truth_(b))) {
      throw cljs.core.missing_protocol.call(null, "IMultiFn.-reset", a);
    }
    a = b.call(null, a)
  }
  return a
};
cljs.core._add_method = function(a, b, c) {
  if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IMultiFn$_add_method : a)) {
    a = a.cljs$core$IMultiFn$_add_method(a, b, c)
  }else {
    var d;
    d = cljs.core._add_method[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(d) && (d = cljs.core._add_method._, !cljs.core.truth_(d))) {
      throw cljs.core.missing_protocol.call(null, "IMultiFn.-add-method", a);
    }
    a = d.call(null, a, b, c)
  }
  return a
};
cljs.core._remove_method = function(a, b) {
  var c;
  if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IMultiFn$_remove_method : a)) {
    c = a.cljs$core$IMultiFn$_remove_method(a, b)
  }else {
    c = cljs.core._remove_method[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(c) && (c = cljs.core._remove_method._, !cljs.core.truth_(c))) {
      throw cljs.core.missing_protocol.call(null, "IMultiFn.-remove-method", a);
    }
    c = c.call(null, a, b)
  }
  return c
};
cljs.core._prefer_method = function(a, b, c) {
  if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IMultiFn$_prefer_method : a)) {
    a = a.cljs$core$IMultiFn$_prefer_method(a, b, c)
  }else {
    var d;
    d = cljs.core._prefer_method[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(d) && (d = cljs.core._prefer_method._, !cljs.core.truth_(d))) {
      throw cljs.core.missing_protocol.call(null, "IMultiFn.-prefer-method", a);
    }
    a = d.call(null, a, b, c)
  }
  return a
};
cljs.core._get_method = function(a, b) {
  var c;
  if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IMultiFn$_get_method : a)) {
    c = a.cljs$core$IMultiFn$_get_method(a, b)
  }else {
    c = cljs.core._get_method[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(c) && (c = cljs.core._get_method._, !cljs.core.truth_(c))) {
      throw cljs.core.missing_protocol.call(null, "IMultiFn.-get-method", a);
    }
    c = c.call(null, a, b)
  }
  return c
};
cljs.core._methods = function(a) {
  if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IMultiFn$_methods : a)) {
    a = a.cljs$core$IMultiFn$_methods(a)
  }else {
    var b;
    b = cljs.core._methods[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(b) && (b = cljs.core._methods._, !cljs.core.truth_(b))) {
      throw cljs.core.missing_protocol.call(null, "IMultiFn.-methods", a);
    }
    a = b.call(null, a)
  }
  return a
};
cljs.core._prefers = function(a) {
  if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IMultiFn$_prefers : a)) {
    a = a.cljs$core$IMultiFn$_prefers(a)
  }else {
    var b;
    b = cljs.core._prefers[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(b) && (b = cljs.core._prefers._, !cljs.core.truth_(b))) {
      throw cljs.core.missing_protocol.call(null, "IMultiFn.-prefers", a);
    }
    a = b.call(null, a)
  }
  return a
};
cljs.core._dispatch = function(a, b) {
  var c;
  if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$core$IMultiFn$_dispatch : a)) {
    c = a.cljs$core$IMultiFn$_dispatch(a, b)
  }else {
    c = cljs.core._dispatch[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(c) && (c = cljs.core._dispatch._, !cljs.core.truth_(c))) {
      throw cljs.core.missing_protocol.call(null, "IMultiFn.-dispatch", a);
    }
    c = c.call(null, a, b)
  }
  return c
};
cljs.core.do_dispatch = function(a, b, c) {
  b = cljs.core.apply.call(null, b, c);
  a = cljs.core._get_method.call(null, a, b);
  if(!cljs.core.truth_(a)) {
    throw Error(cljs.core.str.call(null, "No method in multimethod '", cljs.core.name, "' for dispatch value: ", b));
  }
  return cljs.core.apply.call(null, a, c)
};
cljs.core.MultiFn = function(a, b, c, d, e, f, g, h) {
  this.name = a;
  this.dispatch_fn = b;
  this.default_dispatch_val = c;
  this.hierarchy = d;
  this.method_table = e;
  this.prefer_table = f;
  this.method_cache = g;
  this.cached_hierarchy = h
};
cljs.core.MultiFn.cljs$core$IPrintable$_pr_seq = function() {
  return cljs.core.list.call(null, "cljs.core.MultiFn")
};
cljs.core.MultiFn.prototype.cljs$core$IHash$ = !0;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash = function(a) {
  return goog.getUid.call(null, a)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = !0;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = function(a) {
  cljs.core.swap_BANG_.call(null, this.method_table, function() {
    return cljs.core.ObjMap.fromObject([], {})
  });
  cljs.core.swap_BANG_.call(null, this.method_cache, function() {
    return cljs.core.ObjMap.fromObject([], {})
  });
  cljs.core.swap_BANG_.call(null, this.prefer_table, function() {
    return cljs.core.ObjMap.fromObject([], {})
  });
  cljs.core.swap_BANG_.call(null, this.cached_hierarchy, function() {
    return null
  });
  return a
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = function(a, b, c) {
  cljs.core.swap_BANG_.call(null, this.method_table, cljs.core.assoc, b, c);
  cljs.core.reset_cache.call(null, this.method_cache, this.method_table, this.cached_hierarchy, this.hierarchy);
  return a
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = function(a, b) {
  cljs.core.swap_BANG_.call(null, this.method_table, cljs.core.dissoc, b);
  cljs.core.reset_cache.call(null, this.method_cache, this.method_table, this.cached_hierarchy, this.hierarchy);
  return a
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = function(a, b) {
  cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.deref.call(null, this.cached_hierarchy), cljs.core.deref.call(null, this.hierarchy))) || cljs.core.reset_cache.call(null, this.method_cache, this.method_table, this.cached_hierarchy, this.hierarchy);
  var c = cljs.core.deref.call(null, this.method_cache).call(null, b);
  if(cljs.core.truth_(c)) {
    return c
  }
  c = cljs.core.find_and_cache_best_method.call(null, this.name, b, this.hierarchy, this.method_table, this.prefer_table, this.method_cache, this.cached_hierarchy);
  return cljs.core.truth_(c) ? c : cljs.core.deref.call(null, this.method_table).call(null, this.default_dispatch_val)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = function(a, b, c) {
  if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null, b, c, this.prefer_table))) {
    throw Error(cljs.core.str.call(null, "Preference conflict in multimethod '", this.name, "': ", c, " is already preferred to ", b));
  }
  cljs.core.swap_BANG_.call(null, this.prefer_table, function(a) {
    return cljs.core.assoc.call(null, a, b, cljs.core.conj.call(null, cljs.core.get.call(null, a, b, cljs.core.set([])), c))
  });
  return cljs.core.reset_cache.call(null, this.method_cache, this.method_table, this.cached_hierarchy, this.hierarchy)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = function() {
  return cljs.core.deref.call(null, this.method_table)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = function() {
  return cljs.core.deref.call(null, this.prefer_table)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = function(a, b) {
  return cljs.core.do_dispatch.call(null, a, this.dispatch_fn, b)
};
cljs.core.MultiFn.prototype.call = function() {
  var a = function(a, c) {
    var d = null;
    goog.isDef(c) && (d = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0));
    return cljs.core._dispatch.call(null, this, d)
  };
  a.cljs$lang$maxFixedArity = 1;
  a.cljs$lang$applyTo = function(a) {
    cljs.core.first(a);
    a = cljs.core.rest(a);
    return cljs.core._dispatch.call(null, this, a)
  };
  return a
}();
cljs.core.MultiFn.prototype.apply = function(a, b) {
  return cljs.core._dispatch.call(null, this, b)
};
cljs.core.remove_all_methods = function(a) {
  return cljs.core._reset.call(null, a)
};
cljs.core.remove_method = function(a, b) {
  return cljs.core._remove_method.call(null, a, b)
};
cljs.core.prefer_method = function(a, b, c) {
  return cljs.core._prefer_method.call(null, a, b, c)
};
cljs.core.methods$ = function(a) {
  return cljs.core._methods.call(null, a)
};
cljs.core.get_method = function(a, b) {
  return cljs.core._get_method.call(null, a, b)
};
cljs.core.prefers = function(a) {
  return cljs.core._prefers.call(null, a)
};
var jayq = {util:{}};
jayq.util.map__GT_js = function(a) {
  var b = cljs.core.js_obj.call(null), a = cljs.core.seq.call(null, a);
  if(cljs.core.truth_(a)) {
    var c = cljs.core.first.call(null, a);
    cljs.core.nth.call(null, c, 0, null);
    for(cljs.core.nth.call(null, c, 1, null);;) {
      var d = c, c = cljs.core.nth.call(null, d, 0, null), d = cljs.core.nth.call(null, d, 1, null);
      b[cljs.core.name.call(null, c)] = d;
      a = cljs.core.next.call(null, a);
      if(cljs.core.truth_(a)) {
        c = a, a = cljs.core.first.call(null, c), d = c, c = a, a = d
      }else {
        break
      }
    }
  }
  return b
};
jayq.util.wait = function(a, b) {
  return setTimeout(b, a)
};
jayq.util.log = function() {
  var a = function(a, b) {
    var e = cljs.core.truth_(cljs.core.string_QMARK_.call(null, a)) ? cljs.core.apply.call(null, cljs.core.str, a, b) : a;
    return console.log(e)
  }, b = function(b, d) {
    var e = null;
    goog.isDef(d) && (e = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0));
    return a.call(this, b, e)
  };
  b.cljs$lang$maxFixedArity = 1;
  b.cljs$lang$applyTo = function(b) {
    var d = cljs.core.first(b), b = cljs.core.rest(b);
    return a.call(this, d, b)
  };
  return b
}();
jayq.util.clj__GT_js = function clj__GT_js(b) {
  return cljs.core.truth_(cljs.core.string_QMARK_.call(null, b)) ? b : cljs.core.truth_(cljs.core.keyword_QMARK_.call(null, b)) ? cljs.core.name.call(null, b) : cljs.core.truth_(cljs.core.map_QMARK_.call(null, b)) ? cljs.core.reduce.call(null, function(b, d) {
    var e = cljs.core.nth.call(null, d, 0, null), f = cljs.core.nth.call(null, d, 1, null);
    return cljs.core.assoc.call(null, b, clj__GT_js.call(null, e), clj__GT_js.call(null, f))
  }, cljs.core.ObjMap.fromObject([], {}), b).strobj : cljs.core.truth_(cljs.core.coll_QMARK_.call(null, b)) ? cljs.core.apply.call(null, cljs.core.array, cljs.core.map.call(null, clj__GT_js, b)) : cljs.core.truth_("\ufdd0'else") ? b : null
};
var pos = {client:{}};
pos.client.util = {};
pos.client.util.from_coll_by_id = function(a, b) {
  return cljs.core.first.call(null, cljs.core.filter.call(null, function(a) {
    return cljs.core._EQ_.call(null, "\ufdd0'id".call(null, a), b)
  }, a))
};
pos.client.util.default_variant = function() {
  var a = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {})), b = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {})), c = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {})), d = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {})), e = cljs.core.get.call(null, cljs.core.ObjMap.fromObject([], {}), "\ufdd0'hierarchy", cljs.core.global_hierarchy);
  return new cljs.core.MultiFn("default-variant", cljs.core.coll_QMARK_, "\ufdd0'default", e, a, b, c, d)
}();
cljs.core._add_method.call(null, pos.client.util.default_variant, !0, function(a) {
  return cljs.core.first.call(null, a)
});
cljs.core._add_method.call(null, pos.client.util.default_variant, !1, function(a) {
  return a
});
pos.client.util.default_variant_of_item = function(a) {
  return cljs.core.zipmap.call(null, cljs.core.keys.call(null, a), cljs.core.map.call(null, pos.client.util.default_variant, cljs.core.vals.call(null, a)))
};
pos.client.util.item_total_price = function(a) {
  var a = cljs.core.truth_(cljs.core.seq_QMARK_.call(null, a)) ? cljs.core.apply.call(null, cljs.core.hash_map, a) : a, b = cljs.core.get.call(null, a, "\ufdd0'price"), a = cljs.core.get.call(null, a, "\ufdd0'qty") * b;
  return clojure.string.replace.call(null, a.toFixed(2), ".", ",")
};
pos.client.util.basket_total = function(a) {
  return cljs.core.apply.call(null, cljs.core._PLUS_, cljs.core.map.call(null, function(a) {
    return"\ufdd0'price".call(null, a) * "\ufdd0'qty".call(null, a)
  }, a))
};
pos.client.util.field_value_as_num = function(a) {
  return parseFloat.call(null, clojure.string.replace.call(null, a, ",", "."))
};
pos.client.util.num_as_field_value = function(a) {
  return cljs.core.truth_(null === a) ? "" : clojure.string.replace.call(null, a.toFixed(2), ".", ",")
};
pos.client.util.value = function() {
  var a = null;
  return function(a, c) {
    switch(arguments.length) {
      case 1:
        return a.attr("value");
      case 2:
        return a.attr("value", c)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
pos.client.util.background_image = function(a, b) {
  return pos.client.util.css.call(null, a, cljs.core.ObjMap.fromObject(["\ufdd0'background-image"], {"\ufdd0'background-image":cljs.core.str.call(null, "url(", b, ")")}))
};
pos.client.util.get_formatted_datetime = function() {
  var a = new goog.date.DateTime;
  return(new goog.i18n.DateTimeFormat("EEE, MMM d  h:mm a")).format(a)
};
pos.client.util.start_timer = function(a) {
  var b = new goog.Timer(1E3);
  b.start();
  return goog.events.listen(b, goog.Timer.TICK, a)
};
var lib = {dispatch:{}};
lib.dispatch.reactions = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {}));
lib.dispatch.react_to = function() {
  var a = null;
  return a = function(b, c, d) {
    switch(arguments.length) {
      case 2:
        return a.call(null, null, b, c);
      case 3:
        var e = cljs.core.ObjMap.fromObject(["\ufdd0'max-count", "\ufdd0'event-pred", "\ufdd0'reactor"], {"\ufdd0'max-count":b, "\ufdd0'event-pred":c, "\ufdd0'reactor":d});
        cljs.core.swap_BANG_.call(null, lib.dispatch.reactions, cljs.core.assoc, e, 0);
        return e
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
lib.dispatch.delete_reaction = function(a) {
  return cljs.core.swap_BANG_.call(null, lib.dispatch.reactions, cljs.core.dissoc, a)
};
lib.dispatch.fire = function() {
  var a = null, b = function(a, b) {
    var e = cljs.core.filter.call(null, function(b) {
      var d = cljs.core.nth.call(null, b, 0, null), d = cljs.core.truth_(cljs.core.seq_QMARK_.call(null, d)) ? cljs.core.apply.call(null, cljs.core.hash_map, d) : d, d = cljs.core.get.call(null, d, "\ufdd0'event-pred");
      cljs.core.nth.call(null, b, 1, null);
      return d.call(null, a)
    }, cljs.core.deref.call(null, lib.dispatch.reactions)), f = cljs.core.seq.call(null, e);
    if(cljs.core.truth_(f)) {
      e = cljs.core.first.call(null, f);
      cljs.core.nth.call(null, e, 0, null);
      cljs.core.nth.call(null, e, 1, null);
      for(var g = f;;) {
        var f = e, e = cljs.core.nth.call(null, f, 0, null), f = cljs.core.nth.call(null, f, 1, null), h = e, h = cljs.core.truth_(cljs.core.seq_QMARK_.call(null, h)) ? cljs.core.apply.call(null, cljs.core.hash_map, h) : h, i = cljs.core.get.call(null, h, "\ufdd0'reactor"), j = cljs.core.get.call(null, h, "\ufdd0'max-count"), k = f + 1;
        i.call(null, a, b);
        cljs.core.truth_(function() {
          var a = j;
          return cljs.core.truth_(a) ? j <= k : a
        }()) ? lib.dispatch.delete_reaction.call(null, e) : cljs.core.swap_BANG_.call(null, lib.dispatch.reactions, cljs.core.assoc, e, k);
        e = cljs.core.next.call(null, g);
        if(cljs.core.truth_(e)) {
          f = e, e = cljs.core.first.call(null, f), g = f
        }else {
          return null
        }
      }
    }else {
      return null
    }
  };
  return a = function(c, d) {
    switch(arguments.length) {
      case 1:
        return a.call(null, c, null);
      case 2:
        return b.call(this, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
var clojure = {set:{}};
clojure.set.bubble_max_key = function(a, b) {
  var c = cljs.core.apply.call(null, cljs.core.max_key, a, b);
  return cljs.core.cons.call(null, c, cljs.core.remove.call(null, function(a) {
    return c === a
  }, b))
};
clojure.set.union = function() {
  var a = null, b = function() {
    var a = function(a, b, c) {
      a = clojure.set.bubble_max_key.call(null, cljs.core.count, cljs.core.conj.call(null, c, b, a));
      return cljs.core.reduce.call(null, cljs.core.into, cljs.core.first.call(null, a), cljs.core.rest.call(null, a))
    }, b = function(b, d, g) {
      var h = null;
      goog.isDef(g) && (h = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return a.call(this, b, d, h)
    };
    b.cljs$lang$maxFixedArity = 2;
    b.cljs$lang$applyTo = function(b) {
      var d = cljs.core.first(b), g = cljs.core.first(cljs.core.next(b)), b = cljs.core.rest(cljs.core.next(b));
      return a.call(this, d, g, b)
    };
    return b
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 0:
        return cljs.core.set([]);
      case 1:
        return a;
      case 2:
        return cljs.core.truth_(cljs.core.count.call(null, a) < cljs.core.count.call(null, d)) ? cljs.core.reduce.call(null, cljs.core.conj, d, a) : cljs.core.reduce.call(null, cljs.core.conj, a, d);
      default:
        return b.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = b.cljs$lang$applyTo;
  return a
}();
clojure.set.intersection = function() {
  var a = null, b = function(a, b) {
    for(;;) {
      if(cljs.core.truth_(cljs.core.count.call(null, b) < cljs.core.count.call(null, a))) {
        var c = a, a = b, b = c
      }else {
        return cljs.core.reduce.call(null, function(a, b) {
          return function(a, c) {
            return cljs.core.truth_(cljs.core.contains_QMARK_.call(null, b, c)) ? a : cljs.core.disj.call(null, a, c)
          }
        }(a, b), a, a)
      }
    }
  }, c = function() {
    var b = function(b, c, d) {
      b = clojure.set.bubble_max_key.call(null, function(a) {
        return-cljs.core.count.call(null, a)
      }, cljs.core.conj.call(null, d, c, b));
      return cljs.core.reduce.call(null, a, cljs.core.first.call(null, b), cljs.core.rest.call(null, b))
    }, c = function(a, c, e) {
      var i = null;
      goog.isDef(e) && (i = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, a, c, i)
    };
    c.cljs$lang$maxFixedArity = 2;
    c.cljs$lang$applyTo = function(a) {
      var c = cljs.core.first(a), e = cljs.core.first(cljs.core.next(a)), a = cljs.core.rest(cljs.core.next(a));
      return b.call(this, c, e, a)
    };
    return c
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 1:
        return a;
      case 2:
        return b.call(this, a, e);
      default:
        return c.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = c.cljs$lang$applyTo;
  return a
}();
clojure.set.difference = function() {
  var a = null, b = function(a, b) {
    return cljs.core.truth_(cljs.core.count.call(null, a) < cljs.core.count.call(null, b)) ? cljs.core.reduce.call(null, function(a, c) {
      return cljs.core.truth_(cljs.core.contains_QMARK_.call(null, b, c)) ? cljs.core.disj.call(null, a, c) : a
    }, a, a) : cljs.core.reduce.call(null, cljs.core.disj, a, b)
  }, c = function() {
    var b = function(b, c, d) {
      var h = null;
      goog.isDef(d) && (h = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return cljs.core.reduce.call(null, a, b, cljs.core.conj.call(null, h, c))
    };
    b.cljs$lang$maxFixedArity = 2;
    b.cljs$lang$applyTo = function(b) {
      var c = cljs.core.first(b), d = cljs.core.first(cljs.core.next(b)), b = cljs.core.rest(cljs.core.next(b));
      return cljs.core.reduce.call(null, a, c, cljs.core.conj.call(null, b, d))
    };
    return b
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 1:
        return a;
      case 2:
        return b.call(this, a, e);
      default:
        return c.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = c.cljs$lang$applyTo;
  return a
}();
clojure.set.select = function(a, b) {
  return cljs.core.reduce.call(null, function(b, d) {
    return cljs.core.truth_(a.call(null, d)) ? b : cljs.core.disj.call(null, b, d)
  }, b, b)
};
clojure.set.project = function(a, b) {
  return cljs.core.set.call(null, cljs.core.map.call(null, function(a) {
    return cljs.core.select_keys.call(null, a, b)
  }, a))
};
clojure.set.rename_keys = function(a, b) {
  return cljs.core.reduce.call(null, function(a, b) {
    var e = cljs.core.nth.call(null, b, 0, null), f = cljs.core.nth.call(null, b, 1, null);
    return cljs.core.truth_(function() {
      var b = cljs.core.not_EQ_.call(null, e, f);
      return cljs.core.truth_(b) ? cljs.core.contains_QMARK_.call(null, a, e) : b
    }()) ? cljs.core.dissoc.call(null, cljs.core.assoc.call(null, a, f, cljs.core.get.call(null, a, e)), e) : a
  }, a, b)
};
clojure.set.rename = function(a, b) {
  return cljs.core.set.call(null, cljs.core.map.call(null, function(a) {
    return clojure.set.rename_keys.call(null, a, b)
  }, a))
};
clojure.set.index = function(a, b) {
  return cljs.core.reduce.call(null, function(a, d) {
    var e = cljs.core.select_keys.call(null, d, b);
    return cljs.core.assoc.call(null, a, e, cljs.core.conj.call(null, cljs.core.get.call(null, a, e, cljs.core.set([])), d))
  }, cljs.core.ObjMap.fromObject([], {}), a)
};
clojure.set.map_invert = function(a) {
  return cljs.core.reduce.call(null, function(a, c) {
    var d = cljs.core.nth.call(null, c, 0, null), e = cljs.core.nth.call(null, c, 1, null);
    return cljs.core.assoc.call(null, a, e, d)
  }, cljs.core.ObjMap.fromObject([], {}), a)
};
clojure.set.join = function() {
  var a = null, b = function(a, b) {
    if(cljs.core.truth_(function() {
      var c = cljs.core.seq.call(null, a);
      return cljs.core.truth_(c) ? cljs.core.seq.call(null, b) : c
    }())) {
      var c = clojure.set.intersection.call(null, cljs.core.set.call(null, cljs.core.keys.call(null, cljs.core.first.call(null, a))), cljs.core.set.call(null, cljs.core.keys.call(null, cljs.core.first.call(null, b)))), g = cljs.core.truth_(cljs.core.count.call(null, a) <= cljs.core.count.call(null, b)) ? cljs.core.PersistentVector.fromArray([a, b]) : cljs.core.PersistentVector.fromArray([b, a]), h = cljs.core.nth.call(null, g, 0, null), g = cljs.core.nth.call(null, g, 1, null), i = clojure.set.index.call(null, 
      h, c);
      return cljs.core.reduce.call(null, function(a, b) {
        var d = i.call(null, cljs.core.select_keys.call(null, b, c));
        return cljs.core.truth_(d) ? cljs.core.reduce.call(null, function(a, c) {
          return cljs.core.conj.call(null, a, cljs.core.merge.call(null, c, b))
        }, a, d) : a
      }, cljs.core.set([]), g)
    }
    return cljs.core.set([])
  }, c = function(a, b, c) {
    var a = cljs.core.truth_(cljs.core.count.call(null, a) <= cljs.core.count.call(null, b)) ? cljs.core.PersistentVector.fromArray([a, b, clojure.set.map_invert.call(null, c)]) : cljs.core.PersistentVector.fromArray([b, a, c]), b = cljs.core.nth.call(null, a, 0, null), c = cljs.core.nth.call(null, a, 1, null), g = cljs.core.nth.call(null, a, 2, null), h = clojure.set.index.call(null, b, cljs.core.vals.call(null, g));
    return cljs.core.reduce.call(null, function(a, b) {
      var c = h.call(null, clojure.set.rename_keys.call(null, cljs.core.select_keys.call(null, b, cljs.core.keys.call(null, g)), g));
      return cljs.core.truth_(c) ? cljs.core.reduce.call(null, function(a, c) {
        return cljs.core.conj.call(null, a, cljs.core.merge.call(null, c, b))
      }, a, c) : a
    }, cljs.core.set([]), c)
  };
  return function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
clojure.set.subset_QMARK_ = function(a, b) {
  var c = cljs.core.count.call(null, a) <= cljs.core.count.call(null, b);
  return cljs.core.truth_(c) ? cljs.core.every_QMARK_.call(null, function(a) {
    return cljs.core.contains_QMARK_.call(null, b, a)
  }, a) : c
};
clojure.set.superset_QMARK_ = function(a, b) {
  var c = cljs.core.count.call(null, a) >= cljs.core.count.call(null, b);
  return cljs.core.truth_(c) ? cljs.core.every_QMARK_.call(null, function(b) {
    return cljs.core.contains_QMARK_.call(null, a, b)
  }, b) : c
};
pos.client.model = {};
pos.client.model.state = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject(["\ufdd0'state"], {"\ufdd0'state":"\ufdd0'dashboard"}));
cljs.core.add_watch.call(null, pos.client.model.state, "\ufdd0'state-change-key", function(a, b, c, d) {
  return lib.dispatch.fire.call(null, "\ufdd0'state-change", cljs.core.PersistentVector.fromArray(["\ufdd0'state".call(null, c), "\ufdd0'state".call(null, d)]))
});
pos.client.model.data = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {}));
pos.client.model.location = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject(["\ufdd0'id"], {"\ufdd0'id":null}));
cljs.core.add_watch.call(null, pos.client.model.location, "\ufdd0'location-change-key", function(a, b, c, d) {
  return cljs.core.truth_(cljs.core.not_EQ_.call(null, c, d)) ? lib.dispatch.fire.call(null, "\ufdd0'location-change", d) : null
});
lib.dispatch.react_to.call(null, cljs.core.set(["\ufdd0'location-select"]), function(a, b) {
  return cljs.core.swap_BANG_.call(null, pos.client.model.location, cljs.core.assoc, "\ufdd0'id", b)
});
pos.client.model.employee = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject(["\ufdd0'id"], {"\ufdd0'id":null}));
cljs.core.add_watch.call(null, pos.client.model.employee, "\ufdd0'employee-change-key", function(a, b, c, d) {
  return cljs.core.truth_(cljs.core.not_EQ_.call(null, c, d)) ? lib.dispatch.fire.call(null, "\ufdd0'employee-change", d) : null
});
lib.dispatch.react_to.call(null, cljs.core.set(["\ufdd0'employee-select"]), function(a, b) {
  return cljs.core.swap_BANG_.call(null, pos.client.model.employee, cljs.core.assoc, "\ufdd0'id", b)
});
pos.client.model.customer = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject(["\ufdd0'id"], {"\ufdd0'id":null}));
cljs.core.add_watch.call(null, pos.client.model.customer, "\ufdd0'customer-change-key", function(a, b, c, d) {
  return cljs.core.truth_(function() {
    var a = null === "\ufdd0'id".call(null, d);
    return cljs.core.truth_(a) ? a : cljs.core.not_EQ_.call(null, c, d)
  }()) ? lib.dispatch.fire.call(null, "\ufdd0'customer-change", d) : null
});
lib.dispatch.react_to.call(null, cljs.core.set(["\ufdd0'pusher-customer-nfc"]), function() {
  return cljs.core.swap_BANG_.call(null, pos.client.model.customer, cljs.core.assoc, "\ufdd0'id", "\ufdd0'id".call(null, cljs.core.rand_nth.call(null, "\ufdd0'customers".call(null, cljs.core.deref.call(null, pos.client.model.data)))))
});
lib.dispatch.react_to.call(null, cljs.core.set(["\ufdd0'customer-field-changed"]), function() {
  return cljs.core.truth_("\ufdd0'id".call(null, cljs.core.deref.call(null, pos.client.model.customer))) ? lib.dispatch.fire.call(null, "\ufdd0'customer-clear") : null
});
lib.dispatch.react_to.call(null, cljs.core.set(["\ufdd0'customer-select"]), function(a, b) {
  return cljs.core.swap_BANG_.call(null, pos.client.model.customer, cljs.core.assoc, "\ufdd0'id", b)
});
lib.dispatch.react_to.call(null, cljs.core.set(["\ufdd0'customer-clear"]), function() {
  var a = function() {
    return cljs.core.swap_BANG_.call(null, pos.client.model.customer, cljs.core.assoc, "\ufdd0'id", null)
  }, b = function(b) {
    var d = null;
    goog.isDef(b) && (d = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
    return a.call(this, d)
  };
  b.cljs$lang$maxFixedArity = 0;
  b.cljs$lang$applyTo = function(b) {
    b = cljs.core.seq(b);
    return a.call(this, b)
  };
  return b
}());
pos.client.model.basket = cljs.core.atom.call(null, cljs.core.set([]));
cljs.core.add_watch.call(null, pos.client.model.basket, "\ufdd0'basket-change-key", function(a, b, c, d) {
  return cljs.core.truth_(cljs.core.count.call(null, d) > cljs.core.count.call(null, c)) ? lib.dispatch.fire.call(null, "\ufdd0'basket-change", cljs.core.ObjMap.fromObject(["\ufdd0'type", "\ufdd0'item"], {"\ufdd0'type":"\ufdd0'add-item", "\ufdd0'item":cljs.core.first.call(null, clojure.set.difference.call(null, d, c))})) : cljs.core.truth_(cljs.core.count.call(null, d) < cljs.core.count.call(null, c)) ? lib.dispatch.fire.call(null, "\ufdd0'basket-change", cljs.core.ObjMap.fromObject(["\ufdd0'type", 
  "\ufdd0'id"], {"\ufdd0'type":"\ufdd0'remove-item", "\ufdd0'id":"\ufdd0'id".call(null, cljs.core.first.call(null, clojure.set.difference.call(null, c, d)))})) : cljs.core.truth_("\ufdd0'else") ? lib.dispatch.fire.call(null, "\ufdd0'basket-change", cljs.core.ObjMap.fromObject(["\ufdd0'type", "\ufdd0'item"], {"\ufdd0'type":"\ufdd0'update-item", "\ufdd0'item":cljs.core.first.call(null, clojure.set.difference.call(null, d, c))})) : null
});
pos.client.model.swap_in_basket_BANG_ = function(a, b, c) {
  return cljs.core.swap_BANG_.call(null, a, function(a, c) {
    return cljs.core.set.call(null, cljs.core.replace.call(null, cljs.core.HashMap.fromArrays([b], [c]), a))
  }, c)
};
lib.dispatch.react_to.call(null, cljs.core.set(["\ufdd0'basket-add"]), function(a, b) {
  var c = pos.client.util.from_coll_by_id.call(null, cljs.core.deref.call(null, pos.client.model.basket), b);
  if(cljs.core.truth_(c)) {
    "\ufdd0'qty".call(null, c);
    var d = cljs.core.update_in.call(null, c, cljs.core.PersistentVector.fromArray(["\ufdd0'qty"]), cljs.core.inc);
    return pos.client.model.swap_in_basket_BANG_.call(null, pos.client.model.basket, c, d)
  }
  c = pos.client.util.default_variant_of_item.call(null, pos.client.util.from_coll_by_id.call(null, "\ufdd0'items".call(null, cljs.core.deref.call(null, pos.client.model.data)), b));
  return cljs.core.swap_BANG_.call(null, pos.client.model.basket, cljs.core.conj, cljs.core.merge.call(null, c, cljs.core.ObjMap.fromObject(["\ufdd0'qty", "\ufdd0'discount"], {"\ufdd0'qty":1, "\ufdd0'discount":0})))
});
lib.dispatch.react_to.call(null, cljs.core.set(["\ufdd0'basket-remove"]), function(a, b) {
  var c = pos.client.util.from_coll_by_id.call(null, cljs.core.deref.call(null, pos.client.model.basket), b);
  return cljs.core.swap_BANG_.call(null, pos.client.model.basket, cljs.core.disj, c)
});
pos.client.model.tender = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {}));
cljs.core.add_watch.call(null, pos.client.model.tender, "\ufdd0'tender-change-key", function(a, b, c, d) {
  return lib.dispatch.fire.call(null, "\ufdd0'tender-change", d)
});
lib.dispatch.react_to.call(null, cljs.core.set(["\ufdd0'tender-update"]), function(a, b) {
  var c = cljs.core.truth_(cljs.core.seq_QMARK_.call(null, b)) ? cljs.core.apply.call(null, cljs.core.hash_map, b) : b, d = cljs.core.get.call(null, c, "\ufdd0'new-val"), c = cljs.core.get.call(null, c, "\ufdd0'changed-attr");
  return cljs.core.swap_BANG_.call(null, pos.client.model.tender, cljs.core.assoc, c, pos.client.util.field_value_as_num.call(null, d))
});
var fetch = {util:{}};
fetch.util.clj__GT_js = function clj__GT_js(b) {
  return cljs.core.truth_(cljs.core.string_QMARK_.call(null, b)) ? b : cljs.core.truth_(cljs.core.keyword_QMARK_.call(null, b)) ? cljs.core.name.call(null, b) : cljs.core.truth_(cljs.core.map_QMARK_.call(null, b)) ? cljs.core.reduce.call(null, function(b, d) {
    var e = cljs.core.nth.call(null, d, 0, null), f = cljs.core.nth.call(null, d, 1, null);
    return cljs.core.assoc.call(null, b, clj__GT_js.call(null, e), clj__GT_js.call(null, f))
  }, cljs.core.ObjMap.fromObject([], {}), b).strobj : cljs.core.truth_(cljs.core.coll_QMARK_.call(null, b)) ? cljs.core.apply.call(null, cljs.core.array, cljs.core.map.call(null, clj__GT_js, b)) : cljs.core.truth_("\ufdd0'else") ? b : null
};
clojure.string = {};
clojure.string.seq_reverse = function(a) {
  return cljs.core.reduce.call(null, cljs.core.conj, cljs.core.List.EMPTY, a)
};
clojure.string.reverse = function(a) {
  return a.split("").reverse().join("")
};
clojure.string.replace = function(a, b, c) {
  if(cljs.core.truth_(cljs.core.string_QMARK_.call(null, b))) {
    return a.replace(RegExp(goog.string.regExpEscape.call(null, b), "g"), c)
  }
  if(cljs.core.truth_(b.hasOwnProperty("source"))) {
    return a.replace(RegExp(b.source, "g"), c)
  }
  if(cljs.core.truth_("\ufdd0'else")) {
    throw cljs.core.str.call(null, "Invalid match arg: ", b);
  }
  return null
};
clojure.string.replace_first = function(a, b, c) {
  return a.replace(b, c)
};
clojure.string.join = function() {
  var a = null;
  return function(a, c) {
    switch(arguments.length) {
      case 1:
        return cljs.core.apply.call(null, cljs.core.str, a);
      case 2:
        return cljs.core.apply.call(null, cljs.core.str, cljs.core.interpose.call(null, a, c))
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
clojure.string.upper_case = function(a) {
  return a.toUpperCase()
};
clojure.string.lower_case = function(a) {
  return a.toLowerCase()
};
clojure.string.capitalize = function(a) {
  return cljs.core.truth_(2 > cljs.core.count.call(null, a)) ? clojure.string.upper_case.call(null, a) : cljs.core.str.call(null, clojure.string.upper_case.call(null, cljs.core.subs.call(null, a, 0, 1)), clojure.string.lower_case.call(null, cljs.core.subs.call(null, a, 1)))
};
clojure.string.split = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return cljs.core.vec.call(null, cljs.core.str.call(null, a).split(c));
      case 3:
        var e;
        a: {
          if(cljs.core.truth_(1 > d)) {
            e = cljs.core.vec.call(null, cljs.core.str.call(null, a).split(c))
          }else {
            for(var f = a, g = d, h = cljs.core.PersistentVector.fromArray([]);;) {
              if(cljs.core.truth_(cljs.core._EQ_.call(null, g, 1))) {
                e = cljs.core.conj.call(null, h, f);
                break a
              }
              var i = cljs.core.re_find.call(null, c, f);
              if(cljs.core.truth_(i)) {
                var j = i, i = f.indexOf(j), j = f.substring(i + cljs.core.count.call(null, j)), g = g - 1, h = cljs.core.conj.call(null, h, f.substring(0, i)), f = j
              }else {
                e = cljs.core.conj.call(null, h, f);
                break a
              }
            }
          }
        }
        return e
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
clojure.string.split_lines = function(a) {
  return clojure.string.split.call(null, a, /\n|\r\n/)
};
clojure.string.trim = function(a) {
  return goog.string.trim.call(null, a)
};
clojure.string.triml = function(a) {
  return goog.string.trimLeft.call(null, a)
};
clojure.string.trimr = function(a) {
  return goog.string.trimRight.call(null, a)
};
clojure.string.trim_newline = function(a) {
  for(var b = a.length;;) {
    if(cljs.core.truth_(0 === b)) {
      return""
    }
    var c = cljs.core.get.call(null, a, b - 1);
    if(cljs.core.truth_(function() {
      var a = cljs.core._EQ_.call(null, c, "\n");
      return cljs.core.truth_(a) ? a : cljs.core._EQ_.call(null, c, "\r")
    }())) {
      b -= 1
    }else {
      return a.substring(0, b)
    }
  }
};
clojure.string.blank_QMARK_ = function(a) {
  var b = cljs.core.str.call(null, a);
  return cljs.core.truth_(function() {
    var a = cljs.core.not.call(null, b);
    if(cljs.core.truth_(a)) {
      return a
    }
    a = cljs.core._EQ_.call(null, "", b);
    return cljs.core.truth_(a) ? a : cljs.core.re_matches.call(null, /\s+/, b)
  }()) ? !0 : !1
};
clojure.string.escape = function(a, b) {
  for(var c = new goog.string.StringBuffer, d = a.length, e = 0;;) {
    if(cljs.core.truth_(cljs.core._EQ_.call(null, d, e))) {
      return c.toString()
    }
    var f = a.charAt(e), g = cljs.core.get.call(null, b, f);
    cljs.core.truth_(g) ? c.append(cljs.core.str.call(null, g)) : c.append(f);
    e += 1
  }
};
jayq.core = {};
jayq.core.crate_meta = function(a) {
  return a.prototype._crateGroup
};
jayq.core.__GT_selector = function(a) {
  if(cljs.core.truth_(cljs.core.string_QMARK_.call(null, a))) {
    return a
  }
  if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null, a))) {
    var b = jayq.core.crate_meta.call(null, a);
    return cljs.core.truth_(b) ? cljs.core.str.call(null, "[crateGroup=", b, "]") : a
  }
  return cljs.core.truth_(cljs.core.keyword_QMARK_.call(null, a)) ? cljs.core.name.call(null, a) : cljs.core.truth_("\ufdd0'else") ? a : null
};
jayq.core.$ = function() {
  var a = function(a, b) {
    var e = cljs.core.nth.call(null, b, 0, null);
    return cljs.core.truth_(cljs.core.not.call(null, e)) ? jQuery.call(null, jayq.core.__GT_selector.call(null, a)) : jQuery.call(null, jayq.core.__GT_selector.call(null, a), e)
  }, b = function(b, d) {
    var e = null;
    goog.isDef(d) && (e = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0));
    return a.call(this, b, e)
  };
  b.cljs$lang$maxFixedArity = 1;
  b.cljs$lang$applyTo = function(b) {
    var d = cljs.core.first(b), b = cljs.core.rest(b);
    return a.call(this, d, b)
  };
  return b
}();
jQuery.prototype.cljs$core$IReduce$ = !0;
jQuery.prototype.cljs$core$IReduce$_reduce = function(a, b) {
  return cljs.core.ci_reduce.call(null, jayq.core.coll, b, cljs.core.first.call(null, a), cljs.core.count.call(null, a))
};
jQuery.prototype.cljs$core$IReduce$_reduce = function(a, b, c) {
  return cljs.core.ci_reduce.call(null, jayq.core.coll, b, c, jayq.core.i)
};
jQuery.prototype.cljs$core$ILookup$ = !0;
jQuery.prototype.cljs$core$ILookup$_lookup = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        var e = a.slice(c, c + 1);
        return cljs.core.truth_(e) ? e : null;
      case 3:
        return cljs.core._nth.call(null, a, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
jQuery.prototype.cljs$core$ISequential$ = !0;
jQuery.prototype.cljs$core$IIndexed$ = !0;
jQuery.prototype.cljs$core$IIndexed$_nth = function(a, b) {
  return cljs.core.truth_(b < cljs.core.count.call(null, a)) ? a.slice(b, b + 1) : null
};
jQuery.prototype.cljs$core$IIndexed$_nth = function(a, b, c) {
  return cljs.core.truth_(b < cljs.core.count.call(null, a)) ? a.slice(b, b + 1) : cljs.core.truth_(void 0 === c) ? null : c
};
jQuery.prototype.cljs$core$ICounted$ = !0;
jQuery.prototype.cljs$core$ICounted$_count = function(a) {
  return a.size()
};
jQuery.prototype.cljs$core$ISeq$ = !0;
jQuery.prototype.cljs$core$ISeq$_first = function(a) {
  return a.get(0)
};
jQuery.prototype.cljs$core$ISeq$_rest = function(a) {
  return cljs.core.truth_(1 < cljs.core.count.call(null, a)) ? a.slice(1) : cljs.core.list.call(null)
};
jQuery.prototype.cljs$core$ISeqable$ = !0;
jQuery.prototype.cljs$core$ISeqable$_seq = function(a) {
  return cljs.core.truth_(a.get(0)) ? a : null
};
jQuery.prototype.call = function() {
  var a = null;
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return cljs.core._lookup.call(null, this, c);
      case 3:
        return cljs.core._lookup.call(null, this, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
jayq.core.anim = function(a, b, c) {
  return a.animate(jayq.util.clj__GT_js.call(null, b), c)
};
jayq.core.text = function(a, b) {
  return a.text(b)
};
jayq.core.css = function(a, b) {
  return cljs.core.truth_(cljs.core.keyword_QMARK_.call(null, b)) ? a.css(cljs.core.name.call(null, b)) : a.css(jayq.util.clj__GT_js.call(null, b))
};
jayq.core.attr = function() {
  var a = function(a, b, e) {
    e = cljs.core.nth.call(null, e, 0, null);
    b = cljs.core.name.call(null, b);
    return cljs.core.truth_(cljs.core.not.call(null, e)) ? a.attr(b) : a.attr(b, e)
  }, b = function(b, d, e) {
    var f = null;
    goog.isDef(e) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
    return a.call(this, b, d, f)
  };
  b.cljs$lang$maxFixedArity = 2;
  b.cljs$lang$applyTo = function(b) {
    var d = cljs.core.first(b), e = cljs.core.first(cljs.core.next(b)), b = cljs.core.rest(cljs.core.next(b));
    return a.call(this, d, e, b)
  };
  return b
}();
jayq.core.data = function() {
  var a = function(a, b, e) {
    e = cljs.core.nth.call(null, e, 0, null);
    b = cljs.core.name.call(null, b);
    return cljs.core.truth_(cljs.core.not.call(null, e)) ? a.data(b) : a.data(b, e)
  }, b = function(b, d, e) {
    var f = null;
    goog.isDef(e) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
    return a.call(this, b, d, f)
  };
  b.cljs$lang$maxFixedArity = 2;
  b.cljs$lang$applyTo = function(b) {
    var d = cljs.core.first(b), e = cljs.core.first(cljs.core.next(b)), b = cljs.core.rest(cljs.core.next(b));
    return a.call(this, d, e, b)
  };
  return b
}();
jayq.core.position = function(a) {
  return cljs.core.js__GT_clj.call(null, a.position(), "\ufdd0'keywordize-keys", !0)
};
jayq.core.add_class = function(a, b) {
  var c = cljs.core.name.call(null, b);
  return a.addClass(c)
};
jayq.core.remove_class = function(a, b) {
  var c = cljs.core.name.call(null, b);
  return a.removeClass(c)
};
jayq.core.append = function(a, b) {
  return a.append(b)
};
jayq.core.prepend = function(a, b) {
  return a.prepend(b)
};
jayq.core.remove = function(a) {
  return a.remove()
};
jayq.core.hide = function() {
  var a = function(a, b) {
    var e = cljs.core.nth.call(null, b, 0, null), f = cljs.core.nth.call(null, b, 1, null);
    return a.hide(e, f)
  }, b = function(b, d) {
    var e = null;
    goog.isDef(d) && (e = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0));
    return a.call(this, b, e)
  };
  b.cljs$lang$maxFixedArity = 1;
  b.cljs$lang$applyTo = function(b) {
    var d = cljs.core.first(b), b = cljs.core.rest(b);
    return a.call(this, d, b)
  };
  return b
}();
jayq.core.show = function() {
  var a = function(a, b) {
    var e = cljs.core.nth.call(null, b, 0, null), f = cljs.core.nth.call(null, b, 1, null);
    return a.show(e, f)
  }, b = function(b, d) {
    var e = null;
    goog.isDef(d) && (e = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0));
    return a.call(this, b, e)
  };
  b.cljs$lang$maxFixedArity = 1;
  b.cljs$lang$applyTo = function(b) {
    var d = cljs.core.first(b), b = cljs.core.rest(b);
    return a.call(this, d, b)
  };
  return b
}();
jayq.core.toggle = function() {
  var a = function(a, b) {
    var e = cljs.core.nth.call(null, b, 0, null), f = cljs.core.nth.call(null, b, 1, null);
    return a.toggle(e, f)
  }, b = function(b, d) {
    var e = null;
    goog.isDef(d) && (e = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0));
    return a.call(this, b, e)
  };
  b.cljs$lang$maxFixedArity = 1;
  b.cljs$lang$applyTo = function(b) {
    var d = cljs.core.first(b), b = cljs.core.rest(b);
    return a.call(this, d, b)
  };
  return b
}();
jayq.core.fade_out = function() {
  var a = function(a, b) {
    var e = cljs.core.nth.call(null, b, 0, null), f = cljs.core.nth.call(null, b, 1, null);
    return a.fadeOut(e, f)
  }, b = function(b, d) {
    var e = null;
    goog.isDef(d) && (e = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0));
    return a.call(this, b, e)
  };
  b.cljs$lang$maxFixedArity = 1;
  b.cljs$lang$applyTo = function(b) {
    var d = cljs.core.first(b), b = cljs.core.rest(b);
    return a.call(this, d, b)
  };
  return b
}();
jayq.core.fade_in = function() {
  var a = function(a, b) {
    var e = cljs.core.nth.call(null, b, 0, null), f = cljs.core.nth.call(null, b, 1, null);
    return a.fadeIn(e, f)
  }, b = function(b, d) {
    var e = null;
    goog.isDef(d) && (e = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0));
    return a.call(this, b, e)
  };
  b.cljs$lang$maxFixedArity = 1;
  b.cljs$lang$applyTo = function(b) {
    var d = cljs.core.first(b), b = cljs.core.rest(b);
    return a.call(this, d, b)
  };
  return b
}();
jayq.core.slide_up = function() {
  var a = function(a, b) {
    var e = cljs.core.nth.call(null, b, 0, null), f = cljs.core.nth.call(null, b, 1, null);
    return a.slideUp(e, f)
  }, b = function(b, d) {
    var e = null;
    goog.isDef(d) && (e = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0));
    return a.call(this, b, e)
  };
  b.cljs$lang$maxFixedArity = 1;
  b.cljs$lang$applyTo = function(b) {
    var d = cljs.core.first(b), b = cljs.core.rest(b);
    return a.call(this, d, b)
  };
  return b
}();
jayq.core.slide_down = function() {
  var a = function(a, b) {
    var e = cljs.core.nth.call(null, b, 0, null), f = cljs.core.nth.call(null, b, 1, null);
    return a.slideDown(e, f)
  }, b = function(b, d) {
    var e = null;
    goog.isDef(d) && (e = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0));
    return a.call(this, b, e)
  };
  b.cljs$lang$maxFixedArity = 1;
  b.cljs$lang$applyTo = function(b) {
    var d = cljs.core.first(b), b = cljs.core.rest(b);
    return a.call(this, d, b)
  };
  return b
}();
jayq.core.parent = function(a) {
  return a.parent()
};
jayq.core.find = function(a, b) {
  return a.find(cljs.core.name.call(null, b))
};
jayq.core.clone = function(a) {
  return a.clone()
};
jayq.core.inner = function(a, b) {
  return a.html(b)
};
jayq.core.empty = function(a) {
  return a.empty()
};
jayq.core.val = function() {
  var a = function(a, b) {
    var e = cljs.core.nth.call(null, b, 0, null);
    return cljs.core.truth_(e) ? a.val(e) : a.val()
  }, b = function(b, d) {
    var e = null;
    goog.isDef(d) && (e = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0));
    return a.call(this, b, e)
  };
  b.cljs$lang$maxFixedArity = 1;
  b.cljs$lang$applyTo = function(b) {
    var d = cljs.core.first(b), b = cljs.core.rest(b);
    return a.call(this, d, b)
  };
  return b
}();
jayq.core.queue = function(a, b) {
  return a.queue(b)
};
jayq.core.dequeue = function(a) {
  return jayq.core.$.call(null, a).dequeue()
};
jayq.core.document_ready = function(a) {
  return jayq.core.$.call(null, document).ready(a)
};
jayq.core.xhr = function(a, b, c) {
  var d = cljs.core.nth.call(null, a, 0, null), a = cljs.core.nth.call(null, a, 1, null), b = jayq.util.clj__GT_js.call(null, cljs.core.ObjMap.fromObject(["\ufdd0'type", "\ufdd0'data", "\ufdd0'success"], {"\ufdd0'type":clojure.string.upper_case.call(null, cljs.core.name.call(null, d)), "\ufdd0'data":jayq.util.clj__GT_js.call(null, b), "\ufdd0'success":c}));
  return jQuery.ajax(a, b)
};
jayq.core.bind = function(a, b, c) {
  return a.bind(cljs.core.name.call(null, b), c)
};
jayq.core.trigger = function(a, b) {
  return a.trigger(cljs.core.name.call(null, b))
};
jayq.core.delegate = function(a, b, c, d) {
  return a.delegate(jayq.core.__GT_selector.call(null, b), cljs.core.name.call(null, c), d)
};
jayq.core.__GT_event = function(a) {
  if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null, a))) {
    return cljs.core.name.call(null, a)
  }
  if(cljs.core.truth_(cljs.core.map_QMARK_.call(null, a))) {
    return jayq.util.clj__GT_js.call(null, a)
  }
  if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null, a))) {
    return clojure.string.join.call(null, " ", cljs.core.map.call(null, cljs.core.name, a))
  }
  if(cljs.core.truth_("\ufdd0'else")) {
    throw Error(cljs.core.str.call(null, "Unknown event type: ", a));
  }
  return null
};
jayq.core.on = function() {
  var a = function(a, b, e) {
    var f = cljs.core.nth.call(null, e, 0, null), g = cljs.core.nth.call(null, e, 1, null), e = cljs.core.nth.call(null, e, 2, null);
    return a.on(jayq.core.__GT_event.call(null, b), jayq.core.__GT_selector.call(null, f), g, e)
  }, b = function(b, d, e) {
    var f = null;
    goog.isDef(e) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
    return a.call(this, b, d, f)
  };
  b.cljs$lang$maxFixedArity = 2;
  b.cljs$lang$applyTo = function(b) {
    var d = cljs.core.first(b), e = cljs.core.first(cljs.core.next(b)), b = cljs.core.rest(cljs.core.next(b));
    return a.call(this, d, e, b)
  };
  return b
}();
jayq.core.one = function() {
  var a = function(a, b, e) {
    var f = cljs.core.nth.call(null, e, 0, null), g = cljs.core.nth.call(null, e, 1, null), e = cljs.core.nth.call(null, e, 2, null);
    return a.one(jayq.core.__GT_event.call(null, b), jayq.core.__GT_selector.call(null, f), g, e)
  }, b = function(b, d, e) {
    var f = null;
    goog.isDef(e) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
    return a.call(this, b, d, f)
  };
  b.cljs$lang$maxFixedArity = 2;
  b.cljs$lang$applyTo = function(b) {
    var d = cljs.core.first(b), e = cljs.core.first(cljs.core.next(b)), b = cljs.core.rest(cljs.core.next(b));
    return a.call(this, d, e, b)
  };
  return b
}();
jayq.core.off = function() {
  var a = function(a, b, e) {
    var f = cljs.core.nth.call(null, e, 0, null), e = cljs.core.nth.call(null, e, 1, null);
    return a.off(jayq.core.__GT_event.call(null, b), jayq.core.__GT_selector.call(null, f), e)
  }, b = function(b, d, e) {
    var f = null;
    goog.isDef(e) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
    return a.call(this, b, d, f)
  };
  b.cljs$lang$maxFixedArity = 2;
  b.cljs$lang$applyTo = function(b) {
    var d = cljs.core.first(b), e = cljs.core.first(cljs.core.next(b)), b = cljs.core.rest(cljs.core.next(b));
    return a.call(this, d, e, b)
  };
  return b
}();
jayq.core.prevent = function(a) {
  return a.preventDefault()
};
pos.client.animation = {};
pos.client.animation.slide_in_icon = function(a, b) {
  var c = jayq.core.$.call(null, cljs.core.keyword.call(null, cljs.core.str.call(null, "#", a, "-slider-icon"))), d = jayq.core.$.call(null, cljs.core.keyword.call(null, cljs.core.str.call(null, "#", a, "-icon")));
  jayq.core.attr.call(null, c, "src", b);
  return c.animate(fetch.util.clj__GT_js.call(null, cljs.core.ObjMap.fromObject(["height"], {height:"32px"})), null, null, function() {
    jayq.core.attr.call(null, d, "src", b);
    return jayq.core.css.call(null, c, cljs.core.ObjMap.fromObject(["height"], {height:"0"}))
  })
};
pos.client.animation.slide_in_customer_icon = function(a) {
  return pos.client.animation.slide_in_icon.call(null, "customer", a)
};
pos.client.animation.slide_in_item_icon = function(a) {
  return pos.client.animation.slide_in_icon.call(null, "item", a)
};
pos.client.animation.reset_icon = function(a) {
  var b = jayq.core.$.call(null, cljs.core.keyword.call(null, cljs.core.str.call(null, "#", a, "-icon"))), c = jayq.core.$.call(null, cljs.core.keyword.call(null, cljs.core.str.call(null, "#", a, "-slider-icon")));
  jayq.core.attr.call(null, b, "src", cljs.core.str.call(null, "img/", a, "_placeholder.png"));
  return jayq.core.css.call(null, c, cljs.core.ObjMap.fromObject(["height"], {height:"0px"}))
};
pos.client.animation.reset_customer_icon = function() {
  return pos.client.animation.reset_icon.call(null, "customer")
};
pos.client.animation.reset_item_icon = function() {
  return pos.client.animation.reset_icon.call(null, "item")
};
pos.client.animation.flash_input_border = function(a) {
  jayq.core.add_class.call(null, a, "flashing-animation");
  return jayq.util.wait.call(null, 1E3, function() {
    return jayq.core.remove_class.call(null, a, "flashing-animation")
  })
};
pos.client.animation.slide_in_table_row = function(a) {
  return jayq.core.slide_down.call(null, jayq.core.find.call(null, a, "td > div"), 400)
};
pos.client.animation.slide_out_table_row = function(a) {
  return jayq.core.slide_up.call(null, jayq.core.find.call(null, a, "td > div"), 200, function() {
    return jayq.core.remove.call(null, a)
  })
};
pos.client.animation.state_transition = function(a) {
  var a = cljs.core.truth_(cljs.core.seq_QMARK_.call(null, a)) ? cljs.core.apply.call(null, cljs.core.hash_map, a) : a, b = cljs.core.get.call(null, a, "\ufdd0'slide-out"), c = cljs.core.get.call(null, a, "\ufdd0'slide-in"), d = cljs.core.get.call(null, a, "\ufdd0'out"), a = cljs.core.get.call(null, a, "\ufdd0'in"), e = cljs.core.seq.call(null, b);
  if(cljs.core.truth_(e)) {
    for(b = cljs.core.first.call(null, e);;) {
      if(jayq.core.slide_up.call(null, b, 200), b = cljs.core.next.call(null, e), cljs.core.truth_(b)) {
        e = b, b = cljs.core.first.call(null, e)
      }else {
        break
      }
    }
  }
  b = cljs.core.seq.call(null, c);
  if(cljs.core.truth_(b)) {
    for(c = cljs.core.first.call(null, b);;) {
      if(jayq.core.slide_down.call(null, c, 200), c = cljs.core.next.call(null, b), cljs.core.truth_(c)) {
        b = c, c = cljs.core.first.call(null, b)
      }else {
        break
      }
    }
  }
  c = cljs.core.seq.call(null, d);
  if(cljs.core.truth_(c)) {
    for(d = cljs.core.first.call(null, c);;) {
      if(jayq.core.hide.call(null, d), d = cljs.core.next.call(null, c), cljs.core.truth_(d)) {
        c = d, d = cljs.core.first.call(null, c)
      }else {
        break
      }
    }
  }
  d = cljs.core.seq.call(null, a);
  if(cljs.core.truth_(d)) {
    for(a = cljs.core.first.call(null, d);;) {
      if(jayq.core.show.call(null, a), a = cljs.core.next.call(null, d), cljs.core.truth_(a)) {
        d = a, a = cljs.core.first.call(null, d)
      }else {
        return null
      }
    }
  }else {
    return null
  }
};
goog.i18n = {};
goog.i18n.DateTimeSymbols_en_ISO = {ERAS:["BC", "AD"], ERANAMES:["Before Christ", "Anno Domini"], NARROWMONTHS:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), STANDALONENARROWMONTHS:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), MONTHS:"January,February,March,April,May,June,July,August,September,October,November,December".split(","), STANDALONEMONTHS:"January,February,March,April,May,June,July,August,September,October,November,December".split(","), SHORTMONTHS:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","), 
STANDALONESHORTMONTHS:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","), WEEKDAYS:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","), STANDALONEWEEKDAYS:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","), SHORTWEEKDAYS:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","), STANDALONESHORTWEEKDAYS:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","), NARROWWEEKDAYS:"S,M,T,W,T,F,S".split(","), STANDALONENARROWWEEKDAYS:"S,M,T,W,T,F,S".split(","), SHORTQUARTERS:["Q1", "Q2", "Q3", 
"Q4"], QUARTERS:["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE, y MMMM dd", "y MMMM d", "y MMM d", "yyyy-MM-dd"], TIMEFORMATS:["HH:mm:ss v", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], AVAILABLEFORMATS:{Md:"M/d", MMMMd:"MMMM d", MMMd:"MMM d"}, FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_am = {ERAS:["\u12d3/\u12d3", "\u12d3/\u121d"], ERANAMES:["\u12d3\u1218\u1270 \u12d3\u1208\u121d", "\u12d3\u1218\u1270 \u121d\u1215\u1228\u1275"], NARROWMONTHS:"\u1303,\u134c,\u121b,\u12a4,\u121c,\u1301,\u1301,\u12a6,\u1234,\u12a6,\u1296,\u12f2".split(","), STANDALONENARROWMONTHS:"\u1303,\u134c,\u121b,\u12a4,\u121c,\u1301,\u1301,\u12a6,\u1234,\u12a6,\u1296,\u12f2".split(","), MONTHS:"\u1303\u1295\u12e9\u12c8\u122a,\u134c\u1265\u1229\u12c8\u122a,\u121b\u122d\u127d,\u12a4\u1355\u1228\u120d,\u121c\u12ed,\u1301\u1295,\u1301\u120b\u12ed,\u12a6\u1308\u1235\u1275,\u1234\u1355\u1274\u121d\u1260\u122d,\u12a6\u12ad\u1270\u12cd\u1260\u122d,\u1296\u126c\u121d\u1260\u122d,\u12f2\u1234\u121d\u1260\u122d".split(","), 
STANDALONEMONTHS:"\u1303\u1295\u12e9\u12c8\u122a,\u134c\u1265\u1229\u12c8\u122a,\u121b\u122d\u127d,\u12a4\u1355\u1228\u120d,\u121c\u12ed,\u1301\u1295,\u1301\u120b\u12ed,\u12a6\u1308\u1235\u1275,\u1234\u1355\u1274\u121d\u1260\u122d,\u12a6\u12ad\u1270\u12cd\u1260\u122d,\u1296\u126c\u121d\u1260\u122d,\u12f2\u1234\u121d\u1260\u122d".split(","), SHORTMONTHS:"\u1303\u1295\u12e9,\u134c\u1265\u1229,\u121b\u122d\u127d,\u12a4\u1355\u1228,\u121c\u12ed,\u1301\u1295,\u1301\u120b\u12ed,\u12a6\u1308\u1235,\u1234\u1355\u1274,\u12a6\u12ad\u1270,\u1296\u126c\u121d,\u12f2\u1234\u121d".split(","), 
STANDALONESHORTMONTHS:"\u1303\u1295\u12e9,\u134c\u1265\u1229,\u121b\u122d\u127d,\u12a4\u1355\u1228,\u121c\u12ed,\u1301\u1295,\u1301\u120b\u12ed,\u12a6\u1308\u1235,\u1234\u1355\u1274,\u12a6\u12ad\u1270,\u1296\u126c\u121d,\u12f2\u1234\u121d".split(","), WEEKDAYS:"\u12a5\u1211\u12f5,\u1230\u129e,\u121b\u12ad\u1230\u129e,\u1228\u1261\u12d5,\u1210\u1219\u1235,\u12d3\u122d\u1265,\u1245\u12f3\u121c".split(","), STANDALONEWEEKDAYS:"\u12a5\u1211\u12f5,\u1230\u129e,\u121b\u12ad\u1230\u129e,\u1228\u1261\u12d5,\u1210\u1219\u1235,\u12d3\u122d\u1265,\u1245\u12f3\u121c".split(","), 
SHORTWEEKDAYS:"\u12a5\u1211\u12f5,\u1230\u129e,\u121b\u12ad\u1230,\u1228\u1261\u12d5,\u1210\u1219\u1235,\u12d3\u122d\u1265,\u1245\u12f3\u121c".split(","), STANDALONESHORTWEEKDAYS:"\u12a5\u1211\u12f5,\u1230\u129e,\u121b\u12ad\u1230,\u1228\u1261\u12d5,\u1210\u1219\u1235,\u12d3\u122d\u1265,\u1245\u12f3\u121c".split(","), NARROWWEEKDAYS:"\u12a5,\u1230,\u121b,\u1228,\u1210,\u12d3,\u1245".split(","), STANDALONENARROWWEEKDAYS:"\u12a5,\u1230,\u121b,\u1228,\u1210,\u12d3,\u1245".split(","), SHORTQUARTERS:["Q1", 
"Q2", "Q3", "Q4"], QUARTERS:["Q1", "Q2", "Q3", "Q4"], AMPMS:["\u1321\u12cb\u1275", "\u12a8\u1233\u12d3\u1275"], DATEFORMATS:["EEEE, d MMMM y", "d MMMM y", "d MMM y", "dd/MM/yyyy"], TIMEFORMATS:["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"], FIRSTDAYOFWEEK:5, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:1};
goog.i18n.DateTimeSymbols_ar = {ERAS:["\u0642.\u0645", "\u0645"], ERANAMES:["\u0642\u0628\u0644 \u0627\u0644\u0645\u064a\u0644\u0627\u062f", "\u0645\u064a\u0644\u0627\u062f\u064a"], NARROWMONTHS:"\u064a,\u0641,\u0645,\u0623,\u0648,\u0646,\u0644,\u063a,\u0633,\u0643,\u0628,\u062f".split(","), STANDALONENARROWMONTHS:"\u064a,\u0641,\u0645,\u0623,\u0648,\u0646,\u0644,\u063a,\u0633,\u0643,\u0628,\u062f".split(","), MONTHS:"\u064a\u0646\u0627\u064a\u0631,\u0641\u0628\u0631\u0627\u064a\u0631,\u0645\u0627\u0631\u0633,\u0623\u0628\u0631\u064a\u0644,\u0645\u0627\u064a\u0648,\u064a\u0648\u0646\u064a\u0648,\u064a\u0648\u0644\u064a\u0648,\u0623\u063a\u0633\u0637\u0633,\u0633\u0628\u062a\u0645\u0628\u0631,\u0623\u0643\u062a\u0648\u0628\u0631,\u0646\u0648\u0641\u0645\u0628\u0631,\u062f\u064a\u0633\u0645\u0628\u0631".split(","), 
STANDALONEMONTHS:"\u064a\u0646\u0627\u064a\u0631,\u0641\u0628\u0631\u0627\u064a\u0631,\u0645\u0627\u0631\u0633,\u0623\u0628\u0631\u064a\u0644,\u0645\u0627\u064a\u0648,\u064a\u0648\u0646\u064a\u0648,\u064a\u0648\u0644\u064a\u0648,\u0623\u063a\u0633\u0637\u0633,\u0633\u0628\u062a\u0645\u0628\u0631,\u0623\u0643\u062a\u0648\u0628\u0631,\u0646\u0648\u0641\u0645\u0628\u0631,\u062f\u064a\u0633\u0645\u0628\u0631".split(","), SHORTMONTHS:"\u064a\u0646\u0627\u064a\u0631,\u0641\u0628\u0631\u0627\u064a\u0631,\u0645\u0627\u0631\u0633,\u0623\u0628\u0631\u064a\u0644,\u0645\u0627\u064a\u0648,\u064a\u0648\u0646\u064a\u0648,\u064a\u0648\u0644\u064a\u0648,\u0623\u063a\u0633\u0637\u0633,\u0633\u0628\u062a\u0645\u0628\u0631,\u0623\u0643\u062a\u0648\u0628\u0631,\u0646\u0648\u0641\u0645\u0628\u0631,\u062f\u064a\u0633\u0645\u0628\u0631".split(","), 
STANDALONESHORTMONTHS:"\u064a\u0646\u0627\u064a\u0631,\u0641\u0628\u0631\u0627\u064a\u0631,\u0645\u0627\u0631\u0633,\u0623\u0628\u0631\u064a\u0644,\u0645\u0627\u064a\u0648,\u064a\u0648\u0646\u064a\u0648,\u064a\u0648\u0644\u064a\u0648,\u0623\u063a\u0633\u0637\u0633,\u0633\u0628\u062a\u0645\u0628\u0631,\u0623\u0643\u062a\u0648\u0628\u0631,\u0646\u0648\u0641\u0645\u0628\u0631,\u062f\u064a\u0633\u0645\u0628\u0631".split(","), WEEKDAYS:"\u0627\u0644\u0623\u062d\u062f,\u0627\u0644\u0625\u062b\u0646\u064a\u0646,\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621,\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621,\u0627\u0644\u062e\u0645\u064a\u0633,\u0627\u0644\u062c\u0645\u0639\u0629,\u0627\u0644\u0633\u0628\u062a".split(","), 
STANDALONEWEEKDAYS:"\u0627\u0644\u0623\u062d\u062f,\u0627\u0644\u0625\u062b\u0646\u064a\u0646,\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621,\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621,\u0627\u0644\u062e\u0645\u064a\u0633,\u0627\u0644\u062c\u0645\u0639\u0629,\u0627\u0644\u0633\u0628\u062a".split(","), SHORTWEEKDAYS:"\u0623\u062d\u062f,\u0625\u062b\u0646\u064a\u0646,\u062b\u0644\u0627\u062b\u0627\u0621,\u0623\u0631\u0628\u0639\u0627\u0621,\u062e\u0645\u064a\u0633,\u062c\u0645\u0639\u0629,\u0633\u0628\u062a".split(","), 
STANDALONESHORTWEEKDAYS:"\u0623\u062d\u062f,\u0625\u062b\u0646\u064a\u0646,\u062b\u0644\u0627\u062b\u0627\u0621,\u0623\u0631\u0628\u0639\u0627\u0621,\u062e\u0645\u064a\u0633,\u062c\u0645\u0639\u0629,\u0633\u0628\u062a".split(","), NARROWWEEKDAYS:"\u062d,\u0646,\u062b,\u0631,\u062e,\u062c,\u0633".split(","), STANDALONENARROWWEEKDAYS:"\u062d,\u0646,\u062b,\u0631,\u062e,\u062c,\u0633".split(","), SHORTQUARTERS:["\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0623\u0648\u0644", "\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062b\u0627\u0646\u064a", 
"\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062b\u0627\u0644\u062b", "\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0631\u0627\u0628\u0639"], QUARTERS:["\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0623\u0648\u0644", "\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062b\u0627\u0646\u064a", "\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062b\u0627\u0644\u062b", "\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0631\u0627\u0628\u0639"], AMPMS:["\u0635", "\u0645"], DATEFORMATS:["EEEE\u060c d MMMM\u060c y", 
"d MMMM\u060c y", "dd\u200f/MM\u200f/yyyy", "d\u200f/M\u200f/yyyy"], TIMEFORMATS:["zzzz h:mm:ss a", "z h:mm:ss a", "h:mm:ss a", "h:mm a"], FIRSTDAYOFWEEK:5, WEEKENDRANGE:[4, 5], FIRSTWEEKCUTOFFDAY:1};
goog.i18n.DateTimeSymbols_bg = {ERAS:["\u043f\u0440. \u043d. \u0435.", "\u043e\u0442 \u043d. \u0435."], ERANAMES:["\u043f\u0440.\u0425\u0440.", "\u0441\u043b.\u0425\u0440."], NARROWMONTHS:"\u044f,\u0444,\u043c,\u0430,\u043c,\u044e,\u044e,\u0430,\u0441,\u043e,\u043d,\u0434".split(","), STANDALONENARROWMONTHS:"\u044f,\u0444,\u043c,\u0430,\u043c,\u044e,\u044e,\u0430,\u0441,\u043e,\u043d,\u0434".split(","), MONTHS:"\u044f\u043d\u0443\u0430\u0440\u0438,\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438,\u043c\u0430\u0440\u0442,\u0430\u043f\u0440\u0438\u043b,\u043c\u0430\u0439,\u044e\u043d\u0438,\u044e\u043b\u0438,\u0430\u0432\u0433\u0443\u0441\u0442,\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438,\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438,\u043d\u043e\u0435\u043c\u0432\u0440\u0438,\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438".split(","), 
STANDALONEMONTHS:"\u044f\u043d\u0443\u0430\u0440\u0438,\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438,\u043c\u0430\u0440\u0442,\u0430\u043f\u0440\u0438\u043b,\u043c\u0430\u0439,\u044e\u043d\u0438,\u044e\u043b\u0438,\u0430\u0432\u0433\u0443\u0441\u0442,\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438,\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438,\u043d\u043e\u0435\u043c\u0432\u0440\u0438,\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438".split(","), SHORTMONTHS:"\u044f\u043d.,\u0444\u0435\u0432\u0440.,\u043c\u0430\u0440\u0442,\u0430\u043f\u0440.,\u043c\u0430\u0439,\u044e\u043d\u0438,\u044e\u043b\u0438,\u0430\u0432\u0433.,\u0441\u0435\u043f\u0442.,\u043e\u043a\u0442.,\u043d\u043e\u0435\u043c.,\u0434\u0435\u043a.".split(","), 
STANDALONESHORTMONTHS:"\u044f\u043d.,\u0444\u0435\u0432\u0440.,\u043c\u0430\u0440\u0442,\u0430\u043f\u0440.,\u043c\u0430\u0439,\u044e\u043d\u0438,\u044e\u043b\u0438,\u0430\u0432\u0433.,\u0441\u0435\u043f\u0442.,\u043e\u043a\u0442.,\u043d\u043e\u0435\u043c.,\u0434\u0435\u043a.".split(","), WEEKDAYS:"\u043d\u0435\u0434\u0435\u043b\u044f,\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a,\u0432\u0442\u043e\u0440\u043d\u0438\u043a,\u0441\u0440\u044f\u0434\u0430,\u0447\u0435\u0442\u0432\u044a\u0440\u0442\u044a\u043a,\u043f\u0435\u0442\u044a\u043a,\u0441\u044a\u0431\u043e\u0442\u0430".split(","), 
STANDALONEWEEKDAYS:"\u043d\u0435\u0434\u0435\u043b\u044f,\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a,\u0432\u0442\u043e\u0440\u043d\u0438\u043a,\u0441\u0440\u044f\u0434\u0430,\u0447\u0435\u0442\u0432\u044a\u0440\u0442\u044a\u043a,\u043f\u0435\u0442\u044a\u043a,\u0441\u044a\u0431\u043e\u0442\u0430".split(","), SHORTWEEKDAYS:"\u043d\u0434,\u043f\u043d,\u0432\u0442,\u0441\u0440,\u0447\u0442,\u043f\u0442,\u0441\u0431".split(","), STANDALONESHORTWEEKDAYS:"\u043d\u0434,\u043f\u043d,\u0432\u0442,\u0441\u0440,\u0447\u0442,\u043f\u0442,\u0441\u0431".split(","), 
NARROWWEEKDAYS:"\u043d,\u043f,\u0432,\u0441,\u0447,\u043f,\u0441".split(","), STANDALONENARROWWEEKDAYS:"\u043d,\u043f,\u0432,\u0441,\u0447,\u043f,\u0441".split(","), SHORTQUARTERS:["I \u0442\u0440\u0438\u043c.", "II \u0442\u0440\u0438\u043c.", "III \u0442\u0440\u0438\u043c.", "IV \u0442\u0440\u0438\u043c."], QUARTERS:["1-\u0432\u043e \u0442\u0440\u0438\u043c\u0435\u0441\u0435\u0447\u0438\u0435", "2-\u0440\u043e \u0442\u0440\u0438\u043c\u0435\u0441\u0435\u0447\u0438\u0435", "3-\u0442\u043e \u0442\u0440\u0438\u043c\u0435\u0441\u0435\u0447\u0438\u0435", 
"4-\u0442\u043e \u0442\u0440\u0438\u043c\u0435\u0441\u0435\u0447\u0438\u0435"], AMPMS:["\u043f\u0440. \u043e\u0431.", "\u0441\u043b. \u043e\u0431."], DATEFORMATS:["dd MMMM y, EEEE", "dd MMMM y", "dd.MM.yyyy", "dd.MM.yy"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_bn = {ERAS:["\u0996\u09c3\u09b7\u09cd\u099f\u09aa\u09c2\u09b0\u09cd\u09ac", "\u0996\u09c3\u09b7\u09cd\u099f\u09be\u09ac\u09cd\u09a6"], ERANAMES:["\u0996\u09c3\u09b7\u09cd\u099f\u09aa\u09c2\u09b0\u09cd\u09ac", "\u0996\u09c3\u09b7\u09cd\u099f\u09be\u09ac\u09cd\u09a6"], NARROWMONTHS:"\u099c\u09be,\u09ab\u09c7,\u09ae\u09be,\u098f,\u09ae\u09c7,\u099c\u09c1\u09a8,\u099c\u09c1,\u0986,\u09b8\u09c7,\u0985,\u09a8,\u09a1\u09bf".split(","), STANDALONENARROWMONTHS:"\u099c\u09be,\u09ab\u09c7,\u09ae\u09be,\u098f,\u09ae\u09c7,\u099c\u09c1\u09a8,\u099c\u09c1,\u0986,\u09b8\u09c7,\u0985,\u09a8,\u09a1\u09bf".split(","), 
MONTHS:"\u099c\u09be\u09a8\u09c1\u09af\u09bc\u09be\u09b0\u09c0,\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09af\u09bc\u09be\u09b0\u09c0,\u09ae\u09be\u09b0\u09cd\u099a,\u098f\u09aa\u09cd\u09b0\u09bf\u09b2,\u09ae\u09c7,\u099c\u09c1\u09a8,\u099c\u09c1\u09b2\u09be\u0987,\u0986\u0997\u09b8\u09cd\u099f,\u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0,\u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0,\u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0,\u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0".split(","), 
STANDALONEMONTHS:"\u099c\u09be\u09a8\u09c1\u09af\u09bc\u09be\u09b0\u09c0,\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09af\u09bc\u09be\u09b0\u09c0,\u09ae\u09be\u09b0\u09cd\u099a,\u098f\u09aa\u09cd\u09b0\u09bf\u09b2,\u09ae\u09c7,\u099c\u09c1\u09a8,\u099c\u09c1\u09b2\u09be\u0987,\u0986\u0997\u09b8\u09cd\u099f,\u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0,\u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0,\u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0,\u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0".split(","), 
SHORTMONTHS:"\u099c\u09be\u09a8\u09c1\u09af\u09bc\u09be\u09b0\u09c0,\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09af\u09bc\u09be\u09b0\u09c0,\u09ae\u09be\u09b0\u09cd\u099a,\u098f\u09aa\u09cd\u09b0\u09bf\u09b2,\u09ae\u09c7,\u099c\u09c1\u09a8,\u099c\u09c1\u09b2\u09be\u0987,\u0986\u0997\u09b8\u09cd\u099f,\u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0,\u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0,\u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0,\u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0".split(","), 
STANDALONESHORTMONTHS:"\u099c\u09be\u09a8\u09c1\u09af\u09bc\u09be\u09b0\u09c0,\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09af\u09bc\u09be\u09b0\u09c0,\u09ae\u09be\u09b0\u09cd\u099a,\u098f\u09aa\u09cd\u09b0\u09bf\u09b2,\u09ae\u09c7,\u099c\u09c1\u09a8,\u099c\u09c1\u09b2\u09be\u0987,\u0986\u0997\u09b8\u09cd\u099f,\u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0,\u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0,\u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0,\u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0".split(","), 
WEEKDAYS:"\u09b0\u09ac\u09bf\u09ac\u09be\u09b0,\u09b8\u09cb\u09ae\u09ac\u09be\u09b0,\u09ae\u0999\u09cd\u0997\u09b2\u09ac\u09be\u09b0,\u09ac\u09c1\u09a7\u09ac\u09be\u09b0,\u09ac\u09c3\u09b9\u09b7\u09cd\u09aa\u09a4\u09bf\u09ac\u09be\u09b0,\u09b6\u09c1\u0995\u09cd\u09b0\u09ac\u09be\u09b0,\u09b6\u09a8\u09bf\u09ac\u09be\u09b0".split(","), STANDALONEWEEKDAYS:"\u09b0\u09ac\u09bf\u09ac\u09be\u09b0,\u09b8\u09cb\u09ae\u09ac\u09be\u09b0,\u09ae\u0999\u09cd\u0997\u09b2\u09ac\u09be\u09b0,\u09ac\u09c1\u09a7\u09ac\u09be\u09b0,\u09ac\u09c3\u09b9\u09b7\u09cd\u09aa\u09a4\u09bf\u09ac\u09be\u09b0,\u09b6\u09c1\u0995\u09cd\u09b0\u09ac\u09be\u09b0,\u09b6\u09a8\u09bf\u09ac\u09be\u09b0".split(","), 
SHORTWEEKDAYS:"\u09b0\u09ac\u09bf,\u09b8\u09cb\u09ae,\u09ae\u0999\u09cd\u0997\u09b2,\u09ac\u09c1\u09a7,\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf,\u09b6\u09c1\u0995\u09cd\u09b0,\u09b6\u09a8\u09bf".split(","), STANDALONESHORTWEEKDAYS:"\u09b0\u09ac\u09bf,\u09b8\u09cb\u09ae,\u09ae\u0999\u09cd\u0997\u09b2,\u09ac\u09c1\u09a7,\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf,\u09b6\u09c1\u0995\u09cd\u09b0,\u09b6\u09a8\u09bf".split(","), NARROWWEEKDAYS:"\u09b0,\u09b8\u09cb,\u09ae,\u09ac\u09c1,\u09ac\u09c3,\u09b6\u09c1,\u09b6".split(","), 
STANDALONENARROWWEEKDAYS:"\u09b0,\u09b8\u09cb,\u09ae,\u09ac\u09c1,\u09ac\u09c3,\u09b6\u09c1,\u09b6".split(","), SHORTQUARTERS:["\u099a\u09a4\u09c1\u09b0\u09cd\u09a5\u09be\u0982\u09b6 \u09e7", "\u099a\u09a4\u09c1\u09b0\u09cd\u09a5\u09be\u0982\u09b6 \u09e8", "\u099a\u09a4\u09c1\u09b0\u09cd\u09a5\u09be\u0982\u09b6 \u09e9", "\u099a\u09a4\u09c1\u09b0\u09cd\u09a5\u09be\u0982\u09b6 \u09ea"], QUARTERS:["\u09aa\u09cd\u09b0\u09a5\u09ae \u099a\u09a4\u09c1\u09b0\u09cd\u09a5\u09be\u0982\u09b6", "\u09a6\u09cd\u09ac\u09bf\u09a4\u09c0\u09af\u09bc \u099a\u09a4\u09c1\u09b0\u09cd\u09a5\u09be\u0982\u09b6", 
"\u09a4\u09c3\u09a4\u09c0\u09af\u09bc \u099a\u09a4\u09c1\u09b0\u09cd\u09a5\u09be\u0982\u09b6", "\u099a\u09a4\u09c1\u09b0\u09cd\u09a5 \u099a\u09a4\u09c1\u09b0\u09cd\u09a5\u09be\u0982\u09b6"], AMPMS:["am", "pm"], DATEFORMATS:["EEEE, d MMMM, y", "d MMMM, y", "d MMM, y", "d/M/yy"], TIMEFORMATS:["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_ca = {ERAS:["aC", "dC"], ERANAMES:["abans de Crist", "despr\u00e9s de Crist"], NARROWMONTHS:"G,F,M,A,M,J,J,A,S,O,N,D".split(","), STANDALONENARROWMONTHS:"g,f,m,a,m,j,j,a,s,o,n,d".split(","), MONTHS:"de gener,de febrer,de mar\u00e7,d\u2019abril,de maig,de juny,de juliol,d\u2019agost,de setembre,d\u2019octubre,de novembre,de desembre".split(","), STANDALONEMONTHS:"gener,febrer,mar\u00e7,abril,maig,juny,juliol,agost,setembre,octubre,novembre,desembre".split(","), SHORTMONTHS:"de gen.,de febr.,de mar\u00e7,d\u2019abr.,de maig,de juny,de jul.,d\u2019ag.,de set.,d\u2019oct.,de nov.,de des.".split(","), 
STANDALONESHORTMONTHS:"gen.,febr.,mar\u00e7,abr.,maig,juny,jul.,ag.,set.,oct.,nov.,des.".split(","), WEEKDAYS:"diumenge,dilluns,dimarts,dimecres,dijous,divendres,dissabte".split(","), STANDALONEWEEKDAYS:"Diumenge,Dilluns,Dimarts,Dimecres,Dijous,Divendres,dissabte".split(","), SHORTWEEKDAYS:"dg.,dl.,dt.,dc.,dj.,dv.,ds.".split(","), STANDALONESHORTWEEKDAYS:"dg,dl,dt,dc,dj,dv,ds".split(","), NARROWWEEKDAYS:"G,l,T,C,J,V,S".split(","), STANDALONENARROWWEEKDAYS:"g,l,t,c,j,v,s".split(","), SHORTQUARTERS:["1T", 
"2T", "3T", "4T"], QUARTERS:["1r trimestre", "2n trimestre", "3r trimestre", "4t trimestre"], AMPMS:["a.m.", "p.m."], DATEFORMATS:["EEEE d MMMM 'de' y", "d MMMM 'de' y", "dd/MM/yyyy", "dd/MM/yy"], TIMEFORMATS:["H:mm:ss zzzz", "H:mm:ss z", "H:mm:ss", "H:mm"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_cs = {ERAS:["p\u0159.Kr.", "po Kr."], ERANAMES:["p\u0159.Kr.", "po Kr."], NARROWMONTHS:"l,\u00fa,b,d,k,\u010d,\u010d,s,z,\u0159,l,p".split(","), STANDALONENARROWMONTHS:"l,\u00fa,b,d,k,\u010d,\u010d,s,z,\u0159,l,p".split(","), MONTHS:"ledna,\u00fanora,b\u0159ezna,dubna,kv\u011btna,\u010dervna,\u010dervence,srpna,z\u00e1\u0159\u00ed,\u0159\u00edjna,listopadu,prosince".split(","), STANDALONEMONTHS:"leden,\u00fanor,b\u0159ezen,duben,kv\u011bten,\u010derven,\u010dervenec,srpen,z\u00e1\u0159\u00ed,\u0159\u00edjen,listopad,prosinec".split(","), 
SHORTMONTHS:"1,2,3,4,5,6,7,8,9,10,11,12".split(","), STANDALONESHORTMONTHS:"1.,2.,3.,4.,5.,6.,7.,8.,9.,10.,11.,12.".split(","), WEEKDAYS:"ned\u011ble,pond\u011bl\u00ed,\u00fater\u00fd,st\u0159eda,\u010dtvrtek,p\u00e1tek,sobota".split(","), STANDALONEWEEKDAYS:"ned\u011ble,pond\u011bl\u00ed,\u00fater\u00fd,st\u0159eda,\u010dtvrtek,p\u00e1tek,sobota".split(","), SHORTWEEKDAYS:"ne,po,\u00fat,st,\u010dt,p\u00e1,so".split(","), STANDALONESHORTWEEKDAYS:"ne,po,\u00fat,st,\u010dt,p\u00e1,so".split(","), NARROWWEEKDAYS:"N,P,\u00da,S,\u010c,P,S".split(","), 
STANDALONENARROWWEEKDAYS:"N,P,\u00da,S,\u010c,P,S".split(","), SHORTQUARTERS:["Q1", "Q2", "Q3", "Q4"], QUARTERS:["1. \u010dtvrtlet\u00ed", "2. \u010dtvrtlet\u00ed", "3. \u010dtvrtlet\u00ed", "4. \u010dtvrtlet\u00ed"], AMPMS:["dop.", "odp."], DATEFORMATS:["EEEE, d. MMMM y", "d. MMMM y", "d.M.yyyy", "d.M.yy"], TIMEFORMATS:["H:mm:ss zzzz", "H:mm:ss z", "H:mm:ss", "H:mm"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_da = {ERAS:["f.Kr.", "e.Kr."], ERANAMES:["f.Kr.", "e.Kr."], NARROWMONTHS:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), STANDALONENARROWMONTHS:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), MONTHS:"januar,februar,marts,april,maj,juni,juli,august,september,oktober,november,december".split(","), STANDALONEMONTHS:"januar,februar,marts,april,maj,juni,juli,august,september,oktober,november,december".split(","), SHORTMONTHS:"jan.,feb.,mar.,apr.,maj,jun.,jul.,aug.,sep.,okt.,nov.,dec.".split(","), 
STANDALONESHORTMONTHS:"jan,feb,mar,apr,maj,jun,jul,aug,sep,okt,nov,dec".split(","), WEEKDAYS:"s\u00f8ndag,mandag,tirsdag,onsdag,torsdag,fredag,l\u00f8rdag".split(","), STANDALONEWEEKDAYS:"s\u00f8ndag,mandag,tirsdag,onsdag,torsdag,fredag,l\u00f8rdag".split(","), SHORTWEEKDAYS:"s\u00f8n,man,tir,ons,tor,fre,l\u00f8r".split(","), STANDALONESHORTWEEKDAYS:"s\u00f8n,man,tir,ons,tor,fre,l\u00f8r".split(","), NARROWWEEKDAYS:"S,M,T,O,T,F,L".split(","), STANDALONENARROWWEEKDAYS:"S,M,T,O,T,F,L".split(","), SHORTQUARTERS:["K1", 
"K2", "K3", "K4"], QUARTERS:["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"], AMPMS:["f.m.", "e.m."], DATEFORMATS:["EEEE 'den' d. MMMM y", "d. MMM y", "dd/MM/yyyy", "dd/MM/yy"], TIMEFORMATS:["HH.mm.ss zzzz", "HH.mm.ss z", "HH.mm.ss", "HH.mm"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_de = {ERAS:["v. Chr.", "n. Chr."], ERANAMES:["v. Chr.", "n. Chr."], NARROWMONTHS:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), STANDALONENARROWMONTHS:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), MONTHS:"Januar,Februar,M\u00e4rz,April,Mai,Juni,Juli,August,September,Oktober,November,Dezember".split(","), STANDALONEMONTHS:"Januar,Februar,M\u00e4rz,April,Mai,Juni,Juli,August,September,Oktober,November,Dezember".split(","), SHORTMONTHS:"Jan,Feb,M\u00e4r,Apr,Mai,Jun,Jul,Aug,Sep,Okt,Nov,Dez".split(","), 
STANDALONESHORTMONTHS:"Jan.,Feb.,M\u00e4r,Apr.,Mai,Juni,Jul,Aug,Sep,Okt,Nov,Dez".split(","), WEEKDAYS:"Sonntag,Montag,Dienstag,Mittwoch,Donnerstag,Freitag,Samstag".split(","), STANDALONEWEEKDAYS:"Sonntag,Montag,Dienstag,Mittwoch,Donnerstag,Freitag,Samstag".split(","), SHORTWEEKDAYS:"So.,Mo.,Di.,Mi.,Do.,Fr.,Sa.".split(","), STANDALONESHORTWEEKDAYS:"So,Mo,Di,Mi,Do,Fr,Sa".split(","), NARROWWEEKDAYS:"S,M,D,M,D,F,S".split(","), STANDALONENARROWWEEKDAYS:"S,M,D,M,D,F,S".split(","), SHORTQUARTERS:["Q1", 
"Q2", "Q3", "Q4"], QUARTERS:["1. Quartal", "2. Quartal", "3. Quartal", "4. Quartal"], AMPMS:["vorm.", "nachm."], DATEFORMATS:["EEEE, d. MMMM y", "d. MMMM y", "dd.MM.yyyy", "dd.MM.yy"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_de_AT = {ERAS:["v. Chr.", "n. Chr."], ERANAMES:["v. Chr.", "n. Chr."], NARROWMONTHS:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), STANDALONENARROWMONTHS:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), MONTHS:"J\u00e4nner,Februar,M\u00e4rz,April,Mai,Juni,Juli,August,September,Oktober,November,Dezember".split(","), STANDALONEMONTHS:"J\u00e4nner,Februar,M\u00e4rz,April,Mai,Juni,Juli,August,September,Oktober,November,Dezember".split(","), SHORTMONTHS:"J\u00e4n,Feb,M\u00e4r,Apr,Mai,Jun,Jul,Aug,Sep,Okt,Nov,Dez".split(","), 
STANDALONESHORTMONTHS:"Jan.,Feb.,M\u00e4r,Apr.,Mai,Juni,Jul,Aug,Sep,Okt,Nov,Dez".split(","), WEEKDAYS:"Sonntag,Montag,Dienstag,Mittwoch,Donnerstag,Freitag,Samstag".split(","), STANDALONEWEEKDAYS:"Sonntag,Montag,Dienstag,Mittwoch,Donnerstag,Freitag,Samstag".split(","), SHORTWEEKDAYS:"So.,Mo.,Di.,Mi.,Do.,Fr.,Sa.".split(","), STANDALONESHORTWEEKDAYS:"So,Mo,Di,Mi,Do,Fr,Sa".split(","), NARROWWEEKDAYS:"S,M,D,M,D,F,S".split(","), STANDALONENARROWWEEKDAYS:"S,M,D,M,D,F,S".split(","), SHORTQUARTERS:["Q1", 
"Q2", "Q3", "Q4"], QUARTERS:["1. Quartal", "2. Quartal", "3. Quartal", "4. Quartal"], AMPMS:["vorm.", "nachm."], DATEFORMATS:["EEEE, dd. MMMM y", "dd. MMMM y", "dd.MM.yyyy", "dd.MM.yy"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_de_CH = goog.i18n.DateTimeSymbols_de;
goog.i18n.DateTimeSymbols_el = {ERAS:["\u03c0.\u03a7.", "\u03bc.\u03a7."], ERANAMES:["\u03c0.\u03a7.", "\u03bc.\u03a7."], NARROWMONTHS:"\u0399,\u03a6,\u039c,\u0391,\u039c,\u0399,\u0399,\u0391,\u03a3,\u039f,\u039d,\u0394".split(","), STANDALONENARROWMONTHS:"\u0399,\u03a6,\u039c,\u0391,\u039c,\u0399,\u0399,\u0391,\u03a3,\u039f,\u039d,\u0394".split(","), MONTHS:"\u0399\u03b1\u03bd\u03bf\u03c5\u03b1\u03c1\u03af\u03bf\u03c5,\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03b1\u03c1\u03af\u03bf\u03c5,\u039c\u03b1\u03c1\u03c4\u03af\u03bf\u03c5,\u0391\u03c0\u03c1\u03b9\u03bb\u03af\u03bf\u03c5,\u039c\u03b1\u0390\u03bf\u03c5,\u0399\u03bf\u03c5\u03bd\u03af\u03bf\u03c5,\u0399\u03bf\u03c5\u03bb\u03af\u03bf\u03c5,\u0391\u03c5\u03b3\u03bf\u03cd\u03c3\u03c4\u03bf\u03c5,\u03a3\u03b5\u03c0\u03c4\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5,\u039f\u03ba\u03c4\u03c9\u03b2\u03c1\u03af\u03bf\u03c5,\u039d\u03bf\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5,\u0394\u03b5\u03ba\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5".split(","), 
STANDALONEMONTHS:"\u0399\u03b1\u03bd\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2,\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2,\u039c\u03ac\u03c1\u03c4\u03b9\u03bf\u03c2,\u0391\u03c0\u03c1\u03af\u03bb\u03b9\u03bf\u03c2,\u039c\u03ac\u03b9\u03bf\u03c2,\u0399\u03bf\u03cd\u03bd\u03b9\u03bf\u03c2,\u0399\u03bf\u03cd\u03bb\u03b9\u03bf\u03c2,\u0391\u03cd\u03b3\u03bf\u03c5\u03c3\u03c4\u03bf\u03c2,\u03a3\u03b5\u03c0\u03c4\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2,\u039f\u03ba\u03c4\u03ce\u03b2\u03c1\u03b9\u03bf\u03c2,\u039d\u03bf\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2,\u0394\u03b5\u03ba\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2".split(","), 
SHORTMONTHS:"\u0399\u03b1\u03bd,\u03a6\u03b5\u03b2,\u039c\u03b1\u03c1,\u0391\u03c0\u03c1,\u039c\u03b1\u03ca,\u0399\u03bf\u03c5\u03bd,\u0399\u03bf\u03c5\u03bb,\u0391\u03c5\u03b3,\u03a3\u03b5\u03c0,\u039f\u03ba\u03c4,\u039d\u03bf\u03b5,\u0394\u03b5\u03ba".split(","), STANDALONESHORTMONTHS:"\u0399\u03b1\u03bd,\u03a6\u03b5\u03b2,\u039c\u03b1\u03c1,\u0391\u03c0\u03c1,\u039c\u03b1\u03ca,\u0399\u03bf\u03c5\u03bd,\u0399\u03bf\u03c5\u03bb,\u0391\u03c5\u03b3,\u03a3\u03b5\u03c0,\u039f\u03ba\u03c4,\u039d\u03bf\u03b5,\u0394\u03b5\u03ba".split(","), 
WEEKDAYS:"\u039a\u03c5\u03c1\u03b9\u03b1\u03ba\u03ae,\u0394\u03b5\u03c5\u03c4\u03ad\u03c1\u03b1,\u03a4\u03c1\u03af\u03c4\u03b7,\u03a4\u03b5\u03c4\u03ac\u03c1\u03c4\u03b7,\u03a0\u03ad\u03bc\u03c0\u03c4\u03b7,\u03a0\u03b1\u03c1\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae,\u03a3\u03ac\u03b2\u03b2\u03b1\u03c4\u03bf".split(","), STANDALONEWEEKDAYS:"\u039a\u03c5\u03c1\u03b9\u03b1\u03ba\u03ae,\u0394\u03b5\u03c5\u03c4\u03ad\u03c1\u03b1,\u03a4\u03c1\u03af\u03c4\u03b7,\u03a4\u03b5\u03c4\u03ac\u03c1\u03c4\u03b7,\u03a0\u03ad\u03bc\u03c0\u03c4\u03b7,\u03a0\u03b1\u03c1\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae,\u03a3\u03ac\u03b2\u03b2\u03b1\u03c4\u03bf".split(","), 
SHORTWEEKDAYS:"\u039a\u03c5\u03c1,\u0394\u03b5\u03c5,\u03a4\u03c1\u03b9,\u03a4\u03b5\u03c4,\u03a0\u03b5\u03bc,\u03a0\u03b1\u03c1,\u03a3\u03b1\u03b2".split(","), STANDALONESHORTWEEKDAYS:"\u039a\u03c5\u03c1,\u0394\u03b5\u03c5,\u03a4\u03c1\u03b9,\u03a4\u03b5\u03c4,\u03a0\u03b5\u03bc,\u03a0\u03b1\u03c1,\u03a3\u03b1\u03b2".split(","), NARROWWEEKDAYS:"\u039a,\u0394,\u03a4,\u03a4,\u03a0,\u03a0,\u03a3".split(","), STANDALONENARROWWEEKDAYS:"\u039a,\u0394,\u03a4,\u03a4,\u03a0,\u03a0,\u03a3".split(","), SHORTQUARTERS:["\u03a41", 
"\u03a42", "\u03a43", "\u03a44"], QUARTERS:["1\u03bf \u03c4\u03c1\u03af\u03bc\u03b7\u03bd\u03bf", "2\u03bf \u03c4\u03c1\u03af\u03bc\u03b7\u03bd\u03bf", "3\u03bf \u03c4\u03c1\u03af\u03bc\u03b7\u03bd\u03bf", "4\u03bf \u03c4\u03c1\u03af\u03bc\u03b7\u03bd\u03bf"], AMPMS:["\u03c0.\u03bc.", "\u03bc.\u03bc."], DATEFORMATS:["EEEE, d MMMM y", "d MMMM y", "d MMM y", "d/M/yy"], TIMEFORMATS:["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_en = {ERAS:["BC", "AD"], ERANAMES:["Before Christ", "Anno Domini"], NARROWMONTHS:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), STANDALONENARROWMONTHS:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), MONTHS:"January,February,March,April,May,June,July,August,September,October,November,December".split(","), STANDALONEMONTHS:"January,February,March,April,May,June,July,August,September,October,November,December".split(","), SHORTMONTHS:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","), 
STANDALONESHORTMONTHS:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","), WEEKDAYS:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","), STANDALONEWEEKDAYS:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","), SHORTWEEKDAYS:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","), STANDALONESHORTWEEKDAYS:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","), NARROWWEEKDAYS:"S,M,T,W,T,F,S".split(","), STANDALONENARROWWEEKDAYS:"S,M,T,W,T,F,S".split(","), SHORTQUARTERS:["Q1", "Q2", "Q3", 
"Q4"], QUARTERS:["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"], TIMEFORMATS:["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:2};
goog.i18n.DateTimeSymbols_en_AU = {ERAS:["BC", "AD"], ERANAMES:["Before Christ", "Anno Domini"], NARROWMONTHS:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), STANDALONENARROWMONTHS:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), MONTHS:"January,February,March,April,May,June,July,August,September,October,November,December".split(","), STANDALONEMONTHS:"January,February,March,April,May,June,July,August,September,October,November,December".split(","), SHORTMONTHS:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","), 
STANDALONESHORTMONTHS:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","), WEEKDAYS:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","), STANDALONEWEEKDAYS:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","), SHORTWEEKDAYS:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","), STANDALONESHORTWEEKDAYS:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","), NARROWWEEKDAYS:"S,M,T,W,T,F,S".split(","), STANDALONENARROWWEEKDAYS:"S,M,T,W,T,F,S".split(","), SHORTQUARTERS:["Q1", "Q2", "Q3", 
"Q4"], QUARTERS:["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE, d MMMM y", "d MMMM y", "dd/MM/yyyy", "d/MM/yy"], TIMEFORMATS:["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_en_GB = {ERAS:["BC", "AD"], ERANAMES:["Before Christ", "Anno Domini"], NARROWMONTHS:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), STANDALONENARROWMONTHS:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), MONTHS:"January,February,March,April,May,June,July,August,September,October,November,December".split(","), STANDALONEMONTHS:"January,February,March,April,May,June,July,August,September,October,November,December".split(","), SHORTMONTHS:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","), 
STANDALONESHORTMONTHS:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","), WEEKDAYS:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","), STANDALONEWEEKDAYS:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","), SHORTWEEKDAYS:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","), STANDALONESHORTWEEKDAYS:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","), NARROWWEEKDAYS:"S,M,T,W,T,F,S".split(","), STANDALONENARROWWEEKDAYS:"S,M,T,W,T,F,S".split(","), SHORTQUARTERS:["Q1", "Q2", "Q3", 
"Q4"], QUARTERS:["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE, d MMMM y", "d MMMM y", "d MMM y", "dd/MM/yyyy"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_en_IE = {ERAS:["BC", "AD"], ERANAMES:["Before Christ", "Anno Domini"], NARROWMONTHS:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), STANDALONENARROWMONTHS:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), MONTHS:"January,February,March,April,May,June,July,August,September,October,November,December".split(","), STANDALONEMONTHS:"January,February,March,April,May,June,July,August,September,October,November,December".split(","), SHORTMONTHS:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","), 
STANDALONESHORTMONTHS:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","), WEEKDAYS:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","), STANDALONEWEEKDAYS:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","), SHORTWEEKDAYS:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","), STANDALONESHORTWEEKDAYS:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","), NARROWWEEKDAYS:"S,M,T,W,T,F,S".split(","), STANDALONENARROWWEEKDAYS:"S,M,T,W,T,F,S".split(","), SHORTQUARTERS:["Q1", "Q2", "Q3", 
"Q4"], QUARTERS:["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"], AMPMS:["a.m.", "p.m."], DATEFORMATS:["EEEE d MMMM y", "d MMMM y", "d MMM y", "dd/MM/yyyy"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:2};
goog.i18n.DateTimeSymbols_en_IN = {ERAS:["BC", "AD"], ERANAMES:["Before Christ", "Anno Domini"], NARROWMONTHS:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), STANDALONENARROWMONTHS:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), MONTHS:"January,February,March,April,May,June,July,August,September,October,November,December".split(","), STANDALONEMONTHS:"January,February,March,April,May,June,July,August,September,October,November,December".split(","), SHORTMONTHS:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","), 
STANDALONESHORTMONTHS:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","), WEEKDAYS:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","), STANDALONEWEEKDAYS:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","), SHORTWEEKDAYS:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","), STANDALONESHORTWEEKDAYS:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","), NARROWWEEKDAYS:"S,M,T,W,T,F,S".split(","), STANDALONENARROWWEEKDAYS:"S,M,T,W,T,F,S".split(","), SHORTQUARTERS:["Q1", "Q2", "Q3", 
"Q4"], QUARTERS:["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE d MMMM y", "d MMMM y", "dd-MMM-y", "dd/MM/yy"], TIMEFORMATS:["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[6, 6], FIRSTWEEKCUTOFFDAY:2};
goog.i18n.DateTimeSymbols_en_SG = {ERAS:["BC", "AD"], ERANAMES:["Before Christ", "Anno Domini"], NARROWMONTHS:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), STANDALONENARROWMONTHS:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), MONTHS:"January,February,March,April,May,June,July,August,September,October,November,December".split(","), STANDALONEMONTHS:"January,February,March,April,May,June,July,August,September,October,November,December".split(","), SHORTMONTHS:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","), 
STANDALONESHORTMONTHS:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","), WEEKDAYS:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","), STANDALONEWEEKDAYS:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","), SHORTWEEKDAYS:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","), STANDALONESHORTWEEKDAYS:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","), NARROWWEEKDAYS:"S,M,T,W,T,F,S".split(","), STANDALONENARROWWEEKDAYS:"S,M,T,W,T,F,S".split(","), SHORTQUARTERS:["Q1", "Q2", "Q3", 
"Q4"], QUARTERS:["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "d/M/yy"], TIMEFORMATS:["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:2};
goog.i18n.DateTimeSymbols_en_US = goog.i18n.DateTimeSymbols_en;
goog.i18n.DateTimeSymbols_en_ZA = {ERAS:["BC", "AD"], ERANAMES:["Before Christ", "Anno Domini"], NARROWMONTHS:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), STANDALONENARROWMONTHS:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), MONTHS:"January,February,March,April,May,June,July,August,September,October,November,December".split(","), STANDALONEMONTHS:"January,February,March,April,May,June,July,August,September,October,November,December".split(","), SHORTMONTHS:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","), 
STANDALONESHORTMONTHS:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","), WEEKDAYS:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","), STANDALONEWEEKDAYS:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","), SHORTWEEKDAYS:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","), STANDALONESHORTWEEKDAYS:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","), NARROWWEEKDAYS:"S,M,T,W,T,F,S".split(","), STANDALONENARROWWEEKDAYS:"S,M,T,W,T,F,S".split(","), SHORTQUARTERS:["Q1", "Q2", "Q3", 
"Q4"], QUARTERS:["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE dd MMMM y", "dd MMMM y", "dd MMM y", "yyyy/MM/dd"], TIMEFORMATS:["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_es = {ERAS:["a.C.", "d.C."], ERANAMES:["antes de Cristo", "anno D\u00f3mini"], NARROWMONTHS:"E,F,M,A,M,J,J,A,S,O,N,D".split(","), STANDALONENARROWMONTHS:"E,F,M,A,M,J,J,A,S,O,N,D".split(","), MONTHS:"enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre".split(","), STANDALONEMONTHS:"enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre".split(","), SHORTMONTHS:"ene,feb,mar,abr,may,jun,jul,ago,sep,oct,nov,dic".split(","), 
STANDALONESHORTMONTHS:"ene,feb,mar,abr,may,jun,jul,ago,sep,oct,nov,dic".split(","), WEEKDAYS:"domingo,lunes,martes,mi\u00e9rcoles,jueves,viernes,s\u00e1bado".split(","), STANDALONEWEEKDAYS:"domingo,lunes,martes,mi\u00e9rcoles,jueves,viernes,s\u00e1bado".split(","), SHORTWEEKDAYS:"dom,lun,mar,mi\u00e9,jue,vie,s\u00e1b".split(","), STANDALONESHORTWEEKDAYS:"dom,lun,mar,mi\u00e9,jue,vie,s\u00e1b".split(","), NARROWWEEKDAYS:"D,L,M,M,J,V,S".split(","), STANDALONENARROWWEEKDAYS:"D,L,M,M,J,V,S".split(","), 
SHORTQUARTERS:["T1", "T2", "T3", "T4"], QUARTERS:["1er trimestre", "2\u00ba trimestre", "3er trimestre", "4\u00ba trimestre"], AMPMS:["a.m.", "p.m."], DATEFORMATS:["EEEE d 'de' MMMM 'de' y", "d 'de' MMMM 'de' y", "dd/MM/yyyy", "dd/MM/yy"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_et = {ERAS:["e.m.a.", "m.a.j."], ERANAMES:["enne meie aega", "meie aja j\u00e4rgi"], NARROWMONTHS:"J,V,M,A,M,J,J,A,S,O,N,D".split(","), STANDALONENARROWMONTHS:"J,V,M,A,M,J,J,A,S,O,N,D".split(","), MONTHS:"jaanuar,veebruar,m\u00e4rts,aprill,mai,juuni,juuli,august,september,oktoober,november,detsember".split(","), STANDALONEMONTHS:"jaanuar,veebruar,m\u00e4rts,aprill,mai,juuni,juuli,august,september,oktoober,november,detsember".split(","), SHORTMONTHS:"jaan,veebr,m\u00e4rts,apr,mai,juuni,juuli,aug,sept,okt,nov,dets".split(","), 
STANDALONESHORTMONTHS:"jaan,veebr,m\u00e4rts,apr,mai,juuni,juuli,aug,sept,okt,nov,dets".split(","), WEEKDAYS:"p\u00fchap\u00e4ev,esmasp\u00e4ev,teisip\u00e4ev,kolmap\u00e4ev,neljap\u00e4ev,reede,laup\u00e4ev".split(","), STANDALONEWEEKDAYS:"p\u00fchap\u00e4ev,esmasp\u00e4ev,teisip\u00e4ev,kolmap\u00e4ev,neljap\u00e4ev,reede,laup\u00e4ev".split(","), SHORTWEEKDAYS:"P,E,T,K,N,R,L".split(","), STANDALONESHORTWEEKDAYS:"P,E,T,K,N,R,L".split(","), NARROWWEEKDAYS:"P,E,T,K,N,R,L".split(","), STANDALONENARROWWEEKDAYS:"P,E,T,K,N,R,L".split(","), 
SHORTQUARTERS:["K1", "K2", "K3", "K4"], QUARTERS:["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"], AMPMS:["enne keskp\u00e4eva", "p\u00e4rast keskp\u00e4eva"], DATEFORMATS:["EEEE, d. MMMM y", "d. MMMM y", "dd.MM.yyyy", "dd.MM.yy"], TIMEFORMATS:["H:mm.ss zzzz", "H:mm.ss z", "H:mm.ss", "H:mm"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_eu = {ERAS:["BCE", "CE"], ERANAMES:["BCE", "CE"], NARROWMONTHS:"U,O,M,A,M,E,U,A,I,U,A,A".split(","), STANDALONENARROWMONTHS:"U,O,M,A,M,E,U,A,I,U,A,A".split(","), MONTHS:"urtarrila,otsaila,martxoa,apirila,maiatza,ekaina,uztaila,abuztua,iraila,urria,azaroa,abendua".split(","), STANDALONEMONTHS:"urtarrila,otsaila,martxoa,apirila,maiatza,ekaina,uztaila,abuztua,iraila,urria,azaroa,abendua".split(","), SHORTMONTHS:"urt,ots,mar,api,mai,eka,uzt,abu,ira,urr,aza,abe".split(","), STANDALONESHORTMONTHS:"urt,ots,mar,api,mai,eka,uzt,abu,ira,urr,aza,abe".split(","), 
WEEKDAYS:"igandea,astelehena,asteartea,asteazkena,osteguna,ostirala,larunbata".split(","), STANDALONEWEEKDAYS:"igandea,astelehena,asteartea,asteazkena,osteguna,ostirala,larunbata".split(","), SHORTWEEKDAYS:"ig,al,as,az,og,or,lr".split(","), STANDALONESHORTWEEKDAYS:"ig,al,as,az,og,or,lr".split(","), NARROWWEEKDAYS:"1,2,3,4,5,6,7".split(","), STANDALONENARROWWEEKDAYS:"1,2,3,4,5,6,7".split(","), SHORTQUARTERS:["1Hh", "2Hh", "3Hh", "4Hh"], QUARTERS:["1. hiruhilekoa", "2. hiruhilekoa", "3. hiruhilekoa", 
"4. hiruhilekoa"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE, y'eko' MMMM'ren' dd'a'", "y'eko' MMM'ren' dd'a'", "y MMM d", "yyyy-MM-dd"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_fa = {ERAS:["\u0642.\u0645.", "\u0628. \u0645."], ERANAMES:["\u0642\u0628\u0644 \u0627\u0632 \u0645\u06cc\u0644\u0627\u062f", "\u0645\u06cc\u0644\u0627\u062f\u06cc"], NARROWMONTHS:"\u0698,\u0641,\u0645,\u0622,\u0645\u06cc,\u0698,\u0698,\u0627,\u0633,\u0627,\u0646,\u062f".split(","), STANDALONENARROWMONTHS:"\u0698,\u0641,\u0645,\u0622,\u0645\u06cc,\u0698,\u0698,\u0627,\u0633,\u0627,\u0646,\u062f".split(","), MONTHS:"\u0698\u0627\u0646\u0648\u06cc\u0647\u0654,\u0641\u0648\u0631\u06cc\u0647\u0654,\u0645\u0627\u0631\u0633,\u0622\u0648\u0631\u06cc\u0644,\u0645\u06cc,\u062c\u0648\u0646,\u062c\u0648\u0644\u0627\u06cc,\u0622\u06af\u0648\u0633\u062a,\u0633\u067e\u062a\u0627\u0645\u0628\u0631,\u0627\u06a9\u062a\u0628\u0631,\u0646\u0648\u0627\u0645\u0628\u0631,\u062f\u0633\u0627\u0645\u0628\u0631".split(","), 
STANDALONEMONTHS:"\u0698\u0627\u0646\u0648\u06cc\u0647,\u0641\u0648\u0631\u06cc\u0647,\u0645\u0627\u0631\u0633,\u0622\u0648\u0631\u06cc\u0644,\u0645\u0647,\u0698\u0648\u0626\u0646,\u0698\u0648\u0626\u06cc\u0647,\u0627\u0648\u062a,\u0633\u067e\u062a\u0627\u0645\u0628\u0631,\u0627\u06a9\u062a\u0628\u0631,\u0646\u0648\u0627\u0645\u0628\u0631,\u062f\u0633\u0627\u0645\u0628\u0631".split(","), SHORTMONTHS:"\u0698\u0627\u0646\u0648\u06cc\u0647\u0654,\u0641\u0648\u0631\u06cc\u0647\u0654,\u0645\u0627\u0631\u0633,\u0622\u0648\u0631\u06cc\u0644,\u0645\u06cc,\u062c\u0648\u0646,\u062c\u0648\u0644\u0627\u06cc,\u0627\u0648\u062a,\u0633\u067e\u062a\u0627\u0645\u0628\u0631,\u0627\u06a9\u062a\u0628\u0631,\u0646\u0648\u0627\u0645\u0628\u0631,\u062f\u0633\u0627\u0645\u0628\u0631".split(","), 
STANDALONESHORTMONTHS:"\u0698\u0627\u0646\u0648\u06cc\u0647,\u0641\u0648\u0631\u06cc\u0647,\u0645\u0627\u0631\u0633,\u0622\u0648\u0631\u06cc\u0644,\u0645\u0647,\u0698\u0648\u0626\u0646,\u0698\u0648\u0626\u06cc\u0647,\u0627\u0648\u062a,\u0633\u067e\u062a\u0627\u0645\u0628\u0631,\u0627\u06a9\u062a\u0628\u0631,\u0646\u0648\u0627\u0645\u0628\u0631,\u062f\u0633\u0627\u0645\u0628\u0631".split(","), WEEKDAYS:"\u06cc\u06a9\u0634\u0646\u0628\u0647,\u062f\u0648\u0634\u0646\u0628\u0647,\u0633\u0647\u200c\u0634\u0646\u0628\u0647,\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647,\u067e\u0646\u062c\u0634\u0646\u0628\u0647,\u062c\u0645\u0639\u0647,\u0634\u0646\u0628\u0647".split(","), 
STANDALONEWEEKDAYS:"\u06cc\u06a9\u0634\u0646\u0628\u0647,\u062f\u0648\u0634\u0646\u0628\u0647,\u0633\u0647\u200c\u0634\u0646\u0628\u0647,\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647,\u067e\u0646\u062c\u0634\u0646\u0628\u0647,\u062c\u0645\u0639\u0647,\u0634\u0646\u0628\u0647".split(","), SHORTWEEKDAYS:"\u06cc\u06a9\u0634\u0646\u0628\u0647,\u062f\u0648\u0634\u0646\u0628\u0647,\u0633\u0647\u200c\u0634\u0646\u0628\u0647,\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647,\u067e\u0646\u062c\u0634\u0646\u0628\u0647,\u062c\u0645\u0639\u0647,\u0634\u0646\u0628\u0647".split(","), 
STANDALONESHORTWEEKDAYS:"\u06cc\u06a9\u0634\u0646\u0628\u0647,\u062f\u0648\u0634\u0646\u0628\u0647,\u0633\u0647\u200c\u0634\u0646\u0628\u0647,\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647,\u067e\u0646\u062c\u0634\u0646\u0628\u0647,\u062c\u0645\u0639\u0647,\u0634\u0646\u0628\u0647".split(","), NARROWWEEKDAYS:"\u06cc,\u062f,\u0633,\u0686,\u067e,\u062c,\u0634".split(","), STANDALONENARROWWEEKDAYS:"\u06cc,\u062f,\u0633,\u0686,\u067e,\u062c,\u0634".split(","), SHORTQUARTERS:["\u0633\u200c\u0645\u06f1", 
"\u0633\u200c\u0645\u06f2", "\u0633\u200c\u0645\u06f3", "\u0633\u200c\u0645\u06f4"], QUARTERS:["\u0633\u0647\u200c\u0645\u0627\u0647\u0647\u0654 \u0627\u0648\u0644", "\u0633\u0647\u200c\u0645\u0627\u0647\u0647\u0654 \u062f\u0648\u0645", "\u0633\u0647\u200c\u0645\u0627\u0647\u0647\u0654 \u0633\u0648\u0645", "\u0633\u0647\u200c\u0645\u0627\u0647\u0647\u0654 \u0686\u0647\u0627\u0631\u0645"], AMPMS:["\u0642\u0628\u0644 \u0627\u0632 \u0638\u0647\u0631", "\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631"], 
DATEFORMATS:["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"], TIMEFORMATS:["H:mm:ss (zzzz)", "H:mm:ss (z)", "H:mm:ss", "H:mm"], FIRSTDAYOFWEEK:5, WEEKENDRANGE:[3, 4], FIRSTWEEKCUTOFFDAY:1};
goog.i18n.DateTimeSymbols_fi = {ERAS:["eKr.", "jKr."], ERANAMES:["ennen Kristuksen syntym\u00e4\u00e4", "j\u00e4lkeen Kristuksen syntym\u00e4n"], NARROWMONTHS:"T,H,M,H,T,K,H,E,S,L,M,J".split(","), STANDALONENARROWMONTHS:"T,H,M,H,T,K,H,E,S,L,M,J".split(","), MONTHS:"tammikuuta,helmikuuta,maaliskuuta,huhtikuuta,toukokuuta,kes\u00e4kuuta,hein\u00e4kuuta,elokuuta,syyskuuta,lokakuuta,marraskuuta,joulukuuta".split(","), STANDALONEMONTHS:"tammikuu,helmikuu,maaliskuu,huhtikuu,toukokuu,kes\u00e4kuu,hein\u00e4kuu,elokuu,syyskuu,lokakuu,marraskuu,joulukuu".split(","), 
SHORTMONTHS:"tammikuuta,helmikuuta,maaliskuuta,huhtikuuta,toukokuuta,kes\u00e4kuuta,hein\u00e4kuuta,elokuuta,syyskuuta,lokakuuta,marraskuuta,joulukuuta".split(","), STANDALONESHORTMONTHS:"tammi,helmi,maalis,huhti,touko,kes\u00e4,hein\u00e4,elo,syys,loka,marras,joulu".split(","), WEEKDAYS:"sunnuntaina,maanantaina,tiistaina,keskiviikkona,torstaina,perjantaina,lauantaina".split(","), STANDALONEWEEKDAYS:"sunnuntai,maanantai,tiistai,keskiviikko,torstai,perjantai,lauantai".split(","), SHORTWEEKDAYS:"su,ma,ti,ke,to,pe,la".split(","), 
STANDALONESHORTWEEKDAYS:"su,ma,ti,ke,to,pe,la".split(","), NARROWWEEKDAYS:"S,M,T,K,T,P,L".split(","), STANDALONENARROWWEEKDAYS:"S,M,T,K,T,P,L".split(","), SHORTQUARTERS:["1. nelj.", "2. nelj.", "3. nelj.", "4. nelj."], QUARTERS:["1. nelj\u00e4nnes", "2. nelj\u00e4nnes", "3. nelj\u00e4nnes", "4. nelj\u00e4nnes"], AMPMS:["ap.", "ip."], DATEFORMATS:["cccc d. MMMM y", "d. MMMM y", "d.M.yyyy", "d.M.yyyy"], TIMEFORMATS:["H.mm.ss zzzz", "H.mm.ss z", "H.mm.ss", "H.mm"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 
6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_fil = {ERAS:["BCE", "CE"], ERANAMES:["BCE", "CE"], NARROWMONTHS:"E,P,M,A,M,H,H,A,S,O,N,D".split(","), STANDALONENARROWMONTHS:"E,P,M,A,M,H,H,A,S,O,N,D".split(","), MONTHS:"Enero,Pebrero,Marso,Abril,Mayo,Hunyo,Hulyo,Agosto,Setyembre,Oktubre,Nobyembre,Disyembre".split(","), STANDALONEMONTHS:"Enero,Pebrero,Marso,Abril,Mayo,Hunyo,Hulyo,Agosto,Setyembre,Oktubre,Nobyembre,Disyembre".split(","), SHORTMONTHS:"Ene,Peb,Mar,Abr,May,Hun,Hul,Ago,Set,Okt,Nob,Dis".split(","), STANDALONESHORTMONTHS:"Ene,Peb,Mar,Abr,May,Hun,Hul,Ago,Set,Okt,Nob,Dis".split(","), 
WEEKDAYS:"Linggo,Lunes,Martes,Miyerkules,Huwebes,Biyernes,Sabado".split(","), STANDALONEWEEKDAYS:"Linggo,Lunes,Martes,Miyerkules,Huwebes,Biyernes,Sabado".split(","), SHORTWEEKDAYS:"Lin,Lun,Mar,Mye,Huw,Bye,Sab".split(","), STANDALONESHORTWEEKDAYS:"Lin,Lun,Mar,Miy,Huw,Biy,Sab".split(","), NARROWWEEKDAYS:"L,L,M,M,H,B,S".split(","), STANDALONENARROWWEEKDAYS:"L,L,M,M,H,B,S".split(","), SHORTQUARTERS:["Q1", "Q2", "Q3", "Q4"], QUARTERS:["Q1", "Q2", "Q3", "Q4"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE, MMMM dd y", 
"MMMM d, y", "MMM d, y", "M/d/yy"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:2};
goog.i18n.DateTimeSymbols_fr = {ERAS:["av. J.-C.", "ap. J.-C."], ERANAMES:["avant J\u00e9sus-Christ", "apr\u00e8s J\u00e9sus-Christ"], NARROWMONTHS:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), STANDALONENARROWMONTHS:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), MONTHS:"janvier,f\u00e9vrier,mars,avril,mai,juin,juillet,ao\u00fbt,septembre,octobre,novembre,d\u00e9cembre".split(","), STANDALONEMONTHS:"janvier,f\u00e9vrier,mars,avril,mai,juin,juillet,ao\u00fbt,septembre,octobre,novembre,d\u00e9cembre".split(","), SHORTMONTHS:"janv.,f\u00e9vr.,mars,avr.,mai,juin,juil.,ao\u00fbt,sept.,oct.,nov.,d\u00e9c.".split(","), 
STANDALONESHORTMONTHS:"janv.,f\u00e9vr.,mars,avr.,mai,juin,juil.,ao\u00fbt,sept.,oct.,nov.,d\u00e9c.".split(","), WEEKDAYS:"dimanche,lundi,mardi,mercredi,jeudi,vendredi,samedi".split(","), STANDALONEWEEKDAYS:"dimanche,lundi,mardi,mercredi,jeudi,vendredi,samedi".split(","), SHORTWEEKDAYS:"dim.,lun.,mar.,mer.,jeu.,ven.,sam.".split(","), STANDALONESHORTWEEKDAYS:"dim.,lun.,mar.,mer.,jeu.,ven.,sam.".split(","), NARROWWEEKDAYS:"D,L,M,M,J,V,S".split(","), STANDALONENARROWWEEKDAYS:"D,L,M,M,J,V,S".split(","), 
SHORTQUARTERS:["T1", "T2", "T3", "T4"], QUARTERS:["1er trimestre", "2e trimestre", "3e trimestre", "4e trimestre"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE d MMMM y", "d MMMM y", "d MMM y", "dd/MM/yy"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_fr_CA = {ERAS:["av. J.-C.", "ap. J.-C."], ERANAMES:["avant J\u00e9sus-Christ", "apr\u00e8s J\u00e9sus-Christ"], NARROWMONTHS:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), STANDALONENARROWMONTHS:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), MONTHS:"janvier,f\u00e9vrier,mars,avril,mai,juin,juillet,ao\u00fbt,septembre,octobre,novembre,d\u00e9cembre".split(","), STANDALONEMONTHS:"janvier,f\u00e9vrier,mars,avril,mai,juin,juillet,ao\u00fbt,septembre,octobre,novembre,d\u00e9cembre".split(","), 
SHORTMONTHS:"janv.,f\u00e9vr.,mars,avr.,mai,juin,juil.,ao\u00fbt,sept.,oct.,nov.,d\u00e9c.".split(","), STANDALONESHORTMONTHS:"janv.,f\u00e9vr.,mars,avr.,mai,juin,juil.,ao\u00fbt,sept.,oct.,nov.,d\u00e9c.".split(","), WEEKDAYS:"dimanche,lundi,mardi,mercredi,jeudi,vendredi,samedi".split(","), STANDALONEWEEKDAYS:"dimanche,lundi,mardi,mercredi,jeudi,vendredi,samedi".split(","), SHORTWEEKDAYS:"dim.,lun.,mar.,mer.,jeu.,ven.,sam.".split(","), STANDALONESHORTWEEKDAYS:"dim.,lun.,mar.,mer.,jeu.,ven.,sam.".split(","), 
NARROWWEEKDAYS:"D,L,M,M,J,V,S".split(","), STANDALONENARROWWEEKDAYS:"D,L,M,M,J,V,S".split(","), SHORTQUARTERS:["T1", "T2", "T3", "T4"], QUARTERS:["1er trimestre", "2e trimestre", "3e trimestre", "4e trimestre"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE d MMMM y", "d MMMM y", "yyyy-MM-dd", "yy-MM-dd"], TIMEFORMATS:["HH 'h' mm 'min' ss 's' zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:2};
goog.i18n.DateTimeSymbols_gl = {ERAS:["a.C.", "d.C."], ERANAMES:["antes de Cristo", "despois de Cristo"], NARROWMONTHS:"X,F,M,A,M,X,X,A,S,O,N,D".split(","), STANDALONENARROWMONTHS:"X,F,M,A,M,X,X,A,S,O,N,D".split(","), MONTHS:"Xaneiro,Febreiro,Marzo,Abril,Maio,Xu\u00f1o,Xullo,Agosto,Setembro,Outubro,Novembro,Decembro".split(","), STANDALONEMONTHS:"Xaneiro,Febreiro,Marzo,Abril,Maio,Xu\u00f1o,Xullo,Agosto,Setembro,Outubro,Novembro,Decembro".split(","), SHORTMONTHS:"Xan,Feb,Mar,Abr,Mai,Xu\u00f1,Xul,Ago,Set,Out,Nov,Dec".split(","), 
STANDALONESHORTMONTHS:"Xan,Feb,Mar,Abr,Mai,Xu\u00f1,Xul,Ago,Set,Out,Nov,Dec".split(","), WEEKDAYS:"Domingo,Luns,Martes,M\u00e9rcores,Xoves,Venres,S\u00e1bado".split(","), STANDALONEWEEKDAYS:"Domingo,Luns,Martes,M\u00e9rcores,Xoves,Venres,S\u00e1bado".split(","), SHORTWEEKDAYS:"Dom,Lun,Mar,M\u00e9r,Xov,Ven,S\u00e1b".split(","), STANDALONESHORTWEEKDAYS:"Dom,Lun,Mar,M\u00e9r,Xov,Ven,S\u00e1b".split(","), NARROWWEEKDAYS:"D,L,M,M,X,V,S".split(","), STANDALONENARROWWEEKDAYS:"D,L,M,M,X,V,S".split(","), 
SHORTQUARTERS:["T1", "T2", "T3", "T4"], QUARTERS:["1o trimestre", "2o trimestre", "3o trimestre", "4o trimestre"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE dd MMMM y", "dd MMMM y", "d MMM, y", "dd/MM/yy"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_gsw = {ERAS:["v. Chr.", "n. Chr."], ERANAMES:["v. Chr.", "n. Chr."], NARROWMONTHS:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), STANDALONENARROWMONTHS:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), MONTHS:"Januar,Februar,M\u00e4rz,April,Mai,Juni,Juli,Auguscht,Sept\u00e4mber,Oktoober,Nov\u00e4mber,Dez\u00e4mber".split(","), STANDALONEMONTHS:"Januar,Februar,M\u00e4rz,April,Mai,Juni,Juli,Auguscht,Sept\u00e4mber,Oktoober,Nov\u00e4mber,Dez\u00e4mber".split(","), SHORTMONTHS:"Jan,Feb,M\u00e4r,Apr,Mai,Jun,Jul,Aug,Sep,Okt,Nov,Dez".split(","), 
STANDALONESHORTMONTHS:"Jan,Feb,M\u00e4r,Apr,Mai,Jun,Jul,Aug,Sep,Okt,Nov,Dez".split(","), WEEKDAYS:"Sunntig,M\u00e4\u00e4ntig,Ziischtig,Mittwuch,Dunschtig,Friitig,Samschtig".split(","), STANDALONEWEEKDAYS:"Sunntig,M\u00e4\u00e4ntig,Ziischtig,Mittwuch,Dunschtig,Friitig,Samschtig".split(","), SHORTWEEKDAYS:"Su.,M\u00e4.,Zi.,Mi.,Du.,Fr.,Sa.".split(","), STANDALONESHORTWEEKDAYS:"Su.,M\u00e4.,Zi.,Mi.,Du.,Fr.,Sa.".split(","), NARROWWEEKDAYS:"S,M,D,M,D,F,S".split(","), STANDALONENARROWWEEKDAYS:"S,M,D,M,D,F,S".split(","), 
SHORTQUARTERS:["Q1", "Q2", "Q3", "Q4"], QUARTERS:["1. Quartal", "2. Quartal", "3. Quartal", "4. Quartal"], AMPMS:["vorm.", "nam."], DATEFORMATS:["EEEE, d. MMMM y", "d. MMMM y", "dd.MM.yyyy", "dd.MM.yy"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_gu = {ERAS:["\u0a88\u0ab2\u0ac1\u0aa8\u0abe \u0a9c\u0aa8\u0acd\u0aae \u0aaa\u0ab9\u0ac7\u0ab8\u0abe\u0a82", "\u0a87\u0ab8\u0ab5\u0ac0\u0ab8\u0aa8"], ERANAMES:["\u0a88\u0ab8\u0ab5\u0ac0\u0ab8\u0aa8 \u0aaa\u0ac2\u0ab0\u0acd\u0ab5\u0ac7", "\u0a87\u0ab8\u0ab5\u0ac0\u0ab8\u0aa8"], NARROWMONTHS:"\u0a9c\u0abe,\u0aab\u0ac7,\u0aae\u0abe,\u0a8f,\u0aae\u0ac7,\u0a9c\u0ac2,\u0a9c\u0ac1,\u0a91,\u0ab8,\u0a91,\u0aa8,\u0aa1\u0abf".split(","), STANDALONENARROWMONTHS:"\u0a9c\u0abe,\u0aab\u0ac7,\u0aae\u0abe,\u0a8f,\u0aae\u0ac7,\u0a9c\u0ac2,\u0a9c\u0ac1,\u0a91,\u0ab8,\u0a91,\u0aa8,\u0aa1\u0abf".split(","), 
MONTHS:"\u0a9c\u0abe\u0aa8\u0acd\u0aaf\u0ac1\u0a86\u0ab0\u0ac0,\u0aab\u0ac7\u0aac\u0acd\u0ab0\u0ac1\u0a86\u0ab0\u0ac0,\u0aae\u0abe\u0ab0\u0acd\u0a9a,\u0a8f\u0aaa\u0acd\u0ab0\u0abf\u0ab2,\u0aae\u0ac7,\u0a9c\u0ac2\u0aa8,\u0a9c\u0ac1\u0ab2\u0abe\u0a88,\u0a91\u0a97\u0ab8\u0acd\u0a9f,\u0ab8\u0aaa\u0acd\u0a9f\u0ac7\u0aae\u0acd\u0aac\u0ab0,\u0a91\u0a95\u0acd\u0a9f\u0acd\u0aac\u0ab0,\u0aa8\u0ab5\u0ac7\u0aae\u0acd\u0aac\u0ab0,\u0aa1\u0abf\u0ab8\u0ac7\u0aae\u0acd\u0aac\u0ab0".split(","), STANDALONEMONTHS:"\u0a9c\u0abe\u0aa8\u0acd\u0aaf\u0ac1\u0a86\u0ab0\u0ac0,\u0aab\u0ac7\u0aac\u0acd\u0ab0\u0ac1\u0a86\u0ab0\u0ac0,\u0aae\u0abe\u0ab0\u0acd\u0a9a,\u0a8f\u0aaa\u0acd\u0ab0\u0abf\u0ab2,\u0aae\u0ac7,\u0a9c\u0ac2\u0aa8,\u0a9c\u0ac1\u0ab2\u0abe\u0a88,\u0a91\u0a97\u0ab8\u0acd\u0a9f,\u0ab8\u0aaa\u0acd\u0a9f\u0ac7\u0aae\u0acd\u0aac\u0ab0,\u0a91\u0a95\u0acd\u0a9f\u0acd\u0aac\u0ab0,\u0aa8\u0ab5\u0ac7\u0aae\u0acd\u0aac\u0ab0,\u0aa1\u0abf\u0ab8\u0ac7\u0aae\u0acd\u0aac\u0ab0".split(","), 
SHORTMONTHS:"\u0a9c\u0abe\u0aa8\u0acd\u0aaf\u0ac1,\u0aab\u0ac7\u0aac\u0acd\u0ab0\u0ac1,\u0aae\u0abe\u0ab0\u0acd\u0a9a,\u0a8f\u0aaa\u0acd\u0ab0\u0abf\u0ab2,\u0aae\u0ac7,\u0a9c\u0ac2\u0aa8,\u0a9c\u0ac1\u0ab2\u0abe\u0a88,\u0a91\u0a97\u0ab8\u0acd\u0a9f,\u0ab8\u0aaa\u0acd\u0a9f\u0ac7,\u0a91\u0a95\u0acd\u0a9f\u0acb,\u0aa8\u0ab5\u0ac7,\u0aa1\u0abf\u0ab8\u0ac7".split(","), STANDALONESHORTMONTHS:"\u0a9c\u0abe\u0aa8\u0acd\u0aaf\u0ac1,\u0aab\u0ac7\u0aac\u0acd\u0ab0\u0ac1,\u0aae\u0abe\u0ab0\u0acd\u0a9a,\u0a8f\u0aaa\u0acd\u0ab0\u0abf\u0ab2,\u0aae\u0ac7,\u0a9c\u0ac2\u0aa8,\u0a9c\u0ac1\u0ab2\u0abe\u0a88,\u0a91\u0a97\u0ab8\u0acd\u0a9f,\u0ab8\u0aaa\u0acd\u0a9f\u0ac7,\u0a91\u0a95\u0acd\u0a9f\u0acb,\u0aa8\u0ab5\u0ac7,\u0aa1\u0abf\u0ab8\u0ac7".split(","), 
WEEKDAYS:"\u0ab0\u0ab5\u0abf\u0ab5\u0abe\u0ab0,\u0ab8\u0acb\u0aae\u0ab5\u0abe\u0ab0,\u0aae\u0a82\u0a97\u0ab3\u0ab5\u0abe\u0ab0,\u0aac\u0ac1\u0aa7\u0ab5\u0abe\u0ab0,\u0a97\u0ac1\u0ab0\u0ac1\u0ab5\u0abe\u0ab0,\u0ab6\u0ac1\u0a95\u0acd\u0ab0\u0ab5\u0abe\u0ab0,\u0ab6\u0aa8\u0abf\u0ab5\u0abe\u0ab0".split(","), STANDALONEWEEKDAYS:"\u0ab0\u0ab5\u0abf\u0ab5\u0abe\u0ab0,\u0ab8\u0acb\u0aae\u0ab5\u0abe\u0ab0,\u0aae\u0a82\u0a97\u0ab3\u0ab5\u0abe\u0ab0,\u0aac\u0ac1\u0aa7\u0ab5\u0abe\u0ab0,\u0a97\u0ac1\u0ab0\u0ac1\u0ab5\u0abe\u0ab0,\u0ab6\u0ac1\u0a95\u0acd\u0ab0\u0ab5\u0abe\u0ab0,\u0ab6\u0aa8\u0abf\u0ab5\u0abe\u0ab0".split(","), 
SHORTWEEKDAYS:"\u0ab0\u0ab5\u0abf,\u0ab8\u0acb\u0aae,\u0aae\u0a82\u0a97\u0ab3,\u0aac\u0ac1\u0aa7,\u0a97\u0ac1\u0ab0\u0ac1,\u0ab6\u0ac1\u0a95\u0acd\u0ab0,\u0ab6\u0aa8\u0abf".split(","), STANDALONESHORTWEEKDAYS:"\u0ab0\u0ab5\u0abf,\u0ab8\u0acb\u0aae,\u0aae\u0a82\u0a97\u0ab3,\u0aac\u0ac1\u0aa7,\u0a97\u0ac1\u0ab0\u0ac1,\u0ab6\u0ac1\u0a95\u0acd\u0ab0,\u0ab6\u0aa8\u0abf".split(","), NARROWWEEKDAYS:"\u0ab0,\u0ab8\u0acb,\u0aae\u0a82,\u0aac\u0ac1,\u0a97\u0ac1,\u0ab6\u0ac1,\u0ab6".split(","), STANDALONENARROWWEEKDAYS:"\u0ab0,\u0ab8\u0acb,\u0aae\u0a82,\u0aac\u0ac1,\u0a97\u0ac1,\u0ab6\u0ac1,\u0ab6".split(","), 
SHORTQUARTERS:["\u0aaa\u0ac7\u0ab9\u0ab2\u0abe \u0ab9\u0a82\u0aa4 1", "\u0aa4\u0acd\u0ab0\u0abf\u0aae\u0abe\u0ab8\u0abf\u0a95 \u0ae8", "\u0aa4\u0acd\u0ab0\u0abf\u0aae\u0abe\u0ab8\u0abf\u0a95 \u0ae9", "\u0a9a\u0acc\u0aa4\u0abe \u0ab9\u0a82\u0aa4 4"], QUARTERS:["\u0aaa\u0ac7\u0ab9\u0ab2\u0abe \u0ab9\u0a82\u0aa4 1", "\u0aa1\u0ac2\u0ab8\u0a8b\u0abe \u0ab9\u0a82\u0aa4 2", "\u0aa4\u0ac0\u0ab8\u0a8b\u0abe \u0ab9\u0a82\u0aa4 3", "\u0a9a\u0acc\u0aa4\u0abe \u0ab9\u0a82\u0aa4 4"], AMPMS:["\u0aaa\u0ac2\u0ab0\u0acd\u0ab5 \u0aae\u0aa7\u0acd\u0aaf\u0abe\u0ab9\u0acd\u0aa8", 
"\u0a89\u0aa4\u0acd\u0aa4\u0ab0 \u0aae\u0aa7\u0acd\u0aaf\u0abe\u0ab9\u0acd\u0aa8"], DATEFORMATS:["EEEE, d MMMM, y", "d MMMM, y", "d MMM, y", "d-MM-yy"], TIMEFORMATS:["hh:mm:ss a zzzz", "hh:mm:ss a z", "hh:mm:ss a", "hh:mm a"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[6, 6], FIRSTWEEKCUTOFFDAY:2};
goog.i18n.DateTimeSymbols_he = {ERAS:["\u05dc\u05e4\u05e0\u05d4\u05f4\u05e1", "\u05dc\u05e1\u05d4\u05f4\u05e0"], ERANAMES:["\u05dc\u05e4\u05e0\u05d9 \u05d4\u05e1\u05e4\u05d9\u05e8\u05d4", "\u05dc\u05e1\u05e4\u05d9\u05e8\u05d4"], NARROWMONTHS:"1,2,3,4,5,6,7,8,9,10,11,12".split(","), STANDALONENARROWMONTHS:"1,2,3,4,5,6,7,8,9,10,11,12".split(","), MONTHS:"\u05d9\u05e0\u05d5\u05d0\u05e8,\u05e4\u05d1\u05e8\u05d5\u05d0\u05e8,\u05de\u05e8\u05e1,\u05d0\u05e4\u05e8\u05d9\u05dc,\u05de\u05d0\u05d9,\u05d9\u05d5\u05e0\u05d9,\u05d9\u05d5\u05dc\u05d9,\u05d0\u05d5\u05d2\u05d5\u05e1\u05d8,\u05e1\u05e4\u05d8\u05de\u05d1\u05e8,\u05d0\u05d5\u05e7\u05d8\u05d5\u05d1\u05e8,\u05e0\u05d5\u05d1\u05de\u05d1\u05e8,\u05d3\u05e6\u05de\u05d1\u05e8".split(","), 
STANDALONEMONTHS:"\u05d9\u05e0\u05d5\u05d0\u05e8,\u05e4\u05d1\u05e8\u05d5\u05d0\u05e8,\u05de\u05e8\u05e1,\u05d0\u05e4\u05e8\u05d9\u05dc,\u05de\u05d0\u05d9,\u05d9\u05d5\u05e0\u05d9,\u05d9\u05d5\u05dc\u05d9,\u05d0\u05d5\u05d2\u05d5\u05e1\u05d8,\u05e1\u05e4\u05d8\u05de\u05d1\u05e8,\u05d0\u05d5\u05e7\u05d8\u05d5\u05d1\u05e8,\u05e0\u05d5\u05d1\u05de\u05d1\u05e8,\u05d3\u05e6\u05de\u05d1\u05e8".split(","), SHORTMONTHS:"\u05d9\u05e0\u05d5,\u05e4\u05d1\u05e8,\u05de\u05e8\u05e1,\u05d0\u05e4\u05e8,\u05de\u05d0\u05d9,\u05d9\u05d5\u05e0,\u05d9\u05d5\u05dc,\u05d0\u05d5\u05d2,\u05e1\u05e4\u05d8,\u05d0\u05d5\u05e7,\u05e0\u05d5\u05d1,\u05d3\u05e6\u05de".split(","), 
STANDALONESHORTMONTHS:"\u05d9\u05e0\u05d5\u05f3,\u05e4\u05d1\u05e8\u05f3,\u05de\u05e8\u05e1,\u05d0\u05e4\u05e8\u05f3,\u05de\u05d0\u05d9,\u05d9\u05d5\u05e0\u05f3,\u05d9\u05d5\u05dc\u05f3,\u05d0\u05d5\u05d2\u05f3,\u05e1\u05e4\u05d8\u05f3,\u05d0\u05d5\u05e7\u05f3,\u05e0\u05d5\u05d1\u05f3,\u05d3\u05e6\u05de\u05f3".split(","), WEEKDAYS:"\u05d9\u05d5\u05dd \u05e8\u05d0\u05e9\u05d5\u05df,\u05d9\u05d5\u05dd \u05e9\u05e0\u05d9,\u05d9\u05d5\u05dd \u05e9\u05dc\u05d9\u05e9\u05d9,\u05d9\u05d5\u05dd \u05e8\u05d1\u05d9\u05e2\u05d9,\u05d9\u05d5\u05dd \u05d7\u05de\u05d9\u05e9\u05d9,\u05d9\u05d5\u05dd \u05e9\u05d9\u05e9\u05d9,\u05d9\u05d5\u05dd \u05e9\u05d1\u05ea".split(","), 
STANDALONEWEEKDAYS:"\u05d9\u05d5\u05dd \u05e8\u05d0\u05e9\u05d5\u05df,\u05d9\u05d5\u05dd \u05e9\u05e0\u05d9,\u05d9\u05d5\u05dd \u05e9\u05dc\u05d9\u05e9\u05d9,\u05d9\u05d5\u05dd \u05e8\u05d1\u05d9\u05e2\u05d9,\u05d9\u05d5\u05dd \u05d7\u05de\u05d9\u05e9\u05d9,\u05d9\u05d5\u05dd \u05e9\u05d9\u05e9\u05d9,\u05d9\u05d5\u05dd \u05e9\u05d1\u05ea".split(","), SHORTWEEKDAYS:"\u05d9\u05d5\u05dd \u05d0\u05f3,\u05d9\u05d5\u05dd \u05d1\u05f3,\u05d9\u05d5\u05dd \u05d2\u05f3,\u05d9\u05d5\u05dd \u05d3\u05f3,\u05d9\u05d5\u05dd \u05d4\u05f3,\u05d9\u05d5\u05dd \u05d5\u05f3,\u05e9\u05d1\u05ea".split(","), 
STANDALONESHORTWEEKDAYS:"\u05d9\u05d5\u05dd \u05d0\u05f3,\u05d9\u05d5\u05dd \u05d1\u05f3,\u05d9\u05d5\u05dd \u05d2\u05f3,\u05d9\u05d5\u05dd \u05d3\u05f3,\u05d9\u05d5\u05dd \u05d4\u05f3,\u05d9\u05d5\u05dd \u05d5\u05f3,\u05e9\u05d1\u05ea".split(","), NARROWWEEKDAYS:"\u05d0,\u05d1,\u05d2,\u05d3,\u05d4,\u05d5,\u05e9".split(","), STANDALONENARROWWEEKDAYS:"\u05d0,\u05d1,\u05d2,\u05d3,\u05d4,\u05d5,\u05e9".split(","), SHORTQUARTERS:["\u05e8\u05d1\u05e2\u05d5\u05df 1", "\u05e8\u05d1\u05e2\u05d5\u05df 2", 
"\u05e8\u05d1\u05e2\u05d5\u05df 3", "\u05e8\u05d1\u05e2\u05d5\u05df 4"], QUARTERS:["\u05e8\u05d1\u05e2\u05d5\u05df 1", "\u05e8\u05d1\u05e2\u05d5\u05df 2", "\u05e8\u05d1\u05e2\u05d5\u05df 3", "\u05e8\u05d1\u05e2\u05d5\u05df 4"], AMPMS:["\u05dc\u05e4\u05e0\u05d4\u05f4\u05e6", "\u05d0\u05d7\u05d4\u05f4\u05e6"], DATEFORMATS:["EEEE, d \u05d1MMMM y", "d \u05d1MMMM y", "d \u05d1MMM yyyy", "dd/MM/yy"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[4, 5], 
FIRSTWEEKCUTOFFDAY:2};
goog.i18n.DateTimeSymbols_hi = {ERAS:["\u0908\u0938\u093e\u092a\u0942\u0930\u094d\u0935", "\u0938\u0928"], ERANAMES:["\u0908\u0938\u093e\u092a\u0942\u0930\u094d\u0935", "\u0938\u0928"], NARROWMONTHS:"\u091c,\u092b\u093c,\u092e\u093e,\u0905,\u092e,\u091c\u0942,\u091c\u0941,\u0905,\u0938\u093f,\u0905,\u0928,\u0926\u093f".split(","), STANDALONENARROWMONTHS:"\u091c,\u092b\u093c,\u092e\u093e,\u0905,\u092e,\u091c\u0942,\u091c\u0941,\u0905,\u0938\u093f,\u0905,\u0928,\u0926\u093f".split(","), MONTHS:"\u091c\u0928\u0935\u0930\u0940,\u092b\u0930\u0935\u0930\u0940,\u092e\u093e\u0930\u094d\u091a,\u0905\u092a\u094d\u0930\u0948\u0932,\u092e\u0908,\u091c\u0942\u0928,\u091c\u0941\u0932\u093e\u0908,\u0905\u0917\u0938\u094d\u0924,\u0938\u093f\u0924\u092e\u094d\u092c\u0930,\u0905\u0915\u094d\u0924\u0942\u092c\u0930,\u0928\u0935\u092e\u094d\u092c\u0930,\u0926\u093f\u0938\u092e\u094d\u092c\u0930".split(","), 
STANDALONEMONTHS:"\u091c\u0928\u0935\u0930\u0940,\u092b\u0930\u0935\u0930\u0940,\u092e\u093e\u0930\u094d\u091a,\u0905\u092a\u094d\u0930\u0948\u0932,\u092e\u0908,\u091c\u0942\u0928,\u091c\u0941\u0932\u093e\u0908,\u0905\u0917\u0938\u094d\u0924,\u0938\u093f\u0924\u092e\u094d\u092c\u0930,\u0905\u0915\u094d\u0924\u0942\u092c\u0930,\u0928\u0935\u092e\u094d\u092c\u0930,\u0926\u093f\u0938\u092e\u094d\u092c\u0930".split(","), SHORTMONTHS:"\u091c\u0928\u0935\u0930\u0940,\u092b\u0930\u0935\u0930\u0940,\u092e\u093e\u0930\u094d\u091a,\u0905\u092a\u094d\u0930\u0948\u0932,\u092e\u0908,\u091c\u0942\u0928,\u091c\u0941\u0932\u093e\u0908,\u0905\u0917\u0938\u094d\u0924,\u0938\u093f\u0924\u092e\u094d\u092c\u0930,\u0905\u0915\u094d\u0924\u0942\u092c\u0930,\u0928\u0935\u092e\u094d\u092c\u0930,\u0926\u093f\u0938\u092e\u094d\u092c\u0930".split(","), 
STANDALONESHORTMONTHS:"\u091c\u0928\u0935\u0930\u0940,\u092b\u0930\u0935\u0930\u0940,\u092e\u093e\u0930\u094d\u091a,\u0905\u092a\u094d\u0930\u0948\u0932,\u092e\u0908,\u091c\u0942\u0928,\u091c\u0941\u0932\u093e\u0908,\u0905\u0917\u0938\u094d\u0924,\u0938\u093f\u0924\u092e\u094d\u092c\u0930,\u0905\u0915\u094d\u0924\u0942\u092c\u0930,\u0928\u0935\u092e\u094d\u092c\u0930,\u0926\u093f\u0938\u092e\u094d\u092c\u0930".split(","), WEEKDAYS:"\u0930\u0935\u093f\u0935\u093e\u0930,\u0938\u094b\u092e\u0935\u093e\u0930,\u092e\u0902\u0917\u0932\u0935\u093e\u0930,\u092c\u0941\u0927\u0935\u093e\u0930,\u092c\u0943\u0939\u0938\u094d\u092a\u0924\u093f\u0935\u093e\u0930,\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930,\u0936\u0928\u093f\u0935\u093e\u0930".split(","), 
STANDALONEWEEKDAYS:"\u0930\u0935\u093f\u0935\u093e\u0930,\u0938\u094b\u092e\u0935\u093e\u0930,\u092e\u0902\u0917\u0932\u0935\u093e\u0930,\u092c\u0941\u0927\u0935\u093e\u0930,\u092c\u0943\u0939\u0938\u094d\u092a\u0924\u093f\u0935\u093e\u0930,\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930,\u0936\u0928\u093f\u0935\u093e\u0930".split(","), SHORTWEEKDAYS:"\u0930\u0935\u093f.,\u0938\u094b\u092e.,\u092e\u0902\u0917\u0932.,\u092c\u0941\u0927.,\u092c\u0943\u0939.,\u0936\u0941\u0915\u094d\u0930.,\u0936\u0928\u093f.".split(","), 
STANDALONESHORTWEEKDAYS:"\u0930\u0935\u093f.,\u0938\u094b\u092e.,\u092e\u0902\u0917\u0932.,\u092c\u0941\u0927.,\u092c\u0943\u0939.,\u0936\u0941\u0915\u094d\u0930.,\u0936\u0928\u093f.".split(","), NARROWWEEKDAYS:"\u0930,\u0938\u094b,\u092e\u0902,\u092c\u0941,\u0917\u0941,\u0936\u0941,\u0936".split(","), STANDALONENARROWWEEKDAYS:"\u0930,\u0938\u094b,\u092e\u0902,\u092c\u0941,\u0917\u0941,\u0936\u0941,\u0936".split(","), SHORTQUARTERS:["\u0924\u093f\u092e\u093e\u0939\u0940", "\u0926\u0942\u0938\u0930\u0940 \u0924\u093f\u092e\u093e\u0939\u0940", 
"\u0924\u0940\u0938\u0930\u0940 \u0924\u093f\u092e\u093e\u0939\u0940", "\u091a\u094c\u0925\u0940 \u0924\u093f\u092e\u093e\u0939\u0940"], QUARTERS:["\u0924\u093f\u092e\u093e\u0939\u0940", "\u0926\u0942\u0938\u0930\u0940 \u0924\u093f\u092e\u093e\u0939\u0940", "\u0924\u0940\u0938\u0930\u0940 \u0924\u093f\u092e\u093e\u0939\u0940", "\u091a\u094c\u0925\u0940 \u0924\u093f\u092e\u093e\u0939\u0940"], AMPMS:["\u092a\u0942\u0930\u094d\u0935\u093e\u0939\u094d\u0928", "\u0905\u092a\u0930\u093e\u0939\u094d\u0928"], 
DATEFORMATS:["EEEE, d MMMM y", "d MMMM y", "dd-MM-yyyy", "d-M-yy"], TIMEFORMATS:["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[6, 6], FIRSTWEEKCUTOFFDAY:2};
goog.i18n.DateTimeSymbols_hr = {ERAS:["p. n. e.", "A. D."], ERANAMES:["Prije Krista", "Poslije Krista"], NARROWMONTHS:"1.,2.,3.,4.,5.,6.,7.,8.,9.,10.,11.,12.".split(","), STANDALONENARROWMONTHS:"1.,2.,3.,4.,5.,6.,7.,8.,9.,10.,11.,12.".split(","), MONTHS:"sije\u010dnja,velja\u010de,o\u017eujka,travnja,svibnja,lipnja,srpnja,kolovoza,rujna,listopada,studenoga,prosinca".split(","), STANDALONEMONTHS:"sije\u010danj,velja\u010da,o\u017eujak,travanj,svibanj,lipanj,srpanj,kolovoz,rujan,listopad,studeni,prosinac".split(","), 
SHORTMONTHS:"sij,velj,o\u017eu,tra,svi,lip,srp,kol,ruj,lis,stu,pro".split(","), STANDALONESHORTMONTHS:"sij,velj,o\u017eu,tra,svi,lip,srp,kol,ruj,lis,stu,pro".split(","), WEEKDAYS:"nedjelja,ponedjeljak,utorak,srijeda,\u010detvrtak,petak,subota".split(","), STANDALONEWEEKDAYS:"nedjelja,ponedjeljak,utorak,srijeda,\u010detvrtak,petak,subota".split(","), SHORTWEEKDAYS:"ned,pon,uto,sri,\u010det,pet,sub".split(","), STANDALONESHORTWEEKDAYS:"ned,pon,uto,sri,\u010det,pet,sub".split(","), NARROWWEEKDAYS:"n,p,u,s,\u010d,p,s".split(","), 
STANDALONENARROWWEEKDAYS:"n,p,u,s,\u010d,p,s".split(","), SHORTQUARTERS:["1kv", "2kv", "3kv", "4kv"], QUARTERS:["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE, d. MMMM y.", "d. MMMM y.", "d. M. yyyy.", "dd. MM. yyyy."], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_hu = {ERAS:["i. e.", "i. sz."], ERANAMES:["id\u0151sz\u00e1m\u00edt\u00e1sunk el\u0151tt", "id\u0151sz\u00e1m\u00edt\u00e1sunk szerint"], NARROWMONTHS:"J,F,M,\u00c1,M,J,J,A,Sz,O,N,D".split(","), STANDALONENARROWMONTHS:"J,F,M,\u00c1,M,J,J,A,Sz,O,N,D".split(","), MONTHS:"janu\u00e1r,febru\u00e1r,m\u00e1rcius,\u00e1prilis,m\u00e1jus,j\u00fanius,j\u00falius,augusztus,szeptember,okt\u00f3ber,november,december".split(","), STANDALONEMONTHS:"janu\u00e1r,febru\u00e1r,m\u00e1rcius,\u00e1prilis,m\u00e1jus,j\u00fanius,j\u00falius,augusztus,szeptember,okt\u00f3ber,november,december".split(","), 
SHORTMONTHS:"jan.,febr.,m\u00e1rc.,\u00e1pr.,m\u00e1j.,j\u00fan.,j\u00fal.,aug.,szept.,okt.,nov.,dec.".split(","), STANDALONESHORTMONTHS:"jan.,febr.,m\u00e1rc.,\u00e1pr.,m\u00e1j.,j\u00fan.,j\u00fal.,aug.,szept.,okt.,nov.,dec.".split(","), WEEKDAYS:"vas\u00e1rnap,h\u00e9tf\u0151,kedd,szerda,cs\u00fct\u00f6rt\u00f6k,p\u00e9ntek,szombat".split(","), STANDALONEWEEKDAYS:"vas\u00e1rnap,h\u00e9tf\u0151,kedd,szerda,cs\u00fct\u00f6rt\u00f6k,p\u00e9ntek,szombat".split(","), SHORTWEEKDAYS:"V,H,K,Sze,Cs,P,Szo".split(","), 
STANDALONESHORTWEEKDAYS:"V,H,K,Sze,Cs,P,Szo".split(","), NARROWWEEKDAYS:"V,H,K,Sz,Cs,P,Sz".split(","), STANDALONENARROWWEEKDAYS:"V,H,K,Sz,Cs,P,Sz".split(","), SHORTQUARTERS:["N1", "N2", "N3", "N4"], QUARTERS:["I. negyed\u00e9v", "II. negyed\u00e9v", "III. negyed\u00e9v", "IV. negyed\u00e9v"], AMPMS:["de.", "du."], DATEFORMATS:["y. MMMM d., EEEE", "y. MMMM d.", "yyyy.MM.dd.", "yyyy.MM.dd."], TIMEFORMATS:["H:mm:ss zzzz", "H:mm:ss z", "H:mm:ss", "H:mm"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_id = {ERAS:["SM", "M"], ERANAMES:["SM", "M"], NARROWMONTHS:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), STANDALONENARROWMONTHS:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), MONTHS:"Januari,Februari,Maret,April,Mei,Juni,Juli,Agustus,September,Oktober,November,Desember".split(","), STANDALONEMONTHS:"Januari,Februari,Maret,April,Mei,Juni,Juli,Agustus,September,Oktober,November,Desember".split(","), SHORTMONTHS:"Jan,Feb,Mar,Apr,Mei,Jun,Jul,Agt,Sep,Okt,Nov,Des".split(","), STANDALONESHORTMONTHS:"Jan,Feb,Mar,Apr,Mei,Jun,Jul,Agt,Sep,Okt,Nov,Des".split(","), 
WEEKDAYS:"Minggu,Senin,Selasa,Rabu,Kamis,Jumat,Sabtu".split(","), STANDALONEWEEKDAYS:"Minggu,Senin,Selasa,Rabu,Kamis,Jumat,Sabtu".split(","), SHORTWEEKDAYS:"Min,Sen,Sel,Rab,Kam,Jum,Sab".split(","), STANDALONESHORTWEEKDAYS:"Min,Sen,Sel,Rab,Kam,Jum,Sab".split(","), NARROWWEEKDAYS:"M,S,S,R,K,J,S".split(","), STANDALONENARROWWEEKDAYS:"M,S,S,R,K,J,S".split(","), SHORTQUARTERS:["K1", "K2", "K3", "K4"], QUARTERS:["kuartal pertama", "kuartal kedua", "kuartal ketiga", "kuartal keempat"], AMPMS:["pagi", "malam"], 
DATEFORMATS:["EEEE, dd MMMM yyyy", "d MMMM yyyy", "d MMM yyyy", "dd/MM/yy"], TIMEFORMATS:["H:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_in = {ERAS:["SM", "M"], ERANAMES:["SM", "M"], NARROWMONTHS:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), STANDALONENARROWMONTHS:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), MONTHS:"Januari,Februari,Maret,April,Mei,Juni,Juli,Agustus,September,Oktober,November,Desember".split(","), STANDALONEMONTHS:"Januari,Februari,Maret,April,Mei,Juni,Juli,Agustus,September,Oktober,November,Desember".split(","), SHORTMONTHS:"Jan,Feb,Mar,Apr,Mei,Jun,Jul,Agt,Sep,Okt,Nov,Des".split(","), STANDALONESHORTMONTHS:"Jan,Feb,Mar,Apr,Mei,Jun,Jul,Agt,Sep,Okt,Nov,Des".split(","), 
WEEKDAYS:"Minggu,Senin,Selasa,Rabu,Kamis,Jumat,Sabtu".split(","), STANDALONEWEEKDAYS:"Minggu,Senin,Selasa,Rabu,Kamis,Jumat,Sabtu".split(","), SHORTWEEKDAYS:"Min,Sen,Sel,Rab,Kam,Jum,Sab".split(","), STANDALONESHORTWEEKDAYS:"Min,Sen,Sel,Rab,Kam,Jum,Sab".split(","), NARROWWEEKDAYS:"M,S,S,R,K,J,S".split(","), STANDALONENARROWWEEKDAYS:"M,S,S,R,K,J,S".split(","), SHORTQUARTERS:["K1", "K2", "K3", "K4"], QUARTERS:["kuartal pertama", "kuartal kedua", "kuartal ketiga", "kuartal keempat"], AMPMS:["pagi", "malam"], 
DATEFORMATS:["EEEE, dd MMMM yyyy", "d MMMM yyyy", "d MMM yyyy", "dd/MM/yy"], TIMEFORMATS:["H:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_is = {ERAS:["fyrir Krist", "eftir Krist"], ERANAMES:["fyrir Krist", "eftir Krist"], NARROWMONTHS:"J,F,M,A,M,J,J,\u00c1,S,O,N,D".split(","), STANDALONENARROWMONTHS:"j,f,m,a,m,j,j,\u00e1,s,o,n,d".split(","), MONTHS:"jan\u00faar,febr\u00faar,mars,apr\u00edl,ma\u00ed,j\u00fan\u00ed,j\u00fal\u00ed,\u00e1g\u00fast,september,okt\u00f3ber,n\u00f3vember,desember".split(","), STANDALONEMONTHS:"jan\u00faar,febr\u00faar,mars,apr\u00edl,ma\u00ed,j\u00fan\u00ed,j\u00fal\u00ed,\u00e1g\u00fast,september,okt\u00f3ber,n\u00f3vember,desember".split(","), 
SHORTMONTHS:"jan,feb,mar,apr,ma\u00ed,j\u00fan,j\u00fal,\u00e1g\u00fa,sep,okt,n\u00f3v,des".split(","), STANDALONESHORTMONTHS:"jan,feb,mar,apr,ma\u00ed,j\u00fan,j\u00fal,\u00e1g\u00fa,sep,okt,n\u00f3v,des".split(","), WEEKDAYS:"sunnudagur,m\u00e1nudagur,\u00feri\u00f0judagur,mi\u00f0vikudagur,fimmtudagur,f\u00f6studagur,laugardagur".split(","), STANDALONEWEEKDAYS:"sunnudagur,m\u00e1nudagur,\u00feri\u00f0judagur,mi\u00f0vikudagur,fimmtudagur,f\u00f6studagur,laugardagur".split(","), SHORTWEEKDAYS:"sun,m\u00e1n,\u00feri,mi\u00f0,fim,f\u00f6s,lau".split(","), 
STANDALONESHORTWEEKDAYS:"sun,m\u00e1n,\u00feri,mi\u00f0,fim,f\u00f6s,lau".split(","), NARROWWEEKDAYS:"S,M,\u00de,M,F,F,L".split(","), STANDALONENARROWWEEKDAYS:"s,m,\u00fe,m,f,f,l".split(","), SHORTQUARTERS:["F1", "F2", "F3", "F4"], QUARTERS:["1st fj\u00f3r\u00f0ungur", "2nd fj\u00f3r\u00f0ungur", "3rd fj\u00f3r\u00f0ungur", "4th fj\u00f3r\u00f0ungur"], AMPMS:["f.h.", "e.h."], DATEFORMATS:["EEEE, d. MMMM y", "d. MMMM y", "d.M.yyyy", "d.M.yyyy"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", 
"HH:mm"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:2};
goog.i18n.DateTimeSymbols_it = {ERAS:["aC", "dC"], ERANAMES:["a.C.", "d.C"], NARROWMONTHS:"G,F,M,A,M,G,L,A,S,O,N,D".split(","), STANDALONENARROWMONTHS:"G,F,M,A,M,G,L,A,S,O,N,D".split(","), MONTHS:"gennaio,febbraio,marzo,aprile,maggio,giugno,luglio,agosto,settembre,ottobre,novembre,dicembre".split(","), STANDALONEMONTHS:"Gennaio,Febbraio,Marzo,Aprile,Maggio,Giugno,Luglio,Agosto,Settembre,Ottobre,Novembre,Dicembre".split(","), SHORTMONTHS:"gen,feb,mar,apr,mag,giu,lug,ago,set,ott,nov,dic".split(","), 
STANDALONESHORTMONTHS:"gen,feb,mar,apr,mag,giu,lug,ago,set,ott,nov,dic".split(","), WEEKDAYS:"domenica,luned\u00ec,marted\u00ec,mercoled\u00ec,gioved\u00ec,venerd\u00ec,sabato".split(","), STANDALONEWEEKDAYS:"Domenica,Luned\u00ec,Marted\u00ec,Mercoled\u00ec,Gioved\u00ec,Venerd\u00ec,Sabato".split(","), SHORTWEEKDAYS:"dom,lun,mar,mer,gio,ven,sab".split(","), STANDALONESHORTWEEKDAYS:"dom,lun,mar,mer,gio,ven,sab".split(","), NARROWWEEKDAYS:"D,L,M,M,G,V,S".split(","), STANDALONENARROWWEEKDAYS:"D,L,M,M,G,V,S".split(","), 
SHORTQUARTERS:["T1", "T2", "T3", "T4"], QUARTERS:["1o trimestre", "2o trimestre", "3o trimestre", "4o trimestre"], AMPMS:["m.", "p."], DATEFORMATS:["EEEE d MMMM y", "dd MMMM y", "dd/MMM/y", "dd/MM/yy"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_iw = {ERAS:["\u05dc\u05e4\u05e0\u05d4\u05f4\u05e1", "\u05dc\u05e1\u05d4\u05f4\u05e0"], ERANAMES:["\u05dc\u05e4\u05e0\u05d9 \u05d4\u05e1\u05e4\u05d9\u05e8\u05d4", "\u05dc\u05e1\u05e4\u05d9\u05e8\u05d4"], NARROWMONTHS:"1,2,3,4,5,6,7,8,9,10,11,12".split(","), STANDALONENARROWMONTHS:"1,2,3,4,5,6,7,8,9,10,11,12".split(","), MONTHS:"\u05d9\u05e0\u05d5\u05d0\u05e8,\u05e4\u05d1\u05e8\u05d5\u05d0\u05e8,\u05de\u05e8\u05e1,\u05d0\u05e4\u05e8\u05d9\u05dc,\u05de\u05d0\u05d9,\u05d9\u05d5\u05e0\u05d9,\u05d9\u05d5\u05dc\u05d9,\u05d0\u05d5\u05d2\u05d5\u05e1\u05d8,\u05e1\u05e4\u05d8\u05de\u05d1\u05e8,\u05d0\u05d5\u05e7\u05d8\u05d5\u05d1\u05e8,\u05e0\u05d5\u05d1\u05de\u05d1\u05e8,\u05d3\u05e6\u05de\u05d1\u05e8".split(","), 
STANDALONEMONTHS:"\u05d9\u05e0\u05d5\u05d0\u05e8,\u05e4\u05d1\u05e8\u05d5\u05d0\u05e8,\u05de\u05e8\u05e1,\u05d0\u05e4\u05e8\u05d9\u05dc,\u05de\u05d0\u05d9,\u05d9\u05d5\u05e0\u05d9,\u05d9\u05d5\u05dc\u05d9,\u05d0\u05d5\u05d2\u05d5\u05e1\u05d8,\u05e1\u05e4\u05d8\u05de\u05d1\u05e8,\u05d0\u05d5\u05e7\u05d8\u05d5\u05d1\u05e8,\u05e0\u05d5\u05d1\u05de\u05d1\u05e8,\u05d3\u05e6\u05de\u05d1\u05e8".split(","), SHORTMONTHS:"\u05d9\u05e0\u05d5,\u05e4\u05d1\u05e8,\u05de\u05e8\u05e1,\u05d0\u05e4\u05e8,\u05de\u05d0\u05d9,\u05d9\u05d5\u05e0,\u05d9\u05d5\u05dc,\u05d0\u05d5\u05d2,\u05e1\u05e4\u05d8,\u05d0\u05d5\u05e7,\u05e0\u05d5\u05d1,\u05d3\u05e6\u05de".split(","), 
STANDALONESHORTMONTHS:"\u05d9\u05e0\u05d5\u05f3,\u05e4\u05d1\u05e8\u05f3,\u05de\u05e8\u05e1,\u05d0\u05e4\u05e8\u05f3,\u05de\u05d0\u05d9,\u05d9\u05d5\u05e0\u05f3,\u05d9\u05d5\u05dc\u05f3,\u05d0\u05d5\u05d2\u05f3,\u05e1\u05e4\u05d8\u05f3,\u05d0\u05d5\u05e7\u05f3,\u05e0\u05d5\u05d1\u05f3,\u05d3\u05e6\u05de\u05f3".split(","), WEEKDAYS:"\u05d9\u05d5\u05dd \u05e8\u05d0\u05e9\u05d5\u05df,\u05d9\u05d5\u05dd \u05e9\u05e0\u05d9,\u05d9\u05d5\u05dd \u05e9\u05dc\u05d9\u05e9\u05d9,\u05d9\u05d5\u05dd \u05e8\u05d1\u05d9\u05e2\u05d9,\u05d9\u05d5\u05dd \u05d7\u05de\u05d9\u05e9\u05d9,\u05d9\u05d5\u05dd \u05e9\u05d9\u05e9\u05d9,\u05d9\u05d5\u05dd \u05e9\u05d1\u05ea".split(","), 
STANDALONEWEEKDAYS:"\u05d9\u05d5\u05dd \u05e8\u05d0\u05e9\u05d5\u05df,\u05d9\u05d5\u05dd \u05e9\u05e0\u05d9,\u05d9\u05d5\u05dd \u05e9\u05dc\u05d9\u05e9\u05d9,\u05d9\u05d5\u05dd \u05e8\u05d1\u05d9\u05e2\u05d9,\u05d9\u05d5\u05dd \u05d7\u05de\u05d9\u05e9\u05d9,\u05d9\u05d5\u05dd \u05e9\u05d9\u05e9\u05d9,\u05d9\u05d5\u05dd \u05e9\u05d1\u05ea".split(","), SHORTWEEKDAYS:"\u05d9\u05d5\u05dd \u05d0\u05f3,\u05d9\u05d5\u05dd \u05d1\u05f3,\u05d9\u05d5\u05dd \u05d2\u05f3,\u05d9\u05d5\u05dd \u05d3\u05f3,\u05d9\u05d5\u05dd \u05d4\u05f3,\u05d9\u05d5\u05dd \u05d5\u05f3,\u05e9\u05d1\u05ea".split(","), 
STANDALONESHORTWEEKDAYS:"\u05d9\u05d5\u05dd \u05d0\u05f3,\u05d9\u05d5\u05dd \u05d1\u05f3,\u05d9\u05d5\u05dd \u05d2\u05f3,\u05d9\u05d5\u05dd \u05d3\u05f3,\u05d9\u05d5\u05dd \u05d4\u05f3,\u05d9\u05d5\u05dd \u05d5\u05f3,\u05e9\u05d1\u05ea".split(","), NARROWWEEKDAYS:"\u05d0,\u05d1,\u05d2,\u05d3,\u05d4,\u05d5,\u05e9".split(","), STANDALONENARROWWEEKDAYS:"\u05d0,\u05d1,\u05d2,\u05d3,\u05d4,\u05d5,\u05e9".split(","), SHORTQUARTERS:["\u05e8\u05d1\u05e2\u05d5\u05df 1", "\u05e8\u05d1\u05e2\u05d5\u05df 2", 
"\u05e8\u05d1\u05e2\u05d5\u05df 3", "\u05e8\u05d1\u05e2\u05d5\u05df 4"], QUARTERS:["\u05e8\u05d1\u05e2\u05d5\u05df 1", "\u05e8\u05d1\u05e2\u05d5\u05df 2", "\u05e8\u05d1\u05e2\u05d5\u05df 3", "\u05e8\u05d1\u05e2\u05d5\u05df 4"], AMPMS:["\u05dc\u05e4\u05e0\u05d4\u05f4\u05e6", "\u05d0\u05d7\u05d4\u05f4\u05e6"], DATEFORMATS:["EEEE, d \u05d1MMMM y", "d \u05d1MMMM y", "d \u05d1MMM yyyy", "dd/MM/yy"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], 
FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_ja = {ERAS:["\u7d00\u5143\u524d", "\u897f\u66a6"], ERANAMES:["\u7d00\u5143\u524d", "\u897f\u66a6"], NARROWMONTHS:"1,2,3,4,5,6,7,8,9,10,11,12".split(","), STANDALONENARROWMONTHS:"1,2,3,4,5,6,7,8,9,10,11,12".split(","), MONTHS:"1\u6708,2\u6708,3\u6708,4\u6708,5\u6708,6\u6708,7\u6708,8\u6708,9\u6708,10\u6708,11\u6708,12\u6708".split(","), STANDALONEMONTHS:"1\u6708,2\u6708,3\u6708,4\u6708,5\u6708,6\u6708,7\u6708,8\u6708,9\u6708,10\u6708,11\u6708,12\u6708".split(","), SHORTMONTHS:"1\u6708,2\u6708,3\u6708,4\u6708,5\u6708,6\u6708,7\u6708,8\u6708,9\u6708,10\u6708,11\u6708,12\u6708".split(","), 
STANDALONESHORTMONTHS:"1\u6708,2\u6708,3\u6708,4\u6708,5\u6708,6\u6708,7\u6708,8\u6708,9\u6708,10\u6708,11\u6708,12\u6708".split(","), WEEKDAYS:"\u65e5\u66dc\u65e5,\u6708\u66dc\u65e5,\u706b\u66dc\u65e5,\u6c34\u66dc\u65e5,\u6728\u66dc\u65e5,\u91d1\u66dc\u65e5,\u571f\u66dc\u65e5".split(","), STANDALONEWEEKDAYS:"\u65e5\u66dc\u65e5,\u6708\u66dc\u65e5,\u706b\u66dc\u65e5,\u6c34\u66dc\u65e5,\u6728\u66dc\u65e5,\u91d1\u66dc\u65e5,\u571f\u66dc\u65e5".split(","), SHORTWEEKDAYS:"\u65e5,\u6708,\u706b,\u6c34,\u6728,\u91d1,\u571f".split(","), 
STANDALONESHORTWEEKDAYS:"\u65e5,\u6708,\u706b,\u6c34,\u6728,\u91d1,\u571f".split(","), NARROWWEEKDAYS:"\u65e5,\u6708,\u706b,\u6c34,\u6728,\u91d1,\u571f".split(","), STANDALONENARROWWEEKDAYS:"\u65e5,\u6708,\u706b,\u6c34,\u6728,\u91d1,\u571f".split(","), SHORTQUARTERS:["Q1", "Q2", "Q3", "Q4"], QUARTERS:["\u7b2c1\u56db\u534a\u671f", "\u7b2c2\u56db\u534a\u671f", "\u7b2c3\u56db\u534a\u671f", "\u7b2c4\u56db\u534a\u671f"], AMPMS:["\u5348\u524d", "\u5348\u5f8c"], DATEFORMATS:["y\u5e74M\u6708d\u65e5EEEE", 
"y\u5e74M\u6708d\u65e5", "yyyy/MM/dd", "yy/MM/dd"], TIMEFORMATS:["H\u6642mm\u5206ss\u79d2 zzzz", "H:mm:ss z", "H:mm:ss", "H:mm"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:2};
goog.i18n.DateTimeSymbols_kn = {ERAS:["BCE", "CE"], ERANAMES:["\u0c88\u0cb8\u0caa\u0cc2\u0cb5\u0cef.", "\u0c95\u0ccd\u0cb0\u0cbf\u0cb8\u0ccd\u0ca4 \u0cb6\u0c95"], NARROWMONTHS:"\u0c9c,\u0cab\u0cc6,\u0cae\u0cbe,\u0c8e,\u0cae\u0cc7,\u0c9c\u0cc2,\u0c9c\u0cc1,\u0c86,\u0cb8\u0cc6,\u0c85,\u0ca8,\u0ca1\u0cbf".split(","), STANDALONENARROWMONTHS:"\u0c9c,\u0cab\u0cc6,\u0cae\u0cbe,\u0c8e,\u0cae\u0cc7,\u0c9c\u0cc2,\u0c9c\u0cc1,\u0c86,\u0cb8\u0cc6,\u0c85,\u0ca8,\u0ca1\u0cbf".split(","), MONTHS:"\u0c9c\u0ca8\u0cb5\u0cb0\u0cc0,\u0cab\u0cc6\u0cac\u0ccd\u0cb0\u0cb5\u0cb0\u0cc0,\u0cae\u0cbe\u0cb0\u0ccd\u0c9a\u0ccd,\u0c8e\u0caa\u0ccd\u0cb0\u0cbf\u0cb2\u0ccd,\u0cae\u0cc6,\u0c9c\u0cc2\u0ca8\u0ccd,\u0c9c\u0cc1\u0cb2\u0cc8,\u0c86\u0c97\u0cb8\u0ccd\u0c9f\u0ccd,\u0cb8\u0caa\u0ccd\u0c9f\u0cc6\u0c82\u0cac\u0cb0\u0ccd,\u0c85\u0c95\u0ccd\u0c9f\u0ccb\u0cac\u0cb0\u0ccd,\u0ca8\u0cb5\u0cc6\u0c82\u0cac\u0cb0\u0ccd,\u0ca1\u0cbf\u0cb8\u0cc6\u0c82\u0cac\u0cb0\u0ccd".split(","), 
STANDALONEMONTHS:"\u0c9c\u0ca8\u0cb5\u0cb0\u0cc0,\u0cab\u0cc6\u0cac\u0ccd\u0cb0\u0cb5\u0cb0\u0cc0,\u0cae\u0cbe\u0cb0\u0ccd\u0c9a\u0ccd,\u0c8e\u0caa\u0ccd\u0cb0\u0cbf\u0cb2\u0ccd,\u0cae\u0cc6,\u0c9c\u0cc2\u0ca8\u0ccd,\u0c9c\u0cc1\u0cb2\u0cc8,\u0c86\u0c97\u0cb8\u0ccd\u0c9f\u0ccd,\u0cb8\u0caa\u0ccd\u0c9f\u0cc6\u0c82\u0cac\u0cb0\u0ccd,\u0c85\u0c95\u0ccd\u0c9f\u0ccb\u0cac\u0cb0\u0ccd,\u0ca8\u0cb5\u0cc6\u0c82\u0cac\u0cb0\u0ccd,\u0ca1\u0cbf\u0cb8\u0cc6\u0c82\u0cac\u0cb0\u0ccd".split(","), SHORTMONTHS:"\u0c9c\u0ca8\u0cb5\u0cb0\u0cc0,\u0cab\u0cc6\u0cac\u0ccd\u0cb0\u0cb5\u0cb0\u0cc0,\u0cae\u0cbe\u0cb0\u0ccd\u0c9a\u0ccd,\u0c8e\u0caa\u0ccd\u0cb0\u0cbf\u0cb2\u0ccd,\u0cae\u0cc6,\u0c9c\u0cc2\u0ca8\u0ccd,\u0c9c\u0cc1\u0cb2\u0cc8,\u0c86\u0c97\u0cb8\u0ccd\u0c9f\u0ccd,\u0cb8\u0caa\u0ccd\u0c9f\u0cc6\u0c82\u0cac\u0cb0\u0ccd,\u0c85\u0c95\u0ccd\u0c9f\u0ccb\u0cac\u0cb0\u0ccd,\u0ca8\u0cb5\u0cc6\u0c82\u0cac\u0cb0\u0ccd,\u0ca1\u0cbf\u0cb8\u0cc6\u0c82\u0cac\u0cb0\u0ccd".split(","), 
STANDALONESHORTMONTHS:"\u0c9c\u0ca8\u0cb5\u0cb0\u0cc0,\u0cab\u0cc6\u0cac\u0ccd\u0cb0\u0cb5\u0cb0\u0cc0,\u0cae\u0cbe\u0cb0\u0ccd\u0c9a\u0ccd,\u0c8e\u0caa\u0ccd\u0cb0\u0cbf\u0cb2\u0ccd,\u0cae\u0cc6,\u0c9c\u0cc2\u0ca8\u0ccd,\u0c9c\u0cc1\u0cb2\u0cc8,\u0c86\u0c97\u0cb8\u0ccd\u0c9f\u0ccd,\u0cb8\u0caa\u0ccd\u0c9f\u0cc6\u0c82\u0cac\u0cb0\u0ccd,\u0c85\u0c95\u0ccd\u0c9f\u0ccb\u0cac\u0cb0\u0ccd,\u0ca8\u0cb5\u0cc6\u0c82\u0cac\u0cb0\u0ccd,\u0ca1\u0cbf\u0cb8\u0cc6\u0c82\u0cac\u0cb0\u0ccd".split(","), WEEKDAYS:"\u0cb0\u0cb5\u0cbf\u0cb5\u0cbe\u0cb0,\u0cb8\u0ccb\u0cae\u0cb5\u0cbe\u0cb0,\u0cae\u0c82\u0c97\u0cb3\u0cb5\u0cbe\u0cb0,\u0cac\u0cc1\u0ca7\u0cb5\u0cbe\u0cb0,\u0c97\u0cc1\u0cb0\u0cc1\u0cb5\u0cbe\u0cb0,\u0cb6\u0cc1\u0c95\u0ccd\u0cb0\u0cb5\u0cbe\u0cb0,\u0cb6\u0ca8\u0cbf\u0cb5\u0cbe\u0cb0".split(","), 
STANDALONEWEEKDAYS:"\u0cb0\u0cb5\u0cbf\u0cb5\u0cbe\u0cb0,\u0cb8\u0ccb\u0cae\u0cb5\u0cbe\u0cb0,\u0cae\u0c82\u0c97\u0cb3\u0cb5\u0cbe\u0cb0,\u0cac\u0cc1\u0ca7\u0cb5\u0cbe\u0cb0,\u0c97\u0cc1\u0cb0\u0cc1\u0cb5\u0cbe\u0cb0,\u0cb6\u0cc1\u0c95\u0ccd\u0cb0\u0cb5\u0cbe\u0cb0,\u0cb6\u0ca8\u0cbf\u0cb5\u0cbe\u0cb0".split(","), SHORTWEEKDAYS:"\u0cb0.,\u0cb8\u0ccb.,\u0cae\u0c82.,\u0cac\u0cc1.,\u0c97\u0cc1.,\u0cb6\u0cc1.,\u0cb6\u0ca8\u0cbf.".split(","), STANDALONESHORTWEEKDAYS:"\u0cb0.,\u0cb8\u0ccb.,\u0cae\u0c82.,\u0cac\u0cc1.,\u0c97\u0cc1.,\u0cb6\u0cc1.,\u0cb6\u0ca8\u0cbf.".split(","), 
NARROWWEEKDAYS:"\u0cb0,\u0cb8\u0ccb,\u0cae\u0c82,\u0cac\u0cc1,\u0c97\u0cc1,\u0cb6\u0cc1,\u0cb6".split(","), STANDALONENARROWWEEKDAYS:"\u0cb0,\u0cb8\u0ccb,\u0cae\u0c82,\u0cac\u0cc1,\u0c97\u0cc1,\u0cb6\u0cc1,\u0cb6".split(","), SHORTQUARTERS:["\u0c92\u0c82\u0ca6\u0cc1 1", "\u0c8e\u0cb0\u0ca1\u0cc1 2", "\u0cae\u0cc2\u0cb0\u0cc1 3", "\u0ca8\u0cbe\u0cb2\u0cc3\u0c95 4"], QUARTERS:["\u0c92\u0c82\u0ca6\u0cc1 1", "\u0c8e\u0cb0\u0ca1\u0cc1 2", "\u0cae\u0cc2\u0cb0\u0cc1 3", "\u0ca8\u0cbe\u0cb2\u0cc3\u0c95 4"], 
AMPMS:["am", "pm"], DATEFORMATS:["EEEE d MMMM y", "d MMMM y", "d MMM y", "d-M-yy"], TIMEFORMATS:["hh:mm:ss a zzzz", "hh:mm:ss a z", "hh:mm:ss a", "hh:mm a"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[6, 6], FIRSTWEEKCUTOFFDAY:2};
goog.i18n.DateTimeSymbols_ko = {ERAS:["\uae30\uc6d0\uc804", "\uc11c\uae30"], ERANAMES:["\uc11c\ub825\uae30\uc6d0\uc804", "\uc11c\ub825\uae30\uc6d0"], NARROWMONTHS:"1\uc6d4,2\uc6d4,3\uc6d4,4\uc6d4,5\uc6d4,6\uc6d4,7\uc6d4,8\uc6d4,9\uc6d4,10\uc6d4,11\uc6d4,12\uc6d4".split(","), STANDALONENARROWMONTHS:"1\uc6d4,2\uc6d4,3\uc6d4,4\uc6d4,5\uc6d4,6\uc6d4,7\uc6d4,8\uc6d4,9\uc6d4,10\uc6d4,11\uc6d4,12\uc6d4".split(","), MONTHS:"1\uc6d4,2\uc6d4,3\uc6d4,4\uc6d4,5\uc6d4,6\uc6d4,7\uc6d4,8\uc6d4,9\uc6d4,10\uc6d4,11\uc6d4,12\uc6d4".split(","), 
STANDALONEMONTHS:"1\uc6d4,2\uc6d4,3\uc6d4,4\uc6d4,5\uc6d4,6\uc6d4,7\uc6d4,8\uc6d4,9\uc6d4,10\uc6d4,11\uc6d4,12\uc6d4".split(","), SHORTMONTHS:"1\uc6d4,2\uc6d4,3\uc6d4,4\uc6d4,5\uc6d4,6\uc6d4,7\uc6d4,8\uc6d4,9\uc6d4,10\uc6d4,11\uc6d4,12\uc6d4".split(","), STANDALONESHORTMONTHS:"1\uc6d4,2\uc6d4,3\uc6d4,4\uc6d4,5\uc6d4,6\uc6d4,7\uc6d4,8\uc6d4,9\uc6d4,10\uc6d4,11\uc6d4,12\uc6d4".split(","), WEEKDAYS:"\uc77c\uc694\uc77c,\uc6d4\uc694\uc77c,\ud654\uc694\uc77c,\uc218\uc694\uc77c,\ubaa9\uc694\uc77c,\uae08\uc694\uc77c,\ud1a0\uc694\uc77c".split(","), 
STANDALONEWEEKDAYS:"\uc77c\uc694\uc77c,\uc6d4\uc694\uc77c,\ud654\uc694\uc77c,\uc218\uc694\uc77c,\ubaa9\uc694\uc77c,\uae08\uc694\uc77c,\ud1a0\uc694\uc77c".split(","), SHORTWEEKDAYS:"\uc77c,\uc6d4,\ud654,\uc218,\ubaa9,\uae08,\ud1a0".split(","), STANDALONESHORTWEEKDAYS:"\uc77c,\uc6d4,\ud654,\uc218,\ubaa9,\uae08,\ud1a0".split(","), NARROWWEEKDAYS:"\uc77c,\uc6d4,\ud654,\uc218,\ubaa9,\uae08,\ud1a0".split(","), STANDALONENARROWWEEKDAYS:"\uc77c,\uc6d4,\ud654,\uc218,\ubaa9,\uae08,\ud1a0".split(","), SHORTQUARTERS:["1\ubd84\uae30", 
"2\ubd84\uae30", "3\ubd84\uae30", "4\ubd84\uae30"], QUARTERS:["\uc81c 1/4\ubd84\uae30", "\uc81c 2/4\ubd84\uae30", "\uc81c 3/4\ubd84\uae30", "\uc81c 4/4\ubd84\uae30"], AMPMS:["\uc624\uc804", "\uc624\ud6c4"], DATEFORMATS:["y\ub144 M\uc6d4 d\uc77c EEEE", "y\ub144 M\uc6d4 d\uc77c", "yyyy. M. d.", "yy. M. d."], TIMEFORMATS:["a h\uc2dc m\ubd84 s\ucd08 zzzz", "a h\uc2dc m\ubd84 s\ucd08 z", "a h:mm:ss", "a h:mm"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:2};
goog.i18n.DateTimeSymbols_ln = {ERAS:["libos\u00f3 ya Y.-K.", "nsima ya Y.-K."], ERANAMES:["libos\u00f3 ya Y.-K.", "nsima ya Y.-K."], NARROWMONTHS:"1,2,3,4,5,6,7,8,9,10,11,12".split(","), STANDALONENARROWMONTHS:"1,2,3,4,5,6,7,8,9,10,11,12".split(","), MONTHS:"s\u00e1nz\u00e1 ya yambo,s\u00e1nz\u00e1 ya m\u00edbal\u00e9,s\u00e1nz\u00e1 ya m\u00eds\u00e1to,s\u00e1nz\u00e1 ya m\u00ednei,s\u00e1nz\u00e1 ya m\u00edt\u00e1no,s\u00e1nz\u00e1 ya mot\u00f3b\u00e1,s\u00e1nz\u00e1 ya nsambo,s\u00e1nz\u00e1 ya mwambe,s\u00e1nz\u00e1 ya libwa,s\u00e1nz\u00e1 ya z\u00f3mi,s\u00e1nz\u00e1 ya z\u00f3mi na m\u0254\u030ck\u0254\u0301,s\u00e1nz\u00e1 ya z\u00f3mi na m\u00edbal\u00e9".split(","), 
STANDALONEMONTHS:"s\u00e1nz\u00e1 ya yambo,s\u00e1nz\u00e1 ya m\u00edbal\u00e9,s\u00e1nz\u00e1 ya m\u00eds\u00e1to,s\u00e1nz\u00e1 ya m\u00ednei,s\u00e1nz\u00e1 ya m\u00edt\u00e1no,s\u00e1nz\u00e1 ya mot\u00f3b\u00e1,s\u00e1nz\u00e1 ya nsambo,s\u00e1nz\u00e1 ya mwambe,s\u00e1nz\u00e1 ya libwa,s\u00e1nz\u00e1 ya z\u00f3mi,s\u00e1nz\u00e1 ya z\u00f3mi na m\u0254\u030ck\u0254\u0301,s\u00e1nz\u00e1 ya z\u00f3mi na m\u00edbal\u00e9".split(","), SHORTMONTHS:"s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12".split(","), 
STANDALONESHORTMONTHS:"s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12".split(","), WEEKDAYS:"eyenga,mok\u0254l\u0254 ya libos\u00f3,mok\u0254l\u0254 ya m\u00edbal\u00e9,mok\u0254l\u0254 ya m\u00eds\u00e1to,mok\u0254l\u0254 ya m\u00edn\u00e9i,mok\u0254l\u0254 ya m\u00edt\u00e1no,mp\u0254\u0301s\u0254".split(","), STANDALONEWEEKDAYS:"eyenga,mok\u0254l\u0254 ya libos\u00f3,mok\u0254l\u0254 ya m\u00edbal\u00e9,mok\u0254l\u0254 ya m\u00eds\u00e1to,mok\u0254l\u0254 ya m\u00edn\u00e9i,mok\u0254l\u0254 ya m\u00edt\u00e1no,mp\u0254\u0301s\u0254".split(","), 
SHORTWEEKDAYS:"eye,m1,m2,m3,m4,m5,mps".split(","), STANDALONESHORTWEEKDAYS:"eye,m1,m2,m3,m4,m5,mps".split(","), NARROWWEEKDAYS:"1,2,3,4,5,6,7".split(","), STANDALONENARROWWEEKDAYS:"1,2,3,4,5,6,7".split(","), SHORTQUARTERS:["SM1", "SM2", "SM3", "SM4"], QUARTERS:["s\u00e1nz\u00e1 m\u00eds\u00e1to ya yambo", "s\u00e1nz\u00e1 m\u00eds\u00e1to ya m\u00edbal\u00e9", "s\u00e1nz\u00e1 m\u00eds\u00e1to ya m\u00eds\u00e1to", "s\u00e1nz\u00e1 m\u00eds\u00e1to ya m\u00ednei"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE, y MMMM dd", 
"y MMMM d", "y MMM d", "yy/MM/dd"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_lt = {ERAS:["pr. Kr.", "po Kr."], ERANAMES:["prie\u0161 Krist\u0173", "po Kristaus"], NARROWMONTHS:"S,V,K,B,G,B,L,R,R,S,L,G".split(","), STANDALONENARROWMONTHS:"S,V,K,B,G,B,L,R,R,S,L,G".split(","), MONTHS:"sausis,vasaris,kovas,balandis,gegu\u017e\u0117,bir\u017eelis,liepa,rugpj\u016btis,rugs\u0117jis,spalis,lapkritis,gruodis".split(","), STANDALONEMONTHS:"Sausis,Vasaris,Kovas,Balandis,Gegu\u017e\u0117,Bir\u017eelis,Liepa,Rugpj\u016btis,Rugs\u0117jis,Spalis,Lapkritis,Gruodis".split(","), 
SHORTMONTHS:"Sau,Vas,Kov,Bal,Geg,Bir,Lie,Rgp,Rgs,Spl,Lap,Grd".split(","), STANDALONESHORTMONTHS:"Saus.,Vas.,kov,Bal.,Geg.,Bir.,Liep.,Rugpj.,Rugs.,Spal.,Lapkr.,Gruod.".split(","), WEEKDAYS:"sekmadienis,pirmadienis,antradienis,tre\u010diadienis,ketvirtadienis,penktadienis,\u0161e\u0161tadienis".split(","), STANDALONEWEEKDAYS:"sekmadienis,pirmadienis,antradienis,tre\u010diadienis,ketvirtadienis,penktadienis,\u0161e\u0161tadienis".split(","), SHORTWEEKDAYS:"Sk,Pr,An,Tr,Kt,Pn,\u0160t".split(","), STANDALONESHORTWEEKDAYS:"Sk,Pi,A,T,K,Pe,\u0160".split(","), 
NARROWWEEKDAYS:"S,P,A,T,K,P,\u0160".split(","), STANDALONENARROWWEEKDAYS:"S,P,A,T,K,P,\u0160".split(","), SHORTQUARTERS:["K1", "K2", "K3", "K4"], QUARTERS:["pirmas ketvirtis", "antras ketvirtis", "tre\u010dias ketvirtis", "ketvirtas ketvirtis"], AMPMS:["prie\u0161piet", "popiet"], DATEFORMATS:["y 'm'. MMMM d 'd'.,EEEE", "y 'm'. MMMM d 'd'.", "yyyy.MM.dd", "yyyy-MM-dd"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_lv = {ERAS:["p.m.\u0113.", "m.\u0113."], ERANAMES:["pirms m\u016bsu \u0113ras", "m\u016bsu \u0113r\u0101"], NARROWMONTHS:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), STANDALONENARROWMONTHS:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), MONTHS:"janv\u0101ris,febru\u0101ris,marts,apr\u012blis,maijs,j\u016bnijs,j\u016blijs,augusts,septembris,oktobris,novembris,decembris".split(","), STANDALONEMONTHS:"janv\u0101ris,febru\u0101ris,marts,apr\u012blis,maijs,j\u016bnijs,j\u016blijs,augusts,septembris,oktobris,novembris,decembris".split(","), 
SHORTMONTHS:"janv.,febr.,marts,apr.,maijs,j\u016bn.,j\u016bl.,aug.,sept.,okt.,nov.,dec.".split(","), STANDALONESHORTMONTHS:"janv.,febr.,marts,apr.,maijs,j\u016bn.,j\u016bl.,aug.,sept.,okt.,nov.,dec.".split(","), WEEKDAYS:"sv\u0113tdiena,pirmdiena,otrdiena,tre\u0161diena,ceturtdiena,piektdiena,sestdiena".split(","), STANDALONEWEEKDAYS:"sv\u0113tdiena,pirmdiena,otrdiena,tre\u0161diena,ceturtdiena,piektdiena,sestdiena".split(","), SHORTWEEKDAYS:"Sv,Pr,Ot,Tr,Ce,Pk,Se".split(","), STANDALONESHORTWEEKDAYS:"Sv,Pr,Ot,Tr,Ce,Pk,Se".split(","), 
NARROWWEEKDAYS:"S,P,O,T,C,P,S".split(","), STANDALONENARROWWEEKDAYS:"S,P,O,T,C,P,S".split(","), SHORTQUARTERS:["C1", "C2", "C3", "C4"], QUARTERS:["1. ceturksnis", "2. ceturksnis", "3. ceturksnis", "4. ceturksnis"], AMPMS:["priek\u0161pusdien\u0101", "p\u0113cpusdien\u0101"], DATEFORMATS:["EEEE, y. 'gada' d. MMMM", "y. 'gada' d. MMMM", "y. 'gada' d. MMM", "dd.MM.yy"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_ml = {ERAS:["\u0d15\u0d4d\u0d30\u0d3f.\u0d2e\u0d42", "\u0d15\u0d4d\u0d30\u0d3f.\u0d2a\u0d3f."], ERANAMES:["\u0d15\u0d4d\u0d30\u0d3f\u0d38\u0d4d\u0d24\u0d41\u0d35\u0d3f\u0d28\u0d41\u0d4d \u0d2e\u0d41\u0d2e\u0d4d\u0d2a\u0d4d\u200c", "\u0d15\u0d4d\u0d30\u0d3f\u0d38\u0d4d\u0d24\u0d41\u0d35\u0d3f\u0d28\u0d4d \u0d2a\u0d3f\u0d28\u0d4d\u200d\u0d2a\u0d4d"], NARROWMONTHS:"\u0d1c,\u0d2b\u0d46,\u0d2e\u0d3e,\u0d0f,\u0d2e\u0d47,\u0d1c\u0d42,\u0d1c\u0d42,\u0d13,\u0d38\u0d46,\u0d12,\u0d28,\u0d21\u0d3f".split(","), 
STANDALONENARROWMONTHS:"\u0d1c,\u0d2b\u0d46,\u0d2e\u0d3e,\u0d0f,\u0d2e\u0d47,\u0d1c\u0d42,\u0d1c\u0d42,\u0d13,\u0d38\u0d46,\u0d12,\u0d28,\u0d21\u0d3f".split(","), MONTHS:"\u0d1c\u0d28\u0d41\u0d35\u0d30\u0d3f,\u0d2b\u0d46\u0d2c\u0d4d\u0d30\u0d41\u0d35\u0d30\u0d3f,\u0d2e\u0d3e\u0d30\u0d4d\u200d\u0d1a\u0d4d\u0d1a\u0d4d,\u0d0f\u0d2a\u0d4d\u0d30\u0d3f\u0d32\u0d4d\u200d,\u0d2e\u0d47\u0d2f\u0d4d,\u0d1c\u0d42\u0d23\u0d4d\u200d,\u0d1c\u0d42\u0d32\u0d48,\u0d06\u0d17\u0d38\u0d4d\u0d31\u0d4d\u0d31\u0d4d,\u0d38\u0d46\u0d2a\u0d4d\u0d31\u0d4d\u0d31\u0d02\u0d2c\u0d30\u0d4d\u200d,\u0d12\u0d15\u0d4d\u0d1f\u0d4b\u0d2c\u0d30\u0d4d\u200d,\u0d28\u0d35\u0d02\u0d2c\u0d30\u0d4d\u200d,\u0d21\u0d3f\u0d38\u0d02\u0d2c\u0d30\u0d4d\u200d".split(","), 
STANDALONEMONTHS:"\u0d1c\u0d28\u0d41\u0d35\u0d30\u0d3f,\u0d2b\u0d46\u0d2c\u0d4d\u0d30\u0d41\u0d35\u0d30\u0d3f,\u0d2e\u0d3e\u0d30\u0d4d\u200d\u0d1a\u0d4d\u0d1a\u0d4d,\u0d0f\u0d2a\u0d4d\u0d30\u0d3f\u0d32\u0d4d\u200d,\u0d2e\u0d47\u0d2f\u0d4d,\u0d1c\u0d42\u0d23\u0d4d\u200d,\u0d1c\u0d42\u0d32\u0d48,\u0d06\u0d17\u0d38\u0d4d\u0d31\u0d4d\u0d31\u0d4d,\u0d38\u0d46\u0d2a\u0d4d\u0d31\u0d4d\u0d31\u0d02\u0d2c\u0d30\u0d4d\u200d,\u0d12\u0d15\u0d4d\u0d1f\u0d4b\u0d2c\u0d30\u0d4d\u200d,\u0d28\u0d35\u0d02\u0d2c\u0d30\u0d4d\u200d,\u0d21\u0d3f\u0d38\u0d02\u0d2c\u0d30\u0d4d\u200d".split(","), 
SHORTMONTHS:"\u0d1c\u0d28\u0d41,\u0d2b\u0d46\u0d2c\u0d4d\u0d30\u0d41,\u0d2e\u0d3e\u0d30\u0d4d\u200d,\u0d0f\u0d2a\u0d4d\u0d30\u0d3f,\u0d2e\u0d47\u0d2f\u0d4d,\u0d1c\u0d42\u0d23\u0d4d\u200d,\u0d1c\u0d42\u0d32\u0d48,\u0d13\u0d17,\u0d38\u0d46\u0d2a\u0d4d\u0d31\u0d4d\u0d31\u0d02,\u0d12\u0d15\u0d4d\u0d1f\u0d4b,\u0d28\u0d35\u0d02,\u0d21\u0d3f\u0d38\u0d02".split(","), STANDALONESHORTMONTHS:"\u0d1c\u0d28\u0d41,\u0d2b\u0d46\u0d2c\u0d4d\u0d30\u0d41,\u0d2e\u0d3e\u0d30\u0d4d\u200d,\u0d0f\u0d2a\u0d4d\u0d30\u0d3f,\u0d2e\u0d47\u0d2f\u0d4d,\u0d1c\u0d42\u0d23\u0d4d\u200d,\u0d1c\u0d42\u0d32\u0d48,\u0d13\u0d17,\u0d38\u0d46\u0d2a\u0d4d\u0d31\u0d4d\u0d31\u0d02,\u0d12\u0d15\u0d4d\u0d1f\u0d4b,\u0d28\u0d35\u0d02,\u0d21\u0d3f\u0d38\u0d02".split(","), 
WEEKDAYS:"\u0d1e\u0d3e\u0d2f\u0d31\u0d3e\u0d34\u0d4d\u0d1a,\u0d24\u0d3f\u0d19\u0d4d\u0d15\u0d33\u0d3e\u0d34\u0d4d\u0d1a,\u0d1a\u0d4a\u0d35\u0d4d\u0d35\u0d3e\u0d34\u0d4d\u0d1a,\u0d2c\u0d41\u0d27\u0d28\u0d3e\u0d34\u0d4d\u0d1a,\u0d35\u0d4d\u0d2f\u0d3e\u0d34\u0d3e\u0d34\u0d4d\u0d1a,\u0d35\u0d46\u0d33\u0d4d\u0d33\u0d3f\u0d2f\u0d3e\u0d34\u0d4d\u0d1a,\u0d36\u0d28\u0d3f\u0d2f\u0d3e\u0d34\u0d4d\u0d1a".split(","), STANDALONEWEEKDAYS:"\u0d1e\u0d3e\u0d2f\u0d31\u0d3e\u0d34\u0d4d\u0d1a,\u0d24\u0d3f\u0d19\u0d4d\u0d15\u0d33\u0d3e\u0d34\u0d4d\u0d1a,\u0d1a\u0d4a\u0d35\u0d4d\u0d35\u0d3e\u0d34\u0d4d\u0d1a,\u0d2c\u0d41\u0d27\u0d28\u0d3e\u0d34\u0d4d\u0d1a,\u0d35\u0d4d\u0d2f\u0d3e\u0d34\u0d3e\u0d34\u0d4d\u0d1a,\u0d35\u0d46\u0d33\u0d4d\u0d33\u0d3f\u0d2f\u0d3e\u0d34\u0d4d\u0d1a,\u0d36\u0d28\u0d3f\u0d2f\u0d3e\u0d34\u0d4d\u0d1a".split(","), 
SHORTWEEKDAYS:"\u0d1e\u0d3e\u0d2f\u0d30\u0d4d\u200d,\u0d24\u0d3f\u0d19\u0d4d\u0d15\u0d33\u0d4d\u200d,\u0d1a\u0d4a\u0d35\u0d4d\u0d35,\u0d2c\u0d41\u0d27\u0d28\u0d4d\u200d,\u0d35\u0d4d\u0d2f\u0d3e\u0d34\u0d02,\u0d35\u0d46\u0d33\u0d4d\u0d33\u0d3f,\u0d36\u0d28\u0d3f".split(","), STANDALONESHORTWEEKDAYS:"\u0d1e\u0d3e\u0d2f\u0d30\u0d4d\u200d,\u0d24\u0d3f\u0d19\u0d4d\u0d15\u0d33\u0d4d\u200d,\u0d1a\u0d4a\u0d35\u0d4d\u0d35,\u0d2c\u0d41\u0d27\u0d28\u0d4d\u200d,\u0d35\u0d4d\u0d2f\u0d3e\u0d34\u0d02,\u0d35\u0d46\u0d33\u0d4d\u0d33\u0d3f,\u0d36\u0d28\u0d3f".split(","), 
NARROWWEEKDAYS:"\u0d1e\u0d3e,\u0d24\u0d3f,\u0d1a\u0d4a,\u0d2c\u0d41,\u0d35\u0d4d\u0d2f\u0d3e,\u0d35\u0d46,\u0d36".split(","), STANDALONENARROWWEEKDAYS:"\u0d1e\u0d3e,\u0d24\u0d3f,\u0d1a\u0d4a,\u0d2c\u0d41,\u0d35\u0d4d\u0d2f\u0d3e,\u0d35\u0d46,\u0d36".split(","), SHORTQUARTERS:["Q1", "Q2", "Q3", "Q4"], QUARTERS:["\u0d12\u0d28\u0d4d\u0d28\u0d3e\u0d02 \u0d2a\u0d3e\u0d26\u0d02", "\u0d30\u0d23\u0d4d\u0d1f\u0d3e\u0d02 \u0d2a\u0d3e\u0d26\u0d02", "\u0d2e\u0d42\u0d28\u0d4d\u0d28\u0d3e\u0d02 \u0d2a\u0d3e\u0d26\u0d02", 
"\u0d28\u0d3e\u0d32\u0d3e\u0d02 \u0d2a\u0d3e\u0d26\u0d02"], AMPMS:["\u0d30\u0d3e\u0d35\u0d3f\u0d32\u0d46", "\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02"], DATEFORMATS:["y, MMMM d, EEEE", "y, MMMM d", "y, MMM d", "dd/MM/yy"], TIMEFORMATS:["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[6, 6], FIRSTWEEKCUTOFFDAY:2};
goog.i18n.DateTimeSymbols_mo = {ERAS:["\u00ee.Hr.", "d.Hr."], ERANAMES:["\u00eenainte de Hristos", "dup\u0103 Hristos"], NARROWMONTHS:"I,F,M,A,M,I,I,A,S,O,N,D".split(","), STANDALONENARROWMONTHS:"I,F,M,A,M,I,I,A,S,O,N,D".split(","), MONTHS:"ianuarie,februarie,martie,aprilie,mai,iunie,iulie,august,septembrie,octombrie,noiembrie,decembrie".split(","), STANDALONEMONTHS:"ianuarie,februarie,martie,aprilie,mai,iunie,iulie,august,septembrie,octombrie,noiembrie,decembrie".split(","), SHORTMONTHS:"ian.,feb.,mar.,apr.,mai,iun.,iul.,aug.,sept.,oct.,nov.,dec.".split(","), 
STANDALONESHORTMONTHS:"ian.,feb.,mar.,apr.,mai,iun.,iul.,aug.,sept.,oct.,nov.,dec.".split(","), WEEKDAYS:"duminic\u0103,luni,mar\u021bi,miercuri,joi,vineri,s\u00e2mb\u0103t\u0103".split(","), STANDALONEWEEKDAYS:"duminic\u0103,luni,mar\u021bi,miercuri,joi,vineri,s\u00e2mb\u0103t\u0103".split(","), SHORTWEEKDAYS:"Du,Lu,Ma,Mi,Jo,Vi,S\u00e2".split(","), STANDALONESHORTWEEKDAYS:"Du,Lu,Ma,Mi,Jo,Vi,S\u00e2".split(","), NARROWWEEKDAYS:"D,L,M,M,J,V,S".split(","), STANDALONENARROWWEEKDAYS:"D,L,M,M,J,V,S".split(","), 
SHORTQUARTERS:["trim. I", "trim. II", "trim. III", "trim. IV"], QUARTERS:["trimestrul I", "trimestrul al II-lea", "trimestrul al III-lea", "trimestrul al IV-lea"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE, d MMMM y", "d MMMM y", "dd.MM.yyyy", "dd.MM.yyyy"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_mr = {ERAS:["\u0908.\u0938.\u092a\u0942.", "\u0908.\u0938."], ERANAMES:["\u0908\u0938\u0935\u0940\u0938\u0928\u092a\u0942\u0930\u094d\u0935", "\u0908\u0938\u0935\u0940\u0938\u0928"], NARROWMONTHS:"\u091c\u093e,\u092b\u0947,\u092e\u093e,\u090f,\u092e\u0947,\u091c\u0942,\u091c\u0941,\u0911,\u0938,\u0911,\u0928\u094b,\u0921\u093f".split(","), STANDALONENARROWMONTHS:"\u091c\u093e,\u092b\u0947,\u092e\u093e,\u090f,\u092e\u0947,\u091c\u0942,\u091c\u0941,\u0911,\u0938,\u0911,\u0928\u094b,\u0921\u093f".split(","), 
MONTHS:"\u091c\u093e\u0928\u0947\u0935\u093e\u0930\u0940,\u092b\u0947\u092c\u094d\u0930\u0941\u0935\u093e\u0930\u0940,\u092e\u093e\u0930\u094d\u091a,\u090f\u092a\u094d\u0930\u093f\u0932,\u092e\u0947,\u091c\u0942\u0928,\u091c\u0941\u0932\u0948,\u0911\u0917\u0938\u094d\u091f,\u0938\u092a\u094d\u091f\u0947\u0902\u092c\u0930,\u0911\u0915\u094d\u091f\u094b\u092c\u0930,\u0928\u094b\u0935\u094d\u0939\u0947\u0902\u092c\u0930,\u0921\u093f\u0938\u0947\u0902\u092c\u0930".split(","), STANDALONEMONTHS:"\u091c\u093e\u0928\u0947\u0935\u093e\u0930\u0940,\u092b\u0947\u092c\u094d\u0930\u0941\u0935\u093e\u0930\u0940,\u092e\u093e\u0930\u094d\u091a,\u090f\u092a\u094d\u0930\u093f\u0932,\u092e\u0947,\u091c\u0942\u0928,\u091c\u0941\u0932\u0948,\u0911\u0917\u0938\u094d\u091f,\u0938\u092a\u094d\u091f\u0947\u0902\u092c\u0930,\u0911\u0915\u094d\u091f\u094b\u092c\u0930,\u0928\u094b\u0935\u094d\u0939\u0947\u0902\u092c\u0930,\u0921\u093f\u0938\u0947\u0902\u092c\u0930".split(","), 
SHORTMONTHS:"\u091c\u093e\u0928\u0947\u0935\u093e\u0930\u0940,\u092b\u0947\u092c\u094d\u0930\u0941\u0935\u093e\u0930\u0940,\u092e\u093e\u0930\u094d\u091a,\u090f\u092a\u094d\u0930\u093f\u0932,\u092e\u0947,\u091c\u0942\u0928,\u091c\u0941\u0932\u0948,\u0911\u0917\u0938\u094d\u091f,\u0938\u092a\u094d\u091f\u0947\u0902\u092c\u0930,\u0911\u0915\u094d\u091f\u094b\u092c\u0930,\u0928\u094b\u0935\u094d\u0939\u0947\u0902\u092c\u0930,\u0921\u093f\u0938\u0947\u0902\u092c\u0930".split(","), STANDALONESHORTMONTHS:"\u091c\u093e\u0928\u0947\u0935\u093e\u0930\u0940,\u092b\u0947\u092c\u094d\u0930\u0941\u0935\u093e\u0930\u0940,\u092e\u093e\u0930\u094d\u091a,\u090f\u092a\u094d\u0930\u093f\u0932,\u092e\u0947,\u091c\u0942\u0928,\u091c\u0941\u0932\u0948,\u0911\u0917\u0938\u094d\u091f,\u0938\u092a\u094d\u091f\u0947\u0902\u092c\u0930,\u0911\u0915\u094d\u091f\u094b\u092c\u0930,\u0928\u094b\u0935\u094d\u0939\u0947\u0902\u092c\u0930,\u0921\u093f\u0938\u0947\u0902\u092c\u0930".split(","), 
WEEKDAYS:"\u0930\u0935\u093f\u0935\u093e\u0930,\u0938\u094b\u092e\u0935\u093e\u0930,\u092e\u0902\u0917\u0933\u0935\u093e\u0930,\u092c\u0941\u0927\u0935\u093e\u0930,\u0917\u0941\u0930\u0941\u0935\u093e\u0930,\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930,\u0936\u0928\u093f\u0935\u093e\u0930".split(","), STANDALONEWEEKDAYS:"\u0930\u0935\u093f\u0935\u093e\u0930,\u0938\u094b\u092e\u0935\u093e\u0930,\u092e\u0902\u0917\u0933\u0935\u093e\u0930,\u092c\u0941\u0927\u0935\u093e\u0930,\u0917\u0941\u0930\u0941\u0935\u093e\u0930,\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930,\u0936\u0928\u093f\u0935\u093e\u0930".split(","), 
SHORTWEEKDAYS:"\u0930\u0935\u093f,\u0938\u094b\u092e,\u092e\u0902\u0917\u0933,\u092c\u0941\u0927,\u0917\u0941\u0930\u0941,\u0936\u0941\u0915\u094d\u0930,\u0936\u0928\u093f".split(","), STANDALONESHORTWEEKDAYS:"\u0930\u0935\u093f,\u0938\u094b\u092e,\u092e\u0902\u0917\u0933,\u092c\u0941\u0927,\u0917\u0941\u0930\u0941,\u0936\u0941\u0915\u094d\u0930,\u0936\u0928\u093f".split(","), NARROWWEEKDAYS:"\u0930,\u0938\u094b,\u092e\u0902,\u092c\u0941,\u0917\u0941,\u0936\u0941,\u0936".split(","), STANDALONENARROWWEEKDAYS:"\u0930,\u0938\u094b,\u092e\u0902,\u092c\u0941,\u0917\u0941,\u0936\u0941,\u0936".split(","), 
SHORTQUARTERS:["Q1", "Q2", "Q3", "Q4"], QUARTERS:["\u092a\u094d\u0930\u0925\u092e \u0924\u093f\u092e\u093e\u0939\u0940", "\u0926\u094d\u0935\u093f\u0924\u0940\u092f \u0924\u093f\u092e\u093e\u0939\u0940", "\u0924\u0943\u0924\u0940\u092f \u0924\u093f\u092e\u093e\u0939\u0940", "\u091a\u0924\u0941\u0930\u094d\u0925 \u0924\u093f\u092e\u093e\u0939\u0940"], AMPMS:["am", "pm"], DATEFORMATS:["EEEE d MMMM y", "d MMMM y", "d MMM y", "d-M-yy"], TIMEFORMATS:["h-mm-ss a zzzz", "h-mm-ss a z", "h-mm-ss a", "h-mm a"], 
FIRSTDAYOFWEEK:6, WEEKENDRANGE:[6, 6], FIRSTWEEKCUTOFFDAY:2};
goog.i18n.DateTimeSymbols_ms = {ERAS:["S.M.", "T.M."], ERANAMES:["S.M.", "T.M."], NARROWMONTHS:"1,2,3,4,5,6,7,8,9,10,11,12".split(","), STANDALONENARROWMONTHS:"1,2,3,4,5,6,7,8,9,10,11,12".split(","), MONTHS:"Januari,Februari,Mac,April,Mei,Jun,Julai,Ogos,September,Oktober,November,Disember".split(","), STANDALONEMONTHS:"Januari,Februari,Mac,April,Mei,Jun,Julai,Ogos,September,Oktober,November,Disember".split(","), SHORTMONTHS:"Jan,Feb,Mac,Apr,Mei,Jun,Jul,Ogos,Sep,Okt,Nov,Dis".split(","), STANDALONESHORTMONTHS:"Jan,Feb,Mac,Apr,Mei,Jun,Jul,Ogos,Sep,Okt,Nov,Dis".split(","), 
WEEKDAYS:"Ahad,Isnin,Selasa,Rabu,Khamis,Jumaat,Sabtu".split(","), STANDALONEWEEKDAYS:"Ahad,Isnin,Selasa,Rabu,Khamis,Jumaat,Sabtu".split(","), SHORTWEEKDAYS:"Ahd,Isn,Sel,Rab,Kha,Jum,Sab".split(","), STANDALONESHORTWEEKDAYS:"Ahd,Isn,Sel,Rab,Kha,Jum,Sab".split(","), NARROWWEEKDAYS:"1,2,3,4,5,6,7".split(","), STANDALONENARROWWEEKDAYS:"1,2,3,4,5,6,7".split(","), SHORTQUARTERS:["S1", "S2", "S3", "S4"], QUARTERS:["suku pertama", "suku kedua", "suku ketiga", "suku keempat"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE, d MMMM y", 
"d MMMM y", "dd/MM/yyyy", "d/MM/yy"], TIMEFORMATS:["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_mt = {ERAS:["QK", "WK"], ERANAMES:["Qabel Kristu", "Wara Kristu"], NARROWMONTHS:"J,F,M,A,M,\u0120,L,A,S,O,N,D".split(","), STANDALONENARROWMONTHS:"J,F,M,A,M,\u0120,L,A,S,O,N,D".split(","), MONTHS:"Jannar,Frar,Marzu,April,Mejju,\u0120unju,Lulju,Awwissu,Settembru,Ottubru,Novembru,Di\u010bembru".split(","), STANDALONEMONTHS:"Jannar,Frar,Marzu,April,Mejju,\u0120unju,Lulju,Awwissu,Settembru,Ottubru,Novembru,Di\u010bembru".split(","), SHORTMONTHS:"Jan,Fra,Mar,Apr,Mej,\u0120un,Lul,Aww,Set,Ott,Nov,Di\u010b".split(","), 
STANDALONESHORTMONTHS:"Jan,Fra,Mar,Apr,Mej,\u0120un,Lul,Aww,Set,Ott,Nov,Di\u010b".split(","), WEEKDAYS:"Il-\u0126add,It-Tnejn,It-Tlieta,L-Erbg\u0127a,Il-\u0126amis,Il-\u0120img\u0127a,Is-Sibt".split(","), STANDALONEWEEKDAYS:"Il-\u0126add,It-Tnejn,It-Tlieta,L-Erbg\u0127a,Il-\u0126amis,Il-\u0120img\u0127a,Is-Sibt".split(","), SHORTWEEKDAYS:"\u0126ad,Tne,Tli,Erb,\u0126am,\u0120im,Sib".split(","), STANDALONESHORTWEEKDAYS:"\u0126ad,Tne,Tli,Erb,\u0126am,\u0120im,Sib".split(","), NARROWWEEKDAYS:"\u0126,T,T,E,\u0126,\u0120,S".split(","), 
STANDALONENARROWWEEKDAYS:"\u0126,T,T,E,\u0126,\u0120,S".split(","), SHORTQUARTERS:["K1", "K2", "K3", "K4"], QUARTERS:["K1", "K2", "K3", "K4"], AMPMS:["QN", "WN"], DATEFORMATS:["EEEE, d 'ta'\u2019 MMMM y", "d 'ta'\u2019 MMMM y", "dd MMM y", "dd/MM/yyyy"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:2};
goog.i18n.DateTimeSymbols_nl = {ERAS:["v. Chr.", "n. Chr."], ERANAMES:["Voor Christus", "na Christus"], NARROWMONTHS:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), STANDALONENARROWMONTHS:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), MONTHS:"januari,februari,maart,april,mei,juni,juli,augustus,september,oktober,november,december".split(","), STANDALONEMONTHS:"januari,februari,maart,april,mei,juni,juli,augustus,september,oktober,november,december".split(","), SHORTMONTHS:"jan.,feb.,mrt.,apr.,mei,jun.,jul.,aug.,sep.,okt.,nov.,dec.".split(","), 
STANDALONESHORTMONTHS:"jan,feb,mrt,apr,mei,jun,jul,aug,sep,okt,nov,dec".split(","), WEEKDAYS:"zondag,maandag,dinsdag,woensdag,donderdag,vrijdag,zaterdag".split(","), STANDALONEWEEKDAYS:"zondag,maandag,dinsdag,woensdag,donderdag,vrijdag,zaterdag".split(","), SHORTWEEKDAYS:"zo,ma,di,wo,do,vr,za".split(","), STANDALONESHORTWEEKDAYS:"zo,ma,di,wo,do,vr,za".split(","), NARROWWEEKDAYS:"Z,M,D,W,D,V,Z".split(","), STANDALONENARROWWEEKDAYS:"Z,M,D,W,D,V,Z".split(","), SHORTQUARTERS:["K1", "K2", "K3", "K4"], 
QUARTERS:["1e kwartaal", "2e kwartaal", "3e kwartaal", "4e kwartaal"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE d MMMM y", "d MMMM y", "d MMM y", "dd-MM-yy"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_no = {ERAS:["f.Kr.", "e.Kr."], ERANAMES:["f.Kr.", "e.Kr."], NARROWMONTHS:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), STANDALONENARROWMONTHS:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), MONTHS:"januar,februar,mars,april,mai,juni,juli,august,september,oktober,november,desember".split(","), STANDALONEMONTHS:"januar,februar,mars,april,mai,juni,juli,august,september,oktober,november,desember".split(","), SHORTMONTHS:"jan.,feb.,mars,apr.,mai,juni,juli,aug.,sep.,okt.,nov.,des.".split(","), 
STANDALONESHORTMONTHS:"jan.,feb.,mars,apr.,mai,juni,juli,aug.,sep.,okt.,nov.,des.".split(","), WEEKDAYS:"s\u00f8ndag,mandag,tirsdag,onsdag,torsdag,fredag,l\u00f8rdag".split(","), STANDALONEWEEKDAYS:"s\u00f8ndag,mandag,tirsdag,onsdag,torsdag,fredag,l\u00f8rdag".split(","), SHORTWEEKDAYS:"s\u00f8n.,man.,tir.,ons.,tor.,fre.,l\u00f8r.".split(","), STANDALONESHORTWEEKDAYS:"s\u00f8.,ma.,ti.,on.,to.,fr.,l\u00f8.".split(","), NARROWWEEKDAYS:"S,M,T,O,T,F,L".split(","), STANDALONENARROWWEEKDAYS:"S,M,T,O,T,F,L".split(","), 
SHORTQUARTERS:["K1", "K2", "K3", "K4"], QUARTERS:["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE d. MMMM y", "d. MMMM y", "d. MMM y", "dd.MM.yy"], TIMEFORMATS:["'kl'. HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_or = {ERAS:["BCE", "CE"], ERANAMES:["BCE", "CE"], NARROWMONTHS:"\u0b1c\u0b3e,\u0b2b\u0b47,\u0b2e\u0b3e,\u0b05,\u0b2e\u0b47,\u0b1c\u0b41,\u0b1c\u0b41,\u0b05,\u0b38\u0b47,\u0b05,\u0b28,\u0b21\u0b3f".split(","), STANDALONENARROWMONTHS:"\u0b1c\u0b3e,\u0b2b\u0b47,\u0b2e\u0b3e,\u0b05,\u0b2e\u0b47,\u0b1c\u0b41,\u0b1c\u0b41,\u0b05,\u0b38\u0b47,\u0b05,\u0b28,\u0b21\u0b3f".split(","), MONTHS:"\u0b1c\u0b3e\u0b28\u0b41\u0b06\u0b30\u0b40,\u0b2b\u0b47\u0b2c\u0b4d\u0b30\u0b41\u0b5f\u0b3e\u0b30\u0b40,\u0b2e\u0b3e\u0b30\u0b4d\u0b1a\u0b4d\u0b1a,\u0b05\u0b2a\u0b4d\u0b30\u0b47\u0b32,\u0b2e\u0b47,\u0b1c\u0b41\u0b28,\u0b1c\u0b41\u0b32\u0b3e\u0b07,\u0b05\u0b17\u0b37\u0b4d\u0b1f,\u0b38\u0b47\u0b2a\u0b4d\u0b1f\u0b47\u0b2e\u0b4d\u0b2c\u0b30,\u0b05\u0b15\u0b4d\u0b1f\u0b4b\u0b2c\u0b30,\u0b28\u0b2d\u0b47\u0b2e\u0b4d\u0b2c\u0b30,\u0b21\u0b3f\u0b38\u0b47\u0b2e\u0b4d\u0b2c\u0b30".split(","), 
STANDALONEMONTHS:"\u0b1c\u0b3e\u0b28\u0b41\u0b06\u0b30\u0b40,\u0b2b\u0b47\u0b2c\u0b4d\u0b30\u0b41\u0b5f\u0b3e\u0b30\u0b40,\u0b2e\u0b3e\u0b30\u0b4d\u0b1a\u0b4d\u0b1a,\u0b05\u0b2a\u0b4d\u0b30\u0b47\u0b32,\u0b2e\u0b47,\u0b1c\u0b41\u0b28,\u0b1c\u0b41\u0b32\u0b3e\u0b07,\u0b05\u0b17\u0b37\u0b4d\u0b1f,\u0b38\u0b47\u0b2a\u0b4d\u0b1f\u0b47\u0b2e\u0b4d\u0b2c\u0b30,\u0b05\u0b15\u0b4d\u0b1f\u0b4b\u0b2c\u0b30,\u0b28\u0b2d\u0b47\u0b2e\u0b4d\u0b2c\u0b30,\u0b21\u0b3f\u0b38\u0b47\u0b2e\u0b4d\u0b2c\u0b30".split(","), 
SHORTMONTHS:"\u0b1c\u0b3e\u0b28\u0b41\u0b06\u0b30\u0b40,\u0b2b\u0b47\u0b2c\u0b4d\u0b30\u0b41\u0b5f\u0b3e\u0b30\u0b40,\u0b2e\u0b3e\u0b30\u0b4d\u0b1a\u0b4d\u0b1a,\u0b05\u0b2a\u0b4d\u0b30\u0b47\u0b32,\u0b2e\u0b47,\u0b1c\u0b41\u0b28,\u0b1c\u0b41\u0b32\u0b3e\u0b07,\u0b05\u0b17\u0b37\u0b4d\u0b1f,\u0b38\u0b47\u0b2a\u0b4d\u0b1f\u0b47\u0b2e\u0b4d\u0b2c\u0b30,\u0b05\u0b15\u0b4d\u0b1f\u0b4b\u0b2c\u0b30,\u0b28\u0b2d\u0b47\u0b2e\u0b4d\u0b2c\u0b30,\u0b21\u0b3f\u0b38\u0b47\u0b2e\u0b4d\u0b2c\u0b30".split(","), STANDALONESHORTMONTHS:"\u0b1c\u0b3e\u0b28\u0b41\u0b06\u0b30\u0b40,\u0b2b\u0b47\u0b2c\u0b4d\u0b30\u0b41\u0b5f\u0b3e\u0b30\u0b40,\u0b2e\u0b3e\u0b30\u0b4d\u0b1a\u0b4d\u0b1a,\u0b05\u0b2a\u0b4d\u0b30\u0b47\u0b32,\u0b2e\u0b47,\u0b1c\u0b41\u0b28,\u0b1c\u0b41\u0b32\u0b3e\u0b07,\u0b05\u0b17\u0b37\u0b4d\u0b1f,\u0b38\u0b47\u0b2a\u0b4d\u0b1f\u0b47\u0b2e\u0b4d\u0b2c\u0b30,\u0b05\u0b15\u0b4d\u0b1f\u0b4b\u0b2c\u0b30,\u0b28\u0b2d\u0b47\u0b2e\u0b4d\u0b2c\u0b30,\u0b21\u0b3f\u0b38\u0b47\u0b2e\u0b4d\u0b2c\u0b30".split(","), 
WEEKDAYS:"\u0b30\u0b2c\u0b3f\u0b2c\u0b3e\u0b30,\u0b38\u0b4b\u0b2e\u0b2c\u0b3e\u0b30,\u0b2e\u0b19\u0b4d\u0b17\u0b33\u0b2c\u0b3e\u0b30,\u0b2c\u0b41\u0b27\u0b2c\u0b3e\u0b30,\u0b17\u0b41\u0b30\u0b41\u0b2c\u0b3e\u0b30,\u0b36\u0b41\u0b15\u0b4d\u0b30\u0b2c\u0b3e\u0b30,\u0b36\u0b28\u0b3f\u0b2c\u0b3e\u0b30".split(","), STANDALONEWEEKDAYS:"\u0b30\u0b2c\u0b3f\u0b2c\u0b3e\u0b30,\u0b38\u0b4b\u0b2e\u0b2c\u0b3e\u0b30,\u0b2e\u0b19\u0b4d\u0b17\u0b33\u0b2c\u0b3e\u0b30,\u0b2c\u0b41\u0b27\u0b2c\u0b3e\u0b30,\u0b17\u0b41\u0b30\u0b41\u0b2c\u0b3e\u0b30,\u0b36\u0b41\u0b15\u0b4d\u0b30\u0b2c\u0b3e\u0b30,\u0b36\u0b28\u0b3f\u0b2c\u0b3e\u0b30".split(","), 
SHORTWEEKDAYS:"\u0b30\u0b2c\u0b3f,\u0b38\u0b4b\u0b2e,\u0b2e\u0b19\u0b4d\u0b17\u0b33,\u0b2c\u0b41\u0b27,\u0b17\u0b41\u0b30\u0b41,\u0b36\u0b41\u0b15\u0b4d\u0b30,\u0b36\u0b28\u0b3f".split(","), STANDALONESHORTWEEKDAYS:"\u0b30\u0b2c\u0b3f,\u0b38\u0b4b\u0b2e,\u0b2e\u0b19\u0b4d\u0b17\u0b33,\u0b2c\u0b41\u0b27,\u0b17\u0b41\u0b30\u0b41,\u0b36\u0b41\u0b15\u0b4d\u0b30,\u0b36\u0b28\u0b3f".split(","), NARROWWEEKDAYS:"\u0b30,\u0b38\u0b4b,\u0b2e,\u0b2c\u0b41,\u0b17\u0b41,\u0b36\u0b41,\u0b36".split(","), STANDALONENARROWWEEKDAYS:"\u0b30,\u0b38\u0b4b,\u0b2e,\u0b2c\u0b41,\u0b17\u0b41,\u0b36\u0b41,\u0b36".split(","), 
SHORTQUARTERS:["Q1", "Q2", "Q3", "Q4"], QUARTERS:["Q1", "Q2", "Q3", "Q4"], AMPMS:["am", "pm"], DATEFORMATS:["EEEE, d MMMM y", "d MMMM y", "d MMM y", "d-M-yy"], TIMEFORMATS:["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[6, 6], FIRSTWEEKCUTOFFDAY:2};
goog.i18n.DateTimeSymbols_pl = {ERAS:["p.n.e.", "n.e."], ERANAMES:["p.n.e.", "n.e."], NARROWMONTHS:"s,l,m,k,m,c,l,s,w,p,l,g".split(","), STANDALONENARROWMONTHS:"s,l,m,k,m,c,l,s,w,p,l,g".split(","), MONTHS:"stycznia,lutego,marca,kwietnia,maja,czerwca,lipca,sierpnia,wrze\u015bnia,pa\u017adziernika,listopada,grudnia".split(","), STANDALONEMONTHS:"stycze\u0144,luty,marzec,kwiecie\u0144,maj,czerwiec,lipiec,sierpie\u0144,wrzesie\u0144,pa\u017adziernik,listopad,grudzie\u0144".split(","), SHORTMONTHS:"sty,lut,mar,kwi,maj,cze,lip,sie,wrz,pa\u017a,lis,gru".split(","), 
STANDALONESHORTMONTHS:"sty,lut,mar,kwi,maj,cze,lip,sie,wrz,pa\u017a,lis,gru".split(","), WEEKDAYS:"niedziela,poniedzia\u0142ek,wtorek,\u015broda,czwartek,pi\u0105tek,sobota".split(","), STANDALONEWEEKDAYS:"niedziela,poniedzia\u0142ek,wtorek,\u015broda,czwartek,pi\u0105tek,sobota".split(","), SHORTWEEKDAYS:"niedz.,pon.,wt.,\u015br.,czw.,pt.,sob.".split(","), STANDALONESHORTWEEKDAYS:"niedz.,pon.,wt.,\u015br.,czw.,pt.,sob.".split(","), NARROWWEEKDAYS:"N,P,W,\u015a,C,P,S".split(","), STANDALONENARROWWEEKDAYS:"N,P,W,\u015a,C,P,S".split(","), 
SHORTQUARTERS:["K1", "K2", "K3", "K4"], QUARTERS:["I kwarta\u0142", "II kwarta\u0142", "III kwarta\u0142", "IV kwarta\u0142"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE, d MMMM y", "d MMMM y", "d MMM y", "dd.MM.yyyy"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_pt = {ERAS:["a.C.", "d.C."], ERANAMES:["Antes de Cristo", "Ano do Senhor"], NARROWMONTHS:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), STANDALONENARROWMONTHS:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), MONTHS:"janeiro,fevereiro,mar\u00e7o,abril,maio,junho,julho,agosto,setembro,outubro,novembro,dezembro".split(","), STANDALONEMONTHS:"janeiro,fevereiro,mar\u00e7o,abril,maio,junho,julho,agosto,setembro,outubro,novembro,dezembro".split(","), SHORTMONTHS:"jan,fev,mar,abr,mai,jun,jul,ago,set,out,nov,dez".split(","), 
STANDALONESHORTMONTHS:"jan,fev,mar,abr,mai,jun,jul,ago,set,out,nov,dez".split(","), WEEKDAYS:"domingo,segunda-feira,ter\u00e7a-feira,quarta-feira,quinta-feira,sexta-feira,s\u00e1bado".split(","), STANDALONEWEEKDAYS:"domingo,segunda-feira,ter\u00e7a-feira,quarta-feira,quinta-feira,sexta-feira,s\u00e1bado".split(","), SHORTWEEKDAYS:"dom,seg,ter,qua,qui,sex,s\u00e1b".split(","), STANDALONESHORTWEEKDAYS:"dom,seg,ter,qua,qui,sex,s\u00e1b".split(","), NARROWWEEKDAYS:"D,S,T,Q,Q,S,S".split(","), STANDALONENARROWWEEKDAYS:"D,S,T,Q,Q,S,S".split(","), 
SHORTQUARTERS:["T1", "T2", "T3", "T4"], QUARTERS:["1\u00ba trimestre", "2\u00ba trimestre", "3\u00ba trimestre", "4\u00ba trimestre"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE, d 'de' MMMM 'de' y", "d 'de' MMMM 'de' y", "dd/MM/yyyy", "dd/MM/yy"], TIMEFORMATS:["HH'h'mm'min'ss's' zzzz", "HH'h'mm'min'ss's' z", "HH:mm:ss", "HH:mm"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_pt_BR = goog.i18n.DateTimeSymbols_pt;
goog.i18n.DateTimeSymbols_pt_PT = {ERAS:["a.C.", "d.C."], ERANAMES:["Antes de Cristo", "Ano do Senhor"], NARROWMONTHS:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), STANDALONENARROWMONTHS:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), MONTHS:"Janeiro,Fevereiro,Mar\u00e7o,Abril,Maio,Junho,Julho,Agosto,Setembro,Outubro,Novembro,Dezembro".split(","), STANDALONEMONTHS:"Janeiro,Fevereiro,Mar\u00e7o,Abril,Maio,Junho,Julho,Agosto,Setembro,Outubro,Novembro,Dezembro".split(","), SHORTMONTHS:"Jan,Fev,Mar,Abr,Mai,Jun,Jul,Ago,Set,Out,Nov,Dez".split(","), 
STANDALONESHORTMONTHS:"Jan,Fev,Mar,Abr,Mai,Jun,Jul,Ago,Set,Out,Nov,Dez".split(","), WEEKDAYS:"Domingo,Segunda-feira,Ter\u00e7a-feira,Quarta-feira,Quinta-feira,Sexta-feira,S\u00e1bado".split(","), STANDALONEWEEKDAYS:"Domingo,Segunda-feira,Ter\u00e7a-feira,Quarta-feira,Quinta-feira,Sexta-feira,S\u00e1bado".split(","), SHORTWEEKDAYS:"dom,seg,ter,qua,qui,sex,s\u00e1b".split(","), STANDALONESHORTWEEKDAYS:"dom,seg,ter,qua,qui,sex,s\u00e1b".split(","), NARROWWEEKDAYS:"D,S,T,Q,Q,S,S".split(","), STANDALONENARROWWEEKDAYS:"D,S,T,Q,Q,S,S".split(","), 
SHORTQUARTERS:["T1", "T2", "T3", "T4"], QUARTERS:["1.\u00ba trimestre", "2.\u00ba trimestre", "3.\u00ba trimestre", "4.\u00ba trimestre"], AMPMS:["Antes do meio-dia", "Depois do meio-dia"], DATEFORMATS:["EEEE, d 'de' MMMM 'de' y", "d 'de' MMMM 'de' y", "d 'de' MMM 'de' yyyy", "dd/MM/yy"], TIMEFORMATS:["HH'h'mm'min'ss's' zzzz", "HH'h'mm'min'ss's' z", "HH:mm:ss", "HH:mm"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_ro = {ERAS:["\u00ee.Hr.", "d.Hr."], ERANAMES:["\u00eenainte de Hristos", "dup\u0103 Hristos"], NARROWMONTHS:"I,F,M,A,M,I,I,A,S,O,N,D".split(","), STANDALONENARROWMONTHS:"I,F,M,A,M,I,I,A,S,O,N,D".split(","), MONTHS:"ianuarie,februarie,martie,aprilie,mai,iunie,iulie,august,septembrie,octombrie,noiembrie,decembrie".split(","), STANDALONEMONTHS:"ianuarie,februarie,martie,aprilie,mai,iunie,iulie,august,septembrie,octombrie,noiembrie,decembrie".split(","), SHORTMONTHS:"ian.,feb.,mar.,apr.,mai,iun.,iul.,aug.,sept.,oct.,nov.,dec.".split(","), 
STANDALONESHORTMONTHS:"ian.,feb.,mar.,apr.,mai,iun.,iul.,aug.,sept.,oct.,nov.,dec.".split(","), WEEKDAYS:"duminic\u0103,luni,mar\u021bi,miercuri,joi,vineri,s\u00e2mb\u0103t\u0103".split(","), STANDALONEWEEKDAYS:"duminic\u0103,luni,mar\u021bi,miercuri,joi,vineri,s\u00e2mb\u0103t\u0103".split(","), SHORTWEEKDAYS:"Du,Lu,Ma,Mi,Jo,Vi,S\u00e2".split(","), STANDALONESHORTWEEKDAYS:"Du,Lu,Ma,Mi,Jo,Vi,S\u00e2".split(","), NARROWWEEKDAYS:"D,L,M,M,J,V,S".split(","), STANDALONENARROWWEEKDAYS:"D,L,M,M,J,V,S".split(","), 
SHORTQUARTERS:["trim. I", "trim. II", "trim. III", "trim. IV"], QUARTERS:["trimestrul I", "trimestrul al II-lea", "trimestrul al III-lea", "trimestrul al IV-lea"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE, d MMMM y", "d MMMM y", "dd.MM.yyyy", "dd.MM.yyyy"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_ru = {ERAS:["\u0434\u043e \u043d.\u044d.", "\u043d.\u044d."], ERANAMES:["\u0434\u043e \u043d.\u044d.", "\u043d.\u044d."], NARROWMONTHS:"\u042f,\u0424,\u041c,\u0410,\u041c,\u0418,\u0418,\u0410,\u0421,\u041e,\u041d,\u0414".split(","), STANDALONENARROWMONTHS:"\u042f,\u0424,\u041c,\u0410,\u041c,\u0418,\u0418,\u0410,\u0421,\u041e,\u041d,\u0414".split(","), MONTHS:"\u044f\u043d\u0432\u0430\u0440\u044f,\u0444\u0435\u0432\u0440\u0430\u043b\u044f,\u043c\u0430\u0440\u0442\u0430,\u0430\u043f\u0440\u0435\u043b\u044f,\u043c\u0430\u044f,\u0438\u044e\u043d\u044f,\u0438\u044e\u043b\u044f,\u0430\u0432\u0433\u0443\u0441\u0442\u0430,\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f,\u043e\u043a\u0442\u044f\u0431\u0440\u044f,\u043d\u043e\u044f\u0431\u0440\u044f,\u0434\u0435\u043a\u0430\u0431\u0440\u044f".split(","), 
STANDALONEMONTHS:"\u042f\u043d\u0432\u0430\u0440\u044c,\u0424\u0435\u0432\u0440\u0430\u043b\u044c,\u041c\u0430\u0440\u0442,\u0410\u043f\u0440\u0435\u043b\u044c,\u041c\u0430\u0439,\u0418\u044e\u043d\u044c,\u0418\u044e\u043b\u044c,\u0410\u0432\u0433\u0443\u0441\u0442,\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c,\u041e\u043a\u0442\u044f\u0431\u0440\u044c,\u041d\u043e\u044f\u0431\u0440\u044c,\u0414\u0435\u043a\u0430\u0431\u0440\u044c".split(","), SHORTMONTHS:"\u044f\u043d\u0432.,\u0444\u0435\u0432\u0440.,\u043c\u0430\u0440\u0442\u0430,\u0430\u043f\u0440.,\u043c\u0430\u044f,\u0438\u044e\u043d\u044f,\u0438\u044e\u043b\u044f,\u0430\u0432\u0433.,\u0441\u0435\u043d\u0442.,\u043e\u043a\u0442.,\u043d\u043e\u044f\u0431.,\u0434\u0435\u043a.".split(","), 
STANDALONESHORTMONTHS:"\u044f\u043d\u0432.,\u0444\u0435\u0432\u0440.,\u043c\u0430\u0440\u0442,\u0430\u043f\u0440.,\u043c\u0430\u0439,\u0438\u044e\u043d\u044c,\u0438\u044e\u043b\u044c,\u0430\u0432\u0433.,\u0441\u0435\u043d\u0442.,\u043e\u043a\u0442.,\u043d\u043e\u044f\u0431.,\u0434\u0435\u043a.".split(","), WEEKDAYS:"\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435,\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a,\u0432\u0442\u043e\u0440\u043d\u0438\u043a,\u0441\u0440\u0435\u0434\u0430,\u0447\u0435\u0442\u0432\u0435\u0440\u0433,\u043f\u044f\u0442\u043d\u0438\u0446\u0430,\u0441\u0443\u0431\u0431\u043e\u0442\u0430".split(","), 
STANDALONEWEEKDAYS:"\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435,\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a,\u0412\u0442\u043e\u0440\u043d\u0438\u043a,\u0421\u0440\u0435\u0434\u0430,\u0427\u0435\u0442\u0432\u0435\u0440\u0433,\u041f\u044f\u0442\u043d\u0438\u0446\u0430,\u0421\u0443\u0431\u0431\u043e\u0442\u0430".split(","), SHORTWEEKDAYS:"\u0432\u0441,\u043f\u043d,\u0432\u0442,\u0441\u0440,\u0447\u0442,\u043f\u0442,\u0441\u0431".split(","), STANDALONESHORTWEEKDAYS:"\u0412\u0441,\u041f\u043d,\u0412\u0442,\u0421\u0440,\u0427\u0442,\u041f\u0442,\u0421\u0431".split(","), 
NARROWWEEKDAYS:"\u0412,\u041f,\u0412,\u0421,\u0427,\u041f,\u0421".split(","), STANDALONENARROWWEEKDAYS:"\u0412,\u041f,\u0412,\u0421,\u0427,\u041f,\u0421".split(","), SHORTQUARTERS:["1-\u0439 \u043a\u0432.", "2-\u0439 \u043a\u0432.", "3-\u0439 \u043a\u0432.", "4-\u0439 \u043a\u0432."], QUARTERS:["1-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b", "2-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b", "3-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b", "4-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b"], 
AMPMS:["AM", "PM"], DATEFORMATS:["EEEE, d MMMM y\u00a0'\u0433'.", "d MMMM y\u00a0'\u0433'.", "dd.MM.yyyy", "dd.MM.yy"], TIMEFORMATS:["H:mm:ss zzzz", "H:mm:ss z", "H:mm:ss", "H:mm"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_sk = {ERAS:["pred n.l.", "n.l."], ERANAMES:["pred n.l.", "n.l."], NARROWMONTHS:"j,f,m,a,m,j,j,a,s,o,n,d".split(","), STANDALONENARROWMONTHS:"j,f,m,a,m,j,j,a,s,o,n,d".split(","), MONTHS:"janu\u00e1ra,febru\u00e1ra,marca,apr\u00edla,m\u00e1ja,j\u00fana,j\u00fala,augusta,septembra,okt\u00f3bra,novembra,decembra".split(","), STANDALONEMONTHS:"janu\u00e1r,febru\u00e1r,marec,apr\u00edl,m\u00e1j,j\u00fan,j\u00fal,august,september,okt\u00f3ber,november,december".split(","), SHORTMONTHS:"jan,feb,mar,apr,m\u00e1j,j\u00fan,j\u00fal,aug,sep,okt,nov,dec".split(","), 
STANDALONESHORTMONTHS:"jan,feb,mar,apr,m\u00e1j,j\u00fan,j\u00fal,aug,sep,okt,nov,dec".split(","), WEEKDAYS:"nede\u013ea,pondelok,utorok,streda,\u0161tvrtok,piatok,sobota".split(","), STANDALONEWEEKDAYS:"nede\u013ea,pondelok,utorok,streda,\u0161tvrtok,piatok,sobota".split(","), SHORTWEEKDAYS:"ne,po,ut,st,\u0161t,pi,so".split(","), STANDALONESHORTWEEKDAYS:"ne,po,ut,st,\u0161t,pi,so".split(","), NARROWWEEKDAYS:"N,P,U,S,\u0160,P,S".split(","), STANDALONENARROWWEEKDAYS:"N,P,U,S,\u0160,P,S".split(","), 
SHORTQUARTERS:["Q1", "Q2", "Q3", "Q4"], QUARTERS:["1. \u0161tvr\u0165rok", "2. \u0161tvr\u0165rok", "3. \u0161tvr\u0165rok", "4. \u0161tvr\u0165rok"], AMPMS:["dopoludnia", "popoludn\u00ed"], DATEFORMATS:["EEEE, d. MMMM y", "d. MMMM y", "d.M.yyyy", "d.M.yyyy"], TIMEFORMATS:["H:mm:ss zzzz", "H:mm:ss z", "H:mm:ss", "H:mm"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_sl = {ERAS:["pr. n. \u0161t.", "po Kr."], ERANAMES:["pred na\u0161im \u0161tetjem", "na\u0161e \u0161tetje"], NARROWMONTHS:"j,f,m,a,m,j,j,a,s,o,n,d".split(","), STANDALONENARROWMONTHS:"j,f,m,a,m,j,j,a,s,o,n,d".split(","), MONTHS:"januar,februar,marec,april,maj,junij,julij,avgust,september,oktober,november,december".split(","), STANDALONEMONTHS:"januar,februar,marec,april,maj,junij,julij,avgust,september,oktober,november,december".split(","), SHORTMONTHS:"jan.,feb.,mar.,apr.,maj,jun.,jul.,avg.,sep.,okt.,nov.,dec.".split(","), 
STANDALONESHORTMONTHS:"jan,feb,mar,apr,maj,jun,jul,avg,sep,okt,nov,dec".split(","), WEEKDAYS:"nedelja,ponedeljek,torek,sreda,\u010detrtek,petek,sobota".split(","), STANDALONEWEEKDAYS:"nedelja,ponedeljek,torek,sreda,\u010detrtek,petek,sobota".split(","), SHORTWEEKDAYS:"ned,pon,tor,sre,\u010det,pet,sob".split(","), STANDALONESHORTWEEKDAYS:"ned,pon,tor,sre,\u010det,pet,sob".split(","), NARROWWEEKDAYS:"n,p,t,s,\u010d,p,s".split(","), STANDALONENARROWWEEKDAYS:"n,p,t,s,\u010d,p,s".split(","), SHORTQUARTERS:["Q1", 
"Q2", "Q3", "Q4"], QUARTERS:["1. \u010detrtletje", "2. \u010detrtletje", "3. \u010detrtletje", "4. \u010detrtletje"], AMPMS:["dop.", "pop."], DATEFORMATS:["EEEE, dd. MMMM y", "dd. MMMM y", "d. MMM yyyy", "d. MM. yy"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_sq = {ERAS:["p.e.r.", "n.e.r."], ERANAMES:["p.e.r.", "n.e.r."], NARROWMONTHS:"J,S,M,P,M,Q,K,G,S,T,N,D".split(","), STANDALONENARROWMONTHS:"J,S,M,P,M,Q,K,G,S,T,N,D".split(","), MONTHS:"janar,shkurt,mars,prill,maj,qershor,korrik,gusht,shtator,tetor,n\u00ebntor,dhjetor".split(","), STANDALONEMONTHS:"janar,shkurt,mars,prill,maj,qershor,korrik,gusht,shtator,tetor,n\u00ebntor,dhjetor".split(","), SHORTMONTHS:"Jan,Shk,Mar,Pri,Maj,Qer,Kor,Gsh,Sht,Tet,N\u00ebn,Dhj".split(","), STANDALONESHORTMONTHS:"Jan,Shk,Mar,Pri,Maj,Qer,Kor,Gsh,Sht,Tet,N\u00ebn,Dhj".split(","), 
WEEKDAYS:"e diel,e h\u00ebn\u00eb,e mart\u00eb,e m\u00ebrkur\u00eb,e enjte,e premte,e shtun\u00eb".split(","), STANDALONEWEEKDAYS:"e diel,e h\u00ebn\u00eb,e mart\u00eb,e m\u00ebrkur\u00eb,e enjte,e premte,e shtun\u00eb".split(","), SHORTWEEKDAYS:"Die,H\u00ebn,Mar,M\u00ebr,Enj,Pre,Sht".split(","), STANDALONESHORTWEEKDAYS:"Die,H\u00ebn,Mar,M\u00ebr,Enj,Pre,Sht".split(","), NARROWWEEKDAYS:"D,H,M,M,E,P,S".split(","), STANDALONENARROWWEEKDAYS:"D,H,M,M,E,P,S".split(","), SHORTQUARTERS:["Q1", "Q2", "Q3", 
"Q4"], QUARTERS:["Q1", "Q2", "Q3", "Q4"], AMPMS:["PD", "MD"], DATEFORMATS:["EEEE, dd MMMM y", "dd MMMM y", "yyyy-MM-dd", "yy-MM-dd"], TIMEFORMATS:["h.mm.ss.a zzzz", "h.mm.ss.a z", "h.mm.ss.a", "h.mm.a"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_sr = {ERAS:["\u043f. \u043d. \u0435.", "\u043d. \u0435."], ERANAMES:["\u041f\u0440\u0435 \u043d\u043e\u0432\u0435 \u0435\u0440\u0435", "\u041d\u043e\u0432\u0435 \u0435\u0440\u0435"], NARROWMONTHS:"\u0458,\u0444,\u043c,\u0430,\u043c,\u0458,\u0458,\u0430,\u0441,\u043e,\u043d,\u0434".split(","), STANDALONENARROWMONTHS:"\u0458,\u0444,\u043c,\u0430,\u043c,\u0458,\u0458,\u0430,\u0441,\u043e,\u043d,\u0434".split(","), MONTHS:"\u0458\u0430\u043d\u0443\u0430\u0440,\u0444\u0435\u0431\u0440\u0443\u0430\u0440,\u043c\u0430\u0440\u0442,\u0430\u043f\u0440\u0438\u043b,\u043c\u0430\u0458,\u0458\u0443\u043d,\u0458\u0443\u043b,\u0430\u0432\u0433\u0443\u0441\u0442,\u0441\u0435\u043f\u0442\u0435\u043c\u0431\u0430\u0440,\u043e\u043a\u0442\u043e\u0431\u0430\u0440,\u043d\u043e\u0432\u0435\u043c\u0431\u0430\u0440,\u0434\u0435\u0446\u0435\u043c\u0431\u0430\u0440".split(","), 
STANDALONEMONTHS:"\u0458\u0430\u043d\u0443\u0430\u0440,\u0444\u0435\u0431\u0440\u0443\u0430\u0440,\u043c\u0430\u0440\u0442,\u0430\u043f\u0440\u0438\u043b,\u043c\u0430\u0458,\u0458\u0443\u043d,\u0458\u0443\u043b,\u0430\u0432\u0433\u0443\u0441\u0442,\u0441\u0435\u043f\u0442\u0435\u043c\u0431\u0430\u0440,\u043e\u043a\u0442\u043e\u0431\u0430\u0440,\u043d\u043e\u0432\u0435\u043c\u0431\u0430\u0440,\u0434\u0435\u0446\u0435\u043c\u0431\u0430\u0440".split(","), SHORTMONTHS:"\u0458\u0430\u043d,\u0444\u0435\u0431,\u043c\u0430\u0440,\u0430\u043f\u0440,\u043c\u0430\u0458,\u0458\u0443\u043d,\u0458\u0443\u043b,\u0430\u0432\u0433,\u0441\u0435\u043f,\u043e\u043a\u0442,\u043d\u043e\u0432,\u0434\u0435\u0446".split(","), 
STANDALONESHORTMONTHS:"\u0458\u0430\u043d,\u0444\u0435\u0431,\u043c\u0430\u0440,\u0430\u043f\u0440,\u043c\u0430\u0458,\u0458\u0443\u043d,\u0458\u0443\u043b,\u0430\u0432\u0433,\u0441\u0435\u043f,\u043e\u043a\u0442,\u043d\u043e\u0432,\u0434\u0435\u0446".split(","), WEEKDAYS:"\u043d\u0435\u0434\u0435\u0459\u0430,\u043f\u043e\u043d\u0435\u0434\u0435\u0459\u0430\u043a,\u0443\u0442\u043e\u0440\u0430\u043a,\u0441\u0440\u0435\u0434\u0430,\u0447\u0435\u0442\u0432\u0440\u0442\u0430\u043a,\u043f\u0435\u0442\u0430\u043a,\u0441\u0443\u0431\u043e\u0442\u0430".split(","), 
STANDALONEWEEKDAYS:"\u043d\u0435\u0434\u0435\u0459\u0430,\u043f\u043e\u043d\u0435\u0434\u0435\u0459\u0430\u043a,\u0443\u0442\u043e\u0440\u0430\u043a,\u0441\u0440\u0435\u0434\u0430,\u0447\u0435\u0442\u0432\u0440\u0442\u0430\u043a,\u043f\u0435\u0442\u0430\u043a,\u0441\u0443\u0431\u043e\u0442\u0430".split(","), SHORTWEEKDAYS:"\u043d\u0435\u0434,\u043f\u043e\u043d,\u0443\u0442\u043e,\u0441\u0440\u0435,\u0447\u0435\u0442,\u043f\u0435\u0442,\u0441\u0443\u0431".split(","), STANDALONESHORTWEEKDAYS:"\u043d\u0435\u0434,\u043f\u043e\u043d,\u0443\u0442\u043e,\u0441\u0440\u0435,\u0447\u0435\u0442,\u043f\u0435\u0442,\u0441\u0443\u0431".split(","), 
NARROWWEEKDAYS:"\u043d,\u043f,\u0443,\u0441,\u0447,\u043f,\u0441".split(","), STANDALONENARROWWEEKDAYS:"\u043d,\u043f,\u0443,\u0441,\u0447,\u043f,\u0441".split(","), SHORTQUARTERS:["\u041a1", "\u041a2", "\u041a3", "\u041a4"], QUARTERS:["\u041f\u0440\u0432\u043e \u0442\u0440\u043e\u043c\u0435\u0441\u0435\u0447\u0458\u0435", "\u0414\u0440\u0443\u0433\u043e \u0442\u0440\u043e\u043c\u0435\u0441\u0435\u0447\u0458\u0435", "\u0422\u0440\u0435\u045b\u0435 \u0442\u0440\u043e\u043c\u0435\u0441\u0435\u0447\u0458\u0435", 
"\u0427\u0435\u0442\u0432\u0440\u0442\u043e \u0442\u0440\u043e\u043c\u0435\u0441\u0435\u0447\u0458\u0435"], AMPMS:["\u043f\u0440\u0435 \u043f\u043e\u0434\u043d\u0435", "\u043f\u043e\u043f\u043e\u0434\u043d\u0435"], DATEFORMATS:["EEEE, dd. MMMM y.", "dd. MMMM y.", "dd.MM.y.", "d.M.yy."], TIMEFORMATS:["HH.mm.ss zzzz", "HH.mm.ss z", "HH.mm.ss", "HH.mm"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_sv = {ERAS:["f.Kr.", "e.Kr."], ERANAMES:["f\u00f6re Kristus", "efter Kristus"], NARROWMONTHS:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), STANDALONENARROWMONTHS:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), MONTHS:"januari,februari,mars,april,maj,juni,juli,augusti,september,oktober,november,december".split(","), STANDALONEMONTHS:"januari,februari,mars,april,maj,juni,juli,augusti,september,oktober,november,december".split(","), SHORTMONTHS:"jan,feb,mar,apr,maj,jun,jul,aug,sep,okt,nov,dec".split(","), 
STANDALONESHORTMONTHS:"jan,feb,mar,apr,maj,jun,jul,aug,sep,okt,nov,dec".split(","), WEEKDAYS:"s\u00f6ndag,m\u00e5ndag,tisdag,onsdag,torsdag,fredag,l\u00f6rdag".split(","), STANDALONEWEEKDAYS:"s\u00f6ndag,m\u00e5ndag,tisdag,onsdag,torsdag,fredag,l\u00f6rdag".split(","), SHORTWEEKDAYS:"s\u00f6n,m\u00e5n,tis,ons,tors,fre,l\u00f6r".split(","), STANDALONESHORTWEEKDAYS:"s\u00f6n,m\u00e5n,tis,ons,tors,fre,l\u00f6r".split(","), NARROWWEEKDAYS:"S,M,T,O,T,F,L".split(","), STANDALONENARROWWEEKDAYS:"S,M,T,O,T,F,L".split(","), 
SHORTQUARTERS:["K1", "K2", "K3", "K4"], QUARTERS:["1:a kvartalet", "2:a kvartalet", "3:e kvartalet", "4:e kvartalet"], AMPMS:["fm", "em"], DATEFORMATS:["EEEE'en' 'den' d:'e' MMMM y", "d MMMM y", "d MMM y", "yyyy-MM-dd"], TIMEFORMATS:["'kl'. HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_sw = {ERAS:["KK", "BK"], ERANAMES:["Kabla ya Kristo", "Baada ya Kristo"], NARROWMONTHS:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), STANDALONENARROWMONTHS:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), MONTHS:"Januari,Februari,Machi,Aprili,Mei,Juni,Julai,Agosti,Septemba,Oktoba,Novemba,Desemba".split(","), STANDALONEMONTHS:"Januari,Februari,Machi,Aprili,Mei,Juni,Julai,Agosti,Septemba,Oktoba,Novemba,Desemba".split(","), SHORTMONTHS:"Jan,Feb,Mac,Apr,Mei,Jun,Jul,Ago,Sep,Okt,Nov,Des".split(","), 
STANDALONESHORTMONTHS:"Jan,Feb,Mac,Apr,Mei,Jun,Jul,Ago,Sep,Okt,Nov,Des".split(","), WEEKDAYS:"Jumapili,Jumatatu,Jumanne,Jumatano,Alhamisi,Ijumaa,Jumamosi".split(","), STANDALONEWEEKDAYS:"Jumapili,Jumatatu,Jumanne,Jumatano,Alhamisi,Ijumaa,Jumamosi".split(","), SHORTWEEKDAYS:"J2,J3,J4,J5,Alh,Ij,J1".split(","), STANDALONESHORTWEEKDAYS:"J2,J3,J4,J5,Alh,Ij,J1".split(","), NARROWWEEKDAYS:"2,3,4,5,A,I,1".split(","), STANDALONENARROWWEEKDAYS:"2,3,4,5,A,I,1".split(","), SHORTQUARTERS:["R1", "R2", "R3", "R4"], 
QUARTERS:["Robo 1", "Robo 2", "Robo 3", "Robo 4"], AMPMS:["asubuhi", "alasiri"], DATEFORMATS:["EEEE, d MMMM y", "d MMMM y", "d MMM y", "dd/MM/yyyy"], TIMEFORMATS:["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_ta = {ERAS:["\u0b95\u0bbf\u0bae\u0bc1", "\u0b95\u0bbf\u0baa\u0bbf"], ERANAMES:["\u0b95\u0bbf\u0bb1\u0bbf\u0bb8\u0bcd\u0ba4\u0bc1\u0bb5\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd", "\u0b85\u0ba9\u0bcb \u0b9f\u0bcb\u0bae\u0bbf\u0ba9\u0bbf"], NARROWMONTHS:"\u0b9c,\u0baa\u0bbf,\u0bae\u0bbe,\u0b8f,\u0bae\u0bc7,\u0b9c\u0bc2,\u0b9c\u0bc2,\u0b86,\u0b9a\u0bc6,\u0b85,\u0ba8,\u0b9f\u0bbf".split(","), STANDALONENARROWMONTHS:"\u0b9c,\u0baa\u0bbf,\u0bae\u0bbe,\u0b8f,\u0bae\u0bc7,\u0b9c\u0bc2,\u0b9c\u0bc2,\u0b86,\u0b9a\u0bc6,\u0b85,\u0ba8,\u0b9f\u0bbf".split(","), 
MONTHS:"\u0b9c\u0ba9\u0bb5\u0bb0\u0bbf,\u0baa\u0bbf\u0baa\u0bcd\u0bb0\u0bb5\u0bb0\u0bbf,\u0bae\u0bbe\u0bb0\u0bcd\u0b9a\u0bcd,\u0b8f\u0baa\u0bcd\u0bb0\u0bb2\u0bcd,\u0bae\u0bc7,\u0b9c\u0bc2\u0ba9\u0bcd,\u0b9c\u0bc2\u0bb2\u0bc8,\u0b86\u0b95\u0bb8\u0bcd\u0b9f\u0bcd,\u0b9a\u0bc6\u0baa\u0bcd\u0b9f\u0bc6\u0bae\u0bcd\u0baa\u0bcd\u0bb0\u0bcd,\u0b85\u0b95\u0bcd\u0b9f\u0bcb\u0baa\u0bb0\u0bcd,\u0ba8\u0bb5\u0bae\u0bcd\u0baa\u0bb0\u0bcd,\u0b9f\u0bbf\u0b9a\u0bae\u0bcd\u0baa\u0bb0\u0bcd".split(","), STANDALONEMONTHS:"\u0b9c\u0ba9\u0bb5\u0bb0\u0bbf,\u0baa\u0bbf\u0baa\u0bcd\u0bb0\u0bb5\u0bb0\u0bbf,\u0bae\u0bbe\u0bb0\u0bcd\u0b9a\u0bcd,\u0b8f\u0baa\u0bcd\u0bb0\u0bb2\u0bcd,\u0bae\u0bc7,\u0b9c\u0bc2\u0ba9\u0bcd,\u0b9c\u0bc2\u0bb2\u0bc8,\u0b86\u0b95\u0bb8\u0bcd\u0b9f\u0bcd,\u0b9a\u0bc6\u0baa\u0bcd\u0b9f\u0bc6\u0bae\u0bcd\u0baa\u0bcd\u0bb0\u0bcd,\u0b85\u0b95\u0bcd\u0b9f\u0bcb\u0baa\u0bb0\u0bcd,\u0ba8\u0bb5\u0bae\u0bcd\u0baa\u0bb0\u0bcd,\u0b9f\u0bbf\u0b9a\u0bae\u0bcd\u0baa\u0bb0\u0bcd".split(","), 
SHORTMONTHS:"\u0b9c\u0ba9.,\u0baa\u0bbf\u0baa\u0bcd.,\u0bae\u0bbe\u0bb0\u0bcd.,\u0b8f\u0baa\u0bcd.,\u0bae\u0bc7,\u0b9c\u0bc2\u0ba9\u0bcd,\u0b9c\u0bc2\u0bb2\u0bc8,\u0b86\u0b95.,\u0b9a\u0bc6\u0baa\u0bcd.,\u0b85\u0b95\u0bcd.,\u0ba8\u0bb5.,\u0b9f\u0bbf\u0b9a.".split(","), STANDALONESHORTMONTHS:"\u0b9c\u0ba9.,\u0baa\u0bbf\u0baa\u0bcd.,\u0bae\u0bbe\u0bb0\u0bcd.,\u0b8f\u0baa\u0bcd.,\u0bae\u0bc7,\u0b9c\u0bc2\u0ba9\u0bcd,\u0b9c\u0bc2\u0bb2\u0bc8,\u0b86\u0b95.,\u0b9a\u0bc6\u0baa\u0bcd.,\u0b85\u0b95\u0bcd.,\u0ba8\u0bb5.,\u0b9f\u0bbf\u0b9a.".split(","), 
WEEKDAYS:"\u0b9e\u0bbe\u0baf\u0bbf\u0bb1\u0bc1,\u0ba4\u0bbf\u0b99\u0bcd\u0b95\u0bb3\u0bcd,\u0b9a\u0bc6\u0bb5\u0bcd\u0bb5\u0bbe\u0baf\u0bcd,\u0baa\u0bc1\u0ba4\u0ba9\u0bcd,\u0bb5\u0bbf\u0baf\u0bbe\u0bb4\u0ba9\u0bcd,\u0bb5\u0bc6\u0bb3\u0bcd\u0bb3\u0bbf,\u0b9a\u0ba9\u0bbf".split(","), STANDALONEWEEKDAYS:"\u0b9e\u0bbe\u0baf\u0bbf\u0bb1\u0bc1,\u0ba4\u0bbf\u0b99\u0bcd\u0b95\u0bb3\u0bcd,\u0b9a\u0bc6\u0bb5\u0bcd\u0bb5\u0bbe\u0baf\u0bcd,\u0baa\u0bc1\u0ba4\u0ba9\u0bcd,\u0bb5\u0bbf\u0baf\u0bbe\u0bb4\u0ba9\u0bcd,\u0bb5\u0bc6\u0bb3\u0bcd\u0bb3\u0bbf,\u0b9a\u0ba9\u0bbf".split(","), 
SHORTWEEKDAYS:"\u0b9e\u0bbe,\u0ba4\u0bbf,\u0b9a\u0bc6,\u0baa\u0bc1,\u0bb5\u0bbf,\u0bb5\u0bc6,\u0b9a".split(","), STANDALONESHORTWEEKDAYS:"\u0b9e\u0bbe,\u0ba4\u0bbf,\u0b9a\u0bc6,\u0baa\u0bc1,\u0bb5\u0bbf,\u0bb5\u0bc6,\u0b9a".split(","), NARROWWEEKDAYS:"\u0b9e\u0bbe,\u0ba4\u0bbf,\u0b9a\u0bc6,\u0baa\u0bc1,\u0bb5\u0bbf,\u0bb5\u0bc6,\u0b9a".split(","), STANDALONENARROWWEEKDAYS:"\u0b9e\u0bbe,\u0ba4\u0bbf,\u0b9a\u0bc6,\u0baa\u0bc1,\u0bb5\u0bbf,\u0bb5\u0bc6,\u0b9a".split(","), SHORTQUARTERS:["Q1", "Q2", 
"Q3", "Q4"], QUARTERS:["1\u0b86\u0bae\u0bcd \u0b95\u0bbe\u0bb2\u0bbe\u0ba3\u0bcd\u0b9f\u0bc1", "2\u0b86\u0bae\u0bcd \u0b95\u0bbe\u0bb2\u0bbe\u0ba3\u0bcd\u0b9f\u0bc1", "3\u0b86\u0bae\u0bcd \u0b95\u0bbe\u0bb2\u0bbe\u0ba3\u0bcd\u0b9f\u0bc1", "4\u0b86\u0bae\u0bcd \u0b95\u0bbe\u0bb2\u0bbe\u0ba3\u0bcd\u0b9f\u0bc1"], AMPMS:["am", "pm"], DATEFORMATS:["EEEE, d MMMM, y", "d MMMM, y", "d MMM, y", "d-M-yy"], TIMEFORMATS:["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[6, 
6], FIRSTWEEKCUTOFFDAY:2};
goog.i18n.DateTimeSymbols_te = {ERAS:["\u0c08\u0c38\u0c3e\u0c2a\u0c42\u0c30\u0c4d\u0c35.", "\u0c38\u0c28\u0c4d."], ERANAMES:["\u0c08\u0c38\u0c3e\u0c2a\u0c42\u0c30\u0c4d\u0c35.", "\u0c38\u0c28\u0c4d."], NARROWMONTHS:"\u0c1c,\u0c2b\u0c3f,\u0c2e,\u0c0e,\u0c2e\u0c46,\u0c1c\u0c41,\u0c1c\u0c41,\u0c06,\u0c38\u0c46,\u0c05,\u0c28,\u0c21\u0c3f".split(","), STANDALONENARROWMONTHS:"\u0c1c,\u0c2b\u0c3f,\u0c2e,\u0c0e,\u0c2e\u0c46,\u0c1c\u0c41,\u0c1c\u0c41,\u0c06,\u0c38\u0c46,\u0c05,\u0c28,\u0c21\u0c3f".split(","), 
MONTHS:"\u0c1c\u0c28\u0c35\u0c30\u0c3f,\u0c2b\u0c3f\u0c2c\u0c4d\u0c30\u0c35\u0c30\u0c3f,\u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f,\u0c0f\u0c2a\u0c4d\u0c30\u0c3f\u0c32\u0c4d,\u0c2e\u0c47,\u0c1c\u0c42\u0c28\u0c4d,\u0c1c\u0c42\u0c32\u0c48,\u0c06\u0c17\u0c38\u0c4d\u0c1f\u0c41,\u0c38\u0c46\u0c2a\u0c4d\u0c1f\u0c46\u0c02\u0c2c\u0c30\u0c4d,\u0c05\u0c15\u0c4d\u0c1f\u0c4b\u0c2c\u0c30\u0c4d,\u0c28\u0c35\u0c02\u0c2c\u0c30\u0c4d,\u0c21\u0c3f\u0c38\u0c46\u0c02\u0c2c\u0c30\u0c4d".split(","), STANDALONEMONTHS:"\u0c1c\u0c28\u0c35\u0c30\u0c3f,\u0c2b\u0c3f\u0c2c\u0c4d\u0c30\u0c35\u0c30\u0c3f,\u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f,\u0c0f\u0c2a\u0c4d\u0c30\u0c3f\u0c32\u0c4d,\u0c2e\u0c47,\u0c1c\u0c42\u0c28\u0c4d,\u0c1c\u0c42\u0c32\u0c48,\u0c06\u0c17\u0c38\u0c4d\u0c1f\u0c41,\u0c38\u0c46\u0c2a\u0c4d\u0c1f\u0c46\u0c02\u0c2c\u0c30\u0c4d,\u0c05\u0c15\u0c4d\u0c1f\u0c4b\u0c2c\u0c30\u0c4d,\u0c28\u0c35\u0c02\u0c2c\u0c30\u0c4d,\u0c21\u0c3f\u0c38\u0c46\u0c02\u0c2c\u0c30\u0c4d".split(","), 
SHORTMONTHS:"\u0c1c\u0c28\u0c35\u0c30\u0c3f,\u0c2b\u0c3f\u0c2c\u0c4d\u0c30\u0c35\u0c30\u0c3f,\u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f,\u0c0f\u0c2a\u0c4d\u0c30\u0c3f\u0c32\u0c4d,\u0c2e\u0c47,\u0c1c\u0c42\u0c28\u0c4d,\u0c1c\u0c42\u0c32\u0c48,\u0c06\u0c17\u0c38\u0c4d\u0c1f\u0c41,\u0c38\u0c46\u0c2a\u0c4d\u0c1f\u0c46\u0c02\u0c2c\u0c30\u0c4d,\u0c05\u0c15\u0c4d\u0c1f\u0c4b\u0c2c\u0c30\u0c4d,\u0c28\u0c35\u0c02\u0c2c\u0c30\u0c4d,\u0c21\u0c3f\u0c38\u0c46\u0c02\u0c2c\u0c30\u0c4d".split(","), STANDALONESHORTMONTHS:"\u0c1c\u0c28\u0c35\u0c30\u0c3f,\u0c2b\u0c3f\u0c2c\u0c4d\u0c30\u0c35\u0c30\u0c3f,\u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f,\u0c0f\u0c2a\u0c4d\u0c30\u0c3f\u0c32\u0c4d,\u0c2e\u0c47,\u0c1c\u0c42\u0c28\u0c4d,\u0c1c\u0c42\u0c32\u0c48,\u0c06\u0c17\u0c38\u0c4d\u0c1f\u0c41,\u0c38\u0c46\u0c2a\u0c4d\u0c1f\u0c46\u0c02\u0c2c\u0c30\u0c4d,\u0c05\u0c15\u0c4d\u0c1f\u0c4b\u0c2c\u0c30\u0c4d,\u0c28\u0c35\u0c02\u0c2c\u0c30\u0c4d,\u0c21\u0c3f\u0c38\u0c46\u0c02\u0c2c\u0c30\u0c4d".split(","), 
WEEKDAYS:"\u0c06\u0c26\u0c3f\u0c35\u0c3e\u0c30\u0c02,\u0c38\u0c4b\u0c2e\u0c35\u0c3e\u0c30\u0c02,\u0c2e\u0c02\u0c17\u0c33\u0c35\u0c3e\u0c30\u0c02,\u0c2c\u0c41\u0c27\u0c35\u0c3e\u0c30\u0c02,\u0c17\u0c41\u0c30\u0c41\u0c35\u0c3e\u0c30\u0c02,\u0c36\u0c41\u0c15\u0c4d\u0c30\u0c35\u0c3e\u0c30\u0c02,\u0c36\u0c28\u0c3f\u0c35\u0c3e\u0c30\u0c02".split(","), STANDALONEWEEKDAYS:"\u0c06\u0c26\u0c3f\u0c35\u0c3e\u0c30\u0c02,\u0c38\u0c4b\u0c2e\u0c35\u0c3e\u0c30\u0c02,\u0c2e\u0c02\u0c17\u0c33\u0c35\u0c3e\u0c30\u0c02,\u0c2c\u0c41\u0c27\u0c35\u0c3e\u0c30\u0c02,\u0c17\u0c41\u0c30\u0c41\u0c35\u0c3e\u0c30\u0c02,\u0c36\u0c41\u0c15\u0c4d\u0c30\u0c35\u0c3e\u0c30\u0c02,\u0c36\u0c28\u0c3f\u0c35\u0c3e\u0c30\u0c02".split(","), 
SHORTWEEKDAYS:"\u0c06\u0c26\u0c3f,\u0c38\u0c4b\u0c2e,\u0c2e\u0c02\u0c17\u0c33,\u0c2c\u0c41\u0c27,\u0c17\u0c41\u0c30\u0c41,\u0c36\u0c41\u0c15\u0c4d\u0c30,\u0c36\u0c28\u0c3f".split(","), STANDALONESHORTWEEKDAYS:"\u0c06\u0c26\u0c3f,\u0c38\u0c4b\u0c2e,\u0c2e\u0c02\u0c17\u0c33,\u0c2c\u0c41\u0c27,\u0c17\u0c41\u0c30\u0c41,\u0c36\u0c41\u0c15\u0c4d\u0c30,\u0c36\u0c28\u0c3f".split(","), NARROWWEEKDAYS:"\u0c06,\u0c38\u0c4b,\u0c2e,\u0c2d\u0c41,\u0c17\u0c41,\u0c36\u0c41,\u0c36".split(","), STANDALONENARROWWEEKDAYS:"\u0c06,\u0c38\u0c4b,\u0c2e,\u0c2d\u0c41,\u0c17\u0c41,\u0c36\u0c41,\u0c36".split(","), 
SHORTQUARTERS:["\u0c12\u0c15\u0c1f\u0c3f 1", "\u0c30\u0c46\u0c02\u0c21\u0c41 2", "\u0c2e\u0c42\u0c21\u0c41 3", "\u0c28\u0c3e\u0c32\u0c41\u0c17\u0c41 4"], QUARTERS:["\u0c12\u0c15\u0c1f\u0c3f 1", "\u0c30\u0c46\u0c02\u0c21\u0c41 2", "\u0c2e\u0c42\u0c21\u0c41 3", "\u0c28\u0c3e\u0c32\u0c41\u0c17\u0c41 4"], AMPMS:["\u0c09", "\u0c38\u0c3e"], DATEFORMATS:["EEEE d MMMM y", "d MMMM y", "d MMM y", "dd-MM-yy"], TIMEFORMATS:["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[6, 
6], FIRSTWEEKCUTOFFDAY:2};
goog.i18n.DateTimeSymbols_th = {ERAS:["\u0e1b\u0e35\u0e01\u0e48\u0e2d\u0e19 \u0e04.\u0e28.", "\u0e04.\u0e28."], ERANAMES:["\u0e1b\u0e35\u0e01\u0e48\u0e2d\u0e19\u0e04\u0e23\u0e34\u0e2a\u0e15\u0e4c\u0e28\u0e31\u0e01\u0e23\u0e32\u0e0a", "\u0e04\u0e23\u0e34\u0e2a\u0e15\u0e4c\u0e28\u0e31\u0e01\u0e23\u0e32\u0e0a"], NARROWMONTHS:"\u0e21,\u0e01,\u0e21,\u0e21,\u0e1e,\u0e21,\u0e01,\u0e2a,\u0e01,\u0e15,\u0e1e,\u0e18".split(","), STANDALONENARROWMONTHS:"\u0e21.\u0e04.,\u0e01.\u0e1e.,\u0e21\u0e35.\u0e04.,\u0e40\u0e21.\u0e22.,\u0e1e.\u0e04.,\u0e21\u0e34.\u0e22.,\u0e01.\u0e04.,\u0e2a.\u0e04.,\u0e01.\u0e22.,\u0e15.\u0e04.,\u0e1e.\u0e22.,\u0e18.\u0e04.".split(","), 
MONTHS:"\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21,\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c,\u0e21\u0e35\u0e19\u0e32\u0e04\u0e21,\u0e40\u0e21\u0e29\u0e32\u0e22\u0e19,\u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21,\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19,\u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21,\u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21,\u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19,\u0e15\u0e38\u0e25\u0e32\u0e04\u0e21,\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19,\u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21".split(","), 
STANDALONEMONTHS:"\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21,\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c,\u0e21\u0e35\u0e19\u0e32\u0e04\u0e21,\u0e40\u0e21\u0e29\u0e32\u0e22\u0e19,\u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21,\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19,\u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21,\u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21,\u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19,\u0e15\u0e38\u0e25\u0e32\u0e04\u0e21,\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19,\u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21".split(","), 
SHORTMONTHS:"\u0e21.\u0e04.,\u0e01.\u0e1e.,\u0e21\u0e35.\u0e04.,\u0e40\u0e21.\u0e22.,\u0e1e.\u0e04.,\u0e21\u0e34.\u0e22.,\u0e01.\u0e04.,\u0e2a.\u0e04.,\u0e01.\u0e22.,\u0e15.\u0e04.,\u0e1e.\u0e22.,\u0e18.\u0e04.".split(","), STANDALONESHORTMONTHS:"\u0e21.\u0e04.,\u0e01.\u0e1e.,\u0e21\u0e35.\u0e04.,\u0e40\u0e21.\u0e22.,\u0e1e.\u0e04.,\u0e21\u0e34.\u0e22.,\u0e01.\u0e04.,\u0e2a.\u0e04.,\u0e01.\u0e22.,\u0e15.\u0e04.,\u0e1e.\u0e22.,\u0e18.\u0e04.".split(","), WEEKDAYS:"\u0e27\u0e31\u0e19\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c,\u0e27\u0e31\u0e19\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c,\u0e27\u0e31\u0e19\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23,\u0e27\u0e31\u0e19\u0e1e\u0e38\u0e18,\u0e27\u0e31\u0e19\u0e1e\u0e24\u0e2b\u0e31\u0e2a\u0e1a\u0e14\u0e35,\u0e27\u0e31\u0e19\u0e28\u0e38\u0e01\u0e23\u0e4c,\u0e27\u0e31\u0e19\u0e40\u0e2a\u0e32\u0e23\u0e4c".split(","), 
STANDALONEWEEKDAYS:"\u0e27\u0e31\u0e19\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c,\u0e27\u0e31\u0e19\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c,\u0e27\u0e31\u0e19\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23,\u0e27\u0e31\u0e19\u0e1e\u0e38\u0e18,\u0e27\u0e31\u0e19\u0e1e\u0e24\u0e2b\u0e31\u0e2a\u0e1a\u0e14\u0e35,\u0e27\u0e31\u0e19\u0e28\u0e38\u0e01\u0e23\u0e4c,\u0e27\u0e31\u0e19\u0e40\u0e2a\u0e32\u0e23\u0e4c".split(","), SHORTWEEKDAYS:"\u0e2d\u0e32.,\u0e08.,\u0e2d.,\u0e1e.,\u0e1e\u0e24.,\u0e28.,\u0e2a.".split(","), 
STANDALONESHORTWEEKDAYS:"\u0e2d\u0e32.,\u0e08.,\u0e2d.,\u0e1e.,\u0e1e\u0e24.,\u0e28.,\u0e2a.".split(","), NARROWWEEKDAYS:"\u0e2d,\u0e08,\u0e2d,\u0e1e,\u0e1e,\u0e28,\u0e2a".split(","), STANDALONENARROWWEEKDAYS:"\u0e2d,\u0e08,\u0e2d,\u0e1e,\u0e1e,\u0e28,\u0e2a".split(","), SHORTQUARTERS:["Q1", "Q2", "Q3", "Q4"], QUARTERS:["\u0e44\u0e15\u0e23\u0e21\u0e32\u0e2a 1", "\u0e44\u0e15\u0e23\u0e21\u0e32\u0e2a 2", "\u0e44\u0e15\u0e23\u0e21\u0e32\u0e2a 3", "\u0e44\u0e15\u0e23\u0e21\u0e32\u0e2a 4"], AMPMS:["\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07", 
"\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07"], DATEFORMATS:["EEEE\u0e17\u0e35\u0e48 d MMMM G y", "d MMMM y", "d MMM y", "d/M/yyyy"], TIMEFORMATS:["H \u0e19\u0e32\u0e2c\u0e34\u0e01\u0e32 m \u0e19\u0e32\u0e17\u0e35 ss \u0e27\u0e34\u0e19\u0e32\u0e17\u0e35 zzzz", "H \u0e19\u0e32\u0e2c\u0e34\u0e01\u0e32 m \u0e19\u0e32\u0e17\u0e35 ss \u0e27\u0e34\u0e19\u0e32\u0e17\u0e35 z", "H:mm:ss", "H:mm"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:2};
goog.i18n.DateTimeSymbols_tl = {ERAS:["BCE", "CE"], ERANAMES:["BCE", "CE"], NARROWMONTHS:"E,P,M,A,M,H,H,A,S,O,N,D".split(","), STANDALONENARROWMONTHS:"E,P,M,A,M,H,H,A,S,O,N,D".split(","), MONTHS:"Enero,Pebrero,Marso,Abril,Mayo,Hunyo,Hulyo,Agosto,Setyembre,Oktubre,Nobyembre,Disyembre".split(","), STANDALONEMONTHS:"Enero,Pebrero,Marso,Abril,Mayo,Hunyo,Hulyo,Agosto,Setyembre,Oktubre,Nobyembre,Disyembre".split(","), SHORTMONTHS:"Ene,Peb,Mar,Abr,May,Hun,Hul,Ago,Set,Okt,Nob,Dis".split(","), STANDALONESHORTMONTHS:"Ene,Peb,Mar,Abr,May,Hun,Hul,Ago,Set,Okt,Nob,Dis".split(","), 
WEEKDAYS:"Linggo,Lunes,Martes,Miyerkules,Huwebes,Biyernes,Sabado".split(","), STANDALONEWEEKDAYS:"Linggo,Lunes,Martes,Miyerkules,Huwebes,Biyernes,Sabado".split(","), SHORTWEEKDAYS:"Lin,Lun,Mar,Mye,Huw,Bye,Sab".split(","), STANDALONESHORTWEEKDAYS:"Lin,Lun,Mar,Miy,Huw,Biy,Sab".split(","), NARROWWEEKDAYS:"L,L,M,M,H,B,S".split(","), STANDALONENARROWWEEKDAYS:"L,L,M,M,H,B,S".split(","), SHORTQUARTERS:["Q1", "Q2", "Q3", "Q4"], QUARTERS:["Q1", "Q2", "Q3", "Q4"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE, MMMM dd y", 
"MMMM d, y", "MMM d, y", "M/d/yy"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:2};
goog.i18n.DateTimeSymbols_tr = {ERAS:["M\u00d6", "MS"], ERANAMES:["Milattan \u00d6nce", "Milattan Sonra"], NARROWMONTHS:"O,\u015e,M,N,M,H,T,A,E,E,K,A".split(","), STANDALONENARROWMONTHS:"O,\u015e,M,N,M,H,T,A,E,E,K,A".split(","), MONTHS:"Ocak,\u015eubat,Mart,Nisan,May\u0131s,Haziran,Temmuz,A\u011fustos,Eyl\u00fcl,Ekim,Kas\u0131m,Aral\u0131k".split(","), STANDALONEMONTHS:"Ocak,\u015eubat,Mart,Nisan,May\u0131s,Haziran,Temmuz,A\u011fustos,Eyl\u00fcl,Ekim,Kas\u0131m,Aral\u0131k".split(","), SHORTMONTHS:"Oca,\u015eub,Mar,Nis,May,Haz,Tem,A\u011fu,Eyl,Eki,Kas,Ara".split(","), 
STANDALONESHORTMONTHS:"Oca,\u015eub,Mar,Nis,May,Haz,Tem,A\u011fu,Eyl,Eki,Kas,Ara".split(","), WEEKDAYS:"Pazar,Pazartesi,Sal\u0131,\u00c7ar\u015famba,Per\u015fembe,Cuma,Cumartesi".split(","), STANDALONEWEEKDAYS:"Pazar,Pazartesi,Sal\u0131,\u00c7ar\u015famba,Per\u015fembe,Cuma,Cumartesi".split(","), SHORTWEEKDAYS:"Paz,Pzt,Sal,\u00c7ar,Per,Cum,Cmt".split(","), STANDALONESHORTWEEKDAYS:"Paz,Pzt,Sal,\u00c7ar,Per,Cum,Cmt".split(","), NARROWWEEKDAYS:"P,P,S,\u00c7,P,C,C".split(","), STANDALONENARROWWEEKDAYS:"P,P,S,\u00c7,P,C,C".split(","), 
SHORTQUARTERS:["\u00c71", "\u00c72", "\u00c73", "\u00c74"], QUARTERS:["1. \u00e7eyrek", "2. \u00e7eyrek", "3. \u00e7eyrek", "4. \u00e7eyrek"], AMPMS:["AM", "PM"], DATEFORMATS:["dd MMMM y EEEE", "dd MMMM y", "dd MMM y", "dd MM yyyy"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_uk = {ERAS:["\u0434\u043e \u043d.\u0435.", "\u043d.\u0435."], ERANAMES:["\u0434\u043e \u043d\u0430\u0448\u043e\u0457 \u0435\u0440\u0438", "\u043d\u0430\u0448\u043e\u0457 \u0435\u0440\u0438"], NARROWMONTHS:"\u0421,\u041b,\u0411,\u041a,\u0422,\u0427,\u041b,\u0421,\u0412,\u0416,\u041b,\u0413".split(","), STANDALONENARROWMONTHS:"\u0421,\u041b,\u0411,\u041a,\u0422,\u0427,\u041b,\u0421,\u0412,\u0416,\u041b,\u0413".split(","), MONTHS:"\u0441\u0456\u0447\u043d\u044f,\u043b\u044e\u0442\u043e\u0433\u043e,\u0431\u0435\u0440\u0435\u0437\u043d\u044f,\u043a\u0432\u0456\u0442\u043d\u044f,\u0442\u0440\u0430\u0432\u043d\u044f,\u0447\u0435\u0440\u0432\u043d\u044f,\u043b\u0438\u043f\u043d\u044f,\u0441\u0435\u0440\u043f\u043d\u044f,\u0432\u0435\u0440\u0435\u0441\u043d\u044f,\u0436\u043e\u0432\u0442\u043d\u044f,\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434\u0430,\u0433\u0440\u0443\u0434\u043d\u044f".split(","), 
STANDALONEMONTHS:"\u0421\u0456\u0447\u0435\u043d\u044c,\u041b\u044e\u0442\u0438\u0439,\u0411\u0435\u0440\u0435\u0437\u0435\u043d\u044c,\u041a\u0432\u0456\u0442\u0435\u043d\u044c,\u0422\u0440\u0430\u0432\u0435\u043d\u044c,\u0427\u0435\u0440\u0432\u0435\u043d\u044c,\u041b\u0438\u043f\u0435\u043d\u044c,\u0421\u0435\u0440\u043f\u0435\u043d\u044c,\u0412\u0435\u0440\u0435\u0441\u0435\u043d\u044c,\u0416\u043e\u0432\u0442\u0435\u043d\u044c,\u041b\u0438\u0441\u0442\u043e\u043f\u0430\u0434,\u0413\u0440\u0443\u0434\u0435\u043d\u044c".split(","), 
SHORTMONTHS:"\u0441\u0456\u0447.,\u043b\u044e\u0442.,\u0431\u0435\u0440.,\u043a\u0432\u0456\u0442.,\u0442\u0440\u0430\u0432.,\u0447\u0435\u0440\u0432.,\u043b\u0438\u043f.,\u0441\u0435\u0440\u043f.,\u0432\u0435\u0440.,\u0436\u043e\u0432\u0442.,\u043b\u0438\u0441\u0442.,\u0433\u0440\u0443\u0434.".split(","), STANDALONESHORTMONTHS:"\u0421\u0456\u0447,\u041b\u044e\u0442,\u0411\u0435\u0440,\u041a\u0432\u0456,\u0422\u0440\u0430,\u0427\u0435\u0440,\u041b\u0438\u043f,\u0421\u0435\u0440,\u0412\u0435\u0440,\u0416\u043e\u0432,\u041b\u0438\u0441,\u0413\u0440\u0443".split(","), 
WEEKDAYS:"\u041d\u0435\u0434\u0456\u043b\u044f,\u041f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a,\u0412\u0456\u0432\u0442\u043e\u0440\u043e\u043a,\u0421\u0435\u0440\u0435\u0434\u0430,\u0427\u0435\u0442\u0432\u0435\u0440,\u041f\u02bc\u044f\u0442\u043d\u0438\u0446\u044f,\u0421\u0443\u0431\u043e\u0442\u0430".split(","), STANDALONEWEEKDAYS:"\u041d\u0435\u0434\u0456\u043b\u044f,\u041f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a,\u0412\u0456\u0432\u0442\u043e\u0440\u043e\u043a,\u0421\u0435\u0440\u0435\u0434\u0430,\u0427\u0435\u0442\u0432\u0435\u0440,\u041f\u02bc\u044f\u0442\u043d\u0438\u0446\u044f,\u0421\u0443\u0431\u043e\u0442\u0430".split(","), 
SHORTWEEKDAYS:"\u041d\u0434,\u041f\u043d,\u0412\u0442,\u0421\u0440,\u0427\u0442,\u041f\u0442,\u0421\u0431".split(","), STANDALONESHORTWEEKDAYS:"\u041d\u0434,\u041f\u043d,\u0412\u0442,\u0421\u0440,\u0427\u0442,\u041f\u0442,\u0421\u0431".split(","), NARROWWEEKDAYS:"\u041d,\u041f,\u0412,\u0421,\u0427,\u041f,\u0421".split(","), STANDALONENARROWWEEKDAYS:"\u041d,\u041f,\u0412,\u0421,\u0427,\u041f,\u0421".split(","), SHORTQUARTERS:["I \u043a\u0432.", "II \u043a\u0432.", "III \u043a\u0432.", "IV \u043a\u0432."], 
QUARTERS:["I \u043a\u0432\u0430\u0440\u0442\u0430\u043b", "II \u043a\u0432\u0430\u0440\u0442\u0430\u043b", "III \u043a\u0432\u0430\u0440\u0442\u0430\u043b", "IV \u043a\u0432\u0430\u0440\u0442\u0430\u043b"], AMPMS:["\u0434\u043f", "\u043f\u043f"], DATEFORMATS:["EEEE, d MMMM y '\u0440'.", "d MMMM y '\u0440'.", "d MMM y", "dd.MM.yy"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_ur = {ERAS:["\u0642 \u0645", "\u0639\u064a\u0633\u0648\u06cc \u0633\u0646"], ERANAMES:["\u0642\u0628\u0644 \u0645\u0633\u064a\u062d", "\u0639\u064a\u0633\u0648\u06cc \u0633\u0646"], NARROWMONTHS:"\u062c,\u0641,\u0645,\u0627,\u0645,\u062c,\u062c,\u0627,\u0633,\u0627,\u0646,\u062f".split(","), STANDALONENARROWMONTHS:"\u062c,\u0641,\u0645,\u0627,\u0645,\u062c,\u062c,\u0627,\u0633,\u0627,\u0646,\u062f".split(","), MONTHS:"\u062c\u0646\u0648\u0631\u06cc,\u0641\u0631\u0648\u0631\u06cc,\u0645\u0627\u0631 \u0686,\u0627\u067e\u0631\u064a\u0644,\u0645\u0626,\u062c\u0648\u0646,\u062c\u0648\u0644\u0627\u0626,\u0627\u06af\u0633\u062a,\u0633\u062a\u0645\u0628\u0631,\u0627\u06a9\u062a\u0648\u0628\u0631,\u0646\u0648\u0645\u0628\u0631,\u062f\u0633\u0645\u0628\u0631".split(","), 
STANDALONEMONTHS:"\u062c\u0646\u0648\u0631\u06cc,\u0641\u0631\u0648\u0631\u06cc,\u0645\u0627\u0631 \u0686,\u0627\u067e\u0631\u064a\u0644,\u0645\u0626,\u062c\u0648\u0646,\u062c\u0648\u0644\u0627\u0626,\u0627\u06af\u0633\u062a,\u0633\u062a\u0645\u0628\u0631,\u0627\u06a9\u062a\u0648\u0628\u0631,\u0646\u0648\u0645\u0628\u0631,\u062f\u0633\u0645\u0628\u0631".split(","), SHORTMONTHS:"\u062c\u0646\u0648\u0631\u06cc,\u0641\u0631\u0648\u0631\u06cc,\u0645\u0627\u0631 \u0686,\u0627\u067e\u0631\u064a\u0644,\u0645\u0626,\u062c\u0648\u0646,\u062c\u0648\u0644\u0627\u0626,\u0627\u06af\u0633\u062a,\u0633\u062a\u0645\u0628\u0631,\u0627\u06a9\u062a\u0648\u0628\u0631,\u0646\u0648\u0645\u0628\u0631,\u062f\u0633\u0645\u0628\u0631".split(","), 
STANDALONESHORTMONTHS:"\u062c\u0646\u0648\u0631\u06cc,\u0641\u0631\u0648\u0631\u06cc,\u0645\u0627\u0631 \u0686,\u0627\u067e\u0631\u064a\u0644,\u0645\u0626,\u062c\u0648\u0646,\u062c\u0648\u0644\u0627\u0626,\u0627\u06af\u0633\u062a,\u0633\u062a\u0645\u0628\u0631,\u0627\u06a9\u062a\u0648\u0628\u0631,\u0646\u0648\u0645\u0628\u0631,\u062f\u0633\u0645\u0628\u0631".split(","), WEEKDAYS:"\u0627\u062a\u0648\u0627\u0631,\u067e\u064a\u0631,\u0645\u0646\u06af\u0644,\u0628\u062f\u0647,\u062c\u0645\u0639\u0631\u0627\u062a,\u062c\u0645\u0639\u06c1,\u06c1\u0641\u062a\u06c1".split(","), 
STANDALONEWEEKDAYS:"\u0627\u062a\u0648\u0627\u0631,\u067e\u064a\u0631,\u0645\u0646\u06af\u0644,\u0628\u062f\u0647,\u062c\u0645\u0639\u0631\u0627\u062a,\u062c\u0645\u0639\u06c1,\u06c1\u0641\u062a\u06c1".split(","), SHORTWEEKDAYS:"\u0627\u062a\u0648\u0627\u0631,\u067e\u064a\u0631,\u0645\u0646\u06af\u0644,\u0628\u062f\u0647,\u062c\u0645\u0639\u0631\u0627\u062a,\u062c\u0645\u0639\u06c1,\u06c1\u0641\u062a\u06c1".split(","), STANDALONESHORTWEEKDAYS:"\u0627\u062a\u0648\u0627\u0631,\u067e\u064a\u0631,\u0645\u0646\u06af\u0644,\u0628\u062f\u0647,\u062c\u0645\u0639\u0631\u0627\u062a,\u062c\u0645\u0639\u06c1,\u06c1\u0641\u062a\u06c1".split(","), 
NARROWWEEKDAYS:"\u0627,\u067e,\u0645,\u0628,\u062c,\u062c,\u06c1".split(","), STANDALONENARROWWEEKDAYS:"\u0627,\u067e,\u0645,\u0628,\u062c,\u062c,\u06c1".split(","), SHORTQUARTERS:["1\u0633\u06c1 \u0645\u0627\u06c1\u06cc", "2\u0633\u06c1 \u0645\u0627\u06c1\u06cc", "3\u0633\u06c1 \u0645\u0627\u06c1\u06cc", "4\u0633\u06c1 \u0645\u0627\u06c1\u06cc"], QUARTERS:["\u067e\u06c1\u0644\u06cc \u0633\u06c1 \u0645\u0627\u06c1\u06cc", "\u062f\u0648\u0633\u0631\u06cc \u0633\u06c1 \u0645\u0627\u06c1\u06cc", "\u062a\u064a\u0633\u0631\u06cc \u0633\u06c1 \u0645\u0627\u06c1\u06cc", 
"\u0686\u0648\u062a\u0647\u06cc \u0633\u06c1 \u0645\u0627\u06c1\u06cc"], AMPMS:["\u0642\u0628\u0644 \u062f\u0648\u067e\u06c1\u0631", "\u0628\u0639\u062f \u062f\u0648\u067e\u06c1\u0631"], DATEFORMATS:["EEEE, d, MMMM y", "d, MMMM y", "d, MMM y", "d/M/yy"], TIMEFORMATS:["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:2};
goog.i18n.DateTimeSymbols_vi = {ERAS:["tr. CN", "sau CN"], ERANAMES:["tr. CN", "sau CN"], NARROWMONTHS:"1,2,3,4,5,6,7,8,9,10,11,12".split(","), STANDALONENARROWMONTHS:"1,2,3,4,5,6,7,8,9,10,11,12".split(","), MONTHS:"th\u00e1ng m\u1ed9t,th\u00e1ng hai,th\u00e1ng ba,th\u00e1ng t\u01b0,th\u00e1ng n\u0103m,th\u00e1ng s\u00e1u,th\u00e1ng b\u1ea3y,th\u00e1ng t\u00e1m,th\u00e1ng ch\u00edn,th\u00e1ng m\u01b0\u1eddi,th\u00e1ng m\u01b0\u1eddi m\u1ed9t,th\u00e1ng m\u01b0\u1eddi hai".split(","), STANDALONEMONTHS:"th\u00e1ng m\u1ed9t,th\u00e1ng hai,th\u00e1ng ba,th\u00e1ng t\u01b0,th\u00e1ng n\u0103m,th\u00e1ng s\u00e1u,th\u00e1ng b\u1ea3y,th\u00e1ng t\u00e1m,th\u00e1ng ch\u00edn,th\u00e1ng m\u01b0\u1eddi,th\u00e1ng m\u01b0\u1eddi m\u1ed9t,th\u00e1ng m\u01b0\u1eddi hai".split(","), 
SHORTMONTHS:"thg 1,thg 2,thg 3,thg 4,thg 5,thg 6,thg 7,thg 8,thg 9,thg 10,thg 11,thg 12".split(","), STANDALONESHORTMONTHS:"thg 1,thg 2,thg 3,thg 4,thg 5,thg 6,thg 7,thg 8,thg 9,thg 10,thg 11,thg 12".split(","), WEEKDAYS:"Ch\u1ee7 nh\u1eadt,Th\u1ee9 hai,Th\u1ee9 ba,Th\u1ee9 t\u01b0,Th\u1ee9 n\u0103m,Th\u1ee9 s\u00e1u,Th\u1ee9 b\u1ea3y".split(","), STANDALONEWEEKDAYS:"Ch\u1ee7 nh\u1eadt,Th\u1ee9 hai,Th\u1ee9 ba,Th\u1ee9 t\u01b0,Th\u1ee9 n\u0103m,Th\u1ee9 s\u00e1u,Th\u1ee9 b\u1ea3y".split(","), SHORTWEEKDAYS:"CN,Th 2,Th 3,Th 4,Th 5,Th 6,Th 7".split(","), 
STANDALONESHORTWEEKDAYS:"CN,Th 2,Th 3,Th 4,Th 5,Th 6,Th 7".split(","), NARROWWEEKDAYS:"CN,T2,T3,T4,T5,T6,T7".split(","), STANDALONENARROWWEEKDAYS:"CN,T2,T3,T4,T5,T6,T7".split(","), SHORTQUARTERS:["Q1", "Q2", "Q3", "Q4"], QUARTERS:["Q1", "Q2", "Q3", "Q4"], AMPMS:["SA", "CH"], DATEFORMATS:["EEEE, 'ng\u00e0y' dd MMMM 'n\u0103m' y", "'Ng\u00e0y' dd 'th\u00e1ng' M 'n\u0103m' y", "dd-MM-yyyy", "dd/MM/yyyy"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 
6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_zh = {ERAS:["\u516c\u5143\u524d", "\u516c\u5143"], ERANAMES:["\u516c\u5143\u524d", "\u516c\u5143"], NARROWMONTHS:"1\u6708,2\u6708,3\u6708,4\u6708,5\u6708,6\u6708,7\u6708,8\u6708,9\u6708,10\u6708,11\u6708,12\u6708".split(","), STANDALONENARROWMONTHS:"1\u6708,2\u6708,3\u6708,4\u6708,5\u6708,6\u6708,7\u6708,8\u6708,9\u6708,10\u6708,11\u6708,12\u6708".split(","), MONTHS:"1\u6708,2\u6708,3\u6708,4\u6708,5\u6708,6\u6708,7\u6708,8\u6708,9\u6708,10\u6708,11\u6708,12\u6708".split(","), 
STANDALONEMONTHS:"\u4e00\u6708,\u4e8c\u6708,\u4e09\u6708,\u56db\u6708,\u4e94\u6708,\u516d\u6708,\u4e03\u6708,\u516b\u6708,\u4e5d\u6708,\u5341\u6708,\u5341\u4e00\u6708,\u5341\u4e8c\u6708".split(","), SHORTMONTHS:"1\u6708,2\u6708,3\u6708,4\u6708,5\u6708,6\u6708,7\u6708,8\u6708,9\u6708,10\u6708,11\u6708,12\u6708".split(","), STANDALONESHORTMONTHS:"\u4e00\u6708,\u4e8c\u6708,\u4e09\u6708,\u56db\u6708,\u4e94\u6708,\u516d\u6708,\u4e03\u6708,\u516b\u6708,\u4e5d\u6708,\u5341\u6708,\u5341\u4e00\u6708,\u5341\u4e8c\u6708".split(","), 
WEEKDAYS:"\u661f\u671f\u65e5,\u661f\u671f\u4e00,\u661f\u671f\u4e8c,\u661f\u671f\u4e09,\u661f\u671f\u56db,\u661f\u671f\u4e94,\u661f\u671f\u516d".split(","), STANDALONEWEEKDAYS:"\u661f\u671f\u65e5,\u661f\u671f\u4e00,\u661f\u671f\u4e8c,\u661f\u671f\u4e09,\u661f\u671f\u56db,\u661f\u671f\u4e94,\u661f\u671f\u516d".split(","), SHORTWEEKDAYS:"\u5468\u65e5,\u5468\u4e00,\u5468\u4e8c,\u5468\u4e09,\u5468\u56db,\u5468\u4e94,\u5468\u516d".split(","), STANDALONESHORTWEEKDAYS:"\u5468\u65e5,\u5468\u4e00,\u5468\u4e8c,\u5468\u4e09,\u5468\u56db,\u5468\u4e94,\u5468\u516d".split(","), 
NARROWWEEKDAYS:"\u65e5,\u4e00,\u4e8c,\u4e09,\u56db,\u4e94,\u516d".split(","), STANDALONENARROWWEEKDAYS:"\u65e5,\u4e00,\u4e8c,\u4e09,\u56db,\u4e94,\u516d".split(","), SHORTQUARTERS:["1\u5b63", "2\u5b63", "3\u5b63", "4\u5b63"], QUARTERS:["\u7b2c1\u5b63\u5ea6", "\u7b2c2\u5b63\u5ea6", "\u7b2c3\u5b63\u5ea6", "\u7b2c4\u5b63\u5ea6"], AMPMS:["\u4e0a\u5348", "\u4e0b\u5348"], DATEFORMATS:["y\u5e74M\u6708d\u65e5EEEE", "y\u5e74M\u6708d\u65e5", "yyyy-M-d", "yy-M-d"], TIMEFORMATS:["zzzzah\u65f6mm\u5206ss\u79d2", 
"zah\u65f6mm\u5206ss\u79d2", "ah:mm:ss", "ah:mm"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:2};
goog.i18n.DateTimeSymbols_zh_CN = goog.i18n.DateTimeSymbols_zh;
goog.i18n.DateTimeSymbols_zh_HK = {ERAS:["\u897f\u5143\u524d", "\u897f\u5143"], ERANAMES:["\u897f\u5143\u524d", "\u897f\u5143"], NARROWMONTHS:"1,2,3,4,5,6,7,8,9,10,11,12".split(","), STANDALONENARROWMONTHS:"1,2,3,4,5,6,7,8,9,10,11,12".split(","), MONTHS:"1\u6708,2\u6708,3\u6708,4\u6708,5\u6708,6\u6708,7\u6708,8\u6708,9\u6708,10\u6708,11\u6708,12\u6708".split(","), STANDALONEMONTHS:"\u4e00\u6708,\u4e8c\u6708,\u4e09\u6708,\u56db\u6708,\u4e94\u6708,\u516d\u6708,\u4e03\u6708,\u516b\u6708,\u4e5d\u6708,\u5341\u6708,\u5341\u4e00\u6708,\u5341\u4e8c\u6708".split(","), 
SHORTMONTHS:"1\u6708,2\u6708,3\u6708,4\u6708,5\u6708,6\u6708,7\u6708,8\u6708,9\u6708,10\u6708,11\u6708,12\u6708".split(","), STANDALONESHORTMONTHS:"\u4e00\u6708,\u4e8c\u6708,\u4e09\u6708,\u56db\u6708,\u4e94\u6708,\u516d\u6708,\u4e03\u6708,\u516b\u6708,\u4e5d\u6708,\u5341\u6708,\u5341\u4e00\u6708,\u5341\u4e8c\u6708".split(","), WEEKDAYS:"\u661f\u671f\u65e5,\u661f\u671f\u4e00,\u661f\u671f\u4e8c,\u661f\u671f\u4e09,\u661f\u671f\u56db,\u661f\u671f\u4e94,\u661f\u671f\u516d".split(","), STANDALONEWEEKDAYS:"\u661f\u671f\u65e5,\u661f\u671f\u4e00,\u661f\u671f\u4e8c,\u661f\u671f\u4e09,\u661f\u671f\u56db,\u661f\u671f\u4e94,\u661f\u671f\u516d".split(","), 
SHORTWEEKDAYS:"\u9031\u65e5,\u9031\u4e00,\u9031\u4e8c,\u9031\u4e09,\u9031\u56db,\u9031\u4e94,\u9031\u516d".split(","), STANDALONESHORTWEEKDAYS:"\u9031\u65e5,\u9031\u4e00,\u9031\u4e8c,\u9031\u4e09,\u9031\u56db,\u9031\u4e94,\u9031\u516d".split(","), NARROWWEEKDAYS:"\u65e5,\u4e00,\u4e8c,\u4e09,\u56db,\u4e94,\u516d".split(","), STANDALONENARROWWEEKDAYS:"\u65e5,\u4e00,\u4e8c,\u4e09,\u56db,\u4e94,\u516d".split(","), SHORTQUARTERS:["1\u5b63", "2\u5b63", "3\u5b63", "4\u5b63"], QUARTERS:["\u7b2c1\u5b63", 
"\u7b2c2\u5b63", "\u7b2c3\u5b63", "\u7b2c4\u5b63"], AMPMS:["\u4e0a\u5348", "\u4e0b\u5348"], DATEFORMATS:["y\u5e74M\u6708d\u65e5EEEE", "y\u5e74M\u6708d\u65e5", "y\u5e74M\u6708d\u65e5", "yy\u5e74M\u6708d\u65e5"], TIMEFORMATS:["zzzzah\u6642mm\u5206ss\u79d2", "zah\u6642mm\u5206ss\u79d2", "ahh:mm:ss", "ah:mm"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:2};
goog.i18n.DateTimeSymbols_zh_TW = {ERAS:["\u897f\u5143\u524d", "\u897f\u5143"], ERANAMES:["\u897f\u5143\u524d", "\u897f\u5143"], NARROWMONTHS:"1,2,3,4,5,6,7,8,9,10,11,12".split(","), STANDALONENARROWMONTHS:"1,2,3,4,5,6,7,8,9,10,11,12".split(","), MONTHS:"1\u6708,2\u6708,3\u6708,4\u6708,5\u6708,6\u6708,7\u6708,8\u6708,9\u6708,10\u6708,11\u6708,12\u6708".split(","), STANDALONEMONTHS:"\u4e00\u6708,\u4e8c\u6708,\u4e09\u6708,\u56db\u6708,\u4e94\u6708,\u516d\u6708,\u4e03\u6708,\u516b\u6708,\u4e5d\u6708,\u5341\u6708,\u5341\u4e00\u6708,\u5341\u4e8c\u6708".split(","), 
SHORTMONTHS:"1\u6708,2\u6708,3\u6708,4\u6708,5\u6708,6\u6708,7\u6708,8\u6708,9\u6708,10\u6708,11\u6708,12\u6708".split(","), STANDALONESHORTMONTHS:"\u4e00\u6708,\u4e8c\u6708,\u4e09\u6708,\u56db\u6708,\u4e94\u6708,\u516d\u6708,\u4e03\u6708,\u516b\u6708,\u4e5d\u6708,\u5341\u6708,\u5341\u4e00\u6708,\u5341\u4e8c\u6708".split(","), WEEKDAYS:"\u661f\u671f\u65e5,\u661f\u671f\u4e00,\u661f\u671f\u4e8c,\u661f\u671f\u4e09,\u661f\u671f\u56db,\u661f\u671f\u4e94,\u661f\u671f\u516d".split(","), STANDALONEWEEKDAYS:"\u661f\u671f\u65e5,\u661f\u671f\u4e00,\u661f\u671f\u4e8c,\u661f\u671f\u4e09,\u661f\u671f\u56db,\u661f\u671f\u4e94,\u661f\u671f\u516d".split(","), 
SHORTWEEKDAYS:"\u9031\u65e5,\u9031\u4e00,\u9031\u4e8c,\u9031\u4e09,\u9031\u56db,\u9031\u4e94,\u9031\u516d".split(","), STANDALONESHORTWEEKDAYS:"\u9031\u65e5,\u9031\u4e00,\u9031\u4e8c,\u9031\u4e09,\u9031\u56db,\u9031\u4e94,\u9031\u516d".split(","), NARROWWEEKDAYS:"\u65e5,\u4e00,\u4e8c,\u4e09,\u56db,\u4e94,\u516d".split(","), STANDALONENARROWWEEKDAYS:"\u65e5,\u4e00,\u4e8c,\u4e09,\u56db,\u4e94,\u516d".split(","), SHORTQUARTERS:["1\u5b63", "2\u5b63", "3\u5b63", "4\u5b63"], QUARTERS:["\u7b2c1\u5b63", 
"\u7b2c2\u5b63", "\u7b2c3\u5b63", "\u7b2c4\u5b63"], AMPMS:["\u4e0a\u5348", "\u4e0b\u5348"], DATEFORMATS:["y\u5e74M\u6708d\u65e5EEEE", "y\u5e74M\u6708d\u65e5", "yyyy/M/d", "yy/M/d"], TIMEFORMATS:["zzzzah\u6642mm\u5206ss\u79d2", "zah\u6642mm\u5206ss\u79d2", "ah:mm:ss", "ah:mm"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:2};
goog.i18n.DateTimeSymbols = "am" == goog.LOCALE ? goog.i18n.DateTimeSymbols_am : "ar" == goog.LOCALE ? goog.i18n.DateTimeSymbols_ar : "bg" == goog.LOCALE ? goog.i18n.DateTimeSymbols_bg : "bn" == goog.LOCALE ? goog.i18n.DateTimeSymbols_bn : "ca" == goog.LOCALE ? goog.i18n.DateTimeSymbols_ca : "cs" == goog.LOCALE ? goog.i18n.DateTimeSymbols_cs : "da" == goog.LOCALE ? goog.i18n.DateTimeSymbols_da : "de" == goog.LOCALE ? goog.i18n.DateTimeSymbols_de : "de_AT" == goog.LOCALE || "de-AT" == goog.LOCALE ? 
goog.i18n.DateTimeSymbols_de_AT : "de_CH" == goog.LOCALE || "de-CH" == goog.LOCALE ? goog.i18n.DateTimeSymbols_de : "el" == goog.LOCALE ? goog.i18n.DateTimeSymbols_el : "en" == goog.LOCALE ? goog.i18n.DateTimeSymbols_en : "en_AU" == goog.LOCALE || "en-AU" == goog.LOCALE ? goog.i18n.DateTimeSymbols_en_AU : "en_GB" == goog.LOCALE || "en-GB" == goog.LOCALE ? goog.i18n.DateTimeSymbols_en_GB : "en_IE" == goog.LOCALE || "en-IE" == goog.LOCALE ? goog.i18n.DateTimeSymbols_en_IE : "en_IN" == goog.LOCALE || 
"en-IN" == goog.LOCALE ? goog.i18n.DateTimeSymbols_en_IN : "en_SG" == goog.LOCALE || "en-SG" == goog.LOCALE ? goog.i18n.DateTimeSymbols_en_SG : "en_US" == goog.LOCALE || "en-US" == goog.LOCALE ? goog.i18n.DateTimeSymbols_en : "en_ZA" == goog.LOCALE || "en-ZA" == goog.LOCALE ? goog.i18n.DateTimeSymbols_en_ZA : "es" == goog.LOCALE ? goog.i18n.DateTimeSymbols_es : "et" == goog.LOCALE ? goog.i18n.DateTimeSymbols_et : "eu" == goog.LOCALE ? goog.i18n.DateTimeSymbols_eu : "fa" == goog.LOCALE ? goog.i18n.DateTimeSymbols_fa : 
"fi" == goog.LOCALE ? goog.i18n.DateTimeSymbols_fi : "fil" == goog.LOCALE ? goog.i18n.DateTimeSymbols_fil : "fr" == goog.LOCALE ? goog.i18n.DateTimeSymbols_fr : "fr_CA" == goog.LOCALE || "fr-CA" == goog.LOCALE ? goog.i18n.DateTimeSymbols_fr_CA : "gl" == goog.LOCALE ? goog.i18n.DateTimeSymbols_gl : "gsw" == goog.LOCALE ? goog.i18n.DateTimeSymbols_gsw : "gu" == goog.LOCALE ? goog.i18n.DateTimeSymbols_gu : "he" == goog.LOCALE ? goog.i18n.DateTimeSymbols_he : "hi" == goog.LOCALE ? goog.i18n.DateTimeSymbols_hi : 
"hr" == goog.LOCALE ? goog.i18n.DateTimeSymbols_hr : "hu" == goog.LOCALE ? goog.i18n.DateTimeSymbols_hu : "id" == goog.LOCALE ? goog.i18n.DateTimeSymbols_id : "in" == goog.LOCALE ? goog.i18n.DateTimeSymbols_in : "is" == goog.LOCALE ? goog.i18n.DateTimeSymbols_is : "it" == goog.LOCALE ? goog.i18n.DateTimeSymbols_it : "iw" == goog.LOCALE ? goog.i18n.DateTimeSymbols_iw : "ja" == goog.LOCALE ? goog.i18n.DateTimeSymbols_ja : "kn" == goog.LOCALE ? goog.i18n.DateTimeSymbols_kn : "ko" == goog.LOCALE ? goog.i18n.DateTimeSymbols_ko : 
"ln" == goog.LOCALE ? goog.i18n.DateTimeSymbols_ln : "lt" == goog.LOCALE ? goog.i18n.DateTimeSymbols_lt : "lv" == goog.LOCALE ? goog.i18n.DateTimeSymbols_lv : "ml" == goog.LOCALE ? goog.i18n.DateTimeSymbols_ml : "mo" == goog.LOCALE ? goog.i18n.DateTimeSymbols_mo : "mr" == goog.LOCALE ? goog.i18n.DateTimeSymbols_mr : "ms" == goog.LOCALE ? goog.i18n.DateTimeSymbols_ms : "mt" == goog.LOCALE ? goog.i18n.DateTimeSymbols_mt : "nl" == goog.LOCALE ? goog.i18n.DateTimeSymbols_nl : "no" == goog.LOCALE ? goog.i18n.DateTimeSymbols_no : 
"or" == goog.LOCALE ? goog.i18n.DateTimeSymbols_or : "pl" == goog.LOCALE ? goog.i18n.DateTimeSymbols_pl : "pt" == goog.LOCALE ? goog.i18n.DateTimeSymbols_pt : "pt_BR" == goog.LOCALE || "pt-BR" == goog.LOCALE ? goog.i18n.DateTimeSymbols_pt : "pt_PT" == goog.LOCALE || "pt-PT" == goog.LOCALE ? goog.i18n.DateTimeSymbols_pt_PT : "ro" == goog.LOCALE ? goog.i18n.DateTimeSymbols_ro : "ru" == goog.LOCALE ? goog.i18n.DateTimeSymbols_ru : "sk" == goog.LOCALE ? goog.i18n.DateTimeSymbols_sk : "sl" == goog.LOCALE ? 
goog.i18n.DateTimeSymbols_sl : "sq" == goog.LOCALE ? goog.i18n.DateTimeSymbols_sq : "sr" == goog.LOCALE ? goog.i18n.DateTimeSymbols_sr : "sv" == goog.LOCALE ? goog.i18n.DateTimeSymbols_sv : "sw" == goog.LOCALE ? goog.i18n.DateTimeSymbols_sw : "ta" == goog.LOCALE ? goog.i18n.DateTimeSymbols_ta : "te" == goog.LOCALE ? goog.i18n.DateTimeSymbols_te : "th" == goog.LOCALE ? goog.i18n.DateTimeSymbols_th : "tl" == goog.LOCALE ? goog.i18n.DateTimeSymbols_tl : "tr" == goog.LOCALE ? goog.i18n.DateTimeSymbols_tr : 
"uk" == goog.LOCALE ? goog.i18n.DateTimeSymbols_uk : "ur" == goog.LOCALE ? goog.i18n.DateTimeSymbols_ur : "vi" == goog.LOCALE ? goog.i18n.DateTimeSymbols_vi : "zh" == goog.LOCALE ? goog.i18n.DateTimeSymbols_zh : "zh_CN" == goog.LOCALE || "zh-CN" == goog.LOCALE ? goog.i18n.DateTimeSymbols_zh : "zh_HK" == goog.LOCALE || "zh-HK" == goog.LOCALE ? goog.i18n.DateTimeSymbols_zh_HK : "zh_TW" == goog.LOCALE || "zh-TW" == goog.LOCALE ? goog.i18n.DateTimeSymbols_zh_TW : goog.i18n.DateTimeSymbols_en;
goog.i18n.TimeZone = function() {
};
goog.i18n.TimeZone.MILLISECONDS_PER_HOUR_ = 36E5;
goog.i18n.TimeZone.NameType = {STD_SHORT_NAME:0, STD_LONG_NAME:1, DLT_SHORT_NAME:2, DLT_LONG_NAME:3};
goog.i18n.TimeZone.createTimeZone = function(a) {
  if("number" == typeof a) {
    return goog.i18n.TimeZone.createSimpleTimeZone_(a)
  }
  var b = new goog.i18n.TimeZone;
  b.timeZoneId_ = a.id;
  b.standardOffset_ = -a.std_offset;
  b.tzNames_ = a.names;
  b.transitions_ = a.transitions;
  return b
};
goog.i18n.TimeZone.createSimpleTimeZone_ = function(a) {
  var b = new goog.i18n.TimeZone;
  b.standardOffset_ = a;
  b.timeZoneId_ = goog.i18n.TimeZone.composePosixTimeZoneID_(a);
  a = goog.i18n.TimeZone.composeUTCString_(a);
  b.tzNames_ = [a, a];
  b.transitions_ = [];
  return b
};
goog.i18n.TimeZone.composeGMTString_ = function(a) {
  var b = ["GMT"];
  b.push(0 >= a ? "+" : "-");
  a = Math.abs(a);
  b.push(goog.string.padNumber(Math.floor(a / 60) % 100, 2), ":", goog.string.padNumber(a % 60, 2));
  return b.join("")
};
goog.i18n.TimeZone.composePosixTimeZoneID_ = function(a) {
  if(0 == a) {
    return"Etc/GMT"
  }
  var b = ["Etc/GMT", 0 > a ? "-" : "+"], a = Math.abs(a);
  b.push(Math.floor(a / 60) % 100);
  a %= 60;
  0 != a && b.push(":", goog.string.padNumber(a, 2));
  return b.join("")
};
goog.i18n.TimeZone.composeUTCString_ = function(a) {
  if(0 == a) {
    return"UTC"
  }
  var b = ["UTC", 0 > a ? "+" : "-"], a = Math.abs(a);
  b.push(Math.floor(a / 60) % 100);
  a %= 60;
  0 != a && b.push(":", a);
  return b.join("")
};
goog.i18n.TimeZone.prototype.getTimeZoneData = function() {
  return{id:this.timeZoneId_, std_offset:-this.standardOffset_, names:goog.array.clone(this.tzNames_), transitions:goog.array.clone(this.transitions_)}
};
goog.i18n.TimeZone.prototype.getDaylightAdjustment = function(a) {
  for(var a = Date.UTC(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate(), a.getUTCHours(), a.getUTCMinutes()) / goog.i18n.TimeZone.MILLISECONDS_PER_HOUR_, b = 0;b < this.transitions_.length && a >= this.transitions_[b];) {
    b += 2
  }
  return 0 == b ? 0 : this.transitions_[b - 1]
};
goog.i18n.TimeZone.prototype.getGMTString = function(a) {
  return goog.i18n.TimeZone.composeGMTString_(this.getOffset(a))
};
goog.i18n.TimeZone.prototype.getLongName = function(a) {
  return this.tzNames_[this.isDaylightTime(a) ? goog.i18n.TimeZone.NameType.DLT_LONG_NAME : goog.i18n.TimeZone.NameType.STD_LONG_NAME]
};
goog.i18n.TimeZone.prototype.getOffset = function(a) {
  return this.standardOffset_ - this.getDaylightAdjustment(a)
};
goog.i18n.TimeZone.prototype.getRFCTimeZoneString = function(a) {
  var a = -this.getOffset(a), b = [0 > a ? "-" : "+"], a = Math.abs(a);
  b.push(goog.string.padNumber(Math.floor(a / 60) % 100, 2), goog.string.padNumber(a % 60, 2));
  return b.join("")
};
goog.i18n.TimeZone.prototype.getShortName = function(a) {
  return this.tzNames_[this.isDaylightTime(a) ? goog.i18n.TimeZone.NameType.DLT_SHORT_NAME : goog.i18n.TimeZone.NameType.STD_SHORT_NAME]
};
goog.i18n.TimeZone.prototype.getTimeZoneId = function() {
  return this.timeZoneId_
};
goog.i18n.TimeZone.prototype.isDaylightTime = function(a) {
  return 0 < this.getDaylightAdjustment(a)
};
goog.i18n.DateTimeFormat = function(a) {
  goog.asserts.assert(goog.isDef(a), "Pattern must be defined");
  this.patternParts_ = [];
  "number" == typeof a ? this.applyStandardPattern_(a) : this.applyPattern_(a)
};
goog.i18n.DateTimeFormat.Format = {FULL_DATE:0, LONG_DATE:1, MEDIUM_DATE:2, SHORT_DATE:3, FULL_TIME:4, LONG_TIME:5, MEDIUM_TIME:6, SHORT_TIME:7, FULL_DATETIME:8, LONG_DATETIME:9, MEDIUM_DATETIME:10, SHORT_DATETIME:11};
goog.i18n.DateTimeFormat.TOKENS_ = [/^\'(?:[^\']|\'\')*\'/, /^(?:G+|y+|M+|k+|S+|E+|a+|h+|K+|H+|c+|L+|Q+|d+|m+|s+|v+|z+|Z+)/, /^[^\'GyMkSEahKHcLQdmsvzZ]+/];
goog.i18n.DateTimeFormat.PartTypes_ = {QUOTED_STRING:0, FIELD:1, LITERAL:2};
goog.i18n.DateTimeFormat.prototype.applyPattern_ = function(a) {
  for(;a;) {
    for(var b = 0;b < goog.i18n.DateTimeFormat.TOKENS_.length;++b) {
      var c = a.match(goog.i18n.DateTimeFormat.TOKENS_[b]);
      if(c) {
        c = c[0];
        a = a.substring(c.length);
        b == goog.i18n.DateTimeFormat.PartTypes_.QUOTED_STRING && ("''" == c ? c = "'" : (c = c.substring(1, c.length - 1), c = c.replace(/\'\'/, "'")));
        this.patternParts_.push({text:c, type:b});
        break
      }
    }
  }
};
goog.i18n.DateTimeFormat.prototype.format = function(a, b) {
  var c = b ? 6E4 * (a.getTimezoneOffset() - b.getOffset(a)) : 0, d = c ? new Date(a.getTime() + c) : a, e = d;
  b && d.getTimezoneOffset() != a.getTimezoneOffset() && (e = new Date(a.getTime() + (c + (0 < c ? -864E5 : 864E5))));
  for(var c = [], f = 0;f < this.patternParts_.length;++f) {
    var g = this.patternParts_[f].text;
    goog.i18n.DateTimeFormat.PartTypes_.FIELD == this.patternParts_[f].type ? c.push(this.formatField_(g, a, d, e, b)) : c.push(g)
  }
  return c.join("")
};
goog.i18n.DateTimeFormat.prototype.applyStandardPattern_ = function(a) {
  if(4 > a) {
    a = goog.i18n.DateTimeSymbols.DATEFORMATS[a]
  }else {
    if(8 > a) {
      a = goog.i18n.DateTimeSymbols.TIMEFORMATS[a - 4]
    }else {
      if(12 > a) {
        a = goog.i18n.DateTimeSymbols.DATEFORMATS[a - 8] + " " + goog.i18n.DateTimeSymbols.TIMEFORMATS[a - 8]
      }else {
        this.applyStandardPattern_(goog.i18n.DateTimeFormat.Format.MEDIUM_DATETIME);
        return
      }
    }
  }
  this.applyPattern_(a)
};
goog.i18n.DateTimeFormat.prototype.formatEra_ = function(a, b) {
  var c = 0 < b.getFullYear() ? 1 : 0;
  return 4 <= a ? goog.i18n.DateTimeSymbols.ERANAMES[c] : goog.i18n.DateTimeSymbols.ERAS[c]
};
goog.i18n.DateTimeFormat.prototype.formatYear_ = function(a, b) {
  var c = b.getFullYear();
  0 > c && (c = -c);
  return 2 == a ? goog.string.padNumber(c % 100, 2) : "" + c
};
goog.i18n.DateTimeFormat.prototype.formatMonth_ = function(a, b) {
  var c = b.getMonth();
  switch(a) {
    case 5:
      return goog.i18n.DateTimeSymbols.NARROWMONTHS[c];
    case 4:
      return goog.i18n.DateTimeSymbols.MONTHS[c];
    case 3:
      return goog.i18n.DateTimeSymbols.SHORTMONTHS[c];
    default:
      return goog.string.padNumber(c + 1, a)
  }
};
goog.i18n.DateTimeFormat.prototype.format24Hours_ = function(a, b) {
  return goog.string.padNumber(b.getHours() || 24, a)
};
goog.i18n.DateTimeFormat.prototype.formatFractionalSeconds_ = function(a, b) {
  return(b.getTime() % 1E3 / 1E3).toFixed(Math.min(3, a)).substr(2) + (3 < a ? goog.string.padNumber(0, a - 3) : "")
};
goog.i18n.DateTimeFormat.prototype.formatDayOfWeek_ = function(a, b) {
  var c = b.getDay();
  return 4 <= a ? goog.i18n.DateTimeSymbols.WEEKDAYS[c] : goog.i18n.DateTimeSymbols.SHORTWEEKDAYS[c]
};
goog.i18n.DateTimeFormat.prototype.formatAmPm_ = function(a, b) {
  var c = b.getHours();
  return goog.i18n.DateTimeSymbols.AMPMS[12 <= c && 24 > c ? 1 : 0]
};
goog.i18n.DateTimeFormat.prototype.format1To12Hours_ = function(a, b) {
  return goog.string.padNumber(b.getHours() % 12 || 12, a)
};
goog.i18n.DateTimeFormat.prototype.format0To11Hours_ = function(a, b) {
  return goog.string.padNumber(b.getHours() % 12, a)
};
goog.i18n.DateTimeFormat.prototype.format0To23Hours_ = function(a, b) {
  return goog.string.padNumber(b.getHours(), a)
};
goog.i18n.DateTimeFormat.prototype.formatStandaloneDay_ = function(a, b) {
  var c = b.getDay();
  switch(a) {
    case 5:
      return goog.i18n.DateTimeSymbols.STANDALONENARROWWEEKDAYS[c];
    case 4:
      return goog.i18n.DateTimeSymbols.STANDALONEWEEKDAYS[c];
    case 3:
      return goog.i18n.DateTimeSymbols.STANDALONESHORTWEEKDAYS[c];
    default:
      return goog.string.padNumber(c, 1)
  }
};
goog.i18n.DateTimeFormat.prototype.formatStandaloneMonth_ = function(a, b) {
  var c = b.getMonth();
  switch(a) {
    case 5:
      return goog.i18n.DateTimeSymbols.STANDALONENARROWMONTHS[c];
    case 4:
      return goog.i18n.DateTimeSymbols.STANDALONEMONTHS[c];
    case 3:
      return goog.i18n.DateTimeSymbols.STANDALONESHORTMONTHS[c];
    default:
      return goog.string.padNumber(c + 1, a)
  }
};
goog.i18n.DateTimeFormat.prototype.formatQuarter_ = function(a, b) {
  var c = Math.floor(b.getMonth() / 3);
  return 4 > a ? goog.i18n.DateTimeSymbols.SHORTQUARTERS[c] : goog.i18n.DateTimeSymbols.QUARTERS[c]
};
goog.i18n.DateTimeFormat.prototype.formatDate_ = function(a, b) {
  return goog.string.padNumber(b.getDate(), a)
};
goog.i18n.DateTimeFormat.prototype.formatMinutes_ = function(a, b) {
  return goog.string.padNumber(b.getMinutes(), a)
};
goog.i18n.DateTimeFormat.prototype.formatSeconds_ = function(a, b) {
  return goog.string.padNumber(b.getSeconds(), a)
};
goog.i18n.DateTimeFormat.prototype.formatTimeZoneRFC_ = function(a, b, c) {
  c = c || goog.i18n.TimeZone.createTimeZone(b.getTimezoneOffset());
  return 4 > a ? c.getRFCTimeZoneString(b) : c.getGMTString(b)
};
goog.i18n.DateTimeFormat.prototype.formatTimeZone_ = function(a, b, c) {
  c = c || goog.i18n.TimeZone.createTimeZone(b.getTimezoneOffset());
  return 4 > a ? c.getShortName(b) : c.getLongName(b)
};
goog.i18n.DateTimeFormat.prototype.formatTimeZoneId_ = function(a, b) {
  b = b || goog.i18n.TimeZone.createTimeZone(a.getTimezoneOffset());
  return b.getTimeZoneId()
};
goog.i18n.DateTimeFormat.prototype.formatField_ = function(a, b, c, d, e) {
  var f = a.length;
  switch(a.charAt(0)) {
    case "G":
      return this.formatEra_(f, c);
    case "y":
      return this.formatYear_(f, c);
    case "M":
      return this.formatMonth_(f, c);
    case "k":
      return this.format24Hours_(f, d);
    case "S":
      return this.formatFractionalSeconds_(f, d);
    case "E":
      return this.formatDayOfWeek_(f, c);
    case "a":
      return this.formatAmPm_(f, d);
    case "h":
      return this.format1To12Hours_(f, d);
    case "K":
      return this.format0To11Hours_(f, d);
    case "H":
      return this.format0To23Hours_(f, d);
    case "c":
      return this.formatStandaloneDay_(f, c);
    case "L":
      return this.formatStandaloneMonth_(f, c);
    case "Q":
      return this.formatQuarter_(f, c);
    case "d":
      return this.formatDate_(f, c);
    case "m":
      return this.formatMinutes_(f, d);
    case "s":
      return this.formatSeconds_(f, d);
    case "v":
      return this.formatTimeZoneId_(b, e);
    case "z":
      return this.formatTimeZone_(f, b, e);
    case "Z":
      return this.formatTimeZoneRFC_(f, b, e);
    default:
      return""
  }
};
goog.dom = {};
goog.dom.BrowserFeature = {CAN_ADD_NAME_OR_TYPE_ATTRIBUTES:!goog.userAgent.IE || goog.userAgent.isVersion("9"), CAN_USE_CHILDREN_ATTRIBUTE:!goog.userAgent.GECKO && !goog.userAgent.IE || goog.userAgent.IE && goog.userAgent.isVersion("9") || goog.userAgent.GECKO && goog.userAgent.isVersion("1.9.1"), CAN_USE_INNER_TEXT:goog.userAgent.IE && !goog.userAgent.isVersion("9"), INNER_HTML_NEEDS_SCOPED_ELEMENT:goog.userAgent.IE};
goog.dom.TagName = {A:"A", ABBR:"ABBR", ACRONYM:"ACRONYM", ADDRESS:"ADDRESS", APPLET:"APPLET", AREA:"AREA", B:"B", BASE:"BASE", BASEFONT:"BASEFONT", BDO:"BDO", BIG:"BIG", BLOCKQUOTE:"BLOCKQUOTE", BODY:"BODY", BR:"BR", BUTTON:"BUTTON", CANVAS:"CANVAS", CAPTION:"CAPTION", CENTER:"CENTER", CITE:"CITE", CODE:"CODE", COL:"COL", COLGROUP:"COLGROUP", DD:"DD", DEL:"DEL", DFN:"DFN", DIR:"DIR", DIV:"DIV", DL:"DL", DT:"DT", EM:"EM", FIELDSET:"FIELDSET", FONT:"FONT", FORM:"FORM", FRAME:"FRAME", FRAMESET:"FRAMESET", 
H1:"H1", H2:"H2", H3:"H3", H4:"H4", H5:"H5", H6:"H6", HEAD:"HEAD", HR:"HR", HTML:"HTML", I:"I", IFRAME:"IFRAME", IMG:"IMG", INPUT:"INPUT", INS:"INS", ISINDEX:"ISINDEX", KBD:"KBD", LABEL:"LABEL", LEGEND:"LEGEND", LI:"LI", LINK:"LINK", MAP:"MAP", MENU:"MENU", META:"META", NOFRAMES:"NOFRAMES", NOSCRIPT:"NOSCRIPT", OBJECT:"OBJECT", OL:"OL", OPTGROUP:"OPTGROUP", OPTION:"OPTION", P:"P", PARAM:"PARAM", PRE:"PRE", Q:"Q", S:"S", SAMP:"SAMP", SCRIPT:"SCRIPT", SELECT:"SELECT", SMALL:"SMALL", SPAN:"SPAN", STRIKE:"STRIKE", 
STRONG:"STRONG", STYLE:"STYLE", SUB:"SUB", SUP:"SUP", TABLE:"TABLE", TBODY:"TBODY", TD:"TD", TEXTAREA:"TEXTAREA", TFOOT:"TFOOT", TH:"TH", THEAD:"THEAD", TITLE:"TITLE", TR:"TR", TT:"TT", U:"U", UL:"UL", VAR:"VAR"};
goog.dom.classes = {};
goog.dom.classes.set = function(a, b) {
  a.className = b
};
goog.dom.classes.get = function(a) {
  return(a = a.className) && "function" == typeof a.split ? a.split(/\s+/) : []
};
goog.dom.classes.add = function(a, b) {
  var c = goog.dom.classes.get(a), d = goog.array.slice(arguments, 1), d = goog.dom.classes.add_(c, d);
  a.className = c.join(" ");
  return d
};
goog.dom.classes.remove = function(a, b) {
  var c = goog.dom.classes.get(a), d = goog.array.slice(arguments, 1), d = goog.dom.classes.remove_(c, d);
  a.className = c.join(" ");
  return d
};
goog.dom.classes.add_ = function(a, b) {
  for(var c = 0, d = 0;d < b.length;d++) {
    goog.array.contains(a, b[d]) || (a.push(b[d]), c++)
  }
  return c == b.length
};
goog.dom.classes.remove_ = function(a, b) {
  for(var c = 0, d = 0;d < a.length;d++) {
    goog.array.contains(b, a[d]) && (goog.array.splice(a, d--, 1), c++)
  }
  return c == b.length
};
goog.dom.classes.swap = function(a, b, c) {
  for(var d = goog.dom.classes.get(a), e = !1, f = 0;f < d.length;f++) {
    d[f] == b && (goog.array.splice(d, f--, 1), e = !0)
  }
  if(e) {
    d.push(c), a.className = d.join(" ")
  }
  return e
};
goog.dom.classes.addRemove = function(a, b, c) {
  var d = goog.dom.classes.get(a);
  goog.isString(b) ? goog.array.remove(d, b) : goog.isArray(b) && goog.dom.classes.remove_(d, b);
  goog.isString(c) && !goog.array.contains(d, c) ? d.push(c) : goog.isArray(c) && goog.dom.classes.add_(d, c);
  a.className = d.join(" ")
};
goog.dom.classes.has = function(a, b) {
  return goog.array.contains(goog.dom.classes.get(a), b)
};
goog.dom.classes.enable = function(a, b, c) {
  c ? goog.dom.classes.add(a, b) : goog.dom.classes.remove(a, b)
};
goog.dom.classes.toggle = function(a, b) {
  var c = !goog.dom.classes.has(a, b);
  goog.dom.classes.enable(a, b, c);
  return c
};
goog.math = {};
goog.math.Coordinate = function(a, b) {
  this.x = goog.isDef(a) ? a : 0;
  this.y = goog.isDef(b) ? b : 0
};
goog.math.Coordinate.prototype.clone = function() {
  return new goog.math.Coordinate(this.x, this.y)
};
if(goog.DEBUG) {
  goog.math.Coordinate.prototype.toString = function() {
    return"(" + this.x + ", " + this.y + ")"
  }
}
goog.math.Coordinate.equals = function(a, b) {
  return a == b ? !0 : !a || !b ? !1 : a.x == b.x && a.y == b.y
};
goog.math.Coordinate.distance = function(a, b) {
  var c = a.x - b.x, d = a.y - b.y;
  return Math.sqrt(c * c + d * d)
};
goog.math.Coordinate.squaredDistance = function(a, b) {
  var c = a.x - b.x, d = a.y - b.y;
  return c * c + d * d
};
goog.math.Coordinate.difference = function(a, b) {
  return new goog.math.Coordinate(a.x - b.x, a.y - b.y)
};
goog.math.Coordinate.sum = function(a, b) {
  return new goog.math.Coordinate(a.x + b.x, a.y + b.y)
};
goog.math.Size = function(a, b) {
  this.width = a;
  this.height = b
};
goog.math.Size.equals = function(a, b) {
  return a == b ? !0 : !a || !b ? !1 : a.width == b.width && a.height == b.height
};
goog.math.Size.prototype.clone = function() {
  return new goog.math.Size(this.width, this.height)
};
if(goog.DEBUG) {
  goog.math.Size.prototype.toString = function() {
    return"(" + this.width + " x " + this.height + ")"
  }
}
goog.math.Size.prototype.getLongest = function() {
  return Math.max(this.width, this.height)
};
goog.math.Size.prototype.getShortest = function() {
  return Math.min(this.width, this.height)
};
goog.math.Size.prototype.area = function() {
  return this.width * this.height
};
goog.math.Size.prototype.perimeter = function() {
  return 2 * (this.width + this.height)
};
goog.math.Size.prototype.aspectRatio = function() {
  return this.width / this.height
};
goog.math.Size.prototype.isEmpty = function() {
  return!this.area()
};
goog.math.Size.prototype.ceil = function() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this
};
goog.math.Size.prototype.fitsInside = function(a) {
  return this.width <= a.width && this.height <= a.height
};
goog.math.Size.prototype.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
goog.math.Size.prototype.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
goog.math.Size.prototype.scale = function(a) {
  this.width *= a;
  this.height *= a;
  return this
};
goog.math.Size.prototype.scaleToFit = function(a) {
  return this.scale(this.aspectRatio() > a.aspectRatio() ? a.width / this.width : a.height / this.height)
};
goog.dom.ASSUME_QUIRKS_MODE = !1;
goog.dom.ASSUME_STANDARDS_MODE = !1;
goog.dom.COMPAT_MODE_KNOWN_ = goog.dom.ASSUME_QUIRKS_MODE || goog.dom.ASSUME_STANDARDS_MODE;
goog.dom.NodeType = {ELEMENT:1, ATTRIBUTE:2, TEXT:3, CDATA_SECTION:4, ENTITY_REFERENCE:5, ENTITY:6, PROCESSING_INSTRUCTION:7, COMMENT:8, DOCUMENT:9, DOCUMENT_TYPE:10, DOCUMENT_FRAGMENT:11, NOTATION:12};
goog.dom.getDomHelper = function(a) {
  return a ? new goog.dom.DomHelper(goog.dom.getOwnerDocument(a)) : goog.dom.defaultDomHelper_ || (goog.dom.defaultDomHelper_ = new goog.dom.DomHelper)
};
goog.dom.getDocument = function() {
  return document
};
goog.dom.getElement = function(a) {
  return goog.isString(a) ? document.getElementById(a) : a
};
goog.dom.$ = goog.dom.getElement;
goog.dom.getElementsByTagNameAndClass = function(a, b, c) {
  return goog.dom.getElementsByTagNameAndClass_(document, a, b, c)
};
goog.dom.getElementsByClass = function(a, b) {
  var c = b || document;
  return goog.dom.canUseQuerySelector_(c) ? c.querySelectorAll("." + a) : c.getElementsByClassName ? c.getElementsByClassName(a) : goog.dom.getElementsByTagNameAndClass_(document, "*", a, b)
};
goog.dom.getElementByClass = function(a, b) {
  var c = b || document, d = null;
  return(d = goog.dom.canUseQuerySelector_(c) ? c.querySelector("." + a) : goog.dom.getElementsByClass(a, b)[0]) || null
};
goog.dom.canUseQuerySelector_ = function(a) {
  return a.querySelectorAll && a.querySelector && (!goog.userAgent.WEBKIT || goog.dom.isCss1CompatMode_(document) || goog.userAgent.isVersion("528"))
};
goog.dom.getElementsByTagNameAndClass_ = function(a, b, c, d) {
  a = d || a;
  b = b && "*" != b ? b.toUpperCase() : "";
  if(goog.dom.canUseQuerySelector_(a) && (b || c)) {
    return a.querySelectorAll(b + (c ? "." + c : ""))
  }
  if(c && a.getElementsByClassName) {
    a = a.getElementsByClassName(c);
    if(b) {
      for(var d = {}, e = 0, f = 0, g;g = a[f];f++) {
        b == g.nodeName && (d[e++] = g)
      }
      d.length = e;
      return d
    }
    return a
  }
  a = a.getElementsByTagName(b || "*");
  if(c) {
    d = {};
    for(f = e = 0;g = a[f];f++) {
      b = g.className, "function" == typeof b.split && goog.array.contains(b.split(/\s+/), c) && (d[e++] = g)
    }
    d.length = e;
    return d
  }
  return a
};
goog.dom.$$ = goog.dom.getElementsByTagNameAndClass;
goog.dom.setProperties = function(a, b) {
  goog.object.forEach(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in goog.dom.DIRECT_ATTRIBUTE_MAP_ ? a.setAttribute(goog.dom.DIRECT_ATTRIBUTE_MAP_[d], b) : a[d] = b
  })
};
goog.dom.DIRECT_ATTRIBUTE_MAP_ = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
goog.dom.getViewportSize = function(a) {
  return goog.dom.getViewportSize_(a || window)
};
goog.dom.getViewportSize_ = function(a) {
  var b = a.document;
  if(goog.userAgent.WEBKIT && !goog.userAgent.isVersion("500") && !goog.userAgent.MOBILE) {
    "undefined" == typeof a.innerHeight && (a = window);
    var b = a.innerHeight, c = a.document.documentElement.scrollHeight;
    a == a.top && c < b && (b -= 15);
    return new goog.math.Size(a.innerWidth, b)
  }
  a = goog.dom.isCss1CompatMode_(b) ? b.documentElement : b.body;
  return new goog.math.Size(a.clientWidth, a.clientHeight)
};
goog.dom.getDocumentHeight = function() {
  return goog.dom.getDocumentHeight_(window)
};
goog.dom.getDocumentHeight_ = function(a) {
  var b = a.document, c = 0;
  if(b) {
    var a = goog.dom.getViewportSize_(a).height, c = b.body, d = b.documentElement;
    if(goog.dom.isCss1CompatMode_(b) && d.scrollHeight) {
      c = d.scrollHeight != a ? d.scrollHeight : d.offsetHeight
    }else {
      var b = d.scrollHeight, e = d.offsetHeight;
      if(d.clientHeight != e) {
        b = c.scrollHeight, e = c.offsetHeight
      }
      c = b > a ? b > e ? b : e : b < e ? b : e
    }
  }
  return c
};
goog.dom.getPageScroll = function(a) {
  return goog.dom.getDomHelper((a || goog.global || window).document).getDocumentScroll()
};
goog.dom.getDocumentScroll = function() {
  return goog.dom.getDocumentScroll_(document)
};
goog.dom.getDocumentScroll_ = function(a) {
  var b = goog.dom.getDocumentScrollElement_(a), a = goog.dom.getWindow_(a);
  return new goog.math.Coordinate(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
};
goog.dom.getDocumentScrollElement = function() {
  return goog.dom.getDocumentScrollElement_(document)
};
goog.dom.getDocumentScrollElement_ = function(a) {
  return!goog.userAgent.WEBKIT && goog.dom.isCss1CompatMode_(a) ? a.documentElement : a.body
};
goog.dom.getWindow = function(a) {
  return a ? goog.dom.getWindow_(a) : window
};
goog.dom.getWindow_ = function(a) {
  return a.parentWindow || a.defaultView
};
goog.dom.createDom = function(a, b, c) {
  return goog.dom.createDom_(document, arguments)
};
goog.dom.createDom_ = function(a, b) {
  var c = b[0], d = b[1];
  if(!goog.dom.BrowserFeature.CAN_ADD_NAME_OR_TYPE_ATTRIBUTES && d && (d.name || d.type)) {
    c = ["<", c];
    d.name && c.push(' name="', goog.string.htmlEscape(d.name), '"');
    if(d.type) {
      c.push(' type="', goog.string.htmlEscape(d.type), '"');
      var e = {};
      goog.object.extend(e, d);
      d = e;
      delete d.type
    }
    c.push(">");
    c = c.join("")
  }
  c = a.createElement(c);
  if(d) {
    goog.isString(d) ? c.className = d : goog.isArray(d) ? goog.dom.classes.add.apply(null, [c].concat(d)) : goog.dom.setProperties(c, d)
  }
  2 < b.length && goog.dom.append_(a, c, b, 2);
  return c
};
goog.dom.append_ = function(a, b, c, d) {
  function e(c) {
    c && b.appendChild(goog.isString(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var f = c[d];
    goog.isArrayLike(f) && !goog.dom.isNodeLike(f) ? goog.array.forEach(goog.dom.isNodeList(f) ? goog.array.clone(f) : f, e) : e(f)
  }
};
goog.dom.$dom = goog.dom.createDom;
goog.dom.createElement = function(a) {
  return document.createElement(a)
};
goog.dom.createTextNode = function(a) {
  return document.createTextNode(a)
};
goog.dom.createTable = function(a, b, c) {
  return goog.dom.createTable_(document, a, b, !!c)
};
goog.dom.createTable_ = function(a, b, c, d) {
  for(var e = ["<tr>"], f = 0;f < c;f++) {
    e.push(d ? "<td>&nbsp;</td>" : "<td></td>")
  }
  e.push("</tr>");
  e = e.join("");
  c = ["<table>"];
  for(f = 0;f < b;f++) {
    c.push(e)
  }
  c.push("</table>");
  a = a.createElement(goog.dom.TagName.DIV);
  a.innerHTML = c.join("");
  return a.removeChild(a.firstChild)
};
goog.dom.htmlToDocumentFragment = function(a) {
  return goog.dom.htmlToDocumentFragment_(document, a)
};
goog.dom.htmlToDocumentFragment_ = function(a, b) {
  var c = a.createElement("div");
  goog.dom.BrowserFeature.INNER_HTML_NEEDS_SCOPED_ELEMENT ? (c.innerHTML = "<br>" + b, c.removeChild(c.firstChild)) : c.innerHTML = b;
  if(1 == c.childNodes.length) {
    return c.removeChild(c.firstChild)
  }
  for(var d = a.createDocumentFragment();c.firstChild;) {
    d.appendChild(c.firstChild)
  }
  return d
};
goog.dom.getCompatMode = function() {
  return goog.dom.isCss1CompatMode() ? "CSS1Compat" : "BackCompat"
};
goog.dom.isCss1CompatMode = function() {
  return goog.dom.isCss1CompatMode_(document)
};
goog.dom.isCss1CompatMode_ = function(a) {
  return goog.dom.COMPAT_MODE_KNOWN_ ? goog.dom.ASSUME_STANDARDS_MODE : "CSS1Compat" == a.compatMode
};
goog.dom.canHaveChildren = function(a) {
  if(a.nodeType != goog.dom.NodeType.ELEMENT) {
    return!1
  }
  switch(a.tagName) {
    case goog.dom.TagName.APPLET:
    ;
    case goog.dom.TagName.AREA:
    ;
    case goog.dom.TagName.BASE:
    ;
    case goog.dom.TagName.BR:
    ;
    case goog.dom.TagName.COL:
    ;
    case goog.dom.TagName.FRAME:
    ;
    case goog.dom.TagName.HR:
    ;
    case goog.dom.TagName.IMG:
    ;
    case goog.dom.TagName.INPUT:
    ;
    case goog.dom.TagName.IFRAME:
    ;
    case goog.dom.TagName.ISINDEX:
    ;
    case goog.dom.TagName.LINK:
    ;
    case goog.dom.TagName.NOFRAMES:
    ;
    case goog.dom.TagName.NOSCRIPT:
    ;
    case goog.dom.TagName.META:
    ;
    case goog.dom.TagName.OBJECT:
    ;
    case goog.dom.TagName.PARAM:
    ;
    case goog.dom.TagName.SCRIPT:
    ;
    case goog.dom.TagName.STYLE:
      return!1
  }
  return!0
};
goog.dom.appendChild = function(a, b) {
  a.appendChild(b)
};
goog.dom.append = function(a, b) {
  goog.dom.append_(goog.dom.getOwnerDocument(a), a, arguments, 1)
};
goog.dom.removeChildren = function(a) {
  for(var b;b = a.firstChild;) {
    a.removeChild(b)
  }
};
goog.dom.insertSiblingBefore = function(a, b) {
  b.parentNode && b.parentNode.insertBefore(a, b)
};
goog.dom.insertSiblingAfter = function(a, b) {
  b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
};
goog.dom.insertChildAt = function(a, b, c) {
  a.insertBefore(b, a.childNodes[c] || null)
};
goog.dom.removeNode = function(a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : null
};
goog.dom.replaceNode = function(a, b) {
  var c = b.parentNode;
  c && c.replaceChild(a, b)
};
goog.dom.flattenElement = function(a) {
  var b, c = a.parentNode;
  if(c && c.nodeType != goog.dom.NodeType.DOCUMENT_FRAGMENT) {
    if(a.removeNode) {
      return a.removeNode(!1)
    }
    for(;b = a.firstChild;) {
      c.insertBefore(b, a)
    }
    return goog.dom.removeNode(a)
  }
};
goog.dom.getChildren = function(a) {
  return goog.dom.BrowserFeature.CAN_USE_CHILDREN_ATTRIBUTE && void 0 != a.children ? a.children : goog.array.filter(a.childNodes, function(a) {
    return a.nodeType == goog.dom.NodeType.ELEMENT
  })
};
goog.dom.getFirstElementChild = function(a) {
  return void 0 != a.firstElementChild ? a.firstElementChild : goog.dom.getNextElementNode_(a.firstChild, !0)
};
goog.dom.getLastElementChild = function(a) {
  return void 0 != a.lastElementChild ? a.lastElementChild : goog.dom.getNextElementNode_(a.lastChild, !1)
};
goog.dom.getNextElementSibling = function(a) {
  return void 0 != a.nextElementSibling ? a.nextElementSibling : goog.dom.getNextElementNode_(a.nextSibling, !0)
};
goog.dom.getPreviousElementSibling = function(a) {
  return void 0 != a.previousElementSibling ? a.previousElementSibling : goog.dom.getNextElementNode_(a.previousSibling, !1)
};
goog.dom.getNextElementNode_ = function(a, b) {
  for(;a && a.nodeType != goog.dom.NodeType.ELEMENT;) {
    a = b ? a.nextSibling : a.previousSibling
  }
  return a
};
goog.dom.getNextNode = function(a) {
  if(!a) {
    return null
  }
  if(a.firstChild) {
    return a.firstChild
  }
  for(;a && !a.nextSibling;) {
    a = a.parentNode
  }
  return a ? a.nextSibling : null
};
goog.dom.getPreviousNode = function(a) {
  if(!a) {
    return null
  }
  if(!a.previousSibling) {
    return a.parentNode
  }
  for(a = a.previousSibling;a && a.lastChild;) {
    a = a.lastChild
  }
  return a
};
goog.dom.isNodeLike = function(a) {
  return goog.isObject(a) && 0 < a.nodeType
};
goog.dom.isWindow = function(a) {
  return goog.isObject(a) && a.window == a
};
goog.dom.contains = function(a, b) {
  if(a.contains && b.nodeType == goog.dom.NodeType.ELEMENT) {
    return a == b || a.contains(b)
  }
  if("undefined" != typeof a.compareDocumentPosition) {
    return a == b || Boolean(a.compareDocumentPosition(b) & 16)
  }
  for(;b && a != b;) {
    b = b.parentNode
  }
  return b == a
};
goog.dom.compareNodeOrder = function(a, b) {
  if(a == b) {
    return 0
  }
  if(a.compareDocumentPosition) {
    return a.compareDocumentPosition(b) & 2 ? 1 : -1
  }
  if("sourceIndex" in a || a.parentNode && "sourceIndex" in a.parentNode) {
    var c = a.nodeType == goog.dom.NodeType.ELEMENT, d = b.nodeType == goog.dom.NodeType.ELEMENT;
    if(c && d) {
      return a.sourceIndex - b.sourceIndex
    }
    var e = a.parentNode, f = b.parentNode;
    return e == f ? goog.dom.compareSiblingOrder_(a, b) : !c && goog.dom.contains(e, b) ? -1 * goog.dom.compareParentsDescendantNodeIe_(a, b) : !d && goog.dom.contains(f, a) ? goog.dom.compareParentsDescendantNodeIe_(b, a) : (c ? a.sourceIndex : e.sourceIndex) - (d ? b.sourceIndex : f.sourceIndex)
  }
  d = goog.dom.getOwnerDocument(a);
  c = d.createRange();
  c.selectNode(a);
  c.collapse(!0);
  d = d.createRange();
  d.selectNode(b);
  d.collapse(!0);
  return c.compareBoundaryPoints(goog.global.Range.START_TO_END, d)
};
goog.dom.compareParentsDescendantNodeIe_ = function(a, b) {
  var c = a.parentNode;
  if(c == b) {
    return-1
  }
  for(var d = b;d.parentNode != c;) {
    d = d.parentNode
  }
  return goog.dom.compareSiblingOrder_(d, a)
};
goog.dom.compareSiblingOrder_ = function(a, b) {
  for(var c = b;c = c.previousSibling;) {
    if(c == a) {
      return-1
    }
  }
  return 1
};
goog.dom.findCommonAncestor = function(a) {
  var b, c = arguments.length;
  if(c) {
    if(1 == c) {
      return arguments[0]
    }
  }else {
    return null
  }
  var d = [], e = Infinity;
  for(b = 0;b < c;b++) {
    for(var f = [], g = arguments[b];g;) {
      f.unshift(g), g = g.parentNode
    }
    d.push(f);
    e = Math.min(e, f.length)
  }
  f = null;
  for(b = 0;b < e;b++) {
    for(var g = d[0][b], h = 1;h < c;h++) {
      if(g != d[h][b]) {
        return f
      }
    }
    f = g
  }
  return f
};
goog.dom.getOwnerDocument = function(a) {
  return a.nodeType == goog.dom.NodeType.DOCUMENT ? a : a.ownerDocument || a.document
};
goog.dom.getFrameContentDocument = function(a) {
  return goog.userAgent.WEBKIT ? a.document || a.contentWindow.document : a.contentDocument || a.contentWindow.document
};
goog.dom.getFrameContentWindow = function(a) {
  return a.contentWindow || goog.dom.getWindow_(goog.dom.getFrameContentDocument(a))
};
goog.dom.setTextContent = function(a, b) {
  if("textContent" in a) {
    a.textContent = b
  }else {
    if(a.firstChild && a.firstChild.nodeType == goog.dom.NodeType.TEXT) {
      for(;a.lastChild != a.firstChild;) {
        a.removeChild(a.lastChild)
      }
      a.firstChild.data = b
    }else {
      goog.dom.removeChildren(a);
      var c = goog.dom.getOwnerDocument(a);
      a.appendChild(c.createTextNode(b))
    }
  }
};
goog.dom.getOuterHtml = function(a) {
  if("outerHTML" in a) {
    return a.outerHTML
  }
  var b = goog.dom.getOwnerDocument(a).createElement("div");
  b.appendChild(a.cloneNode(!0));
  return b.innerHTML
};
goog.dom.findNode = function(a, b) {
  var c = [];
  return goog.dom.findNodes_(a, b, c, !0) ? c[0] : void 0
};
goog.dom.findNodes = function(a, b) {
  var c = [];
  goog.dom.findNodes_(a, b, c, !1);
  return c
};
goog.dom.findNodes_ = function(a, b, c, d) {
  if(null != a) {
    for(var e = 0, f;f = a.childNodes[e];e++) {
      if(b(f) && (c.push(f), d) || goog.dom.findNodes_(f, b, c, d)) {
        return!0
      }
    }
  }
  return!1
};
goog.dom.TAGS_TO_IGNORE_ = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1};
goog.dom.PREDEFINED_TAG_VALUES_ = {IMG:" ", BR:"\n"};
goog.dom.isFocusableTabIndex = function(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, goog.isNumber(a) && 0 <= a) : !1
};
goog.dom.setFocusableTabIndex = function(a, b) {
  b ? a.tabIndex = 0 : a.removeAttribute("tabIndex")
};
goog.dom.getTextContent = function(a) {
  if(goog.dom.BrowserFeature.CAN_USE_INNER_TEXT && "innerText" in a) {
    a = goog.string.canonicalizeNewlines(a.innerText)
  }else {
    var b = [];
    goog.dom.getTextContent_(a, b, !0);
    a = b.join("")
  }
  a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
  a = a.replace(/\u200B/g, "");
  goog.userAgent.IE || (a = a.replace(/ +/g, " "));
  " " != a && (a = a.replace(/^\s*/, ""));
  return a
};
goog.dom.getRawTextContent = function(a) {
  var b = [];
  goog.dom.getTextContent_(a, b, !1);
  return b.join("")
};
goog.dom.getTextContent_ = function(a, b, c) {
  if(!(a.nodeName in goog.dom.TAGS_TO_IGNORE_)) {
    if(a.nodeType == goog.dom.NodeType.TEXT) {
      c ? b.push(("" + a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in goog.dom.PREDEFINED_TAG_VALUES_) {
        b.push(goog.dom.PREDEFINED_TAG_VALUES_[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          goog.dom.getTextContent_(a, b, c), a = a.nextSibling
        }
      }
    }
  }
};
goog.dom.getNodeTextLength = function(a) {
  return goog.dom.getTextContent(a).length
};
goog.dom.getNodeTextOffset = function(a, b) {
  for(var c = b || goog.dom.getOwnerDocument(a).body, d = [];a && a != c;) {
    for(var e = a;e = e.previousSibling;) {
      d.unshift(goog.dom.getTextContent(e))
    }
    a = a.parentNode
  }
  return goog.string.trimLeft(d.join("")).replace(/ +/g, " ").length
};
goog.dom.getNodeAtOffset = function(a, b, c) {
  for(var a = [a], d = 0, e;0 < a.length && d < b;) {
    if(e = a.pop(), !(e.nodeName in goog.dom.TAGS_TO_IGNORE_)) {
      if(e.nodeType == goog.dom.NodeType.TEXT) {
        var f = e.nodeValue.replace(/(\r\n|\r|\n)/g, "").replace(/ +/g, " "), d = d + f.length
      }else {
        if(e.nodeName in goog.dom.PREDEFINED_TAG_VALUES_) {
          d += goog.dom.PREDEFINED_TAG_VALUES_[e.nodeName].length
        }else {
          for(f = e.childNodes.length - 1;0 <= f;f--) {
            a.push(e.childNodes[f])
          }
        }
      }
    }
  }
  if(goog.isObject(c)) {
    c.remainder = e ? e.nodeValue.length + b - d - 1 : 0, c.node = e
  }
  return e
};
goog.dom.isNodeList = function(a) {
  if(a && "number" == typeof a.length) {
    if(goog.isObject(a)) {
      return"function" == typeof a.item || "string" == typeof a.item
    }
    if(goog.isFunction(a)) {
      return"function" == typeof a.item
    }
  }
  return!1
};
goog.dom.getAncestorByTagNameAndClass = function(a, b, c) {
  var d = b ? b.toUpperCase() : null;
  return goog.dom.getAncestor(a, function(a) {
    return(!d || a.nodeName == d) && (!c || goog.dom.classes.has(a, c))
  }, !0)
};
goog.dom.getAncestorByClass = function(a, b) {
  return goog.dom.getAncestorByTagNameAndClass(a, null, b)
};
goog.dom.getAncestor = function(a, b, c, d) {
  if(!c) {
    a = a.parentNode
  }
  for(var c = null == d, e = 0;a && (c || e <= d);) {
    if(b(a)) {
      return a
    }
    a = a.parentNode;
    e++
  }
  return null
};
goog.dom.DomHelper = function(a) {
  this.document_ = a || goog.global.document || document
};
goog.dom.DomHelper.prototype.getDomHelper = goog.dom.getDomHelper;
goog.dom.DomHelper.prototype.setDocument = function(a) {
  this.document_ = a
};
goog.dom.DomHelper.prototype.getDocument = function() {
  return this.document_
};
goog.dom.DomHelper.prototype.getElement = function(a) {
  return goog.isString(a) ? this.document_.getElementById(a) : a
};
goog.dom.DomHelper.prototype.$ = goog.dom.DomHelper.prototype.getElement;
goog.dom.DomHelper.prototype.getElementsByTagNameAndClass = function(a, b, c) {
  return goog.dom.getElementsByTagNameAndClass_(this.document_, a, b, c)
};
goog.dom.DomHelper.prototype.getElementsByClass = function(a, b) {
  return goog.dom.getElementsByClass(a, b || this.document_)
};
goog.dom.DomHelper.prototype.getElementByClass = function(a, b) {
  return goog.dom.getElementByClass(a, b || this.document_)
};
goog.dom.DomHelper.prototype.$$ = goog.dom.DomHelper.prototype.getElementsByTagNameAndClass;
goog.dom.DomHelper.prototype.setProperties = goog.dom.setProperties;
goog.dom.DomHelper.prototype.getViewportSize = function(a) {
  return goog.dom.getViewportSize(a || this.getWindow())
};
goog.dom.DomHelper.prototype.getDocumentHeight = function() {
  return goog.dom.getDocumentHeight_(this.getWindow())
};
goog.dom.DomHelper.prototype.createDom = function(a, b, c) {
  return goog.dom.createDom_(this.document_, arguments)
};
goog.dom.DomHelper.prototype.$dom = goog.dom.DomHelper.prototype.createDom;
goog.dom.DomHelper.prototype.createElement = function(a) {
  return this.document_.createElement(a)
};
goog.dom.DomHelper.prototype.createTextNode = function(a) {
  return this.document_.createTextNode(a)
};
goog.dom.DomHelper.prototype.createTable = function(a, b, c) {
  return goog.dom.createTable_(this.document_, a, b, !!c)
};
goog.dom.DomHelper.prototype.htmlToDocumentFragment = function(a) {
  return goog.dom.htmlToDocumentFragment_(this.document_, a)
};
goog.dom.DomHelper.prototype.getCompatMode = function() {
  return this.isCss1CompatMode() ? "CSS1Compat" : "BackCompat"
};
goog.dom.DomHelper.prototype.isCss1CompatMode = function() {
  return goog.dom.isCss1CompatMode_(this.document_)
};
goog.dom.DomHelper.prototype.getWindow = function() {
  return goog.dom.getWindow_(this.document_)
};
goog.dom.DomHelper.prototype.getDocumentScrollElement = function() {
  return goog.dom.getDocumentScrollElement_(this.document_)
};
goog.dom.DomHelper.prototype.getDocumentScroll = function() {
  return goog.dom.getDocumentScroll_(this.document_)
};
goog.dom.DomHelper.prototype.appendChild = goog.dom.appendChild;
goog.dom.DomHelper.prototype.append = goog.dom.append;
goog.dom.DomHelper.prototype.removeChildren = goog.dom.removeChildren;
goog.dom.DomHelper.prototype.insertSiblingBefore = goog.dom.insertSiblingBefore;
goog.dom.DomHelper.prototype.insertSiblingAfter = goog.dom.insertSiblingAfter;
goog.dom.DomHelper.prototype.removeNode = goog.dom.removeNode;
goog.dom.DomHelper.prototype.replaceNode = goog.dom.replaceNode;
goog.dom.DomHelper.prototype.flattenElement = goog.dom.flattenElement;
goog.dom.DomHelper.prototype.getFirstElementChild = goog.dom.getFirstElementChild;
goog.dom.DomHelper.prototype.getLastElementChild = goog.dom.getLastElementChild;
goog.dom.DomHelper.prototype.getNextElementSibling = goog.dom.getNextElementSibling;
goog.dom.DomHelper.prototype.getPreviousElementSibling = goog.dom.getPreviousElementSibling;
goog.dom.DomHelper.prototype.getNextNode = goog.dom.getNextNode;
goog.dom.DomHelper.prototype.getPreviousNode = goog.dom.getPreviousNode;
goog.dom.DomHelper.prototype.isNodeLike = goog.dom.isNodeLike;
goog.dom.DomHelper.prototype.contains = goog.dom.contains;
goog.dom.DomHelper.prototype.getOwnerDocument = goog.dom.getOwnerDocument;
goog.dom.DomHelper.prototype.getFrameContentDocument = goog.dom.getFrameContentDocument;
goog.dom.DomHelper.prototype.getFrameContentWindow = goog.dom.getFrameContentWindow;
goog.dom.DomHelper.prototype.setTextContent = goog.dom.setTextContent;
goog.dom.DomHelper.prototype.findNode = goog.dom.findNode;
goog.dom.DomHelper.prototype.findNodes = goog.dom.findNodes;
goog.dom.DomHelper.prototype.getTextContent = goog.dom.getTextContent;
goog.dom.DomHelper.prototype.getNodeTextLength = goog.dom.getNodeTextLength;
goog.dom.DomHelper.prototype.getNodeTextOffset = goog.dom.getNodeTextOffset;
goog.dom.DomHelper.prototype.getAncestorByTagNameAndClass = goog.dom.getAncestorByTagNameAndClass;
goog.dom.DomHelper.prototype.getAncestor = goog.dom.getAncestor;
var crate = {core:{}};
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\ufdd0'xhtml", "\ufdd0'svg"], {"\ufdd0'xhtml":"http://www.w3.org/1999/xhtml", "\ufdd0'svg":"http://www.w3.org/2000/svg"});
crate.core.group_id = cljs.core.atom.call(null, 0);
crate.core.dom_attr = function() {
  var a = null;
  return a = function(b, c, d) {
    switch(arguments.length) {
      case 2:
        var e;
        if(cljs.core.truth_(b)) {
          if(cljs.core.truth_(cljs.core.not.call(null, cljs.core.map_QMARK_.call(null, c)))) {
            e = b.getAttribute(cljs.core.name.call(null, c))
          }else {
            e = cljs.core.seq.call(null, c);
            if(cljs.core.truth_(e)) {
              var f = cljs.core.first.call(null, e);
              cljs.core.nth.call(null, f, 0, null);
              for(cljs.core.nth.call(null, f, 1, null);;) {
                var g = f, f = cljs.core.nth.call(null, g, 0, null), g = cljs.core.nth.call(null, g, 1, null);
                a.call(null, b, f, g);
                e = cljs.core.next.call(null, e);
                if(cljs.core.truth_(e)) {
                  f = e, e = cljs.core.first.call(null, f), g = f, f = e, e = g
                }else {
                  break
                }
              }
            }
            e = b
          }
        }else {
          e = null
        }
        return e;
      case 3:
        return b.setAttribute(cljs.core.name.call(null, c), d), b
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
crate.core.as_content = function as_content(b, c) {
  var d = cljs.core.seq.call(null, c);
  if(cljs.core.truth_(d)) {
    for(var e = cljs.core.first.call(null, d);;) {
      if(cljs.core.truth_(null === e)) {
        e = null
      }else {
        if(cljs.core.truth_(cljs.core.map_QMARK_.call(null, e))) {
          throw"Maps cannot be used as content";
        }
        e = cljs.core.truth_(cljs.core.string_QMARK_.call(null, e)) ? goog.dom.createTextNode.call(null, e) : cljs.core.truth_(cljs.core.vector_QMARK_.call(null, e)) ? crate.core.elem_factory.call(null, e) : cljs.core.truth_(cljs.core.seq_QMARK_.call(null, e)) ? as_content.call(null, b, e) : cljs.core.truth_(e.nodeName) ? e : null
      }
      cljs.core.truth_(e) && goog.dom.appendChild.call(null, b, e);
      e = cljs.core.next.call(null, d);
      if(cljs.core.truth_(e)) {
        d = e, e = cljs.core.first.call(null, d)
      }else {
        return null
      }
    }
  }else {
    return null
  }
};
crate.core.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
crate.core.normalize_element = function(a) {
  var b = cljs.core.nth.call(null, a, 0, null), a = cljs.core.nthnext.call(null, a, 1);
  if(cljs.core.truth_(cljs.core.not.call(null, function() {
    var a = cljs.core.keyword_QMARK_.call(null, b);
    if(cljs.core.truth_(a)) {
      return a
    }
    a = cljs.core.symbol_QMARK_.call(null, b);
    return cljs.core.truth_(a) ? a : cljs.core.string_QMARK_.call(null, b)
  }()))) {
    throw cljs.core.str.call(null, b, " is not a valid tag name.");
  }
  var c = cljs.core.re_matches.call(null, crate.core.re_tag, cljs.core.name.call(null, b));
  cljs.core.nth.call(null, c, 0, null);
  var d = cljs.core.nth.call(null, c, 1, null), e = cljs.core.nth.call(null, c, 2, null), f = cljs.core.nth.call(null, c, 3, null), g = function() {
    var a = clojure.string.split.call(null, d, /:/), b = cljs.core.nth.call(null, a, 0, null), a = cljs.core.nth.call(null, a, 1, null), c = crate.core.xmlns.call(null, cljs.core.keyword.call(null, b));
    return cljs.core.truth_(a) ? cljs.core.PersistentVector.fromArray([cljs.core.truth_(c) ? c : b, a]) : cljs.core.PersistentVector.fromArray(["\ufdd0'xhtml".call(null, crate.core.xmlns), b])
  }(), c = cljs.core.nth.call(null, g, 0, null), g = cljs.core.nth.call(null, g, 1, null), e = cljs.core.into.call(null, cljs.core.ObjMap.fromObject([], {}), cljs.core.filter.call(null, function(a) {
    return cljs.core.not.call(null, null === cljs.core.second.call(null, a))
  }, cljs.core.ObjMap.fromObject(["\ufdd0'id", "\ufdd0'class"], {"\ufdd0'id":cljs.core.truth_(e) ? e : null, "\ufdd0'class":cljs.core.truth_(f) ? clojure.string.replace.call(null, f, /\./, " ") : null}))), f = cljs.core.first.call(null, a);
  return cljs.core.truth_(cljs.core.map_QMARK_.call(null, f)) ? cljs.core.PersistentVector.fromArray([c, g, cljs.core.merge.call(null, e, f), cljs.core.next.call(null, a)]) : cljs.core.PersistentVector.fromArray([c, g, e, a])
};
crate.core.parse_content = function(a, b) {
  var c = cljs.core.first.call(null, b);
  return cljs.core.truth_(cljs.core.map_QMARK_.call(null, c)) ? (crate.core.dom_attr.call(null, a, c), cljs.core.rest.call(null, b)) : b
};
crate.core.create_elem = cljs.core.truth_(document.createElementNS) ? function(a, b) {
  return document.createElementNS(a, b)
} : function(a, b) {
  return document.createElement(b)
};
crate.core.elem_factory = function(a) {
  var b = crate.core.normalize_element.call(null, a), c = cljs.core.nth.call(null, b, 0, null), d = cljs.core.nth.call(null, b, 1, null), a = cljs.core.nth.call(null, b, 2, null), b = cljs.core.nth.call(null, b, 3, null), c = crate.core.create_elem.call(null, c, d);
  crate.core.dom_attr.call(null, c, a);
  crate.core.as_content.call(null, c, b);
  return c
};
crate.core.html = function() {
  var a = function(a) {
    a = cljs.core.map.call(null, crate.core.elem_factory, a);
    return cljs.core.truth_(cljs.core.second.call(null, a)) ? a : cljs.core.first.call(null, a)
  }, b = function(b) {
    var d = null;
    goog.isDef(b) && (d = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
    return a.call(this, d)
  };
  b.cljs$lang$maxFixedArity = 0;
  b.cljs$lang$applyTo = function(b) {
    b = cljs.core.seq(b);
    return a.call(this, b)
  };
  return b
}();
pos.client.view = {};
pos.client.view.render_location = function(a) {
  a = cljs.core.truth_(cljs.core.seq_QMARK_.call(null, a)) ? cljs.core.apply.call(null, cljs.core.hash_map, a) : a;
  a = cljs.core.get.call(null, a, "\ufdd0'id");
  a = pos.client.util.from_coll_by_id.call(null, "\ufdd0'locations".call(null, cljs.core.deref.call(null, pos.client.model.data)), a);
  return cljs.core.truth_(a) ? jayq.core.inner.call(null, jayq.core.$.call(null, "\ufdd0'#location-name"), "\ufdd0'name".call(null, a)) : jayq.core.inner.call(null, jayq.core.$.call(null, "\ufdd0'#location-name"), "Location")
};
lib.dispatch.react_to.call(null, cljs.core.set(["\ufdd0'location-change"]), function(a, b) {
  return pos.client.view.render_location.call(null, b)
});
pos.client.view.render_employee = function(a) {
  a = cljs.core.truth_(cljs.core.seq_QMARK_.call(null, a)) ? cljs.core.apply.call(null, cljs.core.hash_map, a) : a;
  a = cljs.core.get.call(null, a, "\ufdd0'id");
  a = pos.client.util.from_coll_by_id.call(null, "\ufdd0'employees".call(null, cljs.core.deref.call(null, pos.client.model.data)), a);
  return cljs.core.truth_(a) ? jayq.core.inner.call(null, jayq.core.$.call(null, "\ufdd0'#employee-name"), "\ufdd0'name".call(null, a)) : jayq.core.inner.call(null, jayq.core.$.call(null, "\ufdd0'#employee-name"), "Employee")
};
lib.dispatch.react_to.call(null, cljs.core.set(["\ufdd0'employee-change"]), function(a, b) {
  return pos.client.view.render_employee.call(null, b)
});
pos.client.view.render_time = function() {
  var a = pos.client.util.get_formatted_datetime.call(null), b = jayq.core.$.call(null, "\ufdd0'#clock");
  return jayq.core.inner.call(null, b, a)
};
pos.client.view.pie_data = function() {
  return fetch.util.clj__GT_js.call(null, cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\ufdd0'label", "\ufdd0'data", "\ufdd0'color"], {"\ufdd0'label":"", "\ufdd0'data":33, "\ufdd0'color":"#5bb75b"}), cljs.core.ObjMap.fromObject(["\ufdd0'label", "\ufdd0'data", "\ufdd0'color"], {"\ufdd0'label":"", "\ufdd0'data":67, "\ufdd0'color":"#52c5c8"})]))
};
pos.client.view.draw_pie = function() {
  return $.plot(jayq.core.$.call(null, "\ufdd0'#pie"), pos.client.view.pie_data.call(null), fetch.util.clj__GT_js.call(null, cljs.core.ObjMap.fromObject(["\ufdd0'series"], {"\ufdd0'series":cljs.core.ObjMap.fromObject(["\ufdd0'pie"], {"\ufdd0'pie":cljs.core.ObjMap.fromObject(["\ufdd0'show", "\ufdd0'stroke"], {"\ufdd0'show":!0, "\ufdd0'stroke":cljs.core.ObjMap.fromObject(["\ufdd0'color", "\ufdd0'width"], {"\ufdd0'color":"#2b2b2b", "\ufdd0'width":0})})})})))
};
pos.client.view.get_dropdown_data = function(a, b) {
  return cljs.core.map.call(null, function(a) {
    return cljs.core.merge.call(null, a, cljs.core.ObjMap.fromObject(["\ufdd0'value"], {"\ufdd0'value":"\ufdd0'name".call(null, a)}))
  }, a.call(null, b))
};
pos.client.view.prepare_typeaheads = function(a) {
  jayq.core.$.call(null, "\ufdd0'#customer-dropdown").typeahead(fetch.util.clj__GT_js.call(null, cljs.core.ObjMap.fromObject(["\ufdd0'source", "\ufdd0'onselect", "\ufdd0'trigger"], {"\ufdd0'source":pos.client.view.get_dropdown_data.call(null, "\ufdd0'customers", a), "\ufdd0'onselect":function(a) {
    return lib.dispatch.fire.call(null, "\ufdd0'customer-select", a.id)
  }, "\ufdd0'trigger":jayq.core.$.call(null, "\ufdd0'#customer-dropdown-toggle")})));
  return jayq.core.$.call(null, "\ufdd0'#item-dropdown").typeahead(fetch.util.clj__GT_js.call(null, cljs.core.ObjMap.fromObject(["\ufdd0'source", "\ufdd0'onselect", "\ufdd0'trigger"], {"\ufdd0'source":pos.client.view.get_dropdown_data.call(null, "\ufdd0'items", a), "\ufdd0'onselect":function(a) {
    return lib.dispatch.fire.call(null, "\ufdd0'item-select", a.id)
  }, "\ufdd0'trigger":jayq.core.$.call(null, "\ufdd0'#item-dropdown-toggle")})))
};
pos.client.view.attach_typeahead_event_listeners = function() {
  var a = jayq.core.$.call(null, "\ufdd0'#customer-dropdown");
  return jayq.core.bind.call(null, a, "keyup", function() {
    return lib.dispatch.fire.call(null, "\ufdd0'customer-field-changed", pos.client.util.value.call(null, a))
  })
};
pos.client.view.attach_typeahead_clear_event_listeners = function() {
  jayq.core.bind.call(null, jayq.core.$.call(null, "\ufdd0'#customer-clear"), "click", function() {
    return lib.dispatch.fire.call(null, "\ufdd0'customer-clear")
  });
  return jayq.core.bind.call(null, jayq.core.$.call(null, "\ufdd0'#item-clear"), "click", function() {
    return lib.dispatch.fire.call(null, "\ufdd0'item-clear")
  })
};
var group__6197__auto____8209 = cljs.core.swap_BANG_.call(null, crate.core.group_id, cljs.core.inc);
pos.client.view.dropdown_row = function(a) {
  var b = cljs.core.truth_(cljs.core.seq_QMARK_.call(null, a)) ? cljs.core.apply.call(null, cljs.core.hash_map, a) : a, a = cljs.core.get.call(null, b, "\ufdd0'name"), b = cljs.core.get.call(null, b, "\ufdd0'id"), a = crate.core.html.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'li", cljs.core.PersistentVector.fromArray(["\ufdd0'a", cljs.core.ObjMap.fromObject(["\ufdd0'href", "\ufdd0'value"], {"\ufdd0'href":"#", "\ufdd0'value":b}), a])]));
  a.setAttribute("crateGroup", group__6197__auto____8209);
  return a
};
pos.client.view.dropdown_row.prototype._crateGroup = group__6197__auto____8209;
pos.client.view.populate_dropdowns = function(a) {
  var b = cljs.core.seq.call(null, "\ufdd0'locations".call(null, a));
  if(cljs.core.truth_(b)) {
    for(var c = cljs.core.first.call(null, b);;) {
      var d = pos.client.view.dropdown_row.call(null, c);
      jayq.core.append.call(null, jayq.core.$.call(null, "\ufdd0'#location-dropdown-list"), d);
      jayq.core.bind.call(null, jayq.core.$.call(null, d), "click", function(a) {
        return function() {
          return lib.dispatch.fire.call(null, "\ufdd0'location-select", "\ufdd0'id".call(null, a))
        }
      }(c, b, d));
      c = cljs.core.next.call(null, b);
      if(cljs.core.truth_(c)) {
        b = c, c = cljs.core.first.call(null, b)
      }else {
        break
      }
    }
  }
  c = cljs.core.seq.call(null, "\ufdd0'employees".call(null, a));
  if(cljs.core.truth_(c)) {
    for(a = cljs.core.first.call(null, c);;) {
      if(b = pos.client.view.dropdown_row.call(null, a), jayq.core.append.call(null, jayq.core.$.call(null, "\ufdd0'#employee-dropdown-list"), b), jayq.core.bind.call(null, jayq.core.$.call(null, b), "click", function(a) {
        return function() {
          return lib.dispatch.fire.call(null, "\ufdd0'employee-select", "\ufdd0'id".call(null, a))
        }
      }(a, c, b)), a = cljs.core.next.call(null, c), cljs.core.truth_(a)) {
        c = a, a = cljs.core.first.call(null, c)
      }else {
        return null
      }
    }
  }else {
    return null
  }
};
pos.client.view.prepare_dropdowns = function() {
  jayq.core.$.call(null, "\ufdd0'#location-dropdown-list").dropdown();
  return jayq.core.$.call(null, "\ufdd0'#employee-dropdown-list").dropdown()
};
lib.dispatch.react_to.call(null, cljs.core.set(["\ufdd0'init-data-done"]), function() {
  pos.client.view.prepare_typeaheads.call(null, cljs.core.deref.call(null, pos.client.model.data));
  pos.client.view.populate_dropdowns.call(null, cljs.core.deref.call(null, pos.client.model.data));
  return pos.client.view.prepare_dropdowns.call(null)
});
pos.client.view.render_customer = function() {
  var a = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {})), b = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {})), c = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {})), d = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {})), e = cljs.core.get.call(null, cljs.core.ObjMap.fromObject([], {}), "\ufdd0'hierarchy", cljs.core.global_hierarchy);
  return new cljs.core.MultiFn("render-customer", "\ufdd0'event", "\ufdd0'default", e, a, b, c, d)
}();
cljs.core._add_method.call(null, pos.client.view.render_customer, "\ufdd0'customer-selected", function(a) {
  var a = cljs.core.truth_(cljs.core.seq_QMARK_.call(null, a)) ? cljs.core.apply.call(null, cljs.core.hash_map, a) : a, a = cljs.core.get.call(null, a, "\ufdd0'id"), a = pos.client.util.from_coll_by_id.call(null, "\ufdd0'customers".call(null, cljs.core.deref.call(null, pos.client.model.data)), a), b = jayq.core.$.call(null, "\ufdd0'#customer-dropdown");
  pos.client.util.value.call(null, b, "\ufdd0'name".call(null, a));
  pos.client.animation.flash_input_border.call(null, b);
  return pos.client.animation.slide_in_customer_icon.call(null, "\ufdd0'image".call(null, a))
});
cljs.core._add_method.call(null, pos.client.view.render_customer, "\ufdd0'customer-deselected", function() {
  var a = jayq.core.$.call(null, "\ufdd0'#customer-dropdown");
  pos.client.util.value.call(null, a, null);
  return pos.client.animation.reset_customer_icon.call(null)
});
lib.dispatch.react_to.call(null, cljs.core.set(["\ufdd0'customer-change"]), function(a, b) {
  var c = "\ufdd0'id".call(null, b);
  return cljs.core.truth_(c) ? pos.client.view.render_customer.call(null, cljs.core.ObjMap.fromObject(["\ufdd0'event", "\ufdd0'id"], {"\ufdd0'event":"\ufdd0'customer-selected", "\ufdd0'id":"\ufdd0'id".call(null, b)})) : pos.client.view.render_customer.call(null, cljs.core.ObjMap.fromObject(["\ufdd0'event"], {"\ufdd0'event":"\ufdd0'customer-deselected"}))
});
pos.client.view.render_item = function() {
  var a = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {})), b = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {})), c = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {})), d = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {})), e = cljs.core.get.call(null, cljs.core.ObjMap.fromObject([], {}), "\ufdd0'hierarchy", cljs.core.global_hierarchy);
  return new cljs.core.MultiFn("render-item", "\ufdd0'event", "\ufdd0'default", e, a, b, c, d)
}();
cljs.core._add_method.call(null, pos.client.view.render_item, "\ufdd0'item-select", function(a) {
  var a = cljs.core.truth_(cljs.core.seq_QMARK_.call(null, a)) ? cljs.core.apply.call(null, cljs.core.hash_map, a) : a, a = cljs.core.get.call(null, a, "\ufdd0'id"), a = pos.client.util.from_coll_by_id.call(null, "\ufdd0'items".call(null, cljs.core.deref.call(null, pos.client.model.data)), a), b = jayq.core.$.call(null, "\ufdd0'#item-dropdown");
  pos.client.util.value.call(null, b, "\ufdd0'name".call(null, a));
  pos.client.animation.flash_input_border.call(null, b);
  return jayq.util.wait.call(null, 500, function() {
    return lib.dispatch.fire.call(null, "\ufdd0'item-clear")
  })
});
cljs.core._add_method.call(null, pos.client.view.render_item, "\ufdd0'item-clear", function() {
  var a = jayq.core.$.call(null, "\ufdd0'#item-dropdown");
  return pos.client.util.value.call(null, a, null)
});
lib.dispatch.react_to.call(null, cljs.core.set(["\ufdd0'item-clear", "\ufdd0'item-select"]), function(a, b) {
  cljs.core.truth_(b) && pos.client.view.basket_add_item.call(null, b);
  return pos.client.view.render_item.call(null, cljs.core.ObjMap.fromObject(["\ufdd0'event", "\ufdd0'id"], {"\ufdd0'event":a, "\ufdd0'id":b}))
});
pos.client.view.basket_add_item = function(a) {
  return lib.dispatch.fire.call(null, "\ufdd0'basket-add", a)
};
var group__6197__auto____8263 = cljs.core.swap_BANG_.call(null, crate.core.group_id, cljs.core.inc);
pos.client.view.basket_item = function(a) {
  var b = cljs.core.truth_(cljs.core.seq_QMARK_.call(null, a)) ? cljs.core.apply.call(null, cljs.core.hash_map, a) : a, a = cljs.core.get.call(null, b, "\ufdd0'discount"), c = cljs.core.get.call(null, b, "\ufdd0'qty"), d = cljs.core.get.call(null, b, "\ufdd0'price"), e = cljs.core.get.call(null, b, "\ufdd0'size"), f = cljs.core.get.call(null, b, "\ufdd0'color"), g = cljs.core.get.call(null, b, "\ufdd0'name"), b = cljs.core.get.call(null, b, "\ufdd0'id"), a = crate.core.html.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'tr", 
  cljs.core.ObjMap.fromObject(["\ufdd0'id"], {"\ufdd0'id":b}), cljs.core.PersistentVector.fromArray(["\ufdd0'td.bold", cljs.core.PersistentVector.fromArray(["\ufdd0'div", g])]), cljs.core.PersistentVector.fromArray(["\ufdd0'td", cljs.core.PersistentVector.fromArray(["\ufdd0'div", b])]), cljs.core.PersistentVector.fromArray(["\ufdd0'td", cljs.core.PersistentVector.fromArray(["\ufdd0'div", e])]), cljs.core.PersistentVector.fromArray(["\ufdd0'td", cljs.core.PersistentVector.fromArray(["\ufdd0'div", 
  f])]), cljs.core.PersistentVector.fromArray(["\ufdd0'td.qty", cljs.core.PersistentVector.fromArray(["\ufdd0'div", cljs.core.PersistentVector.fromArray(["\ufdd0'input.num", cljs.core.ObjMap.fromObject(["\ufdd0'value"], {"\ufdd0'value":c})])])]), cljs.core.PersistentVector.fromArray(["\ufdd0'td.price", cljs.core.PersistentVector.fromArray(["\ufdd0'div", cljs.core.PersistentVector.fromArray(["\ufdd0'input.price", cljs.core.ObjMap.fromObject(["\ufdd0'value"], {"\ufdd0'value":d})])])]), cljs.core.PersistentVector.fromArray(["\ufdd0'td.discount", 
  cljs.core.PersistentVector.fromArray(["\ufdd0'div", cljs.core.PersistentVector.fromArray(["\ufdd0'input.num", cljs.core.ObjMap.fromObject(["\ufdd0'value"], {"\ufdd0'value":a})]), "%"])]), cljs.core.PersistentVector.fromArray(["\ufdd0'td.bold.total", cljs.core.PersistentVector.fromArray(["\ufdd0'div", cljs.core.str.call(null, d)])]), cljs.core.PersistentVector.fromArray(["\ufdd0'td.close-container", cljs.core.PersistentVector.fromArray(["\ufdd0'div", cljs.core.PersistentVector.fromArray(["\ufdd0'a.close", 
  "x"])])])]));
  a.setAttribute("crateGroup", group__6197__auto____8263);
  return a
};
pos.client.view.basket_item.prototype._crateGroup = group__6197__auto____8263;
pos.client.view.render_basket = function() {
  var a = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {})), b = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {})), c = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {})), d = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {})), e = cljs.core.get.call(null, cljs.core.ObjMap.fromObject([], {}), "\ufdd0'hierarchy", cljs.core.global_hierarchy);
  return new cljs.core.MultiFn("render-basket", "\ufdd0'type", "\ufdd0'default", e, a, b, c, d)
}();
cljs.core._add_method.call(null, pos.client.view.render_basket, "\ufdd0'add-item", function(a) {
  var a = cljs.core.truth_(cljs.core.seq_QMARK_.call(null, a)) ? cljs.core.apply.call(null, cljs.core.hash_map, a) : a, a = cljs.core.get.call(null, a, "\ufdd0'item"), a = cljs.core.truth_(cljs.core.seq_QMARK_.call(null, a)) ? cljs.core.apply.call(null, cljs.core.hash_map, a) : a, b = cljs.core.get.call(null, a, "\ufdd0'id"), a = jayq.core.$.call(null, pos.client.view.basket_item.call(null, a)), c = jayq.core.find.call(null, a, ".qty > div > input"), d = jayq.core.find.call(null, a, ".price > div > input"), 
  e = jayq.core.find.call(null, a, ".discount > div > input"), f = jayq.core.find.call(null, a, ".close-container > div > a");
  jayq.core.append.call(null, jayq.core.$.call(null, "\ufdd0'#receipt-table"), a);
  pos.client.animation.slide_in_table_row.call(null, a);
  jayq.core.bind.call(null, c, "keyup", function() {
    return lib.dispatch.fire.call(null, "\ufdd0'basket-update", cljs.core.ObjMap.fromObject(["\ufdd0'id", "\ufdd0'changed-attr", "\ufdd0'new-val"], {"\ufdd0'id":b, "\ufdd0'changed-attr":"\ufdd0'qty", "\ufdd0'new-val":pos.client.util.value.call(null, c)}))
  });
  jayq.core.bind.call(null, d, "keyup", function() {
    return lib.dispatch.fire.call(null, "\ufdd0'basket-update", cljs.core.ObjMap.fromObject(["\ufdd0'id", "\ufdd0'changed-attr", "\ufdd0'new-val"], {"\ufdd0'id":b, "\ufdd0'changed-attr":"\ufdd0'price", "\ufdd0'new-val":pos.client.util.value.call(null, d)}))
  });
  jayq.core.bind.call(null, e, "keyup", function() {
    return lib.dispatch.fire.call(null, "\ufdd0'basket-update", cljs.core.ObjMap.fromObject(["\ufdd0'id", "\ufdd0'changed-attr", "\ufdd0'new-val"], {"\ufdd0'id":b, "\ufdd0'changed-attr":"\ufdd0'discount", "\ufdd0'new-val":pos.client.util.value.call(null, e)}))
  });
  return jayq.core.bind.call(null, f, "click", function() {
    return lib.dispatch.fire.call(null, "\ufdd0'basket-remove", b)
  })
});
cljs.core._add_method.call(null, pos.client.view.render_basket, "\ufdd0'remove-item", function(a) {
  a = cljs.core.truth_(cljs.core.seq_QMARK_.call(null, a)) ? cljs.core.apply.call(null, cljs.core.hash_map, a) : a;
  a = cljs.core.get.call(null, a, "\ufdd0'id");
  a = jayq.core.$.call(null, cljs.core.str.call(null, "tr#", a));
  return pos.client.animation.slide_out_table_row.call(null, a)
});
cljs.core._add_method.call(null, pos.client.view.render_basket, "\ufdd0'update-item", function(a) {
  var a = cljs.core.truth_(cljs.core.seq_QMARK_.call(null, a)) ? cljs.core.apply.call(null, cljs.core.hash_map, a) : a, a = cljs.core.get.call(null, a, "\ufdd0'item"), a = cljs.core.truth_(cljs.core.seq_QMARK_.call(null, a)) ? cljs.core.apply.call(null, cljs.core.hash_map, a) : a, b = cljs.core.get.call(null, a, "\ufdd0'discount"), c = cljs.core.get.call(null, a, "\ufdd0'qty"), d = cljs.core.get.call(null, a, "\ufdd0'price"), e = cljs.core.get.call(null, a, "\ufdd0'id"), e = jayq.core.$.call(null, 
  cljs.core.str.call(null, "tr#", e));
  pos.client.util.value.call(null, jayq.core.find.call(null, e, "td.qty > div input"), c);
  pos.client.util.value.call(null, jayq.core.find.call(null, e, "td.price > div input"), pos.client.util.num_as_field_value.call(null, d));
  pos.client.util.value.call(null, jayq.core.find.call(null, e, "td.discount > div input"), b.toFixed());
  return jayq.core.inner.call(null, jayq.core.find.call(null, e, "td.total > div"), cljs.core.str.call(null, pos.client.util.item_total_price.call(null, a)))
});
lib.dispatch.react_to.call(null, cljs.core.set(["\ufdd0'basket-change"]), function(a, b) {
  return pos.client.view.render_basket.call(null, b)
});
pos.client.view.render_basket_total = function(a) {
  var b = cljs.core.truth_(cljs.core.seq_QMARK_.call(null, a)) ? cljs.core.apply.call(null, cljs.core.hash_map, a) : a, a = cljs.core.get.call(null, b, "\ufdd0'discount"), c = cljs.core.get.call(null, b, "\ufdd0'vat"), b = cljs.core.get.call(null, b, "\ufdd0'tot"), d = jayq.core.$.call(null, "\ufdd0'#total-price"), e = jayq.core.$.call(null, "\ufdd0'#vat-number"), f = jayq.core.$.call(null, "\ufdd0'#discount-number");
  jayq.core.inner.call(null, d, pos.client.util.num_as_field_value.call(null, b));
  jayq.core.inner.call(null, e, pos.client.util.num_as_field_value.call(null, c));
  return jayq.core.inner.call(null, f, pos.client.util.num_as_field_value.call(null, a))
};
lib.dispatch.react_to.call(null, cljs.core.set(["\ufdd0'update-basket-total"]), function(a, b) {
  return pos.client.view.render_basket_total.call(null, b)
});
pos.client.view.bind_tender_buttons = function() {
  var a = cljs.core.seq.call(null, cljs.core.PersistentVector.fromArray("proceed-tender,cancel-tender,confirm-tender,transaction-cash,transaction-credit,transaction-gift".split(",")));
  if(cljs.core.truth_(a)) {
    for(var b = cljs.core.first.call(null, a);;) {
      if(jayq.core.bind.call(null, jayq.core.$.call(null, cljs.core.str.call(null, "#", b, "-button")), "click", function(a) {
        return function() {
          return lib.dispatch.fire.call(null, cljs.core.keyword.call(null, a))
        }
      }(b, a)), b = cljs.core.next.call(null, a), cljs.core.truth_(b)) {
        a = b, b = cljs.core.first.call(null, a)
      }else {
        return null
      }
    }
  }else {
    return null
  }
};
pos.client.view.bind_tender_listeners = function() {
  var a = jayq.core.$.call(null, "\ufdd0'#tender-cash"), b = jayq.core.$.call(null, "\ufdd0'#tender-credit"), c = jayq.core.$.call(null, "\ufdd0'#tender-gift");
  jayq.core.bind.call(null, a, "change", function() {
    return lib.dispatch.fire.call(null, "\ufdd0'tender-update", cljs.core.ObjMap.fromObject(["\ufdd0'changed-attr", "\ufdd0'new-val"], {"\ufdd0'changed-attr":"\ufdd0'cash", "\ufdd0'new-val":pos.client.util.value.call(null, a)}))
  });
  jayq.core.bind.call(null, b, "change", function() {
    return lib.dispatch.fire.call(null, "\ufdd0'tender-update", cljs.core.ObjMap.fromObject(["\ufdd0'changed-attr", "\ufdd0'new-val"], {"\ufdd0'changed-attr":"\ufdd0'credit", "\ufdd0'new-val":pos.client.util.value.call(null, b)}))
  });
  return jayq.core.bind.call(null, c, "change", function() {
    return lib.dispatch.fire.call(null, "\ufdd0'tender-update", cljs.core.ObjMap.fromObject(["\ufdd0'changed-attr", "\ufdd0'new-val"], {"\ufdd0'changed-attr":"\ufdd0'gift", "\ufdd0'new-val":pos.client.util.value.call(null, c)}))
  })
};
pos.client.view.render_tender = function() {
  var a = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {})), b = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {})), c = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {})), d = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {})), e = cljs.core.get.call(null, cljs.core.ObjMap.fromObject([], {}), "\ufdd0'hierarchy", cljs.core.global_hierarchy);
  return new cljs.core.MultiFn("render-tender", cljs.core.empty_QMARK_, "\ufdd0'default", e, a, b, c, d)
}();
cljs.core._add_method.call(null, pos.client.view.render_tender, !0, function() {
  var a = cljs.core.seq.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'#tender-total", "\ufdd0'#tender-cash", "\ufdd0'#tender-card", "\ufdd0'#tender-gift", "\ufdd0'#tender-change"]));
  if(cljs.core.truth_(a)) {
    for(var b = cljs.core.first.call(null, a);;) {
      if(pos.client.util.value.call(null, jayq.core.$.call(null, b), null), b = cljs.core.next.call(null, a), cljs.core.truth_(b)) {
        a = b, b = cljs.core.first.call(null, a)
      }else {
        return null
      }
    }
  }else {
    return null
  }
});
cljs.core._add_method.call(null, pos.client.view.render_tender, !1, function(a) {
  var b = pos.client.util.basket_total.call(null, cljs.core.deref.call(null, pos.client.model.basket)), c = cljs.core.apply.call(null, cljs.core._PLUS_, cljs.core.map.call(null, function(a) {
    return cljs.core.truth_(a) ? a : 0
  }, cljs.core.vals.call(null, a))) - b;
  pos.client.util.value.call(null, jayq.core.$.call(null, "\ufdd0'#tender-total"), pos.client.util.num_as_field_value.call(null, b));
  pos.client.util.value.call(null, jayq.core.$.call(null, "\ufdd0'#tender-cash"), pos.client.util.num_as_field_value.call(null, "\ufdd0'cash".call(null, a)));
  pos.client.util.value.call(null, jayq.core.$.call(null, "\ufdd0'#tender-card"), pos.client.util.num_as_field_value.call(null, "\ufdd0'card".call(null, a)));
  pos.client.util.value.call(null, jayq.core.$.call(null, "\ufdd0'#tender-gift"), pos.client.util.num_as_field_value.call(null, "\ufdd0'gift".call(null, a)));
  return pos.client.util.value.call(null, jayq.core.$.call(null, "\ufdd0'#tender-change"), pos.client.util.num_as_field_value.call(null, c))
});
lib.dispatch.react_to.call(null, cljs.core.set(["\ufdd0'tender-change"]), function(a, b) {
  return pos.client.view.render_tender.call(null, b)
});
pos.client.view.focus_tender_field = function() {
  var a = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {})), b = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {})), c = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {})), d = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {})), e = cljs.core.get.call(null, cljs.core.ObjMap.fromObject([], {}), "\ufdd0'hierarchy", cljs.core.global_hierarchy);
  return new cljs.core.MultiFn("focus-tender-field", cljs.core.identity, "\ufdd0'default", e, a, b, c, d)
}();
cljs.core._add_method.call(null, pos.client.view.focus_tender_field, "\ufdd0'transaction-cash", function() {
  var a = jayq.core.$.call(null, "\ufdd0'#tender-cash");
  a.focus();
  return a.select()
});
cljs.core._add_method.call(null, pos.client.view.focus_tender_field, "\ufdd0'transaction-credit", function() {
  var a = jayq.core.$.call(null, "\ufdd0'#tender-card");
  a.focus();
  return a.select()
});
cljs.core._add_method.call(null, pos.client.view.focus_tender_field, "\ufdd0'transaction-gift", function() {
  var a = jayq.core.$.call(null, "\ufdd0'#tender-gift");
  a.focus();
  return a.select()
});
lib.dispatch.react_to.call(null, cljs.core.set(["\ufdd0'transaction-cash", "\ufdd0'transaction-gift", "\ufdd0'transaction-credit"]), function(a) {
  return pos.client.view.focus_tender_field.call(null, a)
});
lib.dispatch.react_to.call(null, cljs.core.set(["\ufdd0'confirm-tender"]), function() {
  var a = function() {
    lib.dispatch.fire.call(null, "\ufdd0'cancel-tender");
    return jayq.core.$.call(null, "\ufdd0'#tender-success").modal()
  }, b = function(b) {
    var d = null;
    goog.isDef(b) && (d = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
    return a.call(this, d)
  };
  b.cljs$lang$maxFixedArity = 0;
  b.cljs$lang$applyTo = function(b) {
    b = cljs.core.seq(b);
    return a.call(this, b)
  };
  return b
}());
pos.client.view.render = function() {
  var a = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {})), b = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {})), c = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {})), d = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {})), e = cljs.core.get.call(null, cljs.core.ObjMap.fromObject([], {}), "\ufdd0'hierarchy", cljs.core.global_hierarchy);
  return new cljs.core.MultiFn("render", "\ufdd0'state", "\ufdd0'default", e, a, b, c, d)
}();
cljs.core._add_method.call(null, pos.client.view.render, cljs.core.PersistentVector.fromArray(["\ufdd0'dashboard", "\ufdd0'tender"]), function() {
  return pos.client.animation.state_transition.call(null, cljs.core.ObjMap.fromObject(["\ufdd0'slide-in", "\ufdd0'slide-out", "\ufdd0'in", "\ufdd0'out"], {"\ufdd0'slide-in":cljs.core.PersistentVector.fromArray([jayq.core.$.call(null, "\ufdd0'#tender")]), "\ufdd0'slide-out":cljs.core.PersistentVector.fromArray([jayq.core.$.call(null, "\ufdd0'#weather"), jayq.core.$.call(null, "\ufdd0'#item-row")]), "\ufdd0'in":cljs.core.PersistentVector.fromArray([jayq.core.$.call(null, "\ufdd0'#cancel-tender-button")]), 
  "\ufdd0'out":cljs.core.PersistentVector.fromArray([jayq.core.$.call(null, "\ufdd0'#proceed-tender-button")])}))
});
cljs.core._add_method.call(null, pos.client.view.render, cljs.core.PersistentVector.fromArray(["\ufdd0'tender", "\ufdd0'dashboard"]), function() {
  return pos.client.animation.state_transition.call(null, cljs.core.ObjMap.fromObject(["\ufdd0'slide-in", "\ufdd0'slide-out", "\ufdd0'in", "\ufdd0'out"], {"\ufdd0'slide-in":cljs.core.PersistentVector.fromArray([jayq.core.$.call(null, "\ufdd0'#weather"), jayq.core.$.call(null, "\ufdd0'#item-row")]), "\ufdd0'slide-out":cljs.core.PersistentVector.fromArray([jayq.core.$.call(null, "\ufdd0'#tender")]), "\ufdd0'in":cljs.core.PersistentVector.fromArray([jayq.core.$.call(null, "\ufdd0'#proceed-tender-button")]), 
  "\ufdd0'out":cljs.core.PersistentVector.fromArray([jayq.core.$.call(null, "\ufdd0'#cancel-tender-button")])}))
});
lib.dispatch.react_to.call(null, cljs.core.set(["\ufdd0'state-change"]), function(a, b) {
  return pos.client.view.render.call(null, cljs.core.ObjMap.fromObject(["\ufdd0'state"], {"\ufdd0'state":b}))
});
pos.client.view.prepare_ui = function() {
  pos.client.util.start_timer.call(null, pos.client.view.render_time);
  pos.client.view.draw_pie.call(null);
  pos.client.view.bind_tender_buttons.call(null);
  pos.client.view.bind_tender_listeners.call(null);
  pos.client.view.attach_typeahead_event_listeners.call(null);
  return pos.client.view.attach_typeahead_clear_event_listeners.call(null)
};
goog.structs.getCount = function(a) {
  return"function" == typeof a.getCount ? a.getCount() : goog.isArrayLike(a) || goog.isString(a) ? a.length : goog.object.getCount(a)
};
goog.structs.getValues = function(a) {
  if("function" == typeof a.getValues) {
    return a.getValues()
  }
  if(goog.isString(a)) {
    return a.split("")
  }
  if(goog.isArrayLike(a)) {
    for(var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d])
    }
    return b
  }
  return goog.object.getValues(a)
};
goog.structs.getKeys = function(a) {
  if("function" == typeof a.getKeys) {
    return a.getKeys()
  }
  if("function" != typeof a.getValues) {
    if(goog.isArrayLike(a) || goog.isString(a)) {
      for(var b = [], a = a.length, c = 0;c < a;c++) {
        b.push(c)
      }
      return b
    }
    return goog.object.getKeys(a)
  }
};
goog.structs.contains = function(a, b) {
  return"function" == typeof a.contains ? a.contains(b) : "function" == typeof a.containsValue ? a.containsValue(b) : goog.isArrayLike(a) || goog.isString(a) ? goog.array.contains(a, b) : goog.object.containsValue(a, b)
};
goog.structs.isEmpty = function(a) {
  return"function" == typeof a.isEmpty ? a.isEmpty() : goog.isArrayLike(a) || goog.isString(a) ? goog.array.isEmpty(a) : goog.object.isEmpty(a)
};
goog.structs.clear = function(a) {
  "function" == typeof a.clear ? a.clear() : goog.isArrayLike(a) ? goog.array.clear(a) : goog.object.clear(a)
};
goog.structs.forEach = function(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if(goog.isArrayLike(a) || goog.isString(a)) {
      goog.array.forEach(a, b, c)
    }else {
      for(var d = goog.structs.getKeys(a), e = goog.structs.getValues(a), f = e.length, g = 0;g < f;g++) {
        b.call(c, e[g], d && d[g], a)
      }
    }
  }
};
goog.structs.filter = function(a, b, c) {
  if("function" == typeof a.filter) {
    return a.filter(b, c)
  }
  if(goog.isArrayLike(a) || goog.isString(a)) {
    return goog.array.filter(a, b, c)
  }
  var d, e = goog.structs.getKeys(a), f = goog.structs.getValues(a), g = f.length;
  if(e) {
    d = {};
    for(var h = 0;h < g;h++) {
      b.call(c, f[h], e[h], a) && (d[e[h]] = f[h])
    }
  }else {
    d = [];
    for(h = 0;h < g;h++) {
      b.call(c, f[h], void 0, a) && d.push(f[h])
    }
  }
  return d
};
goog.structs.map = function(a, b, c) {
  if("function" == typeof a.map) {
    return a.map(b, c)
  }
  if(goog.isArrayLike(a) || goog.isString(a)) {
    return goog.array.map(a, b, c)
  }
  var d, e = goog.structs.getKeys(a), f = goog.structs.getValues(a), g = f.length;
  if(e) {
    d = {};
    for(var h = 0;h < g;h++) {
      d[e[h]] = b.call(c, f[h], e[h], a)
    }
  }else {
    d = [];
    for(h = 0;h < g;h++) {
      d[h] = b.call(c, f[h], void 0, a)
    }
  }
  return d
};
goog.structs.some = function(a, b, c) {
  if("function" == typeof a.some) {
    return a.some(b, c)
  }
  if(goog.isArrayLike(a) || goog.isString(a)) {
    return goog.array.some(a, b, c)
  }
  for(var d = goog.structs.getKeys(a), e = goog.structs.getValues(a), f = e.length, g = 0;g < f;g++) {
    if(b.call(c, e[g], d && d[g], a)) {
      return!0
    }
  }
  return!1
};
goog.structs.every = function(a, b, c) {
  if("function" == typeof a.every) {
    return a.every(b, c)
  }
  if(goog.isArrayLike(a) || goog.isString(a)) {
    return goog.array.every(a, b, c)
  }
  for(var d = goog.structs.getKeys(a), e = goog.structs.getValues(a), f = e.length, g = 0;g < f;g++) {
    if(!b.call(c, e[g], d && d[g], a)) {
      return!1
    }
  }
  return!0
};
goog.iter = {};
goog.iter.StopIteration = "StopIteration" in goog.global ? goog.global.StopIteration : Error("StopIteration");
goog.iter.Iterator = function() {
};
goog.iter.Iterator.prototype.next = function() {
  throw goog.iter.StopIteration;
};
goog.iter.Iterator.prototype.__iterator__ = function() {
  return this
};
goog.iter.toIterator = function(a) {
  if(a instanceof goog.iter.Iterator) {
    return a
  }
  if("function" == typeof a.__iterator__) {
    return a.__iterator__(!1)
  }
  if(goog.isArrayLike(a)) {
    var b = 0, c = new goog.iter.Iterator;
    c.next = function() {
      for(;;) {
        if(b >= a.length) {
          throw goog.iter.StopIteration;
        }
        if(b in a) {
          return a[b++]
        }
        b++
      }
    };
    return c
  }
  throw Error("Not implemented");
};
goog.iter.forEach = function(a, b, c) {
  if(goog.isArrayLike(a)) {
    try {
      goog.array.forEach(a, b, c)
    }catch(d) {
      if(d !== goog.iter.StopIteration) {
        throw d;
      }
    }
  }else {
    a = goog.iter.toIterator(a);
    try {
      for(;;) {
        b.call(c, a.next(), void 0, a)
      }
    }catch(e) {
      if(e !== goog.iter.StopIteration) {
        throw e;
      }
    }
  }
};
goog.iter.filter = function(a, b, c) {
  var a = goog.iter.toIterator(a), d = new goog.iter.Iterator;
  d.next = function() {
    for(;;) {
      var d = a.next();
      if(b.call(c, d, void 0, a)) {
        return d
      }
    }
  };
  return d
};
goog.iter.range = function(a, b, c) {
  var d = 0, e = a, f = c || 1;
  1 < arguments.length && (d = a, e = b);
  if(0 == f) {
    throw Error("Range step argument must not be zero");
  }
  var g = new goog.iter.Iterator;
  g.next = function() {
    if(0 < f && d >= e || 0 > f && d <= e) {
      throw goog.iter.StopIteration;
    }
    var a = d;
    d += f;
    return a
  };
  return g
};
goog.iter.join = function(a, b) {
  return goog.iter.toArray(a).join(b)
};
goog.iter.map = function(a, b, c) {
  var a = goog.iter.toIterator(a), d = new goog.iter.Iterator;
  d.next = function() {
    for(;;) {
      var d = a.next();
      return b.call(c, d, void 0, a)
    }
  };
  return d
};
goog.iter.reduce = function(a, b, c, d) {
  var e = c;
  goog.iter.forEach(a, function(a) {
    e = b.call(d, e, a)
  });
  return e
};
goog.iter.some = function(a, b, c) {
  a = goog.iter.toIterator(a);
  try {
    for(;;) {
      if(b.call(c, a.next(), void 0, a)) {
        return!0
      }
    }
  }catch(d) {
    if(d !== goog.iter.StopIteration) {
      throw d;
    }
  }
  return!1
};
goog.iter.every = function(a, b, c) {
  a = goog.iter.toIterator(a);
  try {
    for(;;) {
      if(!b.call(c, a.next(), void 0, a)) {
        return!1
      }
    }
  }catch(d) {
    if(d !== goog.iter.StopIteration) {
      throw d;
    }
  }
  return!0
};
goog.iter.chain = function(a) {
  var b = arguments, c = b.length, d = 0, e = new goog.iter.Iterator;
  e.next = function() {
    try {
      if(d >= c) {
        throw goog.iter.StopIteration;
      }
      return goog.iter.toIterator(b[d]).next()
    }catch(a) {
      if(a !== goog.iter.StopIteration || d >= c) {
        throw a;
      }
      d++;
      return this.next()
    }
  };
  return e
};
goog.iter.dropWhile = function(a, b, c) {
  var a = goog.iter.toIterator(a), d = new goog.iter.Iterator, e = !0;
  d.next = function() {
    for(;;) {
      var d = a.next();
      if(!e || !b.call(c, d, void 0, a)) {
        return e = !1, d
      }
    }
  };
  return d
};
goog.iter.takeWhile = function(a, b, c) {
  var a = goog.iter.toIterator(a), d = new goog.iter.Iterator, e = !0;
  d.next = function() {
    for(;;) {
      if(e) {
        var d = a.next();
        if(b.call(c, d, void 0, a)) {
          return d
        }
        e = !1
      }else {
        throw goog.iter.StopIteration;
      }
    }
  };
  return d
};
goog.iter.toArray = function(a) {
  if(goog.isArrayLike(a)) {
    return goog.array.toArray(a)
  }
  var a = goog.iter.toIterator(a), b = [];
  goog.iter.forEach(a, function(a) {
    b.push(a)
  });
  return b
};
goog.iter.equals = function(a, b) {
  var a = goog.iter.toIterator(a), b = goog.iter.toIterator(b), c, d;
  try {
    for(;;) {
      c = d = !1;
      var e = a.next();
      c = !0;
      var f = b.next();
      d = !0;
      if(e != f) {
        break
      }
    }
  }catch(g) {
    if(g !== goog.iter.StopIteration) {
      throw g;
    }
    if(c && !d) {
      return!1
    }
    if(!d) {
      try {
        b.next()
      }catch(h) {
        if(h !== goog.iter.StopIteration) {
          throw h;
        }
        return!0
      }
    }
  }
  return!1
};
goog.iter.nextOrValue = function(a, b) {
  try {
    return goog.iter.toIterator(a).next()
  }catch(c) {
    if(c != goog.iter.StopIteration) {
      throw c;
    }
    return b
  }
};
goog.iter.product = function(a) {
  if(goog.array.some(arguments, function(a) {
    return!a.length
  }) || !arguments.length) {
    return new goog.iter.Iterator
  }
  var b = new goog.iter.Iterator, c = arguments, d = goog.array.repeat(0, c.length);
  b.next = function() {
    if(d) {
      for(var a = goog.array.map(d, function(a, b) {
        return c[b][a]
      }), b = d.length - 1;0 <= b;b--) {
        goog.asserts.assert(d);
        if(d[b] < c[b].length - 1) {
          d[b]++;
          break
        }
        if(0 == b) {
          d = null;
          break
        }
        d[b] = 0
      }
      return a
    }
    throw goog.iter.StopIteration;
  };
  return b
};
goog.structs.Map = function(a, b) {
  this.map_ = {};
  this.keys_ = [];
  var c = arguments.length;
  if(1 < c) {
    if(c % 2) {
      throw Error("Uneven number of arguments");
    }
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    a && this.addAll(a)
  }
};
goog.structs.Map.prototype.count_ = 0;
goog.structs.Map.prototype.version_ = 0;
goog.structs.Map.prototype.getCount = function() {
  return this.count_
};
goog.structs.Map.prototype.getValues = function() {
  this.cleanupKeysArray_();
  for(var a = [], b = 0;b < this.keys_.length;b++) {
    a.push(this.map_[this.keys_[b]])
  }
  return a
};
goog.structs.Map.prototype.getKeys = function() {
  this.cleanupKeysArray_();
  return this.keys_.concat()
};
goog.structs.Map.prototype.containsKey = function(a) {
  return goog.structs.Map.hasKey_(this.map_, a)
};
goog.structs.Map.prototype.containsValue = function(a) {
  for(var b = 0;b < this.keys_.length;b++) {
    var c = this.keys_[b];
    if(goog.structs.Map.hasKey_(this.map_, c) && this.map_[c] == a) {
      return!0
    }
  }
  return!1
};
goog.structs.Map.prototype.equals = function(a, b) {
  if(this === a) {
    return!0
  }
  if(this.count_ != a.getCount()) {
    return!1
  }
  var c = b || goog.structs.Map.defaultEquals;
  this.cleanupKeysArray_();
  for(var d, e = 0;d = this.keys_[e];e++) {
    if(!c(this.get(d), a.get(d))) {
      return!1
    }
  }
  return!0
};
goog.structs.Map.defaultEquals = function(a, b) {
  return a === b
};
goog.structs.Map.prototype.isEmpty = function() {
  return 0 == this.count_
};
goog.structs.Map.prototype.clear = function() {
  this.map_ = {};
  this.version_ = this.count_ = this.keys_.length = 0
};
goog.structs.Map.prototype.remove = function(a) {
  return goog.structs.Map.hasKey_(this.map_, a) ? (delete this.map_[a], this.count_--, this.version_++, this.keys_.length > 2 * this.count_ && this.cleanupKeysArray_(), !0) : !1
};
goog.structs.Map.prototype.cleanupKeysArray_ = function() {
  if(this.count_ != this.keys_.length) {
    for(var a = 0, b = 0;a < this.keys_.length;) {
      var c = this.keys_[a];
      goog.structs.Map.hasKey_(this.map_, c) && (this.keys_[b++] = c);
      a++
    }
    this.keys_.length = b
  }
  if(this.count_ != this.keys_.length) {
    for(var d = {}, b = a = 0;a < this.keys_.length;) {
      c = this.keys_[a], goog.structs.Map.hasKey_(d, c) || (this.keys_[b++] = c, d[c] = 1), a++
    }
    this.keys_.length = b
  }
};
goog.structs.Map.prototype.get = function(a, b) {
  return goog.structs.Map.hasKey_(this.map_, a) ? this.map_[a] : b
};
goog.structs.Map.prototype.set = function(a, b) {
  goog.structs.Map.hasKey_(this.map_, a) || (this.count_++, this.keys_.push(a), this.version_++);
  this.map_[a] = b
};
goog.structs.Map.prototype.addAll = function(a) {
  var b;
  a instanceof goog.structs.Map ? (b = a.getKeys(), a = a.getValues()) : (b = goog.object.getKeys(a), a = goog.object.getValues(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
goog.structs.Map.prototype.clone = function() {
  return new goog.structs.Map(this)
};
goog.structs.Map.prototype.transpose = function() {
  for(var a = new goog.structs.Map, b = 0;b < this.keys_.length;b++) {
    var c = this.keys_[b];
    a.set(this.map_[c], c)
  }
  return a
};
goog.structs.Map.prototype.toObject = function() {
  this.cleanupKeysArray_();
  for(var a = {}, b = 0;b < this.keys_.length;b++) {
    var c = this.keys_[b];
    a[c] = this.map_[c]
  }
  return a
};
goog.structs.Map.prototype.getKeyIterator = function() {
  return this.__iterator__(!0)
};
goog.structs.Map.prototype.getValueIterator = function() {
  return this.__iterator__(!1)
};
goog.structs.Map.prototype.__iterator__ = function(a) {
  this.cleanupKeysArray_();
  var b = 0, c = this.keys_, d = this.map_, e = this.version_, f = this, g = new goog.iter.Iterator;
  g.next = function() {
    for(;;) {
      if(e != f.version_) {
        throw Error("The map has changed since the iterator was created");
      }
      if(b >= c.length) {
        throw goog.iter.StopIteration;
      }
      var g = c[b++];
      return a ? g : d[g]
    }
  };
  return g
};
goog.structs.Map.hasKey_ = function(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
};
goog.structs.Set = function(a) {
  this.map_ = new goog.structs.Map;
  a && this.addAll(a)
};
goog.structs.Set.getKey_ = function(a) {
  var b = typeof a;
  return"object" == b && a || "function" == b ? "o" + goog.getUid(a) : b.substr(0, 1) + a
};
goog.structs.Set.prototype.getCount = function() {
  return this.map_.getCount()
};
goog.structs.Set.prototype.add = function(a) {
  this.map_.set(goog.structs.Set.getKey_(a), a)
};
goog.structs.Set.prototype.addAll = function(a) {
  for(var a = goog.structs.getValues(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
goog.structs.Set.prototype.removeAll = function(a) {
  for(var a = goog.structs.getValues(a), b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
goog.structs.Set.prototype.remove = function(a) {
  return this.map_.remove(goog.structs.Set.getKey_(a))
};
goog.structs.Set.prototype.clear = function() {
  this.map_.clear()
};
goog.structs.Set.prototype.isEmpty = function() {
  return this.map_.isEmpty()
};
goog.structs.Set.prototype.contains = function(a) {
  return this.map_.containsKey(goog.structs.Set.getKey_(a))
};
goog.structs.Set.prototype.containsAll = function(a) {
  return goog.structs.every(a, this.contains, this)
};
goog.structs.Set.prototype.intersection = function(a) {
  for(var b = new goog.structs.Set, a = goog.structs.getValues(a), c = 0;c < a.length;c++) {
    var d = a[c];
    this.contains(d) && b.add(d)
  }
  return b
};
goog.structs.Set.prototype.getValues = function() {
  return this.map_.getValues()
};
goog.structs.Set.prototype.clone = function() {
  return new goog.structs.Set(this)
};
goog.structs.Set.prototype.equals = function(a) {
  return this.getCount() == goog.structs.getCount(a) && this.isSubsetOf(a)
};
goog.structs.Set.prototype.isSubsetOf = function(a) {
  var b = goog.structs.getCount(a);
  if(this.getCount() > b) {
    return!1
  }
  !(a instanceof goog.structs.Set) && 5 < b && (a = new goog.structs.Set(a));
  return goog.structs.every(this, function(b) {
    return goog.structs.contains(a, b)
  })
};
goog.structs.Set.prototype.__iterator__ = function() {
  return this.map_.__iterator__(!1)
};
goog.debug.catchErrors = function(a, b, c) {
  var c = c || goog.global, d = c.onerror;
  c.onerror = function(c, f, g) {
    d && d(c, f, g);
    a({message:c, fileName:f, line:g});
    return Boolean(b)
  }
};
goog.debug.expose = function(a, b) {
  if("undefined" == typeof a) {
    return"undefined"
  }
  if(null == a) {
    return"NULL"
  }
  var c = [], d;
  for(d in a) {
    if(b || !goog.isFunction(a[d])) {
      var e = d + " = ";
      try {
        e += a[d]
      }catch(f) {
        e += "*** " + f + " ***"
      }
      c.push(e)
    }
  }
  return c.join("\n")
};
goog.debug.deepExpose = function(a, b) {
  var c = new goog.structs.Set, d = [], e = function(a, g) {
    var h = g + "  ";
    try {
      if(goog.isDef(a)) {
        if(goog.isNull(a)) {
          d.push("NULL")
        }else {
          if(goog.isString(a)) {
            d.push('"' + a.replace(/\n/g, "\n" + g) + '"')
          }else {
            if(goog.isFunction(a)) {
              d.push(("" + a).replace(/\n/g, "\n" + g))
            }else {
              if(goog.isObject(a)) {
                if(c.contains(a)) {
                  d.push("*** reference loop detected ***")
                }else {
                  c.add(a);
                  d.push("{");
                  for(var i in a) {
                    if(b || !goog.isFunction(a[i])) {
                      d.push("\n"), d.push(h), d.push(i + " = "), e(a[i], h)
                    }
                  }
                  d.push("\n" + g + "}")
                }
              }else {
                d.push(a)
              }
            }
          }
        }
      }else {
        d.push("undefined")
      }
    }catch(j) {
      d.push("*** " + j + " ***")
    }
  };
  e(a, "");
  return d.join("")
};
goog.debug.exposeArray = function(a) {
  for(var b = [], c = 0;c < a.length;c++) {
    goog.isArray(a[c]) ? b.push(goog.debug.exposeArray(a[c])) : b.push(a[c])
  }
  return"[ " + b.join(", ") + " ]"
};
goog.debug.exposeException = function(a, b) {
  try {
    var c = goog.debug.normalizeErrorObject(a);
    return"Message: " + goog.string.htmlEscape(c.message) + '\nUrl: <a href="view-source:' + c.fileName + '" target="_new">' + c.fileName + "</a>\nLine: " + c.lineNumber + "\n\nBrowser stack:\n" + goog.string.htmlEscape(c.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + goog.string.htmlEscape(goog.debug.getStacktrace(b) + "-> ")
  }catch(d) {
    return"Exception trying to expose exception! You win, we lose. " + d
  }
};
goog.debug.normalizeErrorObject = function(a) {
  var b = goog.getObjectByName("window.location.href");
  if(goog.isString(a)) {
    return{message:a, name:"Unknown error", lineNumber:"Not available", fileName:b, stack:"Not available"}
  }
  var c, d, e = !1;
  try {
    c = a.lineNumber || a.line || "Not available"
  }catch(f) {
    c = "Not available", e = !0
  }
  try {
    d = a.fileName || a.filename || a.sourceURL || b
  }catch(g) {
    d = "Not available", e = !0
  }
  return e || !a.lineNumber || !a.fileName || !a.stack ? {message:a.message, name:a.name, lineNumber:c, fileName:d, stack:a.stack || "Not available"} : a
};
goog.debug.enhanceError = function(a, b) {
  var c = "string" == typeof a ? Error(a) : a;
  if(!c.stack) {
    c.stack = goog.debug.getStacktrace(arguments.callee.caller)
  }
  if(b) {
    for(var d = 0;c["message" + d];) {
      ++d
    }
    c["message" + d] = "" + b
  }
  return c
};
goog.debug.getStacktraceSimple = function(a) {
  for(var b = [], c = arguments.callee.caller, d = 0;c && (!a || d < a);) {
    b.push(goog.debug.getFunctionName(c));
    b.push("()\n");
    try {
      c = c.caller
    }catch(e) {
      b.push("[exception trying to get caller]\n");
      break
    }
    d++;
    if(d >= goog.debug.MAX_STACK_DEPTH) {
      b.push("[...long stack...]");
      break
    }
  }
  a && d >= a ? b.push("[...reached max depth limit...]") : b.push("[end]");
  return b.join("")
};
goog.debug.MAX_STACK_DEPTH = 50;
goog.debug.getStacktrace = function(a) {
  return goog.debug.getStacktraceHelper_(a || arguments.callee.caller, [])
};
goog.debug.getStacktraceHelper_ = function(a, b) {
  var c = [];
  if(goog.array.contains(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && b.length < goog.debug.MAX_STACK_DEPTH) {
      c.push(goog.debug.getFunctionName(a) + "(");
      for(var d = a.arguments, e = 0;e < d.length;e++) {
        0 < e && c.push(", ");
        var f;
        f = d[e];
        switch(typeof f) {
          case "object":
            f = f ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            f = "" + f;
            break;
          case "boolean":
            f = f ? "true" : "false";
            break;
          case "function":
            f = (f = goog.debug.getFunctionName(f)) ? f : "[fn]";
            break;
          default:
            f = typeof f
        }
        40 < f.length && (f = f.substr(0, 40) + "...");
        c.push(f)
      }
      b.push(a);
      c.push(")\n");
      try {
        c.push(goog.debug.getStacktraceHelper_(a.caller, b))
      }catch(g) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
};
goog.debug.getFunctionName = function(a) {
  a = "" + a;
  if(!goog.debug.fnNameCache_[a]) {
    var b = /function ([^\(]+)/.exec(a);
    goog.debug.fnNameCache_[a] = b ? b[1] : "[Anonymous]"
  }
  return goog.debug.fnNameCache_[a]
};
goog.debug.makeWhitespaceVisible = function(a) {
  return a.replace(/ /g, "[_]").replace(/\f/g, "[f]").replace(/\n/g, "[n]\n").replace(/\r/g, "[r]").replace(/\t/g, "[t]")
};
goog.debug.fnNameCache_ = {};
goog.debug.LogRecord = function(a, b, c, d, e) {
  this.reset(a, b, c, d, e)
};
goog.debug.LogRecord.prototype.sequenceNumber_ = 0;
goog.debug.LogRecord.prototype.exception_ = null;
goog.debug.LogRecord.prototype.exceptionText_ = null;
goog.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS = !0;
goog.debug.LogRecord.nextSequenceNumber_ = 0;
goog.debug.LogRecord.prototype.reset = function(a, b, c, d, e) {
  if(goog.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS) {
    this.sequenceNumber_ = "number" == typeof e ? e : goog.debug.LogRecord.nextSequenceNumber_++
  }
  this.time_ = d || goog.now();
  this.level_ = a;
  this.msg_ = b;
  this.loggerName_ = c;
  delete this.exception_;
  delete this.exceptionText_
};
goog.debug.LogRecord.prototype.getLoggerName = function() {
  return this.loggerName_
};
goog.debug.LogRecord.prototype.getException = function() {
  return this.exception_
};
goog.debug.LogRecord.prototype.setException = function(a) {
  this.exception_ = a
};
goog.debug.LogRecord.prototype.getExceptionText = function() {
  return this.exceptionText_
};
goog.debug.LogRecord.prototype.setExceptionText = function(a) {
  this.exceptionText_ = a
};
goog.debug.LogRecord.prototype.setLoggerName = function(a) {
  this.loggerName_ = a
};
goog.debug.LogRecord.prototype.getLevel = function() {
  return this.level_
};
goog.debug.LogRecord.prototype.setLevel = function(a) {
  this.level_ = a
};
goog.debug.LogRecord.prototype.getMessage = function() {
  return this.msg_
};
goog.debug.LogRecord.prototype.setMessage = function(a) {
  this.msg_ = a
};
goog.debug.LogRecord.prototype.getMillis = function() {
  return this.time_
};
goog.debug.LogRecord.prototype.setMillis = function(a) {
  this.time_ = a
};
goog.debug.LogRecord.prototype.getSequenceNumber = function() {
  return this.sequenceNumber_
};
goog.debug.LogBuffer = function() {
  goog.asserts.assert(goog.debug.LogBuffer.isBufferingEnabled(), "Cannot use goog.debug.LogBuffer without defining goog.debug.LogBuffer.CAPACITY.");
  this.clear()
};
goog.debug.LogBuffer.getInstance = function() {
  if(!goog.debug.LogBuffer.instance_) {
    goog.debug.LogBuffer.instance_ = new goog.debug.LogBuffer
  }
  return goog.debug.LogBuffer.instance_
};
goog.debug.LogBuffer.CAPACITY = 0;
goog.debug.LogBuffer.prototype.addRecord = function(a, b, c) {
  var d = (this.curIndex_ + 1) % goog.debug.LogBuffer.CAPACITY;
  this.curIndex_ = d;
  if(this.isFull_) {
    return d = this.buffer_[d], d.reset(a, b, c), d
  }
  this.isFull_ = d == goog.debug.LogBuffer.CAPACITY - 1;
  return this.buffer_[d] = new goog.debug.LogRecord(a, b, c)
};
goog.debug.LogBuffer.isBufferingEnabled = function() {
  return 0 < goog.debug.LogBuffer.CAPACITY
};
goog.debug.LogBuffer.prototype.clear = function() {
  this.buffer_ = Array(goog.debug.LogBuffer.CAPACITY);
  this.curIndex_ = -1;
  this.isFull_ = !1
};
goog.debug.LogBuffer.prototype.forEachRecord = function(a) {
  var b = this.buffer_;
  if(b[0]) {
    var c = this.curIndex_, d = this.isFull_ ? c : -1;
    do {
      d = (d + 1) % goog.debug.LogBuffer.CAPACITY, a(b[d])
    }while(d != c)
  }
};
goog.debug.Logger = function(a) {
  this.name_ = a
};
goog.debug.Logger.prototype.parent_ = null;
goog.debug.Logger.prototype.level_ = null;
goog.debug.Logger.prototype.children_ = null;
goog.debug.Logger.prototype.handlers_ = null;
goog.debug.Logger.ENABLE_HIERARCHY = !0;
if(!goog.debug.Logger.ENABLE_HIERARCHY) {
  goog.debug.Logger.rootHandlers_ = []
}
goog.debug.Logger.Level = function(a, b) {
  this.name = a;
  this.value = b
};
goog.debug.Logger.Level.prototype.toString = function() {
  return this.name
};
goog.debug.Logger.Level.OFF = new goog.debug.Logger.Level("OFF", Infinity);
goog.debug.Logger.Level.SHOUT = new goog.debug.Logger.Level("SHOUT", 1200);
goog.debug.Logger.Level.SEVERE = new goog.debug.Logger.Level("SEVERE", 1E3);
goog.debug.Logger.Level.WARNING = new goog.debug.Logger.Level("WARNING", 900);
goog.debug.Logger.Level.INFO = new goog.debug.Logger.Level("INFO", 800);
goog.debug.Logger.Level.CONFIG = new goog.debug.Logger.Level("CONFIG", 700);
goog.debug.Logger.Level.FINE = new goog.debug.Logger.Level("FINE", 500);
goog.debug.Logger.Level.FINER = new goog.debug.Logger.Level("FINER", 400);
goog.debug.Logger.Level.FINEST = new goog.debug.Logger.Level("FINEST", 300);
goog.debug.Logger.Level.ALL = new goog.debug.Logger.Level("ALL", 0);
goog.debug.Logger.Level.PREDEFINED_LEVELS = [goog.debug.Logger.Level.OFF, goog.debug.Logger.Level.SHOUT, goog.debug.Logger.Level.SEVERE, goog.debug.Logger.Level.WARNING, goog.debug.Logger.Level.INFO, goog.debug.Logger.Level.CONFIG, goog.debug.Logger.Level.FINE, goog.debug.Logger.Level.FINER, goog.debug.Logger.Level.FINEST, goog.debug.Logger.Level.ALL];
goog.debug.Logger.Level.predefinedLevelsCache_ = null;
goog.debug.Logger.Level.createPredefinedLevelsCache_ = function() {
  goog.debug.Logger.Level.predefinedLevelsCache_ = {};
  for(var a = 0, b;b = goog.debug.Logger.Level.PREDEFINED_LEVELS[a];a++) {
    goog.debug.Logger.Level.predefinedLevelsCache_[b.value] = b, goog.debug.Logger.Level.predefinedLevelsCache_[b.name] = b
  }
};
goog.debug.Logger.Level.getPredefinedLevel = function(a) {
  goog.debug.Logger.Level.predefinedLevelsCache_ || goog.debug.Logger.Level.createPredefinedLevelsCache_();
  return goog.debug.Logger.Level.predefinedLevelsCache_[a] || null
};
goog.debug.Logger.Level.getPredefinedLevelByValue = function(a) {
  goog.debug.Logger.Level.predefinedLevelsCache_ || goog.debug.Logger.Level.createPredefinedLevelsCache_();
  if(a in goog.debug.Logger.Level.predefinedLevelsCache_) {
    return goog.debug.Logger.Level.predefinedLevelsCache_[a]
  }
  for(var b = 0;b < goog.debug.Logger.Level.PREDEFINED_LEVELS.length;++b) {
    var c = goog.debug.Logger.Level.PREDEFINED_LEVELS[b];
    if(c.value <= a) {
      return c
    }
  }
  return null
};
goog.debug.Logger.getLogger = function(a) {
  return goog.debug.LogManager.getLogger(a)
};
goog.debug.Logger.prototype.getName = function() {
  return this.name_
};
goog.debug.Logger.prototype.addHandler = function(a) {
  if(goog.debug.Logger.ENABLE_HIERARCHY) {
    if(!this.handlers_) {
      this.handlers_ = []
    }
    this.handlers_.push(a)
  }else {
    goog.asserts.assert(!this.name_, "Cannot call addHandler on a non-root logger when goog.debug.Logger.ENABLE_HIERARCHY is false."), goog.debug.Logger.rootHandlers_.push(a)
  }
};
goog.debug.Logger.prototype.removeHandler = function(a) {
  var b = goog.debug.Logger.ENABLE_HIERARCHY ? this.handlers_ : goog.debug.Logger.rootHandlers_;
  return!!b && goog.array.remove(b, a)
};
goog.debug.Logger.prototype.getParent = function() {
  return this.parent_
};
goog.debug.Logger.prototype.getChildren = function() {
  if(!this.children_) {
    this.children_ = {}
  }
  return this.children_
};
goog.debug.Logger.prototype.setLevel = function(a) {
  goog.debug.Logger.ENABLE_HIERARCHY ? this.level_ = a : (goog.asserts.assert(!this.name_, "Cannot call setLevel() on a non-root logger when goog.debug.Logger.ENABLE_HIERARCHY is false."), goog.debug.Logger.rootLevel_ = a)
};
goog.debug.Logger.prototype.getLevel = function() {
  return this.level_
};
goog.debug.Logger.prototype.getEffectiveLevel = function() {
  if(!goog.debug.Logger.ENABLE_HIERARCHY) {
    return goog.debug.Logger.rootLevel_
  }
  if(this.level_) {
    return this.level_
  }
  if(this.parent_) {
    return this.parent_.getEffectiveLevel()
  }
  goog.asserts.fail("Root logger has no level set.");
  return null
};
goog.debug.Logger.prototype.isLoggable = function(a) {
  return a.value >= this.getEffectiveLevel().value
};
goog.debug.Logger.prototype.log = function(a, b, c) {
  this.isLoggable(a) && this.doLogRecord_(this.getLogRecord(a, b, c))
};
goog.debug.Logger.prototype.getLogRecord = function(a, b, c) {
  var d = goog.debug.LogBuffer.isBufferingEnabled() ? goog.debug.LogBuffer.getInstance().addRecord(a, b, this.name_) : new goog.debug.LogRecord(a, "" + b, this.name_);
  c && (d.setException(c), d.setExceptionText(goog.debug.exposeException(c, arguments.callee.caller)));
  return d
};
goog.debug.Logger.prototype.shout = function(a, b) {
  this.log(goog.debug.Logger.Level.SHOUT, a, b)
};
goog.debug.Logger.prototype.severe = function(a, b) {
  this.log(goog.debug.Logger.Level.SEVERE, a, b)
};
goog.debug.Logger.prototype.warning = function(a, b) {
  this.log(goog.debug.Logger.Level.WARNING, a, b)
};
goog.debug.Logger.prototype.info = function(a, b) {
  this.log(goog.debug.Logger.Level.INFO, a, b)
};
goog.debug.Logger.prototype.config = function(a, b) {
  this.log(goog.debug.Logger.Level.CONFIG, a, b)
};
goog.debug.Logger.prototype.fine = function(a, b) {
  this.log(goog.debug.Logger.Level.FINE, a, b)
};
goog.debug.Logger.prototype.finer = function(a, b) {
  this.log(goog.debug.Logger.Level.FINER, a, b)
};
goog.debug.Logger.prototype.finest = function(a, b) {
  this.log(goog.debug.Logger.Level.FINEST, a, b)
};
goog.debug.Logger.prototype.logRecord = function(a) {
  this.isLoggable(a.getLevel()) && this.doLogRecord_(a)
};
goog.debug.Logger.prototype.logToSpeedTracer_ = function(a) {
  goog.global.console && goog.global.console.markTimeline && goog.global.console.markTimeline(a)
};
goog.debug.Logger.prototype.doLogRecord_ = function(a) {
  this.logToSpeedTracer_("log:" + a.getMessage());
  if(goog.debug.Logger.ENABLE_HIERARCHY) {
    for(var b = this;b;) {
      b.callPublish_(a), b = b.getParent()
    }
  }else {
    for(var b = 0, c;c = goog.debug.Logger.rootHandlers_[b++];) {
      c(a)
    }
  }
};
goog.debug.Logger.prototype.callPublish_ = function(a) {
  if(this.handlers_) {
    for(var b = 0, c;c = this.handlers_[b];b++) {
      c(a)
    }
  }
};
goog.debug.Logger.prototype.setParent_ = function(a) {
  this.parent_ = a
};
goog.debug.Logger.prototype.addChild_ = function(a, b) {
  this.getChildren()[a] = b
};
goog.debug.LogManager = {};
goog.debug.LogManager.loggers_ = {};
goog.debug.LogManager.rootLogger_ = null;
goog.debug.LogManager.initialize = function() {
  if(!goog.debug.LogManager.rootLogger_) {
    goog.debug.LogManager.rootLogger_ = new goog.debug.Logger(""), goog.debug.LogManager.loggers_[""] = goog.debug.LogManager.rootLogger_, goog.debug.LogManager.rootLogger_.setLevel(goog.debug.Logger.Level.CONFIG)
  }
};
goog.debug.LogManager.getLoggers = function() {
  return goog.debug.LogManager.loggers_
};
goog.debug.LogManager.getRoot = function() {
  goog.debug.LogManager.initialize();
  return goog.debug.LogManager.rootLogger_
};
goog.debug.LogManager.getLogger = function(a) {
  goog.debug.LogManager.initialize();
  return goog.debug.LogManager.loggers_[a] || goog.debug.LogManager.createLogger_(a)
};
goog.debug.LogManager.createFunctionForCatchErrors = function(a) {
  return function(b) {
    (a || goog.debug.LogManager.getRoot()).severe("Error: " + b.message + " (" + b.fileName + " @ Line: " + b.line + ")")
  }
};
goog.debug.LogManager.createLogger_ = function(a) {
  var b = new goog.debug.Logger(a);
  if(goog.debug.Logger.ENABLE_HIERARCHY) {
    var c = a.lastIndexOf("."), d = a.substr(0, c), c = a.substr(c + 1), d = goog.debug.LogManager.getLogger(d);
    d.addChild_(c, b);
    b.setParent_(d)
  }
  return goog.debug.LogManager.loggers_[a] = b
};
goog.json = {};
goog.json.isValid_ = function(a) {
  return/^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))
};
goog.json.parse = function(a) {
  a = "" + a;
  if(goog.json.isValid_(a)) {
    try {
      return eval("(" + a + ")")
    }catch(b) {
    }
  }
  throw Error("Invalid JSON string: " + a);
};
goog.json.unsafeParse = function(a) {
  return eval("(" + a + ")")
};
goog.json.serialize = function(a) {
  return(new goog.json.Serializer).serialize(a)
};
goog.json.Serializer = function() {
};
goog.json.Serializer.prototype.serialize = function(a) {
  var b = [];
  this.serialize_(a, b);
  return b.join("")
};
goog.json.Serializer.prototype.serialize_ = function(a, b) {
  switch(typeof a) {
    case "string":
      this.serializeString_(a, b);
      break;
    case "number":
      this.serializeNumber_(a, b);
      break;
    case "boolean":
      b.push(a);
      break;
    case "undefined":
      b.push("null");
      break;
    case "object":
      if(null == a) {
        b.push("null");
        break
      }
      if(goog.isArray(a)) {
        this.serializeArray_(a, b);
        break
      }
      this.serializeObject_(a, b);
      break;
    case "function":
      break;
    default:
      throw Error("Unknown type: " + typeof a);
  }
};
goog.json.Serializer.charToJsonCharCache_ = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\u000b":"\\u000b"};
goog.json.Serializer.charsToReplace_ = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
goog.json.Serializer.prototype.serializeString_ = function(a, b) {
  b.push('"', a.replace(goog.json.Serializer.charsToReplace_, function(a) {
    if(a in goog.json.Serializer.charToJsonCharCache_) {
      return goog.json.Serializer.charToJsonCharCache_[a]
    }
    var b = a.charCodeAt(0), e = "\\u";
    16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
    return goog.json.Serializer.charToJsonCharCache_[a] = e + b.toString(16)
  }), '"')
};
goog.json.Serializer.prototype.serializeNumber_ = function(a, b) {
  b.push(isFinite(a) && !isNaN(a) ? a : "null")
};
goog.json.Serializer.prototype.serializeArray_ = function(a, b) {
  var c = a.length;
  b.push("[");
  for(var d = "", e = 0;e < c;e++) {
    b.push(d), this.serialize_(a[e], b), d = ","
  }
  b.push("]")
};
goog.json.Serializer.prototype.serializeObject_ = function(a, b) {
  b.push("{");
  var c = "", d;
  for(d in a) {
    if(Object.prototype.hasOwnProperty.call(a, d)) {
      var e = a[d];
      "function" != typeof e && (b.push(c), this.serializeString_(d, b), b.push(":"), this.serialize_(e, b), c = ",")
    }
  }
  b.push("}")
};
goog.net = {};
goog.net.ErrorCode = {NO_ERROR:0, ACCESS_DENIED:1, FILE_NOT_FOUND:2, FF_SILENT_ERROR:3, CUSTOM_ERROR:4, EXCEPTION:5, HTTP_ERROR:6, ABORT:7, TIMEOUT:8, OFFLINE:9};
goog.net.ErrorCode.getDebugMessage = function(a) {
  switch(a) {
    case goog.net.ErrorCode.NO_ERROR:
      return"No Error";
    case goog.net.ErrorCode.ACCESS_DENIED:
      return"Access denied to content document";
    case goog.net.ErrorCode.FILE_NOT_FOUND:
      return"File not found";
    case goog.net.ErrorCode.FF_SILENT_ERROR:
      return"Firefox silently errored";
    case goog.net.ErrorCode.CUSTOM_ERROR:
      return"Application custom error";
    case goog.net.ErrorCode.EXCEPTION:
      return"An exception occurred";
    case goog.net.ErrorCode.HTTP_ERROR:
      return"Http response at 400 or 500 level";
    case goog.net.ErrorCode.ABORT:
      return"Request was aborted";
    case goog.net.ErrorCode.TIMEOUT:
      return"Request timed out";
    case goog.net.ErrorCode.OFFLINE:
      return"The resource is not available offline";
    default:
      return"Unrecognized error code"
  }
};
goog.net.EventType = {COMPLETE:"complete", SUCCESS:"success", ERROR:"error", ABORT:"abort", READY:"ready", READY_STATE_CHANGE:"readystatechange", TIMEOUT:"timeout", INCREMENTAL_DATA:"incrementaldata", PROGRESS:"progress"};
goog.net.HttpStatus = {CONTINUE:100, SWITCHING_PROTOCOLS:101, OK:200, CREATED:201, ACCEPTED:202, NON_AUTHORITATIVE_INFORMATION:203, NO_CONTENT:204, RESET_CONTENT:205, PARTIAL_CONTENT:206, MULTIPLE_CHOICES:300, MOVED_PERMANENTLY:301, FOUND:302, SEE_OTHER:303, NOT_MODIFIED:304, USE_PROXY:305, TEMPORARY_REDIRECT:307, BAD_REQUEST:400, UNAUTHORIZED:401, PAYMENT_REQUIRED:402, FORBIDDEN:403, NOT_FOUND:404, METHOD_NOT_ALLOWED:405, NOT_ACCEPTABLE:406, PROXY_AUTHENTICATION_REQUIRED:407, REQUEST_TIMEOUT:408, 
CONFLICT:409, GONE:410, LENGTH_REQUIRED:411, PRECONDITION_FAILED:412, REQUEST_ENTITY_TOO_LARGE:413, REQUEST_URI_TOO_LONG:414, UNSUPPORTED_MEDIA_TYPE:415, REQUEST_RANGE_NOT_SATISFIABLE:416, EXPECTATION_FAILED:417, INTERNAL_SERVER_ERROR:500, NOT_IMPLEMENTED:501, BAD_GATEWAY:502, SERVICE_UNAVAILABLE:503, GATEWAY_TIMEOUT:504, HTTP_VERSION_NOT_SUPPORTED:505};
goog.net.XmlHttpFactory = function() {
};
goog.net.XmlHttpFactory.prototype.cachedOptions_ = null;
goog.net.XmlHttpFactory.prototype.getOptions = function() {
  return this.cachedOptions_ || (this.cachedOptions_ = this.internalGetOptions())
};
goog.net.WrapperXmlHttpFactory = function(a, b) {
  goog.net.XmlHttpFactory.call(this);
  this.xhrFactory_ = a;
  this.optionsFactory_ = b
};
goog.inherits(goog.net.WrapperXmlHttpFactory, goog.net.XmlHttpFactory);
goog.net.WrapperXmlHttpFactory.prototype.createInstance = function() {
  return this.xhrFactory_()
};
goog.net.WrapperXmlHttpFactory.prototype.getOptions = function() {
  return this.optionsFactory_()
};
goog.net.XmlHttp = function() {
  return goog.net.XmlHttp.factory_.createInstance()
};
goog.net.XmlHttp.getOptions = function() {
  return goog.net.XmlHttp.factory_.getOptions()
};
goog.net.XmlHttp.OptionType = {USE_NULL_FUNCTION:0, LOCAL_REQUEST_ERROR:1};
goog.net.XmlHttp.ReadyState = {UNINITIALIZED:0, LOADING:1, LOADED:2, INTERACTIVE:3, COMPLETE:4};
goog.net.XmlHttp.setFactory = function(a, b) {
  goog.net.XmlHttp.setGlobalFactory(new goog.net.WrapperXmlHttpFactory(a, b))
};
goog.net.XmlHttp.setGlobalFactory = function(a) {
  goog.net.XmlHttp.factory_ = a
};
goog.net.DefaultXmlHttpFactory = function() {
  goog.net.XmlHttpFactory.call(this)
};
goog.inherits(goog.net.DefaultXmlHttpFactory, goog.net.XmlHttpFactory);
goog.net.DefaultXmlHttpFactory.prototype.createInstance = function() {
  var a = this.getProgId_();
  return a ? new ActiveXObject(a) : new XMLHttpRequest
};
goog.net.DefaultXmlHttpFactory.prototype.internalGetOptions = function() {
  var a = {};
  this.getProgId_() && (a[goog.net.XmlHttp.OptionType.USE_NULL_FUNCTION] = !0, a[goog.net.XmlHttp.OptionType.LOCAL_REQUEST_ERROR] = !0);
  return a
};
goog.net.DefaultXmlHttpFactory.prototype.ieProgId_ = null;
goog.net.DefaultXmlHttpFactory.prototype.getProgId_ = function() {
  if(!this.ieProgId_ && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for(var a = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], b = 0;b < a.length;b++) {
      var c = a[b];
      try {
        return new ActiveXObject(c), this.ieProgId_ = c
      }catch(d) {
      }
    }
    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
  }
  return this.ieProgId_
};
goog.net.XmlHttp.setGlobalFactory(new goog.net.DefaultXmlHttpFactory);
goog.net.XhrMonitor_ = function() {
  if(goog.userAgent.GECKO) {
    this.contextsToXhr_ = {}, this.xhrToContexts_ = {}, this.stack_ = []
  }
};
goog.net.XhrMonitor_.getKey = function(a) {
  return goog.isString(a) ? a : goog.isObject(a) ? goog.getUid(a) : ""
};
goog.net.XhrMonitor_.prototype.logger_ = goog.debug.Logger.getLogger("goog.net.xhrMonitor");
goog.net.XhrMonitor_.prototype.enabled_ = goog.userAgent.GECKO;
goog.net.XhrMonitor_.prototype.setEnabled = function(a) {
  this.enabled_ = goog.userAgent.GECKO && a
};
goog.net.XhrMonitor_.prototype.pushContext = function(a) {
  if(this.enabled_) {
    var b = goog.net.XhrMonitor_.getKey(a);
    this.logger_.finest("Pushing context: " + a + " (" + b + ")");
    this.stack_.push(b)
  }
};
goog.net.XhrMonitor_.prototype.popContext = function() {
  if(this.enabled_) {
    var a = this.stack_.pop();
    this.logger_.finest("Popping context: " + a);
    this.updateDependentContexts_(a)
  }
};
goog.net.XhrMonitor_.prototype.isContextSafe = function(a) {
  if(!this.enabled_) {
    return!0
  }
  var b = this.contextsToXhr_[goog.net.XhrMonitor_.getKey(a)];
  this.logger_.fine("Context is safe : " + a + " - " + b);
  return!b
};
goog.net.XhrMonitor_.prototype.markXhrOpen = function(a) {
  if(this.enabled_) {
    a = goog.getUid(a);
    this.logger_.fine("Opening XHR : " + a);
    for(var b = 0;b < this.stack_.length;b++) {
      var c = this.stack_[b];
      this.addToMap_(this.contextsToXhr_, c, a);
      this.addToMap_(this.xhrToContexts_, a, c)
    }
  }
};
goog.net.XhrMonitor_.prototype.markXhrClosed = function(a) {
  if(this.enabled_) {
    a = goog.getUid(a);
    this.logger_.fine("Closing XHR : " + a);
    delete this.xhrToContexts_[a];
    for(var b in this.contextsToXhr_) {
      goog.array.remove(this.contextsToXhr_[b], a), 0 == this.contextsToXhr_[b].length && delete this.contextsToXhr_[b]
    }
  }
};
goog.net.XhrMonitor_.prototype.updateDependentContexts_ = function(a) {
  var b = this.xhrToContexts_[a], c = this.contextsToXhr_[a];
  b && c && (this.logger_.finest("Updating dependent contexts"), goog.array.forEach(b, function(a) {
    goog.array.forEach(c, function(b) {
      this.addToMap_(this.contextsToXhr_, a, b);
      this.addToMap_(this.xhrToContexts_, b, a)
    }, this)
  }, this))
};
goog.net.XhrMonitor_.prototype.addToMap_ = function(a, b, c) {
  a[b] || (a[b] = []);
  goog.array.contains(a[b], c) || a[b].push(c)
};
goog.net.xhrMonitor = new goog.net.XhrMonitor_;
goog.uri = {};
goog.uri.utils = {};
goog.uri.utils.CharCode_ = {AMPERSAND:38, EQUAL:61, HASH:35, QUESTION:63};
goog.uri.utils.buildFromEncodedParts = function(a, b, c, d, e, f, g) {
  var h = [];
  a && h.push(a, ":");
  c && (h.push("//"), b && h.push(b, "@"), h.push(c), d && h.push(":", d));
  e && h.push(e);
  f && h.push("?", f);
  g && h.push("#", g);
  return h.join("")
};
goog.uri.utils.splitRe_ = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
goog.uri.utils.ComponentIndex = {SCHEME:1, USER_INFO:2, DOMAIN:3, PORT:4, PATH:5, QUERY_DATA:6, FRAGMENT:7};
goog.uri.utils.split = function(a) {
  return a.match(goog.uri.utils.splitRe_)
};
goog.uri.utils.decodeIfPossible_ = function(a) {
  return a && decodeURIComponent(a)
};
goog.uri.utils.getComponentByIndex_ = function(a, b) {
  return goog.uri.utils.split(b)[a] || null
};
goog.uri.utils.getScheme = function(a) {
  return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.SCHEME, a)
};
goog.uri.utils.getUserInfoEncoded = function(a) {
  return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.USER_INFO, a)
};
goog.uri.utils.getUserInfo = function(a) {
  return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getUserInfoEncoded(a))
};
goog.uri.utils.getDomainEncoded = function(a) {
  return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.DOMAIN, a)
};
goog.uri.utils.getDomain = function(a) {
  return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getDomainEncoded(a))
};
goog.uri.utils.getPort = function(a) {
  return Number(goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.PORT, a)) || null
};
goog.uri.utils.getPathEncoded = function(a) {
  return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.PATH, a)
};
goog.uri.utils.getPath = function(a) {
  return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getPathEncoded(a))
};
goog.uri.utils.getQueryData = function(a) {
  return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.QUERY_DATA, a)
};
goog.uri.utils.getFragmentEncoded = function(a) {
  var b = a.indexOf("#");
  return 0 > b ? null : a.substr(b + 1)
};
goog.uri.utils.setFragmentEncoded = function(a, b) {
  return goog.uri.utils.removeFragment(a) + (b ? "#" + b : "")
};
goog.uri.utils.getFragment = function(a) {
  return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getFragmentEncoded(a))
};
goog.uri.utils.getHost = function(a) {
  a = goog.uri.utils.split(a);
  return goog.uri.utils.buildFromEncodedParts(a[goog.uri.utils.ComponentIndex.SCHEME], a[goog.uri.utils.ComponentIndex.USER_INFO], a[goog.uri.utils.ComponentIndex.DOMAIN], a[goog.uri.utils.ComponentIndex.PORT])
};
goog.uri.utils.getPathAndAfter = function(a) {
  a = goog.uri.utils.split(a);
  return goog.uri.utils.buildFromEncodedParts(null, null, null, null, a[goog.uri.utils.ComponentIndex.PATH], a[goog.uri.utils.ComponentIndex.QUERY_DATA], a[goog.uri.utils.ComponentIndex.FRAGMENT])
};
goog.uri.utils.removeFragment = function(a) {
  var b = a.indexOf("#");
  return 0 > b ? a : a.substr(0, b)
};
goog.uri.utils.haveSameDomain = function(a, b) {
  var c = goog.uri.utils.split(a), d = goog.uri.utils.split(b);
  return c[goog.uri.utils.ComponentIndex.DOMAIN] == d[goog.uri.utils.ComponentIndex.DOMAIN] && c[goog.uri.utils.ComponentIndex.SCHEME] == d[goog.uri.utils.ComponentIndex.SCHEME] && c[goog.uri.utils.ComponentIndex.PORT] == d[goog.uri.utils.ComponentIndex.PORT]
};
goog.uri.utils.assertNoFragmentsOrQueries_ = function(a) {
  if(goog.DEBUG && (0 <= a.indexOf("#") || 0 <= a.indexOf("?"))) {
    throw Error("goog.uri.utils: Fragment or query identifiers are not supported: [" + a + "]");
  }
};
goog.uri.utils.appendQueryData_ = function(a) {
  if(a[1]) {
    var b = a[0], c = b.indexOf("#");
    0 <= c && (a.push(b.substr(c)), a[0] = b = b.substr(0, c));
    c = b.indexOf("?");
    0 > c ? a[1] = "?" : c == b.length - 1 && (a[1] = void 0)
  }
  return a.join("")
};
goog.uri.utils.appendKeyValuePairs_ = function(a, b, c) {
  if(goog.isArray(b)) {
    for(var d = 0;d < b.length;d++) {
      c.push("&", a), "" !== b[d] && c.push("=", goog.string.urlEncode(b[d]))
    }
  }else {
    null != b && (c.push("&", a), "" !== b && c.push("=", goog.string.urlEncode(b)))
  }
};
goog.uri.utils.buildQueryDataBuffer_ = function(a, b, c) {
  goog.asserts.assert(0 == Math.max(b.length - (c || 0), 0) % 2, "goog.uri.utils: Key/value lists must be even in length.");
  for(c = c || 0;c < b.length;c += 2) {
    goog.uri.utils.appendKeyValuePairs_(b[c], b[c + 1], a)
  }
  return a
};
goog.uri.utils.buildQueryData = function(a, b) {
  var c = goog.uri.utils.buildQueryDataBuffer_([], a, b);
  c[0] = "";
  return c.join("")
};
goog.uri.utils.buildQueryDataBufferFromMap_ = function(a, b) {
  for(var c in b) {
    goog.uri.utils.appendKeyValuePairs_(c, b[c], a)
  }
  return a
};
goog.uri.utils.buildQueryDataFromMap = function(a) {
  a = goog.uri.utils.buildQueryDataBufferFromMap_([], a);
  a[0] = "";
  return a.join("")
};
goog.uri.utils.appendParams = function(a, b) {
  return goog.uri.utils.appendQueryData_(2 == arguments.length ? goog.uri.utils.buildQueryDataBuffer_([a], arguments[1], 0) : goog.uri.utils.buildQueryDataBuffer_([a], arguments, 1))
};
goog.uri.utils.appendParamsFromMap = function(a, b) {
  return goog.uri.utils.appendQueryData_(goog.uri.utils.buildQueryDataBufferFromMap_([a], b))
};
goog.uri.utils.appendParam = function(a, b, c) {
  return goog.uri.utils.appendQueryData_([a, "&", b, "=", goog.string.urlEncode(c)])
};
goog.uri.utils.findParam_ = function(a, b, c, d) {
  for(var e = c.length;0 <= (b = a.indexOf(c, b)) && b < d;) {
    var f = a.charCodeAt(b - 1);
    if(f == goog.uri.utils.CharCode_.AMPERSAND || f == goog.uri.utils.CharCode_.QUESTION) {
      if(f = a.charCodeAt(b + e), !f || f == goog.uri.utils.CharCode_.EQUAL || f == goog.uri.utils.CharCode_.AMPERSAND || f == goog.uri.utils.CharCode_.HASH) {
        return b
      }
    }
    b += e + 1
  }
  return-1
};
goog.uri.utils.hashOrEndRe_ = /#|$/;
goog.uri.utils.hasParam = function(a, b) {
  return 0 <= goog.uri.utils.findParam_(a, 0, b, a.search(goog.uri.utils.hashOrEndRe_))
};
goog.uri.utils.getParamValue = function(a, b) {
  var c = a.search(goog.uri.utils.hashOrEndRe_), d = goog.uri.utils.findParam_(a, 0, b, c);
  if(0 > d) {
    return null
  }
  var e = a.indexOf("&", d);
  if(0 > e || e > c) {
    e = c
  }
  d += b.length + 1;
  return goog.string.urlDecode(a.substr(d, e - d))
};
goog.uri.utils.getParamValues = function(a, b) {
  for(var c = a.search(goog.uri.utils.hashOrEndRe_), d = 0, e, f = [];0 <= (e = goog.uri.utils.findParam_(a, d, b, c));) {
    d = a.indexOf("&", e);
    if(0 > d || d > c) {
      d = c
    }
    e += b.length + 1;
    f.push(goog.string.urlDecode(a.substr(e, d - e)))
  }
  return f
};
goog.uri.utils.trailingQueryPunctuationRe_ = /[?&]($|#)/;
goog.uri.utils.removeParam = function(a, b) {
  for(var c = a.search(goog.uri.utils.hashOrEndRe_), d = 0, e, f = [];0 <= (e = goog.uri.utils.findParam_(a, d, b, c));) {
    f.push(a.substring(d, e)), d = Math.min(a.indexOf("&", e) + 1 || c, c)
  }
  f.push(a.substr(d));
  return f.join("").replace(goog.uri.utils.trailingQueryPunctuationRe_, "$1")
};
goog.uri.utils.setParam = function(a, b, c) {
  return goog.uri.utils.appendParam(goog.uri.utils.removeParam(a, b), b, c)
};
goog.uri.utils.appendPath = function(a, b) {
  goog.uri.utils.assertNoFragmentsOrQueries_(a);
  goog.string.endsWith(a, "/") && (a = a.substr(0, a.length - 1));
  goog.string.startsWith(b, "/") && (b = b.substr(1));
  return goog.string.buildString(a, "/", b)
};
goog.uri.utils.StandardQueryParam = {RANDOM:"zx"};
goog.uri.utils.makeUnique = function(a) {
  return goog.uri.utils.setParam(a, goog.uri.utils.StandardQueryParam.RANDOM, goog.string.getRandomString())
};
goog.net.XhrIo = function(a) {
  goog.events.EventTarget.call(this);
  this.headers = new goog.structs.Map;
  this.xmlHttpFactory_ = a || null
};
goog.inherits(goog.net.XhrIo, goog.events.EventTarget);
goog.net.XhrIo.ResponseType = {DEFAULT:"", TEXT:"text", DOCUMENT:"document", BLOB:"blob", ARRAY_BUFFER:"arraybuffer"};
goog.net.XhrIo.prototype.logger_ = goog.debug.Logger.getLogger("goog.net.XhrIo");
goog.net.XhrIo.CONTENT_TYPE_HEADER = "Content-Type";
goog.net.XhrIo.HTTP_SCHEME_PATTERN = /^https?:?$/i;
goog.net.XhrIo.FORM_CONTENT_TYPE = "application/x-www-form-urlencoded;charset=utf-8";
goog.net.XhrIo.sendInstances_ = [];
goog.net.XhrIo.send = function(a, b, c, d, e, f) {
  var g = new goog.net.XhrIo;
  goog.net.XhrIo.sendInstances_.push(g);
  b && goog.events.listen(g, goog.net.EventType.COMPLETE, b);
  goog.events.listen(g, goog.net.EventType.READY, goog.partial(goog.net.XhrIo.cleanupSend_, g));
  f && g.setTimeoutInterval(f);
  g.send(a, c, d, e)
};
goog.net.XhrIo.cleanup = function() {
  for(var a = goog.net.XhrIo.sendInstances_;a.length;) {
    a.pop().dispose()
  }
};
goog.net.XhrIo.protectEntryPoints = function(a) {
  goog.net.XhrIo.prototype.onReadyStateChangeEntryPoint_ = a.protectEntryPoint(goog.net.XhrIo.prototype.onReadyStateChangeEntryPoint_)
};
goog.net.XhrIo.cleanupSend_ = function(a) {
  a.dispose();
  goog.array.remove(goog.net.XhrIo.sendInstances_, a)
};
goog.net.XhrIo.prototype.active_ = !1;
goog.net.XhrIo.prototype.xhr_ = null;
goog.net.XhrIo.prototype.xhrOptions_ = null;
goog.net.XhrIo.prototype.lastUri_ = "";
goog.net.XhrIo.prototype.lastMethod_ = "";
goog.net.XhrIo.prototype.lastErrorCode_ = goog.net.ErrorCode.NO_ERROR;
goog.net.XhrIo.prototype.lastError_ = "";
goog.net.XhrIo.prototype.errorDispatched_ = !1;
goog.net.XhrIo.prototype.inSend_ = !1;
goog.net.XhrIo.prototype.inOpen_ = !1;
goog.net.XhrIo.prototype.inAbort_ = !1;
goog.net.XhrIo.prototype.timeoutInterval_ = 0;
goog.net.XhrIo.prototype.timeoutId_ = null;
goog.net.XhrIo.prototype.responseType_ = goog.net.XhrIo.ResponseType.DEFAULT;
goog.net.XhrIo.prototype.withCredentials_ = !1;
goog.net.XhrIo.prototype.getTimeoutInterval = function() {
  return this.timeoutInterval_
};
goog.net.XhrIo.prototype.setTimeoutInterval = function(a) {
  this.timeoutInterval_ = Math.max(0, a)
};
goog.net.XhrIo.prototype.setResponseType = function(a) {
  this.responseType_ = a
};
goog.net.XhrIo.prototype.getResponseType = function() {
  return this.responseType_
};
goog.net.XhrIo.prototype.setWithCredentials = function(a) {
  this.withCredentials_ = a
};
goog.net.XhrIo.prototype.getWithCredentials = function() {
  return this.withCredentials_
};
goog.net.XhrIo.prototype.send = function(a, b, c, d) {
  if(this.xhr_) {
    throw Error("[goog.net.XhrIo] Object is active with another request");
  }
  b = b || "GET";
  this.lastUri_ = a;
  this.lastError_ = "";
  this.lastErrorCode_ = goog.net.ErrorCode.NO_ERROR;
  this.lastMethod_ = b;
  this.errorDispatched_ = !1;
  this.active_ = !0;
  this.xhr_ = this.createXhr();
  this.xhrOptions_ = this.xmlHttpFactory_ ? this.xmlHttpFactory_.getOptions() : goog.net.XmlHttp.getOptions();
  goog.net.xhrMonitor.markXhrOpen(this.xhr_);
  this.xhr_.onreadystatechange = goog.bind(this.onReadyStateChange_, this);
  try {
    this.logger_.fine(this.formatMsg_("Opening Xhr")), this.inOpen_ = !0, this.xhr_.open(b, a, !0), this.inOpen_ = !1
  }catch(e) {
    this.logger_.fine(this.formatMsg_("Error opening Xhr: " + e.message));
    this.error_(goog.net.ErrorCode.EXCEPTION, e);
    return
  }
  var a = c || "", f = this.headers.clone();
  d && goog.structs.forEach(d, function(a, b) {
    f.set(b, a)
  });
  "POST" == b && !f.containsKey(goog.net.XhrIo.CONTENT_TYPE_HEADER) && f.set(goog.net.XhrIo.CONTENT_TYPE_HEADER, goog.net.XhrIo.FORM_CONTENT_TYPE);
  goog.structs.forEach(f, function(a, b) {
    this.xhr_.setRequestHeader(b, a)
  }, this);
  if(this.responseType_) {
    this.xhr_.responseType = this.responseType_
  }
  if(goog.object.containsKey(this.xhr_, "withCredentials")) {
    this.xhr_.withCredentials = this.withCredentials_
  }
  try {
    if(this.timeoutId_) {
      goog.Timer.defaultTimerObject.clearTimeout(this.timeoutId_), this.timeoutId_ = null
    }
    if(0 < this.timeoutInterval_) {
      this.logger_.fine(this.formatMsg_("Will abort after " + this.timeoutInterval_ + "ms if incomplete")), this.timeoutId_ = goog.Timer.defaultTimerObject.setTimeout(goog.bind(this.timeout_, this), this.timeoutInterval_)
    }
    this.logger_.fine(this.formatMsg_("Sending request"));
    this.inSend_ = !0;
    this.xhr_.send(a);
    this.inSend_ = !1
  }catch(g) {
    this.logger_.fine(this.formatMsg_("Send error: " + g.message)), this.error_(goog.net.ErrorCode.EXCEPTION, g)
  }
};
goog.net.XhrIo.prototype.createXhr = function() {
  return this.xmlHttpFactory_ ? this.xmlHttpFactory_.createInstance() : new goog.net.XmlHttp
};
goog.net.XhrIo.prototype.dispatchEvent = function(a) {
  if(this.xhr_) {
    goog.net.xhrMonitor.pushContext(this.xhr_);
    try {
      return goog.net.XhrIo.superClass_.dispatchEvent.call(this, a)
    }finally {
      goog.net.xhrMonitor.popContext()
    }
  }else {
    return goog.net.XhrIo.superClass_.dispatchEvent.call(this, a)
  }
};
goog.net.XhrIo.prototype.timeout_ = function() {
  if("undefined" != typeof goog && this.xhr_) {
    this.lastError_ = "Timed out after " + this.timeoutInterval_ + "ms, aborting", this.lastErrorCode_ = goog.net.ErrorCode.TIMEOUT, this.logger_.fine(this.formatMsg_(this.lastError_)), this.dispatchEvent(goog.net.EventType.TIMEOUT), this.abort(goog.net.ErrorCode.TIMEOUT)
  }
};
goog.net.XhrIo.prototype.error_ = function(a, b) {
  this.active_ = !1;
  if(this.xhr_) {
    this.inAbort_ = !0, this.xhr_.abort(), this.inAbort_ = !1
  }
  this.lastError_ = b;
  this.lastErrorCode_ = a;
  this.dispatchErrors_();
  this.cleanUpXhr_()
};
goog.net.XhrIo.prototype.dispatchErrors_ = function() {
  if(!this.errorDispatched_) {
    this.errorDispatched_ = !0, this.dispatchEvent(goog.net.EventType.COMPLETE), this.dispatchEvent(goog.net.EventType.ERROR)
  }
};
goog.net.XhrIo.prototype.abort = function(a) {
  if(this.xhr_ && this.active_) {
    this.logger_.fine(this.formatMsg_("Aborting")), this.active_ = !1, this.inAbort_ = !0, this.xhr_.abort(), this.inAbort_ = !1, this.lastErrorCode_ = a || goog.net.ErrorCode.ABORT, this.dispatchEvent(goog.net.EventType.COMPLETE), this.dispatchEvent(goog.net.EventType.ABORT), this.cleanUpXhr_()
  }
};
goog.net.XhrIo.prototype.disposeInternal = function() {
  if(this.xhr_) {
    if(this.active_) {
      this.active_ = !1, this.inAbort_ = !0, this.xhr_.abort(), this.inAbort_ = !1
    }
    this.cleanUpXhr_(!0)
  }
  goog.net.XhrIo.superClass_.disposeInternal.call(this)
};
goog.net.XhrIo.prototype.onReadyStateChange_ = function() {
  if(!this.inOpen_ && !this.inSend_ && !this.inAbort_) {
    this.onReadyStateChangeEntryPoint_()
  }else {
    this.onReadyStateChangeHelper_()
  }
};
goog.net.XhrIo.prototype.onReadyStateChangeEntryPoint_ = function() {
  this.onReadyStateChangeHelper_()
};
goog.net.XhrIo.prototype.onReadyStateChangeHelper_ = function() {
  if(this.active_ && "undefined" != typeof goog) {
    if(this.xhrOptions_[goog.net.XmlHttp.OptionType.LOCAL_REQUEST_ERROR] && this.getReadyState() == goog.net.XmlHttp.ReadyState.COMPLETE && 2 == this.getStatus()) {
      this.logger_.fine(this.formatMsg_("Local request error detected and ignored"))
    }else {
      if(this.inSend_ && this.getReadyState() == goog.net.XmlHttp.ReadyState.COMPLETE) {
        goog.Timer.defaultTimerObject.setTimeout(goog.bind(this.onReadyStateChange_, this), 0)
      }else {
        if(this.dispatchEvent(goog.net.EventType.READY_STATE_CHANGE), this.isComplete()) {
          this.logger_.fine(this.formatMsg_("Request complete")), this.active_ = !1, this.isSuccess() ? (this.dispatchEvent(goog.net.EventType.COMPLETE), this.dispatchEvent(goog.net.EventType.SUCCESS)) : (this.lastErrorCode_ = goog.net.ErrorCode.HTTP_ERROR, this.lastError_ = this.getStatusText() + " [" + this.getStatus() + "]", this.dispatchErrors_()), this.cleanUpXhr_()
        }
      }
    }
  }
};
goog.net.XhrIo.prototype.cleanUpXhr_ = function(a) {
  if(this.xhr_) {
    var b = this.xhr_, c = this.xhrOptions_[goog.net.XmlHttp.OptionType.USE_NULL_FUNCTION] ? goog.nullFunction : null;
    this.xhrOptions_ = this.xhr_ = null;
    if(this.timeoutId_) {
      goog.Timer.defaultTimerObject.clearTimeout(this.timeoutId_), this.timeoutId_ = null
    }
    a || (goog.net.xhrMonitor.pushContext(b), this.dispatchEvent(goog.net.EventType.READY), goog.net.xhrMonitor.popContext());
    goog.net.xhrMonitor.markXhrClosed(b);
    try {
      b.onreadystatechange = c
    }catch(d) {
      this.logger_.severe("Problem encountered resetting onreadystatechange: " + d.message)
    }
  }
};
goog.net.XhrIo.prototype.isActive = function() {
  return!!this.xhr_
};
goog.net.XhrIo.prototype.isComplete = function() {
  return this.getReadyState() == goog.net.XmlHttp.ReadyState.COMPLETE
};
goog.net.XhrIo.prototype.isSuccess = function() {
  switch(this.getStatus()) {
    case 0:
      return!this.isLastUriEffectiveSchemeHttp_();
    case goog.net.HttpStatus.OK:
    ;
    case goog.net.HttpStatus.NO_CONTENT:
    ;
    case goog.net.HttpStatus.NOT_MODIFIED:
      return!0;
    default:
      return!1
  }
};
goog.net.XhrIo.prototype.isLastUriEffectiveSchemeHttp_ = function() {
  var a = goog.isString(this.lastUri_) ? goog.uri.utils.getScheme(this.lastUri_) : this.lastUri_.getScheme();
  return a ? goog.net.XhrIo.HTTP_SCHEME_PATTERN.test(a) : self.location ? goog.net.XhrIo.HTTP_SCHEME_PATTERN.test(self.location.protocol) : !0
};
goog.net.XhrIo.prototype.getReadyState = function() {
  return this.xhr_ ? this.xhr_.readyState : goog.net.XmlHttp.ReadyState.UNINITIALIZED
};
goog.net.XhrIo.prototype.getStatus = function() {
  try {
    return this.getReadyState() > goog.net.XmlHttp.ReadyState.LOADED ? this.xhr_.status : -1
  }catch(a) {
    return this.logger_.warning("Can not get status: " + a.message), -1
  }
};
goog.net.XhrIo.prototype.getStatusText = function() {
  try {
    return this.getReadyState() > goog.net.XmlHttp.ReadyState.LOADED ? this.xhr_.statusText : ""
  }catch(a) {
    return this.logger_.fine("Can not get status: " + a.message), ""
  }
};
goog.net.XhrIo.prototype.getLastUri = function() {
  return"" + this.lastUri_
};
goog.net.XhrIo.prototype.getResponseText = function() {
  try {
    return this.xhr_ ? this.xhr_.responseText : ""
  }catch(a) {
    return this.logger_.fine("Can not get responseText: " + a.message), ""
  }
};
goog.net.XhrIo.prototype.getResponseXml = function() {
  try {
    return this.xhr_ ? this.xhr_.responseXML : null
  }catch(a) {
    return this.logger_.fine("Can not get responseXML: " + a.message), null
  }
};
goog.net.XhrIo.prototype.getResponseJson = function(a) {
  if(this.xhr_) {
    var b = this.xhr_.responseText;
    a && 0 == b.indexOf(a) && (b = b.substring(a.length));
    return goog.json.parse(b)
  }
};
goog.net.XhrIo.prototype.getResponse = function() {
  try {
    return this.xhr_ && this.xhr_.response
  }catch(a) {
    return this.logger_.fine("Can not get response: " + a.message), null
  }
};
goog.net.XhrIo.prototype.getResponseHeader = function(a) {
  return this.xhr_ && this.isComplete() ? this.xhr_.getResponseHeader(a) : void 0
};
goog.net.XhrIo.prototype.getAllResponseHeaders = function() {
  return this.xhr_ && this.isComplete() ? this.xhr_.getAllResponseHeaders() : ""
};
goog.net.XhrIo.prototype.getLastErrorCode = function() {
  return this.lastErrorCode_
};
goog.net.XhrIo.prototype.getLastError = function() {
  return goog.isString(this.lastError_) ? this.lastError_ : "" + this.lastError_
};
goog.net.XhrIo.prototype.formatMsg_ = function(a) {
  return a + " [" + this.lastMethod_ + " " + this.lastUri_ + " " + this.getStatus() + "]"
};
goog.debug.entryPointRegistry.register(function(a) {
  goog.net.XhrIo.prototype.onReadyStateChangeEntryPoint_ = a(goog.net.XhrIo.prototype.onReadyStateChangeEntryPoint_)
});
goog.net.xpc = {};
goog.net.xpc.TransportTypes = {NATIVE_MESSAGING:1, FRAME_ELEMENT_METHOD:2, IFRAME_RELAY:3, IFRAME_POLLING:4, FLASH:5, NIX:6};
goog.net.xpc.TransportNames = {1:"NativeMessagingTransport", 2:"FrameElementMethodTransport", 3:"IframeRelayTransport", 4:"IframePollingTransport", 5:"FlashTransport", 6:"NixTransport"};
goog.net.xpc.CfgFields = {CHANNEL_NAME:"cn", AUTH_TOKEN:"at", REMOTE_AUTH_TOKEN:"rat", PEER_URI:"pu", IFRAME_ID:"ifrid", TRANSPORT:"tp", LOCAL_RELAY_URI:"lru", PEER_RELAY_URI:"pru", LOCAL_POLL_URI:"lpu", PEER_POLL_URI:"ppu", PEER_HOSTNAME:"ph"};
goog.net.xpc.UriCfgFields = [goog.net.xpc.CfgFields.PEER_URI, goog.net.xpc.CfgFields.LOCAL_RELAY_URI, goog.net.xpc.CfgFields.PEER_RELAY_URI, goog.net.xpc.CfgFields.LOCAL_POLL_URI, goog.net.xpc.CfgFields.PEER_POLL_URI];
goog.net.xpc.ChannelStates = {NOT_CONNECTED:1, CONNECTED:2, CLOSED:3};
goog.net.xpc.TRANSPORT_SERVICE_ = "tp";
goog.net.xpc.SETUP = "SETUP";
goog.net.xpc.SETUP_ACK_ = "SETUP_ACK";
goog.net.xpc.channels_ = {};
goog.net.xpc.getRandomString = function(a, b) {
  for(var c = b || goog.net.xpc.randomStringCharacters_, d = c.length, e = "";0 < a--;) {
    e += c.charAt(Math.floor(Math.random() * d))
  }
  return e
};
goog.net.xpc.randomStringCharacters_ = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
goog.net.xpc.logger = goog.debug.Logger.getLogger("goog.net.xpc");
goog.Uri = function(a, b) {
  var c;
  a instanceof goog.Uri ? (this.setIgnoreCase(null == b ? a.getIgnoreCase() : b), this.setScheme(a.getScheme()), this.setUserInfo(a.getUserInfo()), this.setDomain(a.getDomain()), this.setPort(a.getPort()), this.setPath(a.getPath()), this.setQueryData(a.getQueryData().clone()), this.setFragment(a.getFragment())) : a && (c = goog.uri.utils.split("" + a)) ? (this.setIgnoreCase(!!b), this.setScheme(c[goog.uri.utils.ComponentIndex.SCHEME] || "", !0), this.setUserInfo(c[goog.uri.utils.ComponentIndex.USER_INFO] || 
  "", !0), this.setDomain(c[goog.uri.utils.ComponentIndex.DOMAIN] || "", !0), this.setPort(c[goog.uri.utils.ComponentIndex.PORT]), this.setPath(c[goog.uri.utils.ComponentIndex.PATH] || "", !0), this.setQuery(c[goog.uri.utils.ComponentIndex.QUERY_DATA] || "", !0), this.setFragment(c[goog.uri.utils.ComponentIndex.FRAGMENT] || "", !0)) : (this.setIgnoreCase(!!b), this.queryData_ = new goog.Uri.QueryData(null, this, this.ignoreCase_))
};
goog.Uri.RANDOM_PARAM = goog.uri.utils.StandardQueryParam.RANDOM;
goog.Uri.prototype.scheme_ = "";
goog.Uri.prototype.userInfo_ = "";
goog.Uri.prototype.domain_ = "";
goog.Uri.prototype.port_ = null;
goog.Uri.prototype.path_ = "";
goog.Uri.prototype.fragment_ = "";
goog.Uri.prototype.isReadOnly_ = !1;
goog.Uri.prototype.ignoreCase_ = !1;
goog.Uri.prototype.toString = function() {
  if(this.cachedToString_) {
    return this.cachedToString_
  }
  var a = [];
  this.scheme_ && a.push(goog.Uri.encodeSpecialChars_(this.scheme_, goog.Uri.reDisallowedInSchemeOrUserInfo_), ":");
  this.domain_ && (a.push("//"), this.userInfo_ && a.push(goog.Uri.encodeSpecialChars_(this.userInfo_, goog.Uri.reDisallowedInSchemeOrUserInfo_), "@"), a.push(goog.Uri.encodeString_(this.domain_)), null != this.port_ && a.push(":", "" + this.getPort()));
  this.path_ && (this.hasDomain() && "/" != this.path_.charAt(0) && a.push("/"), a.push(goog.Uri.encodeSpecialChars_(this.path_, goog.Uri.reDisallowedInPath_)));
  var b = "" + this.queryData_;
  b && a.push("?", b);
  this.fragment_ && a.push("#", goog.Uri.encodeSpecialChars_(this.fragment_, goog.Uri.reDisallowedInFragment_));
  return this.cachedToString_ = a.join("")
};
goog.Uri.prototype.resolve = function(a) {
  var b = this.clone(), c = a.hasScheme();
  c ? b.setScheme(a.getScheme()) : c = a.hasUserInfo();
  c ? b.setUserInfo(a.getUserInfo()) : c = a.hasDomain();
  c ? b.setDomain(a.getDomain()) : c = a.hasPort();
  var d = a.getPath();
  if(c) {
    b.setPort(a.getPort())
  }else {
    if(c = a.hasPath()) {
      if("/" != d.charAt(0)) {
        if(this.hasDomain() && !this.hasPath()) {
          d = "/" + d
        }else {
          var e = b.getPath().lastIndexOf("/");
          -1 != e && (d = b.getPath().substr(0, e + 1) + d)
        }
      }
      d = goog.Uri.removeDotSegments(d)
    }
  }
  c ? b.setPath(d) : c = a.hasQuery();
  c ? b.setQuery(a.getDecodedQuery()) : c = a.hasFragment();
  c && b.setFragment(a.getFragment());
  return b
};
goog.Uri.prototype.clone = function() {
  return goog.Uri.create(this.scheme_, this.userInfo_, this.domain_, this.port_, this.path_, this.queryData_.clone(), this.fragment_, this.ignoreCase_)
};
goog.Uri.prototype.getScheme = function() {
  return this.scheme_
};
goog.Uri.prototype.setScheme = function(a, b) {
  this.enforceReadOnly();
  delete this.cachedToString_;
  if(this.scheme_ = b ? goog.Uri.decodeOrEmpty_(a) : a) {
    this.scheme_ = this.scheme_.replace(/:$/, "")
  }
  return this
};
goog.Uri.prototype.hasScheme = function() {
  return!!this.scheme_
};
goog.Uri.prototype.getUserInfo = function() {
  return this.userInfo_
};
goog.Uri.prototype.setUserInfo = function(a, b) {
  this.enforceReadOnly();
  delete this.cachedToString_;
  this.userInfo_ = b ? goog.Uri.decodeOrEmpty_(a) : a;
  return this
};
goog.Uri.prototype.hasUserInfo = function() {
  return!!this.userInfo_
};
goog.Uri.prototype.getDomain = function() {
  return this.domain_
};
goog.Uri.prototype.setDomain = function(a, b) {
  this.enforceReadOnly();
  delete this.cachedToString_;
  this.domain_ = b ? goog.Uri.decodeOrEmpty_(a) : a;
  return this
};
goog.Uri.prototype.hasDomain = function() {
  return!!this.domain_
};
goog.Uri.prototype.getPort = function() {
  return this.port_
};
goog.Uri.prototype.setPort = function(a) {
  this.enforceReadOnly();
  delete this.cachedToString_;
  if(a) {
    a = Number(a);
    if(isNaN(a) || 0 > a) {
      throw Error("Bad port number " + a);
    }
    this.port_ = a
  }else {
    this.port_ = null
  }
  return this
};
goog.Uri.prototype.hasPort = function() {
  return null != this.port_
};
goog.Uri.prototype.getPath = function() {
  return this.path_
};
goog.Uri.prototype.setPath = function(a, b) {
  this.enforceReadOnly();
  delete this.cachedToString_;
  this.path_ = b ? goog.Uri.decodeOrEmpty_(a) : a;
  return this
};
goog.Uri.prototype.hasPath = function() {
  return!!this.path_
};
goog.Uri.prototype.hasQuery = function() {
  return"" !== this.queryData_.toString()
};
goog.Uri.prototype.setQueryData = function(a, b) {
  this.enforceReadOnly();
  delete this.cachedToString_;
  a instanceof goog.Uri.QueryData ? (this.queryData_ = a, this.queryData_.uri_ = this, this.queryData_.setIgnoreCase(this.ignoreCase_)) : (b || (a = goog.Uri.encodeSpecialChars_(a, goog.Uri.reDisallowedInQuery_)), this.queryData_ = new goog.Uri.QueryData(a, this, this.ignoreCase_));
  return this
};
goog.Uri.prototype.setQuery = function(a, b) {
  return this.setQueryData(a, b)
};
goog.Uri.prototype.getEncodedQuery = function() {
  return this.queryData_.toString()
};
goog.Uri.prototype.getDecodedQuery = function() {
  return this.queryData_.toDecodedString()
};
goog.Uri.prototype.getQueryData = function() {
  return this.queryData_
};
goog.Uri.prototype.getQuery = function() {
  return this.getEncodedQuery()
};
goog.Uri.prototype.setParameterValue = function(a, b) {
  this.enforceReadOnly();
  delete this.cachedToString_;
  this.queryData_.set(a, b);
  return this
};
goog.Uri.prototype.setParameterValues = function(a, b) {
  this.enforceReadOnly();
  delete this.cachedToString_;
  goog.isArray(b) || (b = ["" + b]);
  this.queryData_.setValues(a, b);
  return this
};
goog.Uri.prototype.getParameterValues = function(a) {
  return this.queryData_.getValues(a)
};
goog.Uri.prototype.getParameterValue = function(a) {
  return this.queryData_.get(a)
};
goog.Uri.prototype.getFragment = function() {
  return this.fragment_
};
goog.Uri.prototype.setFragment = function(a, b) {
  this.enforceReadOnly();
  delete this.cachedToString_;
  this.fragment_ = b ? goog.Uri.decodeOrEmpty_(a) : a;
  return this
};
goog.Uri.prototype.hasFragment = function() {
  return!!this.fragment_
};
goog.Uri.prototype.hasSameDomainAs = function(a) {
  return(!this.hasDomain() && !a.hasDomain() || this.getDomain() == a.getDomain()) && (!this.hasPort() && !a.hasPort() || this.getPort() == a.getPort())
};
goog.Uri.prototype.makeUnique = function() {
  this.enforceReadOnly();
  this.setParameterValue(goog.Uri.RANDOM_PARAM, goog.string.getRandomString());
  return this
};
goog.Uri.prototype.removeParameter = function(a) {
  this.enforceReadOnly();
  this.queryData_.remove(a);
  return this
};
goog.Uri.prototype.setReadOnly = function(a) {
  this.isReadOnly_ = a;
  return this
};
goog.Uri.prototype.isReadOnly = function() {
  return this.isReadOnly_
};
goog.Uri.prototype.enforceReadOnly = function() {
  if(this.isReadOnly_) {
    throw Error("Tried to modify a read-only Uri");
  }
};
goog.Uri.prototype.setIgnoreCase = function(a) {
  this.ignoreCase_ = a;
  this.queryData_ && this.queryData_.setIgnoreCase(a);
  return this
};
goog.Uri.prototype.getIgnoreCase = function() {
  return this.ignoreCase_
};
goog.Uri.parse = function(a, b) {
  return a instanceof goog.Uri ? a.clone() : new goog.Uri(a, b)
};
goog.Uri.create = function(a, b, c, d, e, f, g, h) {
  h = new goog.Uri(null, h);
  a && h.setScheme(a);
  b && h.setUserInfo(b);
  c && h.setDomain(c);
  d && h.setPort(d);
  e && h.setPath(e);
  f && h.setQueryData(f);
  g && h.setFragment(g);
  return h
};
goog.Uri.resolve = function(a, b) {
  a instanceof goog.Uri || (a = goog.Uri.parse(a));
  b instanceof goog.Uri || (b = goog.Uri.parse(b));
  return a.resolve(b)
};
goog.Uri.removeDotSegments = function(a) {
  if(".." == a || "." == a) {
    return""
  }
  if(!goog.string.contains(a, "./") && !goog.string.contains(a, "/.")) {
    return a
  }
  for(var b = goog.string.startsWith(a, "/"), a = a.split("/"), c = [], d = 0;d < a.length;) {
    var e = a[d++];
    "." == e ? b && d == a.length && c.push("") : ".." == e ? ((1 < c.length || 1 == c.length && "" != c[0]) && c.pop(), b && d == a.length && c.push("")) : (c.push(e), b = !0)
  }
  return c.join("/")
};
goog.Uri.decodeOrEmpty_ = function(a) {
  return a ? decodeURIComponent(a) : ""
};
goog.Uri.encodeString_ = function(a) {
  return goog.isString(a) ? encodeURIComponent(a) : null
};
goog.Uri.encodeSpecialRegExp_ = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
goog.Uri.encodeSpecialChars_ = function(a, b) {
  var c = null;
  goog.isString(a) && (c = a, goog.Uri.encodeSpecialRegExp_.test(c) || (c = encodeURI(a)), 0 <= c.search(b) && (c = c.replace(b, goog.Uri.encodeChar_)));
  return c
};
goog.Uri.encodeChar_ = function(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
};
goog.Uri.reDisallowedInSchemeOrUserInfo_ = /[#\/\?@]/g;
goog.Uri.reDisallowedInPath_ = /[\#\?]/g;
goog.Uri.reDisallowedInQuery_ = /[\#\?@]/g;
goog.Uri.reDisallowedInFragment_ = /#/g;
goog.Uri.haveSameDomain = function(a, b) {
  var c = goog.uri.utils.split(a), d = goog.uri.utils.split(b);
  return c[goog.uri.utils.ComponentIndex.DOMAIN] == d[goog.uri.utils.ComponentIndex.DOMAIN] && c[goog.uri.utils.ComponentIndex.PORT] == d[goog.uri.utils.ComponentIndex.PORT]
};
goog.Uri.QueryData = function(a, b, c) {
  this.encodedQuery_ = a || null;
  this.uri_ = b || null;
  this.ignoreCase_ = !!c
};
goog.Uri.QueryData.prototype.ensureKeyMapInitialized_ = function() {
  if(!this.keyMap_ && (this.keyMap_ = new goog.structs.Map, this.encodedQuery_)) {
    for(var a = this.encodedQuery_.split("&"), b = 0;b < a.length;b++) {
      var c = a[b].indexOf("="), d = null, e = null;
      0 <= c ? (d = a[b].substring(0, c), e = a[b].substring(c + 1)) : d = a[b];
      d = goog.string.urlDecode(d);
      d = this.getKeyName_(d);
      this.add(d, e ? goog.string.urlDecode(e) : "")
    }
  }
};
goog.Uri.QueryData.createFromMap = function(a, b, c) {
  var d = goog.structs.getKeys(a);
  if("undefined" == typeof d) {
    throw Error("Keys are undefined");
  }
  return goog.Uri.QueryData.createFromKeysValues(d, goog.structs.getValues(a), b, c)
};
goog.Uri.QueryData.createFromKeysValues = function(a, b, c, d) {
  if(a.length != b.length) {
    throw Error("Mismatched lengths for keys/values");
  }
  c = new goog.Uri.QueryData(null, c, d);
  for(d = 0;d < a.length;d++) {
    c.add(a[d], b[d])
  }
  return c
};
goog.Uri.QueryData.prototype.keyMap_ = null;
goog.Uri.QueryData.prototype.count_ = null;
goog.Uri.QueryData.decodedQuery_ = null;
goog.Uri.QueryData.prototype.getCount = function() {
  this.ensureKeyMapInitialized_();
  return this.count_
};
goog.Uri.QueryData.prototype.add = function(a, b) {
  this.ensureKeyMapInitialized_();
  this.invalidateCache_();
  a = this.getKeyName_(a);
  if(this.containsKey(a)) {
    var c = this.keyMap_.get(a);
    goog.isArray(c) ? c.push(b) : this.keyMap_.set(a, [c, b])
  }else {
    this.keyMap_.set(a, b)
  }
  this.count_++;
  return this
};
goog.Uri.QueryData.prototype.remove = function(a) {
  this.ensureKeyMapInitialized_();
  a = this.getKeyName_(a);
  if(this.keyMap_.containsKey(a)) {
    this.invalidateCache_();
    var b = this.keyMap_.get(a);
    goog.isArray(b) ? this.count_ -= b.length : this.count_--;
    return this.keyMap_.remove(a)
  }
  return!1
};
goog.Uri.QueryData.prototype.clear = function() {
  this.invalidateCache_();
  this.keyMap_ && this.keyMap_.clear();
  this.count_ = 0
};
goog.Uri.QueryData.prototype.isEmpty = function() {
  this.ensureKeyMapInitialized_();
  return 0 == this.count_
};
goog.Uri.QueryData.prototype.containsKey = function(a) {
  this.ensureKeyMapInitialized_();
  a = this.getKeyName_(a);
  return this.keyMap_.containsKey(a)
};
goog.Uri.QueryData.prototype.containsValue = function(a) {
  var b = this.getValues();
  return goog.array.contains(b, a)
};
goog.Uri.QueryData.prototype.getKeys = function() {
  this.ensureKeyMapInitialized_();
  for(var a = this.keyMap_.getValues(), b = this.keyMap_.getKeys(), c = [], d = 0;d < b.length;d++) {
    var e = a[d];
    if(goog.isArray(e)) {
      for(var f = 0;f < e.length;f++) {
        c.push(b[d])
      }
    }else {
      c.push(b[d])
    }
  }
  return c
};
goog.Uri.QueryData.prototype.getValues = function(a) {
  this.ensureKeyMapInitialized_();
  if(a) {
    if(a = this.getKeyName_(a), this.containsKey(a)) {
      var b = this.keyMap_.get(a);
      if(goog.isArray(b)) {
        return b
      }
      a = [];
      a.push(b)
    }else {
      a = []
    }
  }else {
    for(var b = this.keyMap_.getValues(), a = [], c = 0;c < b.length;c++) {
      var d = b[c];
      goog.isArray(d) ? goog.array.extend(a, d) : a.push(d)
    }
  }
  return a
};
goog.Uri.QueryData.prototype.set = function(a, b) {
  this.ensureKeyMapInitialized_();
  this.invalidateCache_();
  a = this.getKeyName_(a);
  if(this.containsKey(a)) {
    var c = this.keyMap_.get(a);
    goog.isArray(c) ? this.count_ -= c.length : this.count_--
  }
  this.keyMap_.set(a, b);
  this.count_++;
  return this
};
goog.Uri.QueryData.prototype.get = function(a, b) {
  this.ensureKeyMapInitialized_();
  a = this.getKeyName_(a);
  if(this.containsKey(a)) {
    var c = this.keyMap_.get(a);
    return goog.isArray(c) ? c[0] : c
  }
  return b
};
goog.Uri.QueryData.prototype.setValues = function(a, b) {
  this.ensureKeyMapInitialized_();
  this.invalidateCache_();
  a = this.getKeyName_(a);
  if(this.containsKey(a)) {
    var c = this.keyMap_.get(a);
    goog.isArray(c) ? this.count_ -= c.length : this.count_--
  }
  0 < b.length && (this.keyMap_.set(a, b), this.count_ += b.length)
};
goog.Uri.QueryData.prototype.toString = function() {
  if(this.encodedQuery_) {
    return this.encodedQuery_
  }
  if(!this.keyMap_) {
    return""
  }
  for(var a = [], b = 0, c = this.keyMap_.getKeys(), d = 0;d < c.length;d++) {
    var e = c[d], f = goog.string.urlEncode(e), e = this.keyMap_.get(e);
    if(goog.isArray(e)) {
      for(var g = 0;g < e.length;g++) {
        0 < b && a.push("&"), a.push(f), "" !== e[g] && a.push("=", goog.string.urlEncode(e[g])), b++
      }
    }else {
      0 < b && a.push("&"), a.push(f), "" !== e && a.push("=", goog.string.urlEncode(e)), b++
    }
  }
  return this.encodedQuery_ = a.join("")
};
goog.Uri.QueryData.prototype.toDecodedString = function() {
  if(!this.decodedQuery_) {
    this.decodedQuery_ = goog.Uri.decodeOrEmpty_(this.toString())
  }
  return this.decodedQuery_
};
goog.Uri.QueryData.prototype.invalidateCache_ = function() {
  delete this.decodedQuery_;
  delete this.encodedQuery_;
  this.uri_ && delete this.uri_.cachedToString_
};
goog.Uri.QueryData.prototype.filterKeys = function(a) {
  this.ensureKeyMapInitialized_();
  goog.structs.forEach(this.keyMap_, function(b, c) {
    goog.array.contains(a, c) || this.remove(c)
  }, this);
  return this
};
goog.Uri.QueryData.prototype.clone = function() {
  var a = new goog.Uri.QueryData;
  if(this.decodedQuery_) {
    a.decodedQuery_ = this.decodedQuery_
  }
  if(this.encodedQuery_) {
    a.encodedQuery_ = this.encodedQuery_
  }
  if(this.keyMap_) {
    a.keyMap_ = this.keyMap_.clone()
  }
  return a
};
goog.Uri.QueryData.prototype.getKeyName_ = function(a) {
  a = "" + a;
  this.ignoreCase_ && (a = a.toLowerCase());
  return a
};
goog.Uri.QueryData.prototype.setIgnoreCase = function(a) {
  a && !this.ignoreCase_ && (this.ensureKeyMapInitialized_(), this.invalidateCache_(), goog.structs.forEach(this.keyMap_, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.ignoreCase_ = a
};
goog.Uri.QueryData.prototype.extend = function(a) {
  for(var b = 0;b < arguments.length;b++) {
    goog.structs.forEach(arguments[b], function(a, b) {
      this.add(b, a)
    }, this)
  }
};
crate.tags = {};
crate.tags.add_optional_attrs = function(a) {
  return function() {
    var b = function(b) {
      if(cljs.core.truth_(cljs.core.map_QMARK_.call(null, cljs.core.first.call(null, b)))) {
        var c = cljs.core.apply.call(null, a, cljs.core.rest.call(null, b)), f = cljs.core.nth.call(null, c, 0, null), c = cljs.core.nthnext.call(null, c, 1);
        return cljs.core.truth_(cljs.core.map_QMARK_.call(null, cljs.core.first.call(null, c))) ? cljs.core.apply.call(null, cljs.core.vector, f, cljs.core.merge.call(null, cljs.core.first.call(null, c), cljs.core.first.call(null, b)), cljs.core.rest.call(null, c)) : cljs.core.apply.call(null, cljs.core.vector, f, cljs.core.first.call(null, b), c)
      }
      return cljs.core.apply.call(null, a, b)
    }, c = function(a) {
      var c = null;
      goog.isDef(a) && (c = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
      return b.call(this, c)
    };
    c.cljs$lang$maxFixedArity = 0;
    c.cljs$lang$applyTo = function(a) {
      a = cljs.core.seq(a);
      return b.call(this, a)
    };
    return c
  }()
};
var func__6210__auto____10297 = function() {
  var a = function(a, b) {
    var e = cljs.core.nth.call(null, a, 0, null), f = cljs.core.nth.call(null, a, 1, null);
    return cljs.core.PersistentVector.fromArray(["\ufdd0'form", cljs.core.ObjMap.fromObject(["\ufdd0'method", "\ufdd0'action"], {"\ufdd0'method":cljs.core.name.call(null, e), "\ufdd0'action":f}), b])
  }, b = function(b, d) {
    var e = null;
    goog.isDef(d) && (e = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0));
    return a.call(this, b, e)
  };
  b.cljs$lang$maxFixedArity = 1;
  b.cljs$lang$applyTo = function(b) {
    var d = cljs.core.first(b), b = cljs.core.rest(b);
    return a.call(this, d, b)
  };
  return b
}();
crate.tags.form_to = crate.tags.add_optional_attrs.call(null, func__6210__auto____10297);
var func__6210__auto____10303 = function(a, b, c) {
  return cljs.core.PersistentVector.fromArray(["\ufdd0'input", cljs.core.ObjMap.fromObject(["\ufdd0'type", "\ufdd0'name", "\ufdd0'id", "\ufdd0'value"], {"\ufdd0'type":a, "\ufdd0'name":cljs.core.truth_(b) ? b : null, "\ufdd0'id":cljs.core.truth_(b) ? b : null, "\ufdd0'value":cljs.core.truth_(c) ? c : ""})])
};
crate.tags.input_field = crate.tags.add_optional_attrs.call(null, func__6210__auto____10303);
var func__6210__auto____10304 = function(a, b) {
  return crate.tags.input_field.call(null, "text", a, b)
};
crate.tags.text_field = crate.tags.add_optional_attrs.call(null, func__6210__auto____10304);
var func__6210__auto____10305 = function(a, b) {
  return crate.tags.input_field.call(null, "password", a, b)
};
crate.tags.password_field = crate.tags.add_optional_attrs.call(null, func__6210__auto____10305);
var func__6210__auto____10306 = function(a, b) {
  return cljs.core.PersistentVector.fromArray(["\ufdd0'label", cljs.core.ObjMap.fromObject(["\ufdd0'for"], {"\ufdd0'for":a}), b])
};
crate.tags.label = crate.tags.add_optional_attrs.call(null, func__6210__auto____10306);
var func__6210__auto____10307 = function(a) {
  return crate.tags.input_field.call(null, "submit", null, a)
};
crate.tags.submit_button = crate.tags.add_optional_attrs.call(null, func__6210__auto____10307);
var func__6210__auto____10308 = function() {
  var a = function(a, b) {
    return cljs.core.PersistentVector.fromArray(["\ufdd0'a", cljs.core.ObjMap.fromObject(["\ufdd0'href"], {"\ufdd0'href":a}), b])
  }, b = function(b, d) {
    var e = null;
    goog.isDef(d) && (e = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0));
    return a.call(this, b, e)
  };
  b.cljs$lang$maxFixedArity = 1;
  b.cljs$lang$applyTo = function(b) {
    var d = cljs.core.first(b), b = cljs.core.rest(b);
    return a.call(this, d, b)
  };
  return b
}();
crate.tags.link_to = crate.tags.add_optional_attrs.call(null, func__6210__auto____10308);
cljs.reader = {};
cljs.reader.PushbackReader = {};
cljs.reader.read_char = function(a) {
  if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$reader$PushbackReader$read_char : a)) {
    a = a.cljs$reader$PushbackReader$read_char(a)
  }else {
    var b;
    b = cljs.reader.read_char[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(b) && (b = cljs.reader.read_char._, !cljs.core.truth_(b))) {
      throw cljs.core.missing_protocol.call(null, "PushbackReader.read-char", a);
    }
    a = b.call(null, a)
  }
  return a
};
cljs.reader.unread = function(a, b) {
  var c;
  if(cljs.core.truth_(cljs.core.truth_(a) ? a.cljs$reader$PushbackReader$unread : a)) {
    c = a.cljs$reader$PushbackReader$unread(a, b)
  }else {
    c = cljs.reader.unread[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(c) && (c = cljs.reader.unread._, !cljs.core.truth_(c))) {
      throw cljs.core.missing_protocol.call(null, "PushbackReader.unread", a);
    }
    c = c.call(null, a, b)
  }
  return c
};
cljs.reader.StringPushbackReader = function(a, b, c) {
  this.s = a;
  this.index_atom = b;
  this.buffer_atom = c
};
cljs.reader.StringPushbackReader.cljs$core$IPrintable$_pr_seq = function() {
  return cljs.core.list.call(null, "cljs.reader.StringPushbackReader")
};
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = !0;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char = function() {
  if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null, cljs.core.deref.call(null, this.buffer_atom)))) {
    var a = cljs.core.deref.call(null, this.index_atom);
    cljs.core.swap_BANG_.call(null, this.index_atom, cljs.core.inc);
    return cljs.core.nth.call(null, this.s, a)
  }
  a = cljs.core.deref.call(null, this.buffer_atom);
  cljs.core.swap_BANG_.call(null, this.buffer_atom, cljs.core.rest);
  return cljs.core.first.call(null, a)
};
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = function(a, b) {
  return cljs.core.swap_BANG_.call(null, this.buffer_atom, function(a) {
    return cljs.core.cons.call(null, b, a)
  })
};
cljs.reader.push_back_reader = function(a) {
  return new cljs.reader.StringPushbackReader(a, cljs.core.atom.call(null, 0), cljs.core.atom.call(null, null))
};
cljs.reader.whitespace_QMARK_ = function(a) {
  var b = goog.string.isBreakingWhitespace.call(null, a);
  return cljs.core.truth_(b) ? b : cljs.core._EQ_.call(null, ",", a)
};
cljs.reader.numeric_QMARK_ = function(a) {
  return goog.string.isNumeric.call(null, a)
};
cljs.reader.comment_prefix_QMARK_ = function(a) {
  return cljs.core._EQ_.call(null, ";", a)
};
cljs.reader.number_literal_QMARK_ = function(a, b) {
  var c = cljs.reader.numeric_QMARK_.call(null, b);
  if(cljs.core.truth_(c)) {
    return c
  }
  c = function() {
    var a = cljs.core._EQ_.call(null, "+", b);
    return cljs.core.truth_(a) ? a : cljs.core._EQ_.call(null, "-", b)
  }();
  return cljs.core.truth_(c) ? cljs.reader.numeric_QMARK_.call(null, function() {
    var b = cljs.reader.read_char.call(null, a);
    cljs.reader.unread.call(null, a, b);
    return b
  }()) : c
};
cljs.reader.reader_error = function() {
  var a = function(a, c) {
    var d = null;
    goog.isDef(c) && (d = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0));
    throw cljs.core.apply.call(null, cljs.core.str, d);
  };
  a.cljs$lang$maxFixedArity = 1;
  a.cljs$lang$applyTo = function(a) {
    cljs.core.first(a);
    a = cljs.core.rest(a);
    throw cljs.core.apply.call(null, cljs.core.str, a);
  };
  return a
}();
cljs.reader.macro_terminating_QMARK_ = function(a) {
  var b = cljs.core.not_EQ_.call(null, a, "#");
  return cljs.core.truth_(b) && (b = cljs.core.not_EQ_.call(null, a, "'"), cljs.core.truth_(b)) ? (b = cljs.core.not_EQ_.call(null, a, ":"), cljs.core.truth_(b) ? cljs.core.contains_QMARK_.call(null, cljs.reader.macros, a) : b) : b
};
cljs.reader.read_token = function(a, b) {
  for(var c = new goog.string.StringBuffer(b), d = cljs.reader.read_char.call(null, a);;) {
    if(cljs.core.truth_(function() {
      var a = null === d;
      if(cljs.core.truth_(a)) {
        return a
      }
      a = cljs.reader.whitespace_QMARK_.call(null, d);
      return cljs.core.truth_(a) ? a : cljs.reader.macro_terminating_QMARK_.call(null, d)
    }())) {
      return cljs.reader.unread.call(null, a, d), c.toString()
    }
    c.append(d);
    var e = cljs.reader.read_char.call(null, a), d = e
  }
};
cljs.reader.skip_line = function(a) {
  for(;;) {
    var b = cljs.reader.read_char.call(null, a);
    if(cljs.core.truth_(function() {
      var a = cljs.core._EQ_.call(null, b, "n");
      if(cljs.core.truth_(a)) {
        return a
      }
      a = cljs.core._EQ_.call(null, b, "r");
      return cljs.core.truth_(a) ? a : null === b
    }())) {
      return a
    }
  }
};
cljs.reader.int_pattern = cljs.core.re_pattern.call(null, "([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
cljs.reader.ratio_pattern = cljs.core.re_pattern.call(null, "([-+]?[0-9]+)/([0-9]+)");
cljs.reader.float_pattern = cljs.core.re_pattern.call(null, "([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
cljs.reader.symbol_pattern = cljs.core.re_pattern.call(null, "[:]?([^0-9/].*/)?([^0-9/][^/]*)");
cljs.reader.match_int = function(a) {
  var b = cljs.core.re_find.call(null, cljs.reader.int_pattern, a), c = cljs.core.nth.call(null, b, 2);
  if(cljs.core.truth_(cljs.core.not.call(null, function() {
    var a = void 0 === c;
    return cljs.core.truth_(a) ? a : 1 > c.length
  }()))) {
    return 0
  }
  var a = cljs.core.truth_(cljs.core._EQ_.call(null, "-", cljs.core.nth.call(null, b, 1))) ? -1 : 1, d = cljs.core.truth_(cljs.core.nth.call(null, b, 3)) ? cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null, b, 3), 10]) : cljs.core.truth_(cljs.core.nth.call(null, b, 4)) ? cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null, b, 4), 16]) : cljs.core.truth_(cljs.core.nth.call(null, b, 5)) ? cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null, b, 5), 8]) : cljs.core.truth_(cljs.core.nth.call(null, 
  b, 7)) ? cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null, b, 7), parseInt.call(null, cljs.core.nth.call(null, b, 7))]) : cljs.core.truth_("\ufdd0'default") ? cljs.core.PersistentVector.fromArray([null, null]) : null, b = cljs.core.nth.call(null, d, 0, null), d = cljs.core.nth.call(null, d, 1, null);
  return cljs.core.truth_(null === b) ? null : a * parseInt.call(null, b, d)
};
cljs.reader.match_ratio = function(a) {
  var b = cljs.core.re_find.call(null, cljs.reader.ratio_pattern, a), a = cljs.core.nth.call(null, b, 1), b = cljs.core.nth.call(null, b, 2);
  return parseInt.call(null, a) / parseInt.call(null, b)
};
cljs.reader.match_float = function(a) {
  return parseFloat.call(null, a)
};
cljs.reader.match_number = function(a) {
  return cljs.core.truth_(cljs.core.re_matches.call(null, cljs.reader.int_pattern, a)) ? cljs.reader.match_int.call(null, a) : cljs.core.truth_(cljs.core.re_matches.call(null, cljs.reader.ratio_pattern, a)) ? cljs.reader.match_ratio.call(null, a) : cljs.core.truth_(cljs.core.re_matches.call(null, cljs.reader.float_pattern, a)) ? cljs.reader.match_float.call(null, a) : null
};
cljs.reader.escape_char_map = cljs.core.HashMap.fromArrays('t,r,n,\\,",b,f'.split(","), '\t,\r,\n,\\,",\u0008,\u000c'.split(","));
cljs.reader.read_unicode_char = function(a) {
  return cljs.reader.reader_error.call(null, a, "Unicode characters not supported by reader (yet)")
};
cljs.reader.escape_char = function(a, b) {
  var c = cljs.reader.read_char.call(null, b), d = cljs.core.get.call(null, cljs.reader.escape_char_map, c);
  return cljs.core.truth_(d) ? d : cljs.core.truth_(function() {
    var a = cljs.core._EQ_.call(null, "u", c);
    return cljs.core.truth_(a) ? a : cljs.reader.numeric_QMARK_.call(null, c)
  }()) ? cljs.reader.read_unicode_char.call(null, b, c) : cljs.reader.reader_error.call(null, b, "Unsupported escape charater: \\", c)
};
cljs.reader.read_past = function(a, b) {
  for(var c = cljs.reader.read_char.call(null, b);;) {
    if(cljs.core.truth_(a.call(null, c))) {
      c = cljs.reader.read_char.call(null, b)
    }else {
      return c
    }
  }
};
cljs.reader.read_delimited_list = function(a, b, c) {
  for(var d = cljs.core.PersistentVector.fromArray([]);;) {
    var e = cljs.reader.read_past.call(null, cljs.reader.whitespace_QMARK_, b);
    cljs.core.truth_(e) || cljs.reader.reader_error.call(null, b, "EOF");
    if(cljs.core.truth_(cljs.core._EQ_.call(null, a, e))) {
      return d
    }
    var f = cljs.core.get.call(null, cljs.reader.macros, e);
    cljs.core.truth_(f) ? e = f.call(null, b, e) : (cljs.reader.unread.call(null, b, e), e = cljs.reader.read.call(null, b, !0, null, c));
    d = cljs.core.truth_(cljs.core._EQ_.call(null, e, b)) ? d : cljs.core.conj.call(null, d, e)
  }
};
cljs.reader.not_implemented = function(a, b) {
  return cljs.reader.reader_error.call(null, a, "Reader for ", b, " not implemented yet")
};
cljs.reader.read_dispatch = function(a, b) {
  var c = cljs.reader.read_char.call(null, a), d = cljs.core.get.call(null, cljs.reader.dispatch_macros, c);
  return cljs.core.truth_(d) ? d.call(null, a, b) : cljs.reader.reader_error.call(null, a, "No dispatch macro for ", c)
};
cljs.reader.read_unmatched_delimiter = function(a, b) {
  return cljs.reader.reader_error.call(null, a, "Unmached delimiter ", b)
};
cljs.reader.read_list = function(a) {
  return cljs.core.apply.call(null, cljs.core.list, cljs.reader.read_delimited_list.call(null, ")", a, !0))
};
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = function(a) {
  return cljs.reader.read_delimited_list.call(null, "]", a, !0)
};
cljs.reader.read_map = function(a) {
  var b = cljs.reader.read_delimited_list.call(null, "}", a, !0);
  cljs.core.truth_(cljs.core.odd_QMARK_.call(null, cljs.core.count.call(null, b))) && cljs.reader.reader_error.call(null, a, "Map literal must contain an even number of forms");
  return cljs.core.apply.call(null, cljs.core.hash_map, b)
};
cljs.reader.read_number = function(a, b) {
  for(var c = new goog.string.StringBuffer(b), d = cljs.reader.read_char.call(null, a);;) {
    if(cljs.core.truth_(function() {
      var a = null === d;
      if(cljs.core.truth_(a)) {
        return a
      }
      a = cljs.reader.whitespace_QMARK_.call(null, d);
      return cljs.core.truth_(a) ? a : cljs.core.contains_QMARK_.call(null, cljs.reader.macros, d)
    }())) {
      cljs.reader.unread.call(null, a, d);
      var e = c.toString(), c = cljs.reader.match_number.call(null, e);
      return cljs.core.truth_(c) ? c : cljs.reader.reader_error.call(null, a, "Invalid number format [", e, "]")
    }
    c.append(d);
    d = e = cljs.reader.read_char.call(null, a)
  }
};
cljs.reader.read_string = function(a) {
  for(var b = new goog.string.StringBuffer, c = cljs.reader.read_char.call(null, a);;) {
    if(cljs.core.truth_(null === c)) {
      return cljs.reader.reader_error.call(null, a, "EOF while reading string")
    }
    if(cljs.core.truth_(cljs.core._EQ_.call(null, "\\", c))) {
      b.append(cljs.reader.escape_char.call(null, b, a)), c = cljs.reader.read_char.call(null, a)
    }else {
      if(cljs.core.truth_(cljs.core._EQ_.call(null, '"', c))) {
        return b.toString()
      }
      if(cljs.core.truth_("\ufdd0'default")) {
        b.append(c), c = cljs.reader.read_char.call(null, a)
      }else {
        return null
      }
    }
  }
};
cljs.reader.special_symbols = cljs.core.ObjMap.fromObject(["nil", "true", "false"], {nil:null, "true":!0, "false":!1});
cljs.reader.read_symbol = function(a, b) {
  var c = cljs.reader.read_token.call(null, a, b);
  return cljs.core.truth_(goog.string.contains.call(null, c, "/")) ? cljs.core.symbol.call(null, cljs.core.subs.call(null, c, 0, c.indexOf("/")), cljs.core.subs.call(null, c, c.indexOf("/") + 1, c.length)) : cljs.core.get.call(null, cljs.reader.special_symbols, c, cljs.core.symbol.call(null, c))
};
cljs.reader.read_keyword = function(a) {
  var b = cljs.reader.read_token.call(null, a, cljs.reader.read_char.call(null, a)), b = cljs.core.re_matches.call(null, cljs.reader.symbol_pattern, b), c = cljs.core.nth.call(null, b, 0, null), d = cljs.core.nth.call(null, b, 1, null), e = cljs.core.nth.call(null, b, 2, null);
  return cljs.core.truth_(function() {
    var a;
    a = cljs.core.not.call(null, void 0 === d);
    a = cljs.core.truth_(a) ? ":/" === d.substring(d.length - 2, d.length) : a;
    if(cljs.core.truth_(a)) {
      return a
    }
    a = ":" === e[e.length - 1];
    return cljs.core.truth_(a) ? a : cljs.core.not.call(null, -1 === c.indexOf("::", 1))
  }()) ? cljs.reader.reader_error.call(null, a, "Invalid token: ", c) : cljs.core.truth_(cljs.reader.ns_QMARK_) ? cljs.core.keyword.call(null, d.substring(0, d.indexOf("/")), e) : cljs.core.keyword.call(null, c)
};
cljs.reader.desugar_meta = function(a) {
  return cljs.core.truth_(cljs.core.symbol_QMARK_.call(null, a)) ? cljs.core.ObjMap.fromObject(["\ufdd0'tag"], {"\ufdd0'tag":a}) : cljs.core.truth_(cljs.core.string_QMARK_.call(null, a)) ? cljs.core.ObjMap.fromObject(["\ufdd0'tag"], {"\ufdd0'tag":a}) : cljs.core.truth_(cljs.core.keyword_QMARK_.call(null, a)) ? cljs.core.HashMap.fromArrays([a], [!0]) : cljs.core.truth_("\ufdd0'else") ? a : null
};
cljs.reader.wrapping_reader = function(a) {
  return function(b) {
    return cljs.core.list.call(null, a, cljs.reader.read.call(null, b, !0, null, !0))
  }
};
cljs.reader.throwing_reader = function(a) {
  return function(b) {
    return cljs.reader.reader_error.call(null, b, a)
  }
};
cljs.reader.read_meta = function(a) {
  var b = cljs.reader.desugar_meta.call(null, cljs.reader.read.call(null, a, !0, null, !0));
  cljs.core.truth_(cljs.core.map_QMARK_.call(null, b)) || cljs.reader.reader_error.call(null, a, "Metadata must be Symbol,Keyword,String or Map");
  var c = cljs.reader.read.call(null, a, !0, null, !0);
  return cljs.core.truth_(function() {
    return cljs.core.truth_(function() {
      if(cljs.core.truth_(c)) {
        var a = c.cljs$core$IWithMeta$;
        return cljs.core.truth_(a) ? cljs.core.not.call(null, c.hasOwnProperty("cljs$core$IWithMeta$")) : a
      }
      return c
    }()) ? !0 : cljs.core.type_satisfies_.call(null, cljs.core.IWithMeta, c)
  }()) ? cljs.core.with_meta.call(null, c, cljs.core.merge.call(null, cljs.core.meta.call(null, c), b)) : cljs.reader.reader_error.call(null, a, "Metadata can only be applied to IWithMetas")
};
cljs.reader.read_set = function(a) {
  return cljs.core.set.call(null, cljs.reader.read_delimited_list.call(null, "}", a, !0))
};
cljs.reader.read_regex = function(a, b) {
  return cljs.core.re_pattern.call(null, cljs.reader.read_string.call(null, a, b))
};
cljs.reader.read_discard = function(a) {
  cljs.reader.read.call(null, a, !0, null, !0);
  return a
};
cljs.reader.macros = cljs.core.HashMap.fromArrays("@,`,\",#,%,',(,),:,;,[,{,\\,],},^,~".split(","), [cljs.reader.wrapping_reader.call(null, "\ufdd1'deref"), cljs.reader.not_implemented, cljs.reader.read_string, cljs.reader.read_dispatch, cljs.reader.not_implemented, cljs.reader.wrapping_reader.call(null, "\ufdd1'quote"), cljs.reader.read_list, cljs.reader.read_unmatched_delimiter, cljs.reader.read_keyword, cljs.reader.not_implemented, cljs.reader.read_vector, cljs.reader.read_map, cljs.reader.read_char, 
cljs.reader.read_unmatched_delimiter, cljs.reader.read_unmatched_delimiter, cljs.reader.read_meta, cljs.reader.not_implemented]);
cljs.reader.dispatch_macros = cljs.core.ObjMap.fromObject(["{", "<", '"', "!", "_"], {"{":cljs.reader.read_set, "<":cljs.reader.throwing_reader.call(null, "Unreadable form"), '"':cljs.reader.read_regex, "!":cljs.reader.read_comment, _:cljs.reader.read_discard});
cljs.reader.read = function(a, b, c) {
  for(;;) {
    var d = cljs.reader.read_char.call(null, a);
    if(cljs.core.truth_(null === d)) {
      return cljs.core.truth_(b) ? cljs.reader.reader_error.call(null, a, "EOF") : c
    }
    if(!cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null, d))) {
      if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null, d))) {
        a = cljs.reader.read_comment.call(null, a, d)
      }else {
        if(cljs.core.truth_("\ufdd0'else")) {
          if(d = cljs.core.truth_(cljs.reader.macros.call(null, d)) ? cljs.reader.macros.call(null, d).call(null, a, d) : cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null, a, d)) ? cljs.reader.read_number.call(null, a, d) : cljs.core.truth_("\ufdd0'else") ? cljs.reader.read_symbol.call(null, a, d) : null, !cljs.core.truth_(cljs.core._EQ_.call(null, d, a))) {
            return d
          }
        }else {
          return null
        }
      }
    }
  }
};
cljs.reader.read_string = function(a) {
  a = cljs.reader.push_back_reader.call(null, a);
  return cljs.reader.read.call(null, a, !0, null, !1)
};
fetch.core = {};
fetch.core.__GT_method = function(a) {
  return clojure.string.upper_case.call(null, cljs.core.name.call(null, a))
};
fetch.core.parse_route = function(a) {
  if(cljs.core.truth_(cljs.core.string_QMARK_.call(null, a))) {
    return cljs.core.PersistentVector.fromArray(["GET", a])
  }
  if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null, a))) {
    var b = cljs.core.nth.call(null, a, 0, null), a = cljs.core.nth.call(null, a, 1, null);
    return cljs.core.PersistentVector.fromArray([fetch.core.__GT_method.call(null, b), a])
  }
  return cljs.core.truth_("\ufdd0'else") ? cljs.core.PersistentVector.fromArray(["GET", a]) : null
};
fetch.core.__GT_data = function(a) {
  a = fetch.util.clj__GT_js.call(null, a);
  a = goog.Uri.QueryData.createFromMap.call(null, new goog.structs.Map(a));
  return cljs.core.str.call(null, a)
};
fetch.core.__GT_callback = function(a) {
  return cljs.core.truth_(a) ? function(b) {
    b = b.getResponseText();
    return a.call(null, b)
  } : null
};
fetch.core.xhr = function() {
  var a = function(a, b, e, f) {
    var f = cljs.core.nth.call(null, f, 0, null), g = new goog.net.XhrIo, h = fetch.core.parse_route.call(null, a), a = cljs.core.nth.call(null, h, 0, null), h = cljs.core.nth.call(null, h, 1, null), b = fetch.core.__GT_data.call(null, b), i = fetch.core.__GT_callback.call(null, e);
    cljs.core.truth_(i) && goog.events.listen.call(null, g, goog.net.EventType.COMPLETE, function() {
      return i.call(null, g)
    });
    return g.send(h, a, b, cljs.core.truth_(f) ? fetch.util.clj__GT_js.call(null, f) : null)
  }, b = function(b, d, e, f) {
    var g = null;
    goog.isDef(f) && (g = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
    return a.call(this, b, d, e, g)
  };
  b.cljs$lang$maxFixedArity = 3;
  b.cljs$lang$applyTo = function(b) {
    var d = cljs.core.first(b), e = cljs.core.first(cljs.core.next(b)), f = cljs.core.first(cljs.core.next(cljs.core.next(b))), b = cljs.core.rest(cljs.core.next(cljs.core.next(b)));
    return a.call(this, d, e, f, b)
  };
  return b
}();
fetch.remotes = {};
fetch.remotes.remote_uri = "/_fetch";
fetch.remotes.remote_callback = function(a, b, c) {
  return fetch.core.xhr.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'post", fetch.remotes.remote_uri]), cljs.core.ObjMap.fromObject(["\ufdd0'remote", "\ufdd0'params"], {"\ufdd0'remote":a, "\ufdd0'params":cljs.core.pr_str.call(null, b)}), cljs.core.truth_(c) ? function(a) {
    a = cljs.core.truth_(cljs.core._EQ_.call(null, a, "")) ? "nil" : a;
    return c.call(null, cljs.reader.read_string.call(null, a))
  } : null)
};
pos.client.controller = {};
pos.client.controller.update_basket_item = function() {
  var a = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {})), b = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {})), c = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {})), d = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {})), e = cljs.core.get.call(null, cljs.core.ObjMap.fromObject([], {}), "\ufdd0'hierarchy", cljs.core.global_hierarchy);
  return new cljs.core.MultiFn("update-basket-item", "\ufdd0'changed-attr", "\ufdd0'default", e, a, b, c, d)
}();
cljs.core._add_method.call(null, pos.client.controller.update_basket_item, "\ufdd0'qty", function(a) {
  var b = cljs.core.truth_(cljs.core.seq_QMARK_.call(null, a)) ? cljs.core.apply.call(null, cljs.core.hash_map, a) : a, a = cljs.core.get.call(null, b, "\ufdd0'new-val"), b = cljs.core.get.call(null, b, "\ufdd0'id"), c = pos.client.util.from_coll_by_id.call(null, cljs.core.deref.call(null, pos.client.model.basket), b), d = pos.client.util.field_value_as_num.call(null, a);
  return cljs.core.truth_(function() {
    var a = cljs.core.not.call(null, isNaN.call(null, d));
    return cljs.core.truth_(a) ? cljs.core.not_EQ_.call(null, d, "\ufdd0'qty".call(null, c)) : a
  }()) ? pos.client.model.swap_in_basket_BANG_.call(null, pos.client.model.basket, c, cljs.core.merge.call(null, c, cljs.core.ObjMap.fromObject(["\ufdd0'qty"], {"\ufdd0'qty":d}))) : null
});
cljs.core._add_method.call(null, pos.client.controller.update_basket_item, "\ufdd0'price", function(a) {
  var b = cljs.core.truth_(cljs.core.seq_QMARK_.call(null, a)) ? cljs.core.apply.call(null, cljs.core.hash_map, a) : a, a = cljs.core.get.call(null, b, "\ufdd0'new-val"), b = cljs.core.get.call(null, b, "\ufdd0'id"), c = pos.client.util.from_coll_by_id.call(null, cljs.core.deref.call(null, pos.client.model.basket), b), d = pos.client.util.field_value_as_num.call(null, a);
  return cljs.core.truth_(function() {
    var a = cljs.core.not.call(null, isNaN.call(null, d));
    return cljs.core.truth_(a) ? cljs.core.not_EQ_.call(null, d, "\ufdd0'price".call(null, c)) : a
  }()) ? (a = "\ufdd0'price".call(null, pos.client.util.from_coll_by_id.call(null, "\ufdd0'items".call(null, cljs.core.deref.call(null, pos.client.model.data)), b)), pos.client.model.swap_in_basket_BANG_.call(null, pos.client.model.basket, c, cljs.core.merge.call(null, c, cljs.core.ObjMap.fromObject(["\ufdd0'price", "\ufdd0'discount"], {"\ufdd0'price":d, "\ufdd0'discount":100 * ((a - d) / a)})))) : null
});
cljs.core._add_method.call(null, pos.client.controller.update_basket_item, "\ufdd0'discount", function(a) {
  var b = cljs.core.truth_(cljs.core.seq_QMARK_.call(null, a)) ? cljs.core.apply.call(null, cljs.core.hash_map, a) : a, a = cljs.core.get.call(null, b, "\ufdd0'new-val"), b = cljs.core.get.call(null, b, "\ufdd0'id"), c = pos.client.util.from_coll_by_id.call(null, cljs.core.deref.call(null, pos.client.model.basket), b), d = pos.client.util.field_value_as_num.call(null, a);
  return cljs.core.truth_(function() {
    var a = cljs.core.not.call(null, isNaN.call(null, d));
    return cljs.core.truth_(a) ? cljs.core.not_EQ_.call(null, d, "\ufdd0'discount".call(null, c)) : a
  }()) ? (a = "\ufdd0'price".call(null, pos.client.util.from_coll_by_id.call(null, "\ufdd0'items".call(null, cljs.core.deref.call(null, pos.client.model.data)), b)), pos.client.model.swap_in_basket_BANG_.call(null, pos.client.model.basket, c, cljs.core.merge.call(null, c, cljs.core.ObjMap.fromObject(["\ufdd0'discount", "\ufdd0'price"], {"\ufdd0'discount":d, "\ufdd0'price":a - d / 100 * a})))) : null
});
lib.dispatch.react_to.call(null, cljs.core.set(["\ufdd0'basket-update"]), function(a, b) {
  var c = cljs.core.truth_(cljs.core.seq_QMARK_.call(null, b)) ? cljs.core.apply.call(null, cljs.core.hash_map, b) : b;
  cljs.core.get.call(null, c, "\ufdd0'new-val");
  cljs.core.get.call(null, c, "\ufdd0'changed-attr");
  cljs.core.get.call(null, c, "\ufdd0'id");
  return pos.client.controller.update_basket_item.call(null, c)
});
lib.dispatch.react_to.call(null, cljs.core.set(["\ufdd0'basket-change"]), function() {
  var a = function() {
    var a = pos.client.util.basket_total.call(null, cljs.core.deref.call(null, pos.client.model.basket)), b = cljs.core.apply.call(null, cljs.core._PLUS_, cljs.core.map.call(null, function(a) {
      return"\ufdd0'price".call(null, pos.client.util.from_coll_by_id.call(null, "\ufdd0'items".call(null, cljs.core.deref.call(null, pos.client.model.data)), "\ufdd0'id".call(null, a))) * "\ufdd0'qty".call(null, a)
    }, cljs.core.deref.call(null, pos.client.model.basket)));
    return lib.dispatch.fire.call(null, "\ufdd0'update-basket-total", cljs.core.ObjMap.fromObject(["\ufdd0'tot", "\ufdd0'vat", "\ufdd0'discount"], {"\ufdd0'tot":a, "\ufdd0'vat":0.22 * a, "\ufdd0'discount":b - a}))
  }, b = function(b) {
    var d = null;
    goog.isDef(b) && (d = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
    return a.call(this, d)
  };
  b.cljs$lang$maxFixedArity = 0;
  b.cljs$lang$applyTo = function(b) {
    b = cljs.core.seq(b);
    return a.call(this, b)
  };
  return b
}());
pos.client.controller.action = function() {
  var a = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {})), b = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {})), c = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {})), d = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {})), e = cljs.core.get.call(null, cljs.core.ObjMap.fromObject([], {}), "\ufdd0'hierarchy", cljs.core.global_hierarchy);
  return new cljs.core.MultiFn("action", "\ufdd0'type", "\ufdd0'default", e, a, b, c, d)
}();
cljs.core._add_method.call(null, pos.client.controller.action, "\ufdd0'proceed-tender", function() {
  return cljs.core.truth_(function() {
    var a = cljs.core.not_EQ_.call(null, "\ufdd0'state".call(null, cljs.core.deref.call(null, pos.client.model.state)), "\ufdd0'tender");
    return cljs.core.truth_(a) ? cljs.core.not.call(null, cljs.core.empty_QMARK_.call(null, cljs.core.deref.call(null, pos.client.model.basket))) : a
  }()) ? (cljs.core.reset_BANG_.call(null, pos.client.model.tender, cljs.core.ObjMap.fromObject(["\ufdd0'cash", "\ufdd0'card", "\ufdd0'gift"], {"\ufdd0'cash":null, "\ufdd0'card":null, "\ufdd0'gift":null})), cljs.core.swap_BANG_.call(null, pos.client.model.state, cljs.core.assoc, "\ufdd0'state", "\ufdd0'tender")) : null
});
cljs.core._add_method.call(null, pos.client.controller.action, "\ufdd0'cancel-tender", function() {
  cljs.core.reset_BANG_.call(null, pos.client.model.tender, cljs.core.ObjMap.fromObject([], {}));
  return cljs.core.swap_BANG_.call(null, pos.client.model.state, cljs.core.assoc, "\ufdd0'state", "\ufdd0'dashboard")
});
lib.dispatch.react_to.call(null, cljs.core.set(["\ufdd0'cancel-tender", "\ufdd0'proceed-tender"]), function(a, b) {
  return pos.client.controller.action.call(null, cljs.core.ObjMap.fromObject(["\ufdd0'type", "\ufdd0'data"], {"\ufdd0'type":a, "\ufdd0'data":b}))
});
pos.client.controller.fetch_client_data = function() {
  return fetch.remotes.remote_callback.call(null, "get-db", cljs.core.PersistentVector.fromArray([]), function(a) {
    cljs.core.swap_BANG_.call(null, pos.client.model.data, cljs.core.merge, a);
    return lib.dispatch.fire.call(null, "\ufdd0'init-data-done")
  })
};
pos.client.controller.bind_pusher_listener = function() {
  return(new Pusher("a32696b95bcc47185377")).subscribe("kovalo-pos").bind("customer-nfc", function(a) {
    return lib.dispatch.fire.call(null, "\ufdd0'pusher-customer-nfc", a)
  })
};
pos.client.controller.init = function() {
  pos.client.controller.fetch_client_data.call(null);
  pos.client.controller.bind_pusher_listener.call(null);
  return pos.client.view.prepare_ui.call(null)
};
goog.net.xpc.Transport = function(a) {
  goog.Disposable.call(this);
  this.domHelper_ = a || goog.dom.getDomHelper()
};
goog.inherits(goog.net.xpc.Transport, goog.Disposable);
goog.net.xpc.Transport.prototype.transportType = 0;
goog.net.xpc.Transport.prototype.getType = function() {
  return this.transportType
};
goog.net.xpc.Transport.prototype.getWindow = function() {
  return this.domHelper_.getWindow()
};
goog.net.xpc.Transport.prototype.getName = function() {
  return goog.net.xpc.TransportNames[this.transportType] || ""
};
clojure.browser = {};
clojure.browser.event = {};
clojure.browser.event.EventType = {};
clojure.browser.event.event_types = function(a) {
  if(cljs.core.truth_(cljs.core.truth_(a) ? a.clojure$browser$event$EventType$event_types : a)) {
    a = a.clojure$browser$event$EventType$event_types(a)
  }else {
    var b;
    b = clojure.browser.event.event_types[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(b) && (b = clojure.browser.event.event_types._, !cljs.core.truth_(b))) {
      throw cljs.core.missing_protocol.call(null, "EventType.event-types", a);
    }
    a = b.call(null, a)
  }
  return a
};
Element.prototype.clojure$browser$event$EventType$ = !0;
Element.prototype.clojure$browser$event$EventType$event_types = function() {
  return cljs.core.into.call(null, cljs.core.ObjMap.fromObject([], {}), cljs.core.map.call(null, function(a) {
    var b = cljs.core.nth.call(null, a, 0, null), a = cljs.core.nth.call(null, a, 1, null);
    return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null, b.toLowerCase()), a])
  }, cljs.core.merge.call(null, cljs.core.js__GT_clj.call(null, goog.events.EventType))))
};
goog.events.EventTarget.prototype.clojure$browser$event$EventType$ = !0;
goog.events.EventTarget.prototype.clojure$browser$event$EventType$event_types = function() {
  return cljs.core.into.call(null, cljs.core.ObjMap.fromObject([], {}), cljs.core.map.call(null, function(a) {
    var b = cljs.core.nth.call(null, a, 0, null), a = cljs.core.nth.call(null, a, 1, null);
    return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null, b.toLowerCase()), a])
  }, cljs.core.merge.call(null, cljs.core.js__GT_clj.call(null, goog.events.EventType))))
};
clojure.browser.event.listen = function() {
  var a = null;
  return a = function(b, c, d, e) {
    switch(arguments.length) {
      case 3:
        return a.call(null, b, c, d, !1);
      case 4:
        return goog.events.listen.call(null, b, cljs.core.get.call(null, clojure.browser.event.event_types.call(null, b), c, c), d, e)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
clojure.browser.event.listen_once = function() {
  var a = null;
  return a = function(b, c, d, e) {
    switch(arguments.length) {
      case 3:
        return a.call(null, b, c, d, !1);
      case 4:
        return goog.events.listenOnce.call(null, b, cljs.core.get.call(null, clojure.browser.event.event_types.call(null, b), c, c), d, e)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
clojure.browser.event.unlisten = function() {
  var a = null;
  return a = function(b, c, d, e) {
    switch(arguments.length) {
      case 3:
        return a.call(null, b, c, d, !1);
      case 4:
        return goog.events.unlisten.call(null, b, cljs.core.get.call(null, clojure.browser.event.event_types.call(null, b), c, c), d, e)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
clojure.browser.event.unlisten_by_key = function(a) {
  return goog.events.unlistenByKey.call(null, a)
};
clojure.browser.event.dispatch_event = function(a, b) {
  return goog.events.dispatchEvent.call(null, a, b)
};
clojure.browser.event.expose = function(a) {
  return goog.events.expose.call(null, a)
};
clojure.browser.event.fire_listeners = function() {
  return null
};
clojure.browser.event.total_listener_count = function() {
  return goog.events.getTotalListenerCount.call(null)
};
clojure.browser.event.get_listener = function() {
  return null
};
clojure.browser.event.all_listeners = function() {
  return null
};
clojure.browser.event.unique_event_id = function() {
  return null
};
clojure.browser.event.has_listener = function() {
  return null
};
clojure.browser.event.remove_all = function() {
  return null
};
goog.messaging = {};
goog.messaging.MessageChannel = function() {
};
goog.messaging.MessageChannel.prototype.connect = function() {
};
goog.messaging.MessageChannel.prototype.isConnected = function() {
};
goog.messaging.MessageChannel.prototype.registerService = function() {
};
goog.messaging.MessageChannel.prototype.registerDefaultService = function() {
};
goog.messaging.MessageChannel.prototype.send = function() {
};
goog.messaging.AbstractChannel = function() {
  goog.Disposable.call(this);
  this.services_ = {}
};
goog.inherits(goog.messaging.AbstractChannel, goog.Disposable);
goog.messaging.AbstractChannel.prototype.logger = goog.debug.Logger.getLogger("goog.messaging.AbstractChannel");
goog.messaging.AbstractChannel.prototype.connect = function(a) {
  a && a()
};
goog.messaging.AbstractChannel.prototype.isConnected = function() {
  return!0
};
goog.messaging.AbstractChannel.prototype.registerService = function(a, b, c) {
  this.services_[a] = {callback:b, objectPayload:!!c}
};
goog.messaging.AbstractChannel.prototype.registerDefaultService = function(a) {
  this.defaultService_ = a
};
goog.messaging.AbstractChannel.prototype.deliver = function(a, b) {
  var c = this.getService(a, b);
  c && (b = this.decodePayload(a, b, c.objectPayload), goog.isDefAndNotNull(b) && c.callback(b))
};
goog.messaging.AbstractChannel.prototype.getService = function(a, b) {
  var c = this.services_[a];
  if(c) {
    return c
  }
  if(this.defaultService_) {
    var c = goog.partial(this.defaultService_, a), d = goog.isObject(b);
    return{callback:c, objectPayload:d}
  }
  this.logger.warning('Unknown service name "' + a + '"');
  return null
};
goog.messaging.AbstractChannel.prototype.decodePayload = function(a, b, c) {
  if(c && goog.isString(b)) {
    try {
      return goog.json.parse(b)
    }catch(d) {
      return this.logger.warning("Expected JSON payload for " + a + ', was "' + b + '"'), null
    }
  }else {
    if(!c && !goog.isString(b)) {
      return goog.json.serialize(b)
    }
  }
  return b
};
goog.messaging.AbstractChannel.prototype.disposeInternal = function() {
  goog.messaging.AbstractChannel.superClass_.disposeInternal.call(this);
  goog.dispose(this.logger);
  delete this.logger;
  delete this.services_;
  delete this.defaultService_
};
goog.net.xpc.FrameElementMethodTransport = function(a, b) {
  goog.net.xpc.Transport.call(this, b);
  this.channel_ = a;
  this.queue_ = [];
  this.deliverQueuedCb_ = goog.bind(this.deliverQueued_, this)
};
goog.inherits(goog.net.xpc.FrameElementMethodTransport, goog.net.xpc.Transport);
goog.net.xpc.FrameElementMethodTransport.prototype.transportType = goog.net.xpc.TransportTypes.FRAME_ELEMENT_METHOD;
goog.net.xpc.FrameElementMethodTransport.prototype.recursive_ = !1;
goog.net.xpc.FrameElementMethodTransport.prototype.timer_ = 0;
goog.net.xpc.FrameElementMethodTransport.outgoing_ = null;
goog.net.xpc.FrameElementMethodTransport.prototype.connect = function() {
  this.channel_.getRole() == goog.net.xpc.CrossPageChannel.Role.OUTER ? (this.iframeElm_ = this.channel_.iframeElement_, this.iframeElm_.XPC_toOuter = goog.bind(this.incoming_, this)) : this.attemptSetup_()
};
goog.net.xpc.FrameElementMethodTransport.prototype.attemptSetup_ = function() {
  var a = !0;
  try {
    if(!this.iframeElm_) {
      this.iframeElm_ = this.getWindow().frameElement
    }
    if(this.iframeElm_ && this.iframeElm_.XPC_toOuter) {
      this.outgoing_ = this.iframeElm_.XPC_toOuter, this.iframeElm_.XPC_toOuter.XPC_toInner = goog.bind(this.incoming_, this), a = !1, this.send(goog.net.xpc.TRANSPORT_SERVICE_, goog.net.xpc.SETUP_ACK_), this.channel_.notifyConnected_()
    }
  }catch(b) {
    goog.net.xpc.logger.severe("exception caught while attempting setup: " + b)
  }
  if(a) {
    if(!this.attemptSetupCb_) {
      this.attemptSetupCb_ = goog.bind(this.attemptSetup_, this)
    }
    this.getWindow().setTimeout(this.attemptSetupCb_, 100)
  }
};
goog.net.xpc.FrameElementMethodTransport.prototype.transportServiceHandler = function(a) {
  if(this.channel_.getRole() == goog.net.xpc.CrossPageChannel.Role.OUTER && !this.channel_.isConnected() && a == goog.net.xpc.SETUP_ACK_) {
    this.outgoing_ = this.iframeElm_.XPC_toOuter.XPC_toInner, this.channel_.notifyConnected_()
  }else {
    throw Error("Got unexpected transport message.");
  }
};
goog.net.xpc.FrameElementMethodTransport.prototype.incoming_ = function(a, b) {
  if(!this.recursive_ && 0 == this.queue_.length) {
    this.channel_.deliver_(a, b)
  }else {
    if(this.queue_.push({serviceName:a, payload:b}), 1 == this.queue_.length) {
      this.timer_ = this.getWindow().setTimeout(this.deliverQueuedCb_, 1)
    }
  }
};
goog.net.xpc.FrameElementMethodTransport.prototype.deliverQueued_ = function() {
  for(;this.queue_.length;) {
    var a = this.queue_.shift();
    this.channel_.deliver_(a.serviceName, a.payload)
  }
};
goog.net.xpc.FrameElementMethodTransport.prototype.send = function(a, b) {
  this.recursive_ = !0;
  this.outgoing_(a, b);
  this.recursive_ = !1
};
goog.net.xpc.FrameElementMethodTransport.prototype.disposeInternal = function() {
  goog.net.xpc.FrameElementMethodTransport.superClass_.disposeInternal.call(this);
  this.iframeElm_ = this.outgoing_ = null
};
goog.net.xpc.IframePollingTransport = function(a, b) {
  goog.net.xpc.Transport.call(this, b);
  this.channel_ = a;
  this.sendUri_ = this.channel_.cfg_[goog.net.xpc.CfgFields.PEER_POLL_URI];
  this.rcvUri_ = this.channel_.cfg_[goog.net.xpc.CfgFields.LOCAL_POLL_URI];
  this.sendQueue_ = []
};
goog.inherits(goog.net.xpc.IframePollingTransport, goog.net.xpc.Transport);
goog.net.xpc.IframePollingTransport.prototype.transportType = goog.net.xpc.TransportTypes.IFRAME_POLLING;
goog.net.xpc.IframePollingTransport.prototype.sequence_ = 0;
goog.net.xpc.IframePollingTransport.prototype.waitForAck_ = !1;
goog.net.xpc.IframePollingTransport.prototype.initialized_ = !1;
goog.net.xpc.IframePollingTransport.IFRAME_PREFIX = "googlexpc";
goog.net.xpc.IframePollingTransport.prototype.getMsgFrameName_ = function() {
  return goog.net.xpc.IframePollingTransport.IFRAME_PREFIX + "_" + this.channel_.name + "_msg"
};
goog.net.xpc.IframePollingTransport.prototype.getAckFrameName_ = function() {
  return goog.net.xpc.IframePollingTransport.IFRAME_PREFIX + "_" + this.channel_.name + "_ack"
};
goog.net.xpc.IframePollingTransport.prototype.connect = function() {
  goog.net.xpc.logger.fine("transport connect called");
  if(!this.initialized_) {
    goog.net.xpc.logger.fine("initializing..."), this.constructSenderFrames_(), this.initialized_ = !0
  }
  this.checkForeignFramesReady_()
};
goog.net.xpc.IframePollingTransport.prototype.constructSenderFrames_ = function() {
  var a = this.getMsgFrameName_();
  this.msgIframeElm_ = this.constructSenderFrame_(a);
  this.msgWinObj_ = this.getWindow().frames[a];
  a = this.getAckFrameName_();
  this.ackIframeElm_ = this.constructSenderFrame_(a);
  this.ackWinObj_ = this.getWindow().frames[a]
};
goog.net.xpc.IframePollingTransport.prototype.constructSenderFrame_ = function(a) {
  goog.net.xpc.logger.finest("constructing sender frame: " + a);
  var b = goog.dom.createElement("iframe"), c = b.style;
  c.position = "absolute";
  c.top = "-10px";
  c.left = "10px";
  c.width = "1px";
  c.height = "1px";
  b.id = b.name = a;
  b.src = this.sendUri_ + "#INITIAL";
  this.getWindow().document.body.appendChild(b);
  return b
};
goog.net.xpc.IframePollingTransport.prototype.innerPeerReconnect_ = function() {
  goog.net.xpc.logger.finest("innerPeerReconnect called");
  this.channel_.name = goog.net.xpc.getRandomString(10);
  goog.net.xpc.logger.finest("switching channels: " + this.channel_.name);
  this.deconstructSenderFrames_();
  this.initialized_ = !1;
  this.reconnectFrame_ = this.constructSenderFrame_(goog.net.xpc.IframePollingTransport.IFRAME_PREFIX + "_reconnect_" + this.channel_.name)
};
goog.net.xpc.IframePollingTransport.prototype.outerPeerReconnect_ = function() {
  goog.net.xpc.logger.finest("outerPeerReconnect called");
  for(var a = this.channel_.peerWindowObject_.frames, b = a.length, c = 0;c < b;c++) {
    var d;
    try {
      if(a[c] && a[c].name) {
        d = a[c].name
      }
    }catch(e) {
    }
    if(d) {
      var f = d.split("_");
      if(3 == f.length && f[0] == goog.net.xpc.IframePollingTransport.IFRAME_PREFIX && "reconnect" == f[1]) {
        this.channel_.name = f[2];
        this.deconstructSenderFrames_();
        this.initialized_ = !1;
        break
      }
    }
  }
};
goog.net.xpc.IframePollingTransport.prototype.deconstructSenderFrames_ = function() {
  goog.net.xpc.logger.finest("deconstructSenderFrames called");
  if(this.msgIframeElm_) {
    this.msgIframeElm_.parentNode.removeChild(this.msgIframeElm_), this.msgWinObj_ = this.msgIframeElm_ = null
  }
  if(this.ackIframeElm_) {
    this.ackIframeElm_.parentNode.removeChild(this.ackIframeElm_), this.ackWinObj_ = this.ackIframeElm_ = null
  }
};
goog.net.xpc.IframePollingTransport.prototype.checkForeignFramesReady_ = function() {
  !this.isRcvFrameReady_(this.getMsgFrameName_()) || !this.isRcvFrameReady_(this.getAckFrameName_()) ? (goog.net.xpc.logger.finest("foreign frames not (yet) present"), this.channel_.getRole() == goog.net.xpc.CrossPageChannel.Role.INNER && !this.reconnectFrame_ ? this.innerPeerReconnect_() : this.channel_.getRole() == goog.net.xpc.CrossPageChannel.Role.OUTER && this.outerPeerReconnect_(), this.getWindow().setTimeout(goog.bind(this.connect, this), 100)) : (goog.net.xpc.logger.fine("foreign frames present"), 
  this.msgReceiver_ = new goog.net.xpc.IframePollingTransport.Receiver(this, this.channel_.peerWindowObject_.frames[this.getMsgFrameName_()], goog.bind(this.processIncomingMsg, this)), this.ackReceiver_ = new goog.net.xpc.IframePollingTransport.Receiver(this, this.channel_.peerWindowObject_.frames[this.getAckFrameName_()], goog.bind(this.processIncomingAck, this)), this.checkLocalFramesPresent_())
};
goog.net.xpc.IframePollingTransport.prototype.isRcvFrameReady_ = function(a) {
  goog.net.xpc.logger.finest("checking for receive frame: " + a);
  try {
    var b = this.channel_.peerWindowObject_.frames[a];
    if(!b || 0 != b.location.href.indexOf(this.rcvUri_)) {
      return!1
    }
  }catch(c) {
    return!1
  }
  return!0
};
goog.net.xpc.IframePollingTransport.prototype.checkLocalFramesPresent_ = function() {
  var a = this.channel_.peerWindowObject_.frames;
  if(!a[this.getAckFrameName_()] || !a[this.getMsgFrameName_()]) {
    if(!this.checkLocalFramesPresentCb_) {
      this.checkLocalFramesPresentCb_ = goog.bind(this.checkLocalFramesPresent_, this)
    }
    this.getWindow().setTimeout(this.checkLocalFramesPresentCb_, 100);
    goog.net.xpc.logger.fine("local frames not (yet) present")
  }else {
    this.msgSender_ = new goog.net.xpc.IframePollingTransport.Sender(this.sendUri_, this.msgWinObj_), this.ackSender_ = new goog.net.xpc.IframePollingTransport.Sender(this.sendUri_, this.ackWinObj_), goog.net.xpc.logger.fine("local frames ready"), this.getWindow().setTimeout(goog.bind(function() {
      this.msgSender_.send(goog.net.xpc.SETUP);
      this.waitForAck_ = this.sentConnectionSetup_ = !0;
      goog.net.xpc.logger.fine("SETUP sent")
    }, this), 100)
  }
};
goog.net.xpc.IframePollingTransport.prototype.checkIfConnected_ = function() {
  if(this.sentConnectionSetupAck_ && this.rcvdConnectionSetupAck_) {
    if(this.channel_.notifyConnected_(), this.deliveryQueue_) {
      goog.net.xpc.logger.fine("delivering queued messages (" + this.deliveryQueue_.length + ")");
      for(var a = 0, b;a < this.deliveryQueue_.length;a++) {
        b = this.deliveryQueue_[a], this.channel_.deliver_(b.service, b.payload)
      }
      delete this.deliveryQueue_
    }
  }else {
    goog.net.xpc.logger.finest("checking if connected: ack sent:" + this.sentConnectionSetupAck_ + ", ack rcvd: " + this.rcvdConnectionSetupAck_)
  }
};
goog.net.xpc.IframePollingTransport.prototype.processIncomingMsg = function(a) {
  goog.net.xpc.logger.finest("msg received: " + a);
  if(a == goog.net.xpc.SETUP) {
    if(this.ackSender_) {
      this.ackSender_.send(goog.net.xpc.SETUP_ACK_), goog.net.xpc.logger.finest("SETUP_ACK sent"), this.sentConnectionSetupAck_ = !0, this.checkIfConnected_()
    }
  }else {
    if(this.channel_.isConnected() || this.sentConnectionSetupAck_) {
      var b = a.indexOf("|"), c = a.substring(0, b), a = a.substring(b + 1), b = c.indexOf(",");
      if(-1 == b) {
        var d;
        this.ackSender_.send("ACK:" + c);
        this.deliverPayload_(a)
      }else {
        d = c.substring(0, b);
        this.ackSender_.send("ACK:" + d);
        c = c.substring(b + 1).split("/");
        b = parseInt(c[0], 10);
        c = parseInt(c[1], 10);
        if(1 == b) {
          this.parts_ = []
        }
        this.parts_.push(a);
        b == c && (this.deliverPayload_(this.parts_.join("")), delete this.parts_)
      }
    }else {
      goog.net.xpc.logger.warning("received msg, but channel is not connected")
    }
  }
};
goog.net.xpc.IframePollingTransport.prototype.processIncomingAck = function(a) {
  goog.net.xpc.logger.finest("ack received: " + a);
  a == goog.net.xpc.SETUP_ACK_ ? (this.waitForAck_ = !1, this.rcvdConnectionSetupAck_ = !0, this.checkIfConnected_()) : this.channel_.isConnected() ? this.waitForAck_ ? parseInt(a.split(":")[1], 10) == this.sequence_ ? (this.waitForAck_ = !1, this.sendNextFrame_()) : goog.net.xpc.logger.warning("got ack with wrong sequence") : goog.net.xpc.logger.warning("got unexpected ack") : goog.net.xpc.logger.warning("received ack, but channel not connected")
};
goog.net.xpc.IframePollingTransport.prototype.sendNextFrame_ = function() {
  if(!this.waitForAck_ && this.sendQueue_.length) {
    var a = this.sendQueue_.shift();
    ++this.sequence_;
    this.msgSender_.send(this.sequence_ + a);
    goog.net.xpc.logger.finest("msg sent: " + this.sequence_ + a);
    this.waitForAck_ = !0
  }
};
goog.net.xpc.IframePollingTransport.prototype.deliverPayload_ = function(a) {
  var b = a.indexOf(":"), c = a.substr(0, b), a = a.substring(b + 1);
  this.channel_.isConnected() ? this.channel_.deliver_(c, a) : ((this.deliveryQueue_ || (this.deliveryQueue_ = [])).push({service:c, payload:a}), goog.net.xpc.logger.finest("queued delivery"))
};
goog.net.xpc.IframePollingTransport.prototype.MAX_FRAME_LENGTH_ = 3800;
goog.net.xpc.IframePollingTransport.prototype.send = function(a, b) {
  var c = a + ":" + b;
  if(!goog.userAgent.IE || b.length <= this.MAX_FRAME_LENGTH_) {
    this.sendQueue_.push("|" + c)
  }else {
    for(var d = b.length, e = Math.ceil(d / this.MAX_FRAME_LENGTH_), f = 0, g = 1;f < d;) {
      this.sendQueue_.push("," + g + "/" + e + "|" + c.substr(f, this.MAX_FRAME_LENGTH_)), g++, f += this.MAX_FRAME_LENGTH_
    }
  }
  this.sendNextFrame_()
};
goog.net.xpc.IframePollingTransport.prototype.disposeInternal = function() {
  goog.net.xpc.IframePollingTransport.superClass_.disposeInternal.call(this);
  var a = goog.net.xpc.IframePollingTransport.receivers_;
  goog.array.remove(a, this.msgReceiver_);
  goog.array.remove(a, this.ackReceiver_);
  this.msgReceiver_ = this.ackReceiver_ = null;
  goog.dom.removeNode(this.msgIframeElm_);
  goog.dom.removeNode(this.ackIframeElm_);
  this.msgWinObj_ = this.ackWinObj_ = this.msgIframeElm_ = this.ackIframeElm_ = null
};
goog.net.xpc.IframePollingTransport.receivers_ = [];
goog.net.xpc.IframePollingTransport.TIME_POLL_SHORT_ = 10;
goog.net.xpc.IframePollingTransport.TIME_POLL_LONG_ = 100;
goog.net.xpc.IframePollingTransport.TIME_SHORT_POLL_AFTER_ACTIVITY_ = 1E3;
goog.net.xpc.IframePollingTransport.receive_ = function() {
  var a = !1;
  try {
    for(var b = 0, c = goog.net.xpc.IframePollingTransport.receivers_.length;b < c;b++) {
      a = a || goog.net.xpc.IframePollingTransport.receivers_[b].receive()
    }
  }catch(d) {
    if(goog.net.xpc.logger.info("receive_() failed: " + d), goog.net.xpc.IframePollingTransport.receivers_[b].transport_.channel_.notifyTransportError_(), !goog.net.xpc.IframePollingTransport.receivers_.length) {
      return
    }
  }
  b = goog.now();
  if(a) {
    goog.net.xpc.IframePollingTransport.lastActivity_ = b
  }
  goog.net.xpc.IframePollingTransport.rcvTimer_ = window.setTimeout(goog.net.xpc.IframePollingTransport.receiveCb_, b - goog.net.xpc.IframePollingTransport.lastActivity_ < goog.net.xpc.IframePollingTransport.TIME_SHORT_POLL_AFTER_ACTIVITY_ ? goog.net.xpc.IframePollingTransport.TIME_POLL_SHORT_ : goog.net.xpc.IframePollingTransport.TIME_POLL_LONG_)
};
goog.net.xpc.IframePollingTransport.receiveCb_ = goog.bind(goog.net.xpc.IframePollingTransport.receive_, goog.net.xpc.IframePollingTransport);
goog.net.xpc.IframePollingTransport.startRcvTimer_ = function() {
  goog.net.xpc.logger.fine("starting receive-timer");
  goog.net.xpc.IframePollingTransport.lastActivity_ = goog.now();
  goog.net.xpc.IframePollingTransport.rcvTimer_ && window.clearTimeout(goog.net.xpc.IframePollingTransport.rcvTimer_);
  goog.net.xpc.IframePollingTransport.rcvTimer_ = window.setTimeout(goog.net.xpc.IframePollingTransport.receiveCb_, goog.net.xpc.IframePollingTransport.TIME_POLL_SHORT_)
};
goog.net.xpc.IframePollingTransport.Sender = function(a, b) {
  this.sendUri_ = a;
  this.sendFrame_ = b;
  this.cycle_ = 0
};
goog.net.xpc.IframePollingTransport.Sender.prototype.send = function(a) {
  this.cycle_ = ++this.cycle_ % 2;
  a = this.sendUri_ + "#" + this.cycle_ + encodeURIComponent(a);
  try {
    goog.userAgent.WEBKIT ? this.sendFrame_.location.href = a : this.sendFrame_.location.replace(a)
  }catch(b) {
    goog.net.xpc.logger.severe("sending failed", b)
  }
  goog.net.xpc.IframePollingTransport.startRcvTimer_()
};
goog.net.xpc.IframePollingTransport.Receiver = function(a, b, c) {
  this.transport_ = a;
  this.rcvFrame_ = b;
  this.cb_ = c;
  this.currentLoc_ = this.rcvFrame_.location.href.split("#")[0] + "#INITIAL";
  goog.net.xpc.IframePollingTransport.receivers_.push(this);
  goog.net.xpc.IframePollingTransport.startRcvTimer_()
};
goog.net.xpc.IframePollingTransport.Receiver.prototype.receive = function() {
  var a = this.rcvFrame_.location.href;
  if(a != this.currentLoc_) {
    this.currentLoc_ = a;
    if(a = a.split("#")[1]) {
      a = a.substr(1), this.cb_(decodeURIComponent(a))
    }
    return!0
  }
  return!1
};
goog.net.xpc.IframeRelayTransport = function(a, b) {
  goog.net.xpc.Transport.call(this, b);
  this.channel_ = a;
  this.peerRelayUri_ = this.channel_.cfg_[goog.net.xpc.CfgFields.PEER_RELAY_URI];
  this.peerIframeId_ = this.channel_.cfg_[goog.net.xpc.CfgFields.IFRAME_ID];
  goog.userAgent.WEBKIT && goog.net.xpc.IframeRelayTransport.startCleanupTimer_()
};
goog.inherits(goog.net.xpc.IframeRelayTransport, goog.net.xpc.Transport);
if(goog.userAgent.WEBKIT) {
  goog.net.xpc.IframeRelayTransport.iframeRefs_ = [], goog.net.xpc.IframeRelayTransport.CLEANUP_INTERVAL_ = 1E3, goog.net.xpc.IframeRelayTransport.IFRAME_MAX_AGE_ = 3E3, goog.net.xpc.IframeRelayTransport.cleanupTimer_ = 0, goog.net.xpc.IframeRelayTransport.startCleanupTimer_ = function() {
    if(!goog.net.xpc.IframeRelayTransport.cleanupTimer_) {
      goog.net.xpc.IframeRelayTransport.cleanupTimer_ = window.setTimeout(function() {
        goog.net.xpc.IframeRelayTransport.cleanup_()
      }, goog.net.xpc.IframeRelayTransport.CLEANUP_INTERVAL_)
    }
  }, goog.net.xpc.IframeRelayTransport.cleanup_ = function(a) {
    for(var b = goog.now(), a = a || goog.net.xpc.IframeRelayTransport.IFRAME_MAX_AGE_;goog.net.xpc.IframeRelayTransport.iframeRefs_.length && b - goog.net.xpc.IframeRelayTransport.iframeRefs_[0].timestamp >= a;) {
      var c = goog.net.xpc.IframeRelayTransport.iframeRefs_.shift().iframeElement;
      goog.dom.removeNode(c);
      goog.net.xpc.logger.finest("iframe removed")
    }
    goog.net.xpc.IframeRelayTransport.cleanupTimer_ = window.setTimeout(goog.net.xpc.IframeRelayTransport.cleanupCb_, goog.net.xpc.IframeRelayTransport.CLEANUP_INTERVAL_)
  }, goog.net.xpc.IframeRelayTransport.cleanupCb_ = function() {
    goog.net.xpc.IframeRelayTransport.cleanup_()
  }
}
goog.net.xpc.IframeRelayTransport.IE_PAYLOAD_MAX_SIZE_ = 1800;
goog.net.xpc.IframeRelayTransport.fragmentMap_ = {};
goog.net.xpc.IframeRelayTransport.prototype.transportType = goog.net.xpc.TransportTypes.IFRAME_RELAY;
goog.net.xpc.IframeRelayTransport.prototype.connect = function() {
  if(!this.getWindow().xpcRelay) {
    this.getWindow().xpcRelay = goog.net.xpc.IframeRelayTransport.receiveMessage_
  }
  this.send(goog.net.xpc.TRANSPORT_SERVICE_, goog.net.xpc.SETUP)
};
goog.net.xpc.IframeRelayTransport.receiveMessage_ = function(a, b) {
  var c = b.indexOf(":"), d = b.substr(0, c), e = b.substr(c + 1);
  if(!goog.userAgent.IE || -1 == (c = d.indexOf("|"))) {
    var f = d
  }else {
    var f = d.substr(0, c), d = d.substr(c + 1), c = d.indexOf("+"), g = d.substr(0, c), c = parseInt(d.substr(c + 1), 10), h = goog.net.xpc.IframeRelayTransport.fragmentMap_[g];
    h || (h = goog.net.xpc.IframeRelayTransport.fragmentMap_[g] = {fragments:[], received:0, expected:0});
    if(goog.string.contains(d, "++")) {
      h.expected = c + 1
    }
    h.fragments[c] = e;
    h.received++;
    if(h.received != h.expected) {
      return
    }
    e = h.fragments.join("");
    delete goog.net.xpc.IframeRelayTransport.fragmentMap_[g]
  }
  goog.net.xpc.channels_[a].deliver_(f, decodeURIComponent(e))
};
goog.net.xpc.IframeRelayTransport.prototype.transportServiceHandler = function(a) {
  a == goog.net.xpc.SETUP ? (this.send(goog.net.xpc.TRANSPORT_SERVICE_, goog.net.xpc.SETUP_ACK_), this.channel_.notifyConnected_()) : a == goog.net.xpc.SETUP_ACK_ && this.channel_.notifyConnected_()
};
goog.net.xpc.IframeRelayTransport.prototype.send = function(a, b) {
  var c = encodeURIComponent(b), d = c.length, e = goog.net.xpc.IframeRelayTransport.IE_PAYLOAD_MAX_SIZE_;
  if(goog.userAgent.IE && d > e) {
    for(var f = goog.string.getRandomString(), g = 0, h = 0;g < d;h++) {
      var i = c.substr(g, e), g = g + e;
      this.send_(a, i, f + (g >= d ? "++" : "+") + h)
    }
  }else {
    this.send_(a, c)
  }
};
goog.net.xpc.IframeRelayTransport.prototype.send_ = function(a, b, c) {
  if(goog.userAgent.IE) {
    var d = this.getWindow().document.createElement("div");
    d.innerHTML = '<iframe onload="this.xpcOnload()"></iframe>';
    d = d.childNodes[0];
    d.xpcOnload = goog.net.xpc.IframeRelayTransport.iframeLoadHandler_
  }else {
    d = this.getWindow().document.createElement("iframe"), goog.userAgent.WEBKIT ? goog.net.xpc.IframeRelayTransport.iframeRefs_.push({timestamp:goog.now(), iframeElement:d}) : goog.events.listen(d, "load", goog.net.xpc.IframeRelayTransport.iframeLoadHandler_)
  }
  var e = d.style;
  e.visibility = "hidden";
  e.width = d.style.height = "0px";
  e.position = "absolute";
  e = this.peerRelayUri_;
  e += "#" + this.channel_.name;
  this.peerIframeId_ && (e += "," + this.peerIframeId_);
  e += "|" + a;
  c && (e += "|" + c);
  e += ":" + b;
  d.src = e;
  this.getWindow().document.body.appendChild(d);
  goog.net.xpc.logger.finest("msg sent: " + e)
};
goog.net.xpc.IframeRelayTransport.iframeLoadHandler_ = function() {
  goog.net.xpc.logger.finest("iframe-load");
  goog.dom.removeNode(this);
  this.xpcOnload = null
};
goog.net.xpc.IframeRelayTransport.prototype.disposeInternal = function() {
  goog.net.xpc.IframeRelayTransport.superClass_.disposeInternal.call(this);
  goog.userAgent.WEBKIT && goog.net.xpc.IframeRelayTransport.cleanup_(0)
};
goog.net.xpc.NativeMessagingTransport = function(a, b, c) {
  goog.net.xpc.Transport.call(this, c);
  this.channel_ = a;
  this.peerHostname_ = b || "*"
};
goog.inherits(goog.net.xpc.NativeMessagingTransport, goog.net.xpc.Transport);
goog.net.xpc.NativeMessagingTransport.prototype.initialized_ = !1;
goog.net.xpc.NativeMessagingTransport.prototype.transportType = goog.net.xpc.TransportTypes.NATIVE_MESSAGING;
goog.net.xpc.NativeMessagingTransport.activeCount_ = {};
goog.net.xpc.NativeMessagingTransport.initialize_ = function(a) {
  var b = goog.getUid(a), c = goog.net.xpc.NativeMessagingTransport.activeCount_[b];
  goog.isNumber(c) || (c = 0);
  0 == c && goog.events.listen(a.postMessage ? a : a.document, "message", goog.net.xpc.NativeMessagingTransport.messageReceived_, !1, goog.net.xpc.NativeMessagingTransport);
  goog.net.xpc.NativeMessagingTransport.activeCount_[b] = c + 1
};
goog.net.xpc.NativeMessagingTransport.messageReceived_ = function(a) {
  var b = a.getBrowserEvent().data, c = b.indexOf("|"), d = b.indexOf(":");
  if(-1 == c || -1 == d) {
    return!1
  }
  var e = b.substring(0, c), c = b.substring(c + 1, d), b = b.substring(d + 1);
  goog.net.xpc.logger.fine("messageReceived: channel=" + e + ", service=" + c + ", payload=" + b);
  if(d = goog.net.xpc.channels_[e]) {
    return d.deliver_(c, b, a.getBrowserEvent().origin), !0
  }
  for(var f in goog.net.xpc.channels_) {
    if(a = goog.net.xpc.channels_[f], a.getRole() == goog.net.xpc.CrossPageChannel.Role.INNER && !a.isConnected() && c == goog.net.xpc.TRANSPORT_SERVICE_ && b == goog.net.xpc.SETUP) {
      return goog.net.xpc.logger.fine("changing channel name to " + e), a.name = e, delete goog.net.xpc.channels_[f], goog.net.xpc.channels_[e] = a, a.deliver_(c, b), !0
    }
  }
  goog.net.xpc.logger.info('channel name mismatch; message ignored"');
  return!1
};
goog.net.xpc.NativeMessagingTransport.prototype.transportServiceHandler = function(a) {
  switch(a) {
    case goog.net.xpc.SETUP:
      this.send(goog.net.xpc.TRANSPORT_SERVICE_, goog.net.xpc.SETUP_ACK_);
      break;
    case goog.net.xpc.SETUP_ACK_:
      this.channel_.notifyConnected_()
  }
};
goog.net.xpc.NativeMessagingTransport.prototype.connect = function() {
  goog.net.xpc.NativeMessagingTransport.initialize_(this.getWindow());
  this.initialized_ = !0;
  this.connectWithRetries_()
};
goog.net.xpc.NativeMessagingTransport.prototype.connectWithRetries_ = function() {
  !this.channel_.isConnected() && !this.isDisposed() && (this.send(goog.net.xpc.TRANSPORT_SERVICE_, goog.net.xpc.SETUP), this.getWindow().setTimeout(goog.bind(this.connectWithRetries_, this), 100))
};
goog.net.xpc.NativeMessagingTransport.prototype.send = function(a, b) {
  var c = this.channel_.peerWindowObject_;
  if(c) {
    var d = c.postMessage ? c : c.document;
    this.send = function(a, b) {
      goog.net.xpc.logger.fine("send(): payload=" + b + " to hostname=" + this.peerHostname_);
      d.postMessage(this.channel_.name + "|" + a + ":" + b, this.peerHostname_)
    };
    this.send(a, b)
  }else {
    goog.net.xpc.logger.fine("send(): window not ready")
  }
};
goog.net.xpc.NativeMessagingTransport.prototype.disposeInternal = function() {
  goog.net.xpc.NativeMessagingTransport.superClass_.disposeInternal.call(this);
  if(this.initialized_) {
    var a = this.getWindow(), b = goog.getUid(a), c = goog.net.xpc.NativeMessagingTransport.activeCount_[b];
    goog.net.xpc.NativeMessagingTransport.activeCount_[b] = c - 1;
    1 == c && goog.events.unlisten(a.postMessage ? a : a.document, "message", goog.net.xpc.NativeMessagingTransport.messageReceived_, !1, goog.net.xpc.NativeMessagingTransport)
  }
};
goog.net.xpc.NixTransport = function(a, b) {
  goog.net.xpc.Transport.call(this, b);
  this.channel_ = a;
  this.authToken_ = a[goog.net.xpc.CfgFields.AUTH_TOKEN] || "";
  this.remoteAuthToken_ = a[goog.net.xpc.CfgFields.REMOTE_AUTH_TOKEN] || "";
  goog.net.xpc.NixTransport.conductGlobalSetup_(this.getWindow());
  this[goog.net.xpc.NixTransport.NIX_HANDLE_MESSAGE] = this.handleMessage_;
  this[goog.net.xpc.NixTransport.NIX_CREATE_CHANNEL] = this.createChannel_
};
goog.inherits(goog.net.xpc.NixTransport, goog.net.xpc.Transport);
goog.net.xpc.NixTransport.NIX_WRAPPER = "GCXPC____NIXVBS_wrapper";
goog.net.xpc.NixTransport.NIX_GET_WRAPPER = "GCXPC____NIXVBS_get_wrapper";
goog.net.xpc.NixTransport.NIX_HANDLE_MESSAGE = "GCXPC____NIXJS_handle_message";
goog.net.xpc.NixTransport.NIX_CREATE_CHANNEL = "GCXPC____NIXJS_create_channel";
goog.net.xpc.NixTransport.NIX_ID_FIELD = "GCXPC____NIXVBS_container";
goog.net.xpc.NixTransport.conductGlobalSetup_ = function(a) {
  if(!a.nix_setup_complete) {
    var b = "Class " + goog.net.xpc.NixTransport.NIX_WRAPPER + "\n Private m_Transport\nPrivate m_Auth\nPublic Sub SetTransport(transport)\nIf isEmpty(m_Transport) Then\nSet m_Transport = transport\nEnd If\nEnd Sub\nPublic Sub SetAuth(auth)\nIf isEmpty(m_Auth) Then\nm_Auth = auth\nEnd If\nEnd Sub\nPublic Function GetAuthToken()\n GetAuthToken = m_Auth\nEnd Function\nPublic Sub SendMessage(service, payload)\n Call m_Transport." + goog.net.xpc.NixTransport.NIX_HANDLE_MESSAGE + "(service, payload)\nEnd Sub\nPublic Sub CreateChannel(channel)\n Call m_Transport." + 
    goog.net.xpc.NixTransport.NIX_CREATE_CHANNEL + "(channel)\nEnd Sub\nPublic Sub " + goog.net.xpc.NixTransport.NIX_ID_FIELD + "()\n End Sub\nEnd Class\n Function " + goog.net.xpc.NixTransport.NIX_GET_WRAPPER + "(transport, auth)\nDim wrap\nSet wrap = New " + goog.net.xpc.NixTransport.NIX_WRAPPER + "\nwrap.SetTransport transport\nwrap.SetAuth auth\nSet " + goog.net.xpc.NixTransport.NIX_GET_WRAPPER + " = wrap\nEnd Function";
    try {
      a.execScript(b, "vbscript"), a.nix_setup_complete = !0
    }catch(c) {
      goog.net.xpc.logger.severe("exception caught while attempting global setup: " + c)
    }
  }
};
goog.net.xpc.NixTransport.prototype.transportType = goog.net.xpc.TransportTypes.NIX;
goog.net.xpc.NixTransport.prototype.localSetupCompleted_ = !1;
goog.net.xpc.NixTransport.prototype.nixChannel_ = null;
goog.net.xpc.NixTransport.prototype.connect = function() {
  this.channel_.getRole() == goog.net.xpc.CrossPageChannel.Role.OUTER ? this.attemptOuterSetup_() : this.attemptInnerSetup_()
};
goog.net.xpc.NixTransport.prototype.attemptOuterSetup_ = function() {
  if(!this.localSetupCompleted_) {
    var a = this.channel_.iframeElement_;
    try {
      a.contentWindow.opener = this.getWindow()[goog.net.xpc.NixTransport.NIX_GET_WRAPPER](this, this.authToken_), this.localSetupCompleted_ = !0
    }catch(b) {
      goog.net.xpc.logger.severe("exception caught while attempting setup: " + b)
    }
    this.localSetupCompleted_ || this.getWindow().setTimeout(goog.bind(this.attemptOuterSetup_, this), 100)
  }
};
goog.net.xpc.NixTransport.prototype.attemptInnerSetup_ = function() {
  if(!this.localSetupCompleted_) {
    try {
      var a = this.getWindow().opener;
      if(a && goog.net.xpc.NixTransport.NIX_ID_FIELD in a) {
        this.nixChannel_ = a;
        if(this.nixChannel_.GetAuthToken() != this.remoteAuthToken_) {
          goog.net.xpc.logger.severe("Invalid auth token from other party");
          return
        }
        this.nixChannel_.CreateChannel(this.getWindow()[goog.net.xpc.NixTransport.NIX_GET_WRAPPER](this, this.authToken_));
        this.localSetupCompleted_ = !0;
        this.channel_.notifyConnected_()
      }
    }catch(b) {
      goog.net.xpc.logger.severe("exception caught while attempting setup: " + b);
      return
    }
    this.localSetupCompleted_ || this.getWindow().setTimeout(goog.bind(this.attemptInnerSetup_, this), 100)
  }
};
goog.net.xpc.NixTransport.prototype.createChannel_ = function(a) {
  ("unknown" != typeof a || !(goog.net.xpc.NixTransport.NIX_ID_FIELD in a)) && goog.net.xpc.logger.severe("Invalid NIX channel given to createChannel_");
  this.nixChannel_ = a;
  this.nixChannel_.GetAuthToken() != this.remoteAuthToken_ ? goog.net.xpc.logger.severe("Invalid auth token from other party") : this.channel_.notifyConnected_()
};
goog.net.xpc.NixTransport.prototype.handleMessage_ = function(a, b) {
  this.getWindow().setTimeout(goog.bind(function() {
    this.channel_.deliver_(a, b)
  }, this), 1)
};
goog.net.xpc.NixTransport.prototype.send = function(a, b) {
  "unknown" !== typeof this.nixChannel_ && goog.net.xpc.logger.severe("NIX channel not connected");
  this.nixChannel_.SendMessage(a, b)
};
goog.net.xpc.NixTransport.prototype.disposeInternal = function() {
  goog.net.xpc.NixTransport.superClass_.disposeInternal.call(this);
  this.nixChannel_ = null
};
goog.net.xpc.CrossPageChannel = function(a, b) {
  goog.messaging.AbstractChannel.call(this);
  for(var c = 0, d;d = goog.net.xpc.UriCfgFields[c];c++) {
    if(d in a && !/^https?:\/\//.test(a[d])) {
      throw Error("URI " + a[d] + " is invalid for field " + d);
    }
  }
  this.cfg_ = a;
  this.name = this.cfg_[goog.net.xpc.CfgFields.CHANNEL_NAME] || goog.net.xpc.getRandomString(10);
  this.domHelper_ = b || goog.dom.getDomHelper();
  goog.net.xpc.channels_[this.name] = this;
  goog.events.listen(window, "unload", goog.net.xpc.CrossPageChannel.disposeAll_);
  goog.net.xpc.logger.info("CrossPageChannel created: " + this.name)
};
goog.inherits(goog.net.xpc.CrossPageChannel, goog.messaging.AbstractChannel);
goog.net.xpc.CrossPageChannel.TRANSPORT_SERVICE_ESCAPE_RE_ = RegExp("^%*" + goog.net.xpc.TRANSPORT_SERVICE_ + "$");
goog.net.xpc.CrossPageChannel.TRANSPORT_SERVICE_UNESCAPE_RE_ = RegExp("^%+" + goog.net.xpc.TRANSPORT_SERVICE_ + "$");
goog.net.xpc.CrossPageChannel.prototype.transport_ = null;
goog.net.xpc.CrossPageChannel.prototype.state_ = goog.net.xpc.ChannelStates.NOT_CONNECTED;
goog.net.xpc.CrossPageChannel.prototype.isConnected = function() {
  return this.state_ == goog.net.xpc.ChannelStates.CONNECTED
};
goog.net.xpc.CrossPageChannel.prototype.peerWindowObject_ = null;
goog.net.xpc.CrossPageChannel.prototype.iframeElement_ = null;
goog.net.xpc.CrossPageChannel.prototype.setPeerWindowObject = function(a) {
  this.peerWindowObject_ = a
};
goog.net.xpc.CrossPageChannel.prototype.determineTransportType_ = function() {
  var a;
  if(goog.isFunction(document.postMessage) || goog.isFunction(window.postMessage) || goog.userAgent.IE && window.postMessage) {
    a = goog.net.xpc.TransportTypes.NATIVE_MESSAGING
  }else {
    if(goog.userAgent.GECKO) {
      a = goog.net.xpc.TransportTypes.FRAME_ELEMENT_METHOD
    }else {
      if(goog.userAgent.IE && this.cfg_[goog.net.xpc.CfgFields.PEER_RELAY_URI]) {
        a = goog.net.xpc.TransportTypes.IFRAME_RELAY
      }else {
        if(goog.userAgent.IE) {
          a = goog.net.xpc.TransportTypes.NIX
        }else {
          if(this.cfg_[goog.net.xpc.CfgFields.LOCAL_POLL_URI] && this.cfg_[goog.net.xpc.CfgFields.PEER_POLL_URI]) {
            a = goog.net.xpc.TransportTypes.IFRAME_POLLING
          }
        }
      }
    }
  }
  return a
};
goog.net.xpc.CrossPageChannel.prototype.createTransport_ = function() {
  if(!this.transport_) {
    this.cfg_[goog.net.xpc.CfgFields.TRANSPORT] || (this.cfg_[goog.net.xpc.CfgFields.TRANSPORT] = this.determineTransportType_());
    switch(this.cfg_[goog.net.xpc.CfgFields.TRANSPORT]) {
      case goog.net.xpc.TransportTypes.NATIVE_MESSAGING:
        this.transport_ = new goog.net.xpc.NativeMessagingTransport(this, this.cfg_[goog.net.xpc.CfgFields.PEER_HOSTNAME], this.domHelper_);
        break;
      case goog.net.xpc.TransportTypes.NIX:
        this.transport_ = new goog.net.xpc.NixTransport(this, this.domHelper_);
        break;
      case goog.net.xpc.TransportTypes.FRAME_ELEMENT_METHOD:
        this.transport_ = new goog.net.xpc.FrameElementMethodTransport(this, this.domHelper_);
        break;
      case goog.net.xpc.TransportTypes.IFRAME_RELAY:
        this.transport_ = new goog.net.xpc.IframeRelayTransport(this, this.domHelper_);
        break;
      case goog.net.xpc.TransportTypes.IFRAME_POLLING:
        this.transport_ = new goog.net.xpc.IframePollingTransport(this, this.domHelper_)
    }
    if(this.transport_) {
      goog.net.xpc.logger.info("Transport created: " + this.transport_.getName())
    }else {
      throw Error("CrossPageChannel: No suitable transport found!");
    }
  }
};
goog.net.xpc.CrossPageChannel.prototype.getTransportType = function() {
  return this.transport_.getType()
};
goog.net.xpc.CrossPageChannel.prototype.getTransportName = function() {
  return this.transport_.getName()
};
goog.net.xpc.CrossPageChannel.prototype.getPeerConfiguration = function() {
  var a = {};
  a[goog.net.xpc.CfgFields.CHANNEL_NAME] = this.name;
  a[goog.net.xpc.CfgFields.TRANSPORT] = this.cfg_[goog.net.xpc.CfgFields.TRANSPORT];
  this.cfg_[goog.net.xpc.CfgFields.LOCAL_RELAY_URI] && (a[goog.net.xpc.CfgFields.PEER_RELAY_URI] = this.cfg_[goog.net.xpc.CfgFields.LOCAL_RELAY_URI]);
  this.cfg_[goog.net.xpc.CfgFields.LOCAL_POLL_URI] && (a[goog.net.xpc.CfgFields.PEER_POLL_URI] = this.cfg_[goog.net.xpc.CfgFields.LOCAL_POLL_URI]);
  this.cfg_[goog.net.xpc.CfgFields.PEER_POLL_URI] && (a[goog.net.xpc.CfgFields.LOCAL_POLL_URI] = this.cfg_[goog.net.xpc.CfgFields.PEER_POLL_URI]);
  return a
};
goog.net.xpc.CrossPageChannel.prototype.createPeerIframe = function(a, b, c) {
  var d = this.cfg_[goog.net.xpc.CfgFields.IFRAME_ID];
  d || (d = this.cfg_[goog.net.xpc.CfgFields.IFRAME_ID] = "xpcpeer" + goog.net.xpc.getRandomString(4));
  var e = goog.dom.createElement("IFRAME");
  e.id = e.name = d;
  b ? b(e) : e.style.width = e.style.height = "100%";
  var f = this.cfg_[goog.net.xpc.CfgFields.PEER_URI];
  goog.isString(f) && (f = this.cfg_[goog.net.xpc.CfgFields.PEER_URI] = new goog.Uri(f));
  !1 !== c && f.setParameterValue("xpc", goog.json.serialize(this.getPeerConfiguration()));
  goog.userAgent.GECKO || goog.userAgent.WEBKIT ? (this.deferConnect_ = !0, window.setTimeout(goog.bind(function() {
    this.deferConnect_ = !1;
    a.appendChild(e);
    e.src = f.toString();
    goog.net.xpc.logger.info("peer iframe created (" + d + ")");
    this.connectDeferred_ && this.connect(this.connectCb_)
  }, this), 1)) : (e.src = f.toString(), a.appendChild(e), goog.net.xpc.logger.info("peer iframe created (" + d + ")"));
  return e
};
goog.net.xpc.CrossPageChannel.prototype.deferConnect_ = !1;
goog.net.xpc.CrossPageChannel.prototype.connectDeferred_ = !1;
goog.net.xpc.CrossPageChannel.prototype.connect = function(a) {
  this.connectCb_ = a || goog.nullFunction;
  if(this.deferConnect_) {
    goog.net.xpc.logger.info("connect() deferred"), this.connectDeferred_ = !0
  }else {
    goog.net.xpc.logger.info("connect()");
    if(this.cfg_[goog.net.xpc.CfgFields.IFRAME_ID]) {
      this.iframeElement_ = this.domHelper_.getElement(this.cfg_[goog.net.xpc.CfgFields.IFRAME_ID])
    }
    if(this.iframeElement_) {
      (a = this.iframeElement_.contentWindow) || (a = window.frames[this.cfg_[goog.net.xpc.CfgFields.IFRAME_ID]]), this.setPeerWindowObject(a)
    }
    if(!this.peerWindowObject_) {
      if(window == top) {
        throw Error("CrossPageChannel: Can't connect, peer window-object not set.");
      }
      this.setPeerWindowObject(window.parent)
    }
    this.createTransport_();
    this.transport_.connect()
  }
};
goog.net.xpc.CrossPageChannel.prototype.close = function() {
  if(this.isConnected()) {
    this.state_ = goog.net.xpc.ChannelStates.CLOSED, this.transport_.dispose(), this.transport_ = null, goog.net.xpc.logger.info('Channel "' + this.name + '" closed')
  }
};
goog.net.xpc.CrossPageChannel.prototype.notifyConnected_ = function() {
  if(!this.isConnected()) {
    this.state_ = goog.net.xpc.ChannelStates.CONNECTED, goog.net.xpc.logger.info('Channel "' + this.name + '" connected'), this.connectCb_()
  }
};
goog.net.xpc.CrossPageChannel.prototype.notifyTransportError_ = function() {
  goog.net.xpc.logger.info("Transport Error");
  this.close()
};
goog.net.xpc.CrossPageChannel.prototype.send = function(a, b) {
  this.isConnected() ? this.peerWindowObject_.closed ? (goog.net.xpc.logger.severe("Peer has disappeared."), this.close()) : (goog.isObject(b) && (b = goog.json.serialize(b)), this.transport_.send(this.escapeServiceName_(a), b)) : goog.net.xpc.logger.severe("Can't send. Channel not connected.")
};
goog.net.xpc.CrossPageChannel.prototype.deliver_ = function(a, b, c) {
  this.isMessageOriginAcceptable_(c) ? this.isDisposed() ? goog.net.xpc.logger.warning("CrossPageChannel::deliver_(): Disposed.") : !a || a == goog.net.xpc.TRANSPORT_SERVICE_ ? this.transport_.transportServiceHandler(b) : this.isConnected() ? this.deliver(this.unescapeServiceName_(a), b) : goog.net.xpc.logger.info("CrossPageChannel::deliver_(): Not connected.") : goog.net.xpc.logger.warning('Message received from unapproved origin "' + c + '" - rejected.')
};
goog.net.xpc.CrossPageChannel.prototype.escapeServiceName_ = function(a) {
  goog.net.xpc.CrossPageChannel.TRANSPORT_SERVICE_ESCAPE_RE_.test(a) && (a = "%" + a);
  return a.replace(/[%:|]/g, encodeURIComponent)
};
goog.net.xpc.CrossPageChannel.prototype.unescapeServiceName_ = function(a) {
  a = a.replace(/%[0-9a-f]{2}/gi, decodeURIComponent);
  return goog.net.xpc.CrossPageChannel.TRANSPORT_SERVICE_UNESCAPE_RE_.test(a) ? a.substring(1) : a
};
goog.net.xpc.CrossPageChannel.Role = {OUTER:0, INNER:1};
goog.net.xpc.CrossPageChannel.prototype.getRole = function() {
  return window.parent == this.peerWindowObject_ ? goog.net.xpc.CrossPageChannel.Role.INNER : goog.net.xpc.CrossPageChannel.Role.OUTER
};
goog.net.xpc.CrossPageChannel.prototype.isMessageOriginAcceptable_ = function(a) {
  var b = this.cfg_[goog.net.xpc.CfgFields.PEER_HOSTNAME];
  return goog.string.isEmptySafe(a) || goog.string.isEmptySafe(b) || a == this.cfg_[goog.net.xpc.CfgFields.PEER_HOSTNAME]
};
goog.net.xpc.CrossPageChannel.prototype.disposeInternal = function() {
  goog.net.xpc.CrossPageChannel.superClass_.disposeInternal.call(this);
  this.close();
  this.iframeElement_ = this.peerWindowObject_ = null;
  delete goog.net.xpc.channels_[this.name]
};
goog.net.xpc.CrossPageChannel.disposeAll_ = function() {
  for(var a in goog.net.xpc.channels_) {
    var b = goog.net.xpc.channels_[a];
    b && b.dispose()
  }
};
clojure.browser.net = {};
clojure.browser.net._STAR_timeout_STAR_ = 1E4;
clojure.browser.net.event_types = cljs.core.into.call(null, cljs.core.ObjMap.fromObject([], {}), cljs.core.map.call(null, function(a) {
  var b = cljs.core.nth.call(null, a, 0, null), a = cljs.core.nth.call(null, a, 1, null);
  return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null, b.toLowerCase()), a])
}, cljs.core.merge.call(null, cljs.core.js__GT_clj.call(null, goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = function() {
  var a = null;
  return function(a, c, d, e) {
    switch(arguments.length) {
      case 1:
        var f;
        if(cljs.core.truth_(cljs.core.truth_(a) ? a.clojure$browser$net$IConnection$connect : a)) {
          f = a.clojure$browser$net$IConnection$connect(a)
        }else {
          f = clojure.browser.net.connect[goog.typeOf.call(null, a)];
          if(!cljs.core.truth_(f) && (f = clojure.browser.net.connect._, !cljs.core.truth_(f))) {
            throw cljs.core.missing_protocol.call(null, "IConnection.connect", a);
          }
          f = f.call(null, a)
        }
        return f;
      case 2:
        if(cljs.core.truth_(cljs.core.truth_(a) ? a.clojure$browser$net$IConnection$connect : a)) {
          f = a.clojure$browser$net$IConnection$connect(a, c)
        }else {
          f = clojure.browser.net.connect[goog.typeOf.call(null, a)];
          if(!cljs.core.truth_(f) && (f = clojure.browser.net.connect._, !cljs.core.truth_(f))) {
            throw cljs.core.missing_protocol.call(null, "IConnection.connect", a);
          }
          f = f.call(null, a, c)
        }
        return f;
      case 3:
        if(cljs.core.truth_(cljs.core.truth_(a) ? a.clojure$browser$net$IConnection$connect : a)) {
          f = a.clojure$browser$net$IConnection$connect(a, c, d)
        }else {
          f = clojure.browser.net.connect[goog.typeOf.call(null, a)];
          if(!cljs.core.truth_(f) && (f = clojure.browser.net.connect._, !cljs.core.truth_(f))) {
            throw cljs.core.missing_protocol.call(null, "IConnection.connect", a);
          }
          f = f.call(null, a, c, d)
        }
        return f;
      case 4:
        if(cljs.core.truth_(cljs.core.truth_(a) ? a.clojure$browser$net$IConnection$connect : a)) {
          f = a.clojure$browser$net$IConnection$connect(a, c, d, e)
        }else {
          f = clojure.browser.net.connect[goog.typeOf.call(null, a)];
          if(!cljs.core.truth_(f) && (f = clojure.browser.net.connect._, !cljs.core.truth_(f))) {
            throw cljs.core.missing_protocol.call(null, "IConnection.connect", a);
          }
          f = f.call(null, a, c, d, e)
        }
        return f
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
clojure.browser.net.transmit = function() {
  var a = null;
  return function(a, c, d, e, f, g) {
    switch(arguments.length) {
      case 2:
        var h;
        if(cljs.core.truth_(cljs.core.truth_(a) ? a.clojure$browser$net$IConnection$transmit : a)) {
          h = a.clojure$browser$net$IConnection$transmit(a, c)
        }else {
          h = clojure.browser.net.transmit[goog.typeOf.call(null, a)];
          if(!cljs.core.truth_(h) && (h = clojure.browser.net.transmit._, !cljs.core.truth_(h))) {
            throw cljs.core.missing_protocol.call(null, "IConnection.transmit", a);
          }
          h = h.call(null, a, c)
        }
        return h;
      case 3:
        if(cljs.core.truth_(cljs.core.truth_(a) ? a.clojure$browser$net$IConnection$transmit : a)) {
          h = a.clojure$browser$net$IConnection$transmit(a, c, d)
        }else {
          h = clojure.browser.net.transmit[goog.typeOf.call(null, a)];
          if(!cljs.core.truth_(h) && (h = clojure.browser.net.transmit._, !cljs.core.truth_(h))) {
            throw cljs.core.missing_protocol.call(null, "IConnection.transmit", a);
          }
          h = h.call(null, a, c, d)
        }
        return h;
      case 4:
        if(cljs.core.truth_(cljs.core.truth_(a) ? a.clojure$browser$net$IConnection$transmit : a)) {
          h = a.clojure$browser$net$IConnection$transmit(a, c, d, e)
        }else {
          h = clojure.browser.net.transmit[goog.typeOf.call(null, a)];
          if(!cljs.core.truth_(h) && (h = clojure.browser.net.transmit._, !cljs.core.truth_(h))) {
            throw cljs.core.missing_protocol.call(null, "IConnection.transmit", a);
          }
          h = h.call(null, a, c, d, e)
        }
        return h;
      case 5:
        if(cljs.core.truth_(cljs.core.truth_(a) ? a.clojure$browser$net$IConnection$transmit : a)) {
          h = a.clojure$browser$net$IConnection$transmit(a, c, d, e, f)
        }else {
          h = clojure.browser.net.transmit[goog.typeOf.call(null, a)];
          if(!cljs.core.truth_(h) && (h = clojure.browser.net.transmit._, !cljs.core.truth_(h))) {
            throw cljs.core.missing_protocol.call(null, "IConnection.transmit", a);
          }
          h = h.call(null, a, c, d, e, f)
        }
        return h;
      case 6:
        if(cljs.core.truth_(cljs.core.truth_(a) ? a.clojure$browser$net$IConnection$transmit : a)) {
          h = a.clojure$browser$net$IConnection$transmit(a, c, d, e, f, g)
        }else {
          h = clojure.browser.net.transmit[goog.typeOf.call(null, a)];
          if(!cljs.core.truth_(h) && (h = clojure.browser.net.transmit._, !cljs.core.truth_(h))) {
            throw cljs.core.missing_protocol.call(null, "IConnection.transmit", a);
          }
          h = h.call(null, a, c, d, e, f, g)
        }
        return h
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
clojure.browser.net.close = function(a) {
  if(cljs.core.truth_(cljs.core.truth_(a) ? a.clojure$browser$net$IConnection$close : a)) {
    a = a.clojure$browser$net$IConnection$close(a)
  }else {
    var b;
    b = clojure.browser.net.close[goog.typeOf.call(null, a)];
    if(!cljs.core.truth_(b) && (b = clojure.browser.net.close._, !cljs.core.truth_(b))) {
      throw cljs.core.missing_protocol.call(null, "IConnection.close", a);
    }
    a = b.call(null, a)
  }
  return a
};
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = !0;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = function() {
  return cljs.core.into.call(null, cljs.core.ObjMap.fromObject([], {}), cljs.core.map.call(null, function(a) {
    var b = cljs.core.nth.call(null, a, 0, null), a = cljs.core.nth.call(null, a, 1, null);
    return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null, b.toLowerCase()), a])
  }, cljs.core.merge.call(null, cljs.core.js__GT_clj.call(null, goog.net.EventType))))
};
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = !0;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = function() {
  var a = null;
  return function(a, c, d, e, f, g) {
    switch(arguments.length) {
      case 2:
        return clojure.browser.net.transmit.call(null, a, c, "GET", null, null, clojure.browser.net._STAR_timeout_STAR_);
      case 3:
        return clojure.browser.net.transmit.call(null, a, c, d, null, null, clojure.browser.net._STAR_timeout_STAR_);
      case 4:
        return clojure.browser.net.transmit.call(null, a, c, d, e, null, clojure.browser.net._STAR_timeout_STAR_);
      case 5:
        return clojure.browser.net.transmit.call(null, a, c, d, e, f, clojure.browser.net._STAR_timeout_STAR_);
      case 6:
        return a.setTimeoutInterval(g), a.send(c, d, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null, cljs.core.ObjMap.fromObject([], {}), cljs.core.map.call(null, function(a) {
  var b = cljs.core.nth.call(null, a, 0, null), a = cljs.core.nth.call(null, a, 1, null);
  return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null, b.toLowerCase()), a])
}, cljs.core.js__GT_clj.call(null, goog.net.xpc.CfgFields)));
clojure.browser.net.xhr_connection = function() {
  return new goog.net.XhrIo
};
clojure.browser.net.ICrossPageChannel = {};
clojure.browser.net.register_service = function() {
  var a = null;
  return function(a, c, d, e) {
    switch(arguments.length) {
      case 3:
        var f;
        if(cljs.core.truth_(cljs.core.truth_(a) ? a.clojure$browser$net$ICrossPageChannel$register_service : a)) {
          f = a.clojure$browser$net$ICrossPageChannel$register_service(a, c, d)
        }else {
          f = clojure.browser.net.register_service[goog.typeOf.call(null, a)];
          if(!cljs.core.truth_(f) && (f = clojure.browser.net.register_service._, !cljs.core.truth_(f))) {
            throw cljs.core.missing_protocol.call(null, "ICrossPageChannel.register-service", a);
          }
          f = f.call(null, a, c, d)
        }
        return f;
      case 4:
        if(cljs.core.truth_(cljs.core.truth_(a) ? a.clojure$browser$net$ICrossPageChannel$register_service : a)) {
          f = a.clojure$browser$net$ICrossPageChannel$register_service(a, c, d, e)
        }else {
          f = clojure.browser.net.register_service[goog.typeOf.call(null, a)];
          if(!cljs.core.truth_(f) && (f = clojure.browser.net.register_service._, !cljs.core.truth_(f))) {
            throw cljs.core.missing_protocol.call(null, "ICrossPageChannel.register-service", a);
          }
          f = f.call(null, a, c, d, e)
        }
        return f
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = !0;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = function() {
  var a = null;
  return function(a, c, d, e) {
    switch(arguments.length) {
      case 1:
        return clojure.browser.net.connect.call(null, a, null);
      case 2:
        return a.connect(c);
      case 3:
        return clojure.browser.net.connect.call(null, a, c, d, document.body);
      case 4:
        return a.createPeerIframe(e, d), a.connect(c)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$transmit = function(a, b, c) {
  return a.send(cljs.core.name.call(null, b), c)
};
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$close = function(a) {
  return a.close(cljs.core.List.EMPTY)
};
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$ = !0;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service = function() {
  var a = null;
  return function(a, c, d, e) {
    switch(arguments.length) {
      case 3:
        return clojure.browser.net.register_service.call(null, a, c, d, !1);
      case 4:
        return a.registerService(cljs.core.name.call(null, c), d, e)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
clojure.browser.net.xpc_connection = function() {
  var a = null, b = function(a) {
    return new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null, function(a, b) {
      var c = cljs.core.nth.call(null, b, 0, null), g = cljs.core.nth.call(null, b, 1, null), c = cljs.core.get.call(null, clojure.browser.net.xpc_config_fields, c);
      return cljs.core.truth_(c) ? cljs.core.assoc.call(null, a, c, g) : a
    }, cljs.core.ObjMap.fromObject([], {}), a).strobj)
  };
  return function(a) {
    switch(arguments.length) {
      case 0:
        var d;
        d = (new goog.Uri(window.location.href)).getParameterValue("xpc");
        d = cljs.core.truth_(d) ? new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null, d)) : null;
        return d;
      case 1:
        return b.call(this, a)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
clojure.browser.repl = {};
clojure.browser.repl.xpc_connection = cljs.core.atom.call(null, null);
clojure.browser.repl.repl_print = function(a) {
  var b = cljs.core.deref.call(null, clojure.browser.repl.xpc_connection);
  return cljs.core.truth_(b) ? clojure.browser.net.transmit.call(null, b, "\ufdd0'print", cljs.core.pr_str.call(null, a)) : null
};
clojure.browser.repl.evaluate_javascript = function(a, b) {
  var c = function() {
    try {
      return cljs.core.ObjMap.fromObject(["\ufdd0'status", "\ufdd0'value"], {"\ufdd0'status":"\ufdd0'success", "\ufdd0'value":cljs.core.str.call(null, eval(b))})
    }catch(a) {
      if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null, Error, a))) {
        return cljs.core.ObjMap.fromObject(["\ufdd0'status", "\ufdd0'value", "\ufdd0'stacktrace"], {"\ufdd0'status":"\ufdd0'exception", "\ufdd0'value":cljs.core.pr_str.call(null, a), "\ufdd0'stacktrace":cljs.core.truth_(a.hasOwnProperty("stack")) ? a.stack : "No stacktrace available."})
      }
      if(cljs.core.truth_("\ufdd0'else")) {
        throw a;
      }
      return null
    }
  }();
  return cljs.core.pr_str.call(null, c)
};
clojure.browser.repl.send_result = function(a, b, c) {
  return clojure.browser.net.transmit.call(null, a, b, "POST", c, null, 0)
};
clojure.browser.repl.send_print = function() {
  var a = null, b = function(b, d, e) {
    var f = clojure.browser.net.xhr_connection.call(null);
    clojure.browser.event.listen.call(null, f, "\ufdd0'error", function() {
      return cljs.core.truth_(10 > e) ? a.call(null, b, d, e + 1) : console.log(cljs.core.str.call(null, "Could not send ", d, " after ", e, " attempts."))
    });
    return clojure.browser.net.transmit.call(null, f, b, "POST", d, null, 0)
  };
  return a = function(c, d, e) {
    switch(arguments.length) {
      case 2:
        return a.call(null, c, d, 0);
      case 3:
        return b.call(this, c, d, e)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
clojure.browser.repl.order = cljs.core.atom.call(null, 0);
clojure.browser.repl.wrap_message = function(a, b) {
  return cljs.core.pr_str.call(null, cljs.core.ObjMap.fromObject(["\ufdd0'type", "\ufdd0'content", "\ufdd0'order"], {"\ufdd0'type":a, "\ufdd0'content":b, "\ufdd0'order":cljs.core.swap_BANG_.call(null, clojure.browser.repl.order, cljs.core.inc)}))
};
clojure.browser.repl.start_evaluator = function(a) {
  var b = clojure.browser.net.xpc_connection.call(null);
  if(cljs.core.truth_(b)) {
    var c = clojure.browser.net.xhr_connection.call(null);
    clojure.browser.event.listen.call(null, c, "\ufdd0'success", function(a) {
      return clojure.browser.net.transmit.call(null, b, "\ufdd0'evaluate-javascript", a.currentTarget.getResponseText(cljs.core.List.EMPTY))
    });
    clojure.browser.net.register_service.call(null, b, "\ufdd0'send-result", function(b) {
      return clojure.browser.repl.send_result.call(null, c, a, clojure.browser.repl.wrap_message.call(null, "\ufdd0'result", b))
    });
    clojure.browser.net.register_service.call(null, b, "\ufdd0'print", function(b) {
      return clojure.browser.repl.send_print.call(null, a, clojure.browser.repl.wrap_message.call(null, "\ufdd0'print", b))
    });
    clojure.browser.net.connect.call(null, b, cljs.core.constantly.call(null, null));
    return setTimeout.call(null, function() {
      return clojure.browser.repl.send_result.call(null, c, a, clojure.browser.repl.wrap_message.call(null, "\ufdd0'ready", "ready"))
    }, 50)
  }
  return alert.call(null, "No 'xpc' param provided to child iframe.")
};
clojure.browser.repl.connect = function(a) {
  var b = clojure.browser.net.xpc_connection.call(null, cljs.core.ObjMap.fromObject(["\ufdd0'peer_uri"], {"\ufdd0'peer_uri":a}));
  cljs.core.swap_BANG_.call(null, clojure.browser.repl.xpc_connection, cljs.core.constantly.call(null, b));
  clojure.browser.net.register_service.call(null, b, "\ufdd0'evaluate-javascript", function(a) {
    return clojure.browser.net.transmit.call(null, b, "\ufdd0'send-result", clojure.browser.repl.evaluate_javascript.call(null, b, a))
  });
  return clojure.browser.net.connect.call(null, b, cljs.core.constantly.call(null, null), function(a) {
    return a.style.display = "none"
  })
};
var noir = {cljs:{}};
noir.cljs.client = {};
noir.cljs.client.watcher = {};
noir.cljs.client.watcher.wait = function(a, b) {
  return setTimeout(b, a)
};
noir.cljs.client.watcher.$body = jayq.core.$.call(null, "\ufdd0'body");
noir.cljs.client.watcher.callbacks = cljs.core.atom.call(null, cljs.core.PersistentVector.fromArray([]));
noir.cljs.client.watcher.cur_mode = cljs.core.atom.call(null, "\ufdd0'simple");
noir.cljs.client.watcher.poll = function poll() {
  return noir.cljs.client.watcher.wait.call(null, 100, function() {
    return fetch.core.xhr.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'get", "/noir-cljs-get-updated"]), cljs.core.ObjMap.fromObject([], {}), function(b) {
      if(cljs.core.truth_(cljs.core.truth_(b) ? cljs.core.not_EQ_.call(null, b, "") : b)) {
        eval.call(null, b);
        var c = cljs.core.seq.call(null, cljs.core.deref.call(null, noir.cljs.client.watcher.callbacks));
        if(cljs.core.truth_(c)) {
          for(var d = cljs.core.first.call(null, c);;) {
            if(d.call(null, b), d = cljs.core.next.call(null, c), cljs.core.truth_(d)) {
              c = d, d = cljs.core.first.call(null, c)
            }else {
              break
            }
          }
        }
      }
      return cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.deref.call(null, noir.cljs.client.watcher.cur_mode), "\ufdd0'interactive")) ? poll.call(null) : null
    })
  })
};
noir.cljs.client.watcher.on_update = function(a) {
  return cljs.core.swap_BANG_.call(null, noir.cljs.client.watcher.callbacks, cljs.core.conj, a)
};
noir.cljs.client.watcher.set_mode = function(a) {
  return fetch.core.xhr.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'post", "/noir-cljs-mode"]), cljs.core.ObjMap.fromObject(["\ufdd0'm"], {"\ufdd0'm":a}), function() {
    cljs.core.reset_BANG_.call(null, noir.cljs.client.watcher.cur_mode, a);
    return cljs.core.truth_(cljs.core._EQ_.call(null, a, "\ufdd0'interactive")) ? noir.cljs.client.watcher.poll.call(null) : null
  })
};
noir.cljs.client.watcher.get_mode = function(a) {
  return fetch.core.xhr.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'get", "/noir-cljs-mode"]), cljs.core.ObjMap.fromObject([], {}), function(b) {
    return a.call(null, cljs.reader.read_string.call(null, b))
  })
};
noir.cljs.client.watcher.buttons = cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\ufdd0'mode", "\ufdd0'label"], {"\ufdd0'mode":"\ufdd0'advanced", "\ufdd0'label":"A"}), cljs.core.ObjMap.fromObject(["\ufdd0'mode", "\ufdd0'label"], {"\ufdd0'mode":"\ufdd0'simple", "\ufdd0'label":"S"}), cljs.core.ObjMap.fromObject(["\ufdd0'mode", "\ufdd0'label"], {"\ufdd0'mode":"\ufdd0'interactive", "\ufdd0'label":"I"})]);
var group__6197__auto____10267 = cljs.core.swap_BANG_.call(null, crate.core.group_id, cljs.core.inc);
noir.cljs.client.watcher.selector_button = function() {
  var a = function(a, b) {
    var e = cljs.core.truth_(cljs.core.seq_QMARK_.call(null, a)) ? cljs.core.apply.call(null, cljs.core.hash_map, a) : a, f = cljs.core.get.call(null, e, "\ufdd0'label"), g = cljs.core.get.call(null, e, "\ufdd0'mode"), h = cljs.core.nth.call(null, b, 0, null), e = crate.core.html.call(null, function() {
      var a = cljs.core.str.call(null, "noir-cljs-button ", cljs.core.truth_(cljs.core._EQ_.call(null, g, h)) ? "active" : null);
      return cljs.core.PersistentVector.fromArray(["\ufdd0'li", crate.tags.link_to.call(null, cljs.core.ObjMap.fromObject(["\ufdd0'class", "\ufdd0'data-mode"], {"\ufdd0'class":a, "\ufdd0'data-mode":g}), "#", f)])
    }());
    e.setAttribute("crateGroup", group__6197__auto____10267);
    return e
  }, b = function(b, d) {
    var e = null;
    goog.isDef(d) && (e = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0));
    return a.call(this, b, e)
  };
  b.cljs$lang$maxFixedArity = 1;
  b.cljs$lang$applyTo = function(b) {
    var d = cljs.core.first(b), b = cljs.core.rest(b);
    return a.call(this, d, b)
  };
  return b
}();
noir.cljs.client.watcher.selector_button.prototype._crateGroup = group__6197__auto____10267;
var group__6197__auto____10281 = cljs.core.swap_BANG_.call(null, crate.core.group_id, cljs.core.inc);
noir.cljs.client.watcher.selector = function(a) {
  var b = crate.core.html.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'div", cljs.core.PersistentVector.fromArray(["\ufdd0'style", cljs.core.ObjMap.fromObject(["\ufdd0'type"], {"\ufdd0'type":"text/css"}), "#noir-cljs-selector {position:fixed; bottom:15px; right:30px; list-style:none; }\n     #noir-cljs-selector li {}\n     #noir-cljs-selector a { float:left; display:inline; text-decoration:none; line-height:1em; height:19px; padding:5px 10px; background:#77c; width:10px; border:1px solid #55c; text-align:center; border-radius:5px; margin-bottom:8px; color:#449; }\n     #noir-cljs-selector a:hover {background:#99f;}\n     #noir-cljs-selector .active {background:#7cc; border-color:#599;} "]), 
  cljs.core.PersistentVector.fromArray(["\ufdd0'ul#noir-cljs-selector", cljs.core.map.call(null, function(b) {
    return noir.cljs.client.watcher.selector_button.call(null, b, a)
  }, noir.cljs.client.watcher.buttons)])]));
  b.setAttribute("crateGroup", group__6197__auto____10281);
  return b
};
noir.cljs.client.watcher.selector.prototype._crateGroup = group__6197__auto____10281;
jayq.core.delegate.call(null, noir.cljs.client.watcher.$body, "\ufdd0'.noir-cljs-button", "\ufdd0'click", function(a) {
  a.preventDefault();
  jayq.core.remove_class.call(null, jayq.core.find.call(null, jayq.core.$.call(null, noir.cljs.client.watcher.selector), "\ufdd0'.noir-cljs-button"), "\ufdd0'active");
  var a = jayq.core.$.call(null, this), b = jayq.core.data.call(null, a, "\ufdd0'mode");
  jayq.core.add_class.call(null, a, "\ufdd0'active");
  return noir.cljs.client.watcher.set_mode.call(null, b)
});
noir.cljs.client.watcher.init = function() {
  return noir.cljs.client.watcher.get_mode.call(null, function(a) {
    return jayq.core.append.call(null, noir.cljs.client.watcher.$body, noir.cljs.client.watcher.selector.call(null, a))
  })
};
pos.client.core = {};
jayq.core.document_ready.call(null, function() {
  return pos.client.controller.init.call(null)
});
