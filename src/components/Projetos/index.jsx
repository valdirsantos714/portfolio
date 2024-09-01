import "./index.css"

export const Projetos = () => {
    return (
        <section id="projetos">
            <div>
                <h2 id="titulo-secao">Projetos</h2>
                <ul className="lista-projetos">
                    <li className="li-projetos">
                        <a href="https://github.com/valdirsantos714/Desafio-TrilhaFullStackJR-JUN15" target="_blank" className="links-imgs-projetos">
                            <img src="/imgs/print_gerenciador_projetos.png" alt="Foto do projeto" className="imgs-projetos"/>
                        </a>
                        <h2>Desafio da Trilha Inicial FullStack Jr da empresa Codigo Certo Coders</h2>
                        <p>Um gerenciador de projetos simples,, em que os usuários podem se autenticar e adicionar, excluir, ver e atualizar seus projetos. As tecnologias utilizadas no frontend foram React JS, Vite, Context API e Typescript e no backend  foram Java 17, Spring Boot, Spring Security, Spring Web, Spring Data JPA, Lombok, Validation e PostgreSQL.</p>
                        <p className="ir-para-repositorio">Clique na imagem para ir para o repositório</p>
                    </li>
                    <li className="li-projetos">
                        <a href="https://github.com/valdirsantos714/crenteflix" target="_blank">
                            <img src="/imgs/print_crenteflix.png" alt="Foto do projeto" className="imgs-projetos"/>
                        </a>
                        <h2>Crenteflix</h2>
                        <p>Uma plataforma de streaming criada com React JS, Javascript e Tailwind CSS que permite aos usuários acessar e cadastrar filmes e séries evangélicos gratuitos.</p>
                        <p className="ir-para-repositorio">Clique na imagem para ir para o repositório</p>

                    </li>
                    <li className="li-projetos">
                        <a href="https://github.com/valdirsantos714/crenteflix-api" target="_blank">
                            <img src="/imgs/print_crenteflix_api.png" alt="Foto do projeto" className="imgs-projetos"/>
                        </a>
                        <h2>Crenteflix Api</h2>
                        <p>Uma Api criada com Java, Spring Boot, Spring Security e PostgreSQL que permite a autenticação de usuários e oferece funcionalidades para cadastrar, atualizar, deletar e buscar filmes e séries.</p>
                        <p className="ir-para-repositorio">Clique na imagem para ir para o repositório</p>

                    </li>
                    <li className="li-projetos">
                        <a href="https://github.com/valdirsantos714/plann.er" target="_blank">
                            <img src="/imgs/print_planner.png" alt="Foto do projeto" className="imgs-projetos"/>
                        </a>
                        <h2>Plann.er </h2>
                        <p>Uma simples Api criada com Java 17 e Spring Boot que permite o planejamento e gerenciamento de viagens de forma colaborativa.</p>
                        <p className="ir-para-repositorio">Clique na imagem para ir para o repositório</p>

                    </li>
                    <li className="li-projetos">
                        <a href="https://github.com/valdirsantos714/refugio-biblico" target="_blank">
                            <img src="/imgs/print_refugio_biblico.png" alt="Foto do projeto" className="imgs-projetos"/>
                        </a>
                        <h2>Refúgio Bíblico</h2>
                        <p> Site interativo que permite aos usuários ler a Bíblia e interagir com um chatbot para tirar dúvidas sobre o conteúdo bíblico, utilizando Inteligência Artificial. Tecnologias utilizadas: React JS, Tailwind CSS, IA do Gemini, React Router DOM. </p>
                        <p className="ir-para-repositorio">Clique na imagem para ir para o repositório</p>

                    </li>
                </ul>
            </div>
        </section>
    )
}