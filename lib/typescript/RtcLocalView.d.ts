import { Component } from 'react';
import { ViewProps } from 'react-native';
import { RtcSurfaceViewProps, RtcTextureViewProps } from './common/RtcRenderView.native';
/**
 * The SurfaceView class.
 *
 * @noInheritDoc
 */
declare class SurfaceView extends Component<ViewProps & RtcSurfaceViewProps, {}> {
    render(): JSX.Element;
}
declare class RTCTVNBeautyButtonView extends Component<ViewProps & RtcSurfaceViewProps, {}> {
    render(): JSX.Element;
}
/**
 * The TextureView class.
 *
 * **Note**
 *
 * TextureView is supported on Android only. iOS does not support TextureView.
 * @noInheritDoc
 */
declare class TextureView extends Component<ViewProps & RtcTextureViewProps, {}> {
    render(): JSX.Element;
}
declare const _default: {
    SurfaceView: typeof SurfaceView;
    TextureView: typeof TextureView;
    RTCTVNBeautyButtonView: typeof RTCTVNBeautyButtonView;
};
/**
 * View for previewing local video.
 */
export default _default;
