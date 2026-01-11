import { Link } from "react-router";
import Card from './Card.tsx'


import dataRaidArmours from '../json/raids-armours/raids-armours.json';
import dataWarriorRaidArmours from '../json/raids-armours/warrior/warrior.json';
import dataDruidRaidArmours from '../json/raids-armours/druid/druid.json';
import dataPriestRaidArmours from '../json/raids-armours/priest/priest.json';
import dataMageRaidArmours from '../json/raids-armours/mage/mage.json';
import dataMonkRaidArmours from '../json/raids-armours/monk/monk.json';
import dataHunterRaidArmours from '../json/raids-armours/hunter/hunter.json';
import dataPaladinRaidArmours from '../json/raids-armours/paladin/paladin.json';
import dataAwakenerRaidArmours from '../json/raids-armours/awakener/awakener.json';
import dataRogueRaidArmours from '../json/raids-armours/rogue/rogue.json';
import dataDeathKnightRaidArmours from '../json/raids-armours/death-knight/death-knight.json';
import dataWarlockRaidArmours from '../json/raids-armours/warlock/warlock.json';
import dataShamanRaidArmours from '../json/raids-armours/shaman/shaman.json';
import dataLegendaryWeapons from '../json/weapons/legendary/weapons.json';
import dataWeapons from '../json/weapons/weapons.json';


import dataClasses from '../json/weapons/artifacts/classes.json';


import dataWarriorArtifacts from '../json/weapons/artifacts/warrior.json';
import dataDruidArtifacts from '../json/weapons/artifacts/druid.json';
import dataPriestArtifacts from '../json/weapons/artifacts/priest.json';
import dataMageArtifacts from '../json/weapons/artifacts/mage.json';
import dataMonkArtifacts from '../json/weapons/artifacts/monk.json';
import dataHunterArtifacts from '../json/weapons/artifacts/hunter.json';
import dataDemonHunterArtifacts from '../json/weapons/artifacts/demon-hunter.json';
import dataPaladinArtifacts from '../json/weapons/artifacts/paladin.json';
import dataRogueArtifacts from '../json/weapons/artifacts/rogue.json';
import dataDeathKnightArtifacts from '../json/weapons/artifacts/death-knight.json';
import dataWarlockArtifacts from '../json/weapons/artifacts/warlock.json';
import dataShamanArtifacts from '../json/weapons/artifacts/shaman.json';


import dataArmsWarriorArtifact from '../json/weapons/artifacts/warrior/arms.json';
import dataFuryWarriorArtifact from '../json/weapons/artifacts/warrior/fury.json';
import dataProtectionWarriorArtifact from '../json/weapons/artifacts/warrior/protection.json';


import dataArmours from '../json/armours/armours.json';
import dataCloaks from '../json/armours/cloaks/armours.json';


import dataWaterMounts from '../json/mounts/water/water.json';
import dataFlyMounts from '../json/mounts/fly/fly.json';



import dataGold from '../json/gold/gold.json';
import dataMounts from '../json/mounts/mounts.json';
import dataProfessions from '../json/professions/professions.json';
import dataPvp from '../json/pvp/pvp.json';
import dataDungeons from '../json/dungeons/dungeons.json';
import dataRaids from '../json/raids/raids.json';


import dataBattleForAzerothRaids from '../json/raids/battle-for-azeroth/raids.json';
import dataBurningCrusadeRaids from '../json/raids/burning-crusade/raids.json';
import dataCataclysmRaids from '../json/raids/cataclysm/raids.json';
import dataClassicRaids from '../json/raids/classic/raids.json';
import dataDragonflightRaids from '../json/raids/dragonflight/raids.json';
import dataLastTitanRaids from '../json/raids/last-titan/raids.json';
import dataLegionRaids from '../json/raids/legion/raids.json';
import dataMidnightRaids from '../json/raids/midnight/raids.json';
import dataMistsOfPandariaRaids from '../json/raids/mists-of-pandaria/raids.json';
import dataShadowlandsRaids from '../json/raids/shadowlands/raids.json';
import dataWarWithinRaids from '../json/raids/war-within/raids.json';
import dataWarlordsOfDraenorRaids from '../json/raids/warlords-of-draenor/raids.json';
import dataWrathOfTheLichKingRaids from '../json/raids/wrath-of-the-lich-king/raids.json';


import dataAchievements from '../json/achievements/achievements.json';





const Cards = ({home, raidsArmoursWarrior, raidsArmoursDruid, raidsArmoursPriest, raidsArmoursMage, raidsArmoursMonk, raidsArmoursHunter, raidsArmoursPaladin, raidsArmoursAwakener, raidsArmoursRogue, raidsArmoursDeathKnight, raidsArmoursWarlock, raidsArmoursShaman, legendaryWeapons, classes, warriorArtifacts, druidArtifacts, priestArtifacts, mageArtifacts, monkArtifacts, hunterArtifacts, demonHunterArtifacts, paladinArtifacts, rogueArtifacts, deathKnightArtifacts, warlockArtifacts, shamanArtifacts, armsWarrior, furyWarrior, protectionWarrior, cloaks, waterMounts, flyMounts, classic, burningCrusade, wrathOfTheLichKing, cataclysm, mistsOfPandaria, warlordsOfDraenor, legion, battleForAzeroth, shadowlands, dragonflight, warWithin, midnight, lastTitan}) => {

	const basePathImg = '/src/assets/img'

	/* Фото прокачка персонажей гл стр */
	const LvlUpBaseCardImg = `${basePathImg}/lvl-up/bg/lvl-up-base.png`
	const LvlUpExpertCardImg = `${basePathImg}/lvl-up/bg/lvl-up-expert.png`
	const LvlUpMasterCardImg = `${basePathImg}/lvl-up/bg/lvl-up-master.png`


	const dollarImg = `${basePathImg}/gold/bg/dollar.png`
	const dollarAlt = '$'



	const renderCardItems = ( dataJson) => dataJson.map(card=> {
		return (
			<Card
				key={card.id}
				type={card.type}
				path={card.path}
				cardImg={card.cardImg}
				spanClassname={card.spanClassname}
				description={card.description}
				title={card.title}
				price={card.price}
				gold={card.gold === true}
				raids={card.raids === true}
			/>
		)
	})



	return (
		<section className="services">
			<div className="container">
				<div className="tab-content" id="pills-tabContent">
					{ home &&
						<>
							{/* Таб контент рейдовая броня */}
							<div className="tab-pane fade show active" id="pills-raids-armour">
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
									{ renderCardItems(dataRaids) }
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

					{ raidsArmoursWarrior &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ renderCardItems(dataWarriorRaidArmours) }
						</div>
					}

					{ raidsArmoursDruid &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ renderCardItems(dataDruidRaidArmours) }
						</div>
					}

					{ raidsArmoursPriest &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ renderCardItems(dataPriestRaidArmours) }
						</div>
					}

					{ raidsArmoursMage &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ renderCardItems(dataMageRaidArmours) }
						</div>
					}

					{ raidsArmoursMonk &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ renderCardItems(dataMonkRaidArmours) }
						</div>
					}

					{ raidsArmoursHunter &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ renderCardItems(dataHunterRaidArmours) }
						</div>
					}

					{ raidsArmoursPaladin &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ renderCardItems(dataPaladinRaidArmours) }
						</div>
					}

					{ raidsArmoursAwakener &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ renderCardItems(dataAwakenerRaidArmours) }
						</div>
					}

					{ raidsArmoursRogue &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ renderCardItems(dataRogueRaidArmours) }
						</div>
					}

					{ raidsArmoursDeathKnight &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ renderCardItems(dataDeathKnightRaidArmours) }
						</div>
					}

					{ raidsArmoursWarlock &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ renderCardItems(dataWarlockRaidArmours) }
						</div>
					}

					{ raidsArmoursShaman &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ renderCardItems(dataShamanRaidArmours) }
						</div>
					}

					{ legendaryWeapons &&
						<div className="tab-pane fade show active" id="pills-raids-armour">
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
								{ renderCardItems(dataLegendaryWeapons) }
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
						<div className="tab-pane fade show active" id="pills-raids-armour">
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
								{ renderCardItems(dataArmsWarriorArtifact) }
							</div>
						</div>
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
						<div className="tab-pane fade show active" id="pills-raids-armour">
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
								{ renderCardItems(dataCloaks) }
							</div>
						</div>
					}

					{ waterMounts &&
						<div className="tab-pane fade show active" id="pills-raids-armour">
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
								{ renderCardItems(dataWaterMounts) }
							</div>
						</div>
					}

					{ flyMounts &&
						<div className="tab-pane fade show active" id="pills-raids-armour">
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
								{ renderCardItems(dataFlyMounts) }
							</div>
						</div>
					}

					{ classic &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ renderCardItems(dataClassicRaids) }
						</div>
					}

					{ burningCrusade &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ renderCardItems(dataBurningCrusadeRaids) }
						</div>
					}

					{ wrathOfTheLichKing &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ renderCardItems(dataWrathOfTheLichKingRaids) }
						</div>
					}

					{ cataclysm &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ renderCardItems(dataCataclysmRaids) }
						</div>
					}

					{ mistsOfPandaria &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ renderCardItems(dataMistsOfPandariaRaids) }
						</div>
					}

					{ warlordsOfDraenor &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ renderCardItems(dataWarlordsOfDraenorRaids) }
						</div>
					}

					{ legion &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ renderCardItems(dataLegionRaids) }
						</div>
					}

					{ battleForAzeroth &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ renderCardItems(dataBattleForAzerothRaids) }
						</div>
					}

					{ shadowlands &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ renderCardItems(dataShadowlandsRaids) }
						</div>
					}

					{ dragonflight &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ renderCardItems(dataDragonflightRaids) }
						</div>
					}

					{ warWithin &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ renderCardItems(dataWarWithinRaids) }
						</div>
					}

					{ midnight &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ renderCardItems(dataMidnightRaids) }
						</div>
					}

					{ lastTitan &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ renderCardItems(dataLastTitanRaids) }
						</div>
					}
				</div>
			</div>
		</section>
	)
}


export default Cards