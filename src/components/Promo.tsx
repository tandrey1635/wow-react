const Promo = ({ oneHandedWeapons, twoHandedWeapons, rangeWeapons, legendaryWeapons, artifactWeapons, decorativeWeapons, twoHandedAxes, ashbringer, sulfuras, thunderfury, atiesh, warglaivesOfAzzinoth, thoridal, valanyr, frostmourne, shadowmourne, tarecgosa, fangsFather, raeshalareDeathsWhisper, fyralathTheDreamrender, naszuroTheUnboundLegacy, armsWarrior, furyWarrior, protectionWarrior, shields, cloaks, tabards, alchemy, mining, engineering, leatherworking, blacksmithing, enchanting,  inscription, tailoring, skinning, herbalism, jewelcrafting, archaeology, riding, cooking, firstAid, fishing, junkyardTinkering, protoformSynthesis, honour, arena, rbg, classic, burningCrusade, wrathOfTheLichKing, cataclysm, mistsOfPandaria, warlordsOfDraenor, legion, battleForAzeroth, shadowlands, dragonflight, warWithin, midnight, lastTitan, lvlUpBase, lvlUpExpert, lvlUpMaster, quests, legacy, greatFeats, warcraftReforged, wowAnniversary, diablo, hearthstone, heroesStorm, starcraft, overwatch, wowCollectionEditions, diabloCollectionEditions }) => {

	return (
		<section className="promo">
			<div className="container-fluid">
				<div
					className={`promo__info ${
						legendaryWeapons
							? "promo__info_weapons" + ' ' +
							(ashbringer
								? "promo__info_weapons-legendary promo__info_weapons-legendary-ashbringer"
								:
							sulfuras
								? "promo__info_weapons-legendary promo__info_weapons-legendary-sulfuras"
								:
							thunderfury
								? "promo__info_weapons-legendary promo__info_weapons-legendary-thunderfury"
								:
							atiesh
								? "promo__info_weapons-legendary promo__info_weapons-legendary-atiesh"
								:
							warglaivesOfAzzinoth
								? "promo__info_weapons-legendary promo__info_weapons-legendary-warglaives-of-azzinoth"
								:
							thoridal
								? "promo__info_weapons-legendary promo__info_weapons-legendary-thoridal"
								:
							valanyr
								? "promo__info_weapons-legendary promo__info_weapons-legendary-valanyr"
								:
							frostmourne
								? "promo__info_weapons-legendary promo__info_weapons-legendary-frostmourne"
								:
							shadowmourne
								? "promo__info_weapons-legendary promo__info_weapons-legendary-shadowmourne"
								:
							tarecgosa
								? "promo__info_weapons-legendary promo__info_weapons-legendary-tarecgosa"
								:
							fangsFather
								? "promo__info_weapons-legendary promo__info_weapons-legendary-fangs-father"
								:
							raeshalareDeathsWhisper
								? "promo__info_weapons-legendary promo__info_weapons-legendary-raeshalare"
								:
							fyralathTheDreamrender
								? "promo__info_weapons-legendary promo__info_weapons-legendary-fyralath"
								:
							naszuroTheUnboundLegacy
								? "promo__info_weapons-legendary promo__info_weapons-legendary-naszuro"
								:
								"promo__info_weapons-legendary")
							:
						decorativeWeapons
							? "promo__info_weapons-decorative"
							:
						mining
							? "promo__info_mining"
							:
						blacksmithing
							? "promo__info_blacksmithing"
							:
						cooking
							? "promo__info_cooking"
							:
						fishing
							? "promo__info_fishing"
							:
						classic
							? "promo__info_classic"
							:
						burningCrusade
							? "promo__info_burning-crusade"
							:
						wrathOfTheLichKing
							? "promo__info_wrath-of-the-lich-king"
							:
						cataclysm
							? "promo__info_cataclysm"
							:
						mistsOfPandaria
							? "promo__info_mists-of-pandaria"
							:
						warlordsOfDraenor
							? "promo__info_warlords-of-draenor"
							:
						legion
							? "promo__info_legion"
							:
						battleForAzeroth
							? "promo__info_battle-for-azeroth"
							:
						shadowlands
							? "promo__info_shadowlands"
							:
						dragonflight
							? "promo__info_dragonflight"
							:
						warWithin
							? "promo__info_war-within"
							:
						midnight
							? "promo__info_midnight"
							:
						lastTitan
							? "promo__info_last-titan"
							:
						legacy
							? "promo__info_legacy"
							:
						greatFeats
							? "promo__info_great-feats"
							:
						wowAnniversary
							? "promo__info_wow-anniversary"
							:













						/* старое доработать */
						oneHandedWeapons
							? "promo__raitings_one-handed-weapons"
							:
						twoHandedWeapons || twoHandedAxes
							? "promo__raitings_two-handed-weapons"
							:
						rangeWeapons
							? "promo__raitings_range-weapons"
							:
						artifactWeapons
							? "promo__raitings_artifact-weapons"
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
						alchemy
							? "promo__raitings_alchemy"
							:
						engineering
							? "promo__raitings_engineering"
							:
						leatherworking
							? "promo__raitings_leatherworking"
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
						firstAid
							? "promo__raitings_first-aid"
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
						warcraftReforged
							? "promo__raitings_warcraft-reforged"
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
						}`
					}
				></div>
			</div>
		</section>
	);
};

export default Promo