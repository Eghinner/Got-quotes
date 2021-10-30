import React, {useState, useEffect} from 'react';
import Frase from './components/Frase.js'
import styled from '@emotion/styled';

// Styled
const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 3rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left,#b69800 0%, #b69800 40%, #735d00 100%) no-repeat;
  background-size: 262px;
  color: #fff;
  margin-top: 3rem;
  padding: .5rem 1.5rem;
  font-size: 2rem;
  border: 2px solid black;
  border-radius: 5px;
  transition: background-size .6s ease;

  &:hover{
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {

  const [quote, setQuote] = useState({})

  const consultarApi = async () => {
    const api = await fetch('https://got-quotes.herokuapp.com/quotes');
    const frase = await api.json();
    setQuote(frase);
  }

  useEffect(() => {
      consultarApi()
  }, [])


  return (
    <React.Fragment>
      <Contenedor>
        <Frase
          quote={quote}
        />
        <Boton
          /*disabled*/
          onClick={consultarApi}
        >
          Cambiar Frase
        </Boton>
      </Contenedor>
    </React.Fragment>
  )
}

export default App;