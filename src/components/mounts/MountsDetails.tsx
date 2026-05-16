import { useParams, Link } from "react-router"
import Card from '../Card.tsx'
import Search from '../Search.tsx'

import dataMountsDetails from '../../json/mounts/mounts-details.json'
import dataWaterMounts from '../../json/mounts/water/water.json';
import dataEarthMounts from '../../json/mounts/earth/earth.json';
import dataFlyMounts from '../../json/mounts/fly/fly.json';


import type { ICard } from '../../types/card-types.ts'
import { useState } from "react";


const MountsDetails = () => {
	const { id } = useParams()

	const [search, setSearch] = useState('Багровый Бурунный Конек')

	const mounts = dataMountsDetails.find(mount => {
  		const result = mount.id.toLowerCase().replace('mounts', '') === id
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

	const onSearch = () => {}

	return (
		<>
			<section className="announcement">
				<div className="container">
					<div className="announcement__description">
						<h1 className={`announcement__header ${
							mounts.type === "water-mounts"
								? "announcement__header_water-mounts"
								:
							mounts.type === "earth-mounts"
								? "announcement__header_earth-mounts"
								:
							mounts.type === "fly-mounts"
								? "announcement__header_fly-mounts"
								: ''} text-center`}
						>
							{mounts.title}
						</h1>
						<p className="announcement__text text-center mt-3">{mounts.description}</p>
					</div>
				</div>
			</section>

			<section className="promo">
				<div className="container-fluid">
					<p className={`promo__info ${
						mounts.type === "water-mounts"
							? "promo__info_water-mounts"
							:
						mounts.type === "earth-mounts"
							? "promo__info_earth-mounts"
							:
						mounts.type === "fly-mounts"
							? "promo__info_fly-mounts"
							: ''}
						`}
					></p>
				</div>
			</section>

			<section className="cards py-5">
				<div className="container">
					<Search onSearch={onSearch} />

					<section className="nav py-5">
						<div className="container">
							<div className="nav__wrapper">
								<ul className="nav__tabs">
									<li className="nav__list nav__list_races">Расы</li>
									<li className="nav__list nav__list_raids-armours">Рейдовые комплекты</li>
									<li className="nav__list nav__list_weapons">Оружие</li>
									<li className="nav__list nav__list_armours">Броня</li>
									<li className="nav__list nav__list_mounts">Маунты
										{
											mounts.type === "water-mounts"
												? <ul className="nav__menu nav__menu_dropdown nav__menu_mounts">
													<Link className="nav-link nav-link-mouts nav-link-mounts-home" to="/">Главная</Link>
													<Link className="nav-link nav-link-mouts nav-link-mounts-earth" to="/mounts/earth">Наземные</Link>
													<Link className="nav-link nav-link-mouts nav-link-mounts-fly" to="/mounts/fly">Летающие</Link>
												</ul>
												:
											mounts.type === "earth-mounts"
												? <ul className="nav__menu nav__menu_dropdown nav__menu_mounts">
													<Link className="nav-link nav-link-mouts nav-link-mounts-home" to="/">Главная</Link>
													<Link className="nav-link nav-link-mouts nav-link-mounts-water" to="/mounts/water">Водные</Link>
													<Link className="nav-link nav-link-mouts nav-link-mounts-fly" to="/mounts/fly">Летающие</Link>
												</ul>
												:
											mounts.type === "fly-mounts"
												? <ul className="nav__menu nav__menu_dropdown nav__menu_mounts">
													<Link className="nav-link nav-link-mouts nav-link-mounts-home" to="/">Главная</Link>
													<Link className="nav-link nav-link-mouts nav-link-mounts-water" to="/mounts/water">Водные</Link>
													<Link className="nav-link nav-link-mouts nav-link-mounts-earth" to="/mounts/earth">Наземные</Link>
												</ul>
												: null
										}
									</li>
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
							mounts.type === "water-mounts"
								? `Водных Маунтов: ${counterCardItems(dataWaterMounts)}`
								:
							mounts.type === "earth-mounts"
								? `Наземных Маунтов: ${counterCardItems(dataEarthMounts)}`
								:
							mounts.type === "fly-mounts"
								? `Летающих Маунтов: ${counterCardItems(dataFlyMounts)}`
								: null
						}
					</h2>

					<div className="cards__wrapper d-flex flex-wrap justify-content-center justify-content-xl-start mt-5">
						{
							mounts.type === "water-mounts"
								? renderCardItems(dataWaterMounts)
								:
							mounts.type === "earth-mounts"
								? renderCardItems(dataEarthMounts)
								:
							mounts.type === "fly-mounts"
								? renderCardItems(dataFlyMounts)
								: null
						}
					</div>
				</div>
			</section>
		</>
	)
}

export default MountsDetails