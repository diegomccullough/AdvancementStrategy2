import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-blue-600">
              Advancement Strategy
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">
              Services
            </a>
            <a href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
              About
            </a>
            <a href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button className="text-gray-600 hover:text-blue-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 