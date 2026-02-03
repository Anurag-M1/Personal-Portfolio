'use client'

import { useState, useMemo, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { ProfileSidebar } from '@/components/profile-sidebar'
import { AboutSection } from '@/components/about-section'
import { ThemeToggle } from '@/components/theme-toggle'
import {
  profileData,
  aboutData,
  resumeData,
  portfolioData,
  contactData,
} from '@/lib/portfolio-data'

// Lazy load sections that aren't immediately visible for better performance
const ResumeSection = dynamic(
  () => import('@/components/resume-section').then((mod) => ({ default: mod.ResumeSection })),
  {
    loading: () => (
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-secondary rounded w-1/3" />
        <div className="h-4 bg-secondary rounded" />
      </div>
    ),
  }
)

const PortfolioSection = dynamic(
  () => import('@/components/portfolio-section').then((mod) => ({ default: mod.PortfolioSection })),
  {
    loading: () => (
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-secondary rounded w-1/3" />
        <div className="h-4 bg-secondary rounded" />
      </div>
    ),
  }
)

const ContactSection = dynamic(
  () => import('@/components/contact-section-new').then((mod) => ({ default: mod.ContactSection })),
  {
    loading: () => (
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-secondary rounded w-1/3" />
        <div className="h-4 bg-secondary rounded" />
      </div>
    ),
  }
)

export default function Home() {
  const [activeSection, setActiveSection] = useState('about')

  const sectionContent = useMemo(() => {
    switch (activeSection) {
      case 'about':
        return <AboutSection data={aboutData} />
      case 'resume':
        return <ResumeSection data={resumeData} />
      case 'portfolio':
        return <PortfolioSection data={portfolioData} />
      case 'contact':
        return <ContactSection data={contactData} />
      default:
        return <AboutSection data={aboutData} />
    }
  }, [activeSection])

  return (
    <div className="min-h-screen bg-background p-3 sm:p-4 md:p-6 lg:p-12">
      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50">
        <ThemeToggle />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-6">
          <ProfileSidebar data={profileData} />

          {/* Main Content */}
          <main className="flex-1 bg-card rounded-xl md:rounded-2xl border border-border overflow-hidden">
            {/* Navigation */}
            <nav className="flex gap-1 sm:gap-2 md:gap-4 p-3 sm:p-4 md:p-6 border-b border-border overflow-x-auto scrollbar-hide">
              {['about', 'resume', 'portfolio', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium capitalize transition-colors whitespace-nowrap flex-shrink-0 ${
                    activeSection === section
                      ? 'text-foreground bg-accent/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                  }`}
                >
                  {section}
                </button>
              ))}
            </nav>

            {/* Content */}
            <div className="p-4 sm:p-5 md:p-6 lg:p-8">
              <Suspense fallback={<div className="animate-pulse space-y-4"><div className="h-8 bg-secondary rounded w-1/3"></div></div>}>
                {sectionContent}
              </Suspense>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
