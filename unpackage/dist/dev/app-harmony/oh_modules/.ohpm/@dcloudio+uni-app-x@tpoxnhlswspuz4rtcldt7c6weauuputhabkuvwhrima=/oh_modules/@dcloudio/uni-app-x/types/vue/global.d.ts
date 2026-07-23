import {
  // slider
  SliderChangeEvent as SliderChangeEventOrigin,
  SliderChangeEventDetail as SliderChangeEventDetailOrigin,
  UniSliderChangeEvent as UniSliderChangeEventOrigin,
  UniSliderChangeEventDetail as UniSliderChangeEventDetailOrigin,
  UniSliderElement as UniSliderElementOrigin,
  // switch
  UniSwitchChangeEvent as UniSwitchChangeEventOrigin,
  UniSwitchChangeEventDetail as UniSwitchChangeEventDetailOrigin,
  UniSwitchElement as UniSwitchElementOrigin,
  SwitchChangeEvent as SwitchChangeEventOrigin,
  SwitchChangeEventDetail as SwitchChangeEventDetailOrigin,
  // checkbox
  UniCheckboxGroupChangeEventDetail as UniCheckboxGroupChangeEventDetailOrigin,
  UniCheckboxElement as UniCheckboxElementOrigin,
  UniCheckboxGroupChangeEvent as UniCheckboxGroupChangeEventOrigin,
  CheckboxGroupChangeEvent as CheckboxGroupChangeEventOrigin,
  CheckboxGroupChangeEventDetail as CheckboxGroupChangeEventDetailOrigin,

  // picker
  UniPickerChangeEvent as UniPickerChangeEventOrigin,
  UniPickerChangeEventDetail as UniPickerChangeEventDetailOrigin,
  UniPickerElement as UniPickerElementOrigin,
  PickerChangeEvent as PickerChangeEventOrigin,
  PickerChangeEventDetail as PickerChangeEventDetailOrigin,

  // PickerColumn
  UniPickerColumnChangeEvent as UniPickerColumnChangeEventOrigin,
  UniPickerColumnChangeEventDetail as UniPickerColumnChangeEventDetailOrigin,
  UniPickerColumnElement as UniPickerColumnElementOrigin,
  PickerColumnChangeEvent as PickerColumnChangeEventOrigin,
  PickerColumnChangeEventDetail as PickerColumnChangeEventDetailOrigin,

  // picker view
  UniPickerViewColumnElement as UniPickerViewColumnElementOrigin,
  UniPickerViewElement as UniPickerViewElementOrigin,
  UniPickerViewChangeEventDetail as UniPickerViewChangeEventDetailOrigin,
  UniPickerViewChangeEvent as UniPickerViewChangeEventOrigin,
  PickerViewChangeEvent as PickerViewChangeEventOrigin,
  PickerViewChangeEventDetail as PickerViewChangeEventDetailOrigin,
  // progress
  UniProgressElement as UniProgressElementOrigin,
  UniProgressActiveendEvent as UniProgressActiveendEventOrigin,
  UniProgressActiveendEventDetail as UniProgressActiveendEventDetailOrigin,
  ProgressActiveendEvent as ProgressActiveendEventOrigin,
  ProgressActiveendEventDetail as ProgressActiveendEventDetailOrigin,
  // radio
  UniRadioGroupElement as UniRadioGroupElementOrigin,
  RadioGroupChangeEvent as RadioGroupChangeEventOrigin,
  RadioGroupChangeEventDetail as RadioGroupChangeEventDetailOrigin,
  UniRadioGroupChangeEvent as UniRadioGroupChangeEventOrigin,
  UniRadioGroupChangeEventDetail as UniRadioGroupChangeEventDetailOrigin,
  // navigator
  UniNavigatorElement as UniNavigatorElementOrigin,
  // form
  UniFormElement as UniFormElementOrigin,
  UniFormSubmitEventDetail as UniFormSubmitEventDetailOrigin,
  UniFormSubmitEvent as UniFormSubmitEventOrigin,
  UniFormResetEventDetail as UniFormResetEventDetailOrigin,
  UniFormResetEvent as UniFormResetEventOrigin,
  FormSubmitEvent as FormSubmitEventOrigin,
  FormSubmitEventDetail as FormSubmitEventDetailOrigin,
  FormResetEvent as FormResetEventOrigin,
  FormResetEventDetail as FormResetEventDetailOrigin,
  UniCloudDBComponentAddOptions as UniCloudDBComponentAddOptionsOrigin,
  UniCloudDBComponentRemoveOptions as UniCloudDBComponentRemoveOptionsOrigin,
  UniCloudDBComponentLoadDataOptions as UniCloudDBComponentLoadDataOptionsOrigin,
  UniCloudDBComponentPaginationType as UniCloudDBComponentPaginationTypeOrigin,
  UniCloudDBComponentUpdateOptions as UniCloudDBComponentUpdateOptionsOrigin,
  UniCloudDBElement as UniCloudDBElementOrigin,
  // lifecycle
  onHide as onHideOrigin,
  onLaunch as onLaunchOrigin,
  onAppHide as onAppHideOrigin,
  onAppShow as onAppShowOrigin,
  onLastPageBackPress as onLastPageBackPressOrigin,
  onExit as onExitOrigin,
  onBackPress as onBackPressOrigin,
  onLoad as onLoadOrigin,
  onPageHide as onPageHideOrigin,
  onPageScroll as onPageScrollOrigin,
  onPageShow as onPageShowOrigin,
  onPullDownRefresh as onPullDownRefreshOrigin,
  onReachBottom as onReachBottomOrigin,
  onReady as onReadyOrigin,
  onResize as onResizeOrigin,
  onUnload as onUnloadOrigin,
} from "./index"

declare global {
  // slider
  var UniSliderChangeEvent: typeof UniSliderChangeEventOrigin
  type UniSliderChangeEvent = UniSliderChangeEventOrigin
  var UniSliderChangeEventDetail: typeof UniSliderChangeEventDetailOrigin
  type UniSliderChangeEventDetail = UniSliderChangeEventDetailOrigin
  var UniSliderElement: typeof UniSliderElementOrigin
  type UniSliderElement = UniSliderElementOrigin
  var SliderChangeEvent: typeof SliderChangeEventOrigin
  type SliderChangeEvent = SliderChangeEventOrigin
  var SliderChangeEventDetail: typeof SliderChangeEventDetailOrigin
  type SliderChangeEventDetail = SliderChangeEventDetailOrigin
  // switch
  var UniSwitchChangeEvent: typeof UniSwitchChangeEventOrigin
  type UniSwitchChangeEvent = UniSwitchChangeEventOrigin
  var UniSwitchChangeEventDetail: typeof UniSwitchChangeEventDetailOrigin
  type UniSwitchChangeEventDetail = UniSwitchChangeEventDetailOrigin
  var UniSwitchElement: typeof UniSwitchElementOrigin
  type UniSwitchElement = UniSwitchElementOrigin
  var SwitchChangeEvent: typeof SwitchChangeEventOrigin
  type SwitchChangeEvent = SwitchChangeEventOrigin
  var SwitchChangeEventDetail: typeof SwitchChangeEventDetailOrigin
  type SwitchChangeEventDetail = SwitchChangeEventDetailOrigin
  // checkbox
  var UniCheckboxGroupChangeEventDetail: typeof UniCheckboxGroupChangeEventDetailOrigin
  type UniCheckboxGroupChangeEventDetail = UniCheckboxGroupChangeEventDetailOrigin
  var UniCheckboxGroupChangeEvent: typeof UniCheckboxGroupChangeEventOrigin
  type UniCheckboxGroupChangeEvent = UniCheckboxGroupChangeEventOrigin
  var UniCheckboxElement: typeof UniCheckboxElementOrigin
  type UniCheckboxElement = UniCheckboxElementOrigin
  var CheckboxGroupChangeEvent: typeof CheckboxGroupChangeEventOrigin
  type CheckboxGroupChangeEvent = CheckboxGroupChangeEventOrigin
  var CheckboxGroupChangeEventDetail: typeof CheckboxGroupChangeEventDetailOrigin
  type CheckboxGroupChangeEventDetail = CheckboxGroupChangeEventDetailOrigin

	// picker
	var UniPickerChangeEvent: typeof UniPickerChangeEventOrigin
	type UniPickerChangeEvent = UniPickerChangeEventOrigin
	var UniPickerChangeEventDetail: typeof UniPickerChangeEventDetailOrigin
	type UniPickerChangeEventDetail = UniPickerChangeEventDetailOrigin
	var UniPickerElement: typeof UniPickerElementOrigin
	type UniPickerElement = UniPickerElementOrigin
	var PickerChangeEvent: typeof PickerChangeEventOrigin
	type PickerChangeEvent = PickerChangeEventOrigin
	var PickerChangeEventDetail: typeof PickerChangeEventDetailOrigin
	type PickerChangeEventDetail = PickerChangeEventDetailOrigin

  // PickerColumn
  var UniPickerColumnChangeEvent: typeof UniPickerColumnChangeEventOrigin
  type UniPickerColumnChangeEvent = UniPickerColumnChangeEventOrigin
  var UniPickerColumnChangeEventDetail: typeof UniPickerColumnChangeEventDetailOrigin
  type UniPickerColumnChangeEventDetail = UniPickerColumnChangeEventDetailOrigin
  var UniPickerColumnElement: typeof UniPickerColumnElementOrigin
  type UniPickerColumnElement = UniPickerColumnElementOrigin
  var PickerColumnChangeEvent: typeof PickerColumnChangeEventOrigin
  type PickerColumnChangeEvent = PickerColumnChangeEventOrigin
  var PickerColumnChangeEventDetail: typeof PickerColumnChangeEventDetailOrigin
  type PickerColumnChangeEventDetail = PickerColumnChangeEventDetailOrigin

  // pickerview
  var UniPickerViewColumnElement: typeof UniPickerViewColumnElementOrigin
  type UniPickerViewColumnElement = UniPickerViewColumnElementOrigin
  var UniPickerViewElement: typeof UniPickerViewElementOrigin
  type UniPickerViewElement = UniPickerViewElementOrigin
  var UniPickerViewChangeEventDetail: UniPickerViewChangeEventDetailOrigin
  type UniPickerViewChangeEventDetail = UniPickerViewChangeEventDetailOrigin
  var UniPickerViewChangeEvent: UniPickerViewChangeEventOrigin
  type UniPickerViewChangeEvent = UniPickerViewChangeEventOrigin
  var PickerViewChangeEvent: typeof PickerViewChangeEventOrigin
  type PickerViewChangeEvent = PickerViewChangeEventOrigin
  var PickerViewChangeEventDetail: typeof PickerViewChangeEventDetailOrigin
  type PickerViewChangeEventDetail = PickerViewChangeEventDetailOrigin
  // Progress
  var UniProgressElement: typeof UniProgressElementOrigin
  type UniProgressElement = UniProgressElementOrigin
  var UniProgressActiveendEvent: typeof UniProgressActiveendEventOrigin
  type UniProgressActiveendEvent = UniProgressActiveendEventOrigin
  var UniProgressActiveendEventDetail: typeof UniProgressActiveendEventDetailOrigin
  type UniProgressActiveendEventDetail = UniProgressActiveendEventDetailOrigin
  var ProgressActiveendEvent: typeof ProgressActiveendEventOrigin
  type ProgressActiveendEvent = ProgressActiveendEventOrigin
  var ProgressActiveendEventDetail: typeof ProgressActiveendEventDetailOrigin
  type ProgressActiveendEventDetail = ProgressActiveendEventDetailOrigin
  // radio
  var UniRadioGroupElement: typeof UniRadioGroupElementOrigin
  type UniRadioGroupElement = UniRadioGroupElementOrigin
  var UniRadioGroupChangeEvent: UniRadioGroupChangeEventOrigin
  type UniRadioGroupChangeEvent = UniRadioGroupChangeEventOrigin
  var UniRadioGroupChangeEventDetail: UniRadioGroupChangeEventDetailOrigin
  type UniRadioGroupChangeEventDetail = UniRadioGroupChangeEventDetailOrigin
  var RadioGroupChangeEvent: RadioGroupChangeEventOrigin
  type RadioGroupChangeEvent = RadioGroupChangeEventOrigin
  var RadioGroupChangeEventDetail: RadioGroupChangeEventDetailOrigin
  type RadioGroupChangeEventDetail = RadioGroupChangeEventDetailOrigin
  // navigator
  var UniNavigatorElement: typeof UniNavigatorElementOrigin
  // form
  var UniFormElement: typeof UniFormElementOrigin
  type UniFormElement = UniFormElementOrigin
  var UniFormSubmitEventDetail: UniFormSubmitEventDetailOrigin
  type UniFormSubmitEventDetail = UniFormSubmitEventDetailOrigin
  var UniFormSubmitEvent: UniFormSubmitEventOrigin
  type UniFormSubmitEvent = UniFormSubmitEventOrigin
  var UniFormResetEventDetail: UniFormResetEventDetailOrigin
  type UniFormResetEventDetail = UniFormResetEventDetailOrigin
  var UniFormResetEvent: UniFormResetEventOrigin
  type UniFormResetEvent = UniFormResetEventOrigin
  var FormSubmitEvent: FormSubmitEventOrigin
  type FormSubmitEvent = FormSubmitEventOrigin
  var FormSubmitEventDetail: FormSubmitEventDetailOrigin
  type FormSubmitEventDetail = FormSubmitEventDetailOrigin
  var FormResetEvent: FormResetEventOrigin
  type FormResetEvent = FormResetEventOrigin
  var FormResetEventDetail: FormResetEventDetailOrigin
  type FormResetEventDetail = FormResetEventDetailOrigin
  // uni cloud
  type UniCloudDBComponentAddOptions = UniCloudDBComponentAddOptionsOrigin
  type UniCloudDBComponentRemoveOptions = UniCloudDBComponentRemoveOptionsOrigin
  type UniCloudDBComponentLoadDataOptions = UniCloudDBComponentLoadDataOptionsOrigin
  type UniCloudDBComponentPaginationType = UniCloudDBComponentPaginationTypeOrigin
  type UniCloudDBComponentUpdateOptions = UniCloudDBComponentUpdateOptionsOrigin
  type UniCloudDBElement = UniCloudDBElementOrigin
  var UniCloudDBElement: typeof UniCloudDBElementOrigin
  // lifecycle
  var onHide: typeof onHideOrigin
  var onLaunch: typeof onLaunchOrigin
  var onAppHide: typeof onAppHideOrigin
  var onAppShow: typeof onAppShowOrigin
  var onLastPageBackPress: typeof onLastPageBackPressOrigin
  var onExit: typeof onExitOrigin
  var onBackPress: typeof onBackPressOrigin
  var onLoad: typeof onLoadOrigin
  var onPageHide: typeof onPageHideOrigin
  var onPageScroll: typeof onPageScrollOrigin
  var onPageShow: typeof onPageShowOrigin
  var onPullDownRefresh: typeof onPullDownRefreshOrigin
  var onReachBottom: typeof onReachBottomOrigin
  var onReady: typeof onReadyOrigin
  var onResize: typeof onResizeOrigin
  var onUnload: typeof onUnloadOrigin
}
