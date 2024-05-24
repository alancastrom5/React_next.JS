export default function contadorDisplay(props){
    return(
        <div style={{
            display: "flex",
            justifyContent:"center",
            alignItems: "center",
            height: "50px",
            width: "50px",
            borderRadius: "100px",
            backgroundColor: "red",
            color: "#fff",
            fontSize: "2rem",
            margin: "20px",
        }}>
            {props.numero}
        </div>
    )
}