export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-blue-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold">National Landing Rentals</h1>
          <p className="mt-2 text-blue-100">Find Your Perfect Home in Crystal City, Pentagon City & Aurora Highlands</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Find Your Perfect National Landing Rental
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Discover apartments and houses for rent in Northern Virginia&apos;s most vibrant neighborhood.
              Near Amazon HQ2, The Pentagon, and Reagan National Airport.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Start Your Search</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="https://www.apartments.com/national-landing-va/" target="_blank" rel="noopener noreferrer"
              className="block p-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition-all hover:shadow-xl">
              <h4 className="text-xl font-bold mb-2">Apartments.com</h4>
              <p className="text-blue-100">Browse thousands of apartments</p>
            </a>

            <a href="https://www.zillow.com/national-landing-arlington-va/rentals/" target="_blank" rel="noopener noreferrer"
              className="block p-6 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md transition-all hover:shadow-xl">
              <h4 className="text-xl font-bold mb-2">Zillow Rentals</h4>
              <p className="text-green-100">Search local rental listings</p>
            </a>

            <a href="https://www.trulia.com/for_rent/National_Landing,Arlington,VA/" target="_blank" rel="noopener noreferrer"
              className="block p-6 bg-orange-600 hover:bg-orange-700 text-white rounded-lg shadow-md transition-all hover:shadow-xl">
              <h4 className="text-xl font-bold mb-2">Trulia</h4>
              <p className="text-orange-100">Explore neighborhood insights</p>
            </a>

            <a href="https://hotpads.com/national-landing-arlington-va/apartments-for-rent" target="_blank" rel="noopener noreferrer"
              className="block p-6 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-md transition-all hover:shadow-xl">
              <h4 className="text-xl font-bold mb-2">HotPads</h4>
              <p className="text-purple-100">Find apartments & houses</p>
            </a>
          </div>
        </div>
      </section>

      {/* Neighborhoods Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">National Landing Neighborhoods</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h4 className="text-2xl font-bold text-blue-700 mb-4">Crystal City</h4>
              <p className="text-gray-700 mb-4">
                Modern high-rise living with underground shopping and dining. Direct Metro access and steps from Amazon HQ2.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>✓ Crystal City Metro (Blue/Yellow)</li>
                <li>✓ Underground Crystal City Shops</li>
                <li>✓ Amazon HQ2 Campus</li>
                <li>✓ Avg 2BR Rent: $2,400+</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h4 className="text-2xl font-bold text-green-700 mb-4">Pentagon City</h4>
              <p className="text-gray-700 mb-4">
                Shopping hub with Fashion Centre mall. Prime location between DC and National Airport.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>✓ Pentagon City Metro (Blue/Yellow)</li>
                <li>✓ Fashion Centre at Pentagon City</li>
                <li>✓ Costco & major retailers</li>
                <li>✓ Avg 2BR Rent: $2,300+</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h4 className="text-2xl font-bold text-orange-700 mb-4">Aurora Highlands</h4>
              <p className="text-gray-700 mb-4">
                Quieter residential area with parks and green spaces. Family-friendly with easy airport access.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>✓ Crystal City Metro nearby</li>
                <li>✓ Virginia Highlands Park</li>
                <li>✓ Reagan Airport (5 min)</li>
                <li>✓ Avg 2BR Rent: $2,200+</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Helpful Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Average Rental Prices</h4>
              <ul className="text-gray-700 space-y-1">
                <li>Studio: $1,800 - $2,200/mo</li>
                <li>1 Bedroom: $2,000 - $2,600/mo</li>
                <li>2 Bedroom: $2,200 - $3,200/mo</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Public Transit</h4>
              <ul className="text-gray-700 space-y-1">
                <li>Blue Line Metro</li>
                <li>Yellow Line Metro</li>
                <li>Multiple bus routes</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Major Employers</h4>
              <ul className="text-gray-700 space-y-1">
                <li>Amazon HQ2</li>
                <li>The Pentagon</li>
                <li>Various tech companies</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Transportation</h4>
              <ul className="text-gray-700 space-y-1">
                <li>Reagan National Airport (10 min)</li>
                <li>Downtown DC (15 min Metro)</li>
                <li>I-395 & GW Parkway access</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-300">© 2025 National Landing Rentals. All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-2">
              Find apartments and houses for rent in National Landing, Crystal City, Pentagon City, and Aurora Highlands, Virginia.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
