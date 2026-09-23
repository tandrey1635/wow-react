import { useParams, Link } from "react-router"
import Card from '../Card.tsx'

import dataFaction from '../../json/races/faction/faction-details.json'
import dataHorde from '../../json/races/faction/horde/horde.json'
import dataAlliance from '../../json/races/faction/alliance/alliance.json'

import type { ICard } from '../../types/card-types.ts'

const Faction = () => {
	const { factionId } = useParams()

	const faction = dataFaction.find(faction => {
		const result = faction.id.toLowerCase().replace('faction', '') === factionId
  		return result
	})

	const counterCardItems = (dataJson: ICard[]) => dataJson.length

	const renderCardItems = (dataJson: ICard[]) => dataJson.map(card=> {
		return (
			<Card
				key={card.id}
				type={card.type}
				path={card.path}
				img={card.img}
				objectFit={card.objectFit}
				addition={card.addition}
				description={card.description}
				descriptionTrim={card.descriptionTrim}
				title={card.title}
				price={card.price}
			/>
		)
	})


	return (
		<>
			<section className="announcement">
				<div className="container">
					<div className="announcement__description">
						<h1 className={`announcement__header ${
							faction.type === "faction-horde"
								? "announcement__header_horde"
								:
							faction.type === "faction-alliance"
								? "announcement__header_alliance"
								: ''} text-center`}
						>
							{faction.title}
						</h1>
						<p className="announcement__text text-center mt-3">{faction.description}</p>
					</div>
				</div>
			</section>

			<section className="promo">
				<div className="container-fluid">
					<p className={`promo__info ${
						faction.type === "faction-horde"
							? "promo__info_horde"
							:
						faction.type === "faction-alliance"
							? "promo__info_alliance"
							: ''}
						`}
					></p>
				</div>
			</section>

			<section className="cards py-5">
				<div className="container">
					<section className="nav py-5">
						<div className="container">
							<div className="nav__wrapper">
								<ul className="nav__tabs">
									<li className="nav__list nav__list_races">Расы
										{
											faction.type === "faction-horde"
												? <ul className="nav__menu nav__menu_dropdown nav__menu_faction">
													<Link className="nav-link nav-link-home" to="/">Главная</Link>
													<Link className="nav-link nav-link-races" to="/races">Расы</Link>
													<Link className="nav-link nav-link-races nav-link-races-alliance" to="/races/alliance">Альянс</Link>
												</ul>
												:
											faction.type === "faction-alliance"
												? <ul className="nav__menu nav__menu_dropdown nav__menu_faction">
													<Link className="nav-link nav-link-home" to="/">Главная</Link>
													<Link className="nav-link nav-link-races" to="/races">Расы</Link>
													<Link className="nav-link nav-link-races nav-link-races-horde" to="/races/horde">Орда</Link>
												</ul>
												: null
										}

									</li>
									<li className="nav__list nav__list_raids-armours">Рейдовые комплекты</li>
									<li className="nav__list nav__list_weapons">Оружие</li>
									<li className="nav__list nav__list_armours">Броня</li>
									<li className="nav__list nav__list_mounts">Маунты</li>
									<li className="nav__list nav__list_professions">Профессии</li>
									<li className="nav__list nav__list_pvp">PvP</li>
									<li className="nav__list nav__list_dungeons-raids">Подземелья и Рейды</li>
									<li className="nav__list nav__list_achievements">Достижения</li>
								</ul>
							</div>
						</div>
					</section>

					<h2 className="text-success text-center fw-bold display-4">
						{"Всего" + ' '}
						{
							faction.type === "faction-horde"
								? `Рас Орды: ${counterCardItems(dataHorde)}`
								:
							faction.type === "faction-alliance"
								? `Рас Альянса: ${counterCardItems(dataAlliance)}`
								: null
						}
					</h2>

					<div className="cards__wrapper d-flex flex-wrap justify-content-center justify-content-xl-start mt-5">
						{
							faction.type === "faction-horde"
								? renderCardItems(dataHorde)
								:
							faction.type === "faction-alliance"
								? renderCardItems(dataAlliance)
								: null
						}
					</div>
				</div>
			</section>
		</>
	)
}

export default Faction