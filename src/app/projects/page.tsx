export default function Projects() {
  const projects = [
    {
      title: "Personal Website",
      description: "A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a responsive design, dark mode, and smooth animations.",
      image: "/placeholder.jpg",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "https://github.com/yourusername/portfolio"
    },
    {
      title: "Project Management Tool",
      description: "Full-stack application for managing projects and team collaboration. Includes real-time updates, task tracking, and team communication features.",
      image: "/placeholder.jpg",
      tags: ["React", "Node.js", "MongoDB", "Socket.io"],
      link: "https://github.com/yourusername/project-manager"
    },
    {
      title: "E-commerce Platform",
      description: "Modern e-commerce solution with real-time inventory management, payment processing, and analytics dashboard.",
      image: "/placeholder.jpg",
      tags: ["Next.js", "PostgreSQL", "Stripe", "AWS"],
      link: "https://github.com/yourusername/ecommerce"
    },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-white mb-8">My Projects</h1>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-colors">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <div className="h-48 w-full md:w-48 bg-gray-700" />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                  <a
                    href={project.link}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project →
                  </a>
                </div>
                <p className="mt-4 text-gray-300">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 