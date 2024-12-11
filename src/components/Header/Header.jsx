import { useState } from "react"
import "./header.css"

export default function Header() {

    const [isTrue,setIsTrue] = useState(false)

    const mostrarLista = () => {
        setIsTrue(prevState => !prevState);
    }
    return (
        <header className="container-header">

            <div className="div-celular">
                
                <img className="hamburguer" src="/imgs/barras.svg" onClick={mostrarLista}/>
                
                {isTrue && (
                <nav className="lista-links-header2">
                    <a href="#sobre-mim" className="links-header tag-a-pc" onClick={mostrarLista}> Sobre mim</a>

                    <a href="#info-pessoais" className="links-header tag-a-pc" onClick={mostrarLista}> Informações Pessoais</a>

                    <a href="#experiencias" className="links-header" onClick={mostrarLista}> Experiências</a>

                    <a href="#habilidades" className="links-header" onClick={mostrarLista}> Habilidades</a>

                    <a href="#projetos" className="links-header" onClick={mostrarLista}> Projetos</a>

                    <a href="#educacao" className="links-header" onClick={mostrarLista}> Educação</a>
                    
                    

                </nav>
                )}

            </div>

            {/*Header Desktop */}
            <div className="div-nomes-header">
                <h2 className="titulo-header">Valdir Santos </h2>
                <nav className="lista-links-header">
                    <a href="#sobre-mim" className="links-header tag-a-pc">Sobre mim</a>

                    <a href="#info-pessoais" className="links-header tag-a-pc"> Informações Pessoais</a>
                    
                    <a href="#experiencias" className="links-header tag-a-pc">Experiências</a>

                    <a href="#habilidades" className="links-header tag-a-pc"> Habilidades</a>

                    <a href="#projetos" className="links-header tag-a-pc">Projetos</a>

                    <a href="#educacao" className="links-header tag-a-pc">Educação</a>
 
                </nav>
            </div>
        </header>
    )
}