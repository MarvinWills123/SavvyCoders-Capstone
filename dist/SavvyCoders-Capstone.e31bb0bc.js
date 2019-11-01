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
})({"components/Footer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  return "\n<footer>\n<nav>\n    <ul>\n        <li><a href=\"/\" data-navigo>Home</a></li> \n        <li><a href=\"About\" data-navigo>About</a></li>\n        <li><a href=\"ContactUs\" data-navigo>Contact Us</a></li>\n        <li><a href=\"Gallery\" data-navigo>Gallery</a></li>\n     </ul>\n    </nav>\n<p>&copy;2019 MarvinInc &bullet;All Rights Reserved </p>\n</footer>\n";
};

exports.default = _default;
},{}],"components/Header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  return "<header>\n<h1>SQUARED AWAY</h1>\n</header>\n";
};

exports.default = _default;
},{}],"components/Main.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(st) {
  return " <main>\n".concat(st, "\n</main>");
};

exports.default = _default;
},{}],"components/Nav.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  return "<nav>\n<span class=\"fas fa-bars is-hidden--desktop\"></span> \n<ul class=\"is-hidden--mobile is-hidden--tablet is-shown--desktop\">\n    <li><a href=\"/\" data-navigo>Home</a></li> \n    <li><a href=\"About\" data-navigo>About</a></li>\n    <li><a href=\"ContactUs\" data-navigo>Contact Us</a></li>\n    <li><a href=\"Gallery\" data-navigo>Gallery</a></li>\n</ul>\n</nav>";
};

exports.default = _default;
},{}],"components/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Footer", {
  enumerable: true,
  get: function () {
    return _Footer.default;
  }
});
Object.defineProperty(exports, "Header", {
  enumerable: true,
  get: function () {
    return _Header.default;
  }
});
Object.defineProperty(exports, "Main", {
  enumerable: true,
  get: function () {
    return _Main.default;
  }
});
Object.defineProperty(exports, "Nav", {
  enumerable: true,
  get: function () {
    return _Nav.default;
  }
});

var _Footer = _interopRequireDefault(require("./Footer"));

var _Header = _interopRequireDefault(require("./Header"));

var _Main = _interopRequireDefault(require("./Main"));

var _Nav = _interopRequireDefault(require("./Nav"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./Footer":"components/Footer.js","./Header":"components/Header.js","./Main":"components/Main.js","./Nav":"components/Nav.js"}],"store/About.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  heading: 'About SQUARE AWAY',
  main: "<section class=\"aboutUS-container\">\n        <h2>SQUARED AWAY</h2>\n        <p> Squared Away was started to help both active-duty veterans and veterans transitioning \n            back into the civilian world. Our personal experiences with issues that veterans deal with daily\n        gave us the encouragement to build a resource that can be easily accessed and used efficiently. \n        </p>\n    </section>"
};
exports.default = _default;
},{}],"store/ContactUs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  heading: "Contact Us",
  main: "<form>\n<div>\n<h4>First Name</h4>\n<input type=\"text\" name=\"fname\" id=\"first_name\"> \n<h4>Last Name</h4>\n<input type=\"text\" name=\"lname\" id=\"last_name\">\n<h4>Email Address</h4>\n<input type=\"email\" name=\"email\" id=\"email\">\n</form>\n<h4>Enter massage here</h4>\n<textarea name=\"msg\"id=\"msg\" cols=\"30\" rows=\"10\"></textarea>\n<input type=\"submit\" value=\"Submit\">\n</div>\n</form>"
};
exports.default = _default;
},{}],"store/CreateAnAccount.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  heading: 'Create An Account',
  main: " <form>\n    <div>\n        <h4>First Name</h4>\n        <input type=\"text\" name=\"fname\" id=\"first_name\">\n\n        <h4>Last Name</h4>\n        <input type=\"text\" name=\"lname\" id=\"last_name\">\n    \n        <h4>Email Address</h4>\n        <input type=\"email\" name=\"email\" id=\"email\">\n    \n        <h4>Username</h4>\n        <input type=\"text\" name=\"username\" id=\"username\">\n    \n        <h4>Password</h4>\n        <input type=\"password\" name=\"password\" id=\"password\">\n    \n        <h4>Confirm Password</h4>\n        <input type=\"password\" name=\"password_confirm\" id=\"password_confirm\">\n    </div>\n</form>\n<br>\n<button class=\"create-account-btn\"><a href=\"SquaredAway\" data-navigo>Create Your Account</a></button> \n    "
};
exports.default = _default;
},{}],"store/EducationBenefits.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  heading: 'Education Benefits',
  main: ""
};
exports.default = _default;
},{}],"store/Home.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  heading: 'SQUARED AWAY',
  main: "<div class= \"flex-container--desktop\">\n<section>\n<ul>\n<h2> Need help with Education Benefits? </h2>\n<p>Veterans both new to their career and retired are in need of resources to help them thrive in the civilian world. \nAt Squared Away we do our very best to provide easy access to those resources through research and dedication to serving those who fight for our freedom.   \n</p>\n<button class=\"learn-more-btn\"><a href=\"EducationBenefits\" data-navigo>Learn More</a></button>\n</section>\n</section>\n<section>\n<ul>\n<h2> Interested in Volunteering?</h2>\n<p>Squared Away can connect you with various veteran support organizations. So that you can give back to our country's \nveterans by training service dogs, building houses for the homeless, or assisting a vet to their VA appointments. You may even \nwant to give one-on-one mentorship to veterans reentering the civilian workforce by participating in mock interviews or resume editing sessions.\n</p>\n<button class=\"learn-more-btn\"><a href=\"Volunteer\" data-navigo>Learn More</a></button>\n</section>\n<section>\n<ul>\n<h2>Build your Resume here.</h2>\n <p>Square Away allows our users to build a Resume free of charge. Once your resume is complete\nfeel free to download for personal use, or upload it to your profile with any of the various job seeking organizations.\n(e.g. LinkedIn, Monster, or Glassdoor.)  \n </p> \n<button class=\"learn-more-btn\"><a href=\"ResumeBuilder\" data-navigo>Learn More</a></button>\n</ul>\n</section>\n</div>\n<div> \n <button class=\"sign-in-btn\"><a href=\"SignIn\" data-navigo>Sign In</a></button>\n <br>\n<button class=\"create-account-btn\"><a href=\"CreateAnAccount\" data-navigo>Create An Account</a></button>\n</div>"
};
exports.default = _default;
},{}],"store/Gallery.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  heading: 'Gallery',
  main: "  <section>\n<div class = \"slideshow-container\">\n<div class = \"slideshow-slide\">\n<img src =\"https:images.pexels.com/photos/1661818/pexels-photo-1661818.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260\"id=\"lastClone\" alt=\"slideshowImages\">\n<img src=\"https:images.pexels.com/photos/1564432/pexels-photo-1564432.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260\" alt=\"slideshowImages\">\n<img src= \"https:images.pexels.com/photos/794576/pexels-photo-794576.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260\"alt=\"slideshowImages\">\n<img src=\"https:images.pexels.com/photos/1582492/pexels-photo-1582492.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260\" alt=\"slideshowImages\">\n<img src=\"https:images.pexels.com/photos/1340504/pexels-photo-1340504.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260\" alt=\"slideshowImages\">\n<img src=\"https:images.pexels.com/photos/54098/us-army-soldiers-army-men-54098.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260\"alt=\"slideshowImages\">\n<img src =\"https:images.pexels.com/photos/1661818/pexels-photo-1661818.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260\"alt=\"slideshowImages\">\n<img src =\"https:images.pexels.com/photos/1564432/pexels-photo-1564432.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260\"id=\"firstClone\" alt=\"slideshowImages\">\n</div>\n</div>\n<button id= \"prevBtn\" class=\"fas fa-chevron-left\">Prev</button>\n<button id= \"nextBtn\" class=\"fas fa-chevron-right\">Next</button>\n</section>"
};
exports.default = _default;
},{}],"store/SignIn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  heading: 'Sign In',
  main: "<div> \n            \n<h4>Username<h4><input id=\"inputInfo\">\n\n<h4>Password<h4><input id=\"inputInfo\">\n\n<div>\n<br>\n\n\n<button class=\"sign-in-btn\"><a href=\"SquaredAway\" data-navigo>Sign In<a><button> \n<br>\n<button class=\"create-account-btn\"><a href=\"CreateAnAccount\" data-navigo>Create An Account<a><button>\n<br>\n<br>\n<a href= \"Forgot PasswordUsername\" data-navigo> Forgot PasswordUsername<a>\n"
};
exports.default = _default;
},{}],"store/SquaredAway.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  heading: 'SQUARED AWAY',
  main: "<section>\n <button class=\"navBtn\"><a href=\"EducationBenefits\" data-navigo>Education Benefits</a></button>\n <button class=\"navBtn\"><a href=\"Volunteer\" data-navigo>Volunteer</a></button>\n <button class=\"navBtn\"><a href=\"ResumeBuilder\" data-navigo>Resume Builder</a></button>\n <button class=\"navBtn\"><a href= \"\" data-navigo>Gatherings</a></button>\n</section>"
};
exports.default = _default;
},{}],"store/Volunteer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  heading: 'Volunteer',
  main: "<section>\n<h1>Train a Service Dog</h1>\n<p>Got Your Six</p>\n<section> Disabled Veterans</section>\n<p>Build Make Renovations to Houses</p>\n<p>Assist a Vet to a Medical Appointment</p>\n<section>Mentorship</section>\n<p>Mock interview</p>\n<p>Resume Editing</p>\n<p></p>\n<p></p>\n<section>\n<button></button>"
};
exports.default = _default;
},{}],"store/ResumeBuilder.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  heading: 'Resume Builder',
  main: " <section class=\"form-container\">\n    <form>\n            <div>\n                <h4>Full Name</h4>\n                <input type=\"text\" name=\"fullName\" id=\"full_name\">\n            \n                <h4>Email Address</h4>\n                <input type=\"email\" name=\"email\" id=\"email\">\n            \n                <h4>Phone Number</h4>\n                <input type=\"phone\" name=\"phoneNumber\" id=\"tel\">\n            \n                <h4>Address</h4>\n                <input type=\"number,text\" name=\"address\" id=\"address_\">\n            \n                <h4>City,State, and Zipcode</h4>\n                <input type=\"text, number\" name=\"citySateZipcode\" id=\"cSZ\">\n\n                <h4>Profile</h4>\n                <textarea msg=\"text\" rows=\"40\" cols=\"40\"></textarea>\n            </div>\n    </form>\n</section>\n<button class=\"continueBtn fas-fa-arrow-circle-right\"><a href=\"ResumeBuildercon\" data-navigo>Continue</a></button"
};
exports.default = _default;
},{}],"store/ResumeBuilderCon.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  heading: 'Resume Builder Continued..',
  main: "<section class=\"form-container\">\n    <form>\n   <div>\n   <h2>Job Experience</h2>\n   <br>\n   <h4>Job Title</h4>\n   <input>\n   <h4>Company Name</h4>\n   <input>\n   <h4>City, State, and Zipcode</h4>\n   <input>\n   <h4>Duration of Employment</h4>\n   <input>\n   <h4>Duties and Responsibilities</h4>\n   <textarea type=\"text\" cols=\"50\" rows=\"30\"></textarea>\n</div>\n</form>\n</section>\n   <button class=\"continueBtn fas fa-arrow-circle-right\"><a href=\"ResumeBuildercon2\" data-navigo>Continue</a></button"
};
exports.default = _default;
},{}],"store/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "About", {
  enumerable: true,
  get: function () {
    return _About.default;
  }
});
Object.defineProperty(exports, "ContactUs", {
  enumerable: true,
  get: function () {
    return _ContactUs.default;
  }
});
Object.defineProperty(exports, "CreateAnAccount", {
  enumerable: true,
  get: function () {
    return _CreateAnAccount.default;
  }
});
Object.defineProperty(exports, "EducationBenefits", {
  enumerable: true,
  get: function () {
    return _EducationBenefits.default;
  }
});
Object.defineProperty(exports, "Home", {
  enumerable: true,
  get: function () {
    return _Home.default;
  }
});
Object.defineProperty(exports, "Gallery", {
  enumerable: true,
  get: function () {
    return _Gallery.default;
  }
});
Object.defineProperty(exports, "SignIn", {
  enumerable: true,
  get: function () {
    return _SignIn.default;
  }
});
Object.defineProperty(exports, "SquaredAway", {
  enumerable: true,
  get: function () {
    return _SquaredAway.default;
  }
});
Object.defineProperty(exports, "Volunteer", {
  enumerable: true,
  get: function () {
    return _Volunteer.default;
  }
});
Object.defineProperty(exports, "ResumeBuilder", {
  enumerable: true,
  get: function () {
    return _ResumeBuilder.default;
  }
});
Object.defineProperty(exports, "ResumeBuilderCon", {
  enumerable: true,
  get: function () {
    return _ResumeBuilderCon.default;
  }
});
Object.defineProperty(exports, "ResumeBuilderCon2", {
  enumerable: true,
  get: function () {
    return _ResumeBuilderCon.default;
  }
});

var _About = _interopRequireDefault(require("./About"));

var _ContactUs = _interopRequireDefault(require("./ContactUs"));

var _CreateAnAccount = _interopRequireDefault(require("./CreateAnAccount"));

var _EducationBenefits = _interopRequireDefault(require("./EducationBenefits"));

var _Home = _interopRequireDefault(require("./Home"));

var _Gallery = _interopRequireDefault(require("./Gallery"));

var _SignIn = _interopRequireDefault(require("./SignIn"));

var _SquaredAway = _interopRequireDefault(require("./SquaredAway"));

var _Volunteer = _interopRequireDefault(require("./Volunteer"));

var _ResumeBuilder = _interopRequireDefault(require("./ResumeBuilder"));

var _ResumeBuilderCon = _interopRequireDefault(require("./ResumeBuilderCon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./About":"store/About.js","./ContactUs":"store/ContactUs.js","./CreateAnAccount":"store/CreateAnAccount.js","./EducationBenefits":"store/EducationBenefits.js","./Home":"store/Home.js","./Gallery":"store/Gallery.js","./SignIn":"store/SignIn.js","./SquaredAway":"store/SquaredAway.js","./Volunteer":"store/Volunteer.js","./ResumeBuilder":"store/ResumeBuilder.js","./ResumeBuilderCon":"store/ResumeBuilderCon.js"}],"library/slideshow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  var slideshowSlide = document.querySelector(".slideshow-slide");
  var slideshowImages = document.querySelectorAll(".slideshow-slide img"); //Buttons

  var prevBtn = document.querySelector('#prevBtn');
  var nextBtn = document.querySelector('#nextBtn'); //Counter

  var counter = 1;
  var size = slideshowImages[0];
  slideshowSlide.style.transform = 'translateX(' + -size * counter + 'px)'; //Button Listener

  nextBtn.addEventListener('click', function () {
    if (counter >= slideshowImages.length - 1) return;
    slideshowSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slideshowSlide.style.transform = 'translateX(' + -size * counter + 'px)';
  });
  prevBtn.addEventListener('click', function () {
    if (counter <= 0) return;
    slideshowSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slideshowSlide.style.transform = 'translateX(' + -size * counter + 'px)';
  });
  slideshowSlide.addEventListener('transitionEnd', function () {
    if (slideshowImages[counter].id === 'lastClone') {
      slideshowSlide.style.transition = "none";
      counter = slideshowImages.length - 2;
      slideshowSlide.style.transform = 'translateX(' + -size * counter + 'px)';
    }

    if (slideshowImages[counter].id === 'firstClone') {
      slideshowSlide.style.transition = "none";
      counter = slideshowImages.length - counter;
      slideshowSlide.style.transform = 'translateX(' + -size * counter + 'px)';
    }
  });
};

exports.default = _default;
},{}],"library/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "slideshow", {
  enumerable: true,
  get: function () {
    return _slideshow.default;
  }
});

var _slideshow = _interopRequireDefault(require("./slideshow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./slideshow":"library/slideshow.js"}],"node_modules/navigo/lib/navigo.min.js":[function(require,module,exports) {
var define;
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Navigo=t()}(this,function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function t(){return!("undefined"==typeof window||!window.history||!window.history.pushState)}function n(e,n,o){this.root=null,this._routes=[],this._useHash=n,this._hash=void 0===o?"#":o,this._paused=!1,this._destroyed=!1,this._lastRouteResolved=null,this._notFoundHandler=null,this._defaultHandler=null,this._usePushState=!n&&t(),this._onLocationChange=this._onLocationChange.bind(this),this._genericHooks=null,this._historyAPIUpdateMethod="pushState",e?this.root=n?e.replace(/\/$/,"/"+this._hash):e.replace(/\/$/,""):n&&(this.root=this._cLoc().split(this._hash)[0].replace(/\/$/,"/"+this._hash)),this._listen(),this.updatePageLinks()}function o(e){return e instanceof RegExp?e:e.replace(/\/+$/,"").replace(/^\/+/,"^/")}function i(e){return e.replace(/\/$/,"").split("/").length}function s(e,t){return i(t)-i(e)}function r(e,t){return function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).map(function(t){var i=function(e){var t=[];return{regexp:e instanceof RegExp?e:new RegExp(e.replace(n.PARAMETER_REGEXP,function(e,o,i){return t.push(i),n.REPLACE_VARIABLE_REGEXP}).replace(n.WILDCARD_REGEXP,n.REPLACE_WILDCARD)+n.FOLLOWED_BY_SLASH_REGEXP,n.MATCH_REGEXP_FLAGS),paramNames:t}}(o(t.route)),s=i.regexp,r=i.paramNames,a=e.replace(/^\/+/,"/").match(s),h=function(e,t){return 0===t.length?null:e?e.slice(1,e.length).reduce(function(e,n,o){return null===e&&(e={}),e[t[o]]=decodeURIComponent(n),e},null):null}(a,r);return!!a&&{match:a,route:t,params:h}}).filter(function(e){return e})}(e,t)[0]||!1}function a(e,t){var n=t.map(function(t){return""===t.route||"*"===t.route?e:e.split(new RegExp(t.route+"($|/)"))[0]}),i=o(e);return n.length>1?n.reduce(function(e,t){return e.length>t.length&&(e=t),e},n[0]):1===n.length?n[0]:i}function h(e,n,o){var i,s=function(e){return e.split(/\?(.*)?$/)[0]};return void 0===o&&(o="#"),t()&&!n?s(e).split(o)[0]:(i=e.split(o)).length>1?s(i[1]):s(i[0])}function u(t,n,o){if(n&&"object"===(void 0===n?"undefined":e(n))){if(n.before)return void n.before(function(){(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&(t(),n.after&&n.after(o))},o);if(n.after)return t(),void(n.after&&n.after(o))}t()}return n.prototype={helpers:{match:r,root:a,clean:o,getOnlyURL:h},navigate:function(e,t){var n;return e=e||"",this._usePushState?(n=(n=(t?"":this._getRoot()+"/")+e.replace(/^\/+/,"/")).replace(/([^:])(\/{2,})/g,"$1/"),history[this._historyAPIUpdateMethod]({},"",n),this.resolve()):"undefined"!=typeof window&&(e=e.replace(new RegExp("^"+this._hash),""),window.location.href=window.location.href.replace(/#$/,"").replace(new RegExp(this._hash+".*$"),"")+this._hash+e),this},on:function(){for(var t=this,n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];if("function"==typeof o[0])this._defaultHandler={handler:o[0],hooks:o[1]};else if(o.length>=2)if("/"===o[0]){var r=o[1];"object"===e(o[1])&&(r=o[1].uses),this._defaultHandler={handler:r,hooks:o[2]}}else this._add(o[0],o[1],o[2]);else"object"===e(o[0])&&Object.keys(o[0]).sort(s).forEach(function(e){t.on(e,o[0][e])});return this},off:function(e){return null!==this._defaultHandler&&e===this._defaultHandler.handler?this._defaultHandler=null:null!==this._notFoundHandler&&e===this._notFoundHandler.handler&&(this._notFoundHandler=null),this._routes=this._routes.reduce(function(t,n){return n.handler!==e&&t.push(n),t},[]),this},notFound:function(e,t){return this._notFoundHandler={handler:e,hooks:t},this},resolve:function(e){var n,o,i=this,s=(e||this._cLoc()).replace(this._getRoot(),"");this._useHash&&(s=s.replace(new RegExp("^/"+this._hash),"/"));var a=function(e){return e.split(/\?(.*)?$/).slice(1).join("")}(e||this._cLoc()),l=h(s,this._useHash,this._hash);return!this._paused&&(this._lastRouteResolved&&l===this._lastRouteResolved.url&&a===this._lastRouteResolved.query?(this._lastRouteResolved.hooks&&this._lastRouteResolved.hooks.already&&this._lastRouteResolved.hooks.already(this._lastRouteResolved.params),!1):(o=r(l,this._routes))?(this._callLeave(),this._lastRouteResolved={url:l,query:a,hooks:o.route.hooks,params:o.params,name:o.route.name},n=o.route.handler,u(function(){u(function(){o.route.route instanceof RegExp?n.apply(void 0,o.match.slice(1,o.match.length)):n(o.params,a)},o.route.hooks,o.params,i._genericHooks)},this._genericHooks,o.params),o):this._defaultHandler&&(""===l||"/"===l||l===this._hash||function(e,n,o){if(t()&&!n)return!1;if(!e.match(o))return!1;var i=e.split(o);return i.length<2||""===i[1]}(l,this._useHash,this._hash))?(u(function(){u(function(){i._callLeave(),i._lastRouteResolved={url:l,query:a,hooks:i._defaultHandler.hooks},i._defaultHandler.handler(a)},i._defaultHandler.hooks)},this._genericHooks),!0):(this._notFoundHandler&&u(function(){u(function(){i._callLeave(),i._lastRouteResolved={url:l,query:a,hooks:i._notFoundHandler.hooks},i._notFoundHandler.handler(a)},i._notFoundHandler.hooks)},this._genericHooks),!1))},destroy:function(){this._routes=[],this._destroyed=!0,this._lastRouteResolved=null,this._genericHooks=null,clearTimeout(this._listeningInterval),"undefined"!=typeof window&&(window.removeEventListener("popstate",this._onLocationChange),window.removeEventListener("hashchange",this._onLocationChange))},updatePageLinks:function(){var e=this;"undefined"!=typeof document&&this._findLinks().forEach(function(t){t.hasListenerAttached||(t.addEventListener("click",function(n){if((n.ctrlKey||n.metaKey)&&"a"==n.target.tagName.toLowerCase())return!1;var o=e.getLinkPath(t);e._destroyed||(n.preventDefault(),e.navigate(o.replace(/\/+$/,"").replace(/^\/+/,"/")))}),t.hasListenerAttached=!0)})},generate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this._routes.reduce(function(n,o){var i;if(o.name===e)for(i in n=o.route,t)n=n.toString().replace(":"+i,t[i]);return n},"");return this._useHash?this._hash+n:n},link:function(e){return this._getRoot()+e},pause:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this._paused=e,this._historyAPIUpdateMethod=e?"replaceState":"pushState"},resume:function(){this.pause(!1)},historyAPIUpdateMethod:function(e){return void 0===e?this._historyAPIUpdateMethod:(this._historyAPIUpdateMethod=e,e)},disableIfAPINotAvailable:function(){t()||this.destroy()},lastRouteResolved:function(){return this._lastRouteResolved},getLinkPath:function(e){return e.getAttribute("href")},hooks:function(e){this._genericHooks=e},_add:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return"string"==typeof t&&(t=encodeURI(t)),this._routes.push("object"===(void 0===n?"undefined":e(n))?{route:t,handler:n.uses,name:n.as,hooks:o||n.hooks}:{route:t,handler:n,hooks:o}),this._add},_getRoot:function(){return null!==this.root?this.root:(this.root=a(this._cLoc().split("?")[0],this._routes),this.root)},_listen:function(){var e=this;if(this._usePushState)window.addEventListener("popstate",this._onLocationChange);else if("undefined"!=typeof window&&"onhashchange"in window)window.addEventListener("hashchange",this._onLocationChange);else{var t=this._cLoc(),n=void 0,o=void 0;(o=function(){n=e._cLoc(),t!==n&&(t=n,e.resolve()),e._listeningInterval=setTimeout(o,200)})()}},_cLoc:function(){return"undefined"!=typeof window?void 0!==window.__NAVIGO_WINDOW_LOCATION_MOCK__?window.__NAVIGO_WINDOW_LOCATION_MOCK__:o(window.location.href):""},_findLinks:function(){return[].slice.call(document.querySelectorAll("[data-navigo]"))},_onLocationChange:function(){this.resolve()},_callLeave:function(){var e=this._lastRouteResolved;e&&e.hooks&&e.hooks.leave&&e.hooks.leave(e.params)}},n.PARAMETER_REGEXP=/([:*])(\w+)/g,n.WILDCARD_REGEXP=/\*/g,n.REPLACE_VARIABLE_REGEXP="([^/]+)",n.REPLACE_WILDCARD="(?:.*)",n.FOLLOWED_BY_SLASH_REGEXP="(?:/$|$)",n.MATCH_REGEXP_FLAGS="",n});


},{}],"index.js":[function(require,module,exports) {
"use strict";

var _components = require("./components");

var state = _interopRequireWildcard(require("./store"));

var _library = require("./library");

var _navigo = _interopRequireDefault(require("navigo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var router = new _navigo.default(location.origin);

function render() {
  var st = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : state.Main;
  document.querySelector("#root").innerHTML = "\n ".concat((0, _components.Header)(st), "\n ").concat((0, _components.Nav)(), "\n ").concat((0, _components.Main)(st), "\n ").concat((0, _components.Footer)(), "\n ");
  var currentpage = router.lastRouteResolved();

  if (currentpage.url === "/Gallery") {
    (0, _library.slideshow)();
    console.log(_library.slideshow);
  }

  router.updatePageLinks();
}

router.on({
  '/': function _() {
    return render(state['Home'].main);
  },
  'Uontact us': function UontactUs() {
    return render(state['ContactUs'].main);
  },
  'Gallery': function Gallery() {
    return render(state['Gallery'].main);
  },
  'About': function About() {
    return render(state['About'].main);
  },
  'SignIn': function SignIn() {
    return render(state['SignIn'].main);
  },
  'EducationBenefits': function EducationBenefits() {
    return render(state['EducationBenefits'].main);
  },
  'ResumeBuilder': function ResumeBuilder() {
    return render(state['ResumeBuilder'].main);
  },
  'ResumeBuildercon': function ResumeBuildercon() {
    return render(state['ResumeBuilderCon'].main);
  },
  'ResumeBuildercon2': function ResumeBuildercon2() {
    return render(state['ResumeBuilderCon2'].main);
  },
  'volunteer': function volunteer() {
    return render(state['Volunteer'].main);
  },
  'SqaureAway': function SqaureAway() {
    return render(state['SquareAway'].main);
  },
  'CreateAnAccount': function CreateAnAccount() {
    return render(state['CreateAnAccount'].main);
  }
}).resolve();
},{"./components":"components/index.js","./store":"store/index.js","./library":"library/index.js","navigo":"node_modules/navigo/lib/navigo.min.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59478" + '/');

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
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/SavvyCoders-Capstone.e31bb0bc.js.map