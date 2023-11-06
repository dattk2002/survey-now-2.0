import React from "react";
import Hero from "../Hero/Hero";
import "./Policy.module.css";
import "./Policy.css";

const Policy = () => {
  return (
    <div>
      <Hero />
      <div className="about-us-content">
        <h2>ĐIỀU KHOẢN SỬ DỤNG</h2>
        <h3>1. Phương thức thanh toán:</h3>
        <p>
          Chúng tôi cung cấp một số phương thức thanh toán như chuyển khoản ngân
          hàng, ví điện tử,... Mọi giao dịch thanh toán được thực hiện thông qua
          các cổng thanh toán bảo mật và được xác minh bởi các đối tác thanh
          toán đáng tin cậy.
        </p>
        <h3>2. Nội dung khảo sát:</h3>
        <p>
          Người tạo khảo sát chịu trách nhiệm đảm bảo rằng nội dung khảo sát
          không vi phạm các quy định pháp luật, các quy định về quyền riêng tư,
          bản quyền; không có ngôn từ, nội dung phỉ báng, phân biệt đối xử hoặc
          phản động. Chúng tôi có quyền loại bỏ hoặc từ chối công bố bất kỳ khảo
          sát nào mà chúng tôi cho rằng vi phạm chính sách này hoặc có nội dung
          không phù hợp.
        </p>
        <h3>3. Bồi thường</h3>
        <p>
          Bạn có nghĩa vụ bồi thường cho SurveyNow hoặc bất cứ bên thứ ba nào
          cho toàn bộ hay một phần thiệt hại thực tế mà phần lỗi được xác định
          là do bạn khi xảy ra một trong các tình huống dưới đây:
        </p>
        <p>
          {" "}
          - Vi phạm các Điều khoản sử dụng hoặc Chính sách bảo mật của chúng
          tôi.
        </p>
        <p>
          {" "}
          - Vi phạm các quy định và pháp luật hiện hành gây thiệt hại cho chúng
          tôi.
        </p>

        <h3>4. Miễn trừ trách nhiệm</h3>
        <p>
          Chúng tôi luôn cố gắng đảm bảo các ý kiến trên SurveyNow là trung
          thực, đáng tin cậy. Tuy nhiên, SurveyNow không chịu trách nhiệm đối
          với mọi sai sót, hệ quả hay thiệt hại nào từ việc sử dụng những thông
          tin này.
        </p>
        <p>
          Một số khảo sát trên SurveyNow liên kết với những trang web khác do
          các bên thứ ba quản lý. Vì thế, SurveyNow không chịu trách nhiệm đối
          với việc bảo mật thông tin hay bất kỳ khía cạnh nào khác của các trang
          web thứ ba. Người dùng cần kiểm tra và hiểu rõ chính sách của trang
          web thứ ba trước khi tiến hành làm khảo sát.
        </p>
        <h3>5. Về người tạo khảo sát</h3>
        <p>
          Người tạo khảo sát không được sử dụng ứng dụng SurveyNow để lừa đảo,
          gian lận hoặc thu thập thông tin cá nhân một cách bất hợp pháp.
        </p>
        <p>
          Người tạo khảo sát phải đối xử tôn trọng, lịch sự với người điền khảo
          sát và không gửi bất kỳ nội dung gây khó chịu, xúc phạm hoặc quấy rối.
        </p>
        <h3>6. Về người điền khảo sát</h3>
        <p>
          Người điền khảo sát phải hoàn thành toàn bộ các câu hỏi trong khảo sát
          một cách trung thực và đáng tin cậy.
        </p>
        <p>
          Người điền khảo sát không được sử dụng bất kỳ phương pháp gian lận
          hoặc tự động hóa nào để hoàn thành khảo sát.
        </p>
        <p style={{ marginBottom: "5%"}}>
          SurveyNow có quyền từ chối hoặc hủy bỏ bất kỳ tài khoản người điền
          khảo sát nào nếu phát hiện vi phạm chính sách hoặc vi phạm đạo đức làm
          ảnh hưởng đến chất lượng khảo sát.
        </p>
        <h2>CHÍNH SÁCH BẢO MẬT</h2>
        <h3>1. Cam kết và phương thức bảo mật:</h3>
        <p>
          Chúng tôi đảm bảo bảo mật thông tin cá nhân mà chúng tôi thu thập
          thông qua SurveyNow. Chúng tôi áp dụng các biện pháp an ninh vật lý,
          điện tử và quản lý thích hợp để bảo vệ thông tin khỏi mất mát, lạm
          dụng hoặc truy cập trái phép.
        </p>
        <h3>2. Sử dụng dữ liệu:</h3>
        <p style={{ marginBottom: "10%"}}>
          Chúng tôi có thể sử dụng dữ liệu thu thập từ SurveyNow để cải thiện
          trải nghiệm người dùng, cung cấp các tính năng mới và quản lý khảo sát
          cho bạn. Tuy nhiên, chúng tôi cam kết không tiết lộ thông tin cá nhân
          của bạn cho bất kỳ bên thứ ba nào mà không có sự đồng ý rõ ràng từ
          phía bạn.
        </p>
      </div>
    </div>
  );
};

export default Policy;
