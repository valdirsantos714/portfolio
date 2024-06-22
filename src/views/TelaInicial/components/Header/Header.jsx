import { Link } from "react-router-dom"
import "./header.css"

export default function Header() {
    return (
        <header className="container-header">

            <div className="div-hamburguer">
                <input type="checkbox" name="amostra-lista" id="amostra-lista" />
                <label htmlFor="amostra-lista">
                    <span className="hamburguer"></span>
                </label>
                <nav className="lista-links-header2">
                    <a href="#sobre-mim" className="links-header">Sobre mim</a>
                    <a href="#experiencias" className="links-header">Experiências</a>

                    <a href="#educacao" className="links-header">Educação</a>
                    
                    <a href="#habilidades" className="links-header">Habilidades</a>
                </nav>
            </div>

            <div className="div-nomes-header">
                <h2 className="titulo-header">Valdir Santos </h2>
                <nav className="lista-links-header">
                <a href="#sobre-mim" className="links-header">Sobre mim</a>
                    <a href="#experiencias" className="links-header">Experiências</a>

                    <a href="#educacao" className="links-header">Educação</a>
                    
                    <a href="#habilidades" className="links-header">Habilidades</a>
                </nav>
            </div>
        </header>
    )
}