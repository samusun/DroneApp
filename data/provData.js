const questions = [
  {
    topic: "Vilda djur",
    frågor: [
      {
        fråga: "Hur lång är en giraff?",
        svar: [
          { id: "1", text: "Cirka 3 meter" },
          { id: "2", text: "Cirka 5 meter", correct: true },
          { id: "3", text: "Cirka 7 meter" },
          { id: "4", text: "Cirka 9 meter" },
        ],
      },
      {
        fråga: "Hur stor är en blåval?",
        svar: [
          { id: "1", text: "Cirka 13 meter" },
          { id: "2", text: "Cirka 15 meter", correct: true },
          { id: "3", text: "Cirka 17 meter" },
          { id: "4", text: "Cirka 19 meter" },
        ],
      },
      {
        fråga: "Vad väger en haj?",
        svar: [
          { id: "1", text: "50kg" },
          { id: "2", text: "100kg", correct: true },
          { id: "3", text: "5kg" },
          { id: "4", text: "300kg" },
        ],
      },
      {
        fråga: "Hur stor är en blåval?",
        svar: [
          { id: "1", text: "Cirka 3 meter" },
          { id: "2", text: "Cirka 5 meter", correct: true },
          { id: "3", text: "Cirka 7 meter" },
          { id: "4", text: "Cirka 9 meter" },
        ],
      },
    ],
  },

  {
    topic: "Flygregleringar",
    frågor: [
      {
        fråga: "Hur högt får man flyga?",
        svar: [
          { id: "1", text: "Cirka 3 meter" },
          { id: "2", text: "Cirka 5 meter", correct: true },
          { id: "3", text: "Cirka 7 meter" },
          { id: "4", text: "Cirka 9 meter" },
        ],
      },
      {
        fråga: "Vart får man inte flyga?",
        svar: [
          { id: "1", text: "stan" },
          { id: "2", text: "stranden", correct: true },
          { id: "3", text: "hemma" },
          { id: "4", text: "utomhus" },
        ],
      },
    ],
  },
];

export default questions;

/* 

    topic: annat[
      {
        question: "Hur högt får man flyga?",
        answers: [
          { id: "1", text: "10 meter" },
          { id: "2", text: "20 meter", correct: true },
          { id: "3", text: "30 meter" },
          { id: "4", text: "Det finns ingen gräns" },
        ],
      },
      {
        question: "Får man flyga över andra människor",
        answers: [
          { id: "1", text: "Ja, alltid" },
          { id: "2", text: "Nej" },
          { id: "3", text: "Bara om det är dina kompisar" },
          { id: "4", text: "Ja, om man frågar först", correct: true },
        ],
      },
    ],
    */
