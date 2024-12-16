

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Projects</h2>
        
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-6">About Gradeworx Contracting</h3>
          <div className="prose lg:prose-lg">
            <p className="mb-4">
              At Gradeworx Contracting, we are dedicated to delivering top-notch construction and landscaping services to Albany, NY, and the surrounding areas. With a proven track record of excellence, we specialize in a range of projects, including concrete work, gravel driveways, gutter and French drain installations, utility hookups, hydroseeding, and snowplowing.
            </p>
            <p className="mb-4">
              Our team combines skill, reliability, and a commitment to customer satisfaction, ensuring every project is completed to the highest standard. Whether it's enhancing your property with durable concrete solutions, preparing your landscape with expert grading and hydroseeding, or keeping your driveways clear in winter, Gradeworx is here to exceed your expectations.
            </p>
            <p>
              Explore our gallery to see how we've helped clients transform their properties with exceptional craftsmanship and attention to detail. Let us help you bring your next project to life!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src="/images/project1.jpg" alt="Completed driveway project" className="w-full h-64 object-cover" />
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-xl mb-2">Driveway Installation</h3>
              <p className="text-gray-600">Professional driveway installation with attention to detail</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src="/images/project2.jpg" alt="Landscaping project" className="w-full h-64 object-cover" />
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-xl mb-2">Landscape Design</h3>
              <p className="text-gray-600">Beautiful landscape transformation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}