import React from 'react';

const KeyFeatures = () => {
    return (
    <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-teal-900 mb-4">Key Features</h2>
                <div className="w-20 h-1 bg-teal-900 mx-auto"></div>
              </div>
    
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <div key={item} className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-900 font-bold">
                        {item}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-teal-900 mb-2">
                        {item === 1 && "Top-quality clay courts"}
                        {item === 2 && "Professional coaching staff"}
                        {item === 3 && "Personalized training programs"}
                        {item === 4 && "Modern facilities and equipment"}
                        {item === 5 && "Video analysis technology"}
                        {item === 6 && "Fitness and conditioning center"}
                        {item === 7 && "Tournament preparation"}
                        {item === 8 && "All skill levels welcome"}
                      </h3>
                      <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua.
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