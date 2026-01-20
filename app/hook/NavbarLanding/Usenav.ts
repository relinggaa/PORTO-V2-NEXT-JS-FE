import { useState } from "react";
import { Instagram, Linkedin, Twitter, Facebook } from "lucide-react";

export const useNav = () => {
  const [isOpen, setIsOpen] = useState(false);
 
  type MenuItem = {
    label: string;
    href: string;
  };
  const menuItems: MenuItem[] = [
    { label: "Home", href: "#home" },
    { label: "Project", href: "#projects" },
    { label: "About", href: "#about" },  
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ]; 
 
type User = {
  name: string;
  emails: string[];
  social: {
    name: string;
    icon: React.ElementType;
    href: string;
  }[];
};
  const user: User = {
    name: "Relingga Aditya",
    emails: ["linggayorfel@gmail.com"],
    social: [{ name: "Instagram", icon: Instagram, href: "#" }, { name: "LinkedIn", icon: Linkedin, href: "#" }, { name: "Twitter", icon: Twitter, href: "#" }, { name: "Facebook", icon: Facebook, href: "#" }],
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  };

  return {
    isOpen,
    menuItems,
    user,
    toggleMenu,
    closeMenu,
  };
};
