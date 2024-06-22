import "./Experiencias.css"

export default function Experiencias() {
    return(
        <section className="container-experiencias">
            <h2>Experiências</h2>
            <div>
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
                            <h3 className="h3-negrito">Projeto: Api de Gerenciamento de Conta </h3>
                            <p>Uma Api simples criada com Java e Spring Boot 3 eficiente e fácil de usar para aplicações que necessitam gerenciar usuários, juntamente com suas contas e listas de produtos. </p>
                            <h3>Tecnologias Utilizadas</h3>    
                            <div className="lista-tecnologias-experiencias">
                                
                                <img src="./imgs/java.svg" alt="Java logo" className="imgs-experiencia"/>
                                
                                <img src="./imgs/logo spring boot.png" alt="logo spring boot" className="imgs-experiencia"/>
                            
                            </div>
                            </li>

                            <li className="bordas">
                            <h3 className="h3-negrito">Projeto: AluraBooks </h3>
                            <p>Um simples site de venda de livros de programação. </p>
                            <h3>Tecnologias Utilizadas</h3>    
                            <div className="lista-tecnologias-experiencias">
                                  
                                <img src="./imgs/js.svg" alt="logo javascript" className="imgs-experiencia"/>
                                
                                <img src="./imgs/html5.svg" alt="Logo html5" className="imgs-experiencia"/>
                                 
                                <img src="./imgs/css3.svg" alt="Logo css 3" className="imgs-experiencia"/>
                                
                            
                            </div>
                            </li>

                            <li className="bordas">
                            <h3 className="h3-negrito">Projeto: Api de Rede Social </h3>
                            <p>Api para redes sociais, na qual os usuários podem fazer postagens e interagir com elas através de comentários </p>
                            <h3>Tecnologias Utilizadas</h3>    
                            <div className="lista-tecnologias-experiencias">
                                  
                                <img src="./imgs/java.svg" alt="Java logo" className="imgs-experiencia"/>
                                
                                <img src="./imgs/logo spring boot.png" alt="logo spring boot" className="imgs-experiencia"/>
                            
                            </div>
                            </li>

                            <li className="bordas">
                            <h3 className="h3-negrito">Projeto: Calculadora de Imc </h3>
                            <p>O aplicativo oferece umainterface simples e fácil de se usar, através dele é possível calcular seu Imc facilmente </p>
                            <h3>Tecnologias Utilizadas</h3>    
                            <div className="lista-tecnologias-experiencias">
                                  
                                <img src="./imgs/js.svg" alt="Javscript logo" className="imgs-experiencia"/>
                                
                                <img src="./imgs/react.svg" alt="React logo" className="imgs-experiencia"/>
                            
                            </div>
                            </li>
                        </ul>
                    </li>
                    
     
                </ul>
            </div>
        </section>
    )
}
