import "../../Styles/Reused/Navlinks.css";

const Navlinks =( props )=> {
    return (
        <div className="Navlinks d-flex flex-column flex-md-row">
            <button className="ms-lg-5" onClick={()=> props.scroll_Until('home')}>Home</button>
            <button className="ms-lg-5" onClick={()=> props.scroll_Until('services')}>Features</button>
            <button className="ms-lg-5" onClick={()=> props.scroll_Until('about')}>About Us</button>
            <button className="ms-lg-5" onClick={props.form_Popup}>Request Demo</button>
        </div>
    )
}

export default Navlinks;