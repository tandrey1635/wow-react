import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router"
import { ErrorBoundary } from "react-error-boundary"
import ModelViewer3d from '../ModelViewer3d'


import dataWeaponsLegendary from "../../json/weapons/legendary/weapons-details.json"
import dataWeaponsTwoHandedAxes from "../../json/weapons/two-handed/axes/axes-details.json"
import dataWeaponsTwoHandedSwords from "../../json/weapons/two-handed/swords/swords-details.json"


const Weapons = ()=> {
	const { weaponsDetails } = useParams()

	const weaponDetails = dataWeaponsTwoHandedAxes.find(weaponDetails=> weaponDetails.id.toLowerCase() == weaponsDetails.toLowerCase()) || dataWeaponsTwoHandedSwords.find(weaponDetails=> weaponDetails.id.toLowerCase() == weaponsDetails.toLowerCase()) || dataWeaponsLegendary.find(weaponDetails=> weaponDetails.id.toLowerCase() == weaponsDetails.toLowerCase())


	const statsRef = useRef<HTMLDivElement>(null)
	const descRef = useRef<HTMLDivElement>(null)
    const [hasStatsScroll, setHasStatsScroll] = useState(false)
	const [hasDescScroll, setHasDescScroll] = useState(false)

    useEffect(() => {
        const statsEl = statsRef.current
    	const descEl = descRef.current

        if (statsEl) {
        	setHasStatsScroll(statsEl.scrollHeight > statsEl.clientHeight)
    	}

		if (descEl) {
			setHasDescScroll(descEl.scrollHeight > descEl.clientHeight)
		}

    }, [weaponDetails])

	return (
		<section className="weapon__details">
			<section className="announcement">
				<div className="container">
					<h1 className="announcement__header text-center">
						{
							weaponDetails.type == "twohanded-axes"
								? "Двуручные Топоры"
								: null
						}
					</h1>
				</div>
			</section>

			<div className="container">
				<div className={`weapon__details__wrapper ${
					weaponDetails.type == "common"
						? "weapon__details__wrapper_common"
						:
					weaponDetails.type == "rare"
						? "weapon__details__wrapper_rare"
						:
					weaponDetails.type == "epic"
						? "weapon__details__wrapper_epic"
						:
					weaponDetails.type == "legendary"
						? "weapon__details__wrapper_legendary"
						: ''}
					d-flex justify-content-between`}
				>
					<div className={`weapon__details__left ${
						weaponDetails.type == "common"
							? "weapon__details__left_common"
							:
						weaponDetails.type == "rare"
							? "weapon__details__left_rare"
							:
						weaponDetails.type == "epic"
							? "weapon__details__left_epic"
							:
						weaponDetails.type == "legendary"
							? "weapon__details__left_legendary"
							: ''
						}`}
					>

						<div className="weapon__details__img">
							<ErrorBoundary fallback={
								<img className={`weapon__details__photo ${
									weaponDetails.objectFit
										? "weapon__details__photo_object-fit"
										: ''}
								`} src={weaponDetails.img} alt={weaponDetails.title} />
							} >
								<ModelViewer3d modelUrl={weaponDetails.model3d} settings={weaponDetails.settings} />
							</ErrorBoundary>

							<div className={`weapon__details__label ${
								weaponDetails.type == "common"
									? "weapon__details__label_common"
									:
								weaponDetails.type == "rare"
									? "weapon__details__label_rare"
									:
								weaponDetails.type == "epic"
									? "weapon__details__label_epic"
									:
								weaponDetails.type == "legendary"
									? "weapon__details__label_legendary"
									: ''} text-center`}
							>
								{weaponDetails.label}
							</div>
						</div>
					</div>

					<div className="weapon__details__right p-4 d-flex flex-column">
						<h2 className={`weapon__details__title ${
							weaponDetails.type == "common"
								? "weapon__details__title_common"
								:
							weaponDetails.type == "rare"
								? "weapon__details__title_rare"
								:
							weaponDetails.type == "epic"
								? "weapon__details__title_epic"
								:
							weaponDetails.type == "legendary"
								? "weapon__details__title_legendary"
								: ''
							}`}>
							{weaponDetails.title}
						</h2>

						<div className="weapon__details__block__text d-flex align-items-center justify-content-between mt-2">
							<p className="weapon__details__text">{weaponDetails.weaponType}</p>
							{weaponDetails.fraction &&
								<p className={`weapon__details__text ${
									weaponDetails.fraction == "Орда"
										? "weapon__details__text_horde"
										:
									weaponDetails.fraction == "Альянс"
										? "weapon__details__text_alliance"
										: ''}`}
								>
									<span className="weapon__details__text">Фракция:</span> {weaponDetails.fraction}
								</p>
							}
						</div>

						<div className="weapon__details__stats d-grid gap-2 mt-2">
							<div className={`weapon__details__stats__top ${
								weaponDetails.type == "common"
									? "weapon__details__stats__top_common"
									:
								weaponDetails.type == "rare"
									? "weapon__details__stats__top_rare"
									:
								weaponDetails.type == "epic"
									? "weapon__details__stats__top_epic"
									:
								weaponDetails.type == "legendary"
									? "weapon__details__stats__top_legendary"
									: ''} d-grid gap-2 pb-2`}
							>
								{weaponDetails.stats?.general?.map(({value, name}, i)=> {
									return (
										<div key={i} className="weapon__details__stats__top__info">
											{name} : {value}
										</div>
									)}
								)}
							</div>

							<div ref={statsRef} className={`weapon__details__stats__bottom ${
									weaponDetails.type == "common"
										? "weapon__details__stats__bottom_common"
										:
									weaponDetails.type == "rare"
										? "weapon__details__stats__bottom_rare"
										:
									weaponDetails.type == "epic"
										? "weapon__details__stats__bottom_epic"
										:
									weaponDetails.type == "legendary"
										? "weapon__details__stats__bottom_legendary"
										: ''
								} ${hasStatsScroll
									? "weapon__details__stats__bottom_scroll"
									: ''
								} d-grid gap-2`}
							>
								{weaponDetails.stats?.main?.map(({value, name}, i)=> {
									return (
										<div key={i} className={`weapon__details__stats__bottom__info ${
											weaponDetails.type == "common"
												? "weapon__details__stats__bottom__info_common"
												:
											weaponDetails.type == "rare"
												? "weapon__details__stats__bottom__info_rare"
												:
											weaponDetails.type == "epic"
												? "weapon__details__stats__bottom__info_epic"
												:
											weaponDetails.type == "legendary"
												? "weapon__details__stats__bottom__info_legendary"
												: ''
											}`}
										>
											{value} {name}
										</div>
									)}
								)}
							</div>

							{weaponDetails.stats?.secondary?.map(({value, name}, i)=> {
								return (
									<div key={i} className="weapon__details__stats__secondary">
										{value} {name}
									</div>
								)}
							)}
						</div>

						<div ref={descRef} className={`weapon__details__info ${
							weaponDetails.type == "common"
								? "weapon__details__info_common"
								:
							weaponDetails.type == "rare"
								? "weapon__details__info_rare"
								:
							weaponDetails.type == "epic"
								? "weapon__details__info_epic"
								:
							weaponDetails.type == "legendary"
								? "weapon__details__info_legendary"
								: ''
							} ${hasDescScroll ? "weapon__details__info_scroll" : ""} flex-grow-1 my-3`}
						>

							{weaponDetails.effect && <p className="weapon__details__descriptions weapon__details__descriptions_effect">{weaponDetails.effect}</p>}
							
							{weaponDetails.description && <p className="weapon__details__descriptions">{weaponDetails.description}</p>}


							{weaponDetails.unicalDescription && <p className="weapon__details__descriptions">{weaponDetails.unicalDescription}</p>}
						</div>

						<div className="weapon__details__price">
							Цена: {weaponDetails.price}$
						</div>

						<button className="weapon__details__card__btn mt-3">Добавить в корзину</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Weapons