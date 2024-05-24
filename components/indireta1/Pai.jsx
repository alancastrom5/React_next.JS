import Filho from "./filho";

export default function Pai(props){

    function falarComigo(param){
        console.log(param)
        console.log("alguem falou comigo")
    }

    return(
        <div>
            <Filho funcao={falarComigo}/>
        </div>
    )
}