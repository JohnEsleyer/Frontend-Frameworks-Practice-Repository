import React from 'react';

const App = () => {
  return (
    <div className="container mx-auto py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          My Website
        </h1>
      </header>
      <nav className="flex items-center justify-between mb-8">
        <a className="text-lg font-bold text-blue-700 hover:underline" href="/">Home</a>
        <a className="text-lg font-bold text-blue-700 hover:underline" href="/about">About</a>
        <a className="text-lg font-bold text-blue-700 hover:underline" href="/contact">Contact</a>
      </nav>
      <main>
        <p className="text-xl text-gray-800 mb-4">Welcome to my website!</p>
        <p className="text-lg text-gray-700 mb-8">Here you can find information about me, my projects, and my blog.</p>
        <div className="bg-gray-300 rounded-lg p-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Featured Project</h2>
          <p className="text-lg text-gray-700 mb-2">Project Name:</p>
          <p className="text-lg font-bold text-gray-800 mb-4">My Awesome App</p>
          <p className="text-lg text-gray-700 mb-2">Description:</p>
          <p className="text-lg text-gray-800">A super cool app that does amazing things</p>
        </div>
      </main>
      <footer className="border-t border-gray-300 pt-4 mt-8 text-cente text-xs text-gray-600">
        &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default App;