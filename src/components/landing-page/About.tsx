import { Shield, Zap, Fingerprint } from 'lucide-react';

const features = [
  {
    name: 'Secure',
    description:
      'Our blockchain technology ensures the highest level of security.',
    icon: Shield,
  },
  {
    name: 'Fast',
    description:
      'Real-time tracking and instant verification of medicines throughout the supply chain.',
    icon: Zap,
  },
  {
    name: 'Authentic',
    description:
      'Eliminate counterfeit medicines with our foolproof authentication system.',
    icon: Fingerprint,
  },
];

const About = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            About PharmaChain
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to ensure medicine authenticity
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            PharmaChain uses cutting-edge blockchain technology on the Internet
            Computer Protocol network to create a transparent and secure
            medicine supply chain.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default About;