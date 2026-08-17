// @ts-nocheck
export type LimeSignatureToFileSuccess = {
	tempFilePath: string
	isEmpty: boolean
}
export type LimeSignatureToFileSuccessCallback = (res : LimeSignatureToFileSuccess) => void
export type LimeSignatureToFileFailCallback = (res : TakeSnapshotFail) => void
export type LimeSignatureToFileCompleteCallback = (res : any) => void

export type  LimeSignatureToTempFilePathOptions = {
	success?: LimeSignatureToFileSuccessCallback
	fail?: 	  LimeSignatureToFileFailCallback
	complete?: LimeSignatureToFileCompleteCallback
	format?: string
}

export type LimeSignatureOptions = {
	penColor : string
	// backgroundColor : string
	openSmooth : boolean
	disableScroll : boolean
	disabled : boolean
	penSize : number
	minLineWidth : number
	maxLineWidth : number
	minSpeed : number
	maxWidthDiffRate : number
	maxHistoryLength : number
}
export type LimeSignaturePoint = {
	x: number
	y: number
	c?: string
	w?: number
}

export type LimeSignatureLine = LimeSignaturePoint[]