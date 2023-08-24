"use client";

import React from 'react'
import { SearchManufacturer } from '.';
import { useState } from 'react';
type Props = {}

const SearchBar = (props: Props) => {

	const [manufacturer,setManufacturer] = useState('');

	const handleSearch = () => { }

	return (
		<form
			action=""
			className='searchbar'
			onSubmit={handleSearch}
		>
			<div className="searchbar__item">
				<SearchManufacturer 
					manufacturer={manufacturer}
					setManufacturer={setManufacturer}
				/>
			</div>
		</form>
	)
}

export default SearchBar