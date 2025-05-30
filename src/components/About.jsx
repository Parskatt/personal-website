import avatarImage from '../assets/avatar.jpg'

const About = () => {
  const skills = [
    '3D Vision', 'PyTorch', 'Python'
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-700 text-center mb-16">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="w-64 h-64 mx-auto md:mx-0 bg-gradient-to-br from-emerald-400 to-emerald-400 rounded-full flex items-center justify-center">
              <div className="w-56 h-56 rounded-full overflow-hidden">
                <img 
                  src={avatarImage}
                  alt="Profile avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-slate-700 text-lg leading-relaxed">
              I am a PhD student at the Computer Vision Laboratory at Linköping University, Sweden.
              I am broadly interested in 3D reconstruction and neural networks.
              Mostly I've worked on image matching, but who knows what the future holds.
            </p>
            
            
            <div className="pt-6">
              <h3 className="text-2xl font-semibold text-slate-700 mb-4">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-emerald-500/20 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 