import { Link } from "react-router";
import dataRaidArmours from '../json/raids-armours/raids-armours.json'
import dataWeapons from '../json/weapons/weapons.json'
import dataLegendaryWeapons from '../json/weapons/legendary/weapons.json'
import dataClasses from '../json/weapons/artefacts/classes.json'
import dataArmours from '../json/armours/armours.json'
import dataCloaks from '../json/armours/cloaks/armours.json'
import dataMounts from '../json/mounts/mounts.json'
import dataGold from '../json/gold/gold.json'
import dataProfessions from '../json/professions/professions.json'
import dataPvp from '../json/pvp/pvp.json'
import dataRaids from '../json/raids/raids.json'
import dataClassicRaids from '../json/raids/classic/raids.json'
import dataBurningCrusadeRaids from '../json/raids/burning-crusade/raids.json'
import dataWrathOfTheLichKingRaids from '../json/raids/wrath-of-the-lich-king/raids.json'
import dataCataclysmRaids from '../json/raids/cataclysm/raids.json'
import dataMistsOfPandariaRaids from '../json/raids/mists-of-pandaria/raids.json'
import dataWarlordsOfDraenorRaids from '../json/raids/warlords-of-draenor/raids.json'
import dataLegionRaids from '../json/raids/legion/raids.json'
import dataBattleForAzerothRaids from '../json/raids/battle-for-azeroth/raids.json'
import dataShadowlandsRaids from '../json/raids/shadowlands/raids.json'
import dataDragonflightRaids from '../json/raids/dragonflight/raids.json'
import dataWarWithinRaids from '../json/raids/war-within/raids.json'
import dataMidnightRaids from '../json/raids/midnight/raids.json'
import dataLastTitanRaids from '../json/raids/last-titan/raids.json'




const Card = ({home, raidsArmourWarrior, legendaryWeapons, cloaks, classes, classic, burningCrusade, wrathOfTheLichKing, cataclysm, mistsOfPandaria, warlordsOfDraenor, legion, battleForAzeroth, shadowlands, dragonflight, warWithin, midnight, lastTitan}) => {

	const basePathImg = '/src/assets/img'


	/* Фото подземелья гл стр */
	const Mythic5CardImg = `${basePathImg}/dungeons/bg/mythic-5.jpg`
	const Mythic10CardImg = `${basePathImg}/dungeons/bg/mythic-10.jpg`
	const Mythic15CardImg = `${basePathImg}/dungeons/bg/mythic-15.jpg`

	/* Фото прокачка персонажей гл стр */
	const LvlUpBaseCardImg = `${basePathImg}/lvl-up/bg/lvl-up-base.png`
	const LvlUpExpertCardImg = `${basePathImg}/lvl-up/bg/lvl-up-expert.png`
	const LvlUpMasterCardImg = `${basePathImg}/lvl-up/bg/lvl-up-master.png`



	/* Фото достижения гл стр */
	const QuestsCardImg = `${basePathImg}/achievements/bg/quests.jpg`
	const EquipmentsCardImg = `${basePathImg}/achievements/bg/equipments.jpg`
	const MountsCardImg = `${basePathImg}/achievements/bg/mounts.jpg`
	const RaidsExplorerCardImg = `${basePathImg}/achievements/bg/raids-explorer.jpg`
	const LegacyCardImg = `${basePathImg}/achievements/bg/legacy.jpg`
	const GreatFeatsCardImg = `${basePathImg}/achievements/bg/great-feats.jpg`
	const WarcraftReforgedCardImg = `${basePathImg}/achievements/bg/warcraft-reforged.jpg`
	const WowCardImg = `${basePathImg}/achievements/bg/wow.jpg`
	const DiabloCardImg = `${basePathImg}/achievements/bg/diablo.jpg`
	const HearthstoneCardImg = `${basePathImg}/achievements/bg/hearthstone.jpg`
	const HeroesStormCardImg = `${basePathImg}/achievements/bg/heroes-of-the-storm.jpg`
	const StarcraftCardImg = `${basePathImg}/achievements/bg/starcraft.jpg`
	const OverwatchCardImg = `${basePathImg}/achievements/bg/overwatch.jpg`
	const WowCollectionEditionCardImg = `${basePathImg}/achievements/bg/wow-collection-editions.jpg`
	const DiabloCollectionEditionCardImg = `${basePathImg}/achievements/bg/diablo-collection-editions.jpg`


	const dollarImg = `${basePathImg}/gold/bg/dollar.png`
	const dollarAlt = '$'


	const raidsArmours = dataRaidArmours.map(card=>{
		return (
			<div key={card.id} className={`card ${card.className}`}>
				<Link to={card.path}>
					<img src={card.cardImg} className="card-img" alt={card.description} />
				</Link>
				<div className="card-body">
					<Link className="card-link" to={card.path}>
						<h3 className={`card-title ${card.titleClassName}`}>{card.title}</h3>
					</Link>
					<p className={`card-text ${card.descriptionClassName}`}>{card.description}</p>
				</div>
				<div className="card-footer d-flex justify-content-between align-items-center">
					<p className={`card-price ${card.priceClassName}`}>
						от {card.price}
						<img className="dollar" src={card.priceImg} alt={dollarAlt} />
					</p>
					<Link to={card.path} className="card-btn">{card.btn}</Link>
				</div>
			</div>
		)
	})

	const weapons = dataWeapons.map(card=>{
		return (
			<div key={card.id} className={`card ${card.className}`}>
				<Link to={card.path}>
					<img src={card.cardImg} className="card-img" alt={card.description} />
				</Link>
				<div className="card-body">
					<Link className="card-link" to={card.path}>
						<h3 className={`card-title ${card.titleClassName}`}>{card.title}</h3>
					</Link>
					<p className={`card-text ${card.descriptionClassName}`}>{card.description}</p>
				</div>
				<div className="card-footer d-flex justify-content-between align-items-center">
					<p className={`card-price ${card.priceClassName}`}>
						от {card.price}
						<img className="dollar" src={card.priceImg} alt={dollarAlt} />
					</p>
					<Link to={card.path} className="card-btn">{card.btn}</Link>
				</div>
			</div>
		)
	})

	const legendary = dataLegendaryWeapons.map(card=>{
		return (
			<div key={card.id} className={`card ${card.className}`}>
				<Link to={card.path}>
					<img src={card.cardImg} className="card-img" alt={card.description} />
				</Link>
				<div className="card-body">
					<Link className="card-link" to={card.path}>
						<h3 className={`card-title ${card.titleClassName}`}>{card.title}</h3>
					</Link>
					<p className={`card-text ${card.descriptionClassName}`}>{card.description}</p>
				</div>
				<div className="card-footer d-flex justify-content-between align-items-center">
					<p className={`card-price ${card.priceClassName}`}>
						от {card.price}
						<img className="dollar" src={card.priceImg} alt={dollarAlt} />
					</p>
					<Link to={card.path} className="card-btn">{card.btn}</Link>
				</div>
			</div>
		)
	})

	const classesArtefact = dataClasses.map(card=>{
		return (
			<div key={card.id} className={`card ${card.className}`}>
				<Link to={card.path}>
					<img src={card.cardImg} className="card-img" alt={card.description} />
				</Link>
				<div className="card-body">
					<Link className="card-link" to={card.path}>
						<h3 className={`card-title ${card.titleClassName}`}>{card.title}</h3>
					</Link>
					<p className={`card-text ${card.descriptionClassName}`}>{card.description}</p>
				</div>
				<div className="card-footer d-flex justify-content-between align-items-center">
					<p className={`card-price ${card.priceClassName}`}>
						от {card.price}
						<img className="dollar" src={card.priceImg} alt={dollarAlt} />
					</p>
					<Link to={card.path} className="card-btn">{card.btn}</Link>
				</div>
			</div>
		)
	})

	const armours = dataArmours.map(card=>{
		return (
			<div key={card.id} className={`card ${card.className}`}>
				<Link to={card.path}>
					<img src={card.cardImg} className="card-img" alt={card.description} />
				</Link>
				<div className="card-body">
					<Link className="card-link" to={card.path}>
						<h3 className={`card-title ${card.titleClassName}`}>{card.title}</h3>
					</Link>
					<p className={`card-text ${card.descriptionClassName}`}>{card.description}</p>
				</div>
				<div className="card-footer d-flex justify-content-between align-items-center">
					<p className={`card-price ${card.priceClassName}`}>
						от {card.price}
						<img className="dollar" src={card.priceImg} alt={dollarAlt} />
					</p>
					<Link to={card.path} className="card-btn">{card.btn}</Link>
				</div>
			</div>
		)
	})

	const cloaksArmours = dataCloaks.map(card=>{
		return (
			<div key={card.id} className={`card ${card.className}`}>
				<Link to={card.path}>
					<img src={card.cardImg} className="card-img" alt={card.description} />
				</Link>
				<div className="card-body">
					<Link className="card-link" to={card.path}>
						<h3 className={`card-title ${card.titleClassName}`}>{card.title}</h3>
					</Link>
					<p className={`card-text ${card.descriptionClassName}`}>{card.description}</p>
				</div>
				<div className="card-footer d-flex justify-content-between align-items-center">
					<p className={`card-price ${card.priceClassName}`}>
						от {card.price}
						<img className="dollar" src={card.priceImg} alt={dollarAlt} />
					</p>
					<Link to={card.path} className="card-btn">{card.btn}</Link>
				</div>
			</div>
		)
	})

	const mounts = dataMounts.map(card=>{
		return (
			<div key={card.id} className={`card ${card.className}`}>
				<Link to={card.path}>
					<img src={card.cardImg} className="card-img" alt={card.description} />
				</Link>
				<div className="card-body">
					<Link className="card-link" to={card.path}>
						<h3 className={`card-title ${card.titleClassName}`}>{card.title}</h3>
					</Link>
					<p className={`card-text ${card.descriptionClassName}`}>{card.description}</p>
				</div>
				<div className="card-footer d-flex justify-content-between align-items-center">
					<p className={`card-price ${card.priceClassName}`}>
						от {card.price}
						<img className="dollar" src={card.priceImg} alt={dollarAlt} />
					</p>
					<Link to={card.path} className="card-btn">{card.btn}</Link>
				</div>
			</div>
		)
	})

	const gold = dataGold.map(card=>{
		return (
			<div key={card.id} className={`card ${card.className}`}>
				<Link to={card.path}>
					<img src={card.cardImg} className="card-img" alt={card.description} />
				</Link>
				<div className="card-body">
					<Link className="card-link" to={card.path}>
						<h3 className={`card-title ${card.titleClassName}`}>{card.title}</h3>
					</Link>
					<p className={`card-text ${card.descriptionClassName}`}>{card.description}</p>
				</div>
				<div className="card-footer d-flex justify-content-between align-items-center">
					<p className={`card-price ${card.priceClassName}`}>
						от {card.price}
						<img className="dollar" src={card.priceImg} alt={dollarAlt} />
					</p>
					<Link to={card.path} className="card-btn">{card.btn}</Link>
				</div>
			</div>
		)
	})

	const professions = dataProfessions.map(card=>{
		return (
			<div key={card.id} className={`card ${card.className}`}>
				<Link to={card.path}>
					<img src={card.cardImg} className="card-img" alt={card.description} />
				</Link>
				<div className="card-body">
					<Link className="card-link" to={card.path}>
						<h3 className={`card-title ${card.titleClassName}`}>{card.title}</h3>
					</Link>
					<p className={`card-text ${card.descriptionClassName}`}>{card.description}</p>
				</div>
				<div className="card-footer d-flex justify-content-between align-items-center">
					<p className={`card-price ${card.priceClassName}`}>
						от {card.price}
						<img className="dollar" src={card.priceImg} alt={dollarAlt} />
					</p>
					<Link to={card.path} className="card-btn">{card.btn}</Link>
				</div>
			</div>
		)
	})

	const pvp = dataPvp.map(card=>{
		return (
			<div key={card.id} className={`card ${card.className}`}>
				<Link to={card.path}>
					<img src={card.cardImg} className="card-img" alt={card.description} />
				</Link>
				<div className="card-body">
					<Link className="card-link" to={card.path}>
						<h3 className={`card-title ${card.titleClassName}`}>{card.title}</h3>
					</Link>
					<p className={`card-text ${card.descriptionClassName}`}>{card.description}</p>
				</div>
				<div className="card-footer d-flex justify-content-between align-items-center">
					<p className={`card-price ${card.priceClassName}`}>
						от {card.price}
						<img className="dollar" src={card.priceImg} alt={dollarAlt} />
					</p>
					<Link to={card.path} className="card-btn">{card.btn}</Link>
				</div>
			</div>
		)
	})





	const raids = dataRaids.map(card=>{
		return (
			<div key={card.id} className={`card ${card.className}`}>
				<Link to={card.path}>
					<img src={card.cardImg} className={`card-img ${card.cardImgClassName}`}  alt={card.description} />
				</Link>
				<div className="card-body">
					<Link className="card-link" to={card.path}>
						<h3 className={`card-title ${card.titleClassName}`}>{card.title}</h3>
					</Link>
					<p className={`card-text ${card.descriptionClassName}`}>{card.description} <span className={card.spanClassname}>{card.title}</span>
					</p>
				</div>
				<div className="card-footer d-flex justify-content-between align-items-center">
					<p className={`card-price ${card.priceClassName}`}>
						от {card.price}
						<img className="dollar" src={card.priceImg} alt={dollarAlt} />
					</p>
					<Link to={card.path} className="card-btn">{card.btn}</Link>
				</div>
			</div>
		)
	})

	const classicRaids = dataClassicRaids.map(card=>{
		return (
			<div key={card.id} className={`card ${card.className}`}>
				<Link to={card.path}>
					<img src={card.cardImg} className={`card-img ${card.cardImgClassName}`}  alt={card.description} />
				</Link>
				<div className="card-body">
					<Link className="card-link" to={card.path}>
						<h3 className={`card-title ${card.titleClassName}`}>{card.title}</h3>
					</Link>
					<p className={`card-text ${card.descriptionClassName}`}>{card.description} <span className={card.spanClassname}>{card.title}</span>
					</p>
				</div>
				<div className="card-footer d-flex justify-content-between align-items-center">
					<p className={`card-price ${card.priceClassName}`}>
						от {card.price}
						<img className="dollar" src={card.priceImg} alt={dollarAlt} />
					</p>
					<Link to={card.path} className="card-btn">{card.btn}</Link>
				</div>
			</div>
		)
	})

	const burningCrusadeRaids = dataBurningCrusadeRaids.map(card=>{
		return (
			<div key={card.id} className={`card ${card.className}`}>
				<Link to={card.path}>
					<img src={card.cardImg} className={`card-img ${card.cardImgClassName}`}  alt={card.description} />
				</Link>
				<div className="card-body">
					<Link className="card-link" to={card.path}>
						<h3 className={`card-title ${card.titleClassName}`}>{card.title}</h3>
					</Link>
					<p className={`card-text ${card.descriptionClassName}`}>{card.description} <span className={card.spanClassname}>{card.title}</span>
					</p>
				</div>
				<div className="card-footer d-flex justify-content-between align-items-center">
					<p className={`card-price ${card.priceClassName}`}>
						от {card.price}
						<img className="dollar" src={card.priceImg} alt={dollarAlt} />
					</p>
					<Link to={card.path} className="card-btn">{card.btn}</Link>
				</div>
			</div>
		)
	})

	const wrathOfTheLichKingRaids = dataWrathOfTheLichKingRaids.map(card=>{
		return (
			<div key={card.id} className={`card ${card.className}`}>
				<Link to={card.path}>
					<img src={card.cardImg} className={`card-img ${card.cardImgClassName}`}  alt={card.description} />
				</Link>
				<div className="card-body">
					<Link className="card-link" to={card.path}>
						<h3 className={`card-title ${card.titleClassName}`}>{card.title}</h3>
					</Link>
					<p className={`card-text ${card.descriptionClassName}`}>{card.description} <span className={card.spanClassname}>{card.title}</span>
					</p>
				</div>
				<div className="card-footer d-flex justify-content-between align-items-center">
					<p className={`card-price ${card.priceClassName}`}>
						от {card.price}
						<img className="dollar" src={card.priceImg} alt={dollarAlt} />
					</p>
					<Link to={card.path} className="card-btn">{card.btn}</Link>
				</div>
			</div>
		)
	})

	const cataclysmRaids = dataCataclysmRaids.map(card=>{
		return (
			<div key={card.id} className={`card ${card.className}`}>
				<Link to={card.path}>
					<img src={card.cardImg} className={`card-img ${card.cardImgClassName}`}  alt={card.description} />
				</Link>
				<div className="card-body">
					<Link className="card-link" to={card.path}>
						<h3 className={`card-title ${card.titleClassName}`}>{card.title}</h3>
					</Link>
					<p className={`card-text ${card.descriptionClassName}`}>{card.description} <span className={card.spanClassname}>{card.title}</span>
					</p>
				</div>
				<div className="card-footer d-flex justify-content-between align-items-center">
					<p className={`card-price ${card.priceClassName}`}>
						от {card.price}
						<img className="dollar" src={card.priceImg} alt={dollarAlt} />
					</p>
					<Link to={card.path} className="card-btn">{card.btn}</Link>
				</div>
			</div>
		)
	})

	const mistsOfPandariaRaids = dataMistsOfPandariaRaids.map(card=>{
		return (
			<div key={card.id} className={`card ${card.className}`}>
				<Link to={card.path}>
					<img src={card.cardImg} className={`card-img ${card.cardImgClassName}`}  alt={card.description} />
				</Link>
				<div className="card-body">
					<Link className="card-link" to={card.path}>
						<h3 className={`card-title ${card.titleClassName}`}>{card.title}</h3>
					</Link>
					<p className={`card-text ${card.descriptionClassName}`}>{card.description} <span className={card.spanClassname}>{card.title}</span>
					</p>
				</div>
				<div className="card-footer d-flex justify-content-between align-items-center">
					<p className={`card-price ${card.priceClassName}`}>
						от {card.price}
						<img className="dollar" src={card.priceImg} alt={dollarAlt} />
					</p>
					<Link to={card.path} className="card-btn">{card.btn}</Link>
				</div>
			</div>
		)
	})

	const warlordsOfDraenorRaids = dataWarlordsOfDraenorRaids.map(card=>{
		return (
			<div key={card.id} className={`card ${card.className}`}>
				<Link to={card.path}>
					<img src={card.cardImg} className={`card-img ${card.cardImgClassName}`}  alt={card.description} />
				</Link>
				<div className="card-body">
					<Link className="card-link" to={card.path}>
						<h3 className={`card-title ${card.titleClassName}`}>{card.title}</h3>
					</Link>
					<p className={`card-text ${card.descriptionClassName}`}>{card.description} <span className={card.spanClassname}>{card.title}</span>
					</p>
				</div>
				<div className="card-footer d-flex justify-content-between align-items-center">
					<p className={`card-price ${card.priceClassName}`}>
						от {card.price}
						<img className="dollar" src={card.priceImg} alt={dollarAlt} />
					</p>
					<Link to={card.path} className="card-btn">{card.btn}</Link>
				</div>
			</div>
		)
	})

	const legionRaids = dataLegionRaids.map(card=>{
		return (
			<div key={card.id} className={`card ${card.className}`}>
				<Link to={card.path}>
					<img src={card.cardImg} className={`card-img ${card.cardImgClassName}`}  alt={card.description} />
				</Link>
				<div className="card-body">
					<Link className="card-link" to={card.path}>
						<h3 className={`card-title ${card.titleClassName}`}>{card.title}</h3>
					</Link>
					<p className={`card-text ${card.descriptionClassName}`}>{card.description} <span className={card.spanClassname}>{card.title}</span>
					</p>
				</div>
				<div className="card-footer d-flex justify-content-between align-items-center">
					<p className={`card-price ${card.priceClassName}`}>
						от {card.price}
						<img className="dollar" src={card.priceImg} alt={dollarAlt} />
					</p>
					<Link to={card.path} className="card-btn">{card.btn}</Link>
				</div>
			</div>
		)
	})

	const battleForAzerothRaids = dataBattleForAzerothRaids.map(card=>{
		return (
			<div key={card.id} className={`card ${card.className}`}>
				<Link to={card.path}>
					<img src={card.cardImg} className={`card-img ${card.cardImgClassName}`}  alt={card.description} />
				</Link>
				<div className="card-body">
					<Link className="card-link" to={card.path}>
						<h3 className={`card-title ${card.titleClassName}`}>{card.title}</h3>
					</Link>
					<p className={`card-text ${card.descriptionClassName}`}>{card.description} <span className={card.spanClassname}>{card.title}</span>
					</p>
				</div>
				<div className="card-footer d-flex justify-content-between align-items-center">
					<p className={`card-price ${card.priceClassName}`}>
						от {card.price}
						<img className="dollar" src={card.priceImg} alt={dollarAlt} />
					</p>
					<Link to={card.path} className="card-btn">{card.btn}</Link>
				</div>
			</div>
		)
	})

	const shadowlandsRaids = dataShadowlandsRaids.map(card=>{
		return (
			<div key={card.id} className={`card ${card.className}`}>
				<Link to={card.path}>
					<img src={card.cardImg} className={`card-img ${card.cardImgClassName}`}  alt={card.description} />
				</Link>
				<div className="card-body">
					<Link className="card-link" to={card.path}>
						<h3 className={`card-title ${card.titleClassName}`}>{card.title}</h3>
					</Link>
					<p className={`card-text ${card.descriptionClassName}`}>{card.description} <span className={card.spanClassname}>{card.title}</span>
					</p>
				</div>
				<div className="card-footer d-flex justify-content-between align-items-center">
					<p className={`card-price ${card.priceClassName}`}>
						от {card.price}
						<img className="dollar" src={card.priceImg} alt={dollarAlt} />
					</p>
					<Link to={card.path} className="card-btn">{card.btn}</Link>
				</div>
			</div>
		)
	})

	const dragonflightRaids = dataDragonflightRaids.map(card=>{
		return (
			<div key={card.id} className={`card ${card.className}`}>
				<Link to={card.path}>
					<img src={card.cardImg} className={`card-img ${card.cardImgClassName}`}  alt={card.description} />
				</Link>
				<div className="card-body">
					<Link className="card-link" to={card.path}>
						<h3 className={`card-title ${card.titleClassName}`}>{card.title}</h3>
					</Link>
					<p className={`card-text ${card.descriptionClassName}`}>{card.description} <span className={card.spanClassname}>{card.title}</span>
					</p>
				</div>
				<div className="card-footer d-flex justify-content-between align-items-center">
					<p className={`card-price ${card.priceClassName}`}>
						от {card.price}
						<img className="dollar" src={card.priceImg} alt={dollarAlt} />
					</p>
					<Link to={card.path} className="card-btn">{card.btn}</Link>
				</div>
			</div>
		)
	})

	const warWithinRaids = dataWarWithinRaids.map(card=>{
		return (
			<div key={card.id} className={`card ${card.className}`}>
				<Link to={card.path}>
					<img src={card.cardImg} className={`card-img ${card.cardImgClassName}`}  alt={card.description} />
				</Link>
				<div className="card-body">
					<Link className="card-link" to={card.path}>
						<h3 className={`card-title ${card.titleClassName}`}>{card.title}</h3>
					</Link>
					<p className={`card-text ${card.descriptionClassName}`}>{card.description} <span className={card.spanClassname}>{card.title}</span>
					</p>
				</div>
				<div className="card-footer d-flex justify-content-between align-items-center">
					<p className={`card-price ${card.priceClassName}`}>
						от {card.price}
						<img className="dollar" src={card.priceImg} alt={dollarAlt} />
					</p>
					<Link to={card.path} className="card-btn">{card.btn}</Link>
				</div>
			</div>
		)
	})

	const midnightRaids = dataMidnightRaids.map(card=>{
		return (
			<div key={card.id} className={`card ${card.className}`}>
				<Link to={card.path}>
					<img src={card.cardImg} className={`card-img ${card.cardImgClassName}`}  alt={card.description} />
				</Link>
				<div className="card-body">
					<Link className="card-link" to={card.path}>
						<h3 className={`card-title ${card.titleClassName}`}>{card.title}</h3>
					</Link>
					<p className={`card-text ${card.descriptionClassName}`}>{card.description} <span className={card.spanClassname}>{card.title}</span>
					</p>
				</div>
				<div className="card-footer d-flex justify-content-between align-items-center">
					<p className={`card-price ${card.priceClassName}`}>
						от {card.price}
						<img className="dollar" src={card.priceImg} alt={dollarAlt} />
					</p>
					<Link to={card.path} className="card-btn">{card.btn}</Link>
				</div>
			</div>
		)
	})

	const lastTitanRaids = dataLastTitanRaids.map(card=>{
		return (
			<div key={card.id} className={`card ${card.className}`}>
				<Link to={card.path}>
					<img src={card.cardImg} className={`card-img ${card.cardImgClassName}`}  alt={card.description} />
				</Link>
				<div className="card-body">
					<Link className="card-link" to={card.path}>
						<h3 className={`card-title ${card.titleClassName}`}>{card.title}</h3>
					</Link>
					<p className={`card-text ${card.descriptionClassName}`}>{card.description} <span className={card.spanClassname}>{card.title}</span>
					</p>
				</div>
				<div className="card-footer d-flex justify-content-between align-items-center">
					<p className={`card-price ${card.priceClassName}`}>
						от {card.price}
						<img className="dollar" src={card.priceImg} alt={dollarAlt} />
					</p>
					<Link to={card.path} className="card-btn">{card.btn}</Link>
				</div>
			</div>
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
									{ raidsArmours }
								</div>
							</div>

							{ /* Таб контент оружие */}
							<div className="tab-pane fade show active mt-5" id="pills-weapons">
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									{ weapons }
								</div>
							</div>

							{/* Таб контент броня */}
							<div className="tab-pane fade show active mt-5" id="pills-armours">
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									{ armours }
								</div>
							</div>

							{/* Таб контент маунты */}
							<div className="tab-pane fade fade show active mt-5" id="pills-mounts" >
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									{ mounts }
								</div>
							</div>

							{/* Таб контент голд */}
							<div className="tab-pane fade fade show active mt-5" id="pills-gold">
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									{ gold }
								</div>
							</div>

							{/* Таб контент профессии */}
							<div className="tab-pane fade fade show active mt-5" id="pills-professions">
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									{ professions }
								</div>
							</div>

							{/* Таб контент pvp */}
							<div className="tab-pane fade fade show active mt-5" id="pills-pvp">
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									{ pvp }
								</div>
							</div>

							{/* Таб контент эпохальные подземелья */}
							<div className="tab-pane fade show active mt-5" id="pills-dungeons">
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									<div className="card card-mythic card-mythic-5">
										<Link to="dungeons/mythic5">
											<img src={Mythic5CardImg} className="card-img card-img-mythic" alt="Эпохальные Подземелья М+5" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="dungeons/mythic5">
												<h3 className="card-title card-title-mythic card-title-mythic-10">Эпохальные Подземелья М+5</h3>
											</Link>
											<p className="card-text card-text-mythic card-text-mythic-10">Любые Эпохальные Подземелья Мythic+5 в таймер</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-mythic price-mythic-10">от 300<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="dungeons/mythic5" className="card-btn card-btn-mythic card-btn-mythic-10">Подробнее</Link>
										</div>
									</div>

									<div className="card card-mythic card-mythic-10">
										<Link to="dungeons/mythic10">
											<img src={Mythic10CardImg} className="card-img card-img-mythic" alt="Эпохальные Подземелья М+10" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="dungeons/mythic10">
												<h3 className="card-title card-title-mythic card-title-mythic-10">Эпохальные Подземелья М+10</h3>
											</Link>
											<p className="card-text card-text-mythic card-text-mythic-10">Любые Эпохальные Подземелья Мythic+10 в таймер</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-mythic price-mythic-10">от 500<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="dungeons/mythic10" className="card-btn card-btn-mythic card-btn-mythic-10">Подробнее</Link>
										</div>
									</div>

									<div className="card card-mythic card-mythic-15">
										<Link to="dungeons/mythic15">
											<img src={Mythic15CardImg} className="card-img card-img-mythic" alt="Эпохальные Подземелья М+15" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="dungeons/mythic15">
												<h3 className="card-title card-title-mythic card-title-mythic-15">Эпохальные Подземелья М+15</h3>
											</Link>
											<p className="card-text card-text-mythic card-text-mythic-15">Любые Эпохальные Подземелья Мythic+15 в таймер</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-mythic price-mythic-15">от 1000<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="dungeons/mythic15" className="card-btn card-btn-mythic card-btn-mythic-15">Подробнее</Link>
										</div>
									</div>
								</div>
							</div>

							{/* Таб контент рейды */}
							<div className="tab-pane fade fade show active mt-5" id="pills-raids">
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									{ raids }
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
									<div className="card card-achievements card-achievements-quests">
										<Link to="achievements/quests">
											<img src={QuestsCardImg} className="card-img card-img-achievements" alt="Задания" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="achievements/quests">
												<h3 className="card-title card-title-achievements card-title-achievements-quests">Задания</h3>
											</Link>
											<p className="card-text card-text-achievements card-text-achievements-quest">Закажите выполнение всех заданий</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-achievements card-price-achievements-quests">от 1000<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="achievements/quests" className="card-btn card-btn-achievements card-btn-achievements-quests">Подробнее</Link>
										</div>
									</div>

									<div className="card card-achievements card-achievements-max-equipments">
										<Link to="achievements/equipments">
											<img src={EquipmentsCardImg} className="card-img card-img-achievements" alt="Экипировка 1000 уровня" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="achievements/equipments">
												<h3 className="card-title card-title-achievements card-title-achievements-max-equipments">Экипировка 1000 уровня</h3>
											</Link>
											<p className="card-text card-text-achievements card-text-achievements-max-equipments">Закажите выполнение достижения на сбор экипировки 1000 уровня</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-achievements card-price-achievements-max-equipments">от 1000<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="achievements/equipments" className="card-btn card-btn-achievements card-btn-achievements-max-equipments">Подробнее</Link>
										</div>
									</div>

									<div className="card card-achievements card-achievements-max-mounts">
										<Link to="achievements/mounts">
											<img src={MountsCardImg} className="card-img card-img-achievements" alt="1000 маунтов" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="achievements/mounts">
												<h3 className="card-title card-title-achievements card-title-achievements-max-mounts">1000 маунтов</h3>
											</Link>
											<p className="card-text card-text-achievements card-text-achievements-max-mounts">Закажите сбор 1000 средств передвижений</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-achievements card-price-achievements-max-mounts">от 1000<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="achievements/mounts" className="card-btn card-btn-achievements card-btn-achievements-max-mounts">Подробнее</Link>
										</div>
									</div>

									<div className="card card-achievements card-achievements-raids-explorer">
										<Link to="achievements/raids-explorer">
											<img src={RaidsExplorerCardImg} className="card-img card-img-achievements" alt="Исследователь рейдов" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="achievements/raids-explorer">
												<h3 className="card-title card-title-achievements card-title-achievements-raids-explorer">Исследователь рейдов</h3>
											</Link>
											<p className="card-text card-text-achievements card-text-achievements-raids-explorer">Закажите прохождение всех рейдов и любой рейдовой экипировки</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-achievements card-price-achievements-raids-explorer">от 1000<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="achievements/raids-explorer" className="card-btn card-btn-achievements card-btn-achievements-raids-explorer">Подробнее</Link>
										</div>
									</div>

									<div className="card card-achievements card-achievements-legacy">
										<Link to="achievements/legacy">
											<img src={LegacyCardImg} className="card-img card-img-achievements" alt="Наследие" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="achievements/legacy">
												<h3 className="card-title card-title-achievements card-title-achievements-legacy">Наследие</h3>
											</Link>
											<p className="card-text card-text-achievements card-text-achievements-legacy">Добавить описание</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-achievements card-price-achievements-legacy">от 1000<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="achievements/legacy" className="card-btn card-btn-achievements card-btn-achievements-legacy">Подробнее</Link>
										</div>
									</div>

									<div className="card card-achievements card-achievements-great-feats">
										<Link to="achievements/great-feats">
											<img src={GreatFeatsCardImg} className="card-img card-img-achievements" alt="Великие подвиги" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="achievements/great-feats">
												<h3 className="card-title card-title-achievements card-title-achievements-great-feats">Великие подвиги</h3>
											</Link>
											<p className="card-text card-text-achievements card-text-achievements-great-feats">Закажите выполнение любых великих подвигов</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-achievements card-price-achievements-great-feats">от 1000<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="achievements/great-feats" className="card-btn card-btn-achievements card-btn-achievements-great-feats">Подробнее</Link>
										</div>
									</div>

									<div className="card card-achievements card-achievements-warcraft-reforged">
										<Link to="achievements/warcraft-reforged">
											<img src={WarcraftReforgedCardImg} className="card-img card-img-achievements" alt="Годовщина Warcraft Reforged" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="achievements/warcraft-reforged">
												<h3 className="card-title card-title-achievements card-title-achievements-warcraft-reforged">Годовщина Warcraft 3 Reforged</h3>
											</Link>
											<p className="card-text card-text-achievements card-text-achievements-warcraft-reforged">Определите судьбу мира Warcraft</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-achievements card-price-achievements-warcraft-reforged">от 1000<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="achievements/warcraft-reforged" className="card-btn card-btn-achievements card-btn-achievements-warcraft-reforged">Подробнее</Link>
										</div>
									</div>

									<div className="card card-achievements card-achievements-wow">
										<Link to="achievements/wow">
											<img src={WowCardImg} className="card-img card-img-achievements" alt="Годовщина World of Warcraft" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="achievements/wow">
												<h3 className="card-title card-title-achievements card-title-achievements-wow">Годовщина World of Warcraft</h3>
											</Link>
											<p className="card-text card-text-achievements card-text-achievements-wow">Добавить описание</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-achievements card-price-achievements-wow">от 1000<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="achievements/wow" className="card-btn card-btn-achievements card-btn-achievements-wow">Подробнее</Link>
										</div>
									</div>

									<div className="card card-achievements card-achievements-diablo">
										<Link to="achievements/diablo">
											<img src={DiabloCardImg} className="card-img card-img-achievements" alt="Годовщина Diablo" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="achievements/diablo">
												<h3 className="card-title card-title-achievements card-title-achievements-diablo">Годовщина Diablo</h3>
											</Link>
											<p className="card-text card-text-achievements card-text-achievements-diablo">Нет никакого коровьего уровня</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-achievements card-price-achievements-diablo">от 1000<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="achievements/diablo" className="card-btn card-btn-achievements card-btn-achievements-diablo">Подробнее</Link>
										</div>
									</div>

									<div className="card card-achievements card-achievements-hearthstone">
										<Link to="achievements/hearthstone">
											<img src={HearthstoneCardImg} className="card-img card-img-achievements" alt="Годовщина Hearthstone" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="achievements/hearthstone">
												<h3 className="card-title card-title-achievements card-title-achievements-hearthstone">Годовщина Hearthstone</h3>
											</Link>
											<p className="card-text card-text-achievements card-text-achievements-hearthstone">Hearthstone: Heroes of Warcraft</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-achievements card-price-achievements-hearthstone">от 1000<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="achievements/hearthstone" className="card-btn card-btn-achievements card-btn-achievements-hearthstone">Подробнее</Link>
										</div>
									</div>

									<div className="card card-achievements card-achievements-heroes-of-the-storm">
										<Link to="achievements/heroes-storm">
											<img src={HeroesStormCardImg} className="card-img card-img-achievements" alt="Годовщина Heroes of the Storm" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="achievements/heroes-storm">
												<h3 className="card-title card-title-achievements card-title-achievements-heroes-of-the-storm">Годовщина Heroes of the Storm</h3>
											</Link>
											<p className="card-text card-text-achievements card-text-achievements-heroes-of-the-storm">Heroes of the Storm: MOBA по-новому</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-achievements card-price-achievements-heroes-of-the-storm">от 1000<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="achievements/heroes-storm" className="card-btn card-btn-achievements card-btn-achievements-heroes-of-the-storm">Подробнее</Link>
										</div>
									</div>

									<div className="card card-achievements card-achievements-starcraft">
										<Link to="achievements/starcraft">
											<img src={StarcraftCardImg} className="card-img card-img-achievements" alt="Годовщина StarCraft" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="achievements/starcraft">
												<h3 className="card-title card-title-achievements card-title-achievements-starcraft">Годовщина StarCraft</h3>
											</Link>
											<p className="card-text card-text-achievements card-text-achievements-starcraft">Да здравствует StarCraft</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-achievements card-price-achievements-starcraft">от 1000<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="achievements/starcraft" className="card-btn card-btn-achievements card-btn-achievements-starcraft">Подробнее</Link>
										</div>
									</div>

									<div className="card card-achievements card-achievements-overwatch">
										<Link to="achievements/overwatch">
											<img src={OverwatchCardImg} className="card-img card-img-achievements" alt="Годовщина Overwatch" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="achievements/overwatch">
												<h3 className="card-title card-title-achievements card-title-achievements-overwatch">Годовщина Overwatch</h3>
											</Link>
											<p className="card-text card-text-achievements card-text-achievements-overwatch">Будущее за которе стоит бороться</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-achievements card-price-achievements-overwatch">от 1000<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="achievements/overwatch" className="card-btn card-btn-achievements card-btn-achievements-overwatch">Подробнее</Link>
										</div>
									</div>

									<div className="card card-achievements card-achievements-wow-collection-edition">
										<Link to="achievements/wow-collection-editions">
											<img src={WowCollectionEditionCardImg} className="card-img card-img-achievements" alt="Годовщина World of Warcraft" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="achievements/wow-collection-editions">
												<h3 className="card-title card-title-achievements card-title-achievements-wow-collection-edition">Коллекционные издания World of Warcraft</h3>
											</Link>
											<p className="card-text card-text-achievements card-text-achievements-wow-collection-edition">Добавить описание</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-achievements card-price-achievements-wow-collection-edition">от 1000<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="achievements/wow-collection-editions" className="card-btn card-btn-achievements card-btn-achievements-wow-collection-edition">Подробнее</Link>
										</div>
									</div>

									<div className="card card-achievements card-achievements-diablo-collection-edition">
										<Link to="achievements/diablo-collection-editions">
											<img src={DiabloCollectionEditionCardImg} className="card-img card-img-achievements" alt="Годовщина Diablo" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="achievements/diablo-collection-editions">
												<h3 className="card-title card-title-achievements card-title-achievements-diablo-collection-edition">Коллекционные издания Diablo</h3>
											</Link>
											<p className="card-text card-text-achievements card-text-achievements-diablo-collection-edition">Добавить описание</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-achievements card-price-achievements-diablo-collection-edition">от 1000<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="achievements/diablo-collection-editions" className="card-btn card-btn-achievements card-btn-achievements-diablo-collection-edition">Подробнее</Link>
										</div>
									</div>
								</div>
							</div>
						</>
					}

					{ legendaryWeapons &&
						<div className="tab-pane fade show active" id="pills-raids-armour">
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
								{ legendary }
							</div>
						</div>
					}

					{ classes &&
						<div className="tab-pane fade show active" id="pills-raids-armour">
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
								{ classesArtefact }
							</div>
						</div>
					}

					{ cloaks &&
						<div className="tab-pane fade show active" id="pills-raids-armour">
							<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
								{ cloaksArmours }
							</div>
						</div>
					}

					{ raidsArmourWarrior &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{/* Таб контент Огненные Недра */}
							<div className="card card-tiers card-warrior">
								<a href="../buy/raids-armours/molten-core.html">
									<img src="../../img/services/bg/armour/warrior/Battlegear-of-Might.png" className="card-img card-img-tiers" alt="Броня Мощи" />
								</a>
								<div className="card-body">
									<a className="card-link" href="../buy/raids-armours/molten-core.html">
										<h3 className="card-title card-title-tiers">Броня Мощи</h3>
									</a>
									<p className="card-text card-text-tiers">Первый комплект брони для воина из рейда 60-го уровня Огненные Недра дополнения classNameic. Повелитель Огня будет повержен! Очищение огнем пройдено!</p>
								</div>
								<div className="card-footer d-flex justify-content-between align-items-center">
									<p className="card-price card-price-tiers">от 100<img className="dollar" src={dollarImg} alt="dollar" /></p>
									<a href="../buy/raids-armours/molten-core.html" className="card-btn card-btn-tiers">Подробнее</a>
								</div>
							</div>

							{/* Таб контент Логово Крыла Тьмы */}
							<div className="card card-tiers card-warrior">
								<a href="../buy/raids-armours/blackwing-lair.html">
									<img src="../../img/services/bg/armour/warrior/Battlegear-of-Wrath.png" className="card-img card-img-tiers" alt="Броня Гнева" />
								</a>
								<div className="card-body">
									<a className="card-link" href="../buy/raids-armours/blackwing-lair.html">
										<h3 className="card-title card-title-tiers">Броня Гнева</h3>
									</a>
									<p className="card-text card-text-tiers">Второй комплект брони для воина из рейда 60-го уровня Логово Крыла Тьмы дополнения classNameic. Лорд Черной Горы будет повержен! Теперь у вас невероятная сила!</p>
								</div>
								<div className="card-footer d-flex justify-content-between align-items-center">
									<p className="card-price card-price-tiers">от 100<img className="dollar" src={dollarImg} alt="dollar" /></p>
									<a href="../buy/raids-armours/blackwing-lair.html" className="card-btn card-btn-tiers">Подробнее</a>
								</div>
							</div>

							{/* Таб контент Храм Анкиража */}
							<div className="card card-tiers card-warrior">
								<a href="../buy/raids-armours/temple-of-ahnqiraj.html">
									<img src="../../img/services/bg/armour/warrior/Conquerors-Battlegear.png" className="card-img card-img-tiers" alt="Броня Завоевателя" />
								</a>
								<div className="card-body">
									<a className="card-link" href="../buy/raids-armours/temple-of-ahnqiraj.html">
										<h3 className="card-title card-title-tiers">Броня Завоевателя</h3>
									</a>
									<p className="card-text card-text-tiers">Комплект брони для воина 2.5 из рейда 60-го уровня Храм Ан'Киража дополнения classNameic. Владыка Ан'Киража будет повержен! Вы еще не мертвы!</p>
								</div>
								<div className="card-footer d-flex justify-content-between align-items-center">
									<p className="card-price card-price-tiers">от 100<img className="dollar" src={dollarImg} alt="dollar" /></p>
									<a href="../buy/raids-armours/temple-of-ahnqiraj.html" className="card-btn card-btn-tiers">Подробнее</a>
								</div>
							</div>
						</div>
					}

					{ classic &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ classicRaids }
						</div>
					}

					{ burningCrusade &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ burningCrusadeRaids }
						</div>
					}

					{ wrathOfTheLichKing &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ wrathOfTheLichKingRaids }
						</div>
					}

					{ cataclysm &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ cataclysmRaids }
						</div>
					}

					{ mistsOfPandaria &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ mistsOfPandariaRaids }
						</div>
					}

					{ warlordsOfDraenor &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ warlordsOfDraenorRaids }
						</div>
					}

					{ legion &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ legionRaids }
						</div>
					}

					{ battleForAzeroth &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ battleForAzerothRaids }
						</div>
					}

					{ shadowlands &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ shadowlandsRaids }
						</div>
					}

					{ dragonflight &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ dragonflightRaids }
						</div>
					}

					{ warWithin &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ warWithinRaids }
						</div>
					}

					{ midnight &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ midnightRaids }
						</div>
					}

					{ lastTitan &&
						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{ lastTitanRaids }
						</div>
					}
				</div>
			</div>
		</section>
	)
}


export default Card