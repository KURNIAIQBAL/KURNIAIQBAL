import React from 'react';
import { ProfileConfig } from '../types';
import { Swords, Sparkles, Trophy, Flame } from 'lucide-react';

interface GitHubPreviewProps {
  config: ProfileConfig;
}

export const GitHubPreview: React.FC<GitHubPreviewProps> = ({ config }) => {
  const encodedPhrases = config.typingPhrases
    .map(p => encodeURIComponent(p))
    .join(';');
  const typingSvgUrl = `https://readme-typing-svg.demolab.com?font=${config.typingFont}&size=18&pause=1000&color=${config.typingColor}&center=true&vCenter=true&width=520&height=50&lines=${encodedPhrases}`;
  const skillIconsUrl = `https://skillicons.dev/icons?i=${config.techIcons.join(',')}&theme=dark`;
  const chessProfileLink = config.chessPlatform === 'chesscom'
    ? `https://www.chess.com/member/${config.chessUsername}`
    : `https://lichess.org/@/${config.chessUsername}`;
  const chessStatsUrl = config.chessPlatform === 'chesscom'
    ? `https://chess-readme.vercel.app/api?user=${config.chessUsername}&theme=dark`
    : `https://lichess-readme-stats.vercel.app/api?username=${config.chessUsername}&theme=dark`;

  return (
    <div className="w-full bg-[#0d1117] text-[#c9d1d9] border border-[#30363d] rounded-xl overflow-hidden shadow-2xl">
      {/* GitHub Repo Header Simulation */}
      <div className="bg-[#161b22] px-4 py-3 border-b border-[#30363d] flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-sm font-mono">
          <span className="text-[#8b949e]">github.com/</span>
          <span className="font-semibold text-white">{config.username}</span>
          <span className="text-[#8b949e]">/README.md</span>
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#238636]/20 border border-[#238636] text-[#3fb950] font-pixel text-[9px]">
            PUBLIC
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs text-[#8b949e]">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#3fb950] animate-pulse"></span>
            GitHub Dark Markdown Preview
          </span>
        </div>
      </div>

      {/* Main Profile README Canvas */}
      <div className="p-6 md:p-10 max-w-4xl mx-auto font-sans leading-relaxed">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="text-center mb-8">
          <div className="inline-flex flex-col md:flex-row items-center justify-center gap-6 p-4 rounded-xl bg-[#161b22]/50 border border-[#30363d]">
            {config.characterPosition === 'left' && (
              <div className="relative group">
                <img
                  src={config.characterGifUrl}
                  alt="Retro RPG Character"
                  className="image-pixelated rounded-lg max-h-36 object-contain filter drop-shadow-[0_0_12px_rgba(88,166,255,0.3)] transition-transform hover:scale-105"
                  style={{ width: `${config.characterWidth}px` }}
                />
                <span className="absolute -bottom-2 -right-2 bg-emerald-600 text-white text-[9px] font-pixel px-1.5 py-0.5 rounded border border-emerald-400">
                  P1
                </span>
              </div>
            )}

            <div className="flex flex-col items-center justify-center text-center">
              {/* Typewriter SVG Live Render */}
              <div className="h-[52px] flex items-center justify-center overflow-hidden">
                <img
                  src={typingSvgUrl}
                  alt="Typing SVG Animation"
                  className="max-w-full"
                />
              </div>

              {/* Status Badges */}
              <div className="flex flex-wrap items-center justify-center gap-2 mt-3">
                <span className="bg-[#238636] text-white text-[11px] font-bold px-2.5 py-1 rounded tracking-wider flex items-center gap-1 font-mono">
                  PLAYER 1: ONLINE
                </span>
                <span className="bg-[#8957e5] text-white text-[11px] font-bold px-2.5 py-1 rounded tracking-wider font-mono uppercase">
                  CLASS: {config.playerClass}
                </span>
                <span className="bg-[#d29922] text-black text-[11px] font-bold px-2.5 py-1 rounded tracking-wider font-mono">
                  LVL {config.level}
                </span>
              </div>
            </div>

            {config.characterPosition === 'right' && (
              <div className="relative group">
                <img
                  src={config.characterGifUrl}
                  alt="Retro RPG Character"
                  className="image-pixelated rounded-lg max-h-36 object-contain filter drop-shadow-[0_0_12px_rgba(88,166,255,0.3)] transition-transform hover:scale-105"
                  style={{ width: `${config.characterWidth}px` }}
                />
                <span className="absolute -bottom-2 -right-2 bg-emerald-600 text-white text-[9px] font-pixel px-1.5 py-0.5 rounded border border-emerald-400">
                  P1
                </span>
              </div>
            )}
          </div>
        </div>

        {/* ANIMATED DIVIDER 1 */}
        <div className="my-8 flex justify-center overflow-hidden">
          <img
            src={config.dividerGifUrl}
            alt="Animated Pixel Divider"
            className="w-full max-w-2xl h-6 object-contain image-pixelated filter drop-shadow-[0_0_6px_rgba(255,215,0,0.3)]"
          />
        </div>

        {/* ================= 2. QUEST LOG / DIALOGUE BOX ================= */}
        <div className="mb-10 text-center">
          <div className="inline-block mb-3 px-4 py-1.5 rounded bg-[#161b22] border border-[#30363d] font-pixel text-[11px] text-[#58a6ff] tracking-wider shadow-sm">
            ═══ ⚔️ [ RPG QUEST LOG: DIALOGUE BOX ] ⚔️ ═══
          </div>

          <div className="bg-[#0d1117] border-2 border-[#30363d] rounded-xl p-5 md:p-6 text-left relative shadow-lg font-mono">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-xl">💬</span>
              <div>
                <p className="text-xs text-[#8b949e] font-bold uppercase tracking-wider mb-1">
                  NPC / HERO DIALOGUE:
                </p>
                <p className="text-emerald-300 font-mono text-sm leading-relaxed italic bg-[#161b22]/70 p-3 rounded border-l-2 border-emerald-500">
                  "{config.dialogueText}"
                </p>
              </div>
            </div>

            <div className="border-t border-[#30363d] pt-4 space-y-2 text-xs md:text-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-[#8b949e] font-semibold flex items-center gap-1.5">
                  <TargetIcon /> ACTIVE QUEST:
                </span>
                <span className="text-white font-medium bg-[#21262d] px-2 py-0.5 rounded">
                  {config.currentQuest}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pt-1">
                <span className="text-rose-400 font-semibold flex items-center gap-1.5">
                  ❤️ HP:
                </span>
                <div className="flex items-center gap-2">
                  <div className="w-36 bg-[#21262d] h-3 rounded-full overflow-hidden border border-rose-900">
                    <div
                      className="bg-gradient-to-r from-rose-600 to-rose-400 h-full rounded-full"
                      style={{ width: `${(config.hp / config.maxHp) * 100}%` }}
                    />
                  </div>
                  <code className="text-xs text-rose-300">
                    {config.hp}/{config.maxHp}
                  </code>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-sky-400 font-semibold flex items-center gap-1.5">
                  🔷 MP:
                </span>
                <div className="flex items-center gap-2">
                  <div className="w-36 bg-[#21262d] h-3 rounded-full overflow-hidden border border-sky-900">
                    <div
                      className="bg-gradient-to-r from-sky-600 to-sky-400 h-full rounded-full"
                      style={{ width: `${(config.mp / config.maxMp) * 100}%` }}
                    />
                  </div>
                  <code className="text-xs text-sky-300">
                    {config.mp}/{config.maxMp}
                  </code>
                </div>
              </div>

              <div className="flex items-center justify-between gap-1 pt-1 text-[11px] text-[#8b949e]">
                <span>MODE:</span>
                <code className="text-amber-300 bg-[#21262d] px-2 py-0.5 rounded">
                  ⚔️ NIGHTMARE DEV (Production-Ready)
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* ANIMATED DIVIDER 2 */}
        <div className="my-8 flex justify-center overflow-hidden">
          <img
            src={config.dividerGifUrl}
            alt="Animated Pixel Divider"
            className="w-full max-w-2xl h-6 object-contain image-pixelated filter drop-shadow-[0_0_6px_rgba(255,215,0,0.3)]"
          />
        </div>

        {/* ================= 3. SKILLS INVENTORY SECTION ================= */}
        <div className="mb-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img
              src={config.decorationGifUrl}
              alt="Corner Decoration"
              className="w-8 h-8 object-contain image-pixelated animate-bounce"
            />
            <h3 className="text-base md:text-lg font-pixel text-[#58a6ff] tracking-wide">
              🎒 HERO'S INVENTORY & TECH STACK
            </h3>
            <img
              src={config.decorationGifUrl}
              alt="Corner Decoration"
              className="w-8 h-8 object-contain image-pixelated animate-bounce"
            />
          </div>

          {/* SkillIcons Stream */}
          <div className="my-5 p-3 rounded-lg bg-[#161b22]/60 border border-[#30363d] inline-block shadow-inner">
            <img
              src={skillIconsUrl}
              alt="Skill Icons Stream"
              className="max-w-full object-contain mx-auto"
            />
          </div>

          {/* RPG Inventory Table */}
          <div className="overflow-x-auto border border-[#30363d] rounded-lg bg-[#0d1117] mt-3">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-[#161b22] text-[#8b949e] border-b border-[#30363d]">
                <tr>
                  <th className="py-2.5 px-4 font-semibold text-center">⚔️ Slot</th>
                  <th className="py-2.5 px-4 font-semibold">Category</th>
                  <th className="py-2.5 px-4 font-semibold">Equipped Spells / Tools</th>
                  <th className="py-2.5 px-4 font-semibold text-center">Power</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#21262d]">
                {config.inventoryItems.map((item, idx) => (
                  <tr key={idx} className="hover:bg-[#161b22]/40 transition-colors">
                    <td className="py-2.5 px-4 font-semibold text-white whitespace-nowrap">
                      {item.slot}
                    </td>
                    <td className="py-2.5 px-4 text-[#58a6ff]">
                      <code>{item.category}</code>
                    </td>
                    <td className="py-2.5 px-4 text-[#c9d1d9]">{item.items}</td>
                    <td className="py-2.5 px-4 text-center text-amber-400 font-mono tracking-widest whitespace-nowrap">
                      {item.powerLevel}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ANIMATED DIVIDER 3 */}
        <div className="my-8 flex justify-center overflow-hidden">
          <img
            src={config.dividerGifUrl}
            alt="Animated Pixel Divider"
            className="w-full max-w-2xl h-6 object-contain image-pixelated filter drop-shadow-[0_0_6px_rgba(255,215,0,0.3)]"
          />
        </div>

        {/* ================= 4. CHESS GAME SECTION ================= */}
        <div className="mb-8 text-center">
          <h3 className="text-base md:text-lg font-pixel text-[#f0883e] tracking-wide mb-1 flex items-center justify-center gap-2">
            <span>♟️</span> THE GRANDMASTER ARENA <span>♟️</span>
          </h3>
          <p className="text-xs text-[#8b949e] italic mb-5">
            "Tactics is knowing what to do when there's something to do; strategy is knowing what to do when there's nothing to do."
          </p>

          {/* Animated Chess Board GIF in Center */}
          <div className="flex justify-center mb-6">
            <div className="relative group inline-block p-1 bg-[#161b22] border-2 border-[#30363d] rounded-xl overflow-hidden shadow-2xl hover:border-[#f0883e] transition-all">
              <img
                src={config.chessGifUrl}
                alt="Animated Chess Match / Checkmate"
                className="rounded-lg max-w-full sm:max-w-md h-auto object-cover image-pixelated shadow-md"
              />
              <div className="absolute top-3 right-3 bg-black/80 px-2 py-0.5 rounded text-[9px] font-pixel text-amber-300 border border-amber-500/50 backdrop-blur-xs">
                CHECKMATE! ⚡
              </div>
            </div>
          </div>

          {/* Side-by-Side Layout: Stats on Left & Challenge Button on Right */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-[#161b22]/60 p-5 rounded-xl border border-[#30363d]">
            
            {/* Left Side: Real-time Stats Card */}
            <div className="md:col-span-7 flex flex-col items-center justify-center p-3 rounded-lg bg-[#0d1117] border border-[#30363d]">
              <div className="text-[11px] font-mono text-[#8b949e] mb-2 flex items-center gap-1.5 self-start">
                <Trophy className="w-3.5 h-3.5 text-amber-400" />
                <span>REAL-TIME {config.chessPlatform.toUpperCase()} STATS</span>
              </div>
              <a
                href={chessProfileLink}
                target="_blank"
                rel="noreferrer"
                className="w-full flex justify-center hover:opacity-95 transition-opacity"
              >
                <img
                  src={chessStatsUrl}
                  alt="Real-time Chess Stats Widget"
                  className="max-w-full rounded shadow-sm"
                  onError={(e) => {
                    // Fallback visual widget if user hasn't configured a valid username yet
                    (e.target as HTMLImageElement).src = `https://chess-readme.vercel.app/api?user=magnuscarlsen&theme=dark`;
                  }}
                />
              </a>
              <span className="text-[10px] text-[#8b949e] mt-2 font-mono">
                Live API widget for <code className="text-[#58a6ff]">@{config.chessUsername}</code>
              </span>
            </div>

            {/* Right Side: Pixel Art Challenge Button */}
            <div className="md:col-span-5 flex flex-col items-center justify-center text-center p-4 bg-[#0d1117] rounded-lg border border-[#30363d] space-y-3">
              <div>
                <p className="font-pixel text-[11px] text-white mb-1">
                  READY FOR A DUEL?
                </p>
                <p className="text-xs text-[#8b949e]">
                  Accepting Blitz, Rapid & Daily matches
                </p>
              </div>

              <a
                href={chessProfileLink}
                target="_blank"
                rel="noreferrer"
                className="inline-block transform hover:scale-105 active:scale-95 transition-transform"
              >
                <img
                  src={config.challengeButtonBadgeUrl}
                  alt="CHALLENGE ME TO A CHESS MATCH"
                  className="rounded shadow-lg"
                />
              </a>

              <a
                href={chessProfileLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-rose-600 hover:bg-rose-500 text-white font-pixel text-[9px] shadow transition-colors"
              >
                <Swords className="w-3 h-3" />
                PLAY ON {config.chessPlatform === 'chesscom' ? 'CHESS.COM' : 'LICHESS'}
              </a>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-[#30363d] text-center text-xs text-[#8b949e] font-mono">
          🕹️ PRESS [START] OR FORK THIS REPO TO BEGIN YOUR JOURNEY • 1990s RETRO GAMING VIBES 🕹️
        </div>

      </div>
    </div>
  );
};

const TargetIcon = () => (
  <svg className="w-3.5 h-3.5 inline text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <circle cx="12" cy="12" r="9" strokeWidth="2"/>
    <circle cx="12" cy="12" r="5" strokeWidth="2"/>
    <circle cx="12" cy="12" r="1" strokeWidth="2"/>
  </svg>
);
