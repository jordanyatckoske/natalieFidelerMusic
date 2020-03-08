import Header from "../Header";
import "../../global.scss";

const MainLayout = props => (
  <div>
    <Header />
    <div>{props.children}</div>
    <footer className="subtitle is-4 has-text-centered footer container has-text-info">
      &copy; Natalie Fideler {new Date().getFullYear()}{" "}
    </footer>
  </div>
);

export default MainLayout;
