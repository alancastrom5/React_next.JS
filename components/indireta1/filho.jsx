export default function filho(props){
    console.log(props)
    return(
        <div>
            <h1>Alalalalala</h1>
            <button onClick={props.funcao}>Falar com o Pai</button>
        </div>
    )
}