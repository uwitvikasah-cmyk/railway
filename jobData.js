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
  "Executive Assistant", "Administrative Officer", "Office Manager", "Receptionist",
  "Video Editor", "Motion Graphics Designer", "Content Strategist", "Brand Manager",
  "Partnerships Manager", "Customer Experience Manager", "Data Engineer", "BI Developer",
  "Scrum Master", "Agile Coach", "Release Manager", "Site Reliability Engineer",
  "Penetration Tester", "Cloud Engineer", "Platform Engineer", "API Developer"
];

// 75 global companies — each gets ~1333 jobs to cover 100,000
const companies = [
  "Netflix", "YouTube", "Delta Airlines", "Southwest Airlines", "American Airlines",
  "Tesla", "Apple", "Amazon", "Google", "Costco",
  "Disney", "United Airlines", "Wayfair", "Starbucks", "Walmart",
  "American Express", "Wells Fargo", "Aetna", "Twitter", "CVS",
  "Hobby Lobby", "Home Depot", "Target", "Yelp", "Crocs",
  "Xbox", "Dell", "Anthem", "LabCorp", "TTEC",
  "Polaris", "UCHealth", "Hulu", "NDT", "Crunchyroll",
  "Eddie Bauer", "USPS", "JetBlue Airlines", "UPS", "Chewy",
  "Automattic", "GitLab", "Zapier", "Shopify", "Buffer",
  "InVision", "Toptal", "Basecamp", "Doist", "HubSpot",
  "Atlassian", "Trello", "CrowdStrike", "Elastic", "Twilio",
  "GitHub", "Dropbox", "LinkedIn", "Upwork", "FlexJobs",
  "GitKraken", "Salesforce", "Slack", "Indeed", "Pinterest",
  "Zendesk", "Squarespace", "Stripe", "WeWork", "Calendly",
  "TaxJar", "Front", "Cloudflare", "Automox", "Veeva Systems",
  "MURAL"
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

const salaryRanges = [
  { display: "₦150,000 – ₦250,000/month", min: 150000, max: 250000 },
  { display: "₦250,000 – ₦400,000/month", min: 250000, max: 400000 },
  { display: "₦400,000 – ₦600,000/month", min: 400000, max: 600000 },
  { display: "₦600,000 – ₦900,000/month", min: 600000, max: 900000 },
  { display: "₦900,000 – ₦1,200,000/month", min: 900000, max: 1200000 },
  { display: "₦1,200,000 – ₦1,800,000/month", min: 1200000, max: 1800000 },
  { display: "₦1,800,000 – ₦2,500,000/month", min: 1800000, max: 2500000 },
  { display: "₦2,500,000+/month", min: 2500000, max: 3500000 },
  { display: "₦80,000 – ₦150,000/month", min: 80000, max: 150000 },
  { display: "₦1,000,000 – ₦1,500,000/month", min: 1000000, max: 1500000 }
];

const jobTypes = ["FULL_TIME", "CONTRACTOR", "PART_TIME", "INTERN", "TEMPORARY"];
const jobTypeDisplay = { "FULL_TIME": "Full-time", "CONTRACTOR": "Contract", "PART_TIME": "Part-time", "INTERN": "Internship", "TEMPORARY": "Temporary" };

// Schema.org valid experience requirements
const experienceLevels = [
  { display: "Entry Level", schema: "no requirements" },
  { display: "Mid Level",   schema: "2 years experience" },
  { display: "Senior Level",schema: "5 years experience" },
  { display: "Lead",        schema: "7 years experience" },
  { display: "Manager",     schema: "5 years experience" },
  { display: "Director",    schema: "8 years experience" },
  { display: "Executive",   schema: "10 years experience" }
];

const industries = [
  "Technology", "Fintech", "E-commerce", "Banking & Finance", "Oil & Gas",
  "Healthcare", "Education", "Consulting", "Manufacturing", "Telecommunications",
  "Media & Entertainment", "FMCG", "Real Estate", "Logistics", "Agriculture"
];

const jobDescriptions = [
  (title, company, isRemote, location) => `We are seeking a talented ${title} to join the global team at ${company}. ${isRemote ? "This is a fully remote role open to qualified candidates across Nigeria." : `This role is based in ${location}.`}

You will be responsible for delivering high-quality work that drives business outcomes and contributes to ${company}'s growing operations. The ideal candidate is self-motivated, detail-oriented, and passionate about making an impact.

Key Responsibilities:
• Lead and execute core ${title.toLowerCase()} functions across the organization
• Collaborate with cross-functional teams to deliver on strategic objectives
• Analyze data and provide actionable insights to improve performance
• Mentor junior team members and contribute to knowledge sharing
• Ensure best practices are followed in all deliverables

Requirements:
• 3–5 years of experience in a similar ${title.toLowerCase()} role
• Strong communication and problem-solving skills
• Experience working in fast-paced global tech/business environment
• Bachelor's degree in a relevant field
• Proficiency with modern tools and platforms

What We Offer:
• Competitive salary in Naira
• Health insurance (HMO) for you and family
• 21 days annual leave
• Remote work allowance
• Annual performance bonus
• Professional development budget`,

  (title, company, isRemote, location) => `${company} is hiring a ${title}! We are a leading global company looking for experienced professionals to scale our impact across Africa.

${isRemote ? "This remote-first position allows you to work from the comfort of your home anywhere in Nigeria, with flexible hours and occasional online standups." : `You will work from our ${location} office with a dynamic, ambitious team.`}

About the Role:
As a ${title} at ${company}, you will play a key role in shaping our products and services. You'll work closely with leadership and peers to execute on our mission.

What You'll Do:
• Drive key ${title.toLowerCase()} initiatives from planning to execution
• Build and maintain relationships with key stakeholders
• Report on KPIs and contribute to strategic planning
• Stay updated on industry trends globally and in Nigeria
• Represent ${company} with professionalism and integrity

What You Bring:
• 2–6 years proven experience as a ${title.toLowerCase()}
• Strong analytical and communication skills
• Team player with a growth mindset
• Relevant certification or degree preferred

Compensation & Benefits:
• Competitive Naira salary • 13th month salary • Annual leave (21 days) • Health insurance • Pension (PFA) • Training budget`,

  (title, company, isRemote, location) => `Join ${company} as a ${title} and be part of one of the world's most exciting companies!

${isRemote ? "🌐 Remote | Work from anywhere in Nigeria" : `📍 ${location}`}

We're building the future and need exceptional talent like you. This is a rare opportunity to work with a globally recognized brand while being based in Nigeria.

The Opportunity:
You'll be taking on the ${title} role at a critical growth stage. Your work will directly impact millions of customers worldwide.

Day-to-Day Responsibilities:
• Execute and improve key workflows within the ${title.toLowerCase()} function
• Collaborate with product, engineering, and business teams globally
• Track metrics and optimize for performance
• Contribute to a culture of excellence and innovation
• Support senior leadership with reporting and strategy

Your Profile:
• 3+ years in ${title.toLowerCase()} or related field
• Comfortable in a fast-moving global tech/business ecosystem
• Strong interpersonal skills and professional work ethic
• Degree in relevant discipline (Master's is a plus)

Perks at ${company}:
Internet allowance | Home office stipend | Flexible hours | Health cover | Stock options | Annual bonus | 21 days leave | Learning budget`
];

function seededRandom(seed) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

function getJobData(id) {
  const seed = id * 7919;
  const r = (offset = 0) => seededRandom(seed + offset);

  const isRemote = id <= TOTAL_JOBS / 2;

  // Assign company: each company gets ~1333 jobs (100000 / 75 companies)
  const companyIndex = Math.floor((id - 1) / Math.ceil(TOTAL_JOBS / companies.length)) % companies.length;

  const titleIndex   = Math.floor(r(1) * jobTitles.length);
  const locationIndex= Math.floor(r(3) * nigeriaLocations.length);
  const salaryIndex  = Math.floor(r(4) * salaryRanges.length);
  const jobTypeIndex = Math.floor(r(5) * jobTypes.length);
  const expIndex     = Math.floor(r(6) * experienceLevels.length);
  const industryIndex= Math.floor(r(7) * industries.length);
  const descIndex    = Math.floor(r(8) * jobDescriptions.length);

  const title    = jobTitles[titleIndex];
  const company  = companies[companyIndex];
  const location = isRemote ? "Remote — Nigeria" : nigeriaLocations[locationIndex];
  const salary   = salaryRanges[salaryIndex];
  const jobType  = jobTypes[jobTypeIndex];
  const exp      = experienceLevels[expIndex];
  const industry = industries[industryIndex];
  const description = jobDescriptions[descIndex](title, company, isRemote, nigeriaLocations[locationIndex]);

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
    salary: salary.display,
    salaryMin: salary.min,
    salaryMax: salary.max,
    jobType,
    jobTypeDisplay: jobTypeDisplay[jobType],
    experience: exp.display,
    experienceSchema: exp.schema,
    industry,
    isRemote,
    description,
    postedDate: postedDate.toISOString().split('T')[0],
    validThrough: validThrough.toISOString().split('T')[0],
    slug: `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${company.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${id}`
  };
}

function getJobSchema(job) {
  const schema = {
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
    "validThrough": `${job.validThrough}T00:00:00Z`,
    "employmentType": job.jobType,
    "hiringOrganization": {
      "@type": "Organization",
      "name": job.company,
      "sameAs": `https://www.google.com/search?q=${encodeURIComponent(job.company)}`
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": job.isRemote ? "Nigeria" : job.location.split(',')[0],
        "addressCountry": "NG"
      }
    },
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "Nigeria"
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "NGN",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": job.salaryMin,
        "maxValue": job.salaryMax,
        "unitText": "MONTH"
      }
    },
    "experienceRequirements": {
      "@type": "OccupationalExperienceRequirements",
      "monthsOfExperience": job.experienceSchema === "no requirements" ? 0
        : parseInt(job.experienceSchema) * 12
    },
    "industry": job.industry,
    "url": `/jobs/${job.id}`,
    "directApply": true
  };

  if (job.isRemote) {
    schema.jobLocationType = "TELECOMMUTE";
  }

  return schema;
}

module.exports = { getJobData, getJobSchema, TOTAL_JOBS, jobTitles, companies, nigeriaLocations, industries };
