import "../../Styles/Layout/Header.css";
import logo from "../../Assets/Logos/cyol_logo.png";
import toggler from "../../Assets/Icons/Toggler.png"
import Navlinks from "../Reused/Navlinks";

import { useState, useEffect, useRef } from "react";


const Header =( props )=> {
    const [scrolled, setScrolled] = useState(false);
    const [togglerExpand, setTogglerExpand] = useState(false);

    const ref = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
          if (window.pageYOffset > 50) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    
    }, []);

    const section_Finder =async( selected )=> {
        await props.scroll_Wanted(selected)
        setTogglerExpand(false)
    }

    const handdle_Form =()=> {
      props.get_Form();
    }

    const handle_ClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setTogglerExpand(false);
      };
    };

    useEffect(() => {
      document.addEventListener("mousedown", handle_ClickOutside);

      return () => {
        document.removeEventListener("mousedown", handle_ClickOutside);
      };
    });

    return (
      <div className="sticky-top Nav-Bar" ref={ref} >
        <div className={scrolled? 'Header Scrolled-Header': 'Header'}>
            <div className="mx-4 mx-sm-5 px-lg-5 Align-Header-Main">
                <div className="Brand">
                    <img src={logo} alt="CYOL logo" type="button" onClick={()=> section_Finder('home')}/>
                </div>

                <div className="Navigations-Main d-none d-md-flex">
                    <Navlinks scroll_Until={section_Finder} form_Popup={handdle_Form}/>
                </div>

                <div className="Toggler d-block d-md-none">
                    <img src={toggler} alt="" type="button" onClick={()=> setTogglerExpand(!togglerExpand)}/>
                </div>
            </div>

            <div className={scrolled?"Toggler-Menu-Mobile-Scrolled d-md-none":"Toggler-Menu-Mobile d-md-none"}>
                <div className={togglerExpand? "Expanded Toggler-Content":"Collapsed Toggler-Content"}>
                    <div className={togglerExpand?"px-4 px-sm-5 Mobile-Navigations Show-Links":"px-4 px-sm-5 Mobile-Navigations Hide-Links"}>
                      <Navlinks scroll_Until={section_Finder} form_Popup={handdle_Form}/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
}
export default Header;