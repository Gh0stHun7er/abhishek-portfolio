import { motion } from 'framer-motion'

const timelineItems = [
  {
    title: 'Front-End Web Development Foundations',
    role: 'Self-Taught Web Developer',
    description: 'Developed a strong foundation in front-end web technologies, primarily HTML and CSS. Focused on semantic markup, responsive layouts, and clean UI design principles.'
  },
  {
    title: 'Practical Web Application Development',
    role: 'Front-End Engineering',
    description: 'Built multiple hands-on projects including a modern authentication UI, a QR code generation tool, and a front-end website clone. Gained experience in UI structuring, component-based layouts, and user-centric design.'
  },
  {
    title: 'Cyber Security Fundamentals',
    role: 'Cyber Security (Beginner Level)',
    description: 'Explored core cyber security concepts such as basic system security, online safety, and digital risk awareness. Developed an understanding of how vulnerabilities impact web applications at a fundamental level.'
  },
  {
    title: 'Secure Web Development Focus',
    role: 'Web Development + Cyber Security',
    description: 'Actively combining web development skills with cyber security awareness to build structured, maintainable, and security-conscious web projects. Continuously learning through self-study, experimentation, and real-world project implementation.'
  }
]

const Timeline = () => {
  return (
    <section id="timeline" className="py-20">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-black dark:text-white"
        >
          🕒 Learning & Technical Journey
        </motion.h2>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-500"></div>
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex items-start mb-8"
            >
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-6">
                {index + 1}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{item.title}</h3>
                <p className="text-blue-500 mb-2">{item.role}</p>
                <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline