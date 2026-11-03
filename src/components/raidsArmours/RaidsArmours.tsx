import { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap';
import { Link, useParams } from "react-router";
import useFancybox from "../../ts/useFancybox.ts";
import Card from '../Card.tsx';

import ModalLightbox from '../ModalLightbox'


import dataRaidsArmours from '../../json/raids-armours/raids-armours-details.json';

import dataAwakenerRaidArmours from '../../json/raids-armours/awakener/awakener.json';
import dataDeathKnightRaidArmours from '../../json/raids-armours/death-knight/death-knight.json';
import dataDemonHunterRaidArmours from '../../json/raids-armours/demon-hunter/demon-hunter.json';
import dataDruidRaidArmours from '../../json/raids-armours/druid/druid.json';
import dataHunterRaidArmours from '../../json/raids-armours/hunter/hunter.json';
import dataMageRaidArmours from '../../json/raids-armours/mage/mage.json';
import dataMonkRaidArmours from '../../json/raids-armours/monk/monk.json';
import dataPaladinRaidArmours from '../../json/raids-armours/paladin/paladin.json';
import dataPriestRaidArmours from '../../json/raids-armours/priest/priest.json';
import dataRogueRaidArmours from '../../json/raids-armours/rogue/rogue.json';
import dataShamanRaidArmours from '../../json/raids-armours/shaman/shaman.json';
import dataWarlockRaidArmours from '../../json/raids-armours/warlock/warlock.json';
import dataWarriorRaidArmours from '../../json/raids-armours/warrior/warrior.json';


const RaidsArmours = ()=> {
	const { raidsArmours } = useParams()
	const [fancyboxRef] = useFancybox({})
	const [openModelIndex, setOpenModelIndex] = useState<number | null>(null)

	const raidsArmour = dataRaidsArmours.find(raidArmour => raidArmour.id.toLowerCase() === raidsArmours)

	const counterCardItems = (dataJson: ICard[]) => dataJson.length

	const renderCardItems = (dataJson: ICard[]) => dataJson.map(card=> {
		const allModels = dataJson.filter(card => card.model3d).map(card => card.model3d!)

		return (
			<Card
				id={card.id}
				key={card.id}
				type={card.type}
				path={card.path}
				img={card.img}
				model3d={card.model3d}
				objectFit={card.objectFit}
				addition={card.addition}
				description={card.description}
				descriptionTrim={card.descriptionTrim}
				title={card.title}
				price={card.price}
				onOpen3d={(cardId) => {
    				const idx = dataJson.filter(c => c.model3d).findIndex(c => c.id === cardId)
    				if (idx !== -1) setOpenModelIndex(idx)
				}}
			/>
		)
	})


	return (
		<>
			<section className="announcement">
				<div className="container">
					<div className="announcement__description">
						<h1 className={`announcement__header ${
							raidsArmour.type === "warrior"
								? "announcement__header_warrior"
								:
							raidsArmour.type === "druid"
								? "announcement__header_druid"
								:
							raidsArmour.type === "priest"
								? "announcement__header_priest"
								:
							raidsArmour.type === "mage"
								? "announcement__header_mage"
								:
							raidsArmour.type === "monk"
								? "announcement__header_monk"
								:
							raidsArmour.type === "hunter"
								? "announcement__header_hunter"
								:
							raidsArmour.type === "demon-hunter"
								? "announcement__header_demon-hunter"
								:
							raidsArmour.type === "paladin"
								? "announcement__header_paladin"
								:
							raidsArmour.type === "awakener"
								? "announcement__header_awakener"
								:
							raidsArmour.type === "rogue"
								? "announcement__header_rogue"
								:
							raidsArmour.type === "death-knight"
								? "announcement__header_death-knight"
								:
							raidsArmour.type === "warlock"
								? "announcement__header_warlock"
								:
							raidsArmour.type === "shaman"
								? "announcement__header_shaman"
								: null
						} text-center`}
						>
							{raidsArmour.title}
						</h1>
						<p className="announcement__text text-center mt-3">{raidsArmour.description}</p>
					</div>
				</div>
			</section>

			<section className="promo">
				<div className="container-fluid">
					<p className={`promo__info ${
						raidsArmour.type === "warrior"
							? "promo__info_warrior"
							:
						raidsArmour.type === "druid"
							? "promo__info_druid"
							:
						raidsArmour.type === "priest"
							? "promo__info_priest"
							:
						raidsArmour.type === "mage"
							? "promo__info_mage"
							:
						raidsArmour.type === "monk"
							? "promo__info_monk"
							:
						raidsArmour.type === "hunter"
							? "promo__info_hunter"
							:
						raidsArmour.type === "demon-hunter"
							? "promo__info_demon-hunter"
							:
						raidsArmour.type === "paladin"
							? "promo__info_paladin"
							:
						raidsArmour.type === "awakener"
							? "promo__info_awakener"
							:
						raidsArmour.type === "rogue"
							? "promo__info_rogue"
							:
						raidsArmour.type === "death-knight"
							? "promo__info_death-knight"
							:
						raidsArmour.type === "warlock"
							? "promo__info_warlock"
							:
						raidsArmour.type === "shaman"
							? "promo__info_shaman"
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
								<Tabs defaultActiveKey="raidsArmours" id="cards-tabs" fill>
									<Tab eventKey="raidsArmours" title="Комплекты Брони">
										<ul style={{left: 0}} className="nav-menu nav-menu-dropdown nav-menu-raid-armours">
											<Link className="nav-link nav-link-warrior" to="/raids-armours/warrior">Воин</Link>
											<Link className="nav-link nav-link-druid" to="/raids-armours/druid">Друид</Link>
											<Link className="nav-link nav-link-priest" to="/raids-armours/priest">Жрец</Link>
											<Link className="nav-link nav-link-mage" to="/raids-armours/mage">Маг</Link>
											<Link className="nav-link nav-link-monk" to="/raids-armours/monk">Монах</Link>
											<Link className="nav-link nav-link-hunter" to="/raids-armours/hunter">Охотник</Link>
											<Link className="nav-link nav-link-demon-hunter" to="/raids-armours/demonhunter">Охотник на Демонов</Link>
											<Link className="nav-link nav-link-paladin" to="/raids-armours/paladin">Паладин</Link>
											<Link className="nav-link nav-link-awakener" to="/raids-armours/awakener">Пробудитель</Link>
											<Link className="nav-link nav-link-rogue" to="/raids-armours/rogue">Разбойник</Link>
											<Link className="nav-link nav-link-death-knight" to="/raids-armours/deathknight">Рыцарь Смерти</Link>
											<Link className="nav-link nav-link-warlock" to="/raids-armours/warlock">Чернокнижник</Link>
											<Link className="nav-link nav-link-shaman" to="/raids-armours/shaman">Шаман</Link>
										</ul>
									</Tab>
								</Tabs>
							</div>
						</div>
					</section>

					<h2 className="text-success text-center fw-bold display-4">
						{"Всего" + ' '}
						{
							raidsArmour.type === "warrior"
								? `Рейдовой Брони для Воина: ${counterCardItems(dataWarriorRaidArmours)}`
								:
							raidsArmour.type === "druid"
								? `Рейдовой Брони для Друида: ${counterCardItems(dataDruidRaidArmours)}`
								:
							raidsArmour.type === "priest"
								? `Рейдовой Брони для Жреца: ${counterCardItems(dataPriestRaidArmours)}`
								:
							raidsArmour.type === "mage"
								? `Рейдовой Брони для Мага: ${counterCardItems(dataMageRaidArmours)}`
								:
							raidsArmour.type === "monk"
								? `Рейдовой Брони для Монаха: ${counterCardItems(dataMonkRaidArmours)}`
								:
							raidsArmour.type === "hunter"
								? `Рейдовой Брони для Охотника: ${counterCardItems(dataHunterRaidArmours)}`
								:
							raidsArmour.type === "demon-hunter"
								? `Рейдовой Брони для Охотника на Демонов: ${counterCardItems(dataDemonHunterRaidArmours)}`
								:
							raidsArmour.type === "paladin"
								? `Рейдовой Брони для Паладина: ${counterCardItems(dataPaladinRaidArmours)}`
								:
							raidsArmour.type === "awakener"
								? `Рейдовой Брони для Пробудителя: ${counterCardItems(dataAwakenerRaidArmours)}`
								:
							raidsArmour.type === "rogue"
								? `Рейдовой Брони для Разбойника: ${counterCardItems(dataRogueRaidArmours)}`
								:
							raidsArmour.type === "death-knight"
								? `Рейдовой Брони для Рыцаря Смерти: ${counterCardItems(dataDeathKnightRaidArmours)}`
								:
							raidsArmour.type === "warlock"
								? `Рейдовой Брони для Чернокнижника: ${counterCardItems(dataWarlockRaidArmours)}`
								:
							raidsArmour.type === "shaman"
								? `Рейдовой Брони для Шамана: ${counterCardItems(dataShamanRaidArmours)}`
								: null
						}
					</h2>

					<div ref={fancyboxRef} className="cards__wrapper d-flex flex-wrap justify-content-center justify-content-xl-start mt-5">
						{
							raidsArmour.type === "warrior"
								? renderCardItems(dataWarriorRaidArmours)
								:
							raidsArmour.type === "druid"
								? renderCardItems(dataDruidRaidArmours)
								:
							raidsArmour.type === "priest"
								? renderCardItems(dataPriestRaidArmours)
								:
							raidsArmour.type === "mage"
								? renderCardItems(dataMageRaidArmours)
								:
							raidsArmour.type === "monk"
								? renderCardItems(dataMonkRaidArmours)
								:
							raidsArmour.type === "hunter"
								? renderCardItems(dataHunterRaidArmours)
								:
							raidsArmour.type === "demon-hunter"
								? renderCardItems(dataDemonHunterRaidArmours)
								:
							raidsArmour.type === "paladin"
								? renderCardItems(dataPaladinRaidArmours)
								:
							raidsArmour.type === "awakener"
								? renderCardItems(dataAwakenerRaidArmours)
								:
							raidsArmour.type === "rogue"
								? renderCardItems(dataRogueRaidArmours)
								:
							raidsArmour.type === "death-knight"
								? renderCardItems(dataDeathKnightRaidArmours)
								:
							raidsArmour.type === "warlock"
								? renderCardItems(dataWarlockRaidArmours)
								:
							raidsArmour.type === "shaman"
								? renderCardItems(dataShamanRaidArmours)
								: null
						}
					</div>
				</div>
			</section>


			{/* Модалка 3D */}
                <ModalLightbox
					cards={
						raidsArmour.type === "warrior"
							? dataWarriorRaidArmours.filter(c => c.model3d)
							: raidsArmour.type === "druid"
							? dataDruidRaidArmours.filter(c => c.model3d)
							: raidsArmour.type === "priest"
							? dataPriestRaidArmours.filter(c => c.model3d)
							: raidsArmour.type === "mage"
							? dataMageRaidArmours.filter(c => c.model3d)
							: raidsArmour.type === "monk"
							? dataMonkRaidArmours.filter(c => c.model3d)
							: raidsArmour.type === "hunter"
							? dataHunterRaidArmours.filter(c => c.model3d)
							: raidsArmour.type === "demon-hunter"
							? dataDemonHunterRaidArmours.filter(c => c.model3d)
							: raidsArmour.type === "paladin"
							? dataPaladinRaidArmours.filter(c => c.model3d)
							: raidsArmour.type === "awakener"
							? dataAwakenerRaidArmours.filter(c => c.model3d)
							: raidsArmour.type === "rogue"
							? dataRogueRaidArmours.filter(c => c.model3d)
							: raidsArmour.type === "death-knight"
							? dataDeathKnightRaidArmours.filter(c => c.model3d)
							: raidsArmour.type === "warlock"
							? dataWarlockRaidArmours.filter(c => c.model3d)
							: raidsArmour.type === "shaman"
							? dataShamanRaidArmours.filter(c => c.model3d)
							: []
					}
					initialIndex={openModelIndex ?? 0}
					isOpen={openModelIndex !== null}
					onClose={() => setOpenModelIndex(null)}
				/>

        </>
	)
}

export default RaidsArmours