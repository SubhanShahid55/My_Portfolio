"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, Linkedin, MapPin, Calendar, ExternalLink, Heart, Sparkles, Flower2, Menu, X } from "lucide-react"
import {
  SiPython,
  SiJavascript,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiCisco,
  SiGooglecolab,
  SiAndroidstudio,
  SiMongodb,
  SiExpress,
  SiAngular,
  SiNodedotjs,
  SiFigma,
  SiAdobexd,
} from "react-icons/si"
import { FaJava } from "react-icons/fa"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMobile, setIsMobile] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "education", "experience", "projects", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    console.log(`Navigating to section: ${sectionId}`) // Debug log
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      })
      setMobileMenuOpen(false) // Close mobile menu when navigating
      setActiveSection(sectionId) // Update active section immediately
    } else {
      console.error(`Element with id '${sectionId}' not found`)
    }
  }

  const toggleMobileMenu = () => {
    console.log(`Toggling mobile menu. Current state: ${mobileMenuOpen}`) // Debug log
    setMobileMenuOpen((prev) => !prev)
  }

  // Custom VS Code Icon Component
  const VSCodeIcon = ({ className }: { className?: string }) => (
    <img src="/images/vscode-logo.png" alt="VS Code" className={`${className} object-contain`} />
  )

  const navigationItems = ["home", "about", "education", "experience", "projects", "skills", "contact"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Dynamic Flowered Background - Optimized for Mobile */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Desktop: Full flower animation set */}
        {!isMobile && (
          <>
            {/* Large floating flowers */}
            <motion.div
              className="absolute top-20 left-10 text-pink-300 opacity-40"
              animate={{
                rotate: 360,
                y: [0, -30, 0],
                x: [0, 15, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 12,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Flower2 size={50} />
            </motion.div>

            <motion.div
              className="absolute top-40 right-20 text-purple-300 opacity-50"
              animate={{
                rotate: -360,
                y: [0, 25, 0],
                x: [0, -10, 0],
                scale: [1, 0.9, 1],
              }}
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Sparkles size={40} />
            </motion.div>

            <motion.div
              className="absolute bottom-40 left-20 text-pink-400 opacity-45"
              animate={{
                rotate: 180,
                y: [0, -20, 0],
                x: [0, 20, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 18,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Heart size={45} />
            </motion.div>

            {/* Medium floating flowers */}
            <motion.div
              className="absolute top-60 left-1/4 text-indigo-300 opacity-35"
              animate={{
                rotate: 360,
                y: [0, -15, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 2,
              }}
            >
              <Flower2 size={35} />
            </motion.div>

            <motion.div
              className="absolute top-80 right-1/3 text-pink-300 opacity-40"
              animate={{
                rotate: -180,
                y: [0, 20, 0],
                scale: [1, 0.8, 1],
              }}
              transition={{
                duration: 14,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <Sparkles size={30} />
            </motion.div>

            <motion.div
              className="absolute bottom-60 right-1/4 text-purple-300 opacity-35"
              animate={{
                rotate: 270,
                y: [0, -25, 0],
                x: [0, -15, 0],
              }}
              transition={{
                duration: 16,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 3,
              }}
            >
              <Heart size={38} />
            </motion.div>

            {/* Small floating flowers */}
            <motion.div
              className="absolute top-32 left-1/2 text-pink-200 opacity-30"
              animate={{
                rotate: 360,
                y: [0, -10, 0],
                x: [0, 8, 0],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1.5,
              }}
            >
              <Flower2 size={25} />
            </motion.div>

            <motion.div
              className="absolute top-96 left-1/3 text-indigo-200 opacity-25"
              animate={{
                rotate: -360,
                y: [0, 15, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 11,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 2.5,
              }}
            >
              <Sparkles size={20} />
            </motion.div>

            <motion.div
              className="absolute bottom-32 left-2/3 text-purple-200 opacity-30"
              animate={{
                rotate: 180,
                y: [0, -12, 0],
                x: [0, 12, 0],
              }}
              transition={{
                duration: 13,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <Heart size={28} />
            </motion.div>

            {/* Extra small decorative elements */}
            <motion.div
              className="absolute top-1/4 right-1/2 text-pink-200 opacity-20"
              animate={{
                rotate: 360,
                y: [0, -8, 0],
                x: [0, 5, 0],
              }}
              transition={{
                duration: 9,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 4,
              }}
            >
              <Flower2 size={18} />
            </motion.div>

            <motion.div
              className="absolute top-3/4 left-1/6 text-indigo-200 opacity-25"
              animate={{
                rotate: -270,
                y: [0, 10, 0],
                scale: [1, 0.9, 1],
              }}
              transition={{
                duration: 7,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1.8,
              }}
            >
              <Sparkles size={15} />
            </motion.div>

            <motion.div
              className="absolute bottom-1/4 right-1/6 text-purple-200 opacity-20"
              animate={{
                rotate: 90,
                y: [0, -6, 0],
                x: [0, -8, 0],
              }}
              transition={{
                duration: 12,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 3.2,
              }}
            >
              <Heart size={22} />
            </motion.div>

            {/* Subtle background flowers */}
            <motion.div
              className="absolute top-1/3 left-1/5 text-pink-100 opacity-15"
              animate={{
                rotate: 360,
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 5,
              }}
            >
              <Flower2 size={60} />
            </motion.div>

            <motion.div
              className="absolute bottom-1/3 right-1/5 text-purple-100 opacity-15"
              animate={{
                rotate: -360,
                scale: [1, 0.95, 1],
              }}
              transition={{
                duration: 25,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 2,
              }}
            >
              <Sparkles size={55} />
            </motion.div>

            <motion.div
              className="absolute top-2/3 left-3/4 text-indigo-100 opacity-10"
              animate={{
                rotate: 180,
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 22,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 7,
              }}
            >
              <Heart size={65} />
            </motion.div>
          </>
        )}

        {/* Mobile: Simplified flower animation set */}
        {isMobile && (
          <>
            {/* Reduced set of flowers for mobile performance */}
            <motion.div
              className="absolute top-16 left-4 text-pink-300 opacity-30"
              animate={{
                rotate: 360,
                y: [0, -15, 0],
              }}
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Flower2 size={30} />
            </motion.div>

            <motion.div
              className="absolute top-32 right-4 text-purple-300 opacity-35"
              animate={{
                rotate: -360,
                y: [0, 12, 0],
              }}
              transition={{
                duration: 18,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 2,
              }}
            >
              <Sparkles size={25} />
            </motion.div>

            <motion.div
              className="absolute top-1/2 left-1/4 text-pink-200 opacity-25"
              animate={{
                rotate: 180,
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 4,
              }}
            >
              <Heart size={20} />
            </motion.div>

            <motion.div
              className="absolute bottom-32 right-1/4 text-indigo-200 opacity-30"
              animate={{
                rotate: -180,
                y: [0, -10, 0],
              }}
              transition={{
                duration: 16,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <Flower2 size={22} />
            </motion.div>

            <motion.div
              className="absolute bottom-16 left-1/3 text-purple-200 opacity-25"
              animate={{
                rotate: 90,
                y: [0, 8, 0],
              }}
              transition={{
                duration: 14,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 3,
              }}
            >
              <Sparkles size={18} />
            </motion.div>

            {/* Subtle background elements for mobile */}
            <motion.div
              className="absolute top-1/3 right-1/3 text-pink-100 opacity-15"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 25,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <Flower2 size={40} />
            </motion.div>

            <motion.div
              className="absolute bottom-1/3 left-1/2 text-purple-100 opacity-12"
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 30,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: 5,
              }}
            >
              <Heart size={35} />
            </motion.div>
          </>
        )}
      </div>

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Sana Hafeez
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigationItems.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section ? "text-pink-600 font-semibold" : "text-gray-600 hover:text-pink-500"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  toggleMobileMenu()
                }}
                className="text-gray-600 hover:text-pink-500 p-2 relative z-50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-white/95 backdrop-blur-md border-t border-pink-100 overflow-hidden"
            >
              <div className="container mx-auto px-6 py-4">
                <div className="flex flex-col space-y-4">
                  {navigationItems.map((section, index) => (
                    <motion.button
                      key={section}
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        scrollToSection(section)
                      }}
                      className={`capitalize text-left py-4 px-4 rounded-lg transition-all w-full ${
                        activeSection === section
                          ? "text-pink-600 font-semibold bg-pink-50"
                          : "text-gray-600 hover:text-pink-500 hover:bg-pink-25"
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            activeSection === section ? "bg-pink-500" : "bg-gray-300"
                          }`}
                        />
                        {section}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 to-purple-100/50" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Hello, I'm
                </span>
                <br />
                <span className="text-gray-800">Sana Hafeez</span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Software Engineering Student & Aspiring Developer
                <br />
                <span className="text-pink-600 font-semibold">Creating beautiful digital experiences</span>
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Button
                  onClick={() => scrollToSection("projects")}
                  className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-3 rounded-full"
                >
                  View My Work
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="outline"
                  className="border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-3 rounded-full"
                >
                  Get In Touch
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative order-first lg:order-last"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-30"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <div className="absolute inset-8 bg-white rounded-full shadow-2xl overflow-hidden flex items-center justify-center">
                  <img
                    src="/images/sana-avatar.jpg"
                    alt="Sana Hafeez"
                    className="w-full h-full object-cover object-center scale-110"
                  />
                </div>

                {/* Floating elements around profile */}
                <motion.div
                  className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-pink-100 p-2 md:p-3 rounded-full shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Sparkles className="text-pink-500" size={isMobile ? 20 : 24} />
                </motion.div>
                <motion.div
                  className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 bg-purple-100 p-2 md:p-3 rounded-full shadow-lg"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Heart className="text-purple-500" size={isMobile ? 20 : 24} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-20 bg-white/50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full" />
          </motion.div>

          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                I'm a passionate Software Engineering student at the National University of Modern Languages, currently
                pursuing my Bachelor's degree. With a strong foundation in programming and a keen interest in creating
                innovative solutions, I'm dedicated to building beautiful and functional digital experiences.
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                My journey in technology has been enriched by hands-on experience as a Software Engineer Intern at NTC
                Islamabad, where I worked on network infrastructure and gained valuable industry insights.
              </p>

              <div className="flex items-center justify-center gap-4 text-gray-600 text-sm md:text-base">
                <MapPin className="text-pink-500" size={20} />
                <span>Nawanshehr Tehsil & District Abbottabad, Pakistan</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="max-w-4xl mx-auto border-0 shadow-2xl bg-gradient-to-br from-white to-pink-50">
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm md:text-xl">NUML</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg md:text-2xl text-gray-800">
                      National University of Modern Languages
                    </CardTitle>
                    <CardDescription className="text-base md:text-lg text-gray-600">
                      Bachelor of Science in Software Engineering
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-pink-600 text-sm md:text-base">
                  <Calendar size={16} />
                  <span>Sep 2021 – May 2026</span>
                </div>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-gray-800 mb-4">Relevant Coursework:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    "Data Structures and Algorithms",
                    "Operating System",
                    "Object Oriented Programming",
                    "DBMS",
                    "Internet Technology",
                    "AI",
                    "Software Methodology",
                    "Computer Architecture",
                    "Algorithm Analysis",
                  ].map((course, index) => (
                    <motion.div
                      key={course}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <Badge
                        variant="secondary"
                        className="bg-pink-100 text-pink-700 hover:bg-pink-200 w-full justify-center py-2 text-xs md:text-sm"
                      >
                        {course}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 md:py-20 bg-white/50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="max-w-4xl mx-auto border-0 shadow-2xl bg-gradient-to-br from-white to-purple-50">
              <CardHeader>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm md:text-xl">NTC</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg md:text-2xl text-gray-800">Software Engineer Intern</CardTitle>
                    <CardDescription className="text-base md:text-lg text-gray-600">NTC Islamabad</CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-purple-600 text-sm md:text-base">
                  <Calendar size={16} />
                  <span>June 2022 – August 2022</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">
                      Assisted in configuring and maintaining routers, switches, and firewalls.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">
                      Monitored network performance and uptime using standard tools.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">
                      Troubleshot LAN/WAN issues under senior supervision.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-2xl bg-gradient-to-br from-white to-pink-50 hover:shadow-3xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg md:text-xl text-gray-800">Student Management System</CardTitle>
                    <ExternalLink className="text-pink-500" size={20} />
                  </div>
                  <CardDescription className="text-gray-600">Jan 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 text-sm md:text-base">
                    Developed a comprehensive web application for managing student records with responsive UI for
                    registration, course assignments, and attendance tracking.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["HTML", "CSS", "JavaScript", "Python"].map((tech) => (
                      <Badge key={tech} variant="outline" className="border-pink-300 text-pink-600 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-2xl bg-gradient-to-br from-white to-purple-50 hover:shadow-3xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg md:text-xl text-gray-800">WireGuard VPN System</CardTitle>
                    <ExternalLink className="text-purple-500" size={20} />
                  </div>
                  <CardDescription className="text-gray-600">Nov 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 text-sm md:text-base">
                    Implemented a secure VPN solution using WireGuard with Python automation for tunnel configuration
                    and performance optimization.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Cisco", "Python", "WireGuard", "Networking"].map((tech) => (
                      <Badge key={tech} variant="outline" className="border-purple-300 text-purple-600 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="skills" className="py-16 md:py-20 bg-white/50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Tech Stack & Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full" />
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {/* Tech Stack */}
            <div className="mb-12 md:mb-16">
              <motion.div
                className="text-center mb-8 md:mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Technologies I Work With</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  My toolkit for building amazing digital experiences
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-pink-50 h-full">
                    <CardHeader>
                      <CardTitle className="text-lg md:text-xl text-gray-800 flex items-center gap-3">
                        <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs md:text-sm font-bold">💻</span>
                        </div>
                        Programming Languages
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-3 md:gap-4">
                        {[
                          { name: "Python", icon: SiPython, color: "from-blue-400 to-yellow-400" },
                          { name: "Java", icon: FaJava, color: "from-orange-400 to-red-500" },
                          { name: "C++", icon: SiCplusplus, color: "from-blue-400 to-purple-500" },
                          { name: "JavaScript", icon: SiJavascript, color: "from-yellow-300 to-orange-400" },
                          { name: "HTML", icon: SiHtml5, color: "from-orange-400 to-red-400" },
                          { name: "CSS", icon: SiCss3, color: "from-blue-400 to-blue-600" },
                          { name: "SQL", icon: SiMysql, color: "from-blue-500 to-orange-400" },
                        ].map((lang, index) => (
                          <motion.div
                            key={lang.name}
                            className="bg-white rounded-xl p-3 md:p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, y: -5 }}
                          >
                            <div className="text-center">
                              <lang.icon
                                className="text-2xl md:text-3xl mb-2 mx-auto"
                                style={{ color: "currentColor" }}
                              />
                              <div
                                className={`text-xs md:text-sm font-semibold bg-gradient-to-r ${lang.color} bg-clip-text text-transparent`}
                              >
                                {lang.name}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-purple-50 h-full">
                    <CardHeader>
                      <CardTitle className="text-lg md:text-xl text-gray-800 flex items-center gap-3">
                        <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs md:text-sm font-bold">🛠️</span>
                        </div>
                        Developer Tools
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-3 md:gap-4">
                        {[
                          { name: "VS Code", icon: VSCodeIcon, color: "from-blue-400 to-blue-600", isCustom: true },
                          { name: "Cisco Packet Tracer", icon: SiCisco, color: "from-blue-500 to-teal-500" },
                          { name: "Google Colab", icon: SiGooglecolab, color: "from-orange-400 to-yellow-500" },
                          { name: "Android Studio", icon: SiAndroidstudio, color: "from-green-500 to-lime-500" },
                        ].map((tool, index) => (
                          <motion.div
                            key={tool.name}
                            className="bg-white rounded-xl p-3 md:p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, y: -5 }}
                          >
                            <div className="text-center">
                              {tool.isCustom ? (
                                <tool.icon className="w-6 h-6 md:w-8 md:h-8 mb-2 mx-auto" />
                              ) : (
                                <tool.icon
                                  className="text-2xl md:text-3xl mb-2 mx-auto"
                                  style={{ color: "currentColor" }}
                                />
                              )}
                              <div
                                className={`text-xs md:text-sm font-semibold bg-gradient-to-r ${tool.color} bg-clip-text text-transparent`}
                              >
                                {tool.name}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6 md:mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Certifications</h3>
                <p className="text-gray-600 text-sm md:text-base">Professional development and specialized training</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-pink-50">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm md:text-base">M</span>
                      </div>
                      <CardTitle className="text-base md:text-lg text-gray-800">MEAN Stack Development</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 text-sm md:text-base">
                      Built full-stack applications using MongoDB, Express.js, Angular, and Node.js. Learned RESTful API
                      design, NoSQL databases, and front-end/backend integration.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-200 flex items-center gap-1 text-xs">
                        <SiMongodb className="w-3 h-3" />
                        MongoDB
                      </Badge>
                      <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-200 flex items-center gap-1 text-xs">
                        <SiExpress className="w-3 h-3" />
                        Express.js
                      </Badge>
                      <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-200 flex items-center gap-1 text-xs">
                        <SiAngular className="w-3 h-3" />
                        Angular
                      </Badge>
                      <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-200 flex items-center gap-1 text-xs">
                        <SiNodedotjs className="w-3 h-3" />
                        Node.js
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-purple-50">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm md:text-base">UI</span>
                      </div>
                      <CardTitle className="text-base md:text-lg text-gray-800">UI/UX Design</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 text-sm md:text-base">
                      Studied user-centered design principles, usability testing, and modern design trends. Created
                      wireframes and interactive prototypes using industry-standard tools.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 flex items-center gap-1 text-xs">
                        <SiFigma className="w-3 h-3" />
                        Figma
                      </Badge>
                      <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 flex items-center gap-1 text-xs">
                        <SiAdobexd className="w-3 h-3" />
                        Adobe XD
                      </Badge>
                      <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 text-xs">Prototyping</Badge>
                      <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 text-xs">User Research</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full" />
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-sm md:text-base">
              I'm always excited to discuss new opportunities and collaborate on interesting projects. Feel free to
              reach out!
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-pink-50">
              <CardContent className="p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                  <motion.div className="text-center" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="text-white" size={isMobile ? 20 : 24} />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-sm md:text-base">Phone</h3>
                    <p className="text-gray-600 text-sm md:text-base">+92 314 3707610</p>
                  </motion.div>

                  <motion.div className="text-center" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="text-white" size={isMobile ? 20 : 24} />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-sm md:text-base">Email</h3>
                    <p className="text-gray-600 text-sm md:text-base break-all">sanahafeez8oct@gmail.com</p>
                  </motion.div>

                  <motion.div className="text-center" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Linkedin className="text-white" size={isMobile ? 20 : 24} />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-sm md:text-base">LinkedIn</h3>
                    <p className="text-gray-600 text-sm md:text-base">linkedin.com/in/sanahafeez</p>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 md:py-8 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.p
            className="text-sm md:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            © 2024 Sana Hafeez. Made with <Heart className="inline w-4 h-4 text-pink-200" /> and lots of code.
          </motion.p>
        </div>
      </footer>
    </div>
  )
}
