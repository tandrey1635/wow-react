const Promo = ({ races, horde, alliance, warrior, druid, priest, mage, monk, hunter, demonHunter, paladin, awakener, rogue, deathKnight, warlock, shaman, oneHandedWeapons, twoHandedWeapons, rangeWeapons, legendaryWeapons, artifactWeapons, decorativeWeapons, twoHandedAxes, ashbringer, sulfuras, thunderfury, atiesh, warglaivesOfAzzinoth, thoridal, valanyr, frostmourne, shadowmourne, tarecgosa, fangsFather, raeshalareDeathsWhisper, fyralathTheDreamrender, naszuroTheUnboundLegacy, armsWarrior, furyWarrior, protectionWarrior, shields, cloaks, tabards, fishingRods, waterMounts, earthMounts, flyMounts, hordeGold, allianceGold, alchemy, mining, engineering, leatherworking, blacksmithing, enchanting,  inscription, tailoring, skinning, herbalism, jewelcrafting, archaeology, riding, cooking, firstAid, fishing, junkyardTinkering, protoformSynthesis, honour, arena, rbg, mythic5, mythic10, mythic15, classic, burningCrusade, wrathOfTheLichKing, cataclysm, mistsOfPandaria, warlordsOfDraenor, legion, battleForAzeroth, shadowlands, dragonflight, warWithin, midnight, lastTitan, lvlUpBase, lvlUpExpert, lvlUpMaster, quests, equipments, mounts, raidsExplorer, legacy, greatFeats, warcraftReforged, wow, diablo, hearthstone, heroesStorm, starcraft, overwatch, wowCollectionEditions, diabloCollectionEditions }) => {
	return (
		<section className="promo">
			<div className="container d-flex justify-content-between align-items-center flex-column flex-lg-row">
				<div className="promo__info">
					<div className="promo__descriptions">
						<h2 className="promo__header main__header">
							Получите предметы вашей мечты и наслаждайтесь игрой
						</h2>
						<p className="promo__text">
							На WowForAll можно купить и продать предметы или
							услуги с выгодой до 80% без посредников. Просто и
							безопасно.
						</p>
					</div>
					<div className="promo__block__btns d-flex justify-content-between mt-5 flex-column flex-lg-row">
						<button
							className="promo-btn"
							data-toggle="modal"
							data-target="#modal"
						>
							Создать Аккаунт
						</button>
						<a
							href="#how-its-work"
							className="promo-btn mt-3 mt-lg-0 promo-btn_color"
						>
							Как Это работает
						</a>
					</div>
				</div>
				<div
					className={`promo__raitings ${
						races
							? "promo__raitings_races"
							:
						horde
							? "promo__raitings_horde"
							:
						alliance
							? "promo__raitings_alliance"
							:
						warrior
							? "promo__raitings_warrior"
							:
						druid
							? "promo__raitings_druid"
							:
						priest
							? "promo__raitings_priest"
							:
						mage
							? "promo__raitings_mage"
							:
						monk
							? "promo__raitings_monk"
							:
						hunter
							? "promo__raitings_hunter"
							:
						demonHunter
							? "promo__raitings_demon-hunter"
							:
						paladin
							? "promo__raitings_paladin"
							:
						awakener
							? "promo__raitings_awakener"
							:
						rogue
							? "promo__raitings_rogue"
							:
						deathKnight
							? "promo__raitings_death-knight"
							:
						warlock
							? "promo__raitings_warlock"
							:
						shaman
							? "promo__raitings_shaman"
							:
						oneHandedWeapons
							? "promo__raitings_one-handed-weapons"
							:
						twoHandedWeapons || twoHandedAxes
							? "promo__raitings_two-handed-weapons"
							:
						rangeWeapons
							? "promo__raitings_range-weapons"
							:
						legendaryWeapons
							? "promo__raitings_legendary-weapons"
							:
						artifactWeapons
							? "promo__raitings_artifact-weapons"
							:
						decorativeWeapons
							? "promo__raitings_decorative-weapons"
							:
						ashbringer
							? "promo__raitings_ashbringer"
							:
						sulfuras
							? "promo__raitings_sulfuras"
							:
						thunderfury
							? "promo__raitings_thunderfury"
							:
						atiesh
							? "promo__raitings_atiesh"
							:
						warglaivesOfAzzinoth
							? "promo__raitings_warglaives-of-azzinoth"
							:
						thoridal
							? "promo__raitings_thoridal"
							:
						valanyr
							? "promo__raitings_valanyr"
							:
						frostmourne
							? "promo__raitings_frostmourne"
							:
						shadowmourne
							? "promo__raitings_shadowmourne"
							:
						tarecgosa
							? "promo__raitings_tarecgosa"
							:
						fangsFather
							? "promo__raitings_fangs-of-the-father"
							:
						fyralathTheDreamrender
							? "promo__raitings_fyralath-the-dreamrender"
							:
						naszuroTheUnboundLegacy
							? "promo__raitings_naszuro-the-unbound-legacy"
							:
						raeshalareDeathsWhisper
							? "promo__raitings_raeshalare-deaths-whisper"
							:
						armsWarrior
							? "promo__raitings_arms-warrior"
							:
						furyWarrior
							? "promo__raitings_fury-warrior"
							:
						protectionWarrior
							? "promo__raitings_protection-warrior"
							:
						shields
							? "promo__raitings_shields"
							:
						cloaks
							? "promo__raitings_cloaks"
							:
						tabards
							? "promo__raitings_tabards"
							:
						fishingRods
							? "promo__raitings_fishing-rods"
							:
						waterMounts
							? "promo__raitings_water-mounts"
							:
						earthMounts
							? "promo__raitings_earth-mounts"
							:
						flyMounts
							? "promo__raitings_fly-mounts"
							:
						hordeGold
							? "promo__raitings_horde-gold"
							:
						allianceGold
							? "promo__raitings_alliance-gold"
							:
						alchemy
							? "promo__raitings_alchemy"
							:
						mining
							? "promo__raitings_mining"
							:
						engineering
							? "promo__raitings_engineering"
							:
						leatherworking
							? "promo__raitings_leatherworking"
							:
						blacksmithing
							? "promo__raitings_blacksmithing"
							:
						enchanting
							? "promo__raitings_enchanting"
							:
						inscription
							? "promo__raitings_inscription"
							:
						tailoring
							? "promo__raitings_tailoring"
							:
						skinning
							? "promo__raitings_skinning"
							:
						herbalism
							? "promo__raitings_herbalism"
							:
						jewelcrafting
							? "promo__raitings_jewelcrafting"
							:
						archaeology
							? "promo__raitings_archaeology"
							:
						riding
							? "promo__raitings_riding"
							:
						cooking
							? "promo__raitings_cooking"
							:
						firstAid
							? "promo__raitings_first-aid"
							:
						fishing
							? "promo__raitings_fishing"
							:
						junkyardTinkering
							? "promo__raitings_junkyard-tinkering"
							:
						protoformSynthesis
							? "promo__raitings_protoform-synthesis"
							:
						honour
							? "promo__raitings_honour"
							:
						arena
							? "promo__raitings_arena"
							:
						rbg
							? "promo__raitings_rbg"
							:
						mythic5
							? "promo__raitings_mythic5"
							:
						mythic10
							? "promo__raitings_mythic10"
							:
						mythic15
							? "promo__raitings_mythic15"
							:
						classic
							? "promo__raitings_сlassic"
							:
						burningCrusade
							? "promo__raitings_burning-crusade"
							:
						wrathOfTheLichKing
							? "promo__raitings_wrath-of-the-lich-king"
							:
						cataclysm
							? "promo__raitings_cataclysm"
							:
						mistsOfPandaria
							? "promo__raitings_mists-of-pandaria"
							:
						warlordsOfDraenor
							? "promo__raitings_warlords-of-draenor"
							:
						legion
							? "promo__raitings_legion"
							:
						battleForAzeroth
							? "promo__raitings_battle-for-azeroth"
							:
						shadowlands
							? "promo__raitings_shadowlands"
							:
						dragonflight
							? "promo__raitings_dragonflight"
							:
						warWithin
							? "promo__raitings_war-within"
							:
						midnight
							? "promo__raitings_midnight"
							:
						lastTitan
							? "promo__raitings_last-titan"
							:
						lvlUpBase
							? "promo__raitings_lvl-up-base"
							:
						lvlUpExpert
							? "promo__raitings_lvl-up-expert"
							:
						lvlUpMaster
							? "promo__raitings_lvl-up-master"
							:
						quests
							? "promo__raitings_quests"
							:
						equipments
							? "promo__raitings_equipments"
							:
						mounts
							? "promo__raitings_mounts"
							:
						raidsExplorer
							? "promo__raitings_raids-explorer"
							:
						legacy
							? "promo__raitings_legacy"
							:
						greatFeats
							? "promo__raitings_great-feats"
							:
						warcraftReforged
							? "promo__raitings_warcraft-reforged"
							:
						wow
							? "promo__raitings_wow"
							:
						diablo
							? "promo__raitings_diablo"
							:
						hearthstone
							? "promo__raitings_hearthstone"
							:
						heroesStorm
							? "promo__raitings_heroes-storm"
							:
						starcraft
							? "promo__raitings_starcraft"
							:
						overwatch
							? "promo__raitings_overwatch"
							:
						wowCollectionEditions
							? "promo__raitings_wow-collection-editions"
							:
						diabloCollectionEditions
							? "promo__raitings_diablo-collection-editions"
							: null
						} mt-md-5`
					}
				></div>
			</div>
		</section>
	);
};

export default Promo;
