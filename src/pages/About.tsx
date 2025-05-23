const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">About Advancement Strategy</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-4">
          At Advancement Strategy, we're dedicated to helping businesses achieve their full potential through strategic planning and innovative solutions.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Leadership</h3>
            <p className="text-gray-600">
              Our experienced leadership team brings decades of combined expertise in business strategy and innovation.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Experts</h3>
            <p className="text-gray-600">
              Our team of experts specializes in various aspects of business development and strategic planning.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
        <p className="text-gray-600 mb-4">
          We believe in a collaborative approach, working closely with our clients to understand their unique challenges and develop tailored solutions.
        </p>
      </section>
    </div>
  )
}

export default About 