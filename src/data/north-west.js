const data = [
  {
    region: "North West",
    industry: "Architecture",
    leftStatus: {
      leftDueToHealth: 50,
      notLeftDueToHealth: 0,
      notSureDueToHealth: 50,
    },
    healthWellBeingOffered: 50,
    employeeCareByIndustry: {
      careAboutTeam: 50,
      increasesProductivity: 50,
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
      percentage: 50
    },
    {
      name: "Menopause",
      percentage: 50
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
        percentage: 50
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
    region: "North West",
    industry: "Architecture, Engineering & Building",
    leftStatus: {
      leftDueToHealth: 50,
      notLeftDueToHealth: 0,
      notSureDueToHealth: 50,
    },
    healthWellBeingOffered: 50,
    employeeCareByIndustry: {
      careAboutTeam: 50,
      increasesProductivity: 50,
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
      percentage: 50
    },
    {
      name: "Menopause",
      percentage: 50
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
        percentage: 50
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
    region: "North West",
    industry: "Arts & Culture",
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
      percentage: 50
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
      percentage: 100
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
      percentage: 50
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
      percentage: 50
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
        percentage: 0
      },
      {
        name: "Support during pregnancy",
        percentage: 0
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
        percentage: 50
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
        percentage: 100
      },
      {
        name: 'Generation X',
        ageGroup: '43-54',
        percentage: 50
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
    region: "North West",
    industry: "Education",
    leftStatus: {
      leftDueToHealth: 25,
      notLeftDueToHealth: 25,
      notSureDueToHealth: 25,
    },
    healthWellBeingOffered: 75,
    employeeCareByIndustry: {
      careAboutTeam: 75,
      increasesProductivity: 50,
      dontCare: 0,
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
      percentage: 25
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
      percentage: 25
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
        percentage: 33.33
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
        percentage: 33.33
      },
      {
        name: "Opticians",
        percentage: 33.33
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
        percentage: 50
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
    region: "North West",
    industry: "Finance",
    leftStatus: {
      leftDueToHealth: 25,
      notLeftDueToHealth: 37.50,
      notSureDueToHealth: 37.50,
    },
    healthWellBeingOffered: 100,
    employeeCareByIndustry: {
      careAboutTeam: 62.50,
      increasesProductivity: 62.50,
      dontCare: 0,
    },
    healthWellBeingIssue: [{
      name: "Mental health",
      percentage: 37.50
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
      percentage: 12.50
    },
    {
      name: "Long Covid",
      percentage: 12.50
    },
    {
      name: "Pregnancy loss",
      percentage: 12.50
    },
    {
      name: "Cancer",
      percentage: 37.50
    },
    {
      name: "Arthritis",
      percentage: 25
    },
    {
      name: "Care support for loved ones",
      percentage: 12.50
    },
    {
      name: "Mobility issues",
      percentage: 25
    },
    {
      name: "ADHD",
      percentage: 12.50
    },
    {
      name: "Heart attack",
      percentage: 37.50
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
      percentage: 25
    },
    {
      name: "Stroke",
      percentage: 12.50
    },
    {
      name: "I don't know",
      percentage: 12.50
    },
    {
      name: "Chronic fatigue",
      percentage: 12.50
    },
    {
      name: "Epilepsy",
      percentage: 12.50
    },
    {
      name: "Cerebral palsy",
      percentage: 12.50
    },
    {
      name: "Multiple sclerosis",
      percentage: 12.50
    },
    {
      name: "Loss of sight",
      percentage: 12.50
    },
    {
      name: "Parkinson's disease",
      percentage: 12.50
    },
    {
      name: "Dementia/Alzheimer's",
      percentage: 12.50
    },
    {
      name: "Motor neurone disease",
      percentage: 12.50
    },
    {
      name: "Organ failure/Need dialysis",
      percentage: 12.50
    },
    {
      name: "Other (please specify)",
      percentage: 0
    }],
    employeeHealthCareProvision: [
      {
        name: "Mental health support",
        percentage: 25
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
        percentage: 25
      },
      {
        name: "Dental treatment",
        percentage: 12.50
      },
      {
        name: "Hospital stays",
        percentage: 0
      },
      {
        name: "Gym membership",
        percentage: 25
      },
      {
        name: "Physiotherapy",
        percentage: 12.50
      },
      {
        name: "Outpatient treatment",
        percentage: 12.50
      },
      {
        name: "Opticians",
        percentage: 37.50
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
        percentage: 25
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
        percentage: 12.50
      }]
  },
  {
    region: "North West",
    industry: "Healthcare",
    leftStatus: {
      leftDueToHealth: 66.67,
      notLeftDueToHealth: 33.33,
      notSureDueToHealth: 0,
    },
    healthWellBeingOffered: 100,
    employeeCareByIndustry: {
      careAboutTeam: 66.67,
      increasesProductivity: 66.67,
      dontCare: 0,
    },
    healthWellBeingIssue: [{
      name: "Mental health",
      percentage: 33.33
    },
    {
      name: "No health issues",
      percentage: 33.33
    },
    {
      name: "High blood pressure",
      percentage: 33.33
    },
    {
      name: "Diabetes",
      percentage: 33.33
    },
    {
      name: "Long Covid",
      percentage: 33.33
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
      percentage: 0
    },
    {
      name: "Care support for loved ones",
      percentage: 33.33
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
      percentage: 33.33
    },
    {
      name: "Loss of hearing",
      percentage: 33.33
    },
    {
      name: "Attempted suicide",
      percentage: 33.33
    },
    {
      name: "Stroke",
      percentage: 66.67
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
      percentage: 33.33
    },
    {
      name: "Multiple sclerosis",
      percentage: 0
    },
    {
      name: "Loss of sight",
      percentage: 33.33
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
      percentage: 33.33
    },
    {
      name: "Organ failure/Need dialysis",
      percentage: 33.33
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
        percentage: 0
      },
      {
        name: "Dental treatment",
        percentage: 33.33
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
        percentage: 100
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
        percentage: 33.33
      },
      {
        name: 'Millennial',
        ageGroup: '24-42',
        percentage: 66.67
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
    region: "North West",
    industry: "HR",
    leftStatus: {
      leftDueToHealth: 100,
      notLeftDueToHealth: 0,
      notSureDueToHealth: 0,
    },
    healthWellBeingOffered: 100,
    employeeCareByIndustry: {
      careAboutTeam: 0,
      increasesProductivity: 0,
      dontCare: 100,
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
      percentage: 100
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
      percentage: 100
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
      percentage: 100
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
        percentage: 100
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
    region: "North West",
    industry: "IT & Telecoms",
    leftStatus: {
      leftDueToHealth: 37.50,
      notLeftDueToHealth: 50,
      notSureDueToHealth: 12.50,
    },
    healthWellBeingOffered: 87.50,
    employeeCareByIndustry: {
      careAboutTeam: 75,
      increasesProductivity: 75,
      dontCare: 0,
    },
    healthWellBeingIssue: [{
      name: "Mental health",
      percentage: 25
    },
    {
      name: "No health issues",
      percentage: 12.50
    },
    {
      name: "High blood pressure",
      percentage: 0
    },
    {
      name: "Diabetes",
      percentage: 12.50
    },
    {
      name: "Long Covid",
      percentage: 12.50
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
      percentage: 0
    },
    {
      name: "Mobility issues",
      percentage: 0
    },
    {
      name: "ADHD",
      percentage: 12.50
    },
    {
      name: "Heart attack",
      percentage: 12.50
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
      percentage: 12.50
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
        percentage: 14.29
      },
      {
        name: "Health assessments",
        percentage: 42.86
      },
      {
        name: "Support during pregnancy",
        percentage: 42.86
      },
      {
        name: "GP access",
        percentage: 28.57
      },
      {
        name: "Dental treatment",
        percentage: 28.57
      },
      {
        name: "Hospital stays",
        percentage: 28.57
      },
      {
        name: "Gym membership",
        percentage: 0
      },
      {
        name: "Physiotherapy",
        percentage: 14.29
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
        percentage: 14.29
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
        percentage: 62.50
      },
      {
        name: 'Generation X',
        ageGroup: '43-54',
        percentage: 25
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
    region: "North West",
    industry: "Legal",
    leftStatus: {
      leftDueToHealth: 0,
      notLeftDueToHealth: 100,
      notSureDueToHealth: 0,
    },
    healthWellBeingOffered: 50,
    employeeCareByIndustry: {
      careAboutTeam: 100,
      increasesProductivity: 50,
      dontCare: 0,
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
      percentage: 50
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
        percentage: 50
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
    region: "North West",
    industry: "Manufacturing & Utilities",
    leftStatus: {
      leftDueToHealth: 0,
      notLeftDueToHealth: 0,
      notSureDueToHealth: 0,
    },
    healthWellBeingOffered: 0,
    employeeCareByIndustry: {
      careAboutTeam: 0,
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
    region: "North West",
    industry: "Catering & Leisure",
    leftStatus: {
      leftDueToHealth: 8.33,
      notLeftDueToHealth: 58.33,
      notSureDueToHealth: 25,
    },
    healthWellBeingOffered: 58.33,
    employeeCareByIndustry: {
      careAboutTeam: 75,
      increasesProductivity: 58.33,
      dontCare: 0,
    },
    healthWellBeingIssue: [{
      name: "Mental health",
      percentage: 0
    },
    {
      name: "No health issues",
      percentage: 25
    },
    {
      name: "High blood pressure",
      percentage: 8.33
    },
    {
      name: "Diabetes",
      percentage: 25
    },
    {
      name: "Long Covid",
      percentage: 16.67
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
      percentage: 8.33
    },
    {
      name: "Care support for loved ones",
      percentage: 0
    },
    {
      name: "Mobility issues",
      percentage: 8.33
    },
    {
      name: "ADHD",
      percentage: 16.67
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
      percentage: 16.67
    },
    {
      name: "Heart disease",
      percentage: 0
    },
    {
      name: "Loss of hearing",
      percentage: 8.33
    },
    {
      name: "Attempted suicide",
      percentage: 8.33
    },
    {
      name: "Stroke",
      percentage: 8.33
    },
    {
      name: "I don't know",
      percentage: 8.33
    },
    {
      name: "Chronic fatigue",
      percentage: 8.33
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
      percentage: 8.33
    },
    {
      name: "Dementia/Alzheimer's",
      percentage: 8.33
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
      percentage: 8.33
    }],
    employeeHealthCareProvision: [
      {
        name: "Mental health support",
        percentage: 71.43
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
        percentage: 0
      },
      {
        name: "Dental treatment",
        percentage: 14.29
      },
      {
        name: "Hospital stays",
        percentage: 28.57
      },
      {
        name: "Gym membership",
        percentage: 28.57
      },
      {
        name: "Physiotherapy",
        percentage: 14.29
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
        percentage: 14.29
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
        percentage: 8.33
      },
      {
        name: 'Millennial',
        ageGroup: '24-42',
        percentage: 58.33
      },
      {
        name: 'Generation X',
        ageGroup: '43-54',
        percentage: 66.67
      },
      {
        name: 'Baby boomers',
        ageGroup: '55-73',
        percentage: 16.67
      },
      {
        name: 'Silent generation',
        ageGroup: '74+',
        percentage: 0
      }]
  },
  {
    region: "North West",
    industry: "Sales, Media & Marketing",
    leftStatus: {
      leftDueToHealth: 50,
      notLeftDueToHealth: 0,
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
      percentage: 0
    },
    {
      name: "Long Covid",
      percentage: 50
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
      percentage: 50
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
        percentage: 50
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
        percentage: 0
      }]
  },
  {
    region: "North West",
    industry: "Travel & Transport",
    leftStatus: {
      leftDueToHealth: 33.33,
      notLeftDueToHealth: 0,
      notSureDueToHealth: 66.67,
    },
    healthWellBeingOffered: 33.33,
    employeeCareByIndustry: {
      careAboutTeam: 33.33,
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
      percentage: 66.67
    },
    {
      name: "Long Covid",
      percentage: 33.33
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
      percentage: 33.33
    },
    {
      name: "Heart attack",
      percentage: 0
    },
    {
      name: "Autism",
      percentage: 33.33
    },
    {
      name: "Menopause",
      percentage: 33.33
    },
    {
      name: "Heart disease",
      percentage: 33.33
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
      percentage: 33.33
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
      percentage: 33.33
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
        percentage: 66.67
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
    region: "North West",
    industry: "Other",
    leftStatus: {
      leftDueToHealth: 0,
      notLeftDueToHealth: 100,
      notSureDueToHealth: 0,
    },
    healthWellBeingOffered: 0,
    employeeCareByIndustry: {
      careAboutTeam: 66.67,
      increasesProductivity: 0,
      dontCare: 33.33,
    },
    healthWellBeingIssue: [{
      name: "Mental health",
      percentage: 0
    },
    {
      name: "No health issues",
      percentage: 100
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
        percentage: 66.67
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