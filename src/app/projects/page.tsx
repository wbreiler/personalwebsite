export default function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "A detailed description of your first project. Explain the problem it solves, technologies used, and your role in its development.",
      image: "/placeholder.jpg",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Project 2",
      description: "Description of your second project. What makes it special? What challenges did you overcome?",
      image: "/placeholder.jpg",
      tags: ["TypeScript", "Next.js", "Tailwind"],
      link: "#"
    },
    {
      title: "Project 3",
      description: "Your third project showcase. Highlight the key features and your technical achievements.",
      image: "/placeholder.jpg",
      tags: ["Python", "Django", "PostgreSQL"],
      link: "#"
    },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <div className="h-48 w-full md:w-48 bg-gray-200" />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
                  <a
                    href={project.link}
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project →
                  </a>
                </div>
                <p className="mt-4 text-gray-600">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
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