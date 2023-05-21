import "../../Styles/Contents/ContactForm.css"
import Logo from "../../Assets/Logos/cyol_logo.png"
import InputField from "../Reused/InputField"
import { useState } from "react"
import SubmitPopup from "./SubmitPopup"


const ContactForm =( props )=> {
    const [startedTyping, setStartedTyping] = useState([false, false, false, false, false]);
    
    const [enterInputs, setEnterInputs] = useState ({
                                                        firstName:'',
                                                        lastName:'',
                                                        email:'',
                                                        company:'',
                                                        country:'',
                                                        phone:''
                                                    })

    const [submited, setSubmited] = useState(false)
    const [isSubmit, setIsSubmit] = useState(false)

    const inputs = [
        {
            name:'firstName',
            placeholder:'First Name',
            type:'name',
            pattern:'^[a-zA-Z ]+$',
            validation:'First name can only contain letters',
            error1:'* First name cannot be empty',
            error2:'* Invalid name',
            required:true
        },

        {
            name:'lastName',
            placeholder:'Last Name  *( Optional )',
            type:'name',
            pattern:'^[a-zA-Z ]+$',
            validation:'Last name can only contain letters',
            error1:'',
            error2:'* Invalid name',
            required:false
        },

        {
            name:'email',
            placeholder:'Email',
            type:'email',
            validation:'Eg : example@email.com',
            error1:'* Email cannot be empty',
            error2:'* Invalid email address',
            required:true
        },

        {
            name:'company',
            placeholder:'Company',
            type:'name',
            pattern:'^[a-zA-Z ]+$',
            validation:'',
            error1:'* Company name cannot be empty',
            error2:'* Invalid company name',
            required:true
        },

        {
            name:'country',
            placeholder:'Country  *( Optional )',
            type:'name',
            pattern:'[a-zA-Z ]+$',
            validation:'Invalid country name',
            error1:'',
            error2:'* Invalid country name',
            required:false
        },

        {
            name:'phone',
            placeholder:'Phone Number  *( Optional )',
            type:'name',
            pattern:'^[0-9+]*$',
            validation:'Phone number is not walid',
            error1:'',
            error2:'* Invalid phone number',
            required:false
        },
    ]

    const Typing_Started =( focused )=> {
        const typeStatus = [false, false, false, false, false]

        const focusType = [...typeStatus];
        focusType[focused] = true;

        setStartedTyping(focusType)
    }

    const send_FormDATA =async( event )=> {
        event.preventDefault();
        setIsSubmit(true)
    }

    const handleValidation =async()=> {
        await setSubmited(true);
        setSubmited(false)
    }

    return (
        <div className="ContactForm">
            <div className={props.Status?"Show-Form-Popup":"Hide-Form-Popup"}>
                {/* <img className="Demo-Background" src={Demo} alt="" /> */}
                <div className="Contact-Form-Box">
                    <div className="py-3 px-4 px-sm-5 Contact-Header-Background sticky-top">
                        <div className="Contact-Handler px-lg-5">
                            <img src={Logo} alt="" />

                            {props.Handler && (
                                <button onClick={props.hide_Popup}><i class="bi bi-caret-left-fill"></i> Back</button>
                            )}

                            {!props.Handler && (
                                <h6>Request a Demo</h6>
                            )}
                            
                        </div>
                    </div>

                    <div className="px-4 px-sm-5 Form-Handler py-5">
                        <div className="px-xl-5 mx-lg-5">
                        <div className="Form-Title px-md-5">
                            <h2 className="text-center">Transform your journey with our solutions and experience the power of <span>SLACOZE</span></h2>
                        </div>

                        <form onSubmit={send_FormDATA} className="px-md-5">
                            <div className="row gy-4 gx-4 pt-5">
                                {inputs.map((input, index) => (
                                    <div className="col-12 col-sm-6">
                                        <InputField 
                                            Placeholder={input.placeholder}
                                            Started_Typing={()=> Typing_Started(index)}
                                            Focused={startedTyping[index]}
                                            Type={input.type}
                                            Value={enterInputs[input.name]}
                                            Entered={(e) => setEnterInputs({...enterInputs, [input.name]:e.target.value})}
                                            Pattern={input.pattern}
                                            Validation={input.validation}
                                            Required={input.required}
                                            Submited={submited}
                                            Error1={input.error1}
                                            Error2={input.error2}
                                        />
                                    </div>
                                ))}
                            </div>
        
                            <div className="col-sm-6 Form-Submitting py-5">
                                <p className="me-4">Thank you for your interest in our product. We will be in touch with you shortly</p>
                                <button type="submit" onClick={handleValidation}>Submit Request</button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>

            {isSubmit && (
                <SubmitPopup/>
            )}
        </div>
    )
}

export default ContactForm;