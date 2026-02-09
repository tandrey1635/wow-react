import { useParams } from "react-router"

const WeaponDetails = ({path, weaponType, title, description, img, objectFit, label, dmg, speed, dps, strength, stamina,  price, gold}) => {

	const { id } = useParams()

	return (
		<section className="weapon__details">
			<div className="container">
				<div className="weapon__details__wrapper d-flex justify-content-between">
					<div className="weapon__details__left">
						<div className="weapon__details__img">
							<img src={img} alt={title} />
							<div className="weapon__details__label">{label}</div>
						</div>
					</div>

					<div className="weapon__details__right p-4 d-flex flex-column">
						<h2 className="weapon__details__title weapon__details__title_legendary">{title}</h2>
						<p className="weapon__details__text weapon__details__text_legendary">{weaponType}</p>

						<div className="weapon__details__stats d-grid gap-3 mt-4">
							<div className="weapon__details__stats__top d-flex justify-content-between">
								<div className="weapon__details__info">
									Урон: {dmg}
								</div>

								<div className="weapon__details__info">
									Скорость: {speed}
								</div>
							</div>

							<div className="weapon__details__stats__bottom d-grid gap-2">
								<div className="weapon__details__info">
									{dps}
								</div>

								<div className="weapon__details__info">
									{strength} к силе
								</div>

								<div className="weapon__details__info">
									{stamina} к выносливости
								</div>
							</div>
						</div>

						<div className="weapon__details__info flex-grow-1 mt-5">
							<p className="weapon__details__descriptions">{description}</p>
						</div>

						<div className="weapon__details__price">
							Цена: {price}$
						</div>

						<button className="weapon__details__cart">Добавить в корзину</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default WeaponDetails