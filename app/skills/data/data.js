import { DiJavascript1, DiPython, DiJava, DiReact, DiNodejs, DiDocker, 
    DiGithub, DiGit, DiMongodb, DiPostgresql, DiMysql, DiHtml5, DiCss3, DiAws, DiTerminal, DiGo, DiNginx } from "react-icons/di";

export const skills = [
    {
      num: '01',
      title: 'Programming Languages',
      icons: [
        { icon: <DiJavascript1 key="js" />, label: 'JavaScript' },
        { icon: <DiPython key="py" />, label: 'Python' },
        { icon: <DiJava key="java" />, label: 'Java' },
        { icon: <DiTerminal key="c" />, label: 'C' },
        { icon: <DiGo key="go" />, label: 'Go' },
      ],
      description: "Proficient in multiple programming languages, enabling flexibility in solving diverse technical problems and building efficient solutions."
    },
    {
      num: '02',
      title: 'Frameworks & Libraries',
      icons: [
        { icon: <DiReact key="react" />, label: 'React' },
        { icon: <DiNodejs key="node" />, label: 'Node.js' },
      ],
      description: "Experienced with modern frameworks and libraries to create dynamic, scalable, and maintainable applications across different platforms.",
    },
    {
      num: '03',
      title: 'Tools & Platforms',
      icons: [
        { icon: <DiGit key="git" />, label: 'Git' },
        { icon: <DiGithub key="github" />, label: 'GitHub' },
        { icon: <DiDocker key="docker" />, label: 'Docker' },
        { icon: <DiAws key="aws" />, label: 'AWS' },
      ],
      description: "Skilled in using essential tools and platforms that streamline development workflows, version control, containerization, and cloud deployment.",
    },
    {
      num: '04',
      title: 'Databases',
      icons: [
        { icon: <DiMongodb key="mongodb" />, label: 'MongoDB' },
        { icon: <DiPostgresql key="postgresql" />, label: 'PostgreSQL' },
        { icon: <DiMysql key="mysql" />, label: 'MySQL' },
      ],
      description: "Knowledgeable in both relational and non-relational databases, capable of designing efficient schemas and managing data at scale.",
    },
    {
      num: '05',
      title: 'Web Technologies',
      icons: [
        { icon: <DiHtml5 key="html5" />, label: 'HTML5' },
        { icon: <DiCss3 key="css3" />, label: 'CSS3' },
      ],
      description: "Strong foundation in web technologies, ensuring responsive, accessible, and standards-compliant front-end development.",
    },
  ];
