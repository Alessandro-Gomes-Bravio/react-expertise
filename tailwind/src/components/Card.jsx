import React from 'react';

const Card = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-md p-7">

        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Diddy Party
          </h1>
        </div>

        <img
          className="w-full rounded-md"
          src="https://www.billboard.com/wp-content/uploads/media/Sean-Combs-50th-Birthday-Bash-dec-14-2019-billboard-1548.jpg?w=942&h=623&crop=1"
          alt="diddy"
        />

        <div className="mt-6 text-center">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Ain't no party like a Diddy party.{' '}
            <span className="text-indigo-600 dark:text-indigo-400">Take advantage of it.</span>
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Unlimited free bottles of baby oil and special guest Meek Mill.
          </p>

          <button className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">
            ACCEPT NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;