const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Advancing Your Business Strategy
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          We help businesses transform their vision into reality through strategic planning and execution
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Strategic Planning</h3>
          <p className="text-gray-600">
            Develop comprehensive strategies tailored to your business goals and market position
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Business Optimization</h3>
          <p className="text-gray-600">
            Streamline operations and improve efficiency across your organization
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Growth Acceleration</h3>
          <p className="text-gray-600">
            Identify and capitalize on opportunities to scale your business
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home 