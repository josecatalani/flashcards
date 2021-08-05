import React, { FC } from "react";
import Link from "next/link";

const Header: FC = () => {
  return (
    <>
      <ul>
        <li>
          <Link href="/p/jose">
            <a>Perfil do José</a>
          </Link>
        </li>
        <li>
          <Link href="/configs">
            <a>Configurações</a>
          </Link>
        </li>
        <li>
          <Link href="/home">
            <a>Home logada</a>
          </Link>
        </li>
        <li>
          <Link href="/perfil">
            <a>Meu perfil</a>
          </Link>
        </li>
        <li>
          <Link href="/726373/virus-e-tudo-mais">
            <a>Deck</a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
