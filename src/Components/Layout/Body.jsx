import "../../Styles/Layout/Body.css";

import Farm1 from "../../Assets/Icons/farm1.png";
import Farm2 from "../../Assets/Icons/Farm2.png";
import Farm3 from "../../Assets/Icons/Farm3.png";
import Farm4 from "../../Assets/Icons/Farm4.png";

import About1 from "../../Assets/Images/About1.jpeg"
import About2 from "../../Assets/Images/About2.jpeg"
import About3 from "../../Assets/Images/About3.jpeg"
import About4 from "../../Assets/Images/About4.jpg"

import Point from "../../Assets/Icons/Management_Point.png"

import { useRef, useEffect, useState } from "react"

const Body =( props )=> {
    const [scrolled, setScrolled] = useState(false);

    const animate_Client_1 = useRef(null)
    const animate_Client_2 = useRef(null)
    const animate_Client_3 = useRef(null)
    const animate_Client_4 = useRef(null)
    const [show_Clients, setShow_Clients] = useState([false, false, false])

    const animate_About_1 = useRef(null)
    const animate_About_2 = useRef(null)
    const animate_About_3 = useRef(null)
    const animate_About_4 = useRef(null)
    const [show_Abouts, setShow_Abouts] = useState([false, false, false, false])

    const animate_Manage_1 = useRef(null)
    const animate_Manage_2 = useRef(null)
    const animate_Manage_3 = useRef(null)
    const animate_Manage_4 = useRef(null)
    const [show_Manages, setShow_Manages] = useState([false, false, false, false])

    const services = useRef(null)
    const about = useRef(null)

    const clients = [
                        {
                            ref:animate_Client_1,
                            title:'Forces and Military',
                            class:'Farm-Clients',
                            image:Farm1,
                            description:'Our product empowers forces and military personnel with a secure, encrypted communication network that enables seamless connectivity.'
                        },

                        {
                            ref:animate_Client_2,
                            title:'Defense Organizations',
                            class:'Enterprise-Clients',
                            image:Farm2,
                            description:'Defense organizations can leverage our product to establish ad-hoc communication networks in remote or conflict-affected regions.'
                        },

                        {
                            ref:animate_Client_3,
                            title:'Emergency Response Teams',
                            class:'Cooperative-Clients',
                            image:Farm3,
                            description:'During disaster situations or emergency response operations, our solution enables reliable communication between different response teams.'
                        },

                        {
                            ref:animate_Client_4,
                            title:'Disaster Relief Organizations',
                            class:'Cooperative-Clients',
                            image:Farm4,
                            description:'Non-governmental organizations (NGOs) and humanitarian agencies involved in disaster relief efforts can benefit from our product.'
                        },
                    ]

        const abouts = [
                        {
                            ref:animate_About_1,
                            title:'Unrivaled Encryption for Uncompromised Data Protection',
                            image:About1,
                            description:'Discover the impenetrable shield of our secure network, where end-to-end encryption guarantees the utmost protection for your sensitive data, ensuring your communication remains confidential and secure.'
                        },

                        {
                            ref:animate_About_2,
                            title:'Break Free from Dead Zones with Seamless Connectivity',
                            image:About2,
                            description:'Say goodbye to communication limitations. Our advanced technology eliminates dead zones, empowering you to stay connected even in the most remote areas, enabling seamless communication without boundaries.'
                        },

                        {
                            ref:animate_About_3,
                            title:'Adaptability Redefined: Dynamic Connections for Agile Communication',
                            image:About3,
                            description:'Embrace the power of ad-hoc flexibility. Our network effortlessly adapts to changing environments, forming instant connections without the need for centralized infrastructure.'
                        },

                        {
                            ref:animate_About_4,
                            title:'Extended Reach with Usefull Infrastructure Requirements',
                            image:About4,
                            description:'Experience the extraordinary reach of our product. Leveraging cutting-edge LoRa technology, we extend connectivity to vast areas with minimal infrastructure.'
                        }
                      ]

        const managements = [
                                {
                                    ref:animate_Manage_1,
                                    image:'',
                                    title:'Maintains a secure communication with Low powering nodes in areas with no signal',
                                    class:'Planning'
                                },

                                {
                                    ref:animate_Manage_2,
                                    image:'',
                                    title:'Nodes’ State of Charge (%) dependent LoRa Message route control System',
                                    class:'Management'
                                },

                                {
                                    ref:animate_Manage_3,
                                    image:'',
                                    title:'Make a disaster tracking algorithm and automatically identifying a disaster in the middle of a journey',
                                    class:'ViewData'
                                },

                                {
                                    ref:animate_Manage_4,
                                    image:'',
                                    title:'Track the location using GPS Module and find the nearest node that is closest to the device that facing for an abnormality',
                                    class:'LastObj'
                                }
                            ]

        const solutions = [
                            {
                                title:'Elevate Your Connectivity: Unleashing the Power of Our Advanced Solution.',
                                points: [
                                            'Unrivaled Performance',
                                            'Enhanced Features',
                                            'Future-Proof Technology'
                                        ]
                            },

                            {
                                title:'Transform Your Communication Experience: Embrace the Power of our Comprehensive Solution.',
                                points: [
                                            'All-in-One Connectivity',
                                            'Scalability and Flexibility',
                                            'Streamlined User Interface',
                
                                        ]
                            },

                            {
                                title:'Unleash the Full Potential of Your Communication: Discover Our Advanced Solution.',
                                points: [
                                            'Uncompromising Reliability',
                                            'Intelligent Integration',
                                            'Expert Support',
                                           
                                        ]
                            },

                            {
                                title:'Next-Level Communication Made Simple: Embrace the Complete Solution for Every User.',
                                points: [
                                            'Effortless Integration',
                                            'Enhanced Collaboration',
                                            'Personalized Experience'
                                        ]
                            }
                          ]

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 150) {
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

    useEffect(() => {
        if(props.Section == 'services') {
            services.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        if(props.Section == 'about') {
            about.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

    }, [props.Section]);

    useEffect(() => {
        const handleScroll = () => {
           
                if (animate_Client_1.current) {
                    const { top} = animate_Client_1.current.getBoundingClientRect();
                    const isVisible = top < window.innerHeight-80;
            
                    if (isVisible) {
                      setShow_Clients([true, false, false, false])
                    }
                }

                if (animate_Client_2.current) {
                    const { top} = animate_Client_2.current.getBoundingClientRect();
                    const isVisible = top < window.innerHeight-80;
            
                    if (isVisible) {
                      setShow_Clients([true, true, false, false])
                    }
                }

                if (animate_Client_3.current) {
                    const { top} = animate_Client_3.current.getBoundingClientRect();
                    const isVisible = top < window.innerHeight-80;
            
                    if (isVisible) {
                      setShow_Clients([true, true, true, false])
                    }
                }

                if (animate_Client_4.current) {
                    const { top} = animate_Client_3.current.getBoundingClientRect();
                    const isVisible = top < window.innerHeight-80;
            
                    if (isVisible) {
                      setShow_Clients([true, true, true, true])
                    }
                }

                if (animate_About_1.current) {
                    const { top} = animate_About_1.current.getBoundingClientRect();
                    const isVisible = top < window.innerHeight-80;
            
                    if (isVisible) {
                      setShow_Abouts([true, false, false, false])
                    }
                }

                if (animate_About_2.current) {
                    const { top} = animate_About_2.current.getBoundingClientRect();
                    const isVisible = top < window.innerHeight-80;
            
                    if (isVisible) {
                      setShow_Abouts([true, true, false, false])
                    }
                }

                if (animate_About_3.current) {
                    const { top} = animate_About_3.current.getBoundingClientRect();
                    const isVisible = top < window.innerHeight-80;
            
                    if (isVisible) {
                      setShow_Abouts([true, true, true, false])
                    }
                }

                if (animate_About_4.current) {
                    const { top} = animate_About_3.current.getBoundingClientRect();
                    const isVisible = top < window.innerHeight-80;
            
                    if (isVisible) {
                      setShow_Abouts([true, true, true, true])
                    }
                }

                if (animate_Manage_1.current) {
                    const { top} = animate_Manage_1.current.getBoundingClientRect();
                    const isVisible = top < window.innerHeight-80;
            
                    if (isVisible) {
                      setShow_Manages([true, false, false, false])
                    }
                }

                if (animate_Manage_2.current) {
                    const { top} = animate_Manage_2.current.getBoundingClientRect();
                    const isVisible = top < window.innerHeight-80;
            
                    if (isVisible) {
                      setShow_Manages([true, true, false, false])
                    }
                }

                if (animate_Manage_3.current) {
                    const { top} = animate_Manage_3.current.getBoundingClientRect();
                    const isVisible = top < window.innerHeight-80;
            
                    if (isVisible) {
                      setShow_Manages([true, true, true, false])
                    }
                }

                if (animate_Manage_4.current) {
                    const { top} = animate_Manage_3.current.getBoundingClientRect();
                    const isVisible = top < window.innerHeight-80;
            
                    if (isVisible) {
                      setShow_Manages([true, true, true, true])
                    }
                }
            
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="Body">
            <div className={scrolled? "Hero-Section Font-Scrolled mx-5 px-lg-5":"Hero-Section Font-Default mx-5 px-lg-5"}>
                <div className="Align-Hero-Contents">
                    <h1 className="text-center text-md-start"><strong>UNLOCK THE DEAD ZONES</strong></h1>
                    <h5 className="text-center text-md-start">Secure LoRa Ad-Hoc Communication Network Over the Dead Zone</h5>

                    <div className="Align-Hero-Button d-flex justify-content-center justify-content-md-start">
                        <button onClick={props.get_Form}>Request Demo</button>
                    </div>
                </div>
            </div>

            <div className="Body-Contents">
                <div className="Our-Clients py-5">
                    <div className="px-lg-5 mx-4 mx-sm-5 Align-Section">
                        <h1 className="text-center Heading-Title">OUR <span>PRODUCT</span> USERS</h1>

                        <div className="Client-Cards">
                            <div className="row gx-3 gy-5 Client-Single-Card">
                                {clients.map((client, index) => (
                                    <div className="col-md-6 col-lg-3" key={index}>
                                        <div className={client.class}>
                                            <div className="Client-Card-Image py-5">
                                                <img src={client.image} alt="" />
                                            </div>

                                            <div className={show_Clients[index]?"Client-Status Animate_Clients px-4 py-4":"Client-Status Default_Clients px-4 py-4"} ref={client.ref}>
                                                <h5>{client.title}</h5>
                                                <p>{client.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="About-CYOL" ref={about}>
                    <div className="px-lg-5 mx-4 mx-sm-5 Align-Section">
                        <h1 className="text-center Heading-Title"><strong>ABOUT <span>SLACOZE</span></strong></h1>

                        <div className="About-Cards">
                            <div className="row gx-3 gy-5">
                                {abouts.map((about, index) => (
                                    <div className="col-md-6 col-lg-3">
                                        <div className={show_Abouts[index]?"About-Card About-Scrolled":"About-Card About-Default"} ref={about.ref}>
                                            <img src={about.image} alt="" />
                                            <h5>{about.title}</h5>
                                            <p>{about.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="Crop-Management" ref={services}>
                    <div className="px-lg-5 mx-4 mx-sm-5">
                        <h1 className="text-center px-sm-5">DISCOVER THE POWER OF <span>OUR PRODUCT</span> TO UNMATCHED FEATURES</h1>
                    </div>
                </div>

                <div className="Crop-Management-Cards">
                    <div className="px-lg-5 mx-4 mx-sm-5">
                        <div className="row gx-3 gy-5">
                            {managements.map((management, index) => (
                                <div className="col-md-6 col-lg-3">
                                    <div className={show_Manages[index]?"About-Scrolled":"About-Default"} ref={management.ref}>
                                        <div className={management.class}>
                                            <div className="Align-Management-Card ps-4 pe-5 pb-3">
                                                <h3>{management.title}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="Digital-Solutions">
                    <div className="px-lg-5 mx-4 mx-sm-5">
                        <h1 className="text-center Heading-Title">COMPLETE <span>ADVANCED SOLUTION</span> FOR EVERY USER</h1>

                        <div className="row gx-4 gy-5 pt-4">
                            {solutions.map((solution, index) => (
                                <div className="col-sm-6" key={index}>
                                    <div className="Single-Solution">
                                        <img className="mb-3" src={Point} alt="" />
                                        <h5 className="ms-2">{solution.title}</h5>

                                        <ul>
                                            {solution.points.map((point) => (
                                                <li>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;