
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Calendar from './components/Calendar';

function App() {
  return (
    <>
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/calendar' element={<Calendar />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
