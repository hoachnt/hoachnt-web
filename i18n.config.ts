export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: {
      name: "Nguyen Tien Hoach",
      hello: "hello",
      aboutMeText1:
        "My name is Nguyen Tien Hoach. I'm an independent software developer currently living in Vietnam. I'm a Fullstack developer. My main tools are golang, vue and react.",
      aboutMeText2:
        "In addition to programming, I enjoy reading manga and manhwa (my favorite is Legend of the Northern Blade).",
      followMeOn: "You can follow me on",
    },
    ru: {
      name: "Нгуен Тиен Хоач",
      hello: "привет",
      aboutMeText1:
        "Меня зовут Нгуен Тиен Хоач. Я независимый разработчик программного обеспечения, в настоящее время живу во Вьетнаме. Я Fullstack-разработчик. Мои основные инструменты — golang, vue и React.",
      aboutMeText2:
        "Помимо программирования, я люблю читать мангу и манхву (мой любимый — «Легенда о Северном клинке»).",
      followMeOn: "Вы можете следить за мной",
    },
    vn: {
      name: "Nguyen Tien Hoach",
    },
  },
}));
