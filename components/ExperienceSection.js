import styles from './ExperienceSection.module.css';
import ExperienceItem from './ExperienceItem';

const ExperienceSection = () => {
  return (
    <section id="experience">
      <h2 className={styles.heading}>Experience</h2>
      <div className={styles.content}>
        <ExperienceItem
          date="Mar 2020 - Present"
          company="Tech Dojo Ltd."
          role="Software Engineer"
          responsibilities="Responsibilities include designing and developing web applications, collaborating with cross-functional teams, and ensuring high performance and responsiveness of applications."
          projects={[
            {
              imageSrc: './images/virtyou.png',
              imageAlt: 'VirtYou Logo',
              title: 'VirtYou',
              description: 'VirtYou specializes in creating automated emotion (AE) software for photorealistic 3D virtual actors. This technology enables virtual actors to deliver emotionally compelling, interactive, and live performances using AI-generated responses as a script.',
              coreFeatures: [
                'Procedurally generated natural expression based on context',
                'Live procedural motion',
                'Easy integration with any web service',
                'Photoreal 3D characters'
              ],
              clients: [
                { imageSrc: 'images/langara.svg', imageAlt: 'Langara Logo' },
                { imageSrc: 'images/mindbloom.svg', imageAlt: 'Mindbloom Logo' }
              ]
            },
            {
              imageSrc: './images/reflect.png',
              imageAlt: 'Reflect AI screen-shot',
              title: 'Reflect AI',
              description: 'Reflect AI is an easy-to-use communication add-on for Outlook™ and Gmail™ that flags harmful, unlawful, and unethical language before you hit "send." It protects your company from reputational damage, ethical breaches, and costly litigation.',
              coreFeatures: [
                'Live feedback on potentially harmful language',
                'Seamless integration with email services',
                'Real-time text analysis and feedback'
              ]
            }
          ]}
        />
        <ExperienceItem
          date="Jan 2018 - Feb 2020"
          company="Bioforge Health Systems"
          role="Software Engineer"
          responsibilities="Responsibilities include developing software solutions for medical devices, collaborating with the product design team, and ensuring compliance with healthcare regulations."
          projects={[
            {
              imageSrc: './images/HMS.png',
              imageAlt: 'HMS screen-shot',
              title: 'Hospital Management System',
              description: 'The Hospital Management System (HMS) integrates various modules for managing hospital operations including discharge, lab, statistics, and appointments. It streamlines processes and enhances patient care.',
              coreFeatures: [
                'Discharge Module',
                'Lab Module',
                'Statistics Module',
                'Appointment Module'
              ]
            },
            {
              imageSrc: './images/vsm.png',
              imageAlt: 'VSM screen-shot',
              title: 'Real-Time Vital Sign Monitor',
              description: 'A low-cost remote vital sign monitoring system designed for continuous and long-term monitoring of patients. It includes a wrist unit, bedside monitor, and a web-based GUI accessible by medical personnel remotely.',
              coreFeatures: [
                'Continuous and remote monitoring',
                'Open source and low-cost hardware',
                'Four-layer architecture: sensing, data processing, networking, and applications'
              ]
            }
          ]}
        />
        <ExperienceItem
          date="Jan 2016 - Dec 2017"
          company="Bioforge Health Systems"
          role="Product Designer"
          responsibilities="Responsibilities include designing medical devices, creating prototypes, and collaborating with engineers to bring products to market."
          projects={[
            {
              imageSrc: './images/incubator1.png',
              imageAlt: 'Neonatal Incubator screen-shot',
              title: 'Neonatal Incubator',
              description: 'Designed a low-cost neonatal incubator to provide a controlled environment for newborns. The design focused on affordability and ease of use in low-resource settings.',
              coreFeatures: [
                'Controlled temperature and humidity',
                'Easy access for medical staff',
                'Cost-effective design'
              ]
            },
            {
              imageSrc: './images/ptl.jpg',
              imageAlt: 'Phototherapy Lights screen-shot',
              title: 'Phototherapy Lights',
              description: 'Developed phototherapy lights for treating neonatal jaundice. The design ensures effective treatment while being safe and affordable.',
              coreFeatures: [
                'Effective jaundice treatment',
                'Safe for newborns',
                'Low-cost and durable'
              ]
            }
          ]}
        />
      </div>
    </section>
  );
};

export default ExperienceSection;
