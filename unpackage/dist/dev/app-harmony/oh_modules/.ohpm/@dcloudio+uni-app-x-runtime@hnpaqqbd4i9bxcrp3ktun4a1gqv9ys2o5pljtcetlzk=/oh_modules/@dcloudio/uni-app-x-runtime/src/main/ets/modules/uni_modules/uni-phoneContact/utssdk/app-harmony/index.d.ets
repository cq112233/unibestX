import { UTSObject, IUniError } from "@dcloudio/uni-app-framework";
type AddPhoneContact = (options: AddPhoneContactOptions) => void;
declare class AddPhoneContactSuccess extends UTSObject {
}
type AddPhoneContactSuccessCallback = (result: AddPhoneContactSuccess) => void;
type AddPhoneContactErrorCode = 601 | 602 | 603;
interface IAddPhoneContactFail extends IUniError {
    errCode: AddPhoneContactErrorCode;
}
type AddPhoneContactFail = IAddPhoneContactFail;
type AddPhoneContactFailCallback = (result: AddPhoneContactFail) => void;
type AddPhoneContactComplete = AddPhoneContactSuccess | AddPhoneContactFail;
type AddPhoneContactCompleteCallback = (result: AddPhoneContactComplete) => void;
declare class AddPhoneContactOptions extends UTSObject {
    photoFilePath: string | null;
    nickName: string | null;
    lastName: string | null;
    middleName: string | null;
    firstName: string | null;
    remark: string | null;
    mobilePhoneNumber: string | null;
    weChatNumber: string | null;
    addressCountry: string | null;
    addressState: string | null;
    addressCity: string | null;
    addressStreet: string | null;
    addressPostalCode: string | null;
    organization: string | null;
    title: string | null;
    workFaxNumber: string | null;
    workPhoneNumber: string | null;
    hostNumber: string | null;
    email: string | null;
    url: string | null;
    workAddressCountry: string | null;
    workAddressState: string | null;
    workAddressCity: string | null;
    workAddressStreet: string | null;
    workAddressPostalCode: string | null;
    homeFaxNumber: string | null;
    homePhoneNumber: string | null;
    homeAddressCountry: string | null;
    homeAddressState: string | null;
    homeAddressCity: string | null;
    homeAddressStreet: string | null;
    homeAddressPostalCode: string | null;
    success: AddPhoneContactSuccessCallback | null;
    fail: AddPhoneContactFailCallback | null;
    complete: AddPhoneContactCompleteCallback | null;
}
type ChooseContact = (options: ChooseContactOptions) => void;
declare class ChooseContactSuccess extends UTSObject {
    displayName: string;
    phoneNumber: string;
    phoneNumberList: Array<string>;
    errMsg: string;
}
type ChooseContactSuccessCallback = (result: ChooseContactSuccess) => void;
type ChooseContactErrorCode = 601 | 602 | 603;
interface IChooseContactFail extends IUniError {
    errCode: ChooseContactErrorCode;
}
type ChooseContactFail = IChooseContactFail;
type ChooseContactFailCallback = (result: ChooseContactFail) => void;
type ChooseContactComplete = ChooseContactSuccess | ChooseContactFail;
type ChooseContactCompleteCallback = (result: ChooseContactComplete) => void;
declare class ChooseContactOptions extends UTSObject {
    success: ChooseContactSuccessCallback | null;
    fail: ChooseContactFailCallback | null;
    complete: ChooseContactCompleteCallback | null;
}
declare const addPhoneContact: AddPhoneContact;
declare const chooseContact: ChooseContact;
export { AddPhoneContact as AddPhoneContact, AddPhoneContactComplete as AddPhoneContactComplete, AddPhoneContactCompleteCallback as AddPhoneContactCompleteCallback, AddPhoneContactFail as AddPhoneContactFail, AddPhoneContactFailCallback as AddPhoneContactFailCallback, AddPhoneContactOptions as AddPhoneContactOptions, AddPhoneContactSuccess as AddPhoneContactSuccess, AddPhoneContactSuccessCallback as AddPhoneContactSuccessCallback, ChooseContact as ChooseContact, ChooseContactComplete as ChooseContactComplete, ChooseContactCompleteCallback as ChooseContactCompleteCallback, ChooseContactFail as ChooseContactFail, ChooseContactFailCallback as ChooseContactFailCallback, ChooseContactOptions as ChooseContactOptions, ChooseContactSuccess as ChooseContactSuccess, ChooseContactSuccessCallback as ChooseContactSuccessCallback };
export { AddPhoneContactErrorCode as AddPhoneContactErrorCode, ChooseContactErrorCode as ChooseContactErrorCode, IAddPhoneContactFail as IAddPhoneContactFail, IChooseContactFail as IChooseContactFail };
export { addPhoneContact as addPhoneContact };
export { chooseContact as chooseContact };
