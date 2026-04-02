import { useState } from 'react'
import book from './assets/books.png'
import calendar from './assets/calendar.jpg'
import kit from './assets/template.jpg'
import template from './assets/template.jpg'
import NForm from './Form.jsx'
import ProductDetails from './ProductDetails.jsx'




export default function Toolkit() {
  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = {
    ebook: { name: 'Post With Peace — Ebook', price: 0, key: 'ebook' },
    calendar: { name: '30-Day Content Calendar Template', price: 120, key: 'calendar' },
    design: { name: 'Design Templates', price: 150, key: 'design' },
    bundle: { name: 'Bundle', price: 240, key: 'bundle' },
    toolkit: { name: 'Full Toolkit', price: 75, key: 'toolkit' }
  };

  const handleProductClick = (productKey) => {
    setSelectedProduct(products[productKey]);
    setShowDetails(true);
  };

  const handleProceedToForm = () => {
    setShowDetails(false);
    setShowForm(true);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-28 mb-12 sm:mb-0" id='toolkit'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 lg:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-purple-20 font-bold mb-2 sm:mb-3">
            The Complete Social Media Toolkit
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Everything you need to plan, design, and post content that performs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 max-w-7xl mx-auto">
          {/* Product 1: Ebook */}
          <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg hover:shadow-xl transform transition-all hover:-translate-y-1 flex flex-col">
            <div className="w-full h-32 sm:h-40 flex items-center justify-center mb-2">
              <img src={book} alt="Ebook" className="max-w-full max-h-full object-contain" loading="lazy" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-purple-20 mb-1">Create With Peace Ebook</h3>
            <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 flex-grow leading-relaxed">
              Essential guide to growing your brand on social media with proven strategies and frameworks.
            </p>
            <div className="border-t border-gray-200 pt-2 sm:pt-3">
              <p className="text-xl sm:text-2xl font-bold text-green-600">Free</p>
            </div>
            <button 
              onClick={() => handleProductClick('ebook')}
              className="mt-3 w-full px-3 sm:px-4 py-2 sm:py-2 bg-purple-20 text-white rounded font-medium text-xs sm:text-sm hover:bg-purple-700 transition-all cursor-pointer">
              Download Now
            </button>
          </div>

          {/* Product 2: 30-Day Content Calendar Template */}
          <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg hover:shadow-xl transform transition-all hover:-translate-y-1 flex flex-col">
            <div className="w-full h-32 sm:h-40 flex items-center justify-center mb-2">
              <img src={calendar} alt="Content Calendar" className="max-w-full max-h-full object-contain" loading="lazy" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-purple-20 mb-1">30-Day Content Calendar Template</h3>
            <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 flex-grow leading-relaxed">
              Choose a template tailored to your niche. Fully customized and ready to implement immediately.
            </p>
            <div className="border-t border-gray-200 pt-2 sm:pt-3">
              <p className="text-xl sm:text-2xl font-bold text-orange-20">$120</p>
            </div>
            <button 
              onClick={() => handleProductClick('calendar')}
              className="mt-3 w-full px-3 sm:px-4 py-2 sm:py-2 bg-orange-20 text-white rounded font-medium text-xs sm:text-sm hover:bg-orange-600 transition-all cursor-pointer">
              Get Template
            </button>
          </div>

          {/* Product 3: Design Templates */}
          <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg hover:shadow-xl transform transition-all hover:-translate-y-1 flex flex-col">
            <div className="w-full h-32 sm:h-40 flex items-center justify-center mb-2">
              <img src={template} alt="Design Templates" className="max-w-full max-h-full object-contain" loading="lazy" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-purple-20 mb-1">Design Templates</h3>
            <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 flex-grow leading-relaxed">
              Fully customized graphics. Professionally designed and ready for immediate implementation.
            </p>
            <div className="border-t border-gray-200 pt-2 sm:pt-3">
              <p className="text-xl sm:text-2xl font-bold text-orange-20">$150</p>
            </div>
            <button 
              onClick={() => handleProductClick('design')}
              className="mt-3 w-full px-3 sm:px-4 py-2 sm:py-2 bg-orange-20 text-white rounded font-medium text-xs sm:text-sm hover:bg-orange-600 transition-all cursor-pointer">
              Get Templates
            </button>
          </div>
         
          {/* Product 4: Full Toolkit */}
          <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg hover:shadow-xl transform transition-all hover:-translate-y-1 flex flex-col">
            <div className="w-full h-32 sm:h-40 flex items-center justify-center mb-2">
              <img src={kit} alt="Full Toolkit" className="max-w-full max-h-full object-contain" loading="lazy" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-purple-20 mb-1">Full Toolkit</h3>
            <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 flex-grow leading-relaxed">
              Everything included: 30-day calendar, design templates, ebook, and exclusive resources all in one package.
            </p>
            <div className="border-t border-gray-200 pt-2 sm:pt-3">
              <p className="text-xl sm:text-2xl font-bold text-orange-20">$75</p>
            </div>
            <button 
              onClick={() => handleProductClick('toolkit')}
              className="mt-3 w-full px-3 sm:px-4 py-2 sm:py-2 bg-orange-20 text-white rounded font-medium text-xs sm:text-sm hover:bg-orange-600 transition-all cursor-pointer">
              Get Full Toolkit
            </button>
          </div>
        </div>
      </div>

      <ProductDetails 
        showDetails={showDetails}
        setShowDetails={setShowDetails}
        selectedProduct={selectedProduct}
        onProceed={handleProceedToForm}
      />

      <NForm
        showForm={showForm}
        setShowForm={setShowForm}
        selectedProduct={selectedProduct}
      />

    </section>
  )
}
