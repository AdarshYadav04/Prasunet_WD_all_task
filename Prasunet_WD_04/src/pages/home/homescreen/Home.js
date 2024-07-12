import AboutMe from "../AboutMe"
import ContactMe from "../ContactMe"
import Footer from "../Footer"
import HeroSection from "../HeroSection"
import Portfolio from "../MyPortfolio"
import Skills from "../MySkills"
const Home=()=>{

    return(
        <>
            <HeroSection />
            <Skills />
            <AboutMe />
            <Portfolio />
            <ContactMe />
            <Footer />
        </>
    )

}

export default Home