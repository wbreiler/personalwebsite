export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="prose prose-lg">
            <p className="text-lg text-gray-600 mb-6">
              Hello! I'm [Your Name], a passionate developer with a keen interest in building
              beautiful and functional web applications. I love turning complex problems into
              simple, elegant solutions.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">My Journey</h2>
            <p className="text-gray-600 mb-6">
              [Share your journey here - how you got into development, what drives you,
              and what you're passionate about. Make it personal and engaging!]
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Experience</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-bold">Senior Developer @ Company Name</h3>
                <p className="text-gray-500">2020 - Present</p>
                <p className="text-gray-600 mt-2">
                  Led development of key projects and mentored junior developers.
                  Implemented modern web technologies and best practices.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-bold">Full Stack Developer @ Another Company</h3>
                <p className="text-gray-500">2018 - 2020</p>
                <p className="text-gray-600 mt-2">
                  Developed and maintained multiple web applications.
                  Collaborated with cross-functional teams to deliver high-quality solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
            <h2 className="text-xl font-bold mb-4">Quick Facts</h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="text-blue-500">📍</span>
                <span>Based in [Your Location]</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">💼</span>
                <span>Open to opportunities</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">🎓</span>
                <span>BS in Computer Science</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">🌟</span>
                <span>5+ years experience</span>
              </li>
            </ul>

            <h2 className="text-xl font-bold mt-8 mb-4">Connect</h2>
            <div className="space-y-3">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 