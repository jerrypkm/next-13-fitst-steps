import type { Metadata } from 'next';
import React from 'react'

export const metadata:Metadata = {
 title: 'SEO Title',
 description: 'SEO Title',
 keywords: ['Hola', 'metga']
};

const AboutPage = () => {
  return (
    <div className='text-7xl'>AboutPage</div>
  )
}

export default AboutPage