import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Countries from './components/Countries'
import DataCountries from './components/DataCountries'



function App() {

  return (
    <Router>
      <Routes>
        <Route path='/countries' element={<Countries />} />
        <Route path='countries/country/:id' element={<DataCountries />} />
      </Routes>
    </Router>
  )
}

export default App