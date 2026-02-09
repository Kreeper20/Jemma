import { useState } from 'react'
import frame from './public/group-128.png'
import ellipse from './public/ellipse-109.png'
import polygon17 from './public/polygon17.svg'
import phone from './public/phone.png'
import kaizo from './public/kaizo.png'
import sb from './public/sb.png'
import hybrid from './public/hybrid.png'
import gcunite from './public/gcunite.png'
import lavish from './public/lavish.png'
import book from './public/books.png'
import Header from "./header.jsx";

function App() {
  const [count, setCount] = useState(0)

  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
  
    const iframe = document.createElement('iframe');
    iframe.name = 'buttondown-iframe';
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
  
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://buttondown.com/api/emails/embed-subscribe/odianose';
    form.target = 'buttondown-iframe';
  
    const input = document.createElement('input');
    input.name = 'email';
    input.value = email;
    form.appendChild(input);
  
    document.body.appendChild(form);
    form.submit();
  
    setTimeout(() => {
      document.body.removeChild(form);
      document.body.removeChild(iframe);
    }, 3000);
  
    setSubmitted(true);
    setTimeout(() => {
      setShowModal(false);
      setSubmitted(false);
      setEmail('');
    }, 2000);
  };

  return (
    <div className="font-serif mt-10">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <img
              className="hidden lg:block absolute top-0 right-0 w-52 lg:w-64 xl:w-72 2xl:w-80 opacity-50 pointer-events-none"
              src={frame}
              alt=""
              aria-hidden="true"
              loading="lazy"
            />

            <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column - Main Content */}
              <div className="space-y-5 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
                <div className="text-purple-20 space-y-3 sm:space-y-4">
                  <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-[1.1] sm:leading-tight">
                    Your Story, Strategically Told
                  </h1>
                  <h2 className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl leading-relaxed">
                    New solutions with real results, built to amplify your brand
                  </h2>
                </div>

                <a
                  href="#"
                  className="inline-block  sm:w-auto px-6 sm:px-5 py-3 sm:py-4 bg-[#f89500] text-white font-bold text-base sm:text-lg shadow-lg hover:bg-[#e08700] transition-colors"
                >
                  Amplify Your Brand
                </a>
              </div>

              {/* Right Column - Performance Card */}
              <div className="max-w-sm mx-auto lg:max-w-md lg:mx-0 lg:ml-auto bg-white rounded-2xl shadow-2xl p-5 sm:p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900 underline text-sm sm:text-base">
                    Insight Overview :
                  </h4>
                </div>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <img
                      src={ellipse}
                      alt="Profile"
                      className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base"></h3>
                      <p className="text-xs sm:text-sm text-gray-500 underline">@</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-green-500 font-bold">
                    <span className="text-xl sm:text-2xl">+ 80%</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 sm:gap-4 bg-purple-50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                  <div className="text-center">
                    <p className="text-[10px] sm:text-xs text-gray-500 uppercase mb-1">Posts</p>
                    <p className="text-lg sm:text-xl font-bold text-gray-900">300</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] sm:text-xs text-gray-500 uppercase mb-1">Followers</p>
                    <p className="text-lg sm:text-xl font-bold text-gray-900">4900</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] sm:text-xs text-gray-500 uppercase mb-1">Following</p>
                    <p className="text-lg sm:text-xl font-bold text-gray-900">1500</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Background Decorative Elements */}
          <img
            src="/img/polygon-16.svg"
            alt=""
            aria-hidden="true"
            className="absolute top-16 sm:top-20 left-4 sm:left-10 w-6 h-6 sm:w-8 sm:h-8 opacity-20"
          />
          <img
            src={polygon17}
            alt=""
            aria-hidden="true"
            className="absolute top-32 sm:top-40 right-4 sm:right-10 w-8 h-8 sm:w-10 sm:h-10 opacity-20"
          />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-14 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center max-w-6xl mx-auto">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                <span className="text-gray-900">Go </span>
                <span className="text-purple-20">Behind</span>
                <span className="text-gray-900"> the </span>
                <span className="text-purple-20">Feed</span>
                <span className="text-gray-900"> with </span>
                <span className="text-purple-20">Jemma</span>
              </h2>

              <div className="mb-4 sm:mb-6 flex justify-center lg:justify-start">
                <img src={phone} alt="Decorative line" className="h-1 w-36 sm:w-48" />
              </div>

              <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                <span className="text-3xl sm:text-4xl text-purple-600">"</span>
                <span className="font-semibold">Behind the Feed with Jemma</span>
                " delivers exclusive insights three times a month, breaking down the strategies, frameworks, and
                systems behind top performing campaigns, giving you actionable guidance to grow your own brand on social
                media.
              </p>

              <a
                href="#"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-purple-20 text-white rounded-full font-medium text-sm sm:text-base hover:bg-purple-700 transition-all shadow-lg hover:shadow-xl"
              >
                Subscribe Now
              </a>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl sm:rounded-3xl h-72 sm:h-80 lg:h-96 flex items-center justify-center p-4 sm:p-6">
              <img
                src={phone}
                alt="Mobile phone preview"
                className="w-full max-w-[14rem] sm:max-w-xs lg:max-w-sm h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Toolkit Section */}
      <section className="py-14 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="text-gray-900">The Complete </span>
              <span className="text-purple-20">Social Media Toolkit</span>
            </h2>
            <div className="flex justify-center mb-4 sm:mb-6">
              <img src="/img/line-64.png" alt="" aria-hidden="true" className="h-1 w-36 sm:w-48" />
            </div>
            <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto">
              Everything you need to plan, design, and post content that performs.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto mb-10 sm:mb-12">
            {/* Toolkit Item 1 */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/img/rectangle-271.png"
                alt="Content Calendar"
                className="w-full h-28 sm:h-36 lg:h-48 object-cover rounded-lg sm:rounded-xl mb-3 sm:mb-4"
                loading="lazy"
              />
              <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-gray-900 mb-2">
                30-Day Content Calendar
              </h3>
              <div className="h-0.5 sm:h-1 w-10 sm:w-12 bg-purple-600 mb-3 sm:mb-4" />
              <img
                src="/img/monitor-XDR.png"
                alt="Monitor"
                className="w-full h-20 sm:h-28 lg:h-32 object-contain"
                loading="lazy"
              />
            </div>

            {/* Toolkit Item 2 */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/img/rectangle-274.png"
                alt="Design Template"
                className="w-full h-28 sm:h-36 lg:h-48 object-cover rounded-lg sm:rounded-xl mb-3 sm:mb-4"
                loading="lazy"
              />
              <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-gray-900 mb-2">
                Design Template
              </h3>
              <div className="h-0.5 sm:h-1 w-10 sm:w-12 bg-purple-600 mb-3 sm:mb-4" />
              <img
                src="/img/iphone-16.png"
                alt="iPhone"
                className="w-full h-20 sm:h-28 lg:h-32 object-contain"
                loading="lazy"
              />
            </div>

            {/* Toolkit Item 3 */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/img/rectangle-273.png"
                alt="Expert E-Book"
                className="w-full h-28 sm:h-36 lg:h-48 object-cover rounded-lg sm:rounded-xl mb-3 sm:mb-4"
                loading="lazy"
              />
              <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-gray-900 mb-2">
                Expert E-Book
              </h3>
              <div className="h-0.5 sm:h-1 w-10 sm:w-12 bg-purple-600 mb-3 sm:mb-4" />
              <img
                src={book}
                alt="Books"
                className="w-full h-20 sm:h-28 lg:h-32 object-contain"
                loading="lazy"
              />
            </div>

            {/* Toolkit Item 4 */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/img/rectangle-272.png"
                alt="Full Content Kit"
                className="w-full h-28 sm:h-36 lg:h-48 object-cover rounded-lg sm:rounded-xl mb-3 sm:mb-4"
                loading="lazy"
              />
              <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-gray-900 mb-2">
                Full Content Kit
              </h3>
              <div className="h-0.5 sm:h-1 w-10 sm:w-12 bg-purple-20 mb-3 sm:mb-4" />
            </div>
          </div>

          <div className="text-center">
            <a
              href="#"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white rounded-full font-medium text-sm sm:text-base hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
            >
              Get the Toolkit
            </a>
          </div>
        </div>
      </section>

      {/* Beyond Social Media Management */}
      <section className="py-14 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="text-gray-900">Beyond</span>
              <span className="text-purple-20"> Social Media </span>
              <span className="text-gray-900">Management</span>
            </h2>
            <div className="flex justify-center mb-4 sm:mb-6">
              <img src="/img/line-65.png" alt="" aria-hidden="true" className="h-1 w-36 sm:w-48" />
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12">
              <p className="text-gray-700 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                We architect digital ecosystems for long-term brand growth combining strategy, creativity, and
                performance insights into one cohesive system.
              </p>

              <ul className="space-y-2 sm:space-y-3 text-gray-600 text-sm sm:text-base">
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-purple-600 mt-0.5 sm:mt-1 shrink-0">✓</span>
                  <span>Strategy & Brand Positioning & Campaign Development</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-purple-600 mt-0.5 sm:mt-1 shrink-0">✓</span>
                  <span>Content Creation Visual Design & Video Editing</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-purple-600 mt-0.5 sm:mt-1 shrink-0">✓</span>
                  <span>Scheduling & Community Management</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-purple-600 mt-0.5 sm:mt-1 shrink-0">✓</span>
                  <span>Analytics, Reporting & Performance Optimization</span>
                </li>
              </ul>

              <div className="mt-6 sm:mt-8">
                <a
                  href="#"
                  className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-purple-600 text-white rounded-full font-medium text-sm sm:text-base hover:bg-purple-700 transition-all shadow-lg hover:shadow-xl"
                >
                  Book a Free Strategy Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Brands */}
      <section className="py-14 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
              <span className="text-gray-900">Trusted</span>
              <span className="text-purple-600"> by </span>
              <span className="text-gray-900">Brands</span>
              <span className="text-purple-600"> Who Demand </span>
              <span className="text-gray-900">Results</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              We've partnered with local and international brands to elevate their social presence.
              Here's what they say:
            </p>
          </div>

          {/* Brand Logos */}
          <div className="mb-10 sm:mb-12 lg:mb-16">
            <div className="relative overflow-hidden">
              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 mb-6 sm:mb-8">
                <img src={sb} alt="S&B" className="h-8 sm:h-10 md:h-12 lg:h-16 w-auto grayscale hover:grayscale-0 transition-all" loading="lazy" />
                <img src={kaizo} alt="Kaizo" className="h-8 sm:h-10 md:h-12 lg:h-16 w-auto grayscale hover:grayscale-0 transition-all" loading="lazy" />
                <img src="/img/higher-drive.png" alt="Higher Drive" className="h-8 sm:h-10 md:h-12 lg:h-16 w-auto grayscale hover:grayscale-0 transition-all" loading="lazy" />
                <img src={gcunite} alt="GC Unite" className="h-8 sm:h-10 md:h-12 lg:h-16 w-auto grayscale hover:grayscale-0 transition-all" loading="lazy" />
                <img src="/img/time-with-kikky.png" alt="Time with Kikky" className="h-8 sm:h-10 md:h-12 lg:h-16 w-auto grayscale hover:grayscale-0 transition-all" loading="lazy" />
                <img src={lavish} alt="Lavish Treats" className="h-8 sm:h-10 md:h-12 lg:h-16 w-auto grayscale hover:grayscale-0 transition-all" loading="lazy" />
                <img src={hybrid} alt="Auto Experts Rwanda" className="h-8 sm:h-10 md:h-12 lg:h-16 w-auto grayscale hover:grayscale-0 transition-all" loading="lazy" />
              </div>
              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                <img src="/img/m-d-LOGO.png" alt="M&D" className="h-8 sm:h-10 md:h-12 lg:h-16 w-auto grayscale hover:grayscale-0 transition-all" loading="lazy" />
                <img src="/img/ATP.png" alt="ATP" className="h-8 sm:h-10 md:h-12 lg:h-16 w-auto grayscale hover:grayscale-0 transition-all" loading="lazy" />
                <img src="/img/o-john-cuisine.png" alt="O John Cuisine" className="h-8 sm:h-10 md:h-12 lg:h-16 w-auto grayscale hover:grayscale-0 transition-all" loading="lazy" />
                <img src="/img/shaping-us-logo.png" alt="Shaping Us" className="h-8 sm:h-10 md:h-12 lg:h-16 w-auto grayscale hover:grayscale-0 transition-all" loading="lazy" />
                <img src="/img/BOE.png" alt="BOE" className="h-8 sm:h-10 md:h-12 lg:h-16 w-auto grayscale hover:grayscale-0 transition-all" loading="lazy" />
                <img src="/img/vabe-UK.png" alt="Vabe UK" className="h-8 sm:h-10 md:h-12 lg:h-16 w-auto grayscale hover:grayscale-0 transition-all" loading="lazy" />
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow">
              <p className="text-gray-700 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                <span className="text-3xl sm:text-4xl text-purple-600 leading-none">"</span>
                Jemma transformed our social strategy. The growth and engagement speak for themselves
              </p>
              <p className="text-xs sm:text-sm font-semibold text-gray-900">_Lavish Treats</p>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow">
              <p className="text-gray-700 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                <span className="text-3xl sm:text-4xl text-purple-600 leading-none">"</span>
                So glad i have you all. I started all this at the right time. I have no idea I would start my own
                clinic space so soon and having all this work done already I know will help me launch successfully
              </p>
              <p className="text-xs sm:text-sm font-semibold text-gray-900">_Topp Lymphatics</p>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow">
              <p className="text-gray-700 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                <span className="text-3xl sm:text-4xl text-purple-600 leading-none">"</span>
                Working with Jemma is like Having an in-house creative team without the overhead
              </p>
              <p className="text-xs sm:text-sm font-semibold text-gray-900">_Anu Taiwo Property</p>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow">
              <p className="text-gray-700 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                <span className="text-3xl sm:text-4xl text-purple-600 leading-none">"</span>
                The Jemma Team have truly been godsend! Thank you for caring
              </p>
              <p className="text-xs sm:text-sm font-semibold text-gray-900">_Kambili</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative pt-8 sm:pt-10 lg:pt-12 pb-8 sm:pb-10 lg:pb-12 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Let's <span className="text-purple-20">Amplify</span> Your{' '}
              <span className="text-purple-20">Brand</span> Together
            </h1>

            <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
              Whether you want done-for-you management, DIY content kits, or insider insights
              <br className="hidden md:block" />
              through your newsletter, we have the solution that fits your brand.
            </p>

            <div className="flex flex-row flex-wrap gap-2 sm:gap-3 justify-center items-center">
              <a
                href="#"
                className="px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 bg-purple-20 text-white rounded-full font-medium text-xs sm:text-sm md:text-base hover:bg-purple-700 transition-all shadow-lg hover:shadow-xl text-center"
              >
                Book a Free Strategy Call
              </a>
              <a
                href="#"
                className="px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 bg-gray-100 text-gray-900 rounded-full font-medium text-xs sm:text-sm md:text-base hover:bg-gray-200 transition-all text-center"
              >
                Get the ToolKit
              </a>
              <button
                onClick={() => setShowModal(true)}
                className="px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 bg-white border-2 border-gray-900 text-gray-900 rounded-full font-medium text-xs sm:text-sm md:text-base hover:bg-gray-50 transition-all text-center cursor-pointer"
              >
                Subscribe to Newsletter
              </button>

              {showModal && (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
                  onClick={() => { setShowModal(false); setSubmitted(false); setEmail(''); }}
                >
                  <div
                    className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 sm:p-8 relative animate-[fadeIn_0.2s_ease-out]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => { setShowModal(false); setSubmitted(false); setEmail(''); }}
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors text-xl"
                      aria-label="Close"
                    >
                      ✕
                    </button>

                    {!submitted ? (
                      <>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#450065] mb-2">
                          Behind the Feed with Jemma
                        </h3>
                        <p className="text-gray-500 text-sm sm:text-base mb-6">
                          Get exclusive insights delivered 3x a month.
                        </p>
                        <form onSubmit={handleSubscribe}>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                          </label>
                          <input
                            id="email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-sm sm:text-base focus:outline-none focus:border-[#450065] transition-colors mb-4"
                          />
                          <button
                            type="submit"
                            className="w-full py-3 bg-[#450065] text-white font-bold text-sm sm:text-base rounded-lg hover:bg-[#5a0080] transition-all"
                          >
                            Subscribe
                          </button>
                        </form>
                        <p className="text-gray-400 text-xs mt-4 text-center">
                          No spam, ever. Unsubscribe anytime.
                        </p>
                      </>
                    ) : (
                      <div className="text-center py-6">
                        <div className="text-5xl mb-4">✓</div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#450065] mb-2">
                          Successfully Subscribed!
                        </h3>
                        <p className="text-gray-500 text-sm sm:text-base">
                          Welcome to the community. Check your inbox soon.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;