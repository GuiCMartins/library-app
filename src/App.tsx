import './App.css';
import { ExploreTopBooks } from './layouts/HomePage/ExploreTopBooks';
import { Carousel } from './layouts/HomePage/Carousel';
import { Navbar } from './layouts/NavbarAndFooter';
import { Heros } from './layouts/HomePage/Heros';
import { LibraryServices } from './layouts/HomePage/LibraryServices';

function App() {
  return (
    <>
      <Navbar />
      <ExploreTopBooks />
      <Carousel />
      <Heros />
      <LibraryServices />
    </>
  );
}

export default App;
