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
    },
    {
      num: '02',
      title: 'Frameworks & Libraries',
      icons: [
        { icon: <DiReact key="react" />, label: 'React' },
        { icon: <DiNodejs key="node" />, label: 'Node.js' },
      ],
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
    },
    {
      num: '04',
      title: 'Databases',
      icons: [
        { icon: <DiMongodb key="mongodb" />, label: 'MongoDB' },
        { icon: <DiPostgresql key="postgresql" />, label: 'PostgreSQL' },
        { icon: <DiMysql key="mysql" />, label: 'MySQL' },
      ],
    },
    {
      num: '05',
      title: 'Web Technologies',
      icons: [
        { icon: <DiHtml5 key="html5" />, label: 'HTML5' },
        { icon: <DiCss3 key="css3" />, label: 'CSS3' },
      ],
    },
  ];