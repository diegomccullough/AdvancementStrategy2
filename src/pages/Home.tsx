const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <section className="mb-12">
        <h1 className="text-5xl font-bold mb-6">Welcome to Advancement Strategy</h1>
        <p className="text-xl text-gray-600 mb-8">
          Empowering businesses to reach their full potential through strategic planning and innovative solutions.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Get Started
        </button>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
            <p className="text-gray-600">
              Our experienced professionals bring decades of industry expertise to every project.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
            <p className="text-gray-600">
              We've helped numerous businesses achieve their growth and optimization goals.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Tailored Solutions</h3>
            <p className="text-gray-600">
              Every strategy is customized to meet your unique business needs and objectives.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6">Our Approach</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600 mb-4">
            We believe in a collaborative approach, working closely with our clients to understand their challenges
            and develop effective solutions. Our process is transparent, results-driven, and focused on your success.
          </p>
          <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            Learn More →
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home 