import type { Veggie } from '../types/veggie';
import { Season } from "../types/veggie";

export function getCurrentSeason(): string {
    const now = new Date();
    const month = now.getMonth();

    if (month >= 2 && month <= 4) {
        return Season.SPRING;
    } else if (month >= 5 && month <= 7) {
        return Season.SUMMER;
    } else if (month >= 8 && month <= 10) {
        return Season.FALL;
    } else {
        return Season.WINTER;
    }
}

export const filterVeggiesBySeasons = (veggies: Veggie[], selectedSeasons: string[]): Veggie[] =>
    veggies.filter(veggie =>
        veggie.season.some(season => selectedSeasons.includes(season))
    );

// Add more filters later