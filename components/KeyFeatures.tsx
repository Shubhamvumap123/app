import React from 'react';

interface KeyFeature {
    id: number;
    title: string;
    description: string;
}

const keyFeaturesData: KeyFeature[] = [
    { id: 1, title: "Top-quality clay courts", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 2, title: "Professional coaching staff", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 3, title: "Personalized training programs", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 4, title: "Modern facilities and equipment", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 5, title: "Video analysis technology", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 6, title: "Fitness and conditioning center", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 7, title: "Tournament preparation", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 8, title: "All skill levels welcome", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
];

const KeyFeatures = () => {
    return (
    <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-teal-900 mb-4">Key Features</h2>
                <div className="w-20 h-1 bg-teal-900 mx-auto"></div>
              </div>
    
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                {keyFeaturesData.map((feature) => (
                  <div key={feature.id} className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-900 font-bold">
                        {feature.id}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-teal-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
    );
};

export default KeyFeatures;
