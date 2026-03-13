export default function CodeEditor({ code, setCode }) {
  return (
    <div className="w-full mb-8">
      <label className="block text-sm font-medium text-gray-400 mb-2">
        Paste your code here:
      </label>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        spellCheck="false"
        className="w-full h-40 p-4 bg-[#1e1e1e] text-gray-300 border border-gray-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 font-mono resize-y"
        placeholder="// Paste your raw code..."
      />
    </div>
  );
}