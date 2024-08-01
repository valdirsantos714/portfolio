import "./Banner.css"

export default function Banner() {
    return (
        <section className="banner">
            <div className="div-texto-banner">
                <h2 className="h2-banner">Olá, meu nome é Valdir Santos, sou um <span className="destaque">desenvolvedor Fullstack</span></h2>
            </div>
            <img src="./imgs/minha_foto.jpg" alt="Minha foto" className="foto-banner"/>
        
        </section>
    )
}