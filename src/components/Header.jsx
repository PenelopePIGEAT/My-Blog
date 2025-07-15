import Title from "./Title";
import Baseline from "./Baseline";

const Header = () => {
  return (
    <header className="header">
      <Title name={"Développeur Web Full Stack"} />
      <Baseline
        baseline={
          "Je conçois des sites internet et des applications mobiles modernes et réactives"
        }
      />
    </header>
  );
};

export default Header;
