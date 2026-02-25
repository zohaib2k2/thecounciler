import { useEffect, useRef, useState } from 'react';
import { Code, Cloud, Camera, Database, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Full-Stack Development',
    description:
      'End-to-end web and mobile application development using modern frameworks like React, Node.js, and Python. We build scalable, performant solutions tailored to your business needs.',
    features: ['React & Next.js', 'Node.js & Python', 'Mobile Apps', 'API Development'],
    image: '/images/service-fullstack.jpg',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Cloud,
    title: 'DevOps Solutions',
    description:
      'Streamline your development pipeline with CI/CD automation, infrastructure as code, and cloud-native solutions. We help you deploy faster and more reliably.',
    features: ['CI/CD Pipelines', 'Docker & Kubernetes', 'AWS/Azure/GCP', 'Monitoring'],
    image: '/images/service-devops.jpg',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Camera,
    title: 'CCTV Installation',
    description:
      'Professional security camera installation and monitoring systems for businesses. Protect your assets with state-of-the-art surveillance technology.',
    features: ['HD Cameras', 'Remote Monitoring', 'Cloud Storage', '24/7 Support'],
    image: '/images/service-cctv.jpg',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Database,
    title: 'Web Scraping',
    description:
      'Extract valuable data from websites efficiently and ethically. We build custom scraping solutions that deliver structured data for your business intelligence.',
    features: ['Data Extraction', 'API Integration', 'Automated Scheduling', 'Data Cleaning'],
    image: '/images/service-webscraping.jpg',
    color: 'from-orange-500 to-amber-500',
  },
];

export default function Services() {
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
      id="services"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-sm text-purple-400">Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Solutions That Drive{' '}
            <span className="text-gradient">Results</span>
          </h2>
          <p className="text-lg text-gray-400">
            From concept to deployment, we provide comprehensive technology
            solutions that help your business thrive in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredIndex === index ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-dark-900/40 transition-opacity duration-500 ${
                    hoveredIndex === index ? 'opacity-90' : 'opacity-95'
                  }`}
                />
              </div>

              {/* Content */}
              <div className="relative p-8 lg:p-10 min-h-[400px] flex flex-col">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:shadow-glow`}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors group/link"
                >
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Hover border effect */}
              <div
                className={`absolute inset-0 rounded-2xl border-2 transition-all duration-500 pointer-events-none ${
                  hoveredIndex === index
                    ? 'border-purple-500/50 shadow-glow'
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
