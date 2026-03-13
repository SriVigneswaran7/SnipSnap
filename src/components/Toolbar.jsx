export default function Toolbar({ language, setLanguage, theme, setTheme, padding, setPadding }) {
  return (
    <div className="w-full flex flex-wrap gap-4 mb-6 bg-[#1e1e1e] p-4 rounded-xl border border-gray-700/50">
      
      {/* Language Selector */}
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-400 font-medium">Language</label>
        <select 
          value={language} 
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-[#2d2d2d] text-white text-sm rounded-lg p-2 border border-gray-600 outline-none focus:border-purple-500"
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
        </select>
      </div>

      {/* Theme Selector */}
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-400 font-medium">Theme</label>
        <select 
          value={theme} 
          onChange={(e) => setTheme(e.target.value)}
          className="bg-[#2d2d2d] text-white text-sm rounded-lg p-2 border border-gray-600 outline-none focus:border-purple-500"
        >
          <option value="dark">Atom Dark</option>
          <option value="dracula">Dracula</option>
          <option value="github">GitHub Light</option>
        </select>
      </div>

      {/* Padding Selector */}
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-400 font-medium">Padding</label>
        <select 
          value={padding} 
          onChange={(e) => setPadding(e.target.value)}
          className="bg-[#2d2d2d] text-white text-sm rounded-lg p-2 border border-gray-600 outline-none focus:border-purple-500"
        >
          <option value="p-4">Small</option>
          <option value="p-8">Medium</option>
          <option value="p-12">Large</option>
          <option value="p-16">Massive</option>
        </select>
      </div>

    </div>
  );
}