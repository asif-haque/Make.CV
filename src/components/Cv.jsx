function Cv({ valueGen, valueEd, projects, skills, exp }) {
  return (
    <div className="cv">
      {/* PERSONAL DETAILS */}
      <h1>{valueGen.name === "" ? "Name" : valueGen.name}</h1>
      <p>Email ID: {valueGen.email}</p>
      <p>Phone No.: {valueGen.phone}</p>
      <hr />
      {/* EDUCATION */}
      <div className="edu">
        <h2>Education</h2>
        {valueEd.school !== "" && (
          <>
            <h3>
              {valueEd.school} - {valueEd.exam}, {valueEd.passingYear}
            </h3>
            <p>Passed with {valueEd.score}%</p>
          </>
        )}
        {valueEd.college !== "" && (
          <>
            <h3>
              {valueEd.college} (
              <span>
                {valueEd.admYear} - {valueEd.passingYearColl}
              </span>
              ) - {valueEd.degree}{" "}
              {valueEd.year !== "" && ", " + valueEd.year + " year"}
            </h3>
            <p>CGPA: {valueEd.cgpa}</p>
          </>
        )}
      </div>
      <hr />
      {/* PROJECT */}
      {projects.length !== 0 && (
        <div className="projects">
          <h2>Projects</h2>
          {projects.map((item) => {
            return (
              <div key={item.id} className="project">
                <a href={item.projectInfo.link}>
                  <b>{item.projectInfo.project}</b>
                </a>
                <div>{item.projectInfo.des}</div>
                {item.projectInfo.github !== "" && (
                  <a href={item.projectInfo.github}>Github Repo</a>
                )}
              </div>
            );
          })}
          <hr />
        </div>
      )}
      {/* Skills */}
      {skills.length !== 0 && (
        <>
          <h2>Skills</h2>
          <ul>
            {skills.map((item) => (
              <li key={item.id}>{item.skill}</li>
            ))}
          </ul>
        </>
      )}
      {/* Experience */}
      {exp.length !== 0 && (
        <div className="exp-block">
          <h2>Experience</h2>
          {exp.map((item) => {
            return (
              <div key={item.id} className="exp">
                {/* put the experience here */}
              </div>
            );
          })}
          <hr />
        </div>
      )}
    </div>
  );
}

export default Cv;
