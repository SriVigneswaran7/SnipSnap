export default function CodeEditor({ code, setCode }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.15em] ml-1">Input Code</label>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        spellCheck="false"
        className="w-full h-32 p-4 bg-white/2 backdrop-blur-[20px] text-gray-400 border border-white/10 rounded-xl focus:outline-none focus:border-white/20 font-mono text-[13px] leading-relaxed resize-y transition-all shadow-xl"
        placeholder="// Paste code..."
      />
    </div>
  );
}