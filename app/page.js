import CaseStudies from '@/components/sections/CaseStudies'
import Hero from '@/components/sections/Hero'
import OurTeam from '@/components/sections/OurTeam'
import PricePlan from '@/components/sections/PricePlan'
import Services from '@/components/sections/Services'
import Slider from '@/components/sections/Slider'
import SuccessStory from '@/components/sections/SuccessStory'
import Testimonials from '@/components/sections/Testimonials'
import About from '@/components/sections/About'
import Blog from '@/components/sections/Blog'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/sections/Footer'

const Home = () => {
  return (
    <div className="main">
      <Hero />
      <Slider />
      <Services />
      <About />
      <CaseStudies />
      <SuccessStory />
      <OurTeam />
      <PricePlan />
      <Testimonials />
      <Blog />
      <CTA />
      <Footer />
    </div>
  )
}

export default Home