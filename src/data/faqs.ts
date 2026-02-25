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
            // {
            //     question: "Ile kosztuje dostęp do platformy?",
            //     answer: "Dostęp do platformy jest całkowicie darmowy"
            // },
            // {
            //     question: "Jak założyć konto?",
            //     answer: "Proces zakładania konta różni się nieznacznie w zależności od rodzaju użytkownika:\n- [Poradnik dla użytkowników indywidualnych]()\n - [Poradnik dla administratorów placówki](/blog/placowka-tworzenie-konta)\n - [Poradnik dla usługodawców](/blog/uslugodawca-tworzenie-konta)\n"
            // },
            // {
            //     question: "Jakie rodzaje zajęć są dostępne?",
            //     answer: "System nie nakłada ograniczeń na rodzaj zajęć aktualnie dostępną listę mogą Państwo znalezć wykorzystując [naszą wyszukiwarkę](/#search)"
            // },
            {
                "question": "Czym jest platforma NOLIA?",
                "answer": "NOLIA to aplikacja typu marketplace łącząca klientów (osoby starsze i opiekunów), placówki (np. domy spokojnej starości) oraz usługodawców oferujących zajęcia i aktywności dla seniorów."
            },
            {
                "question": "Na jakich urządzeniach można korzystać z aplikacji?",
                "answer": "Platforma będzie dostępna jako strona internetowa oraz aplikacja mobilna na systemy iOS i Android."
            },
            {
                "question": "W jaki sposób mogę zarejestrować się w systemie?",
                "answer": "Użytkownicy mogą zarejestrować się za pomocą adresu e-mail i hasła lub skorzystać z istniejącego konta Google dzięki technologii OAuth."
            },
            {
                "question": "Jakie funkcje oferuje NOLIA dla klientów indywidualnych?",
                "answer": "Klienci mogą wyszukiwać instytucje i zajęcia, zarządzać swoim terminarzem oraz dokonywać bezpiecznych płatności bezpośrednio w aplikacji."
            },
            {
                "question": "W jaki sposób placówki mogą współpracować z usługodawcami?",
                "answer": "Placówki mogą oferować swoją infrastrukturę, wyszukiwać usługodawców do prowadzenia zajęć oraz tworzyć, edytować i opłacać wirtualne umowy z poziomu aplikacji."
            },
            {
                "question": "Czy płatności w aplikacji są bezpieczne?",
                "answer": "Tak, bezpieczeństwo podnoszone jest poprzez system certyfikacji, recenzji oraz wprowadzenie mediatora ułatwiającego rozwiązywanie sporów finansowych i zwrotów."
            },
            {
                "question": "Czy mogę zrezygnować z opłaconego wydarzenia?",
                "answer": "System przewiduje możliwość opuszczenia wydarzenia, przy czym w zależności od warunków może to wiązać się z utratą wpłaconej kwoty lub skorzystaniem z mechanizmu zwrotów."
            },
            {
                "question": "Jak weryfikowana jest wiarygodność usługodawców i placówek?",
                "answer": "Wiarygodność jest sprawdzana poprzez weryfikację informacji bankowych (przelew weryfikacyjny) oraz system certyfikatów przyznawanych manualnie przez zespół projektowy."
            },
            {
                "question": "Czy jako usługodawca mogę generować raporty ze swojej działalności?",
                "answer": "Tak, aplikacja oferuje funkcję generowania raportów z uczestnictwa w zajęciach w formie plików Excel, uwzględniających m.in. metryki wyświetleń ofert."
            },
            {
                "question": "Kiedy planowane jest udostępnienie wersji testowej?",
                "answer": "Etap Proof of Concept (PoC) i udostępnienie wersji testowej wybranej grupie testerów zaplanowano na okres od 15 grudnia 2025 r. do 15 marca 2026 r."
            }
        ]
    }
};
