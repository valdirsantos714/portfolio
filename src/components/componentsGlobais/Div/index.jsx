import "./index.css"

export const Div = ({srcImg, alt, h3, p, link}) => {
    return (
        <div className="container-textos">

                <div>
                    <img src={srcImg} alt={alt} className="icones-contato"/>
                </div>

                <h3>{h3}</h3>
                <p>{p}</p>
            </div>
    )
}