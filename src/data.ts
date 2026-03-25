export const portfolioData = {
  en: {
    personal: {
      name: "Ignacio Ferreiro",
      role: "Data Journalist",
      email: "ignc.ferreiro@gmail.com",
      linkedin: "https://linkedin.com/igncferreiro",
      twitter: "https://twitter.com/igncferreiro",
      github: "https://github.com/igncferreiro"
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
        id: "ux-research-chequeado",
        title: "UX Research: Chequeado AI Assistant",
        description: "Led the user experience research for Chequeado's AI Assistant. Applying my background as an anthropologist, I conducted qualitative interviews and usability testing to understand how journalists and fact-checkers interact with AI tools, ensuring the final product met real user needs.",
        tools: ["UX Research", "Qualitative Interviews", "Usability Testing", "Anthropology"],
        links: [
          { text: "Learn more about the project →", url: "https://chequeado.com/" }
        ],
        gifPlaceholderText: "UX Research Process GIF",
        imageSrc: "assets/ux-research.gif"
      },
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
    ],
    education: [
      {
        id: "uba-anthropology",
        degree: "Social and Cultural Anthropology Licentiate degree (5 year program, similar to MSc)",
        institution: "Universidad de Buenos Aires, Buenos Aires, Argentina",
        period: "January 2015 - October 2025"
      },
      {
        id: "tea-journalism",
        degree: "Journalism BSc",
        institution: "Taller Escuela Agencia (TEA), Buenos Aires, Argentina",
        period: "January 2015 - November 2017"
      },
      {
        id: "pulitzer-ai",
        degree: "AI Spotlight Series",
        institution: "Pulitzer Center",
        period: "2024"
      },
      {
        id: "polis-lse",
        degree: "JournalismAI Academy for Small Newsrooms",
        institution: "Polis (London School of Economics’ media think-tank)",
        period: "2022"
      },
      {
        id: "cuny-meta",
        degree: "News Product Design Sprint",
        institution: "City University of New York (CUNY) & Meta Journalism Project",
        period: "2021"
      }
    ]
  },
  es: {
    personal: {
      name: "Ignacio Ferreiro",
      role: "Periodista de Datos",
      email: "ignc.ferreiro@gmail.com",
      linkedin: "https://linkedin.com/igncferreiro",
      twitter: "https://twitter.com/igncferreiro",
      github: "https://github.com/igncferreiro"
    },
    experience: [
      {
        id: "chequeado",
        role: "Coordinador de Periodismo de Datos",
        company: "Chequeado, Buenos Aires, Argentina",
        period: "Diciembre 2021 - PRESENTE",
        description: [
          "Periodismo de datos enfocado en contenido para redes sociales y notas interactivas basadas en datos.",
          "Análisis de métricas de redes sociales para mejorar la comprensión de los resultados y diseñar nuevas y mejores estrategias.",
          "Trabajo junto a desarrolladores y diseñadores en proyectos a largo plazo, como el monitor de vacunación COVID-19, scraper de PDFs (basado en R) y un resumen diario de datos públicos.",
          "Investigación UX enfocada en productos editoriales, como el Asistente de IA de Chequeado."
        ]
      },
      {
        id: "a24",
        role: "Periodista de Datos",
        company: "A24.com (Grupo América), Buenos Aires, Argentina",
        period: "Febrero 2018 - Noviembre 2021",
        description: [
          "Conté historias a partir de datos en A24.com. A cargo de todo el proceso de producción: responsable de acceder a los datos, limpieza y análisis de datos (usando R, Python o Excel).",
          "Creé visualizaciones de datos interactivas (sin programar, usando herramientas online como Flourish o Tableau).",
          "Escribí notas periodísticas basadas en datos y pensé la distribución estratégica en redes sociales."
        ]
      }
    ],
    projects: [
      {
        id: "ux-research-chequeado",
        title: "UX Research: Asistente de IA de Chequeado",
        description: "Lideré la investigación de experiencia de usuario para el Asistente de IA de Chequeado. Aplicando mi formación como antropólogo, realicé entrevistas cualitativas y pruebas de usabilidad para entender cómo los periodistas y fact-checkers interactúan con herramientas de IA, asegurando que el producto final satisfaga necesidades reales de los usuarios.",
        tools: ["UX Research", "Entrevistas Cualitativas", "Pruebas de Usabilidad", "Antropología"],
        links: [
          { text: "Conocé más sobre el proyecto →", url: "https://chequeado.com/" }
        ],
        gifPlaceholderText: "GIF del Proceso de UX Research",
        imageSrc: "assets/ux-research.gif"
      },
      {
        id: "ddjj",
        title: "Declaraciones Juradas de Legisladores",
        description: "Un análisis exhaustivo de los bienes declarados por diputados y senadores argentinos. Procesamos documentos complejos para transparentar el patrimonio de los funcionarios públicos a los ciudadanos.",
        tools: ["R (Scraping)", "Python", "OpenRefine", "Datawrapper"],
        links: [
          { text: "Ver nota de Diputados →", url: "https://chequeado.com/el-explicador/las-declaraciones-juradas-de-los-diputados-nacionales-uno-por-uno-que-patrimonio-declararon-los-legisladores/" },
          { text: "Ver nota de Senadores →", url: "https://chequeado.com/el-explicador/las-declaraciones-juradas-de-los-senadores-nacionales-uno-por-uno-que-patrimonio-declararon-los-legisladores/" }
        ],
        gifPlaceholderText: "GIF de Declaraciones Juradas",
        imageSrc: "assets/ddjj-legisladores.gif"
      },
      {
        id: "milei-attacks",
        title: "Rastreo del Discurso Presidencial",
        description: "Análisis cuantitativo del discurso del presidente Javier Milei. Identificamos más de 1.000 ataques verbales contra políticos, periodistas y economistas durante sus primeros 14 meses.",
        tools: ["NLP", "Python", "Métricas de Redes Sociales"],
        links: [
          { text: "Estudio de 14 Meses de Gestión →", url: "https://chequeado.com/el-explicador/el-insulto-en-el-discurso-de-javier-milei-mas-de-mil-agravios-a-politicos-periodistas-y-economistas-en-14-meses-de-gestion/" },
          { text: "Análisis del Discurso en el Congreso →", url: "https://chequeado.com/el-explicador/un-insulto-cada-100-segundos-el-discurso-de-milei-en-el-congreso-duplico-los-ataques-de-2025/" }
        ],
        gifPlaceholderText: "GIF de Análisis de Discurso",
        imageSrc: "assets/milei-insultos.gif",
        awardBadge: "Premio ADEPA"
      },
      {
        id: "bus-complaints",
        title: "Ranking de Transporte Público del AMBA",
        description: "Análisis de casi 100 denuncias diarias contra líneas de colectivos en el Área Metropolitana de Buenos Aires, identificando las líneas más criticadas y las fallas del servicio.",
        tools: ["Análisis de Datos", "Flourish", "Excel"],
        links: [
          { text: "Leer Investigación →", url: "https://chequeado.com/el-explicador/casi-100-denuncias-por-dia-contra-los-colectivos-del-amba-el-ranking-de-las-lineas-que-reciben-mas-reclamos-y-los-principales-motivos/" }
        ],
        gifPlaceholderText: "GIF de Ranking de Colectivos",
        imageSrc: "assets/colectivos-amba.gif"
      },
      {
        id: "crime-map",
        title: "Mapa del Delito en Buenos Aires",
        description: "Visualización de datos oficiales de criminalidad para identificar zonas calientes en la ciudad. Premiado por la Global Investigative Journalism Network (GIJN).",
        tools: ["QGIS", "R", "Cartografía"],
        links: [
          { text: "Ver Mapa Interactivo →", url: "https://www.a24.com/actualidad/mapa-delito-zonas-ciudad-mayor-cantidad-episodios-ultimos-anos-01092019_SJcHHtGz4" }
        ],
        gifPlaceholderText: "GIF del Mapa del Delito",
        imageSrc: "assets/mapa-delito.gif",
        awardBadge: "Premio GIJN"
      },
      {
        id: "measles-vaccination",
        title: "Base de Datos de Cobertura de Vacunación contra el Sarampión",
        description: "Desarrollé el scraper de datos y generé la base de datos para esta investigación de Florencia Ballarino. La nota reveló que ninguna provincia argentina cumplía con la recomendación del 95% de cobertura de vacunación de la OPS.",
        tools: ["Web Scraping", "Ingeniería de Datos", "Generación de Base de Datos"],
        links: [
          { text: "Leer Investigación →", url: "https://chequeado.com/el-explicador/brote-de-sarampion-ninguna-provincia-argentina-llega-al-95-de-cobertura-de-vacuna-triple-viral-como-recomienda-la-ops/" }
        ],
        gifPlaceholderText: "GIF de Datos de Vacunación",
        imageSrc: "assets/measles-vaccination.gif",
        awardBadge: "Premio ADEPA"
      },
      {
        id: "macri-advertising",
        title: "Publicidad Oficial en el Gobierno de Jorge Macri",
        description: "Desarrollé un scraper para extraer datos de gasto público de más de 100 documentos PDF oficiales. Realicé una limpieza y análisis exhaustivo de datos para revelar los medios más beneficiados, y creé visualizaciones interactivas.",
        tools: ["Scraping de PDFs", "Limpieza de Datos", "Análisis de Datos", "Flourish"],
        links: [
          { text: "Leer Investigación →", url: "https://chequeado.com/investigaciones/la-publicidad-oficial-del-gobierno-de-jorge-macri-quienes-fueron-los-medios-mas-beneficiados/" }
        ],
        gifPlaceholderText: "GIF de Publicidad Oficial",
        imageSrc: "assets/macri-publicidad.gif"
      }
    ],
    awards: [
      {
        id: "sip-2024",
        title: "Sociedad Interamericana de Prensa (SIP) – 2024",
        type: "Mención de Honor en Excelencia Periodística",
        category: "Visualización de Datos",
        work: "La Argentina, en 10 datos claves"
      },
      {
        id: "adepa-2024-milei",
        title: "ADEPA 2024 (Trabajo en equipo)",
        type: "Mención Especial",
        category: "Periodismo Digital",
        work: "El gobierno de Javier Milei: datos sobre el impacto de sus medidas"
      },
      {
        id: "adepa-milei-insults",
        title: "ADEPA",
        type: "Mención Especial",
        category: "Multimedia, Infografías y Periodismo Visual",
        work: "El insulto en el discurso de Javier Milei: más de mil agravios a políticos, periodistas y economistas en 14 meses de gestión"
      },
      {
        id: "gijn-crime",
        title: "Global Investigative Journalism Network (GIJN)",
        type: "Historia Destacada",
        category: "Periodismo de Datos",
        work: "Mapeo de zonas calientes del delito en Buenos Aires"
      },
      {
        id: "adepa-measles",
        title: "ADEPA",
        type: "Contribución Premiada",
        category: "Periodismo Científico/Salud",
        work: "Brote de sarampión: ninguna provincia argentina llega al 95% de cobertura de vacuna triple viral (Ingeniería de Datos)"
      }
    ],
    education: [
      {
        id: "uba-anthropology",
        degree: "Licenciatura en Ciencias Antropológicas (Programa de 5 años, similar a MSc)",
        institution: "Universidad de Buenos Aires, Buenos Aires, Argentina",
        period: "Enero 2015 - Octubre 2025"
      },
      {
        id: "tea-journalism",
        degree: "Tecnicatura en Periodismo",
        institution: "Taller Escuela Agencia (TEA), Buenos Aires, Argentina",
        period: "Enero 2015 - Noviembre 2017"
      },
      {
        id: "pulitzer-ai",
        degree: "AI Spotlight Series",
        institution: "Pulitzer Center",
        period: "2024"
      },
      {
        id: "polis-lse",
        degree: "JournalismAI Academy for Small Newsrooms",
        institution: "Polis (London School of Economics’ media think-tank)",
        period: "2022"
      },
      {
        id: "cuny-meta",
        degree: "News Product Design Sprint",
        institution: "City University of New York (CUNY) & Meta Journalism Project",
        period: "2021"
      }
    ]
  }
};
