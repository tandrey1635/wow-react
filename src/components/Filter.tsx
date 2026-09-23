const Filter = ({}) => {

	return (
		<div className="filter py-5">
			<div className="container">
				<div className="filter__wrapper">
					<select onChange={(e)=> e.target.value}>
						<option>Все</option>
						<option>Classic</option>
						<option>The Burning Crusade</option>
						<option>Wrath of the Lich King</option>
						<option>Cataclysm</option>
					</select>
				</div>
			</div>
		</div>
	)
}


export default Filter