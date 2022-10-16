import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';

const imagesApp = {
  home: {
    desktop: "/assets/home/background-home-desktop.jpg",
    tablet: "/assets/home/background-home-tablet.jpg",
    mobile: "/assets/home/background-home-mobile.jpg"
  },
  destination: {
    desktop: "/assets/destination/background-destination-desktop.jpg",
    tablet: "/assets/destination/background-destination-tablet.jpg",
    mobile: "/assets/destination/background-destination-mobile.jpg"
  },
  crew: {
    desktop: "/assets/crew/background-crew-desktop.jpg",
    tablet: "/assets/crew/background-crew-tablet.jpg",
    mobile: "/assets/crew/background-crew-mobile.jpg"
  },
  technology: {
    desktop: "/assets/technology/background-technology-desktop.jpg",
    tablet: "/assets/technology/background-technology-tablet.jpg",
    mobile: "/assets/technology/background-technology-mobile.jpg"
  }
}

function App() {

  const location = useLocation()

  function setBackground(desktop, tablet, mobile) {
    document.body.style.setProperty("--desktop", `url(${desktop})`);
    document.body.style.setProperty("--tablet", `url(${tablet})`);
    document.body.style.setProperty("--mobile", `url(${mobile})`);
  }
  
  if (location.pathname === "/") {
    setBackground(imagesApp.home.desktop, imagesApp.home.tablet, imagesApp.home.mobile)
  } else if (location.pathname === "/destination") {
    setBackground(imagesApp.destination.desktop, imagesApp.destination.tablet, imagesApp.destination.mobile)
  } else if (location.pathname === "/crew") {
    setBackground(imagesApp.crew.desktop, imagesApp.crew.tablet, imagesApp.crew.mobile)
  } else if (location.pathname === "/technology") {
    setBackground(imagesApp.technology.desktop, imagesApp.technology.tablet, imagesApp.technology.mobile)
  }

  return (
    <div className="App">
      
      <header>
        <NavBar />
      </header>

      <main>
        <Outlet />
      </main>

    </div>
  );
}

export default App;
