import roma_matches from "../assets/roma_matches.png"

const Projects = () => {
  const projects = [
    {
      title: "DaD: Distilled Reinforcement Learning for Diverse Keypoint Detection",
      abstract: "Keypoints are what enable Structure-from-Motion (SfM) systems to scale to thousands of images. However, designing a keypoint detection objective is a non-trivial task, as SfM is non-differentiable. Typically, an auxiliary objective involving a descriptor is optimized. This however induces a dependency on the descriptor, which is undesirable. In this paper we propose a fully self-supervised and descriptor-free objective for keypoint detection, through reinforcement learning. To ensure training does not degenerate, we leverage a balanced top-K sampling strategy. While this already produces competitive models, we find that two qualitatively different types of detectors emerge, which are only able to detect light and dark keypoints respectively. To remedy this, we train a third detector, DaD, that optimizes the Kullback-Leibler divergence of the pointwise maximum of both light and dark detectors. Our approach significantly improve upon SotA across a range of benchmarks. Code and model weights are publicly available at https://github.com/parskatt/dad",
      // technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubLink: "https://github.com/parskatt/DaD",
      // liveLink: "https://parskatt.github.io/RoMa/",
      image: "https://github.com/Parskatt/dad/raw/main/assets/qualitative.jpg"
    },

    {
      title: "RoMa: Robust Dense Feature Matching",
      abstract: "Feature matching is an important computer vision task that involves estimating correspondences between two images of a 3D scene, and dense methods estimate all such correspondences. \
      The aim is to learn a robust model, i.e., a model able to match under challenging real-world changes. \
      In this work, we propose such a model, leveraging frozen pretrained features from the foundation model DINOv2. \
      Although these features are significantly more robust than local features trained from scratch, they are inherently coarse. \
      We therefore combine them with specialized ConvNet fine features, creating a precisely localizable feature pyramid. \
      To further improve robustness, we propose a tailored transformer match decoder that predicts anchor probabilities, which enables it to express multimodality. \
      Finally, we propose an improved loss formulation through regression-by-classification with subsequent robust regression. \
      We conduct a comprehensive set of experiments that show that our method, RoMa, achieves significant gains, setting a new state-of-the-art. \
      In particular, we achieve a 36% improvement on the extremely challenging WxBS benchmark. Code is provided at this https://github.com/parskatt/RoMa.",
      // technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubLink: "https://github.com/parskatt/RoMa",
      liveLink: "https://parskatt.github.io/RoMa/",
      // image: {roma_matches}
      image: roma_matches
    },

  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-700 text-center mb-16">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 group"
            >
              {/* <div className="h-48 bg-gradient-to-br from-emerald-400/20 to-pink-400/20 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
              </div> */}
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-700 mb-3 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-700 text-sm mb-4 leading-relaxed">
                  {project.abstract}
                </p>
                
                {/* <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div> */}
                
                <div className="flex space-x-4">
                  <a
                    href={project.githubLink}
                    className="flex items-center space-x-2 text-slate-700 hover:text-white transition-colors text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveLink}
                    className="flex items-center space-x-2 text-slate-700 hover:text-white transition-colors text-sm"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span>Project Page</span>
                  </a>
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