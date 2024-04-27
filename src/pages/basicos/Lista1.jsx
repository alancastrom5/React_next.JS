function gerar(final = 10){
    const lista = []
    for(let i = 1; i <= final; i++){
        lista.push(<span>{i},<br></br></span>)
    }
    return lista
}



export default function primeiro_exercio(){
    /* Primeira forma*/
    return (
        <div>
        {gerar(1000)} 
        </div>
    )
}

    /* segunda

function segunda_tentativa(){
    const numbers = '1,2,3,4,5,6,7,8,9,10'
    return <span>{numbers}</span>
}

*/

    /* terceira */

