import { useState } from "react";
import book from './assets/books.png'
import calendar from './assets/calendar.jpg'
import kit from './assets/kit.jpg'
import template from './assets/template.jpg'

export default function Toolkit() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="py-12 sm:py-16 lg:py-28 mb-12 sm:mb-0" id='toolkit'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-purple-20 font-bold mb-4 sm:mb-6">
            Products & Pricing
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Choose the solution that fits your needs and take your content to the next level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Product 1: Ebook */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transform transition-all hover:-translate-y-2 flex flex-col">
            <div className="w-full h-48 sm:h-56 flex items-center justify-center mb-4">
              <img src={book} alt="Ebook" className="max-w-full max-h-full object-contain" loading="lazy" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-purple-20 mb-2">Ebook</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 flex-grow leading-relaxed">
              Essential guide to growing your brand on social media with proven strategies and frameworks.
            </p>
            <div className="border-t border-gray-200 pt-4 sm:pt-6">
              <p className="text-3xl sm:text-4xl font-bold text-green-600">Free</p>
            </div>
            <button className="mt-6 w-full px-4 sm:px-6 py-3 sm:py-4 bg-purple-20 text-white rounded-lg font-medium text-sm sm:text-base hover:bg-purple-700 transition-all cursor-pointer">
              Download Now
            </button>
          </div>

          {/* Product 2: 30-Day Content Calendar Template */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transform transition-all hover:-translate-y-2 flex flex-col">
            <div className="w-full h-48 sm:h-56 flex items-center justify-center mb-4">
              <img src={calendar} alt="Content Calendar" className="max-w-full max-h-full object-contain" loading="lazy" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-purple-20 mb-2">30-Day Content Calendar Template</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 flex-grow leading-relaxed">
              Choose a template tailored to your niche. Fully customized and ready to implement immediately.
            </p>
            <div className="border-t border-gray-200 pt-4 sm:pt-6">
              <p className="text-3xl sm:text-4xl font-bold text-orange-20">$120</p>
            </div>
            <button className="mt-6 w-full px-4 sm:px-6 py-3 sm:py-4 bg-orange-20 text-white rounded-lg font-medium text-sm sm:text-base hover:bg-orange-600 transition-all cursor-pointer">
              Get Template
            </button>
          </div>

          {/* Product 3: Design Templates */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transform transition-all hover:-translate-y-2 flex flex-col">
            <div className="w-full h-48 sm:h-56 flex items-center justify-center mb-4">
              <img src={template} alt="Design Templates" className="max-w-full max-h-full object-contain" loading="lazy" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-purple-20 mb-2">Design Templates</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 flex-grow leading-relaxed">
              Fully customized graphics. Professionally designed and ready for immediate implementation.
            </p>
            <div className="border-t border-gray-200 pt-4 sm:pt-6">
              <p className="text-3xl sm:text-4xl font-bold text-orange-20">$150</p>
            </div>
            <button className="mt-6 w-full px-4 sm:px-6 py-3 sm:py-4 bg-orange-20 text-white rounded-lg font-medium text-sm sm:text-base hover:bg-orange-600 transition-all cursor-pointer">
              Get Templates
            </button>
          </div>

          {/* Product 4: Bundle */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transform transition-all hover:-translate-y-2 flex flex-col border-2 border-purple-20 relative md:col-span-2 lg:col-span-1">
            <div className="absolute top-4 right-4 bg-orange-20 text-white px-3 py-1 rounded-full text-xs font-bold">
              SAVE $30
            </div>
            <div className="w-full h-48 sm:h-56 flex items-center justify-center mb-4">
              <div className="flex gap-2 items-center justify-center">
                <img src={calendar} alt="Calendar" className="max-w-full max-h-full object-contain w-1/2" loading="lazy" />
                <img src={template} alt="Template" className="max-w-full max-h-full object-contain w-1/2" loading="lazy" />
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-purple-20 mb-2">Bundle</h3>
            <p className="text-gray-700 text-sm sm:text-base mb-6 sm:mb-8 flex-grow leading-relaxed">
              Calendar + Design Templates. Get niche-specific content calendar and fully branded design templates ready for immediate implementation.
            </p>
            <div className="border-t border-purple-200 pt-4 sm:pt-6">
              <p className="text-3xl sm:text-4xl font-bold text-purple-20">$240</p>
              <p className="text-sm text-gray-600 mt-1">Regularly $270</p>
            </div>
            <button className="mt-6 w-full px-4 sm:px-6 py-3 sm:py-4 bg-purple-20 text-white rounded-lg font-medium text-sm sm:text-base hover:bg-purple-700 transition-all cursor-pointer">
              Get Bundle
            </button>
          </div>

          {/* Product 5: Full Toolkit */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transform transition-all hover:-translate-y-2 flex flex-col md:col-span-2 lg:col-span-1">
            <div className="w-full h-48 sm:h-56 flex items-center justify-center mb-4">
              <img src={kit} alt="Full Toolkit" className="max-w-full max-h-full object-contain" loading="lazy" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-purple-20 mb-2">Full Toolkit</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 flex-grow leading-relaxed">
              Everything included: 30-day calendar, design templates, ebook, and exclusive resources all in one package.
            </p>
            <div className="border-t border-gray-200 pt-4 sm:pt-6">
              <p className="text-3xl sm:text-4xl font-bold text-orange-20">$75</p>
            </div>
            <button className="mt-6 w-full px-4 sm:px-6 py-3 sm:py-4 bg-orange-20 text-white rounded-lg font-medium text-sm sm:text-base hover:bg-orange-600 transition-all cursor-pointer">
              Get Full Toolkit
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}