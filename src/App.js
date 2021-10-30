import React from 'react';
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
  /*background-size: 300px;*/
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: .5rem 1.5rem;
  font-size: 2rem;
  border: 2px solid black;
`;

function App() {
  return (
    <React.Fragment>
      <Contenedor>
        <Boton>
          Cambiar Frase
        </Boton>
      </Contenedor>
    </React.Fragment>
  )
}

export default App;