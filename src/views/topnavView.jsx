import "/src/style.css";


export function TopnavView(props) {
  
    return (
      <div>
        <div className="topnavSubcontainer topnavSubcontainerLeft">
          <a className="topnavLink" href="">WatchLater</a>
        </div>
        <div className="topnavSubcontainer topnavSubcontainerRight">
          <a className="topnavLink" href="">Place Holder 1</a>
          <a className="topnavLink" href="">Place Holder 2</a>
        </div>
      </div>
    );
};
