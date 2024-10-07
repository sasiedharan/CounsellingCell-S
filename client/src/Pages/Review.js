export const Review = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-400 via-blue-300 to-indigo-500">
        <h1 className="text-4xl font-bold text-white mb-6">
          User Reviews
        </h1>
  
        <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Recent Reviews
          </h2>
  
          {/* Example of a single review */}
          <div className="mb-6">
            <p className="text-lg text-gray-600 mb-2">
              "The counselling team really helped me through a tough time."
            </p>
            <div className="text-sm text-gray-500">- Anonymous</div>
          </div>
  
          <div className="mb-6">
            <p className="text-lg text-gray-600 mb-2">
              "I appreciated the resources and timely appointments!"
            </p>
            <div className="text-sm text-gray-500">- Student</div>
          </div>
  
          {/* Add more reviews here */}
        </div>
  
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Submit Your Review
          </h2>
          <form>
            <textarea
              className="w-full h-32 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Write your review here..."
            ></textarea>
  
            <button
              type="submit"
              className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    );
  };
  