import roma_matches from "../assets/roma_matches.png"

const Projects = () => {
  const projects = [
    {
      title: "DaD: Distilled Reinforcement Learning for Diverse Keypoint Detection",
      githubLink: "https://github.com/parskatt/DaD",
      arxivLink: "https://arxiv.org/abs/2503.07347",
      image: "https://github.com/Parskatt/dad/raw/main/assets/qualitative.jpg"
    },
    {
      title: "RoMa: Robust Dense Feature Matching",
      githubLink: "https://github.com/parskatt/RoMa",
      arxivLink: "https://arxiv.org/abs/2305.15404",
      image: roma_matches
    },
    {
      title: "RoMa v2: Harder Better Faster Denser Feature Matching",
      githubLink: "https://github.com/parskatt/romav2",
      arxivLink: "https://arxiv.org/abs/2511.15706",
      image: "https://github.com/Parskatt/RoMaV2/raw/main/assets/qualitative.png"
    },
    {
      title: "Towards the Next Generation of 3D Reconstruction (PhD Thesis)",
      // githubLink: "https://github.com/parskatt/3d_reconstruction",
      arxivLink: "https://doi.org/10.3384/9789181181906",
      image: "https://liu.diva-portal.org/smash/get/diva2:1997111/PREVIEW01.png"
    }
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-stone-800 text-center mb-16">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-sm border border-amber-200/50 rounded-2xl overflow-hidden hover:border-amber-600/50 transition-all duration-300 group shadow-sm"
            >
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-stone-800 mb-3 group-hover:text-amber-700 transition-colors">
                  {project.title}
                </h3>
                
                
                <div className="flex space-x-4">
                  <a
                    href={project.githubLink}
                    className="flex items-center space-x-2 text-stone-600 hover:text-amber-700 transition-colors text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>Code</span>
                  </a>
                  {project.arxivLink && (
                    <a
                      href={project.arxivLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-stone-600 hover:text-amber-700 transition-colors text-sm"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                        <line x1="10" y1="9" x2="8" y2="9"/>
                      </svg>
                      <span>Paper</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 