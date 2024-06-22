import "./Educacao.css"

export default function Educacao() {
    return (
        <section className="container-educacao">
            <h2 id="titulo-educacao">Educação</h2>

                <div className="amostra-lista-educacao">
                {/* Cursos da alura*/}
                    <input type="checkbox" id="input-amostra-lista-educacao1" className="inputs-educacao"/>
                    <label  htmlFor="input-amostra-lista-educacao1">
                        <img src="src/assets/imgs/alura.png" alt="Alura logo" className="logos-educacao"/>
                        <h2>Alura escola de tecnologia</h2>
                        <p>Clique para ver os cursos que fiz nesta empresa</p>
                    </label>

                    <ul className="nomes-cursos-educacao">
                        <li>React: desenvolvendo em React Router com JavaScript</li>

                        <li>PostgreSQL: desenvolva com PL/pgSQL</li>

                        <li>Java: consumindo API, gravando arquivos e lidando com erros</li>

                        <li>JavaScript: programando a Orientação a Objetos
                        </li>

                        <li>JavaScript: validações e reconhecimento de voz</li>

                        <li>Lógica de programação: mergulhe em programação com JavaScript</li>

                        <li>Html e CSS: Responsividade com Mobile-First</li>

                        <li>CSS: Flexbox e Layouts Responsivos</li>

                        <li>CSS: Flexbox e Layouts Responsivos</li>

                        <li>HTML E CSS: Trabalhando com Responsividade e Publicação de Projetos</li>

                        <li>PostgreSQL</li>
                    </ul>
                </div>

                {/* Cursos da udemy*/}
                <div className="amostra-lista-educacao">

                    <input type="checkbox" id="input-amostra-lista-educacao2" className="inputs-educacao"/>
                    <label htmlFor="input-amostra-lista-educacao2">
                        <img src="src/assets/imgs/udemy.png" alt="Alura logo" className="logos-educacao"/>
                        <h2>Udemy Cursos online</h2>
                        <p>Clique para ver os cursos que fiz nesta empresa</p>

                    </label>

                        <ul className="nomes-cursos-educacao">
                            <li>Git Completo: Do Básico ao Avançado</li>
                            <li>Java COMPLETO Programação Orientada a Objetos + Projetos</li>
                        </ul>
                </div>
                {/* Cursos do bradesco*/}
                

                <div className="amostra-lista-educacao">

                    <input type="checkbox" id="input-amostra-lista-educacao3" className="inputs-educacao"/>

                    <label htmlFor="input-amostra-lista-educacao3">
                        <img src="src/assets/imgs/fundacao-bradesco.png" alt="Alura logo" className="logos-educacao"/>
                        <h2>Fundação Bradesco</h2>
                        <p>Clique para ver os cursos que fiz nesta empresa</p>

                    </label>

                    <ul className="nomes-cursos-educacao">
                        <li>Linguagem de Programação Java - Avançado </li>

                        <li>Linguagem de Programação Java - Básico </li>

                        <li>Fundamentos de Lógica de
                        Programação</li>
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
                        <li>Operador de Micro </li>
                        
                        <li>Liderança</li>
                    </ul>
                </div>

                {/* Faculdade*/}
                <div className="amostra-lista-educacao">

                    <input type="checkbox" id="input-amostra-lista-educacao5" className="inputs-educacao"/>
                    
                    <label htmlFor="input-amostra-lista-educacao5">
                        <img src="src/assets/imgs/faculdade.png" alt="Alura logo" className="logos-educacao"/>
                        <h2>Universidade Pitágoras Unopar Anhanguera</h2>
                        <p>Clique para ver qual faculdade estou cursando</p>

                    </label>

                    <ul className="nomes-cursos-educacao">
                        <li>Bacharelando em Sistemas de Informação </li>
                    </ul>
               </div>
            
        </section>
    )
}