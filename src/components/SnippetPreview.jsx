import { forwardRef } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
// We import three distinct themes for our dropdown
import { atomOneDark, dracula, github } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// A dictionary to map our string state to the actual theme objects
const themeMap = {
  dark: atomOneDark,
  dracula: dracula,
  github: github,
};

// We use forwardRef so the Boss (App.jsx) can point a camera at this exact component
const SnippetPreview = forwardRef(({ code, language, theme, padding }, ref) => {
  return (
    // We attach the 'ref' here. Everything inside this div gets captured in the screenshot!
    // Notice how we inject the dynamic `padding` state right into the Tailwind classes.
    <div 
      ref={ref} 
      className={`w-full ${padding} rounded-2xl bg-linear-to-br from-purple-500 via-violet-600 to-indigo-700 shadow-2xl flex items-center justify-center`}
    >
      <div className="w-full max-w-2xl bg-[#1e1e1e] rounded-xl shadow-2xl overflow-hidden border border-gray-700/50">
        
        {/* macOS Header */}
        <div className="flex items-center px-4 py-3 bg-[#2d2d2d]">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>

        {/* The Magic Syntax Highlighter */}
        <div className="text-sm">
          <SyntaxHighlighter
            language={language}
            style={themeMap[theme]}
            customStyle={{
              margin: 0,
              padding: '1.5rem',
              background: theme === 'github' ? '#ffffff' : 'transparent', // Make light mode pop
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