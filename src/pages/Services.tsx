import React from 'react'

const Services = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Strategic Planning</h2>
          <p className="text-gray-600 mb-4">
            Develop comprehensive business strategies aligned with your goals and market position.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Market Analysis</li>
            <li>Competitive Strategy</li>
            <li>Growth Planning</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Business Optimization</h2>
          <p className="text-gray-600 mb-4">
            Streamline operations and improve efficiency across your organization.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Process Improvement</li>
            <li>Resource Optimization</li>
            <li>Performance Metrics</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Growth Acceleration</h2>
          <p className="text-gray-600 mb-4">
            Identify and capitalize on opportunities to scale your business.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Market Expansion</li>
            <li>Revenue Growth</li>
            <li>Strategic Partnerships</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Digital Transformation</h2>
          <p className="text-gray-600 mb-4">
            Modernize your business with cutting-edge digital solutions.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Technology Integration</li>
            <li>Digital Strategy</li>
            <li>Innovation Consulting</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Services 