import React, { useState } from 'react';
import { Copy, Check, Download, ExternalLink, Sparkles, Code2, Info } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CodeViewerProps {
  markdownCode: string;
}

export const CodeViewer: React.FC<CodeViewerProps> = ({ markdownCode }) => {
  const [copied, setCopied] = useState(false);
  const [highlightComments, setHighlightComments] = useState(true);

  const handleCopy = () => {
    navigator.clipboard.writeText(markdownCode);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 }
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([markdownCode], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'README.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col h-full bg-[#0d1117] border border-[#30363d] rounded-xl overflow-hidden shadow-2xl">
      {/* Action Toolbar */}
      <div className="bg-[#161b22] px-4 py-3 border-b border-[#30363d] flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#21262d] rounded-md text-xs font-mono text-emerald-400 border border-[#30363d]">
            <Code2 className="w-3.5 h-3.5" />
            <span>README.md</span>
          </div>
          <span className="text-xs text-[#8b949e] hidden sm:inline font-mono">
            {markdownCode.split('\n').length} lines
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Highlight Placeholders Toggle */}
          <button
            onClick={() => setHighlightComments(!highlightComments)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-colors border ${
              highlightComments
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                : 'bg-[#21262d] text-[#8b949e] border-[#30363d] hover:text-white'
            }`}
            title="Sorot komentar letak penggantian link GIF"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Sorot Placeholder GIF</span>
          </button>

          {/* Download README.md Button */}
          <button
            onClick={handleDownload}
            className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[#21262d] hover:bg-[#30363d] text-white border border-[#30363d] flex items-center gap-1.5 transition-colors"
            title="Download file README.md"
          >
            <Download className="w-3.5 h-3.5 text-[#58a6ff]" />
            <span className="hidden sm:inline">Download</span> .md
          </button>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="px-4 py-1.5 rounded-lg text-xs font-pixel bg-[#238636] hover:bg-[#2ea043] text-white flex items-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-white" />
                <span>COPIED!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-white" />
                <span>COPY CODE</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Helper Banner */}
      <div className="bg-[#1f242c] px-4 py-2 text-xs border-b border-[#30363d] text-[#8b949e] flex items-center gap-2">
        <Info className="w-4 h-4 text-[#58a6ff] shrink-0" />
        <span>
          Paste kode ini ke repositori khusus GitHub Anda: <code className="text-white font-mono bg-[#161b22] px-1 py-0.5 rounded border border-[#30363d]">github.com/username/username/README.md</code>
        </span>
      </div>

      {/* Code Display Area */}
      <div className="flex-1 overflow-auto p-4 font-mono text-xs md:text-sm leading-relaxed bg-[#0d1117] select-all">
        <pre className="text-[#c9d1d9] whitespace-pre-wrap break-words font-mono">
          {markdownCode.split('\n').map((line, idx) => {
            const isPlaceholderComment = line.includes('📌 [GANTI LINK') || line.includes('📌 [GANTI USERNAME');
            const isTag = line.trim().startsWith('<') || line.trim().startsWith('</');
            const isComment = line.trim().startsWith('<!--');

            if (isPlaceholderComment && highlightComments) {
              return (
                <div
                  key={idx}
                  className="bg-amber-500/15 border-l-4 border-amber-400 text-amber-300 font-bold px-2 py-0.5 rounded-r my-0.5"
                >
                  <span className="inline-block w-8 text-right text-amber-500/70 mr-3 select-none">
                    {idx + 1}
                  </span>
                  {line}
                </div>
              );
            }

            return (
              <div key={idx} className="hover:bg-[#161b22]/70 px-2 py-0.5 rounded">
                <span className="inline-block w-8 text-right text-[#484f58] mr-3 select-none text-xs">
                  {idx + 1}
                </span>
                <span
                  className={
                    isComment
                      ? 'text-[#8b949e] italic'
                      : isTag
                      ? 'text-[#7ee787]'
                      : 'text-[#c9d1d9]'
                  }
                >
                  {line}
                </span>
              </div>
            );
          })}
        </pre>
      </div>
    </div>
  );
};
