interface WechatProfileDetails {
  photoFilePath?: string;
  nickName?: string;
  lastName?: string;
  middleName?: string;
  firstName?: string;
  remark?: string;
  mobilePhoneNumber?: string;
  email?: string;
  url?: string;
  workAddressCountry?: string;
  workAddressState?: string;
  workAddressCity?: string;
  workAddressStreet?: string;
  workAddressPostalCode?: string;
  homeFaxNumber?: string;
  homePhoneNumber?: string;
  homeAddressCountry?: string;
  homeAddressState?: string;
  homeAddressCity?: string;
  homeAddressStreet?: string;
  homeAddressPostalCode?: string;
}

interface RotateAnimation {
  rotate(deg: number): Animation;
  rotateX(deg: number): Animation;
  rotateY(deg: number): Animation;
  rotateZ(deg: number): Animation;
  rotate3d(): Animation;
}

interface ScaleAnimation {
  scale(sx: number): Animation;
  scaleX(sx: number): Animation;
  scaleY(sy: number): Animation;
  scaleZ(sz: number): Animation;
  scale3d(): Animation;
}

interface TranslateAnimation {
  translate(tx: number): Animation;
  translateX(tx: number): Animation;
  translateY(ty: number): Animation;
  translateZ(tz: number): Animation;
  translate3d(): Animation;
}

interface SkewAnimation {
  skew(ax: number): Animation;
  skewX(ax: number): Animation;
  skewY(ay: number): Animation;
}

interface Animation
  extends RotateAnimation,
  ScaleAnimation,
  SkewAnimation,
  TranslateAnimation {
  opacity(x: number): Animation;
  backgroundColor(x: string): Animation;
  width(x: number): Animation;
  height(x: number): Animation;
  top(x: number): Animation;
  left(x: number): Animation;
  bottom(x: number): Animation;
  right(x: number): Animation;
}

interface LagLng {
  latitude: number;
  longitude: number;
}

type CallbackFunction<T> = (
  callbacks: {
    success: (res: T) => void;
    fail: () => void;
    complete: () => void;
  }
) => void;

interface MapContext {
  getCenterLocation: CallbackFunction<LagLng>;

  moveToLocation(): void;

  translateMarker(params: {
    markerId: number;
    autoRotate: boolean;
    duration: number;
    destination: LagLng;
    animationEnd: () => void;
  }): void;

  includePoints(params: { padding: number[]; points: LagLng[] }): void;

  getRegion: CallbackFunction<{ southwest: LagLng; northeast: LagLng }>;

  getScale: CallbackFunction<{ scale: number }>;
}

interface UserInfo {
  nickName: string;
  avatarUrl: string;
  gender: string;
  city: string;
  province: string;
  country: string;
  language: string;
}

interface UrlParam {
  url: string;
}

interface FilePathParam {
  filePath: string;
}

interface HttpResponse {
  data?: any;
  errMsg: string;
  statusCode: number;
  header?: Object;
}

interface RequestParam {
  /**开发者服务器接口地址 */
  url: string;
  /**请求的参数 */
  data?: Object | string;
  /**设置请求的 header,header 中不能设置 Referer */
  header?: Object
  /**默认为 GET 有效值:OPTIONS,GET,HEAD,POST,PUT,DELETE,TRACE,CONNECT */
  method?: 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT';
  /**如果设为json 会尝试对返回的数据做一次 JSON.parse */
  dataType?: string;
  /**
   * @description 设置响应的数据类型
   * @since 1.7.0
   */
  responseType?: 'text' | 'arraybuffer';
}

// WePY enhanced Wx interfaces and methods below are all accessible
interface WxEnhances {
  addPhoneContact(param: WechatProfileDetails): Promise<void>;

  authorize(param: { scope: string }): Promise<any>;

  canIUse(name: string): Promise<boolean>;

  canvasGetImageData(
    params: {
      canvasId: string;
      x: number;
      y: number;
      width: number;
      height: number;
    },
    context: any
  ): Promise<{
    width: number;
    height: number;
    data: Uint8ClampedArray;
  }>;

  canvasPutImageData(
    params: {
      canvasId: string;
      data: Uint8ClampedArray;
      x: number;
      y: number;
      height?: number;
      wdith: number;
    },
    context: any
  ): Promise<void>;

  canvasToTempFilePath(
    params: {
      x: number;
      y: number;
      width: number;
      height: number;
      destWidth: number;
      destHeight: number;
      canvasId: string;
    },
    context: any
  ): Promise<{ tempFilePath: string }>;

  checkIsSoterEnrolledInDevice(params: {
    checkAuthMode: "fingerPrint" | "facial" | "speech";
  }): Promise<{
    isEnrolled: boolean;
    errMsg: string;
  }>;

  checkIsSupportSoterAuthentication(): Promise<{
    supportMode: string[];
  }>;

  checkSession(): Promise<void>;

  chooseInvoiceTitle(): Promise<{
    type: "0" | "1";
    title: string;
    taxNumber: string;
    companyAddress: string;
    telephone: string;
    bankName: string;
    bankAccount: string;
    errMsg: string;
  }>;

  chooseLocation(): Promise<{
    name: string;
    address: string;
    latitude: number;
    longitude: number;
  }>;

  chooseVideo(params: {
    sourceType: string[];
    compressed: boolean;
    maxDuration: number;
  }): Promise<{
    tempFilePath: string;
    duration: number;
    size: number;
    height: number;
    width: number;
  }>;

  clearStorage(): Promise<void>;

  createAnimation(params: {
    duration: number;
    timingFunction: string;
    delay: number;
    transformOrigin: string;
  }): Promise<Animation>;

  createCanvasContext(canvasId: string, context: any): Promise<void>;

  createMapContext(mapId: string, context: any): MapContext;

  createSelectorQuery(): Promise<{}>;

  getLocation(params: {
    type: string;
    altitude: boolean;
  }): Promise<{
    latitude: number;
    longitude: number;
    speed: number;
    accuracy: number;
    altitude: number;
    verticalAccuracy: number;
    horizontalAccuracy: number;
  }>;

  getNetworkType(): Promise<{ networkType: string }>;

  getSavedFileInfo(
    params: FilePathParam
  ): Promise<{
    errMsg: string;
    size: number;
    createTime: number;
  }>;

  getSavedFileList(): Promise<{
    errMsg: string;
    fileList: object[];
  }>;

  getSetting(): Promise<{
    authSetting: {
      "scope.userInfo": boolean;
      "scope.userLocation": boolean;
      "scope.address": boolean;
      "scope.invoiceTitle": boolean;
      "scope.werun": boolean;
      "scope.record": boolean;
      "scope.writePhotosAlbum": boolean;
      "scope.camera": boolean;
    };
  }>;

  getShareInfo(params: {
    shareTicket: string;
    timeout: number;
  }): Promise<{
    errMsg: string;
    encryptedData: string;
    iv: string;
  }>;

  getSystemInfo(): Promise<{
    brand: string;
    model: string;
    pixelRatio: number;
    screenWidth: number;
    screenHeight: number;
    windowWidth: number;
    windowHeight: number;
    statusBarHeight: number;
    language: string;
    version: string;
    system: string;
    platform: string;
    fontSizeSetting: string;
    SDKVersion: string;
  }>;

  getUserInfo(params: {
    withCredentials: boolean;
    lang: string;
    timeout: number;
  }): Promise<{
    userInfo: object;
    rawData: string;
    signature: string;
    encryptedData: string;
    iv: string;
  }>;

  hideLoading(): Promise<void>;

  hideNavigationBarLoading(): Promise<void>;

  makePhoneCall(params: { phoneNumber: string }): Promise<void>;

  navigateTo(params: UrlParam): Promise<void>;

  onUserCaptureScreen(): Promise<void>;

  openLocation(params: {
    latitude: number;
    longitude: number;
    scale?: number;
    name?: string;
    address?: string;
  }): Promise<void>;

  pageScrollTo(params: {
    scrollTop: number;
    duration: number;
  }): Promise<void>;

  redirectTo(params: UrlParam): Promise<void>;

  removeSavedFile(params: FilePathParam): Promise<void>;

  removeStorage(params: { key: string }): Promise<void>;

  request(params: RequestParam): Promise<HttpResponse>;

  requestPayment(params: {
    timeStamp: string;
    nonceStr: string;
    package: string;
    signType: string;
    paySign: string;
  }): Promise<void>;

  scanCode(params: {
    onlyFromCamera?: boolean;
    scanType?: string[];
  }): Promise<{
    result: string;
    scanType: string;
    charSet: string;
    path: string;
  }>;

  setNavigationBarAlpha(params: { alpha: number }): Promise<void>;

  setNavigationBarColor(params: { color: number }): Promise<void>;

  setNavigationBarTitle(params: { title: string }): Promise<void>;

  setStorage(params: { key: string; data: string | object }): Promise<void>;

  showActionSheet(params: {
    itemList: string[];
    itemColor: string;
  }): Promise<void>;

  showLoading(params: {
    title: string;
    mask: boolean;
  }): Promise<void>;

  showModal(params: {
    title: string;
    content: string;
    showCancel?: boolean;
    cancelText?: string;
    cancelColor?: string;
    confirmText?: string;
    confirmColor?: string;
  }): Promise<{ confirm: boolean; cancel: boolean }>;

  showNavigationBarLoading(): Promise<void>;

  showToast(params: {
    title: string;
    icon?: "success" | "loading" | "none";
    image?: string;
    duration?: number;
    mask?: boolean;
  }): Promise<void>;

  switchTab(params: UrlParam): Promise<void>;
}

declare class WXevent {
  active: boolean;
  constructor(name: string, source: any, type: any);
  $destroy(): void;
  $transfor(wxevent: any[]): void;
}

interface AppConfig {
  appEvents?: string[];
  pageEvents?: string[];
  noPromiseAPI?: string[] | { [name: string]: boolean };
}

interface AppConstructor {
  new(): app;
}

/* the supported add-ons */
type AddOn = "requestfix" | "promisify";

interface WindowConfig {
  backgroundTextStyle: string;
  navigationBarBackgroundColor: string;
  navigationBarTitleText: string;
  navigationBarTextStyle: string;
}

declare class app {
  config: {
    window: WindowConfig;
    pages: string[];
  };
  $init(wepy: any, config: AppConfig): void;
  use(addonName: AddOn, ...args: any[]): void;
  $initAPI(
    wepy: any,
    noPromiseAPI: string[] | { [name: string]: boolean }
  ): void;
}
declare class component {
  $isComponent: boolean;
  $prefix: string;
  data: { [name: string]: any };

  computed?: { [name: string]: (self?: component) => any };
  methods?: { [name: string]: (...arg: any[]) => any };

  $init($wxpage: any, $root: any, $parent: any): void;
  $initMixins(): void;
  onLoad(options: any): void;
  setData(k: string | string[], v: any): void;
  getWxPage(): any;
  $setIndex(index: number): void;
  $getComponent(com: any): any;
  $apply(fn?: () => void): void;
  $emit(key: string, ...someArgs: any[]);
  $nextTick(fn: () => void): void;
  $invoke(componentName: string, methodName: string, ...someArgs: any[]);
}
interface UrlParam {
  url: string;
}

interface PageConstructor {
  new(): page;
}

declare class page extends component {
  $preloadData: { [key: string]: any };
  $init(wxpage: any, $parent: any): any;
  $route(
    type: "redirectTo" | "navigateTo",
    url: string | UrlParam,
    params?: { [name: string]: any }
  ): any;
  $preload(key: string | { [key: string]: any }, data: any): any;
  $switch(url: string | UrlParam): any;
  $redirect(url: string, params?: object): any;
  $back(delta: number | { delta: number }): any;
}
declare class mixin { }

declare interface Wepy extends WxEnhances {
  event: typeof WXevent;
  app: typeof app;
  component: typeof component;
  page: typeof page;
  mixin: typeof mixin;
  $createApp: (appClass: AppConstructor, appConfig: AppConfig) => app;
  $createPage: (
    pageClass: PageConstructor,
    pagePath: string | boolean
  ) => page;
  $isEmpty: (obj: object) => boolean;
  $isEqual: (a: any, b: any, aStack?: any[], bStack?: any[]) => boolean;
  $isDeepEqual: (a: any, b: any, aStack?: any[], bStack?: any[]) => boolean;
  $has: (obj: object, path: string) => boolean;
  $extend: () => any;
  $copy: <T>(obj: T, deep?: boolean) => T;
  $isPlainObject: (obj: any) => boolean;
  $resolvePath: (route: string, url: string) => string;
  $getParams: (url: string) => object;
  hyphenate: (str: string) => string;
  camelize: (str: string) => string;

  login: () => Promise<{
    errMsg: string;
    code: string;
  }>;
  setStorageSync(key: string, data: any): void;
  getStorageSync(key: string): any;
  clearStorageSync(): void;
  downloadFile(options: {
    url: string;
  }): Promise<{
    tempFilePath: string
  }>;
  uploadFile(options: {
    url: string;
    filePath: string;
    name: "file"; // 必须填file
    formData: any;
  }): Promise<any>;
  chooseImage(options: {
    count: number,
    sizeType: ("original" | "compressed")[], // 可以指定是原图还是压缩图，默认二者都有
    sourceType: ("album" | "camera")[], // 可以指定来源是相册还是相机，默认二者都有
  }): Promise<any>;
  previewImage(options: {
    current: string,
    urls: string[]
  }): Promise<any>;
  showShareMenu();
  getSystemInfoSync(): {
    brand: string;//	手机品牌	1.5.0
    model: string;//	手机型号
    pixelRatio: number;//	设备像素比
    screenWidth: number;//	屏幕宽度	1.1.0
    screenHeight: number;//	屏幕高度	1.1.0
    windowWidth: number;//	可使用窗口宽度
    windowHeight: number;//	可使用窗口高度
    statusBarHeight: number;//	状态栏的高度	1.9.0
    language: string;//	微信设置的语言
    version: string;//	微信版本号
    system: string;//	操作系统版本
    platform: string;//	客户端平台
    fontSizeSetting: number;//	用户字体大小设置。以“我-设置-通用-字体大小”中的设置为准，单位：px	1.5.0
    SDKVersion: string;//	客户端基础库版本
  }
}
declare const wepy: Wepy;

declare module 'wepy' {
  export default wepy;
}
