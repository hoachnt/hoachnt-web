---
title: "Nuxt gallery + Directus"
description: "Tạo thư viện ảnh trên Nuxt sử dụng API Directus"
published: 2024/10/31
slug: "nuxt-gallery"
---

![Nuxt gallery](/articles/nuxt-gallery.png)

## Tổng quan

Dự án này được thiết kế để tạo một thư viện ảnh bằng cách sử dụng Nuxt.js tích hợp với Directus nhằm thiết lập dễ dàng hơn.

## Tính năng chính

-   Sử dụng **Directus** cho việc quản lý nội dung.
-   Dựa trên fork của **nuxt-hub** từ [Flosciante/nuxt-image-gallery](https://github.com/Flosciante/nuxt-image-gallery).
-   Cấu hình đơn giản hơn so với tích hợp **nuxt-hub** gốc.

## Các tính năng

-   📷 **Tải lên và hiển thị hình ảnh** qua [`Directus files API`](https://docs.directus.io/reference/files.html)
-   🖼️ **Bộ lọc ảnh**: Áp dụng nhiều bộ lọc cho ảnh của bạn.
-   💾 **Lưu ảnh**: Lưu hình ảnh với các bộ lọc đã được áp dụng.
-   🎠 **Băng chuyền tùy chỉnh**: Bao gồm một thành phần băng chuyền tùy chỉnh có thể sử dụng trong các dự án khác.
-   🏃🏻 [View transition API](https://developer.chrome.com/docs/web-platform/view-transitions): API cung cấp cơ chế tạo chuyển đổi động giữa các trạng thái DOM khác nhau và đồng thời cập nhật nội dung DOM.
-   🔑 [Nuxt Auth Utils](https://github.com/Atinux/nuxt-auth-utils): Mô-đun xác thực tối giản cho Nuxt, cung cấp các API kết hợp cho Vue và các tiện ích trên server.

## Công nghệ sử dụng

-   [Directus](https://directus.io/) - Backend linh hoạt cho các dự án của bạn
-   [NuxtUI](https://ui.nuxt.com/getting-started) - Thư viện giao diện người dùng cho các ứng dụng web hiện đại
-   [Nuxt Fonts](https://github.com/nuxt/fonts) - Tối ưu hóa và cấu hình font chữ tùy chỉnh cho ứng dụng Nuxt
-   [VueUse](https://github.com/antfu/vueuse) - Bộ sưu tập API kết hợp hữu ích
-   [TypeScript](https://www.typescriptlang.org/)

## Bắt đầu

Để bắt đầu với repository này, hãy clone và làm theo hướng dẫn để cấu hình Directus với Nuxt.js.

```bash
git clone https://github.com/hoachnt/nuxt-gallery.git
cd nuxt-gallery
```

Đừng quên đổi tên file .env.example thành .env và thêm các giá trị biến của bạn.

## Biến .env

-   `NUXT_ADMIN_PASSWORD` - Mật khẩu để truy cập bảng quản trị và tải lên hình ảnh, mặc định là admin nếu không được cung cấp.
-   `NUXT_SESSION_PASSWORD` - Khóa bí mật để mã hóa session, được sử dụng bởi nuxt-auth-utils, sẽ tự động tạo nếu không có trong chế độ phát triển.

## Links

-   [Kho lưu trữ trên GitHub](https://github.com/hoachnt/nuxt-gallery)
-   [Demo](https://nuxtd-gallery.netlify.app/)
