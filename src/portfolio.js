// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Rohail Rao's Portfolio",
  description:
    "A passionate individual who always strives to work on end-to-end products that develop sustainable and scalable social and technical systems to create impact.",
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
        "⚡ Building scalable and production-ready dashboards and reports using Power BI and Excel for diverse business use cases.",
        "⚡ Proven experience in handling large datasets using SQL to extract, transform, and analyze data for actionable insights.",
        "⚡ Expertise in advanced data modeling, forecasting, and time series analysis to support strategic decision-making.",
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
  competitiveSites: [],
};

const degrees = {
  degrees: [],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "My Journey",
  description:
    "I have over 4 years of experience as a Data Analyst, working with both growing startups and established companies to drive data-driven decision-making. My expertise lies in SQL, Power BI, and Excel, enabling me to design insightful dashboards, conduct in-depth analyses, and optimize business performance. Additionally, I am actively involved in open-source data communities, where I contribute as a representative and mentor, sharing my knowledge and fostering collaboration.",
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
            "Working remotely as a Data Analyst, I collaborate with cross-functional teams to deliver actionable insights from complex datasets. Leveraging tools like SQL, Power BI, and Excel, I develop interactive dashboards, automate reporting processes, and support data-driven decision-making. My remote setup enables efficient communication, flexibility, and consistent delivery of high-impact analytical solutions.",
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
            "I analyze departmental KPIs to assess weekly and monthly performance, driving operational improvements. I maintain dashboards to provide real-time insights into team productivity. Additionally, I conduct audits of profiles and calls for new insurance policy customers to ensure compliance with quality standards.",
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
            "I utilized data analysis to identify inefficiencies in the software development lifecycle and conducted assessments across departments to pinpoint areas for improvement. By collaborating cross-functionally, I interpreted data insights and proposed strategic solutions to enhance productivity. I implemented data-driven strategies that optimized processes and improved company performance, while generating reports to communicate findings and recommendations to stakeholders and senior management.",
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
            "Analyzed B2C and B2B customer retention and performance using Excel, SQL, and Google Sheets.",
            "Created automated scorecards and reports to track agent KPIs and incentives.",
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
    "I have worked on end-to-end Data Analytics projects that involve data extraction using SQL, performing detailed calculations and cleaning in Excel, creating interactive dashboards in Power BI, and compiling complete case studies for business stakeholders. These case studies showcase the identification of key business issues through data analysis and the presentation of actionable insights and solutions based on evidence. My projects reflect strong hands-on experience with modern data tools and a deep understanding of how to turn raw data into valuable business decisions.",
  avatar_image_path: "projects_image.svg",
};

const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "rohailnew.jpg",
    description:
      "📬 I'm available on most social media platforms — feel free to connect! I typically respond within 24 hours. I'm happy to collaborate or assist with anything related to Data Analysis, SQL, Power BI, Excel Reporting, Dashboard Development, and Data-Driven Decision Making.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in my professional career journey as well as share some technical knowledge.",
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
  contactPageData,
};
