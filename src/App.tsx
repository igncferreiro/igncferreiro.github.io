import { useState, useEffect } from 'react';
import { Briefcase, FolderGit2, Award, Mail, Linkedin, Twitter, ExternalLink, Image as ImageIcon, GraduationCap, Send } from 'lucide-react';
import { portfolioData } from './data';

export default function App() {
  const [activeSection, setActiveSection] = useState('experience');

  // Handle scroll spy to update active section in sidebar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['experience', 'education', 'projects', 'awards', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 40,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-zinc-900 font-sans flex flex-col md:flex-row">
      
      {/* Left Sidebar Navigation */}
      <aside className="w-full md:w-64 lg:w-72 md:fixed md:h-screen border-b md:border-b-0 md:border-r border-zinc-200 bg-white p-8 flex flex-col justify-between z-10">
        <div>
          <h1 className="text-2xl font-bold tracking-tight mb-1">{portfolioData.personal.name}</h1>
          <p className="text-zinc-500 font-medium mb-10">{portfolioData.personal.role}</p>
          
          <nav className="flex flex-col gap-2">
            <button 
              onClick={() => scrollToSection('experience')}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeSection === 'experience' ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50'}`}
            >
              <Briefcase size={18} />
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('education')}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeSection === 'education' ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50'}`}
            >
              <GraduationCap size={18} />
              Education
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeSection === 'projects' ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50'}`}
            >
              <FolderGit2 size={18} />
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('awards')}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeSection === 'awards' ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50'}`}
            >
              <Award size={18} />
              Awards
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeSection === 'contact' ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50'}`}
            >
              <Mail size={18} />
              Contact
            </button>
          </nav>
        </div>

        <div className="mt-10 md:mt-0 flex gap-4 text-zinc-400">
          <a href={`mailto:${portfolioData.personal.email}`} className="hover:text-zinc-900 transition-colors" aria-label="Email">
            <Mail size={20} />
          </a>
          <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href={portfolioData.personal.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors" aria-label="Twitter">
            <Twitter size={20} />
          </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 lg:ml-72 p-8 md:p-16 lg:p-24 max-w-5xl">
        
        {/* Experience Section */}
        <section id="experience" className="mb-32 scroll-mt-16">
          <div className="flex items-center gap-3 mb-10">
            <Briefcase className="text-zinc-400" size={24} />
            <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
          </div>
          
          <div className="space-y-12">
            {portfolioData.experience.map((job) => (
              <div key={job.id} className="relative pl-6 md:pl-0">
                <div className="hidden md:block absolute left-[-41px] top-2 w-3 h-3 bg-zinc-200 rounded-full border-4 border-[#FAFAFA]"></div>
                <h3 className="text-xl font-semibold">{job.role}</h3>
                <div className="text-sm text-zinc-500 mb-4 mt-1 font-medium">
                  {job.company} <span className="mx-2">•</span> {job.period}
                </div>
                <ul className="space-y-3 text-zinc-600 leading-relaxed">
                  {job.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-3 mt-2 w-1 h-1 bg-zinc-400 rounded-full flex-shrink-0"></span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-32 scroll-mt-16">
          <div className="flex items-center gap-3 mb-10">
            <GraduationCap className="text-zinc-400" size={24} />
            <h2 className="text-3xl font-bold tracking-tight">Education</h2>
          </div>
          
          <div className="space-y-12">
            {portfolioData.education.map((edu) => (
              <div key={edu.id} className="relative pl-6 md:pl-0">
                <div className="hidden md:block absolute left-[-41px] top-2 w-3 h-3 bg-zinc-200 rounded-full border-4 border-[#FAFAFA]"></div>
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <div className="text-sm text-zinc-500 mb-4 mt-1 font-medium">
                  {edu.institution} <span className="mx-2">•</span> {edu.period}
                </div>
                <p className="text-zinc-600 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-32 scroll-mt-16">
          <div className="flex items-center gap-3 mb-10">
            <FolderGit2 className="text-zinc-400" size={24} />
            <h2 className="text-3xl font-bold tracking-tight">Selected Projects</h2>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
            {portfolioData.projects.map((project) => (
              <article key={project.id} className="group flex flex-col bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Prominent GIF Placeholder / Image */}
                <div className="aspect-[16/10] bg-zinc-100 flex flex-col items-center justify-center text-zinc-400 border-b border-zinc-100 relative overflow-hidden">
                  <img 
                    src={project.imageSrc} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover z-10"
                    onError={(e) => {
                      // Hide the image if it fails to load, showing the placeholder underneath
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <ImageIcon size={48} className="mb-3 opacity-50 group-hover:scale-110 transition-transform duration-500" />
                  <span className="text-sm font-medium px-6 text-center">{project.gifPlaceholderText}</span>
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none"></div>
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-600 mb-6 text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tools.map((tool, idx) => (
                        <span key={idx} className="px-3 py-1 bg-zinc-100 text-zinc-600 text-xs font-medium rounded-full">
                          {tool}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-end">
                      <div className="flex flex-col gap-3">
                        {project.links?.map((link, idx) => (
                          <a 
                            key={idx}
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 hover:text-blue-600 transition-colors"
                          >
                            {link.text}
                          </a>
                        ))}
                      </div>
                      
                      {/* Award Badge */}
                      {(project as any).awardBadge && (
                        <div 
                          className="flex items-center gap-1.5 text-yellow-700 bg-yellow-100 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm" 
                          title="Award-winning project"
                        >
                          <Award size={14} />
                          <span>{(project as any).awardBadge}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Awards Section */}
        <section id="awards" className="mb-16 scroll-mt-16">
          <div className="flex items-center gap-3 mb-10">
            <Award className="text-zinc-400" size={24} />
            <h2 className="text-3xl font-bold tracking-tight">Awards & Recognition</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.awards.map((award) => (
              <div key={award.id} className="bg-white p-6 rounded-2xl border border-zinc-200 flex items-start gap-4">
                <div className="p-3 bg-yellow-50 text-yellow-600 rounded-xl flex-shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 mb-1 leading-tight">{award.title}</h3>
                  <p className="text-sm font-medium text-zinc-500 mb-2">{award.type} {award.category && `• ${award.category}`}</p>
                  <p className="text-sm text-zinc-700 italic">"{award.work}"</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-32 scroll-mt-16">
          <div className="flex items-center gap-3 mb-10">
            <Mail className="text-zinc-400" size={24} />
            <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl border border-zinc-200 shadow-sm text-center">
            <h3 className="text-2xl font-bold mb-4">Let's work together</h3>
            <p className="text-zinc-600 mb-8 max-w-lg mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <a 
              href={`mailto:${portfolioData.personal.email}`}
              className="inline-flex items-center justify-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-zinc-800 transition-colors hover:scale-105 duration-300"
            >
              <Send size={18} />
              Send me an email
            </a>
          </div>
        </section>
        
        <footer className="pt-8 border-t border-zinc-200 text-center md:text-left text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.</p>
        </footer>

      </main>
    </div>
  );
}
