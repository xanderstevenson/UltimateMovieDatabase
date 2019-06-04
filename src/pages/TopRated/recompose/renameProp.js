'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _omit = require('./utils/omit');

var _omit2 = _interopRequireDefault(_omit);

var _mapProps = require('./mapProps');

var _mapProps2 = _interopRequireDefault(_mapProps);

var _setDisplayName = require('./setDisplayName');

var _setDisplayName2 = _interopRequireDefault(_setDisplayName);

var _wrapDisplayName = require('./wrapDisplayName');

var _wrapDisplayName2 = _interopRequireDefault(_wrapDisplayName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renameProp = function renameProp(oldName, newName) {
  var hoc = (0, _mapProps2.default)(function (props) {
    var _extends2;

    return _extends({}, (0, _omit2.default)(props, [oldName]), (_extends2 = {}, _extends2[newName] = props[oldName], _extends2));
  });
  if (process.env.NODE_ENV !== 'production') {
    return function (BaseComponent) {
      return (0, _setDisplayName2.default)((0, _wrapDisplayName2.default)(BaseComponent, 'renameProp'))(hoc(BaseComponent));
    };
  }
  return hoc;
};

exports.default = renameProp;