import React from 'react';
import "./SearchBar.scss";
import searchIcon from "/images/icon-search.svg"

function SearchBar() {

    function handleSubmit() {

    }

    return (
        <section className="searchBar">
            <form action="" className='searchBar__form' onSubmit={handleSubmit}>
                <label htmlFor="location" hidden>Location</label>
                <div className="input-container">
                    <input type="text" name="location" id="location" placeholder='Search for a place...' className='searchBar__input'
                    />
                    <img src={searchIcon} alt="" className='searchBar__icon' />
                </div>

                <button type="submit">Search</button>
            </form>
        </section>
    )
}

export default SearchBar