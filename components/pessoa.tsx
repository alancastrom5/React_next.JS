interface PessoaPros{
    nome: string,
    idade?: number
}

export default function Pessoas (props: PessoaPros){
    return(
        <div>
            <div>Nome: {props.nome}</div>
            <div>Idade: {props.idade?? "nao informado"}</div>
        </div>
    )
}