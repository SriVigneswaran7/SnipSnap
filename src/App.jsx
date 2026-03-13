import { useState } from 'react';
import SnippetPreview from './components/SnippetPreview';
import CodeEditor from './components/CodeEditor';

function App() {
  // 1. The memory! This holds the code the user types.
  const [code, setCode] = useState('const buildSnipSnap = () => {\n  console.log("Hello, world!");\n};');

  return (
    <div className="min-h-screen bg-[#030303] text-white flex flex-col items-center py-12 px-6 font-sans">
      <h1 className="text-4xl font-bold tracking-tight mb-2">SnipSnap ✂️</h1>
      <p className="text-gray-400 mb-10">Beautify your code snippets instantly.</p>
      
      <div className="w-full max-w-3xl flex flex-col items-center">
        {/* 2. We pass the memory down to the input box */}
        <CodeEditor code={code} setCode={setCode} />
        
        {/* 3. We pass the SAME memory down to the visual window */}
        <SnippetPreview code={code} />
      </div>
    </div>
  );
}

export default App;