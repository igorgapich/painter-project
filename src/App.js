import './App.css';
import {Route, Routes} from "react-router-dom";
import {Home} from "./components/Home";
import {Biography} from "./components/painter/Biography";
import {Painting} from "./components/painter/Painting";
import {PaintingList} from "./components/painter/PaintingList";
import {Menu} from "./components/Menu";

function App() {
    return (
      <div className="App">
        <header className="App-header">
            <h1>Леонардо да Вінчі</h1>
            <Menu/>
        </header>
        <main>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/biography" element={<Biography/>}/>
                <Route path="/painting" element={<Painting/>}/>
                <Route path="/paintinglist" element={<PaintingList/>}/>
            </Routes>
        </main>
      </div>
  );
}

export default App;
