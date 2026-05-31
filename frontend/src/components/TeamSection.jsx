import { useState } from "react";

function TeamSection() {
  const [teamMembers, setTeamMembers] = useState([
    {
      name: "John Doe",
      image: "customers/cus1.png",
      role: "Develoeper",
    },
    {
      name: "Emily Smith",
      image: "customers/cus2.png",
      role: "Designer",
    },
    {
      name: "Michael Johnson",
      image: "customers/cus3.png",
      role: "Manager",
    },
    {
      name: "Sub Makkow",
      image: "customers/cus4.png",
      role: "Supervisor",
    },
  ]);

  return (
    <div className="team-section mt-3">
      <div className="team-div mb-4">
        <h5>Team Section</h5>
        <p className="team-text">
          A collective of designers, dreamers, and doers working together to
          redefine retail.
        </p>
      </div>
      <div className="row g-3">
        {teamMembers.map((member, index) => (
          <div className=" col-12 col-sm-6  col-md-3 customer-div" key={index}>
            <div className="customer-card">
              <img
                src={member.image}
                alt="customer-img"
                className="customer-img"
              />
              <h4 className="customer-name">{member.name}</h4>
              <p className="customer-role">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamSection;
