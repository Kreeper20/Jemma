export default function ProductDetails({ showDetails, setShowDetails, selectedProduct, onProceed }) {
  if (!showDetails || !selectedProduct) return null;

  const handleEbookDownload = () => {
    // Create a link to download the ebook
    const link = document.createElement('a');
    link.href = '/ebook/Post-With-Peace-Ebook.pdf'; // Update this path to your ebook location
    link.download = 'Post-With-Peace-Ebook.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowDetails(false);
  };

  const productDetails = {
    calendar: {
      title: "30-Day Content Calendar",
      description: "A fully customised 30-day calendar tailored to your niche. Know exactly what to post, when, and why.",
      features: [
        "Content ideas customized for your niche",
        "Day-by-day posting schedule",
        "Captions and hashtags included",
        "Strategic posting times",
        "Ready-to-implement content"
      ],
      timeline: "Delivered within 7 business days",
      price: "$120"
    },
    design: {
      title: "20+ Canva Design Templates",
      description: "Professionally designed templates customised for your brand. Create polished, consistent content without design experience.",
      features: [
        "20+ ready-to-edit Canva templates",
        "Branded for your business",
        "Multiple formats (posts, stories, reels)",
        "Easy-to-customize layouts",
        "Use templates forever"
      ],
      timeline: "Delivered within 7 business days",
      price: "$150"
    },
    bundle: {
      title: "Strategic Content Starter Kit",
      description: "Everything you need to launch a consistent, strategic content presence. This bundle combines our most popular tools for maximum impact.",
      features: [
        "30-Day Content Calendar",
        "20+ Canva Design Templates",
        "Post With Peace Ebook",
        "Quarterly strategy guide",
        "Email support included"
      ],
      timeline: "Delivered within 7 business days",
      price: "$240"
    },
    toolkit: {
      title: "Full Toolkit",
      description: "The complete package for creators serious about growth. Everything you need to plan, design, and post content consistently and confidently.",
      features: [
        "30-Day Content Calendar (quarterly)",
        "50+ Canva Design Templates",
        "Post With Peace Ebook",
        "Brand guidelines template",
        "Content performance tracker",
        "Monthly strategy calls included"
      ],
      timeline: "Delivered within 7 business days",
      price: "$75"
    },
    ebook: {
      title: "Post With Peace — Ebook",
      description: "A practical guide to help you show up online with clarity and consistency. Learn simple content systems and proven strategies that take the guesswork out of growing your brand on social media.",
      features: [
        "Content planning framework",
        "How to find your unique voice",
        "Consistency strategies that stick",
        "Overcoming imposter syndrome",
        "Real examples from successful creators"
      ],
      timeline: "Instant digital download",
      price: "FREE"
    }
  };

  const details = productDetails[selectedProduct.key] || productDetails.toolkit;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40 p-2 sm:p-4">
      <div className="bg-white rounded-xl sm:rounded-2xl max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl">
        {/* Close button */}
        <div className="sticky top-0 flex justify-between items-center p-4 sm:p-6 border-b border-gray-200 bg-white rounded-t-xl sm:rounded-t-2xl">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-purple-20">{details.title}</h2>
          <button
            onClick={() => setShowDetails(false)}
            className="text-2xl sm:text-3xl text-gray-400 hover:text-gray-600 font-light flex-shrink-0 transition-colors duration-200"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          {/* Description */}
          <div>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{details.description}</p>
          </div>

          {/* What You Get */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-purple-20 mb-3 sm:mb-4">What You Get:</h3>
            <ul className="space-y-2 sm:space-y-3">
              {details.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 sm:gap-3 text-gray-600 text-xs sm:text-base">
                  <span className="text-orange-20 font-bold text-lg leading-none mt-0.5 flex-shrink-0">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Timeline - hide for ebook */}
          {selectedProduct.key !== 'ebook' && (
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 sm:p-5 rounded-lg border border-purple-200">
              <p className="text-xs sm:text-sm text-gray-600 font-medium">
                <span className="font-bold text-gray-700">Timeline: </span>
                <span className="text-purple-20 font-semibold">{details.timeline}</span>
              </p>
            </div>
          )}

          {/* Price */}
          <div className="border-t border-gray-200 pt-4 sm:pt-6">
            <p className="text-3xl sm:text-4xl font-bold text-orange-20">{details.price}</p>
          </div>

          {/* Action buttons */}
          <div className="flex gap-2 sm:gap-3 pt-4 sm:pt-6 border-t border-gray-200">
            <button
              onClick={() => setShowDetails(false)}
              className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium text-xs sm:text-base hover:bg-gray-100 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Back
            </button>
            <button
              onClick={selectedProduct.key === 'ebook' ? handleEbookDownload : onProceed}
              className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 bg-gradient-to-r from-orange-20 to-orange-600 text-white rounded-lg font-medium text-xs sm:text-base hover:shadow-lg hover:shadow-orange-20/40 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              {selectedProduct.key === 'ebook' ? 'Download Now' : 'Proceed to Checkout'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
