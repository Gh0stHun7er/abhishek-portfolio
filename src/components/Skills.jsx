import { motion } from 'framer-motion'
import * as simpleIcons from 'simple-icons'

const skills = [
  { name: 'HTML', icon: simpleIcons.siHtml5 },
  { name: 'CSS', icon: simpleIcons.siCss3 },
  { name: 'JavaScript', icon: simpleIcons.siJavascript },
  { name: 'React.js', icon: simpleIcons.siReact },
  { name: 'Tailwind CSS', icon: simpleIcons.siTailwindcss },
  { name: 'Python', icon: simpleIcons.siPython },
  { name: 'Django', icon: simpleIcons.siDjango },
  { name: 'Git', icon: simpleIcons.siGit },
  { name: 'GitHub', icon: simpleIcons.siGithub },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-black dark:text-white"
        >
          🛠 Skills & Technical Stack
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4" dangerouslySetInnerHTML={{ __html: skill.icon.svg }} />
              <h3 className="text-lg font-semibold text-black dark:text-white">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills