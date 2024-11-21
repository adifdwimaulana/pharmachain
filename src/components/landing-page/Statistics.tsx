const stats = [
  { id: 1, name: 'Medicines Tracked', value: '10M+' },
  { id: 2, name: 'Counterfeit Attempts Prevented', value: '99.9%' },
  { id: 3, name: 'Supply Chain Partners', value: '1,000+' },
  { id: 4, name: 'Countries Served', value: '50+' },
];

const Statistics = () => {
  return (
    <div className="bg-indigo-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Trusted by pharmaceutical companies worldwide
          </h2>
          <p className="mt-3 text-xl text-indigo-200 sm:mt-4">
            PharmaChain is making a real impact in the fight against counterfeit
            medicines.
          </p>
        </div>
        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-2 sm:gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col mt-10 sm:mt-0">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
                {stat.name}
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-white">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Statistics;
