import React, { useState, useContext } from 'react'
import { CiSearch } from "react-icons/ci";
import './SearchBar.css';
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';

function SearchBar() {

    const [searchValue, setSearchValue] = useState('');

    const {name} = useContext(AppContext);

    const handleSearch = async (event) => {
        event.preventDefault();
        
        const products = await fetchProducts (searchValue);
        console.log(products);
        setSearchValue('');
    };

    return (  
        <form className='search-bar' onSubmit={handleSearch}>
            {name}
            <input type="search" value={searchValue} placeholder="Buscar Produtos" className="search__input" onChange={(target) => setSearchValue(target.value)} required/> 
                {searchValue}
            <button type="submit" className="search__button"><CiSearch /></button>
        </form>
    );
}

export default SearchBar;