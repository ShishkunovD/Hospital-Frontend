import Header from "../Header"
import Filling from "./Filling";
import Reseptions from "./Reseptions";

const MainPage = () => {

    const logoStr = 'Приемы';

    return(
        <div className="main-page">
          <Header logoStr={logoStr} />
          <div className="main-container">
            <Filling />
            <Reseptions />
          </div>
        </div>
    )
}

export default MainPage;