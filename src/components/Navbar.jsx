import { useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'

const Navbar = ({ activeSection, setActiveSection, toggleTheme, theme, navItems }) => {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
    setActiveSection(id)
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 bg-black/80 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold"><span className="text-blue-500">Abhi.</span><span className="text-black dark:text-white">Chouhan</span></div>
        <div className="flex items-center space-x-4">
        <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 text-black dark:bg-gray-800 dark:text-white">
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium transition-colors duration-300 ${
                activeSection === item.id ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-full bg-gray-200 text-black dark:bg-gray-800 dark:text-white">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-full right-0 mt-2 bg-gray-200 rounded-lg p-4 space-y-2 dark:bg-gray-800">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left text-sm font-medium transition-colors duration-300 ${
                activeSection === item.id ? 'text-blue-500' : 'text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar