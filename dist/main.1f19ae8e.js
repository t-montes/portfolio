// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel/src/builtins/bundle-url.js"}],"scss/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\img\\header.jpg":[["header.7aab4a63.jpg","img/header.jpg"],"img/header.jpg"],"_css_loader":"../node_modules/parcel/src/builtins/css-loader.js"}],"projects.json":[function(require,module,exports) {
module.exports = [{
  "name": "Cov-Info Bogotá",
  "description": "",
  "subject": "Introduction to Systems Engineering",
  "release-date": "Jun, 2020",
  "authors": ["Tony Montes", "Brian Rivera", "Luisa Fuentes", "Daniel Sarmiento"],
  "technologies": ["Python", "Flask", "HTML, CSS, JS", "App Inventor", "Google Firebase"],
  "tags": ["COVID-19", "Bogotá", "Mobile", "App"],
  "links": {
    "Github": "https://github.com/t-montes/Cov-Info-Bogota"
  },
  "icon": "",
  "media": []
}, {
  "name": "PensuManager",
  "description": "",
  "subject": "Personal",
  "release-date": "Aug, 2020",
  "authors": ["Tony Montes"],
  "technologies": ["Python", "Tkinter"],
  "tags": ["Pensum Planning", "Desktop App", "CSV"],
  "links": {
    "Github": "https://github.com/t-montes/PensuManager"
  },
  "icon": "",
  "media": []
}, {
  "name": "Frogger",
  "description": "",
  "subject": "Electronic Digital Systems",
  "release-date": "Jun, 2021",
  "authors": ["Tony Montes", "Alejandro Pasachoa", "Mateo Ortegon"],
  "technologies": ["Verilog", "Quartus Prime", "ModelSim"],
  "tags": ["Frogger Game", "FPGA"],
  "links": {
    "Github": "https://github.com/t-montes/FPGA-Frogger"
  },
  "icon": "",
  "media": []
}, {
  "name": "Med4Pet",
  "description": "",
  "subject": "Sotfware Development",
  "release-date": "Dec, 2021",
  "authors": ["Tony Montes", "Luccas Rojas", "Shadith Perez", "Daniel Villar", "Gabriela Cagua", "Carlos Marin"],
  "technologies": ["Java", "Spring", "HTML, CSS, JS", "Angular", "TypeScript", "H2 Database"],
  "tags": ["API", "Web Page"],
  "links": {
    "Github Backend": "https://github.com/t-montes/DSW-Med4Pet_Back",
    "Github Frontend": "https://github.com/t-montes/DSW-Med4Pet_Front"
  },
  "icon": "",
  "media": []
}, {
  "name": "Vamo'",
  "description": "",
  "subject": "Design and Innovation of IT Products",
  "release-date": "Dec, 2022",
  "authors": ["Tony Montes", "Brian Rivera", "Shadith Perez", "Daniel Bernal", "Obed Cabanzo"],
  "technologies": ["TypeScript", "JSX", "React", "NestJS", "PostgreSQL", "HTML, CSS, JS", "Figma"],
  "tags": ["API", "Mobile", "App"],
  "links": {
    "Video Pitch": "https://www.youtube.com/watch?v=wKsywb-x6aE",
    "Video Prototipo": "https://youtu.be/RqD0B-SU5U8?t=69"
  },
  "icon": "",
  "media": []
}, {
  "name": "Avanzo",
  "description": "",
  "subject": "Software Architecture",
  "release-date": "Dec, 2022",
  "authors": ["Tony Montes", "Luccas Rojas", "Brian Rivera", "Thais Tamaio"],
  "technologies": ["Python", "JavaScript", "Django", "PostgreSQL", "Auth0", "NestJS", "MongoDB"],
  "tags": ["API", "Web Page", "Authentication", "SQL", "NoSQL"],
  "links": {
    "Github Backend Django": "https://github.com/t-montes/ArquiSoft-BackDjango",
    "Github Backend Nestjs": "https://github.com/t-montes/ArquiSoft-BackNestJS"
  },
  "icon": "",
  "media": []
}, {
  "name": "Chocolatera",
  "description": "",
  "subject": "Electronic Instrumentation",
  "release-date": "Jun, 2023",
  "authors": ["Tony Montes", "Julian Parra", "Fernando Álvarez", "Santiago Pardo"],
  "technologies": ["Arduino", "C++"],
  "tags": ["Precision", "Sensorics", "Automation"],
  "links": {
    "Github": "https://github.com/t-montes/Chocolatera-Instrumentacion"
  },
  "icon": "",
  "media": []
}, {
  "name": "Robotics",
  "description": "",
  "subject": "Robotics",
  "release-date": "Jun, 2023",
  "authors": ["Tony Montes", "Sebastian Guerrero", "Fernanda Tarquino", "Satiago Rueda"],
  "technologies": ["Python", "C++", "ROS", "Arduino"],
  "tags": ["Automatic Navigation", "Automatic Manipulation", "Computer Vision", "Localization", "Path Planning", "Mapping"],
  "links": {
    "Github": "https://github.com/orgs/Bogota-Dynamics/repositories"
  },
  "icon": "",
  "media": []
}, {
  "name": "Film Feedback",
  "description": "",
  "subject": "Business Intelligence",
  "release-date": "May, 2023",
  "authors": ["Tony Montes", "Luccas Rojas", "Brian Rivera"],
  "technologies": ["Python", "SciKit-Learn", "Pandas", "Django"],
  "tags": ["Machine Learning", "Logistic Regression", "Data Analysis", "Data Visualization", "API", "Web Page"],
  "links": {
    "Github": "https://github.com/t-montes/FilmFeedback"
  },
  "icon": "FilmFeedback-icon.png",
  "media": ["https://drive.google.com/uc?export=view&id=1V4yqmLDgxXp_oHRHXgETqWwURbwdm0s1", "https://drive.google.com/uc?export=view&id=1tMhzrYWqRoewF-bA62HQuGSpU6HKil3S", "https://drive.google.com/uc?export=view&id=1HypqkbKjtl44qQblkJKdgCuZrdam05YL"]
}];
},{}],"main.js":[function(require,module,exports) {
"use strict";

require("./scss/main.scss");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

console.log('a');
console.log(images);
console.log('b');
/* NOTE: To use a new image into JSON, first make it appear at the web page to 
    be rendered in 'dist' folder. Then look for the image in the 'dist' folder
    and copy the name; finally use that name onto JSON. */

var projects = require('./projects.json');

var P = document.getElementById('projects');

var _iterator = _createForOfIteratorHelper(projects),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var project = _step.value;
    P.innerHTML = P.innerHTML + "\n    <div class=\"row project\">\n        <div class=\"work__item\">\n            <h3 class=\"heading-tertiary\">".concat(project.name, "</h3>\n            <img src=\"").concat(project.icon, "\" alt=\"").concat(project.name, "\" class=\"work__img\" />\n            <p class=\"work__description\">\n                ").concat(project.description, "\n            </p>\n        </div>\n    </div>\n    ");
  }
  /*ps.innerHTML = ps.innerHTML + `
  <div class="row">
      <div class="craft__item">
          <img src="/browser-16.fcfd00a5.svg" alt="Browser" class="craft__img" />
          <h3 class="heading-tertiary">Front-end</h3>
          <p class="craft__description">
              HTML, CSS, Vanilla JS, Bootstrap
              <br />
              <b>Mobile:</b> Flutter, React Native
          </p>
      </div>
  
      <div class="craft__item hack"></div>
  
      <div class="craft__item">
          <img src="/browser-26.c66fe73d.svg" alt="Server" class="craft__img" />
          <h3 class="heading-tertiary">Back-end</h3>
          <p class="craft__description">
              NodeJS, Spring, Django, Flask, NestJS, Express
              <br />
              <b>DB:</b> PostgreSQL, MongoDB
              <br />
              <b>Cloud:</b> AWS, GCP, Azure
              <br />
              <b>Robotics:</b> ROS
          </p>
      </div>
  </div>
  `*/

} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
},{"./scss/main.scss":"scss/main.scss","./projects.json":"projects.json"}],"../node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62031" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map