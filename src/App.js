import './App.css';
import {Route, Routes} from "react-router-dom";
import {Home} from "./components/Home";
import {Biography} from "./components/painter/Biography";
import Painting from "./components/painter/Painting";
import PaintingList from "./components/painter/PaintingList";
import {Menu} from "./components/Menu";
import PaintingLayout from "./components/painter/PaintingLayout";
import Paint from "./components/painter/Paint"
import NewPaint from "./components/painter/NewPaint";
import EditPaint from "./components/painter/EditPaint";

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
                <Route path="/paintinglist" element={<PaintingLayout/>}>
                    <Route index element={<PaintingList/>}/>
                    <Route path=":id" element={<Paint/>}/>
                    <Route path="newpaint" element={<NewPaint/>}/>
                    <Route path="edit/:id" element={<EditPaint/>}/>
                    {/*<Route index element={<PaintingList/>}/>*/}
                    {/*<Route index element={<PaintingList/>}/>*/}

                </Route>
            </Routes>
        </main>
      </div>
  );
}

export default App;
