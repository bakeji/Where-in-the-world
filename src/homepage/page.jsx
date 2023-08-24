import React,{useEffect, useState} from "react";
import Header from "./header";
import Search from "./search";
import Filter from "./filter";
import Countries from "./countries";

export default function Page(props){
    const [showElements, setShowElements]=useState(false)
    const [filteredCountries, setFilteredCountries]=useState([])
    const [inputValue, setInputValue]=useState({
        searchCountry:"",
        filter: ""
    })

    function handleChange(event){
        setInputValue(prevState=>{
            return{
            ...prevState,
            [event.target.name]:event.target.value
    }})
    setShowElements(true)
    }

    useEffect(()=>{
        if(showElements===true){
            const filterCountries=props.allCountries.filter((countries)=>{
                return(countries.country.toLowerCase().includes(inputValue.searchCountry.toLowerCase()) 
                && countries.region.includes(inputValue.filter))   
            })
        setFilteredCountries(filterCountries)
        }
    
    },[inputValue])
    

    
    return(
        <div>
            <Header
            toggleDarkMode={props.toggleDarkMode}
            darkMode ={props.darkMode}
            />
            <div className="input"> 
                <Search 
                handleChange ={handleChange}
                value ={inputValue.searchCountry}
                />
                <Filter
                value={inputValue.filter} 
                handleChange={handleChange}
                />
            </div>

          <Countries 
          allCountries={showElements? filteredCountries : props.allCountries}
          darkMode ={props.darkMode}
          />

        </div>
    )
}