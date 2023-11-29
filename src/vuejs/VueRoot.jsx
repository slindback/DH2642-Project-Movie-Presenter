import { defineComponent } from "vue";
import Ads from "./adsPresenter.jsx";
import Search from "./searchPresenter.jsx";
import Sidebar from "./sidebarPresenter.jsx";
import Details from "./detailsPresenter.jsx";
import "/src/style.css";

export default defineComponent({
  props: {
    model: null,
  },
  setup(props) {
    return () => (
      <div class="flexParent">
        <div class="sidebar">
          <Sidebar model={props.model} />
        </div>
        <div class="mainContent">
          <div class="search">
            <Search model={props.model} />
          </div>
          <div class="ads">
            <Ads model={props.model} />
          </div>
        </div>
      </div>
    );
  },
});
