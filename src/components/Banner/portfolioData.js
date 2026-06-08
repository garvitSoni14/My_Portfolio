import MeForPortfolio from "../../assets/img/Me_for_portfolio.jpeg";
import awsLogo from "../../assets/img/aws.svg";
import cssLogo from "../../assets/img/css3.svg";
import dockerLogo from "../../assets/img/skill-icons/docker.svg";
import gitLogo from "../../assets/img/git.svg";
import intellijLogo from "../../assets/img/intellijidea.svg";
import javaLogo from "../../assets/img/java.svg";
import junitLogo from "../../assets/img/skill-icons/junit.svg";
import mavenLogo from "../../assets/img/apachemaven.svg";
import mongodbLogo from "../../assets/img/skill-icons/mongodb.svg";
import mysqlLogo from "../../assets/img/mysql.svg";
import postgresqlLogo from "../../assets/img/postgresql.svg";
import postmanLogo from "../../assets/img/postman.svg";
import prjctImgCravego from "../../assets/img/prjct_img_cravego.png";
import prjctImgSpendkar from "../../assets/img/prjct_img_spendkar.png";
import prjctImgCvsculpt from "../../assets/img/prjct_img_cvsculpt.png";
import reactLogo from "../../assets/img/react.svg";
import springLogo from "../../assets/img/spring.svg";
import springBootLogo from "../../assets/img/springboot.svg";
import vscodeLogo from "../../assets/img/vscode.svg";

export const profileImage = MeForPortfolio;

export const homeCards = [
  {
    id: "projects",
    className: "projects-preview",
    eyebrow: "Projects",
    text: "SpendKar, CraveGo, and CVSculpt",
    icon: "bi-arrow-up-right",
    graphicIcon: "bi-window-stack",
  },
  {
    id: "skills",
    className: "skills-preview",
    eyebrow: "Skills",
    text: "Java, Spring, databases, tools, core engineering",
    icon: "bi-arrow-up-right",
    graphicIcon: "bi-code-square",
  },
  {
    id: "experiences",
    className: "journey-preview",
    eyebrow: "Journey",
    text: "Internship and education path",
    icon: "bi-arrow-up-right",
    graphicIcon: "bi-diagram-3",
  },
  {
    id: "achievements",
    className: "honors-preview",
    eyebrow: "Honors",
    text: "Certificates and learning milestones",
    icon: "bi-arrow-up-right",
    graphicIcon: "bi-award",
  },
  {
    id: "contact",
    className: "contact-preview",
    eyebrow: "Contact",
    text: "Backend, full-stack, and AI product roles",
    icon: "bi-arrow-up-right",
    graphicIcon: "bi-envelope-paper",
  },
];

export const sectionDetails = {
  projects: {
    eyebrow: "Selected work",
    title: "Projects",
    description: "A focused look at the products and platforms I have built.",
    items: [
      {
        title: "SpendKar",
        text: "AI-based expense tracker with smart categorization, savings insights, and spending dashboards.",
        image: prjctImgSpendkar,
        skills: ["Spring Boot", "React", "PostgreSQL", "AI"],
        source: "https://github.com/yourusername/spendkar",
        view: "https://spendkar.vercel.app",
      },
      {
        title: "CraveGo",
        text: "Food ordering platform with vendor support, JWT authentication, and optimized REST APIs.",
        image: prjctImgCravego,
        skills: ["Java", "Spring Boot", "MySQL", "JWT"],
        source: "https://github.com/yourusername/cravego",
        view: "https://cravego.vercel.app",
      },
      {
        title: "CVSculpt",
        text: "AI-powered resume generation platform with real-time improvements and ATS-focused scoring.",
        image: prjctImgCvsculpt,
        skills: ["Spring AI", "Ollama", "React", "LLM"],
        source: "https://github.com/yourusername/cvsculpt",
        view: "https://cvsculpt.vercel.app",
      },
    ],
  },
  skills: {
    eyebrow: "Stack",
    title: "Skills",
    description: "The core tools I use to build reliable, useful software.",
    categories: [
      {
        title: "Languages",
        text: "Primary programming and markup foundations",
        icon: "bi-code-square",
        skills: [
          { name: "Java", logo: javaLogo },
          { name: "SQL", icon: "bi-database" },
          { name: "HTML/CSS", logo: cssLogo },
        ],
      },
      {
        title: "Frameworks and Libraries",
        text: "Application frameworks and UI libraries I build with",
        icon: "bi-layers",
        skills: [
          { name: "Spring", logo: springLogo },
          { name: "Spring Boot", logo: springBootLogo },
          { name: "MVC", icon: "bi-layout-three-columns" },
          { name: "JPA", icon: "bi-database-check" },
          { name: "JDBC", icon: "bi-plug" },
          { name: "React", logo: reactLogo },
        ],
      },
      {
        title: "Databases",
        text: "Relational and document database systems",
        icon: "bi-database",
        skills: [
          { name: "MySQL", logo: mysqlLogo },
          { name: "PostgreSQL", logo: postgresqlLogo },
          { name: "MongoDB", logo: mongodbLogo },
        ],
      },
      {
        title: "Developer Tools",
        text: "Tools for coding, testing, delivery, and cloud workflows",
        icon: "bi-tools",
        skills: [
          { name: "Git", logo: gitLogo },
          { name: "Docker", logo: dockerLogo },
          { name: "VS Code", logo: vscodeLogo },
          { name: "IntelliJ", logo: intellijLogo },
          { name: "Maven", logo: mavenLogo },
          { name: "Postman", logo: postmanLogo },
          { name: "AWS", logo: awsLogo },
          { name: "JUnit", logo: junitLogo },
        ],
      },
      {
        title: "Core Skills",
        text: "Engineering fundamentals and day-to-day delivery practices",
        icon: "bi-cpu",
        skills: [
          { name: "OOP", icon: "bi-cpu" },
          { name: "DSA", icon: "bi-bezier2" },
          { name: "REST APIs", icon: "bi-braces" },
          { name: "Agile", icon: "bi-kanban" },
          { name: "Debugging", icon: "bi-bug" },
          { name: "Problem Solving", icon: "bi-lightbulb" },
          { name: "System Design", icon: "bi-boxes" },
        ],
      },
    ],
  },
  experiences: {
    eyebrow: "Timeline",
    title: "Journey",
    description: "My internship experience and education path.",
    items: [
      {
        title: "Java Developer Intern",
        text: "Building Java and Spring Boot applications with REST APIs, MVC structure, modular services, and OOP practices.",
        meta: "Infosys Springboard / Nov 2025 - Present",
        type: "experience",
        credentialUrl: "https://drive.google.com/file/d/1K6mkWG7l0SoKNrldlp_-uu-b9MGn77at/view?usp=sharing",
      },
      {
        title: "Bachelor of Technology",
        text: "Artificial Intelligence and Data Science. Awarded merit-based tuition fee waiver for academic excellence.",
        meta: "Mahakal Institute of Technology, Ujjain, MP / Aug 2022 - May 2026",
        score: "CGPA: 8.0/10",
        type: "education-large",
      },
      {
        title: "Higher Secondary Education",
        text: "Completed higher secondary education with strong academic performance.",
        meta: "Kalidas Montessori School, Ujjain, MP / Aug 2021 - Aug 2022",
        score: "Percentage: 88.2",
        type: "education-medium",
      },
      {
        title: "Secondary Education",
        text: "Completed secondary education with a consistent academic foundation.",
        meta: "Kalidas Montessori School, Ujjain, MP / Aug 2019 - Aug 2020",
        score: "Percentage: 80.8",
        type: "education-small",
      },
    ],
  },
  achievements: {
    eyebrow: "Recognition",
    title: "Honors",
    description: "Certifications and learning credentials collected through my Java and Spring journey.",
    items: [
      {
        title: "Java Spring Framework, Spring Boot & Spring AI",
        text: "Telusko, Udemy",
        meta: "2025",
        icon: "bi-layers",
      },
      {
        title: "Java Foundation",
        text: "Infosys Springboard",
        meta: "2025",
        icon: "bi-patch-check",
        credentialUrl: "https://drive.google.com/file/d/1sN-xBEQUkW5axMNkCxRJ_hpT5X6uvXKK/view?usp=sharing",
      },
      {
        title: "Java Foundation Learning Badge",
        text: "Oracle",
        meta: "2024",
        icon: "bi-award",
        credentialUrl: "https://drive.google.com/file/d/1MxCu64_wbPHCE_-ed0T5bXwzZHwpdx_K/view?usp=sharing",
      },
      {
        title: "Mastering Java Foundations",
        text: "Scaler",
        meta: "2024",
        icon: "bi-mortarboard",
        credentialUrl: "https://drive.google.com/file/d/1i_M5bJCaxtiRsf67sDBcFGtu6WCklboe/view?usp=sharing",
      },
      {
        title: "Java Basics",
        text: "HackerRank",
        meta: "2025",
        icon: "bi-code-slash",
        credentialUrl: "https://drive.google.com/file/d/1fshHVhT5gIX4bSIgZBoXJ3sXsHQdoQxZ/view?usp=sharing",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's build something useful.",
    description: "I am open to Java backend, full-stack, and AI-integrated product work.",
    items: [
      { title: "GitHub", href: "https://github.com/garvitSoni14", icon: "bi-github" },
      { title: "LinkedIn", href: "https://www.linkedin.com/in/garvitsoni04/", icon: "bi-linkedin" },
      { title: "LeetCode", href: "https://leetcode.com/u/garvitsoni_/", icon: "bi-code-slash" },
      { title: "Email", href: "mailto:garvitsoni04@gmail.com", icon: "bi-envelope" },
    ],
  },
};
