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
			type == "dungeons-raids-classic"
				? "card-dungeons-raids card-dungeons-raids-classic"
				:
			type == "dungeons-raids-burning-crusade"
				? "card-dungeons-raids card-dungeons-raids-burning-crusade"
				:
			type == "dungeons-raids-wrath-of-the-lich-king"
				? "card-dungeons-raids card-dungeons-raids-wrath-of-the-lich-king"
				:
			type == "dungeons-raids-cataclysm"
				? "card-dungeons-raids card-dungeons-raids-cataclysm"
				:
			type == "dungeons-raids-mists-of-pandaria"
				? "card-dungeons-raids card-dungeons-raids-mists-of-pandaria"
				:
			type == "dungeons-raids-warlords-of-draenor"
				? "card-dungeons-raids card-dungeons-raids-warlords-of-draenor"
				:
			type == "dungeons-raids-legion"
				? "card-dungeons-raids card-dungeons-raids-legion"
				:
			type == "dungeons-raids-battle-for-azeroth"
				? "card-dungeons-raids card-dungeons-raids-battle-for-azeroth"
				:
			type == "dungeons-raids-shadowlands"
				? "card-dungeons-raids card-dungeons-raids-shadowlands"
				:
			type == "dungeons-raids-dragonflight"
				? "card-dungeons-raids card-dungeons-raids-dragonflight"
				:
			type == "dungeons-raids-war-within"
				? "card-dungeons-raids card-dungeons-raids-war-within"
				:
			type == "dungeons-raids-midnight"
				? "card-dungeons-raids card-dungeons-raids-midnight"
				:
			type == "dungeons-raids-last-titan"
				? "card-dungeons-raids card-dungeons-raids-last-titan"
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
							? "card-dungeons-raids-classic_color"
							:
						addition == "The Burning Crusade"
							? "card-dungeons-raids-burning-crusade_color"
							:
						addition == "Wrath of the Lich King"
							? "card-dungeons-raids-wrath-of-the-lich-king_color"
							:
						addition == "Cataclysm"
							? "card-dungeons-raids-cataclysm_color"
							:
						addition == "Mists of Pandaria"
							? "card-dungeons-raids-mists-of-pandaria_color"
							:
						addition == "Warlords of Draenor"
							? "card-dungeons-raids-warlords-of-draenor_color"
							:
						addition == "Legion"
							? "card-dungeons-raids-legion_color"
							:
						addition == "Battle for Azeroth"
							? "card-dungeons-raids-battle-for-azeroth_color"
							:
						addition == "Shadowlands"
							? "card-dungeons-raids-shadowlands_color"
							:
						addition == "Dragonflight"
							? "card-dungeons-raids-dragonflight_color"
							:
						addition == "The War Within"
							? "card-dungeons-raids-war-within_color"
							:
						addition == "Midnight"
							? "card-dungeons-raids-midnight_color"
							:
						addition == "The Last Titan"
							? "card-dungeons-raids-last-titan_color"
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
					{addition && <span className={`card-dungeons-raids ${
							addition == "Classic"
							? "card-dungeons-raids-classic_color"
							:
							addition == "The Burning Crusade"
								? "card-dungeons-raids-burning-crusade_color"
								:
							addition == "Wrath of the Lich King"
								? "card-dungeons-raids-wrath-of-the-lich-king_color"
								:
							addition == "Cataclysm"
								? "card-dungeons-raids-cataclysm_color"
								:
							addition == "Mists of Pandaria"
								? "card-dungeons-raids-mists-of-pandaria_color"
								:
							addition == "Warlords of Draenor"
								? "card-dungeons-raids-warlords-of-draenor_color"
								:
							addition == "Legion"
								? "card-dungeons-raids-legion_color"
								:
							addition == "Battle for Azeroth"
								? "card-dungeons-raids-battle-for-azeroth_color"
								:
							addition == "Shadowlands"
								? "card-dungeons-raids-shadowlands_color"
								:
							addition == "Dragonflight"
								? "card-dungeons-raids-dragonflight_color"
								:
							addition == "The War Within"
								? "card-dungeons-raids-war-within_color"
								:
							addition == "Midnight"
								? "card-dungeons-raids-midnight_color"
								:
							addition == "The Last Titan"
								? "card-dungeons-raids-last-titan_color"
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