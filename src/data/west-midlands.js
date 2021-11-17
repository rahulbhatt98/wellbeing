const data = [
  {
    region: "West Midlands",
    industry: "Architecture",
    leftStatus: {
      leftDueToHealth: 75,
      notLeftDueToHealth: 25,
      notSureDueToHealth: 0,
    },
    healthWellBeingOffered: 100,
    employeeCareByIndustry: {
      careAboutTeam: 50,
      increasesProductivity: 100,
      dontCare: 0,
    },
    healthWellBeingIssue: [{
      name: "Mental health",
      percentage: 25
    },
    {
      name: "No health issues",
      percentage: 0
    },
    {
      name: "High blood pressure",
      percentage: 25
    },
    {
      name: "Diabetes",
      percentage: 0
    },
    {
      name: "Long Covid",
      percentage: 25
    },
    {
      name: "Pregnancy loss",
      percentage: 25
    },
    {
      name: "Cancer",
      percentage: 0
    },
    {
      name: "Arthritis",
      percentage: 25
    },
    {
      name: "Care support for loved ones",
      percentage: 25
    },
    {
      name: "Mobility issues",
      percentage: 25
    },
    {
      name: "ADHD",
      percentage: 0
    },
    {
      name: "Heart attack",
      percentage: 0
    },
    {
      name: "Autism",
      percentage: 0
    },
    {
      name: "Menopause",
      percentage: 0
    },
    {
      name: "Heart disease",
      percentage: 25
    },
    {
      name: "Loss of hearing",
      percentage: 0
    },
    {
      name: "Attempted suicide",
      percentage: 0
    },
    {
      name: "Stroke",
      percentage: 0
    },
    {
      name: "I don't know",
      percentage: 0
    },
    {
      name: "Chronic fatigue",
      percentage: 25
    },
    {
      name: "Epilepsy",
      percentage: 0
    },
    {
      name: "Cerebral palsy",
      percentage: 0
    },
    {
      name: "Multiple sclerosis",
      percentage: 50
    },
    {
      name: "Loss of sight",
      percentage: 0
    },
    {
      name: "Parkinson's disease",
      percentage: 0
    },
    {
      name: "Dementia/Alzheimer's",
      percentage: 0
    },
    {
      name: "Motor neurone disease",
      percentage: 0
    },
    {
      name: "Organ failure/Need dialysis",
      percentage: 0
    },
    {
      name: "Other (please specify)",
      percentage: 0
    }],
    employeeHealthCareProvision: [
      {
        name: "Mental health support",
        percentage: 50
      },
      {
        name: "Health assessments",
        percentage: 25
      },
      {
        name: "Support during pregnancy",
        percentage: 50
      },
      {
        name: "GP access",
        percentage: 0
      },
      {
        name: "Dental treatment",
        percentage: 50
      },
      {
        name: "Hospital stays",
        percentage: 25
      },
      {
        name: "Gym membership",
        percentage: 0
      },
      {
        name: "Physiotherapy",
        percentage: 25
      },
      {
        name: "Outpatient treatment",
        percentage: 25
      },
      {
        name: "Opticians",
        percentage: 0
      },
      {
        name: "Diagnostics",
        percentage: 0
      },
      {
        name: "Careers' support",
        percentage: 0
      },
    ],
    generationMakeUp: [
      {
        name: 'Generation Z',
        ageGroup: '16-23',
        percentage: 75
      },
      {
        name: 'Millennial',
        ageGroup: '24-42',
        percentage: 75
      },
      {
        name: 'Generation X',
        ageGroup: '43-54',
        percentage: 0
      },
      {
        name: 'Baby boomers',
        ageGroup: '55-73',
        percentage: 0
      },
      {
        name: 'Silent generation',
        ageGroup: '74+',
        percentage: 0
      }]
  },
  {
    region: "West Midlands",
    industry: "Architecture, Engineering & Building",
    leftStatus: {
      leftDueToHealth: 75,
      notLeftDueToHealth: 25,
      notSureDueToHealth: 0,
    },
    healthWellBeingOffered: 100,
    employeeCareByIndustry: {
      careAboutTeam: 50,
      increasesProductivity: 100,
      dontCare: 0,
    },
    healthWellBeingIssue: [{
      name: "Mental health",
      percentage: 25
    },
    {
      name: "No health issues",
      percentage: 0
    },
    {
      name: "High blood pressure",
      percentage: 25
    },
    {
      name: "Diabetes",
      percentage: 0
    },
    {
      name: "Long Covid",
      percentage: 25
    },
    {
      name: "Pregnancy loss",
      percentage: 25
    },
    {
      name: "Cancer",
      percentage: 0
    },
    {
      name: "Arthritis",
      percentage: 25
    },
    {
      name: "Care support for loved ones",
      percentage: 25
    },
    {
      name: "Mobility issues",
      percentage: 25
    },
    {
      name: "ADHD",
      percentage: 0
    },
    {
      name: "Heart attack",
      percentage: 0
    },
    {
      name: "Autism",
      percentage: 0
    },
    {
      name: "Menopause",
      percentage: 0
    },
    {
      name: "Heart disease",
      percentage: 25
    },
    {
      name: "Loss of hearing",
      percentage: 0
    },
    {
      name: "Attempted suicide",
      percentage: 0
    },
    {
      name: "Stroke",
      percentage: 0
    },
    {
      name: "I don't know",
      percentage: 0
    },
    {
      name: "Chronic fatigue",
      percentage: 25
    },
    {
      name: "Epilepsy",
      percentage: 0
    },
    {
      name: "Cerebral palsy",
      percentage: 0
    },
    {
      name: "Multiple sclerosis",
      percentage: 50
    },
    {
      name: "Loss of sight",
      percentage: 0
    },
    {
      name: "Parkinson's disease",
      percentage: 0
    },
    {
      name: "Dementia/Alzheimer's",
      percentage: 0
    },
    {
      name: "Motor neurone disease",
      percentage: 0
    },
    {
      name: "Organ failure/Need dialysis",
      percentage: 0
    },
    {
      name: "Other (please specify)",
      percentage: 0
    }],
    employeeHealthCareProvision: [
      {
        name: "Mental health support",
        percentage: 50
      },
      {
        name: "Health assessments",
        percentage: 25
      },
      {
        name: "Support during pregnancy",
        percentage: 50
      },
      {
        name: "GP access",
        percentage: 0
      },
      {
        name: "Dental treatment",
        percentage: 50
      },
      {
        name: "Hospital stays",
        percentage: 25
      },
      {
        name: "Gym membership",
        percentage: 0
      },
      {
        name: "Physiotherapy",
        percentage: 25
      },
      {
        name: "Outpatient treatment",
        percentage: 25
      },
      {
        name: "Opticians",
        percentage: 0
      },
      {
        name: "Diagnostics",
        percentage: 0
      },
      {
        name: "Careers' support",
        percentage: 0
      },
    ],
    generationMakeUp: [
      {
        name: 'Generation Z',
        ageGroup: '16-23',
        percentage: 75
      },
      {
        name: 'Millennial',
        ageGroup: '24-42',
        percentage: 75
      },
      {
        name: 'Generation X',
        ageGroup: '43-54',
        percentage: 0
      },
      {
        name: 'Baby boomers',
        ageGroup: '55-73',
        percentage: 0
      },
      {
        name: 'Silent generation',
        ageGroup: '74+',
        percentage: 0
      }]
  },
  {
    region: "West Midlands",
    industry: "Arts & Culture",
    leftStatus: {
      leftDueToHealth: 100,
      notLeftDueToHealth: 0,
      notSureDueToHealth: 0,
    },
    healthWellBeingOffered: 100,
    employeeCareByIndustry: {
      careAboutTeam: 100,
      increasesProductivity: 0,
      dontCare: 0,
    },
    healthWellBeingIssue: [{
      name: "Mental health",
      percentage: 100
    },
    {
      name: "No health issues",
      percentage: 0
    },
    {
      name: "High blood pressure",
      percentage: 100
    },
    {
      name: "Diabetes",
      percentage: 100
    },
    {
      name: "Long Covid",
      percentage: 0
    },
    {
      name: "Pregnancy loss",
      percentage: 0
    },
    {
      name: "Cancer",
      percentage: 0
    },
    {
      name: "Arthritis",
      percentage: 0
    },
    {
      name: "Care support for loved ones",
      percentage: 0
    },
    {
      name: "Mobility issues",
      percentage: 0
    },
    {
      name: "ADHD",
      percentage: 0
    },
    {
      name: "Heart attack",
      percentage: 0
    },
    {
      name: "Autism",
      percentage: 0
    },
    {
      name: "Menopause",
      percentage: 0
    },
    {
      name: "Heart disease",
      percentage: 0
    },
    {
      name: "Loss of hearing",
      percentage: 0
    },
    {
      name: "Attempted suicide",
      percentage: 0
    },
    {
      name: "Stroke",
      percentage: 0
    },
    {
      name: "I don't know",
      percentage: 0
    },
    {
      name: "Chronic fatigue",
      percentage: 0
    },
    {
      name: "Epilepsy",
      percentage: 0
    },
    {
      name: "Cerebral palsy",
      percentage: 0
    },
    {
      name: "Multiple sclerosis",
      percentage: 0
    },
    {
      name: "Loss of sight",
      percentage: 0
    },
    {
      name: "Parkinson's disease",
      percentage: 0
    },
    {
      name: "Dementia/Alzheimer's",
      percentage: 0
    },
    {
      name: "Motor neurone disease",
      percentage: 0
    },
    {
      name: "Organ failure/Need dialysis",
      percentage: 0
    },
    {
      name: "Other (please specify)",
      percentage: 0
    }],
    employeeHealthCareProvision: [
      {
        name: "Mental health support",
        percentage: 0
      },
      {
        name: "Health assessments",
        percentage: 100
      },
      {
        name: "Support during pregnancy",
        percentage: 0
      },
      {
        name: "GP access",
        percentage: 0
      },
      {
        name: "Dental treatment",
        percentage: 100
      },
      {
        name: "Hospital stays",
        percentage: 0
      },
      {
        name: "Gym membership",
        percentage: 0
      },
      {
        name: "Physiotherapy",
        percentage: 0
      },
      {
        name: "Outpatient treatment",
        percentage: 0
      },
      {
        name: "Opticians",
        percentage: 100
      },
      {
        name: "Diagnostics",
        percentage: 0
      },
      {
        name: "Careers' support",
        percentage: 0
      },
    ],
    generationMakeUp: [
      {
        name: 'Generation Z',
        ageGroup: '16-23',
        percentage: 0
      },
      {
        name: 'Millennial',
        ageGroup: '24-42',
        percentage: 0
      },
      {
        name: 'Generation X',
        ageGroup: '43-54',
        percentage: 100
      },
      {
        name: 'Baby boomers',
        ageGroup: '55-73',
        percentage: 0
      },
      {
        name: 'Silent generation',
        ageGroup: '74+',
        percentage: 0
      }]
  },
  {
    region: "West Midlands",
    industry: "Education",
    leftStatus: {
      leftDueToHealth: 0,
      notLeftDueToHealth: 50,
      notSureDueToHealth: 50,
    },
    healthWellBeingOffered: 100,
    employeeCareByIndustry: {
      careAboutTeam: 100,
      increasesProductivity: 50,
      dontCare: 0,
    },
    healthWellBeingIssue: [{
      name: "Mental health",
      percentage: 50
    },
    {
      name: "No health issues",
      percentage: 0
    },
    {
      name: "High blood pressure",
      percentage: 0
    },
    {
      name: "Diabetes",
      percentage: 50
    },
    {
      name: "Long Covid",
      percentage: 0
    },
    {
      name: "Pregnancy loss",
      percentage: 0
    },
    {
      name: "Cancer",
      percentage: 50
    },
    {
      name: "Arthritis",
      percentage: 0
    },
    {
      name: "Care support for loved ones",
      percentage: 0
    },
    {
      name: "Mobility issues",
      percentage: 50
    },
    {
      name: "ADHD",
      percentage: 50
    },
    {
      name: "Heart attack",
      percentage: 0
    },
    {
      name: "Autism",
      percentage: 50
    },
    {
      name: "Menopause",
      percentage: 0
    },
    {
      name: "Heart disease",
      percentage: 0
    },
    {
      name: "Loss of hearing",
      percentage: 50
    },
    {
      name: "Attempted suicide",
      percentage: 50
    },
    {
      name: "Stroke",
      percentage: 0
    },
    {
      name: "I don't know",
      percentage: 0
    },
    {
      name: "Chronic fatigue",
      percentage: 0
    },
    {
      name: "Epilepsy",
      percentage: 0
    },
    {
      name: "Cerebral palsy",
      percentage: 0
    },
    {
      name: "Multiple sclerosis",
      percentage: 50
    },
    {
      name: "Loss of sight",
      percentage: 0
    },
    {
      name: "Parkinson's disease",
      percentage: 50
    },
    {
      name: "Dementia/Alzheimer's",
      percentage: 0
    },
    {
      name: "Motor neurone disease",
      percentage: 0
    },
    {
      name: "Organ failure/Need dialysis",
      percentage: 0
    },
    {
      name: "Other (please specify)",
      percentage: 0
    }],
    employeeHealthCareProvision: [
      {
        name: "Mental health support",
        percentage: 50
      },
      {
        name: "Health assessments",
        percentage: 50
      },
      {
        name: "Support during pregnancy",
        percentage: 100
      },
      {
        name: "GP access",
        percentage: 50
      },
      {
        name: "Dental treatment",
        percentage: 50
      },
      {
        name: "Hospital stays",
        percentage: 0
      },
      {
        name: "Gym membership",
        percentage: 0
      },
      {
        name: "Physiotherapy",
        percentage: 0
      },
      {
        name: "Outpatient treatment",
        percentage: 0
      },
      {
        name: "Opticians",
        percentage: 0
      },
      {
        name: "Diagnostics",
        percentage: 0
      },
      {
        name: "Careers' support",
        percentage: 0
      },
    ],
    generationMakeUp: [
      {
        name: 'Generation Z',
        ageGroup: '16-23',
        percentage: 0
      },
      {
        name: 'Millennial',
        ageGroup: '24-42',
        percentage: 50
      },
      {
        name: 'Generation X',
        ageGroup: '43-54',
        percentage: 50
      },
      {
        name: 'Baby boomers',
        ageGroup: '55-73',
        percentage: 50
      },
      {
        name: 'Silent generation',
        ageGroup: '74+',
        percentage: 0
      }]
  },
  {
    region: "West Midlands",
    industry: "Finance",
    leftStatus: {
      leftDueToHealth: 50,
      notLeftDueToHealth: 50,
      notSureDueToHealth: 0,
    },
    healthWellBeingOffered: 87.50,
    employeeCareByIndustry: {
      careAboutTeam: 75,
      increasesProductivity: 50,
      dontCare: 0,
    },
    healthWellBeingIssue: [{
      name: "Mental health",
      percentage: 37.50
    },
    {
      name: "No health issues",
      percentage: 25
    },
    {
      name: "High blood pressure",
      percentage: 12.50
    },
    {
      name: "Diabetes",
      percentage: 0
    },
    {
      name: "Long Covid",
      percentage: 0
    },
    {
      name: "Pregnancy loss",
      percentage: 12.50
    },
    {
      name: "Cancer",
      percentage: 12.50
    },
    {
      name: "Arthritis",
      percentage: 12.50
    },
    {
      name: "Care support for loved ones",
      percentage: 12.50
    },
    {
      name: "Mobility issues",
      percentage: 0
    },
    {
      name: "ADHD",
      percentage: 37.50
    },
    {
      name: "Heart attack",
      percentage: 12.50
    },
    {
      name: "Autism",
      percentage: 12.50
    },
    {
      name: "Menopause",
      percentage: 12.50
    },
    {
      name: "Heart disease",
      percentage: 12.50
    },
    {
      name: "Loss of hearing",
      percentage: 25
    },
    {
      name: "Attempted suicide",
      percentage: 12.50
    },
    {
      name: "Stroke",
      percentage: 0
    },
    {
      name: "I don't know",
      percentage: 12.50
    },
    {
      name: "Chronic fatigue",
      percentage: 0
    },
    {
      name: "Epilepsy",
      percentage: 0
    },
    {
      name: "Cerebral palsy",
      percentage: 0
    },
    {
      name: "Multiple sclerosis",
      percentage: 12.50
    },
    {
      name: "Loss of sight",
      percentage: 0
    },
    {
      name: "Parkinson's disease",
      percentage: 0
    },
    {
      name: "Dementia/Alzheimer's",
      percentage: 0
    },
    {
      name: "Motor neurone disease",
      percentage: 0
    },
    {
      name: "Organ failure/Need dialysis",
      percentage: 0
    },
    {
      name: "Other (please specify)",
      percentage: 0
    }],
    employeeHealthCareProvision: [
      {
        name: "Mental health support",
        percentage: 42.86
      },
      {
        name: "Health assessments",
        percentage: 28.57
      },
      {
        name: "Support during pregnancy",
        percentage: 28.57
      },
      {
        name: "GP access",
        percentage: 14.29
      },
      {
        name: "Dental treatment",
        percentage: 14.29
      },
      {
        name: "Hospital stays",
        percentage: 0
      },
      {
        name: "Gym membership",
        percentage: 42.86
      },
      {
        name: "Physiotherapy",
        percentage: 14.29
      },
      {
        name: "Outpatient treatment",
        percentage: 28.57
      },
      {
        name: "Opticians",
        percentage: 42.86
      },
      {
        name: "Diagnostics",
        percentage: 0
      },
      {
        name: "Careers' support",
        percentage: 0
      },
    ],
    generationMakeUp: [
      {
        name: 'Generation Z',
        ageGroup: '16-23',
        percentage: 12.50
      },
      {
        name: 'Millennial',
        ageGroup: '24-42',
        percentage: 87.50
      },
      {
        name: 'Generation X',
        ageGroup: '43-54',
        percentage: 37.50
      },
      {
        name: 'Baby boomers',
        ageGroup: '55-73',
        percentage: 0
      },
      {
        name: 'Silent generation',
        ageGroup: '74+',
        percentage: 0
      }]
  },
  {
    region: "West Midlands",
    industry: "Healthcare",
    leftStatus: {
      leftDueToHealth: 25,
      notLeftDueToHealth: 25,
      notSureDueToHealth: 50,
    },
    healthWellBeingOffered: 100,
    employeeCareByIndustry: {
      careAboutTeam: 75,
      increasesProductivity: 50,
      dontCare: 0,
    },
    healthWellBeingIssue: [{
      name: "Mental health",
      percentage: 25
    },
    {
      name: "No health issues",
      percentage: 0
    },
    {
      name: "High blood pressure",
      percentage: 25
    },
    {
      name: "Diabetes",
      percentage: 25
    },
    {
      name: "Long Covid",
      percentage: 25
    },
    {
      name: "Pregnancy loss",
      percentage: 50
    },
    {
      name: "Cancer",
      percentage: 0
    },
    {
      name: "Arthritis",
      percentage: 50
    },
    {
      name: "Care support for loved ones",
      percentage: 25
    },
    {
      name: "Mobility issues",
      percentage: 0
    },
    {
      name: "ADHD",
      percentage: 25
    },
    {
      name: "Heart attack",
      percentage: 0
    },
    {
      name: "Autism",
      percentage: 25
    },
    {
      name: "Menopause",
      percentage: 25
    },
    {
      name: "Heart disease",
      percentage: 0
    },
    {
      name: "Loss of hearing",
      percentage: 0
    },
    {
      name: "Attempted suicide",
      percentage: 0
    },
    {
      name: "Stroke",
      percentage: 0
    },
    {
      name: "I don't know",
      percentage: 0
    },
    {
      name: "Chronic fatigue",
      percentage: 0
    },
    {
      name: "Epilepsy",
      percentage: 0
    },
    {
      name: "Cerebral palsy",
      percentage: 0
    },
    {
      name: "Multiple sclerosis",
      percentage: 0
    },
    {
      name: "Loss of sight",
      percentage: 0
    },
    {
      name: "Parkinson's disease",
      percentage: 0
    },
    {
      name: "Dementia/Alzheimer's",
      percentage: 0
    },
    {
      name: "Motor neurone disease",
      percentage: 0
    },
    {
      name: "Organ failure/Need dialysis",
      percentage: 0
    },
    {
      name: "Other (please specify)",
      percentage: 0
    }],
    employeeHealthCareProvision: [
      {
        name: "Mental health support",
        percentage: 75
      },
      {
        name: "Health assessments",
        percentage: 0
      },
      {
        name: "Support during pregnancy",
        percentage: 50
      },
      {
        name: "GP access",
        percentage: 0
      },
      {
        name: "Dental treatment",
        percentage: 50
      },
      {
        name: "Hospital stays",
        percentage: 25
      },
      {
        name: "Gym membership",
        percentage: 25
      },
      {
        name: "Physiotherapy",
        percentage: 25
      },
      {
        name: "Outpatient treatment",
        percentage: 25
      },
      {
        name: "Opticians",
        percentage: 25
      },
      {
        name: "Diagnostics",
        percentage: 0
      },
      {
        name: "Careers' support",
        percentage: 0
      },
    ],
    generationMakeUp: [
      {
        name: 'Generation Z',
        ageGroup: '16-23',
        percentage: 0
      },
      {
        name: 'Millennial',
        ageGroup: '24-42',
        percentage: 75
      },
      {
        name: 'Generation X',
        ageGroup: '43-54',
        percentage: 25
      },
      {
        name: 'Baby boomers',
        ageGroup: '55-73',
        percentage: 0
      },
      {
        name: 'Silent generation',
        ageGroup: '74+',
        percentage: 0
      }]
  },
  {
    region: "West Midlands",
    industry: "HR",
    leftStatus: {
      leftDueToHealth: 100,
      notLeftDueToHealth: 0,
      notSureDueToHealth: 0,
    },
    healthWellBeingOffered: 100,
    employeeCareByIndustry: {
      careAboutTeam: 100,
      increasesProductivity: 0,
      dontCare: 0,
    },
    healthWellBeingIssue: [{
      name: "Mental health",
      percentage: 100
    },
    {
      name: "No health issues",
      percentage: 0
    },
    {
      name: "High blood pressure",
      percentage: 100
    },
    {
      name: "Diabetes",
      percentage: 0
    },
    {
      name: "Long Covid",
      percentage: 100
    },
    {
      name: "Pregnancy loss",
      percentage: 100
    },
    {
      name: "Cancer",
      percentage: 0
    },
    {
      name: "Arthritis",
      percentage: 0
    },
    {
      name: "Care support for loved ones",
      percentage: 0
    },
    {
      name: "Mobility issues",
      percentage: 0
    },
    {
      name: "ADHD",
      percentage: 100
    },
    {
      name: "Heart attack",
      percentage: 0
    },
    {
      name: "Autism",
      percentage: 0
    },
    {
      name: "Menopause",
      percentage: 0
    },
    {
      name: "Heart disease",
      percentage: 0
    },
    {
      name: "Loss of hearing",
      percentage: 0
    },
    {
      name: "Attempted suicide",
      percentage: 0
    },
    {
      name: "Stroke",
      percentage: 0
    },
    {
      name: "I don't know",
      percentage: 0
    },
    {
      name: "Chronic fatigue",
      percentage: 0
    },
    {
      name: "Epilepsy",
      percentage: 100
    },
    {
      name: "Cerebral palsy",
      percentage: 0
    },
    {
      name: "Multiple sclerosis",
      percentage: 0
    },
    {
      name: "Loss of sight",
      percentage: 0
    },
    {
      name: "Parkinson's disease",
      percentage: 0
    },
    {
      name: "Dementia/Alzheimer's",
      percentage: 0
    },
    {
      name: "Motor neurone disease",
      percentage: 0
    },
    {
      name: "Organ failure/Need dialysis",
      percentage: 0
    },
    {
      name: "Other (please specify)",
      percentage: 0
    }],
    employeeHealthCareProvision: [
      {
        name: "Mental health support",
        percentage: 0
      },
      {
        name: "Health assessments",
        percentage: 0
      },
      {
        name: "Support during pregnancy",
        percentage: 0
      },
      {
        name: "GP access",
        percentage: 0
      },
      {
        name: "Dental treatment",
        percentage: 100
      },
      {
        name: "Hospital stays",
        percentage: 100
      },
      {
        name: "Gym membership",
        percentage: 0
      },
      {
        name: "Physiotherapy",
        percentage: 0
      },
      {
        name: "Outpatient treatment",
        percentage: 0
      },
      {
        name: "Opticians",
        percentage: 100
      },
      {
        name: "Diagnostics",
        percentage: 0
      },
      {
        name: "Careers' support",
        percentage: 0
      },
    ],
    generationMakeUp: [
      {
        name: 'Generation Z',
        ageGroup: '16-23',
        percentage: 0
      },
      {
        name: 'Millennial',
        ageGroup: '24-42',
        percentage: 100
      },
      {
        name: 'Generation X',
        ageGroup: '43-54',
        percentage: 0
      },
      {
        name: 'Baby boomers',
        ageGroup: '55-73',
        percentage: 0
      },
      {
        name: 'Silent generation',
        ageGroup: '74+',
        percentage: 0
      }]
  },
  {
    region: "West Midlands",
    industry: "IT & Telecoms",
    leftStatus: {
      leftDueToHealth: 56.25,
      notLeftDueToHealth: 25,
      notSureDueToHealth: 12.50,
    },
    healthWellBeingOffered: 87.50,
    employeeCareByIndustry: {
      careAboutTeam: 43.75,
      increasesProductivity: 87.50,
      dontCare: 0,
    },
    healthWellBeingIssue: [{
      name: "Mental health",
      percentage: 12.50
    },
    {
      name: "No health issues",
      percentage: 25
    },
    {
      name: "High blood pressure",
      percentage: 18.75
    },
    {
      name: "Diabetes",
      percentage: 6.25
    },
    {
      name: "Long Covid",
      percentage: 25
    },
    {
      name: "Pregnancy loss",
      percentage: 12.50
    },
    {
      name: "Cancer",
      percentage: 6.25
    },
    {
      name: "Arthritis",
      percentage: 6.25
    },
    {
      name: "Care support for loved ones",
      percentage: 6.25
    },
    {
      name: "Mobility issues",
      percentage: 12.50
    },
    {
      name: "ADHD",
      percentage: 6.25
    },
    {
      name: "Heart attack",
      percentage: 6.25
    },
    {
      name: "Autism",
      percentage: 18.75
    },
    {
      name: "Menopause",
      percentage: 12.50
    },
    {
      name: "Heart disease",
      percentage: 12.50
    },
    {
      name: "Loss of hearing",
      percentage: 25
    },
    {
      name: "Attempted suicide",
      percentage: 0
    },
    {
      name: "Stroke",
      percentage: 0
    },
    {
      name: "I don't know",
      percentage: 0
    },
    {
      name: "Chronic fatigue",
      percentage: 12.50
    },
    {
      name: "Epilepsy",
      percentage: 0
    },
    {
      name: "Cerebral palsy",
      percentage: 12.50
    },
    {
      name: "Multiple sclerosis",
      percentage: 6.25
    },
    {
      name: "Loss of sight",
      percentage: 0
    },
    {
      name: "Parkinson's disease",
      percentage: 6.25
    },
    {
      name: "Dementia/Alzheimer's",
      percentage: 6.25
    },
    {
      name: "Motor neurone disease",
      percentage: 0
    },
    {
      name: "Organ failure/Need dialysis",
      percentage: 6.25
    },
    {
      name: "Other (please specify)",
      percentage: 0
    }],
    employeeHealthCareProvision: [
      {
        name: "Mental health support",
        percentage: 21.43
      },
      {
        name: "Health assessments",
        percentage: 57.14
      },
      {
        name: "Support during pregnancy",
        percentage: 21.43
      },
      {
        name: "GP access",
        percentage: 14.29
      },
      {
        name: "Dental treatment",
        percentage: 28.57
      },
      {
        name: "Hospital stays",
        percentage: 35.71
      },
      {
        name: "Gym membership",
        percentage: 35.71
      },
      {
        name: "Physiotherapy",
        percentage: 0
      },
      {
        name: "Outpatient treatment",
        percentage: 21.43
      },
      {
        name: "Opticians",
        percentage: 21.43
      },
      {
        name: "Diagnostics",
        percentage: 21.43
      },
      {
        name: "Careers' support",
        percentage: 14.29
      },
    ],
    generationMakeUp: [
      {
        name: 'Generation Z',
        ageGroup: '16-23',
        percentage: 6.25
      },
      {
        name: 'Millennial',
        ageGroup: '24-42',
        percentage: 43.75
      },
      {
        name: 'Generation X',
        ageGroup: '43-54',
        percentage: 62.50
      },
      {
        name: 'Baby boomers',
        ageGroup: '55-73',
        percentage: 31.25
      },
      {
        name: 'Silent generation',
        ageGroup: '74+',
        percentage: 12.50
      }]
  },
  {
    region: "West Midlands",
    industry: "Legal",
    leftStatus: {
      leftDueToHealth: 20,
      notLeftDueToHealth: 80,
      notSureDueToHealth: 0,
    },
    healthWellBeingOffered: 100,
    employeeCareByIndustry: {
      careAboutTeam: 60,
      increasesProductivity: 100,
      dontCare: 0,
    },
    healthWellBeingIssue: [{
      name: "Mental health",
      percentage: 60
    },
    {
      name: "No health issues",
      percentage: 0
    },
    {
      name: "High blood pressure",
      percentage: 60
    },
    {
      name: "Diabetes",
      percentage: 0
    },
    {
      name: "Long Covid",
      percentage: 20
    },
    {
      name: "Pregnancy loss",
      percentage: 40
    },
    {
      name: "Cancer",
      percentage: 20
    },
    {
      name: "Arthritis",
      percentage: 20
    },
    {
      name: "Care support for loved ones",
      percentage: 20
    },
    {
      name: "Mobility issues",
      percentage: 0
    },
    {
      name: "ADHD",
      percentage: 0
    },
    {
      name: "Heart attack",
      percentage: 20
    },
    {
      name: "Autism",
      percentage: 20
    },
    {
      name: "Menopause",
      percentage: 20
    },
    {
      name: "Heart disease",
      percentage: 20
    },
    {
      name: "Loss of hearing",
      percentage: 0
    },
    {
      name: "Attempted suicide",
      percentage: 20
    },
    {
      name: "Stroke",
      percentage: 20
    },
    {
      name: "I don't know",
      percentage: 0
    },
    {
      name: "Chronic fatigue",
      percentage: 0
    },
    {
      name: "Epilepsy",
      percentage: 20
    },
    {
      name: "Cerebral palsy",
      percentage: 0
    },
    {
      name: "Multiple sclerosis",
      percentage: 0
    },
    {
      name: "Loss of sight",
      percentage: 0
    },
    {
      name: "Parkinson's disease",
      percentage: 0
    },
    {
      name: "Dementia/Alzheimer's",
      percentage: 0
    },
    {
      name: "Motor neurone disease",
      percentage: 0
    },
    {
      name: "Organ failure/Need dialysis",
      percentage: 0
    },
    {
      name: "Other (please specify)",
      percentage: 0
    }],
    employeeHealthCareProvision: [
      {
        name: "Mental health support",
        percentage: 40
      },
      {
        name: "Health assessments",
        percentage: 20
      },
      {
        name: "Support during pregnancy",
        percentage: 20
      },
      {
        name: "GP access",
        percentage: 40
      },
      {
        name: "Dental treatment",
        percentage: 0
      },
      {
        name: "Hospital stays",
        percentage: 40
      },
      {
        name: "Gym membership",
        percentage: 20
      },
      {
        name: "Physiotherapy",
        percentage: 20
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
        percentage: 0
      },
      {
        name: "Careers' support",
        percentage: 40
      },
    ],
    generationMakeUp: [
      {
        name: 'Generation Z',
        ageGroup: '16-23',
        percentage: 20
      },
      {
        name: 'Millennial',
        ageGroup: '24-42',
        percentage: 80
      },
      {
        name: 'Generation X',
        ageGroup: '43-54',
        percentage: 40
      },
      {
        name: 'Baby boomers',
        ageGroup: '55-73',
        percentage: 20
      },
      {
        name: 'Silent generation',
        ageGroup: '74+',
        percentage: 0
      }]
  },
  {
    region: "West Midlands",
    industry: "Manufacturing & Utilities",
    leftStatus: {
      leftDueToHealth: 0,
      notLeftDueToHealth: 50,
      notSureDueToHealth: 50,
    },
    healthWellBeingOffered: 100,
    employeeCareByIndustry: {
      careAboutTeam: 50,
      increasesProductivity: 50,
      dontCare: 50,
    },
    healthWellBeingIssue: [{
      name: "Mental health",
      percentage: 0
    },
    {
      name: "No health issues",
      percentage: 50
    },
    {
      name: "High blood pressure",
      percentage: 0
    },
    {
      name: "Diabetes",
      percentage: 0
    },
    {
      name: "Long Covid",
      percentage: 0
    },
    {
      name: "Pregnancy loss",
      percentage: 0
    },
    {
      name: "Cancer",
      percentage: 0
    },
    {
      name: "Arthritis",
      percentage: 0
    },
    {
      name: "Care support for loved ones",
      percentage: 0
    },
    {
      name: "Mobility issues",
      percentage: 0
    },
    {
      name: "ADHD",
      percentage: 0
    },
    {
      name: "Heart attack",
      percentage: 0
    },
    {
      name: "Autism",
      percentage: 0
    },
    {
      name: "Menopause",
      percentage: 0
    },
    {
      name: "Heart disease",
      percentage: 0
    },
    {
      name: "Loss of hearing",
      percentage: 0
    },
    {
      name: "Attempted suicide",
      percentage: 0
    },
    {
      name: "Stroke",
      percentage: 0
    },
    {
      name: "I don't know",
      percentage: 0
    },
    {
      name: "Chronic fatigue",
      percentage: 50
    },
    {
      name: "Epilepsy",
      percentage: 0
    },
    {
      name: "Cerebral palsy",
      percentage: 0
    },
    {
      name: "Multiple sclerosis",
      percentage: 0
    },
    {
      name: "Loss of sight",
      percentage: 0
    },
    {
      name: "Parkinson's disease",
      percentage: 0
    },
    {
      name: "Dementia/Alzheimer's",
      percentage: 0
    },
    {
      name: "Motor neurone disease",
      percentage: 0
    },
    {
      name: "Organ failure/Need dialysis",
      percentage: 0
    },
    {
      name: "Other (please specify)",
      percentage: 0
    }],
    employeeHealthCareProvision: [
      {
        name: "Mental health support",
        percentage: 0
      },
      {
        name: "Health assessments",
        percentage: 0
      },
      {
        name: "Support during pregnancy",
        percentage: 50
      },
      {
        name: "GP access",
        percentage: 50
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
        percentage: 0
      },
      {
        name: "Physiotherapy",
        percentage: 0
      },
      {
        name: "Outpatient treatment",
        percentage: 50
      },
      {
        name: "Opticians",
        percentage: 0
      },
      {
        name: "Diagnostics",
        percentage: 0
      },
      {
        name: "Careers' support",
        percentage: 0
      },
    ],
    generationMakeUp: [
      {
        name: 'Generation Z',
        ageGroup: '16-23',
        percentage: 0
      },
      {
        name: 'Millennial',
        ageGroup: '24-42',
        percentage: 50
      },
      {
        name: 'Generation X',
        ageGroup: '43-54',
        percentage: 100
      },
      {
        name: 'Baby boomers',
        ageGroup: '55-73',
        percentage: 0
      },
      {
        name: 'Silent generation',
        ageGroup: '74+',
        percentage: 0
      }]
  },
  {
    region: "West Midlands",
    industry: "Catering & Leisure",
    leftStatus: {
      leftDueToHealth: 25,
      notLeftDueToHealth: 75,
      notSureDueToHealth: 0,
    },
    healthWellBeingOffered: 75,
    employeeCareByIndustry: {
      careAboutTeam: 75,
      increasesProductivity: 100,
      dontCare: 0,
    },
    healthWellBeingIssue: [{
      name: "Mental health",
      percentage: 75
    },
    {
      name: "No health issues",
      percentage: 25
    },
    {
      name: "High blood pressure",
      percentage: 0
    },
    {
      name: "Diabetes",
      percentage: 0
    },
    {
      name: "Long Covid",
      percentage: 25
    },
    {
      name: "Pregnancy loss",
      percentage: 25
    },
    {
      name: "Cancer",
      percentage: 0
    },
    {
      name: "Arthritis",
      percentage: 0
    },
    {
      name: "Care support for loved ones",
      percentage: 25
    },
    {
      name: "Mobility issues",
      percentage: 0
    },
    {
      name: "ADHD",
      percentage: 0
    },
    {
      name: "Heart attack",
      percentage: 0
    },
    {
      name: "Autism",
      percentage: 25
    },
    {
      name: "Menopause",
      percentage: 0
    },
    {
      name: "Heart disease",
      percentage: 0
    },
    {
      name: "Loss of hearing",
      percentage: 0
    },
    {
      name: "Attempted suicide",
      percentage: 0
    },
    {
      name: "Stroke",
      percentage: 0
    },
    {
      name: "I don't know",
      percentage: 0
    },
    {
      name: "Chronic fatigue",
      percentage: 0
    },
    {
      name: "Epilepsy",
      percentage: 0
    },
    {
      name: "Cerebral palsy",
      percentage: 0
    },
    {
      name: "Multiple sclerosis",
      percentage: 0
    },
    {
      name: "Loss of sight",
      percentage: 0
    },
    {
      name: "Parkinson's disease",
      percentage: 0
    },
    {
      name: "Dementia/Alzheimer's",
      percentage: 0
    },
    {
      name: "Motor neurone disease",
      percentage: 0
    },
    {
      name: "Organ failure/Need dialysis",
      percentage: 0
    },
    {
      name: "Other (please specify)",
      percentage: 0
    }],
    employeeHealthCareProvision: [
      {
        name: "Mental health support",
        percentage: 66.67
      },
      {
        name: "Health assessments",
        percentage: 33.33
      },
      {
        name: "Support during pregnancy",
        percentage: 0
      },
      {
        name: "GP access",
        percentage: 33.33
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
        percentage: 33.33
      },
      {
        name: "Physiotherapy",
        percentage: 0
      },
      {
        name: "Outpatient treatment",
        percentage: 0
      },
      {
        name: "Opticians",
        percentage: 33.33
      },
      {
        name: "Diagnostics",
        percentage: 0
      },
      {
        name: "Careers' support",
        percentage: 33.33
      },
    ],
    generationMakeUp: [
      {
        name: 'Generation Z',
        ageGroup: '16-23',
        percentage: 50
      },
      {
        name: 'Millennial',
        ageGroup: '24-42',
        percentage: 50
      },
      {
        name: 'Generation X',
        ageGroup: '43-54',
        percentage: 25
      },
      {
        name: 'Baby boomers',
        ageGroup: '55-73',
        percentage: 0
      },
      {
        name: 'Silent generation',
        ageGroup: '74+',
        percentage: 0
      }]
  },
  {
    region: "West Midlands",
    industry: "Sales, Media & Marketing",
    leftStatus: {
      leftDueToHealth: 0,
      notLeftDueToHealth: 0,
      notSureDueToHealth: 100,
    },
    healthWellBeingOffered: 100,
    employeeCareByIndustry: {
      careAboutTeam: 0,
      increasesProductivity: 100,
      dontCare: 0,
    },
    healthWellBeingIssue: [{
      name: "Mental health",
      percentage: 0
    },
    {
      name: "No health issues",
      percentage: 0
    },
    {
      name: "High blood pressure",
      percentage: 0
    },
    {
      name: "Diabetes",
      percentage: 0
    },
    {
      name: "Long Covid",
      percentage: 0
    },
    {
      name: "Pregnancy loss",
      percentage: 0
    },
    {
      name: "Cancer",
      percentage: 0
    },
    {
      name: "Arthritis",
      percentage: 0
    },
    {
      name: "Care support for loved ones",
      percentage: 0
    },
    {
      name: "Mobility issues",
      percentage: 0
    },
    {
      name: "ADHD",
      percentage: 0
    },
    {
      name: "Heart attack",
      percentage: 0
    },
    {
      name: "Autism",
      percentage: 0
    },
    {
      name: "Menopause",
      percentage: 100
    },
    {
      name: "Heart disease",
      percentage: 0
    },
    {
      name: "Loss of hearing",
      percentage: 0
    },
    {
      name: "Attempted suicide",
      percentage: 0
    },
    {
      name: "Stroke",
      percentage: 100
    },
    {
      name: "I don't know",
      percentage: 0
    },
    {
      name: "Chronic fatigue",
      percentage: 0
    },
    {
      name: "Epilepsy",
      percentage: 0
    },
    {
      name: "Cerebral palsy",
      percentage: 0
    },
    {
      name: "Multiple sclerosis",
      percentage: 0
    },
    {
      name: "Loss of sight",
      percentage: 0
    },
    {
      name: "Parkinson's disease",
      percentage: 0
    },
    {
      name: "Dementia/Alzheimer's",
      percentage: 0
    },
    {
      name: "Motor neurone disease",
      percentage: 0
    },
    {
      name: "Organ failure/Need dialysis",
      percentage: 0
    },
    {
      name: "Other (please specify)",
      percentage: 0
    }],
    employeeHealthCareProvision: [
      {
        name: "Mental health support",
        percentage: 0
      },
      {
        name: "Health assessments",
        percentage: 0
      },
      {
        name: "Support during pregnancy",
        percentage: 100
      },
      {
        name: "GP access",
        percentage: 0
      },
      {
        name: "Dental treatment",
        percentage: 0
      },
      {
        name: "Hospital stays",
        percentage: 100
      },
      {
        name: "Gym membership",
        percentage: 0
      },
      {
        name: "Physiotherapy",
        percentage: 100
      },
      {
        name: "Outpatient treatment",
        percentage: 0
      },
      {
        name: "Opticians",
        percentage: 0
      },
      {
        name: "Diagnostics",
        percentage: 0
      },
      {
        name: "Careers' support",
        percentage: 0
      },
    ],
    generationMakeUp: [
      {
        name: 'Generation Z',
        ageGroup: '16-23',
        percentage: 0
      },
      {
        name: 'Millennial',
        ageGroup: '24-42',
        percentage: 100
      },
      {
        name: 'Generation X',
        ageGroup: '43-54',
        percentage: 0
      },
      {
        name: 'Baby boomers',
        ageGroup: '55-73',
        percentage: 0
      },
      {
        name: 'Silent generation',
        ageGroup: '74+',
        percentage: 0
      }]
  },
  {
    region: "West Midlands",
    industry: "Travel & Transport",
    leftStatus: {
      leftDueToHealth: 100,
      notLeftDueToHealth: 0,
      notSureDueToHealth: 0,
    },
    healthWellBeingOffered: 100,
    employeeCareByIndustry: {
      careAboutTeam: 100,
      increasesProductivity: 0,
      dontCare: 0,
    },
    healthWellBeingIssue: [{
      name: "Mental health",
      percentage: 0
    },
    {
      name: "No health issues",
      percentage: 0
    },
    {
      name: "High blood pressure",
      percentage: 0
    },
    {
      name: "Diabetes",
      percentage: 0
    },
    {
      name: "Long Covid",
      percentage: 100
    },
    {
      name: "Pregnancy loss",
      percentage: 0
    },
    {
      name: "Cancer",
      percentage: 100
    },
    {
      name: "Arthritis",
      percentage: 0
    },
    {
      name: "Care support for loved ones",
      percentage: 0
    },
    {
      name: "Mobility issues",
      percentage: 0
    },
    {
      name: "ADHD",
      percentage: 0
    },
    {
      name: "Heart attack",
      percentage: 0
    },
    {
      name: "Autism",
      percentage: 0
    },
    {
      name: "Menopause",
      percentage: 0
    },
    {
      name: "Heart disease",
      percentage: 0
    },
    {
      name: "Loss of hearing",
      percentage: 0
    },
    {
      name: "Attempted suicide",
      percentage: 0
    },
    {
      name: "Stroke",
      percentage: 0
    },
    {
      name: "I don't know",
      percentage: 0
    },
    {
      name: "Chronic fatigue",
      percentage: 0
    },
    {
      name: "Epilepsy",
      percentage: 0
    },
    {
      name: "Cerebral palsy",
      percentage: 0
    },
    {
      name: "Multiple sclerosis",
      percentage: 100
    },
    {
      name: "Loss of sight",
      percentage: 0
    },
    {
      name: "Parkinson's disease",
      percentage: 0
    },
    {
      name: "Dementia/Alzheimer's",
      percentage: 0
    },
    {
      name: "Motor neurone disease",
      percentage: 0
    },
    {
      name: "Organ failure/Need dialysis",
      percentage: 0
    },
    {
      name: "Other (please specify)",
      percentage: 0
    }],
    employeeHealthCareProvision: [
      {
        name: "Mental health support",
        percentage: 0
      },
      {
        name: "Health assessments",
        percentage: 0
      },
      {
        name: "Support during pregnancy",
        percentage: 0
      },
      {
        name: "GP access",
        percentage: 0
      },
      {
        name: "Dental treatment",
        percentage: 0
      },
      {
        name: "Hospital stays",
        percentage: 100
      },
      {
        name: "Gym membership",
        percentage: 100
      },
      {
        name: "Physiotherapy",
        percentage: 0
      },
      {
        name: "Outpatient treatment",
        percentage: 0
      },
      {
        name: "Opticians",
        percentage: 0
      },
      {
        name: "Diagnostics",
        percentage: 100
      },
      {
        name: "Careers' support",
        percentage: 0
      },
    ],
    generationMakeUp: [
      {
        name: 'Generation Z',
        ageGroup: '16-23',
        percentage: 0
      },
      {
        name: 'Millennial',
        ageGroup: '24-42',
        percentage: 100
      },
      {
        name: 'Generation X',
        ageGroup: '43-54',
        percentage: 100
      },
      {
        name: 'Baby boomers',
        ageGroup: '55-73',
        percentage: 0
      },
      {
        name: 'Silent generation',
        ageGroup: '74+',
        percentage: 0
      }]
  },
  {
    region: "West Midlands",
    industry: "Other",
    leftStatus: {
      leftDueToHealth: 0,
      notLeftDueToHealth: 66.67,
      notSureDueToHealth: 33.33,
    },
    healthWellBeingOffered: 100,
    employeeCareByIndustry: {
      careAboutTeam: 100,
      increasesProductivity: 66.67,
      dontCare: 0,
    },
    healthWellBeingIssue: [{
      name: "Mental health",
      percentage: 66.67
    },
    {
      name: "No health issues",
      percentage: 0
    },
    {
      name: "High blood pressure",
      percentage: 33.33
    },
    {
      name: "Diabetes",
      percentage: 0
    },
    {
      name: "Long Covid",
      percentage: 33.33
    },
    {
      name: "Pregnancy loss",
      percentage: 0
    },
    {
      name: "Cancer",
      percentage: 0
    },
    {
      name: "Arthritis",
      percentage: 0
    },
    {
      name: "Care support for loved ones",
      percentage: 33.33
    },
    {
      name: "Mobility issues",
      percentage: 0
    },
    {
      name: "ADHD",
      percentage: 0
    },
    {
      name: "Heart attack",
      percentage: 33.33
    },
    {
      name: "Autism",
      percentage: 0
    },
    {
      name: "Menopause",
      percentage: 0
    },
    {
      name: "Heart disease",
      percentage: 0
    },
    {
      name: "Loss of hearing",
      percentage: 0
    },
    {
      name: "Attempted suicide",
      percentage: 0
    },
    {
      name: "Stroke",
      percentage: 0
    },
    {
      name: "I don't know",
      percentage: 33.33
    },
    {
      name: "Chronic fatigue",
      percentage: 0
    },
    {
      name: "Epilepsy",
      percentage: 0
    },
    {
      name: "Cerebral palsy",
      percentage: 0
    },
    {
      name: "Multiple sclerosis",
      percentage: 0
    },
    {
      name: "Loss of sight",
      percentage: 0
    },
    {
      name: "Parkinson's disease",
      percentage: 0
    },
    {
      name: "Dementia/Alzheimer's",
      percentage: 33.33
    },
    {
      name: "Motor neurone disease",
      percentage: 0
    },
    {
      name: "Organ failure/Need dialysis",
      percentage: 0
    },
    {
      name: "Other (please specify)",
      percentage: 0
    }],
    employeeHealthCareProvision: [
      {
        name: "Mental health support",
        percentage: 66.67
      },
      {
        name: "Health assessments",
        percentage: 66.67
      },
      {
        name: "Support during pregnancy",
        percentage: 33.33
      },
      {
        name: "GP access",
        percentage: 0
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
        percentage: 0
      },
      {
        name: "Physiotherapy",
        percentage: 0
      },
      {
        name: "Outpatient treatment",
        percentage: 0
      },
      {
        name: "Opticians",
        percentage: 0
      },
      {
        name: "Diagnostics",
        percentage: 33.33
      },
      {
        name: "Careers' support",
        percentage: 0
      },
    ],
    generationMakeUp: [
      {
        name: 'Generation Z',
        ageGroup: '16-23',
        percentage: 0
      },
      {
        name: 'Millennial',
        ageGroup: '24-42',
        percentage: 33.33
      },
      {
        name: 'Generation X',
        ageGroup: '43-54',
        percentage: 0
      },
      {
        name: 'Baby boomers',
        ageGroup: '55-73',
        percentage: 33.33
      },
      {
        name: 'Silent generation',
        ageGroup: '74+',
        percentage: 0
      }]
  }
];

export default data;