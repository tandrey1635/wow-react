import { Link } from "react-router";


const Card = ({ id, className, path, cardImg, cardImgClassName, description, titleClassName, title, descriptionClassName, spanClassname, priceClassName, price, priceImg, priceAlt,  raids }) => {
	return (
		<div className={`card ${className}`}>
			<Link to={path}>
				<img src={cardImg} className={`card-img ${cardImgClassName}`}  alt={description} />
			</Link>
			<div className="card-body">
				<Link className="card-link" to={path}>
					<h3 className={`card-title ${titleClassName}`}>{title}</h3>
				</Link>
				<p className={`card-text ${descriptionClassName}`}>{description} {raids && <span className={spanClassname}>{title}</span>}
				</p>
			</div>
			<div className="card-footer d-flex justify-content-between align-items-center">
				<p className={`card-price ${priceClassName}`}>
					от {price}
					<img className="dollar" src={priceImg} alt={priceAlt} />
				</p>
				<Link to={path} className="card-btn">Подробнее</Link>
			</div>
		</div>
	)
}


export default Card