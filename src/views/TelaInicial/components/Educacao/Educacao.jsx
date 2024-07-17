import "./Educacao.css"

export default function Educacao() {

    const cursosAlura = ["Spring Boot 3: aplique boas práticas e proteja uma API Rest, React: construindo componentes com JSX,JavaScript: conhecendo arrays,React: construíndo componentes com JSX,React: desenvolvendo em React Router com JavaScript,PostgreSQL: desenvolva com PL/pgSQL Java: consumindo API gravando arquivos e lidando com erros, JavaScript: programando a Orientação a Objetos, JavaScript: validações e reconhecimento de voz, Lógica de programação: mergulhe em programação com JavaScript, Html e CSS: Responsividade com Mobile-First, CSS: Flexbox e Layouts Responsivos,HTML E CSS: Trabalhando com Responsividade e Publicação de Projetos, PostgreSQL"];

    const cursosUdemy = ["Git Completo: Do Básico ao Avançado, Java COMPLETO Programação Orientada a Objetos + Projetos"]

    const cursosFundacaoBradesco = ["Linguagem de Programação Java - Avançado, Linguagem de Programação Java - Básico, Fundamentos de Lógica de Programação"]

    const cursosFortecCursos = ["Operador de Micro, Liderança"]

    const faculdade = ["Bacharelando em Sistemas de Informação"]

    const amostraListas = (lista) => {
        const novaLista = lista[0].split(","); //Divide a lista pela virgula

        return novaLista.map((l) => ( //Amostra a lista
            <>
                <li>{l}</li>
            </>
        ))
    }

    return (
        <section className="container-educacao" id="educacao">
            
            <h2 id="titulo-educacao">Educação</h2>
            <div className="nomes-empresas">
                <div className="amostra-lista-educacao">
                {/* Cursos da alura*/}
                    <input type="checkbox" id="input-amostra-lista-educacao1" className="inputs-educacao"/>
                    <label  htmlFor="input-amostra-lista-educacao1">
                        <img src="./imgs/alura.png" alt="Alura logo" className="logos-educacao"/>
                        <h2>Alura escola de tecnologia</h2>
                        <p>Clique para ver os cursos que fiz nesta empresa</p>
                    </label>

                    <ul className="nomes-cursos-educacao">
                        {amostraListas(cursosAlura)}
                    </ul>
                </div>

                {/* Cursos da udemy*/}
                <div className="amostra-lista-educacao">

                    <input type="checkbox" id="input-amostra-lista-educacao2" className="inputs-educacao"/>
                    <label htmlFor="input-amostra-lista-educacao2">
                        <img src="./imgs/udemy.png" alt="Alura logo" className="logos-educacao"/>
                        <h2>Udemy Cursos online</h2>
                        <p>Clique para ver os cursos que fiz nesta empresa</p>

                    </label>

                    <ul className="nomes-cursos-educacao">
                        {amostraListas(cursosUdemy)}
                    </ul>
                </div>
                {/* Cursos do bradesco*/}
                

                <div className="amostra-lista-educacao">

                    <input type="checkbox" id="input-amostra-lista-educacao3" className="inputs-educacao"/>

                    <label htmlFor="input-amostra-lista-educacao3">
                        <img src="./imgs/fundacao-bradesco.png" alt="Alura logo" className="logos-educacao"/>
                        <h2>Fundação Bradesco</h2>
                        <p>Clique para ver os cursos que fiz nesta empresa</p>

                    </label>

                    <ul className="nomes-cursos-educacao">
                        {amostraListas(cursosFundacaoBradesco)}
                    </ul>
                </div>
                
                {/* Cursos do fortec cursos*/}
                <div className="amostra-lista-educacao">

                    <input type="checkbox" id="input-amostra-lista-educacao4" className="inputs-educacao"/>
                    <label htmlFor="input-amostra-lista-educacao4">
                        <p>Logo indisponivel</p>
                        <h2>Fortec Cursos</h2>
                        <p>Clique para ver os cursos que fiz nesta empresa</p>

                    </label>

                    <ul className="nomes-cursos-educacao">
                        {amostraListas(cursosFortecCursos)}
                    </ul>
                </div>

                {/* Faculdade*/}
                <div className="amostra-lista-educacao">

                    <input type="checkbox" id="input-amostra-lista-educacao5" className="inputs-educacao"/>
                    
                    <label htmlFor="input-amostra-lista-educacao5">
                        <img src="./imgs/faculdade.png" alt="Alura logo" className="logos-educacao"/>
                        <h2>Universidade Pitágoras Unopar Anhanguera</h2>
                        <p>Clique para ver qual faculdade estou cursando</p>

                    </label>

                    <ul className="nomes-cursos-educacao">
                        {amostraListas(faculdade)}
                    </ul>
               </div>
               </div>
        </section>
    )
}