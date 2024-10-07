export const Resource = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-pink-500">
        <h1 className="text-4xl font-bold text-white mb-10">
          Resources
        </h1>
  
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {/* Resource 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mental Health Guide</h2>
            <p className="text-gray-600 mb-4">
              Learn about maintaining mental well-being through various techniques and resources.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
            >
              Read More
            </a>
          </div>
  
          {/* Resource 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Stress Management Techniques</h2>
            <p className="text-gray-600 mb-4">
              Find helpful methods for reducing stress in your daily life.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
            >
              Explore Techniques
            </a>
          </div>
  
          {/* Resource 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Counselling Services Overview</h2>
            <p className="text-gray-600 mb-4">
              Get detailed information about the services offered by the counselling cell.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
            >
              Learn More
            </a>
          </div>
  
          {/* Resource 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mindfulness Exercises</h2>
            <p className="text-gray-600 mb-4">
              Explore mindfulness techniques that can help you focus and calm your mind.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
            >
              Try Exercises
            </a>
          </div>
        </div>
      </div>
    );
  };
  