import "../../Styles/Reused/Navbutton.css"

const Navbutton =( props )=> {

    const press_Action =()=> {
        if(props.Action) {
            console.log("hello")
        }
    }

    return (
        <div className="Navbutton" type="button" onClick={press_Action}>
            <div className={props.Styler}>
                <h2>{props.Button.title}</h2>
            </div>
        </div>
    )
}

export default Navbutton;