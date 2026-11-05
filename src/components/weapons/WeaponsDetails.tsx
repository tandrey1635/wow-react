import { useParams } from "react-router"
import WeaponViewer from './WeaponViewer'


import dataWeaponsLegendary from "../../json/weapons/legendary/weapons-details.json"
import dataWeaponsTwoHandedAxes from "../../json/weapons/two-handed/axes/axes-details.json"
import dataWeaponsTwoHandedSwords from "../../json/weapons/two-handed/swords/swords-details.json"


const Weapons = ()=> {
	const { weaponsDetails } = useParams()

	const weaponDetails = dataWeaponsTwoHandedAxes.find(weaponDetails=> weaponDetails.id.toLowerCase() == weaponsDetails.toLowerCase()) || dataWeaponsTwoHandedSwords.find(weaponDetails=> weaponDetails.id.toLowerCase() == weaponsDetails.toLowerCase()) || dataWeaponsLegendary.find(weaponDetails=> weaponDetails.id.toLowerCase() == weaponsDetails.toLowerCase())

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
						: ''}
					d-flex justify-content-between`}
				>
					<div className={`weapon__details__left ${
						weaponDetails.type == "common"
							? "weapon__details__left_common"
							:
						weaponDetails.type == "rare"
							? "weapon__details__left_rare"
							: ''
						}`}
					>

						<div className="weapon__details__img">
							{weaponDetails.model3d
								? <WeaponViewer modelUrl={weaponDetails.model3d} />
								:
								<img className={`weapon__details__photo ${
									weaponDetails.objectFit
										? "weapon__details__photo_object-fit"
										: ''}
									`} src={weaponDetails.img} alt={weaponDetails.title}
								/>
							}

							<div className={`weapon__details__label ${
								weaponDetails.type == "common"
									? "weapon__details__label_common"
									:
								weaponDetails.type == "rare"
									? "weapon__details__label_rare"
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
								: ''
							}`}>
							{weaponDetails.title}
						</h2>

						<p className="weapon__details__text mt-2">{weaponDetails.weaponType}</p>

						<div className="weapon__details__stats d-grid gap-3 mt-4">
							<div className={`weapon__details__stats__top ${
								weaponDetails.type == "common"
									? "weapon__details__stats__top_common"
									:
								weaponDetails.type == "rare"
									? "weapon__details__stats__top_rare"
									: ''} d-flex justify-content-between pb-2`}
							>
								<div className="weapon__details__stats__top__info">
									Уровень предмета: {weaponDetails.itemLvl}
								</div>

								<div className="weapon__details__stats__top__info">
									Урон: {weaponDetails.damage}
								</div>

								<div className="weapon__details__stats__top__info">
									Скорость: {weaponDetails.speed}
								</div>
							</div>

							<div className="weapon__details__stats__bottom d-grid gap-2">
								<div className={`weapon__details__stats__bottom__info ${
									weaponDetails.type == "common"
										? "weapon__details__stats__bottom__info_common"
										:
									weaponDetails.type == "rare"
										? "weapon__details__stats__bottom__info_rare"
										: ''
									}`}
								>
									{weaponDetails.dps}
								</div>

								{weaponDetails.strength &&
									<div className={`weapon__details__stats__bottom__info ${
										weaponDetails.type == "common"
											? "weapon__details__stats__bottom__info_common"
											:
										weaponDetails.type == "rare"
											? "weapon__details__stats__bottom__info_rare"
											: ''
										}`}
									>
										{weaponDetails.strength} к силе
									</div>
								}

								{weaponDetails.stamina &&
									<div className={`weapon__details__stats__bottom__info ${
										weaponDetails.type == "common"
											? "weapon__details__stats__bottom__info_common"
											:
										weaponDetails.type == "rare"
											? "weapon__details__stats__bottom__info_rare"
											: ''
										}`}
									>
										{weaponDetails.stamina} к выносливости
									</div>
								}
							</div>
						</div>

						<div className="weapon__details__info flex-grow-1 mt-3">
							<p className="weapon__details__descriptions">{weaponDetails.description}</p>
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