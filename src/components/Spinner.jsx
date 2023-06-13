import '../styles/Spinner.css'
import styled from '@emotion/styled'

const ContenedorSpinner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`

const Spinner = () => {
  return (
    <ContenedorSpinner>
        <div className="sk-chase">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
        </div>
    </ContenedorSpinner>
  )
}

export default Spinner
