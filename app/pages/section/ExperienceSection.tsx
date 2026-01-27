import InfiniteMenu from '@/components/InfiniteMenu'
import interium from '@/public/img/interium.jpg'
import intelecta from '@/public/img/intelecta.png'
import hacksphere from '@/public/img/hacksphere.jpg'
import React from 'react'
const items = [
  {
    image: interium.src,
    link: 'https://google.com/',
    title: '3rd place WEB DESIGN Competition',
    description: 'I am very proud of my own achievements and those of my team, as the Edukids project successfully won 3rd place in the Web Design Competition organized by Interium Fest. This achievement is the result of hard work and outstanding collaboration among all team members, and we hope that Edukids can make a positive impact on children and the field of education.'
  },
  {
    image: intelecta.src,
    link: 'https://google.com/',
    title: 'FINALIST INTELECTA INNOVATION SYSTEM',
    description: 'My team and I became finalists at Intelecta by developing FixYou, a web-based mental health platform that integrates AI features, mood tracking, journaling, gamification, and access to professional psychologists into one adaptive ecosystem.'
  },
  {
    image: hacksphere.src,
    link: 'https://google.com/',
    title: 'HACKSPHERE 2025',
    description: 'I participated in a hackathon competition called Hacksphere, which was held at President University. The event was supported by KAI, and the competition focused on developing applications for KAI Access.This is pretty cool, right?'
  },
  {
    image: "https://media.licdn.com/dms/image/v2/D562DAQHM1ShII_YqUw/profile-treasury-image-shrink_800_800/B56ZZwHByxGkAY-/0/1745637614008?e=1770145200&v=beta&t=krlavivbp0_Mh-3uCzhZygQVQQ_2OAIDDEvrKM4AUfs",
    link: 'https://google.com/',
    title: 'Full Stack Developer',
    description: 'The Bookkeeping Management System (BMS) is a university-based system for managing finance, inventory, and administration, designed to improve efficiency in learning and laboratory operations.'
  },


];
export default function ExperienceSection() {
  return (
    <section id="experience" className='min-h-[80vh] w-full pt-48 sm:pt-56 md:pt-64 pb-20 mt-8' style={{ position: 'relative', overflow: 'visible', zIndex: 1 }}>
      <InfiniteMenu items={items}
        scale={1}
      />
    </section>
  )
}