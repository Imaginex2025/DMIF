import { About } from '@/components/About'
import { ContactDark } from '@/components/Contact'
import { Cta } from '@/components/Cta'
import { FAQ } from '@/components/FAQ'
import { WhyItMatters } from '@/components/Features'
// import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
// import { Navbar } from '@/components/Navbar'
import OurProgram from '@/components/OurProgram'
import { ScrollToTop } from '@/components/ScrollToTop'
import { Services } from '@/components/Services'
import { Testimonials } from '@/components/Testimonials'


const Home = () => {
  return (
    <div>
      <Hero />
      <About />
<div id="">
        <OurProgram/>
</div>
      <WhyItMatters />
<div id="Service">
        <Services />
</div>
      <Cta />
      <Testimonials />
      <ContactDark/>
      <FAQ />
      <ScrollToTop />
    </div>
  )
}

export default Home