import React from 'react';
import { Code2, Server, Database, Palette, Globe, Lock } from 'lucide-react';

const technologies = [
  {
    category: "Frontend",
    icon: <Code2 className="h-8 w-8 text-blue-600 mb-4" />,
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "zustand"]
  },
  {
    category: "Backend",
    icon: <Server className="h-8 w-8 text-blue-600 mb-4" />,
    skills: ["Node.js", "Express", "RESTful APIs"]
  },
  {
    category: "Database",
    icon: <Database className="h-8 w-8 text-blue-600 mb-4" />,
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Prisma"]
  },
  {
    category: "Languages",
    icon: <Palette className="h-8 w-8 text-blue-600 mb-4" />,
    skills: ["Javascript","Rust","Golang"]
  },
  {
    category: "DevOps",
    icon: <Globe className="h-8 w-8 text-blue-600 mb-4" />,
    skills: ["Docker", "AWS", "CI/CD", "Git", "Linux"]
  },
  {
    category: "Security",
    icon: <Lock className="h-8 w-8 text-blue-600 mb-4" />,
    skills: ["OAuth", "JWT", "HTTPS", "Security Best Practices", "Authentication"]
  }
];

const TechStackSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Tech Stack
        </h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-12 rounded-full"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1"
            >
              <div className="flex justify-center">{tech.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{tech.category}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {tech.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-white text-blue-600 rounded-full text-sm border border-blue-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;