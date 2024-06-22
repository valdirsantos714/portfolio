import "./Experiencias.css"

export default function Experiencias() {
    return(
        <section className="container-experiencias">
            <h2>Experiências</h2>
            <div>
                <ul className="lista-experiencias">
                    <li>
                        <h3 className="h3-negrito">Caixa em Severino Motos</h3>
                        <span className="italico">Itapororoca PB <br /> Maio 2021 – Fevereiro 2024</span>
                        <p>Emprego (informal) de operador de caixa em que adquiri boas habilidades de comunicação e trabalho em equipe </p>
                    </li>
                    <li>
                        <h3 className="h3-negrito">Trabalhos autônomos </h3>
                        <span className="italico"> Itapororoca PB <br /> Maio 2023 - Presente</span>
                        <p>Logo abaixo estão alguns dos meus trabalhos autônomos que construi com fins de prática dos meus estudos em programação</p>
                    </li>
                    <li>
                        <h3 className="h3-negrito">Projeto: Api de Gerenciamento de Conta </h3>
                        <p>Uma Api simples criada com Java e Spring Boot 3 eficiente e fácil de usar para aplicações que necessitam gerenciar usuários, juntamente com suas contas e listas de produtos. </p>
                        <h3>Tecnologias Utilizadas</h3>    
                        <ul className="lista-tecnologias-experiencias">
                            <li>  
                            <img src="src/assets/imgs/java.svg" alt="" />
                            </li>
                            <img src="src/assets/imgs/logo spring boot.png" alt="" />
                            
                        </ul>
                    </li>
                    <li>
                        <h3 className="h3-negrito"></h3>
                        <span className="italico"> </span>
                        <p></p>
                    </li>
                </ul>
            </div>
        </section>
    )
}
