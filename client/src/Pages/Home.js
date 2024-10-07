export const Home = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to the Counselling Cell ....
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-xl text-center">
          We are here to help you with emotional support, guidance, and advice. 
          Feel free to reach out to us at any time.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
          Contact Us
        </button>
      </div>
    );
  };
  