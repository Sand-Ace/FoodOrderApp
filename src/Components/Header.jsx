import logo from "../assets/logo.jpg";
import Button from "./UI/Button";

const Header = () => {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="Food order logo" />
        <h1>Food order app</h1>
      </div>
      <nav>
        <Button textOnly>Cart ( 1 )</Button>
      </nav>
    </header>
  );
};

export default Header;
