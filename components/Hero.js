import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "emotion-theming";
import ReactMarkdown from "react-markdown";

function Hero({ hero }) {
  const theme = useTheme();

  const HeroStyled = styled.div`
    align-items: center;
    color: white;
    display: flex;
    flex-direction: column;
    font-weight: 300;

    height: 100vh;
    justify-content: center;
    line-height: 1.2;
    position: absolute;
    text-shadow: 1px 1px 5px rgba(0, 10, 0, 0.9);
    top: 0;
    width: 100vw;

    h1 {
      font-weight: 400;
      font-size: 1.75rem;
      width: 80vw;
      text-align: center;
    }

    p {
      font-weight: 200;
      font-size: 1.25rem;
      padding: 4rem 0;
      text-align: center;
      width: 80vw;
    }

    strong {
      color: ${theme.colors.amarelo};
    }

    @media screen and (min-width: 960px) {
      font-size: 1.5rem;

      h1 {
        font-size: 3rem;
      }

      p {
        font-size: 1.5rem;
        padding: 4rem 0;
        text-align: center;
        width: 40vw;
      }
    }
  `;

  const Button = styled.a`
    background: linear-gradient(45deg, orange 30%, #ffc43e 90%);
    border-radius: 200px;
    box-sizing: border-box;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2);
    color: white;
    display: block;
    font-size: 1rem;
    max-height: 3rem;
    font-weight: bold;
    line-height: 1.75;
    min-width: 64px;
    padding: 6px 16px;
    text-decoration: none;
    text-transform: uppercase;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  `;

  return (
    <HeroStyled>
      <ReactMarkdown source={hero.texto} />
      <Button href={hero.acao.url} className={hero.acao.estilo}>
        {hero.acao.label}
      </Button>
    </HeroStyled>
  );
}

export default Hero;
