import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/1.png';
import freshBurger from '../../assets/2.png';
import hipsster from '../../assets/3.png';
import fitLift from '../../assets/4.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/nhatnguyen-cr7/sport-fe"
          h3="Sport"
          p="Sport Web"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/nhatnguyen-cr7/bigcity"
          h3="BigCity"
          p="BigCity Web"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/nhatnguyen-cr7/employee-manager"
          h3="Employee"
          p="Employee Manager"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/nhatnguyen-cr7/e-commerce-furniture"
          h3="Furniture"
          p="Furniture Web"
        />
      </div>
    </section>
  );
}

export default Projects;
