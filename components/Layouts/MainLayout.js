import Header from "../Header";
import "../../global.scss";
import ScrollAnimation from "react-animate-on-scroll";

const MainLayout = props => (
  <div>
    <Header />
    <div>{props.children}</div>
    <ScrollAnimation animateIn="fadeInUp" delay={1000} animateOnce={true}>
      <footer className="animated pulse delay-2s subtitle is-4 has-text-centered footer container has-text-info">
        &copy; Natalie Fideler {new Date().getFullYear()}{" "}
      </footer>
    </ScrollAnimation>
  </div>
);

export default MainLayout;
