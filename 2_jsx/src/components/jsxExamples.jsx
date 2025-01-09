import React from 'react'

const Exemplojsx = () => {
    const name = "Aline";

    const creator = {
        criador: "Gabriel",
        data: "08/01/205",
    };

  return (
    <div>
        <h2>{name} Web.</h2>
        <h3>Projeto Criado por {creator.criador} no dia {creator.data}</h3>
    </div>
  )
}

export default Exemplojsx;