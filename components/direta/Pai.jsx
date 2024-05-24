import Filho from "./filho";

export default function Pai(props){
    return(
        <div style={{ display: "flex", alignItems: "center" }}>
            <h1>familia {props.familia}</h1>
            <Filho nome="Pedro" familia={props.familia}/>
            <Filho nome="Joana" familia={props.familia}/>
            <Filho nome="Alice" {...props}/>
        </div>
    )
}