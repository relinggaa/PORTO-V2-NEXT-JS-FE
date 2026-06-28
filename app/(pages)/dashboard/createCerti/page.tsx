"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IconPlus, IconTrash } from "@tabler/icons-react";
import { Modal } from "@/components/ui/Modal";
import { Input, Textarea, Button } from "@/components/ui/Forms";
import { DashboardPageHeader } from "@/components/ui/DashboardPageHeader";
import { motion } from "motion/react";

const MOCK_EXPERIENCES = [
  {
    id: 1,
    title: "FINALIST INTELECTA INNOVATION SYSTEM",
    description: "My team and I became finalists at Intelecta by developing FixYou, a web-based mental health platform.",
    image: "/img/intelecta.png",
    link: "https://google.com/",
  },
  {
    id: 2,
    title: "HACKSPHERE 2025",
    description: "I participated in a hackathon competition called Hacksphere, which was held at President University.",
    image: "/img/hacksphere.jpg",
    link: "https://google.com/",
  }
];

export default function CreateCertiPage() {
  const [experiences, setExperiences] = useState(MOCK_EXPERIENCES);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    link: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newExperience = {
      id: Date.now(),
      ...formData,
      image: formData.image || "/img/relinggaa.png", // fallback image
    };
    setExperiences([newExperience, ...experiences]);
    setIsModalOpen(false);
    setFormData({ title: "", description: "", image: "", link: "" });
  };

  const handleDelete = (id: number) => {
    setExperiences(experiences.filter((exp) => exp.id !== id));
  };

  return (
    <div className="p-6 md:p-10 min-h-screen">
      <DashboardPageHeader
        title="Experience & Certificates"
        subtitle="Manage your work history, achievements, and certifications."
        actionButton={
          <Button onClick={() => setIsModalOpen(true)} className="gap-2">
            <IconPlus className="w-5 h-5" />
            Add Entry
          </Button>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col"
          >
            <div className="relative h-56 w-full bg-white/5 overflow-hidden">
              <Image
                src={exp.image}
                alt={exp.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button variant="danger" onClick={() => handleDelete(exp.id)} className="h-10 w-10 p-0 rounded-full">
                  <IconTrash className="w-5 h-5" />
                </Button>
              </div>
            </div>
            
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">{exp.title}</h3>
              <p className="text-sm text-white/60 mb-4 flex-1">
                {exp.description}
              </p>
              
              {exp.link && (
                <a href={exp.link} target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline">
                  View Detail &rarr;
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {experiences.length === 0 && (
        <div className="w-full p-12 border border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center gap-4">
          <span className="text-white/40">No entries found.</span>
        </div>
      )}

      {/* Add Experience/Cert Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add Experience / Certificate">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Input
            label="Title"
            placeholder="e.g. Frontend Developer or Hackathon Winner"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
          />
          <Textarea
            label="Description"
            placeholder="Describe your role or achievement..."
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required
          />
          <Input
            label="Image URL"
            placeholder="e.g. /img/cert1.png"
            value={formData.image}
            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          />
          <Input
            label="External Link"
            placeholder="https://..."
            value={formData.link}
            onChange={(e) => setFormData({ ...formData, link: e.target.value })}
          />
          
          <div className="flex justify-end gap-3 mt-4 pt-4 border-t border-white/10">
            <Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">
              Save Entry
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
