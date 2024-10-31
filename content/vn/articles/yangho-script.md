---
title: "YanghoScript"
description: "YanghoScript là một ngôn ngữ lập trình đơn giản với khả năng làm việc với các biến, phép toán số học và hiển thị kết quả. Được tạo ra cho các yangho Việt Nam😎"
published: 2024/09/16
slug: "yangho-script"
---

YanghoScript là một ngôn ngữ lập trình đơn giản với khả năng làm việc với các biến, phép toán số học và hiển thị kết quả. Được tạo ra cho các yangho Việt Nam😎.

## Tính năng

### Tính năng hiện có:

-   Gán giá trị cho biến
-   Phép toán số học
-   Hiển thị kết quả
-   Comment một dòng mã

### Tính năng sắp tới (Không phải sớm đâu):

-   Câu lệnh điều kiện(Đã triển khai một phần)
-   Cấu trúc vòng lặp
-   Hàm
-   Xử lý lỗi

## Cài đặt

Để bắt đầu với YanghoScript, bạn sẽ cần Node.js. Tải xuống và cài đặt từ [trang web chính thức của Node.js](https://nodejs.org/).

Sau đó, thực hiện các bước sau:

1. Clone repository:

```bash
git clone https://github.com/hoachnt/YanghoScript.git
```

2. Cài đặt các gói phụ thuộc:

```bash
cd YanghoScript
npm install
```

## Sử dụng

Sau khi cài đặt, bạn có thể sử dụng YanghoScript để thực thi các chương trình được viết bằng ngôn ngữ này. Mở tệp `code.ys` và viết mã YanghoScript của bạn vào đó.

Mã ví dụ:

```javascript
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

// NOILIENTUC 'Hello world' - comment
```

Để chạy chương trình, hãy sử dụng lệnh sau trong terminal:

```bash
npm start
```

hoặc

```bash
yarn start
```

Đảm bảo rằng code của bạn được viết trong tệp `code.ys`.

## Cấu trúc code

YanghoScript hỗ trợ các cấu trúc sau:

-   Gán giá trị cho biến: `variable = value;`
-   Các phép toán số học: `+, -, *, /`
-   Sử dụng dấu ngoặc đơn để đảm bảo thứ tự đúng của các phép toán số học. Ví dụ, với biểu thức `1 + 2 * 3`, bạn nên viết là `1 + (2 * 3)`.

Ví dụ về các biểu thức đúng:

```javascript
1 + 2 * 3; // Result: 9(incorrect)
1 + (2 * 3); // Result: 7(correct)
10 / (2 + 3); // Result: 2(correct)
```

Việc sử dụng dấu ngoặc đơn đảm bảo thứ tự đúng của các phép toán và ngăn ngừa lỗi tính toán.

## Quan trọng

YanghoScript đang trong giai đoạn phát triển ban đầu và có thể có một số hạn chế và thiếu sót. Nếu bạn tìm thấy bất kỳ lỗi nào hoặc có đề xuất cải tiến, đừng ngần ngại báo cáo trong phần Issues trên [GitHub](https://github.com/hoachnt/YanghoScript).

Đừng quên rằng YanhoScript là một ngôn ngữ lập trình mang tính chất hài hước.
