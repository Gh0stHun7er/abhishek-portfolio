import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Instagram, Phone } from 'lucide-react'

const contacts = [
  { icon: Mail, label: 'Email', value: 'achouhan3848@gmail.com', link: 'mailto:achouhan3848@gmail.com' },
  { icon: Phone, label: 'Phone', value: 'Call Me', link: 'tel:+91706162762' },
  { icon: Github, label: 'GitHub', value: 'GitHub', link: 'http://github.com/Gh0stHun7er/' },
  { icon: Linkedin, label: 'LinkedIn', value: 'LinkedIn', link: 'https://www.linkedin.com/in/abhishek-chouhan-826a05389' },
  { icon: Instagram, label: 'Instagram', value: 'Instagram', link: 'https://www.instagram.com/abhi.codex.01/' },
]

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-black dark:text-white"
        >
          📞 Contact
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg flex items-center space-x-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              <contact.icon size={32} className="text-blue-500" />
              <div>
                <p className="text-gray-700 dark:text-gray-300">{contact.label}</p>
                <p className="text-black dark:text-white">{contact.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
