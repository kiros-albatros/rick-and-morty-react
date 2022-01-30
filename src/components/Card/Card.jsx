import "./Card.scss";
import Modal from "../Modal/Modal";
const Card = ({ name, status, species, gender, image, location, origin }) => {
	return (
		<div className="card">
			<img className="card__image" src={image} alt="" />
			<p className="card__row card__row--name">{name}</p>
			<span className={`card__row card__row--${status.toLowerCase()}`}>
				{status}
			</span>
			<br />
			<p className="card__row">{species}</p>
			<p className="card__row">{gender}</p>
			<Modal
				name={name}
				status={status}
				species={species}
				gender={gender}
				image={image}
				location={location}
				origin={origin}
			/>
		</div>
	);
};

export default Card;
