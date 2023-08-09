import React, { useEffect, useState } from "react";
import TeamCard from "./TeamCard";

const Team = () => {
  const [experts, setExpert] = useState([]);

  useEffect(() => {
    fetch("team.json")
      .then((res) => res.json())
      .then((data) => setExpert(data));
  }, []);

  return (
    <div>
      <div className="text-center mb-4">
        <p className="text-2xl font-bold text-orange-600">Team</p>
        <h2 className="text-4xl font-bold my-2">Meet Our Team</h2>
        <p>
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
          <br />
          or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5">
        {experts.map((expert) => (
          <TeamCard key={expert._id} expert={expert}></TeamCard>
        ))}
      </div>
    </div>
  );
};

export default Team;
