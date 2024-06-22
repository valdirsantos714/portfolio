import "./Habilidades.css"

export default function Habilidades() {
    return (
        <section className="container-habilidades">
            <h2>Habilidades</h2>
            <ul>
                <li>
                    <img src="src/assets/imgs/js.svg" alt="Logo javascript" />
                
                </li>

                <li>
                    <img src="src/assets/imgs/java.svg" alt="Logo java" />
                </li>

                <li>
                    <img src="src/assets/imgs/react.svg" alt="Logo react" />
                </li>

                <li>
                    <img className="imgs-habilidades-grandes" src="src/assets/imgs/logo spring boot.png" alt="Logo spring boot" />
                </li>

                <li>
                    <img  className="imgs-habilidades-grandes" src="src/assets/imgs/logo-postgresql.png" alt="Logo postgresql" />
                </li>

                <li>
                    <img className="imgs-habilidades-grandes" src="src/assets/imgs/mysql.png" alt="Logo mysql" />
                </li>

                <li>
                    <img src="src/assets/imgs/html5.svg" alt="Logo html5" />
                </li>

                <li>
                    <img src="src/assets/imgs/css3.svg" alt="Logo css3" />
                </li>

            </ul>
        </section>
    )
}