import React from "react";
import Headings from "./Headings";
import { Consumer } from "../context";
import ProjectCard from "./ProjectCard";
const Work = () => {
  return (
    <Consumer>
      {value => {
        const { details, works } = value;
        return (
          <main id="work">
            {details.map(detail => (
              <Headings
                my={detail.my}
                key={detail.id}
                work={detail.work}
                workexplain={detail.workexplain}
              />
            ))}
            <div className="projects">
              {works.map(work => (
                <ProjectCard
                  key={work.id}
                  image={work.image}
                  name={work.name}
                  country_one={work.country_one}
                  country_two={work.country_two}
                  url_one={work.url_one}
                  url_two={work.url_two}
                  project={work.project}
                  github={work.github}
                  fafa={work.fafa}
                />
              ))}
            </div>
          </main>
        );
      }}
    </Consumer>
  );
};
export default Work;
