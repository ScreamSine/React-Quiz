const data = [
  {
    question: "Как расшифровывается CSS?",
    incorrectAnswers: [
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets",
    ],
    correctAnswer: "Cascading Style Sheets",
  },

  {
    question:
      "Где в HTML-документе правильное место, для расположения CSS файла?",
    incorrectAnswers: [
      "В разделе <body>",
      "В конце документа",
      "Вы не можете размещать CSS в HTML",
    ],
    correctAnswer: "В <head> документа",
  },
  {
    question: "Какой тег используют для подключения CSS?",
    incorrectAnswers: ["<script>", "<headStyle>", "<css>"],
    correctAnswer: "<style>",
  },
  {
    question: "Какой HTML атрибут используется для встроенных стилей?",
    incorrectAnswers: ["class", "font", "styles"],
    correctAnswer: "style",
  },
  {
    question: "Какой синтаксис верный?",
    incorrectAnswers: [
      "{body:color=black;}",
      "{body;color:black;}",
      "body:color=black;",
    ],
    correctAnswer: "body {color: black;}",
  },
  {
    question: "Как закоментировать код в CSS?",
    incorrectAnswers: [
      "' это комментарий",
      "// это комментарий",
      "// это комментарий //",
    ],
    correctAnswer: "/* это комментарий */",
  },
  {
    question: "Какое свойство используется для изменения цвета фона?",
    incorrectAnswers: ["color", "bgcolor", "bgColor"],
    correctAnswer: "background-color",
  },
  {
    question: "Как добавить цвет фона всем тегам <h1> одновременно?",
    incorrectAnswers: [
      "all.h1 {background-color:#FFFFFF;}",
      "h1.setAll {background-color:#FFFFFF;}",
      "h1.all {background-color:#FFFFFF;}",
    ],
    correctAnswer: "h1 {background-color:#FFFFFF;}",
  },
];

export default data;
