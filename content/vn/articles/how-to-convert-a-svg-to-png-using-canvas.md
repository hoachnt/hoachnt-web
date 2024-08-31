---
title: "Cách chuyển đổi SVG sang PNG bằng Canvas"
description: "Một cách đơn giản để chuyển đổi SVG sang PNG bằng Canvas"
published: 2023/11/22
slug: "làm thế nào để chuyển đổi-a-svg-to-png-using-canvas"
---

> Bài viết này được tạo bằng ChatGPT và có ý nghĩa giữ chỗ

Chuyển đổi SVG thành PNG trong JavaScript bằng cách sử dụng phần tử canvas là một kỹ thuật hữu ích dành cho các nhà phát triển web cần thao tác đồ họa vector cho các ứng dụng khác nhau. Quá trình này về cơ bản bao gồm việc hiển thị hình ảnh SVG lên khung vẽ và sau đó chuyển đổi khung vẽ sang định dạng PNG. Dưới đây là hướng dẫn từng bước về cách đạt được điều này:

1. Chuẩn bị SVG
   Đảm bảo mã SVG của bạn đã sẵn sàng. Bạn có thể sử dụng tệp SVG hoặc chuỗi SVG được nhúng trực tiếp vào mã JavaScript của mình. Nếu đang sử dụng tệp SVG bên ngoài, bạn sẽ cần tải tệp đó vào ứng dụng của mình.

2. Tạo phần tử Canvas
   Bạn cần một phần tử canvas để vẽ SVG của mình lên. Đây có thể là canvas hiện có trong HTML của bạn hoặc canvas được tạo động bằng JavaScript:

```js
let canvas = document.createElement("canvas");
canvas.width = 500; // Set the canvas width
canvas.height = 500; // Set the canvas height
```

Đặt chiều rộng và chiều cao của khung vẽ để phù hợp với kích thước mong muốn của PNG cuối cùng của bạn.

3. Vẽ SVG lên Canvas
   Để vẽ SVG lên canvas, bạn cần chuyển SVG thành hình ảnh rồi vẽ hình ảnh đó lên canvas. Điều này có thể được thực hiện bằng cách sử dụng đối tượng Image trong JavaScript:

```js
let img = new Image();
img.onload = function () {
    let ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
};
img.src = "data:image/svg+xml;base64," + btoa(svgString);
```

Trong mã này, hãy thay thế svgString bằng mã SVG của bạn. Nếu bạn đang sử dụng tệp SVG bên ngoài, hãy đảm bảo tệp được đọc và chuyển đổi thành chuỗi base64.

4. Chuyển đổi Canvas sang PNG
   Khi SVG của bạn được hiển thị trên khung vẽ, bạn có thể chuyển đổi khung vẽ thành hình ảnh PNG:

```js
let pngUrl = canvas.toDataURL("image/png");
```

PNGUrl này là chuỗi được mã hóa base64 đại diện cho hình ảnh PNG của bạn.

5. Sử dụng hoặc lưu hình ảnh PNG
   Bây giờ bạn đã có PNG ở định dạng base64, bạn có thể sử dụng nó khi cần trong ứng dụng của mình. Ví dụ: bạn có thể hiển thị nó trong phần tử <img> hoặc tải xuống:

```js
let imgElement = document.createElement("img");
imgElement.src = pngUrl;
document.body.appendChild(imgElement);

// To download the image
let downloadLink = document.createElement("a");
downloadLink.href = pngUrl;
downloadLink.download = "image.png";
downloadLink.click();
```

### Những cân nhắc bổ sung

Sự cố về nguồn gốc chéo: Nếu bạn đang tải SVG từ nguồn bên ngoài, bạn có thể gặp phải sự cố về nguồn gốc chéo. Đảm bảo các chính sách CORS được định cấu hình chính xác trên máy chủ lưu trữ tệp SVG.
Tính năng SVG: Một số tính năng SVG có thể không hiển thị chính xác trên canvas, vì vậy hãy kiểm tra kỹ SVG của bạn.
Hiệu suất: Đối với các tệp SVG lớn, hãy xem xét ý nghĩa hiệu suất của quá trình chuyển đổi này.

### Phần kết luận

Chuyển đổi SVG sang PNG bằng JavaScript và canvas là một kỹ thuật mạnh mẽ có thể được tích hợp vào các ứng dụng web để xử lý hình ảnh động. Bằng cách làm theo các bước này, các nhà phát triển có thể chuyển đổi hiệu quả tính linh hoạt của SVG sang khả năng tương thích rộng rãi của PNG.
