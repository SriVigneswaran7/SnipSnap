import { useState, useRef } from 'react';
import { toPng } from 'html-to-image'; // The image export plugin!
import SnippetPreview from './components/SnippetPreview';
import CodeEditor from './components/CodeEditor';
import Toolbar from './components/Toolbar';

function App() {
  // All our app's memory (states)
  const [code, setCode] = useState('const buildSnipSnap = () => {\n  console.log("Hello, world!");\n};');
  const [language, setLanguage] = useState('javascript');
  const [theme, setTheme] = useState('dark');
  const [padding, setPadding] = useState('p-8');
  
  // The 'camera lens'. We point this at the SnippetPreview.
  const previewRef = useRef(null);

  // The function that takes the picture and downloads it
  const downloadImage = async () => {
    if (previewRef.current === null) return;
    
    try {
      // Takes a high-res PNG snapshot of the component
      const dataUrl = await toPng(previewRef.current, { cacheBust: true, pixelRatio: 2 });
      
      // Creates a fake download link and clicks it automatically
      const link = document.createElement('a');
      link.download = 'snipsnap-code.png';
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Failed to generate image', err);
    }
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white flex flex-col items-center py-12 px-6 font-sans">
      <h1 className="text-4xl font-bold tracking-tight mb-2">SnipSnap ✂️</h1>
      <p className="text-gray-400 mb-10">Beautify your code snippets instantly.</p>
      
      <div className="w-full max-w-3xl flex flex-col items-center">
        
        <Toolbar 
          language={language} setLanguage={setLanguage}
          theme={theme} setTheme={setTheme}
          padding={padding} setPadding={setPadding}
        />
        
        <CodeEditor code={code} setCode={setCode} />
        
        <SnippetPreview 
          ref={previewRef} 
          code={code} 
          language={language} 
          theme={theme} 
          padding={padding} 
        />

        <button 
          onClick={downloadImage}
          className="mt-10 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]"
        >
          Download High-Res PNG
        </button>

      </div>
    </div>
  );
}

export default App;