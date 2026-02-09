type addition = "Classic" | "The Burning Crusade" | "Wrath of the Lich King" | "Cataclysm" | "Mists of Pandaria" | "Warlords of Draenor" | "Legion" | "Battle for Azeroth" | "Shadowlands" | "Dragonflight" | "The War Within" | "Midnight" | "The Last Titan"


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
}



interface IWeaponDetails extends ICard {
	weaponType: string,
	label: string,
	dmg: string | number,
	speed: number,
	strength: number,
	stamina: number,
}


export type { ICard, IWeaponDetails }