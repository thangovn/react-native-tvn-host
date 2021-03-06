function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { Component } from 'react';
import { requireNativeComponent } from 'react-native';

/**
 * @ignore
 */
const RCTRtcSurfaceView = requireNativeComponent('RCTAgoraRtcSurfaceView');
/**
 * @ignore
 */

export class RtcSurfaceView extends Component {
  render() {
    const {
      channelId,
      uid,
      ...others
    } = this.props;
    return /*#__PURE__*/React.createElement(RCTRtcSurfaceView, _extends({
      data: {
        channelId,
        uid
      }
    }, others));
  }

}
const RTCTVNBeautyButtonView = requireNativeComponent('TVNBeautyButtonView');
export class TVNBeautyButtonView extends Component {
  render() {
    return /*#__PURE__*/React.createElement(RTCTVNBeautyButtonView, this.props);
  }

}
/**
 * @ignore
 */

const RCTRtcTextureView = requireNativeComponent('RCTAgoraRtcTextureView');
/**
 * @ignore
 */

export class RtcTextureView extends Component {
  render() {
    const {
      channelId,
      uid,
      ...others
    } = this.props;
    return /*#__PURE__*/React.createElement(RCTRtcTextureView, _extends({
      data: {
        channelId,
        uid
      }
    }, others));
  }

}
//# sourceMappingURL=RtcRenderView.native.js.map