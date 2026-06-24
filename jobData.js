// Job data generator - deterministically generates 100,000 jobs
const TOTAL_JOBS = 100000;

const jobTitles = [
  "Software Engineer", "Frontend Developer", "Backend Developer", "Full Stack Developer",
  "Data Analyst", "Data Scientist", "Machine Learning Engineer", "DevOps Engineer",
  "Cloud Architect", "Mobile Developer", "Android Developer", "iOS Developer",
  "Product Manager", "Project Manager", "Scrum Master", "Business Analyst",
  "UI/UX Designer", "Graphic Designer", "Brand Designer", "Web Designer",
  "Marketing Manager", "Digital Marketing Specialist", "SEO Specialist", "Content Writer",
  "Copywriter", "Social Media Manager", "Community Manager", "Growth Hacker",
  "Sales Manager", "Account Manager", "Business Development Manager", "Sales Executive",
  "Financial Analyst", "Accountant", "Finance Manager", "Auditor",
  "HR Manager", "HR Generalist", "Recruiter", "Talent Acquisition Specialist",
  "Operations Manager", "Supply Chain Manager", "Logistics Coordinator", "Procurement Officer",
  "Customer Success Manager", "Customer Support Specialist", "Technical Support Engineer",
  "Network Engineer", "Cybersecurity Analyst", "Information Security Officer",
  "Database Administrator", "Systems Administrator", "IT Manager", "CTO",
  "Legal Counsel", "Compliance Officer", "Risk Manager", "Contract Manager",
  "Healthcare Administrator", "Clinical Research Associate", "Pharmacist", "Nurse",
  "Teacher", "Education Consultant", "Instructional Designer", "Training Manager",
  "Civil Engineer", "Mechanical Engineer", "Electrical Engineer", "Structural Engineer",
  "Architect", "Urban Planner", "Environmental Consultant", "Safety Officer",
  "Agricultural Officer", "Food Technologist", "Quality Assurance Engineer", "QA Tester",
  "Research Analyst", "Policy Analyst", "Communications Manager", "Public Relations Officer",
  "Executive Assistant", "Administrative Officer", "Office Manager", "Receptionist"
];

const companies = [
  "Flutterwave", "Paystack", "Interswitch", "Konga", "Jumia Nigeria", "Andela",
  "Cowrywise", "PiggyVest", "Carbon Finance", "TeamApt", "Opay", "PalmPay",
  "Moove Africa", "Kobo360", "Trella", "MAX.ng", "Gokada", "Patricia",
  "Bamboo Invest", "Risevest", "Chaka Technologies", "Buycoins", "Bundle Africa",
  "Aza Finance", "Lidya", "Kiakia", "FairMoney", "Mines.io", "OneFi",
  "GetEquity", "Investors King", "Norebase", "Seamfix", "SystemSpecs",
  "Softcom", "eProcess International", "CWG Plc", "Inlaks", "MainOne",
  "Rack Centre", "IHS Towers", "MTN Nigeria", "Airtel Nigeria", "Glo Nigeria",
  "9mobile", "Microsoft Nigeria", "Google Nigeria", "IBM Nigeria", "Oracle Nigeria",
  "SAP Nigeria", "Cisco Nigeria", "Dell Nigeria", "HP Nigeria", "Intel Nigeria",
  "Chevron Nigeria", "Shell Nigeria", "Total Energies Nigeria", "Oando", "Seplat",
  "Dangote Group", "BUA Group", "Aliko Farms", "Flour Mills Nigeria", "UAC Foods",
  "Access Bank", "Zenith Bank", "GTBank", "First Bank", "UBA", "Fidelity Bank",
  "Sterling Bank", "Union Bank", "Wema Bank", "Polaris Bank", "FCMB",
  "Stanbic IBTC", "Standard Chartered Nigeria", "Citibank Nigeria", "Ecobank Nigeria",
  "Unilever Nigeria", "Nestle Nigeria", "Nigerian Breweries", "Guinness Nigeria",
  "PZ Cussons Nigeria", "Procter & Gamble Nigeria", "GlaxoSmithKline Nigeria",
  "Pfizer Nigeria", "Roche Nigeria", "Abbott Nigeria", "Johnson & Johnson Nigeria",
  "Lagos Business School", "Covenant University", "University of Lagos", "UI Consulting",
  "Deloitte Nigeria", "KPMG Nigeria", "PwC Nigeria", "EY Nigeria", "McKinsey Nigeria",
  "BCG Nigeria", "Accenture Nigeria", "Capgemini Nigeria", "Infosys Nigeria"
];

const nigeriaLocations = [
  "Lagos, Lagos State", "Abuja, FCT", "Port Harcourt, Rivers State", "Kano, Kano State",
  "Ibadan, Oyo State", "Enugu, Enugu State", "Kaduna, Kaduna State", "Benin City, Edo State",
  "Maiduguri, Borno State", "Zaria, Kaduna State", "Aba, Abia State", "Jos, Plateau State",
  "Ilorin, Kwara State", "Onitsha, Anambra State", "Warri, Delta State", "Calabar, Cross River State",
  "Uyo, Akwa Ibom State", "Owerri, Imo State", "Abeokuta, Ogun State", "Asaba, Delta State",
  "Makurdi, Benue State", "Yola, Adamawa State", "Sokoto, Sokoto State", "Bauchi, Bauchi State",
  "Victoria Island, Lagos", "Lekki, Lagos", "Ikeja, Lagos", "Surulere, Lagos",
  "Yaba, Lagos", "Ajah, Lagos", "Garki, Abuja", "Wuse, Abuja", "Maitama, Abuja",
  "Gwarinpa, Abuja", "Lokoja, Kogi State", "Akure, Ondo State", "Ado-Ekiti, Ekiti State",
  "Osogbo, Osun State", "Lafia, Nasarawa State", "Dutse, Jigawa State"
];

const remoteBenefits = [
  "Flexible working hours", "Home office stipend", "Remote work allowance",
  "Global team collaboration", "Work from anywhere in Nigeria", "Digital nomad friendly",
  "Async-first culture", "Quarterly team retreats", "Internet allowance",
  "Coworking space access"
];

const officeBenefits = [
  "Modern office environment", "Free lunch daily", "Health insurance (HMO)",
  "Transportation allowance", "Gym membership", "Company phone",
  "Training & development budget", "Annual performance bonus", "Pension (PFA)",
  "Team outings & events"
];

const commonBenefits = [
  "Competitive salary in Naira", "13th month salary", "Annual leave (21 days)",
  "Professional development", "Life insurance", "Collaborative culture",
  "Fast career growth", "Equity/stock options", "Housing allowance",
  "Medical cover for family"
];

const jobDescriptions = [
  (title, company, isRemote, location) => `We are seeking a talented ${title} to join our team at ${company}. ${isRemote ? "This is a fully remote role open to candidates across Nigeria." : `This role is based in ${location}.`}

You will be responsible for delivering high-quality work that drives business outcomes and contributes to our growing operations in Nigeria. The ideal candidate is self-motivated, detail-oriented, and passionate about making an impact.

Key Responsibilities:
• Lead and execute core ${title.toLowerCase()} functions across the organization
• Collaborate with cross-functional teams to deliver on strategic objectives
• Analyze data and provide actionable insights to improve performance
• Mentor junior team members and contribute to knowledge sharing
• Ensure best practices are followed in all deliverables

Requirements:
• 3–5 years of experience in a similar ${title.toLowerCase()} role
• Strong communication and problem-solving skills
• Experience working in fast-paced Nigerian or African tech/business environment
• Bachelor's degree in a relevant field
• Proficiency with modern tools and platforms

What We Offer:
${(isRemote ? remoteBenefits : officeBenefits).slice(0, 3).join(", ")}, ${commonBenefits.slice(0, 3).join(", ")}.`,

  (title, company, isRemote, location) => `${company} is hiring a ${title}! We are a leading company in Nigeria looking for experienced professionals to scale our impact across Africa.

${isRemote ? "This remote-first position allows you to work from the comfort of your home anywhere in Nigeria, with occasional online standups." : `You will work from our ${location} office with a dynamic, ambitious team.`}

About the Role:
As a ${title}, you will play a key role in shaping our products and services. You'll work closely with leadership and peers to execute on our mission.

What You'll Do:
• Drive key ${title.toLowerCase()} initiatives from planning to execution
• Build and maintain relationships with key stakeholders
• Report on KPIs and contribute to strategic planning
• Stay updated on industry trends in Nigeria and globally
• Represent ${company} with professionalism and integrity

What You Bring:
• 2–6 years proven experience as a ${title.toLowerCase()}
• Strong analytical and communication skills
• Ability to thrive in Nigeria's dynamic business environment
• Team player with a growth mindset
• Relevant certification or degree preferred

Compensation & Benefits:
${commonBenefits.slice(0, 4).join(" • ")}`,

  (title, company, isRemote, location) => `Join ${company} as a ${title} and be part of Nigeria's most exciting growth story!

${isRemote ? "🌐 Remote | Work from anywhere in Nigeria" : `📍 ${location}`}

We're building the future of business in Africa and need exceptional talent like you. This is a rare opportunity to make a real difference while growing your career.

The Opportunity:
You'll be taking on the ${title} role at a critical growth stage. Your work will directly impact thousands of Nigerian customers and businesses.

Day-to-Day Responsibilities:
• Execute and improve key workflows within the ${title.toLowerCase()} function
• Collaborate with product, engineering, and business teams
• Track metrics and optimize for performance
• Contribute to a culture of excellence and innovation
• Support senior leadership with reporting and strategy

Your Profile:
• 3+ years in ${title.toLowerCase()} or related field
• Comfortable in Nigeria's fast-moving tech/business ecosystem
• Strong interpersonal skills and professional work ethic
• Degree in relevant discipline (Master's is a plus)
• Experience with modern SaaS tools

Perks at ${company}:
${[...(isRemote ? remoteBenefits : officeBenefits).slice(0, 2), ...commonBenefits.slice(0, 4)].join(" | ")}`
];

const salaryRanges = [
  "₦150,000 – ₦250,000/month", "₦250,000 – ₦400,000/month",
  "₦400,000 – ₦600,000/month", "₦600,000 – ₦900,000/month",
  "₦900,000 – ₦1,200,000/month", "₦1,200,000 – ₦1,800,000/month",
  "₦1,800,000 – ₦2,500,000/month", "₦2,500,000+/month",
  "Competitive (based on experience)", "₦80,000 – ₦150,000/month"
];

const jobTypes = ["Full-time", "Contract", "Part-time", "Internship", "Freelance"];
const experienceLevels = ["Entry Level", "Mid Level", "Senior Level", "Lead", "Manager", "Director", "Executive"];
const industries = [
  "Technology", "Fintech", "E-commerce", "Banking & Finance", "Oil & Gas",
  "Healthcare", "Education", "Consulting", "Manufacturing", "Telecommunications",
  "Media & Entertainment", "FMCG", "Real Estate", "Logistics", "Agriculture"
];

function seededRandom(seed) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

function getJobData(id) {
  const seed = id * 7919;
  const r = (offset = 0) => seededRandom(seed + offset);

  const isRemote = id <= TOTAL_JOBS / 2;
  const titleIndex = Math.floor(r(1) * jobTitles.length);
  const companyIndex = Math.floor(r(2) * companies.length);
  const locationIndex = Math.floor(r(3) * nigeriaLocations.length);
  const salaryIndex = Math.floor(r(4) * salaryRanges.length);
  const jobTypeIndex = Math.floor(r(5) * jobTypes.length);
  const expIndex = Math.floor(r(6) * experienceLevels.length);
  const industryIndex = Math.floor(r(7) * industries.length);
  const descIndex = Math.floor(r(8) * jobDescriptions.length);

  const title = jobTitles[titleIndex];
  const company = companies[companyIndex];
  const location = isRemote ? "Remote — Nigeria" : nigeriaLocations[locationIndex];
  const salary = salaryRanges[salaryIndex];
  const jobType = jobTypes[jobTypeIndex];
  const experience = experienceLevels[expIndex];
  const industry = industries[industryIndex];
  const description = jobDescriptions[descIndex](title, company, isRemote, nigeriaLocations[locationIndex]);

  // Generate a posting date within last 60 days
  const daysAgo = Math.floor(r(9) * 60);
  const postedDate = new Date();
  postedDate.setDate(postedDate.getDate() - daysAgo);
  const validThrough = new Date(postedDate);
  validThrough.setDate(validThrough.getDate() + 90);

  return {
    id,
    title,
    company,
    location,
    salary,
    jobType,
    experience,
    industry,
    isRemote,
    description,
    postedDate: postedDate.toISOString().split('T')[0],
    validThrough: validThrough.toISOString().split('T')[0],
    slug: `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${company.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${id}`
  };
}

function getJobSchema(job) {
  return {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.description,
    "identifier": {
      "@type": "PropertyValue",
      "name": job.company,
      "value": `JOB-NG-${String(job.id).padStart(6, '0')}`
    },
    "datePosted": job.postedDate,
    "validThrough": job.validThrough,
    "employmentType": job.jobType.toUpperCase().replace('-', '_'),
    "hiringOrganization": {
      "@type": "Organization",
      "name": job.company,
      "sameAs": `https://www.google.com/search?q=${encodeURIComponent(job.company)}`
    },
    "jobLocation": job.isRemote ? {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "NG"
      }
    } : {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": job.location.split(',')[0],
        "addressCountry": "NG"
      }
    },
    "jobLocationType": job.isRemote ? "TELECOMMUTE" : undefined,
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "Nigeria"
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "NGN",
      "value": {
        "@type": "QuantitativeValue",
        "unitText": "MONTH"
      }
    },
    "experienceRequirements": job.experience,
    "industry": job.industry,
    "url": `/jobs/${job.id}`
  };
}

module.exports = { getJobData, getJobSchema, TOTAL_JOBS, jobTitles, companies, nigeriaLocations, industries };
