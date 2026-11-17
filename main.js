
const dadosCurriculo = {
  "cv": {
    "metadata": {
      "version": "1.0",
      "language": "pt-BR",
      "lastUpdated": "2026-11-16"
    },
    "personalInformation": {
      "fullName": "Eduardo Guardiano Neto",
      "professionalTitle": "Desenvolvedor em formação",
      "profilePhoto": "",
      "email": "eduardoguardiano321@gmail.com",
      "phone": "+55 11 91704-7579",
      "whatsapp": "+55 11 91704-7579",
      "location": {
        "city": "Suzano",
        "state": "São Paulo",
        "country": "Brasil",
        "address": ""
      },
      "linkedin": "https://linkedin.com",
      "github": "https://github.com",
      "portfolio": "",
      "website": ""
    },
    "professionalSummary": {
      "description": "Estudante de Análise e Desenvolvimento de Sistemas na UNIPIAGET, com foco em desenvolvimento web, programação orientada a objetos e banco de dados. Experiência prática na criação de aplicações utilizando HTML, CSS, JavaScript, Java e SQL.",
      "yearsOfExperience": 0,
      "mainSpecialization": "Desenvolvimento Web",
      "careerObjective": "Estágio ou posição Júnior em Desenvolvimento de Software"
    },
    "professionalExperience": [],
    "educação": [
      {
        "instituição": "Centro Universitário Piaget (UNIPIAGET)",
        "grau": "Tecnólogo",
        "áreaDeEstudo": "Análise e Desenvolvimento de Sistemas",
        "nível": "Ensino Superior",
        "dataDeInício": "",
        "dataDeTérmino": "",
        "atual": true,
        "descrição": "Formação focada em desenvolvimento de sistemas, engenharia de software, banco de dados e programação web."
      }
    ],
    "habilidades": {
      "técnicas": [
        { "nome": "HTML5", "nível": "Intermediário" },
        { "nome": "CSS3", "nível": "Intermediário" },
        { "nome": "JavaScript", "nível": "Básico/Intermediário" },
        { "nome": "Python", "nível": "Básico/Intermediário" },
        { "nome": "SQL", "nível": "Básico/Intermediário" }
      ],
      "comportamentais": [
        "Vontade de aprender",
        "Resolução de problemas",
        "Trabalho em equipe"
      ],
      "ferramentas": [
        "Git",
        "GitHub",
        "VS Code"
      ],
      "metodologias": []
    },
    "idiomas": [
      {
        "nome": "Português",
        "proficiência": "Nativo"
      }
    ],
    "certificações": [],
    "projetos": [
      {
        "nome": "Projeto ADS",
        "descrição": "Projeto acadêmico desenvolvido durante o curso de Análise e Desenvolvimento de Sistemas.",
        "função": "Desenvolvedor",
        "tecnologias": ["JavaScript", "HTML", "CSS"],
        "url": "https://github.com/EduardoGuardiano/Projeto_ADS.git",
        "data de início": "",
        "data de término": ""
      },
      {
        "nome": "Calculadora Web",
        "descrição": "Aplicação web interativa de calculadora desenvolvida para prática de estruturação de interfaces e lógica.",
        "função": "Desenvolvedor",
        "tecnologias": ["HTML", "CSS", "JavaScript"],
        "url": "https://github.com/calculadora",
        "data de início": "",
        "data de término": ""
      }
    ],
    "cursos": [],
    "informaçõesAdicionais": {
      "disponibilidade": "Imediata",
      "modeloDeTrabalho": "Presencial, Híbrido ou Remoto",
      "disponibilidadeDeViagem": false,
      "notasAdicionais": "Estudante do período noturno na UNIPIAGET, com disponibilidade para estagiar ou trabalhar nos períodos da manhã e da tarde."
    },
    "preferências": {
      "posiçõesAlvo": [
        "Estagiário de Desenvolvimento",
        "Desenvolvedor Web Júnior",
        "Desenvolvedor Front-end Júnior"
      ],
      "setoresAlvo": [
        "Tecnologia da Informação",
        "Desenvolvimento de Software"
      ],
      "locaisPreferenciais": [
        "Suzano - SP",
        "Alto Tietê",
        "São Paulo - SP",
        "Hortolândia - SP",
        "Remoto"
      ],
      "modeloDeTrabalhoPreferencial": "Híbrido ou Remoto"
    }
  }
};
function carregarCurriculo() {
  const cv = dadosCurriculo.cv;
  const info = cv.personalInformation;

  document.getElementById("nome").textContent = info.fullName;
  document.getElementById("titulo").textContent = info.professionalTitle;
  document.getElementById("contato").textContent = `${info.email} | ${info.phone} | ${info.location.city} - ${info.location.state}`;
  document.getElementById("resumo").textContent = cv.professionalSummary.description;

  const ulHabilidades = document.getElementById("lista-habilidades");
  cv.habilidades.técnicas.forEach((hab) => {
    const li = document.createElement("li");
    li.textContent = `${hab.nome} (${hab.nível})`;
    ulHabilidades.appendChild(li);
  });

  const divProjetos = document.getElementById("lista-projetos");
  cv.projetos.forEach((projeto) => {
    const card = document.createElement("div");
    card.innerHTML = `
      <h3><a href="${projeto.url}" target="_blank">${projeto.nome}</a></h3>
      <p>${projeto.descrição}</p>
      <small><strong>Tecnologias:</strong> ${projeto.tecnologias.join(", ")}</small>
    `;
    divProjetos.appendChild(card);
  });
}

// Executa a função assim que o HTML terminar de carregar
document.addEventListener("DOMContentLoaded", carregarCurriculo);
