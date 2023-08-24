import React from "react";
import { Link } from "react-router-dom";
export default function Countries(props){
    
    return(
        <div className="countries">
            {props.allCountries.map((countries)=>(

                <div key={countries.country} className="country">
                    <img src={countries.flag} alt={countries.alt} className="flag" />
                 <Link  
                 style={{textDecoration:"none", marginLeft: "0", color:"#111517"}}
                  to={`./desc-page/${countries.country}`} > 
                 <h3 className="country-name">{countries.country}</h3></Link>
                    <div className="prc">
                        <p><span>Population: </span>{countries.population}</p>
                        <p><span>Region: </span>{countries.region}</p>
                        <p><span>Capital: </span>{countries.capital}</p>
                    </div>
                </div>
                ))}
            
            
            
        </div>
    )
}