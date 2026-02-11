import { Link } from "react-router";
import Card from './Card.tsx'
import WeaponDetails from './WeaponDetails.tsx'

import dataRaces from '../json/races/races.json';
import dataSelectRaces from '../json/races/races/faction.json';
import dataRacesHorde from '../json/races/races/horde/horde.json';
import dataRacesAlliance from '../json/races/races/alliance/alliance.json';


import dataRaidArmours from '../json/raids-armours/raids-armours.json';
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
import dataCloaks from '../json/armours/cloaks/cloaks.json';


import dataWaterMounts from '../json/mounts/water/water.json';
import dataFlyMounts from '../json/mounts/fly/fly.json';



import dataGold from '../json/gold/gold.json';
import dataMounts from '../json/mounts/mounts.json';
import dataProfessions from '../json/professions/professions.json';
import dataPvp from '../json/pvp/pvp.json';
import dataDungeons from '../json/dungeons/dungeons.json';
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
import dataWowCollectionEditions from '../json/achievements/wow-collection-editions/wow-collection-editions.json';


import type { ICard, IWeaponDetails }  from "../types/card-types";



const Cards = ({home, races, horde, alliance, raidsArmoursWarrior, raidsArmoursDruid, raidsArmoursPriest, raidsArmoursMage, raidsArmoursMonk, raidsArmoursHunter, raidsArmoursDemonHunter, raidsArmoursPaladin, raidsArmoursAwakener, raidsArmoursRogue, raidsArmoursDeathKnight, raidsArmoursWarlock, raidsArmoursShaman, twoHandedWeapons, twoHandedAxes, twoHandedAxesWeaponDetails, legendaryWeapons, legendaryWeaponDetails, classes, warriorArtifacts, druidArtifacts, priestArtifacts, mageArtifacts, monkArtifacts, hunterArtifacts, demonHunterArtifacts, paladinArtifacts, rogueArtifacts, deathKnightArtifacts, warlockArtifacts, shamanArtifacts, armsWarrior, furyWarrior, protectionWarrior, cloaks, waterMounts, flyMounts, additionsDungeons, additionsRaids, dungeonsClassic, dungeonsBurningCrusade, dungeonsWrathOfTheLichKing, dungeonsCataclysm, dungeonsMistsOfPandaria, dungeonsWarlordsOfDraenor, dungeonsLegion, dungeonsBattleForAzeroth, dungeonsShadowlands, dungeonsDragonflight, dungeonsWarWithin, dungeonsMidnight, dungeonsLastTitan, raidsClassic, raidsBurningCrusade, raidsWrathOfTheLichKing, raidsCataclysm, raidsMistsOfPandaria, raidsWarlordsOfDraenor, raidsLegion, raidsBattleForAzeroth, raidsShadowlands, raidsDragonflight, raidsWarWithin, raidsMidnight, raidsLastTitan, wowCollectionEditions}) => {

	const basePathImg = '/src/assets/img'

	/* Фото прокачка персонажей гл стр */
	const LvlUpBaseCardImg = `${basePathImg}/lvl-up/bg/lvl-up-base.png`
	const LvlUpExpertCardImg = `${basePathImg}/lvl-up/bg/lvl-up-expert.png`
	const LvlUpMasterCardImg = `${basePathImg}/lvl-up/bg/lvl-up-master.png`


	const dollarImg = `${basePathImg}/gold/bg/dollar.png`
	const dollarAlt = '$'



	const counterCardItems = (dataJson: ICard[]) => dataJson.length
	const counterCardItemsDone = (dataJson: ICard[]) => dataJson.map(card=>{
		let arr = []

		if (card.type) {
			arr.push(card.type)
		}

		return arr

	}).flat().length


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
				gold={card.gold === true}
			/>
		)
	})

	const renderWeaponDetails = (dataJson: IWeaponDetails[]) => dataJson.map(card=> {
		return (
			<WeaponDetails
				key={card.id}
				path={card.path}
				weaponType={card.weaponType}
				label={card.label}
				img={card.img}
				objectFit={card.objectFit}
				description={card.description}
				title={card.title}
				dmg={card.dmg}
				dps={card.dps}
				speed={card.speed}
				strength={card.strength}
				stamina={card.stamina}
				price={card.price}
				gold={card.gold === true}
			/>
		)
	})

	return (
		<section className="services">
			<div className="container">
				<div className="tab-content" id="pills-tabContent">
					{ home &&
						<>
							{/* Таб контент рассы */}
							<div className="tab-pane fade show active" id="pills-races">
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									{ renderCardItems(dataRaces) }
								</div>
							</div>

							{/* Таб контент рейдовая броня */}
							<div className="tab-pane fade show active mt-5" id="pills-raids-armour">
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									{ renderCardItems(dataRaidArmours) }
								</div>
							</div>

							{ /* Таб контент оружие */}
							<div className="tab-pane fade show active mt-5" id="pills-weapons">
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									{ renderCardItems(dataWeapons) }
								</div>
							</div>

							{/* Таб контент броня */}
							<div className="tab-pane fade show active mt-5" id="pills-armours">
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									{ renderCardItems(dataArmours) }
								</div>
							</div>

							{/* Таб контент маунты */}
							<div className="tab-pane fade fade show active mt-5" id="pills-mounts" >
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									{ renderCardItems(dataMounts) }
								</div>
							</div>

							{/* Таб контент голд */}
							<div className="tab-pane fade fade show active mt-5" id="pills-gold">
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									{ renderCardItems(dataGold) }
								</div>
							</div>

							{/* Таб контент профессии */}
							<div className="tab-pane fade fade show active mt-5" id="pills-professions">
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									{ renderCardItems(dataProfessions) }
								</div>
							</div>

							{/* Таб контент pvp */}
							<div className="tab-pane fade fade show active mt-5" id="pills-pvp">
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									{ renderCardItems(dataPvp) }
								</div>
							</div>

							{/* Таб контент эпохальные подземелья */}
							<div className="tab-pane fade show active mt-5" id="pills-dungeons">
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									{ renderCardItems(dataDungeons) }
								</div>
							</div>

							{/* Таб контент рейды */}
							<div className="tab-pane fade fade show active mt-5" id="pills-raids">
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									{ renderCardItems(dataDungeonsRaids) }
								</div>
							</div>

							{/* Таб контент прокачка персонажей */}
							<div className="tab-pane fade fade show active mt-5" id="pills-lvl-up">
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									<div className="card card-lvl-up">
										<Link to="lvl-up/lvl-up-base">
											<img src={LvlUpBaseCardImg} className="card-img card-img-lvl-up" alt="1-60 Уровень" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="lvl-up/lvl-up-base">
												<h3 className="card-title card-title-lvl-up">1-60 Уровень</h3>
											</Link>
											<p className="card-text card-text-lvl-up">Прокачка 1-60 уровень в The Last Titan. Экипировка 250 уровня. Отличный набор для начинающего искателя приключений</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-lvl-up">от 300<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="lvl-up/lvl-up-base" className="card-btn card-btn-lvl-up">Подробнее</Link>
										</div>
									</div>

									<div className="card card-lvl-up">
										<Link to="lvl-up/lvl-up-expert">
											<img src={LvlUpExpertCardImg} className="card-img card-img-lvl-up" alt="1-70 Уровень" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="lvl-up/lvl-up-expert">
												<h3 className="card-title card-title-lvl-up">1-70 Уровень</h3>
											</Link>
											<p className="card-text card-text-lvl-up">Прокачка 1-70 уровень в The Last Titan. Экипировка 500 уровня. Отличный набор для опытного искателя приключений</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-lvl-up">от 500<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="lvl-up/lvl-up-expert" className="card-btn card-btn-lvl-up">Подробнее</Link>
										</div>
									</div>

									<div className="card card-lvl-up">
										<Link to="lvl-up/lvl-up-master">
											<img src={LvlUpMasterCardImg} className="card-img card-img-lvl-up" alt="1-80 Уровень" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="lvl-up/lvl-up-master">
												<h3 className="card-title card-title-lvl-up">1-80 Уровень</h3>
											</Link>
											<p className="card-text card-text-lvl-up">Прокачка 1-80 уровень в The Last Titan. Экипировка 1000 уровня. Отличный набор для профессионального искателя приключений</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-lvl-up">от 800<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="lvl-up/lvl-up-master" className="card-btn card-btn-lvl-up">Подробнее</Link>
										</div>
									</div>
								</div>
							</div>

							{/* Таб контент достижения */}
							<div className="tab-pane fade fade show active mt-5" id="pills-achievements">
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									{ renderCardItems(dataAchievements) }
								</div>
							</div>
						</>
					}

					{ races &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ renderCardItems(dataSelectRaces) }
						</div>
					}

					{ horde &&
						<>
							<h3 className="text-success text-center fw-bold display-4">Всего Рас: {counterCardItems(dataRacesHorde)}</h3>
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataRacesHorde) }
							</div>
						</>
					}

					{ alliance &&
						<>
							<h3 className="text-success text-center fw-bold display-4">Всего Рас: {counterCardItems(dataRacesAlliance)}</h3>
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataRacesAlliance) }
							</div>
						</>
					}

					{ raidsArmoursWarrior &&
						<>
							<h3 className="text-success text-center fw-bold display-4">Всего Брони: {counterCardItems(dataWarriorRaidArmours)}</h3>
							<h3 className="text-success text-center fw-bold display-4">Готово: {counterCardItemsDone(dataWarriorRaidArmours)}</h3>
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataWarriorRaidArmours) }
							</div>
						</>
					}

					{ raidsArmoursDruid &&
						<>
							<h3 className="text-success text-center fw-bold display-4">Всего Брони: {counterCardItems(dataDruidRaidArmours)}</h3>
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataDruidRaidArmours) }
							</div>
						</>
					}

					{ raidsArmoursPriest &&
						<>
							<h3 className="text-success text-center fw-bold display-4">Всего Брони: {counterCardItems(dataPriestRaidArmours)}</h3>
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataPriestRaidArmours) }
							</div>
						</>
					}

					{ raidsArmoursMage &&
						<>
							<h3 className="text-success text-center fw-bold display-4">Всего Брони: {counterCardItems(dataMageRaidArmours)}</h3>
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataMageRaidArmours) }
							</div>
						</>
					}

					{ raidsArmoursMonk &&
						<>
							<h3 className="text-success text-center fw-bold display-4">Всего Брони: {counterCardItems(dataMonkRaidArmours)}</h3>
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataMonkRaidArmours) }
							</div>
						</>
					}

					{ raidsArmoursHunter &&
						<>
							<h3 className="text-success text-center fw-bold display-4">Всего Брони: {counterCardItems(dataHunterRaidArmours)}</h3>
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataHunterRaidArmours) }
							</div>
						</>
					}

					{ raidsArmoursDemonHunter &&
						<>
							<h3 className="text-success text-center fw-bold display-4">Всего Брони: {counterCardItems(dataDemonHunterRaidArmours)}</h3>
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataDemonHunterRaidArmours) }
							</div>
						</>
					}

					{ raidsArmoursPaladin &&
						<>
							<h3 className="text-success text-center fw-bold display-4">Всего Брони: {counterCardItems(dataPaladinRaidArmours)}</h3>
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataPaladinRaidArmours) }
							</div>
						</>
					}

					{ raidsArmoursAwakener &&
						<>
							<h3 className="text-success text-center fw-bold display-4">Всего Брони: {counterCardItems(dataAwakenerRaidArmours)}</h3>
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataAwakenerRaidArmours) }
							</div>
						</>
					}

					{ raidsArmoursRogue &&
						<>
							<h3 className="text-success text-center fw-bold display-4">Всего Брони: {counterCardItems(dataRogueRaidArmours)}</h3>
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataRogueRaidArmours) }
							</div>
						</>
					}

					{ raidsArmoursDeathKnight &&
						<>
							<h3 className="text-success text-center fw-bold display-4">Всего Брони: {counterCardItems(dataDeathKnightRaidArmours)}</h3>
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataDeathKnightRaidArmours) }
							</div>
						</>
					}

					{ raidsArmoursWarlock &&
						<>
							<h3 className="text-success text-center fw-bold display-4">Всего Брони: {counterCardItems(dataWarlockRaidArmours)}</h3>
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataWarlockRaidArmours) }
							</div>
						</>
					}

					{ raidsArmoursShaman &&
						<>
							<h3 className="text-success text-center fw-bold display-4">Всего Брони: {counterCardItems(dataShamanRaidArmours)}</h3>
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataShamanRaidArmours) }
							</div>
						</>
					}

					{ twoHandedWeapons &&
						<div className="tab-pane fade show active" id="pills-raids-armour">
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
								{ renderCardItems(dataTwoHandedWeapons) }
							</div>
						</div>
					}

					{ twoHandedAxes &&
						<div className="tab-pane fade show active" id="pills-raids-armour">
							<h3 className="text-success text-center fw-bold display-4">Всего Оружия: {counterCardItems(dataTwoHandedAxesWeaponDetails)}</h3>
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataTwoHandedAxes) }
							</div>
						</div>
					}

					{ twoHandedAxesWeaponDetails &&
						<div className="tab-pane fade show active" id="pills-raids-armour">
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
								{ renderWeaponDetails(dataTwoHandedAxesWeaponDetails) }
							</div>
						</div>
					}

					{ legendaryWeapons &&
						<>
							<h3 className="text-success text-center fw-bold display-4">Всего Легендарного Оружия: {counterCardItems(dataLegendaryWeapons)}</h3>
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataLegendaryWeapons) }
							</div>
						</>
					}

					{ legendaryWeaponDetails &&
						<div className="tab-pane fade show active" id="pills-raids-armour">
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
								{ renderWeaponDetails(dataLegendaryWeaponDetails) }
							</div>
						</div>
					}

					{ classes &&
						<div className="tab-pane fade show active" id="pills-raids-armour">
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
								{ renderCardItems(dataClasses) }
							</div>
						</div>
					}

					{ warriorArtifacts &&
						<div className="tab-pane fade show active" id="pills-raids-armour">
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
								{ renderCardItems(dataWarriorArtifacts) }
							</div>
						</div>
					}

					{ druidArtifacts &&
						<div className="tab-pane fade show active" id="pills-raids-armour">
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
								{ renderCardItems(dataDruidArtifacts) }
							</div>
						</div>
					}

					{ priestArtifacts &&
						<div className="tab-pane fade show active" id="pills-raids-armour">
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
								{ renderCardItems(dataPriestArtifacts) }
							</div>
						</div>
					}

					{ mageArtifacts &&
						<div className="tab-pane fade show active" id="pills-raids-armour">
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
								{ renderCardItems(dataMageArtifacts) }
							</div>
						</div>
					}

					{ monkArtifacts &&
						<div className="tab-pane fade show active" id="pills-raids-armour">
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
								{ renderCardItems(dataMonkArtifacts) }
							</div>
						</div>
					}

					{ hunterArtifacts &&
						<div className="tab-pane fade show active" id="pills-raids-armour">
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
								{ renderCardItems(dataHunterArtifacts) }
							</div>
						</div>
					}

					{ demonHunterArtifacts &&
						<div className="tab-pane fade show active" id="pills-raids-armour">
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
								{ renderCardItems(dataDemonHunterArtifacts) }
							</div>
						</div>
					}

					{ paladinArtifacts &&
						<div className="tab-pane fade show active" id="pills-raids-armour">
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
								{ renderCardItems(dataPaladinArtifacts) }
							</div>
						</div>
					}

					{ rogueArtifacts &&
						<div className="tab-pane fade show active" id="pills-raids-armour">
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
								{ renderCardItems(dataRogueArtifacts) }
							</div>
						</div>
					}

					{ deathKnightArtifacts &&
						<div className="tab-pane fade show active" id="pills-raids-armour">
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
								{ renderCardItems(dataDeathKnightArtifacts) }
							</div>
						</div>
					}

					{ warlockArtifacts &&
						<div className="tab-pane fade show active" id="pills-raids-armour">
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
								{ renderCardItems(dataWarlockArtifacts) }
							</div>
						</div>
					}

					{ shamanArtifacts &&
						<div className="tab-pane fade show active" id="pills-raids-armour">
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
								{ renderCardItems(dataShamanArtifacts) }
							</div>
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
						<div className="tab-pane fade show active" id="pills-raids-armour">
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
								{ renderCardItems(dataFuryWarriorArtifact) }
							</div>
						</div>
					}

					{ protectionWarrior &&
						<div className="tab-pane fade show active" id="pills-raids-armour">
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
								{ renderCardItems(dataProtectionWarriorArtifact) }
							</div>
						</div>
					}

					{ cloaks &&
						<>
							<h3 className="text-success text-center fw-bold display-4">Всего Плащей: {counterCardItems(dataCloaks)}</h3>
							<h3 className="text-success text-center fw-bold display-4">Готово: {counterCardItemsDone(dataCloaks)}</h3>
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataCloaks) }
							</div>
						</>
					}

					{ waterMounts &&
						<>
							<h3 className="text-success text-center fw-bold display-4">Всего Водных Маунтов: {counterCardItems(dataWaterMounts)}</h3>
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataWaterMounts) }
							</div>
						</>
					}

					{ flyMounts &&
						<>
							<h3 className="text-success text-center fw-bold display-4">Всего Летающих Маунтов: {counterCardItems(dataFlyMounts)}</h3>
							<h3 className="text-success text-center fw-bold display-4">Готово: {counterCardItemsDone(dataFlyMounts)}</h3>
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataFlyMounts) }
							</div>
						</>
					}

					{ additionsDungeons &&
						<>
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataAdditionsDungeons) }
							</div>
						</>
					}

					{ additionsRaids &&
						<>
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataAdditionsRaids) }
							</div>
						</>
					}

					{ dungeonsClassic &&
						<>
							<h3 className="text-success text-center fw-bold display-4">Всего Подземелий: {counterCardItems(dataClassicDungeons)}</h3>
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataClassicDungeons) }
							</div>
						</>
					}

					{ dungeonsBurningCrusade &&
						<>
							<h3 className="text-success text-center fw-bold display-4">Всего Подземелий: {counterCardItems(dataBurningCrusadeDungeons)}</h3>
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataBurningCrusadeDungeons) }
							</div>
						</>
					}

					{ dungeonsWrathOfTheLichKing &&
						<>
							<h3 className="text-success text-center fw-bold display-4">Всего Подземелий: {counterCardItems(dataWrathOfTheLichKingDungeons)}</h3>
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataWrathOfTheLichKingDungeons) }
							</div>
						</>
					}

					{ dungeonsCataclysm &&
						<>
							<h3 className="text-success text-center fw-bold display-4">Всего Подземелий: {counterCardItems(dataCataclysmDungeons)}</h3>
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataCataclysmDungeons) }
							</div>
						</>
					}

					{ dungeonsMistsOfPandaria &&
						<>
							<h3 className="text-success text-center fw-bold display-4">Всего Подземелий: {counterCardItems(dataMistsOfPandariaDungeons)}</h3>
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataMistsOfPandariaDungeons) }
							</div>
						</>
					}

					{ dungeonsWarlordsOfDraenor &&
						<>
							<h3 className="text-success text-center fw-bold display-4">Всего Подземелий: {counterCardItems(dataWarlordsOfDraenorDungeons)}</h3>
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataWarlordsOfDraenorDungeons) }
							</div>
						</>
					}

					{ dungeonsLegion &&
						<>
							<h3 className="text-success text-center fw-bold display-4">Всего Подземелий: {counterCardItems(dataLegionDungeons)}</h3>
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataLegionDungeons) }
							</div>
						</>
					}

					{ dungeonsBattleForAzeroth &&
						<>
							<h3 className="text-success text-center fw-bold display-4">Всего Подземелий: {counterCardItems(dataBattleForAzerothDungeons)}</h3>
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataBattleForAzerothDungeons) }
							</div>
						</>
					}

					{ dungeonsShadowlands &&
						<>
							<h3 className="text-success text-center fw-bold display-4">Всего Подземелий: {counterCardItems(dataShadowlandsDungeons)}</h3>
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataShadowlandsDungeons) }
							</div>
						</>
					}

					{ dungeonsDragonflight &&
						<>
							<h3 className="text-success text-center fw-bold display-4">Всего Подземелий: {counterCardItems(dataDragonflightDungeons)}</h3>
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataDragonflightDungeons) }
							</div>
						</>
					}

					{ dungeonsWarWithin &&
						<>
							<h3 className="text-success text-center fw-bold display-4">Всего Подземелий: {counterCardItems(dataWarWithinDungeons)}</h3>
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataWarWithinDungeons) }
							</div>
						</>
					}

					{ dungeonsMidnight &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ renderCardItems(dataMidnightDungeons) }
						</div>
					}

					{ dungeonsLastTitan &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ renderCardItems(dataLastTitanDungeons) }
						</div>
					}

					{ raidsClassic &&
						<>
							<h3 className="text-success text-center fw-bold display-4">Всего Рейдов: {counterCardItems(dataClassicRaids)}</h3>
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataClassicRaids) }
							</div>
						</>
					}

					{ raidsBurningCrusade &&
						<>
							<h3 className="text-success text-center fw-bold display-4">Всего Рейдов: {counterCardItems(dataBurningCrusadeRaids)}</h3>
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataBurningCrusadeRaids) }
							</div>
						</>
					}

					{ raidsWrathOfTheLichKing &&
						<>
							<h3 className="text-success text-center fw-bold display-4">Всего Рейдов: {counterCardItems(dataWrathOfTheLichKingRaids)}</h3>
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataWrathOfTheLichKingRaids) }
							</div>
						</>
					}

					{ raidsCataclysm &&
						<>
							<h3 className="text-success text-center fw-bold display-4">Всего Рейдов: {counterCardItems(dataCataclysmRaids)}</h3>
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataCataclysmRaids) }
							</div>
						</>
					}

					{ raidsMistsOfPandaria &&
						<>
							<h3 className="text-success text-center fw-bold display-4">Всего Рейдов: {counterCardItems(dataMistsOfPandariaRaids)}</h3>
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataMistsOfPandariaRaids) }
							</div>
						</>
					}

					{ raidsWarlordsOfDraenor &&
						<>
							<h3 className="text-success text-center fw-bold display-4">Всего Рейдов: {counterCardItems(dataWarlordsOfDraenorRaids)}</h3>
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataWarlordsOfDraenorRaids) }
							</div>
						</>
					}

					{ raidsLegion &&
						<>
							<h3 className="text-success text-center fw-bold display-4">Всего Рейдов: {counterCardItems(dataLegionRaids)}</h3>
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataLegionRaids) }
							</div>
						</>
					}

					{ raidsBattleForAzeroth &&
						<>
							<h3 className="text-success text-center fw-bold display-4">Всего Рейдов: {counterCardItems(dataBattleForAzerothRaids)}</h3>
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataBattleForAzerothRaids) }
							</div>
						</>
					}

					{ raidsShadowlands &&
						<>
							<h3 className="text-success text-center fw-bold display-4">Всего Рейдов: {counterCardItems(dataShadowlandsRaids)}</h3>
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataShadowlandsRaids) }
							</div>
						</>
					}

					{ raidsDragonflight &&
						<>
							<h3 className="text-success text-center fw-bold display-4">Всего Рейдов: {counterCardItems(dataDragonflightRaids)}</h3>
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataDragonflightRaids) }
							</div>
						</>
					}

					{ raidsWarWithin &&
						<>
							<h3 className="text-success text-center fw-bold display-4">Всего Рейдов: {counterCardItems(dataWarWithinRaids)}</h3>
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataWarWithinRaids) }
							</div>
						</>
					}

					{ raidsMidnight &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ renderCardItems(dataMidnightRaids) }
						</div>
					}

					{ raidsLastTitan &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ renderCardItems(dataLastTitanRaids) }
						</div>
					}

					{ wowCollectionEditions &&
						<>
							<h3 className="text-success text-center fw-bold display-4">Всего Коллекционных Изданий: {counterCardItems(dataWowCollectionEditions)}</h3>
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start mt-4">
								{ renderCardItems(dataWowCollectionEditions) }
							</div>
						</>
					}
				</div>
			</div>
		</section>
	)
}


export default Cards