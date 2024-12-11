import "./Habilidades.css"

export default function Habilidades() {
    return(
        <section className="container-habilidades" id="habilidades">
            <h2>Habilidades</h2>
            <ul>

                <li>
                    <img src="./imgs/java.svg" alt="Logo java" />
                    <h2>Java</h2>

                </li>


                <li>
                    <img className="imgs-habilidades-grandes" src="./imgs/logo spring boot.png" alt="Logo spring boot" />
                    <h2>Spring Boot</h2>

                </li>


                <li>
                    <img className="imgs-habilidades-grandes" src="./imgs/git-alt.svg" alt="Logo mysql" />
                    <h2>Git</h2>

                </li>

                <li>
                    <img src="./imgs/react.svg" alt="Logo react" className="react"/>
                    <h2>React JS</h2>

                </li>


                <li>                    
                    <img src="./imgs/typescript.png" alt="Logo typescript" />                        
                    <h2>Typescript</h2>
                </li>


                <li>
                    <img src="./imgs/js.svg" alt="Logo javascript" />
                    <h2>JavaScript</h2>
                </li>


                <li>
                    <img src="./imgs/html5.svg" alt="Logo html5" />
                    <h2>HTML</h2>

                </li>

                <li>
                    <img src="./imgs/css3.svg" alt="Logo css3" />
                    <h2>CSS</h2>

                </li>

                <li>                    
                    <img src="./imgs/oracle.svg" alt="Logo oracle" />                        
                    <h2>Oracle Database</h2>
                </li>

                <li>
                    <img  className="imgs-habilidades-grandes" src="./imgs/logo-postgresql.png" alt="Logo postgresql" />
                    <h2>PostgreSQL</h2>

                </li>

                <li>
                    <img className="imgs-habilidades-grandes" src="./imgs/mysql.png" alt="Logo mysql" />
                    <h2>MySQL</h2>

                </li>

                <li>                    
                    <img src="./imgs/aws.svg" alt="Logo AWS" />                        
                    <h2>AWS</h2>
                </li>

                <li>                    
                    <img src="./imgs/terraform.png" alt="Logo Terraform" />                        
                    <h2>Terraform</h2>
                </li>

                <li>                    
                    <img src="./imgs/ansible.png" alt="Logo ansible" />                        
                    <h2>Ansible</h2>
                </li>

                <li>                    
                    <img src="./imgs/docker.svg" alt="Logo Docker" />                        
                    <h2>Docker</h2>
                </li>

                <li>                    
                    <img src="./imgs/linux.svg" alt="Logo linux" />                        
                    <h2>Linux</h2>
                </li>
            </ul>
        </section>
    ) 
}