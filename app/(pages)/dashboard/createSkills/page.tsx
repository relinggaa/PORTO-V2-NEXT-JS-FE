"use client";

import React, { useState } from "react";
import { IconPlus, IconTrash } from "@tabler/icons-react";
import { Modal } from "@/components/ui/Modal";
import { Input, Button } from "@/components/ui/Forms";
import { DashboardPageHeader } from "@/components/ui/DashboardPageHeader";
import { skillCategories, SkillCategory } from "@/lib/utils/skills";
import { SkillCard } from "@/components/skills/SkillCard";

export default function CreateSkillsPage() {
  const [categories, setCategories] = useState<SkillCategory[]>(skillCategories);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    level: 50,
    categoryTitle: categories[0]?.title || "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedCategories = categories.map((cat) => {
      if (cat.title === formData.categoryTitle) {
        return {
          ...cat,
          skills: [...cat.skills, { name: formData.name, level: Number(formData.level) }],
        };
      }
      return cat;
    });
    
    setCategories(updatedCategories);
    setIsModalOpen(false);
    setFormData({ name: "", level: 50, categoryTitle: formData.categoryTitle });
  };

  const handleDelete = (categoryTitle: string, skillName: string) => {
    const updatedCategories = categories.map((cat) => {
      if (cat.title === categoryTitle) {
        return {
          ...cat,
          skills: cat.skills.filter((s) => s.name !== skillName),
        };
      }
      return cat;
    });
    setCategories(updatedCategories);
  };

  return (
    <div className="p-6 md:p-10 min-h-screen">
      <DashboardPageHeader
        title="Skills"
        subtitle="Manage your technical skills and proficiencies."
        actionButton={
          <Button onClick={() => setIsModalOpen(true)} className="gap-2">
            <IconPlus className="w-5 h-5" />
            Add Skill
          </Button>
        }
      />

      <div className="flex flex-col gap-12">
        {categories.map((category, categoryIdx) => (
          <div key={category.title}>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-white mb-1">{category.title}</h2>
              <p className="text-sm text-white/50">{category.description}</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {category.skills.map((skill, skillIdx) => (
                <div key={skill.name} className="relative group">
                  <SkillCard 
                    skill={skill} 
                    categoryIndex={categoryIdx} 
                    skillIndex={skillIdx} 
                  />
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <button 
                      onClick={() => handleDelete(category.title, skill.name)}
                      className="bg-red-500 text-white p-1.5 rounded-full hover:bg-red-600 transition-colors"
                      title="Delete Skill"
                    >
                      <IconTrash className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {category.skills.length === 0 && (
              <div className="w-full p-8 border border-dashed border-white/10 rounded-2xl flex items-center justify-center">
                <span className="text-white/40 text-sm">No skills added in this category yet.</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New Skill">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-sm font-medium text-white/70">Category</label>
            <select
              className="flex h-10 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300 [&>option]:bg-black"
              value={formData.categoryTitle}
              onChange={(e) => setFormData({ ...formData, categoryTitle: e.target.value })}
              required
            >
              {categories.map((cat) => (
                <option key={cat.title} value={cat.title}>
                  {cat.title}
                </option>
              ))}
            </select>
          </div>
          
          <Input
            label="Skill Name"
            placeholder="e.g. React JS, MongoDB..."
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          
          <Input
            type="number"
            min="0"
            max="100"
            label="Proficiency Level (0-100)"
            value={formData.level}
            onChange={(e) => setFormData({ ...formData, level: Number(e.target.value) })}
            required
          />
          
          <div className="flex justify-end gap-3 mt-4 pt-4 border-t border-white/10">
            <Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">
              Save Skill
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
