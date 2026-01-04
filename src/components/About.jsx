import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-black dark:text-white"
        >
          👨‍💻 About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-700 leading-relaxed mb-6 dark:text-gray-300"
        >
          I am a self-taught Web Developer and Cyber Security enthusiast with a strong interest in building practical, real-world projects. I started my journey by learning front-end technologies such as HTML, CSS, JavaScript, Tailwind CSS, and React.js, focusing on clean UI design and responsive layouts.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg text-gray-700 leading-relaxed mb-6 dark:text-gray-300"
        >
          Alongside web development, I have explored back-end programming using Python and Django, gaining an understanding of how web applications function beyond the user interface.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg text-gray-700 leading-relaxed dark:text-gray-300"
        >
          I also have a growing interest in Cyber Security, where I am learning core security concepts, Linux command-line operations, and basic tools like Nmap and Zphisher for educational and awareness purposes. This has helped me develop a security-conscious mindset while building web applications.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-lg text-gray-700 leading-relaxed mt-6 dark:text-gray-300"
        >
          All my skills and projects are the result of self-learning, consistent practice, and hands-on experimentation. I am continuously improving my technical abilities with the goal of becoming a skilled and security-aware developer.
        </motion.p>
      </div>
    </section>
  )
}

export default About