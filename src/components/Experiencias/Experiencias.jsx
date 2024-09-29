import "./Experiencias.css"

export default function Experiencias() {
    return(
        <section className="container-experiencias" id="experiencias">
            <h2>Experiências</h2>
            <div className="div-lista-experiencias">
                <ul className="lista-experiencias">

                    <li className="bordas1">

                        <h3 className="h3-negrito">Desenvolvedor Full Stack Voluntário na Codigo Certo Coders <br /> <span className="italico">Remoto, Meio Período</span>
                        </h3>

                        <span className="italico">Agosto 2024 – Setembro 2024</span>

                        <p>Desenvolvo e mantenho aplicações back-end, garantindo a eficiência do servidor, usando Java, Spring Boot e Spring Security. <br /> Crio e executo testes automatizados para assegurar a qualidade do software, utilizando JUnit e Mockito. <br /> Participo de revisões de código, garantindo boas práticas de desenvolvimento.  <br /> Colaboro com o time de Front-End, auxiliando na implementação de interfaces, integrações, responsividade, usabilidade e performance, utilizando React JS, Javascript, Typescript e Tailwind CSS.</p>
                    </li>

                    <li className="bordas1">
                        
                        <h3 className="h3-negrito">
                            Trabalhos autônomos <br /><span className="italico">Remoto</span>
                        </h3>
                        <span className="italico"> Itapororoca PB <br /> Maio 2023 - Presente</span>
                        <p>Implemento soluções completas e integradas, desde o frontend até o backend. <br /> Utilizo tecnologias como React JS, TypeScript, Tailwind CSS, HTML, CSS no desenvolvimento de interfaces modernas e responsivas. No backend, uso Java, Spring Boot, Spring Security, e arquitetura de microservices para criar APIs robustas e escaláveis. <br /> Implemento e gerencio bancos de dados como PostgreSQL e MySQL, e utilizo ferramentas de versionamento como Git.
                        </p>
                    </li>                    

                    <li className="bordas1">
                        <h3 className="h3-negrito">Caixa em Severino Motos <br /> <span className="italico">Presencial, Tempo Integral</span>
                        </h3>
                        <span className="italico">Itapororoca PB <br /> Maio 2021 – Fevereiro 2024</span>
                        <p>Emprego (informal) de operador de caixa em que adquiri boas habilidades de comunicação e trabalho em equipe <br />
                        Desenvolvi habilidades excepcionais em atendimento ao cliente, comunicação, trabalho em equipe, resiliência, gestão de caixa, e resolução de problemas em tempo real. <br /> Experiência em lidar com transações financeiras de maneira precisa e eficiente, garantindo sempre a satisfação dos clientes.<br />  Experiência em ter a capacidade de manter a calma sob pressão e por colaborar efetivamente com a equipe para otimizar as operações diárias. <br />
                        Experiência em trabalho em equipe, atendimento ao cliente, comunicação, proatividade, gestão de tempo, resiliência.
                        </p>
                    </li>

                </ul>
            </div>
        </section>
    )
}
