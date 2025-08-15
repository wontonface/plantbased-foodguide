// Enums matching constants.py
export const VeggieCategory = {
    ALLIUM: 'Allium',
    CRUCIFEROUS: 'Cruciferous',
    LEAFYGREENS: 'Leafy Green',
    LEGUMES: 'Legume',
    MUSHROOMS: 'Mushrooms',
    NIGHTSHADES: 'Nightshade',
    ROOTS: 'Roots',
    STALKS: 'Stalks',
    SQUASH: 'Squash'
} as const;

export type VeggieCategory = typeof VeggieCategory[keyof typeof VeggieCategory];

export const Frequency = {
    VERY_FREQUENTLY: 'VeryFrequently',
    REGULARLY: 'Regularly'
} as const;

export type Frequency = typeof Frequency[keyof typeof Frequency];

export const Season = {
    SPRING: 'Spring',
    SUMMER: 'Summer',
    FALL: 'Fall',
    WINTER: 'Winter'
} as const;

export type Season = typeof Season[keyof typeof Season];

export const Color = {
    WHITE: 'White',
    GREEN: 'Green',
    BROWN: 'Brown',
    RED: 'Red',
    ORANGE: 'Orange',
    YELLOW: 'Yellow',
    PURPLE: 'Purple',
    BLUE: 'Blue'
} as const;

export type Color = typeof Color[keyof typeof Color];

// TODO: Functions, nutrition

export interface Veggie {
    name: string;
    category: VeggieCategory;
    frequency: Frequency;
    season: Season[];
    functions?: string[]; // Placeholder
    nutrition?: string[]; // Placeholder
    color: Color[];
}


// Utility types for working with enums
export type CategoryKey = keyof typeof VeggieCategory;
export type FrequencyKey = keyof typeof Frequency;
export type SeasonsKey = keyof typeof Season;

// Hook return type
export interface UseVeggiesResult {
    veggies: Veggie[];
    loading: boolean;
    error: string | null;
    count: number;
}

// helper type in case backend sends strings
export interface VeggieApiResponse {
    name: string;
    category: string;
    frequency: string;
    season: string[];
    functions?: string[];
    nutrition?: string[];
    color: string[];
}