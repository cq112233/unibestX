import type { BusinessError } from "@ohos:base";
import { UTSObject, uni, UniError, UTSJSONObject, UTS, UTSHarmony } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import type { IUniError, CompressImageSuccess, CompressImageFail, CompressImageOptions, ShowActionSheetSuccess, ShowActionSheetFail, ShowActionSheetOptions } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import contact from "@ohos:contact";
import fileUri from "@ohos:file.fileuri";
type AddPhoneContact = (options: AddPhoneContactOptions) => void;
class AddPhoneContactSuccess extends UTSObject {
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
class AddPhoneContactOptions extends UTSObject {
    photoFilePath: string | null = null;
    nickName: string | null = null;
    lastName: string | null = null;
    middleName: string | null = null;
    firstName: string | null = null;
    remark: string | null = null;
    mobilePhoneNumber: string | null = null;
    weChatNumber: string | null = null;
    addressCountry: string | null = null;
    addressState: string | null = null;
    addressCity: string | null = null;
    addressStreet: string | null = null;
    addressPostalCode: string | null = null;
    organization: string | null = null;
    title: string | null = null;
    workFaxNumber: string | null = null;
    workPhoneNumber: string | null = null;
    hostNumber: string | null = null;
    email: string | null = null;
    url: string | null = null;
    workAddressCountry: string | null = null;
    workAddressState: string | null = null;
    workAddressCity: string | null = null;
    workAddressStreet: string | null = null;
    workAddressPostalCode: string | null = null;
    homeFaxNumber: string | null = null;
    homePhoneNumber: string | null = null;
    homeAddressCountry: string | null = null;
    homeAddressState: string | null = null;
    homeAddressCity: string | null = null;
    homeAddressStreet: string | null = null;
    homeAddressPostalCode: string | null = null;
    success: AddPhoneContactSuccessCallback | null = null;
    fail: AddPhoneContactFailCallback | null = null;
    complete: AddPhoneContactCompleteCallback | null = null;
}
type ChooseContact = (options: ChooseContactOptions) => void;
class ChooseContactSuccess extends UTSObject {
    displayName!: string;
    phoneNumber!: string;
    phoneNumberList!: Array<string>;
    errMsg!: string;
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
class ChooseContactOptions extends UTSObject {
    success: ChooseContactSuccessCallback | null = null;
    fail: ChooseContactFailCallback | null = null;
    complete: ChooseContactCompleteCallback | null = null;
}
type ContactActionMode = 'create' | 'existing';
class ContactActionSheetTexts extends UTSObject {
    createNew!: string;
    addToExisting!: string;
}
function hasText(value: string | null | undefined): boolean {
    if (value == null) {
        return false;
    }
    const text = value as string;
    return text.length > 0;
}
function cloneAddPhoneContactOptions(options: AddPhoneContactOptions): AddPhoneContactOptions {
    return {
        photoFilePath: options.photoFilePath,
        nickName: options.nickName,
        lastName: options.lastName,
        middleName: options.middleName,
        firstName: options.firstName,
        remark: options.remark,
        mobilePhoneNumber: options.mobilePhoneNumber,
        weChatNumber: options.weChatNumber,
        addressCountry: options.addressCountry,
        addressState: options.addressState,
        addressCity: options.addressCity,
        addressStreet: options.addressStreet,
        addressPostalCode: options.addressPostalCode,
        organization: options.organization,
        title: options.title,
        workFaxNumber: options.workFaxNumber,
        workPhoneNumber: options.workPhoneNumber,
        hostNumber: options.hostNumber,
        email: options.email,
        url: options.url,
        workAddressCountry: options.workAddressCountry,
        workAddressState: options.workAddressState,
        workAddressCity: options.workAddressCity,
        workAddressStreet: options.workAddressStreet,
        workAddressPostalCode: options.workAddressPostalCode,
        homeFaxNumber: options.homeFaxNumber,
        homePhoneNumber: options.homePhoneNumber,
        homeAddressCountry: options.homeAddressCountry,
        homeAddressState: options.homeAddressState,
        homeAddressCity: options.homeAddressCity,
        homeAddressStreet: options.homeAddressStreet,
        homeAddressPostalCode: options.homeAddressPostalCode,
        success: options.success,
        fail: options.fail,
        complete: options.complete
    } as AddPhoneContactOptions;
}
function normalizeLanguageTag(language: string | null): string {
    if (language == null) {
        return '';
    }
    const tag = language as string;
    return tag;
}
function isTraditionalChinese(language: string): boolean {
    return language == 'zh-HK' || language == 'zh-TW' || language == 'zh-MO' || language == 'zh-Hant';
}
function isSimplifiedChinese(language: string): boolean {
    return language == 'zh-CN' || language == 'zh-SG' || language == 'zh-Hans' || language == 'zh' || language == 'zh-Hans-CN';
}
function getActionSheetTexts(): ContactActionSheetTexts {
    const language = normalizeLanguageTag(uni.getAppBaseInfo().appLanguage);
    if (isSimplifiedChinese(language)) {
        return {
            createNew: '创建新联系人',
            addToExisting: '添加到现有联系人'
        } as ContactActionSheetTexts;
    }
    if (isTraditionalChinese(language)) {
        return {
            createNew: '新增聯絡人',
            addToExisting: '加入現有聯絡人'
        } as ContactActionSheetTexts;
    }
    if (language == 'fr' || language.startsWith('fr-')) {
        return {
            createNew: 'Creer un nouveau contact',
            addToExisting: 'Ajouter a un contact existant'
        } as ContactActionSheetTexts;
    }
    if (language == 'la' || language.startsWith('la-')) {
        return {
            createNew: 'Crea contactum novum',
            addToExisting: 'Adde ad contactum existentem'
        } as ContactActionSheetTexts;
    }
    return {
        createNew: 'Create New Contact',
        addToExisting: 'Add to Existing Contact'
    } as ContactActionSheetTexts;
}
function validateAddPhoneContactOptions(options: AddPhoneContactOptions, reject: (errMsg: string) => void): boolean {
    const firstName = options.firstName;
    if (firstName == null || firstName.length == 0) {
        reject('addPhoneContact:fail parameter.firstName should not be empty');
        return false;
    }
    return true;
}
function prepareAddPhoneContactOptions(options: AddPhoneContactOptions, onPrepared: (preparedOptions: AddPhoneContactOptions) => void): void {
    if (!hasText(options.photoFilePath)) {
        onPrepared(options);
        return;
    }
    const preparedOptions = cloneAddPhoneContactOptions(options);
    uni.compressImage({
        src: options.photoFilePath ?? '',
        quality: 80,
        compressedWidth: 200,
        compressedHeight: 200,
        success: (result: CompressImageSuccess) => {
            if (result.tempFilePath.length > 0) {
                preparedOptions.photoFilePath = result.tempFilePath;
            }
            onPrepared(preparedOptions);
        },
        fail: (_: CompressImageFail) => {
            onPrepared(preparedOptions);
        }
    } as CompressImageOptions);
}
function showAddPhoneContactActionSheet(onSelect: (mode: ContactActionMode) => void, onCancel: () => void): void {
    const texts = getActionSheetTexts();
    uni.showActionSheet({
        itemList: [
            texts.createNew,
            texts.addToExisting
        ],
        success: (result: ShowActionSheetSuccess) => {
            if (result.tapIndex == 0) {
                onSelect('create');
                return;
            }
            onSelect('existing');
        },
        fail: (_: ShowActionSheetFail) => {
            onCancel();
        }
    } as ShowActionSheetOptions);
}
const AddPhoneContactUniErrorSubject = 'uni-addPhoneContact';
const ChooseContactUniErrorSubject = 'uni-phoneContact';
const AddPhoneContactUniErrors: Map<number, string> = new Map([
    [
        601,
        'addPhoneContact:fail invalid parameter'
    ],
    [
        602,
        'addPhoneContact:fail permission denied'
    ],
    [
        603,
        'addPhoneContact:fail save contact failed'
    ]
]);
const ChooseContactUniErrors: Map<number, string> = new Map([
    [
        601,
        'chooseContact:fail permission denied'
    ],
    [
        602,
        'chooseContact:fail selected contact has no phone number'
    ],
    [
        603,
        'chooseContact:fail choose contact failed'
    ]
]);
class AddPhoneContactFailImpl extends UniError implements IAddPhoneContactFail {
    errCode: AddPhoneContactErrorCode;
    constructor(errCode: AddPhoneContactErrorCode) {
        super();
        this.errCode = errCode;
        this.errSubject = AddPhoneContactUniErrorSubject;
    }
}
function createPlatformCodeData(platformCode: number): UTSJSONObject {
    const data: UTSJSONObject = new UTSJSONObject({
        platformCode: platformCode
    });
    return data;
}
function createAddPhoneContactFail(errCode: AddPhoneContactErrorCode, errMsg: string | null = null, platformCode: number | null = null): AddPhoneContactFailImpl {
    const error = new AddPhoneContactFailImpl(errCode);
    const defaultMessage = UTS.mapGet(AddPhoneContactUniErrors, errCode);
    error.errMsg = errMsg != null ? errMsg : defaultMessage != null ? defaultMessage : '';
    if (platformCode != null) {
        error.data = createPlatformCodeData(platformCode);
    }
    return error;
}
class ChooseContactFailImpl extends UniError implements IChooseContactFail {
    errCode: ChooseContactErrorCode;
    constructor(errCode: ChooseContactErrorCode) {
        super();
        this.errCode = errCode;
        this.errSubject = ChooseContactUniErrorSubject;
    }
}
function createChooseContactFail(errCode: ChooseContactErrorCode, errMsg: string | null = null, platformCode: number | null = null): ChooseContactFailImpl {
    const error = new ChooseContactFailImpl(errCode);
    const defaultMessage = UTS.mapGet(ChooseContactUniErrors, errCode);
    error.errMsg = errMsg != null ? errMsg : defaultMessage != null ? defaultMessage : '';
    if (platformCode != null) {
        error.data = createPlatformCodeData(platformCode);
    }
    return error;
}
function resolveSuccess(options: AddPhoneContactOptions): void {
    const result: AddPhoneContactSuccess = {};
    options.success?.(result);
    options.complete?.(result);
}
function rejectWithCode(options: AddPhoneContactOptions, errCode: AddPhoneContactErrorCode, errMsg: string, platformCode: number | null = null): void {
    const error = createAddPhoneContactFail(errCode, errMsg, platformCode);
    options.fail?.(error);
    options.complete?.(error);
}
function resolveChooseContactSuccess(options: ChooseContactOptions, displayName: string, phoneNumber: string, phoneNumberList: Array<string>): void {
    const result: ChooseContactSuccess = {
        displayName: displayName,
        phoneNumber: phoneNumber,
        phoneNumberList: phoneNumberList,
        errMsg: 'chooseContact:ok'
    };
    options.success?.(result);
    options.complete?.(result);
}
function rejectChooseContactWithCode(options: ChooseContactOptions, errCode: ChooseContactErrorCode, errMsg: string, platformCode: number | null = null): void {
    const error = createChooseContactFail(errCode, errMsg, platformCode);
    options.fail?.(error);
    options.complete?.(error);
}
function hasText__1(value: string | null | undefined): boolean {
    return value != null && value.length > 0;
}
function buildFullName(lastName: string | null | undefined, middleName: string | null | undefined, firstName: string | null | undefined): string {
    let fullName = '';
    if (lastName != null) {
        fullName += lastName;
    }
    if (middleName != null) {
        fullName += middleName;
    }
    if (firstName != null) {
        fullName += firstName;
    }
    return fullName;
}
function composeAddress(country: string | null | undefined, state: string | null | undefined, city: string | null | undefined, street: string | null | undefined): string {
    let address = '';
    if (country != null) {
        address += country;
    }
    if (state != null) {
        address += state;
    }
    if (city != null) {
        address += city;
    }
    if (street != null) {
        address += street;
    }
    return address;
}
function appendUniquePhoneNumber(phoneNumbers: Array<string>, phoneNumber: string | null | undefined): void {
    if (phoneNumber == null) {
        return;
    }
    const normalizedPhoneNumber = phoneNumber as string;
    if (normalizedPhoneNumber.length == 0) {
        return;
    }
    let index = 0;
    while (index < phoneNumbers.length) {
        if (phoneNumbers[index] == normalizedPhoneNumber) {
            return;
        }
        index++;
    }
    phoneNumbers.push(normalizedPhoneNumber);
}
function getChooseContactDisplayName(selectedContact: contact.Contact): string {
    const name = selectedContact.name;
    if (name != null) {
        const fullName = name.fullName;
        if (fullName.length > 0) {
            return fullName;
        }
        let mergedName = '';
        if (name.familyName != null) {
            mergedName += name.familyName;
        }
        if (name.middleName != null) {
            mergedName += name.middleName;
        }
        if (name.givenName != null) {
            mergedName += name.givenName;
        }
        if (mergedName.length > 0) {
            return mergedName;
        }
    }
    return '';
}
function getChooseContactPhoneNumbers(selectedContact: contact.Contact): Array<string> {
    const phoneNumbers = new Array<string>();
    const selectedContactPhoneNumbers = selectedContact.phoneNumbers;
    if (selectedContactPhoneNumbers == null) {
        return phoneNumbers;
    }
    let index = 0;
    while (index < selectedContactPhoneNumbers.length) {
        appendUniquePhoneNumber(phoneNumbers, selectedContactPhoneNumbers[index].phoneNumber);
        index++;
    }
    return phoneNumbers;
}
function createNickName(value: string): contact.NickName {
    const nickName: contact.NickName = {
        nickName: value
    };
    return nickName;
}
function createEmail(emailValue: string, displayName: string): contact.Email {
    const email: contact.Email = {
        email: emailValue,
        displayName: displayName
    };
    return email;
}
function createImAddress(value: string): contact.ImAddress {
    const imAddress: contact.ImAddress = {
        imAddress: value,
        labelName: 'InstantMessage',
        labelId: contact.ImAddress.CUSTOM_LABEL
    };
    return imAddress;
}
function createPortrait(uri: string): contact.Portrait {
    const portrait: contact.Portrait = {
        uri: uri
    };
    return portrait;
}
function normalizePortraitUri(photoFilePath: string | null): string | null {
    if (photoFilePath == null) {
        return null;
    }
    const normalizedPath = photoFilePath as string;
    if (normalizedPath.length == 0) {
        return null;
    }
    if (normalizedPath.startsWith('file://') || normalizedPath.startsWith('content://')) {
        return normalizedPath;
    }
    return fileUri.getUriFromPath(normalizedPath);
}
function createWebsite(websiteValue: string): contact.Website {
    const website: contact.Website = {
        website: websiteValue
    };
    return website;
}
function createNote(noteContent: string): contact.Note {
    const note: contact.Note = {
        noteContent: noteContent
    };
    return note;
}
function createOrganization(name: string, title: string): contact.Organization {
    const organization: contact.Organization = {
        name: name,
        title: title
    };
    return organization;
}
function createPhoneNumber(phoneNumberValue: string, labelId: number): contact.PhoneNumber {
    const phoneNumber: contact.PhoneNumber = {
        phoneNumber: phoneNumberValue,
        labelId: labelId
    };
    return phoneNumber;
}
function createPostalAddress(city: string, country: string, postcode: string, street: string, postalAddressValue: string, labelId: number): contact.PostalAddress {
    const postalAddress: contact.PostalAddress = {
        city: city,
        country: country,
        postcode: postcode,
        street: street,
        postalAddress: postalAddressValue,
        labelId: labelId
    };
    return postalAddress;
}
class HarmonyContactPayload extends UTSObject {
    name!: contact.Name;
    nickName: contact.NickName | null = null;
    emails: Array<contact.Email> | null = null;
    imAddresses: Array<contact.ImAddress> | null = null;
    portrait: contact.Portrait | null = null;
    websites: Array<contact.Website> | null = null;
    note: contact.Note | null = null;
    organization: contact.Organization | null = null;
    phoneNumbers: Array<contact.PhoneNumber> | null = null;
    postalAddresses: Array<contact.PostalAddress> | null = null;
}
function createHarmonyContact(options: AddPhoneContactOptions, portraitUri: string | null = null): contact.Contact {
    const firstName = options.firstName ?? '';
    const middleName = options.middleName ?? '';
    const lastName = options.lastName ?? '';
    const contactInfo: HarmonyContactPayload = {
        name: {
            givenName: firstName,
            fullName: buildFullName(lastName, middleName, firstName)
        },
        nickName: null,
        emails: null,
        imAddresses: null,
        portrait: null,
        websites: null,
        note: null,
        organization: null,
        phoneNumbers: null,
        postalAddresses: null
    };
    if (hasText__1(options.nickName)) {
        contactInfo.nickName = createNickName(options.nickName ?? '');
    }
    if (hasText__1(options.lastName)) {
        contactInfo.name!.familyName = options.lastName ?? '';
    }
    if (hasText__1(options.middleName)) {
        contactInfo.name!.middleName = options.middleName ?? '';
    }
    if (hasText__1(options.email)) {
        contactInfo.emails = [
            createEmail(options.email ?? '', '邮箱')
        ];
    }
    if (hasText__1(options.weChatNumber)) {
        contactInfo.imAddresses = [
            createImAddress(options.weChatNumber ?? '')
        ];
    }
    if (portraitUri != null) {
        contactInfo.portrait = createPortrait(portraitUri);
    }
    if (hasText__1(options.url)) {
        contactInfo.websites = [
            createWebsite(options.url ?? '')
        ];
    }
    if (hasText__1(options.remark)) {
        contactInfo.note = createNote(options.remark ?? '');
    }
    if (hasText__1(options.organization) || hasText__1(options.title)) {
        contactInfo.organization = createOrganization(options.organization ?? '', options.title ?? '');
    }
    const phoneNumbers: contact.PhoneNumber[] = [];
    if (hasText__1(options.homePhoneNumber)) {
        phoneNumbers.push(createPhoneNumber(options.homePhoneNumber ?? '', contact.PhoneNumber.NUM_HOME));
    }
    if (hasText__1(options.mobilePhoneNumber)) {
        phoneNumbers.push(createPhoneNumber(options.mobilePhoneNumber ?? '', contact.PhoneNumber.NUM_MOBILE));
    }
    if (hasText__1(options.homeFaxNumber)) {
        phoneNumbers.push(createPhoneNumber(options.homeFaxNumber ?? '', contact.PhoneNumber.NUM_FAX_HOME));
    }
    if (hasText__1(options.workFaxNumber)) {
        phoneNumbers.push(createPhoneNumber(options.workFaxNumber ?? '', contact.PhoneNumber.NUM_FAX_WORK));
    }
    if (hasText__1(options.workPhoneNumber)) {
        phoneNumbers.push(createPhoneNumber(options.workPhoneNumber ?? '', contact.PhoneNumber.NUM_WORK));
    }
    if (hasText__1(options.hostNumber)) {
        phoneNumbers.push(createPhoneNumber(options.hostNumber ?? '', contact.PhoneNumber.NUM_COMPANY_MAIN));
    }
    if (phoneNumbers.length > 0) {
        contactInfo.phoneNumbers = phoneNumbers;
    }
    const postalAddresses: contact.PostalAddress[] = [];
    if (hasText__1(options.homeAddressCity) || hasText__1(options.homeAddressCountry) || hasText__1(options.homeAddressPostalCode) || hasText__1(options.homeAddressStreet) || hasText__1(options.homeAddressState)) {
        postalAddresses.push(createPostalAddress(options.homeAddressCity ?? '', options.homeAddressCountry ?? '', options.homeAddressPostalCode ?? '', options.homeAddressStreet ?? '', composeAddress(options.homeAddressCountry, options.homeAddressState, options.homeAddressCity, options.homeAddressStreet), contact.PostalAddress.ADDR_HOME));
    }
    if (hasText__1(options.workAddressCity) || hasText__1(options.workAddressCountry) || hasText__1(options.workAddressPostalCode) || hasText__1(options.workAddressStreet) || hasText__1(options.workAddressState)) {
        postalAddresses.push(createPostalAddress(options.workAddressCity ?? '', options.workAddressCountry ?? '', options.workAddressPostalCode ?? '', options.workAddressStreet ?? '', composeAddress(options.workAddressCountry, options.workAddressState, options.workAddressCity, options.workAddressStreet), contact.PostalAddress.ADDR_WORK));
    }
    if (hasText__1(options.addressCity) || hasText__1(options.addressCountry) || hasText__1(options.addressPostalCode) || hasText__1(options.addressStreet) || hasText__1(options.addressState)) {
        postalAddresses.push(createPostalAddress(options.addressCity ?? '', options.addressCountry ?? '', options.addressPostalCode ?? '', options.addressStreet ?? '', composeAddress(options.addressCountry, options.addressState, options.addressCity, options.addressStreet), contact.PostalAddress.CUSTOM_LABEL));
    }
    if (postalAddresses.length > 0) {
        contactInfo.postalAddresses = postalAddresses;
    }
    return contactInfo as Object as contact.Contact;
}
const addPhoneContact: AddPhoneContact = (options: AddPhoneContactOptions) => {
    if (!validateAddPhoneContactOptions(options, (errMsg: string) => {
        rejectWithCode(options, 601, errMsg);
    })) {
        return;
    }
    const context = UTSHarmony.getUIAbilityContext();
    if (context == null) {
        rejectWithCode(options, 603, 'addPhoneContact:fail harmony ability context is null', 502);
        return;
    }
    showAddPhoneContactActionSheet((mode: ContactActionMode) => {
        prepareAddPhoneContactOptions(options, (preparedOptions: AddPhoneContactOptions) => {
            const portraitUri = normalizePortraitUri(preparedOptions.photoFilePath);
            const preparedContactInfo = createHarmonyContact(preparedOptions, portraitUri);
            let task: Promise<number>;
            if (mode == 'create') {
                task = contact.addContactViaUI(context, preparedContactInfo);
            }
            else {
                task = contact.saveToExistingContactViaUI(context, preparedContactInfo);
            }
            task.then((_: number) => {
                resolveSuccess(preparedOptions);
            }).catch((err: BusinessError) => {
                rejectWithCode(preparedOptions, 603, `addPhoneContact:fail ${err.message}`, 502);
            });
        });
    }, () => {
        rejectWithCode(options, 603, 'addPhoneContact:fail user cancelled', 502);
    });
};
const chooseContact: ChooseContact = (options: ChooseContactOptions) => {
    const selectionOptions: contact.ContactSelectionOptions = {
        isMultiSelect: false
    };
    contact.selectContacts(selectionOptions).then((selectedContacts: Array<contact.Contact>) => {
        if (selectedContacts.length == 0) {
            rejectChooseContactWithCode(options, 603, 'chooseContact:fail user cancelled', 504);
            return;
        }
        const selectedContact = selectedContacts[0];
        const phoneNumberList = getChooseContactPhoneNumbers(selectedContact);
        if (phoneNumberList.length == 0) {
            rejectChooseContactWithCode(options, 602, 'chooseContact:fail selected contact has no phone number');
            return;
        }
        resolveChooseContactSuccess(options, getChooseContactDisplayName(selectedContact), phoneNumberList[0], phoneNumberList);
    }).catch((err: BusinessError) => {
        rejectChooseContactWithCode(options, 603, `chooseContact:fail ${err.message}`, 504);
    });
};
export { AddPhoneContactOptions as AddPhoneContactOptions, AddPhoneContactSuccess as AddPhoneContactSuccess, ChooseContactOptions as ChooseContactOptions, ChooseContactSuccess as ChooseContactSuccess };
export type { AddPhoneContact as AddPhoneContact, AddPhoneContactComplete as AddPhoneContactComplete, AddPhoneContactCompleteCallback as AddPhoneContactCompleteCallback, AddPhoneContactFail as AddPhoneContactFail, AddPhoneContactFailCallback as AddPhoneContactFailCallback, AddPhoneContactSuccessCallback as AddPhoneContactSuccessCallback, ChooseContact as ChooseContact, ChooseContactComplete as ChooseContactComplete, ChooseContactCompleteCallback as ChooseContactCompleteCallback, ChooseContactFail as ChooseContactFail, ChooseContactFailCallback as ChooseContactFailCallback, ChooseContactSuccessCallback as ChooseContactSuccessCallback };
export type { AddPhoneContactErrorCode as AddPhoneContactErrorCode, ChooseContactErrorCode as ChooseContactErrorCode, IAddPhoneContactFail as IAddPhoneContactFail, IChooseContactFail as IChooseContactFail };
export { addPhoneContact as addPhoneContact };
export { chooseContact as chooseContact };
