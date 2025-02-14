import saadphoto from "./images/saadphoto.jpg";
import teams from "../assets/TeamsData.js";
import TeamCard from "./TeamCard.jsx";
import { useState } from "react";

function Team() {
  const [user,setUser] = useState("Tech")
  function handleClick(name){
    setUser(name);
    console.log(name)
  }
  //tech, sponcer ,management , pr, organiser
  const teamsNames = ["Tech", "Sponcer", "Management", "Pr", "Organiser"];
  return (
    <div className="bg-black text-white py-10">
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-4xl font-bold mb-6">Meet Our Team</h1>
        <nav>
          <ul className="flex space-x-4 mb-6">
            {teamsNames.map((name) => (
              <li className="text-xl cursor-pointer hover:underline" onClick={()=>handleClick(name)}  key={name}>
                {name}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="w-1/2 mx-auto flex flex-wrap justify-center gap-10">
        {teams.map((teamMember) => {
          if (teamMember.role === user) {
            return (
              <div className="m-4" key={teamMember.id}>
                <TeamCard
                  image={saadphoto}
                  name={teamMember.name}
                  designation={teamMember.designation}
                  linkedin={teamMember.linkedin}
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
