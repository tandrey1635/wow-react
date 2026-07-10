import { useParams, Link } from "react-router";
import { Tabs, Tab } from 'react-bootstrap';
import Card from '../Card.tsx'

import dataWeapons from '../../json/weapons/weapons-details.json'


import dataTwoHandedWeapons from '../../json/weapons/two-handed/weapons.json'
import dataLegendaryWeapons from '../../json/weapons/legendary/weapons.json'
import dataDecorativeWeapons from '../../json/weapons/decorative/weapons.json'


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


const Weapons = ()=> {
	const { weapons } = useParams()

	const weapon = dataWeapons.find(weapon=> weapon.id.toLowerCase() == weapons)

	return (
		<>
			<section className="announcement">
				<div className="container">
					<h1 className={`announcement__header ${
						weapon.type == "legendary"
							? "announcement__header_legendary"
							:
						weapon.type == "artifact"
							? "announcement__header_artifact"
							:
						weapon.type == "decorative"
							? "announcement__header_decorative"
							: null
					} text-center`}
					>
						{weapon.title}
					</h1>
					<p className="announcement__text text-center mt-3">{weapon.description}</p>
				</div>
			</section>

			<section className="promo">
				<div className="container-fluid">
					<p className={`promo__info promo__info_weapons ${
						weapon.type == "legendary"
							? "promo__info_weapons-legendary"
							:
						weapon.type == "decorative"
							? "promo__info_weapons-decorative"
							: null
						}`}
					>
					</p>
				</div>
			</section>

			<section className="cards py-5">
				<div className="container">
					<section className="nav py-5">
						<div className="container">
							<div className="nav__wrapper">
								<Tabs defaultActiveKey="weapons" id="cards-tabs" fill>
									<Tab eventKey="weapons" title="Оружие">
										<ul style={{left: 0}} className="nav-menu nav-menu-dropdown nav-menu-weapons">
											<Link className="nav-link nav-link-weapons" to="/weapons/onehanded">Одноручное</Link>
											<Link className="nav-link nav-link-weapons" to="/weapons/twohanded">Двуручное</Link>
											<Link className="nav-link nav-link-weapons" to="/weapons/range">Дальний бой</Link>
											<Link className="nav-link nav-link-legendary" to="/weapons/legendary">Легендарное</Link>
											<Link className="nav-link nav-link-artifact" to="/weapons/artifact">Артефактное</Link>
											<Link className="nav-link nav-link-decorative" to="/weapons/decorative">Декоративное</Link>
										</ul>
									</Tab>
								</Tabs>
							</div>
						</div>
					</section>

					<h2 className="text-success text-center fw-bold display-4">
						{
							weapon.type === "legendary"
								? `Всего Легендарного Оружия: ${counterCardItems(dataLegendaryWeapons)}`
								:
							weapon.type === "decorative"
								? `Всего Декоративного Оружия: ${counterCardItems(dataDecorativeWeapons)}`
								: null
						}
					</h2>

					<div className="cards__wrapper d-flex flex-wrap justify-content-center justify-content-xl-start mt-5">
						{
							weapon.type === "two-handed"
								? renderCardItems(dataTwoHandedWeapons)
								:
							weapon.type === "legendary"
								? renderCardItems(dataLegendaryWeapons)
								:
							weapon.type === "decorative"
								? renderCardItems(dataDecorativeWeapons)
								: null
						}
					</div>
				</div>
			</section>
		</>
	)
}

export default Weapons