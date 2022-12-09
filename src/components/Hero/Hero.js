import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Edgar Lopez<br/>
        Web Designer
      </SectionTitle>
      <SectionText>
        Mi objetivo es ayudarte a convertir tu problema en una gran solución
      </SectionText>
      <Button onClick={()=> window.location='https://google.com'}>See More</Button>
    </LeftSection>
  </section>
);

export default Hero;