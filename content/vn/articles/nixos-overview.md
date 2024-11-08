---
title: "NixOS: Hệ điều hành tốt nhất? Hay chỉ là hệ điều hành kỳ quặc?"
description: "Khám phá sâu vào thế giới quản lý hệ thống khai báo(Declarative) với chút hài hước"
published: 2024/11/05
slug: "nixos-overview"
---

> Bài viết này được sản xuất với sự trợ giúp của ChatGPT 🤖

![Nixos](/articles/nixos-overview.png)

Khám phá sâu vào thế giới quản lý hệ thống khai báo(Declarative) với chút hài hước.

## Lưu ý 🛑

Nói rằng NixOS là "hệ điều hành tốt nhất" giống như nói một con chim cánh cụt có chiếc cà vạt phong cách nhất. Mỗi người chọn hệ điều hành dựa trên sở thích cá nhân, giống như chọn sốt cho món mì. Bài viết này chỉ muốn kể cho bạn về NixOS, những điều kỳ quặc của nó, và tại sao một số người yêu thích nó trong khi người khác thấy nó như một cổ vật bí ẩn từ tương lai.

---

## Nix là gì? Hay: "Cách Quản Lý Phần Mềm Mà Không Phải Khóc Lóc và Đau Khổ" 🔍

**Nix** là một trình quản lý gói mạnh mẽ, thay đổi hoàn toàn cách bạn hiểu về việc cài đặt và quản lý phần mềm. Nó giống như bạn đang nói với máy tính của mình: "Này, cài phiên bản mới nhất của Node.js và đảm bảo rằng nó chạy độc lập với các ứng dụng khác." Nix tạo ra môi trường cách ly cho các ứng dụng, giúp bạn tránh "địa ngục phụ thuộc."

### Tại sao nên dùng Nix? 🎉

1. **Cách ly**: Các chương trình cài đặt qua Nix chạy trong "bong bóng" của riêng chúng, không can thiệp vào chương trình khác. Giống như mỗi chương trình có bàn riêng trong nhà hàng.
2. **Khả năng tái tạo**: Đã cài đặt thứ gì đó một lần? Tuyệt, hệ thống sẽ nhớ cách làm và có thể lặp lại bất kỳ lúc nào. Giống như đánh dấu trang trong cuốn sách, nhưng là dành cho phần mềm.
3. **Khôi phục tức thì**: Không thích cập nhật vừa rồi? Hãy bảo Nix "hoàn tác điều đó" và quay trở lại trạng thái trước đó, giống như nhấn nút hoàn tác trong trình soạn thảo văn bản.

### Ví dụ sử dụng Nix:

```bash
nix-env -iA nixpkgs.firefox
```

Lệnh này sẽ cài đặt Firefox theo cách không xung đột với các ứng dụng khác và các phụ thuộc của chúng. Giờ thì bạn có thể lướt web mà không sợ làm hỏng hệ thống.

---

## NixOS là gì? Hoặc: "Cách quản lý máy tính mà không cần biết bạn đang làm gì" 🔍

NixOS là một hệ điều hành mà mọi thứ đều dựa trên nguyên tắc "hãy cho chúng tôi biết bạn muốn gì, và chúng tôi sẽ biến nó thành hiện thực, ngay cả khi chúng tôi không hoàn toàn hiểu cách làm". Nó giống như đưa một danh sách điều ước cho một phù thủy và chờ họ vẫy đũa thần. Đôi khi kết quả rất tuyệt, và đôi khi... bạn hiểu ý tồi rồi đấy.

---

## Tại sao lại chọn NixOS? Hoặc: "7749 lý do để bạn muốn trở thành người dùng NixOS" 🎉

1. **Khả năng tái lập**: Muốn máy tính xách tay ở nhà và máy chủ ở nơi làm việc giống hệt nhau? Với NixOS, điều này dễ như tìm hai bông tuyết giống nhau.
2. **Quản lý phiên bản**: NixOS lưu giữ lịch sử thay đổi hệ thống của bạn, cho phép bạn dễ dàng quay lại bất kỳ trạng thái nào trước đây. Điều này giúp việc kiểm soát và khôi phục hệ thống trở nên thuận tiện hơn.
3. **Tính mô-đun**: Hệ thống NixOS được thiết kế theo từng module riêng lẻ, cho phép bạn tùy chỉnh và lắp ráp các phần theo nhu cầu của mình. Việc thay đổi kernel hoặc cấu hình phần mềm cụ thể trở nên đơn giản và linh hoạt!
4. **Linh hoạt**: Bạn có thể cấu hình chi tiết mọi khía cạnh của hệ thống, từ giao diện chào mừng đến các chức năng khởi động, tùy chỉnh sâu theo nhu cầu và sở thích cá nhân.
5. **Cập nhật**: Quy trình cập nhật trong NixOS rất đáng tin cậy, giúp bạn có thể cập nhật hệ thống mà không lo lắng về việc gây ra lỗi nghiêm trọng hay mất mát dữ liệu.

---

## Nhược điểm của NixOS? Hoặc: "Tại sao tôi vẫn dùng Windows?" 💻

-   **Khó hiểu**: Để hiểu NixOS, bạn cần vừa là lập trình viên, vừa là triết gia, và một chút phù thủy 🧙‍♂️.
-   **Hiệu suất**: Đôi khi NixOS có thể chạy chậm hơn các hệ thống khác. Nhưng này, điều đó cho bạn thêm thời gian để suy ngẫm về ý nghĩa của cuộc sống.

---

## Ví dụ cấu hình tối thiểu: Hoặc "Cách khiến máy tính của bạn làm điều gì đó hữu ích"

```nix
{ config, pkgs, ... }:

{
  # Import
  imports = [
    ./hardware-configuration.nix
  ];

  # Install packages
  environment.systemPackages = with pkgs; [
    vim
    git
    firefox
  ];

  # Hostname
  networking.hostName = "super-penguin";

  # Enable SSH
  services.openssh.enable = true;

  # Auto update
  system.autoUpgrade.enable = true;
}

```

Đoạn code này nói với NixOS: "Hãy cài đặt một trình duyệt để tôi có thể xem video mèo, một trình soạn thảo văn bản để viết thư cho mẹ, và một hệ thống kiểm soát phiên bản để khoe với bạn bè."

---

## Ai nên dùng NixOS? Hoặc: "Ai cần đến sự phức tạp này?" 🤔

### _NixOS dành cho những ai_:

-   Thích Ảo tưởng.
-   Muốn kiểm soát hoàn toàn hệ thống của mình.
-   Không sợ các thuật ngữ phức tạp và lệnh dài trong terminal.
-   Mơ ước trở thành một chuyên gia Linux.

---

## Kết luận: Hoặc "Vậy, bạn có nên chuyển sang NixOS?"

NixOS không dành cho tất cả mọi người. Nó là một công cụ dành cho những ai muốn dấn thân vào thế giới quản lý hệ thống. Nếu bạn sẵn sàng cho một cuộc phiêu lưu, NixOS có thể là người bạn đồng hành trung thành của bạn. Nhưng nếu bạn chỉ muốn xem video mèo trực tuyến, một hệ điều hành thông thường có thể là đủ cho bạn.

**_P.S._** Đọc đến cuối rồi? Chúc mừng bạn! Bây giờ bạn có thể tự hào nói: **_I use Nixos btw_** 😎.
