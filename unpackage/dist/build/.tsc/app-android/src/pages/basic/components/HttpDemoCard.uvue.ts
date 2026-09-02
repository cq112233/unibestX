import { computed, ref } from 'vue';
import Card from './Card.uvue';
import { foo, FOO_UPLOAD_PATH, getFooList, uploadFooFile } from '@/src/api/foo';
import type { IFoo } from '@/src/api/foo';
import { DEFAULT_OSS_BASE_URL } from '@/src/utils/upload';

// ==========================================
// 响应式状态
// ==========================================

const __sfc__ = defineComponent({
  __name: 'HttpDemoCard',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const mockList = ref<IFoo[]>([]);
const loading = ref<boolean>(false);
const requestStatus = ref<string>('idle'); // idle | loading | success | error
const responseData = ref<IFoo | null>(null);
const errorMsg = ref<string>('');
const userInfo = ref<string>('');
const cloudLoading = ref<boolean>(false);
const cloudErrorMsg = ref<string>('');
const uploadPath = ref<string>(FOO_UPLOAD_PATH);
const uploadLoading = ref<boolean>(false);
const uploadResult = ref<string>('');
const uploadError = ref<string>('');

// ==========================================
// 计算属性
// ==========================================
const statusText = computed((): string => {
  switch (requestStatus.value) {
    case 'loading': return '请求中';
    case 'success': return '请求成功';
    case 'error': return '请求失败';
    default: return '待请求';
  }
});

const statusTextClass = computed((): string => {
  switch (requestStatus.value) {
    case 'loading': return 'wtu-kl45yb-2k';
    case 'success': return 'wtu-fv1izt-2l';
    case 'error': return 'wtu-1ivzueh-16';
    default: return 'wtu-6tsugz-15';
  }
});

const statusBgClass = computed((): string => {
  switch (requestStatus.value) {
    case 'loading': return 'wtu-1xrn6ww-2m';
    case 'success': return 'wtu-k3m9e2-2n';
    case 'error': return 'wtu-1jk4s61-2o';
    default: return 'wtu-1y83w1l-1f';
  }
});

// 用显式 boolean 计算属性替换模板里的 != null / != '' 条件判断
const hasResponseData = computed((): boolean => {
  return responseData.value != null;
});

const hasErrorMsg = computed((): boolean => {
  return errorMsg.value.length > 0;
});

const responseText = computed((): string => {
  const data = responseData.value;
  if (data == null)
    return '';
  return `id: ${data.id}, name: ${data.name}`;
});

const hasCloudError = computed((): boolean => {
  return cloudErrorMsg.value.length > 0;
});

const cloudStatusText = computed((): string => {
  if (cloudLoading.value)
    return '连接中';
  if (hasCloudError.value)
    return '连接失败';
  return '已连接';
});

const cloudStatusBgClass = computed((): string => {
  if (cloudLoading.value)
    return 'wtu-1xrn6ww-2m';
  if (hasCloudError.value)
    return 'wtu-1jk4s61-2o';
  return 'wtu-p7uzb7-2p';
});

const cloudStatusDotClass = computed((): string => {
  if (cloudLoading.value)
    return 'wtu-o857rv-2q';
  if (hasCloudError.value)
    return 'wtu-1f8d0xd-2r';
  return 'wtu-tcezrl-2s';
});

const cloudStatusTextClass = computed((): string => {
  if (cloudLoading.value)
    return 'wtu-92z56f-2t';
  if (hasCloudError.value)
    return 'wtu-y8jpqd-2u';
  return 'wtu-1t7q418-l';
});

const hasUploadError = computed((): boolean => {
  return uploadError.value.length > 0;
});

const hasUploadResult = computed((): boolean => {
  return uploadResult.value.length > 0;
});

const uploadResultText = computed((): string => {
  return uploadResult.value;
});

// ==========================================
// 方法
// ==========================================

/**
 * 加载 Mock 数据（本地，无需网络）
 */
async function loadMockData() {
  try {
    const list = await getFooList();
    mockList.value = list;
    // toastSuccess(`加载了 ${list.length} 条数据`)
  }
  catch (err) {
    console.error('loadMockData error:', err);
  }
}

/**
 * 发起真实 API 请求（演示拦截器与错误处理）
 * 使用 async/await 与 try/catch，这在 UTS 中类型推导更稳定
 */
async function fetchRealApi() {
  loading.value = true;
  requestStatus.value = 'loading';
  responseData.value = null;
  errorMsg.value = '';

  try {
    const res = await foo();
    responseData.value = res;
    requestStatus.value = 'success';
  }
  catch (err) {
    console.log(err, 'err');
    requestStatus.value = 'error';
    let msg = '请求失败';
    if (err instanceof Error) {
      msg = (err as Error).message;
    }
    else if (err instanceof UTSJSONObject) {
      const errMsg = (err as UTSJSONObject).getString('message') ?? (err as UTSJSONObject).getString('msg') ?? (err as UTSJSONObject).getString('errMsg');
      if (errMsg != null) {
        msg = errMsg;
      }
      else {
        msg = JSON.stringify(err);
      }
    }
    else if (err != null) {
      msg = `${err}`;
    }
    errorMsg.value = msg;
  }

  loading.value = false;
}

async function getUserInfo() {
  cloudLoading.value = true;
  cloudErrorMsg.value = '';

  try {
    const res = await uniCloud.importObject('user').getUserInfo();
    userInfo.value = JSON.stringify(res.data);
    console.log('res', res);
  }
  catch (err) {
    cloudErrorMsg.value = '云端数据获取失败，请检查 uniCloud 配置后重试';
    console.error('getUserInfo error:', err);
  }

  cloudLoading.value = false;
}

/**
 * 执行上传并展示结果
 */
async function uploadFileByPath(filePath: string) {
  if (DEFAULT_OSS_BASE_URL == '' || DEFAULT_OSS_BASE_URL.includes('xxx') || uploadPath.value == '' || uploadPath.value.includes('xxx')) {
    uploadError.value = '请在对应环境的 .env 文件中配置真实的 VITE_UPLOAD_BASEURL 与 VITE_UPLOAD_PATH';
    uni.showToast({
      title: '请先在 .env 中配置真实上传地址',
      icon: 'none'
    });
    return;
  }
  uploadLoading.value = true;
  uploadError.value = '';
  uploadResult.value = '';

  try {
    const ossUrl = await uploadFooFile(filePath, true, uploadPath.value);
    uploadResult.value = ossUrl;
  }
  catch (err) {
    let msg = '上传失败';
    if (err instanceof Error) {
      msg = (err as Error).message;
    }
    else if (err != null) {
      msg = `${err}`;
    }
    uploadError.value = msg;
  }

  uploadLoading.value = false;
}

/**
 * 选择图片并上传（uploadFooFile → utils/upload.uts → uni.uploadFile）
 */
function chooseAndUpload() {
  if (uploadLoading.value) {
    return;
  }
  uploadError.value = '';
  uni.chooseImage({
    count: 1,
    sourceType: ['album', 'camera'],
    success: (res) => {
      const paths = res.tempFilePaths;
      if (paths.length <= 0) {
        uploadError.value = '未选择文件';
        return;
      }
      uploadFileByPath(paths[0] as string);
    },
    fail: (err) => {
      console.log('chooseImage fail:', err);
      let errMsg = '';
      if (err != null && err.errMsg != null) {
        errMsg = `${err.errMsg}`;
      }
      // 用户主动取消时不显示为错误
      if (errMsg.includes('cancel')) {
        return;
      }
      uploadError.value = errMsg != '' ? `选择文件失败: ${errMsg}` : '选择文件失败';
    }
  });
}

/**
 * 复制 OSS 链接到剪贴板
 */
function copyUploadUrl() {
  const url = uploadResult.value;
  if (url == '') {
    return;
  }
  uni.setClipboardData({
    data: url,
    showToast: false,
    success: () => {
      uni.showToast({ title: '链接已复制', icon: 'success' });
    }
  });
}

/**
 * 点击查看图片大图
 */
function previewUploadedImage() {
  const url = uploadResult.value;
  if (url == '') {
    return;
  }
  uni.previewImage({
    urls: [url]
  });
}

// 页面挂载时自动加载 Mock 数据
onMounted(() => {
  loadMockData();
  getUserInfo();
});

return (): any | null => {

  return _cV(unref(Card), _uM({ title: "HTTP 请求 Demo" }), _uM({
    default: withSlotCtx((): any[] => [
      _cE("view", _uM({ class: "wtu-w0ubis-0 wtu-qf0h83-1 wtu-ecdk3o-2 wtu-wfs7cl-3 wtu-16hz6cp-4 wtu-1ns4j6f-5" }), [
        _cE("text", _uM({ class: "wtu-mcng40-6 wtu-pryky7-7 wtu-1vehn2-8" }), " 基于 lime-request 封装的 http 请求演示，包含 Mock 数据与真实接口请求两种模式。 ")
      ]),
      _cE("view", _uM({ class: "wtu-ecdk3o-2" }), [
        _cE("view", _uM({ class: "wtu-1p3s0p7-9 wtu-or3po3-a wtu-ok6iny-b wtu-vnac5q-c" }), [
          _cE("view", _uM({ class: "wtu-1p3s0p7-9 wtu-or3po3-a" }), [
            _cE("view", _uM({ class: "wtu-bx383i-d wtu-yg23h9-e wtu-1ny4yap-f wtu-1p6uh6r-g wtu-wfs7cl-3 wtu-16hz6cp-4 wtu-vuut8m-h wtu-or3po3-a wtu-ijj99f-i wtu-1hzxj1a-j" }), [
              _cE("text", _uM({ class: "wtu-mcng40-6 wtu-1gyo9ug-k wtu-1t7q418-l" }), "UC")
            ]),
            _cE("view", null, [
              _cE("text", _uM({ class: "wtu-owidvm-m wtu-1gyo9ug-k wtu-tbkcso-n" }), "uniCloud 云对象"),
              _cE("text", _uM({ class: "wtu-52xho3-o wtu-pryky7-7 wtu-1ur1rlt-p" }), "user.getUserInfo")
            ])
          ]),
          _cE("view", _uM({
            class: _nC(["wtu-1p3s0p7-9 wtu-or3po3-a wtu-1jy1lu-q wtu-t9pnvh-r wtu-edhfgi-s", cloudStatusBgClass.value])
          }), [
            _cE("view", _uM({
              class: _nC(["wtu-ga9uen-t wtu-1l83xre-u wtu-11tvxcq-v wtu-ofr59w-w", cloudStatusDotClass.value])
            }), null, 2 /* CLASS */),
            _cE("text", _uM({
              class: _nC(["wtu-52xho3-o", cloudStatusTextClass.value])
            }), _tD(cloudStatusText.value), 3 /* TEXT, CLASS */)
          ], 2 /* CLASS */)
        ]),
        _cE("view", _uM({ class: "wtu-1ny4yap-f wtu-18s889y-x wtu-wfs7cl-3 wtu-16hz6cp-4 wtu-2k7lhn-y wtu-4cqy02-z" }), [
          _cE("view", _uM({ class: "wtu-2crfgb-10 wtu-ehcs6-11" })),
          _cE("view", _uM({ class: "wtu-1115s0n-12" }), [
            _cE("view", _uM({ class: "wtu-1p3s0p7-9 wtu-or3po3-a wtu-ok6iny-b wtu-1awb42t-13" }), [
              _cE("text", _uM({ class: "wtu-52xho3-o wtu-pryky7-7" }), "响应数据"),
              _cE("text", _uM({ class: "wtu-ead332-14 wtu-6tsugz-15" }), "JSON")
            ]),
            isTrue(cloudLoading.value)
              ? _cE("text", _uM({
                  key: 0,
                  class: "wtu-mcng40-6 wtu-1t7q418-l"
                }), "正在连接云端服务...")
              : isTrue(hasCloudError.value)
                ? _cE("text", _uM({
                    key: 1,
                    class: "wtu-mcng40-6 wtu-1ivzueh-16"
                  }), _tD(cloudErrorMsg.value), 1 /* TEXT */)
                : _cE("text", _uM({
                    key: 2,
                    class: "wtu-mcng40-6 wtu-xg97j7-17 wtu-1vehn2-8"
                  }), _tD(userInfo.value), 1 /* TEXT */),
            isTrue(hasCloudError.value)
              ? _cE("view", _uM({
                  key: 3,
                  class: "wtu-17nc15w-18 wtu-1p3s0p7-9"
                }), [
                  _cE("view", _uM({
                    class: "wtu-yg23h9-e wtu-1us4hrd-19 wtu-1792i3v-1a wtu-1k2vmtw-1b wtu-or3po3-a wtu-ijj99f-i",
                    onClick: getUserInfo
                  }), [
                    _cE("text", _uM({ class: "wtu-mcng40-6 wtu-155p5he-1c" }), "重新获取")
                  ])
                ])
              : _cC("v-if", true)
          ])
        ])
      ]),
      _cE("view", _uM({ class: "wtu-ecdk3o-2" }), [
        _cE("text", _uM({ class: "wtu-owidvm-m wtu-1gyo9ug-k wtu-1e7koem-1d wtu-vnac5q-c" }), "Mock 数据列表（ID 为任意类型）"),
        _cE(Fragment, null, RenderHelpers.renderList(mockList.value, (item, index, __index, _cached): any => {
          return _cE("view", _uM({
            key: index,
            class: "wtu-1p3s0p7-9 wtu-or3po3-a wtu-1lgfe3e-1e wtu-1us4hrd-19 wtu-1y83w1l-1f wtu-1ny4yap-f wtu-yqo827-1g"
          }), [
            _cE("view", _uM({ class: "wtu-5wqmpn-1h wtu-sz6l4-1i wtu-1v2zgda-1j wtu-1i8kliw-1k wtu-ijj99f-i wtu-or3po3-a wtu-1hzxj1a-j" }), [
              _cE("text", _uM({ class: "wtu-mcng40-6 wtu-155p5he-1c wtu-1gyo9ug-k" }), _tD(item.id), 1 /* TEXT */)
            ]),
            _cE("text", _uM({ class: "wtu-owidvm-m wtu-xg97j7-17" }), _tD(item.name), 1 /* TEXT */)
          ])
        }), 128 /* KEYED_FRAGMENT */)
      ]),
      _cE("view", _uM({ class: "wtu-edhfgi-s wtu-1115s0n-12 wtu-ecdk3o-2 wtu-wfs7cl-3 wtu-16hz6cp-4 wtu-1ns4j6f-5" }), [
        _cE("view", _uM({ class: "wtu-1p3s0p7-9 wtu-ok6iny-b wtu-or3po3-a wtu-115s1if-1l" }), [
          _cE("text", _uM({ class: "wtu-mdu9q5-1m wtu-pryky7-7" }), "接口请求状态:"),
          _cE("view", _uM({
            class: _nC(["wtu-1jy1lu-q wtu-uaewvr-1n wtu-edhfgi-s", statusBgClass.value])
          }), [
            _cE("text", _uM({
              class: _nC(["wtu-mcng40-6", statusTextClass.value])
            }), _tD(statusText.value), 3 /* TEXT, CLASS */)
          ], 2 /* CLASS */)
        ]),
        isTrue(hasResponseData.value)
          ? _cE("view", _uM({
              key: 0,
              class: "wtu-kp3eq2-1o wtu-1ny4yap-f wtu-1ic2k2p-1p wtu-wfs7cl-3 wtu-16hz6cp-4 wtu-1ns4j6f-5"
            }), [
              _cE("text", _uM({ class: "wtu-mcng40-6 wtu-s98mzw-1q" }), _tD(responseText.value), 1 /* TEXT */)
            ])
          : _cC("v-if", true),
        isTrue(hasErrorMsg.value)
          ? _cE("view", _uM({
              key: 1,
              class: "wtu-snsrpe-1r wtu-1ny4yap-f wtu-1ic2k2p-1p wtu-wfs7cl-3 wtu-16hz6cp-4 wtu-1bi5jw-1s wtu-1cffqjh-1t"
            }), [
              _cE("text", _uM({ class: "wtu-mcng40-6 wtu-bquocn-1u" }), "错误：" + _tD(errorMsg.value), 1 /* TEXT */)
            ])
          : _cC("v-if", true)
      ]),
      _cE("view", _uM({ class: "wtu-1p3s0p7-9" }), [
        _cE("view", _uM({ class: "wtu-wy44gc-1v wtu-1hzxj1a-j" }), [
          _cE("view", _uM({
            class: "wtu-1i8kliw-1k wtu-1ny4yap-f wtu-10jafc4-1w wtu-1mbx3i8-1x wtu-io2yyi-1y wtu-1p3s0p7-9 wtu-or3po3-a wtu-ijj99f-i",
            onClick: loadMockData
          }), [
            _cE("text", _uM({ class: "wtu-1tndks6-1z wtu-owidvm-m" }), "加载 Mock 数据")
          ])
        ]),
        _cE("view", _uM({ class: "wtu-wy44gc-1v" }), [
          _cE("view", _uM({
            class: "wtu-1dwvvaj-20 wtu-1ny4yap-f wtu-10jafc4-1w wtu-1mbx3i8-1x wtu-io2yyi-1y wtu-1p3s0p7-9 wtu-or3po3-a wtu-ijj99f-i",
            onClick: fetchRealApi
          }), [
            _cE("text", _uM({ class: "wtu-1tndks6-1z wtu-owidvm-m" }), _tD(loading.value ? '请求中...' : '真实 API 请求'), 1 /* TEXT */)
          ])
        ])
      ]),
      _cE("view", _uM({ class: "wtu-1pmzy0e-21" }), [
        _cE("view", _uM({ class: "wtu-1p3s0p7-9 wtu-or3po3-a wtu-vnac5q-c" }), [
          _cE("view", _uM({ class: "wtu-bx383i-d wtu-yg23h9-e wtu-1ny4yap-f wtu-2bai5c-22 wtu-wfs7cl-3 wtu-16hz6cp-4 wtu-11ywkxn-23 wtu-or3po3-a wtu-ijj99f-i wtu-1hzxj1a-j" }), [
            _cE("text", _uM({ class: "wtu-mcng40-6 wtu-1gyo9ug-k wtu-wx16af-24" }), "UP")
          ]),
          _cE("view", _uM({ class: "wtu-wy44gc-1v" }), [
            _cE("text", _uM({ class: "wtu-owidvm-m wtu-1gyo9ug-k wtu-tbkcso-n" }), "文件上传"),
            _cE("text", _uM({ class: "wtu-52xho3-o wtu-pryky7-7 wtu-1ur1rlt-p" }), _tD(uploadPath.value), 1 /* TEXT */)
          ])
        ]),
        _cE("view", _uM({ class: "wtu-1p3s0p7-9 wtu-or3po3-a wtu-2bai5c-22 wtu-hw36l4-25 wtu-1792i3v-1a wtu-vnac5q-c wtu-wfs7cl-3 wtu-16hz6cp-4 wtu-bgknk1-26" }), [
          _cE("text", _uM({ class: "wtu-52xho3-o wtu-wx16af-24 wtu-bturnd-27 wtu-wy44gc-1v" }), " 💡 上传 OSS 接口地址支持直接在 .env 环境变量中配置（VITE_UPLOAD_BASEURL / VITE_UPLOAD_PATH） ")
        ]),
        _cE("view", _uM({ class: "wtu-1ny4yap-f wtu-18s889y-x wtu-wfs7cl-3 wtu-16hz6cp-4 wtu-2k7lhn-y wtu-4cqy02-z" }), [
          _cE("view", _uM({ class: "wtu-2crfgb-10 wtu-rp6t3a-28" })),
          _cE("view", _uM({ class: "wtu-1115s0n-12" }), [
            _cE("view", _uM({ class: "wtu-1p3s0p7-9 wtu-or3po3-a wtu-ok6iny-b wtu-1awb42t-13" }), [
              _cE("text", _uM({ class: "wtu-52xho3-o wtu-pryky7-7" }), "上传结果"),
              _cE("text", _uM({ class: "wtu-ead332-14 wtu-6tsugz-15" }), "POST")
            ]),
            isTrue(uploadLoading.value)
              ? _cE("text", _uM({
                  key: 0,
                  class: "wtu-mcng40-6 wtu-wx16af-24"
                }), "正在上传...")
              : isTrue(hasUploadError.value)
                ? _cE("text", _uM({
                    key: 1,
                    class: "wtu-mcng40-6 wtu-1ivzueh-16"
                  }), _tD(uploadError.value), 1 /* TEXT */)
                : isTrue(hasUploadResult.value)
                  ? _cE("view", _uM({ key: 2 }), [
                      _cE("view", _uM({ class: "wtu-or3po3-a wtu-ijj99f-i wtu-1lgfe3e-1e wtu-kp3eq2-1o wtu-1ny4yap-f wtu-wfs7cl-3 wtu-16hz6cp-4 wtu-1ns4j6f-5" }), [
                        _cE("image", _uM({
                          src: uploadResultText.value,
                          class: "wtu-1e5wgja-29 wtu-1q8psy7-2a wtu-1ny4yap-f",
                          mode: "aspectFill",
                          onClick: previewUploadedImage
                        }), null, 8 /* PROPS */, ["src"]),
                        _cE("text", _uM({ class: "wtu-ead332-14 wtu-6tsugz-15 wtu-1cffqjh-1t" }), "点击查看大图")
                      ]),
                      _cE("view", _uM({ class: "wtu-17nc15w-18 wtu-1ic2k2p-1p wtu-18s889y-x wtu-1ny4yap-f wtu-wfs7cl-3 wtu-16hz6cp-4 wtu-1ns4j6f-5" }), [
                        _cE("view", _uM({ class: "wtu-1p3s0p7-9 wtu-or3po3-a wtu-ok6iny-b wtu-115s1if-1l" }), [
                          _cE("view", _uM({ class: "wtu-1p3s0p7-9 wtu-or3po3-a" }), [
                            _cE("view", _uM({ class: "wtu-x3m0ie-2b wtu-1rl0xbz-2c wtu-rp6t3a-28 wtu-zn5xf3-2d wtu-q2u73r-2e" })),
                            _cE("text", _uM({ class: "wtu-52xho3-o wtu-1gyo9ug-k wtu-s98mzw-1q" }), "OSS 链接地址")
                          ]),
                          _cE("view", _uM({
                            class: "wtu-1jy1lu-q wtu-13huiaq-2f wtu-ymgoet-2g wtu-naxge4-2h wtu-1p3s0p7-9 wtu-or3po3-a",
                            onClick: copyUploadUrl
                          }), [
                            _cE("text", _uM({ class: "wtu-ead332-14 wtu-155p5he-1c wtu-1xw5jy8-2i" }), "复制链接")
                          ])
                        ]),
                        _cE("text", _uM({
                          class: "oss-url-text wtu-52xho3-o wtu-xg97j7-17 wtu-8o3aer-2j",
                          selectable: true
                        }), _tD(uploadResultText.value), 1 /* TEXT */)
                      ])
                    ])
                  : _cE("text", _uM({
                      key: 3,
                      class: "wtu-mcng40-6 wtu-6tsugz-15"
                    }), "未选择文件")
          ])
        ]),
        _cE("view", _uM({ class: "wtu-17nc15w-18" }), [
          _cE("view", _uM({
            class: "wtu-rp6t3a-28 wtu-1ny4yap-f wtu-10jafc4-1w wtu-1mbx3i8-1x wtu-io2yyi-1y wtu-1p3s0p7-9 wtu-or3po3-a wtu-ijj99f-i",
            onClick: chooseAndUpload
          }), [
            _cE("text", _uM({ class: "wtu-1tndks6-1z wtu-owidvm-m" }), _tD(uploadLoading.value ? '上传中...' : '选择图片并上传'), 1 /* TEXT */)
          ])
        ])
      ])
    ]),
    _: 1 /* STABLE */
  }))
}
}

})
export default __sfc__
const GenSrcPagesBasicComponentsHttpDemoCardStyles = [_uM([["wtu-w0ubis-0", _pS(_uM([["borderTopLeftRadius", 12], ["borderTopRightRadius", 12], ["borderBottomRightRadius", 12], ["borderBottomLeftRadius", 12]]))], ["wtu-qf0h83-1", _pS(_uM([["paddingTop", 16], ["paddingRight", 16], ["paddingBottom", 16], ["paddingLeft", 16]]))], ["wtu-ecdk3o-2", _pS(_uM([["marginBottom", 16]]))], ["wtu-wfs7cl-3", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "var(--tw-border-style)"], ["borderRightStyle", "var(--tw-border-style)"], ["borderBottomStyle", "var(--tw-border-style)"], ["borderLeftStyle", "var(--tw-border-style)"], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1]]))], ["wtu-16hz6cp-4", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["wtu-1ns4j6f-5", _pS(_uM([["borderTopColor", "#e2e8f0"], ["borderRightColor", "#e2e8f0"], ["borderBottomColor", "#e2e8f0"], ["borderLeftColor", "#e2e8f0"]]))], ["wtu-mcng40-6", _pS(_uM([["fontSize", 12]]))], ["wtu-pryky7-7", _pS(_uM([["color", "#64748b"]]))], ["wtu-1vehn2-8", _pS(_uM([["--tw-leading", "20px"], ["lineHeight", "20px"]]))], ["wtu-1p3s0p7-9", _pS(_uM([["flexDirection", "row"]]))], ["wtu-or3po3-a", _pS(_uM([["alignItems", "center"]]))], ["wtu-ok6iny-b", _pS(_uM([["justifyContent", "space-between"]]))], ["wtu-vnac5q-c", _pS(_uM([["marginBottom", 10]]))], ["wtu-bx383i-d", _pS(_uM([["width", 32]]))], ["wtu-yg23h9-e", _pS(_uM([["height", 32]]))], ["wtu-1ny4yap-f", _pS(_uM([["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["wtu-1p6uh6r-g", _pS(_uM([["backgroundColor", "#e6fffb"]]))], ["wtu-vuut8m-h", _pS(_uM([["borderTopColor", "#99f6e4"], ["borderRightColor", "#99f6e4"], ["borderBottomColor", "#99f6e4"], ["borderLeftColor", "#99f6e4"]]))], ["wtu-ijj99f-i", _pS(_uM([["justifyContent", "center"]]))], ["wtu-1hzxj1a-j", _pS(_uM([["marginRight", 10]]))], ["wtu-1gyo9ug-k", _pS(_uM([["--tw-font-weight", "var(--font-weight-bold, 700)"], ["fontWeight", 700]]))], ["wtu-1t7q418-l", _pS(_uM([["color", "#0f766e"]]))], ["wtu-owidvm-m", _pS(_uM([["fontSize", 14]]))], ["wtu-tbkcso-n", _pS(_uM([["color", "#1e293b"]]))], ["wtu-52xho3-o", _pS(_uM([["fontSize", 11]]))], ["wtu-1ur1rlt-p", _pS(_uM([["marginTop", 2]]))], ["wtu-1jy1lu-q", _pS(_uM([["paddingLeft", 8], ["paddingRight", 8]]))], ["wtu-t9pnvh-r", _pS(_uM([["paddingTop", 4], ["paddingBottom", 4]]))], ["wtu-edhfgi-s", _pS(_uM([["borderTopLeftRadius", 10], ["borderTopRightRadius", 10], ["borderBottomRightRadius", 10], ["borderBottomLeftRadius", 10]]))], ["wtu-ga9uen-t", _pS(_uM([["width", 6]]))], ["wtu-1l83xre-u", _pS(_uM([["height", 6]]))], ["wtu-11tvxcq-v", _pS(_uM([["borderTopLeftRadius", 3], ["borderTopRightRadius", 3], ["borderBottomRightRadius", 3], ["borderBottomLeftRadius", 3]]))], ["wtu-ofr59w-w", _pS(_uM([["marginRight", 5]]))], ["wtu-18s889y-x", _pS(_uM([["backgroundColor", "#f8fafc"]]))], ["wtu-2k7lhn-y", _pS(_uM([["borderTopColor", "#cbd5e1"], ["borderRightColor", "#cbd5e1"], ["borderBottomColor", "#cbd5e1"], ["borderLeftColor", "#cbd5e1"]]))], ["wtu-4cqy02-z", _pS(_uM([["overflow", "hidden"]]))], ["wtu-2crfgb-10", _pS(_uM([["height", 3]]))], ["wtu-ehcs6-11", _pS(_uM([["backgroundColor", "#14b8a6"]]))], ["wtu-1115s0n-12", _pS(_uM([["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12]]))], ["wtu-1awb42t-13", _pS(_uM([["marginBottom", 8]]))], ["wtu-ead332-14", _pS(_uM([["fontSize", 10]]))], ["wtu-6tsugz-15", _pS(_uM([["color", "#94a3b8"]]))], ["wtu-1ivzueh-16", _pS(_uM([["color", "#dc2626"]]))], ["wtu-xg97j7-17", _pS(_uM([["color", "#334155"]]))], ["wtu-17nc15w-18", _pS(_uM([["marginTop", 10]]))], ["wtu-1us4hrd-19", _pS(_uM([["paddingLeft", 12], ["paddingRight", 12]]))], ["wtu-1792i3v-1a", _pS(_uM([["borderTopLeftRadius", 6], ["borderTopRightRadius", 6], ["borderBottomRightRadius", 6], ["borderBottomLeftRadius", 6]]))], ["wtu-1k2vmtw-1b", _pS(_uM([["backgroundColor", "#0f766e"]]))], ["wtu-155p5he-1c", _pS(_uM([["color", "#ffffff"]]))], ["wtu-1e7koem-1d", _pS(_uM([["color", "#2d3748"]]))], ["wtu-1lgfe3e-1e", _pS(_uM([["paddingTop", 10], ["paddingBottom", 10]]))], ["wtu-1y83w1l-1f", _pS(_uM([["backgroundColor", "#f1f5f9"]]))], ["wtu-yqo827-1g", _pS(_uM([["marginTop", 8]]))], ["wtu-5wqmpn-1h", _pS(_uM([["width", 28]]))], ["wtu-sz6l4-1i", _pS(_uM([["height", 28]]))], ["wtu-1v2zgda-1j", _pS(_uM([["borderTopLeftRadius", 14], ["borderTopRightRadius", 14], ["borderBottomRightRadius", 14], ["borderBottomLeftRadius", 14]]))], ["wtu-1i8kliw-1k", _pS(_uM([["backgroundColor", "#3182ce"]]))], ["wtu-115s1if-1l", _pS(_uM([["marginBottom", 6]]))], ["wtu-mdu9q5-1m", _pS(_uM([["fontSize", 13]]))], ["wtu-uaewvr-1n", _pS(_uM([["paddingTop", 2], ["paddingBottom", 2]]))], ["wtu-kp3eq2-1o", _pS(_uM([["backgroundColor", "#ffffff"]]))], ["wtu-1ic2k2p-1p", _pS(_uM([["paddingTop", 10], ["paddingRight", 10], ["paddingBottom", 10], ["paddingLeft", 10]]))], ["wtu-s98mzw-1q", _pS(_uM([["color", "#475569"]]))], ["wtu-snsrpe-1r", _pS(_uM([["backgroundColor", "#fff5f5"]]))], ["wtu-1bi5jw-1s", _pS(_uM([["borderTopColor", "#fecaca"], ["borderRightColor", "#fecaca"], ["borderBottomColor", "#fecaca"], ["borderLeftColor", "#fecaca"]]))], ["wtu-1cffqjh-1t", _pS(_uM([["marginTop", 6]]))], ["wtu-bquocn-1u", _pS(_uM([["color", "#ef4444"]]))], ["wtu-wy44gc-1v", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["wtu-10jafc4-1w", _pS(_uM([["height", 42]]))], ["wtu-1mbx3i8-1x", _pS(_uM([["width", "100%"]]))], ["wtu-io2yyi-1y", _pS(_uM([["display", "flex"]]))], ["wtu-1tndks6-1z", _pS(_uM([["color", "#ffffff"]]))], ["wtu-1dwvvaj-20", _pS(_uM([["backgroundColor", "#10b981"]]))], ["wtu-1pmzy0e-21", _pS(_uM([["marginTop", 16]]))], ["wtu-2bai5c-22", _pS(_uM([["backgroundColor", "#fff7ed"]]))], ["wtu-11ywkxn-23", _pS(_uM([["borderTopColor", "#fdba74"], ["borderRightColor", "#fdba74"], ["borderBottomColor", "#fdba74"], ["borderLeftColor", "#fdba74"]]))], ["wtu-wx16af-24", _pS(_uM([["color", "#c2410c"]]))], ["wtu-hw36l4-25", _pS(_uM([["paddingTop", 8], ["paddingRight", 8], ["paddingBottom", 8], ["paddingLeft", 8]]))], ["wtu-bgknk1-26", _pS(_uM([["borderTopColor", "#ffedd5"], ["borderRightColor", "#ffedd5"], ["borderBottomColor", "#ffedd5"], ["borderLeftColor", "#ffedd5"]]))], ["wtu-bturnd-27", _pS(_uM([["--tw-leading", "16px"], ["lineHeight", "16px"]]))], ["wtu-rp6t3a-28", _pS(_uM([["backgroundColor", "#f97316"]]))], ["wtu-1e5wgja-29", _pS(_uM([["width", 120]]))], ["wtu-1q8psy7-2a", _pS(_uM([["height", 120]]))], ["wtu-x3m0ie-2b", _pS(_uM([["width", 3]]))], ["wtu-1rl0xbz-2c", _pS(_uM([["height", 12]]))], ["wtu-zn5xf3-2d", _pS(_uM([["borderTopLeftRadius", 2], ["borderTopRightRadius", 2], ["borderBottomRightRadius", 2], ["borderBottomLeftRadius", 2]]))], ["wtu-q2u73r-2e", _pS(_uM([["marginRight", 6]]))], ["wtu-13huiaq-2f", _pS(_uM([["paddingTop", 3], ["paddingBottom", 3]]))], ["wtu-ymgoet-2g", _pS(_uM([["borderTopLeftRadius", 4], ["borderTopRightRadius", 4], ["borderBottomRightRadius", 4], ["borderBottomLeftRadius", 4]]))], ["wtu-naxge4-2h", _pS(_uM([["backgroundColor", "#ea580c"]]))], ["wtu-1xw5jy8-2i", _pS(_uM([["--tw-font-weight", "var(--font-weight-medium, 500)"], ["fontWeight", 500]]))], ["wtu-8o3aer-2j", _pS(_uM([["--tw-leading", "18px"], ["lineHeight", "18px"]]))], ["wtu-kl45yb-2k", _pS(_uM([["color", "#d97706"]]))], ["wtu-fv1izt-2l", _pS(_uM([["color", "#059669"]]))], ["wtu-1xrn6ww-2m", _pS(_uM([["backgroundColor", "#fef9c3"]]))], ["wtu-k3m9e2-2n", _pS(_uM([["backgroundColor", "#d1fae5"]]))], ["wtu-1jk4s61-2o", _pS(_uM([["backgroundColor", "#fee2e2"]]))], ["wtu-p7uzb7-2p", _pS(_uM([["backgroundColor", "#ccfbf1"]]))], ["wtu-o857rv-2q", _pS(_uM([["backgroundColor", "#d97706"]]))], ["wtu-1f8d0xd-2r", _pS(_uM([["backgroundColor", "#dc2626"]]))]]),_uM([["wtu-tcezrl-2s", _pS(_uM([["backgroundColor", "#0d9488"]]))], ["wtu-92z56f-2t", _pS(_uM([["color", "#a16207"]]))], ["wtu-y8jpqd-2u", _pS(_uM([["color", "#b91c1c"]]))]])]
