const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-4">
            Have questions about our services? We're here to help. Reach out to us using the information below.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600">info@advancementstrategy.com</p>
            </div>
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="font-semibold">Address</h3>
              <p className="text-gray-600">
                123 Business Avenue<br />
                Suite 456<br />
                New York, NY 10001
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Business Hours</h2>
          <div className="space-y-2">
            <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
            <p className="text-gray-600">Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact 