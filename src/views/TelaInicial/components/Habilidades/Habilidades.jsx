import "./Habilidades.css"

export default function Habilidades() {
    return (
        <section className="container-habilidades" id="habilidades">
            <h2>Habilidades</h2>
            <ul>
                <li>
                    <img src="./imgs/js.svg" alt="Logo javascript" />
                
                </li>

                <li>
                    <img src="./imgs/java.svg" alt="Logo java" />
                </li>

                <li>
                    <img src="./imgs/react.svg" alt="Logo react" />
                </li>

                <li>
                    <img className="imgs-habilidades-grandes" src="./imgs/logo spring boot.png" alt="Logo spring boot" />
                </li>

                <li>
                    <img  className="imgs-habilidades-grandes" src="./imgs/logo-postgresql.png" alt="Logo postgresql" />
                </li>

                <li>
                    <img className="imgs-habilidades-grandes" src="./imgs/mysql.png" alt="Logo mysql" />
                </li>

                <li>
                    <img src="./imgs/html5.svg" alt="Logo html5" />
                </li>

                <li>
                    <img src="./imgs/css3.svg" alt="Logo css3" />
                </li>

            </ul>
        </section>
    )
}