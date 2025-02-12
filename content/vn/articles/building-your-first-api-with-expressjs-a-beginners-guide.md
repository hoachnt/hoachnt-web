---
title: "Xây dựng API đầu tiên của bạn với Express.js: Hướng dẫn cho người mới bắt đầu"
description: "Hướng dẫn thân thiện với người mới bắt đầu để xây dựng API đầu tiên của bạn với Express.js"
published: 2023/11/2
slug: "xây dựng-api-đầu tiên của bạn với-expressjs-a-hướng dẫn cho người mới bắt đầu"
---

> Bài viết này được tạo bằng ChatGPT và có ý nghĩa giữ chỗ

## Express.js là gì?

Express.js là một khung ứng dụng web Node.js tối giản và linh hoạt, cung cấp một bộ tính năng mạnh mẽ để phát triển các ứng dụng web và di động. Nó tạo điều kiện cho sự phát triển nhanh chóng của các ứng dụng web dựa trên Node và được sử dụng rộng rãi để xây dựng API do tính đơn giản và hiệu suất của nó.

## Bước 1: Thiết lập môi trường của bạn

Trước khi bắt đầu, hãy đảm bảo rằng bạn đã cài đặt Node.js trên hệ thống của mình. Bạn có thể tải xuống từ trang web chính thức của Node.js.

Sau khi cài đặt Node.js, bạn có thể bắt đầu dự án của mình:

```bash
mkdir my-express-api
cd my-express-api
npm init -y
```

Thao tác này sẽ tạo một thư mục mới cho dự án của bạn và khởi tạo dự án Node.js mới.

## Bước 2: Cài đặt Express.js

Cài đặt Express.js bằng npm (Trình quản lý gói nút):

```bash
npm install express --save
```

Lệnh này cài đặt Express.js và thêm nó vào phần phụ thuộc của dự án của bạn.

## Bước 3: Tạo máy chủ Express đầu tiên của bạn

Tạo một tệp có tên app.js trong thư mục dự án của bạn. Tệp này sẽ là điểm vào API của bạn. Thêm mã sau vào app.js:

```js
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
```

Mã này tạo một máy chủ Express cơ bản lắng nghe trên cổng 3000 và phản hồi bằng "Xin chào thế giới!" tới các yêu cầu HTTP GET tới URL gốc (/).

## Bước 4: Chạy máy chủ Express của bạn

Chạy máy chủ của bạn bằng Node.js:

```bash
node app.js
Truy cập http://localhost:3000 trong trình duyệt của bạn. Bạn sẽ thấy thông báo "Xin chào thế giới!".
```

## Bước 5: Xây dựng API đơn giản

Bây giờ, hãy mở rộng máy chủ của chúng tôi để hoạt động như một API đơn giản. Ví dụ: hãy tạo một điểm cuối trả về danh sách người dùng.

Thêm mã sau vào app.js của bạn:

```js
let users = [{ name: "Alice" }, { name: "Bob" }];

app.get("/users", (req, res) => {
    res.json(users);
});
```

Bây giờ, nếu bạn truy cập http://localhost:3000/users, bạn sẽ thấy biểu diễn JSON của mảng người dùng.

## Bước 6: Kiểm tra API của bạn

Điều quan trọng là phải kiểm tra API của bạn. Bạn có thể sử dụng các công cụ như Postman hoặc Curl để kiểm tra điểm cuối của mình.

## Bước 7: Các bước tiếp theo

Từ đây, bạn có thể bắt đầu xây dựng các API phức tạp hơn. Hãy xem xét những điều sau:

Triển khai các hoạt động CRUD (Tạo, Đọc, Cập nhật, Xóa).
Kết nối API của bạn với cơ sở dữ liệu.
Thêm xác thực và ủy quyền.
Sắp xếp mã của bạn với bộ định tuyến và bộ điều khiển.

## Phần kết luận

Express.js đơn giản hóa quá trình xây dựng API trong Node.js. Đó là điểm khởi đầu tuyệt vời cho các nhà phát triển muốn nghiên cứu sâu hơn về phát triển phụ trợ. Với cách tiếp cận tối giản, bạn có quyền tự do cấu trúc các ứng dụng của mình khi bạn thấy phù hợp, biến Express.js trở thành một công cụ vô giá trong bộ công cụ phát triển của bạn.
