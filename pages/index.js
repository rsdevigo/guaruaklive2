import Head from "next/head";
import styled from "@emotion/styled";
import fetch from "isomorphic-unfetch";
import Cabecalho from "../components/Cabecalho";
import Hero from "../components/Hero";
import Conteudo from "../components/Conteudo";
import Equipe from "../components/Equipe";
import Rodape from "../components/Rodape";

export default function Home(props) {
  const HomeStyled = styled.header`
    h1 {
      color: red;
      font-size: 10rem;
    }

    p {
      color: green;
      font-style: italic;
    }
  `;
  return (
    <div>
      <Head>
        <title>{props.geral.nomeApp}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Cabecalho
        redeSocial={props.geral.RedesSociais}
        logo={props.geral.LogoApp}
        menu={props.menu}
        fundo={props.hero.fundo.url}
      />

      <Hero hero={props.hero} />
      <Conteudo conteudo={props.conteudo} />
      <Equipe equipe={props.equipe} />
      <Rodape rodape={props.rodape} />
    </div>
  );
}

export async function getStaticProps(context) {
  const geralRes = await fetch("https://guaruak.herokuapp.com/geral");
  const geral = await geralRes.json();

  const geralMenu = await fetch("https://guaruak.herokuapp.com/menu");
  const menu = await geralMenu.json();

  const heroRes = await fetch("https://guaruak.herokuapp.com/hero");
  const hero = await heroRes.json();

  const conteudoRes = await fetch("https://guaruak.herokuapp.com/conteudo");
  const conteudo = await conteudoRes.json();

  const equipeRes = await fetch("https://guaruak.herokuapp.com/equipe");
  const equipe = await equipeRes.json();

  const rodapeRes = await fetch("https://guaruak.herokuapp.com/rodape");
  const rodape = await rodapeRes.json();

  return {
    props: {
      geral,
      menu,
      hero,
      conteudo,
      equipe,
      rodape,
    },
  };
}
