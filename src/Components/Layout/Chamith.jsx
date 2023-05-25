import one from "../../Assets/Chamith/img1.png"
import two from "../../Assets/Chamith/img2.png"
import three from "../../Assets/Chamith/img3.png"
import four from "../../Assets/Chamith/img4.png"
import five from "../../Assets/Chamith/img5.jpg"


import "./All.css"

const Chamith =()=> {
    const data = [
        {
            name:'System Diagram',
            image:one
        },

        {
            name:'How the system works',
            image:two
        },

        {
            name:'Getting acceleration data',
            image:three
        },

        {
            name:'Calculations',
            image:four
        },

        {
            name:'Checking heart beat and other enviornmental data',
            image:five
        },
    ]

    return (
        <div className="Part-Page px-5 py-5">
            <h2>G. A. C. Hirushan</h2>
            <h5>IT19091594</h5>

            <div className="Overviews mt-5">
                <div className="row g-0">
                    <div className="col-6 pe-5">
                        <h6>Overview</h6>
                        <p>The project involves the development of an abnormalities tracking algorithm, along with the creation of hardware to collect environmental data. The algorithm will analyze the data gathered by the hardware and predict outcomes based on predefined tracking logics.</p>

                        
                    </div>

                    <div className="col-6 ps-4">
                    <h6>Objectives</h6>
                        <ul>
                            <li>Developed am abnormalities tracking algorithm</li>
                            <li>Made a hardware to get enviornmental data</li>
                            <li>Predicted datas according to tracking logics</li>
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

export default Chamith