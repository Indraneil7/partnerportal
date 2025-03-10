import { Link, useLocation } from 'react-router-dom'
import schonLogo from '../assets/images/schon-logo.svg'

function Navbar() {
  const location = useLocation()
  
  const navLinks = [
    { path: '/', label: 'Sales & Marketing' },
    { path: '/product-installation', label: 'Products & Installation' },
    { path: '/commissioning', label: 'Commissioning' },
    { path: '/support', label: 'Support' }
  ]
  
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <nav className="w-[90%] max-w-[1400px] mx-auto h-20 flex items-center justify-between">
        <Link to="/" className="h-10">
          <img 
            src={schonLogo} 
            alt="Schön Mobility" 
            className="h-full w-auto"
          />
        </Link>
        
        <div className="flex items-center gap-12">
          {/* Main Navigation */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`
                  relative py-2 font-medium text-dark-gray hover:text-primary
                  after:content-[''] after:absolute after:bottom-0 after:left-0 
                  after:w-0 after:h-0.5 after:bg-primary after:transition-all 
                  after:duration-300 hover:after:w-full
                  ${location.pathname === link.path ? 'text-primary after:w-full' : ''}
                `}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-4">
            <Link 
              to="/schedule-commissioning" 
              className={`hidden sm:block btn-secondary whitespace-nowrap
                ${location.pathname === '/schedule-commissioning' ? 'bg-gray-50' : ''}
              `}
            >
              Schedule Commission
            </Link>
            <Link 
              to="/order" 
              className={`btn-primary whitespace-nowrap
                ${location.pathname === '/order' ? 'bg-primary-hover' : ''}
              `}
            >
              Order Products
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Add implementation if needed */}
    </header>
  )
}

export default Navbar
