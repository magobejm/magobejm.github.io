import React, { useState } from "react";

const CategoryIcons = {
  "Arquitectura & Estrategia": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[var(--sec)] opacity-70">
      <path d="M19 21H5V9H19V21ZM17 19V11H7V19H17ZM20 7H4V4H20V7ZM21 2H3C2.44772 2 2 2.44772 2 3V8H22V3C22 2.44772 21.5523 2 21 2Z"></path>
    </svg>
  ),
  "Desarrollo Backend & Mobile": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[var(--sec)] opacity-70">
      <path d="M20 4H4V16H20V4ZM21 2C21.5523 2 22 2.44772 22 3V17C22 17.5523 21.5523 18 21 18H13V20H16V22H8V20H11V18H3C2.44772 18 2 17.5523 2 17V3C2 2.44772 2.44772 2 3 2H21Z"></path>
    </svg>
  ),
  "DevOps & Ingeniería": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[var(--sec)] opacity-70">
      <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM13 7V13H11V7H13ZM13 15V17H11V15H13Z"></path>
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "Arquitectura & Estrategia": [
      "Diseño de Arquitecturas Empresariales",
      "Análisis Funcional y Orgánico Senior",
      "Gestión y Coordinación de Equipos Técnicos",
      "Certificación Scrum Master (Agile)",
      "Accesibilidad en Tecnologías (ONCE)",
      "UML y Patrones de Diseño"
    ],
    "Desarrollo Backend & Mobile": [
      "Kotlin & Java (Android Expert)",
      "Spring Framework & Java Enterprise",
      "C, C++ (Sistemas Críticos & Embebidos)",
      "C# & .NET Compact Framework",
      "Oracle, SQL Server & Gestión de Datos",
      "Sistemas de Precisión y Movilidad"
    ],
    "DevOps & Ingeniería": [
      "Docker & Kubernetes (Containerization)",
      "Jenkins & CI/CD Pipelines",
      "Git & GitFlow (Gestión de Código)",
      "Jira & Herramientas de Gestión",
      "Linux & Windows Server",
      "Testing y Aseguramiento de Calidad"
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        Perfil profesional
      </h3>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="pl-1">•</span>
                      <li className="pl-3">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
