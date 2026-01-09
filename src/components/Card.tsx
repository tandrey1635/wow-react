import { Link } from "react-router";


const Card = ({type, path, cardImg, description, title, spanClassname, price, gold, raids }) => {
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
			type == "dungeons"
				? "card-mythic"
				: null
			}`
		}>

			<Link to={path}>
				<img src={cardImg} className="card-img"  alt={title} />
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