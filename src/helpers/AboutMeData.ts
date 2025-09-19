import image1 from '../assets/images/certificates/BreezeMaxWeb.png';
import image2 from '../assets/images/certificates/Trios.jpg';
import image3 from '../assets/images/certificates/CBC.png';

export interface ResumeContent {
    title: string;
    subtitle?: string;
    type: 'text' | 'image'; // determines how to display the content
    content: string | string[]; // string = for text, string[] = for lists
}

export const resumeAssets: Record<'resume' | 'coverLetter' | 'certs' , ResumeContent> = {
   resume: {
    title: "Kadeem Cherman",
    subtitle: "Full Stack Developer",
    type: "text",
    content: `
      OBJECTIVE: 
      Motivated and growth-driven Software Developer with hands-on experience in full-stack, frontend, backend, and mobile development. Proficient in C#, JavaScript, 
      SQL, and modern frameworks such as React.js, Node.js, .NET, and Express. Skilled in building responsive, user-centered web applications, scalable backend systems, and 
      mobile apps using technologies like Android Studio, Kotlin, and SwiftUI. Passionate about writing clean, maintainable code, solving real-world problems, and continuously improving through self-learning, 
      collaboration, and mentoring. Seeking a dynamic role where I can contribute technical expertise—whether in frontend design, backend architecture, or mobile solutions while growing alongside an innovative team and making meaningful impact.
      _________________________________________________________________________________________________________________________________
      SKILLS/ABILITIES: 
      C# | Html5 | Css3 | Sass + Scss | Styled Components | Bootstrap | JavaScript | Opp | Type Script | Redux | Redux toolkit | ReactJs | NodeJS | ExpressJs | 
      ExpressJs Middleware | Mvc | .Net | .Net Core | MongoDB | SQL | NoSQL | Php | Git | System  Design | Design Patterns | Industrious | Self-Starter | Jwt | 
      Sessions | Authentication |  Authorization | Team Player |  Problem Solving | Microsoft Azure | Maui | CI/CD | Agile | Scrum | Analysis skills | Restful Api’s | 
      Debugging | Mern Stack | Self-taught programmer |  Business Requirements | Figma | GitHub | AWS | Web Accessibility, 
      and more .
      _________________________________________________________________________________________________________________________________
      EXPERIENCE:
      TRIOS COLLEGE BUSINESS TECHNOLOGY HEALTHCARE INC.
      Applications Development Instructor | June 2024 – Current
      ------------------------------------------------------------------------------------------------
         •	Teaching the assigned course curriculum.
         •	Share career experiences and knowledge.
         •	Stay current with and up to date with the material and technologies being taught along with my experiences. 
         •	Provide encouragement and constructive criticism with feedback to the students. 
         •	Assist the students with their career goals and help them better align with them. 
         •	Submit grades, projects, and manuals within five business days.
         •	Recordings of lectures and instructional activities.
         •	Attend mandatory staff meetings.
         •	LinkedIn learning.
         •	IOS Development building mobile data driven applications.
         •	Swift UI. 
         •	Android development.
         •	Android Studio, Kotlin & Java building out data persistent applications. 
         •	Career Management.
         •	Code review.
         •	Problem Solving different applications software.\n
      BUREAU VERITAS
      Web Developer | December 2022 – August 2023
      ------------------------------------------------------------------------------------------------
         •	Developed and maintained web applications using React, Node.js, and TypeScript.
         •	Integrated custom business logic according to PCD documentation.
         •	Design and present application components using Figma. 
         •	Proficient in backend development using C#, ASP.NET technologies to build robust and scalable web applications.
         •	Implemented token-based authentication and security measures using JWT and refresh token.
         •	Developed and deployed RESTful APIs with seamless communication between frontend and backend applications.
         •	Designed and implemented database management in SQL/ no SQL optimization. 
         •	Performed testing backend functionalities, ensuring reliability, scalability, and performance.
         •	Develop and maintain responsive, user-friendly, and visually appealing websites using programming languages.
         •	Collaborate with cross-functional teams to optimize website performance, user experience, and SEO.
         •	Planned, proposed, designed, and implemented new features and improved and maintained legacy features.
         •	Integrate & build features to requirements and designs according to Figma.
         •	Testing and debugging feature components in UI.
         •	Performed standups and updates in an Agile methodology environment.
         •	Worked to achieve strict deadlines.
         •	Collaborated with external company contractors to work on multiple different projects.
         •	Provided solutions for complex business logic-related challenges.   
         •	Translated PCDs (Project Control Document) into designs and business logic for new features.
         •	Communicated efficiently and in a timely manner when faced with working challenges and escalated to my manager when needed according to company policies.
         •	Contributed to Api features and bug fixes.
         •	Involved in developing, improving features and bug fixes in Microservices application.
         •	Documentation of implemented features, bug fixes, and proposed solutions.
         •	Cypress regression testing.
         •	Deployed newest version releases to network server for BA testing.
         •	Endpoints tested using postman.
         •	AWS S3 bucket certification.
         •	Performed testing backend functionalities, ensuring reliability, scalability, and performance.\n
      PHOENIX MATES TECHNOLOGIES INC.
      Junior Full Stack Developer | November 2020 – December 2022
      -------------------------------------------------------------------------------------------------------
         •	Built and maintained scalable and secure web applications.
         •	Mentoring/ Teaching intern developers.
         •	 Tutoring various students online and in person contributes to learning and development.
         •	My ability to teach and mentor exemplifies my deep understanding of technologies worked with.
         •	Designed and implemented custom CMS solutions to meet clients' unique requirements, resulting in increased efficiency and user engagement.
         •	Collaborate with cross-functional teams to optimize website performance, user experience, and SEO.
         •	Improved and maintained legacy features.
         •	Research, Design, Implement and present system design ideas for new application development. 
         •	Cypress regression testing.
         •	Design, Implement and developed Nodejs backend applications with Type Script, JWT, ExpressJs, MongoDB and SQL.
         •	Developed responsive user-friendly rich applications using React best practices and updated features.  
         •	Tested, documented, and suggested solutions to bugs within applications.
         •	Performed scrum standups and Agile methodology environment.
         •	Endpoints tested utilizing API testing software.
         •	Extensive documentation on web applications development processes.
         •	Integrated & built features to requirements and designs according to Figma.
         •	Integrated custom business logic according to PCD documentation.
         •	Design and present application components using Figma. 
         •	Proficient in backend development using C#, ASP.NET technologies to build robust and scalable web applications.
         •	Implemented token-based authentication and security measures using JWT and refresh token.
         •	Developed and deployed RESTful APIs with seamless communication between frontend and backend applications.
         •	Designed and implemented database management in SQL/ no SQL optimization. 
         •	Performed testing backend functionalities, ensuring reliability, scalability, and performance.\n
      BREEZEMAX-WEB.
      Junior Developer | June 2021 – October 2021
      --------------------------------------------------------------------------
         •	Built and maintained scalable and secure web applications.
         •	Performed standup scrum methodology environment.
         •	Design implemented and developed React applications.
         •	Tested, documented, and implemented solutions to bug fixes in legacy features applications. 
         •	Research and implement solutions to legacy applications bottleneck. 
         •	Design and implement monolithic application solutions.
         •	 Collaborated with cross-functional teams to optimize website performance, user experience, and SEO.
         •	Research and design store applications with ReduxJs.
         •	Implemented designs and business logic for new features according to PCD’s (Project Control Document).
         •	Implemented and developed backend NodeJS applications with user validation security features and tokens.
         •	Designed styled react custom components for legacy application features. 
         •	Developed and maintained responsive, user-friendly, and visually appealing application websites.
      __________________________________________________________________________________________________________________________________
      EDUCATION:\n
      TFS (TORONTO FILM SCHOOL)
      Toronto, ON | Video Game Design & Development Program
      Currently a 2.93 GPA and completed relevant coursework data structures and algorithms, programming fundamentals, Mathematics for game programmers. \n
      CBC (CANADIAN BUSINESS COLLEGE)
      Mississauga, ON | Software Engineering
      Earned a 94% GPA and completed relevant coursework in web applications, Microsoft SQL database development, Data Access, JavaScript, Ajax & Jquery, C# programming, 
      Windows applications, XHTML & XML.\n 
      TRIOS COLLEGE
      Mississauga, ON | Enterprise Web & Mobile Applications Development + Internship
      Earned an 89% GPA graduating with honors and completed relevant coursework in web development, Linux & Apache, Asp.Net, C# Development, iPhone Development, Php programming, 
      SQL programming, python programming, Jquery, CMS development, java programming & Android development.
      ___________________________________________________________________________________________________________________________________
      ACHEIVEMENTS:
      •	Developed a personal portfolio website showcasing my skills and projects using React, Node.js, and TypeScript.
      •	Contributed to open-source projects on GitHub, enhancing my skills in collaborative software development.
      •	Received recognition for outstanding performance in software development courses.
      •	Engaged in continuous learning through online courses and workshops, staying updated with the latest technologies and best practices in software development.
      •	Developed a passion for game development, creating several small games using Unity and Unreal Engine.
      •	Actively involved in the developer community, attending meetups and conferences to network and share knowledge.
      •	Mentored junior developers, helping them improve their coding skills and understanding of web development.
      •	Built a personal brand through blogging about software development topics and sharing insights on social media.
      •	Developed a keen interest in AI and machine learning, exploring their applications in software development.
      •	Gained experience in cloud computing by deploying applications on platforms like AWS and Heroku.
      •	Developed a strong understanding of software testing and quality assurance practices, ensuring high code quality and reliability.
      •	Demonstrated strong problem-solving skills by tackling complex coding challenges and algorithms.
      ________________________________________________________________________________________________________________________________
      COMMUNICATION SKILLS:
      •	Excellent written and verbal communication skills, with the ability to convey complex technical concepts to non-technical stakeholders.
      •	Proven ability to collaborate effectively with cross-functional teams, including designers, product managers, and other developers.
      •	Strong interpersonal skills, fostering positive relationships with clients and team members.
      •	Experience in conducting code reviews and providing constructive feedback to peers.
      •	Ability to adapt communication style to different audiences, ensuring clarity and understanding.
      •	Proficient in creating technical documentation, including API specifications, user guides, and system architecture diagrams.
      _______________________________________________________________________________________________________________________________
      LEADERSHIP SKILLS:
      •	Proven ability to lead and mentor junior developers, fostering a collaborative and growth-oriented team environment.
      •	Experience in managing projects from conception to completion, ensuring timely delivery and adherence to quality standards.
      •	Strong problem-solving skills, with a track record of identifying and implementing effective solutions to complex challenges.
      •	Ability to inspire and motivate team members, promoting a culture of innovation and continuous improvement.
      •	Experience in conducting training sessions and workshops to enhance team skills and knowledge.
      ________________________________________________________________________________________________________________________________
      REFERENCES: Available upon request.
    `
  },
  coverLetter: {
    title: "Cover Letter",
    subtitle: "Full Stack Developer/ Web Developer Position",
    type: "text",
    content: `
      KADEEM CHERMAN
      Calgary, Alberta, Canada
      Email: Kassie35dev@gmail.com
      LinkedIn: https://www.linkedin.com/in/kadeem-cherman/
      GitHub: https://github.com/KassieSanisclaws
      ________________________________________________________\n
      Dear Hiring Manager,\n
      My name is Kadeem Cherman, and I’m a dedicated and detail-oriented software developer with a passion for creating innovative, scalable, and user-friendly applications. 
      With hands-on experience across multiple technologies—including JavaScript, C#, SQL, .NET, React.js, and Node.js—I bring both technical depth and creative problem-solving to the table.
      I have earned diplomas in Enterprise Web & Mobile Application Development and Software Engineering, and I’m currently instructing in Application Development while continuing to deepen my understanding of design patterns, 
      MVC, and cloud-based technologies like Microsoft Azure. Over the past few years, I’ve worked in both startup and corporate environments, contributing to front-end and back-end projects, building secure APIs, 
      and collaborating with cross-functional teams using Agile and Scrum methodologies.
      My previous roles have involved:
      • Developing full-stack web applications with React, Node.js, and .NET
      • Designing mobile applications for Android and iOS
      • Implementing authentication systems using JWT and OAuth
      • Contributing to scalable cloud-hosted applications using Azure and AWS
      • Mentoring junior developers and collaborating in team environments
      I am continuously growing—whether through formal education, hands-on projects, or teaching others. My passion lies in building real-world applications that solve problems and enhance user experiences. 
      I take pride in being resourceful, adaptable, and eager to contribute meaningfully to any development team.
      Thank you for considering my application. 
      I invite you to view my GitHub portfolio and would be happy to discuss how my experience aligns with your team’s needs. I look forward to the opportunity to connect.
      Sincerely,
      Kadeem Cherman
    `
  },
  certs: {
    title: "Certificates",
    type: "image",
    content: [ image1, image2, image3 ]
  },
  // grades: {
  //   title: "Transcripts & Grades",
  //   type: "image",
  //   content: [ "/assets/grades/grade1.jpg", "/assets/grades/grade2.jpg" ]
  // } 
};