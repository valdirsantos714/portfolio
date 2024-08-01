import "./Contato.css"
import { Div } from "./components/Div"

export default function Contato() {
    return (
        <section className="container-contato">

            <h2>Contato</h2>
           
            <div className="celular-contato">

            <Div srcImg={"/imgs/phone.svg" } alt={"Telefone"} h3={"Telefone:"} p={"(83) 99609-0365"}/>

            <Div srcImg={"/imgs/email.svg"  } alt={"Email"} h3={"Email:"} p={"valdirsantost40@gmail.com"}/>

            <Div srcImg={"/imgs/github.svg" } alt={"github"} h3={"GitHub:"} p={<a href="https://github.com/valdirsantos714" target="_blank"> /valdirsantos714</a>}/>

            <Div srcImg={"/imgs/linkedin.svg" } alt={"linkedin"} h3={"Linkedin:"} p={<a href="https://www.linkedin.com/in/valdir-santos-8553002a4/" target="_blank">/valdirsantosdacunha </a>}/>

            
            
        </div>

            <div className="div-flex">
                <ul className="flex">
                    <li>            
                        <Div srcImg={"/imgs/phone.svg" } alt={"Telefone"} h3={"Telefone:"} p={"(83) 99609-0365"}/>


                    </li>
                    <li>
                        <Div srcImg={"/imgs/email.svg"  } alt={"Email"} h3={"Email:"} p={"valdirsantost40@gmail.com"}/>
                    </li>

                    <li>

                        <Div srcImg={"/imgs/github.svg" } alt={"github"} h3={"GitHub:"} p={<a href="https://github.com/valdirsantos714" target="_blank"> /valdirsantos714</a>}/>
                    </li>

                    <li>
                    <Div srcImg={"/imgs/linkedin.svg" } alt={"linkedin"} h3={"Linkedin:"} p={<a href="https://www.linkedin.com/in/valdir-santos-8553002a4/" target="_blank">/valdirsantosdacunha </a>}/>

                    </li>
                </ul>
            </div>
            
        </section>
    )
}