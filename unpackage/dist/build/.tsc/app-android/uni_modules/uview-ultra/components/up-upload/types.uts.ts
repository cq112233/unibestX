export type UPUploadListItem = {
	name ?: string,
	type ?: string,
	status ?: string,
	isImage : boolean,
	isVideo : boolean,
	thumb ?:string,
	url ?:string,
	message ?: string,
	progress ?: number,
	deletable : boolean,
	index ?: number,
	width ?:number,
	height ?:number
}

export type UPUploadFileChoosed = {
	type ?:string,
	url ?:string,
	thumb ?:string,
	size ?:number,
	name ?:string,
	width ?:number,
	height ?:number,
	file ?: ChooseImageTempFile,
}

export type UPUploadChooseFileOptions = {
	accept :string,
	multiple :boolean,
	capture : string[]|string,
	compressed :boolean,
	maxDuration :number,
	sizeType :string[],
	camera :string,
	maxCount :number,
	extension :string[]
}
