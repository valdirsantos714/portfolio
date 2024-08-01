import "./Experiencias.css"

export default function Experiencias() {
    return(
        <section className="container-experiencias" id="experiencias">
            <h2>Experiências</h2>
            <div className="div-lista-experiencias">
                <ul className="lista-experiencias">
                    <li className="bordas1">
                        <h3 className="h3-negrito">Caixa em Severino Motos</h3>
                        <span className="italico">Itapororoca PB <br /> Maio 2021 – Fevereiro 2024</span>
                        <p>Emprego (informal) de operador de caixa em que adquiri boas habilidades de comunicação e trabalho em equipe </p>
                    </li>
                    <li className="bordas1">
                        <input type="checkbox" id="amostra-lista-experiencia" />
                        <label htmlFor="amostra-lista-experiencia">
                            <h3 className="h3-negrito">Trabalhos autônomos </h3>
                            <span className="italico"> Itapororoca PB <br /> Maio 2023 - Presente</span>
                            <p>Clique para ver alguns dos meus trabalhos autônomos que construi</p>
                        </label>
                        <ul className="projetos-experiencia">
                            <li className="bordas">
                            <h3 className="h3-negrito">Projeto: Refúgio Bíblico </h3>
                            <p>Site interativo que permite aos usuários ler a Bíblia e interagir com um chatbot para tirar dúvidas sobre o conteúdo bíblico, utilizando Inteligência Artificial. </p>
                            <h3 className="h3-negrito">Tecnologias Utilizadas:</h3>    
                            <p>React JS, Tailwind CSS, IA do Gemini, React Router DOM.</p>
                            <a href="https://refugio-biblico.netlify.app/" target="_blank">Clique aqui para ver o projeto</a>
                            </li>

                            <li className="bordas">
                            <h3 className="h3-negrito">Projeto: Plann.er </h3>
                            <p>Api que permite o planejamento e gerenciamento de viagens de forma colaborativa. </p>
                            <h3 className="h3-negrito">Tecnologias Utilizadas:</h3>    
                            <p>Java 17, Spring Boot, Spring Data JPA, Spring Web, Lombok, Validation, Spring Boot DevTools, Flyway, Maven, PostgreSQL.</p>
                            <a href="https://github.com/valdirsantos714/plann.er" target="_blank">Clique aqui para ver o projeto</a>
                            </li>

                            <li className="bordas">
                            <h3 className="h3-negrito">Projeto: Api de Rede Social </h3>
                            <p>Api para redes sociais, na qual os usuários podem fazer postagens e interagir com elas através de comentários </p>
                            <h3 className="h3-negrito">Tecnologias Utilizadas:</h3>    
                            <p>Java 17, Spring Boot, MySQL, Maven, Spring Data JPA</p>
                            <a href="https://github.com/valdirsantos714/social-network-ApiRestFul" target="_blank">Clique aqui para ver o projeto</a>
                            </li>

                            <li className="bordas">
                            <h3 className="h3-negrito">Projeto: Api de Gerenciamento de Conta</h3>
                            <p>Api para que permite gerenciar estoques de produtos e o cadastro de pessoas no sistema através de contas. </p>
                            <h3 className="h3-negrito">Tecnologias Utilizadas:</h3> 
                            <p>Java 17, Spring Boot, Spring Data JPA, Spring Web, Lombok, Validation, Maven, MySQL.</p>
                            <a href="https://github.com/valdirsantos714/account-management-api" target="_blank">Clique aqui para ver o projeto</a>   
                            </li>
                        </ul>
                    </li>
                    
     
                </ul>
            </div>
        </section>
    )
}
