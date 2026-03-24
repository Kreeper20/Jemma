import { useState } from 'react'
import book from './assets/books.png'
import calendar from './assets/calendar.jpg'
import kit from './assets/kit.jpg'
import template from './assets/template.jpg'

const PAYSTACK_PUBLIC_KEY = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || 'pk_test_51234567890abcdef'

export default function Toolkit() {
  const [email, setEmail] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [error, setError] = useState('');

  const products = [
    { id: 'ebook', name: 'Ebook', price: 0, type: 'free' },
    { id: 'calendar', name: '30-Day Content Calendar Template', price: 120, type: 'paid' },
    { id: 'design', name: 'Design Templates', price: 150, type: 'paid' },
    { id: 'bundle', name: 'Bundle (Calendar + Design Templates)', price: 240, type: 'paid' },
    { id: 'toolkit', name: 'Full Toolkit', price: 75, type: 'paid' },
  ];

  const handlePaymentClick = (productId) => {
    const product = products.find(p => p.id === productId);
    if (product.type === 'free') {
      downloadEbook();
    } else {
      setSelectedProduct(product);
      setShowEmailModal(true);
      setError('');
    }
  };

  const downloadEbook = () => {
    alert('Ebook downloaded! Check your downloads folder.');
  };

  const handlePaystackSuccess = (reference) => {
    alert(`Payment successful! Reference: ${reference.reference}`);
    setShowEmailModal(false);
    setEmail('');
    setSelectedProduct(null);
  };

  const handlePaystackError = () => {
    setError('Payment cancelled or failed. Please try again.');
  };

  const initiatePayment = () => {
    if (!email) {
      setError('Please enter your email address');
      return;
    }

    if (!selectedProduct) return;

    const handler = window.PaystackPop.setup({
      key: PAYSTACK_PUBLIC_KEY,
      email: email,
      amount: selectedProduct.price * 100,
      ref: new Date().getTime().toString(),
      onClose: handlePaystackError,
      onSuccess: handlePaystackSuccess,
    });
    handler.openIframe();
  };

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
            <button 
              onClick={() => handlePaymentClick('ebook')}
              className="mt-6 w-full px-4 sm:px-6 py-3 sm:py-4 bg-purple-20 text-white rounded-lg font-medium text-sm sm:text-base hover:bg-purple-700 transition-all cursor-pointer">
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
            <button 
              onClick={() => handlePaymentClick('calendar')}
              className="mt-6 w-full px-4 sm:px-6 py-3 sm:py-4 bg-orange-20 text-white rounded-lg font-medium text-sm sm:text-base hover:bg-orange-600 transition-all cursor-pointer">
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
            <button 
              onClick={() => handlePaymentClick('design')}
              className="mt-6 w-full px-4 sm:px-6 py-3 sm:py-4 bg-orange-20 text-white rounded-lg font-medium text-sm sm:text-base hover:bg-orange-600 transition-all cursor-pointer">
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
            <button 
              onClick={() => handlePaymentClick('bundle')}
              className="mt-6 w-full px-4 sm:px-6 py-3 sm:py-4 bg-purple-20 text-white rounded-lg font-medium text-sm sm:text-base hover:bg-purple-700 transition-all cursor-pointer">
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
            <button 
              onClick={() => handlePaymentClick('toolkit')}
              className="mt-6 w-full px-4 sm:px-6 py-3 sm:py-4 bg-orange-20 text-white rounded-lg font-medium text-sm sm:text-base hover:bg-orange-600 transition-all cursor-pointer">
              Get Full Toolkit
            </button>
          </div>
        </div>
      </div>

      {/* Email Modal for Payment */}
      {showEmailModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-purple-20 mb-2">Enter Your Email</h3>
            <p className="text-gray-600 text-sm mb-6">
              We'll send your {selectedProduct?.name} to this email after payment.
            </p>
            
            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                {error}
              </div>
            )}
            
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-20 disabled:bg-gray-100"
            />
            
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowEmailModal(false);
                  setEmail('');
                  setSelectedProduct(null);
                  setError('');
                }}
                className="flex-1 px-4 py-3 bg-gray-200 text-gray-900 rounded-lg font-medium hover:bg-gray-300 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={initiatePayment}
                className="flex-1 px-4 py-3 bg-purple-20 text-white rounded-lg font-medium hover:bg-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {`Pay ₦${selectedProduct?.price * 1000}`}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
