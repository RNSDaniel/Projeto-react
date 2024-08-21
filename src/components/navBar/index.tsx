interface Props {
  valor: number;
}

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="Pesquisa">
        <form action="">
          <img
            src="https://static.kabum.com.br/conteudo/icons/logo.svg"
            alt=""
          />
          <input type="text" placeholder="Aperte o K e busque aqui" />
          <button>Pesquisar</button>
        </form>
      </div>
      <div>
        <ul className="listaMenu">
          <li>
            <a href="">MONTE SEU PC</a>
          </li>
          <li>
            <a href="">OFERTA DO DIA</a>
          </li>
          <li>
            <a href="">CUPONS</a>
          </li>
          <li>
            <a href="">ENTREGA FLASH</a>
          </li>
          <li>
            <a href="">BAIXE O APP</a>
          </li>
          <li>
            <a href="">PRIME NINJA</a>
          </li>
          <li>
            <a href="">KBM GAMING</a>
          </li>
          <li>
            <a href="">MULHERES NO GAME</a>
          </li>
          <li>
            <a href="">APERTE O K!</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
