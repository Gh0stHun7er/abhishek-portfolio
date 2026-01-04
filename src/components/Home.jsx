import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const Home = ({ setActiveSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black dark:text-white">
            Hi, I'm <span className="text-blue-500">Abhishek</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-6 dark:text-gray-300">
            Frontend Developer | Python & DSA Learner | Future Ethical Hacker
          </p>
          <p className="text-lg text-gray-600 mb-8 dark:text-gray-400">
            Web development & cyber security
          </p>
          <div className="space-x-4">
            <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
              View Projects
            </button>
            <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white light:border-blue-500 light:text-blue-500 light:hover:bg-blue-500 light:hover:text-white">
              Contact Me
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <img
            src="/profile.png"
            alt="Abhishek Chouhan"
            className="w-64 h-64 rounded-full border-4 border-blue-500 object-cover"
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown size={32} className="text-gray-600 animate-bounce dark:text-gray-400" />
      </motion.div>
    </section>
  )
}

export default Home