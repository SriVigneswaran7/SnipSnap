import { useState, useEffect, useRef } from 'react';

// Custom Glass Dropdown Component
function GlassSelect({ label, value, options, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col gap-2 flex-1 relative" ref={dropdownRef}>
      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.15em] ml-1">
        {label}
      </label>
      
      {/* The Trigger Button (The Glass Box) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white/3 backdrop-blur-[20px] text-gray-300 text-xs rounded-xl p-3 border border-white/10 outline-none hover:border-white/20 transition-all flex justify-between items-center shadow-xl"
      >
        <span className="capitalize">{value.replace('p-', '').replace('javascript', 'JS')}</span>
        <svg className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} width="10" height="6" viewBox="0 0 10 6" fill="none">
          <path d="M1 1L5 5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* The Actual Glass Dropdown List */}
      {isOpen && (
        <div className="absolute top-[110%] left-0 w-full bg-white/5 backdrop-blur-[30px] border border-white/10 rounded-xl shadow-2xl z-100 overflow-hidden animate-in fade-in zoom-in duration-200">
          {options.map((opt) => (
            <div
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setIsOpen(false);
              }}
              className="px-4 py-2.5 text-xs text-gray-300 hover:bg-white/10 cursor-pointer transition-colors capitalize border-b border-white/5 last:border-none"
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Toolbar({ language, setLanguage, theme, setTheme, padding, setPadding }) {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <GlassSelect 
        label="Language" 
        value={language} 
        onChange={setLanguage}
        options={[
          { label: 'JavaScript', value: 'javascript' },
          { label: 'Python', value: 'python' },
          { label: 'HTML', value: 'html' },
          { label: 'CSS', value: 'css' },
          { label: 'C++', value: 'cpp' },
        ]}
      />

      <GlassSelect 
        label="Theme" 
        value={theme} 
        onChange={setTheme}
        options={[
          { label: 'Atom Dark', value: 'dark' },
          { label: 'Dracula', value: 'dracula' },
          { label: 'GitHub Light', value: 'github' },
        ]}
      />

      <GlassSelect 
        label="Padding" 
        value={padding} 
        onChange={setPadding}
        options={[
          { label: '16px', value: 'p-8' },
          { label: '24px', value: 'p-12' },
          { label: '32px', value: 'p-16' },
          { label: '48px', value: 'p-24' },
        ]}
      />
    </div>
  );
}