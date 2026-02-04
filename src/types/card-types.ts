type addition = "Classic" | "The Burning Crusade" | "Wrath of the Lich King" | "Cataclysm" | "MistsOfPandaria" | "WarlordsOfDraenor" | "Legion" | "BattleForAzeroth" | "Shadowlands" | "Dragonflight" | "WarWithin" | "Midnight" | "LastTitan"


interface ICard {
	id?: string,
	type: string,
	path: string,
	img: string,
	objectFit: boolean,
	title: string,
	description: string,
	descriptionTrim?: string,
	addition?: addition,
	price: number,
	gold?: boolean,
	raids?: boolean,
}



interface IWeaponDetails extends ICard {
	weaponType: string,
	label: string,
	dmg: number,
	speed: number,
}


export type { ICard, IWeaponDetails }