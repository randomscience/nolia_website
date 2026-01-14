import type { ImageMetadata } from 'astro';

// Import your logo images
// Replace these imports with your actual logo files
import logoDecathlon from '../assets/logo-decathlon.png';
import logoTheKidly from '../assets/logo-thekidly.png';
import logoFundacjaConnect4Kids from '../assets/logo-fundacja-connect4kids.png';
import logoKidstation from '../assets/logo-kidstation.webp'
import logoRandomScience from '../assets/logo-randomscience.webp'

export interface Logo {
    src: ImageMetadata;
    alt: string; // The partner company's name
}

export interface LogoList {
    id: string;
    logos: Logo[];
}

// Example logo lists with imported images
export const logoLists: Record<string, LogoList> = {
    main: {
        id: 'main',
        logos: [
            {
                src: logoDecathlon,
                alt: 'Decathlon',
            },
            {
                src: logoTheKidly,
                alt: 'The Kidly',
            },
            {
                src: logoFundacjaConnect4Kids,
                alt: 'Fundacja Connect4Kids',
            },
            {
                src: logoKidstation,
                alt: 'Kidstation',
            },
            {
                src: logoRandomScience,
                alt: 'Random Science'
            }
        ],
    },
};
