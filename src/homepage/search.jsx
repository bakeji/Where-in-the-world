import React from "react";
export default function Search(props){
    return(
        <div className="search">
            <button>
            <img src="./public/search.png" alt="search-btn" />
            </button>
            
            <input type="text"
                placeholder="Search for a country..."
                onChange={props.handleChange}
                name="searchCountry"
                value={props.value}
            />
        </div>
    )
}