export const categoryToSectionNameConverter = (category) => {
  switch (category) {
    case "wine":
      return "Вино";
    case "champagne":
      return "Шампанское и игристое";
    case "strong":
      return "Крепкий алкоголь";
    case "beer":
      return "Пиво";
  }
};
