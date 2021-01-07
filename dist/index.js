'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

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

var BoilerplateReactTsComponent = /** @class */ (function (_super) {
    __extends(BoilerplateReactTsComponent, _super);
    function BoilerplateReactTsComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoilerplateReactTsComponent.prototype.render = function () {
        var text = this.props.text;
        return React__default['default'].createElement("div", { style: { color: 'red' } },
            "Hello world. ",
            text);
    };
    BoilerplateReactTsComponent.defaultProps = {
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
        onChange: PropTypes__default['default'].func,
        /**
         * If element destroyed when visible to false.
         * In modal case:
         * 1. set the value to true, you need not care z-index
         * 2. If only has one modal, you can set this to false.
         */
        destroyable: PropTypes__default['default'].bool,
        /**
         * Backdrop props or not display backdrop.
         */
        backdrop: PropTypes__default['default'].oneOfType([PropTypes__default['default'].bool, PropTypes__default['default'].object])
    };
    return BoilerplateReactTsComponent;
}(React__default['default'].Component));

exports.default = BoilerplateReactTsComponent;
//# sourceMappingURL=index.js.map
