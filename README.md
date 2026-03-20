# 🍰 Tiệm Bánh Gia Đình - Website Bán Bánh

Đây là trang web bán bánh được thiết kế theo phong cách **Milkbar** chuyên nghiệp, hoàn toàn bằng **tiếng Việt**.

## ✨ Tính Năng

✅ **Giao diện đẹp kiểu Milkbar** - Design hiện đại, responsive  
✅ **Giỏ hàng chức năng** - Thêm/xóa sản phẩm, thay đổi số lượng  
✅ **Thanh toán qua WhatsApp** - Tích hợp sẵn (không cần backend phức tạp)  
✅ **Liên hệ qua form** - Khách hàng có thể gửi tin nhắn trực tiếp  
✅ **Lưu giỏ hàng** - Dữ liệu giỏ hàng được lưu trong trình duyệt  
✅ **Mobile responsive** - Hoạt động tốt trên điện thoại  
✅ **Nhanh chóng & miễn phí** - Không cần server, chỉ cần hosting tĩnh

---

## 📁 Cấu Trúc File

```
web bo thien/
├── index.html       # Trang chính
├── style.css        # Các kiểu CSS
├── script.js        # JavaScript (giỏ hàng, form)
└── README.md        # Tệp này
```

---

## 🚀 Hướng Dẫn Deploy Lên Netlify (MIỄN PHÍ + TẠO DOMAIN)

### Bước 1: Tạo Tài Khoản GitHub (Nếu chưa có)
1. Vào https://github.com
2. Nhấn **Sign up**
3. Điền email, password, username
4. Xác nhận email

### Bước 2: Upload Code Lên GitHub
1. Vào https://github.com/new (tạo repo mới)
2. Đặt tên repo: **banh-gia-dinh** (hoặc tên khác)
3. Không cần thêm .gitignore hay LICENSE
4. Nhấn **Create repository**

5. Sau đó, bạn sẽ thấy hướng dẫn. Chạy lệnh sau trong terminal (tại folder `web bo thien`):

```bash
# Khởi tạo git
git init

# Thêm tên người dùng
git config user.name "Tên bạn"
git config user.email "email@gmail.com"

# Thêm file
git add .

# Commit
git commit -m "Tạo website tiệm bánh"

# Đổi tên branch
git branch -M main

# Thêm remote
git remote add origin https://github.com/USERNAME/banh-gia-dinh.git

# Push lên GitHub
git push -u origin main
```

(Thay `USERNAME` bằng tên GitHub của bạn)

### Bước 3: Deploy Lên Netlify
1. Vào https://netlify.com
2. Nhấn **Sign up** → Chọn **GitHub**
3. Xác thực GitHub
4. Nhấn **Import an existing project**
5. Chọn repo **banh-gia-dinh** của bạn
6. Để y nguyên cài đặt → Nhấn **Deploy site**

✅ **Xong!** Netlify sẽ tự động tạo domain miễn phí cho bạn (dạng: `xxxxx.netlify.app`)

---

## ⚙️ Tùy Chỉnh Website

### 1. Thay Đổi Số Điện Thoại WhatsApp

Mở file `script.js` và tìm dòng:
```javascript
const phoneNumber = "84901234567";
```

Thay `84901234567` bằng số điện thoại WhatsApp của bạn:
- Nếu số là `0901234567` thì thay `0` đầu bằng `84`: `84901234567`
- Nếu số đó là từ nước ngoài, hãy dùng mã quốc gia tương ứng

### 2. Thay Đổi Thông Tin Tiệm Bánh

Mở file `index.html` và tìm các phần:
- **Tên tiệm**: Tìm `TIỆM BÁNH HẢI` → Thay tên của bạn
- **Địa chỉ**: Tìm `123 Đường Bánh...` → Thay địa chỉ thực tế
- **Số điện thoại**: Tìm `0901 234 567` → Thay số của bạn
- **Email**: Tìm `info@tiembanh.vn` → Thay email của bạn

### 3. Thêm Sản Phẩm Mới

Mở file `script.js` và tìm mảng `products`. Thêm sản phẩm mới theo format:

```javascript
{
    id: 7,
    name: "Tên bánh mới",
    price: 150000,  // Giá tiền
    image: "link-ảnh-bánh",
    description: "Mô tả sản phẩm"
}
```

Bạn có thể lấy ảnh từ:
- **Unsplash**: https://unsplash.com (ảnh miễn phí)
- **Pexels**: https://pexels.com (ảnh miễn phí)
- **Hoặc upload ảnh của bạn** (cần upload lên dịch vụ như Imgur hoặc Firebase Storage đó)

### 4. Thay Đổi Màu Sắc

Mở file `style.css` tìm `:root` ở đầu file:

```css
:root {
    --primary-pink: #fce4ec;  /* Màu hồng chính */
    --accent-color: #e91e63;  /* Màu hồng đậm */
    --text-dark: #2c3e50;     /* Màu chữ chính */
}
```

Bạn có thể dùng https://htmlcolorcodes.com để chọn màu yêu thích.

---

## 🎨 Hình Ảnh Miễn Phí

Nếu bạn muốn thay thế ảnh bánh, hãy sử dụng:

- **Unsplash**: https://unsplash.com/s/photos/cake
- **Pexels**: https://pexels.com/search/cake/
- **Pixabay**: https://pixabay.com/

Sao chép link ảnh từ độ phân giải cao (ít nhất 500px) sau đó dán vào file `script.js`.

---

## 💬 Cách Hoạt Động

### Đặt Hàng
1. Khách hàng chọn bánh → Nhấn "Thêm vào giỏ hàng"
2. Mở giỏ hàng → Thay đổi số lượng
3. Nhấn "THANH TOÁN" → Tự động mở WhatsApp
4. Gửi tin nhắn cho bạn với danh sách bánh + tổng tiền

### Liên Hệ
1. Điền form liên hệ → Nhấn "GỬI TIN NHẮN"
2. Tự động mở WhatsApp với nội dung tin nhắn

---

## ✅ Checklist Trước Khi Deploy

- [ ] Thay số điện thoại WhatsApp
- [ ] Thêm thông tin tiệm bánh thực tế
- [ ] Thêm ảnh sản phẩm thực tế  
- [ ] Kiểm tra lại nội dung tiếng Việt
- [ ] Test thử trên điện thoại chưa
- [ ] Deploy lên Netlify

---

## 🆘 Troubleshooting

**P: Giỏ hàng không hoạt động?**  
Trả lời: Kiểm tra Developer Tools (F12) → Console. Nếu có lỗi, kiểm tra file `script.js`

**P: Ảnh không hiển thị?**  
Trả lời: Link ảnh có thể bị lỗi. Chọn ảnh mới từ Unsplash hoặc Pexels

**P: WhatsApp link không hoạt động?**  
Trả lời: Kiểm tra số điện thoại _ có đúng không. Nhớ dùng mã quốc gia (84 cho Việt Nam)

**P: Muốn thêm thanh toán online (Momo, ZaloPay)?**  
Trả lời: Cần backend phức tạp. Hiện tại dùng WhatsApp là nhanh nhất + miễn phí!

---

## 📱 Mobile Responsiveness Test

Để test trên điện thoại:
1. Muốn khi deploy lên Netlify sẽ có URL công khai
2. Hoặc test locally: Mở `index.html` → Bấm F12 → Click icon điện thoại

---

## 🎓 Hướng Dẫn Nâng Cao (Sau này)

Nếu muốn thêm tính năng:
- **Email notification** → Dùng Formspree hay EmailJS
- **Thanh toán online** → Dùng Stripe hoặc Momo
- **Quản lý sản phẩm online** → Dùng Supabase hoặc Firebase
- **Tin nhắn thời gian thực** → Dùng Socket.io

Nhưng với WhatsApp, bạn đã có **95% những gì cần** rồi! 🎉

---

## 📞 Support

Nếu gặp vấn đề:
1. Kiểm tra console (F12)
2. Reload trang (Ctrl+Shift+R)
3. Xóa localStorage nếu giỏ hàng lỗi

---

**Chúc mừng! Website bánh của bạn đã sẵn sàng! 🍰✨**
