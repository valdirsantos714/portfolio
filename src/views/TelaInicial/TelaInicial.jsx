import Header from "./components/Header/Header"
import "../../assets/css/reset.css"
import Banner from "./components/Banner/Banner"
import SobreMim from "./components/SobreMim/SobreMim"
import Experiencias from "./components/Experiencias/Experiencias"

export default function TelaInicial() {
    return (
        <section>
            <Header/>
            <Banner/>
            <SobreMim/>
            <Experiencias/>
        </section>
    )
}