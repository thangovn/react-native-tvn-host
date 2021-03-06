"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TVNBeautyButtonView = exports.RtcTextureView = exports.RtcSurfaceView = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * @ignore
 */
const RCTRtcSurfaceView = (0, _reactNative.requireNativeComponent)('RCTAgoraRtcSurfaceView');
/**
 * @ignore
 */

class RtcSurfaceView extends _react.Component {
  render() {
    const {
      channelId,
      uid,
      ...others
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(RCTRtcSurfaceView, _extends({
      data: {
        channelId,
        uid
      }
    }, others));
  }

}

exports.RtcSurfaceView = RtcSurfaceView;
const RTCTVNBeautyButtonView = (0, _reactNative.requireNativeComponent)('TVNBeautyButtonView');

class TVNBeautyButtonView extends _react.Component {
  render() {
    return /*#__PURE__*/_react.default.createElement(RTCTVNBeautyButtonView, this.props);
  }

}
/**
 * @ignore
 */


exports.TVNBeautyButtonView = TVNBeautyButtonView;
const RCTRtcTextureView = (0, _reactNative.requireNativeComponent)('RCTAgoraRtcTextureView');
/**
 * @ignore
 */

class RtcTextureView extends _react.Component {
  render() {
    const {
      channelId,
      uid,
      ...others
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(RCTRtcTextureView, _extends({
      data: {
        channelId,
        uid
      }
    }, others));
  }

}

exports.RtcTextureView = RtcTextureView;
//# sourceMappingURL=RtcRenderView.native.js.map