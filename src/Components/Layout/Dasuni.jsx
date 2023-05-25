import one from "../../Assets/Dasuni/img1.bmp"
import two from "../../Assets/Dasuni/img2.bmp"
import three from "../../Assets/Dasuni/img3.bmp"
import four from "../../Assets/Dasuni/img4.bmp"
import five from "../../Assets/Dasuni/img5.bmp"

import "./All.css"

const Dasuni =()=> {
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
            name:'Accuracy of previously collected data',
            image:three
        },

        {
            name:'Accuracy of previously collected data',
            image:four
        },

        {
            name:'When abnormality happens to the Device A;',
            image:five
        },
    ]
    return (
        <div className="Part-Page px-5 py-5">
            <h2>L. R. W. D. E. Rajasekara</h2>
            <h5>IT19965482</h5>

            <div className="Overviews mt-5">
                <div className="row g-0">
                    <div className="col-6 pe-5">
                        <h6>Overview</h6>
                        <p>Design a system to find the nearest node and its’ location with angle measured clockwise from north, when one user has been facing fot an abnormality, then main user(captain) needs to find those measurements and it basically use Haversine & Bearing Calculation Formular.</p>
                    </div>

                    <div className="col-6 ps-4">
                    <h6>Objectives</h6>
                        <ul>
                            <li>Track the location using GPS Module.</li>
                            <li>Find the nearest node that is closest to the device that facing for an abnormality.</li>
                            <li>Find that user with the correct direction</li>
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

export default Dasuni