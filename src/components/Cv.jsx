function Cv({ valueGen, valueEd, valuePr, projects }) {
  return (
    <>
      {/* PERSONAL DETAILS */}
      <h1>{valueGen.name === "" ? "Name" : valueGen.name}</h1>
      <p>
        <b>Contact Info</b>
      </p>
      <p>Email ID: {valueGen.email}</p>
      <p>Phone No.: {valueGen.phone}</p>
      <hr />
      {/* EDUCATION */}
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
      <hr />
      {/* PROJECT */}
      {valuePr.project !== "" && (
        <>
          <h2>Projects</h2>
          {projects.map((item) => {
            return (
              <div>
                <a href={item.link}>
                  <b>{item.project}</b>
                </a>
                <div>{item.des}</div>
                {item.github !== "" && <a href={item.github}>Github Repo</a>}
              </div>
            );
          })}
        </>
      )}
    </>
  );
}

export default Cv;
