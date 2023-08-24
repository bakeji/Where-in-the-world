import React, {useEffect, useState}from "react";
import {  Route, Routes, BrowserRouter } from 'react-router-dom';
import Page from "./homepage/page";
import DescPage from "./description-page/desc-page";

export default function App(){
  const [allCountries, setAllCountries]=useState([])
  const [darkMode, setDarkMode] = useState(false)

  function toggleDarkMode(){
    setDarkMode(prevMode=>!prevMode)
  }

  function fetchAllCountries(){
      fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then((countriesArray)=>{
          const newCountriesArray=countriesArray.map((everyCountry)=>{
           let capital = everyCountry.capital;

            if (capital && capital.length > 1) {
                capital = capital.join(", ");
            }

              return{
                  country: everyCountry.name.common,
                  population:everyCountry.population,
                  region:everyCountry.region,
                  capital:everyCountry.capital,
                  flag:everyCountry.flags.png,
                  alt: everyCountry.flags.alt,
                  nativeName:everyCountry.name.nativeName,
                 population: everyCountry.population,
                  currencies: everyCountry.currencies,
                  subRegion: everyCountry.subregion,
                   languages:everyCountry.languages,
                  capital: capital,
                  borderCountries: everyCountry.borders,
                  tld:everyCountry.tld,
                  region: everyCountry.region          
              }
             
          })
         
          setAllCountries(newCountriesArray)
        
      })
  }
          useEffect(()=>{
              fetchAllCountries()
          })

  return(
  <div className={`app ${darkMode? "dark":""}`}>
    <BrowserRouter>
      <Routes>
        <Route 
        path="/" element={<Page 
        allCountries={allCountries}
        toggleDarkMode={toggleDarkMode}
        darkMode ={darkMode}
        />}/>
        <Route path="/desc-page/:countryName" element = {<DescPage
        allCountries={allCountries}
        darkMode ={darkMode}
        toggleDarkMode ={toggleDarkMode}
        />}/>
      </Routes>
    </BrowserRouter>
  
  </div>
  )
}