// Design System Constants
export const COLORS = {
  // Background gradients - Dark and Light modes
  BACKGROUND_GRADIENT_DARK: 'from-gray-900 to-slate-800',
  BACKGROUND_GRADIENT_LIGHT: 'from-gray-100 to-slate-200',

  // Glass morphism - Dark and Light modes
  GLASS_BG_DARK: 'dark:bg-gray-800/30 bg-gray-200/80',
  GLASS_BORDER_DARK: 'dark:border-gray-700/30 border-gray-300/50',
  GLASS_HOVER_BG_DARK: 'dark:hover:bg-gray-800/40 hover:bg-gray-300/90',
  GLASS_HOVER_BORDER_DARK: 'dark:hover:border-gray-600/40 hover:border-gray-400/60',

  // Text colors - Dark and Light modes
  TEXT_PRIMARY: 'dark:text-white text-gray-900',
  TEXT_SECONDARY: 'dark:text-gray-300 text-gray-700',
  TEXT_TERTIARY: 'dark:text-gray-400 text-gray-600',
  TEXT_MUTED: 'dark:text-gray-500 text-gray-500',

  // Interactive elements
  PRIMARY_BLUE: 'bg-blue-500',
  PRIMARY_BLUE_HOVER: 'hover:bg-blue-600',
  PRIMARY_BLUE_BORDER: 'border-blue-400/30',

  // Button variants - Dark and Light modes
  BUTTON_DEFAULT: 'dark:bg-gray-700/50 bg-gray-300/70',
  BUTTON_DEFAULT_HOVER: 'dark:hover:bg-gray-600/50 hover:bg-gray-400/80',
  BUTTON_DEFAULT_BORDER: 'dark:border-gray-600/30 border-gray-400/40',

  BUTTON_DANGER: 'bg-red-500/80',
  BUTTON_DANGER_HOVER: 'hover:bg-red-600',
  BUTTON_DANGER_BORDER: 'border-red-400/30',

  // Chart colors - Dark and Light modes
  CHART_PRIMARY_DARK: '#3b82f6',
  CHART_PRIMARY_LIGHT: '#2563eb',
  CHART_SECONDARY_DARK: '#6b7280',
  CHART_SECONDARY_LIGHT: '#4b5563',
  CHART_BACKGROUND_DARK: '#374151',
  CHART_BACKGROUND_LIGHT: '#d1d5db',

  // Progress and status - Dark and Light modes
  PROGRESS_BG: 'dark:bg-gray-700/50 bg-gray-300/70',
  PROGRESS_FILL: 'bg-blue-500',

  // Navigation - Dark and Light modes
  NAV_BG: 'dark:bg-gray-900/95 bg-gray-100/95',
  NAV_BORDER: 'dark:border-gray-700/30 border-gray-300/50',
  NAV_ACTIVE: 'bg-blue-500',
  NAV_INACTIVE: 'dark:bg-gray-700/50 bg-gray-300/70',
  NAV_INACTIVE_HOVER: 'dark:hover:bg-gray-600/50 hover:bg-gray-400/80',
} as const;

export const ANIMATIONS = {
  // Standard transitions
  TRANSITION_DEFAULT: 'transition-all duration-200 ease-in-out',
  TRANSITION_SLOW: 'transition-all duration-300 ease-in-out',
  TRANSITION_FAST: 'transition-all duration-150 ease-in-out',

  // Hover effects
  HOVER_SCALE_SUBTLE: 'hover:scale-[1.02]',
  HOVER_SCALE_NORMAL: 'hover:scale-105',
  HOVER_SCALE_LARGE: 'hover:scale-110',

  // Fade in animations
  FADE_IN_UP_FAST: 'animate-[fadeInUp_0.6s_ease-out]',
  FADE_IN_UP_NORMAL: 'animate-[fadeInUp_0.8s_ease-out]',
  FADE_IN_UP_SLOW: 'animate-[fadeInUp_1s_ease-out]',
  FADE_IN_UP_SLOWER: 'animate-[fadeInUp_1.2s_ease-out]',
} as const;

export const LAYOUT = {
  // Spacing
  CONTAINER_PADDING: 'px-4 sm:px-6',
  SECTION_SPACING: 'space-y-6',
  BOTTOM_PADDING: 'pb-20', // For bottom nav clearance

  // Border radius
  BORDER_RADIUS_SM: 'rounded-xl',
  BORDER_RADIUS_DEFAULT: 'rounded-2xl',
  BORDER_RADIUS_FULL: 'rounded-full',

  // Shadows
  SHADOW_DEFAULT: 'shadow-lg',
  SHADOW_SUBTLE: 'shadow-md',

  // Backdrop blur
  BACKDROP_BLUR: 'backdrop-blur-md',

  // Overflow handling
  OVERFLOW_HIDDEN: 'overflow-x-hidden',
  OVERFLOW_SCROLL: 'overflow-y-auto',
} as const;

export const TYPOGRAPHY = {
  // Font families
  FONT_BODY: "font-['SF_Pro_Text']",
  FONT_HEADLINE: '', // Uses system fonts via globals.css

  // Text sizes
  TEXT_XS: 'text-xs',
  TEXT_SM: 'text-sm',
  TEXT_BASE: 'text-base',
  TEXT_LG: 'text-lg',
  TEXT_XL: 'text-xl',
  TEXT_2XL: 'text-2xl',
  TEXT_3XL: 'text-3xl',
  TEXT_4XL: 'text-4xl',

  // Font weights
  FONT_LIGHT: 'font-light',
  FONT_NORMAL: 'font-normal',
  FONT_MEDIUM: 'font-medium',
  FONT_SEMIBOLD: 'font-semibold',
  FONT_BOLD: 'font-bold',
  FONT_EXTRABOLD: 'font-extrabold',
} as const;
