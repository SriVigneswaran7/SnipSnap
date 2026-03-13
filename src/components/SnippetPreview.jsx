import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function SnippetPreview({ code }) {
  return (
    <div className="w-full p-8 rounded-2xl bg-gradient-to-br from-purple-500 via-violet-600 to-indigo-700 shadow-2xl flex items-center justify-center">
      
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
            language="javascript"
            style={atomOneDark}
            customStyle={{
              margin: 0,
              padding: '1.5rem',
              background: 'transparent',
            }}
          >
            {code}
          </SyntaxHighlighter>
        </div>

      </div>
    </div>
  );
}