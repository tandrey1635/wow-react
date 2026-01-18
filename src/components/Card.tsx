import { Link } from "react-router";
import type { ICard }  from "../types/card-types";



const Card = ({type, path, img, objectFit, description, title, spanClassname, price, gold, raids }: ICard) => {
	return (
		<div className={`card ${
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
						type == "warrior"
							? "card-title-warrior"
							:
						type == "druid"
							? "card-title-druid"
							:
						type == "priest"
							? "card-title-priest"
							:
						type == "mage"
							? "card-title-mage"
							:
						type == "monk"
							? "card-title-monk"
							:
						type == "hunter"
							? "card-title-hunter"
							:
						type == "demon-hunter"
							? "card-title-demon-hunter"
							:
						type == "paladin"
							? "card-title-paladin"
							:
						type == "awakener"
							? "card-title-awakener"
							:
						type == "rogue"
							? "card-title-rogue"
							:
						type == "death-knight"
							? "card-title-death-knight"
							:
						type == "warlock"
							? "card-title-warlock"
							:
						type == "shaman"
							? "card-title-shaman"
							:
						type == "legendary-weapons"
							? "card-title-weapons-legendary"
							:
						type == "armours"
							? "card-title-armours"
							:
						type == "water-mounts"
						? "card-title-mounts-water"
						:
						type == "earth-mounts"
							? "card-title-mounts-earth"
							:
						type == "fly-mounts"
							? "card-title-mounts-fly"
							:
						type == "dungeons"
							? "card-title-mythic"
							: null
						}`
					}>
						{title}
					</h3>
				</Link>

				<p className={`card-text ${
					type == "warrior"
						? "card-text-warrior"
						:
					type == "druid"
						? "card-text-druid"
						:
					type == "priest"
						? "card-text-priest"
						:
					type == "mage"
						? "card-text-mage"
						:
					type == "monk"
						? "card-text-monk"
						:
					type == "hunter"
						? "card-text-hunter"
						:
					type == "demon-hunter"
						? "card-text-demon-hunter"
						:
					type == "paladin"
						? "card-text-paladin"
						:
					type == "awakener"
						? "card-text-awakener"
						:
					type == "rogue"
						? "card-text-rogue"
						:
					type == "death-knight"
						? "card-text-death-knight"
						:
					type == "warlock"
						? "card-text-warlock"
						:
					type == "shaman"
						? "card-text-shaman"
						:
					type == "legendary-weapons"
						? "card-text-weapons-legendary"
						:
					type == "armours"
						? "card-text-armours"
						:
					type == "water-mounts"
						? "card-text-mounts-water"
						:
					type == "earth-mounts"
						? "card-text-mounts-earth"
						:
					type == "fly-mounts"
						? "card-text-mounts-fly"
						:
					type == "dungeons"
						? "card-text-mythic"
						: null
					}`
				}>
					{description} {raids && <span className={spanClassname}>{title}</span>}
				</p>
			</div>

			<div className="card-footer d-flex justify-content-between align-items-center">
				<p className={`card-price ${
					type == "warrior"
						? "card-price-warrior"
						:
					type == "druid"
						? "card-price-druid"
						:
					type == "priest"
						? "card-price-priest"
						:
					type == "mage"
						? "card-price-mage"
						:
					type == "monk"
						? "card-price-monk"
						:
					type == "hunter"
						? "card-price-hunter"
						:
					type == "demon-hunter"
						? "card-price-demon-hunter"
						:
					type == "paladin"
						? "card-price-paladin"
						:
					type == "awakener"
						? "card-price-awakener"
						:
					type == "rogue"
						? "card-price-rogue"
						:
					type == "death-knight"
						? "card-price-death-knight"
						:
					type == "warlock"
						? "card-price-warlock"
						:
					type == "shaman"
						? "card-price-shaman"
						:
					type == "legendary-weapons"
						? "card-price-weapons-legendary"
						:
					type == "armours"
						? "card-price-armours"
						:
					type == "water-mounts"
						? "card-price-mounts-water"
						:
					type == "earth-mounts"
						? "card-price-mounts-earth"
						:
					type == "fly-mounts"
						? "card-price-mounts-fly"
						:
					type == "dungeons"
						? "card-price-mythic"
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