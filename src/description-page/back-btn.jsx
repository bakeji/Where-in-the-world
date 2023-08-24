import React from "react";
import { Link, useNavigate } from "react-router-dom"; 

export default function BackBtn(){

    const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}
    return(
        
        <button onClick={goBack} className="back-btn">
            
            <img src="/arrow-left2.png" alt="back-arrow" />
            Back
            
        </button>
    )
}