import { useState } from "react";
import Cv from "./Cv.jsx";
import EduInfo from "./EduInfo.jsx";
import GenInfo from "./GenInfo.jsx";
import Project from "./Project.jsx";

export default function App() {
  const [valueGen, setvalueGen] = useState({ name: "", email: "", phone: "" });
  const [valueEd, setvalueEd] = useState({
    school: "",
    exam: "",
    passingYear: "",
    score: "",
    college: "",
    degree: "",
    admYear: "",
    passingYearColl: "",
    cgpa: "",
  });
  // const [valueEd, setvalueEd] = useState([]);
  return (
    <>
      <div className="edit-info">
        <GenInfo valueGen={valueGen} setvalueGen={setvalueGen} />
        <EduInfo valueEd={valueEd} setvalueEd={setvalueEd} />
        <Project />
      </div>
      <div className="cv">
        <Cv valueGen={valueGen} valueEd={valueEd} />
      </div>
    </>
  );
}
