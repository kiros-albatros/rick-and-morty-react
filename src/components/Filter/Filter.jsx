import "./Filter.scss";

const Filter = () => {
	let filterData = {
		Gender: ["female", "male", "genderless", "unknown"],
		Status: ["dead", "alive", "unknown"],
		Species: ["Humanoid", "Animal", "Robot", "Alien"],
		Type: ["?"],
	};

	let filterDataKeys = Object.keys(filterData);

	return (
		<div className="filter">
			<h2>Filter</h2>
			<div className="filter__parameters">
				{filterDataKeys.map((parameter) => (
					<div key={parameter} className="filter__parameter-wrapper">
						<h3 className="filter__parameter-name">{parameter}</h3>
						<ul className="filter__parameter-list">
							{filterData[parameter].map((item) => (
								<li
									key={item}
									className="filter__parameter-item"
								>
									<a
										className="filter__parameter-link"
										href="#"
									>
										{item}
									</a>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
};

export default Filter;
