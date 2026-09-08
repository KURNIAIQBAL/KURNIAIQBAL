import React from 'react';
import { ProfileConfig } from '../types';
import { PRESET_GIFS } from '../data/defaultConfig';
import { Sparkles, Gamepad2, Swords, ShieldAlert, Image, Type, User, Plus, Trash2 } from 'lucide-react';

interface ConfigEditorProps {
  config: ProfileConfig;
  onChange: (newConfig: ProfileConfig) => void;
  onReset: () => void;
}

export const ConfigEditor: React.FC<ConfigEditorProps> = ({ config, onChange, onReset }) => {
  const updateField = <K extends keyof ProfileConfig>(field: K, value: ProfileConfig[K]) => {
    onChange({
      ...config,
      [field]: value
    });
  };

  const handlePhraseChange = (index: number, value: string) => {
    const updated = [...config.typingPhrases];
    updated[index] = value;
    updateField('typingPhrases', updated);
  };

  const addPhrase = () => {
    updateField('typingPhrases', [...config.typingPhrases, 'NEW TYPING PHRASE']);
  };

  const removePhrase = (index: number) => {
    if (config.typingPhrases.length <= 1) return;
    updateField(
      'typingPhrases',
      config.typingPhrases.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 text-xs text-[#c9d1d9] space-y-6">
      <div className="flex items-center justify-between pb-3 border-b border-[#30363d]">
        <div className="flex items-center gap-2">
          <Gamepad2 className="w-4 h-4 text-emerald-400" />
          <h2 className="font-pixel text-xs text-white">CUSTOMIZE YOUR RETRO PROFILE</h2>
        </div>
        <button
          onClick={onReset}
          className="text-[11px] text-[#8b949e] hover:text-white px-2 py-1 rounded bg-[#21262d] border border-[#30363d] hover:border-[#8b949e] transition-colors"
        >
          Reset to Default
        </button>
      </div>

      {/* 1. Header & Character */}
      <div className="space-y-3">
        <div className="flex items-center gap-1.5 font-bold text-white text-xs uppercase tracking-wider text-[#58a6ff]">
          <User className="w-3.5 h-3.5" />
          <span>1. Header & Karakter Pixel RPG</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-[#8b949e] mb-1 font-mono">GitHub Username</label>
            <input
              type="text"
              value={config.username}
              onChange={(e) => updateField('username', e.target.value)}
              className="w-full bg-[#0d1117] border border-[#30363d] rounded px-2.5 py-1.5 text-white font-mono focus:border-emerald-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-[#8b949e] mb-1 font-mono">Hero Class / Title</label>
            <input
              type="text"
              value={config.playerClass}
              onChange={(e) => updateField('playerClass', e.target.value)}
              className="w-full bg-[#0d1117] border border-[#30363d] rounded px-2.5 py-1.5 text-white font-mono focus:border-emerald-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Character GIF URL & Presets */}
        <div>
          <label className="block text-[#8b949e] mb-1 font-mono flex items-center justify-between">
            <span>Link GIF Karakter Pixel Art</span>
            <span className="text-[10px] text-emerald-400">Posisi:</span>
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={config.characterGifUrl}
              onChange={(e) => updateField('characterGifUrl', e.target.value)}
              placeholder="https://..."
              className="flex-1 bg-[#0d1117] border border-[#30363d] rounded px-2.5 py-1.5 text-white font-mono text-[11px] focus:border-emerald-500 focus:outline-none"
            />
            <select
              value={config.characterPosition}
              onChange={(e) => updateField('characterPosition', e.target.value as 'left' | 'right')}
              className="bg-[#0d1117] border border-[#30363d] rounded px-2 text-white font-mono"
            >
              <option value="left">Kiri</option>
              <option value="right">Kanan</option>
            </select>
          </div>

          {/* Quick presets for character */}
          <div className="flex flex-wrap gap-1.5 mt-2">
            <span className="text-[10px] text-[#8b949e] mr-1">Preset GIF:</span>
            {PRESET_GIFS.characters.map((char, i) => (
              <button
                key={i}
                type="button"
                onClick={() => updateField('characterGifUrl', char.url)}
                className={`text-[10px] px-2 py-0.5 rounded border transition-colors ${
                  config.characterGifUrl === char.url
                    ? 'bg-emerald-600/30 text-emerald-300 border-emerald-500'
                    : 'bg-[#21262d] text-[#8b949e] border-[#30363d] hover:text-white'
                }`}
              >
                {char.name}
              </button>
            ))}
          </div>
        </div>

        {/* Typewriter Phrases */}
        <div>
          <label className="block text-[#8b949e] mb-1 font-mono flex items-center justify-between">
            <span>Teks Animasi Mengetik (Typewriter SVG)</span>
            <button
              onClick={addPhrase}
              className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-mono text-[11px]"
            >
              <Plus className="w-3 h-3" /> Tambah Baris
            </button>
          </label>
          <div className="space-y-1.5">
            {config.typingPhrases.map((phrase, idx) => (
              <div key={idx} className="flex gap-2 items-center">
                <span className="font-mono text-[#8b949e] w-4">{idx + 1}.</span>
                <input
                  type="text"
                  value={phrase}
                  onChange={(e) => handlePhraseChange(idx, e.target.value)}
                  className="flex-1 bg-[#0d1117] border border-[#30363d] rounded px-2.5 py-1 text-white font-mono text-[11px] focus:border-emerald-500 focus:outline-none"
                />
                <button
                  onClick={() => removePhrase(idx)}
                  disabled={config.typingPhrases.length <= 1}
                  className="text-[#8b949e] hover:text-rose-400 disabled:opacity-30 p-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Quest Log (RPG Dialogue Box) */}
      <div className="space-y-3 pt-3 border-t border-[#30363d]">
        <div className="flex items-center gap-1.5 font-bold text-white text-xs uppercase tracking-wider text-[#7ee787]">
          <Swords className="w-3.5 h-3.5" />
          <span>2. Quest Log & RPG Dialogue Box</span>
        </div>

        <div>
          <label className="block text-[#8b949e] mb-1 font-mono">Teks Dialog RPG (Pesan Pengantar)</label>
          <textarea
            rows={2}
            value={config.dialogueText}
            onChange={(e) => updateField('dialogueText', e.target.value)}
            className="w-full bg-[#0d1117] border border-[#30363d] rounded px-2.5 py-1.5 text-white font-mono text-[11px] focus:border-emerald-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-[#8b949e] mb-1 font-mono">Active Quest (Fokus Saat Ini)</label>
          <input
            type="text"
            value={config.currentQuest}
            onChange={(e) => updateField('currentQuest', e.target.value)}
            className="w-full bg-[#0d1117] border border-[#30363d] rounded px-2.5 py-1.5 text-white font-mono text-[11px] focus:border-emerald-500 focus:outline-none"
          />
        </div>

        {/* Divider selection */}
        <div>
          <label className="block text-[#8b949e] mb-1 font-mono">Pilihan GIF Pembatas (Animated Divider)</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={config.dividerGifUrl}
              onChange={(e) => updateField('dividerGifUrl', e.target.value)}
              className="flex-1 bg-[#0d1117] border border-[#30363d] rounded px-2.5 py-1 text-white font-mono text-[11px] focus:border-emerald-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {PRESET_GIFS.dividers.map((div, i) => (
              <button
                key={i}
                type="button"
                onClick={() => updateField('dividerGifUrl', div.url)}
                className={`text-[10px] px-2 py-0.5 rounded border transition-colors ${
                  config.dividerGifUrl === div.url
                    ? 'bg-emerald-600/30 text-emerald-300 border-emerald-500'
                    : 'bg-[#21262d] text-[#8b949e] border-[#30363d] hover:text-white'
                }`}
              >
                {div.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Skills Inventory */}
      <div className="space-y-3 pt-3 border-t border-[#30363d]">
        <div className="flex items-center gap-1.5 font-bold text-white text-xs uppercase tracking-wider text-[#d29922]">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>3. Skills (Inventory) & Animasi Api Unggun / Koin</span>
        </div>

        <div>
          <label className="block text-[#8b949e] mb-1 font-mono">Animasi Sudut Section Skill</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={config.decorationGifUrl}
              onChange={(e) => updateField('decorationGifUrl', e.target.value)}
              className="flex-1 bg-[#0d1117] border border-[#30363d] rounded px-2.5 py-1 text-white font-mono text-[11px] focus:border-emerald-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {PRESET_GIFS.decorations.map((dec, i) => (
              <button
                key={i}
                type="button"
                onClick={() => updateField('decorationGifUrl', dec.url)}
                className={`text-[10px] px-2 py-0.5 rounded border transition-colors ${
                  config.decorationGifUrl === dec.url
                    ? 'bg-amber-600/30 text-amber-300 border-amber-500'
                    : 'bg-[#21262d] text-[#8b949e] border-[#30363d] hover:text-white'
                }`}
              >
                {dec.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Chess Section */}
      <div className="space-y-3 pt-3 border-t border-[#30363d]">
        <div className="flex items-center gap-1.5 font-bold text-white text-xs uppercase tracking-wider text-[#f0883e]">
          <span>♟️</span>
          <span>4. Chess Game & Duel Arena</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-[#8b949e] mb-1 font-mono">Platform Catur</label>
            <select
              value={config.chessPlatform}
              onChange={(e) => updateField('chessPlatform', e.target.value as 'chesscom' | 'lichess')}
              className="w-full bg-[#0d1117] border border-[#30363d] rounded px-2.5 py-1.5 text-white font-mono"
            >
              <option value="chesscom">Chess.com</option>
              <option value="lichess">Lichess.org</option>
            </select>
          </div>

          <div>
            <label className="block text-[#8b949e] mb-1 font-mono">Username Catur</label>
            <input
              type="text"
              value={config.chessUsername}
              onChange={(e) => updateField('chessUsername', e.target.value)}
              placeholder="Username catur Anda"
              className="w-full bg-[#0d1117] border border-[#30363d] rounded px-2.5 py-1.5 text-white font-mono focus:border-emerald-500 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-[#8b949e] mb-1 font-mono">Link GIF Animasi Papan Catur / Skakmat</label>
          <input
            type="text"
            value={config.chessGifUrl}
            onChange={(e) => updateField('chessGifUrl', e.target.value)}
            className="w-full bg-[#0d1117] border border-[#30363d] rounded px-2.5 py-1 text-white font-mono text-[11px] focus:border-emerald-500 focus:outline-none"
          />
          <div className="flex flex-wrap gap-1.5 mt-2">
            {PRESET_GIFS.chessGifs.map((cg, i) => (
              <button
                key={i}
                type="button"
                onClick={() => updateField('chessGifUrl', cg.url)}
                className={`text-[10px] px-2 py-0.5 rounded border transition-colors ${
                  config.chessGifUrl === cg.url
                    ? 'bg-orange-600/30 text-orange-300 border-orange-500'
                    : 'bg-[#21262d] text-[#8b949e] border-[#30363d] hover:text-white'
                }`}
              >
                {cg.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
