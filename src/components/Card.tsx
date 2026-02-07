import { Link } from "react-router";
import type { ICard }  from "../types/card-types";


const Card = ({type, path, img, objectFit, title, description, descriptionTrim, addition, price, gold}: ICard) => {
	return (
		<div className={`card ${
			type == "races"
				? "card-races"
				:
			type == "faction-horde"
				? "card-horde"
				:
			type == "faction-alliance"
				? "card-alliance"
				:
			type == "warrior"
				? "card-warrior"
				:
			type == "druid"
				? "card-druid"
				:
			type == "priest"
				? "card-priest"
				:
			type == "mage"
				? "card-mage"
				:
			type == "monk"
				? "card-monk"
				:
			type == "hunter"
				? "card-hunter"
				:
			type == "demon-hunter"
				? "card-demon-hunter"
				:
			type == "paladin"
				? "card-paladin"
				:
			type == "awakener"
				? "card-awakener"
				:
			type == "rogue"
				? "card-rogue"
				:
			type == "death-knight"
				? "card-death-knight"
				:
			type == "warlock"
				? "card-warlock"
				:
			type == "shaman"
				? "card-shaman"
				:
			type == "legendary-weapons"
				? "card-weapons-legendary"
				:
			type == "artifact-weapons"
				? "card-weapons-artifact"
				:
			type == "armours"
				? "card-armours"
				:
			type == "water-mounts"
				? "card-mounts-water"
				:
			type == "earth-mounts"
				? "card-mounts-earth"
				:
			type == "fly-mounts"
				? "card-mounts-fly"
				:
			type == "dungeons"
				? "card-mythic"
				:
			type == "achievements"
				? "card-achievements"
				: null
			}`
		}>

			<Link to={path}>
				<img src={img} className={`card-img ${
					objectFit
						? "card-img-object-fit"
						: null
					}`
				}
				alt={title} />
			</Link>

			<div className="card-body">
				<Link className="card-link" to={path}>
					<h3 className={`card-title ${
						type == "races"
							? "card-title-races"
							:
						type == "faction-horde"
							? "card-title-horde"
							:
						type == "faction-alliance"
							? "card-title-alliance"
							:
						addition == "Classic"
							? "card-text-raids-classic_color"
							:
						addition == "The Burning Crusade"
							? "card-text-raids-burning-crusade_color"
							:
						addition == "Wrath of the Lich King"
							? "card-text-raids-wrath-of-the-lich-king_color"
							:
						addition == "Cataclysm"
							? "card-text-raids-cataclysm_color"
							:
						addition == "Mists of Pandaria"
							? "card-text-raids-mists-of-pandaria_color"
							:
						addition == "Warlords of Draenor"
							? "card-text-raids-warlords-of-draenor_color"
							:
						addition == "Legion"
							? "card-text-raids-legion_color"
							:
						addition == "Battle for Azeroth"
							? "card-text-raids-battle-for-azeroth_color"
							:
						addition == "Shadowlands"
							? "card-text-raids-shadowlands_color"
							:
						addition == "Dragonflight"
							? "card-text-raids-dragonflight_color"
							:
						addition == "The War Within"
							? "card-text-raids-war-within_color"
							:
						addition == "Midnight"
							? "card-text-raids-midnight_color"
							:
						addition == "The Last Titan"
							? "card-text-raids-last-titan_color"
							:
						type == "legendary-weapons"
							? "card-title-weapons-legendary"
							:
						type == "armours"
							? "card-title-armours"
							:
						type == "earth-mounts"
							? "card-title-mounts-earth"
							:
						type == "fly-mounts"
							? "card-title-mounts-fly"
							:
						type == "dungeons"
							? "card-title-mythic"
							:
						type == "achievements"
							? "card-title-achievements"
							: null
						}`
					}>
						{title}
					</h3>
				</Link>

				<p className={`card-text ${
					type == "races"
						? "card-text-races"
						:
					type == "faction-horde"
						? "card-text-horde"
						:
					type == "faction-alliance"
						? "card-text-alliance"
						:
					type == "legendary-weapons"
						? "card-text-weapons-legendary"
						:
					type == "armours"
						? "card-text-armours"
						:
					type == "earth-mounts"
						? "card-text-mounts-earth"
						:
					type == "fly-mounts"
						? "card-text-mounts-fly"
						:
					type == "dungeons"
						? "card-text-mythic"
						:
					type == "achievements"
						? "card-text-achievements"
						: ''
					}`
				}>
					{description}
					{addition && <span className={`card-text-raids ${
							addition == "Classic"
							? "card-text-raids-classic_color"
							:
							addition == "The Burning Crusade"
								? "card-text-raids-burning-crusade_color"
								:
							addition == "Wrath of the Lich King"
								? "card-text-raids-wrath-of-the-lich-king_color"
								:
							addition == "Cataclysm"
								? "card-text-raids-cataclysm_color"
								:
							addition == "Mists of Pandaria"
								? "card-text-raids-mists-of-pandaria_color"
								:
							addition == "Warlords of Draenor"
								? "card-text-raids-warlords-of-draenor_color"
								:
							addition == "Legion"
								? "card-text-raids-legion_color"
								:
							addition == "Battle for Azeroth"
								? "card-text-raids-battle-for-azeroth_color"
								:
							addition == "Shadowlands"
								? "card-text-raids-shadowlands_color"
								:
							addition == "Dragonflight"
								? "card-text-raids-dragonflight_color"
								:
							addition == "The War Within"
								? "card-text-raids-war-within_color"
								:
							addition == "Midnight"
								? "card-text-raids-midnight_color"
								:
							addition == "The Last Titan"
								? "card-text-raids-last-titan_color"
								: null
						}`
						}>{`${' ' + addition}.`} {/* Перед комментарием оставляем пробел чтобы был пробел после закрывающего тега */}</span>
					}
					{descriptionTrim}
				</p>
			</div>

			<div className="card-footer d-flex justify-content-between align-items-center">
				<p className={`card-price ${
					type == "races"
						? "card-price-races"
						:
					type == "faction-horde"
						? "card-price-horde"
						:
					type == "faction-alliance"
						? "card-price-alliance"
						:
					type == "legendary-weapons"
						? "card-price-weapons-legendary"
						:
					type == "armours"
						? "card-price-armours"
						:
					type == "earth-mounts"
						? "card-price-mounts-earth"
						:
					type == "fly-mounts"
						? "card-price-mounts-fly"
						:
					type == "dungeons"
						? "card-price-mythic"
						:
					type == "achievements"
						? "card-price-achievements"
						: null
					}`
				}>
					от {price}
					<img
						className="dollar"
						src={
							gold
							? "/src/assets/img/gold/bg/gold.png"
							: "/src/assets/img/gold/bg/dollar.png"
						}
						alt={
							gold
							? "gold"
							: "$"
						}
					/>
				</p>
				<Link to={path} className="card-btn">Подробнее</Link>
			</div>
		</div>
	)
}


export default Card