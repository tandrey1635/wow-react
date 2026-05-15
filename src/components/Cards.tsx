import { Link } from "react-router";
import { Tabs, Tab } from 'react-bootstrap';



import Card from './Card.tsx'

import dataRaces from '../json/races/races.json';


import dataRaidsArmours from '../json/raids-armours/raids-armours.json';
import dataWarriorRaidArmours from '../json/raids-armours/warrior/warrior.json';
import dataDruidRaidArmours from '../json/raids-armours/druid/druid.json';
import dataPriestRaidArmours from '../json/raids-armours/priest/priest.json';
import dataMageRaidArmours from '../json/raids-armours/mage/mage.json';
import dataMonkRaidArmours from '../json/raids-armours/monk/monk.json';
import dataHunterRaidArmours from '../json/raids-armours/hunter/hunter.json';
import dataDemonHunterRaidArmours from '../json/raids-armours/demon-hunter/demon-hunter.json';
import dataPaladinRaidArmours from '../json/raids-armours/paladin/paladin.json';
import dataAwakenerRaidArmours from '../json/raids-armours/awakener/awakener.json';
import dataRogueRaidArmours from '../json/raids-armours/rogue/rogue.json';
import dataDeathKnightRaidArmours from '../json/raids-armours/death-knight/death-knight.json';
import dataWarlockRaidArmours from '../json/raids-armours/warlock/warlock.json';
import dataShamanRaidArmours from '../json/raids-armours/shaman/shaman.json';


import dataWeapons from '../json/weapons/weapons.json';
import dataTwoHandedWeapons from '../json/weapons/two-handed/weapons.json';
import dataTwoHandedAxes from '../json/weapons/two-handed/axes/axes.json';
import dataLegendaryWeapons from '../json/weapons/legendary/weapons.json';
import dataDecorativeWeapons from '../json/weapons/decorative/weapons.json';


import dataTwoHandedAxesWeaponDetails from '../json/weapons/two-handed/axes/axes-details.json';
import dataLegendaryWeaponDetails from '../json/weapons/legendary/weapons-details.json';


import dataClasses from '../json/weapons/artifacts/classes.json';


import dataWarriorArtifacts from '../json/weapons/artifacts/warrior/warrior.json';
import dataDruidArtifacts from '../json/weapons/artifacts/druid/druid.json';
import dataPriestArtifacts from '../json/weapons/artifacts/priest/priest.json';
import dataMageArtifacts from '../json/weapons/artifacts/mage/mage.json';
import dataMonkArtifacts from '../json/weapons/artifacts/monk/monk.json';
import dataHunterArtifacts from '../json/weapons/artifacts/hunter/hunter.json';
import dataDemonHunterArtifacts from '../json/weapons/artifacts/demon-hunter/demon-hunter.json';
import dataPaladinArtifacts from '../json/weapons/artifacts/paladin/paladin.json';
import dataRogueArtifacts from '../json/weapons/artifacts/rogue/rogue.json';
import dataDeathKnightArtifacts from '../json/weapons/artifacts/death-knight/death-knight.json';
import dataWarlockArtifacts from '../json/weapons/artifacts/warlock/warlock.json';
import dataShamanArtifacts from '../json/weapons/artifacts/shaman/shaman.json';


import dataArmsWarriorArtifact from '../json/weapons/artifacts/warrior/specializations/arms.json';
import dataFuryWarriorArtifact from '../json/weapons/artifacts/warrior/specializations/fury.json';
import dataProtectionWarriorArtifact from '../json/weapons/artifacts/warrior/specializations/protection.json';



import dataArmours from '../json/armours/armours.json';

import dataLegendaryArmours from '../json/armours/legendary/armours.json';
import dataCloaks from '../json/armours/cloaks/cloaks.json';



import dataMounts from '../json/mounts/mounts.json';




import dataProfessions from '../json/professions/professions.json';


import dataMining from '../json/professions/mining/mining.json';
import dataBlacksmithing from '../json/professions/blacksmithing/blacksmithing.json';
import dataCooking from '../json/professions/cooking/cooking.json';
import dataFishing from '../json/professions/fishing/fishing.json';


import dataPvp from '../json/pvp/pvp.json';
import dataDungeonsRaids from '../json/dungeons-raids/dungeons-raids.json';



import dataAdditionsDungeons from '../json/dungeons-raids/dungeons/additions.json';
import dataAdditionsRaids from '../json/dungeons-raids/raids/additions.json';



import dataClassicDungeons from '../json/dungeons-raids/dungeons/classic/dungeons.json'
import dataBurningCrusadeDungeons from '../json/dungeons-raids/dungeons/burning-crusade/dungeons.json';
import dataWrathOfTheLichKingDungeons from '../json/dungeons-raids/dungeons/wrath-of-the-lich-king/dungeons.json';
import dataCataclysmDungeons from '../json/dungeons-raids/dungeons/cataclysm/dungeons.json';
import dataMistsOfPandariaDungeons from '../json/dungeons-raids/dungeons/mists-of-pandaria/dungeons.json';
import dataWarlordsOfDraenorDungeons from '../json/dungeons-raids/dungeons/warlords-of-draenor/dungeons.json';
import dataLegionDungeons from '../json/dungeons-raids/dungeons/legion/dungeons.json';
import dataBattleForAzerothDungeons from '../json/dungeons-raids/dungeons/battle-for-azeroth/dungeons.json';
import dataShadowlandsDungeons from '../json/dungeons-raids/dungeons/shadowlands/dungeons.json';
import dataDragonflightDungeons from '../json/dungeons-raids/dungeons/dragonflight/dungeons.json';
import dataWarWithinDungeons from '../json/dungeons-raids/dungeons/war-within/dungeons.json';
import dataMidnightDungeons from '../json/dungeons-raids/dungeons/midnight/dungeons.json';
import dataLastTitanDungeons from '../json/dungeons-raids/dungeons/last-titan/dungeons.json';



import dataClassicRaids from '../json/dungeons-raids/raids/classic/raids.json'
import dataBurningCrusadeRaids from '../json/dungeons-raids/raids/burning-crusade/raids.json';
import dataWrathOfTheLichKingRaids from '../json/dungeons-raids/raids/wrath-of-the-lich-king/raids.json';
import dataCataclysmRaids from '../json/dungeons-raids/raids/cataclysm/raids.json';
import dataMistsOfPandariaRaids from '../json/dungeons-raids/raids/mists-of-pandaria/raids.json';
import dataWarlordsOfDraenorRaids from '../json/dungeons-raids/raids/warlords-of-draenor/raids.json';
import dataLegionRaids from '../json/dungeons-raids/raids/legion/raids.json';
import dataBattleForAzerothRaids from '../json/dungeons-raids/raids/battle-for-azeroth/raids.json';
import dataShadowlandsRaids from '../json/dungeons-raids/raids/shadowlands/raids.json';
import dataDragonflightRaids from '../json/dungeons-raids/raids/dragonflight/raids.json';
import dataWarWithinRaids from '../json/dungeons-raids/raids/war-within/raids.json';
import dataMidnightRaids from '../json/dungeons-raids/raids/midnight/raids.json';
import dataLastTitanRaids from '../json/dungeons-raids/raids/last-titan/raids.json';




import dataAchievements from '../json/achievements/achievements.json';
import dataLegacy from '../json/achievements/legacy/legacy.json';
import dataGreatFeats from '../json/achievements/great-feats/great-feats.json';
import dataWowAnniversary from '../json/achievements/wow-anniversary/wow-anniversary.json';
import dataWowCollectionEditions from '../json/achievements/wow-collection-editions/wow-collection-editions.json';




import type { ICard }  from "../types/card-types";
import { useState } from "react";



const Cards = ({home, raidsArmoursWarrior, raidsArmoursDruid, raidsArmoursPriest, raidsArmoursMage, raidsArmoursMonk, raidsArmoursHunter, raidsArmoursDemonHunter, raidsArmoursPaladin, raidsArmoursAwakener, raidsArmoursRogue, raidsArmoursDeathKnight, raidsArmoursWarlock, raidsArmoursShaman, twoHandedWeapons, twoHandedAxes, twoHandedAxesWeaponDetails, legendaryWeapons, legendaryWeaponDetails, decorativeWeapons, classes, warriorArtifacts, druidArtifacts, priestArtifacts, mageArtifacts, monkArtifacts, hunterArtifacts, demonHunterArtifacts, paladinArtifacts, rogueArtifacts, deathKnightArtifacts, warlockArtifacts, shamanArtifacts, armsWarrior, furyWarrior, protectionWarrior, legendaryArmours, cloaks, mining, blacksmithing, cooking, fishing, additionsDungeons, additionsRaids, dungeonsClassic, dungeonsBurningCrusade, dungeonsWrathOfTheLichKing, dungeonsCataclysm, dungeonsMistsOfPandaria, dungeonsWarlordsOfDraenor, dungeonsLegion, dungeonsBattleForAzeroth, dungeonsShadowlands, dungeonsDragonflight, dungeonsWarWithin, dungeonsMidnight, dungeonsLastTitan, raidsClassic, raidsBurningCrusade, raidsWrathOfTheLichKing, raidsCataclysm, raidsMistsOfPandaria, raidsWarlordsOfDraenor, raidsLegion, raidsBattleForAzeroth, raidsShadowlands, raidsDragonflight, raidsWarWithin, raidsMidnight, raidsLastTitan, legacy, greatFeats, wowAnniversary, wowCollectionEditions}) => {


	const counterCardItems = (dataJson: ICard[]) => dataJson.length
	const counterCardItemsDone = (dataJson: ICard[]) => dataJson.map(card=>{
		let arr = []

		if (card.type) {
			arr.push(card.type)
		}

		return arr

	}).flat().length


	const [filter, setFilter] = useState([])



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
		<section className="services">
			<div className="container">
				<div className="nav__wrapper">
					{ home &&
					<>
						<Tabs defaultActiveKey="world" id="cards-tabs" fill>
							{/* Таб контент Мир Азерота */}
							{/* <Tab eventKey="world" title="Мир Азерота">
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">

								</div>
							</Tab> */}

							{/* Таб контент расы */}
							<Tab eventKey="races" title="Расы">
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									{ renderCardItems(dataRaces) }
								</div>

								<ul className="nav-menu nav-menu-dropdown nav-menu-races">
									<Link className="nav-link nav-link-races nav-link-races-horde" to="/races/horde">Орда</Link>
									<Link className="nav-link nav-link-races nav-link-races-alliance" to="/races/alliance">Альянс</Link>
								</ul>
							</Tab>

							{/* Таб контент рейдовая броня */}
							<Tab eventKey="raidsArmours" title="Рейдовые Комплекты">
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									{ renderCardItems(dataRaidsArmours) }
								</div>

								<ul className="nav-menu nav-menu-dropdown nav-menu-raid-armours">
									<Link className="nav-link nav-link-warrior" to="/raids-armours/warrior">Воин</Link>
									<Link className="nav-link nav-link-druid" to="/raids-armours/druid">Друид</Link>
									<Link className="nav-link nav-link-priest" to="/raids-armours/priest">Жрец</Link>
									<Link className="nav-link nav-link-mage" to="/raids-armours/mage">Маг</Link>
									<Link className="nav-link nav-link-monk" to="/raids-armours/monk">Монах</Link>
									<Link className="nav-link nav-link-hunter" to="/raids-armours/hunter">Охотник</Link>
									<Link className="nav-link nav-link-demon-hunter" to="/raids-armours/demon-hunter">Охотник на Демонов</Link>
									<Link className="nav-link nav-link-paladin" to="/raids-armours/paladin">Паладин</Link>
									<Link className="nav-link nav-link-awakener" to="/raids-armours/awakener">Пробудитель</Link>
									<Link className="nav-link nav-link-rogue" to="/raids-armours/rogue">Разбойник</Link>
									<Link className="nav-link nav-link-death-knight" to="/raids-armours/death-knight">Рыцарь Смерти</Link>
									<Link className="nav-link nav-link-warlock" to="/raids-armours/warlock">Чернокнижник</Link>
									<Link className="nav-link nav-link-shaman" to="/raids-armours/shaman">Шаман</Link>
								</ul>
							</Tab>

							{ /* Таб контент оружие */}
							<Tab eventKey="weapons" title="Оружие">
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									{ renderCardItems(dataWeapons) }
								</div>

								<ul className="nav-menu nav-menu-dropdown nav-menu-weapons">
									<Link className="nav-link nav-link-weapons" to="/weapons/one-handed">Одноручное</Link>
									<Link className="nav-link nav-link-weapons" to="/weapons/two-handed">Двуручное</Link>
									<Link className="nav-link nav-link-weapons" to="/weapons/range">Дальний бой</Link>
									<Link className="nav-link nav-link-legendary" to="/weapons/legendary">Легендарное</Link>
									<Link className="nav-link nav-link-artifact" to="/weapons/artifact">Артефактное</Link>
									<Link className="nav-link nav-link-decorative" to="/weapons/decorative">Декоративное</Link>
								</ul>
							</Tab>

							{/* Таб контент броня */}
							<Tab eventKey="armours" title="Броня">
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									{ renderCardItems(dataArmours) }
								</div>
							</Tab>

							{/* Таб контент маунты */}
							<Tab eventKey="mounts" title="Маунты">
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									{ renderCardItems(dataMounts) }
								</div>

								<ul className="nav-menu nav-menu-dropdown nav-menu-mounts">
									<Link className="nav-link nav-link-mouts nav-link-mounts-water" to="/mounts/water">Водные</Link>
									<Link className="nav-link nav-link-mouts nav-link-mounts-earth" to="/mounts/earth">Наземные</Link>
									<Link className="nav-link nav-link-mouts nav-link-mounts-fly" to="/mounts/fly">Летающие</Link>
								</ul>
							</Tab>

							{/* Таб контент профессии */}
							<Tab eventKey="professions" title="Профессии">
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									{ renderCardItems(dataProfessions) }
								</div>

								<ul className="nav-menu nav-menu-dropdown nav-menu-professions">
									<Link className="nav-link nav-link-professions nav-link-professions-alchemy" to="/professions/alchemy">Алхимия</Link>
									<Link className="nav-link nav-link-professions nav-link-professions-mining" to="/professions/mining">Горное Дело</Link>
									<Link className="nav-link nav-link-professions nav-link-professions-engeenering" to="/professions/engineering">Инженерное Дело</Link>
									<Link className="nav-link nav-link-professions nav-link-professions-leatherworking" to="/professions/leatherworking">Кожевничество</Link>
									<Link className="nav-link nav-link-professions nav-link-professions-blacksmithing" to="/professions/blacksmithing">Кузнечное Дело</Link>
									<Link className="nav-link nav-link-professions nav-link-professions-enchanting" to="/professions/enchanting">Наложение Чар</Link>
									<Link className="nav-link nav-link-professions nav-link-professions-inscription" to="/professions/inscription">Начертание</Link>
									<Link className="nav-link nav-link-professions nav-link-professions-tailoring" to="/professions/tailoring">Портняжное Дело</Link>
									<Link className="nav-link nav-link-professions nav-link-professions-skinning" to="/professions/skinning">Снятие Шкур</Link>
									<Link className="nav-link nav-link-professions nav-link-professions-herbalism" to="/professions/herbalism">Травничество</Link>
									<Link className="nav-link nav-link-professions nav-link-professions-jewelcrafting" to="/professions/jewelcrafting">Ювелирное Дело</Link>
									<Link className="nav-link nav-link-professions nav-link-professions-archaeology" to="/professions/archaeology">Археология</Link>
									<Link className="nav-link nav-link-professions nav-link-professions-riding" to="/professions/riding">Верховая Езда</Link>
									<Link className="nav-link nav-link-professions nav-link-professions-cooking" to="/professions/cooking">Кулинария</Link>
									<Link className="nav-link nav-link-professions nav-link-professions-first-aid" to="/professions/first-aid">Первая Помощь</Link>
									<Link className="nav-link nav-link-professions nav-link-professions-fishing" to="/professions/fishing">Рыбная Ловля</Link>
									<Link className="nav-link nav-link-professions nav-link-professions-junkyard-tinkering" to="/professions/junkyard-tinkering">Кустарная Механика</Link>
									<Link className="nav-link nav-link-professions nav-link-professions-protoform-synthesis" to="/professions/protoform-synthesis">Протосинтез</Link>
								</ul>
							</Tab>

							{/* Таб контент pvp */}
							<Tab eventKey="pvp" title="PvP">
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									{ renderCardItems(dataPvp) }
								</div>
							</Tab>

							{/* Таб контент подземелья и рейды */}
							<Tab eventKey="dungeonsRaids" title="Подземелья и Рейды">
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									{ renderCardItems(dataDungeonsRaids) }
								</div>
							</Tab>

							{/* Таб контент достижения */}
							<Tab eventKey="achievements" title="Достижения">
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									{ renderCardItems(dataAchievements) }
								</div>

								<ul className="nav-menu nav-menu-dropdown nav-menu-achievements">
									<Link className="nav-link nav-link-achievements" to="/achievements/legacy">Наследие</Link>
									<Link className="nav-link nav-link-achievements nav-link-achievements-great-feats" to="/achievements/great-feats">Великие Подвиги</Link>
									<Link className="nav-link nav-link-achievements nav-link-achievements" to="/achievements/wow-anniversary">Годовщина World of Warcraft</Link>
									<Link className="nav-link nav-link-achievements nav-link-achievements" to="/achievements/wow-collection-editions">Коллекционные издания World of Warcraft</Link>
								</ul>
							</Tab>
						</Tabs>
					</>

					}

					{/* Таб контент рейдовая броня */}
					<>
						{/* Воин */}
						{ raidsArmoursWarrior &&
							<Tabs defaultActiveKey="raidsArmours" id="cards-tabs" fill>
								<Tab eventKey="raidsArmours" title="Рейдовые Комплекты">
									<h3 className="text-success text-center fw-bold display-4">Всего Брони: {counterCardItems(dataWarriorRaidArmours)}</h3>
									<h3 className="text-success text-center fw-bold display-4">Готово: {counterCardItemsDone(dataWarriorRaidArmours)}</h3>
									<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
										{ renderCardItems(dataWarriorRaidArmours) }
									</div>

									<ul className="nav-menu nav-menu-dropdown nav-menu-raid-armours">
										<Link className="nav-link nav-link-home" to="/">Главная</Link>
										<Link className="nav-link nav-link-druid" to="/raids-armours/druid">Друид</Link>
										<Link className="nav-link nav-link-priest" to="/raids-armours/priest">Жрец</Link>
										<Link className="nav-link nav-link-mage" to="/raids-armours/mage">Маг</Link>
										<Link className="nav-link nav-link-monk" to="/raids-armours/monk">Монах</Link>
										<Link className="nav-link nav-link-hunter" to="/raids-armours/hunter">Охотник</Link>
										<Link className="nav-link nav-link-demon-hunter" to="/raids-armours/demon-hunter">Охотник на Демонов</Link>
										<Link className="nav-link nav-link-paladin" to="/raids-armours/paladin">Паладин</Link>
										<Link className="nav-link nav-link-awakener" to="/raids-armours/awakener">Пробудитель</Link>
										<Link className="nav-link nav-link-rogue" to="/raids-armours/rogue">Разбойник</Link>
										<Link className="nav-link nav-link-death-knight" to="/raids-armours/death-knight">Рыцарь Смерти</Link>
										<Link className="nav-link nav-link-warlock" to="/raids-armours/warlock">Чернокнижник</Link>
										<Link className="nav-link nav-link-shaman" to="/raids-armours/shaman">Шаман</Link>
									</ul>
								</Tab>
							</Tabs>
						}

						{/* Друид */}
						{ raidsArmoursDruid &&
							<>
								<h3 className="text-success text-center fw-bold display-4">Всего Брони: {counterCardItems(dataDruidRaidArmours)}</h3>
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
									{ renderCardItems(dataDruidRaidArmours) }
								</div>
							</>
						}

						{/* Жрец */}
						{ raidsArmoursPriest &&
							<>
								<h3 className="text-success text-center fw-bold display-4">Всего Брони: {counterCardItems(dataPriestRaidArmours)}</h3>
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
									{ renderCardItems(dataPriestRaidArmours) }
								</div>
							</>
						}

						{/* Маг */}
						{ raidsArmoursMage &&
							<>
								<h3 className="text-success text-center fw-bold display-4">Всего Брони: {counterCardItems(dataMageRaidArmours)}</h3>
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
									{ renderCardItems(dataMageRaidArmours) }
								</div>
							</>
						}

						{/* Монах */}
						{ raidsArmoursMonk &&
							<>
								<h3 className="text-success text-center fw-bold display-4">Всего Брони: {counterCardItems(dataMonkRaidArmours)}</h3>
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
									{ renderCardItems(dataMonkRaidArmours) }
								</div>
							</>
						}

						{/* Охотник */}
						{ raidsArmoursHunter &&
							<>
								<h3 className="text-success text-center fw-bold display-4">Всего Брони: {counterCardItems(dataHunterRaidArmours)}</h3>
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
									{ renderCardItems(dataHunterRaidArmours) }
								</div>
							</>
						}

						{/* Охотник на демонов */}
						{ raidsArmoursDemonHunter &&
							<>
								<h3 className="text-success text-center fw-bold display-4">Всего Брони: {counterCardItems(dataDemonHunterRaidArmours)}</h3>
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
									{ renderCardItems(dataDemonHunterRaidArmours) }
								</div>
							</>
						}

						{/* Паладин */}
						{ raidsArmoursPaladin &&
							<>
								<h3 className="text-success text-center fw-bold display-4">Всего Брони: {counterCardItems(dataPaladinRaidArmours)}</h3>
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
									{ renderCardItems(dataPaladinRaidArmours) }
								</div>
							</>
						}

						{/* Пробудитель */}
						{ raidsArmoursAwakener &&
							<>
								<h3 className="text-success text-center fw-bold display-4">Всего Брони: {counterCardItems(dataAwakenerRaidArmours)}</h3>
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
									{ renderCardItems(dataAwakenerRaidArmours) }
								</div>
							</>
						}

						{/* Разбойник */}
						{ raidsArmoursRogue &&
							<>
								<h3 className="text-success text-center fw-bold display-4">Всего Брони: {counterCardItems(dataRogueRaidArmours)}</h3>
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
									{ renderCardItems(dataRogueRaidArmours) }
								</div>
							</>
						}

						{/* Рыцарь смерти */}
						{ raidsArmoursDeathKnight &&
							<Tabs defaultActiveKey="raidsArmours" id="cards-tabs" fill>
								<Tab eventKey="raidsArmours" title="Рейдовые Комплекты">
									<h3 className="text-success text-center fw-bold display-4">Всего Брони: {counterCardItems(dataDeathKnightRaidArmours)}</h3>
									<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
										{ renderCardItems(dataDeathKnightRaidArmours) }
									</div>

									<ul className="nav-menu nav-menu-dropdown nav-menu-raid-armours">
										<Link className="nav-link nav-link-home" to="/">Главная</Link>
										<Link className="nav-link nav-link-warrior" to="/raids-armours/warrior">Воин</Link>
										<Link className="nav-link nav-link-druid" to="/raids-armours/druid">Друид</Link>
										<Link className="nav-link nav-link-priest" to="/raids-armours/priest">Жрец</Link>
										<Link className="nav-link nav-link-mage" to="/raids-armours/mage">Маг</Link>
										<Link className="nav-link nav-link-monk" to="/raids-armours/monk">Монах</Link>
										<Link className="nav-link nav-link-hunter" to="/raids-armours/hunter">Охотник</Link>
										<Link className="nav-link nav-link-demon-hunter" to="/raids-armours/demon-hunter">Охотник на Демонов</Link>
										<Link className="nav-link nav-link-paladin" to="/raids-armours/paladin">Паладин</Link>
										<Link className="nav-link nav-link-awakener" to="/raids-armours/awakener">Пробудитель</Link>
										<Link className="nav-link nav-link-rogue" to="/raids-armours/rogue">Разбойник</Link>
										<Link className="nav-link nav-link-warlock" to="/raids-armours/warlock">Чернокнижник</Link>
										<Link className="nav-link nav-link-shaman" to="/raids-armours/shaman">Шаман</Link>
									</ul>
								</Tab>
							</Tabs>
						}

						{/* Чернокнижник */}
						{ raidsArmoursWarlock &&
							<>
								<h3 className="text-success text-center fw-bold display-4">Всего Брони: {counterCardItems(dataWarlockRaidArmours)}</h3>
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
									{ renderCardItems(dataWarlockRaidArmours) }
								</div>
							</>
						}

						{/* Шаман */}
						{ raidsArmoursShaman &&
							<>
								<h3 className="text-success text-center fw-bold display-4">Всего Брони: {counterCardItems(dataShamanRaidArmours)}</h3>
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
									{ renderCardItems(dataShamanRaidArmours) }
								</div>
							</>
						}
					</>

					{/* Таб контент оружие */}
					<>
						{/* Двуручное оружие */}
						{ twoHandedWeapons &&
							<div className="tab-pane fade show active" id="pills-raids-armour">
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									{ renderCardItems(dataTwoHandedWeapons) }
								</div>
							</div>
						}

							{/* Двуручные топоры */}
							{ twoHandedAxes &&
								<>
									<h3 className="text-success text-center fw-bold display-4">Всего Оружия: {counterCardItems(dataTwoHandedAxesWeaponDetails)}</h3>
									<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
										{ renderCardItems(dataTwoHandedAxes) }
									</div>
								</>
							}

						{/* Легендарное оружие */}
						{ legendaryWeapons &&
							<>
								<h3 className="text-success text-center fw-bold display-4">Всего Легендарного Оружия: {counterCardItems(dataLegendaryWeapons)}</h3>
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
									{ renderCardItems(dataLegendaryWeapons) }
								</div>
							</>
						}

						{/* Декоративное оружие */}
						{ decorativeWeapons &&
							<>
								<h3 className="text-success text-center fw-bold display-4">Всего Декоративного Оружия: {counterCardItems(dataDecorativeWeapons)}</h3>
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataDecorativeWeapons) }
								</div>
							</>
						}
					</>

					{/* Таб контент броня */}
					<>
						{/* Легендарная броня */}
						{ legendaryArmours &&
							<>
								<h3 className="text-success text-center fw-bold display-4">Всего Легендарной Брони: {counterCardItems(dataLegendaryArmours)}</h3>
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
									{ renderCardItems(dataLegendaryArmours) }
								</div>
							</>
						}

						{/* Плащи */}
						{ cloaks &&
							<>
								<h3 className="text-success text-center fw-bold display-4">Всего Плащей: {counterCardItems(dataCloaks)}</h3>
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
									{ renderCardItems(dataCloaks) }
								</div>
							</>
						}
					</>

					{/* Таб контент профессии */}
					<>
						{/* Горное дело */}
						{ mining &&
							<Tabs defaultActiveKey="professions" id="cards-tabs" fill>
								<Tab eventKey="professions" title="Маунты">
									<h3 className="text-success text-center fw-bold display-4">Всего Шахтерских Инструментов: {counterCardItems(dataMining)}</h3>
									<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
										{ renderCardItems(dataMining) }
									</div>

									<ul className="nav-menu nav-menu-dropdown nav-menu-professions">
										<Link className="nav-link nav-link-professions nav-link-mounts-home" to="/">Главная</Link>
										<Link className="nav-link nav-link-professions nav-link-professions-alchemy" to="/professions/alchemy">Алхимия</Link>
										<Link className="nav-link nav-link-professions nav-link-professions-engeenering" to="/professions/engineering">Инженерное Дело</Link>
										<Link className="nav-link nav-link-professions nav-link-professions-leatherworking" to="/professions/leatherworking">Кожевничество</Link>
										<Link className="nav-link nav-link-professions nav-link-professions-blacksmithing" to="/professions/blacksmithing">Кузнечвное Дело</Link>
									</ul>
								</Tab>
							</Tabs>
						}

						{/* Кузнечное дело */}
						{ blacksmithing &&
							<>
								<h3 className="text-success text-center fw-bold display-4">Всего Кузнечных Инструментов: {counterCardItems(dataBlacksmithing)}</h3>
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
									{ renderCardItems(dataBlacksmithing) }
								</div>
							</>
						}

						{/* Кулинария */}
						{ cooking &&
							<>
								<h3 className="text-success text-center fw-bold display-4">Всего Кухонных Принадлежностей: {counterCardItems(dataCooking)}</h3>
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
									{ renderCardItems(dataCooking) }
								</div>
							</>
						}

						{/* Рыбная ловля */}
						{ fishing &&
							<>
								<h3 className="text-success text-center fw-bold display-4">Всего Рыболовных Снастей: {counterCardItems(dataFishing)}</h3>
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
									{ renderCardItems(dataFishing) }
								</div>
							</>
						}
					</>

					{/* Таб контент подземелья и рейды */}
					<>
						{/* Подземелья список */}
						{ additionsDungeons &&
							<>
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
									{ renderCardItems(dataAdditionsDungeons) }
								</div>
							</>
						}

							{/* Classic */}
							{ dungeonsClassic &&
								<>
									<h3 className="text-success text-center fw-bold display-4">Всего Подземелий: {counterCardItems(dataClassicDungeons)}</h3>
									<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
										{ renderCardItems(dataClassicDungeons) }
									</div>
								</>
							}

							{/* Burning Crusade */}
							{ dungeonsBurningCrusade &&
								<>
									<h3 className="text-success text-center fw-bold display-4">Всего Подземелий: {counterCardItems(dataBurningCrusadeDungeons)}</h3>
									<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
										{ renderCardItems(dataBurningCrusadeDungeons) }
									</div>
								</>
							}

							{/* Wrath of the Lich King */}
							{ dungeonsWrathOfTheLichKing &&
								<>
									<h3 className="text-success text-center fw-bold display-4">Всего Подземелий: {counterCardItems(dataWrathOfTheLichKingDungeons)}</h3>
									<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
										{ renderCardItems(dataWrathOfTheLichKingDungeons) }
									</div>
								</>
							}

							{/* Cataclysm */}
							{ dungeonsCataclysm &&
								<>
									<h3 className="text-success text-center fw-bold display-4">Всего Подземелий: {counterCardItems(dataCataclysmDungeons)}</h3>
									<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
										{ renderCardItems(dataCataclysmDungeons) }
									</div>
								</>
							}

							{/* Mists of Pandaria */}
							{ dungeonsMistsOfPandaria &&
								<>
									<h3 className="text-success text-center fw-bold display-4">Всего Подземелий: {counterCardItems(dataMistsOfPandariaDungeons)}</h3>
									<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
										{ renderCardItems(dataMistsOfPandariaDungeons) }
									</div>
								</>
							}

							{/* Warlords of Draenor */}
							{ dungeonsWarlordsOfDraenor &&
								<>
									<h3 className="text-success text-center fw-bold display-4">Всего Подземелий: {counterCardItems(dataWarlordsOfDraenorDungeons)}</h3>
									<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
										{ renderCardItems(dataWarlordsOfDraenorDungeons) }
									</div>
								</>
							}

							{/* Legion */}
							{ dungeonsLegion &&
								<>
									<h3 className="text-success text-center fw-bold display-4">Всего Подземелий: {counterCardItems(dataLegionDungeons)}</h3>
									<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
										{ renderCardItems(dataLegionDungeons) }
									</div>
								</>
							}

							{/* Battle for Azeroth */}
							{ dungeonsBattleForAzeroth &&
								<>
									<h3 className="text-success text-center fw-bold display-4">Всего Подземелий: {counterCardItems(dataBattleForAzerothDungeons)}</h3>
									<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
										{ renderCardItems(dataBattleForAzerothDungeons) }
									</div>
								</>
							}

							{/* Shadowlands */}
							{ dungeonsShadowlands &&
								<>
									<h3 className="text-success text-center fw-bold display-4">Всего Подземелий: {counterCardItems(dataShadowlandsDungeons)}</h3>
									<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
										{ renderCardItems(dataShadowlandsDungeons) }
									</div>
								</>
							}

							{/* Dragonflight */}
							{ dungeonsDragonflight &&
								<>
									<h3 className="text-success text-center fw-bold display-4">Всего Подземелий: {counterCardItems(dataDragonflightDungeons)}</h3>
									<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
										{ renderCardItems(dataDragonflightDungeons) }
									</div>
								</>
							}

							{/* War Within */}
							{ dungeonsWarWithin &&
								<>
									<h3 className="text-success text-center fw-bold display-4">Всего Подземелий: {counterCardItems(dataWarWithinDungeons)}</h3>
									<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
										{ renderCardItems(dataWarWithinDungeons) }
									</div>
								</>
							}

							{/* Midnight */}
							{ dungeonsMidnight &&
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									{ renderCardItems(dataMidnightDungeons) }
								</div>
							}

							{/* LastTitan */}
							{ dungeonsLastTitan &&
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									{ renderCardItems(dataLastTitanDungeons) }
								</div>
							}

						{/* Рейды список */}
						{ additionsRaids &&
							<>
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
									{ renderCardItems(dataAdditionsRaids) }
								</div>
							</>
						}

							{/* Classic */}
							{ raidsClassic &&
								<>
									<h3 className="text-success text-center fw-bold display-4">Всего Рейдов: {counterCardItems(dataClassicRaids)}</h3>
									<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
										{ renderCardItems(dataClassicRaids) }
									</div>
								</>
							}

							{/* Burning Crusade */}
							{ raidsBurningCrusade &&
								<>
									<h3 className="text-success text-center fw-bold display-4">Всего Рейдов: {counterCardItems(dataBurningCrusadeRaids)}</h3>
									<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
										{ renderCardItems(dataBurningCrusadeRaids) }
									</div>
								</>
							}

							{/* Wrath of the Lich King */}
							{ raidsWrathOfTheLichKing &&
								<>
									<h3 className="text-success text-center fw-bold display-4">Всего Рейдов: {counterCardItems(dataWrathOfTheLichKingRaids)}</h3>
									<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
										{ renderCardItems(dataWrathOfTheLichKingRaids) }
									</div>
								</>
							}

							{/* Cataclysm */}
							{ raidsCataclysm &&
								<>
									<h3 className="text-success text-center fw-bold display-4">Всего Рейдов: {counterCardItems(dataCataclysmRaids)}</h3>
									<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
										{ renderCardItems(dataCataclysmRaids) }
									</div>
								</>
							}

							{/* Mists of Pandaria */}
							{ raidsMistsOfPandaria &&
								<>
									<h3 className="text-success text-center fw-bold display-4">Всего Рейдов: {counterCardItems(dataMistsOfPandariaRaids)}</h3>
									<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
										{ renderCardItems(dataMistsOfPandariaRaids) }
									</div>
								</>
							}

							{/* Warlords of Draenor */}
							{ raidsWarlordsOfDraenor &&
								<>
									<h3 className="text-success text-center fw-bold display-4">Всего Рейдов: {counterCardItems(dataWarlordsOfDraenorRaids)}</h3>
									<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
										{ renderCardItems(dataWarlordsOfDraenorRaids) }
									</div>
								</>
							}

							{/* Legion */}
							{ raidsLegion &&
								<>
									<h3 className="text-success text-center fw-bold display-4">Всего Рейдов: {counterCardItems(dataLegionRaids)}</h3>
									<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
										{ renderCardItems(dataLegionRaids) }
									</div>
								</>
							}

							{/* Battle for Azeroth */}
							{ raidsBattleForAzeroth &&
								<>
									<h3 className="text-success text-center fw-bold display-4">Всего Рейдов: {counterCardItems(dataBattleForAzerothRaids)}</h3>
									<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
										{ renderCardItems(dataBattleForAzerothRaids) }
									</div>
								</>
							}

							{/* Shadowlands */}
							{ raidsShadowlands &&
								<>
									<h3 className="text-success text-center fw-bold display-4">Всего Рейдов: {counterCardItems(dataShadowlandsRaids)}</h3>
									<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
										{ renderCardItems(dataShadowlandsRaids) }
									</div>
								</>
							}

							{/* Dragonflight */}
							{ raidsDragonflight &&
								<>
									<h3 className="text-success text-center fw-bold display-4">Всего Рейдов: {counterCardItems(dataDragonflightRaids)}</h3>
									<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
										{ renderCardItems(dataDragonflightRaids) }
									</div>
								</>
							}

							{/* War Within */}
							{ raidsWarWithin &&
								<>
									<h3 className="text-success text-center fw-bold display-4">Всего Рейдов: {counterCardItems(dataWarWithinRaids)}</h3>
									<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
										{ renderCardItems(dataWarWithinRaids) }
									</div>
								</>
							}

							{/* Midnight */}
							{ raidsMidnight &&
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									{ renderCardItems(dataMidnightRaids) }
								</div>
							}

							{/* LastTitan */}
							{ raidsLastTitan &&
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									{ renderCardItems(dataLastTitanRaids) }
								</div>
							}
					</>

					{/* Таб контент достижения */}
					<>
						{/* Наследие */}
						{ legacy &&
							<>
								<h3 className="text-success text-center fw-bold display-4">Всего Наследия: {counterCardItems(dataLegacy)}</h3>
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
									{ renderCardItems(dataLegacy) }
								</div>
							</>
						}

						{/* Великие подвиги */}
						{ greatFeats &&
							<>
								<h3 className="text-success text-center fw-bold display-4">Всего Великих Подвигов: {counterCardItems(dataGreatFeats)}</h3>
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
									{ renderCardItems(dataGreatFeats) }
								</div>
							</>
						}

						{/* Годовщина wow */}
						{ wowAnniversary &&
							<>
								<h3 className="text-success text-center fw-bold display-4">Всего: {counterCardItems(dataWowAnniversary)}</h3>
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
									{ renderCardItems(dataWowAnniversary) }
								</div>
							</>
						}

						{/* Коллекционные издания wow */}
						{ wowCollectionEditions &&
							<>
								<h3 className="text-success text-center fw-bold display-4">Всего Коллекционных Изданий: {counterCardItems(dataWowCollectionEditions)}</h3>
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
									{ renderCardItems(dataWowCollectionEditions) }
								</div>
							</>
						}
					</>
				</div>
			</div>
					{ twoHandedAxesWeaponDetails &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ renderWeaponDetails(dataTwoHandedAxesWeaponDetails) }
						</div>
					}

					{ classes &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ renderCardItems(dataClasses) }
						</div>
					}

					{ warriorArtifacts &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ renderCardItems(dataWarriorArtifacts) }
						</div>
					}

					{ druidArtifacts &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ renderCardItems(dataDruidArtifacts) }
						</div>
					}

					{ priestArtifacts &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ renderCardItems(dataPriestArtifacts) }
						</div>
					}

					{ mageArtifacts &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ renderCardItems(dataMageArtifacts) }
						</div>
					}

					{ monkArtifacts &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ renderCardItems(dataMonkArtifacts) }
						</div>
					}

					{ hunterArtifacts &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ renderCardItems(dataHunterArtifacts) }
						</div>
					}

					{ demonHunterArtifacts &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ renderCardItems(dataDemonHunterArtifacts) }
						</div>
					}

					{ paladinArtifacts &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ renderCardItems(dataPaladinArtifacts) }
						</div>
					}

					{ rogueArtifacts &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ renderCardItems(dataRogueArtifacts) }
						</div>
					}

					{ deathKnightArtifacts &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ renderCardItems(dataDeathKnightArtifacts) }
						</div>
					}

					{ warlockArtifacts &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ renderCardItems(dataWarlockArtifacts) }
						</div>
					}

					{ shamanArtifacts &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ renderCardItems(dataShamanArtifacts) }
						</div>
					}

					{ armsWarrior &&
						<>
							<h3 className="text-success text-center fw-bold display-4">Всего Артефактов: {counterCardItems(dataArmsWarriorArtifact)}</h3>
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataArmsWarriorArtifact) }
							</div>
						</>
					}

					{ furyWarrior &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ renderCardItems(dataFuryWarriorArtifact) }
						</div>
					}

					{ protectionWarrior &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ renderCardItems(dataProtectionWarriorArtifact) }
						</div>
					}
		</section>
	)
}


export default Cards