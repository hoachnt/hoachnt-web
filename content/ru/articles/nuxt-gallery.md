---
title: "Nuxt gallery + Directus"
description: "Создание галереи на Nuxt с использованием API Directus"
published: 2024/10/31
slug: "nuxt-gallery"
---

![Nuxt gallery](/articles/nuxt-gallery.png)

## Обзор

Этот проект создан для разработки галереи изображений с использованием Nuxt.js в интеграции с Directus для более удобной настройки.

## Основные особенности

-   Использует **Directus** для управления контентом.
-   Основан на форке **nuxt-hub** от [Flosciante/nuxt-image-gallery](https://github.com/Flosciante/nuxt-image-gallery).
-   Упрощённая конфигурация по сравнению с оригинальной интеграцией **nuxt-hub**.

## Функции

-   📷 **Загрузка и отображение изображений** с помощью [`Directus files API`](https://docs.directus.io/reference/files.html)
-   🖼️ **Фильтры изображений**: применяйте различные фильтры к вашим изображениям.
-   💾 **Сохранение**: сохраните изображения с применёнными фильтрами.
-   🎠 **Кастомный карусель**: включает адаптируемый компонент карусели, который можно использовать в других проектах.
-   🏃🏻 [View transition API](https://developer.chrome.com/docs/web-platform/view-transitions): API для плавных анимаций перехода между разными состояниями DOM и одновременного обновления содержимого DOM.
-   🔑 [Nuxt Auth Utils](https://github.com/Atinux/nuxt-auth-utils): минималистичный модуль аутентификации для Nuxt, предоставляющий композиционные API для Vue и утилиты для сервера.

## Стек технологий

-   [Directus](https://directus.io/) — гибкий backend для ваших проектов
-   [NuxtUI](https://ui.nuxt.com/getting-started) — библиотека пользовательского интерфейса для современных веб-приложений
-   [Nuxt Fonts](https://github.com/nuxt/fonts) — оптимизация и конфигурация веб-шрифтов для приложений Nuxt
-   [VueUse](https://github.com/antfu/vueuse) — коллекция полезных Composition API
-   [TypeScript](https://www.typescriptlang.org/)

## Начало работы

Чтобы начать работу с этим репозиторием, клонируйте его и следуйте инструкциям по настройке Directus с Nuxt.js.

```bash
git clone https://github.com/hoachnt/nuxt-gallery.git
cd nuxt-gallery
```

Не забудьте переименовать файл .env.example в .env и добавить свои значения переменных.

## Переменные окружения

-   `NUXT_ADMIN_PASSWORD` - Пароль для доступа к панели администратора и загрузки изображений, по умолчанию установлен в admin, если не указан.
-   `NUXT_SESSION_PASSWORD` - Секретный ключ для шифрования сессий, используется nuxt-auth-utils, генерируется автоматически, если не указан в режиме разработки.

## Ссылки

-   [Репозиторий на GitHub](https://github.com/hoachnt/nuxt-gallery)
-   [Демо](https://nuxtd-gallery.netlify.app/)
