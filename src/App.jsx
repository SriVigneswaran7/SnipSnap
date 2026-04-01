import { useState, useRef } from 'react';
import { toPng } from 'html-to-image';
import SnippetPreview from './components/SnippetPreview';
import CodeEditor from './components/CodeEditor';
import Toolbar from './components/Toolbar';

function App() {
  const [code, setCode] = useState('const snipSnap = () => {\n  console.log("Crafting clean code...");\n};');
  const [language, setLanguage] = useState('javascript');
  const [theme, setTheme] = useState('dark');
  const [padding, setPadding] = useState('p-12');
  
  const previewRef = useRef(null);

  const downloadImage = async () => {
    if (previewRef.current === null) return;
    try {
      const dataUrl = await toPng(previewRef.current, { cacheBust: true, pixelRatio: 3 });
      const link = document.createElement('a');
      link.download = 'snipsnap-pro.png';
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Failed to generate image', err);
    }
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white flex flex-col items-center py-12 px-6 font-sans relative selection:bg-white/10">
      
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="absolute top-0 left-0 right-0 h-125 bg-linear-to-b from-white/3 to-transparent pointer-events-none"></div>

      {/* Header Section */}
      <div className="text-center z-10 mb-10">
        <h1 className="text-5xl font-bold tracking-tight text-white/90">SnipSnap</h1>
      </div>
      
      <div className="w-full max-w-5xl flex flex-col gap-8 z-10">
        
        {/* Configuration Card */}
        <div className="bg-[#0a0a0a]/80 border border-white/5 rounded-2xl p-6 shadow-2xl backdrop-blur-md">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
            <h2 className="text-white/60 font-bold text-[10px] uppercase tracking-[0.2em]">System Interface</h2>
          </div>

          <Toolbar 
            language={language} setLanguage={setLanguage}
            theme={theme} setTheme={setTheme}
            padding={padding} setPadding={setPadding}
          />
          
          <CodeEditor code={code} setCode={setCode} />

          <button 
            onClick={downloadImage}
            className="w-full mt-8 py-4 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-gray-200 transition-all active:scale-[0.99] shadow-[0_0_30px_rgba(255,255,255,0.05)]"
          >
            Generate Image Asset
          </button>
        </div>

        <SnippetPreview 
          ref={previewRef} 
          code={code} language={language} theme={theme} padding={padding} 
        />
      </div>
    </div>
  );
}

export default App;