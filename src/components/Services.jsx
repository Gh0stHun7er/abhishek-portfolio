import { motion } from 'framer-motion'
import { Code, Smartphone, Zap, Shield, Palette, Scissors, Video } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'I build clean and structured websites using HTML, CSS, JavaScript, and Tailwind CSS. Focused on modern layouts, readable code, and user-friendly interfaces.'
  },
  {
    icon: Smartphone,
    title: 'Responsive UI Design',
    description: 'I design responsive and mobile-friendly user interfaces that work smoothly across all screen sizes. Layouts are optimized for usability, accessibility, and visual clarity.'
  },
  {
    icon: Zap,
    title: 'React Web Applications',
    description: 'I develop basic React.js web applications using a component-based approach. Focused on reusable components, simple state handling, and interactive UI behavior.'
  },
  {
    icon: Shield,
    title: 'Basic Cyber Security Practices',
    description: 'I apply basic cyber security awareness in web projects, including safe coding habits and security fundamentals. Familiar with tools like Linux commands and Nmap for educational and learning purposes.'
  },
  {
    icon: Palette,
    title: 'Graphic Designing (Basic)',
    description: 'I create basic graphic designs such as posters, thumbnails, and simple visuals. Focused on clean design, color balance, and basic branding needs.'
  },
  {
    icon: Scissors,
    title: 'Basic Editing',
    description: 'I provide basic photo and video editing services, including trimming, corrections, and simple enhancements. Suitable for social media and small content projects.'
  },
  {
    icon: Video,
    title: 'Video Shooting',
    description: 'I offer basic video shooting services for short clips and simple content creation. Focused on framing, clarity, and basic composition.'
  }
]

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-black dark:text-white"
        >
          🛠 Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-blue-500/20 transition-all duration-300"
            >
              <service.icon size={48} className="text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">{service.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services