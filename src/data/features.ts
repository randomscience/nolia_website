import { Zap, Shield, Heart, Coffee, Smile, Type, TabletSmartphone, CodeXml } from 'lucide-astro';
import iconBezpieczenstwo from '@assets/icons/bezpieczenstwo.svg';
import iconOcena from '@assets/icons/ocena.svg';
import iconRaport from '@assets/icons/raport.svg';
import iconWsparcie from '@assets/icons/wsparcie.svg';
import iconZajecia from '@assets/icons/zajecia.svg';

// Define the LucideIcon type based on the structure of Lucide icons
type LucideIcon = typeof Zap;

export interface Feature {
    icon: any;
    title: string;
    description: string;
    variant?: 'green' | 'beige' | 'white';
}

export function variantToBackgroundColor(variant: Feature['variant']): string {
    switch (variant) {
        case 'green':
            return 'bg-primary/90';
        case 'beige':
            return 'bg-background/90';
        case 'white':
            return 'bg-white';
        default:
            return 'bg-background/90'; // Default background color
    }
}

export function variantToTextColor(variant: Feature['variant']): string {
    switch (variant) {
        case 'green':
            return 'text-white';
        case 'beige':
            return 'text-primary';
        case 'white':
            return 'text-primary';
        default:
            return 'text-primary'; // Default text color
    }
}

export interface FeatureList {
    id: string;
    features: Feature[];
}

// Example feature lists
export const featureLists: Record<string, FeatureList> = {
    main: {
        id: 'main',
        features: [
            {
                icon: iconOcena,
                title: 'Oceny, opinie i certyfikacja',
                description: 'Zweryfikowani organizatorzy z opiniami i certyfikatami gwarantują profesjonalne zajęcia',
                variant: 'green'
            },
            {
                icon: iconBezpieczenstwo,
                title: 'Bezpieczne umowy i płatności',
                description: 'Wirtualne umowy i automatyczny podział wynagrodzania dla obu stron'
            },
            {
                icon: iconZajecia,
                title: 'Zajęcia dla seniorów w zasięgu ręki',
                description: 'Intuicyjna aplikacja dostępna na wszystkich urządzeniach mobilnych i komputerach'
            },
            {
                icon: iconWsparcie,
                title: 'Dedykowane wsparcie',
                description: 'Pomoc 24/7 dla podopiecznych, domów opieki i organizatorów zajęć'
            },
            {
                icon: iconRaport,
                title: 'Raporty i statystyki',
                description: 'Szczegółowe analizy frekwencji, zaangażowania i zadowolenia uczestników'
            },
        ]
    },
    secondary: {
        id: 'secondary',
        features: [
            {
                icon: Heart,
                title: 'Solidne bezpieczeństwo danych',
                description: 'Szyfrowanie end-to-end i pełna zgodność z RODO'
            },
            {
                icon: Coffee,
                title: 'Stale rozwijane',
                description: 'Regularne aktualizacje na podstawie opinii użytkowników'
            },
            {
                icon: Smile,
                title: 'Łatwe w użyciu',
                description: 'Intuicyjny interfejs dostępny dla wszystkich pokoleń'
            }
        ]
    }
};
