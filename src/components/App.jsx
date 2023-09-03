import { useState } from "react";
import Cv from "./Cv.jsx";
import EduInfo from "./EduInfo.jsx";
import GenInfo from "./GenInfo.jsx";
import Project from "./Project.jsx";
import Skills from "./Skills.jsx";
import NavBar from "./NavBar.jsx";
import Exp from "./Exp.jsx";

export default function App() {
  const [valueGen, setvalueGen] = useState({ name: "", email: "", phone: "" });
  const [valueEd, setvalueEd] = useState({
    school: "",
    exam: "",
    passingYear: "",
    score: "",
    college: "",
    degree: "",
    year: "",
    admYear: "",
    passingYearColl: "",
    cgpa: "",
  });
  const [valuePr, setvaluePr] = useState({
    project: "",
    link: "",
    github: "",
    des: "",
  });
  const [projects, setProjects] = useState([]);
  const [valueSkill, setValueSkill] = useState("");
  const [skills, setSkills] = useState([]);
  const [valueExp, setValueExp] = useState({
    co: "",
    pos: "",
    join: "",
    end: "",
    loc: "",
    des: "",
  });
  const [exp, setExp] = useState([]);

  return (
    <>
      <div className="nav-bar">
        <NavBar />
      </div>
      <div className="main">
        <div className="edit-info">
          <GenInfo valueGen={valueGen} setvalueGen={setvalueGen} />
          <EduInfo valueEd={valueEd} setvalueEd={setvalueEd} />
          <Project
            valuePr={valuePr}
            setvaluePr={setvaluePr}
            projects={projects}
            setProjects={setProjects}
          />
          <Skills
            valueSkill={valueSkill}
            setValueSkill={setValueSkill}
            skills={skills}
            setSkills={setSkills}
          />
          <Exp
            valueExp={valueExp}
            setValueExp={setValueExp}
            exp={exp}
            setExp={setExp}
          />
        </div>
        <Cv
          valueGen={valueGen}
          valueEd={valueEd}
          valuePr={valuePr}
          projects={projects}
          skills={skills}
          exp={exp}
        />
      </div>
      <button id="download" onClick={() => window.print()}>
        Download
      </button>
    </>
  );
}
