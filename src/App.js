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
              <h2 className="m-header">Sadly, Ek Aur...</h2>
              <p className="m-paragraph">
                Dekho Ayushi, Meri English ko thoda ignore krna aur samajhne ki koshish krna.
                Umm, Last time jb bnane baitha tha to files unsaved hi reh gt thi, par is baar
                mai laptop plugin kr ke bna rha..Well, tumko is baar laptop na lana pade isliye thoda
                aur time laga, aur tum next time jb flaunt karogi to view acccha milega.Par mai to kahung 
                ek baar laptop me jaroor try krna...<br></br>
                
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