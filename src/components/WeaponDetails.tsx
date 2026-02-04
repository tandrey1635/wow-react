import { useParams } from "react-router"

const WeaponDetails = ({path, weaponType, title, description, img, objectFit, label, dmg, speed, price, gold}) => {

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

					<div className="weapon__details__right p-4">
						<h2 className="weapon__details__title weapon__details__title_legendary">{title}</h2>
						<p className="weapon__details__text weapon__details__text_legendary">{weaponType}</p>

						<div className="weapon__details__stats d-flex gap-3">
							<div className="weapon__dmg">
								Урон: {dmg}
							</div>

							<div className="weapon__details__speed">
								Скорость: {speed}
							</div>
						</div>

						<div className="weapon__details__price">
							Цена: {price}
						</div>

						<button className="weapon__details__cart">Добавить в корзину</button>


						<div className="weapon__details__info">
							<p className="weapon__details__descriptions">{description}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default WeaponDetails