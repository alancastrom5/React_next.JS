import Titulo from "../../../components/Titulo"

export default function usandoTitulo(){
    return (
        <div>
            <Titulo Princial="Pagina inicial"
            secundario="incluir, alterar e exluir coisas"
            />
            <Titulo Princial="Pagina de Login"
            secundario="informar email e senha"
            pequeno
            />
            <Titulo Princial="Pagina teste"
            secundario="informar teste"
            pequeno
            />
        </div>
    )
}