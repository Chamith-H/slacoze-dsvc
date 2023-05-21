import "../../Styles/Contents/SubmitPopup.css"
import LogoPopup from "../../Assets/Logos/cyol_logo.png"

import { useEffect, useState } from "react";

const SubmitPopup =()=> {
    const [animater, setAnimater] = useState(true)
    const [view, setView] = useState(true)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setAnimater(false);
        }, 3000);
          return () => clearTimeout(timeoutId);
    }, []);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const request = params.get('request');
        
        if (request != null && request == 1) {
          setView(false)
        }
    }, []);

    return (
        <div className="SubmitPopup">
            {animater && (
                <div class="circle">
                    <img src={LogoPopup} alt="" />
                </div>
            )}
            
            {!animater && (
                <div className="Submit-Alert px-4 px-sm-5 py-4">
                    <h6 className="text-center">Thanks for submitting</h6>
                    <p className="text-center">Our team will be in touch shortly to schedule your demo and provide you with all the necessary information.</p>
                    <a href={view?"":""}><button className="mt-1">Proceed to SLACOZE</button></a>
                </div>
            )}
        </div>
    )
}

export default SubmitPopup;