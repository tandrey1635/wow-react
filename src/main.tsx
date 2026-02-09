import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.sass'
import { BrowserRouter, Routes, Route } from "react-router";

import Races  from "./pages/races/Races.tsx";
import Horde  from "./pages/races/horde/Horde.tsx";
import Alliance  from "./pages/races/alliance/Alliance.tsx";


import Warrior  from "./pages/raids-armours/Warrior.tsx";
import Druid  from "./pages/raids-armours/Druid.tsx";
import Priest  from "./pages/raids-armours/Priest.tsx";
import Mage  from "./pages/raids-armours/Mage.tsx";
import Monk  from "./pages/raids-armours/Monk.tsx";
import Hunter  from "./pages/raids-armours/Hunter.tsx";
import DemonHunter  from "./pages/raids-armours/DemonHunter.tsx";
import Paladin  from "./pages/raids-armours/Paladin.tsx";
import Awakener  from "./pages/raids-armours/Awakener.tsx";
import Rogue  from "./pages/raids-armours/Rogue.tsx";
import DeathKnight  from "./pages/raids-armours/DeathKnight.tsx";
import Warlock  from "./pages/raids-armours/Warlock.tsx";
import Shaman  from "./pages/raids-armours/Shaman.tsx";



import OneHandedWeapons  from "./pages/weapons/OneHanded.tsx";
import TwoHandedWeapons  from "./pages/weapons/TwoHanded.tsx";
import RangeWeapons  from "./pages/weapons/Range.tsx";
import LegendaryWeapons  from "./pages/weapons/Legendary.tsx";
import ArtifactWeapons  from "./pages/weapons/Artifact.tsx";
import DecorativeWeapons  from "./pages/weapons/Decorative.tsx";


import TwoHandedAxes  from "./pages/weapons/two-handed/axes/Axes.tsx";
import TwoHandedAxesDetails  from "./pages/weapons/two-handed/axes/AxesDetails.tsx";


import Ashbringer  from "./pages/weapons/legendary/weapons-details/Ashbringer.tsx";
import Sulfuras  from "./pages/weapons/legendary/weapons-details/Sulfuras.tsx";
import Thunderfury  from "./pages/weapons/legendary/weapons-details/Thunderfury.tsx";
import Atiesh  from "./pages/weapons/legendary/weapons-details/Atiesh.tsx";
import WarglaivesOfAzzinoth  from "./pages/weapons/legendary/weapons-details/WarglaivesOfAzzinoth.tsx";
import Thoridal  from "./pages/weapons/legendary/weapons-details/Thoridal.tsx";
import Valanyr  from "./pages/weapons/legendary/weapons-details/Valanyr.tsx";
import Shadowmourne  from "./pages/weapons/legendary/weapons-details/Shadowmourne.tsx";
import Frostmourne  from "./pages/weapons/legendary/weapons-details/Frostmourne.tsx";
import Tarecgosa  from "./pages/weapons/legendary/weapons-details/Tarecgosa.tsx";
import FangsFather  from "./pages/weapons/legendary/weapons-details/FangsFather.tsx";
import RaeshalareDeathsWhisper  from "./pages/weapons/legendary/weapons-details/RaeshalareDeathsWhisper.tsx";
import FyralathTheDreamrender  from "./pages/weapons/legendary/weapons-details/FyralathTheDreamrender.tsx";
import NaszuroTheUnboundLegacy  from "./pages/weapons/legendary/weapons-details/NaszuroTheUnboundLegacy.tsx";



import WeaponsDetails  from "./pages/weapons/legendary/weapons-details/WeaponsDetails.tsx";



import WarriorArtifacts  from "./pages/weapons/artifact/Warrior.tsx";
import DruidArtifacts  from "./pages/weapons/artifact/Druid.tsx";
import PriestArtifacts  from "./pages/weapons/artifact/Priest.tsx";
import MageArtifacts  from "./pages/weapons/artifact/Mage.tsx";
import MonkArtifacts  from "./pages/weapons/artifact/Monk.tsx";
import HunterArtifacts  from "./pages/weapons/artifact/Hunter.tsx";
import DemonHunterArtifacts  from "./pages/weapons/artifact/DemonHunter.tsx";
import PaladinArtifacts  from "./pages/weapons/artifact/Paladin.tsx";
import RogueArtifacts  from "./pages/weapons/artifact/Rogue.tsx";
import DeathKnightArtifacts  from "./pages/weapons/artifact/DeathKnight.tsx";
import WarlockArtifacts  from "./pages/weapons/artifact/Warlock.tsx";
import ShamanArtifacts  from "./pages/weapons/artifact/Shaman.tsx";



import Arms  from "./pages/weapons/artifact/warrior/Arms.tsx";
import Fury  from "./pages/weapons/artifact/warrior/Fury.tsx";
import Protection  from "./pages/weapons/artifact/warrior/Protection.tsx";


import Cloaks  from "./pages/armours/Cloaks.tsx";
import Shields  from "./pages/armours/Shields.tsx";
import Tabards  from "./pages/armours/Tabards.tsx";
import FishingRods  from "./pages/armours/FishingRods.tsx";



import WaterMounts  from "./pages/mounts/Water.tsx";
import EarthMounts  from "./pages/mounts/Earth.tsx";
import FlyMounts  from "./pages/mounts/Fly.tsx";



import HordeGold  from "./pages/gold/Horde.tsx";
import AllianceGold  from "./pages/gold/Alliance.tsx";



import Alchemy  from "./pages/professions/Alchemy.tsx";
import Mining  from "./pages/professions/Mining.tsx";
import Engineering  from "./pages/professions/Engineering.tsx";
import Leatherworking  from "./pages/professions/Leatherworking.tsx";
import Blacksmithing  from "./pages/professions/Blacksmithing.tsx";
import Enchanting  from "./pages/professions/Enchanting.tsx";
import Inscription  from "./pages/professions/Inscription.tsx";
import Tailoring  from "./pages/professions/Tailoring.tsx";
import Skinning  from "./pages/professions/Skinning.tsx";
import Herbalism  from "./pages/professions/Herbalism.tsx";
import Jewelcrafting  from "./pages/professions/Jewelcrafting.tsx";
import Archaeology  from "./pages/professions/Archaeology.tsx";
import Riding  from "./pages/professions/Riding.tsx";
import Cooking  from "./pages/professions/Cooking.tsx";
import FirstAid  from "./pages/professions/FirstAid.tsx";
import Fishing  from "./pages/professions/Fishing.tsx";
import JunkyardTinkering  from "./pages/professions/JunkyardTinkering.tsx";
import ProtoformSynthesis  from "./pages/professions/ProtoformSynthesis.tsx";




import Honour  from "./pages/pvp/Honour.tsx";
import Arena  from "./pages/pvp/Arena.tsx";
import Rbg  from "./pages/pvp/Rbg.tsx";



import Category  from "./pages/dungeons-raids/category/Category.tsx";

import Classic  from "./pages/dungeons-raids/category/raids/Classic.tsx";
import BurningCrusade  from "./pages/dungeons-raids/category/raids/BurningCrusade.tsx";
import WrathOfTheLichKing  from "./pages/dungeons-raids/category/raids/WrathOfTheLichKing.tsx";
import Cataclysm  from "./pages/dungeons-raids/category/raids/Cataclysm.tsx";
import MistsOfPandaria  from "./pages/dungeons-raids/category/raids/MistsOfPandaria.tsx";
import WarlordsOfDraenor  from "./pages/dungeons-raids/category/raids/WarlordsOfDraenor.tsx";
import Legion  from "./pages/dungeons-raids/category/raids/Legion.tsx";
import BattleForAzeroth  from "./pages/dungeons-raids/category/raids/BattleForAzeroth.tsx";
import Shadowlands  from "./pages/dungeons-raids/category/raids/Shadowlands.tsx";
import Dragonflight  from "./pages/dungeons-raids/category/raids/Dragonflight.tsx";
import WarWithin  from "./pages/dungeons-raids/category/raids/WarWithin.tsx";
import Midnight  from "./pages/dungeons-raids/category/raids/Midnight.tsx";
import LastTitan  from "./pages/dungeons-raids/category/raids/LastTitan.tsx";



import LvlUpBase  from "./pages/lvl-up/LvlUpBase.tsx";
import LvlUpExpert  from "./pages/lvl-up/LvlUpExpert.tsx";
import LvlUpMaster  from "./pages/lvl-up/LvlUpMaster.tsx";



import Mythic5  from "./pages/dungeons/Mythic+5.tsx";
import Mythic10  from "./pages/dungeons/Mythic+10.tsx";
import Mythic15  from "./pages/dungeons/Mythic+15.tsx";



import Quests from "./pages/achievements/Quests.tsx";
import Equipments from "./pages/achievements/Equipments.tsx";
import Mounts from "./pages/achievements/Mounts.tsx";
import RaidsExplorer from "./pages/achievements/RaidsExplorer.tsx";
import Legacy  from "./pages/achievements/Legacy.tsx";
import GreatFeats  from "./pages/achievements/GreatFeats.tsx";
import WarcraftReforged from "./pages/achievements/WarcraftReforged.tsx";
import Wow from "./pages/achievements/Wow.tsx";
import Diablo  from "./pages/achievements/Diablo.tsx";
import Hearthstone  from "./pages/achievements/Hearthstone.tsx";
import HeroesStorm  from "./pages/achievements/HeroesStorm.tsx";
import Starcraft  from "./pages/achievements/Starcraft.tsx";
import Overwatch  from "./pages/achievements/Overwatch.tsx";
import WowCollectionEditions  from "./pages/achievements/WowCollectionEditions.tsx";
import DiabloCollectionEditions  from "./pages/achievements/DiabloCollectionEditions.tsx";








createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />

				<Route path="races" element={<Races />} />
				<Route path="races/horde" element={<Horde />} />
				<Route path="races/alliance" element={<Alliance />} />


				<Route path="raids-armours/warrior" element={<Warrior />} />
				<Route path="raids-armours/druid" element={<Druid />} />
				<Route path="raids-armours/priest" element={<Priest />} />
				<Route path="raids-armours/mage" element={<Mage />} />
				<Route path="raids-armours/monk" element={<Monk />} />
				<Route path="raids-armours/hunter" element={<Hunter />} />
				<Route path="raids-armours/demon-hunter" element={<DemonHunter />} />
				<Route path="raids-armours/paladin" element={<Paladin />} />
				<Route path="raids-armours/rogue" element={<Rogue />} />
				<Route path="raids-armours/death-knight" element={<DeathKnight />} />
				<Route path="raids-armours/warlock" element={<Warlock />} />
				<Route path="raids-armours/shaman" element={<Shaman />} />
				<Route path="raids-armours/awakener" element={<Awakener />} />


				<Route path="weapons/one-handed" element={<OneHandedWeapons />} />
				<Route path="weapons/two-handed" element={<TwoHandedWeapons />} />
				<Route path="weapons/range" element={<RangeWeapons />} />
				<Route path="weapons/legendary" element={<LegendaryWeapons />} />
				<Route path="weapons/artifact" element={<ArtifactWeapons />} />
				<Route path="weapons/decorative" element={<DecorativeWeapons />} />


				<Route path="weapons/two-handed/axes" element={<TwoHandedAxes />} />
				<Route path="weapons/two-handed/axes/axes-details" element={<TwoHandedAxesDetails />} />


				<Route path="weapons/legendary/weapons-details/ashbringer" element={<Ashbringer />} />
				<Route path="weapons/legendary/weapons-details/sulfuras" element={<Sulfuras />} />
				<Route path="weapons/legendary/weapons-details/thunderfury" element={<Thunderfury />} />
				<Route path="weapons/legendary/weapons-details/atiesh" element={<Atiesh />} />
				<Route path="weapons/legendary/weapons-details/warglaives-of-azzinoth" element={<WarglaivesOfAzzinoth />} />
				<Route path="weapons/legendary/weapons-details/thoridal" element={<Thoridal />} />
				<Route path="weapons/legendary/weapons-details/valanyr" element={<Valanyr />} />
				<Route path="weapons/legendary/weapons-details/frostmourne" element={<Frostmourne />} />
				<Route path="weapons/legendary/weapons-details/shadowmourne" element={<Shadowmourne />} />
				<Route path="weapons/legendary/weapons-details/tarecgosa" element={<Tarecgosa />} />
				<Route path="weapons/legendary/weapons-details/fangs-of-the-father" element={<FangsFather />} />
				<Route path="weapons/legendary/weapons-details/raeshalare-deaths-whisper" element={<RaeshalareDeathsWhisper />} />
				<Route path="weapons/legendary/weapons-details/fyralath-the-dreamrender" element={<FyralathTheDreamrender />} />
				<Route path="weapons/legendary/weapons-details/naszuro-the-unbound-legacy" element={<NaszuroTheUnboundLegacy />} />



				{/* <Route path="weapons/legendary/weapons-details/:id" element={<WeaponsDetails />} /> */}


				<Route path="weapons/artifact/warrior" element={<WarriorArtifacts />} />
				<Route path="weapons/artifact/druid" element={<DruidArtifacts />} />
				<Route path="weapons/artifact/priest" element={<PriestArtifacts />} />
				<Route path="weapons/artifact/mage" element={<MageArtifacts />} />
				<Route path="weapons/artifact/monk" element={<MonkArtifacts />} />
				<Route path="weapons/artifact/hunter" element={<HunterArtifacts />} />
				<Route path="weapons/artifact/demon-hunter" element={<DemonHunterArtifacts />} />
				<Route path="weapons/artifact/paladin" element={<PaladinArtifacts />} />
				<Route path="weapons/artifact/rogue" element={<RogueArtifacts />} />
				<Route path="weapons/artifact/death-knight" element={<DeathKnightArtifacts />} />
				<Route path="weapons/artifact/warlock" element={<WarlockArtifacts />} />
				<Route path="weapons/artifact/shaman" element={<ShamanArtifacts />} />


				<Route path="weapons/artifact/warrior/arms" element={<Arms />} />
				<Route path="weapons/artifact/warrior/fury" element={<Fury />} />
				<Route path="weapons/artifact/warrior/protection" element={<Protection />} />


				<Route path="armours/shields" element={<Shields />} />
				<Route path="armours/cloaks" element={<Cloaks />} />
				<Route path="armours/tabards" element={<Tabards />} />
				<Route path="armours/fishing-rods" element={<FishingRods />} />


				<Route path="mounts/water" element={<WaterMounts />} />
				<Route path="mounts/earth" element={<EarthMounts />} />
				<Route path="mounts/fly" element={<FlyMounts />} />


				<Route path="gold/horde" element={<HordeGold />} />
				<Route path="gold/alliance" element={<AllianceGold />} />


				<Route path="professions/alchemy" element={<Alchemy />} />
				<Route path="professions/mining" element={<Mining />} />
				<Route path="professions/engineering" element={<Engineering />} />
				<Route path="professions/leatherworking" element={<Leatherworking />} />
				<Route path="professions/blacksmithing" element={<Blacksmithing />} />
				<Route path="professions/enchanting" element={<Enchanting />} />
				<Route path="professions/inscription" element={<Inscription />} />
				<Route path="professions/tailoring" element={<Tailoring />} />
				<Route path="professions/skinning" element={<Skinning />} />
				<Route path="professions/herbalism" element={<Herbalism />} />
				<Route path="professions/jewelcrafting" element={<Jewelcrafting />} />
				<Route path="professions/archaeology" element={<Archaeology />} />
				<Route path="professions/riding" element={<Riding />} />
				<Route path="professions/cooking" element={<Cooking />} />
				<Route path="professions/first-aid" element={<FirstAid />} />
				<Route path="professions/fishing" element={<Fishing />} />
				<Route path="professions/junkyard-tinkering" element={<JunkyardTinkering />} />
				<Route path="professions/protoform-synthesis" element={<ProtoformSynthesis />} />


				<Route path="pvp/honour" element={<Honour />} />
				<Route path="pvp/arena" element={<Arena />} />
				<Route path="pvp/rbg" element={<Rbg />} />


				<Route path="dungeons/mythic5" element={<Mythic5 />} />
				<Route path="dungeons/mythic10" element={<Mythic10 />} />
				<Route path="dungeons/mythic15" element={<Mythic15 />} />



				{/* <Route path="dungeons-raids/category" element={<Category />} /> */}


				<Route path="dungeons-raids/classic" element={<Classic />} />
				<Route path="dungeons-raids/burning-crusade" element={<BurningCrusade />} />
				<Route path="dungeons-raids/wrath-of-the-lich-king" element={<WrathOfTheLichKing />} />
				<Route path="dungeons-raids/cataclysm" element={<Cataclysm />} />
				<Route path="dungeons-raids/mists-of-pandaria" element={<MistsOfPandaria />} />
				<Route path="dungeons-raids/warlords-of-draenor" element={<WarlordsOfDraenor />} />
				<Route path="dungeons-raids/legion" element={<Legion />} />
				<Route path="dungeons-raids/battle-for-azeroth" element={<BattleForAzeroth />} />
				<Route path="dungeons-raids/shadowlands" element={<Shadowlands />} />
				<Route path="dungeons-raids/dragonflight" element={<Dragonflight />} />
				<Route path="dungeons-raids/war-within" element={<WarWithin />} />
				<Route path="dungeons-raids/midnight" element={<Midnight />} />
				<Route path="dungeons-raids/last-titan" element={<LastTitan />} />


				<Route path="lvl-up/lvl-up-base" element={<LvlUpBase />} />
				<Route path="lvl-up/lvl-up-expert" element={<LvlUpExpert />} />
				<Route path="lvl-up/lvl-up-master" element={<LvlUpMaster />} />


				<Route path="achievements/quests" element={<Quests />} />
				<Route path="achievements/equipments" element={<Equipments />} />
				<Route path="achievements/mounts" element={<Mounts />} />
				<Route path="achievements/raids-explorer" element={<RaidsExplorer />} />
				<Route path="achievements/legacy" element={<Legacy />} />
				<Route path="achievements/great-feats" element={<GreatFeats />} />
				<Route path="achievements/warcraft-reforged" element={<WarcraftReforged />} />
				<Route path="achievements/wow" element={<Wow />} />
				<Route path="achievements/diablo" element={<Diablo />} />
				<Route path="achievements/hearthstone" element={<Hearthstone />} />
				<Route path="achievements/heroes-storm" element={<HeroesStorm />} />
				<Route path="achievements/starcraft" element={<Starcraft />} />
				<Route path="achievements/overwatch" element={<Overwatch />} />
				<Route path="achievements/wow-collection-editions" element={<WowCollectionEditions />} />
				<Route path="achievements/diablo-collection-editions" element={<DiabloCollectionEditions />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
);