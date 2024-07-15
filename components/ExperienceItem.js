import styles from './ExperienceItem.module.css';
import ProjectItem from './ProjectItem';

const ExperienceItem = ({ date, company, role, responsibilities, projects }) => {
  return (
    <>
      <div className={styles.xpHeading}>
        <div className={styles.date}>
          <p>{date}</p>
        </div>
        <div className="designation">
          <p>{company}</p>
          <p>{role}</p>
          <p className={styles.responsibilities}>{responsibilities}</p>
        </div>
      </div>
      {projects.map((project, index) => (
        <ProjectItem key={index} {...project} />
      ))}
    </>
  );
};

export default ExperienceItem;
