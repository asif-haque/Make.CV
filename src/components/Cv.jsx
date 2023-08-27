function Cv({ valueGen, valueEd }) {
  return (
    <>
      <h1>{valueGen.name === "" ? "Name" : valueGen.name}</h1>
      <p>
        <b>Contact Info</b>
      </p>
      <p>Email ID: {valueGen.email}</p>
      <p>Phone No.: {valueGen.phone}</p>
      <hr />
      <h2>Education</h2>
      {valueEd.school !== "" && (
        <>
          <h3>
            {valueEd.school}- {valueEd.exam}, {valueEd.passingYear}
          </h3>
          <p>Passed with {valueEd.score}%</p>
        </>
      )}
    </>
  );
}

export default Cv;
