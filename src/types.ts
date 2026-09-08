export interface ProfileConfig {
  username: string;
  fullName: string;
  statusBadge: string;
  typingPhrases: string[];
  typingColor: string;
  typingFont: string;
  characterGifUrl: string;
  characterPosition: 'left' | 'right';
  characterWidth: number;
  
  // Quest Log (RPG Dialogue Box)
  questLogTitle: string;
  currentQuest: string;
  hp: number;
  maxHp: number;
  mp: number;
  maxMp: number;
  level: number;
  playerClass: string;
  dialogueText: string;
  
  // Dividers
  dividerGifUrl: string;
  dividerType: 'pacman' | 'sword' | 'laser' | 'custom';
  
  // Skills Inventory
  skillsDecoration: 'bonfire' | 'coin' | 'chest' | 'none';
  decorationGifUrl: string;
  techIcons: string[]; // skillicons slugs: js,ts,react,node,python,etc.
  inventoryItems: {
    slot: string;
    category: string;
    items: string;
    powerLevel: string;
  }[];
  
  // Chess Section
  chessPlatform: 'chesscom' | 'lichess';
  chessUsername: string;
  chessGifUrl: string;
  chessStatsWidgetUrl: string;
  challengeButtonText: string;
  challengeButtonUrl: string;
  challengeButtonBadgeUrl: string;
}

export type ViewMode = 'split' | 'preview' | 'code' | 'customize';
