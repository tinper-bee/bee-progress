import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import omit from 'omit.js';
import Icon from 'bee-icon';
import Line from './Line';
import Circle from './Circle';
import { validProgress } from './utils';

const ProgressTypes = ['line', 'circle', 'dashboard'];
const ProgressStatuses = ['normal', 'exception', 'active', 'success'];

const propTypes = {
    status: PropTypes.oneOf(ProgressStatuses),
    type: PropTypes.oneOf(ProgressTypes),
    showInfo: PropTypes.bool,
    percent: PropTypes.number,
    width: PropTypes.number,
    strokeWidth: PropTypes.number,
    strokeLinecap: PropTypes.oneOf(['round', 'square']),
    strokeColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    trailColor: PropTypes.string,
    format: PropTypes.func,
    gapDegree: PropTypes.number,
};
const defaultProps = {
    type: 'line',
    percent: 0,
    showInfo: true,
    trailColor: '#f3f3f3',
    size: 'default',
    gapDegree: 0,
    strokeLinecap: 'round',
    clsPrefix: 'u-progress',
};

class Progress extends Component {

  getPercentNumber() {
    const { successPercent, percent = 0 } = this.props;
    return parseInt(
      successPercent !== undefined ? successPercent.toString() : percent.toString(),
      10,
    );
  }

  getProgressStatus() {
    const { status } = this.props;
    if (ProgressStatuses.indexOf(status) < 0 && this.getPercentNumber() >= 100) {
      return 'success';
    }
    return status || 'normal';
  }

  renderProcessInfo(clsPrefix, progressStatus) {
    const { showInfo, format, type, percent, successPercent } = this.props;
    if (!showInfo) return null;

    let text;
    const textFormatter = format || (percentNumber => `${percentNumber}%`);
    const iconType = type === 'circle' || type === 'dashboard' ? '' : '-c';
    if (format || (progressStatus !== 'exception' && progressStatus !== 'success')) {
      text = textFormatter(validProgress(percent), validProgress(successPercent));
    } else if (progressStatus === 'exception') {
      text = <Icon type={`uf-close${iconType}`} theme={type === 'line' ? 'filled' : 'outlined'} />;
    } else if (progressStatus === 'success') {
      text = <Icon type={`uf-correct-2`} theme={type === 'line' ? 'filled' : 'outlined'} />;
    }
    return (
      <span className={`${clsPrefix}-text`} title={typeof text === 'string' ? text : undefined}>
        {text}
      </span>
    );
  }

  renderProgress = () => {
    const { props } = this;
    const { clsPrefix, className, size, type, showInfo, ...restProps } = props;
    // const clsPrefix = getPrefixCls('progress', customizePrefixCls);
    const progressStatus = this.getProgressStatus();
    const progressInfo = this.renderProcessInfo(clsPrefix, progressStatus);
    let progress;
    // Render progress shape
    if (type === 'line') {
      progress = (
        <Line {...this.props} clsPrefix={clsPrefix}>
          {progressInfo}
        </Line>
      );
    } else if (type === 'circle' || type === 'dashboard') {
      progress = (
        <Circle {...this.props} clsPrefix={clsPrefix} progressStatus={progressStatus}>
          {progressInfo}
        </Circle>
      );
    }

    const classString = classNames(
      clsPrefix,
      {
        [`${clsPrefix}-${(type === 'dashboard' && 'circle') || type}`]: true,
        [`${clsPrefix}-status-${progressStatus}`]: true,
        [`${clsPrefix}-show-info`]: showInfo,
        [`${clsPrefix}-${size}`]: size,
      },
      className,
    );

    return (
      <div
        {...omit(restProps, [
          'status',
          'format',
          'trailColor',
          'successPercent',
          'strokeWidth',
          'width',
          'gapDegree',
          'gapPosition',
          'strokeColor',
          'strokeLinecap',
          'percent',
        ])}
        className={classString}
      >
        {progress}
      </div>
    );
  };

  render() {
    return this.renderProgress();
  }
}

Progress.propTypes = propTypes;
Progress.defaultProps = defaultProps;
export default Progress;