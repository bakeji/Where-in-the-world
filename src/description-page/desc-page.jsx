import React from "react";
import BackBtn from "./back-btn";
import Info from "./info";
import Header from "../homepage/header";
import { useParams } from "react-router-dom";

export default function DescPage(props){
    const {countryName} =useParams()
    const selectedCountry = props.allCountries.find(
        (country) => (country.country) === countryName
      )
    return(
        <div className="desc-page">
            <Header 
            darkMode ={props.darkMode}
            toggleDarkMode ={props.toggleDarkMode}
            />
            <BackBtn />
            <Info 
              country ={selectedCountry}
              />
        </div>
    )

}