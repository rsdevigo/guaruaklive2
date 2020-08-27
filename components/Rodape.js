import React from "react";
import styled from "@emotion/styled";

function Rodape({ rodape }) {
  return (
    <RodapeStyled
      style={
        rodape.fundo && { ["--textura-fundo"]: `url(${rodape.fundo.url})` }
      }
    >
      <div className="container">
        <div className="rights">
          <p>{rodape.texto}</p>
        </div>
        <div className="social">
          <ul>
            {rodape.RedesSociais.map((rede) => {
              return (
                <li key={rede.id}>
                  <a href={rede.perfil}>
                    <img src={rede.icone.url} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </RodapeStyled>
  );
}

const RodapeStyled = styled.footer`
  align-items: center;
  background-image: var(--textura-fundo),
    linear-gradient(45deg, #ff9000, #ffd800);
  display: flex;
  height: 6rem;
  justify-content: center;
  margin-top: 2rem;
  padding: 3rem 0;
  .container {
    flex-direction: row;
    display: flex;
  }
  .rights {
    flex: 1 1;
    align-items: center;
    display: flex;
  }
  .social ul {
    align-items: center;
    display: flex;
    list-style: none;
    justify-content: center;
  }
  .social ul img {
    height: 2rem;
  }

  .social ul a {
    display: block;
    margin-left: 0.5rem;
  }
`;

export default Rodape;
