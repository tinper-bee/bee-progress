'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleGradient = exports.sortGradient = undefined;

var _entries = require('babel-runtime/core-js/object/entries');

var _entries2 = _interopRequireDefault(_entries);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _utils = require('./utils');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * {
 *   '0%': '#afc163',
 *   '75%': '#009900',
 *   '50%': 'green',     ====>     '#afc163 0%, #66FF00 25%, #00CC00 50%, #009900 75%, #ffffff 100%'
 *   '25%': '#66FF00',
 *   '100%': '#ffffff'
 * }
 */
var sortGradient = exports.sortGradient = function sortGradient(gradients) {
  var tempArr = [];
  // eslint-disable-next-line no-restricted-syntax
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _entries2["default"])(gradients)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _slicedToArray(_step.value, 2),
          key = _step$value[0],
          value = _step$value[1];

      var formatKey = parseFloat(key.replace(/%/g, ''));
      if (isNaN(formatKey)) {
        return {};
      }
      tempArr.push({
        key: formatKey,
        value: value
      });
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"]) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  tempArr = tempArr.sort(function (a, b) {
    return a.key - b.key;
  });
  return tempArr.map(function (_ref) {
    var key = _ref.key,
        value = _ref.value;
    return value + ' ' + key + '%';
  }).join(', ');
};

/**
 * {
 *   '0%': '#afc163',
 *   '25%': '#66FF00',
 *   '50%': '#00CC00',     ====>  linear-gradient(to right, #afc163 0%, #66FF00 25%,
 *   '75%': '#009900',              #00CC00 50%, #009900 75%, #ffffff 100%)
 *   '100%': '#ffffff'
 * }
 *
 * Then this man came to realize the truth:
 * Besides six pence, there is the moon.
 * Besides bread and butter, there is the bug.
 * And...
 * Besides women, there is the code.
 */
var handleGradient = function handleGradient(strokeColor) {
  var _strokeColor$from = strokeColor.from,
      from = _strokeColor$from === undefined ? '#1890ff' : _strokeColor$from,
      _strokeColor$to = strokeColor.to,
      to = _strokeColor$to === undefined ? '#1890ff' : _strokeColor$to,
      _strokeColor$directio = strokeColor.direction,
      direction = _strokeColor$directio === undefined ? 'to right' : _strokeColor$directio,
      rest = _objectWithoutProperties(strokeColor, ['from', 'to', 'direction']);

  if (Object.keys(rest).length !== 0) {
    // const sortedGradients = sortGradient(rest as StringGradients);
    var sortedGradients = sortGradient(rest);
    return { backgroundImage: 'linear-gradient(' + direction + ', ' + sortedGradients + ')' };
  }
  return { backgroundImage: 'linear-gradient(' + direction + ', ' + from + ', ' + to + ')' };
};

exports.handleGradient = handleGradient;
var Line = function Line(props) {
  var clsPrefix = props.clsPrefix,
      percent = props.percent,
      successPercent = props.successPercent,
      strokeWidth = props.strokeWidth,
      size = props.size,
      strokeColor = props.strokeColor,
      strokeLinecap = props.strokeLinecap,
      children = props.children;

  var backgroundProps = void 0;
  if (strokeColor && typeof strokeColor !== 'string') {
    backgroundProps = handleGradient(strokeColor);
  } else {
    backgroundProps = {
      background: strokeColor
    };
  }
  var percentStyle = _extends({
    width: (0, _utils.validProgress)(percent) + '%',
    height: strokeWidth || (size === 'small' ? 6 : 8),
    borderRadius: strokeLinecap === 'square' ? 0 : ''
  }, backgroundProps);
  var successPercentStyle = {
    width: (0, _utils.validProgress)(successPercent) + '%',
    height: strokeWidth || (size === 'small' ? 6 : 8),
    borderRadius: strokeLinecap === 'square' ? 0 : ''
  };
  var successSegment = successPercent !== undefined ? React.createElement('div', { className: clsPrefix + '-success-bg', style: successPercentStyle }) : null;
  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      { className: clsPrefix + '-outer' },
      React.createElement(
        'div',
        { className: clsPrefix + '-inner' },
        React.createElement('div', { className: clsPrefix + '-bg', style: percentStyle }),
        successSegment
      )
    ),
    children
  );
};

exports["default"] = Line;