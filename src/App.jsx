import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Certifications from './components/Certifications'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState('dark')
  const [activeSection, setActiveSection] = useState('home')

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Timeline', id: 'timeline' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
  ]

  useEffect(() => {
    document.documentElement.className = theme
  }, [theme])

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100
      sections.forEach((section, index) => {
        if (section) {
          const top = section.offsetTop
          const bottom = top + section.offsetHeight
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(navItems[index].id)
          }
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navItems])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className={`min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} toggleTheme={toggleTheme} theme={theme} navItems={navItems} />
      <Home setActiveSection={setActiveSection} />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Timeline />
      <Certifications />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
