'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _omit = require('omit.js');

var _omit2 = _interopRequireDefault(_omit);

var _beeIcon = require('bee-icon');

var _beeIcon2 = _interopRequireDefault(_beeIcon);

var _Line = require('./Line');

var _Line2 = _interopRequireDefault(_Line);

var _Circle = require('./Circle');

var _Circle2 = _interopRequireDefault(_Circle);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var ProgressTypes = ['line', 'circle', 'dashboard'];
var ProgressStatuses = ['normal', 'exception', 'active', 'success'];

var propTypes = {
  status: _propTypes2["default"].oneOf(ProgressStatuses),
  type: _propTypes2["default"].oneOf(ProgressTypes),
  showInfo: _propTypes2["default"].bool,
  percent: _propTypes2["default"].number,
  width: _propTypes2["default"].number,
  strokeWidth: _propTypes2["default"].number,
  strokeLinecap: _propTypes2["default"].oneOf(['round', 'square']),
  strokeColor: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].object]),
  trailColor: _propTypes2["default"].string,
  format: _propTypes2["default"].func,
  gapDegree: _propTypes2["default"].number
};
var defaultProps = {
  type: 'line',
  percent: 0,
  showInfo: true,
  trailColor: '#f3f3f3',
  size: 'default',
  gapDegree: 0,
  strokeLinecap: 'round',
  clsPrefix: 'u-progress'
};

var Progress = function (_Component) {
  _inherits(Progress, _Component);

  function Progress() {
    var _temp, _this, _ret;

    _classCallCheck(this, Progress);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.renderProgress = function () {
      var _classNames;

      var _this2 = _this,
          props = _this2.props;

      var clsPrefix = props.clsPrefix,
          className = props.className,
          size = props.size,
          type = props.type,
          showInfo = props.showInfo,
          restProps = _objectWithoutProperties(props, ['clsPrefix', 'className', 'size', 'type', 'showInfo']);
      // const clsPrefix = getPrefixCls('progress', customizePrefixCls);


      var progressStatus = _this.getProgressStatus();
      var progressInfo = _this.renderProcessInfo(clsPrefix, progressStatus);
      var progress = void 0;
      // Render progress shape
      if (type === 'line') {
        progress = _react2["default"].createElement(
          _Line2["default"],
          _extends({}, _this.props, { clsPrefix: clsPrefix }),
          progressInfo
        );
      } else if (type === 'circle' || type === 'dashboard') {
        progress = _react2["default"].createElement(
          _Circle2["default"],
          _extends({}, _this.props, { clsPrefix: clsPrefix, progressStatus: progressStatus }),
          progressInfo
        );
      }

      var classString = (0, _classnames2["default"])(clsPrefix, (_classNames = {}, _defineProperty(_classNames, clsPrefix + '-' + (type === 'dashboard' && 'circle' || type), true), _defineProperty(_classNames, clsPrefix + '-status-' + progressStatus, true), _defineProperty(_classNames, clsPrefix + '-show-info', showInfo), _defineProperty(_classNames, clsPrefix + '-' + size, size), _classNames), className);

      return _react2["default"].createElement(
        'div',
        _extends({}, (0, _omit2["default"])(restProps, ['status', 'format', 'trailColor', 'successPercent', 'strokeWidth', 'width', 'gapDegree', 'gapPosition', 'strokeColor', 'strokeLinecap', 'percent']), {
          className: classString
        }),
        progress
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Progress.prototype.getPercentNumber = function getPercentNumber() {
    var _props = this.props,
        successPercent = _props.successPercent,
        _props$percent = _props.percent,
        percent = _props$percent === undefined ? 0 : _props$percent;

    return parseInt(successPercent !== undefined ? successPercent.toString() : percent.toString(), 10);
  };

  Progress.prototype.getProgressStatus = function getProgressStatus() {
    var status = this.props.status;

    if (ProgressStatuses.indexOf(status) < 0 && this.getPercentNumber() >= 100) {
      return 'success';
    }
    return status || 'normal';
  };

  Progress.prototype.renderProcessInfo = function renderProcessInfo(clsPrefix, progressStatus) {
    var _props2 = this.props,
        showInfo = _props2.showInfo,
        format = _props2.format,
        type = _props2.type,
        percent = _props2.percent,
        successPercent = _props2.successPercent;

    if (!showInfo) return null;

    var text = void 0;
    var textFormatter = format || function (percentNumber) {
      return percentNumber + '%';
    };
    var iconType = type === 'circle' || type === 'dashboard' ? '' : '-c';
    if (format || progressStatus !== 'exception' && progressStatus !== 'success') {
      text = textFormatter((0, _utils.validProgress)(percent), (0, _utils.validProgress)(successPercent));
    } else if (progressStatus === 'exception') {
      text = _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-close' + iconType, theme: type === 'line' ? 'filled' : 'outlined' });
    } else if (progressStatus === 'success') {
      text = _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-correct-2', theme: type === 'line' ? 'filled' : 'outlined' });
    }
    return _react2["default"].createElement(
      'span',
      { className: clsPrefix + '-text', title: typeof text === 'string' ? text : undefined },
      text
    );
  };

  Progress.prototype.render = function render() {
    return this.renderProgress();
  };

  return Progress;
}(_react.Component);

Progress.propTypes = propTypes;
Progress.defaultProps = defaultProps;
exports["default"] = Progress;
module.exports = exports['default'];