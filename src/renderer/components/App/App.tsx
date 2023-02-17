import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import '../../assets/style/main.scss';
import Home from '../../views/Home/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
