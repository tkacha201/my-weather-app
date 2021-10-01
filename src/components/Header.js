const Header = ({ title }) => {
  return (
    <header className="header">
      <link
        href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
        rel="stylesheet"
      />
      <h1>{title}</h1>
    </header>
  );
};
Header.defaultProps = {
  title: "Weather App",
};

export default Header;
