import "/src/style.css";


export function TopnavView(props) {
    // TODO: change later - should probably be a function in utils.jsx
    const imgContext = import.meta.globEager("/img/misc/watchlater-logo.png");
    const logoImage = Object.values(imgContext).map((module) => module.default)[0];

    return (
        <div className="topnavSubcontainer topnavSubcontainerLeft">
          <a className="topnavLink" href="#/search">
            <img src={logoImage} alt="WatchLater Logo" className="logoImage" />
          </a>
        </div>
    );
};
