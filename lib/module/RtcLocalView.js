function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { Component } from 'react';
import { Platform } from 'react-native';
import { RtcSurfaceView, RtcTextureView, TVNBeautyButtonView } from './common/RtcRenderView.native';
/**
 * The SurfaceView class.
 *
 * @noInheritDoc
 */

class SurfaceView extends Component {
  render() {
    return /*#__PURE__*/React.createElement(RtcSurfaceView, _extends({}, this.props, {
      uid: 0
    }));
  }

}

class RTCTVNBeautyButtonView extends Component {
  render() {
    return /*#__PURE__*/React.createElement(TVNBeautyButtonView, this.props);
  }

}
/**
 * The TextureView class.
 *
 * **Note**
 *
 * TextureView is supported on Android only. iOS does not support TextureView.
 * @noInheritDoc
 */


class TextureView extends Component {
  render() {
    if (Platform.OS === 'ios') throw new Error('TextureView not support for iOS');
    return /*#__PURE__*/React.createElement(RtcTextureView, _extends({}, this.props, {
      uid: 0
    }));
  }

}
/**
 * View for previewing local video.
 */


export default {
  SurfaceView,
  TextureView,
  RTCTVNBeautyButtonView
};
//# sourceMappingURL=RtcLocalView.js.map