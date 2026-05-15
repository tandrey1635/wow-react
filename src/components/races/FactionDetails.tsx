import { useParams } from "react-router"


import dataHordeDetails from '../../json/races/faction/horde/horde-details.json'
import dataAllianceDetails from '../../json/races/faction/alliance/alliance-details.json'

const FactionDetails = () => {
	const { raceId } = useParams()

	const race = dataHordeDetails.find(race => race.id.toLocaleLowerCase() === raceId) || dataAllianceDetails.find(race => race.id.toLocaleLowerCase() === raceId)


	return (
		<>
			<section className="announcement">
				<div className="container">
					<div className="announcement__description">
						<h1 className={`announcement__header ${
							race.type === "faction-horde"
								? "announcement__header_horde"
								:
							race.type === "faction-alliance"
								? "announcement__header_alliance"
								: ''} text-center`}
						>
							{race.title}
						</h1>
						<p className="announcement__text text-center mt-3">{race.description}</p>
					</div>
				</div>
			</section>

			<section className="promo">
				<div className="container-fluid">
					<p className={`promo__info ${
						race.id === "Orc"
							? "promo__info_horde_orcs"
							:
						race.id === "Maghar"
							? "promo__info_horde_maghars"
							:
						race.id === "Undead"
							? "promo__info_horde_undead"
							:
						race.id === "Tauren"
							? "promo__info_horde_taurens"
							:
						race.id === "HighmountainTauren"
							? "promo__info_horde_highmountaintaurens"
							:
						race.id === "EarthenHorde"
							? "promo__info_horde_earthenshorde"
							:
						race.id === "Troll"
							? "promo__info_horde_trolls"
							:
						race.id === "ZandalariTroll"
							? "promo__info_horde_zandalaritrolls"
							:
						race.id === "DracthyrHorde"
							? "promo__info_horde_dracthyrshorde"
							:
						race.id === "BloodElf"
							? "promo__info_horde_bloodelfs"
							:
						race.id === "Nightborne"
							? "promo__info_horde_nightbornes"
							:
						race.id === "PandarenHorde"
							? "promo__info_horde_pandarenshorde"
							:
						race.id === "Goblin"
							? "promo__info_horde_goblins"
							:
						race.id === "Vulper"
							? "promo__info_horde_vulpers"
							:
						race.id === "Human"
							? "promo__info_alliance_humans"
							:
						race.id === "KulTiran"
							? "promo__info_alliance_kultirans"
							:
						race.id === "Worgen"
							? "promo__info_alliance_worgens"
							:
						race.id === "Dwarf"
							? "promo__info_alliance_dwarfs"
							:
						race.id === "DarkIronDwarf"
							? "promo__info_alliance_darkirondwarfs"
							:
						race.id === "EarthenAlliance"
							? "promo__info_alliance_earthensalliance"
							:
						race.id === "Draenei"
							? "promo__info_alliance_draeneis"
							:
						race.id === "LightforgedDraenei"
							? "promo__info_alliance_lightforgeddraeneis"
							:
						race.id === "DracthyrAlliance"
							? "promo__info_alliance_dracthyrsalliance"
							:
						race.id === "NightElf"
							? "promo__info_alliance_nightelfs"
							:
						race.id === "VoidElf"
							? "promo__info_alliance_voidelfs"
							:
						race.id === "PandarenAlliance"
							? "promo__info_alliance_pandarensalliance"
							:
						race.id === "Gnome"
							? "promo__info_alliance_gnomes"
							:
						race.id === "Mechagnome"
							? "promo__info_alliance_mechagnomes"
							:
						''}`}
					></p>
				</div>
			</section>

			<section className="races">
				<div className="container">
					<div className="races__wrapper d-grid">
						<div className="races__item d-grid gap-4">
							<h2 className="races__header">
								Столица: <span className={
									race.type === "faction-horde"
										? "races__horde"
										:
									race.type === "faction-alliance"
										? "races__alliance"
										: null}
									>
										{race.capital}
									</span>
							</h2>

							<div className="races__img">
								<img src={race.capitalImg} alt={race.capital} />
							</div>

							<div className="races__descriptions">
								<p className="races__text">
									{race.capitalDescription}
								</p>
							</div>
						</div>

						<div className="races__item d-grid gap-4">
							<h2 className="races__header">
								Расовое средство передвижения: <span className={
									race.type === "faction-horde"
										? "races__horde"
										:
									race.type === "faction-alliance"
										? "races__alliance"
										: null}
									>
										{race.raceMount}
									</span>
							</h2>

							<div className="races__img races__img_mount">
								<img src={race.raceMountImg} alt={race.raceMount} />
							</div>

							<div className="races__descriptions">
								<p className="races__text">
									{race.raceMountDescription}
								</p>
							</div>
						</div>

						<div className="races__item d-grid gap-4">
							<h2 className="races__header">
								Лидер: <span className={
									race.type === "faction-horde"
										? "races__horde"
										:
									race.type === "faction-alliance"
										? "races__alliance"
										: null}
									>
										{race.leader}
									</span>
							</h2>

							<div className="races__img races__img_leader">
								<img src={race.leaderImg} alt={race.leader} />
							</div>

							<div className="races__descriptions">
								<p className="races__text">
									{race.leaderDescription}
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default FactionDetails