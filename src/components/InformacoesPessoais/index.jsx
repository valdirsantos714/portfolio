import { Div } from "../componentsGlobais/Div" 
import "./index.css"

export default function InformacoesPessoais() {
    return (
        <section className="container-info-pessoais" id="info-pessoais">
            <h2>Informações Pessoais</h2>
            <Div h3={"Nome:"} p={"Valdir Santos da Cunha"}/>
            <Div h3={"Data de Nascimento:"} p={"04/11/2004"}/>
            <Div h3={"Cidade / Estado:"} p={"Itapororoca – Paraíba"}/>
        </section>
    )
}