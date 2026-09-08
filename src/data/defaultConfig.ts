import { ProfileConfig } from '../types';

export const DEFAULT_CONFIG: ProfileConfig = {
  username: 'your-username',
  fullName: 'PIXEL KNIGHT',
  statusBadge: 'LEVEL 99 DEV',
  typingPhrases: [
    'SELECT * FROM PASSION;',
    'LEVEL 99 CODE WIZARD & ADVENTURER',
    'BUILDING RETRO APPS & SOLVING QUESTS',
    'CHESS GRANDMASTER IN TRAINING ♟️',
    'PRESS START TO CONNECT!'
  ],
  typingColor: '58A6FF',
  typingFont: 'Press+Start+2P',
  // Pixel art character typing at computer / walking RPG character GIF
  characterGifUrl: 'https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/thought-bubble.gif',
  characterPosition: 'left',
  characterWidth: 160,

  // RPG Quest Log Section
  questLogTitle: '📜 QUEST LOG: ACTIVE MISSION',
  currentQuest: 'Defeating bugs & forging legendary open-source web applications',
  hp: 100,
  maxHp: 100,
  mp: 85,
  maxMp: 100,
  level: 99,
  playerClass: 'Full-Stack Spellcaster',
  dialogueText: 'Greetings, traveler! Welcome to my digital sanctuary. I craft software with retro nostalgia, clean architecture, and tactical precision—both on the keyboard and the 64-square battlefield.',

  // Animated Pixel Dividers
  dividerType: 'pacman',
  dividerGifUrl: 'https://user-images.githubusercontent.com/73097560/115834477-dbab4380-a447-11eb-908a-139a6edaec5c.gif',

  // Skills Inventory
  skillsDecoration: 'bonfire',
  decorationGifUrl: 'https://user-images.githubusercontent.com/74038190/212284123-5e783637-2931-4828-9844-3d964f40f094.gif', // 8-bit bonfire
  techIcons: ['js', 'ts', 'react', 'nextjs', 'nodejs', 'tailwind', 'python', 'docker', 'git', 'linux'],
  inventoryItems: [
    {
      slot: '⚔️ Primary Weapon',
      category: 'Languages',
      items: 'TypeScript, JavaScript, Python, SQL',
      powerLevel: '★★★★★'
    },
    {
      slot: '🛡️ Armor & Shields',
      category: 'Frontend & UI',
      items: 'React.js, Next.js, TailwindCSS, HTML5/CSS3',
      powerLevel: '★★★★★'
    },
    {
      slot: '🧪 Potions & Spells',
      category: 'Backend & Cloud',
      items: 'Node.js, Express, PostgreSQL, Docker, Git',
      powerLevel: '★★★★☆'
    },
    {
      slot: '📜 Ancient Relics',
      category: 'Special Abilities',
      items: 'Algorithm Optimization, UI/UX Craft, Pixel Art',
      powerLevel: '★★★★★'
    }
  ],

  // Chess Game Section
  chessPlatform: 'chesscom',
  chessUsername: 'your-chess-username',
  // Pixel art / animated chess checkmate GIF
  chessGifUrl: 'https://images.chesscomfiles.com/uploads/v1/article/24185.761a29aa.668x375o.153723321528.gif',
  chessStatsWidgetUrl: 'https://chess-readme.vercel.app/api?user=magnuscarlsen&theme=dark',
  challengeButtonText: 'CHALLENGE ME TO A CHESS MATCH',
  challengeButtonUrl: 'https://www.chess.com/play/online',
  challengeButtonBadgeUrl: 'https://img.shields.io/badge/⚔️_CHALLENGE_ME-CHESS.COM_MATCH-81b64c?style=for-the-badge&logo=chess.com&logoColor=white&labelColor=262522'
};

export const PRESET_GIFS = {
  characters: [
    {
      name: 'Pixel Cat / Coder Desk',
      url: 'https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/thought-bubble.gif'
    },
    {
      name: 'Retro Knight RPG Walking',
      url: 'https://user-images.githubusercontent.com/74038190/212284115-f47cd8ff-2ffb-4b04-b5bf-4d1c14c0247f.gif'
    },
    {
      name: 'Pixel Boy Gamer',
      url: 'https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif'
    },
    {
      name: 'Pixel Coffee Hacker',
      url: 'https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif'
    }
  ],
  dividers: [
    {
      name: 'Pac-Man Dots Animated',
      url: 'https://user-images.githubusercontent.com/73097560/115834477-dbab4380-a447-11eb-908a-139a6edaec5c.gif'
    },
    {
      name: 'Laser Pulse / HP Bar',
      url: 'https://user-images.githubusercontent.com/74038190/212257468-1e9a91f1-b626-4baa-b15d-5c385dfa7ed2.gif'
    },
    {
      name: 'Retro Synthwave Grid Line',
      url: 'https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png'
    }
  ],
  decorations: [
    {
      name: '8-Bit Bonfire (Campfire)',
      url: 'https://user-images.githubusercontent.com/74038190/212284123-5e783637-2931-4828-9844-3d964f40f094.gif'
    },
    {
      name: 'Spinning Gold Coin',
      url: 'https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/coin.gif'
    },
    {
      name: 'Retro Treasure Chest',
      url: 'https://user-images.githubusercontent.com/74038190/212284158-e93146e2-2a78-4eb7-9150-f8f4803964fe.gif'
    }
  ],
  chessGifs: [
    {
      name: 'Animated Checkmate GIF',
      url: 'https://images.chesscomfiles.com/uploads/v1/article/24185.761a29aa.668x375o.153723321528.gif'
    },
    {
      name: 'Retro Chess Board Loop',
      url: 'https://media.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif'
    },
    {
      name: 'Pixel King Move',
      url: 'https://media.giphy.com/media/26AHONQ79FdWZhAI0/giphy.gif'
    }
  ]
};
