import { useState } from "react";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandThreads
} from "@tabler/icons-react";

export const useNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  type MenuItem = {
    label: string;
    href: string;
  };
  const menuItems: MenuItem[] = [
    { label: "Home", href: "#" },
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
    social: [
      { name: "Instagram", icon: IconBrandInstagram, href: "https://www.instagram.com/relinggaa/" },
      { name: "LinkedIn", icon: IconBrandLinkedin, href: "https://www.linkedin.com/in/relingga-aditya-41426518b/" },
      { name: "TikTok", icon: IconBrandTiktok, href: "https://www.tiktok.com/@relinggaaa" },
      { name: "Threads", icon: IconBrandThreads, href: "https://www.threads.com/@relinggaa" }
    ],
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
