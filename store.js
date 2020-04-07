const STORE = {
    questions: [
        {
            question: "What caused the Black Death/Bubonic Plague?",
            questionImage: "Quiz-App-Bubonic-Plague-Bacteria-Image.jpeg",
            imageAlt: "image of bubonic plague bacteria",
            answers: [
                "A: Bacteria",
                "B: Virus",
                "C: Parasite",
                "D: Killer Bees"
            ],
            answer: "A: Bacteria",
            answerDescription: "The answer is option A, Bacteria. Its scientific name is Yersinia Pestis",

        },
        {
            question: "How many people did the Black Death/Bubonic Plague kill?",
            questionImage: "Quiz-App-Bubonic-Plague-Doctor-Image.jpeg",
            imageAlt: "image of a plague doctor",
            answers: [
                "A: 75-200 million people",
                "B: 1-5 million people",
                "C: 1 trillion people",
                "D: 2.5-3 billion people"
            ],
            answer: "A: 75-200 million people",
            answerDescription: "The answer is option A, 75-200 million people. It wiped out between 30-60% of Europe’s population in the mid 14th century",
        },
        {
            question: "What was the cause of the Spanish Flu?",
            questionImage: "Quiz-App-Spanish-Flu-Image-One.jpeg",
            imageAlt: "image of two 1920s women wearing face masks",
            answers: [
                "A: Parasite",
                "B: Rabid monkeys",
                "C: Virus" ,
                "D: Aliens"
            ],
            answer: "C: Virus",
            answerDescription: "The answer is option C, Virus. It was a severe type of H1N1",
        },
        {
            question:"What year did the Spanish Flu epidemic occur?",
            questionImage: "Quiz-App-Spanish-Flu-Image-Two.jpeg",
            imageAlt:"image of an entire gymn filled with sick patients",
            answers: [
                "A: 1776",
                "B: 1985",
                "C: 2009",
                "D: 1918"
            ],
            answer: "D: 1918",
            answerDescription: "The answer is option D, 1918. It was especially devastating as it occured directly in the aftermath of WWI",
        },
        {
            question:"What disease has killed the most people in human History?",
            questionImage: "Quiz-App-Malaria-Image.jpeg",
            imageAlt: "image of skeletons playing musical instruments",
            answers: [
                "A: AIDS",
                "B: Polio",
                "C: Malaria", 
                "D: Corona Virus"
            ],
            answer: "C: Malaria",
            answerDescription: "The answer is option C, Malaria. It has been estimated to have killed well over 1 billion people",
        },
    ],
    currentQuestion: 0,
    score: 0
};