import { useState } from "react"


const Search = ({onSearch}) => {

	const [search, setSearch] = useState('')

	const initSearch = (e)=> {
		setSearch(e.target.value)
	}

	return (
		<div className="search">
			<input type="text" value={search} onInput={initSearch} />
		</div>
	)
}

export default Search