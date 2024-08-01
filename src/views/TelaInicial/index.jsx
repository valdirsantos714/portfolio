import Header from "../../components/Header/Header"
import Banner from "../../components/Banner/Banner"
import SobreMim from "../../components/SobreMim/SobreMim"
import Experiencias from "../../components/Experiencias/Experiencias"
import Habilidades from "../../components/Habilidades/Habilidades"
import Educacao from "../../components/Educacao/Educacao"
import Contato from "../../components/Contato/Contato"
import Footer from "../../components/Footer/Footer"

export default function TelaInicial() {
    return (
        <section>
            <Header/>
            <Banner/>
            <SobreMim/>
            <Contato/>
            <Experiencias/>
            <Habilidades/>
            <Educacao/>
            <Footer/>
        </section>
    )
}