import saadphoto from "./images/saadphoto.jpg";
import teams from "../assets/TeamsData.js";
import TeamCard from "./TeamCard.jsx";
import { useState } from "react";

function Team() {
  const [user, setUser] = useState("Tech");
  function handleClick(name) {
    setUser(name);
    
  }
  //tech, sponcer ,management , pr, organiser
  const teamsNames = ["Organiser", "PR & Social Media", "Tech"];
  return (
    <div id="team" className="bg-black text-white m-10 py-10">
      <div className="flex flex-col items-center  mt-10">
        <h1 className="text-5xl font-bold mb-6  font-serif">
          Meet Our Team
        </h1>

        <ul className="flex space-x-4 mb-6">
          {teamsNames.map((name) => (
            <li
              className={`  mt-10 mb-10 text-3xl cursor-pointer font-serif p-2  ${
                user === name
                  ? "bg-slate-500 rounded-lg"
                  : "hover:rounded-lg  hover:bg-slate-300"
              }`}
              onClick={() => handleClick(name)}
              key={name}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-3/4 mx-auto flex flex-wrap justify-center gap-10">
        {teams.map((teamMember) => {
          if (teamMember.role === user) {
            return (
              <div className="m-4 " key={teamMember.id}>
                <TeamCard
                  image={saadphoto}
                  name={teamMember.name}
                  designation={teamMember.designation}
                  linkedin={teamMember.linkdin}
                  github={teamMember.github}
                />
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default Team;
