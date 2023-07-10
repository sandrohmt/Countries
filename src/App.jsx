import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Country from './components/Country'
import DataCountries from './components/DataCountries'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Country />} />

      </Routes>
    </Router>
  )
}

export default App