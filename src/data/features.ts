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
                description: 'Już nigdy nie zastanawiaj się czy organizatorzy zajęć staną na wysokości zadania'
            },
            {
                icon: Shield,
                title: 'Wirtualne umowy i podział płatności',
                description: 'NOLIA łączy usługodawców z domami opieki'
            },
            {
                icon: TabletSmartphone,
                title: 'Zajęcia dla seniorów w zasięgu ręki',
                description: 'Mobile-friendly out of the box'
            },
            {
                icon: Smile,
                title: 'Raporty i statystyki',
                description: 'Customize the theme to your liking'
            },
            {
                icon: Shield,
                title: 'Jedno miejsce dla wszystkich zajęć dla seniorów',
                description: 'NOLIA łączy usługodawców z domami opieki'
            },
        ]
    },
    secondary: {
        id: 'secondary',
        features: [
            {
                icon: Heart,
                title: 'Made with Love',
                description: 'Crafted with attention to detail'
            },
            {
                icon: Coffee,
                title: 'Always Fresh',
                description: 'Regular updates and improvements'
            },
            {
                icon: Smile,
                title: 'User Friendly',
                description: 'Intuitive and easy to use'
            }
        ]
    }
};
