import { motion } from 'framer-motion'

const testimonials = [
  "All projects showcased here are built through self-learning, continuous practice, and personal experimentation. Each project reflects independent problem-solving and hands-on development skills.",
  "Focused on learning by doing, I consistently explore new concepts and implement them into real-world projects to improve my technical and creative abilities.",
  "Every project represents my dedication to self-growth, consistency, and building practical solutions without external guidance."
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-black dark:text-white"
        >
          💬 Testimonials
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center"
            >
              <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials