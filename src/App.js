import GetTareas from "./components/GetTareas";
import EditTarea from "./components/EditTarea";
import CreateTarea from "./components/CreateTareas"

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="mt-5">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <GetTareas /> }/>
          <Route path="/create" element={ <CreateTarea /> }/>
          <Route path="/edit/:id" element={ <EditTarea /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
