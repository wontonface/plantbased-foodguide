import { useState, useEffect } from 'react';
import type { 
    Veggie, 
    VeggieApiResponse,
    UseVeggiesResult,
    VeggieCategory,
    Frequency,
    Season,
    Color
} from '../types/veggie';

import {
    VeggieCategory as CategoryEnum,
    Frequency as FrequencyEnum,
    Season as SeasonEnum,
    Color as ColorEnum
} from '../types/veggie';


const API_BASE_URL = 'http://localhost:5001';


// Type guards to validate values

const isValidCategory = (value: string): value is VeggieCategory => {
    return Object.values(CategoryEnum).includes(value as VeggieCategory);
};

const isValidFrequency = (value: string): value is Frequency => {
    return Object.values(FrequencyEnum).includes(value as Frequency);
};

const isValidSeason = (value: string): value is Season => {
    return Object.values(SeasonEnum).includes(value as Season);
};

const isValidColor = (value: string): value is Color => {
    return Object.values(ColorEnum).includes(value as Color);
};

const convertApiResponseToVeggie = (apiVeggie: VeggieApiResponse): Veggie | null => {
    try {

        // Debug logging
        console.log(`Converting veggie: ${apiVeggie.name}`);
        console.log('Seasons:', apiVeggie.season, 'Type:', typeof apiVeggie.season);
        console.log('Colors:', apiVeggie.color, 'Type:', typeof apiVeggie.color);

        // Validation
        if (!isValidCategory(apiVeggie.category)) {
            console.warn(`Invalid category: ${apiVeggie.category} for veggie: ${apiVeggie.name}`);
            return null;
        }

        if (!isValidFrequency(apiVeggie.frequency)) {
            console.warn(`Invalid frequency: ${apiVeggie.frequency} for veggie: ${apiVeggie.name}`);
            return null;
        }

        const seasonsArray = Array.isArray(apiVeggie.season) ? apiVeggie.season : [];
        const colorsArray = Array.isArray(apiVeggie.colors) ? apiVeggie.colors : [];

        const validSeasons = seasonsArray.filter((season): season is Season => {
            const isValid = isValidSeason(season);
            if (!isValid) {
                console.warn(`Invalid season: ${season} for veggie: ${apiVeggie.name}`);
            }
            return isValid;
        });
        
        const validColors = colorsArray.filter((color): color is Color => {
            const isValid = isValidColor(color);
            if (!isValid) {
                console.warn(`Invalid color: ${color} for veggie: ${apiVeggie.name}`);
            }
            return isValid;
        });

        // Add further validation for additional veggie properties

        return {
            name: apiVeggie.name,
            category: apiVeggie.category as VeggieCategory,
            frequency: apiVeggie.frequency as Frequency,
            season: validSeasons,
            functions: apiVeggie.functions || [], // Placeholder
            nutrition: apiVeggie.nutrition || [], // Placeholder
            color: validColors
        };
    } catch (error) {
        console.error(`Error converting veggie ${apiVeggie.name}:`, error);
        return null
    }
};

export const useVeggies = (): UseVeggiesResult => {
    const [veggies, setVeggies] = useState<Veggie[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchVeggies = async (): Promise<void> => {
            try {
                console.log('Fetching veggies from API...');
                const response = await fetch(`${API_BASE_URL}/api/veggies`);

                if (!response.ok) {
                    throw new Error(`API error: ${response.status} ${response.statusText}`);
                }

                const apiData: VeggieApiResponse[] = await response.json();
                console.log('Received raw API data:', apiData);


                // Convert and validate veggies
                const convertedVeggies: Veggie[] = apiData
                    .map(convertApiResponseToVeggie)
                    .filter((veggie): veggie is Veggie => veggie !== null);

                if (convertedVeggies.length !== apiData.length) {
                    console.warn(
                        `Filtered out ${apiData.length - convertedVeggies.length} invalid veggies`
                    );
                }

                console.log('Converted to strongly-typed veggies:', convertedVeggies);
                setVeggies(convertedVeggies);
                setError(null);
            } catch (err) {
                console.error('Error fetching veggies:', err);
                const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
                setError(errorMessage);
                setVeggies([]);
            } finally {
                setLoading(false);
            }
        };

        fetchVeggies();
    }, []);

    return {
        veggies,
        loading,
        error,
        count: veggies.length
    };
};