import React from "react";
import { ExternalLink } from 'lucide-react';

export interface ProjectCardProps {
  title: string;
  description: string;
  sourceUrl: string;
  tags?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  sourceUrl,
  tags = []
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <div className="mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="inline-block text-xs px-2 py-1 mr-2 mb-2 bg-blue-100 text-blue-800 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <a 
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors font-medium"
        >
          View Source <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;