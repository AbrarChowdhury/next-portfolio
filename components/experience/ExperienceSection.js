import styles from "./ExperienceSection.module.css"
import ExperienceItem from "./ExperienceItem"
import {
  hmsTechList,
  reflectTechList,
  virtyouTechList,
  vsmTechLists,
} from "../techIconList"

const ExperienceSection = () => {
  return (
    <section id='experience'>
      <h1>Experience</h1>
      <div className={styles.content}>
        <ExperienceItem
          date='Now'
          company='Tech Dojo Ltd.'
          companyURL='http://techdoo.com'
          role='Software Engineer'
          responsibilities='Responsibilities include designing and developing web applications, collaborating with cross-functional teams, and ensuring high performance and responsiveness of applications.'
          projects={[
            {
              imageSrc: "./images/virtyou.png",
              imageAlt: "VirtYou Logo",
              title: "VirtYou",
              description:
                "VirtYou specializes in creating automated emotion (AE) software for photorealistic 3D virtual actors. This technology enables virtual actors to deliver emotionally compelling, interactive, and live performances using AI-generated responses as a script.",
              iconList: virtyouTechList,
              coreFeatures: [
                "Procedurally generated natural expression based on context",
                "Live procedural motion",
                "Easy integration with any web service",
                "Photoreal 3D characters",
              ],
              subProjects: [
                {
                  imageSrc: "./images/virtyou.png",
                  imageAlt: "Langara Logo",
                  logoSrc: "images/langara.svg",
                  logoAlt: "Langara Logo",
                  companyURL: "https://www.langara.com/",
                  title: "Langara",
                  iconList: virtyouTechList,
                  shortDesc: "Educational VR APP",
                  description:
                    'Reflect AI is an easy-to-use communication add-on for Outlook™ and Gmail™ that flags harmful, unlawful, and unethical language before you hit "send." It protects your company from reputational damage, ethical breaches, and costly litigation.',
                },
                {
                  imageSrc: "./images/virtyou.png",
                  imageAlt: "Mindbloom Logo",
                  logoSrc: "images/mindbloom.svg",
                  logoAlt: "Mindbloom Logo",
                  companyURL: "https://www.mindbloom.com/",
                  title: "Mindbloom AI",
                  iconList: virtyouTechList,
                  shortDesc: "Employee training app",
                  description:
                    'Reflect AI is an easy-to-use communication add-on for Outlook™ and Gmail™ that flags harmful, unlawful, and unethical language before you hit "send." It protects your company from reputational damage, ethical breaches, and costly litigation.',
                },
              ],
            },
            {
              imageSrc: "./images/reflect.png",
              imageAlt: "Reflect AI screen-shot",
              title: "Reflect AI",
              description:
                'Reflect AI is an easy-to-use communication add-on for Outlook™ and Gmail™ that flags harmful, unlawful, and unethical language before you hit "send." It protects your company from reputational damage, ethical breaches, and costly litigation.',
              iconList: reflectTechList,
              coreFeatures: [
                "Live feedback on potentially harmful language",
                "Seamless integration with email services",
                "Real-time text analysis and feedback",
              ],
            },
          ]}
        />
        <ExperienceItem
          date='July 2023'
          company='Bioforge Health Systems'
          companyURL='http://techdoo.com'
          role='Software Engineer'
          responsibilities='Responsibilities include developing software solutions for medical devices, collaborating with the product design team, and ensuring compliance with healthcare regulations.'
          projects={[
            {
              imageSrc: "./images/HMS.png",
              imageAlt: "HMS screen-shot",
              title: "Hospital Management System",
              description:
                "The Hospital Management System (HMS) integrates various modules for managing hospital operations including discharge, lab, statistics, and appointments. It streamlines processes and enhances patient care.",
              iconList: hmsTechList,
              coreFeatures: [
                "Discharge Module",
                "Lab Module",
                "Statistics Module",
                "Appointment Module",
              ],
              subProjects: [
                {
                  imageSrc: "./images/virtyou.png",
                  imageAlt: "Langara Logo",
                  title: "Discharge Module",
                  shortDesc: "Web-App: simplyf patient discharges",
                  iconList: virtyouTechList,
                  description:
                    'Reflect AI is an easy-to-use communication add-on for Outlook™ and Gmail™ that flags harmful, unlawful, and unethical language before you hit "send." It protects your company from reputational damage, ethical breaches, and costly litigation.',
                },
                {
                  imageSrc: "./images/virtyou.png",
                  imageAlt: "Langara Logo",
                  title: "Lab Module",
                  shortDesc: "Lab Module",
                  iconList: virtyouTechList,
                  description:
                    'Reflect AI is an easy-to-use communication add-on for Outlook™ and Gmail™ that flags harmful, unlawful, and unethical language before you hit "send." It protects your company from reputational damage, ethical breaches, and costly litigation.',
                },
                {
                  imageSrc: "./images/virtyou.png",
                  imageAlt: "Langara Logo",
                  title: "Statistics Module",
                  shortDesc: "Statistics",
                  iconList: virtyouTechList,
                  description:
                    'Reflect AI is an easy-to-use communication add-on for Outlook™ and Gmail™ that flags harmful, unlawful, and unethical language before you hit "send." It protects your company from reputational damage, ethical breaches, and costly litigation.',
                },
                {
                  imageSrc: "./images/virtyou.png",
                  imageAlt: "Langara Logo",
                  title: "Appointment Module",
                  shortDesc: "Appointment",
                  iconList: virtyouTechList,
                  description:
                    'Reflect AI is an easy-to-use communication add-on for Outlook™ and Gmail™ that flags harmful, unlawful, and unethical language before you hit "send." It protects your company from reputational damage, ethical breaches, and costly litigation.',
                },
              ],
            },
            {
              imageSrc: "./images/vsm.png",
              imageAlt: "VSM screen-shot",
              title: "Real-Time Vital Sign Monitor",
              description:
                "A low-cost remote vital sign monitoring system designed for continuous and long-term monitoring of patients. It includes a wrist unit, bedside monitor, and a web-based GUI accessible by medical personnel remotely.",
              iconList: vsmTechLists,
              coreFeatures: [
                "Continuous and remote monitoring",
                "Open source and low-cost hardware",
                "Four-layer architecture: sensing, data processing, networking, and applications",
              ],
            },
          ]}
        />
        <ExperienceItem
          date='June 2020'
          company='Bioforge Health Systems'
          companyURL='http://techdoo.com'
          role='Product Designer'
          responsibilities='Responsibilities include designing medical devices, creating prototypes, and collaborating with engineers to bring products to market.'
          projects={[
            {
              imageSrc: "./images/incubator1.png",
              imageAlt: "Neonatal Incubator screen-shot",
              title: "Neonatal Incubator",
              description:
                "Designed a low-cost neonatal incubator to provide a controlled environment for newborns. The design focused on affordability and ease of use in low-resource settings.",
              coreFeatures: [
                "Controlled temperature and humidity",
                "Easy access for medical staff",
                "Cost-effective design",
              ],
            },
            {
              imageSrc: "./images/ptl.jpg",
              imageAlt: "Phototherapy Lights screen-shot",
              title: "Phototherapy Lights",
              description:
                "Developed phototherapy lights for treating neonatal jaundice. The design ensures effective treatment while being safe and affordable.",
              coreFeatures: [
                "Effective jaundice treatment",
                "Safe for newborns",
                "Low-cost and durable",
              ],
            },
          ]}
        />

        <div style={{ borderLeft: "5px solid #abdcec", position: "relative" }}>
          <img
            src='clock_end.svg'
            width='60px'
            style={{ position: "absolute", left: "-32.5px" }}
          />
          <div>
            <p
              style={{
                marginLeft: "55px",
                marginTop: "0px",
                paddingTop: "15px",
                fontSize: "2em",
              }}
            >
              Jan 2020
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
