import "./Educacao.css"

import { cursosAlura } from "./mocks/cursosAlura"
import { cursosUdemy } from "./mocks/cursosUdemy"
import { cursosFundacaoBradesco } from "./mocks/cursosFundacaoBradesco"
import { cursosFortecCursos } from "./mocks/cursosFortecCursos"
import { faculdade } from "./mocks/faculdade"
import { Div } from "./components/Div"

export default function Educacao() {

    return (
        <section className="container-educacao" id="educacao">
            
            <h2 id="titulo-educacao">Educação</h2>
            <div className="nomes-empresas">

                <Div srcImg={"/imgs/alura.png"} alt={"Alura logo"} h2={"Alura escola de tecnologia"} lista={cursosAlura}/>

                <Div srcImg={"/imgs/udemy.png"} alt={"Udemy logo"} h2={"Udemy Cursos online"} lista={cursosUdemy}/>

                <Div srcImg={"/imgs/fundacao-bradesco.png"} alt={"Fundação Bradesco logo"} h2={"Fundação Bradesco"} lista={cursosFundacaoBradesco}/>


                <Div alt={"Logo indisponível"} h2={"Fortec Cursos"} lista={cursosFortecCursos}/>

                <Div srcImg={"/imgs/faculdade.png"} alt={"faculdade logo"} h2={"Universidade Pitágoras Unopar Anhanguera"} lista={faculdade}/>
                
               </div>
        </section>
    )
}