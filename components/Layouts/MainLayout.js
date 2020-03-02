import Header from "../Header";
import "../../global.scss";

const MainLayout = props => (
  <div>
    <Header />
    <main className="container">{props.children}</main>
    <footer className="has-text-centered footer container">
      &copy; Natalie Fideler {new Date().getFullYear()}{" "}
    </footer>
  </div>
);

export default MainLayout;
