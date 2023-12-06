import "/src/style.css";

import Ads from "/src/presenters/adsPresenter.jsx";
import Search from "/src/presenters/searchPresenter.jsx";
import Sidebar from "/src/presenters/sidebarPresenter.jsx";
import Details from "/src/presenters/detailsPresenter.jsx";

import {
  createRouter,
  createWebHashHistory,
  RouterView
} from "vue-router";


export function VueRoot(props) {
  return (
    <div className="flexParent">
      <div className="sidebarContainer">
        <Sidebar model={props.model}/>
      </div>
      <div className="mainContainer">
        <RouterView></RouterView>
      </div>
      <div className="adsContainer">
        <Ads model={props.model}/>
      </div>
    </div>
  );
};

export function makeRouter(model) {
  return createRouter({
    history: createWebHashHistory(),
    routes: [{
      path: "/",
      component: <Search model={model}></Search>
    },{
      path: "/search",
      component: <Search model={model}></Search>
    },{
      path: "/details",
      component: <Details model={model}></Details>
    }]
  })
}
