export function Home() {
    return (
      <section id="home" className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80")',
            filter: 'brightness(0.7)'
          }}
        />
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Building Excellence in Every Project
              </h1>
              <p className="text-xl text-white mb-8">
                Professional construction and landscaping services in Albany, NY and surrounding areas
              </p>
              <a 
                href="#contact" 
                className="bg-[#c5ff00] text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#a3d600] transition-colors inline-block"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }