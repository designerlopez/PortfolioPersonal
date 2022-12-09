import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';



const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider/>
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((project)=>(
       <BlogCard key={project.id}>
        <Img src={project.image}></Img>
        <TitleContent>
          <HeaderThree title>{project.title}</HeaderThree>
          <Hr/>
        </TitleContent>
        <CardInfo>{project.description}</CardInfo>
        <div>
          <TitleContent>
            <TagList>
              {project.tags.map((tag,i)=>(
                <Tag key={i}>{tag}</Tag>
                ))}
            </TagList>
          </TitleContent>
        </div>
        <UtilityList>
          <ExternalLinks href={project.visit}>
            Code
          </ExternalLinks>
          <ExternalLinks href={project.visit}>
            Source
          </ExternalLinks>
        </UtilityList>


       </BlogCard>

      ))}
    </GridContainer>
  </Section>
  
);

export default Projects;