import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Hi, I'm <span className="text-blue-400">Will Breiler</span> 👋
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            I'm a software developer passionate about creating elegant solutions to complex problems.
            I specialize in building modern web applications and exploring new technologies.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
            >
              View My Work
            </a>
            <a
              href="/contact"
              className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-gray-400 hover:text-white transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-gray-800">
            <div className="aspect-video bg-gray-700" />
            <div className="p-4">
              <h3 className="font-semibold mb-2 text-white">Personal Website</h3>
              <p className="text-gray-300 text-sm">
                A modern portfolio built with Next.js, TypeScript, and Tailwind CSS.
              </p>
            </div>
          </div>
          <div className="border border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-gray-800">
            <div className="aspect-video bg-gray-700" />
            <div className="p-4">
              <h3 className="font-semibold mb-2 text-white">Project Management Tool</h3>
              <p className="text-gray-300 text-sm">
                Full-stack application for managing projects and team collaboration.
              </p>
            </div>
          </div>
          <div className="border border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-gray-800">
            <div className="aspect-video bg-gray-700" />
            <div className="p-4">
              <h3 className="font-semibold mb-2 text-white">E-commerce Platform</h3>
              <p className="text-gray-300 text-sm">
                Modern e-commerce solution with real-time inventory and analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Skills & Technologies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Python",
              "AWS",
              "Docker",
              "GraphQL",
              "PostgreSQL",
              "MongoDB",
              "Git",
              "CI/CD"
            ].map((skill) => (
              <div
                key={skill}
                className="bg-gray-900 p-4 rounded-lg text-center text-white border border-gray-700 hover:border-blue-500 transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
