import { useState, useEffect } from 'react';
import type { 
    Veggie, 
    VeggieApiResponse,
    UseVeggiesResult,
    VeggieCategory,
    Frequency,
    Seasons,
    Colors
} from '../types/veggie';

import {
    VeggieCategory as CategoryEnum,
    Frequency as FrequencyEnum,
    Seasons as SeasonsEnum,
    Colors as ColorsEnum
} from '../types/veggie';


const API_BASE_URL = 'http://localhost:5001';


// Type guards to validate values

const isValidCategory = (value: string): value is VeggieCategory => {
    return Object.values(CategoryEnum).includes(value as VeggieCategory);
};

const isValidFrequency = (value: string): value is Frequency => {
    return Object.values(FrequencyEnum).includes(value as Frequency);
};

const isValidSeason = (value: string): value is Seasons => {
    return Object.values(SeasonsEnum).includes(value as Seasons);
};

const isValidColor = (value: string): value is Colors => {
    return Object.values(ColorsEnum).includes(value as Colors);
};

const convertApiResponseToVeggie = (apiVeggie: VeggieApiResponse): Veggie | null => {
    try {

        // Debug logging
        console.log(`Converting veggie: ${apiVeggie.name}`);
        console.log('Seasons:', apiVeggie.seasons, 'Type:', typeof apiVeggie.seasons);
        console.log('Colors:', apiVeggie.colors, 'Type:', typeof apiVeggie.colors);

        // Validation
        if (!isValidCategory(apiVeggie.category)) {
            console.warn(`Invalid category: ${apiVeggie.category} for veggie: ${apiVeggie.name}`);
            return null;
        }

        if (!isValidFrequency(apiVeggie.frequency)) {
            console.warn(`Invalid frequency: ${apiVeggie.frequency} for veggie: ${apiVeggie.name}`);
            return null;
        }

        const seasonsArray = Array.isArray(apiVeggie.seasons) ? apiVeggie.seasons : [];
        const colorsArray = Array.isArray(apiVeggie.colors) ? apiVeggie.colors : [];

        const validSeasons = seasonsArray.filter((seasons): seasons is Seasons => {
            const isValid = isValidSeason(seasons);
            if (!isValid) {
                console.warn(`Invalid season: ${seasons} for veggie: ${apiVeggie.name}`);
            }
            return isValid;
        });
        
        const validColors = colorsArray.filter((colors): colors is Colors => {
            const isValid = isValidColor(colors);
            if (!isValid) {
                console.warn(`Invalid color: ${colors} for veggie: ${apiVeggie.name}`);
            }
            return isValid;
        });

        // Add further validation for additional veggie properties

        return {
            name: apiVeggie.name,
            category: apiVeggie.category as VeggieCategory,
            frequency: apiVeggie.frequency as Frequency,
            seasons: validSeasons,
            functions: apiVeggie.functions || [], // Placeholder
            nutrition: apiVeggie.nutrition || [], // Placeholder
            colors: validColors
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