# DUOYIN - Hệ thống ngữ liệu trực tuyến chữ Hán đa âm

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.3-7952B3?style=flat-square&logo=bootstrap)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## 📖 Giới thiệu

**DUOYIN** (多音字) là hệ thống ngữ liệu trực tuyến tích hợp sổ tay từ vựng và bài tập vận dụng chữ Hán đa âm. Hệ thống được phát triển bởi nhóm sinh viên Khoa Tiếng Trung, Trường Đại học Sư phạm Thành phố Hồ Chí Minh.

Hệ thống cung cấp các tính năng hỗ trợ người học dễ dàng tra cứu và ôn luyện kiến thức về chữ Hán đa âm.

## ✨ Tính năng chính

| Tính năng | Mô tả |
|-----------|-------|
| 📚 **Sổ tay (笔记本)** | Tra cứu danh sách chữ Hán đa âm với đầy đủ phiên âm, từ loại, giải thích và ví dụ |
| ✏️ **Bài tập (练习)** | 4 dạng bài tập: Điền phiên âm, Chọn nghĩa, Chọn câu chữ Hán, Phán đoán đúng sai |
| 🎬 **Video (视频)** | Video ngắn giúp phân biệt các âm đọc của chữ Hán đa âm |
| 💬 **Diễn đàn (论坛)** | Nơi trao đổi và chia sẻ thông tin về chữ Hán đa âm |
| 🆘 **Trợ giúp (帮助)** | Hỗ trợ giải đáp các vấn đề liên quan đến hệ thống |

## 🛠️ Công nghệ sử dụng

- **Frontend Framework:** React 18
- **Routing:** React Router DOM 6
- **UI Framework:** Bootstrap 5
- **HTTP Client:** Axios
- **Data Source:** Google Sheets API
- **Deployment:** GitHub Pages

## 📦 Cài đặt

### Yêu cầu hệ thống
- Node.js >= 14.x
- npm >= 6.x

### Các bước cài đặt

1. **Clone repository**
   ```bash
   git clone https://github.com/SatomiJin/douyin.git
   cd douyin
   ```

2. **Cài đặt dependencies**
   ```bash
   npm install
   ```

3. **Chạy ứng dụng ở môi trường development**
   ```bash
   npm start
   ```
   Ứng dụng sẽ chạy tại [http://localhost:3000](http://localhost:3000)

4. **Build production**
   ```bash
   npm run build
   ```

## 🚀 Deploy

Để deploy lên GitHub Pages:

```bash
npm run deploy
```

## 📁 Cấu trúc thư mục

```
src/
├── Component/           # Các component tái sử dụng
│   ├── audio/          # File audio phát âm
│   ├── audioBtn.js     # Component nút phát âm
│   ├── footerCpn.js    # Component footer
│   ├── member.js       # Component thành viên nhóm
│   └── navBarCpn.js    # Component navigation bar
├── Data/
│   └── data.js         # Quản lý routing và fetch data
├── Public/
│   ├── Assets/         # Hình ảnh và icon
│   └── style.css       # CSS chung
└── Screen/             # Các màn hình chính
    ├── baiTapScreen.js     # Màn hình bài tập
    ├── soTayScreen.js      # Màn hình sổ tay
    ├── soTayDetailScreen.js # Chi tiết từ vựng
    ├── tongQuan.js         # Màn hình tổng quan
    ├── trangChu.js         # Trang chủ
    └── video.js            # Màn hình video
```

## 📜 Scripts

| Lệnh | Mô tả |
|------|-------|
| `npm start` | Chạy app ở chế độ development |
| `npm run build` | Build app cho production |
| `npm test` | Chạy test |
| `npm run deploy` | Deploy lên GitHub Pages |

## 👥 Nhóm nghiên cứu

Sinh viên khóa 47 - Khoa Tiếng Trung - Trường Đại học Sư phạm Thành phố Hồ Chí Minh:

- Nguyễn Thị Tố An
- Nguyễn Thị Thanh Trúc
- Lư Gia Linh
- Huỳnh Bửu Dinh
- Tào Tuyết Linh

## 📧 Liên hệ

- **Email:** duoyinzi99@gmail.com
- **Fanpage:** [Duoyin - Hệ thống ngữ liệu trực tuyến chữ Hán đa âm](https://www.facebook.com/profile.php?id=61557907629340)

## 📄 Bản quyền

Bản quyền thuộc về nhóm sinh viên nghiên cứu đề tài: "Thiết kế và xây dựng hệ thống ngữ liệu trực tuyến chữ Hán đa âm dành cho sinh viên ngành Ngôn ngữ Trung Quốc."

---

<p align="center">
  Made with ❤️ by DUOYIN Team
</p>
