import Header from "../Header";
import "../../global.scss";

const MainLayout = props => (
  <div>
    <Header />
    {props.children}
  </div>
);

export default MainLayout;
