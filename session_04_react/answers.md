## Bài 0.1:

1. File `.jsx `khác gì file `.js`?
- File `.js`: chỉ chứa JavaScript thông thường
- File `.jsx`: File JavaScript cho phép viết code giao diện giống HTML trực tiếp bên trong. Công cụ build (Vite) dựa vào đuôi `.jsx` để dịch giao diện này thành JS thuần mà trình duyệt có thể hiểu

2. Tại sao phải `export default App`?  
- Trong React, mỗi component thường được viết ở một file riêng. Nếu muốn dùng component đó ở nơi khác, ta phải export nó trước. Khi dùng export default, ta đang chỉ định rằng App là thành phần chính của file này

3. Thử xóa export default → Chuyện gì xảy ra?
- Nếu xóa export default App, component App vẫn tồn tại trong file đó, nhưng nó không còn được chia sẻ ra bên ngoài nữa
- Khi file khác cố gắng import App, React hoặc Vite sẽ không tìm thấy component được export và chương trình sẽ báo lỗi. Nói cách khác, file chứa App giống như đang giữ component đó cho riêng mình, các file khác không thể truy cập được.
