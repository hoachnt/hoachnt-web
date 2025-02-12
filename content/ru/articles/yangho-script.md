---
title: "YanghoScript"
description: "YanghoScript — это простой язык программирования с возможностью работы с переменными, арифметическими операциями и выводом результатов. Был создан для вьетнамских гангстеров😎"
published: 2024/09/16
slug: "yangho-script"
---

YanghoScript — это простой язык программирования с возможностью работы с переменными, арифметическими операциями и выводом результатов. Был создан для вьетнамских гангстеров😎.

## Возможности

### Существующие возможности:

- Присвоение значений переменным
- Арифметические операции
- Вывод результатов
- Комментирование строк кода

### Будущие возможности (Не в ближайшее время):

- Условные операторы(Реализован частично)
- Конструкции циклов
- Функции
- Обработка ошибок

## Установка

Чтобы начать работу с YanghoScript, вам понадобится Node.js. Скачайте и установите его с [официального сайта Node.js](https://nodejs.org/).

Затем выполните следующие шаги:

1. Клонируйте репозиторий:

```bash
git clone https://github.com/hoachnt/YanghoScript.git
```

2. Установите зависимости:

```bash
cd YanghoScript
npm install
```

## Использование

После установки вы можете использовать YanghoScript для выполнения программ, написанных на этом языке. Откройте файл `code.ys` и напишите в нем свой код на YanghoScript.

Пример кода:

````js
text BAYHETVAODAY 'Hoach';
summ BAYHETVAODAY 6 + 5;

NOILIENTUC text;
NOILIENTUC summ;

sumandmin BAYHETVAODAY summ - ((20 + 2) * 2);

NOILIENTUC sumandmin;
NOILIENTUC 'Chao ca lo nha minh nha';

NOILIENTUC 1 UY TIN 1;
NOILIENTUC 2 NHIEU HON 1;
NOILIENTUC 1 IT HON 2;
NOILIENTUC 1 NHIEU BANG 1;
NOILIENTUC 2 IT BANG 2;

NOILIENTUC 2 UY TIN 1;
NOILIENTUC 2 NHIEU HON 3;
NOILIENTUC 1 IT HON 0;
NOILIENTUC 1 NHIEU BANG 2;
NOILIENTUC 2 IT BANG 1;

NEU (2 UY TIN 1) {
    NOILIENTUC 'Yasuo';
} KO THI {
    NOILIENTUC 'Kosuo';
}

NOILIENTUC 'All Works!!!';

// NOILIENTUC 'Hello world' - comment```
````

Чтобы запустить программу, используйте следующую команду в терминале:

```bash
npm start
```

или

```bash
yarn start
```

Убедитесь, что ваш код написан в файле `code.ys`.

## Структура кода

YanghoScript поддерживает следующие конструкции:

- Присвоение значений переменным: `variable = value;`
- Арифметические операции: `+, -, *, /`
- Используйте скобки для правильного порядка арифметических операций. Например, для выражения `1 + 2 * 3` его следует записывать как `1 + (2 * 3)`.

Примеры правильных выражений:

```js
1 + 2 * 3; // Result: 9(не корректно)
1 + 2 * 3; // Result: 7(корректно)
10 / (2 + 3); // Result: 2(корректно)
```

Использование скобок гарантирует правильный порядок операций и предотвращает ошибки в расчетах.

## Важно

YanghoScript находится на ранней стадии разработки и может иметь некоторые ограничения и недостатки. Если вы найдете ошибки или у вас есть предложения по улучшению, не стесняйтесь сообщать об этом в разделе Issues на [GitHub](https://github.com/hoachnt/YanghoScript).

Не забывайте, что YanghoScript — это шуточный язык программирования.
