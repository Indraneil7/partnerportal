import { Link } from 'react-router-dom'

function Footer() {
  const quickLinks = [
    { path: '/', label: 'Sales Resources' },
    { path: '/product-installation', label: 'Installation Guides' },
    { path: '/commissioning', label: 'Commissioning' },
    { path: '/support', label: 'Support' }
  ]

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="w-[90%] max-w-[1400px] mx-auto pt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-16">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-primary">Contact Us</h3>
            <div className="space-y-2 text-gray-300">
              <p className="font-medium">Partner Support Hotline:</p>
              <p className="flex items-center gap-2">
                <span>📞</span>
                <span>1-800-SCHON-EV</span>
              </p>
              <p className="flex items-center gap-2">
                <span>📧</span>
                <span>partners@schonmobility.com</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-primary">Business Hours</h3>
            <div className="space-y-2 text-gray-300">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="font-medium">24/7 Emergency Support Available</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 py-6 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Schön Mobility. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
