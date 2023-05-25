import one from "../../Assets/Sahan/img1.bmp"
import two from "../../Assets/Sahan/img2.bmp"
import three from "../../Assets/Sahan/img3.bmp"
import four from "../../Assets/Sahan/img4.bmp"
import five from "../../Assets/Sahan/img5.bmp"
import six from "../../Assets/Sahan/img6.bmp"

import "./All.css"

const Sahan =()=> {
    const data = [
        {
            name:'System Diagram',
            image:one
        },

        {
            name:'Collected Data',
            image:two
        },

        {
            name:'Data Analysis',
            image:three
        },

        {
            name:'Conclution',
            image:four
        },

        {
            name:'Sender',
            image:five
        },

        {
            name:'Reciever',
            image:six
        },
    ]
    return (
        <div className="Part-Page px-5 py-5">
            <h2>P.A.S.H. Perera</h2>
            <h5>IT19950464</h5>

            <div className="Overviews mt-5">
                <div className="row g-0">
                    <div className="col-6 pe-5">
                        <h6>Overview</h6>
                        <p>Design a system that users can communicate securely with their team  members. Intruders might not be intergrated with our network because system has periodiaclly key updating machanism using one of LoRa’s parameter.  These LoRa nodes are connected without any gateway.</p>

                        
                    </div>

                    <div className="col-6 ps-4">
                    <h6>Objectives</h6>
                        <ul>
                            <li>Develop Key Management Machanism to LoRa.</li>
                            <li>Develop Key Generating Method using previous key & previous message RSSI</li>
                            <li>Study how much dynamic the RSSI value.</li>
                            <li>Establish the communication between LoRa nodes.</li>
                        </ul>
                    </div>
                </div>

                <div>
                    {data.map((d) => (
                        <div className="Diagram-Class pt-5">
                            <h4 className="mt-5 Dig-Name mb-3">{d.name}</h4>
                            <img src={d.image} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sahan