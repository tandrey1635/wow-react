import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.sass'
import { BrowserRouter, Routes, Route } from "react-router";


/* Расы */
import RacesDetailsPage from "./pages/races/RacesDetailsPage.tsx";
import FactionPage from "./pages/races/FactionPage.tsx";
import FactionDetailsPage from "./pages/races/FactionDetailsPage.tsx";

/* Рейдовая броня */
import RaidsArmoursPage from './pages/raids-armours/RaidsArmoursPage.tsx'

/* Оружие */
import WeaponsPage from './pages/weapons/WeaponsPage.tsx'



import TwoHandedAxes from "./pages/weapons/two-handed/axes/Axes.tsx";
import TwoHandedAxesDetails from "./pages/weapons/two-handed/axes/AxesDetails.tsx";


import Ashbringer from "./pages/weapons/legendary/weapons-details/Ashbringer.tsx";
import Sulfuras from "./pages/weapons/legendary/weapons-details/Sulfuras.tsx";
import Thunderfury from "./pages/weapons/legendary/weapons-details/Thunderfury.tsx";
import Atiesh from "./pages/weapons/legendary/weapons-details/Atiesh.tsx";
import WarglaivesOfAzzinoth from "./pages/weapons/legendary/weapons-details/WarglaivesOfAzzinoth.tsx";
import Thoridal from "./pages/weapons/legendary/weapons-details/Thoridal.tsx";
import Valanyr from "./pages/weapons/legendary/weapons-details/Valanyr.tsx";
import Shadowmourne from "./pages/weapons/legendary/weapons-details/Shadowmourne.tsx";
import Frostmourne from "./pages/weapons/legendary/weapons-details/Frostmourne.tsx";
import Tarecgosa from "./pages/weapons/legendary/weapons-details/Tarecgosa.tsx";
import FangsFather from "./pages/weapons/legendary/weapons-details/FangsFather.tsx";
import RaeshalareDeathsWhisper from "./pages/weapons/legendary/weapons-details/RaeshalareDeathsWhisper.tsx";
import FyralathTheDreamrender from "./pages/weapons/legendary/weapons-details/FyralathTheDreamrender.tsx";
import NaszuroTheUnboundLegacy from "./pages/weapons/legendary/weapons-details/NaszuroTheUnboundLegacy.tsx";



import WeaponsDetails from "./pages/weapons/legendary/weapons-details/WeaponsDetails.tsx";



import WarriorArtifacts from "./pages/weapons/artifact/Warrior.tsx";
import DruidArtifacts from "./pages/weapons/artifact/Druid.tsx";
import PriestArtifacts from "./pages/weapons/artifact/Priest.tsx";
import MageArtifacts from "./pages/weapons/artifact/Mage.tsx";
import MonkArtifacts from "./pages/weapons/artifact/Monk.tsx";
import HunterArtifacts from "./pages/weapons/artifact/Hunter.tsx";
import DemonHunterArtifacts from "./pages/weapons/artifact/DemonHunter.tsx";
import PaladinArtifacts from "./pages/weapons/artifact/Paladin.tsx";
import RogueArtifacts from "./pages/weapons/artifact/Rogue.tsx";
import DeathKnightArtifacts from "./pages/weapons/artifact/DeathKnight.tsx";
import WarlockArtifacts from "./pages/weapons/artifact/Warlock.tsx";
import ShamanArtifacts from "./pages/weapons/artifact/Shaman.tsx";



import Arms from "./pages/weapons/artifact/warrior/Arms.tsx";
import Fury from "./pages/weapons/artifact/warrior/Fury.tsx";
import Protection from "./pages/weapons/artifact/warrior/Protection.tsx";


import LegendaryArmours from "./pages/armours/Legendary.tsx";
import Cloaks from "./pages/armours/Cloaks.tsx";
import Shields from "./pages/armours/Shields.tsx";
import Tabards from "./pages/armours/Tabards.tsx";



import MountsDetailsPage from "./pages/mounts/MountsDetailsPage.tsx";


import Alchemy from "./pages/professions/Alchemy.tsx";
import Mining from "./pages/professions/Mining.tsx";
import Engineering from "./pages/professions/Engineering.tsx";
import Leatherworking from "./pages/professions/Leatherworking.tsx";
import Blacksmithing from "./pages/professions/Blacksmithing.tsx";
import Enchanting from "./pages/professions/Enchanting.tsx";
import Inscription from "./pages/professions/Inscription.tsx";
import Tailoring from "./pages/professions/Tailoring.tsx";
import Skinning from "./pages/professions/Skinning.tsx";
import Herbalism from "./pages/professions/Herbalism.tsx";
import Jewelcrafting from "./pages/professions/Jewelcrafting.tsx";
import Archaeology from "./pages/professions/Archaeology.tsx";
import Riding from "./pages/professions/Riding.tsx";
import Cooking from "./pages/professions/Cooking.tsx";
import FirstAid from "./pages/professions/FirstAid.tsx";
import Fishing from "./pages/professions/Fishing.tsx";
import JunkyardTinkering from "./pages/professions/JunkyardTinkering.tsx";
import ProtoformSynthesis from "./pages/professions/ProtoformSynthesis.tsx";




import Honour from "./pages/pvp/Honour.tsx";
import Arena from "./pages/pvp/Arena.tsx";
import Rbg from "./pages/pvp/Rbg.tsx";



import DungeonsRaids from "./pages/dungeons-raids/DangeonsRaids.tsx";
import AdditionsDungeons from "./pages/dungeons-raids/dungeons/AdditionsDungeons.tsx";
import AdditionsRaids from "./pages/dungeons-raids/raids/AdditionsRaids.tsx";


import ClassicDungeons from "./pages/dungeons-raids/dungeons/classic/Classic.tsx";
import BurningCrusadeDungeons from "./pages/dungeons-raids/dungeons/burning-crusade/BurningCrusade.tsx";
import WrathOfTheLichKingDungeons from "./pages/dungeons-raids/dungeons/wrath-of-the-lich-king/WrathOfTheLichKing.tsx";
import CataclysmDungeons from "./pages/dungeons-raids/dungeons/cataclysm/Cataclysm.tsx";
import MistsOfPandariaDungeons from "./pages/dungeons-raids/dungeons/mists-of-pandaria/MistsOfPandaria.tsx";
import WarlordsOfDraenorDungeons from "./pages/dungeons-raids/dungeons/warlords-of-draenor/WarlordsOfDraenor.tsx";
import LegionDungeons from "./pages/dungeons-raids/dungeons/legion/Legion.tsx";
import BattleForAzerothDungeons from "./pages/dungeons-raids/dungeons/battle-for-azeroth/BattleForAzeroth.tsx";
import ShadowlandsDungeons from "./pages/dungeons-raids/dungeons/shadowlands/Shadowlands.tsx";
import DragonflightDungeons from "./pages/dungeons-raids/dungeons/dragonflight/Dragonflight.tsx";
import WarWithinDungeons from "./pages/dungeons-raids/dungeons/war-within/WarWithin.tsx";
import MidnightDungeons from "./pages/dungeons-raids/dungeons/midnight/Midnight.tsx";
import LastTitanDungeons from "./pages/dungeons-raids/dungeons/last-titan/LastTitan.tsx";



import ClassicRaids from "./pages/dungeons-raids/raids/classic/Classic.tsx";
import BurningCrusadeRaids from "./pages/dungeons-raids/raids/burning-crusade/BurningCrusade.tsx";
import WrathOfTheLichKingRaids from "./pages/dungeons-raids/raids/wrath-of-the-lich-king/WrathOfTheLichKing.tsx";
import CataclysmRaids from "./pages/dungeons-raids/raids/cataclysm/Cataclysm.tsx";
import MistsOfPandariaRaids from "./pages/dungeons-raids/raids/mists-of-pandaria/MistsOfPandaria.tsx";
import WarlordsOfDraenorRaids from "./pages/dungeons-raids/raids/warlords-of-draenor/WarlordsOfDraenor.tsx";
import LegionRaids from "./pages/dungeons-raids/raids/legion/Legion.tsx";
import BattleForAzerothRaids from "./pages/dungeons-raids/raids/battle-for-azeroth/BattleForAzeroth.tsx";
import ShadowlandsRaids from "./pages/dungeons-raids/raids/shadowlands/Shadowlands.tsx";
import DragonflightRaids from "./pages/dungeons-raids/raids/dragonflight/Dragonflight.tsx";
import WarWithinRaids from "./pages/dungeons-raids/raids/war-within/WarWithin.tsx";
import MidnightRaids from "./pages/dungeons-raids/raids/midnight/Midnight.tsx";
import LastTitanRaids from "./pages/dungeons-raids/raids/last-titan/LastTitan.tsx";



import Quests from "./pages/achievements/Quests.tsx";
import Legacy from "./pages/achievements/Legacy.tsx";
import GreatFeats from "./pages/achievements/GreatFeats.tsx";
import WarcraftReforged from "./pages/achievements/WarcraftReforged.tsx";
import WowAnniversary from "./pages/achievements/WowAnniversary.tsx";
import Diablo from "./pages/achievements/Diablo.tsx";
import Hearthstone from "./pages/achievements/Hearthstone.tsx";
import HeroesStorm from "./pages/achievements/HeroesStorm.tsx";
import Starcraft from "./pages/achievements/Starcraft.tsx";
import Overwatch from "./pages/achievements/Overwatch.tsx";
import WowCollectionEditions from "./pages/achievements/WowCollectionEditions.tsx";
import DiabloCollectionEditions from "./pages/achievements/DiabloCollectionEditions.tsx";




import MoltenCore from "./pages/raids-armours/RaidsArmoursDetailsPage/MoltenCore.tsx";
import BlackwingLair from "./pages/raids-armours/RaidsArmoursDetailsPage/BlackwingLair.tsx";
import AhnqirajTemple from "./pages/raids-armours/RaidsArmoursDetailsPage/AhnqirajTemple.tsx";
import NaxxramasClassic from "./pages/raids-armours/RaidsArmoursDetailsPage/NaxxramasClassic.tsx";
import NaxxramasClassicSapphiron from "./pages/raids-armours/RaidsArmoursDetailsPage/NaxxramasClassicSapphiron.tsx";
import TimeWalk from "./pages/raids-armours/RaidsArmoursDetailsPage/TimeWalk.tsx";
import TierFour from "./pages/raids-armours/RaidsArmoursDetailsPage/TierFour.tsx";
import SnakeSanctuary from "./pages/raids-armours/RaidsArmoursDetailsPage/SnakeSanctuary.tsx";
import BlackTemple from "./pages/raids-armours/RaidsArmoursDetailsPage/BlackTemple.tsx";
import Sunwell from "./pages/raids-armours/RaidsArmoursDetailsPage/Sunwell.tsx";
import Naxxramas from "./pages/raids-armours/RaidsArmoursDetailsPage/Naxxramas.tsx";
import Ulduar from "./pages/raids-armours/RaidsArmoursDetailsPage/Ulduar.tsx";
import TrialOfTheCrusader from "./pages/raids-armours/RaidsArmoursDetailsPage/TrialOfTheCrusader.tsx";
import IceCrownCitadel from "./pages/raids-armours/RaidsArmoursDetailsPage/IceCrownCitadel.tsx";
import TierEleven from "./pages/raids-armours/RaidsArmoursDetailsPage/TierEleven.tsx";
import Firelands from "./pages/raids-armours/RaidsArmoursDetailsPage/Firelands.tsx"
import DragonSoul from "./pages/raids-armours/RaidsArmoursDetailsPage/DragonSoul.tsx";
import TierFourteens from "./pages/raids-armours/RaidsArmoursDetailsPage/TierFourteens.tsx";
import ThroneOfThunder from "./pages/raids-armours/RaidsArmoursDetailsPage/ThroneOfThunder.tsx";
import SiegeOfOrgrimmar from "./pages/raids-armours/RaidsArmoursDetailsPage/SiegeOfOrgrimmar.tsx";
import FoundryOfBlackMountainClan from "./pages/raids-armours/RaidsArmoursDetailsPage/FoundryOfBlackMountainClan.tsx";







createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				{/* Главная стр */}
				<Route path="/" element={<App />} />

				{/* Расы */}
				<Route path=":races" element={<RacesDetailsPage />} />
				<Route path=":races/:factionId" element={<FactionPage />} />
				<Route path=":races/:factionId/:raceId" element={<FactionDetailsPage />} />

				{/* Рейдовая броня */}
				<Route path="raids-armours/:raidsArmours" element={<RaidsArmoursPage />} />


				{/* Детальные стр рейдовой брони */}
				<Route path="raids-armours/:raidsArmours/molten-core" element={<MoltenCore />} />
				<Route path="raids-armours/:raidsArmours/blackwing-lair" element={<BlackwingLair />} />
				<Route path="raids-armours/:raidsArmours/ahnqiraj-temple" element={<AhnqirajTemple />} />
				<Route path="raids-armours/:raidsArmours/naxxramas-classic" element={<NaxxramasClassic />} />
				<Route path="raids-armours/:raidsArmours/naxxramas-classic-sapphiron" element={<NaxxramasClassicSapphiron />} />
				<Route path="raids-armours/:raidsArmours/time-walk" element={<TimeWalk />} />
				<Route path="raids-armours/:raidsArmours/tier-four" element={<TierFour />} />
				<Route path="raids-armours/:raidsArmours/snake-sanctuary" element={<SnakeSanctuary />} />
				<Route path="raids-armours/:raidsArmours/black-temple" element={<BlackTemple />} />
				<Route path="raids-armours/:raidsArmours/sunwell" element={<Sunwell />} />
				<Route path="raids-armours/:raidsArmours/naxxramas" element={<Naxxramas />} />
				<Route path="raids-armours/:raidsArmours/ulduar" element={<Ulduar />} />
				<Route path="raids-armours/:raidsArmours/trial-of-the-crusader" element={<TrialOfTheCrusader />} />
				<Route path="raids-armours/:raidsArmours/ice-crown-citadel" element={<IceCrownCitadel />} />
				<Route path="raids-armours/:raidsArmours/tier-eleven" element={<TierEleven />} />
				<Route path="raids-armours/:raidsArmours/firelands" element={<Firelands />} />
				<Route path="raids-armours/:raidsArmours/dragon-soul" element={<DragonSoul />} />
				<Route path="raids-armours/:raidsArmours/tier-fourteens" element={<TierFourteens />} />
				<Route path="raids-armours/:raidsArmours/throne-of-thunder" element={<ThroneOfThunder />} />
				<Route path="raids-armours/:raidsArmours/siege-of-orgrimmar" element={<SiegeOfOrgrimmar />} />
				<Route path="raids-armours/:raidsArmours/foundry-of-black-mountain-clan" element={<FoundryOfBlackMountainClan />} />





				<Route path="weapons/:weapons" element={<WeaponsPage />} />


				<Route path="weapons/twohanded/axes" element={<TwoHandedAxes />} />
				<Route path="weapons/twohanded/axes/axes-details" element={<TwoHandedAxesDetails />} />


				{/* <Route path="weapons/legendary/weapons-details/ashbringer" element={<Ashbringer />} />
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
				<Route path="weapons/legendary/weapons-details/naszuro-the-unbound-legacy" element={<NaszuroTheUnboundLegacy />} /> */}



				<Route path="weapons/legendary/weapons-details/:id" element={<WeaponsDetails />} />


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


				<Route path="armours/legendary" element={<LegendaryArmours />} />
				<Route path="armours/shields" element={<Shields />} />
				<Route path="armours/cloaks" element={<Cloaks />} />
				<Route path="armours/tabards" element={<Tabards />} />



				<Route path="mounts/:id" element={<MountsDetailsPage />} />


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



				<Route path="dungeons-raids" element={<DungeonsRaids />} />
				<Route path="raids" element={<AdditionsRaids />} />
				<Route path="dungeons" element={<AdditionsDungeons />} />


				<Route path="dungeons/classic" element={<ClassicDungeons />} />
				<Route path="dungeons/burning-crusade" element={<BurningCrusadeDungeons />} />
				<Route path="dungeons/wrath-of-the-lich-king" element={<WrathOfTheLichKingDungeons />} />
				<Route path="dungeons/cataclysm" element={<CataclysmDungeons />} />
				<Route path="dungeons/mists-of-pandaria" element={<MistsOfPandariaDungeons />} />
				<Route path="dungeons/warlords-of-draenor" element={<WarlordsOfDraenorDungeons />} />
				<Route path="dungeons/legion" element={<LegionDungeons />} />
				<Route path="dungeons/battle-for-azeroth" element={<BattleForAzerothDungeons />} />
				<Route path="dungeons/shadowlands" element={<ShadowlandsDungeons />} />
				<Route path="dungeons/dragonflight" element={<DragonflightDungeons />} />
				<Route path="dungeons/war-within" element={<WarWithinDungeons />} />
				<Route path="dungeons/midnight" element={<MidnightDungeons />} />
				<Route path="dungeons/last-titan" element={<LastTitanDungeons />} />



				<Route path="raids/classic" element={<ClassicRaids />} />
				<Route path="raids/burning-crusade" element={<BurningCrusadeRaids />} />
				<Route path="raids/wrath-of-the-lich-king" element={<WrathOfTheLichKingRaids />} />
				<Route path="raids/cataclysm" element={<CataclysmRaids />} />
				<Route path="raids/mists-of-pandaria" element={<MistsOfPandariaRaids />} />
				<Route path="raids/warlords-of-draenor" element={<WarlordsOfDraenorRaids />} />
				<Route path="raids/legion" element={<LegionRaids />} />
				<Route path="raids/battle-for-azeroth" element={<BattleForAzerothRaids />} />
				<Route path="raids/shadowlands" element={<ShadowlandsRaids />} />
				<Route path="raids/dragonflight" element={<DragonflightRaids />} />
				<Route path="raids/war-within" element={<WarWithinRaids />} />
				<Route path="raids/midnight" element={<MidnightRaids />} />
				<Route path="raids/last-titan" element={<LastTitanRaids />} />


				<Route path="achievements/quests" element={<Quests />} />
				<Route path="achievements/legacy" element={<Legacy />} />
				<Route path="achievements/great-feats" element={<GreatFeats />} />
				<Route path="achievements/warcraft-reforged" element={<WarcraftReforged />} />
				<Route path="achievements/wow-anniversary" element={<WowAnniversary />} />
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