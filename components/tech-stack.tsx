"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Binary,
  Layers,
  Cloud,
} from "lucide-react"

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const technologies = {
    languages: {
      icon: <Code2 className="h-6 w-6" />,
      title: "Programming Languages",
      description: "Primary languages used in production systems",
      skills: [
        { name: "Java", level: 90 },
        { name: "Kotlin", level: 75 },
        { name: "TypeScript", level: 75 },
        { name: "JavaScript", level: 70 },
      ],
    },

    concepts: {
      icon: <Binary className="h-6 w-6" />,
      title: "Core Engineering Concepts",
      description: "Foundations used to build reliable backend systems",
      skills: [
        { name: "Object-Oriented Design", level: 90 },
        { name: "REST API Design", level: 90 },
        { name: "Concurrency & Multithreading", level: 80 },
        { name: "Design Patterns", level: 80 },
        { name: "System Design Basics", level: 75 },
      ],
    },

    frontend: {
      icon: <Layout className="h-6 w-6" />,
      title: "Frontend Engineering",
      description: "Modern, performance-focused user interfaces",
      skills: [
        { name: "React (Hooks, State, Performance)", level: 85 },
        { name: "Next.js (App Router, SSR)", level: 80 },
        { name: "TypeScript", level: 75 },
        { name: "Tailwind CSS", level: 80 },
        { name: "API Integration", level: 85 },
      ],
    },

    backend: {
      icon: <Server className="h-6 w-6" />,
      title: "Backend Engineering",
      description: "Scalable backend services and APIs",
      skills: [
        { name: "Spring Boot", level: 90 },
        { name: "Spring Security (JWT, OAuth2)", level: 85 },
        { name: "Microservices Architecture", level: 80 },
        { name: "Kafka (Event-Driven Systems)", level: 75 },
        { name: "Redis (Caching & Sessions)", level: 75 },
      ],
    },

    database: {
      icon: <Database className="h-6 w-6" />,
      title: "Databases & Persistence",
      description: "Data storage and performance optimization",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 85 },
        { name: "JPA / Hibernate", level: 85 },
        { name: "Redis", level: 75 },
      ],
    },

    infrastructure: {
      icon: <Cloud className="h-6 w-6" />,
      title: "Infrastructure & Cloud",
      description: "Deploying and running production systems",
      skills: [
        { name: "Docker", level: 80 },
        { name: "AWS (EC2, RDS, S3)", level: 75 },
        { name: "CI/CD Pipelines", level: 70 },
        { name: "Linux Basics", level: 75 },
      ],
    },

    tooling: {
      icon: <Wrench className="h-6 w-6" />,
      title: "Development Tooling",
      description: "Tools used for building and maintaining software",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "JUnit & Integration Testing", level: 80 },
        { name: "Postman", level: 85 },
        { name: "IntelliJ IDEA", level: 90 },
      ],
    },

    architecture: {
      icon: <Layers className="h-6 w-6" />,
      title: "System Architecture",
      description: "Real-world backend architecture patterns",
      skills: [
        { name: "API Gateway Pattern", level: 80 },
        { name: "Auth & Identity Services", level: 85 },
        { name: "CORS & Security Hardening", level: 85 },
        { name: "Service-to-Service Communication", level: 80 },
      ],
    },
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <section id="tech-stack" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge  variant="outline" className="mb-4">
            Skills
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Expertise
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(technologies).map(([key, category]) => (
            <motion.div
              key={key}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              variants={scaleUp}
            >
              <Card
                className={`h-full cursor-pointer transition-all hover:shadow-lg ${
                  selectedCategory === key ? "ring-2 ring-primary" : ""
                }`}
                onClick={() =>
                  setSelectedCategory(selectedCategory === key ? null : key)
                }
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">
                        {category.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {selectedCategory === key && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        {category.skills.map((skill, index) => (
                          <div key={index} className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="font-medium">{skill.name}</span>
                              <span className="text-muted-foreground">
                                {skill.level}%
                              </span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-1.5">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 0.5 }}
                                className="bg-primary h-1.5 rounded-full"
                              />
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {selectedCategory !== key && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {category.skills.slice(0, 3).map((skill, index) => (
                        <Badge key={index} variant="secondary">
                          {skill.name}
                        </Badge>
                      ))}
                      {category.skills.length > 3 && (
                        <Badge variant="secondary">
                          +{category.skills.length - 3} more
                        </Badge>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={fadeIn}
          className="mt-12 text-center text-muted-foreground"
        >
          <p className="max-w-2xl mx-auto">
            I focus on building secure, scalable backend systems using Spring
            Boot, supported by modern frontend technologies and production-grade
            infrastructure. My experience emphasizes real-world engineering
            tradeoffs, maintainability, and system reliability.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
