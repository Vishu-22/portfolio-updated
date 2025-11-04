const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛒',
      gradient: 'from-blue-500 to-cyan-500',
      link: '#',
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates and drag-and-drop functionality.',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      image: '📋',
      gradient: 'from-purple-500 to-pink-500',
      link: '#',
    },
    {
      title: 'Weather Dashboard',
      description:
        'A beautiful weather dashboard with location-based forecasts and interactive weather maps.',
      technologies: ['React', 'API Integration', 'Chart.js'],
      image: '🌤️',
      gradient: 'from-yellow-500 to-orange-500',
      link: '#',
    },
    {
      title: 'Social Media Analytics',
      description:
        'Analytics dashboard for social media metrics with data visualization and export capabilities.',
      technologies: ['React', 'Python', 'D3.js', 'PostgreSQL'],
      image: '📊',
      gradient: 'from-green-500 to-teal-500',
      link: '#',
    },
    {
      title: 'Portfolio Website',
      description:
        'A modern, responsive portfolio website showcasing projects and skills with smooth animations.',
      technologies: ['React', 'Tailwind CSS', 'Vite'],
      image: '💼',
      gradient: 'from-indigo-500 to-purple-500',
      link: '#',
    },
    {
      title: 'Recipe Finder App',
      description:
        'Discover and save recipes with ingredient-based search and meal planning features.',
      technologies: ['React', 'Spoonacular API', 'LocalStorage'],
      image: '🍳',
      gradient: 'from-red-500 to-pink-500',
      link: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 text-lg">
            A collection of my recent work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div
                className={`bg-gradient-to-r ${project.gradient} h-48 flex items-center justify-center text-6xl`}
              >
                {project.image}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  View Project
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

