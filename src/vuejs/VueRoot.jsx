import Ads from "./adsPresenter.jsx";
import Search from "./searchPresenter.jsx";
import Sidebar from "./sidebarPresenter.jsx";
//import Details from "./detailsPresenter.jsx";
import "/src/style.css";


export function VueRoot(props) {
  return (
    <div className="flexParent">
      <div className="sidebar">
        <Sidebar model={props.model} />
      </div>
      <div className="mainContent">
        <div className="search">
          <Search model={props.model} />
        </div>
        <div className="ads">
          <Ads model={props.model} />
        </div>
      </div>
    </div>
  );
};
