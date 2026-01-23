import avatarImage from '../assets/avatar.jpg'

const About = () => {
  const skills = [
    '3D Vision', 'PyTorch', 'Python'
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-stone-800 text-center mb-16">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="w-64 h-64 mx-auto md:mx-0 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
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
            <p className="text-stone-700 text-lg leading-relaxed">
              {/* TODO: make actual  */}
              <ul className="list-disc list-inside">
                <li>I like <b>3D Reconstruction</b> and <b>Neural Networks</b>.</li>
                <li>Currently, I am working as a <b>Computer Vision Engineer</b> at <b>Apple Maps</b>, Stockholm, Sweden.</li>
                <li>Previously, I was a <b>PhD student</b> in Computer Vision at <b>Linköping University</b> (Graduated October 2025).</li>
              </ul>
            </p>
            
            
            <div className="pt-6">
              <h3 className="text-2xl font-semibold text-stone-800 mb-4">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-amber-600/20 text-amber-700 px-4 py-2 rounded-full text-sm font-medium border border-amber-600/30 hover:bg-amber-600/30 transition-colors duration-200"
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