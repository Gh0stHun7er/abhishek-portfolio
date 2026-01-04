import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Modern Login Page',
    description: 'In this project, I designed a modern and responsive login page with a clean and user-friendly interface. It includes well-structured input fields and basic form validation. This project demonstrates my understanding of UI design principles and front-end development basics.',
    tech: ['HTML', 'CSS', 'JS', 'REACT.js'],
    tags: ['Front-End Web Development', 'UI/UX Design Basics']
  },
  {
    title: 'QR Code Generator',
    description: 'This project generates a QR code for any given URL. Users can enter a URL and instantly receive a QR code output. Through this project, I learned dynamic data handling and how to build practical web-based tools.',
    tech: ['HTML', 'CSS', 'JS', 'REACT.js'],
    tags: ['Front-End Web Development', 'UI/UX Design Basics']
  },
  {
    title: 'Amazon Website Clone',
    description: 'In this project, I created a front-end clone of the Amazon website. It replicates the homepage layout, product sections, and navigation structure. This project highlights my skills in layout design, responsiveness, and real-world website structure.',
    tech: ['HTML', 'CSS', 'JS', 'REACT.js'],
    tags: ['Front-End Web Development', 'UI/UX Design Basics']
  },
  {
    title: 'Personal Portfolio Website',
    description: 'This is my personal portfolio website where I showcase my skills, projects, and basic profile information. The main purpose of this project is to present my work in a professional and organized manner. It reflects my self-branding skills and overall web development knowledge.',
    tech: ['HTML', 'CSS', 'JS', 'REACT.js'],
    tags: ['Front-End Web Development', 'UI/UX Design Basics']
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-black dark:text-white"
        >
          📂 Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-blue-500/20 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-blue-500 text-white px-2 py-1 rounded text-sm">{tech}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-gray-600 dark:text-gray-400 text-sm">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects