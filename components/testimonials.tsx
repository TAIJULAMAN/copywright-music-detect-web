export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M",
      role: "Content Creator",
      image: "👩",
      text: "Saved me from potential copyright issues. Quick and reliable service.",
    },
    {
      name: "Mike P",
      role: "Music Manager",
      image: "👨",
      text: "Essential tool for anyone serious about content creation. Highly recommend!",
    },
    {
      name: "Lisa K",
      role: "Influencer",
      image: "👱‍♀️",
      text: "Fast, accurate, and affordable. Perfect for checking my content before posting.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
          <p className="text-gray-600">Trusted by content creators worldwide</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
