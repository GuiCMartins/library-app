import './App.css';
import { ExploreTopBooks } from './layouts/HomePage/ExploreTopBooks';
import { Carousel } from './layouts/HomePage/Carousel';
import { Navbar } from './layouts/NavbarAndFooter';

function App() {
  return (
    <>
      <Navbar />
      <ExploreTopBooks />
      <Carousel />
    </>
  );
}

export default App;
