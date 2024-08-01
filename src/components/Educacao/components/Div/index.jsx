import { useState } from "react"
import "./index.css"

export const Div = ({srcImg, alt, h2, lista}) => {

    const [isTrue, setIsTrue] = useState(false)

    const setValor = () => {
        setIsTrue(prevState => !prevState);
        
    }

    const amostraListas = (lista) => {
        const novaLista = lista[0].split(","); //Divide a lista pela virgula

        return novaLista.map((l) => ( //Amostra a lista
            <>
                <li key={l.index}>{l}</li>
            </>
        ))
    }

    return (
        <>
        
                <div className="amostra-lista-educacao" >
                {/* Cursos da alura*/}
                    
                <img src={srcImg} alt={alt}className="logos-educacao"/>
                <h2>{h2}</h2>
                <p style={{padding: "1rem"}}onClick={setValor}>Clique para ver os cursos que fiz nesta empresa</p>
                    
                {isTrue && (
                    <ul className="nomes-cursos-educacao" >
                        {amostraListas(lista)}
                    </ul>
                )}
                    
                </div>
           
                </>
    )

}