import { useParams } from "react-router";



import dataWeaponsTwoHandedAxes from "../../json/weapons/two-handed/axes/axes-details.json"
import dataWeaponsLegendary from "../../json/weapons/legendary/weapons-details.json"


const Weapons = ()=> {
	const { weaponsDetails } = useParams()



	const weaponDetails = dataWeaponsTwoHandedAxes.find(weaponDetails=> weaponDetails.id.toLowerCase() == weaponsDetails.toLowerCase()) || dataWeaponsLegendary.find(weaponDetails=> weaponDetails.id.toLowerCase() == weaponsDetails.toLowerCase())



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
				<div className="weapon__details__wrapper d-flex justify-content-between flex-column">
					<div className="d-flex">
						<div className="weapon__details__left">
							<div className="weapon__details__img">
								<img src={weaponDetails.img} alt={weaponDetails.title} />
								<div className="weapon__details__label">{weaponDetails.label}</div>
							</div>
						</div>

						<div className="weapon__details__right p-4 d-flex flex-column">
							<h2 className="weapon__details__title weapon__details__title_legendary">{weaponDetails.title}</h2>
							<p className="weapon__details__text weapon__details__text_legendary">{weaponDetails.weaponType}</p>

							<div className="weapon__details__stats d-grid gap-3 mt-4">
								<div className="weapon__details__stats__top d-flex justify-content-between">
									<div className="weapon__details__info">
										Урон: {weaponDetails.dmg}
									</div>

									<div className="weapon__details__info">
										Скорость: {weaponDetails.speed}
									</div>
								</div>

								<div className="weapon__details__stats__bottom d-grid gap-2">
									<div className="weapon__details__info">
										{weaponDetails.dps}
									</div>

									<div className="weapon__details__info">
										{weaponDetails.strength} к силе
									</div>

									<div className="weapon__details__info">
										{weaponDetails.stamina} к выносливости
									</div>
								</div>
							</div>

							<div className="weapon__details__info flex-grow-1 mt-5">
								<p className="weapon__details__descriptions">{weaponDetails.description}</p>
							</div>

							<div className="weapon__details__price">
								Цена: {weaponDetails.price}$
							</div>

							<button className="weapon__details__cart">Добавить в корзину</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Weapons