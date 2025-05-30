const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-700 mb-6 animate-fade-in">
            Hej, I'm Johan Edstedt.            {/* <span className="bg-gradient-to-r from-emerald-400 to-pink-400 bg-clip-text text-transparent">
            </span> */}
          </h1>
          {/* <p className="text-xl md:text-2xl text-slate-500 mb-8 animate-fade-in-delay">
            A passionate developer creating amazing digital experiences
          </p> */}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-emerald-400 text-emerald-400 px-8 py-3 rounded-full font-semibold hover:bg-emerald-400 hover:text-white transition-all duration-300"
            // className="bg-gradient-to-r from-emerald-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-emerald-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-emerald-400 text-emerald-400 px-8 py-3 rounded-full font-semibold hover:bg-emerald-400 hover:text-white transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero 