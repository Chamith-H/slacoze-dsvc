import "../../Styles/Layout/Footer.css"
import Logo from "../../Assets/Logos/cyol_logo.png"

const Footer =( props )=> {
    return (
        <div className="Footer">
            <div className="mx-lg-5 px-5">
                <div className="row gx-4 gy-5">
                    <div className="col-md-12 col-lg-3 px-md-5 px-lg-0 Footer-Brand d-flex justify-content-center justify-content-lg-start align-items-center">
                        <img className="Footer-Logo mb-4" src={Logo} alt="" />
                    </div>

                    <div className="col-md-9 col-lg-7 Footer-Address">
                        <p><i class="bi bi-geo-alt-fill"></i>SLIIT Malabe campus <br></br>New Kandy road, Malabe</p>
                        <p><i class="bi bi-envelope-at-fill"></i>info@Slacozeglobal.com</p>
                    </div>

                    <div className="col-md-3 col-lg-2 Navigation-Footer d-flex flex-column align-items-center align-items-md-end">
                        <h5>Quick Links</h5>
                        <p type="button" onClick={() => props.scroll_Wanted('services')}>Features</p>
                        <p type="button" onClick={() => props.scroll_Wanted('about')}>About us</p>
                        <p type="button" onClick={props.get_Form}>Request Demo</p>
                    </div>

                    <div className="col-12 Footer-End">
                        <p className="text-center">Copyright &copy; 2023 SLACOZE. All Rights Reserved</p>
                
                        {/* 
                        <div className="Social-Icons d-flex pb-3 pb-md-0">
                            <div className="Icon-Background">
                                <h6><i class="bi bi-linkedin"></i></h6>
                            </div>

                            <div className="Icon-Background">
                                <h6><i class="bi bi-facebook"></i></h6>
                            </div>

                            <div className="Icon-Background">
                                <h6><i class="bi bi-twitter"></i></h6>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;