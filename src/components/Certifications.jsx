import { motion } from 'framer-motion'

const certifications = [
  {
    title: 'Self-Taught Web Development',
    status: 'In Progress',
    description: 'Completed hands-on learning of HTML, CSS, JavaScript, Tailwind CSS, and React.js through self-study and project-based practice.'
  },
  {
    title: 'Python & Django Fundamentals',
    status: 'In Progress',
    description: 'Learned Python programming basics and Django framework fundamentals, focusing on backend concepts and project structure.'
  },
  {
    title: 'Cyber Security Fundamentals',
    status: 'In Progress',
    description: 'Studied core cyber security concepts including Linux command-line usage, basic networking, and security awareness tools like Nmap.'
  },
  {
    title: 'Linux Command Line Essentials',
    status: 'In Progress',
    description: 'Gained practical experience with Linux commands, file systems, and terminal-based operations.'
  }
]

const Certifications = () => {
  return (
    <section id="certifications" className="py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-black dark:text-white"
        >
          📜 Certifications & Learning Milestones
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{cert.title}</h3>
              <p className="text-blue-500 mb-4">{cert.status}</p>
              <p className="text-gray-700 dark:text-gray-300">{cert.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-gray-600 dark:text-gray-400 mt-8"
        >
          Certificates will be added as formal training and assessments are completed.
        </motion.p>
      </div>
    </section>
  )
}

export default Certifications