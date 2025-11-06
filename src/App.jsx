import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GradProject from './pages/GradProject'
import MachineLearning from './pages/MachineLearning';

function App() {

  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<GradProject />} />
            <Route path="/pages/MachineLearning" element={<MachineLearning />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
