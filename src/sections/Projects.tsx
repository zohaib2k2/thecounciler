import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import ecomerce_img from '/images/project-ecommerce.jpg';
import ai_dashboard_img from '/images/project-ai-dashboard.jpg';
import fintech_img from '/images/project-fintech.jpg';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Full-Stack Development',
    description:
      'A modern e-commerce platform with real-time inventory, payment processing, and analytics dashboard.',
    image: ecomerce_img,
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
    github: '#',
  },
  {
    title: 'AI Analytics Dashboard',
    category: 'Data & AI',
    description:
      'Machine learning-powered analytics platform providing real-time insights and predictive modeling.',
    image: ai_dashboard_img,
    tags: ['Python', 'TensorFlow', 'React', 'AWS'],
    link: '#',
    github: '#',
  },
  {
    title: 'Fintech Mobile App',
    category: 'Mobile Development',
    description:
      'Secure mobile banking application with biometric authentication and investment tracking.',
    image: fintech_img,
    tags: ['React Native', 'Node.js', 'PostgreSQL'],
    link: '#',
    github: '#',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <span className="text-sm text-purple-400">Our Work</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-gray-400">
              Explore some of our recent work that showcases our expertise and
              commitment to excellence.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors group"
          >
            <span className="font-medium">View All Projects</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative rounded-2xl overflow-hidden bg-dark-800 border border-white/5 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredIndex === index ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-dark-800/20 to-transparent" />

                {/* Overlay actions */}
                <div
                  className={`absolute inset-0 flex items-center justify-center gap-4 bg-dark-900/60 transition-all duration-500 ${
                    hoveredIndex === index
                      ? 'opacity-100'
                      : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <a
                    href={project.link}
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-purple-500 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-purple-500 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <span className="text-xs text-purple-400 font-medium uppercase tracking-wider">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mt-2 mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover border */}
              <div
                className={`absolute inset-0 rounded-2xl border-2 transition-all duration-500 pointer-events-none ${
                  hoveredIndex === index
                    ? 'border-purple-500/50'
                    : 'border-transparent'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
