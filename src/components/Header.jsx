const Header = (props) => {
  return (
    <header className="Header">
      <h1>{props.name}</h1>
      <p>{props.baseline}</p>
    </header>
  );
};

export default Header;
