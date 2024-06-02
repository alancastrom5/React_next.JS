import Pessoa from "../../../components/pessoa";

export default function exemploTs() {
    return (
        <div>
            <Pessoa nome="Joao" idade={30}/>
            <Pessoa nome="maria"/>
        </div>
    )
}