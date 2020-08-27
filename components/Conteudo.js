import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "emotion-theming";
import ReactMarkdown from "react-markdown";

function Conteudo({ conteudo }) {
  const theme = useTheme();

  const ConteudoStyled = styled.div`
    display: grid;
    grid-template-areas:
      "extincao-linguas"
      "falantes"
      "historia"
      "essencia";

    .extincao-linguas {
      background: var(--fundo-extincao-linguas) no-repeat 50%;
      align-items: center;
      display: flex;
      grid-area: extincao-linguas;
      height: 350px;
      justify-content: center;
      padding: 0 10vw;

      p {
        strong {
          font-size: 3rem;
        }

        em {
          color: ${theme.colors.verde};
          font-style: normal;
          font-weight: bold;
        }
      }
    }

    .extincao-linguas p {
      font-size: 2rem;
      text-align: center;
    }

    .falantes {
      background: linear-gradient(
          90deg,
          rgba(0, 0, 0, 1) 0%,
          rgba(0, 0, 0, 0) 40%
        ),
        var(--fundo-falantes) no-repeat no-repeat 75% 10px fixed;
      background-size: 280%;
      background-attachment: fixed;
      grid-area: falantes;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      padding: 5rem 10vw;
    }

    .falantes p {
      border-bottom: solid 10px ${theme.colors.amarelo};
      color: rgba(255, 255, 255, 0.9);
      font-size: 2rem;
      font-weight: 300;
      padding-bottom: 1rem;
      text-align: left;
      width: 40%;
    }

    .historia {
      grid-area: historia;
    }
    .essencia {
      grid-area: essencia;
    }

    .historia,
    .essencia {
      padding: 10vw;
      position: relative;
      background-color: #f5f5f5;
    }

    .historia h1::before,
    .essencia h1::before {
      background-size: 85%;
      content: ".";
      position: absolute;
      width: 10px;
      height: 4rem;
      left: 10vw;
      display: block;
      text-indent: -9999px;
    }

    .essencia h1::before {
      background: var(--icone-essencia) no-repeat no-repeat center center;
      background-size: 85%;
    }

    .historia h1::before {
      background: var(--icone-historia) no-repeat no-repeat center center;
      background-size: 85%;
    }

    .essencia p,
    .historia p {
      font-size: 1rem !important;
      line-height: 1.5;
      text-align: left;
    }

    .essencia h1,
    .historia h1 {
      font-size: 0.75rem;
      font-weight: 900;
      text-transform: uppercase;
      padding-left: 1rem;
    }

    .essencia h2,
    .historia h2 {
      color: ${theme.colors.laranja};
      font-size: 2.3rem;
      font-weight: 900;
      text-transform: uppercase;
      padding-left: 1rem;
    }

    @media screen and (min-width: 600px) {
      grid-template-areas:
        "extincao-linguas extincao-linguas"
        "falantes falantes"
        "historia essencia";
      grid-template-rows: auto auto auto;
      grid-template-columns: 1fr 1fr;
    }
  `;

  const constroiSecao = (secao) => (
    <div
      key={secao.id}
      className={secao.identificacao}
      style={
        (secao.fundo && {
          [`--fundo-${secao.identificacao}`]: `url(${secao.fundo.url}`,
        }) ||
        (secao.icone && {
          [`--icone-${secao.identificacao}`]: `url(${secao.icone.url}`,
        })
      }
    >
      {secao.titulo && <h1>{secao.titulo}</h1>}
      {secao.subtitulo && <h2>{secao.subtitulo}</h2>}
      <ReactMarkdown source={secao.texto} />
    </div>
  );

  return (
    <ConteudoStyled>
      {conteudo.secoes.map((secao) => {
        return constroiSecao(secao);
      })}
    </ConteudoStyled>
  );
}

export default Conteudo;
