import { useState } from "react";
import { uploadFileToBucket, saveFormToDatabase } from "./services/supabaseService";


export default function NForm({ showForm, setShowForm, selectedProduct }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brandname: '',
    niche: '',
    logo: '',
    brandcolor: '',
    sociallinks: '',


  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, logo: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      let logoPath = null;

      // Upload file with brand name as filename
      if (formData.logo) {
        const uploadResponse = await uploadFileToBucket(formData.logo, formData.brandname);
        logoPath = uploadResponse.path;
      }

      // Prepare data to send
      const dataToSubmit = {
        full_name: formData.name,
        email: formData.email,
        brand_name: formData.brandname,
        niche: formData.niche,
        brand_colour: formData.brandcolor,
        brand_logo: logoPath,
        social_links: formData.sociallinks,
        product: selectedProduct ? selectedProduct.name : null,
        price: selectedProduct ? selectedProduct.price : null,
      };

      // Save to Supabase table
      await saveFormToDatabase(dataToSubmit);

      console.log("✅ Form submitted and saved to database:", dataToSubmit);
      setShowForm(false);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        brandname: '',
        niche: '',
        logo: '',
        brandcolor: '',
        sociallinks: '',
      });
    } catch (err) {
      console.error("❌ Error:", err.message);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {showForm && (
        <div
          onClick={() => setShowForm(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4 py-4"
        >
          <form
            onSubmit={handleSubmit}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 w-full max-w-md space-y-5 relative shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-purple-20 mb-1">Your Details</h2>
              <p className="text-gray-500 text-sm">Complete this form to proceed</p>
            </div>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 text-3xl font-light transition-colors duration-200"
            >
              ×
            </button>

            {/* Show selected product */}
            {selectedProduct && (
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200">
                <p className="text-xs text-gray-600 font-semibold uppercase tracking-wide mb-1">Purchasing:</p>
                <p className="font-semibold text-lg text-purple-20">{selectedProduct.name}</p>
                <p className="text-orange-20 font-bold text-xl">{selectedProduct.price === 0 ? 'FREE' : `$${selectedProduct.price}`}</p>
              </div>
            )}
               
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-20 focus:ring-2 focus:ring-purple-20/20 transition-all duration-200"
                required
              />
            </div>
               
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-20 focus:ring-2 focus:ring-purple-20/20 transition-all duration-200"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="brandname" className="block text-sm font-semibold text-gray-700">Brand Name</label>
              <input 
                type="text" 
                id="brandname"
                name="brandname"
                placeholder="Your Brand Name"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-20 focus:ring-2 focus:ring-purple-20/20 transition-all duration-200"
                onChange={handleChange}
                value={formData.brandname} 
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="niche" className="block text-sm font-semibold text-gray-700">Niche/Industry</label>
              <input 
                type="text"
                id="niche"
                name="niche"
                placeholder="e.g., Fashion, Tech, Beauty"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-20 focus:ring-2 focus:ring-purple-20/20 transition-all duration-200"
                onChange={handleChange}
                value={formData.niche} 
                required
              />
            </div>
              
            <div className="space-y-2">
              <label htmlFor="logo" className="block text-sm font-semibold text-gray-700">Brand Logo</label>
              <input 
                type="file"
                id="logo"
                name="logo"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-20 focus:ring-2 focus:ring-purple-20/20 transition-all duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-20 hover:file:bg-purple-100 file:cursor-pointer"
                required
              />
            </div>
              
            <div className="space-y-2">
              <label htmlFor="brandcolor" className="block text-sm font-semibold text-gray-700">Brand Color</label>
              <input 
                type="color"
                id="brandcolor"
                name="brandcolor"
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-20 focus:ring-2 focus:ring-purple-20/20 transition-all duration-200 h-12 cursor-pointer"
                value={formData.brandcolor} 
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="sociallinks" className="block text-sm font-semibold text-gray-700">Social Media Links</label>
              <input 
                type="url"
                id="sociallinks"
                name="sociallinks"
                placeholder="https://"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-20 focus:ring-2 focus:ring-purple-20/20 transition-all duration-200"
                onChange={handleChange}
                value={formData.sociallinks} 
                required
              />
            </div>

            {error && (
              <div className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm font-medium">
                ❌ {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-6 py-3 sm:py-4 bg-gradient-to-r from-purple-20 to-purple-700 text-white rounded-lg font-semibold text-base sm:text-lg hover:shadow-lg hover:shadow-purple-20/30 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-6 transform hover:-translate-y-0.5"
            >
              {isLoading ? 'Uploading & Submitting...' : 'Proceed to Payment'}
            </button>
          </form>
        </div>
      )}
    </>
  );
}