import { useParams } from "react-router";
import Card from '../Card.tsx'


import dataRaidsArmours from '../../json/raids-armours/raids-armours-details.json'

import dataWarriorRaidArmours from '../../json/raids-armours/warrior/warrior.json';
import dataDruidRaidArmours from '../../json/raids-armours/druid/druid.json';
import dataPriestRaidArmours from '../../json/raids-armours/priest/priest.json';
import dataMageRaidArmours from '../../json/raids-armours/mage/mage.json';
import dataMonkRaidArmours from '../../json/raids-armours/monk/monk.json';
import dataHunterRaidArmours from '../../json/raids-armours/hunter/hunter.json';
import dataDemonHunterRaidArmours from '../../json/raids-armours/demon-hunter/demon-hunter.json';
import dataPaladinRaidArmours from '../../json/raids-armours/paladin/paladin.json';
import dataAwakenerRaidArmours from '../../json/raids-armours/awakener/awakener.json';
import dataRogueRaidArmours from '../../json/raids-armours/rogue/rogue.json';
import dataDeathKnightRaidArmours from '../../json/raids-armours/death-knight/death-knight.json';
import dataWarlockRaidArmours from '../../json/raids-armours/warlock/warlock.json';
import dataShamanRaidArmours from '../../json/raids-armours/shaman/shaman.json';


const RaidsArmours = ()=> {

	const { raidsArmours } = useParams()

	const raidsArmour = dataRaidsArmours.find(raidArmour => raidArmour.id.toLowerCase() === raidsArmours)

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
							<div className="nav__wrapper"></div>
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

					<div className="cards__wrapper d-flex flex-wrap justify-content-center justify-content-xl-start mt-5">
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
		</>
	)
}

export default RaidsArmours