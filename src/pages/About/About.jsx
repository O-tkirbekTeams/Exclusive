import About_BenefitCard from "./Sections/About_BenefitCard";
import About_cards from "./Sections/About_cards";
import About_Feature from "./Sections/About_Feature";
import About_OurStory from "./Sections/About_OurStory";

function About() {
  return (
    <>
      <main>
        <About_OurStory />
        <About_cards />
        <About_Feature />
        <About_BenefitCard />
      </main>
    </>
  );
}

export default About;
