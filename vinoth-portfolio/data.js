/*
  ============================================================
  PORTFOLIO CONTENT — edit this file only.
  The page builds every section (BOM panel, stats, projects,
  skills, POCs, education) from the data below.
  ============================================================

  Dates use "YYYY-MM". Leave end as null for ongoing work.

  ADD A NEW PROJECT: copy one block inside `projects`, paste it
  at the end, change the text. The BOM panel, the project count
  and the "Working / Released" badges update by themselves.

  FINISH A PROJECT: set its end date (e.g. end: "2026-12").
  Its badge changes from Working to Released automatically.
*/
window.PORTFOLIO = {
  name: "Vinoth S",
  title: "Software Engineer – Teamcenter PLM / Active Workspace (AWC) Developer",
  email: "vinothvishwa3@gmail.com",
  resumeFile: "Vinoth_S_Resume.pdf",

  // Experience grows automatically: years = baseYears on baseDate, plus time since then.
  experience: { baseYears: 3.6, baseDate: "2026-10" },

  company: { name: "Intelizign Lifecycle Services", short: "Intelizign", role: "Software Engineer, Teamcenter PLM", start: "2023-06" },

  headline: "I build the <em>Teamcenter</em> layer between engineers and their product data.",
  typing: ["Siemens Teamcenter PLM · AWC · ITK C++", "BMIDE · Workflow · SOA services", "KeyTech → Teamcenter data migration", "AI-assisted PLM tooling"],

  summary: [
    "Teamcenter PLM Developer with {years} years of experience delivering Siemens Teamcenter and Active Workspace (AWC) solutions for global manufacturing clients. Skilled in AWC declarative customization, ITK C++ server-side development, BMIDE data modeling, SOA services and workflow handler development.",
    "Experienced in end-to-end KeyTech-to-Teamcenter data migration using Pentaho ETL, CSV2TCXML and TCXML. Builds AI-assisted tools for PLM attribute mapping and report generation."
  ],

  competencies: ["AWC Customization", "ITK Server-Side", "BMIDE Data Modeling", "Workflow Handlers & Extensions", "SOA Services", "XRT & DCP", "Structure Manager / BOM", "Change Management", "Classification", "PLM Data Migration", "AI-Assisted PLM Tools"],

  // Counted for the "Teamcenter versions" stat.
  tcVersions: ["13.3", "14.3", "2406", "2512"],

  skills: [
    { group: "Teamcenter PLM", items: ["Teamcenter 13.3", "Teamcenter 14.3", "Teamcenter 2406", "Teamcenter 2512", "AWC 6.3", "AWC 2406", "AWC 2512"] },
    { group: "Customization", items: ["ITK (C++)", "SOA services", "AWC declarative framework", "View models", "Commands", "Conditions", "Data providers", "XRT stylesheets", "Dynamic Compound Properties", "Workflow handlers", "Pre/post-action extensions"] },
    { group: "Configuration", items: ["BMIDE business objects", "LOVs", "GRM rules", "Naming rules", "Business rules", "Workflow Designer", "Structure Manager", "Change Management", "Classification", "Query Builder", "Access Manager", "ADA License"] },
    { group: "Data migration", items: ["KeyTech to Teamcenter", "SolidWorks (SWIM)", "Pentaho (ETL)", "CSV2TCXML", "TCXML", "MSSQL"] },
    { group: "Programming", items: ["C++", "JavaScript", "SQL", "JSON"] },
    { group: "AI & tools", items: ["Gemini AI integration", "Prompt-based query generation", "AI attribute mapping", "Visual Studio", "VS Code", "JIRA"] }
  ],

  projects: [
    {
      short: "Gore · AWC & ITK",
      title: "Gore Technology: AWC & ITK Customization",
      client: "Gore (USA)", start: "2024-01", end: "2024-10", extra: "Teamcenter Developer",
      points: [
        "Configured BMIDE data model elements including LOVs, GRM relation rules, naming rules and business rules.",
        "Designed XRT stylesheets with Dynamic Compound Properties (DCP) to display child-object properties at parent level.",
        "Developed custom ITK workflow handlers to enforce business rules during workflow execution.",
        "Implemented ITK pre-/post-action extensions to validate Check-In and Check-Out operations.",
        "Built an ITK BOM traversal utility to verify the release status of all child components."
      ],
      tags: ["BMIDE", "XRT / DCP", "ITK C++", "Workflow", "BOM"]
    },
    {
      short: "EzXChange · Goodyear",
      title: "EzXChange: AWC Configuration & Customization",
      client: "Goodyear", start: "2024-11", end: "2025-06", extra: "Teamcenter 14.3, AWC 6.3",
      points: [
        "Delivered end-to-end AWC customization including custom tiles, locations, sublocations and SPLM tables.",
        "Implemented file upload and download through Teamcenter FMS (File Management System).",
        "Customized AWC commands, command panels, lifecycle hooks, conditions and data providers using the declarative framework.",
        "Configured XRT-based dataset content preview and view-to-view data exchange using subPanelContext.",
        "Implemented Dynamic Compound Properties (DCP) and custom icons for business objects and release statuses."
      ],
      tags: ["AWC 6.3", "Declarative framework", "FMS", "XRT", "JavaScript"]
    },
    {
      short: "Multivac · TC 2406",
      title: "Multivac: Teamcenter Implementation & KeyTech Data Migration",
      client: "Multivac", start: "2025-07", end: null, extra: "Teamcenter 2406",
      phases: [
        {
          name: "Development", start: "2025-07", end: "2025-12",
          points: [
            "Prepared the base data model and configured BMIDE business objects and properties.",
            "Configured business rules, GRM relation rules and naming rules in BMIDE.",
            "Developed ITK workflow handlers and extensions for business validations.",
            "Developed ITK customization to update custom BOM line attributes in Structure Manager."
          ]
        },
        {
          name: "Data Migration", start: "2026-01", end: null,
          points: [
            "Migrating CAD data, metadata and non-CAD document datasets from KeyTech PLM to Teamcenter 2406.",
            "Migrating Change Management objects and Classification objects (ICOs) with their attribute values.",
            "Extracting, transforming and validating data using Pentaho Data Integration (ETL) and MSSQL.",
            "Generating and importing TCXML through CSV2TCXML and validating import results."
          ]
        }
      ],
      tags: ["BMIDE", "ITK C++", "Pentaho", "CSV2TCXML", "TCXML", "MSSQL", "Classification"]
    }
  ],

  pocs: [
    { title: "ADA License Management in AWC", text: "A complete AWC module replicating RAC-only ADA license functions: create, modify, delete and assign licenses to users, groups and roles." },
    { title: "AI Migrator", text: "An AI-assisted tool that maps attributes between different PLM systems, reducing manual mapping effort and improving migration accuracy." },
    { title: "Generative Report Builder", text: "Gemini AI turns a prompt into a JSON query, SOA calls fetch the matching Teamcenter objects, and the report builds itself." }
  ],

  education: [
    { name: "Master of Computer Applications (MCA)", year: "2021" },
    { name: "Bachelor of Computer Applications (BCA)", year: "2019" },
    { name: "Higher Secondary", year: "2016" },
    { name: "Secondary (SSLC)", year: "2014" }
  ]
};
