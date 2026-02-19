import { useState } from 'react'
import frame from './public/group-128.png'
import phone from './public/phone.png'
import kaizo from './public/kaizo.png'
import sb from './public/sb.png'
import hybrid from './public/hybrid.png'
import gcunite from './public/gcunite.png'
import kit from './public/kit.jpg'
import calendar from './public/calendar.jpg'
import higherdrive from './public/higherdrive.png'
import shape from './public/shaping.png'
import boe from './public/boe.png'
import vabe from './public/vabe.png'
import atp from './public/atp.png'
import twithkikky from './public/twithkikky.png'
import md from './public/md.png'
import john from './public/johncuisine.png'
import lavish from './public/lavish.png'
import template from './public/template.jpg'
import book from './public/books.png'
import tiktok from './public/tiktok.png'
import mail from './public/mail.png'
import insta from './public/insta.png'
import whatsapp from './public/whatsapp.png'
import linked from './public/linked.png'
import Header from "./header.jsx";
import Newsletter from "./newsleter.jsx";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="font-serif mt-24 bg-purple-100">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-28 overflow-hidden mb-12 sm:mb-0" id='home'>
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
                  href="https://calendly.com/jemmadigitals/1hr" target="_blank"
                  className="inline-block sm:w-auto px-6 sm:px-5 py-3 sm:py-4 bg-orange-20 text-white font-bold text-base sm:text-lg shadow-lg hover:bg-[#e08700] transition-colors"
                >
                  Amplify Your Brand
                </a>
              </div>

              <div className="max-w-sm mx-auto lg:max-w-md lg:mx-0 lg:ml-auto bg-white rounded-2xl shadow-2xl p-5 sm:p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-gray-900 underline text-lg sm:text-l">
                    Insight Overview :
                  </h4>
                </div>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                  </div>
                  <div className="flex items-end gap-2 text-green-500 font-bold">
                    <span className="text-xl sm:text-2xl">+3,523%</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 sm:gap-4 bg-purple-50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                  <div className="text-center">
                    <p className="text-[10px] sm:text-xs text-gray-500 uppercase mb-1">Audience Reached</p>
                    <p className="text-lg sm:text-xl font-bold text-gray-900">133,071</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] sm:text-sm text-gray-500 uppercase mb-1">Impressions</p>
                    <p className="text-lg sm:text-xl font-bold mt-5 text-gray-900">122,012</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] sm:text-xs text-gray-500 uppercase mb-1">Content Interactions</p>
                    <p className="text-lg sm:text-xl font-bold text-gray-900">6,099</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section - WITH SUBSTACK EMBED */}
      <section className="py-12 sm:py-16 lg:py-28 mb-12 sm:mb-0" id='newsletter'>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center max-w-6xl mx-auto">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl text-purple-20 md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                Go Behind The Feed With Jemma
              </h2>

              <div className="mb-4 sm:mb-6 flex justify-center lg:justify-start">
                <img src={phone} alt="Decorative line" className="h-1 w-36 sm:w-48" />
              </div>

              <p className="text-gray-600 text-base font-semibold sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                <span className="text-3xl sm:text-4xl text-purple-20">"</span>
                <span className="font-bold">Behind the Feed with Jemma</span>
                " delivers exclusive insights three times a month, breaking down the strategies, frameworks, and
                systems behind top performing campaigns, giving you actionable guidance to grow your own brand on social
                media.
              </p>

              <a
                onClick={() => setShowModal(true)}
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-purple-20 text-white rounded-full font-medium text-sm sm:text-base hover:bg-purple-700 transition-all shadow-lg hover:shadow-xl"
              >
                Subscribe Now
              </a>
             
            </div>
            

            <div className="bg-gradient-to-br from-pink-100 to-purple-400 rounded-2xl sm:rounded-3xl h-72 sm:h-80 lg:h-96 flex items-center justify-center p-4 sm:p-6">
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
      <section className="py-12 sm:py-16 lg:py-28 mb-12 sm:mb-0" id='toolkit'>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-purple-20 font-bold mb-4 sm:mb-6">
              The Complete Social Media Toolkit
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto">
              Everything you need to plan, design, and post content that performs.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto mb-10 sm:mb-12">
            {/* Toolkit Item 1 */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="w-full h-40 sm:h-48 lg:h-56 flex items-center justify-center mb-3 sm:mb-4">
                <img src={calendar} alt="Content Calendar" className="max-w-full max-h-full object-contain" loading="lazy" />
              </div>
              <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-purple-20 mb-2 leading-tight mt-auto">
                30-Day Content Calendar
              </h3>
              <div className="h-0.5 sm:h-1 w-10 sm:w-12 bg-purple-20"/>
            </div>

            {/* Toolkit Item 2 */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="w-full h-40 sm:h-48 lg:h-56 flex items-center justify-center mb-3 sm:mb-4">
                <img src={template} alt="Design Template" className="max-w-full max-h-full object-contain" loading="lazy" />
              </div>
              <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-purple-20 mb-2 leading-tight mt-auto">
                Design Template
              </h3>
              <div className="h-0.5 sm:h-1 w-10 sm:w-12 bg-purple-20"/>
            </div>

            {/* Toolkit Item 3 */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="w-full h-40 sm:h-48 lg:h-56 flex items-center justify-center mb-3 sm:mb-4">
                <img src={book} alt="Expert E-Book" className="max-w-full max-h-full object-contain" loading="lazy" />
              </div>
              <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-purple-20 mb-2 leading-tight mt-auto">
                Expert E-Book
              </h3>
              <div className="h-0.5 sm:h-1 w-10 sm:w-12 bg-purple-20" />
            </div>

            {/* Toolkit Item 4 */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="w-full h-40 sm:h-48 lg:h-56 flex items-center justify-center mb-3 sm:mb-4">
                <img src={kit} alt="Full Content Kit" className="max-w-full max-h-full object-contain" loading="lazy" />
              </div>
              <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-purple-20 mb-2 leading-tight mt-auto">
                Full Content Kit
              </h3>
              <div className="h-0.5 sm:h-1 w-10 sm:w-12 bg-purple-20" />
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://wa.me/+2349027964720" target="_blank"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-orange-20 text-white rounded-full font-medium text-sm sm:text-base hover:bg-purple-20 transition-all shadow-lg hover:shadow-xl"
            >
              Get the Toolkit
            </a>
          </div>
        </div>
      </section>

      {/* Beyond Social Media Management */}
      <section className="py-12 sm:py-16 lg:py-28 bg-white mb-12 sm:mb-0" id='about'>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl text-purple-20 sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Beyond Social Media Management
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-50 to-purple-30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12">
              <p className="text-gray-700 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                We architect digital ecosystems for long-term brand growth combining strategy, creativity, and
                performance insights into one cohesive system.
              </p>

              <ul className="space-y-2 sm:space-y-3 text-gray-600 text-sm sm:text-base">
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-purple-20 mt-0.5 sm:mt-1 shrink-0">✓</span>
                  <span>Strategy & Brand Positioning & Campaign Development</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-purple-20 mt-0.5 sm:mt-1 shrink-0">✓</span>
                  <span>Content Creation Visual Design & Video Editing</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-purple-20 mt-0.5 sm:mt-1 shrink-0">✓</span>
                  <span>Scheduling & Community Management</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-purple-20 mt-0.5 sm:mt-1 shrink-0">✓</span>
                  <span>Analytics, Reporting & Performance Optimization</span><br /><br />
                </li>
              </ul>

              <p className='text-gray-700 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed"'>
                Expanded Services: <br />
                Brand & digital consultation · Paid Advertising ·  Website design & development · SEO & search visibility optimization
              </p>

              <div className="mt-6 sm:mt-8">
                <a
                  href="https://calendly.com/jemmadigitals/1hr" target="_blank"
                  className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-purple-20 text-white rounded-full font-medium text-sm sm:text-base hover:bg-purple-600 transition-all shadow-lg hover:shadow-xl"
                >
                  Book a Free Strategy Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Brands */}
      <section className="py-12 sm:py-16 lg:py-28 bg-gray-50 mb-12 sm:mb-0" id='testimonials'>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl text-purple-20 md:text-5xl font-bold mb-6 sm:mb-8">
              Trusted By Brands Who Demand Results
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              We've partnered with local and international brands to elevate their social presence.
              Here's what they say:
            </p>
          </div>

          <div className="grid grid-cols-1 text-orange-20 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-14">
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow">
              <p className="text-gray-700 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                <span className="text-3xl sm:text-4xl text-orange-20 leading-none">"</span>
                Jemma transformed our social strategy. The growth and engagement speak for themselves
              </p>
              <p className="text-xs sm:text-sm font-semibold text-gray-900">_Lavish Treats</p>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow">
              <p className="text-gray-700 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                <span className="text-3xl sm:text-4xl text-orange-20 leading-none">"</span>
                So glad i have you all. I started all this at the right time. I have no idea I would start my own
                clinic space so soon and having all this work done already I know will help me launch successfully
              </p>
              <p className="text-xs sm:text-sm font-semibold text-gray-900">_Topp Lymphatics</p>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow">
              <p className="text-gray-700 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                <span className="text-3xl sm:text-4xl text-orange-20 leading-none">"</span>
                Working with Jemma is like Having an in-house creative team without the overhead
              </p>
              <p className="text-xs sm:text-sm font-semibold text-gray-900">_Anu Taiwo Property</p>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow">
              <p className="text-gray-700 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                <span className="text-3xl sm:text-4xl text-orange-20 leading-none">"</span>
                The Jemma Team have truly been godsend! Thank you for caring
              </p>
              <p className="text-xs sm:text-sm font-semibold text-gray-900">_Kambili</p>
            </div>
          </div>
        </div>

        <div className="mb-10 sm:mb-12 lg:mb-0 overflow-hidden">
          <div className="relative mb-4">
            <div className="flex animate-scroll gap-8 sm:gap-12 lg:gap-16">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex shrink-0 gap-8 sm:gap-12 lg:gap-16 items-center">
                  <img src={sb} alt="S&B" className="h-8 sm:h-10 lg:h-14 w-auto grayscale hover:grayscale-0 transition-all" loading="lazy" />
                  <img src={kaizo} alt="Kaizo" className="h-8 sm:h-10 lg:h-14 w-auto grayscale hover:grayscale-0 transition-all" loading="lazy" />
                  <img src={higherdrive} alt="Higher Drive" className="h-8 sm:h-10 lg:h-14 w-auto grayscale hover:grayscale-0 transition-all" loading="lazy" />
                  <img src={gcunite} alt="GC Unite" className="h-8 sm:h-10 lg:h-14 w-auto grayscale hover:grayscale-0 transition-all" loading="lazy" />
                  <img src={twithkikky} alt="Time with Kikky" className="h-8 sm:h-10 lg:h-14 w-auto grayscale hover:grayscale-0 transition-all" loading="lazy" />
                  <img src={lavish} alt="Lavish Treats" className="h-8 sm:h-10 lg:h-14 w-auto grayscale hover:grayscale-0 transition-all" loading="lazy" />
                  <img src={hybrid} alt="Auto Experts Rwanda" className="h-8 sm:h-10 lg:h-14 w-auto grayscale hover:grayscale-0 transition-all" loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="flex animate-scroll-reverse gap-8 sm:gap-12 lg:gap-16">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex shrink-0 gap-8 sm:gap-12 lg:gap-16 items-center">
                  <img src={md} alt="M&D" className="h-8 sm:h-10 lg:h-14 w-auto grayscale hover:grayscale-0 transition-all" loading="lazy" />
                  <img src={atp} alt="ATP" className="h-8 sm:h-10 lg:h-14 w-auto grayscale hover:grayscale-0 transition-all" loading="lazy" />
                  <img src={john} alt="O John Cuisine" className="h-8 sm:h-10 lg:h-14 w-auto grayscale hover:grayscale-0 transition-all" loading="lazy" />
                  <img src={shape} alt="Shaping Us" className="h-8 sm:h-10 lg:h-14 w-auto grayscale hover:grayscale-0 transition-all" loading="lazy" />
                  <img src={boe} alt="BOE" className="h-8 sm:h-10 lg:h-14 w-auto grayscale hover:grayscale-0 transition-all" loading="lazy" />
                  <img src={vabe} alt="Vabe UK" className="h-8 sm:h-10 lg:h-14 w-auto grayscale hover:grayscale-0 transition-all" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - WITH SUBSTACK MODAL */}
      <section className="relative pt-12 sm:pt-16 lg:pt-28 pb-12 sm:pb-16 lg:pb-28 overflow-hidden" id='contact'>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-purple-20 lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Let's Amplify Your Brand Together
            </h1>

            <div className="flex justify-center mt-4 mb-6">
              <div className="max-w-3xl sm:w-56 lg:w-96 h-0.5 bg-purple-20"></div>
            </div>

            <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
              Whether you want done-for-you management, DIY content kits, or insider insights
              <br className="hidden md:block" />
              through your newsletter, we have the solution that fits your brand.
            </p>

            <div className="flex flex-row flex-wrap gap-2 sm:gap-3 justify-center items-center">
              <a
                href="https://calendly.com/jemmadigitals/1hr" target="_blank"
                className="px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 bg-purple-20 text-white rounded-full font-medium text-xs sm:text-sm md:text-base hover:bg-purple-700 transition-all shadow-lg hover:shadow-xl text-center"
              >
                Book a Free Strategy Call
              </a>
              <a
                href="https://wa.me/+2349027964720" target="_blank"
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
            </div>
            
            <Newsletter showModal={showModal} setShowModal={setShowModal} />

            <div className="flex gap-4 justify-center items-center mt-8">
              <a href="mailto:info@tryjemma.com" target="_blank" rel="noopener noreferrer">
                <img src={mail} alt="Email" className="w-6 h-6" />
              </a>
              <a href="https://wa.me/+2349027964720" target="_blank" rel="noopener noreferrer">
                <img src={whatsapp} alt="WhatsApp" className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/jemma_digital" target="_blank" rel="noopener noreferrer">
                <img src={insta} alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="https://www.tiktok.com/@jemma_digital" target="_blank" rel="noopener noreferrer">
                <img src={tiktok} alt="TikTok" className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/jemma-digital/" target="_blank" rel="noopener noreferrer">
                <img src={linked} alt="LinkedIn" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;