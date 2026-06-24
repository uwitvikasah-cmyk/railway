# 🇳🇬 NigeriaJobs.ng — 100,000 Job Portal

A full job portal with **100,000 individual job pages** for Nigeria — 50,000 remote + 50,000 on-site jobs.

## Features
- ✅ 100,000 unique job pages (`/jobs/1` → `/jobs/100000`)
- ✅ Every page has: Title, Full Description, Apply Now button
- ✅ JSON-LD JobPosting schema on every single job page (SEO-ready)
- ✅ 50% Remote jobs, 50% On-site jobs across Nigerian states
- ✅ XML Sitemaps (100 sitemap files, 1,000 URLs each)
- ✅ robots.txt
- ✅ Pagination (20 jobs/page → 5,000 listing pages)
- ✅ Apply Now modal form
- ✅ REST API (`/api/jobs`, `/api/jobs/:id`)
- ✅ Zero database needed — all data generated deterministically
- ✅ Gzip compression — fast on Railway free tier

## Deploy to Railway

### Option 1: Deploy from GitHub (Recommended)
1. Push this repo to GitHub
2. Go to [railway.app](https://railway.app)
3. Click **New Project** → **Deploy from GitHub repo**
4. Select your repository
5. Railway auto-detects Node.js and deploys!
6. Go to **Settings** → **Domains** → Generate a domain

### Option 2: Railway CLI
```bash
npm install -g @railway/cli
railway login
railway init
railway up
```

## Local Development
```bash
npm install
npm start
# Open http://localhost:3000
```

## URL Structure
| URL | Description |
|-----|-------------|
| `/` | Home page with featured jobs |
| `/jobs` | All jobs (paginated, 20/page) |
| `/jobs?type=remote` | Remote jobs only |
| `/jobs?type=onsite` | On-site jobs only |
| `/jobs/:id` | Individual job page (1–100,000) |
| `/api/jobs` | JSON API — job listings |
| `/api/jobs/:id` | JSON API — single job + schema |
| `/sitemap.xml` | XML sitemap index |
| `/sitemap-1.xml` | Jobs 1–1,000 |
| `/robots.txt` | robots.txt |

## JSON-LD Schema Example
Every job page includes a `<script type="application/ld+json">` with:
```json
{
  "@context": "https://schema.org/",
  "@type": "JobPosting",
  "title": "Software Engineer",
  "description": "...",
  "datePosted": "2025-05-01",
  "validThrough": "2025-07-30",
  "employmentType": "FULL_TIME",
  "hiringOrganization": { "@type": "Organization", "name": "Flutterwave" },
  "jobLocation": { "@type": "Place", "address": { "addressCountry": "NG" } },
  "jobLocationType": "TELECOMMUTE",
  "applicantLocationRequirements": { "@type": "Country", "name": "Nigeria" }
}
```

## Tech Stack
- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Data**: Deterministic generation (no database, no storage)
- **Deploy**: Railway (free tier works!)
- **Memory**: ~50MB RAM (no data stored in memory)
