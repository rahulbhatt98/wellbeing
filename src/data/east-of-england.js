const data = [
  {
    region: "East of England",
    industry: "Architecture",
    leftStatus: {
      leftDueToHealth: 33.33,
      notLeftDueToHealth: 16.67,
      notSureDueToHealth: 50,
    },
    healthWellBeingOffered: 83.33,
    employeeCareByIndustry: {
      careAboutTeam: 66.67,
      increasesProductivity: 33.33,
      dontCare: 16.67,
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
      percentage: 16.67
    },
    {
      name: "Diabetes",
      percentage: 16.67
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
      percentage: 16.67
    },
    {
      name: "Arthritis",
      percentage: 16.67
    },
    {
      name: "Care support for loved ones",
      percentage: 33.33
    },
    {
      name: "Mobility issues",
      percentage: 16.67
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
      percentage: 16.67
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
    generationMakeUp: [
      {
        name: 'Generation Z',
        ageGroup: '16-23',
        percentage: 0
      },
      {
        name: 'Millennial',
        ageGroup: '24-42',
        percentage: 66.67
      },
      {
        name: 'Generation X',
        ageGroup: '43-54',
        percentage: 0
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
    region: "East of England",
    industry: "Architecture, Engineering & Building",
    leftStatus: {
      leftDueToHealth: 33.33,
      notLeftDueToHealth: 16.67,
      notSureDueToHealth: 50,
    },
    healthWellBeingOffered: 83.33,
    employeeCareByIndustry: {
      careAboutTeam: 66.67,
      increasesProductivity: 33.33,
      dontCare: 16.67,
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
      percentage: 16.67
    },
    {
      name: "Diabetes",
      percentage: 16.67
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
      percentage: 16.67
    },
    {
      name: "Arthritis",
      percentage: 16.67
    },
    {
      name: "Care support for loved ones",
      percentage: 33.33
    },
    {
      name: "Mobility issues",
      percentage: 16.67
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
      percentage: 16.67
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
    generationMakeUp: [
      {
        name: 'Generation Z',
        ageGroup: '16-23',
        percentage: 0
      },
      {
        name: 'Millennial',
        ageGroup: '24-42',
        percentage: 66.67
      },
      {
        name: 'Generation X',
        ageGroup: '43-54',
        percentage: 0
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
    region: "East of England",
    industry: "Arts & Culture",
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
    region: "East of England",
    industry: "Education",
    leftStatus: {
      leftDueToHealth: 100,
      notLeftDueToHealth: 0,
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
      percentage: 50
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
      percentage: 50
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
        percentage: 50
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
        percentage: 50
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
        percentage: 0
      },
      {
        name: 'Silent generation',
        ageGroup: '74+',
        percentage: 50
      }]
  },
  {
    region: "East of England",
    industry: "Finance",
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
      percentage: 100
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
        percentage: 100
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
    region: "East of England",
    industry: "Healthcare",
    leftStatus: {
      leftDueToHealth: 50,
      notLeftDueToHealth: 50,
      notSureDueToHealth: 0,
    },
    healthWellBeingOffered: 50,
    employeeCareByIndustry: {
      careAboutTeam: 75,
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
      percentage: 0
    },
    {
      name: "Cancer",
      percentage: 50
    },
    {
      name: "Arthritis",
      percentage: 25
    },
    {
      name: "Care support for loved ones",
      percentage: 50
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
      percentage: 25
    },
    {
      name: "Heart disease",
      percentage: 25
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
      percentage: 25
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
        percentage: 50
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
        percentage: 50
      },
      {
        name: "Gym membership",
        percentage: 0
      },
      {
        name: "Physiotherapy",
        percentage: 50
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
    region: "East of England",
    industry: "HR",
    leftStatus: {
      leftDueToHealth: 50,
      notLeftDueToHealth: 50,
      notSureDueToHealth: 0,
    },
    healthWellBeingOffered: 0,
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
      percentage: 50
    },
    {
      name: "Diabetes",
      percentage: 50
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
      percentage: 50
    },
    {
      name: "Care support for loved ones",
      percentage: 50
    },
    {
      name: "Mobility issues",
      percentage: 50
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
      percentage: 100
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
    region: "East of England",
    industry: "IT & Telecoms",
    leftStatus: {
      leftDueToHealth: 25,
      notLeftDueToHealth: 50,
      notSureDueToHealth: 25,
    },
    healthWellBeingOffered: 75,
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
      percentage: 25
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
        percentage: 33.33
      },
      {
        name: "GP access",
        percentage: 33.33
      },
      {
        name: "Dental treatment",
        percentage: 33.33
      },
      {
        name: "Hospital stays",
        percentage: 33.33
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
        percentage: 33.33
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
        percentage: 25
      },
      {
        name: 'Silent generation',
        ageGroup: '74+',
        percentage: 0
      }]
  },
  {
    region: "East of England",
    industry: "Legal",
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
    region: "East of England",
    industry: "Manufacturing & Utilities",
    leftStatus: {
      leftDueToHealth: 100,
      notLeftDueToHealth: 0,
      notSureDueToHealth: 0,
    },
    healthWellBeingOffered: 0,
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
      percentage: 0
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
    region: "East of England",
    industry: "Catering & Leisure",
    leftStatus: {
      leftDueToHealth: 0,
      notLeftDueToHealth: 100,
      notSureDueToHealth: 0,
    },
    healthWellBeingOffered: 33.33,
    employeeCareByIndustry: {
      careAboutTeam: 66.67,
      increasesProductivity: 100,
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
      percentage: 33.33
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
      percentage: 0
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
        percentage: 0
      },
      {
        name: 'Generation X',
        ageGroup: '43-54',
        percentage: 33.33
      },
      {
        name: 'Baby boomers',
        ageGroup: '55-73',
        percentage: 66.67
      },
      {
        name: 'Silent generation',
        ageGroup: '74+',
        percentage: 0
      }]
  },
  {
    region: "East of England",
    industry: "Sales, Media & Marketing",
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
    region: "East of England",
    industry: "Travel & Transport",
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
    region: "East of England",
    industry: "Other",
    leftStatus: {
      leftDueToHealth: 20,
      notLeftDueToHealth: 60,
      notSureDueToHealth: 0,
    },
    healthWellBeingOffered: 20,
    employeeCareByIndustry: {
      careAboutTeam: 80,
      increasesProductivity: 60,
      dontCare: 0,
    },
    healthWellBeingIssue: [{
      name: "Mental health",
      percentage: 60
    },
    {
      name: "No health issues",
      percentage: 20
    },
    {
      name: "High blood pressure",
      percentage: 20
    },
    {
      name: "Diabetes",
      percentage: 40
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
      percentage: 0
    },
    {
      name: "Arthritis",
      percentage: 20
    },
    {
      name: "Care support for loved ones",
      percentage: 0
    },
    {
      name: "Mobility issues",
      percentage: 40
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
      percentage: 40
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
      percentage: 20
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
        percentage: 20
      },
      {
        name: 'Millennial',
        ageGroup: '24-42',
        percentage: 20
      },
      {
        name: 'Generation X',
        ageGroup: '43-54',
        percentage: 20
      },
      {
        name: 'Baby boomers',
        ageGroup: '55-73',
        percentage: 60
      },
      {
        name: 'Silent generation',
        ageGroup: '74+',
        percentage: 0
      }]
  },
];

export default data;