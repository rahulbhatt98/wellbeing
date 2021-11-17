const data = [
  {
    region,
    industory ,
    // Q13 What percentage of companies in the xx industry feel they've lost employees due to health and wellbeing issues?
    leftStatus : {
      leftDueToHealth: 33.33 ,
      notLeftDueToHealth: 16.67 ,
      notSureDueToHealth: 50,
    },
    //Q5 Do similar companies in the xx industry offer health and wellbeing programmes to their employees?
    healthWellBeingOffered : 83.33,
    //Q4 Why do employers in the xx industry believe in the importance of supporting employee health and wellbeing?
    employeeCareByIndustry : {
      careAboutTeam: 66.67 ,
      increasesProductivity: 33.37 ,
      dontCare: 16.67,
    },
    //Q14 What are the most common health and wellbeing issues affecting employees in the xxx industry
    //Q14 What is the prevalence of mental health illness in the xx industry vs national average
    healthWellbeingIssue : [{
      name:"Mental health issues, including depression and anxiety",
      percentage: 60
    },
    {
      name:"No one has experienced any health issues",
      percentage: 60
    },
    {
      name:"High blood pressure",
      percentage: 60
    },
    {
      name:"Diabetes",
      percentage: 60
    },
    {
      name:"Long Covid",
      percentage: 60
    },
    {
      name:"Pregnancy loss",
      percentage: 60
    },
    {
      name:"Cancer",
      percentage: 60
    },
    {
      name:"Arthritis",
      percentage: 60
    },
    {
      name:"Partner or close family member experiencing any of the above and requiring caring support",
      percentage: 60
    },
    {
      name:"Mobility issues",
      percentage: 60
    },
    {
      name:"ADHD",
      percentage: 60
    },
    {
      name:"Heart attack",
      percentage: 60
    },
    {
      name:"Autism",
      percentage: 60
    },
    {
      name:"Menopause",
      percentage: 60
    },
    {
      name:"Heart disease",
      percentage: 60
    },
    {
      name:"Loss of hearing",
      percentage: 60
    },
    {
      name:"Attempted suicide",
      percentage: 60
    },
    {
      name:"Stroke",
      percentage: 60
    },
    {
      name:"I don't know",
      percentage: 60
    },
    {
      name:"Chronic fatigue",
      percentage: 60
    },
    {
      name:"Epilepsy",
      percentage: 60
    },
    {
      name:"Cerebral palsy",
      percentage: 60
    },
    {
      name:"Multiple sclerosis",
      percentage: 60
    },
    {
      name:"Loss of sight",
      percentage: 60
    },
    {
      name:"Parkinson's disease",
      percentage: 60
    },
    {
      name:"Dementia/Alzheimer's",
      percentage: 60
    },
    {
      name:"Motor neurone disease",
      percentage: 60
    },
    {
      name:"Organ failure/Need dialysis",
      percentage: 60
    },
    {
      name:"Other (please specify)",
      percentage: 60
    }],
    // Q7 Out of those employers who offer health and wellbeing programmes, here's what their employees use the most
    employeeHealthCareProvision:[{
          name: "Mental health support",
          percentage: 60
        },
        {
          name: "Health assessments",
          percentage: 20
        },
        {
          name: "Support during pregnancy",
          percentage: 0
        },
        {
          name: "GP access",
          percentage: 20
        },
        {
          name: "Dental treatment",
          percentage: 0
        },
        {
          name: "Hospital stays",
          percentage: 0
        },
        {
          name: "Gym membership",
          percentage: 20
        },
        {
          name: "Physiotherapy",
          percentage: 0
        },
        {
          name: "Outpatient treatment",
          percentage: 20
        },
        {
          name: "Opticians",
          percentage: 0
        },
        {
          name: "Diagnostics",
          percentage: 20
        },
        {
          name: "Careers' support",
          percentage: 20
        },
      ],
      // Q1 Results on the tool: Generational make-up of the workforce.
    generationMakeUp : [
        {
          name: 'Generation Z',
          ageGroup : '16-23',
          percentage : 00
        },
        {
          name: 'Millennial',
          ageGroup : '24-42',
          percentage : 66.67
        },
        {
          name: 'Generation X',
          ageGroup : '43-54',
          percentage : 00
        },
        {
          name: 'Baby boomers',
          ageGroup : '55-73',
          percentage : 16.67
        },
        {
          name: 'Silent generation',
          ageGroup : '74+',
          percentage : 0
        }
      ]
  }
]

export default data;