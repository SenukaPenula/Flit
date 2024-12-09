import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="words">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Heading
          tag="Let's Win the World with Flit"
          title="Words from Founder"
        />

        <div className="relative">
          
          <LeftLine />
          <p className="justif-conent-center display-flex text-n-3">
                 Hello! &nbsp; I’m Senuka Penula, &nbsp; and I’m thrilled to welcome you. My journey in tech and AI has been driven by a passion for making powerful tools accessible and useful for everyone. This platform was created to bring innovative AI solutions to your fingertips, making technology simpler and more impactful.

I believe in collaboration, open communication, and the transformative power of AI. Here, we don’t just build tools; we create opportunities for learning, growth, and creativity. Whether you’re a developer, a learner, or someone curious about AI, I’m committed to providing resources and support that help you thrive.

Thank you for joining me on this exciting journey. Let’s build, learn, and create a future powered by innovation together.
          </p>
          <Heading
            tag="CEO and FOUNDER"
          />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
         
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
