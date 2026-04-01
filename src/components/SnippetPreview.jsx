import { forwardRef } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark, dracula, github } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const themeMap = {
  dark: atomOneDark,
  dracula: dracula,
  github: github,
};

const SnippetPreview = forwardRef(({ code, language, theme, padding }, ref) => {
  return (
    <div 
      ref={ref} 
      className={`w-full min-h-75 rounded-2xl bg-linear-to-br from-[#111111] to-[#000000] flex items-center justify-center overflow-hidden relative border border-white/5 shadow-2xl`}
    >
      {/* Subtle grain effect */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* The Glass Pane */}
      <div className={`z-10 bg-white/2 backdrop-blur-[20px] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-2xl ${padding} max-w-[92%] w-full`}>
        <div className="text-[14px] leading-relaxed">
          <SyntaxHighlighter
            language={language}
            style={themeMap[theme]}
            customStyle={{
              margin: 0,
              padding: '1rem',
              background: 'transparent',
              borderRadius: '0.75rem'
            }}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
});

export default SnippetPreview;