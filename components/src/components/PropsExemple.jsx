import React from "react";

const PropsExemple = ({nome, criador}) =>{ 
  return (
    <div>
        <h1>{nome} Web.</h1>
        <p> Criado por {criador}.</p>
    </div>
  );
};

export default PropsExemple;