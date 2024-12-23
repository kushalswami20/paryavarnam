import React from 'react';
import { Card, CardContent } from "../components/ui/card";

import './css/Team.css'

const Team = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Team Lead",
      image: "/api/placeholder/300/300",
      description: "Expert in project management and team coordination.",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Jane Smith",
      role: "Technical Lead",
      image: "/api/placeholder/300/300",
      description: "Specialized in system architecture and technical implementation.",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Mike Johnson",
      role: "UI/UX Designer",
      image: "/api/placeholder/300/300",
      description: "Creating beautiful and intuitive user experiences.",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Sarah Wilson",
      role: "Developer",
      image: "/api/placeholder/300/300",
      description: "Full-stack developer with expertise in React and Node.js.",
      linkedin: "#",
      github: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-[#fff9e6]">
      {/* Header with Parallax */}
      <header className="header">
        <div className="header-background"></div>
        <div className="header-content">
          <h1>Our Team</h1>
          <p className="subtitle">Meet the dedicated individuals working together to make this ideathon a success.</p>
        </div>
      </header>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="bg-white border border-[#daa52019] hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#2d2d2d] mb-1">
                  {member.name}
                </h3>
                <p className="text-[#c51d2e] font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-[#2d2d2d] text-sm mb-4">
                  {member.description}
                </p>
                <div className="flex space-x-4">
                  <a 
                    href={member.linkedin}
                    className="text-[#c51d2e] hover:text-[#a11725] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href={member.github}
                    className="text-[#c51d2e] hover:text-[#a11725] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;