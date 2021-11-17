const data = [
  {
    region: "South East",
    industry: "Architecture",
    leftStatus: {
      leftDueToHealth: 33.33,
      notLeftDueToHealth: 50,
      notSureDueToHealth: 0,
    },
    healthWellBeingOffered: 33.33,
    employeeCareByIndustry: {
      careAboutTeam: 66.67,
      increasesProductivity: 83.33,
      dontCare: 0,
    },
    healthWellBeingIssue: [{
      name: "Mental health",
      percentage: 16.67
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
      percentage: 16.67
    },
    {
      name: "Pregnancy loss",
      percentage: 16.67
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
      percentage: 16.67
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
      percentage: 16.67
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
      percentage: 16.67
    },
    {
      name: "Dementia/Alzheimer's",
      percentage: 0
    },
    {
      name: "Motor neurone disease",
      percentage: 16.67
    },
    {
      name: "Organ failure/Need dialysis",
      percentage: 0
    },
    {
      name: "Other (please specify)",
      percentage: 16.67
    }],
    employeeHealthCareProvision: [
      {
        name: "Mental health support",
        percentage: 100
      },
      {
        name: "Health assessments",
        percentage: 50
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
        percentage: 16.67
      },
      {
        name: 'Millennial',
        ageGroup: '24-42',
        percentage: 50
      },
      {
        name: 'Generation X',
        ageGroup: '43-54',
        percentage: 33.33
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
  },
  {
    region: "South East",
    industry: "Architecture, Engineering & Building",
    leftStatus: {
      leftDueToHealth: 33.33,
      notLeftDueToHealth: 50,
      notSureDueToHealth: 0,
    },
    healthWellBeingOffered: 33.33,
    employeeCareByIndustry: {
      careAboutTeam: 66.67,
      increasesProductivity: 83.33,
      dontCare: 0,
    },
    healthWellBeingIssue: [{
      name: "Mental health",
      percentage: 16.67
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
      percentage: 16.67
    },
    {
      name: "Pregnancy loss",
      percentage: 16.67
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
      percentage: 16.67
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
      percentage: 16.67
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
      percentage: 16.67
    },
    {
      name: "Dementia/Alzheimer's",
      percentage: 0
    },
    {
      name: "Motor neurone disease",
      percentage: 16.67
    },
    {
      name: "Organ failure/Need dialysis",
      percentage: 0
    },
    {
      name: "Other (please specify)",
      percentage: 16.67
    }],
    employeeHealthCareProvision: [
      {
        name: "Mental health support",
        percentage: 100
      },
      {
        name: "Health assessments",
        percentage: 50
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
        percentage: 16.67
      },
      {
        name: 'Millennial',
        ageGroup: '24-42',
        percentage: 50
      },
      {
        name: 'Generation X',
        ageGroup: '43-54',
        percentage: 33.33
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
  },
  {
    region: "South East",
    industry: "Arts & Culture",
    leftStatus: {
      leftDueToHealth: 66.67,
      notLeftDueToHealth: 33.33,
      notSureDueToHealth: 0,
    },
    healthWellBeingOffered: 66.67,
    employeeCareByIndustry: {
      careAboutTeam: 66.67,
      increasesProductivity: 100,
      dontCare: 0,
    },
    healthWellBeingIssue: [{
      name: "Mental health",
      percentage: 33.33
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
      percentage: 33.33
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
      percentage: 33.33
    },
    {
      name: "Autism",
      percentage: 0
    },
    {
      name: "Menopause",
      percentage: 33.33
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
        percentage: 50
      },
      {
        name: "Hospital stays",
        percentage: 50
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
        percentage: 33.33
      },
      {
        name: 'Millennial',
        ageGroup: '24-42',
        percentage: 33.33
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
    region: "South East",
    industry: "Education",
    leftStatus: {
      leftDueToHealth: 25,
      notLeftDueToHealth: 50,
      notSureDueToHealth: 0,
    },
    healthWellBeingOffered: 75,
    employeeCareByIndustry: {
      careAboutTeam: 75,
      increasesProductivity: 75,
      dontCare: 0,
    },
    healthWellBeingIssue: [{
      name: "Mental health",
      percentage: 50
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
      percentage: 25
    },
    {
      name: "Long Covid",
      percentage: 25
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
      percentage: 25
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
      percentage: 25
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
        percentage: 33.33
      },
      {
        name: "Health assessments",
        percentage: 100
      },
      {
        name: "Support during pregnancy",
        percentage: 33.33
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
        percentage: 0
      },
      {
        name: "Physiotherapy",
        percentage: 0
      },
      {
        name: "Outpatient treatment",
        percentage: 33.33
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
        percentage: 0
      },
      {
        name: 'Baby boomers',
        ageGroup: '55-73',
        percentage: 25
      },
      {
        name: 'Silent generation',
        ageGroup: '74+',
        percentage: 0
      }]
  },
  {
    region: "South East",
    industry: "Finance",
    leftStatus: {
      leftDueToHealth: 40,
      notLeftDueToHealth: 20,
      notSureDueToHealth: 20,
    },
    healthWellBeingOffered: 80,
    employeeCareByIndustry: {
      careAboutTeam: 60,
      increasesProductivity: 60,
      dontCare: 0,
    },
    healthWellBeingIssue: [{
      name: "Mental health",
      percentage: 0
    },
    {
      name: "No health issues",
      percentage: 20
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
      percentage: 20
    },
    {
      name: "Pregnancy loss",
      percentage: 0
    },
    {
      name: "Cancer",
      percentage: 20
    },
    {
      name: "Arthritis",
      percentage: 0
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
      percentage: 0
    },
    {
      name: "Cerebral palsy",
      percentage: 20
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
        percentage: 25
      },
      {
        name: "Support during pregnancy",
        percentage: 0
      },
      {
        name: "GP access",
        percentage: 25
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
        percentage: 40
      },
      {
        name: 'Generation X',
        ageGroup: '43-54',
        percentage: 60
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
    region: "South East",
    industry: "Healthcare",
    leftStatus: {
      leftDueToHealth: 25,
      notLeftDueToHealth: 50,
      notSureDueToHealth: 0,
    },
    healthWellBeingOffered: 75,
    employeeCareByIndustry: {
      careAboutTeam: 75,
      increasesProductivity: 50,
      dontCare: 0,
    },
    healthWellBeingIssue: [{
      name: "Mental health",
      percentage: 75
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
      percentage: 50
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
      percentage: 50
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
        percentage: 100
      },
      {
        name: "Health assessments",
        percentage: 33.33
      },
      {
        name: "Support during pregnancy",
        percentage: 66.67
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
        percentage: 33.33
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
        percentage: 0
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
    region: "South East",
    industry: "HR",
    leftStatus: {
      leftDueToHealth: 50,
      notLeftDueToHealth: 50,
      notSureDueToHealth: 0,
    },
    healthWellBeingOffered: 100,
    employeeCareByIndustry: {
      careAboutTeam: 50,
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
      percentage: 0
    },
    {
      name: "Long Covid",
      percentage: 50
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
      percentage: 50
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
        percentage: 0
      },
      {
        name: "Gym membership",
        percentage: 50
      },
      {
        name: "Physiotherapy",
        percentage: 50
      },
      {
        name: "Outpatient treatment",
        percentage: 0
      },
      {
        name: "Opticians",
        percentage: 50
      },
      {
        name: "Diagnostics",
        percentage: 50
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
        percentage: 50
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
    region: "South East",
    industry: "IT & Telecoms",
    leftStatus: {
      leftDueToHealth: 33.33,
      notLeftDueToHealth: 66.67,
      notSureDueToHealth: 0,
    },
    healthWellBeingOffered: 66.67,
    employeeCareByIndustry: {
      careAboutTeam: 66.67,
      increasesProductivity: 100,
      dontCare: 0,
    },
    healthWellBeingIssue: [{
      name: "Mental health",
      percentage: 33.33
    },
    {
      name: "No health issues",
      percentage: 0
    },
    {
      name: "High blood pressure",
      percentage: 16.67
    },
    {
      name: "Diabetes",
      percentage: 33.33
    },
    {
      name: "Long Covid",
      percentage: 16.67
    },
    {
      name: "Pregnancy loss",
      percentage: 33.33
    },
    {
      name: "Cancer",
      percentage: 33.33
    },
    {
      name: "Arthritis",
      percentage: 33.33
    },
    {
      name: "Care support for loved ones",
      percentage: 16.67
    },
    {
      name: "Mobility issues",
      percentage: 33.33
    },
    {
      name: "ADHD",
      percentage: 0
    },
    {
      name: "Heart attack",
      percentage: 16.67
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
      percentage: 16.67
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
      percentage: 16.67
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
        percentage: 50
      },
      {
        name: "Health assessments",
        percentage: 25
      },
      {
        name: "Support during pregnancy",
        percentage: 0
      },
      {
        name: "GP access",
        percentage: 75
      },
      {
        name: "Dental treatment",
        percentage: 25
      },
      {
        name: "Hospital stays",
        percentage: 50
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
        percentage: 25
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
        percentage: 16.67
      },
      {
        name: 'Millennial',
        ageGroup: '24-42',
        percentage: 66.67
      },
      {
        name: 'Generation X',
        ageGroup: '43-54',
        percentage: 16.67
      },
      {
        name: 'Baby boomers',
        ageGroup: '55-73',
        percentage: 33.33
      },
      {
        name: 'Silent generation',
        ageGroup: '74+',
        percentage: 16.67
      }]
  },
  {
    region: "South East",
    industry: "Legal",
    leftStatus: {
      leftDueToHealth: 100,
      notLeftDueToHealth: 0,
      notSureDueToHealth: 0,
    },
    healthWellBeingOffered: 100,
    employeeCareByIndustry: {
      careAboutTeam: 100,
      increasesProductivity: 100,
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
      percentage: 50
    },
    {
      name: "Diabetes",
      percentage: 100
    },
    {
      name: "Long Covid",
      percentage: 50
    },
    {
      name: "Pregnancy loss",
      percentage: 100
    },
    {
      name: "Cancer",
      percentage: 50
    },
    {
      name: "Arthritis",
      percentage: 50
    },
    {
      name: "Care support for loved ones",
      percentage: 100
    },
    {
      name: "Mobility issues",
      percentage: 50
    },
    {
      name: "ADHD",
      percentage: 100
    },
    {
      name: "Heart attack",
      percentage: 100
    },
    {
      name: "Autism",
      percentage: 100
    },
    {
      name: "Menopause",
      percentage: 100
    },
    {
      name: "Heart disease",
      percentage: 50
    },
    {
      name: "Loss of hearing",
      percentage: 50
    },
    {
      name: "Attempted suicide",
      percentage: 100
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
      percentage: 50
    },
    {
      name: "Epilepsy",
      percentage: 50
    },
    {
      name: "Cerebral palsy",
      percentage: 50
    },
    {
      name: "Multiple sclerosis",
      percentage: 50
    },
    {
      name: "Loss of sight",
      percentage: 100
    },
    {
      name: "Parkinson's disease",
      percentage: 50
    },
    {
      name: "Dementia/Alzheimer's",
      percentage: 50
    },
    {
      name: "Motor neurone disease",
      percentage: 50
    },
    {
      name: "Organ failure/Need dialysis",
      percentage: 50
    },
    {
      name: "Other (please specify)",
      percentage: 0
    }],
    employeeHealthCareProvision: [
      {
        name: "Mental health support",
        percentage: 100
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
        percentage: 50
      }]
  },
  {
    region: "South East",
    industry: "Manufacturing & Utilities",
    leftStatus: {
      leftDueToHealth: 0,
      notLeftDueToHealth: 0,
      notSureDueToHealth: 0,
    },
    healthWellBeingOffered: 100,
    employeeCareByIndustry: {
      careAboutTeam: 100,
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
      percentage: 0
    },
    {
      name: "Heart attack",
      percentage: 100
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
      percentage: 100
    },
    {
      name: "Loss of hearing",
      percentage: 0
    },
    {
      name: "Attempted suicide",
      percentage: 100
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
        percentage: 100
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
        percentage: 0
      },
      {
        name: "Hospital stays",
        percentage: 0
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
    region: "South East",
    industry: "Catering & Leisure",
    leftStatus: {
      leftDueToHealth: 17.65,
      notLeftDueToHealth: 70.59,
      notSureDueToHealth: 0,
    },
    healthWellBeingOffered: 52.94,
    employeeCareByIndustry: {
      careAboutTeam: 82.35,
      increasesProductivity: 76.47,
      dontCare: 0,
    },
    healthWellBeingIssue: [{
      name: "Mental health",
      percentage: 52.94
    },
    {
      name: "No health issues",
      percentage: 17.65
    },
    {
      name: "High blood pressure",
      percentage: 11.76
    },
    {
      name: "Diabetes",
      percentage: 11.76
    },
    {
      name: "Long Covid",
      percentage: 5.88
    },
    {
      name: "Pregnancy loss",
      percentage: 11.76
    },
    {
      name: "Cancer",
      percentage: 23.53
    },
    {
      name: "Arthritis",
      percentage: 11.76
    },
    {
      name: "Care support for loved ones",
      percentage: 5.88
    },
    {
      name: "Mobility issues",
      percentage: 0
    },
    {
      name: "ADHD",
      percentage: 17.65
    },
    {
      name: "Heart attack",
      percentage: 0
    },
    {
      name: "Autism",
      percentage: 5.88
    },
    {
      name: "Menopause",
      percentage: 17.65
    },
    {
      name: "Heart disease",
      percentage: 11.76
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
      percentage: 5.88
    },
    {
      name: "Chronic fatigue",
      percentage: 5.88
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
      percentage: 5.88
    },
    {
      name: "Loss of sight",
      percentage: 5.88
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
      percentage: 5.88
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
        percentage: 44.44
      },
      {
        name: "Health assessments",
        percentage: 11.11
      },
      {
        name: "Support during pregnancy",
        percentage: 22.22
      },
      {
        name: "GP access",
        percentage: 22.22
      },
      {
        name: "Dental treatment",
        percentage: 33.33
      },
      {
        name: "Hospital stays",
        percentage: 11.11
      },
      {
        name: "Gym membership",
        percentage: 33.33
      },
      {
        name: "Physiotherapy",
        percentage: 22.22
      },
      {
        name: "Outpatient treatment",
        percentage: 22.22
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
        percentage: 11.11
      },
    ],
    generationMakeUp: [
      {
        name: 'Generation Z',
        ageGroup: '16-23',
        percentage: 17.65
      },
      {
        name: 'Millennial',
        ageGroup: '24-42',
        percentage: 64.71
      },
      {
        name: 'Generation X',
        ageGroup: '43-54',
        percentage: 17.65
      },
      {
        name: 'Baby boomers',
        ageGroup: '55-73',
        percentage: 23.53
      },
      {
        name: 'Silent generation',
        ageGroup: '74+',
        percentage: 0
      }]
  },
  {
    region: "South East",
    industry: "Sales, Media & Marketing",
    leftStatus: {
      leftDueToHealth: 0,
      notLeftDueToHealth: 100,
      notSureDueToHealth: 0,
    },
    healthWellBeingOffered: 33.33,
    employeeCareByIndustry: {
      careAboutTeam: 66.67,
      increasesProductivity: 66.67,
      dontCare: 0,
    },
    healthWellBeingIssue: [{
      name: "Mental health",
      percentage: 0
    },
    {
      name: "No health issues",
      percentage: 33.33
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
      percentage: 33.33
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
        percentage: 33.33
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
    region: "South East",
    industry: "Travel & Transport",
    leftStatus: {
      leftDueToHealth: 0,
      notLeftDueToHealth: 100,
      notSureDueToHealth: 0,
    },
    healthWellBeingOffered: 0,
    employeeCareByIndustry: {
      careAboutTeam: 0,
      increasesProductivity: 100,
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
      percentage: 0
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
        percentage: 100
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
    region: "South East",
    industry: "Other",
    leftStatus: {
      leftDueToHealth: 28.57,
      notLeftDueToHealth: 57.14,
      notSureDueToHealth: 0,
    },
    healthWellBeingOffered: 28.57,
    employeeCareByIndustry: {
      careAboutTeam: 71.43,
      increasesProductivity: 71.43,
      dontCare: 0,
    },
    healthWellBeingIssue: [{
      name: "Mental health",
      percentage: 28.57
    },
    {
      name: "No health issues",
      percentage: 57.14
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
      percentage: 14.29
    },
    {
      name: "Arthritis",
      percentage: 0
    },
    {
      name: "Care support for loved ones",
      percentage: 14.29
    },
    {
      name: "Mobility issues",
      percentage: 14.29
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
        percentage: 0
      },
      {
        name: "Gym membership",
        percentage: 50
      },
      {
        name: "Physiotherapy",
        percentage: 50
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
        percentage: 50
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
        percentage: 71.43
      },
      {
        name: 'Generation X',
        ageGroup: '43-54',
        percentage: 42.86
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
  }
];

export default data;