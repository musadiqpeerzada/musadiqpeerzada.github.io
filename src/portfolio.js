/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Musadiq Peerzada",
  title: "Hello all, I'm Musadiq",
  subTitle: emoji(
    "A Full Stack Software Developer working on building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1GaMZzmwAKehN4TWqEiSB9z63yHOvy6IT/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/musadiqpeerzada",
  linkedin: "https://www.linkedin.com/in/musadiqpeerzada/",
  gmail: "musadiqpeerzada@gmail.com",
  facebook: "https://www.facebook.com/musadiqpeerzada",
  medium: "https://medium.com/@musadiqpeerzada",
  stackoverflow: "https://stackoverflow.com/users/18175300/musadiq-peerzada",
  instagram: "https://www.instagram.com/musdiqpeerzada/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE AND LEARN NEW TECHOLOGIES",
  skills: [
    emoji(
      "⚡ Develop End To End web and mobile applications"
    ),
    emoji(
      "⚡ Integrate Third Party Applications"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "react-native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "mongo-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "sql-aws",
      fontAwesomeClassname: "fab fa-aws"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "College of Engineering, Pune",
      logo: require("./assets/images/coep-logo.png"),
      subHeader: "Bachelor of Technology in Information Technology",
      duration: "July 2017 - June 2021",
      desc: "Member of Computer Society of India.",
      descBullets: [
        "CGPA - 7.74"
      ]
    },
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    },
    {
      Stack: "AWS",
      progressPercentage: "40%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Design Engineer - I",
      company: "Smartserv Inc",
      companylogo: require("./assets/images/smartserv-logo.png"),
      date: "July 2021 – Present",
      descBullets: [
        "ReactJs",
        "Node",
        "Express",
        "MySQL",
        "MongoDB",
      ]
    },
    {
      role: "Data Intern",
      company: "Smartserv Inc",
      companylogo: require("./assets/images/smartserv-logo.png"),
      date: "Jan 2021 – July 2021",
      descBullets: [
        "Report Automation",
        "Web Scraping",
        "AutoIT AutoMation",
        "Data Cleaning",
        "Data Migration"
      ]
    },
    {
      role: "Intern",
      company: "Persistent Systems",
      companylogo: require("./assets/images/persistent-logo.jpg"),
      date: "Apr 2020 – July 2021",
      descBullets: [
        "Python",
        "Machine Learning",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF THE PROJECTS I HAVE BEEN A PART OF",
  projects: [
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "CS Portal",
      projectDesc: "A Web Portal For internal use to Manage Team and Streamline data",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "http://cs-portal.smartserv.io/"
        // }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "NFPA Vertical",
      projectDesc: "Developed The NFPA Vertical Workflow",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "http://saayahealth.com/"
        // }
        //  you can add extra buttons here.
      ]
    },{
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "bc-Linux Command",
      projectDesc: "bc, for Basic Calculator, A Calculator For Infinitely Large Integer And Floating Numbers",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "http://saayahealth.com/"
        // }
        //  you can add extra buttons here.
      ]
    },{
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "BitTorrent Client",
      projectDesc: "P2P file transmission with BitTorrent using python and Socket Programming",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "http://saayahealth.com/"
        // }
        //  you can add extra buttons here.
      ]
    },{
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "MealOn",
      projectDesc: "Web Application To Automate The Functioning of Mess With Features to Manage Students, Employees and Inventory",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "http://saayahealth.com/"
        // }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "ACOHA",
      projectDesc: "Augmented Computing of Heavy Android Applications- Shared processing between Android Phone and Laptop Processor in a LAN",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "http://nextu.se/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Courses And Certifications 🏆 "),
  subtitle:
    "Courses, Certifications, Achievements!",

  achievementsCards: [
    {
      title: "Open Source Software Development, Linux and Git Specialization",
      subtitle:
        "Badge for Linux, git and Open Source Authorized By The Linux Foundation and issued by Coursera",
      image: require("./assets/images/open-source-badge.png"),
      footerLink: [
        {
          name: "Badge",
          url: "https://www.credly.com/badges/d64d7a9c-8dd9-4d47-87bb-7d84131142e0"
        },
        {
          name: "Certificate",
          url: "https://coursera.org/share/63a42dac34309e8966199e211024c9d3"
        }
        
      ]
    },
    {
      title: "Front-End Web Development with React",
      subtitle:
        "A Course for ReactJs offered by The Hong Kong University of Science and Technology on Coursera.",
      image: require("./assets/images/hongkonglogo.png"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://coursera.org/share/a51116b3561147f86fc47ece8ae4c693"
        }
      ]
    },
    {
      title: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
      subtitle:
        "A Course for Bootstrap 4 offered by The Hong Kong University of Science and Technology on Coursera.",
      image: require("./assets/images/hongkonglogo.png"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://coursera.org/share/a51116b3561147f86fc47ece8ae4c693"
        }
      ]
    },

    {
      title: "AWS Cloud Technical Essentials",
      subtitle: "A Course for basic AWS offered by Amazon Web Services on Coursera",
      image: require("./assets/images/aws-logo.png"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://coursera.org/share/6624ab14ff8c51336d2c5fc662225373"
        }
      ]
    }, {
      title: "Modern JavaScript: ES6 Basics",
      subtitle: "A Course for Basics of ES6 and it's use on Coursera",
      image: require("./assets/images/coursera-logo-new.png"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://coursera.org/share/4af2914c81d9dd3086ada63e9978fa62"
        }
      ]
    },
    {
      title: "Linux for Developers",
      subtitle: "A Course to begin with the use of Linux for Development, offered by The Linux Foundation on Coursera",
      image: require("./assets/images/thelinuxfoundation-logo.png"),
      footerLink: [
        {name: "Certification", url: "https://coursera.org/share/c98fb2d3faccc62b8b4358a3facfb8b4"},
      ]
    },
    {
      title: "Linux Tools for Developers",
      subtitle: "A Course to introduce various tools used for Development on Linux, offered by The Linux Foundation on Coursera",
      image: require("./assets/images/thelinuxfoundation-logo.png"),
      footerLink: [
        {name: "Certification", url: "https://coursera.org/share/73c217a8f60ce12ab3b8ef29d4e43280"},
      ]
    },
    {
      title: "Open Source Software Development Methods",
      subtitle: "A Course with guidelines to work on OpenSource Projects offered by The Linux Foundation on Coursera",
      image: require("./assets/images/thelinuxfoundation-logo.png"),
      footerLink: [
        {name: "Certification", url: "https://coursera.org/share/4e6fbedc19541ad90c740edc9e1834ac"},
      ]
    },
    {
      title: "Using Git for Distributed Development",
      subtitle: "A Course for Git - Version Control Systems offered by The Linux Foundation on Coursera",
      image: require("./assets/images/thelinuxfoundation-logo.png"),
      footerLink: [
        {name: "Certification", 
        url: "https://coursera.org/share/4a7f0a04b8a455e4d51f48979a519169"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7006322671",
  email_address: "musadiqpeerzada@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "musadiqperzada", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
