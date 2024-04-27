var myresume = {
    "personalDetails": {
      "name": "Gokul Selvam Manivannan",
      "contact": {
        "phone": "+91 9600927108",
        "alternatePhone": "+91 9361648168",
        "email": "gokulselvam2911@gmail.com",
        "address": "25 Sreerangan New ST., Dadagapatti, Salem 636006"
      },
      "dateOfBirth": "1996-11-29",
      "sex": "Male",
      "maritalStatus": "Married",
      "nationality": "Indian",
      "religion": "Hindu",
      "languages": ["Tamil", "English"]
    },
    "careerObjective": "Highly-motivated employee with desire to take on new challenges. Strong work ethic, adaptability and exceptional interpersonal skills. Adept at working effectively unsupervised and quickly mastering new skills.",
    "professionalExperience": [
      {
        "company": "Sri Palani Aandavar builders",
        "location": "Erode",
        "position": "Operations Manager",
        "dates": "Jun 2022 - Present",
        "responsibilities": [
          "Strategic Construction Project Leadership",
          "Efficient Resource Management",
          "Effective Communication and Collaboration",
          "Financial Oversight and Problem Resolution",
          "Safety Compliance and Quality Assurance"
        ]
      },
      {
        "company": "RK AGENCIES (Maruti Suzuki Genuine Parts)",
        "location": "Erode",
        "position": "Warehouse Supervisor",
        "dates": "Aug 2020 - May 2022",
        "responsibilities": [
          "Warehouse Operations Management",
          "Efficient Workflow Planning",
          "Inventory Management and Technology",
          "Performance Oversight and Training",
          "Compliance and Reporting",
          "Logistics and Supply Chain Collaboration"
        ]
      },
      {
        "company": "Jata Auto Ancillarys",
        "location": "Chennai",
        "position": "Supervisor of Factory Operations",
        "dates": "Sep 2019 - Jul 2020",
        "responsibilities": [
          "Factory Operations Leadership",
          "Production Efficiency and Quality",
          "Inventory Management and Safety",
          "Strategic Planning and Cost Reduction",
          "Reporting and Data Analysis",
          "Technology Integration and Collaboration"
        ]
      },
      {
        "company": "Wabco India (P) Ltd",
        "location": "Chennai",
        "position": "QA Inspector",
        "dates": "May 2018 - Aug 2019",
        "responsibilities": [
          "Quality Assurance Oversight",
          "Thorough Inspection Expertise",
          "Data-Driven Reporting Skills",
          "Process Optimization and Training",
          "Regulatory Compliance and Resolution"
        ]
      }
    ],
    "education": [
      {
        "degree": "M.B.A. Logistics and Supply Chain Management",
        "institution": "University of Madras Institute of Distance Education",
        "location": "Chennai",
        "year": "2024",
        "percentage": "70%"
      },
      {
        "degree": "B.E. Mechanical Engineering",
        "institution": "Excel Engineering College",
        "location": "Chennai",
        "year": "2018",
        "percentage": "64%"
      },
      {
        "degree": "Higher Secondary",
        "institution": "Jayarani Mat. Hr. Sec. School",
        "location": "Salem",
        "year": "2014",
        "percentage": "61%"
      },
      {
        "degree": "High School",
        "institution": "Jayarani Mat. Hr. Sec. School",
        "location": "Salem",
        "year": "2012",
        "percentage": "79%"
      }
    ],
    "skills": [
      {
        "name": "Leadership",
        "level": "Expert"
      },
      {
        "name": "Team Development",
        "level": "Skilled"
      },
      {
        "name": "Supply Chain Optimization",
        "level": "Expert"
      },
      {
        "name": "Logistics Coordination",
        "level": "Expert"
      },
      {
        "name": "Transportation",
        "level": "Expert"
      },
      {
        "name": "Distribution and Warehousing",
        "level": "Expert"
      },
      {
        "name": "Inventory Management",
        "level": "Expert"
      },
      {
        "name": "Inventory Control",
        "level": "Expert"
      },
      {
        "name": "Inventory Audits",
        "level": "Expert"
      },
      {
        "name": "Quality Assurance",
        "level": "Expert"
      },
      {
        "name": "Safety Compliance",
        "level": "Expert"
      },
      {
        "name": "Loss Prevention",
        "level": "Expert"
      },
      {
        "name": "Expense Control",
        "level": "Expert"
      },
      {
        "name": "Documentation",
        "level": "Expert"
      },
      {
        "name": "Office Management",
        "level": "Expert"
      }
    ],
    "declaration": "I hereby declare that the above given information’s are true and correct of my knowledge and belief."
  };
  
  // Using for loop
  console.log("Using for loop:");
  for (let i = 0; i < myresume.skills.length; i++) {
    console.log(myresume.skills[i].name);
  }
  
  // Using for...in loop
  console.log("\nUsing for...in loop:");
  for (let index in myresume.skills) {
    console.log(myresume.skills[index].name);
  }
  
  // Using for...of loop
  console.log("\nUsing for...of loop:");
  for (let skill of myresume.skills) {
    console.log(skill.name);
  }
  
  // Using forEach loop
  console.log("\nUsing forEach loop:");
  myresume.skills.forEach((skill) => {
    console.log(skill.name);
  });
  