import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online store with cart functionality, user authentication, and payment processing integration.",
    sourceUrl: "https://github.com/surya-moorthy/ecommerce",
    tags: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Task Management App",
    description: "A productivity application for organizing tasks with drag-and-drop functionality and team collaboration features.",
    sourceUrl: "https://github.com/surya-moorthy/taskmanager",
    tags: ["TypeScript", "React", "Firebase"]
  },
  {
    title: "Chat Application",
    description: "Build a one-on-one session based chat application by exploring the working of webSockets ",
    sourceUrl: "https://github.com/surya-moorthy/chat-application",
    tags: ["WebSockets","React","Expressjs"]
  },
  {
    title: "Portfolio Website",
    description: "A responsive personal portfolio showcasing projects and skills with a modern, minimalist design.",
    sourceUrl: "https://github.com/example/portfolio",
    tags: ["React", "Tailwind CSS", "Framer Motion"]
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Proof of Work
        </h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-12 rounded-full"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              sourceUrl={project.sourceUrl}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;