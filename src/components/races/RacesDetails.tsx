import { useParams, Link } from "react-router"
import Card from '../Card.tsx'


import dataRacesDetails from '../../json/races/races-details.json'
import dataFaction from '../../json/races/faction/faction.json'


import type { ICard } from '../../types/card-types.ts'


const RacesDetails = () => {
	const { races } = useParams()

	const race = dataRacesDetails.find(race=> race.id.toLocaleLowerCase() === races)

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
							race.type == "races"
								? "announcement__header_races"
								: ''} text-center`}
						>
							{race.title}
						</h1>
						<p className="announcement__text text-center mt-3">{race.description}</p>
					</div>
				</div>
			</section>

			<section className="promo">
				<div className="container-fluid">
					<p className="promo__info promo__info_races"></p>
				</div>
			</section>

			<section className="cards py-5">
				<div className="container">
					<section className="nav py-5">
						<div className="container">
							<div className="nav__wrapper">
								<ul className="nav__tabs">
									<li className="nav__list nav__list_races">Расы
										<ul className="nav__menu nav__menu_dropdown nav__menu_races">
											<Link className="nav-link nav-link-home" to="/">Главная</Link>
										</ul>
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

					<div className="cards__wrapper d-flex flex-wrap justify-content-center justify-content-xl-start mt-5">
						{renderCardItems(dataFaction)}
					</div>
				</div>
			</section>
		</>
	)
}

export default RacesDetails