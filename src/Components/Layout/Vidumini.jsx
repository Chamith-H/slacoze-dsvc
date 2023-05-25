import one from "../../Assets/Vidu/img1.bmp"
import two from "../../Assets/Vidu/img2.bmp"
import three from "../../Assets/Vidu/img3.bmp"
import four from "../../Assets/Vidu/img4.bmp"

import "./All.css"

const Vidumini =()=> {
    const data = [
        {
            name:'System Diagram',
            image:one
        },

        {
            name:'Used Formulars',
            image:two
        },

        {
            name:'Collected Data',
            image:three
        },

        {
            name:'In Device Battery Low situation occurs:',
            image:four
        },
    ]
    return (
        <div className="Part-Page px-5 py-5">
            <h2>W. p. V. T. Wikramarathna</h2>
            <h5>IT19970264</h5>

            <div className="Overviews mt-5">
                <div className="row g-0">
                    <div className="col-6 pe-5">
                        <h6>Overview</h6>
                        <p>Designing a system to Nodes’ State of Charge (SoC %) dependent LoRa Message route control. Here each device has their own SoC% measuring system and it check those values are above or below the threshold value. And the system includes an important alert passing process. This can help avoid the link failures due to the low battery power.</p>

                        
                    </div>

                    <div className="col-6 ps-4">
                    <h6>Objectives</h6>
                        <ul>
                            <li>Designing a system to Nodes’ State of Charge (SoC %) dependent LoRa Message route control. </li>
                            <li>Develop a method to get the state of charge(V) of Li-Ion Battery</li>
                            <li>Check the threshold conditions for message path selection</li>
                            <li>Pass the special message for the other devices and recharge </li>
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

export default Vidumini