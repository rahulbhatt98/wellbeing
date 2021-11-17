const data = [
  {
    region: "Greater London",
    industry: "Architecture",
    leftStatus: {
      leftDueToHealth: 42.86,
      notLeftDueToHealth: 38.10,
      notSureDueToHealth: 9.52,
    },
    healthWellBeingOffered: 76.19,
    employeeCareByIndustry: {
      careAboutTeam: 66.67,
      increasesProductivity: 71.43,
      dontCare: 0,
    },
    healthWellBeingIssue: [{
      name: "Mental health",
      percentage: 23.81
    },
    {
      name: "No health issues",
      percentage: 28.57
    },
    {
      name: "High blood pressure",
      percentage: 23.81
    },
    {
      name: "Diabetes",
      percentage: 19.05
    },
    {
      name: "Long Covid",
      percentage: 14.29
    },
    {
      name: "Pregnancy loss",
      percentage: 14.29
    },
    {
      name: "Cancer",
      percentage: 9.52
    },
    {
      name: "Arthritis",
      percentage: 0
    },
    {
      name: "Care support for loved ones",
      percentage: 9.52
    },
    {
      name: "Mobility issues",
      percentage: 0
    },
    {
      name: "ADHD",
      percentage: 4.76
    },
    {
      name: "Heart attack",
      percentage: 19.05
    },
    {
      name: "Autism",
      percentage: 4.76
    },
    {
      name: "Menopause",
      percentage: 4.76
    },
    {
      name: "Heart disease",
      percentage: 23.81
    },
    {
      name: "Loss of hearing",
      percentage: 4.76
    },
    {
      name: "Attempted suicide",
      percentage: 9.52
    },
    {
      name: "Stroke",
      percentage: 4.76
    },
    {
      name: "I don't know",
      percentage: 4.76
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
      percentage: 9.52
    },
    {
      name: "Multiple sclerosis",
      percentage: 4.76
    },
    {
      name: "Loss of sight",
      percentage: 14.29
    },
    {
      name: "Parkinson's disease",
      percentage: 4.76
    },
    {
      name: "Dementia/Alzheimer's",
      percentage: 0
    },
    {
      name: "Motor neurone disease",
      percentage: 4.76
    },
    {
      name: "Organ failure/Need dialysis",
      percentage: 4.76
    },
    {
      name: "Other (please specify)",
      percentage: 0
    }],
    employeeHealthCareProvision: [
      {
        name: "Mental health support",
        percentage: 18.75
      },
      {
        name: "Health assessments",
        percentage: 31.25
      },
      {
        name: "Support during pregnancy",
        percentage: 50
      },
      {
        name: "GP access",
        percentage: 25
      },
      {
        name: "Dental treatment",
        percentage: 18.75
      },
      {
        name: "Hospital stays",
        percentage: 31.25
      },
      {
        name: "Gym membership",
        percentage: 6.25
      },
      {
        name: "Physiotherapy",
        percentage: 25
      },
      {
        name: "Outpatient treatment",
        percentage: 12.50
      },
      {
        name: "Opticians",
        percentage: 6.25
      },
      {
        name: "Diagnostics",
        percentage: 6.25
      },
      {
        name: "Careers' support",
        percentage: 12.50
      },
    ],
    generationMakeUp: [
      {
        name: 'Generation Z',
        ageGroup: '16-23',
        percentage: 14.29
      },
      {
        name: 'Millennial',
        ageGroup: '24-42',
        percentage: 66.67
      },
      {
        name: 'Generation X',
        ageGroup: '43-54',
        percentage: 28.57
      },
      {
        name: 'Baby boomers',
        ageGroup: '55-73',
        percentage: 23.81
      },
      {
        name: 'Silent generation',
        ageGroup: '74+',
        percentage: 0
      }]
  },
  {
    region: "Greater London",
    industry: "Architecture, Engineering & Building",
    leftStatus: {
      leftDueToHealth: 42.86,
      notLeftDueToHealth: 38.10,
      notSureDueToHealth: 9.52,
    },
    healthWellBeingOffered: 76.19,
    employeeCareByIndustry: {
      careAboutTeam: 66.67,
      increasesProductivity: 71.43,
      dontCare: 0,
    },
    healthWellBeingIssue: [{
      name: "Mental health",
      percentage: 23.81
    },
    {
      name: "No health issues",
      percentage: 28.57
    },
    {
      name: "High blood pressure",
      percentage: 23.81
    },
    {
      name: "Diabetes",
      percentage: 19.05
    },
    {
      name: "Long Covid",
      percentage: 14.29
    },
    {
      name: "Pregnancy loss",
      percentage: 14.29
    },
    {
      name: "Cancer",
      percentage: 9.52
    },
    {
      name: "Arthritis",
      percentage: 0
    },
    {
      name: "Care support for loved ones",
      percentage: 9.52
    },
    {
      name: "Mobility issues",
      percentage: 0
    },
    {
      name: "ADHD",
      percentage: 4.76
    },
    {
      name: "Heart attack",
      percentage: 19.05
    },
    {
      name: "Autism",
      percentage: 4.76
    },
    {
      name: "Menopause",
      percentage: 4.76
    },
    {
      name: "Heart disease",
      percentage: 23.81
    },
    {
      name: "Loss of hearing",
      percentage: 4.76
    },
    {
      name: "Attempted suicide",
      percentage: 9.52
    },
    {
      name: "Stroke",
      percentage: 4.76
    },
    {
      name: "I don't know",
      percentage: 4.76
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
      percentage: 9.52
    },
    {
      name: "Multiple sclerosis",
      percentage: 4.76
    },
    {
      name: "Loss of sight",
      percentage: 14.29
    },
    {
      name: "Parkinson's disease",
      percentage: 4.76
    },
    {
      name: "Dementia/Alzheimer's",
      percentage: 0
    },
    {
      name: "Motor neurone disease",
      percentage: 4.76
    },
    {
      name: "Organ failure/Need dialysis",
      percentage: 4.76
    },
    {
      name: "Other (please specify)",
      percentage: 0
    }],
    employeeHealthCareProvision: [
      {
        name: "Mental health support",
        percentage: 18.75
      },
      {
        name: "Health assessments",
        percentage: 31.25
      },
      {
        name: "Support during pregnancy",
        percentage: 50
      },
      {
        name: "GP access",
        percentage: 25
      },
      {
        name: "Dental treatment",
        percentage: 18.75
      },
      {
        name: "Hospital stays",
        percentage: 31.25
      },
      {
        name: "Gym membership",
        percentage: 6.25
      },
      {
        name: "Physiotherapy",
        percentage: 25
      },
      {
        name: "Outpatient treatment",
        percentage: 12.50
      },
      {
        name: "Opticians",
        percentage: 6.25
      },
      {
        name: "Diagnostics",
        percentage: 6.25
      },
      {
        name: "Careers' support",
        percentage: 12.50
      },
    ],
    generationMakeUp: [
      {
        name: 'Generation Z',
        ageGroup: '16-23',
        percentage: 14.29
      },
      {
        name: 'Millennial',
        ageGroup: '24-42',
        percentage: 66.67
      },
      {
        name: 'Generation X',
        ageGroup: '43-54',
        percentage: 28.57
      },
      {
        name: 'Baby boomers',
        ageGroup: '55-73',
        percentage: 23.81
      },
      {
        name: 'Silent generation',
        ageGroup: '74+',
        percentage: 0
      }]
  },
  {
    region: "Greater London",
    industry: "Arts & Culture",
    leftStatus: {
      leftDueToHealth: 57.14,
      notLeftDueToHealth: 14.29,
      notSureDueToHealth: 14.29,
    },
    healthWellBeingOffered: 42.86,
    employeeCareByIndustry: {
      careAboutTeam: 57.14,
      increasesProductivity: 71.43,
      dontCare: 0,
    },
    healthWellBeingIssue: [{
      name: "Mental health",
      percentage: 42.86
    },
    {
      name: "No health issues",
      percentage: 14.29
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
      percentage: 14.29
    },
    {
      name: "ADHD",
      percentage: 14.29
    },
    {
      name: "Heart attack",
      percentage: 14.29
    },
    {
      name: "Autism",
      percentage: 14.29
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
      percentage: 28.57
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
      percentage: 14.29
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
      percentage: 14.29
    },
    {
      name: "Other (please specify)",
      percentage: 14.29
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
        percentage: 33.33
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
        percentage: 28.57
      },
      {
        name: 'Millennial',
        ageGroup: '24-42',
        percentage: 71.43
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
        percentage: 14.29
      }]
  },
  {
    region: "Greater London",
    industry: "Education",
    leftStatus: {
      leftDueToHealth: 40,
      notLeftDueToHealth: 40,
      notSureDueToHealth: 0,
    },
    healthWellBeingOffered: 80,
    employeeCareByIndustry: {
      careAboutTeam: 60,
      increasesProductivity: 100,
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
      percentage: 20
    },
    {
      name: "Long Covid",
      percentage: 40
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
      percentage: 20
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
      percentage: 20
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
        percentage: 25
      },
      {
        name: "Health assessments",
        percentage: 50
      },
      {
        name: "Support during pregnancy",
        percentage: 25
      },
      {
        name: "GP access",
        percentage: 25
      },
      {
        name: "Dental treatment",
        percentage: 25
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
        percentage: 60
      },
      {
        name: 'Generation X',
        ageGroup: '43-54',
        percentage: 20
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
    region: "Greater London",
    industry: "Finance",
    leftStatus: {
      leftDueToHealth: 45.16,
      notLeftDueToHealth: 41.94,
      notSureDueToHealth: 9.68,
    },
    healthWellBeingOffered: 90.32,
    employeeCareByIndustry: {
      careAboutTeam: 83.87,
      increasesProductivity: 67.74,
      dontCare: 0,
    },
    healthWellBeingIssue: [{
      name: "Mental health",
      percentage: 16.13
    },
    {
      name: "No health issues",
      percentage: 6.45
    },
    {
      name: "High blood pressure",
      percentage: 22.58
    },
    {
      name: "Diabetes",
      percentage: 19.35
    },
    {
      name: "Long Covid",
      percentage: 9.68
    },
    {
      name: "Pregnancy loss",
      percentage: 16.13
    },
    {
      name: "Cancer",
      percentage: 16.13
    },
    {
      name: "Arthritis",
      percentage: 19.35
    },
    {
      name: "Care support for loved ones",
      percentage: 12.90
    },
    {
      name: "Mobility issues",
      percentage: 9.68
    },
    {
      name: "ADHD",
      percentage: 16.13
    },
    {
      name: "Heart attack",
      percentage: 12.90
    },
    {
      name: "Autism",
      percentage: 3.23
    },
    {
      name: "Menopause",
      percentage: 6.45
    },
    {
      name: "Heart disease",
      percentage: 3.23
    },
    {
      name: "Loss of hearing",
      percentage: 9.68
    },
    {
      name: "Attempted suicide",
      percentage: 6.45
    },
    {
      name: "Stroke",
      percentage: 6.45
    },
    {
      name: "I don't know",
      percentage: 9.68
    },
    {
      name: "Chronic fatigue",
      percentage: 6.45
    },
    {
      name: "Epilepsy",
      percentage: 3.23
    },
    {
      name: "Cerebral palsy",
      percentage: 0
    },
    {
      name: "Multiple sclerosis",
      percentage: 6.45
    },
    {
      name: "Loss of sight",
      percentage: 3.23
    },
    {
      name: "Parkinson's disease",
      percentage: 3.23
    },
    {
      name: "Dementia/Alzheimer's",
      percentage: 3.23
    },
    {
      name: "Motor neurone disease",
      percentage: 3.23
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
        percentage: 35.71
      },
      {
        name: "Health assessments",
        percentage: 17.86
      },
      {
        name: "Support during pregnancy",
        percentage: 25
      },
      {
        name: "GP access",
        percentage: 28.57
      },
      {
        name: "Dental treatment",
        percentage: 14.29
      },
      {
        name: "Hospital stays",
        percentage: 32.14
      },
      {
        name: "Gym membership",
        percentage: 25
      },
      {
        name: "Physiotherapy",
        percentage: 17.86
      },
      {
        name: "Outpatient treatment",
        percentage: 7.14
      },
      {
        name: "Opticians",
        percentage: 10.71
      },
      {
        name: "Diagnostics",
        percentage: 32.14
      },
      {
        name: "Careers' support",
        percentage: 17.86
      },
    ],
    generationMakeUp: [
      {
        name: 'Generation Z',
        ageGroup: '16-23',
        percentage: 12.90
      },
      {
        name: 'Millennial',
        ageGroup: '24-42',
        percentage: 70.97
      },
      {
        name: 'Generation X',
        ageGroup: '43-54',
        percentage: 38.71
      },
      {
        name: 'Baby boomers',
        ageGroup: '55-73',
        percentage: 9.68
      },
      {
        name: 'Silent generation',
        ageGroup: '74+',
        percentage: 3.23
      }]
  },
  {
    region: "Greater London",
    industry: "Healthcare",
    leftStatus: {
      leftDueToHealth: 50,
      notLeftDueToHealth: 25,
      notSureDueToHealth: 16.67,
    },
    healthWellBeingOffered: 100,
    employeeCareByIndustry: {
      careAboutTeam: 83.33,
      increasesProductivity: 50,
      dontCare: 0,
    },
    healthWellBeingIssue: [{
      name: "Mental health",
      percentage: 16.67
    },
    {
      name: "No health issues",
      percentage: 16.67
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
      percentage: 8.33
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
      percentage: 8.33
    },
    {
      name: "Care support for loved ones",
      percentage: 8.33
    },
    {
      name: "Mobility issues",
      percentage: 8.33
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
      percentage: 8.33
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
      percentage: 25
    },
    {
      name: "Chronic fatigue",
      percentage: 16.67
    },
    {
      name: "Epilepsy",
      percentage: 8.33
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
      percentage: 8.33
    },
    {
      name: "Parkinson's disease",
      percentage: 8.33
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
        percentage: 25
      },
      {
        name: "Health assessments",
        percentage: 25
      },
      {
        name: "Support during pregnancy",
        percentage: 25
      },
      {
        name: "GP access",
        percentage: 8.33
      },
      {
        name: "Dental treatment",
        percentage: 25
      },
      {
        name: "Hospital stays",
        percentage: 8.33
      },
      {
        name: "Gym membership",
        percentage: 0
      },
      {
        name: "Physiotherapy",
        percentage: 16.67
      },
      {
        name: "Outpatient treatment",
        percentage: 25
      },
      {
        name: "Opticians",
        percentage: 16.67
      },
      {
        name: "Diagnostics",
        percentage: 8.33
      },
      {
        name: "Careers' support",
        percentage: 25
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
        percentage: 58.33
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
        percentage: 16.67
      }]
  },
  {
    region: "Greater London",
    industry: "HR",
    leftStatus: {
      leftDueToHealth: 50,
      notLeftDueToHealth: 0,
      notSureDueToHealth: 0,
    },
    healthWellBeingOffered: 100,
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
      percentage: 50
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
    region: "Greater London",
    industry: "IT & Telecoms",
    leftStatus: {
      leftDueToHealth: 25,
      notLeftDueToHealth: 54.17,
      notSureDueToHealth: 12.50,
    },
    healthWellBeingOffered: 91.67,
    employeeCareByIndustry: {
      careAboutTeam: 75,
      increasesProductivity: 66.67,
      dontCare: 0,
    },
    healthWellBeingIssue: [{
      name: "Mental health",
      percentage: 20.83
    },
    {
      name: "No health issues",
      percentage: 16.67
    },
    {
      name: "High blood pressure",
      percentage: 25
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
      percentage: 20.83
    },
    {
      name: "Cancer",
      percentage: 12.50
    },
    {
      name: "Arthritis",
      percentage: 20.83
    },
    {
      name: "Care support for loved ones",
      percentage: 12.50
    },
    {
      name: "Mobility issues",
      percentage: 12.50
    },
    {
      name: "ADHD",
      percentage: 4.17
    },
    {
      name: "Heart attack",
      percentage: 12.50
    },
    {
      name: "Autism",
      percentage: 4.17
    },
    {
      name: "Menopause",
      percentage: 0
    },
    {
      name: "Heart disease",
      percentage: 4.17
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
      percentage: 12.50
    },
    {
      name: "I don't know",
      percentage: 4.17
    },
    {
      name: "Chronic fatigue",
      percentage: 8.33
    },
    {
      name: "Epilepsy",
      percentage: 8.33
    },
    {
      name: "Cerebral palsy",
      percentage: 12.50
    },
    {
      name: "Multiple sclerosis",
      percentage: 4.17
    },
    {
      name: "Loss of sight",
      percentage: 4.17
    },
    {
      name: "Parkinson's disease",
      percentage: 4.17
    },
    {
      name: "Dementia/Alzheimer's",
      percentage: 4.17
    },
    {
      name: "Motor neurone disease",
      percentage: 4.17
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
        percentage: 45.45
      },
      {
        name: "Health assessments",
        percentage: 31.82
      },
      {
        name: "Support during pregnancy",
        percentage: 27.27
      },
      {
        name: "GP access",
        percentage: 27.27
      },
      {
        name: "Dental treatment",
        percentage: 18.18
      },
      {
        name: "Hospital stays",
        percentage: 18.18
      },
      {
        name: "Gym membership",
        percentage: 27.27
      },
      {
        name: "Physiotherapy",
        percentage: 18.18
      },
      {
        name: "Outpatient treatment",
        percentage: 9.09
      },
      {
        name: "Opticians",
        percentage: 9.09
      },
      {
        name: "Diagnostics",
        percentage: 13.64
      },
      {
        name: "Careers' support",
        percentage: 13.64
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
        percentage: 70.83
      },
      {
        name: 'Generation X',
        ageGroup: '43-54',
        percentage: 25
      },
      {
        name: 'Baby boomers',
        ageGroup: '55-73',
        percentage: 8.33
      },
      {
        name: 'Silent generation',
        ageGroup: '74+',
        percentage: 0
      }]
  },
  {
    region: "Greater London",
    industry: "Legal",
    leftStatus: {
      leftDueToHealth: 20,
      notLeftDueToHealth: 0,
      notSureDueToHealth: 80,
    },
    healthWellBeingOffered: 100,
    employeeCareByIndustry: {
      careAboutTeam: 100,
      increasesProductivity: 40,
      dontCare: 0,
    },
    healthWellBeingIssue: [{
      name: "Mental health",
      percentage: 20
    },
    {
      name: "No health issues",
      percentage: 0
    },
    {
      name: "High blood pressure",
      percentage: 20
    },
    {
      name: "Diabetes",
      percentage: 20
    },
    {
      name: "Long Covid",
      percentage: 40
    },
    {
      name: "Pregnancy loss",
      percentage: 40
    },
    {
      name: "Cancer",
      percentage: 40
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
      percentage: 20
    },
    {
      name: "ADHD",
      percentage: 20
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
      percentage: 40
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
      percentage: 20
    },
    {
      name: "Epilepsy",
      percentage: 60
    },
    {
      name: "Cerebral palsy",
      percentage: 40
    },
    {
      name: "Multiple sclerosis",
      percentage: 20
    },
    {
      name: "Loss of sight",
      percentage: 20
    },
    {
      name: "Parkinson's disease",
      percentage: 20
    },
    {
      name: "Dementia/Alzheimer's",
      percentage: 20
    },
    {
      name: "Motor neurone disease",
      percentage: 20
    },
    {
      name: "Organ failure/Need dialysis",
      percentage: 20
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
        percentage: 0
      },
      {
        name: "Support during pregnancy",
        percentage: 20
      },
      {
        name: "GP access",
        percentage: 0
      },
      {
        name: "Dental treatment",
        percentage: 60
      },
      {
        name: "Hospital stays",
        percentage: 20
      },
      {
        name: "Gym membership",
        percentage: 0
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
        percentage: 20
      },
      {
        name: "Diagnostics",
        percentage: 0
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
        percentage: 0
      },
      {
        name: 'Silent generation',
        ageGroup: '74+',
        percentage: 0
      }]
  },
  {
    region: "Greater London",
    industry: "Manufacturing & Utilities",
    leftStatus: {
      leftDueToHealth: 28.57,
      notLeftDueToHealth: 71.43,
      notSureDueToHealth: 0,
    },
    healthWellBeingOffered: 71.43,
    employeeCareByIndustry: {
      careAboutTeam: 71.43,
      increasesProductivity: 85.71,
      dontCare: 14.29,
    },
    healthWellBeingIssue: [{
      name: "Mental health",
      percentage: 0
    },
    {
      name: "No health issues",
      percentage: 14.29
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
      percentage: 14.29
    },
    {
      name: "Pregnancy loss",
      percentage: 0
    },
    {
      name: "Cancer",
      percentage: 28.57
    },
    {
      name: "Arthritis",
      percentage: 14.29
    },
    {
      name: "Care support for loved ones",
      percentage: 14.29
    },
    {
      name: "Mobility issues",
      percentage: 0
    },
    {
      name: "ADHD",
      percentage: 14.29
    },
    {
      name: "Heart attack",
      percentage: 0
    },
    {
      name: "Autism",
      percentage: 14.29
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
      percentage: 14.29
    },
    {
      name: "Attempted suicide",
      percentage: 0
    },
    {
      name: "Stroke",
      percentage: 14.29
    },
    {
      name: "I don't know",
      percentage: 28.57
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
        percentage: 20
      },
      {
        name: "Health assessments",
        percentage: 20
      },
      {
        name: "Support during pregnancy",
        percentage: 40
      },
      {
        name: "GP access",
        percentage: 20
      },
      {
        name: "Dental treatment",
        percentage: 40
      },
      {
        name: "Hospital stays",
        percentage: 20
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
        percentage: 20
      },
      {
        name: "Opticians",
        percentage: 40
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
        percentage: 14.29
      },
      {
        name: 'Millennial',
        ageGroup: '24-42',
        percentage: 100
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
  },
  {
    region: "Greater London",
    industry: "Catering & Leisure",
    leftStatus: {
      leftDueToHealth: 35.71,
      notLeftDueToHealth: 64.29,
      notSureDueToHealth: 0,
    },
    healthWellBeingOffered: 71.43,
    employeeCareByIndustry: {
      careAboutTeam: 78.57,
      increasesProductivity: 78.57,
      dontCare: 0,
    },
    healthWellBeingIssue: [{
      name: "Mental health",
      percentage: 14.29
    },
    {
      name: "No health issues",
      percentage: 28.57
    },
    {
      name: "High blood pressure",
      percentage: 7.14
    },
    {
      name: "Diabetes",
      percentage: 21.43
    },
    {
      name: "Long Covid",
      percentage: 14.29
    },
    {
      name: "Pregnancy loss",
      percentage: 21.43
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
      percentage: 14.29
    },
    {
      name: "Heart attack",
      percentage: 14.29
    },
    {
      name: "Autism",
      percentage: 0
    },
    {
      name: "Menopause",
      percentage: 14.29
    },
    {
      name: "Heart disease",
      percentage: 0
    },
    {
      name: "Loss of hearing",
      percentage: 7.14
    },
    {
      name: "Attempted suicide",
      percentage: 7.14
    },
    {
      name: "Stroke",
      percentage: 0
    },
    {
      name: "I don't know",
      percentage: 14.29
    },
    {
      name: "Chronic fatigue",
      percentage: 14.29
    },
    {
      name: "Epilepsy",
      percentage: 7.14
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
        percentage: 10
      },
      {
        name: "Health assessments",
        percentage: 30
      },
      {
        name: "Support during pregnancy",
        percentage: 30
      },
      {
        name: "GP access",
        percentage: 60
      },
      {
        name: "Dental treatment",
        percentage: 10
      },
      {
        name: "Hospital stays",
        percentage: 40
      },
      {
        name: "Gym membership",
        percentage: 30
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
        percentage: 10
      },
      {
        name: "Diagnostics",
        percentage: 10
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
        percentage: 14.29
      },
      {
        name: 'Millennial',
        ageGroup: '24-42',
        percentage: 78.57
      },
      {
        name: 'Generation X',
        ageGroup: '43-54',
        percentage: 35.71
      },
      {
        name: 'Baby boomers',
        ageGroup: '55-73',
        percentage: 7.14
      },
      {
        name: 'Silent generation',
        ageGroup: '74+',
        percentage: 0
      }]
  },
  {
    region: "Greater London",
    industry: "Sales, Media & Marketing",
    leftStatus: {
      leftDueToHealth: 44.44,
      notLeftDueToHealth: 33.33,
      notSureDueToHealth: 11.11,
    },
    healthWellBeingOffered: 88.89,
    employeeCareByIndustry: {
      careAboutTeam: 88.89,
      increasesProductivity: 77.78,
      dontCare: 0,
    },
    healthWellBeingIssue: [{
      name: "Mental health",
      percentage: 33.33
    },
    {
      name: "No health issues",
      percentage: 11.11
    },
    {
      name: "High blood pressure",
      percentage: 22.22
    },
    {
      name: "Diabetes",
      percentage: 22.22
    },
    {
      name: "Long Covid",
      percentage: 11.11
    },
    {
      name: "Pregnancy loss",
      percentage: 22.22
    },
    {
      name: "Cancer",
      percentage: 11.11
    },
    {
      name: "Arthritis",
      percentage: 22.22
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
      percentage: 22.22
    },
    {
      name: "Heart attack",
      percentage: 33.33
    },
    {
      name: "Autism",
      percentage: 22.22
    },
    {
      name: "Menopause",
      percentage: 22.22
    },
    {
      name: "Heart disease",
      percentage: 22.22
    },
    {
      name: "Loss of hearing",
      percentage: 33.33
    },
    {
      name: "Attempted suicide",
      percentage: 22.22
    },
    {
      name: "Stroke",
      percentage: 11.11
    },
    {
      name: "I don't know",
      percentage: 11.11
    },
    {
      name: "Chronic fatigue",
      percentage: 0
    },
    {
      name: "Epilepsy",
      percentage: 11.11
    },
    {
      name: "Cerebral palsy",
      percentage: 11.11
    },
    {
      name: "Multiple sclerosis",
      percentage: 11.11
    },
    {
      name: "Loss of sight",
      percentage: 22.22
    },
    {
      name: "Parkinson's disease",
      percentage: 0
    },
    {
      name: "Dementia/Alzheimer's",
      percentage: 11.11
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
      percentage: 11.11
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
        percentage: 25
      },
      {
        name: "GP access",
        percentage: 12.50
      },
      {
        name: "Dental treatment",
        percentage: 25
      },
      {
        name: "Hospital stays",
        percentage: 37.50
      },
      {
        name: "Gym membership",
        percentage: 25
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
        percentage: 12.50
      },
      {
        name: "Diagnostics",
        percentage: 0
      },
      {
        name: "Careers' support",
        percentage: 12.50
      },
    ],
    generationMakeUp: [
      {
        name: 'Generation Z',
        ageGroup: '16-23',
        percentage: 22.22
      },
      {
        name: 'Millennial',
        ageGroup: '24-42',
        percentage: 55.56
      },
      {
        name: 'Generation X',
        ageGroup: '43-54',
        percentage: 11.11
      },
      {
        name: 'Baby boomers',
        ageGroup: '55-73',
        percentage: 11.11
      },
      {
        name: 'Silent generation',
        ageGroup: '74+',
        percentage: 22.22
      }]
  },
  {
    region: "Greater London",
    industry: "Travel & Transport",
    leftStatus: {
      leftDueToHealth: 50,
      notLeftDueToHealth: 50,
      notSureDueToHealth: 0,
    },
    healthWellBeingOffered: 50,
    employeeCareByIndustry: {
      careAboutTeam: 100,
      increasesProductivity: 0,
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
        percentage: 100
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
    region: "Greater London",
    industry: "Other",
    leftStatus: {
      leftDueToHealth: 44.44,
      notLeftDueToHealth: 55.56,
      notSureDueToHealth: 0,
    },
    healthWellBeingOffered: 88.89,
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
      percentage: 22.22
    },
    {
      name: "Diabetes",
      percentage: 33.33
    },
    {
      name: "Long Covid",
      percentage: 22.22
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
      percentage: 11.11
    },
    {
      name: "Mobility issues",
      percentage: 22.22
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
      percentage: 11.11
    },
    {
      name: "Menopause",
      percentage: 0
    },
    {
      name: "Heart disease",
      percentage: 11.11
    },
    {
      name: "Loss of hearing",
      percentage: 11.11
    },
    {
      name: "Attempted suicide",
      percentage: 0
    },
    {
      name: "Stroke",
      percentage: 11.11
    },
    {
      name: "I don't know",
      percentage: 11.11
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
      percentage: 11.11
    },
    {
      name: "Multiple sclerosis",
      percentage: 11.11
    },
    {
      name: "Loss of sight",
      percentage: 0
    },
    {
      name: "Parkinson's disease",
      percentage: 11.11
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
        percentage: 37.50
      },
      {
        name: "Health assessments",
        percentage: 12.50
      },
      {
        name: "Support during pregnancy",
        percentage: 12.50
      },
      {
        name: "GP access",
        percentage: 12.50
      },
      {
        name: "Dental treatment",
        percentage: 25
      },
      {
        name: "Hospital stays",
        percentage: 25
      },
      {
        name: "Gym membership",
        percentage: 12.50
      },
      {
        name: "Physiotherapy",
        percentage: 37.50
      },
      {
        name: "Outpatient treatment",
        percentage: 37.50
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
        percentage: 12.50
      },
    ],
    generationMakeUp: [
      {
        name: 'Generation Z',
        ageGroup: '16-23',
        percentage: 11.11
      },
      {
        name: 'Millennial',
        ageGroup: '24-42',
        percentage: 88.89
      },
      {
        name: 'Generation X',
        ageGroup: '43-54',
        percentage: 22.22
      },
      {
        name: 'Baby boomers',
        ageGroup: '55-73',
        percentage: 11.11
      },
      {
        name: 'Silent generation',
        ageGroup: '74+',
        percentage: 0
      }]
  }
];

export default data;