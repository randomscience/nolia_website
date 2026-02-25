import { Zap, Shield, Heart, Coffee, Smile, Type, TabletSmartphone, CodeXml } from 'lucide-astro';

// Define the LucideIcon type based on the structure of Lucide icons
type LucideIcon = typeof Zap;

export interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
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
                icon: Zap,
                title: 'Oceny, opinie i certyfikacja',
                description: 'Zweryfikowani organizatorzy z opiniami i certyfikatami gwarantują profesjonalne zajęcia'
            },
            {
                icon: Shield,
                title: 'Bezpieczne umowy i płatności',
                description: 'Wirtualne umowy i automatyczny podział wynagrodzania dla obu stron'
            },
            {
                icon: TabletSmartphone,
                title: 'Zajęcia dla seniorów w zasięgu ręki',
                description: 'Intuicyjna aplikacja dostępna na wszystkich urządzeniach mobilnych i komputerach'
            },
            {
                icon: Heart,
                title: 'Dedykowane wsparcie',
                description: 'Pomoc 24/7 dla podopiecznych, domów opieki i organizatorów zajęć'
            },
            {
                icon: Smile,
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
