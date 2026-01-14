export interface FaqItem {
    question: string;
    answer: string;
}

export interface FaqList {
    id: string;
    faqs: FaqItem[];
}

export const faqLists: Record<string, FaqList> = {
    main: {
        id: 'main',
        faqs: [
            {
                question: "Ile kosztuje dostęp do platformy?",
                answer: "Dostęp do platformy jest całkowicie darmowy"
            },
            {
                question: "Jak założyć konto?",
                answer: "Proces zakładania konta różni się nieznacznie w zależności od rodzaju użytkownika:\n- [Poradnik dla użytkowników indywidualnych]()\n - [Poradnik dla administratorów placówki](/blog/placowka-tworzenie-konta)\n - [Poradnik dla usługodawców](/blog/uslugodawca-tworzenie-konta)\n"
            },
            {
                question: "Jakie rodzaje zajęć są dostępne?",
                answer: "System nie nakłada ograniczeń na rodzaj zajęć aktualnie dostępną listę mogą Państwo znalezć wykorzystując [naszą wyszukiwarkę](/#search)"
            },
        ]
    }
};
