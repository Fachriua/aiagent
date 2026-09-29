import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/tasks`).then(res => setTasks(res.data)).catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-indigo-600">TaskHub</h1>
        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">U</div>
      </header>
      
      <main className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tasks.map(task => (
          <div key={task.id} className="bg-white p-4 rounded-[8px] shadow-sm border border-gray-100">
            <h2 className="font-bold">{task.title}</h2>
            <p className="text-gray-600 text-sm mt-1">{task.description}</p>
          </div>
        ))}
      </main>

      <button className="fixed bottom-8 right-8 bg-indigo-600 text-white w-14 h-14 rounded-full shadow-lg hover:scale-105 transition-transform">
        +
      </button>
    </div>
  );
}

export default App;