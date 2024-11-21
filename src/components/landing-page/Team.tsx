const people = [
  {
    name: 'Adif Maulana',
    role: 'Software Engineer',
    imageUrl: '',
  },
  {
    name: 'Muhammad Fitrayuda',
    role: 'Software Engineer',
    imageUrl: '',
  },
  {
    name: 'Hardefa Rogonondo',
    role: 'Data Scientist',
    imageUrl: '',
  },
];

const Team = () => {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              Meet our team
            </h2>
            <p className="text-xl text-gray-300">
              Our team is dedicated to revolutionizing the pharmaceutical supply
              chain with blockchain technology.
            </p>
          </div>
          <ul className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
            {people.map((person) => (
              <li
                key={person.name}
                className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left"
              >
                <div className="space-y-6 xl:space-y-10">
                  <img
                    className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                    <div className="font-medium text-lg leading-6 space-y-1">
                      <h3 className="text-white">{person.name}</h3>
                      <p className="text-indigo-400">{person.role}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Team;
