export const portfolioData = {
  personal: {
    name: "Ignacio Ferreiro",
    role: "Data Journalist",
    email: "ignc.ferreiro@gmail.com",
    linkedin: "https://linkedin.com/in/igncferreiro", 
    twitter: "https://twitter.com/igncferreiro",
    github: "https://github.com/igncferreiro" // Optional, add if exists
  },
  experience: [
    {
      id: "chequeado",
      role: "Data Journalism Coordinator",
      company: "Chequeado, Buenos Aires, Argentina",
      period: "December 2021 - PRESENT",
      description: [
        "Data Journalism focused on social media content and interactive data-driven news stories.",
        "Analysis of social media metrics to improve the understanding of results and designing new and better strategies.",
        "Worked alongside developers and designers on long-form projects, such as COVID-19 vaccination monitor, PDF scraper (based on R) and daily snapshot of public data.",
        "Conducted UX research for news products like the \"Chequeado AI Assistant.\""
      ]
    },
    {
      id: "a24",
      role: "Data Journalist",
      company: "A24.com (America Group), Buenos Aires, Argentina",
      period: "February 2018 - November 2021",
      description: [
        "Told stories from data at A24.com. In charge of the entire production process: responsible for accessing the data, data cleaning and data analysis (using R, Python or Excel).",
        "Made interactive data visualizations (without coding, using online tools as Flourish or Tableau).",
        "Wrote data-driven news stories and thought the strategic distribution on social media."
      ]
    }
  ],
  projects: [
    {
      id: "ddjj",
      title: "Legislators' Financial Disclosures",
      description: "A comprehensive analysis of assets declared by Argentine deputies and senators. We processed complex filings to make public officials' wealth transparent to citizens.",
      tools: ["R (Scraping)", "Python", "OpenRefine", "Datawrapper"],
      links: [
        { text: "View Deputies Story →", url: "https://chequeado.com/el-explicador/las-declaraciones-juradas-de-los-diputados-nacionales-uno-por-uno-que-patrimonio-declararon-los-legisladores/" },
        { text: "View Senators Story →", url: "https://chequeado.com/el-explicador/las-declaraciones-juradas-de-los-senadores-nacionales-uno-por-uno-que-patrimonio-declararon-los-legisladores/" }
      ],
      gifPlaceholderText: "Financial Disclosures GIF",
      imageSrc: "assets/ddjj-legisladores.gif"
    },
    {
      id: "milei-attacks",
      title: "Tracking Presidential Rhetoric",
      description: "Quantitative analysis of President Javier Milei's discourse. We identified over 1,000 verbal attacks against politicians, journalists, and economists during his first 14 months.",
      tools: ["NLP", "Python", "Social Media Metrics"],
      links: [
        { text: "14-Month Management Study →", url: "https://chequeado.com/el-explicador/el-insulto-en-el-discurso-de-javier-milei-mas-de-mil-agravios-a-politicos-periodistas-y-economistas-en-14-meses-de-gestion/" },
        { text: "Congress Speech Analysis →", url: "https://chequeado.com/el-explicador/un-insulto-cada-100-segundos-el-discurso-de-milei-en-el-congreso-duplico-los-ataques-de-2025/" }
      ],
      gifPlaceholderText: "Discourse Analysis GIF",
      imageSrc: "assets/milei-insultos.gif",
      awardBadge: "ADEPA Award"
    },
    {
      id: "bus-complaints",
      title: "AMBA Public Transport Ranking",
      description: "Analysis of nearly 100 daily complaints against bus lines in the Buenos Aires Metropolitan Area, identifying the most criticized lines and service failures.",
      tools: ["Data Analysis", "Flourish", "Excel"],
      links: [
        { text: "Read Investigation →", url: "https://chequeado.com/el-explicador/casi-100-denuncias-por-dia-contra-los-colectivos-del-amba-el-ranking-de-las-lineas-que-reciben-mas-reclamos-y-los-principales-motivos/" }
      ],
      gifPlaceholderText: "Bus Complaints Ranking GIF",
      imageSrc: "assets/colectivos-amba.gif"
    },
    {
      id: "crime-map",
      title: "Crime Mapping in Buenos Aires",
      description: "Visualizing official crime data to identify hotspots in the city. Awarded by the Global Investigative Journalism Network (GIJN).",
      tools: ["QGIS", "R", "Cartography"],
      links: [
        { text: "View Interactive Map →", url: "https://www.a24.com/actualidad/mapa-delito-zonas-ciudad-mayor-cantidad-episodios-ultimos-anos-01092019_SJcHHtGz4" }
      ],
      gifPlaceholderText: "Crime Map GIF",
      imageSrc: "assets/mapa-delito.gif",
      awardBadge: "GIJN Award"
    },
    {
      id: "measles-vaccination",
      title: "Measles Vaccination Coverage Database",
      description: "Developed the data scraper and generated the database for this investigation authored by Florencia Ballarino. The story revealed that no Argentine province met the PAHO's 95% vaccination coverage recommendation.",
      tools: ["Web Scraping", "Data Engineering", "Database Generation"],
      links: [
        { text: "Read Investigation →", url: "https://chequeado.com/el-explicador/brote-de-sarampion-ninguna-provincia-argentina-llega-al-95-de-cobertura-de-vacuna-triple-viral-como-recomienda-la-ops/" }
      ],
      gifPlaceholderText: "Vaccination Data GIF",
      imageSrc: "assets/measles-vaccination.gif",
      awardBadge: "ADEPA Award"
    },
    {
      id: "macri-advertising",
      title: "Official Advertising in Jorge Macri's Government",
      description: "Developed a scraper to extract public spending data from over 100 official PDF documents. Conducted extensive data cleaning and analysis to reveal the media outlets that benefited the most, and created interactive visualizations.",
      tools: ["PDF Scraping", "Data Cleaning", "Data Analysis", "Flourish"],
      links: [
        { text: "Read Investigation →", url: "https://chequeado.com/investigaciones/la-publicidad-oficial-del-gobierno-de-jorge-macri-quienes-fueron-los-medios-mas-beneficiados/" }
      ],
      gifPlaceholderText: "Official Advertising GIF",
      imageSrc: "assets/macri-publicidad.gif"
    }
  ],
  awards: [
    {
      id: "sip-2024",
      title: "Sociedad Interamericana de Prensa (SIP) – 2024",
      type: "Honorable Mention in Excellence in Journalism",
      category: "Data Visualization",
      work: "La Argentina, en 10 datos claves"
    },
    {
      id: "adepa-2024-milei",
      title: "ADEPA 2024 (Teamwork)",
      type: "Special Mention",
      category: "Digital Journalism",
      work: "El gobierno de Javier Milei: datos sobre el impacto de sus medidas"
    },
    {
      id: "adepa-milei-insults",
      title: "ADEPA",
      type: "Special Mention",
      category: "Multimedia, Infographics and Visual Journalism",
      work: "Insults in Javier Milei’s Discourse: More than a Thousand Attacks on Politicians, Journalists and Economists in 14 Months of Government"
    },
    {
      id: "gijn-crime",
      title: "Global Investigative Journalism Network (GIJN)",
      type: "Featured Story",
      category: "Data Journalism",
      work: "Mapping Buenos Aires' crime hotspots"
    },
    {
      id: "adepa-measles",
      title: "ADEPA",
      type: "Award-Winning Contribution",
      category: "Scientific/Health Journalism",
      work: "Brote de sarampión: ninguna provincia argentina llega al 95% de cobertura de vacuna triple viral (Data Engineering)"
    }
  ]
};
