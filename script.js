const cats = [
  {
    name: "Лара",
    img_link:
      "https://www.friendforpet.ru/api/sites/default/files/2021-09/167200DD-A44F-4845-8D4D-ACCFC180165A.jpeg",
    age: 8,
    rate: 7,
    favourite: false,
    description:
      "Лара – шотландская вислоухая, у нее остеохондродисплазия. Лара спокойная, очень ласковая и контактная. Болезнь не лечится и специального ухода не нужно.",
    id: 1,
  },
  {
    name: "Базиль",
    img_link:
      "https://www.friendforpet.ru/api/sites/default/files/2022-01/064AEBCB-45EC-4CE7-AB13-C65F10F00B7B.jpeg",
    age: 2,
    rate: 10,
    favourite: false,
    description:
      "Внимательный, активный и ласковый. Любит играть, катать мяч, и мурчать на пледе рядом с людьми! Прилично воспитан, приучен к лотку. Вакцинирован, имеет ветеринарный паспорт.",
    id: 2,
  },
  {
    name: "Риш",
    img_link: "https://www.friendforpet.ru/api/sites/default/files/2022-01/_DM34706.JPG",
    age: 1,
    rate: 10,
    favourite: true,
    description:
      "Риш любит лесенки, канаты. Очень активный и дружелюбный кот. Риш полностью здоров, привит, кастрирован. Использует лоточек и очень аккуратен.",
    id: 3,
  },
  {
    name: "Элли",
    img_link: "https://www.friendforpet.ru/api/sites/default/files/2022-01/1_25.jpg",
    age: 4,
    rate: 8,
    favourite: false,
    description:
      "Элли обладает мягким и добрым характером. Очень любит всевозможные лакомства и вкусно покушать. Не доверяет людям, потребуется время, чтобы стать ей другом. Приучена к лотку и когтеточке",
    id: 4,
  },
  {
    name: "Чарли",
    img_link:
      "https://www.friendforpet.ru/api/sites/default/files/2022-01/%D0%BB%D1%8F%D0%BB%D1%8F%20%D0%B8%20%D0%BA%D0%BE%D1%82%201.jpg",
    age: 1,
    rate: 8,
    favourite: false,
    description:
      "Чёрно-белый юный котофилософ очень любит размышлять и быть надежным. Пока что не доверяет людям, не агрессивный. Ладит с другими животными, приучен к лотку и когтеточке",
    id: 5,
  },
  {
    name: "Стефани",
    img_link: "https://www.friendforpet.ru/api/sites/default/files/2022-01/4_30.jpg",
    age: 6,
    rate: 9,
    favourite: false,
    description:
      "Прелестная Стефани – трогательная, добродушная и очень-очень общительная девочка как никто другой нуждается в заботе и любви. Приучена к лотку и когтеточке",
    id: 6,
  },
  {
    name: "Дуся",
    img_link:
      "https://www.friendforpet.ru/api/sites/default/files/2022-02/B1444207-6EE3-4BAA-97F7-2F9666AE2F63.jpeg",
    age: 1,
    rate: 9,
    favourite: false,
    description:
      "Дусеньке около 1 года с небольшим, здорова, привита, стерилизована. Лоточек и когтеточку знает прекрасно. Очень общительная и нежная, хочет постоянного внимания.",
    id: 7,
  },
  {
    name: "Бруно",
    img_link: "https://www.friendforpet.ru/api/sites/default/files/2022-01/IMG-20211223-WA0049.jpg",
    age: 1,
    rate: 10,
    favourite: false,
    description:
      "Очаровательный активный кот Бруно, находится в постоянном движении! Очаровательный и ласковый кот. Приучен к лотку, ладит с другими котами, привит.",
    id: 8,
  },
  {
    name: "Лара",
    img_link:
      "https://www.friendforpet.ru/api/sites/default/files/2022-01/%D1%81%D0%B2%D0%B5%D1%82%D0%BB%D1%8F%D1%87%D0%BE%D0%BA%20%D0%BB%D0%B0%D1%80%D0%B0%201.jpg",
    age: 1,
    rate: 9,
    favourite: true,
    description:
      "Немного боязливый, но очень добрый и нежный кот Светлячок. Приучен к лотку и когтеточке, ладит с детьми, привит. Станет вам хорошим другом",
    id: 9,
  },
];
const container = document.getElementById("cats-container");
function createCatCard(cat) {
  // Создаем div-обертку
  const card = document.createElement("div");
  card.classList.add("cat-card");
  if (cat.favourite) {
    card.classList.add("favourite");
  }
  const img = document.createElement("img");
  img.src = cat.img_link;
  img.alt = `Фото кота ${cat.name}`;
  img.onerror = function () {
    this.src = "https://via.placeholder.com/300x200?text=Нет+фото";
  };

  const title = document.createElement("h2");
  title.textContent = cat.name;

  const age = document.createElement("p");
  let ageText = "лет";
  if (cat.age % 10 === 1 && cat.age % 100 !== 11) ageText = "год";
  else if ([2, 3, 4].includes(cat.age % 10) && ![12, 13, 14].includes(cat.age % 100))
    ageText = "года";
  age.textContent = `Возраст: ${cat.age} ${ageText}`;

  const rate = document.createElement("p");
  rate.textContent = `Рейтинг: ${cat.rate}/10 `;

  const desc = document.createElement("p");
  desc.textContent = cat.description;
  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(age);
  card.appendChild(rate);
  card.appendChild(desc);
  return card;
}
cats.forEach(function (cat) {
  const catElement = createCatCard(cat);
  container.appendChild(catElement);
});
