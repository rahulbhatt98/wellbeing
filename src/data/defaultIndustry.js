const data = [
    {
      industry: "Architecture, Engineering & Building",
      leftStatus: {
        leftDueToHealth: 36.54,
        notLeftDueToHealth: 38.46,
        notSureDueToHealth: 13.46,
      },
      healthWellBeingOffered: 73.08,
      employeeCareByIndustry: {
        careAboutTeam: 65.38,
        increasesProductivity: 67.31,
        dontCare: 1.92,
      },
      healthWellBeingIssue: [{
        name: "Mental health",
        percentage: 21.15
      },
      {
        name: "No health issues",
        percentage: 13.46
      },
      {
        name: "High blood pressure",
        percentage: 17.31   
      },
      {
        name: "Diabetes",
        percentage: 15.38
      },
      {
        name: "Long Covid",
        percentage: 15.38
      },
      {
        name: "Pregnancy loss",
        percentage: 13.46
      },
      {
        name: "Cancer",
        percentage: 9.62
      },
      {
        name: "Arthritis",
        percentage: 9.62
      },
      {
        name: "Care support for loved ones",
        percentage: 17.31
      },
      {
        name: "Mobility issues",
        percentage: 7.69
      },
      {
        name: "ADHD",
        percentage: 7.69
      },
      {
        name: "Heart attack",
        percentage: 13.46
      },
      {
        name: "Autism",
        percentage: 3.85
      },
      {
        name: "Menopause",
        percentage: 3.85
      },
      {
        name: "Heart disease",
        percentage: 13.46
      },
      {
        name: "Loss of hearing",
        percentage: 3.85
      },
      {
        name: "Attempted suicide",
        percentage: 7.69
      },
      {
        name: "Stroke",
        percentage: 3.85
      },
      {
        name: "I don't know",
        percentage: 7.69
      },
      {
        name: "Chronic fatigue",
        percentage: 1.92
      },
      {
        name: "Epilepsy",
        percentage: 3.85
      },
      {
        name: "Cerebral palsy",
        percentage: 9.62
      },
      {
        name: "Multiple sclerosis",
        percentage: 5.77
      },
      {
        name: "Loss of sight",
        percentage: 5.77
      },
      {
        name: "Parkinson's disease",
        percentage: 5.77
      },
      {
        name: "Dementia/Alzheimer's",
        percentage: 1.92
      },
      {
        name: "Motor neurone disease",
        percentage: 3.85
      },
      {
        name: "Organ failure/Need dialysis",
        percentage: 1.92
      },
      {
        name: "Other (please specify)",
        percentage: 1.92
      }],
      employeeHealthCareProvision: [
        {
          name: "Mental health support",
          percentage: 36.84
        },
        {
          name: "Health assessments",
          percentage: 28.95
        },
        {
          name: "Support during pregnancy",
          percentage: 34.21
        },
        {
          name: "GP access",
          percentage: 21.05
        },
        {
          name: "Dental treatment",
          percentage: 18.42
        },
        {
          name: "Hospital stays",
          percentage: 23.68
        },
        {
          name: "Gym membership",
          percentage: 5.26
        },
        {
          name: "Physiotherapy",
          percentage: 28.95
        },
        {
          name: "Outpatient treatment",
          percentage: 15.79
        },
        {
          name: "Opticians",
          percentage: 5.26
        },
        {
          name: "Diagnostics",
          percentage: 10.53
        },
        {
          name: "Careers' support",
          percentage: 15.79
        },
      ],
      generationMakeUp: [
        {
          name: 'Generation Z',
          ageGroup: '16-23',
          percentage: 19.23
        },
        {
          name: 'Millennial',
          ageGroup: '24-42',
          percentage: 63.46
        },
        {
          name: 'Generation X',
          ageGroup: '43-54',
          percentage: 26.92
        },
        {
          name: 'Baby boomers',
          ageGroup: '55-73',
          percentage: 15.38
        },
        {
          name: 'Silent generation',
          ageGroup: '74+',
          percentage: 0
        }]
    },
    {
      industry: "Arts & Culture",
      leftStatus: {
        leftDueToHealth: 42.86,
        notLeftDueToHealth: 39.29,
        notSureDueToHealth: 14.29,
      },
      healthWellBeingOffered: 60.71,
      employeeCareByIndustry: {
        careAboutTeam: 71.43,
        increasesProductivity: 64.29,
        dontCare: 0,
      },
      healthWellBeingIssue: [{
        name: "Mental health",
        percentage: 32.14
      },
      {
        name: "No health issues",
        percentage: 17.86
      },
      {
        name: "High blood pressure",
        percentage: 17.86
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
        percentage: 3.57
      },
      {
        name: "Cancer",
        percentage: 3.57
      },
      {
        name: "Arthritis",
        percentage: 10.71
      },
      {
        name: "Care support for loved ones",
        percentage: 7.14
      },
      {
        name: "Mobility issues",
        percentage: 7.14
      },
      {
        name: "ADHD",
        percentage: 7.14
      },
      {
        name: "Heart attack",
        percentage: 7.14
      },
      {
        name: "Autism",
        percentage: 7.14
      },
      {
        name: "Menopause",
        percentage: 7.14
      },
      {
        name: "Heart disease",
        percentage: 0
      },
      {
        name: "Loss of hearing",
        percentage: 10.71
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
        percentage: 3.57
      },
      {
        name: "Chronic fatigue",
        percentage: 3.57
      },
      {
        name: "Epilepsy",
        percentage: 3.57
      },
      {
        name: "Cerebral palsy",
        percentage: 3.57
      },
      {
        name: "Multiple sclerosis",
        percentage: 3.57
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
        percentage: 10.71
      },
      {
        name: "Other (please specify)",
        percentage: 3.57
      }],
      employeeHealthCareProvision: [
        {
          name: "Mental health support",
          percentage: 29.41
        },
        {
          name: "Health assessments",
          percentage: 23.53
        },
        {
          name: "Support during pregnancy",
          percentage: 5.88  
        },
        {
          name: "GP access",
          percentage: 17.65
        },
        {
          name: "Dental treatment",
          percentage: 29.41
        },
        {
          name: "Hospital stays",
          percentage: 23.53
        },
        {
          name: "Gym membership",
          percentage: 17.65
        },
        {
          name: "Physiotherapy",
          percentage: 11.76
        },
        {
          name: "Outpatient treatment",
          percentage: 11.76
        },
        {
          name: "Opticians",
          percentage: 17.65
        },
        {
          name: "Diagnostics",
          percentage: 0
        },
        {
          name: "Careers' support",
          percentage: 17.65
        },
      ],
      generationMakeUp: [
        {
          name: 'Generation Z',
          ageGroup: '16-23',
          percentage: 21.43
        },
        {
          name: 'Millennial',
          ageGroup: '24-42',
          percentage: 39.29
        },
        {
          name: 'Generation X',
          ageGroup: '43-54',
          percentage: 50
        },
        {
          name: 'Baby boomers',
          ageGroup: '55-73',
          percentage: 10.71
        },
        {
          name: 'Silent generation',
          ageGroup: '74+',
          percentage: 7.14
        }]
    },
    {
      industry: "Education",
      leftStatus: {
        leftDueToHealth: 34.62,
        notLeftDueToHealth: 38.46,
        notSureDueToHealth: 15.38,
      },
      healthWellBeingOffered: 84.62,
      employeeCareByIndustry: {
        careAboutTeam: 69.23,
        increasesProductivity: 69.23,
        dontCare: 0,
      },
      healthWellBeingIssue: [{
        name: "Mental health",
        percentage: 11.54
      },
      {
        name: "No health issues",
        percentage: 26.92
      },
      {
        name: "High blood pressure",
        percentage: 3.85
      },
      {
        name: "Diabetes",
        percentage: 15.38
      },
      {
        name: "Long Covid",
        percentage: 15.38
      },
      {
        name: "Pregnancy loss",
        percentage: 3.85
      },
      {
        name: "Cancer",
        percentage: 11.54
      },
      {
        name: "Arthritis",
        percentage: 3.85
      },
      {
        name: "Care support for loved ones",
        percentage: 11.54
      },
      {
        name: "Mobility issues",
        percentage: 7.69
      },
      {
        name: "ADHD",
        percentage: 11.54
      },
      {
        name: "Heart attack",
        percentage: 0
      },
      {
        name: "Autism",
        percentage: 15.38
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
        percentage: 7.69
      },
      {
        name: "Attempted suicide",
        percentage: 15.38
      },
      {
        name: "Stroke",
        percentage: 11.54
      },
      {
        name: "I don't know",
        percentage: 0
      },
      {
        name: "Chronic fatigue",
        percentage: 3.85
      },
      {
        name: "Epilepsy",
        percentage: 3.85
      },
      {
        name: "Cerebral palsy",
        percentage: 11.54
      },
      {
        name: "Multiple sclerosis",
        percentage: 7.69
      },
      {
        name: "Loss of sight",
        percentage: 7.69
      },
      {
        name: "Parkinson's disease",
        percentage: 7.69
      },
      {
        name: "Dementia/Alzheimer's",
        percentage: 3.85
      },
      {
        name: "Motor neurone disease",
        percentage: 0
      },
      {
        name: "Organ failure/Need dialysis",
        percentage: 3.85
      },
      {
        name: "Other (please specify)",
        percentage: 0
      }],
      employeeHealthCareProvision: [
        {
          name: "Mental health support",
          percentage: 22.73
        },
        {
          name: "Health assessments",
          percentage: 36.36
        },
        {
          name: "Support during pregnancy",
          percentage: 27.27
        },
        {
          name: "GP access",
          percentage: 36.36
        },
        {
          name: "Dental treatment",
          percentage: 18.18
        },
        {
          name: "Hospital stays",
          percentage: 9.09
        },
        {
          name: "Gym membership",
          percentage: 18.18
        },
        {
          name: "Physiotherapy",
          percentage: 13.64
        },
        {
          name: "Outpatient treatment",
          percentage: 13.64
        },
        {
          name: "Opticians",
          percentage: 9.09
        },
        {
          name: "Diagnostics",
          percentage: 9.09
        },
        {
          name: "Careers' support",
          percentage: 4.55
        },
      ],
      generationMakeUp: [
        {
          name: 'Generation Z',
          ageGroup: '16-23',
          percentage: 23.08
        },
        {
          name: 'Millennial',
          ageGroup: '24-42',
          percentage: 57.69
        },
        {
          name: 'Generation X',
          ageGroup: '43-54',
          percentage: 19.23
        },
        {
          name: 'Baby boomers',
          ageGroup: '55-73',
          percentage: 19.23
        },
        {
          name: 'Silent generation',
          ageGroup: '74+',
          percentage: 3.85
        }]
    },
    {
      industry: "Finance",
      leftStatus: {
        leftDueToHealth: 35.21,
        notLeftDueToHealth: 46.48,
        notSureDueToHealth: 14.08,
      },
      healthWellBeingOffered: 87.32,
      employeeCareByIndustry: {
        careAboutTeam: 78.87,
        increasesProductivity: 53.52,
        dontCare: 1.41,
      },
      healthWellBeingIssue: [{
        name: "Mental health",
        percentage: 19.72
      },
      {
        name: "No health issues",
        percentage: 14.08
      },
      {
        name: "High blood pressure",
        percentage: 18.31
      },
      {
        name: "Diabetes",
        percentage: 12.68
      },
      {
        name: "Long Covid",
        percentage: 7.04
      },
      {
        name: "Pregnancy loss",
        percentage: 9.86
      },
      {
        name: "Cancer",
        percentage: 14.08
      },
      {
        name: "Arthritis",
        percentage: 12.68
      },
      {
        name: "Care support for loved ones",
        percentage: 9.86
      },
      {
        name: "Mobility issues",
        percentage: 11.27
      },
      {
        name: "ADHD",
        percentage: 15.49
      },
      {
        name: "Heart attack",
        percentage: 12.68
      },
      {
        name: "Autism",
        percentage: 7.04
      },
      {
        name: "Menopause",
        percentage: 5.63
      },
      {
        name: "Heart disease",
        percentage: 5.63
      },
      {
        name: "Loss of hearing",
        percentage: 9.86
      },
      {
        name: "Attempted suicide",
        percentage: 8.45
      },
      {
        name: "Stroke",
        percentage: 7.04
      },
      {
        name: "I don't know",
        percentage: 7.04
      },
      {
        name: "Chronic fatigue",
        percentage: 7.04
      },
      {
        name: "Epilepsy",
        percentage: 5.63
      },
      {
        name: "Cerebral palsy",
        percentage: 5.63
      },
      {
        name: "Multiple sclerosis",
        percentage: 8.45
      },
      {
        name: "Loss of sight",
        percentage: 2.82
      },
      {
        name: "Parkinson's disease",
        percentage: 5.63
      },
      {
        name: "Dementia/Alzheimer's",
        percentage: 5.63
      },
      {
        name: "Motor neurone disease",
        percentage: 2.82
      },
      {
        name: "Organ failure/Need dialysis",
        percentage: 1.41
      },
      {
        name: "Other (please specify)",
        percentage: 0
      }],
      employeeHealthCareProvision: [
        {
          name: "Mental health support",
          percentage: 30.65
        },
        {
          name: "Health assessments",
          percentage: 27.42
        },
        {
          name: "Support during pregnancy",
          percentage: 20.97
        },
        {
          name: "GP access",
          percentage: 24.19
        },
        {
          name: "Dental treatment",
          percentage: 16.13
        },
        {
          name: "Hospital stays",
          percentage: 20.97
        },
        {
          name: "Gym membership",
          percentage: 20.97
        },
        {
          name: "Physiotherapy",
          percentage: 14.52
        },
        {
          name: "Outpatient treatment",
          percentage: 11.29
        },
        {
          name: "Opticians",
          percentage: 19.35
        },
        {
          name: "Diagnostics",
          percentage: 22.58
        },
        {
          name: "Careers' support",
          percentage: 8.06
        },
      ],
      generationMakeUp: [
        {
          name: 'Generation Z',
          ageGroup: '16-23',
          percentage: 14.08
        },
        {
          name: 'Millennial',
          ageGroup: '24-42',
          percentage: 66.20
        },
        {
          name: 'Generation X',
          ageGroup: '43-54',
          percentage: 43.66
        },
        {
          name: 'Baby boomers',
          ageGroup: '55-73',
          percentage: 8.45
        },
        {
          name: 'Silent generation',
          ageGroup: '74+',
          percentage: 4.23
        }]
    },
    {
      industry: "Healthcare",
      leftStatus: {
        leftDueToHealth: 46.34,
        notLeftDueToHealth: 39.02,
        notSureDueToHealth: 9.76,
      },
      healthWellBeingOffered: 92.68,
      employeeCareByIndustry: {
        careAboutTeam: 82.93,
        increasesProductivity: 43.90,
        dontCare: 0,
      },
      healthWellBeingIssue: [{
        name: "Mental health",
        percentage: 29.27
      },
      {
        name: "No health issues",
        percentage: 9.76
      },
      {
        name: "High blood pressure",
        percentage: 21.95
      },
      {
        name: "Diabetes",
        percentage: 14.63
      },
      {
        name: "Long Covid",
        percentage: 19.51
      },
      {
        name: "Pregnancy loss",
        percentage: 24.39
      },
      {
        name: "Cancer",
        percentage: 9.76
      },
      {
        name: "Arthritis",
        percentage: 12.20
      },
      {
        name: "Care support for loved ones",
        percentage: 21.95
      },
      {
        name: "Mobility issues",
        percentage: 4.88
      },
      {
        name: "ADHD",
        percentage: 12.20
      },
      {
        name: "Heart attack",
        percentage: 2.44
      },
      {
        name: "Autism",
        percentage: 14.63
      },
      {
        name: "Menopause",
        percentage: 9.76
      },
      {
        name: "Heart disease",
        percentage: 17.07
      },
      {
        name: "Loss of hearing",
        percentage: 7.32
      },
      {
        name: "Attempted suicide",
        percentage: 7.32
      },
      {
        name: "Stroke",
        percentage: 9.76
      },
      {
        name: "I don't know",
        percentage: 7.32
      },
      {
        name: "Chronic fatigue",
        percentage: 9.76
      },
      {
        name: "Epilepsy",
        percentage: 2.44
      },
      {
        name: "Cerebral palsy",
        percentage: 2.44
      },
      {
        name: "Multiple sclerosis",
        percentage: 4.88
      },
      {
        name: "Loss of sight",
        percentage: 9.76
      },
      {
        name: "Parkinson's disease",
        percentage: 2.44
      },
      {
        name: "Dementia/Alzheimer's",
        percentage: 2.44
      },
      {
        name: "Motor neurone disease",
        percentage: 4.88
      },
      {
        name: "Organ failure/Need dialysis",
        percentage: 2.44
      },
      {
        name: "Other (please specify)",
        percentage: 0
      }],
      employeeHealthCareProvision: [
        {
          name: "Mental health support",
          percentage: 36.84
        },
        {
          name: "Health assessments",
          percentage: 31.58
        },
        {
          name: "Support during pregnancy",
          percentage: 28.95
        },
        {
          name: "GP access",
          percentage: 7.89
        },
        {
          name: "Dental treatment",
          percentage: 23.68
        },
        {
          name: "Hospital stays",
          percentage: 13.16
        },
        {
          name: "Gym membership",
          percentage: 10.53
        },
        {
          name: "Physiotherapy",
          percentage: 13.16
        },
        {
          name: "Outpatient treatment",
          percentage: 34.21
        },
        {
          name: "Opticians",
          percentage: 18.42
        },
        {
          name: "Diagnostics",
          percentage: 13.16
        },
        {
          name: "Careers' support",
          percentage: 21.05
        },
      ],
      generationMakeUp: [
        {
          name: 'Generation Z',
          ageGroup: '16-23',
          percentage: 14.63
        },
        {
          name: 'Millennial',
          ageGroup: '24-42',
          percentage: 60.98
        },
        {
          name: 'Generation X',
          ageGroup: '43-54',
          percentage: 36.59
        },
        {
          name: 'Baby boomers',
          ageGroup: '55-73',
          percentage: 9.76
        },
        {
          name: 'Silent generation',
          ageGroup: '74+',
          percentage: 7.32
        }]
    },
    {
      industry: "HR",
      leftStatus: {
        leftDueToHealth: 66.67,
        notLeftDueToHealth: 22.22,
        notSureDueToHealth: 0,
      },
      healthWellBeingOffered: 77.78,
      employeeCareByIndustry: {
        careAboutTeam: 77.78,
        increasesProductivity: 22.22,
        dontCare: 11.11,
      },
      healthWellBeingIssue: [{
        name: "Mental health",
        percentage: 22.22
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
        percentage: 33.33
      },
      {
        name: "Pregnancy loss",
        percentage: 44.44
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
        percentage: 22.22
      },
      {
        name: "Mobility issues",
        percentage: 22.22
      },
      {
        name: "ADHD",
        percentage: 11.11
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
        percentage: 11.11
      },
      {
        name: "Heart disease",
        percentage: 22.22
      },
      {
        name: "Loss of hearing",
        percentage: 0
      },
      {
        name: "Attempted suicide",
        percentage: 11.11
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
        percentage: 22.22
      },
      {
        name: "Cerebral palsy",
        percentage: 11.11
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
        percentage: 22.22
      },
      {
        name: "Dementia/Alzheimer's",
        percentage: 0
      },
      {
        name: "Motor neurone disease",
        percentage: 11.11
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
          percentage: 42.86
        },
        {
          name: "Support during pregnancy",
          percentage: 0
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
          percentage: 28.57
        },
        {
          name: "Gym membership",
          percentage: 28.57
        },
        {
          name: "Physiotherapy",
          percentage: 28.57
        },
        {
          name: "Outpatient treatment",
          percentage: 14.29
        },
        {
          name: "Opticians",
          percentage: 28.57
        },
        {
          name: "Diagnostics",
          percentage: 14.29
        },
        {
          name: "Careers' support",
          percentage: 28.57
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
          percentage: 66.67
        },
        {
          name: 'Generation X',
          ageGroup: '43-54',
          percentage: 44.44
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
      industry: "IT & Telecoms",
      leftStatus: {
        leftDueToHealth: 33.33,
        notLeftDueToHealth: 48.15,
        notSureDueToHealth: 12.35,
      },
      healthWellBeingOffered: 83.95,
      employeeCareByIndustry: {
        careAboutTeam: 69.14,
        increasesProductivity: 75.31,
        dontCare: 0,
      },
      healthWellBeingIssue: [{
        name: "Mental health",
        percentage: 25.93
      },
      {
        name: "No health issues",
        percentage: 16.05
      },
      {
        name: "High blood pressure",
        percentage: 17.28
      },
      {
        name: "Diabetes",
        percentage: 13.58
      },
      {
        name: "Long Covid",
        percentage: 16.05
      },
      {
        name: "Pregnancy loss",
        percentage: 14.81
      },
      {
        name: "Cancer",
        percentage: 18.52
      },
      {
        name: "Arthritis",
        percentage: 12.35
      },
      {
        name: "Care support for loved ones",
        percentage: 11.11
      },
      {
        name: "Mobility issues",
        percentage: 14.81
      },
      {
        name: "ADHD",
        percentage: 8.64
      },
      {
        name: "Heart attack",
        percentage: 9.88
      },
      {
        name: "Autism",
        percentage: 11.11
      },
      {
        name: "Menopause",
        percentage: 6.17
      },
      {
        name: "Heart disease",
        percentage: 7.41
      },
      {
        name: "Loss of hearing",
        percentage: 11.11
      },
      {
        name: "Attempted suicide",
        percentage: 3.70
      },
      {
        name: "Stroke",
        percentage: 3.70
      },
      {
        name: "I don't know",
        percentage: 2.47
      },
      {
        name: "Chronic fatigue",
        percentage: 6.17
      },
      {
        name: "Epilepsy",
        percentage: 4.94
      },
      {
        name: "Cerebral palsy",
        percentage: 6.17
      },
      {
        name: "Multiple sclerosis",
        percentage: 4.94
      },
      {
        name: "Loss of sight",
        percentage: 1.23
      },
      {
        name: "Parkinson's disease",
        percentage: 2.47
      },
      {
        name: "Dementia/Alzheimer's",
        percentage: 3.70
      },
      {
        name: "Motor neurone disease",
        percentage: 1.23
      },
      {
        name: "Organ failure/Need dialysis",
        percentage: 2.47
      },
      {
        name: "Other (please specify)",
        percentage: 0
      }],
      employeeHealthCareProvision: [
        {
          name: "Mental health support",
          percentage: 38.24
        },
        {
          name: "Health assessments",
          percentage: 36.76
        },
        {
          name: "Support during pregnancy",
          percentage: 23.53
        },
        {
          name: "GP access",
          percentage: 25
        },
        {
          name: "Dental treatment",
          percentage: 27.94
        },
        {
          name: "Hospital stays",
          percentage: 22.06
        },
        {
          name: "Gym membership",
          percentage: 22.06
        },
        {
          name: "Physiotherapy",
          percentage: 10.29
        },
        {
          name: "Outpatient treatment",
          percentage: 14.71
        },
        {
          name: "Opticians",
          percentage: 11.76
        },
        {
          name: "Diagnostics",
          percentage: 19.12
        },
        {
          name: "Careers' support",
          percentage: 13.24
        },
      ],
      generationMakeUp: [
        {
          name: 'Generation Z',
          ageGroup: '16-23',
          percentage: 16.05
        },
        {
          name: 'Millennial',
          ageGroup: '24-42',
          percentage: 62.96
        },
        {
          name: 'Generation X',
          ageGroup: '43-54',
          percentage: 37.04
        },
        {
          name: 'Baby boomers',
          ageGroup: '55-73',
          percentage: 19.75
        },
        {
          name: 'Silent generation',
          ageGroup: '74+',
          percentage: 4.94
        }]
    },
    {
      industry: "Legal",
      leftStatus: {
        leftDueToHealth: 29.41,
        notLeftDueToHealth: 41.18,
        notSureDueToHealth: 29.41,
      },
      healthWellBeingOffered: 88.24,
      employeeCareByIndustry: {
        careAboutTeam: 76.47,
        increasesProductivity: 70.59,
        dontCare: 0,
      },
      healthWellBeingIssue: [{
        name: "Mental health",
        percentage: 35.29
      },
      {
        name: "No health issues",
        percentage: 5.88
      },
      {
        name: "High blood pressure",
        percentage: 35.29
      },
      {
        name: "Diabetes",
        percentage: 23.53
      },
      {
        name: "Long Covid",
        percentage: 23.53
      },
      {
        name: "Pregnancy loss",
        percentage: 41.18
      },
      {
        name: "Cancer",
        percentage: 23.53
      },
      {
        name: "Arthritis",
        percentage: 17.65
      },
      {
        name: "Care support for loved ones",
        percentage: 29.41
      },
      {
        name: "Mobility issues",
        percentage: 11.76
      },
      {
        name: "ADHD",
        percentage: 17.65
      },
      {
        name: "Heart attack",
        percentage: 29.41
      },
      {
        name: "Autism",
        percentage: 29.41
      },
      {
        name: "Menopause",
        percentage: 23.53
      },
      {
        name: "Heart disease",
        percentage: 23.53
      },
      {
        name: "Loss of hearing",
        percentage: 17.65
      },
      {
        name: "Attempted suicide",
        percentage: 23.53
      },
      {
        name: "Stroke",
        percentage: 23.53
      },
      {
        name: "I don't know",
        percentage: 5.88
      },
      {
        name: "Chronic fatigue",
        percentage: 17.65
      },
      {
        name: "Epilepsy",
        percentage: 29.41
      },
      {
        name: "Cerebral palsy",
        percentage: 17.65
      },
      {
        name: "Multiple sclerosis",
        percentage: 11.76
      },
      {
        name: "Loss of sight",
        percentage: 17.65
      },
      {
        name: "Parkinson's disease",
        percentage: 11.76
      },
      {
        name: "Dementia/Alzheimer's",
        percentage: 11.76
      },
      {
        name: "Motor neurone disease",
        percentage: 11.76
      },
      {
        name: "Organ failure/Need dialysis",
        percentage: 11.76
      },
      {
        name: "Other (please specify)",
        percentage: 0
      }],
      employeeHealthCareProvision: [
        {
          name: "Mental health support",
          percentage: 46.67
        },
        {
          name: "Health assessments",
          percentage: 13.33
        },
        {
          name: "Support during pregnancy",
          percentage: 26.67
        },
        {
          name: "GP access",
          percentage: 20
        },
        {
          name: "Dental treatment",
          percentage: 26.67
        },
        {
          name: "Hospital stays",
          percentage: 40
        },
        {
          name: "Gym membership",
          percentage: 13.33
        },
        {
          name: "Physiotherapy",
          percentage: 13.33
        },
        {
          name: "Outpatient treatment",
          percentage: 13.33
        },
        {
          name: "Opticians",
          percentage: 13.33
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
          percentage: 41.18
        },
        {
          name: 'Baby boomers',
          ageGroup: '55-73',
          percentage: 5.88
        },
        {
          name: 'Silent generation',
          ageGroup: '74+',
          percentage: 11.76
        }]
    },
    {
      industry: "Manufacturing & Utilities",
      leftStatus: {
        leftDueToHealth: 33.33,
        notLeftDueToHealth: 45.83,
        notSureDueToHealth: 12.50,
      },
      healthWellBeingOffered: 75,
      employeeCareByIndustry: {
        careAboutTeam: 79.17,
        increasesProductivity: 75,
        dontCare: 12.50,
      },
      healthWellBeingIssue: [{
        name: "Mental health",
        percentage: 25
      },
      {
        name: "No health issues",
        percentage: 16.67
      },
      {
        name: "High blood pressure",
        percentage: 20.83
      },
      {
        name: "Diabetes",
        percentage: 16.67
      },
      {
        name: "Long Covid",
        percentage: 12.50
      },
      {
        name: "Pregnancy loss",
        percentage: 4.17
      },
      {
        name: "Cancer",
        percentage: 25
      },
      {
        name: "Arthritis",
        percentage: 4.17
      },
      {
        name: "Care support for loved ones",
        percentage: 4.17
      },
      {
        name: "Mobility issues",
        percentage: 4.17
      },
      {
        name: "ADHD",
        percentage: 4.17
      },
      {
        name: "Heart attack",
        percentage: 16.67
      },
      {
        name: "Autism",
        percentage: 4.17
      },
      {
        name: "Menopause",
        percentage: 8.33
      },
      {
        name: "Heart disease",
        percentage: 4.17
      },
      {
        name: "Loss of hearing",
        percentage:8.33
      },
      {
        name: "Attempted suicide",
        percentage: 12.50
      },
      {
        name: "Stroke",
        percentage: 16.67
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
        percentage: 4.17
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
        percentage: 4.17
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
          percentage: 33.33
        },
        {
          name: "Health assessments",
          percentage: 27.78
        },
        {
          name: "Support during pregnancy",
          percentage: 27.78
        },
        {
          name: "GP access",
          percentage: 33.33
        },
        {
          name: "Dental treatment",
          percentage: 16.67
        },
        {
          name: "Hospital stays",
          percentage: 16.67
        },
        {
          name: "Gym membership",
          percentage: 11.11
        },
        {
          name: "Physiotherapy",
          percentage: 11.11
        },
        {
          name: "Outpatient treatment",
          percentage: 27.78
        },
        {
          name: "Opticians",
          percentage: 16.67
        },
        {
          name: "Diagnostics",
          percentage: 16.67
        },
        {
          name: "Careers' support",
          percentage: 16.67
        },
      ],
      generationMakeUp: [
        {
          name: 'Generation Z',
          ageGroup: '16-23',
          percentage: 4.17
        },
        {
          name: 'Millennial',
          ageGroup: '24-42',
          percentage: 75
        },
        {
          name: 'Generation X',
          ageGroup: '43-54',
          percentage: 62.50
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
      industry: "Catering & Leisure",
      leftStatus: {
        leftDueToHealth: 23.75,
        notLeftDueToHealth: 61.25,
        notSureDueToHealth: 8.75,
      },
      healthWellBeingOffered: 58.75,
      employeeCareByIndustry: {
        careAboutTeam: 71.25,
        increasesProductivity: 75,
        dontCare: 1.25,
      },
      healthWellBeingIssue: [{
        name: "Mental health",
        percentage: 28.75
      },
      {
        name: "No health issues",
        percentage: 18.75
      },
      {
        name: "High blood pressure",
        percentage: 11.25
      },
      {
        name: "Diabetes",
        percentage: 13.75
      },
      {
        name: "Long Covid",
        percentage: 10
      },
      {
        name: "Pregnancy loss",
        percentage: 15
      },
      {
        name: "Cancer",
        percentage: 10
      },
      {
        name: "Arthritis",
        percentage: 13.75
      },
      {
        name: "Care support for loved ones",
        percentage: 3.75
      },
      {
        name: "Mobility issues",
        percentage: 7.50
      },
      {
        name: "ADHD",
        percentage: 8.75
      },
      {
        name: "Heart attack",
        percentage: 5
      },
      {
        name: "Autism",
        percentage: 5
      },
      {
        name: "Menopause",
        percentage: 15
      },
      {
        name: "Heart disease",
        percentage: 5
      },
      {
        name: "Loss of hearing",
        percentage: 2.50
      },
      {
        name: "Attempted suicide",
        percentage: 3.75
      },
      {
        name: "Stroke",
        percentage: 3.75
      },
      {
        name: "I don't know",
        percentage: 6.25
      },
      {
        name: "Chronic fatigue",
        percentage: 6.25
      },
      {
        name: "Epilepsy",
        percentage: 3.75
      },
      {
        name: "Cerebral palsy",
        percentage: 0
      },
      {
        name: "Multiple sclerosis",
        percentage: 1.25
      },
      {
        name: "Loss of sight",
        percentage: 2.50
      },
      {
        name: "Parkinson's disease",
        percentage: 1.25
      },
      {
        name: "Dementia/Alzheimer's",
        percentage: 2.50
      },
      {
        name: "Motor neurone disease",
        percentage: 2.50
      },
      {
        name: "Organ failure/Need dialysis",
        percentage: 0
      },
      {
        name: "Other (please specify)",
        percentage: 1.25
      }],
      employeeHealthCareProvision: [
        {
          name: "Mental health support",
          percentage: 38.30
        },
        {
          name: "Health assessments",
          percentage: 23.40
        },
        {
          name: "Support during pregnancy",
          percentage: 27.66
        },
        {
          name: "GP access",
          percentage: 25.53
        },
        {
          name: "Dental treatment",
          percentage: 19.15
        },
        {
          name: "Hospital stays",
          percentage: 17.02
        },
        {
          name: "Gym membership",
          percentage: 31.91
        },
        {
          name: "Physiotherapy",
          percentage: 10.64
        },
        {
          name: "Outpatient treatment",
          percentage: 12.77
        },
        {
          name: "Opticians",
          percentage: 12.77
        },
        {
          name: "Diagnostics",
          percentage: 6.38
        },
        {
          name: "Careers' support",
          percentage: 8.51
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
          percentage: 33.75
        },
        {
          name: 'Baby boomers',
          ageGroup: '55-73',
          percentage: 18.75
        },
        {
          name: 'Silent generation',
          ageGroup: '74+',
          percentage: 0
        }]
    },
    {
      industry: "Sales, Media & Marketing",
      leftStatus: {
        leftDueToHealth: 26.32,
        notLeftDueToHealth: 36.84,
        notSureDueToHealth: 26.32,
      },
      healthWellBeingOffered: 78.95,
      employeeCareByIndustry: {
        careAboutTeam: 78.95,
        increasesProductivity: 73.68,
        dontCare: 0,
      },
      healthWellBeingIssue: [{
        name: "Mental health",
        percentage: 26.32
      },
      {
        name: "No health issues",
        percentage: 10.53
      },
      {
        name: "High blood pressure",
        percentage: 10.53
      },
      {
        name: "Diabetes",
        percentage: 21.05
      },
      {
        name: "Long Covid",
        percentage: 10.53
      },
      {
        name: "Pregnancy loss",
        percentage: 21.05
      },
      {
        name: "Cancer",
        percentage: 5.26
      },
      {
        name: "Arthritis",
        percentage: 15.79
      },
      {
        name: "Care support for loved ones",
        percentage: 10.53
      },
      {
        name: "Mobility issues",
        percentage: 21.05
      },
      {
        name: "ADHD",
        percentage: 15.79
      },
      {
        name: "Heart attack",
        percentage: 15.79
      },
      {
        name: "Autism",
        percentage: 10.53
      },
      {
        name: "Menopause",
        percentage: 15.79
      },
      {
        name: "Heart disease",
        percentage: 10.53
      },
      {
        name: "Loss of hearing",
        percentage: 15.79
      },
      {
        name: "Attempted suicide",
        percentage: 15.79
      },
      {
        name: "Stroke",
        percentage: 10.53
      },
      {
        name: "I don't know",
        percentage: 21.05
      },
      {
        name: "Chronic fatigue",
        percentage: 0
      },
      {
        name: "Epilepsy",
        percentage: 5.26
      },
      {
        name: "Cerebral palsy",
        percentage: 5.26
      },
      {
        name: "Multiple sclerosis",
        percentage: 5.26
      },
      {
        name: "Loss of sight",
        percentage: 10.53
      },
      {
        name: "Parkinson's disease",
        percentage: 0
      },
      {
        name: "Dementia/Alzheimer's",
        percentage: 5.26
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
        percentage: 5.26
      }],
      employeeHealthCareProvision: [
        {
          name: "Mental health support",
          percentage: 40
        },
        {
          name: "Health assessments",
          percentage: 26.67
        },
        {
          name: "Support during pregnancy",
          percentage: 26.67
        },
        {
          name: "GP access",
          percentage: 6.67
        },
        {
          name: "Dental treatment",
          percentage: 26.67
        },
        {
          name: "Hospital stays",
          percentage: 53.33
        },
        {
          name: "Gym membership",
          percentage: 13.33
        },
        {
          name: "Physiotherapy",
          percentage: 20
        },
        {
          name: "Outpatient treatment",
          percentage: 6.67
        },
        {
          name: "Opticians",
          percentage: 13.33
        },
        {
          name: "Diagnostics",
          percentage: 6.67
        },
        {
          name: "Careers' support",
          percentage: 6.67
        },
      ],
      generationMakeUp: [
        {
          name: 'Generation Z',
          ageGroup: '16-23',
          percentage: 26.32
        },
        {
          name: 'Millennial',
          ageGroup: '24-42',
          percentage: 57.89
        },
        {
          name: 'Generation X',
          ageGroup: '43-54',
          percentage: 15.79
        },
        {
          name: 'Baby boomers',
          ageGroup: '55-73',
          percentage: 5.26
        },
        {
          name: 'Silent generation',
          ageGroup: '74+',
          percentage: 10.53
        }]
    },
    {
      industry: "Travel & Transport",
      leftStatus: {
        leftDueToHealth: 28.57,
        notLeftDueToHealth: 50,
        notSureDueToHealth: 21.43,
      },
      healthWellBeingOffered: 35.71,
      employeeCareByIndustry: {
        careAboutTeam: 64.29,
        increasesProductivity: 64.29,
        dontCare: 0,
      },
      healthWellBeingIssue: [{
        name: "Mental health",
        percentage: 28.57
      },
      {
        name: "No health issues",
        percentage: 7.14
      },
      {
        name: "High blood pressure",
        percentage: 7.14
      },
      {
        name: "Diabetes",
        percentage: 28.57
      },
      {
        name: "Long Covid",
        percentage: 28.57
      },
      {
        name: "Pregnancy loss",
        percentage: 7.14
      },
      {
        name: "Cancer",
        percentage: 21.43
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
        percentage: 21.43
      },
      {
        name: "ADHD",
        percentage: 14.29
      },
      {
        name: "Heart attack",
        percentage: 7.14
      },
      {
        name: "Autism",
        percentage: 7.14
      },
      {
        name: "Menopause",
        percentage: 14.29
      },
      {
        name: "Heart disease",
        percentage: 7.14
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
        percentage: 7.14
      },
      {
        name: "I don't know",
        percentage: 7.14
      },
      {
        name: "Chronic fatigue",
        percentage: 0
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
        percentage: 7.14
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
        percentage: 7.14
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
          percentage: 21.43
        },
        {
          name: 'Millennial',
          ageGroup: '24-42',
          percentage: 57.14
        },
        {
          name: 'Generation X',
          ageGroup: '43-54',
          percentage: 50
        },
        {
          name: 'Baby boomers',
          ageGroup: '55-73',
          percentage: 21.43
        },
        {
          name: 'Silent generation',
          ageGroup: '74+',
          percentage: 0
        }]
    },
    {
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