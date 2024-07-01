import Hero from '../../Hero/Hero'
import BestSeller from '../../organism/BestSeller/BestSeller'
import BrandFeature from '../../organism/BrandFeature/BrandFeature'
import BrandPanter from '../../organism/BrandPatner/BrandPanter'
import Footer from '../../organism/Footer/Footer'
import NavBar from '../../organism/NavBar/NavBar'
import OtherCategory from '../../organism/OtherCategory/OtherCategory'
import OurService from '../../organism/OurServices/OurService'
import Poster from '../../organism/Poster/Poster'
import RequestForm from '../../organism/RequestForm/RequestForm'
import Testimonial from '../../organism/Testimonial/Testimonial'
import HomeTemplateStyle from './HomeTemplateStyle'

const HomeTemplate = () => {
  return (
    <HomeTemplateStyle>
      <NavBar />
      <Hero />
      <BrandFeature />
      <OurService />
      <Poster />
      <OtherCategory />
      <BestSeller />
      <BrandPanter />
      <Testimonial />
      <RequestForm />
      <Footer />
    </HomeTemplateStyle>
  )
}

export default HomeTemplate
