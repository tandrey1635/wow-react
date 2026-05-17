type addition = "Classic" | "The Burning Crusade" | "Wrath of the Lich King" | "Cataclysm" | "Mists of Pandaria" | "Warlords of Draenor" | "Legion" | "Battle for Azeroth" | "Shadowlands" | "Dragonflight" | "The War Within" | "Midnight" | "The Last Titan"

type classes = "Воин" | "Друид" | "priest" | "mage" | "Монах" | "hunter" | "demon-hunter" | "Паладин" | "awakener" | "rogue" | "Рыцарь Смерти" | "warlock" | "shaman"

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
	classes?: classes,
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