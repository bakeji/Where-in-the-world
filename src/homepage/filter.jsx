import React from "react";
export default function Filter (props){
    return(
        <div className="drp-dwn">
           <select
           onChange={props.handleChange}
           value={props.value}
            placeholder="Filter by region"
             name="filter" 
             id="Filter">
             <option value=""> Filter by region</option> 
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            
           </select>
        </div>
    )
}