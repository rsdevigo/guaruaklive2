import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import clsx from "clsx";

function Cabecalho({ redeSocial, logo, menu, fundo }) {
  const ContainerStyled = styled.div`
    align-items: center;
    display: flex;
    width: 80vw;

    @media screen and (min-width: 960px) {
      margin: 0 auto;
      width: 80vw;
    }
  `;

  const RedesSociaisStyled = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    justify-content: center;
  `;

  const ContainerImagem = styled.div`
    background: url(${fundo}) no-repeat center center fixed;
    background-attachment: fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    display: flex;
    height: 100vh;
    width: 100vw;
  `;

  const OverlayStyled = styled.div`
    a {
      text-decoration: none;
    }

    .button {
      background: linear-gradient(45deg, orange 30%, #ffc43e 90%);
      border-radius: 200px;
      box-sizing: border-box;
      box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2);
      color: white;
      display: block;
      font-size: 1rem;
      max-height: 3rem;
      font-weight: bold;
      letter-spacing: 1px;
      line-height: 1.75;
      margin: 2rem;
      min-width: 64px;
      padding: 6px 16px;
      text-decoration: none;
      text-transform: uppercase;
      transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    }

    transition: all ease-in-out 0.3s;
  `;

  const CabecalhoStyled = styled.header`
    background: transparent;
    box-shadow: 0 -17px 10px 20px rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    height: 4rem;
    left: 0;
    position: fixed;
    z-index: 9999;
    transition: all ease-in-out 0.3s;
    width: 100vw;

    h1 {
      flex: 1;
    }

    h1 > img {
      height: 2.75rem;
    }

    .overlay {
      align-self: center;
      background: rgba(0, 0, 0, 0.9);
      display: flex;
      height: 100%;
      justify-content: center;
      right: 0;
      position: fixed;
      top: 0;
      transition: all ease-in-out 0.3s;
      width: 0%;
      z-index: 9999;
    }

    .closed {
      width: 0;
    }

    .closed .close,
    .closed a {
      display: none;
    }

    .open {
      color: white;
      width: 100vw;
    }

    .open .close,
    .open a {
      display: block;
    }

    .mobileMenuToggle {
      background: url(${menu.iconeAbrir.url}) no-repeat no-repeat center center;
      background-size: 80%;
      cursor: pointer;
      height: 2rem;
      width: 40px;
    }

    nav ul,
    ul.midiasSociais {
      align-items: center;
      display: flex;
      justify-content: center;
      list-style: none;
    }

    nav ul {
      flex-direction: column;
    }

    ul.midiasSociais a {
      cursor: pointer;
      display: block;
      padding-right: 1rem;
    }

    ul.midiasSociais a > img {
      height: 2rem;
    }

    nav {
      align-items: center;
      display: flex;
      justify-content: center;
    }

    ul {
      list-style: none;
    }

    .link-button,
    nav a {
      color: rgba(255, 255, 255, 0.8);
      cursor: pointer;
      display: block;
      font-size: 1.5rem;
      font-weight: bold;
      letter-spacing: 5px;
      padding: 1rem 0;
      text-transform: uppercase;
    }

    .link-button,
    nav a::after {
      content: "";
      display: block;
      width: 0;
      height: 4px;
      background: var(--laranja);
      transition: width 0.2s;
    }

    .link-button,
    nav a:hover::after {
      width: 100%;
    }

    .link-button {
      border: none;
      background: none;
    }

    .dicLinkMenu {
      margin-top: 2rem;
    }

    .dicLinkMenu::after {
      background: none;
    }

    .close {
      background: url(${menu.iconeFechar.url}) no-repeat no-repeat center center;
      background-size: 30%;
      cursor: pointer;
      height: 2rem;
      position: absolute;
      right: -0.5rem;
      top: 1.5rem;
      width: 100px;
      transition: all ease-in-out 0.3s;
    }

    &.roll {
      background: linear-gradient(
        350deg,
        rgba(25, 63, 41, 0.95),
        rgba(17, 70, 17, 0.95)
      );
    }

    &.normal {
      background: transparent;
    }
  `;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const [open, setOpen] = useState(false);
  const [headerClass, setHeaderClass] = useState("normal");

  function handleScroll(evt) {
    if (window.scrollY > 65) {
      setHeaderClass("roll");
    } else {
      setHeaderClass("normal");
    }
  }

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <ContainerImagem>
      <CabecalhoStyled className={clsx(headerClass, "container")}>
        <ContainerStyled>
          <h1>
            <img className="logo" src={logo.url} alt="Logotipo do Guaruak" />
          </h1>

          <OverlayStyled className={clsx(open ? "open" : "closed", "overlay")}>
            <div onClick={handleMenu} className="close"></div>

            <nav>
              <ul>
                {menu.links.map((item) => (
                  <li key={item.id}>
                    <a className={item.estilo} href={item.url}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </OverlayStyled>

          <RedesSociaisStyled className="midiasSociais">
            {redeSocial.map((rede, index) => (
              <li key={`rede-${index}`}>
                <a href={rede.perfil}>
                  <img
                    src={rede.icone.url}
                    alt={`Ícone para a rede ${rede.rede}`}
                  />
                </a>
              </li>
            ))}
          </RedesSociaisStyled>

          <div onClick={handleMenu} className="mobileMenuToggle"></div>
        </ContainerStyled>
      </CabecalhoStyled>
    </ContainerImagem>
  );
}

export default Cabecalho;
