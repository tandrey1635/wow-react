import { useParams } from "react-router"

import dataLegendaryWeaponsDetails from '../json/weapons/legendary/weapons-details.json';

const WeaponDetails = () => {
	const { id } = useParams()

	const weapon = dataLegendaryWeaponsDetails.find(item => item.id === id)


	return (
		<section className="weapon__details">
			<div className="container">
				<div className="weapon__details__wrapper d-flex justify-content-between">
					<div className="weapon__details__left">
						<div className="weapon__details__img">
							<img src={weapon.img} alt={weapon.title} />
							<div className="weapon__details__label">{weapon.label}</div>
						</div>
					</div>

					<div className="weapon__details__right p-4 d-flex flex-column">
						<h2 className="weapon__details__title weapon__details__title_legendary">{weapon.title}</h2>
						<p className="weapon__details__text weapon__details__text_legendary">{weapon.weaponType}</p>

						<div className="weapon__details__stats d-grid gap-3 mt-4">
							<div className="weapon__details__stats__top d-flex justify-content-between">
								<div className="weapon__details__info">
									Урон: {weapon.dmg}
								</div>

								<div className="weapon__details__info">
									Скорость: {weapon.speed}
								</div>
							</div>

							<div className="weapon__details__stats__bottom d-grid gap-2">
								<div className="weapon__details__info">
									{weapon.dps}
								</div>

								<div className="weapon__details__info">
									{weapon.strength} к силе
								</div>

								<div className="weapon__details__info">
									{weapon.stamina} к выносливости
								</div>
							</div>
						</div>

						<div className="weapon__details__info flex-grow-1 mt-5">
							<p className="weapon__details__descriptions">{weapon.description}</p>
						</div>

						<div className="weapon__details__price">
							Цена: {weapon.price}$
						</div>

						<button className="weapon__details__cart">Добавить в корзину</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default WeaponDetails