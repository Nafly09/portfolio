import React from "react";
import Typewriter from "typewriter-effect";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Prazer, Naftaly Junior <br />
          Desenvolvedor
          <Typewriter
            options={{
              strings: [
                "React",
                "Python",
                "Javascript",
                "Flask",
                "Node",
                "Frontend",
                "Backend",
                "Fullstack",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </SectionTitle>
        <SectionText>
          Sou um desenvolvedor com habilidades em frontend e backend buscando um
          oportunidade para fazer a diferença.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
