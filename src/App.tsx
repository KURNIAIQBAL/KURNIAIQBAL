import React, { useState, useMemo } from 'react';
import { DEFAULT_CONFIG } from './data/defaultConfig';
import { ProfileConfig, ViewMode } from './types';
import { generateMarkdown } from './utils/generateMarkdown';
import { GitHubPreview } from './components/GitHubPreview';
import { CodeViewer } from './components/CodeViewer';
import { ConfigEditor } from './components/ConfigEditor';
import { 
  Gamepad2, 
  Eye, 
  Code2, 
  Sliders, 
  Copy, 
  Check, 
  Download, 
  Columns, 
  HelpCircle, 
  ExternalLink,
  Sparkles,
  Terminal,
  Swords
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function App() {
  const [config, setConfig] = useState<ProfileConfig>(DEFAULT_CONFIG);
  const [viewMode, setViewMode] = useState<ViewMode>('split');
  const [copied, setCopied] = useState(false);
  const [showGuide, setShowGuide] = useState(false);

  // Generate markdown whenever config changes
  const markdownCode = useMemo(() => generateMarkdown(config), [config]);

  const handleCopy = () => {
    navigator.clipboard.writeText(markdownCode);
    setCopied(true);
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 }
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

  const handleReset = () => {
    setConfig(DEFAULT_CONFIG);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-[#c9d1d9] flex flex-col font-sans selection:bg-emerald-500 selection:text-black">
      
      {/* Top Retro Arcade Header */}
      <header className="border-b border-[#21262d] bg-[#0d1117] sticky top-0 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
          
          {/* Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <Gamepad2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-pixel text-xs sm:text-sm text-white tracking-wide">
                  8-BIT PROFILE README
                </h1>
                <span className="hidden sm:inline-block text-[10px] font-pixel px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  v2.0 RETRO
                </span>
              </div>
              <p className="text-xs text-[#8b949e] font-mono hidden sm:block">
                Pixel Art & Retro Gaming Animated GitHub Profile Markdown
              </p>
            </div>
          </div>

          {/* Navigation View Modes */}
          <div className="flex items-center gap-1 bg-[#161b22] p-1 rounded-lg border border-[#30363d]">
            <button
              onClick={() => setViewMode('split')}
              className={`px-3 py-1.5 rounded-md text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'split'
                  ? 'bg-[#238636] text-white shadow-sm font-semibold'
                  : 'text-[#8b949e] hover:text-white hover:bg-[#21262d]'
              }`}
              title="Tampilan Bersanding (Preview & Kode)"
            >
              <Columns className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Split View</span>
            </button>

            <button
              onClick={() => setViewMode('preview')}
              className={`px-3 py-1.5 rounded-md text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'preview'
                  ? 'bg-[#238636] text-white shadow-sm font-semibold'
                  : 'text-[#8b949e] hover:text-white hover:bg-[#21262d]'
              }`}
              title="Lihat Tampilan Hasil di GitHub"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Preview</span>
            </button>

            <button
              onClick={() => setViewMode('code')}
              className={`px-3 py-1.5 rounded-md text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'code'
                  ? 'bg-[#238636] text-white shadow-sm font-semibold'
                  : 'text-[#8b949e] hover:text-white hover:bg-[#21262d]'
              }`}
              title="Lihat Kode Markdown Lengkap"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Markdown</span>
            </button>

            <button
              onClick={() => setViewMode('customize')}
              className={`px-3 py-1.5 rounded-md text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'customize'
                  ? 'bg-[#238636] text-white shadow-sm font-semibold'
                  : 'text-[#8b949e] hover:text-white hover:bg-[#21262d]'
              }`}
              title="Sesuaikan Data & Karakter"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Editor</span>
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowGuide(true)}
              className="p-2 rounded-lg bg-[#21262d] hover:bg-[#30363d] text-[#8b949e] hover:text-white border border-[#30363d] transition-colors cursor-pointer"
              title="Panduan Pemasangan di GitHub"
            >
              <HelpCircle className="w-4 h-4" />
            </button>

            <button
              onClick={handleDownload}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-[#21262d] hover:bg-[#30363d] text-white border border-[#30363d] transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#58a6ff]" />
              <span>Download .md</span>
            </button>

            <button
              onClick={handleCopy}
              className="px-4 py-2 rounded-lg text-xs font-pixel bg-[#238636] hover:bg-[#2ea043] text-white flex items-center gap-2 shadow-[0_0_15px_rgba(35,134,54,0.3)] hover:shadow-[0_0_20px_rgba(35,134,54,0.5)] transition-all cursor-pointer active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-white" />
                  <span>COPIED!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-white" />
                  <span>SALIN KODE</span>
                </>
              )}
            </button>
          </div>

        </div>
      </header>

      {/* Feature Highlights Sub-bar */}
      <div className="bg-[#161b22]/70 border-b border-[#21262d] px-4 py-2">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-3 overflow-x-auto text-[#8b949e]">
            <span className="flex items-center gap-1 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Typewriter SVG
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-sky-400">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
              Pixel Character GIF
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-purple-400">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
              RPG Quest Dialogue Box
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-amber-400">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              Inventory Table
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-rose-400">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
              Chess Checkmate & Challenge Button
            </span>
          </div>

          <button
            onClick={() => setViewMode(viewMode === 'customize' ? 'preview' : 'customize')}
            className="text-xs text-[#58a6ff] hover:underline flex items-center gap-1"
          >
            <Sliders className="w-3 h-3" />
            <span>{viewMode === 'customize' ? 'Kembali ke Preview' : 'Kustomisasi Data / Username'}</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6">
        
        {viewMode === 'split' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: Code Viewer */}
            <div className="lg:col-span-6 h-[780px] sticky top-20">
              <CodeViewer markdownCode={markdownCode} />
            </div>

            {/* Right: Live GitHub Preview */}
            <div className="lg:col-span-6 overflow-y-auto max-h-[780px] rounded-xl pr-1">
              <GitHubPreview config={config} />
            </div>
          </div>
        )}

        {viewMode === 'preview' && (
          <div className="max-w-4xl mx-auto">
            <GitHubPreview config={config} />
          </div>
        )}

        {viewMode === 'code' && (
          <div className="max-w-5xl mx-auto h-[800px]">
            <CodeViewer markdownCode={markdownCode} />
          </div>
        )}

        {viewMode === 'customize' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-5">
              <ConfigEditor
                config={config}
                onChange={setConfig}
                onReset={handleReset}
              />
            </div>
            <div className="lg:col-span-7 sticky top-20 overflow-y-auto max-h-[800px]">
              <div className="mb-2 text-xs font-mono text-[#8b949e] flex items-center justify-between">
                <span>⚡ Live Preview Hasil Kustomisasi</span>
                <span className="text-emerald-400">Auto-updating</span>
              </div>
              <GitHubPreview config={config} />
            </div>
          </div>
        )}

      </main>

      {/* Guide Modal */}
      {showGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
          <div className="bg-[#161b22] border border-[#30363d] rounded-2xl max-w-lg w-full p-6 text-sm text-[#c9d1d9] shadow-2xl space-y-4 font-mono">
            <div className="flex items-center justify-between pb-3 border-b border-[#30363d]">
              <div className="flex items-center gap-2">
                <Gamepad2 className="w-5 h-5 text-emerald-400" />
                <h3 className="font-pixel text-xs text-white">CARA PASANG DI GITHUB</h3>
              </div>
              <button
                onClick={() => setShowGuide(false)}
                className="text-[#8b949e] hover:text-white text-lg leading-none cursor-pointer"
              >
                ✕
              </button>
            </div>

            <ol className="list-decimal list-inside space-y-3 text-xs leading-relaxed">
              <li>
                <strong className="text-white">Buat Special Repository:</strong>
                <p className="ml-5 text-[#8b949e]">
                  Buat repositori baru di GitHub dengan nama yang <em>sama persis</em> dengan username GitHub Anda (misal: jika username Anda <code className="text-emerald-300">octocat</code>, buat repo bernama <code className="text-emerald-300">octocat</code>).
                </p>
              </li>
              <li>
                <strong className="text-white">Centang "Public" & "Add a README file":</strong>
                <p className="ml-5 text-[#8b949e]">
                  GitHub akan menampilkan banner rahasia: <em>"You found a secret! ✨"</em>
                </p>
              </li>
              <li>
                <strong className="text-white">Salin & Tempel Kode:</strong>
                <p className="ml-5 text-[#8b949e]">
                  Klik tombol <span className="text-emerald-400 font-bold">"SALIN KODE"</span> di atas, lalu buka file <code className="text-white">README.md</code> di repo Anda, paste kode tersebut, dan klik <em>Commit changes</em>.
                </p>
              </li>
              <li>
                <strong className="text-white">Ganti Link Placeholder GIF Sendiri:</strong>
                <p className="ml-5 text-[#8b949e]">
                  Di dalam kode terdapat tanda komentar jelas seperti <code className="text-amber-300">{"<!-- 📌 [GANTI LINK GIF ...] -->"}</code>. Anda dapat mengganti URL tersebut dengan file GIF Anda sendiri yang diunggah ke GitHub atau Imgur.
                </p>
              </li>
            </ol>

            <div className="pt-3 border-t border-[#30363d] flex justify-end">
              <button
                onClick={() => setShowGuide(false)}
                className="px-4 py-2 rounded-lg bg-[#238636] hover:bg-[#2ea043] text-white font-pixel text-[10px] cursor-pointer"
              >
                SIAP, MENGERTI!
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Retro Arcade Footer */}
      <footer className="border-t border-[#21262d] bg-[#0d1117] py-4 text-center text-xs text-[#8b949e] font-mono">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>8-Bit Retro Gaming Profile Studio for GitHub</span>
          </div>
          <div className="text-[11px]">
            Ready for Chess.com • Lichess • SkillIcons • Readme Typing SVG
          </div>
        </div>
      </footer>

    </div>
  );
}
