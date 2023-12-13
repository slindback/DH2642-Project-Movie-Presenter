import "/src/style.css";

import { createRouter, createWebHashHistory, RouterView } from "vue-router";

import { Ads } from "/src/presenters/adsPresenter.jsx";
import { Search } from "/src/presenters/searchPresenter.jsx";
import { Sidebar } from "/src/presenters/sidebarPresenter.jsx";
import { Details } from "/src/presenters/detailsPresenter.jsx";
import { Topnav } from "/src/presenters/topnavPresenter.jsx";


export function VueRoot(props) {
    return (
      <div className="root">
        <div className="topnavContainer">
          <Topnav/>
        </div>
        <div className="mainContainer">
          <div className="sidebarContainer">
            <Sidebar model={props.model}/>
          </div>

          <div className="centerContainer">
            <RouterView/>
          </div>
          
          <div className="adsContainer">
            <Ads/>
          </div>
        </div>
      </div>
    );
};

export function makeRouter(model) {
    return createRouter({
      history: createWebHashHistory(),
      routes: [{
        path: "/",
        component: <Search model={model}/>
      },{
        path: "/search",
        component: <Search model={model}/>
      },{
        path: "/details",
        component: <Details model={model}/>
      }],
    });
};
