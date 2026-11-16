/**
 * ============================================================================
 * SỔ LƯU BÚT TRI ÂN 20/11 - TẬP THỂ LỚP TU1E KÍNH GỬI THẦY TRỊNH VĂN SỸ
 * ============================================================================
 */

const CLASS_CONFIG = {
  className: "TU1E",
  teacherName: "Thầy Trịnh Văn Sỹ",
  teacherPhotos: [
    "LỜI CHÚC TU1E/ẢNH/1.jpg",
    "LỜI CHÚC TU1E/ẢNH/2.jpg"
  ],
  classPhotos: [
    "LỜI CHÚC TU1E/ẢNH/819300963_122114124657464145_140097754470237048_n.jpg",
    "LỜI CHÚC TU1E/ẢNH/823292247_122114124633464145_1763573652487510188_n.jpg",
    "LỜI CHÚC TU1E/ẢNH/820280052_122114124687464145_7525862662290007083_n.jpg"
  ],
  // Nếu bạn có file mp3 bài Người Gieo Mầm Xanh, đặt tên file là "nguoi-gieo-mam-xanh.mp3"
  // vào cùng thư mục (nếu chưa có file mp3, web sẽ tự động phát giai điệu Piano Người Gieo Mầm Xanh)
  musicUrl: "nguoi-gieo-mam-xanh.mp3"
};

// ============================================================================
// DANH SÁCH 38 LỜI CHÚC TỪ 38 THÀNH VIÊN LỚP TU1E
// ============================================================================
const WISHES_DATA = [
  {
    page: 1,
    sender: "Ngô Nguyễn Hà An",
    content: "Tri thức có thể mở ra cánh cổng tương lai nhưng chính tâm huyết cả người thầy mới truyền cho học trò dũng khí bước qua cánh cổng ấy. Nhân ngày Nhà Giáo Việt Nam 20/11, em xin gửi tới thầy lời chúc sức khỏe, tâm luôn an nhiên và thành công trên hành trình thắp lửa ước mơ."
  },
  {
    page: 2,
    sender: "Nguyễn Phan Mai An",
    content: "Nhân dịp 20/11, em chúc thầy có một ngày Nhà giáo Việt Nam thật ý nghĩa và nhiều niềm vui. Mong thầy luôn mạnh khỏe, vui vẻ, gặp nhiều may mắn trong công việc và cuộc sống. Chúc thầy luôn giữ vững ngọn lửa nhiệt huyết, tiếp tục lan tỏa tri thức và truyền cảm hứng đến các thế hệ sinh viên ạ!"
  },
  {
    page: 3,
    sender: "Nguyễn Thị Hải Anh",
    content: "Nhân ngày 20/11, em chúc thầy luôn mạnh khỏe, vui vẻ và gặp nhiều may mắn trong cuộc sống. Chúc thầy luôn tràn đầy năng lượng, giữ mãi niềm đam mê với nghề và có thật nhiều niềm vui bên gia đình cũng như các thế hệ học trò ạ"
  },
  {
    page: 4,
    sender: "Võ Kim Anh",
    content: "Nhân ngày Nhà giáo Việt Nam 20/11, kính chúc thầy luôn mạnh khỏe, tràn đầy năng lượng để mỗi buổi lên lớp đều là một niềm vui. Chúc thầy mãi là người cầm lái vững vàng, đưa những chuyến đò tri thức cập bến thành công, và luôn được bao bọc trong tình yêu thương, sự kính trọng của học trò."
  },
  {
    page: 5,
    sender: "Lê Bảo Chi",
    content: "Nhân ngày nhà giáo Việt Nam 20-11, em xin gửi đến thầy-người đang đứng trên bục giảng, lời tri ân sâu sắc nhất. Cảm ơn thầy đã luôn tận tuỵ, kiên nhẫn và cháy hết mình vì sự nghiệp trồng người. Em chúc thầy luôn mạnh khoẻ, hạnh phúc, luôn giữ vững ngọn lửa nhiệt huyết và tiếp tục truyền cảm hứng cho bao thế hệ học trò. Em xin kính chúc công việc, cuộc sống và mọi ước mơ của thầy luôn tốt đẹp và rạng ngời"
  },
  {
    page: 6,
    sender: "Đặng Phước Minh Hiền",
    content: "Nhân dịp 20/11, em xin gửi lời chúc sức khỏe và bình an đến thầy. Chúc thầy luôn vững vàng trong công việc, gặp nhiều may mắn trong cuộc sống và tiếp tục truyền đạt được nhiều kinh nghiệm thực tế hữu ích cho các thế hệ sinh viên ạ."
  },
  {
    page: 7,
    sender: "Đoàn Thị Vĩnh Hiền",
    content: "Nhân ngày 20/11, em xin chúc thầy luôn mạnh khoẻ, gặt hái được nhiều thành công trong sự nghiệp trồng người và luôn là nguồn cảm hứng cho nhiều thế hệ học trò. Em cảm ơn thầy rất nhiều vì đã quan tâm, hỗ trợ và đồng hành cùng TU1E chúng em trong suốt thời gian học vừa qua. Chúc thầy có một ngày lễ tràn đầy niềm vui và hạnh phúc ạ."
  },
  {
    page: 8,
    sender: "Thái Thị Khánh Hiền",
    content: "Chào mừng ngày nhà giáo Việt Nam 20/11. Em xin chúc thầy có một ngày lễ vui vẻ, ấm áp, hạnh phúc và ngập tràn niềm vui. Chúc thầy vẫn luôn giữ sự nhiệt huyết và tận tâm với sự nghiệp \"truyền lửa\" của mình. Và em mong thầy sẽ gặp nhiều may mắn trong công việc cũng như cuộc sống. Chúng em cảm ơn thầy nhiều ạ!"
  },
  {
    page: 9,
    sender: "Dương Minh Hoài",
    content: "Nhân ngày Nhà giáo Việt Nam 20/11, em chúc thầy thật nhiều sức khỏe, luôn vui vẻ và gặp nhiều điều tốt đẹp trong cuộc sống. Mong thầy sẽ luôn giữ được niềm vui và ngọn lửa nhiệt huyết trong công việc giảng dạy. Chúc thầy có một ngày Nhà giáo Việt Nam thật vui và ý nghĩa ạ!"
  },
  {
    page: 10,
    sender: "Võ Thị Kim Huệ",
    content: "Nhân ngày đặc biệt này, em xin gửi đến thầy lòng biết ơn chân thành nhất. Cảm ơn thầy đã dành thời gian quan tâm, lắng nghe và định hướng cho một tập thể sinh viên còn nhiều bỡ ngỡ như chúng em."
  },
  {
    page: 11,
    sender: "Lê Thị Khánh Huyền",
    content: "Nhân ngày 20/11, em xin chúc thầy cô sức khoẻ, thành công, có một ngày lễ thật hạnh phúc cũng như chúc các bạn TU1E"
  },
  {
    page: 12,
    sender: "Nguyễn Bảo Khanh",
    content: "Dạ Bảo Khanh chúc thầy 20/11, luôn mạnh khỏe, hạnh phúc và thành công trong sự nghiệp trồng người. Cảm ơn thầy đã đồng hành cùng TU1E chúng em. Chúc thầy luôn giữ mãi ngọn lửa nhiệt huyết với nghề và có thật nhiều niềm vui trong cuộc sống ạ."
  },
  {
    page: 13,
    sender: "Nguyễn Minh Khuê",
    content: "Nhân ngày 20/11, em kính chúc thầy thật nhiều sức khỏe, niềm vui và hạnh phúc. Chúc thầy luôn thành công trong công việc, giữ mãi nhiệt huyết với nghề và tiếp tục là người truyền cảm hứng cho các thế hệ sinh viên. Chúc thầy có một ngày Nhà giáo Việt Nam thật ý nghĩa!"
  },
  {
    page: 14,
    sender: "Nguyễn Thị Khánh Linh",
    content: "Nhân ngày Nhà giáo Việt Nam 20/11, em xin gửi lời tri ân sâu sắc nhất đến thầy. Cảm ơn thầy vì đã đồng hàng cùng TU1E để tạo nên một tập thể vui vẻ hoà đồng. Chúc thầy trong sự nghiệp trồng người cao quý sẽ gặt hái thêm nhiều thành công."
  },
  {
    page: 15,
    sender: "Lê Trần Thảo Ly",
    content: "Nhân ngày Nhà giáo Việt Nam 20/11, em xin chúc thầy có một mùa hiến chương trọn vẹn, hạnh phúc và có nhiều sức khoẻ, nhiệt huyết để có thể tiếp tục dẫn dắt sinh viên chúng em."
  },
  {
    page: 16,
    sender: "Võ Hoài Bảo Ly",
    content: "Nhân dịp Ngày Nhà giáo Việt Nam 20/11, xin gửi đến Thầy những lời chúc tốt đẹp và lòng biết ơn sâu sắc. Cảm ơn Thầy Sỹ đã luôn tận tụy truyền đạt tri thức và xây dựng những giá trị quý báu cho thế hệ tương lai. Hy vọng rằng Thầy cùng tập thể lớp TU1E sẽ cùng có những kỉ niệm thật đẹp ạa"
  },
  {
    page: 17,
    sender: "Phạm Thị Xuân Mai",
    content: "Nhân ngày 20/11, em chúc thầy luôn mạnh khỏe, vui vẻ, hạnh phúc và gặp nhiều may mắn trong công việc cũng như cuộc sống ạ"
  },
  {
    page: 18,
    sender: "Đỗ Lê Nhật Minh",
    content: "Một mùa hiến chương nữa lại đến, em kính chúc thầy luôn luôn tràn đầy nhiệt huyết, sức khỏe dồi dào, hạnh phúc viên mãn. Chúng em rất vui khi được thầy dẫn dắt, quan tâm trong suốt thời gian qua. Hi vọng rằng chúng em còn được thầy dạy bảo thêm thật nhiều nữa. Em iu TU1E và TU1E rất vui khi có thầy Sĩ!"
  },
  {
    page: 19,
    sender: "Võ Bình Minh",
    content: "Nhân dịp 20/11 em chúc thầy nhiều sức khoẻ, luôn giữ cho mình nhiệt huyết trong công việc"
  },
  {
    page: 20,
    sender: "Nguyễn Ngô Thuý Ngân",
    content: "Dạ Thúy Ngân chúc thầy 20/11 luôn tràn đầy năng lượng như khi chạy bộ, dồi dào sức khỏe, tiền vô như nước sông ĐÀ, tiền ra nhỏ giọt như là cà phê. chúc thầy có một mùa hiến chương 20/11 thật ý nghĩa, thật nhiều niềm vui và luôn giữ lửa đam mê với nghề. Thầy mãi là huấn luyện viên tinh thần tuyệt vời của chúng em!!"
  },
  {
    page: 21,
    sender: "Vi Trần Hoàng Ngân",
    content: "Nhân ngày nhà giáo Việt Nam 20/11, em xin kính chúc thầy một ngày lễ trọn vẹn niềm vui, chúc thầy thật nhiều sức khoẻ, cuộc sống luôn hạnh phúc và sẽ đạt nhiều thành công trong sự nghiệp. Chúc thầy luôn giữ trọn ngọn lửa nhiệt huyết với nghề để dẫn dắt chúng em cùng với các thế hệ sinh viên trong 4 năm học ý nghĩa ạ!"
  },
  {
    page: 22,
    sender: "Lê Thị Bảo Ngọc",
    content: "Nhân ngày 20/11, em xin được gửi đến thầy lời chúc sức khoẻ, chúc thầy thành công trên con đường công danh sự nghiệp, chúc thầy luôn vui vẻ hạnh phúc."
  },
  {
    page: 23,
    sender: "Đặng Thảo Nhi",
    content: "Nhân ngày 20/11, em chúc thầy luôn mạnh khỏe và hạnh phúc. Mong mọi hành trình gieo chữ của thầy được đơm hoa kết trái bằng niềm vui và sự ghi nhận xứng đáng."
  },
  {
    page: 24,
    sender: "Hoàng Nguyễn Bảo Nhi",
    content: "Nhân ngày 20/11, em xin chúc thầy luôn mạnh khoẻ và tươi trẻ trong hành trình trồng người. Em cảm ơn thầy vì đã tin tưởng và đồng hành cùng bản thân em nói riêng và Ban Truyền Thông nói chung để chúng em có thêm nhiều kỉ niệm cùng với lớp TU1E. Bản thân em và tập thể lớp sẽ cố gắng không ngừng để cùng nhau gặt hái thêm nhiều trái ngọt trong suốt 4 năm thanh xuân tại trường ĐHSP, ĐH Huế ạ"
  },
  {
    page: 25,
    sender: "Lư Thị Quỳnh Như",
    content: "Nhân ngày 20/11, em xin chúc thầy thật nhiều sức khỏe, luôn vui vẻ, hạnh phúc và thành công trong công việc cũng như cuộc sống. Chúc thầy luôn giữ mãi nhiệt huyết với nghề và có thật nhiều niềm vui trên hành trình giảng dạy ạ. Em chúc thầy một ngày Nhà giáo Việt Nam thật ý nghĩa!"
  },
  {
    page: 26,
    sender: "Lê Hồng Oanh",
    content: "Nhân ngày 20/11, em chúc thầy luôn mạnh khỏe, vui vẻ, gặp nhiều may mắn và thành công trên con đường sự nghiệp. Chúc thầy có một ngày Nhà giáo Việt Nam thật ý nghĩa và nhiều niềm vui ạ!"
  },
  {
    page: 27,
    sender: "Lê Nguyễn Minh Phương",
    content: "Đây là lần đầu tiên em đảm nhận vai trò lớp trưởng ở bậc đại học, nên có nhiều lúc em loay hoay, lo mình làm chưa tốt, chưa đủ chu toàn cho cả lớp. Cảm ơn thầy những lúc ấy đã luôn chỉ bảo, góp ý cho em từng chút một. Nhân ngày Nhà giáo Việt Nam 20/11, em xin kính chúc thầy luôn dồi dào sức khỏe để tiếp tục gieo những hạt giống tri thức và yêu thương cho nhiều thế hệ học trò. Chúc thầy có thật nhiều niềm vui trong công việc, bình yên và hạnh phúc bên gia đình, và mỗi ngày đến lớp đều là một ngày ấm áp."
  },
  {
    page: 28,
    sender: "Nguyễn Trần Bảo Quyên",
    content: "Em xin chúc thầy có một ngày 20/11 thật nhiều niềm vui, sức khỏe dồi dào và thành công hơn nữa trong công tác giảng dạy cũng như nghiên cứu ạ. Cảm ơn thầy đã luôn tận tâm định giải đáp những băn khoăn và đồng hành cùng chúng em trong suốt chặng đường vừa qua"
  },
  {
    page: 29,
    sender: "Phan Lê Phương Thảo",
    content: "Dạ nhân ngày 20/11, em chúc thầy luôn mạnh khỏe, hạnh phúc và gặt hái được nhiều thành công trong tương lai ạ.Và đặc biệt là em mong thầy có một ngày lễ thật vui, luôn giữ vững sức khỏe và năng lượng tích cực trên giảng đường ạ."
  },
  {
    page: 30,
    sender: "Trần Thị Phương Thảo",
    content: "Nhân ngày 20/11, em chúc thầy luôn mạnh khỏe, vui vẻ, gặp nhiều may mắn và thành công trên con đường sự nghiệp. Chúc thầy có một ngày Nhà giáo Việt Nam thật ý nghĩa và nhiều niềm vui ạ!"
  },
  {
    page: 31,
    sender: "Lê Minh Thư",
    content: "Nhân ngày 20/11, em chúc thầy luôn mạnh khỏe, vui vẻ, tiền vào như nước, deadline tự né và học trò bớt báo để thầy sống lâu với nghề ạ! =))))"
  },
  {
    page: 32,
    sender: "Nguyễn Anh Thư",
    content: "Kính chúc thầy ngày Nhà giáo Việt Nam ngập tràn niềm vui, luôn giữ vững ngọn lửa đam mê với sự nghiệp trồng người cao quý."
  },
  {
    page: 33,
    sender: "Nguyễn Thị Huyền Thương",
    content: "Nhân ngày Nhà giáo Việt Nam 20/11, em kính chúc thầy thật nhiều sức khỏe, niềm vui và hạnh phúc. Chúc thầy luôn giữ vững nhiệt huyết, đam mê với nghề, tiếp tục là người truyền cảm hứng và dẫn dắt nhiều thế hệ sinh viên trên con đường tri thức."
  },
  {
    page: 34,
    sender: "Phùng Trần Bảo Thy",
    content: "Nhân ngày Nhà giáo Việt Nam, em chúc thầy luôn mạnh khỏe, bình an và gặt hái được nhiều thành công trên hành trình giảng dạy. Chúc thầy luôn giữ được niềm đam mê, sự nhiệt huyết với công việc, gặp nhiều thuận lợi trong những dự định sắp tới và có thêm thật nhiều niềm vui trong cuộc sống ạ!"
  },
  {
    page: 35,
    sender: "Lê Bảo Trâm",
    content: "Nhân ngày Nhà giáo Việt Nam 20/11, em kính chúc thầy dồi dào sức khoẻ, luôn giữ nụ cười và niềm tin vững vàng trong sự nghiệp trồng người cao quý, ngày càng gặt hái nhiều thành công trong cuộc sống ạ"
  },
  {
    page: 36,
    sender: "Trần Minh Trang",
    content: "Nhân ngày Nhà giáo Việt Nam 20/11, em xin gửi đến Thầy lời tri ân sâu sắc nhất. Kính chúc Thầy luôn vững bước trong sự nghiệp giáo dục và tiếp tục là người truyền cảm hứng, chắp cánh cho những ước mơ và hoài bão của các thế hệ sinh viên."
  },
  {
    page: 37,
    sender: "Lê Ánh Tuyết",
    content: "Nhân ngày Nhà giáo Việt Nam 20/11, em kính chúc thầy luôn mạnh khỏe, hạnh phúc và thành công. Chúc thầy luôn giữ vững nhiệt huyết với nghề và gặt hái được nhiều thành tựu trong sự nghiệp giảng dạy ạ."
  },
  {
    page: 38,
    sender: "Trịnh Thị Tường Vy",
    content: "Cảm ơn thầy vì đã trở thành một trong những người đồng hành đầu tiên của chúng em trên hành trình đại học. Mong rằng thầy sẽ luôn giữ được sự nhiệt huyết, tận tâm và nụ cười trên hành trình gieo mầm tri thức."
  }
];

// ============================================================================
// NỘI DUNG LỜI MỞ ĐẦU
// ============================================================================
const INTRO_CONTENT = {
  title: "GỬI NGÀN LỜI TRI ÂN",
  subtitle: "20/11 – Ngày Nhà giáo Việt Nam",
  paragraphs: [
    "Có những hành trình sẽ trở nên ý nghĩa hơn bởi sự đồng hành của những người dẫn đường. Có những bài học không chỉ nằm trên trang sách mà còn được viết nên từ sự tận tâm, yêu thương và những điều thầy cô lặng lẽ trao gửi.",
    "Nhân ngày Nhà giáo Việt Nam 20/11, tập thể TU1E chúng em xin gửi đến quý thầy cô những lời chúc tốt đẹp và chân thành nhất.",
    "Website này là nơi lưu giữ 38 lời chúc, 38 tình cảm và 38 lời tri ân được gửi gắm từ mỗi thành viên. Mỗi trang sổ là một lời cảm ơn, mỗi dòng chữ là một chút yêu thương mà chúng em muốn dành tặng những người đã và đang dìu dắt mình trên hành trình trưởng thành.",
    "Mong rằng khi mở từng trang sổ, thầy cô sẽ cảm nhận được tình cảm chân thành của chúng em."
  ],
  closing: "38 lời chúc – Một tấm lòng tri ân."
};

const FLORAL_THEMES = [
  { name: "Hoa Anh Đào Mùa Xuân • 20/11", color1: "#f8bbd0", color2: "#f06292", center: "#ffd54f" },
  { name: "Hoa Hồng Phấn Dịu Dàng • 20/11", color1: "#f48fb1", color2: "#ec407a", center: "#ffe082" },
  { name: "Hoa Mẫu Đơn Thanh Khiết • 20/11", color1: "#fce4ec", color2: "#f48fb1", center: "#ffca28" },
  { name: "Hoa Trà My Hồng Tri Ân • 20/11", color1: "#f8bbd0", color2: "#d81b60", center: "#fff176" },
  { name: "Hoa Sen Hồng Thanh Cao • 20/11", color1: "#fce4ec", color2: "#ec407a", center: "#ffd54f" },
  { name: "Hoa Tulip Hồng Sớm Mai • 20/11", color1: "#f48fb1", color2: "#ad1457", center: "#ffe082" }
];

// ============================================================================
// THỨ TỰ CÁC TRANG TRONG SỔ LƯU BÚT 3D
// currentStep:
//   -1 : Bìa sổ
//    0 : Trang Lời Mở Đầu
//    1 : Trang "Thân gửi Thầy Trịnh Văn Sỹ" (kèm ảnh thầy 1.jpg & 2.jpg)
//  2..39: 38 Trang lời chúc (Trang 01/38 -> Trang 38/38)
//   40 : Trang Kết (3 hình ảnh chung của tập thể lớp TU1E)
// ============================================================================
let currentStep = -1;
let isAnimating = false;
const MAX_STEP = 40;

const bookScene = document.getElementById("bookScene");
const book3D = document.getElementById("book3D");
const topSheet = document.getElementById("topSheet");
const underSheet = document.getElementById("underSheet");
const topSheetContent = document.getElementById("topSheetContent");
const underSheetContent = document.getElementById("underSheetContent");
const musicToggleBtn = document.getElementById("musicToggleBtn");
const bgAudioElement = document.getElementById("bgAudioElement");

function createFloralArchSvg() {
  return `
    <div class="cover-floral-wreath">
      <svg viewBox="0 0 260 100" class="cover-svg-arch" aria-hidden="true">
        <path d="M25 88 C55 22, 205 22, 235 88" stroke="#d4a373" stroke-width="1.6" stroke-dasharray="4 4" fill="none"/>
        <path d="M55 58 C38 46, 38 31, 58 38 C62 48, 58 56, 55 58 Z" fill="#9ccc65" opacity="0.82"/>
        <path d="M205 58 C222 46, 222 31, 202 38 C198 48, 202 56, 205 58 Z" fill="#9ccc65" opacity="0.82"/>
        <path d="M90 36 C75 20, 82 10, 98 20 C100 28, 95 34, 90 36 Z" fill="#8bc34a" opacity="0.78"/>
        <path d="M170 36 C185 20, 178 10, 162 20 C160 28, 165 34, 170 36 Z" fill="#8bc34a" opacity="0.78"/>
        <g transform="translate(130, 32)">
          <circle cx="0" cy="-13" r="12" fill="#f8bbd0"/>
          <circle cx="12" cy="-4" r="12" fill="#f48fb1"/>
          <circle cx="8" cy="10" r="12" fill="#f8bbd0"/>
          <circle cx="-8" cy="10" r="12" fill="#f48fb1"/>
          <circle cx="-12" cy="-4" r="12" fill="#fce4ec"/>
          <circle cx="0" cy="0" r="6" fill="#ffd54f"/>
        </g>
        <g transform="translate(76, 48) scale(0.68)">
          <circle cx="0" cy="-12" r="11" fill="#fce4ec"/>
          <circle cx="11" cy="-4" r="11" fill="#f8bbd0"/>
          <circle cx="7" cy="10" r="11" fill="#f48fb1"/>
          <circle cx="-7" cy="10" r="11" fill="#fce4ec"/>
          <circle cx="-11" cy="-4" r="11" fill="#f8bbd0"/>
          <circle cx="0" cy="0" r="5" fill="#ffe082"/>
        </g>
        <g transform="translate(184, 48) scale(0.68)">
          <circle cx="0" cy="-12" r="11" fill="#fce4ec"/>
          <circle cx="11" cy="-4" r="11" fill="#f8bbd0"/>
          <circle cx="7" cy="10" r="11" fill="#f48fb1"/>
          <circle cx="-7" cy="10" r="11" fill="#fce4ec"/>
          <circle cx="-11" cy="-4" r="11" fill="#f8bbd0"/>
          <circle cx="0" cy="0" r="5" fill="#ffe082"/>
        </g>
      </svg>
    </div>
  `;
}

function createMiniFlowerSvg(themeIndex) {
  const t = FLORAL_THEMES[themeIndex % FLORAL_THEMES.length];
  return `
    <svg class="wish-mini-flower-svg" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 52 C8 40, 12 26, 26 32 C30 40, 24 48, 18 52 Z" fill="#9ccc65" opacity="0.85"/>
      <path d="M62 52 C72 40, 68 26, 54 32 C50 40, 56 48, 62 52 Z" fill="#8bc34a" opacity="0.85"/>
      <g transform="translate(40, 40)">
        <circle cx="0" cy="-14" r="12" fill="${t.color1}"/>
        <circle cx="13" cy="-4" r="12" fill="${t.color2}" opacity="0.88"/>
        <circle cx="8" cy="11" r="12" fill="${t.color1}"/>
        <circle cx="-8" cy="11" r="12" fill="${t.color2}" opacity="0.88"/>
        <circle cx="-13" cy="-4" r="12" fill="${t.color1}"/>
        <circle cx="0" cy="0" r="6.5" fill="${t.center}"/>
      </g>
    </svg>
  `;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ============================================================================
// HÀM DỰNG NỘI DUNG TỪNG TRANG TRONG KHỐI SỔ 3D (-1 -> 40)
// ============================================================================
function getSheetHtmlForStep(step) {
  // 0. BÌA SỔ ĐẦU TIÊN (step === -1)
  if (step === -1) {
    return `
      ${createFloralArchSvg()}
      <span class="cover-tag">SỔ LƯU BÚT TRI ÂN • LỚP ${CLASS_CONFIG.className}</span>
      <h1 class="cover-title">Gửi Ngàn<br/>Lời Tri Ân</h1>
      <p class="cover-date">20/11 – Ngày Nhà giáo Việt Nam</p>
      <div class="cover-divider"><span>✿</span></div>
      <p class="cover-quote">“38 lời chúc – Một tấm lòng tri ân”</p>
      <div class="wax-seal-wrapper">
        <div class="wax-seal">
          <span class="seal-icon">🌸</span>
          <span class="seal-label">CHẠM MỞ</span>
        </div>
        <span class="open-hint">Nhấn vào giữa sổ để mở & lật từng trang ✨</span>
      </div>
    `;
  }

  // 1. TRANG LỜI MỞ ĐẦU (step === 0)
  if (step === 0) {
    const paragraphsHtml = INTRO_CONTENT.paragraphs
      .map((p) => `<p>${p}</p>`)
      .join("");

    return `
      <span class="cover-tag">LỜI MỞ ĐẦU • TẬP THỂ ${CLASS_CONFIG.className}</span>
      <div>
        <h2 class="page-3d-intro-title">${INTRO_CONTENT.title}</h2>
        <p class="page-3d-intro-sub">${INTRO_CONTENT.subtitle}</p>
      </div>
      <div class="page-3d-intro-body">
        ${paragraphsHtml}
      </div>
      <div class="page-3d-intro-closing">
        “${INTRO_CONTENT.closing}”
      </div>
      <div class="wax-seal-wrapper">
        <div class="wax-seal seal-compact">
          <span class="seal-icon">🌸</span>
          <span class="seal-label">LẬT TIẾP</span>
        </div>
        <span class="open-hint">Chạm giữa sổ • Trang Thân gửi Thầy ✨</span>
      </div>
    `;
  }

  // 2. TRANG DÀNH RIÊNG TRƯỚC 38 LỜI CHÚC: "THÂN GỬI THẦY TRỊNH VĂN SỸ" (step === 1)
  if (step === 1) {
    const photo1 = encodeURI(CLASS_CONFIG.teacherPhotos[0]);
    const photo2 = encodeURI(CLASS_CONFIG.teacherPhotos[1]);

    return `
      <span class="cover-tag">NGƯỜI GIEO MẦM XANH • TẬP THỂ ${CLASS_CONFIG.className}</span>
      <div>
        <h2 class="teacher-title-script">Thân gửi Thầy Trịnh Văn Sỹ</h2>
        <p class="teacher-sub-role">Người thầy đồng hành đầu tiên trên hành trình đại học của ${CLASS_CONFIG.className}</p>
      </div>

      <div class="teacher-photos-duo">
        <div class="teacher-polaroid p-left">
          <div class="mini-washi"></div>
          <img src="${photo1}" alt="Thầy Trịnh Văn Sỹ" class="teacher-photo-img" />
          <span class="teacher-polaroid-label">Thầy Trịnh Văn Sỹ 🌸</span>
        </div>
        <div class="teacher-polaroid p-right">
          <div class="mini-washi"></div>
          <img src="${photo2}" alt="Thầy Trịnh Văn Sỹ" class="teacher-photo-img" />
          <span class="teacher-polaroid-label">Mùa Tri Ân 20/11 ❤️</span>
        </div>
      </div>

      <div class="teacher-dedication-note">
        “Cảm ơn Thầy đã luôn tận tâm lắng nghe, dìu dắt và gieo những mầm xanh tri thức, yêu thương cho tập thể <strong>${CLASS_CONFIG.className}</strong> chúng em!”
      </div>

      <div class="wax-seal-wrapper">
        <div class="wax-seal seal-compact">
          <span class="seal-icon">💌</span>
          <span class="seal-label">38 LỜI CHÚC</span>
        </div>
        <span class="open-hint">Chạm giữa sổ • Mở lời chúc 01/38 ✨</span>
      </div>
    `;
  }

  // 3. 38 TRANG LỜI CHÚC TỪ 38 THÀNH VIÊN (2 <= step <= 39)
  if (step >= 2 && step <= 39) {
    const wishNumber = step - 1; // 1 -> 38
    const wishIndex = wishNumber - 1;
    const item = WISHES_DATA[wishIndex] || { page: wishNumber, sender: "", content: "" };
    const pageNumStr = String(wishNumber).padStart(2, "0");
    const theme = FLORAL_THEMES[wishIndex % FLORAL_THEMES.length];

    const senderDisplay = item.sender && item.sender.trim() !== ""
      ? escapeHtml(item.sender.trim())
      : `Thành viên thứ ${pageNumStr} – ${CLASS_CONFIG.className}`;

    const wishText = item.content && item.content.trim() !== ""
      ? escapeHtml(item.content.trim())
      : "";

    const nextHint = wishNumber < 38
      ? `Chạm giữa sổ • Sang trang ${String(wishNumber + 1).padStart(2, "0")}/38 ✨`
      : `Chạm giữa sổ • Xem Trang Kết Ảnh Lớp 📸`;

    return `
      <span class="cover-tag">TRANG LƯU BÚT ${pageNumStr} / 38 • LỚP ${CLASS_CONFIG.className}</span>

      <div class="wish-3d-flower-badge">
        ${createMiniFlowerSvg(wishIndex)}
        <div class="wish-3d-meta">
          <div class="wish-3d-sender-title">${senderDisplay}</div>
          <div class="wish-3d-theme-sub">${theme.name}</div>
        </div>
      </div>

      <div class="wish-3d-paper-box">
        <div class="wish-salutation">Thân gửi Thầy Trịnh Văn Sỹ,</div>
        <div class="wish-text-content">${wishText}</div>
        <div class="wish-signature-line">— ${senderDisplay}</div>
      </div>

      <div class="wax-seal-wrapper">
        <div class="wax-seal seal-compact">
          <span class="seal-icon">🌸</span>
          <span class="seal-label">${pageNumStr} / 38</span>
        </div>
        <span class="open-hint">${nextHint}</span>
      </div>
    `;
  }

  // 4. TRANG KẾT - BỘ 3 ẢNH CHUNG CỦA TẬP THỂ LỚP TU1E (step === 40)
  const classImg1 = encodeURI(CLASS_CONFIG.classPhotos[0]);
  const classImg2 = encodeURI(CLASS_CONFIG.classPhotos[1]);
  const classImg3 = encodeURI(CLASS_CONFIG.classPhotos[2]);

  return `
    <span class="cover-tag">TRANG KẾT • KỶ NIỆM TẬP THỂ ${CLASS_CONFIG.className}</span>
    <h2 class="ending-3d-title">Tập Thể ${CLASS_CONFIG.className} & Thầy Trịnh Văn Sỹ</h2>
    <p class="ending-3d-sub">
      38 trái tim – Một tấm lòng tri ân. Kính chúc Thầy luôn mạnh khỏe, hạnh phúc và mãi giữ ngọn lửa nhiệt huyết!
    </p>

    <div class="ending-collage-box">
      <div class="collage-main-polaroid">
        <div class="mini-washi"></div>
        <img src="${classImg1}" alt="Ảnh tập thể lớp ${CLASS_CONFIG.className}" class="collage-img" />
        <span class="collage-caption">Gia đình nhỏ ${CLASS_CONFIG.className} bên Thầy Sỹ ❤️</span>
      </div>
      <div class="collage-sub-row">
        <div class="collage-sub-polaroid sub-left">
          <img src="${classImg2}" alt="Ảnh tập thể lớp ${CLASS_CONFIG.className}" class="collage-img" />
          <span class="collage-caption">Thanh xuân ĐHSP Huế 🌸</span>
        </div>
        <div class="collage-sub-polaroid sub-right">
          <img src="${classImg3}" alt="Ảnh tập thể lớp ${CLASS_CONFIG.className}" class="collage-img" />
          <span class="collage-caption">Mãi nhớ ơn Thầy 💐</span>
        </div>
      </div>
    </div>

    <div class="wax-seal-wrapper">
      <div class="wax-seal seal-compact">
        <span class="seal-icon">💐</span>
        <span class="seal-label">ĐÓNG SỔ</span>
      </div>
      <span class="open-hint">Chạm lần nữa để khép sổ về trang bìa ✨</span>
    </div>
  `;
}

// ============================================================================
// HIỆU ỨNG MỞ / LẬT SÁCH 3D CHO MỌI TRANG
// ============================================================================
function renderInitialBook() {
  topSheetContent.innerHTML = getSheetHtmlForStep(currentStep);
  underSheetContent.innerHTML = getSheetHtmlForStep(0);
}

function flipBookToStep(targetStep) {
  if (isAnimating) return;

  const isForward = targetStep > currentStep || (currentStep === MAX_STEP && targetStep === -1);
  isAnimating = true;

  if (isForward) {
    underSheetContent.innerHTML = getSheetHtmlForStep(targetStep);
    underSheet.classList.add("is-revealing");
    topSheet.classList.add("is-flipping-next");

    setTimeout(() => {
      currentStep = targetStep;
      topSheetContent.innerHTML = getSheetHtmlForStep(currentStep);
      topSheet.classList.remove("is-flipping-next");
      underSheet.classList.remove("is-revealing");

      const upcoming = currentStep < MAX_STEP ? currentStep + 1 : -1;
      underSheetContent.innerHTML = getSheetHtmlForStep(upcoming);

      isAnimating = false;
    }, 860);
  } else {
    underSheetContent.innerHTML = getSheetHtmlForStep(currentStep);
    topSheetContent.innerHTML = getSheetHtmlForStep(targetStep);
    topSheet.classList.add("is-flipping-prev");

    setTimeout(() => {
      currentStep = targetStep;
      topSheet.classList.remove("is-flipping-prev");
      const upcoming = currentStep < MAX_STEP ? currentStep + 1 : -1;
      underSheetContent.innerHTML = getSheetHtmlForStep(upcoming);

      isAnimating = false;
    }, 820);
  }
}

function advanceNextPage() {
  // Tự động bật nhạc nền "Người Gieo Mầm Xanh" ở lần chạm mở sổ đầu tiên
  ensureMusicStartedOnFirstTap();

  if (currentStep < MAX_STEP) {
    flipBookToStep(currentStep + 1);
  } else {
    flipBookToStep(-1);
  }
}

// ============================================================================
// NHẠC NỀN "NGƯỜI GIEO MẦM XANH" (HỖ TRỢ FILE MP3 + GIAI ĐIỆU PIANO TỰ ĐỘNG)
// ============================================================================
let isMusicPlaying = false;
let hasAutoStartedMusic = false;
let usingMp3File = false;
let audioCtx = null;
let synthTimer = null;
let noteIndex = 0;

// Giai điệu & Hợp âm Piano của bài "Người Gieo Mầm Xanh" (Sáng tác: Hứa Kim Tuyền)
// Tần số nốt nhạc (Hz)
const NOTE_FREQ = {
  "C3": 130.81, "E3": 164.81, "F3": 174.61, "G3": 196.00, "G#3": 207.65, "A3": 220.00, "B3": 246.94,
  "C4": 261.63, "D4": 293.66, "E4": 329.63, "F4": 349.23, "G4": 392.00, "G#4": 415.30, "A4": 440.00, "B4": 493.88,
  "C5": 523.25, "D5": 587.33, "E5": 659.25, "F5": 698.46, "G5": 783.99, "A5": 880.00
};

// Bản phối Piano Music Box: "Ai thuở bé cũng đã từng ước..." -> "Và tôi gieo mầm xanh ấy cho cuộc đời..."
const NGMX_SCORE = [
  // Verse: "Ai thuở bé cũng đã từng ước..." [C -> G/B -> Am7 -> Gm7]
  { melody: "C5", bass: ["C3", "G3", "E4"], dur: 450 },
  { melody: "D5", bass: [], dur: 450 },
  { melody: "E5", bass: ["B3", "D4", "G4"], dur: 550 },
  { melody: "E5", bass: [], dur: 400 },
  { melody: "F5", bass: [], dur: 400 },
  { melody: "G5", bass: ["A3", "E4", "C5"], dur: 650 },
  { melody: "E5", bass: ["G3", "D4", "B4"], dur: 900 },

  // "Ước sau này mình lớn sẽ trông ra làm sao, sống thế nào..." [F -> Dm7 -> G]
  { melody: "D5", bass: ["F3", "C4", "A4"], dur: 450 },
  { melody: "E5", bass: [], dur: 450 },
  { melody: "F5", bass: [], dur: 500 },
  { melody: "G5", bass: ["D4", "F4", "A4"], dur: 550 },
  { melody: "A5", bass: [], dur: 550 },
  { melody: "G5", bass: ["G3", "D4", "B4"], dur: 450 },
  { melody: "A5", bass: [], dur: 450 },
  { melody: "C5", bass: [], dur: 450 },
  { melody: "G4", bass: [], dur: 450 },
  { melody: "F4", bass: [], dur: 400 },
  { melody: "E4", bass: [], dur: 400 },
  { melody: "D4", bass: ["G3", "B3", "F4"], dur: 950 },

  // Chorus: "Và tôi gieo mầm xanh ấy cho cuộc đời..." [C -> E7]
  { melody: "C5", bass: ["C3", "G3", "E4"], dur: 420 },
  { melody: "C5", bass: [], dur: 420 },
  { melody: "C5", bass: [], dur: 420 },
  { melody: "D5", bass: [], dur: 420 },
  { melody: "E5", bass: ["E3", "B3", "G#4"], dur: 520 },
  { melody: "F5", bass: [], dur: 420 },
  { melody: "E5", bass: [], dur: 450 },
  { melody: "D5", bass: [], dur: 450 },
  { melody: "C5", bass: [], dur: 500 },
  { melody: "G4", bass: ["E3", "G#3", "B3"], dur: 850 },

  // "Nhẹ vun tay và tưới tiêu lên cao vời..." [Am7 -> Gm7]
  { melody: "C5", bass: ["A3", "E4", "C5"], dur: 420 },
  { melody: "C5", bass: [], dur: 420 },
  { melody: "C5", bass: [], dur: 420 },
  { melody: "D5", bass: [], dur: 420 },
  { melody: "E5", bass: ["G3", "D4", "B4"], dur: 520 },
  { melody: "F5", bass: [], dur: 420 },
  { melody: "E5", bass: [], dur: 450 },
  { melody: "F5", bass: [], dur: 450 },
  { melody: "G5", bass: ["C3", "G3", "E4"], dur: 950 },

  // "Đến một ngày tương lai rồi mầm xanh kia..." [F -> Em7 -> Dm7]
  { melody: "C5", bass: ["F3", "C4", "A4"], dur: 420 },
  { melody: "C5", bass: [], dur: 420 },
  { melody: "D5", bass: [], dur: 450 },
  { melody: "E5", bass: ["E3", "B3", "G4"], dur: 500 },
  { melody: "F5", bass: [], dur: 450 },
  { melody: "G5", bass: ["D4", "A4"], dur: 520 },
  { melody: "F5", bass: [], dur: 450 },
  { melody: "E5", bass: [], dur: 450 },
  { melody: "D5", bass: [], dur: 450 },
  { melody: "C5", bass: ["F3", "A3", "C4"], dur: 800 },

  // "Sẽ tỏa bóng râm chở che cả con đường..." [Dm7 -> G7 -> C]
  { melody: "A4", bass: ["F3", "C4", "F4"], dur: 450 },
  { melody: "C5", bass: [], dur: 450 },
  { melody: "D5", bass: ["G3", "D4", "B4"], dur: 520 },
  { melody: "E5", bass: [], dur: 480 },
  { melody: "D5", bass: [], dur: 480 },
  { melody: "C5", bass: ["F3", "G#3", "C4"], dur: 500 },
  { melody: "D5", bass: ["G3", "B3", "D4"], dur: 550 },
  { melody: "C5", bass: ["C3", "G3", "E4", "C5"], dur: 1350 }
];

function playPianoTone(freq, durationMs, isMelody = true) {
  if (!audioCtx || !freq) return;
  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const subOsc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = isMelody ? "triangle" : "sine";
  subOsc.type = "sine";
  osc.frequency.setValueAtTime(freq, now);
  subOsc.frequency.setValueAtTime(freq * 2, now); // Họa âm chuông music-box ấm áp

  const peakGain = isMelody ? 0.11 : 0.045;
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.linearRampToValueAtTime(peakGain, now + 0.03);
  gain.gain.exponentialRampToValueAtTime(0.0008, now + (durationMs / 1000) * 1.45);

  const subGain = audioCtx.createGain();
  subGain.gain.setValueAtTime(isMelody ? 0.025 : 0.008, now);
  subGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);

  osc.connect(gain);
  subOsc.connect(subGain);
  subGain.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start(now);
  subOsc.start(now);
  osc.stop(now + (durationMs / 1000) * 1.5);
  subOsc.stop(now + 0.4);
}

function scheduleNextSynthStep() {
  if (!isMusicPlaying || usingMp3File) return;

  const step = NGMX_SCORE[noteIndex % NGMX_SCORE.length];
  noteIndex++;

  if (step.melody && NOTE_FREQ[step.melody]) {
    playPianoTone(NOTE_FREQ[step.melody], step.dur, true);
  }

  if (step.bass && step.bass.length > 0) {
    step.bass.forEach((bNote, idx) => {
      if (NOTE_FREQ[bNote]) {
        setTimeout(() => {
          if (isMusicPlaying) playPianoTone(NOTE_FREQ[bNote], step.dur * 1.9, false);
        }, idx * 55);
      }
    });
  }

  synthTimer = setTimeout(scheduleNextSynthStep, step.dur);
}

function startBackgroundMusic() {
  if (isMusicPlaying) return;
  isMusicPlaying = true;
  musicToggleBtn.classList.add("is-playing");

  // Thử phát file mp3 nếu người dùng có để file mp3 trong thư mục
  if (CLASS_CONFIG.musicUrl && bgAudioElement) {
    bgAudioElement.src = encodeURI(CLASS_CONFIG.musicUrl);
    bgAudioElement.volume = 0.65;
    bgAudioElement.play().then(() => {
      usingMp3File = true;
    }).catch(() => {
      // Nếu không có file mp3, tự động phát bản Piano "Người Gieo Mầm Xanh"
      usingMp3File = false;
      startSynthMusic();
    });
  } else {
    startSynthMusic();
  }
}

function startSynthMusic() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;
  if (!audioCtx) {
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  clearTimeout(synthTimer);
  scheduleNextSynthStep();
}

function stopBackgroundMusic() {
  isMusicPlaying = false;
  musicToggleBtn.classList.remove("is-playing");
  if (bgAudioElement) {
    bgAudioElement.pause();
  }
  clearTimeout(synthTimer);
}

function ensureMusicStartedOnFirstTap() {
  if (!hasAutoStartedMusic) {
    hasAutoStartedMusic = true;
    startBackgroundMusic();
  }
}

musicToggleBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  hasAutoStartedMusic = true;
  if (isMusicPlaying) {
    stopBackgroundMusic();
  } else {
    startBackgroundMusic();
  }
});

// ============================================================================
// SỰ KIỆN TƯƠNG TÁC: NHẤN VÀO SỔ 3D ĐỂ MỞ VÀ LẬT TỪNG TRANG
// ============================================================================
book3D.addEventListener("click", () => {
  advanceNextPage();
});

book3D.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    advanceNextPage();
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    advanceNextPage();
  } else if (e.key === "ArrowLeft" && currentStep > -1) {
    flipBookToStep(currentStep - 1);
  }
});

// Hiệu ứng nghiêng 3D (Parallax Tilt) nhẹ nhàng theo chuột trên máy tính
window.addEventListener("mousemove", (e) => {
  if (window.matchMedia("(max-width: 860px)").matches) return;
  const xRatio = (e.clientX / window.innerWidth - 0.5) * 2;
  const yRatio = (e.clientY / window.innerHeight - 0.5) * 2;
  const rotY = xRatio * 4.5;
  const rotX = -yRatio * 3.5;
  bookScene.style.transform = `rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg)`;
});

// ============================================================================
// HIỆU ỨNG CÁNH HOA ANH ĐÀO 3D RƠI TRÊN CANVAS
// ============================================================================
function initPetalCanvas() {
  const canvas = document.getElementById("petalCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const PETAL_COUNT = 32;
  const petals = Array.from({ length: PETAL_COUNT }, () => createPetal(width, height, true));

  function createPetal(w, h, randomY = false) {
    return {
      x: Math.random() * w,
      y: randomY ? Math.random() * h : -25,
      size: 7 + Math.random() * 9,
      speedY: 0.65 + Math.random() * 1.15,
      speedX: -0.45 + Math.random() * 0.9,
      rotZ: Math.random() * Math.PI * 2,
      rotSpeedZ: (Math.random() - 0.5) * 0.025,
      flipPhase: Math.random() * Math.PI * 2,
      flipSpeed: 0.02 + Math.random() * 0.03,
      opacity: 0.45 + Math.random() * 0.4,
      hueType: Math.floor(Math.random() * 3)
    };
  }

  function drawPetal(p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotZ);
    const scale3D = 0.35 + Math.abs(Math.cos(p.flipPhase)) * 0.65;
    ctx.scale(1, scale3D);

    ctx.beginPath();
    ctx.moveTo(0, -p.size);
    ctx.bezierCurveTo(p.size * 0.9, -p.size * 0.8, p.size * 0.85, p.size * 0.6, 0, p.size);
    ctx.bezierCurveTo(-p.size * 0.85, p.size * 0.6, -p.size * 0.9, -p.size * 0.8, 0, -p.size);
    ctx.closePath();

    const colors = [
      `rgba(248, 187, 208, ${p.opacity})`,
      `rgba(244, 143, 177, ${p.opacity})`,
      `rgba(252, 228, 236, ${p.opacity + 0.1})`
    ];
    ctx.fillStyle = colors[p.hueType];
    ctx.fill();
    ctx.restore();
  }

  function animatePetals() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < petals.length; i++) {
      const p = petals[i];
      p.y += p.speedY;
      p.x += p.speedX + Math.sin(p.flipPhase) * 0.35;
      p.rotZ += p.rotSpeedZ;
      p.flipPhase += p.flipSpeed;

      if (p.y > height + 25 || p.x < -30 || p.x > width + 30) {
        petals[i] = createPetal(width, height, false);
      }
      drawPetal(p);
    }
    requestAnimationFrame(animatePetals);
  }

  animatePetals();
}

// Khởi chạy
renderInitialBook();
initPetalCanvas();
