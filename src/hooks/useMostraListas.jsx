export const useMostraListas = () => {
    const amostraListas = (lista) => {
        const novaLista = lista[0].split(","); //Divide a lista pela virgula

        return novaLista.map((l) => ( //Amostra a lista
            <>
                <li key={l.index}>{l}</li>
            </>
        ))
    }

    
}