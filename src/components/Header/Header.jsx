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
                    <a href="#sobre-mim" className="links-header" onClick={mostrarLista}> Sobre mim</a>
                    <a href="#experiencias" className="links-header" onClick={mostrarLista}> Experiências</a>

                    <a href="#educacao" className="links-header" onClick={mostrarLista}> Educação</a>
                    
                    <a href="#projetos" className="links-header" onClick={mostrarLista}> Projetos</a> 
                </nav>
                )}

            </div>

            <div className="div-nomes-header">
                <h2 className="titulo-header">Valdir Santos </h2>
                <nav className="lista-links-header">
                <a href="#sobre-mim" className="links-header">Sobre mim</a>
                    <a href="#experiencias" className="links-header">Experiências</a>

                    <a href="#educacao" className="links-header">Educação</a>
                    
                    <a href="#projetos" className="links-header">Projetos</a> 
                </nav>
            </div>
        </header>
    )
}