// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Rohail Rao's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Rohail's Portfolio",
    type: "website",
    url:
      "https://drive.google.com/file/d/1RFKKc9tkhtEg-Qix9NOKXmTi9w2Ba2FQ/view",
  },
};

//Home Page
const greeting = {
  title: "Rohail Rao",
  logo_name: "Rohail Rao",
  subTitle:
    "I am a Data Analyst with 4 years of experience, specializing in SQL, Power BI, and Excel to optimize business performance and drive data-driven decisions.",
  resumeLink:
    "https://drive.google.com/file/d/1RFKKc9tkhtEg-Qix9NOKXmTi9w2Ba2FQ/view",
  githubProfile: "https://github.com/rohailrao",
  bookmeeting: "https://calendly.com/rohailrao2000",
};

const socialMediaLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/muhammad-rohail-rao-170414215/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "GitHub",
    link: "https://github.com/rohailrao",
    fontAwesomeIcon: "fa-github", // Font Awesome calendar icon
    backgroundColor: "#3d444d", // Calendly brand color
  },
  {
    name: "Gmail",
    link:
      "https://mail.google.com/mail/?view=cm&fs=1&to=rohailrao2000@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/rohail.rao.589",
    fontAwesomeIcon: "fa-facebook",
    backgroundColor: "#1877F2",
  },
];

const skills = {
  data: [
    {
      title: "Data Analytics & Business Intelligence",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building scalable and production-ready dashboards and reports using Power BI and Excel for diverse business use cases",
        "⚡ Proven experience in handling large datasets using SQL to extract, transform, and analyze data for actionable insights",
        "⚡ Expertise in advanced data modeling, forecasting, and time series analysis to support strategic decision-making",
      ],
      softwareSkills: [
        {
          skillName: "Power BI",
          imageSrc: "aawfba7fv.webp",
        },
        {
          skillName: "MS Excel",
          imageSrc: "excel.png",
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "SQL",
          imageSrc: "sql_logo.png",
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Indian Institute of Information Technology Kurnool",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "iiitk_logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "http://iiitk.ac.in",
    },
    {
      title: "Indiana University Bloomington",
      subtitle: "M.S. in Computer Science",
      logo_path: "iu_logo.png",
      alt_name: "Indiana University Bloomington",
      duration: "2021 - 2023",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "https://www.indiana.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "My Journey",
  description:
    "I have over 4 years of experience as a Data Analyst, working with both evolving startups and established companies to drive data-driven decision-making. My expertise lies in SQL, Power BI, and Excel, enabling me to design insightful dashboards, conduct in-depth analyses, and optimize business performance. Additionally, I am actively involved in open-source data communities, where I contribute as a representative and mentor, sharing my knowledge and fostering collaboration.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Senior Data Analyst",
          company: "Simplified Dashboards",
          company_url:
            "https://www.linkedin.com/company/simplified-dashboards/?viewAsMember=true",
          logo_path: "simplified_dashboards_logo.jpeg",
          duration: "March 2025 - Present",
          location: "Karachi, Pakistan (Remote)",
          description:
            "Working remotely as a Data Analyst, I collaborate with cross-functional teams to deliver actionable insights from complex datasets. Leveraging tools like SQL, Power BI, and Excel, I develop interactive dashboards, automate reporting processes, and support data-driven decision-making—regardless of location. My remote setup enables efficient communication, flexibility, and consistent delivery of high-impact analytical solutions",
          color: "#9b1578",
        },
        {
          title: "Assistant Manager Quality Auditor",
          company: "Ibex Global (Covered Insurance)",
          company_url:
            "https://www.linkedin.com/company/coveredinsurance/posts/?feedView=all",
          logo_path: "coverd.jpg",
          duration: "August 2024 - March 2025",
          location: "Karachi, Pakistan",
          description:
            "I analyze departmental KPIs to assess weekly and monthly performance, driving operational improvements. I maintain dashboards to provide real-time insights into team productivity. Additionally, I conduct audits of profiles and calls for new insurance policy customers to ensure compliance and quality standards.",
          color: "#000000",
        },
        {
          title: "Performance Analyst ",
          company: "Tekrevol ",
          company_url: "https://www.linkedin.com/company/tekrevol/",
          logo_path: "tekrevol.jpg",
          duration: "September 2023 – June 2024",
          location: "Karachi, Pakistan",
          description:
            "I utilized data analysis to identify inefficiencies in the software development lifecycle and conducted assessments across departments to pinpoint areas for improvement. By collaborating cross-functionally, I interpreted data insights and proposed strategic solutions to enhance productivity. I implemented data-driven strategies that optimized processes and improved company performance while generating reports to communicate findings and recommendations to stakeholders and senior management.",
          color: "#0879bf",
        },
        {
          title: "Commercial Analyst",
          company: "MEDZnMORE Pvt. Ltd ",
          company_url: "https://www.linkedin.com/company/medznmore/",
          logo_path: "medznmore_logo.jpeg",
          duration: "January 2023 - July 2023",
          location: "Karachi, Pakistan",
          description:
            "I designed and developed a live dashboard that enabled real-time tracking of key performance indicators, improving profit margins from -10% to 2% through efficient margin analysis. I worked closely with the data team to maintain data integrity and conducted in-depth analysis to provide insights and projections for future growth. Utilizing Excel, SQL, and Power BI, I created visually compelling data representations for clear communication with stakeholders. Additionally, I collaborated with cross-functional teams to align data efforts with company goals and objectives.",
          color: "#9b1578",
        },
        {
          title: "Customer Performance Analyst",
          company: "MEDZnMORE Pvt. Ltd ",
          company_url: "https://www.linkedin.com/company/medznmore/",
          logo_path: "medznmore_logo.jpeg",
          duration: "January 2022 - December 2022",
          location: "Karachi, Pakistan",
          description: [
            "Analyzed B2C and B2B customer retention and performance using Excel, SQL, and Google Sheets. ",
            "Created automated scorecards and reports to track agent KPIs and incentives. ",
            "Mentored team members and collaborated cross-functionally to improve data processes.",
          ],
          color: "#9b1578",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I have worked on end-to-end Data Analytics projects that involve data extraction using SQL, performing detailed calculations and cleaning in Excel, creating interactive dashboards in Power BI, and compiling complete case studies for business stakeholders. These case studies showcase the identification of key business issues through data analysis and the presentation of actionable insights and solutions based on evidence. My projects reflect strong hands-on experience with modern data tools and a deep understanding of how to turn raw data into valuable business decisions.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "rohailnew.jpg",
    description:
      "📬 I'm available on most social media platforms — feel free to connect! I typically respond within 24 hours. I'm happy to collaborate or assist with anything related to Data Analysis, SQL, Power BI, Excel Reporting, Dashboard Development, and Data-Driven Decision Making",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    avatar_image_path: "blogs_image.svg",
  },
  // addressSection: {
  //   title: "Address",
  //   subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
  //   locality: "San Jose",
  //   country: "USA",
  //   region: "California",
  //   postalCode: "95129",
  //   streetAddress: "Saratoga Avenue",
  //   avatar_image_path: "address_image.svg",
  //   location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  // },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publications,
  contactPageData,
};
