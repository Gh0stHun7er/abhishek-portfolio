import { Github, Linkedin, Instagram, MessageCircle } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Abhishek Chouhan</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">© 2026 Abhishek Chouhan. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="http://github.com/Gh0stHun7er/" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-300">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/abhishek-chouhan-826a05389" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-300">
            <Linkedin size={24} />
          </a>
          <a href="https://www.instagram.com/abhi.codex.01/" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-300">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-300">
            <MessageCircle size={24} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
