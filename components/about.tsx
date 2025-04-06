export default function About() {
  return (
    <section id="about" className="py-20 bg-beige-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-maroon-800 mb-4">About Us</h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/placeholder.svg?height=600&width=800"
              alt="Henna Artist"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-maroon-800 mb-4">Our Story</h3>
            <p className="text-maroon-700 mb-6">
              MehendiArtsNepal was founded in 2015 with a passion for preserving and evolving the ancient art of henna.
              What began as a small home-based business has grown into one of Nepal's most sought-after henna design
              services.
            </p>

            <h3 className="text-2xl font-semibold text-maroon-800 mb-4">Our Philosophy</h3>
            <p className="text-maroon-700 mb-6">
              We believe that henna is more than just body art—it's a celebration of tradition, culture, and personal
              expression. Each design we create is a unique piece of art that tells a story and enhances the beauty of
              special moments.
            </p>

            <h3 className="text-2xl font-semibold text-maroon-800 mb-4">Our Artist</h3>
            <p className="text-maroon-700">
              Our lead artist, Priya, has over 10 years of experience in henna artistry. Trained in both traditional
              Nepali and contemporary international styles, she brings a unique blend of cultural heritage and modern
              aesthetics to every design.
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-maroon-800 mb-8 text-center">What Our Clients Say</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-beige-100 p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-maroon-200 flex items-center justify-center text-maroon-800 font-bold">
                  SA
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-maroon-800">Sita Adhikari</h4>
                  <p className="text-sm text-maroon-600">Bridal Client</p>
                </div>
              </div>
              <p className="text-maroon-700 italic">
                "My wedding henna was absolutely stunning! Priya took the time to understand exactly what I wanted and
                created a design that exceeded my expectations. Highly recommended!"
              </p>
            </div>

            <div className="bg-beige-100 p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-maroon-200 flex items-center justify-center text-maroon-800 font-bold">
                  RK
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-maroon-800">Raj Kumar</h4>
                  <p className="text-sm text-maroon-600">Event Organizer</p>
                </div>
              </div>
              <p className="text-maroon-700 italic">
                "We hired MehendiArtsNepal for our cultural festival, and they were a huge hit! Professional, punctual,
                and incredibly talented. Our guests were thrilled with their designs."
              </p>
            </div>

            <div className="bg-beige-100 p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-maroon-200 flex items-center justify-center text-maroon-800 font-bold">
                  MS
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-maroon-800">Maya Shrestha</h4>
                  <p className="text-sm text-maroon-600">Regular Client</p>
                </div>
              </div>
              <p className="text-maroon-700 italic">
                "I've been going to MehendiArtsNepal for years now, and I'm never disappointed. Their designs are always
                fresh and beautiful, and the henna quality is excellent with rich color."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

