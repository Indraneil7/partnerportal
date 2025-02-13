import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SalesMarketing from './pages/SalesMarketing'
import ProductInstallation from './pages/ProductInstallation'
import Commissioning from './pages/Commissioning'
import ScheduleCommissioning from './pages/ScheduleCommissioning'
import Support from './pages/Support'
import OrderForm from './pages/OrderForm'

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow w-[90%] max-w-[1400px] mx-auto pt-24">
          <Routes>
            <Route path="/" element={<SalesMarketing />} />
            <Route path="/product-installation" element={<ProductInstallation />} />
            <Route path="/commissioning" element={<Commissioning />} />
            <Route path="/schedule-commissioning" element={<ScheduleCommissioning />} />
            <Route path="/support" element={<Support />} />
            <Route path="/order" element={<OrderForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
