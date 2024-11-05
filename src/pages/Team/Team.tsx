import teamData from "../Team/team.json";

interface Team {
  id: number;
  name: string;
  image: string;
  title: string;
  detail: string;
}

const Team = () => {
  const teams: Team[] = teamData.teams;
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-center text-3xl font-bold mb-6">Team</h1>
      {teams.map((team) => {
        return (
          <div
            key={team.id}
            className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 m-4 max-w-xs"
          >
            <img src={team.image} alt={team.name} className="mb-2 rounded" />
            <span className="font-semibold text-lg">{team.name}</span>
            <span className="text-gray-500">{team.title}</span>
            <p className="text-gray-600 mt-2">{team.detail}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Team;