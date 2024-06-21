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
                    <Link  className="links-header">Sobre mim</Link>
                    <Link className="links-header">Experiências</Link>
                    <Link className="links-header">Educação</Link>
                    <Link className="links-header">Habilidade</Link>
                </nav>
            </div>

            <div className="div-nomes-header">
                <h2 className="titulo-header">Valdir Santos </h2>
                <nav className="lista-links-header">
                    <Link  className="links-header">Sobre mim</Link>
                    <Link className="links-header">Experiências</Link>
                    <Link className="links-header">Educação</Link>
                    <Link className="links-header">Habilidade</Link>
                </nav>
            </div>
        </header>
    )
}