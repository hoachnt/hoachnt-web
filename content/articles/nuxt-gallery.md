---
title: "Nuxt gallery + Directus"
description: "Build nuxt gallery with Directus API"
published: 2024/10/31
slug: "nuxt-gallery"
---

![Nuxt gallery](/articles/nuxt-gallery.png)

## Overview

This project is designed to create an image gallery using Nuxt.js integrated with Directus for a more streamlined setup.

## Key Features

-   Utilizes **Directus** for content management.
-   Forked from **nuxt-hub** based [Flosciante/nuxt-image-gallery](https://github.com/Flosciante/nuxt-image-gallery).
-   Simplified configuration compared to the original **nuxt-hub** integration.

## Features

-   📷 **Image upload** and display with [`Directus files API`](https://docs.directus.io/reference/files.html)
-   🖼️ **Image Filters**: Apply a variety of filters to your images.
-   💾 **Saving**: Save your images with applied filters.
-   🎠 **Custom Carousel**: Includes a custom carousel component that can be adapted for in-house use.
-   🏃🏻 [View transition API](https://developer.chrome.com/docs/web-platform/view-transitions) The View Transitions API provides a mechanism for easily creating animated transitions between different DOM states while also updating the DOM contents in a single step.
-   🔑 [Nuxt Auth Utils](https://github.com/Atinux/nuxt-auth-utils) Minimalist Authentication module for Nuxt exposing Vue composables and server utils.

## Stack

-   [Directus](https://directus.io/) - The flexible backend for all of your projects
-   [NuxtUI](https://ui.nuxt.com/getting-started) - A UI Library for Modern Web Apps
-   [Nuxt Fonts](https://github.com/nuxt/fonts) - Plug-and-play custom web font optimization and configuration for Nuxt apps.
-   [VueUse](https://github.com/antfu/vueuse) - Collection of useful composition APIs
-   [TypeScript](https://www.typescriptlang.org/)

## Getting Started

To get started with this repository, clone it and follow the setup instructions to configure Directus with Nuxt.js.

```bash
git clone https://github.com/hoachnt/nuxt-gallery.git
cd nuxt-image-gallery-directus
```

Don't forget to change the .env.example file to .env and add your variable values.

## Environment Variables

-   `NUXT_ADMIN_PASSWORD` - A password to access the admin panel and upload images, will default to `admin` if not provided.
-   `NUXT_SESSION_PASSWORD` - A secret key for session encryption used by [nuxt-auth-utils](https://github.com/Atinux/nuxt-auth-utils), will be generated automatically if not provided in development mode.

## Links

-   [GitHub Repository](https://github.com/hoachnt/nuxt-gallery)
-   [Demo](https://nuxtd-gallery.netlify.app/)
