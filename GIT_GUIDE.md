# 📚 Hướng Dẫn Cài Đặt Git & GitHub Cho Người Mới Bắt Đầu

Bạn sẽ học cách cài Git, tạo GitHub account, và upload code để deploy lên Netlify.

---

## **PHẦN 1: Cài Đặt Git Trên Windows**

### Bước 1: Tải Git Installer
1. Vào: https://git-scm.com/download/win
2. Bấm vào **"Click here to download"** (phía bên trái)
3. File `Git-2.x.x-64-bit.exe` sẽ tải về

### Bước 2: Chạy Trình Cài Đặt
1. Mở file `Git-2.x.x-64-bit.exe`
2. Bấm **"Next"** hết các bước (để nguyên cài đặt mặc định)
3. Bấm **"Finish"** khi xong

### Bước 3: Kiểm Tra Git Đã Cài Thành Công
1. Mở **PowerShell** (nhấn Windows + R → gõ `powershell` → Enter)
2. Gõ lệnh:
```bash
git --version
```
3. Nếu in ra `git version 2.x.x...` là **đã cài thành công** ✅

---

## **PHẦN 2: Tạo GitHub Account**

### Bước 1: Vào Website GitHub
1. Vào: https://github.com
2. Bấm **"Sign up"** (góc phải trên)

### Bước 2: Điền Thông Tin
- **Email**: Nhập email của bạn (hoặc tạo email Gmail mới)
- **Password**: Tạo mật khẩu mạnh (ít nhất 8 ký tự, có chữ hoa, số)
- **Username**: Tên GitHub (ví dụ: `banh-shop-vn`, `my-bakery`, ...phải duy nhất)
  - ℹ️ Tên này sẽ dùng trong URL repo

### Bước 3: Xác Thực Email
1. GitHub sẽ gửi email xác thực
2. Vào email → Mở link xác thực
3. **Xong!** Account GitHub của bạn đã tạo ✅

---

## **PHẦN 3: Tạo Repository (Kho Lưu Trữ) Trên GitHub**

### Bước 1: Tạo Repo Mới
1. Đăng nhập GitHub
2. Bấm **"+"** ở góc phải trên → Chọn **"New repository"**

### Bước 2: Điền Thông Tin
- **Repository name**: `banh-gia-dinh` (hoặc tên khác)
- **Description**: "Website bán bánh gia đình" (tuỳ chọn)
- **Public**: ✅ Chọn (để mọi người có thể xem website)
- **Initialize**: ❌ KHÔNG chọn (bạn sẽ push code từ máy)

### Bước 3: Bấm "Create Repository"

Bạn sẽ thấy màn hình hướng dẫn. **Giữ nguyên, chưa làm gì!**

---

## **PHẦN 4: Setup Git Trên Máy Tính Của Bạn**

### Bước 1: Mở PowerShell

```bash
# Nhấn Windows + R → gõ "powershell" → Enter
```

### Bước 2: Vào Folder Dự Án

```bash
cd "C:\Users\Admin\Desktop\web bo thien"
```

### Bước 3: Cấu Hình Git Lần Đầu (Chỉ Làm 1 Lần)

Gõ 2 lệnh này (thay thông tin của bạn):

```bash
git config --global user.name "Tên Của Bạn"
git config --global user.email "email@gmail.com"
```

**Ví dụ:**
```bash
git config --global user.name "Nguyễn Văn A"
git config --global user.email "nguyenvana@gmail.com"
```

✅ Xong! Bạn không cần làm lại bước này.

---

## **PHẦN 5: Upload Code Lên GitHub**

### Chạy Lệnh Sau (Lần Lượt):

```bash
# 1. Khởi tạo git trong folder
git init

# 2. Thêm tất cả file
git add .

# 3. Tạo commit (lưu một version)
git commit -m "Tạo website tiệm bánh"

# 4. Đổi tên branch thành "main"
git branch -M main

# 5. Thêm liên kết đến GitHub repository
# ⚠️ THay USERNAME bằng tên GitHub của bạn, banh-gia-dinh bằng tên repo bạn tạo
git remote add origin https://github.com/USERNAME/banh-gia-dinh.git

# 6. Push code lên GitHub
git push -u origin main
```

**Ví dụ Thực Tế:**

Nếu tên GitHub là `nguyenvana` và tên repo là `banh-gia-dinh`:

```bash
git init
git add .
git commit -m "Tạo website tiệm bánh"
git branch -M main
git remote add origin https://github.com/nguyenvana/banh-gia-dinh.git
git push -u origin main
```

### Nhập GitHub Credentials

Khi chạy `git push`, GitHub sẽ yêu cầu:
- **Username hoặc Email**: Nhập username GitHub của bạn (hoặc email)
- **Password hoặc Token**: 

  ⚠️ **LƯU Ý:** GitHub không chấp nhận mật khẩu thường nữa. Bạn cần tạo **Personal Access Token**:
  
  1. Vào https://github.com/settings/tokens
  2. Bấm **"Generate new token"**
  3. Tên: `git-credentials` (hoặc tên khác)
  4. Chọn scope: ✅ `repo` (đủ quyền)
  5. Bấm **"Generate token"**
  6. **Copy token** (màu xanh lá cây)
  7. Dán token vào terminal khi hỏi "Password"

✅ **Xong!** Code bạn đã được upload lên GitHub!

---

## **PHẦN 6: Kiểm Tra Code Trên GitHub**

1. Vào https://github.com/USERNAME/banh-gia-dinh
2. Bạn sẽ thấy:
   - 📁 Folder và file của bạn
   - 📝 Các commit (phiên bản)
   - 📖 README.md hiển thị

Nếu thấy vậy = **Thành công!** 🎉

---

## **PHẦN 7: Deploy Lên Netlify**

Giờ code đã trên GitHub, bạn có thể deploy:

1. Vào https://netlify.com
2. Bấm **"Sign up"** → Chọn **"GitHub"**
3. Xác thực GitHub account
4. Chọn repo `banh-gia-dinh`
5. Bấn **"Deploy site"**

**Xong!** Website bạn sẽ online trên domain Netlify miễn phí! 🚀

---

## **Các Lệnh Git Hay Dùng Sau Này**

Khi bạn sửa code và muốn update GitHub:

```bash
# 1. Xem những file đã đổi
git status

# 2. Thêm tất cả file đã đổi
git add .

# 3. Lưu version
git commit -m "Mô tả thay đổi, ví dụ: Thêm 2 sản phẩm mới"

# 4. Đẩy lên GitHub
git push
```

---

## **Lỗi Thường Gặp & Cách Khắc Phục**

### ❌ Lỗi: "git command not found"
- **Nguyên nhân**: Git chưa cài hoặc chưa restart terminal
- **Cách khắc phục**: Cài Git lại, rồi khởi động lại PowerShell

### ❌ Lỗi: "fatal: not a git repository"
- **Nguyên nhân**: Bạn chưa chạy `git init`
- **Cách khắc phục**: Chạy lệnh `git init` trước

### ❌ Lỗi: "origin already exists"
- **Nguyên nhân**: `git remote add` đã thêm trước đó
- **Cách khắc phục**: 
  ```bash
  git remote remove origin
  git remote add origin https://github.com/USERNAME/banh-gia-dinh.git
  ```

### ❌ Lỗi: "refused to merge unrelated histories"
- **Nguyên nhân**: Repo GitHub có file khác code local
- **Cách khắc phục**: 
  ```bash
  git pull origin main --allow-unrelated-histories
  git push origin main
  ```

---

## **Cheat Sheet (Bảng Tóm Tắt)**

| Lệnh | Ý Nghĩa |
|------|---------|
| `git init` | Khởi tạo repo mới |
| `git add .` | Thêm tất cả file đã đổi |
| `git commit -m "..."` | Lưu version |
| `git push` | Đẩy code lên GitHub |
| `git pull` | Kéo code từ GitHub về |
| `git status` | Xem trạng thái file |
| `git log` | Xem lịch commit |

---

## **Tóm Tắt Quy Trình**

```
1. Cài Git
   ↓
2. Tạo GitHub Account
   ↓
3. Tạo Repository
   ↓
4. Setup Git Config (user.name, user.email)
   ↓
5. Run: git init, git add ., git commit
   ↓
6. Run: git remote add + git push
   ↓
7. Check code trên GitHub ✅
   ↓
8. Deploy Netlify
   ↓
9. Website online! 🚀
```

---

## **Cần Giúp?**

- **Git chưa cài?** → Quay lại Phần 1
- **GitHub account không được?** → Quay lại Phần 2
- **Push code lỗi?** → Xem "Lỗi Thường Gặp" ở trên
- **Trang web không hiển thị sau deploy?** → Kiểm tra README.md chính

---

**Chúc mừng! Bạn sẽ trở thành một developer! 🎓✨**
