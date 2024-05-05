export default function repetiacao1(){

    const listAprovados = [
        'joao',
        'maria', 
        'davi',
        'bia',
        'carlos',
        'daniel',
        'laura',
    ]

    function renderizarLista() {
        return listAprovados.map(function(nome, i){
            return <li key={i}>{nome}</li>
        })
    }
    
    return (
        <ul>
            {renderizarLista()}
        </ul>
    )
}

// function renderizarLista() {
//     const itens = [];

//     for (let i = 0; i < listAprovados.length; i++) {
//         itens.push(<li key={i}>{listAprovados[i]}</li>);
//     }

//     return <>{itens}</>;
// }


// function renderizarLista() {
//     return listAprovados.map((nome, i) => <li key={i}>{nome}</li>)
// }
