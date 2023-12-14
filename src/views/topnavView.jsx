import "/src/style.css";


export function TopnavView(props) {

    return (
      <div>
        <div className="topnavSubcontainer topnavSubcontainerLeft">
          <a className="topnavLink" href="#/search">WatchLater</a>
        </div>
        <div className="topnavSubcontainer topnavSubcontainerRight">
          <a className="topnavLink" href="#/search">PlaceHolder1</a>
          <a className="topnavLink" href="#/search">PlaceHolder2</a>
        </div>
      </div>
    );
};
