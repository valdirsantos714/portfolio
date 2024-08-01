const tudo = ["React: desenvolvendo com JavaScript,Spring Boot 3: aplique boas práticas e proteja uma API Rest, React: construindo componentes com JSX,JavaScript: conhecendo arrays,React: construíndo componentes com JSX,React: desenvolvendo em React Router com JavaScript,PostgreSQL: desenvolva com PL/pgSQL Java: consumindo API gravando arquivos e lidando com erros, JavaScript: programando a Orientação a Objetos, JavaScript: validações e reconhecimento de voz, Lógica de programação: mergulhe em programação com JavaScript, Html e CSS: Responsividade com Mobile-First, CSS: Flexbox e Layouts Responsivos,HTML E CSS: Trabalhando com Responsividade e Publicação de Projetos, PostgreSQL"]

const listaDividida = tudo[0].split(",")

for (let i = 1; i < tudo.length; i++) {
    cursosAlura.push({id: i, nomeCurso: listaDividida[i]});
}

export const cursosAlura = ["React: desenvolvendo com JavaScript,Spring Boot 3: aplique boas práticas e proteja uma API Rest, React: construindo componentes com JSX,JavaScript: conhecendo arrays,React: construíndo componentes com JSX,React: desenvolvendo em React Router com JavaScript,PostgreSQL: desenvolva com PL/pgSQL Java: consumindo API gravando arquivos e lidando com erros, JavaScript: programando a Orientação a Objetos, JavaScript: validações e reconhecimento de voz, Lógica de programação: mergulhe em programação com JavaScript, Html e CSS: Responsividade com Mobile-First, CSS: Flexbox e Layouts Responsivos,HTML E CSS: Trabalhando com Responsividade e Publicação de Projetos, PostgreSQL"]



