import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">Your Name</span> 👋
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            I'm a passionate developer focused on creating beautiful and functional web experiences.
            Welcome to my corner of the internet!
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View My Work
            </a>
            <a
              href="/contact"
              className="px-6 py-3 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project cards - you can customize these later */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-100" />
              <div className="p-4">
                <h3 className="font-semibold mb-2">Project {i}</h3>
                <p className="text-gray-600 text-sm">
                  A brief description of this amazing project and what technologies were used.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Skills & Technologies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {["TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS", "Git", "AWS", "Python"].map((skill) => (
              <div
                key={skill}
                className="bg-white p-4 rounded-lg text-center border hover:border-blue-500 transition-colors"
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
