"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IconPlus, IconEdit, IconTrash, IconX } from "@tabler/icons-react";
import { Modal } from "@/components/ui/Modal";
import { Input, Textarea, Button } from "@/components/ui/Forms";
import { DashboardPageHeader } from "@/components/ui/DashboardPageHeader";
import { motion } from "motion/react";

// Mock Data
const MOCK_PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with Next.js, Stripe, and Prisma.",
    imageUrl: "/img/relinggaa.png", // using existing image as placeholder
    link: "https://example.com",
    techStack: "Next.js, Tailwind, Prisma",
  },
  {
    id: 2,
    title: "Portfolio V2",
    description: "Interactive portfolio using React Three Fiber and Framer Motion.",
    imageUrl: "/img/relinggaa.png",
    link: "https://example.com",
    techStack: "React, Three.js, Framer Motion",
  },
];

export default function CreateProjectPage() {
  const [projects, setProjects] = useState(MOCK_PROJECTS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrl: "",
    link: "",
    techStack: "",
  });

  const [currentTech, setCurrentTech] = useState("");

  const handleAddTech = () => {
    if (currentTech.trim()) {
      const currentStack = formData.techStack ? formData.techStack.split(",").map(t => t.trim()).filter(Boolean) : [];
      if (!currentStack.includes(currentTech.trim())) {
        currentStack.push(currentTech.trim());
        setFormData({ ...formData, techStack: currentStack.join(", ") });
      }
      setCurrentTech("");
    }
  };

  const handleRemoveTech = (indexToRemove: number) => {
    const currentStack = formData.techStack.split(",").map(t => t.trim()).filter(Boolean);
    const newStack = currentStack.filter((_, idx) => idx !== indexToRemove);
    setFormData({ ...formData, techStack: newStack.join(", ") });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProject = {
      id: Date.now(),
      ...formData,
      // fallback if no image provided
      imageUrl: formData.imageUrl || "/img/relinggaa.png",
    };
    setProjects([newProject, ...projects]);
    setIsModalOpen(false);
    setFormData({ title: "", description: "", imageUrl: "", link: "", techStack: "" });
  };

  const handleDelete = (id: number) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  return (
    <div className="p-6 md:p-10 min-h-screen">
      <DashboardPageHeader
        title="Projects"
        subtitle="Manage your portfolio projects and case studies."
        actionButton={
          <Button onClick={() => setIsModalOpen(true)} className="gap-2">
            <IconPlus className="w-5 h-5" />
            Add Project
          </Button>
        }
      />

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col"
          >
            <div className="relative h-48 w-full bg-white/5 overflow-hidden">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                <Button variant="secondary" className="h-10 w-10 p-0 rounded-full">
                  <IconEdit className="w-5 h-5" />
                </Button>
                <Button variant="danger" onClick={() => handleDelete(project.id)} className="h-10 w-10 p-0 rounded-full">
                  <IconTrash className="w-5 h-5" />
                </Button>
              </div>
            </div>
            
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-sm text-white/60 line-clamp-2 mb-4 flex-1">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.split(",").map((tech, i) => (
                  <span key={i} className="px-2 py-1 text-xs font-medium bg-white/10 text-white/80 rounded-md">
                    {tech.trim()}
                  </span>
                ))}
              </div>
              
              <a href={project.link} target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline">
                View Project &rarr;
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add Project Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New Project">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Input
            label="Project Title"
            placeholder="e.g. Next.js E-Commerce"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
          />
          <Textarea
            label="Description"
            placeholder="Describe your project..."
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required
          />
          <Input
            label="Image URL"
            placeholder="e.g. /img/project1.png"
            value={formData.imageUrl}
            onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
          />
          <Input
            label="Project Link"
            placeholder="https://..."
            value={formData.link}
            onChange={(e) => setFormData({ ...formData, link: e.target.value })}
            required
          />
          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-sm font-medium text-white/70">Tech Stack</label>
            <div className="flex gap-2">
              <Input
                placeholder="Masukkan tech stack (contoh: Next.js)"
                value={currentTech}
                onChange={(e) => setCurrentTech(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddTech();
                  }
                }}
              />
              <Button type="button" onClick={handleAddTech} className="shrink-0">
                Tambah
              </Button>
            </div>
            {formData.techStack && (
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.techStack.split(",").filter((t) => t.trim() !== "").map((tech, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full text-sm text-white border border-white/10">
                    <span>{tech.trim()}</span>
                    <button 
                      type="button" 
                      onClick={() => handleRemoveTech(idx)}
                      className="text-white/50 hover:text-white transition-colors flex items-center justify-center rounded-full hover:bg-white/10 p-0.5"
                    >
                      <IconX className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="flex justify-end gap-3 mt-4 pt-4 border-t border-white/10">
            <Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">
              Save Project
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
