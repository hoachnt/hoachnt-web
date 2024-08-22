---
title: "YanghoScript"
description: "YanghoScript là một ngôn ngữ lập trình đơn giản với khả năng làm việc với các biến, phép toán số học và hiển thị kết quả. Được tạo ra cho các yangho Việt Nam😎"
published: 2024/8/16
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

-   Câu lệnh điều kiện
-   Cấu trúc vòng lặp
-   Hàm
-   Xử lý lỗi

## Cài đặt

Để bắt đầu với YanghoScript, bạn sẽ cần Node.js. Tải xuống và cài đặt từ [trang web chính thức của Node.js](https://nodejs.org/).

Sau đó, thực hiện các bước sau:

1. Clone repository:

```
git clone https://github.com/hoachnt/YanghoScript.git
```

2. Cài đặt các gói phụ thuộc:

```
cd YanghoScript
npm install
```

## Sử dụng

Sau khi cài đặt, bạn có thể sử dụng YanghoScript để thực thi các chương trình được viết bằng ngôn ngữ này. Mở tệp `code.ys` và viết mã YanghoScript của bạn vào đó.

Mã ví dụ:

```javascript
// Gán giá trị chuỗi cho biến text
text = 'Hoach';
// Gán kết quả của phép cộng các số cho biến summ
summ = 6 + 5;

// Hiển thị nội dung của các biến lên màn hình
NOILIENTUC text;
NOILIENTUC summ;

// Gán kết quả của một biểu thức cho biến sumandmin
sumandmin = summ - ((20 + 2) * 2);

// Hiển thị kết quả của biểu thức và một chuỗi lên màn hình
NOILIENTUC sumandmin;
NOILIENTUC 'Chao ca lo nha minh nha';

// Các phép toán True/False
NOILIENTUC 1 EQUAL 1;
NOILIENTUC 2 MORE THAN 1;
NOILIENTUC 1 LESS THAN 2;

Đừng quên rằng YanghoScript chỉ là một ngôn ngữ lập trình để đùa thôi.
```

Để chạy chương trình, hãy sử dụng lệnh sau trong terminal:

```
npm start
```

hoặc

```
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
1 + 2 * 3; // Result: 7(correct)
10 / (2 + 3); // Result: 2(correct)
```

Việc sử dụng dấu ngoặc đơn đảm bảo thứ tự đúng của các phép toán và ngăn ngừa lỗi tính toán.
Quan trọng

YanghoScript đang trong giai đoạn phát triển ban đầu và có thể có một số hạn chế và thiếu sót. Nếu bạn tìm thấy bất kỳ lỗi nào hoặc có đề xuất cải tiến, đừng ngần ngại báo cáo trong phần Issues trên GitHub.

Đừng quên rằng YanhoScript là một ngôn ngữ lập trình mang tính chất hài hước.
