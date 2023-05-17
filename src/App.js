//import './App.css';
import layerBaseImage from './img/layer-base.png'
import layerMiddleImage from './img/layer-middle.png'
import layerFrontImage from './img/layer-front.png'
import dungeonImage from './img/dungeon.jpg'
import { useEffect } from 'react';

function App() {
 // const [showLayers, setShowLayers] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrollY = window.scrollY;
      document.documentElement.style.setProperty('--scrollTop', `${scrollY}px`);
    });

  }, []);


  
  return (
    <>
      <div className="wrapper">
        <div className="content">
          <header className="header-main">
            <div className="layers">
              <div className="layer-head">
                <div className="caption">Welcome to Parallax Web</div>
                <div className="title">Dark Forest</div>
              </div>
              <div className="img-layer layer-base" style={{backgroundImage:`url(${layerBaseImage})`}}></div>
              <div className="img-layer layer-mid" style={{backgroundImage:`url(${layerMiddleImage})`}}></div>
              <div className="img-layer layer-front" style={{backgroundImage:`url(${layerFrontImage})`}}></div>
            </div>
          </header>
          <article className="article-main" style={{ backgroundImage: `url(${dungeonImage})` }}>
            <div className="article-content">
              <h2 className="m-header">To Be Continued...</h2>
              <p className="m-paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br></br>
                
              </p>
            </div>
            
  
            <div className="copy">
              UTKARSH YADAV
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default App;
