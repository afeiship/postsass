'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var PropTypes = require('prop-types');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var dist = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var NOOP = function NOOP() {};
var NOOP_STRING = '';
var NOOP_ARRAY = [];
var NOOP_OBJECT = {};

// export default:
module.exports = NOOP;
exports.default = NOOP;

// export string/array/object

exports.NOOP_STRING = NOOP_STRING;
exports.NOOP_ARRAY = NOOP_ARRAY;
exports.NOOP_OBJECT = NOOP_OBJECT;
});

var noop = unwrapExports(dist);
var dist_1 = dist.NOOP_STRING;
var dist_2 = dist.NOOP_ARRAY;
var dist_3 = dist.NOOP_OBJECT;

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

var CLASS_NAME = 'boilerplate-react-ts-component';
var BoilerplateReactTsComponent = /** @class */ (function (_super) {
    __extends(BoilerplateReactTsComponent, _super);
    function BoilerplateReactTsComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function () {
            console.log('click me!');
        };
        return _this;
    }
    BoilerplateReactTsComponent.prototype.render = function () {
        var _a = this.props, className = _a.className, value = _a.value, onChange = _a.onChange, props = __rest(_a, ["className", "value", "onChange"]);
        return (React__default['default'].createElement("div", __assign({ "data-component": CLASS_NAME, className: classnames(CLASS_NAME, className) }, props),
            React__default['default'].createElement("p", null,
                React__default['default'].createElement("button", { style: { padding: 20, width: '100%' }, onClick: this.handleClick, className: "icon-play" }, "Enjoy coding."))));
    };
    BoilerplateReactTsComponent.displayName = CLASS_NAME;
    BoilerplateReactTsComponent.version = '__VERSION__';
    BoilerplateReactTsComponent.propTypes = {
        /**
         * The extended className for component.
         */
        className: PropTypes__default['default'].string,
        /**
         * Default value.
         */
        value: PropTypes__default['default'].object,
        /**
         * The change handler.
         */
        onChange: PropTypes__default['default'].func
    };
    BoilerplateReactTsComponent.defaultProps = {
        value: null,
        onChange: noop
    };
    return BoilerplateReactTsComponent;
}(React.Component));

exports.default = BoilerplateReactTsComponent;
//# sourceMappingURL=index.js.map
