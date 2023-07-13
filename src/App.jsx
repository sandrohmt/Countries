import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Countries from './components/Countries'
import DataCountries from './components/DataCountries'



function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Countries />} />
        <Route path='/country/:id' element={<DataCountries />} />
      </Routes>
    </Router>
  )
}

export default App