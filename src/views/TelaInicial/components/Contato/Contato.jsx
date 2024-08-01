import "./Contato.css"

export default function Contato() {
    return (
        <section className="container-contato">

            <h2>Contato</h2>
           
            <div className="celular-contato">


            <div className="container-textos">

                <div>
                    <img src="./imgs/phone.svg" alt="Github" className="icones-contato"/>
                </div>

                <h3>Telefone:</h3>
                <p>(83) 99609-0365</p>
            </div>

            <div className="container-textos container2">

                <div>
                    <img src="./imgs/email.svg" alt="Email" className="icones-contato"/>
                </div>

                <h3>Email:</h3>
                <p>valdirsantost40@gmail.com</p>

            </div>

            <div className="container-textos">

                <div>
                    
                    <img src="./imgs/github.svg" alt="Github" className="icones-contato"/>
                </div>

                <h3>GitHub</h3>
                <p> <a href="https://github.com/valdirsantos714" target="_blank"> /valdirsantos714</a></p>

            </div>

            <div className="container-textos">

                <div>
                    
                    <img src="./imgs/linkedin.svg" alt="Linkedin" className="icones-contato"/>

                </div>

                <h3>Linkedln</h3>
                <p> <a href="https://www.linkedin.com/in/valdir-santos-8553002a4/" target="_blank">/valdirsantosdacunha </a></p>

            </div>
        </div>

            <div className="div-flex">
                <ul className="flex">
                    <li><img src="./imgs/phone.svg" alt="Github" className="icones-contato"/>
                    <h3>Telefone:</h3>
                    <p>(83) 99609-0365</p>

                    </li>
                    <li>
                        <img src="./imgs/email.svg" alt="Email" className="icones-contato"/>
                        <h3>Email:</h3>
                     <p>valdirsantost40@gmail.com</p>
                    </li>

                    <li>

                    <img src="./imgs/github.svg" alt="Github" className="icones-contato"/>
                    <h3>GitHub</h3>
                    
                    <p> <a href="https://github.com/valdirsantos714" target="_blank"> /valdirsantos714</a></p>
                    </li>

                    <li>
                    <img src="./imgs/linkedin.svg" alt="Linkedin" className="icones-contato"/>
                    <h3>Linkedln</h3>
                     <p> <a href="https://www.linkedin.com/in/valdir-santos-da-cunha-8553002a4/" target="_blank">/valdirsantosdacunha </a></p>

                    </li>
                </ul>
            </div>
            
        </section>
    )
}