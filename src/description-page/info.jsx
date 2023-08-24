import React from "react";

export default function Info(props){
    // get the common vale from the nativename object
   const key = props.country.nativeName
    const keyName = (Object.values(key)[0])
    
// get all the language value from the language objet
    const langKey=props.country.languages
    const langValue =(Object.values(langKey)).join(", " )

// get the currency name from the currenies object
    const curKey = props.country.currencies
    const curValue =(Object.values(curKey)[0])

    
    return(
        <div key={props.country.country} className="info">
            <div className="flags">
                <img src={props.country.flag} alt="" />
            </div>

            <div className="flx-group">
                <div className="group1">
                    <div className="group1a">
                        <h1>{props.country.country}</h1>
                        <p><span>Native Name:</span> {keyName.common}</p>
                        <p><span>Population:</span> {props.country.population}</p>
                        <p><span>Region:</span> {props.country.region}</p>
                        <p><span>Sub Region:</span> {props.country.subRegion}</p>
                        <p><span>Capital:</span> {props.country.capital}</p>
                    </div>

                    <div className="group1b">
                        <p><span>Top Level Domain:</span> {props.country.tld}</p>
                        <p><span>Currencies:</span> {curValue.name}</p>
                       <p><span>Languages:</span> {langValue}</p>
                    </div>

                </div>

                <div className="group2">
                    <span>Border Countries:</span>
                    <div>
                    {props.country.borderCountries? props.country.borderCountries.map((border=>(
                    <>
                    <p>{border}</p>
                    </>
                    
                    ))):(<p>N/A</p>)}
                    </div>
                </div>
            </div>
        </div>
    )
}