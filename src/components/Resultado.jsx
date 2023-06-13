import styled from "@emotion/styled"

const ResultadoDiv = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;

    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`

const Imagen = styled.img`
    display: block;
    width: 130px;
`

const Texto = styled.p`
    font-size: 15px;
    span {
        font-weight: 700;
    }
`

const Precio = styled.p`
    font-size: 25px;
    span {
        font-weight: 700;
    }
`

const Resultado = ({cotizacion}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGE24HOUR, IMAGEURL, LASTUPDATE} = cotizacion
  return (
    <ResultadoDiv>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen cripto" />
        <div>
            <Precio>El precio es de: <span>{PRICE}</span></Precio>
            <Texto>El precio mas alto d el dia: <span>{HIGHDAY}</span></Texto>
            <Texto>El precio mas bajo del dia: <span>{LOWDAY}</span></Texto>
            <Texto>Variacion ultimas 24 horas: <span>{CHANGE24HOUR}</span></Texto>
            <Texto>Ultima actualizacion: <span>{LASTUPDATE}</span></Texto>           
        </div>
    </ResultadoDiv>
  )
}

export default Resultado
