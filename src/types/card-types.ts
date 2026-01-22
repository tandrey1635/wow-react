interface ICard {
	id?: string,
	type: string,
	path: string,
	img: string,
	objectFit: boolean,
	title: string,
	description: string,
	spanClassname?: string,
	price: number,
	gold?: boolean,
	raids?: boolean,
}


export type { ICard }