
import React from 'react';
import { ArrowRight, Calendar, Users, Award, Clock, CheckCircle, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Calendar className="w-8 h-8 text-blue-600" />,
      title: "Đặt Lịch Dễ Dàng",
      description: "Đặt lịch khám chỉ với vài thao tác đơn giản trên website"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Đội Ngũ Chuyên Nghiệp",
      description: "Bác sĩ giàu kinh nghiệm, tận tâm với nghề"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Chất Lượng Cao",
      description: "Trang thiết bị hiện đại, dịch vụ chất lượng quốc tế"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Tiết Kiệm Thời Gian",
      description: "Không cần xếp hàng, đúng giờ hẹn đã có"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Bệnh Nhân Tin Tưởng" },
    { number: "50+", label: "Bác Sĩ Chuyên Khoa" },
    { number: "15+", label: "Năm Kinh Nghiệm" },
    { number: "24/7", label: "Hỗ Trợ Khẩn Cấp" }
  ];

  const testimonials = [
    {
      name: "Nguyễn Thị Lan",
      role: "Bệnh nhân",
      content: "Dịch vụ rất tốt, bác sĩ tận tâm. Đặt lịch online rất tiện lợi!",
      rating: 5
    },
    {
      name: "Trần Văn Nam",
      role: "Bệnh nhân",
      content: "Cơ sở vật chất hiện đại, nhân viên nhiệt tình. Rất hài lòng!",
      rating: 5
    },
    {
      name: "Lê Thị Hoa",
      role: "Bệnh nhân",
      content: "Đặt lịch dễ dàng, không phải chờ đợi lâu. Sẽ quay lại!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Đặt Lịch Khám
                <span className="block text-blue-200">Dễ Dàng & Nhanh Chóng</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Hệ thống đặt lịch khám bệnh trực tuyến hiện đại. Chăm sóc sức khỏe của bạn một cách tiện lợi và chuyên nghiệp.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate('/appointment')}
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center hover-scale"
                >
                  Đặt Lịch Ngay
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button
                  onClick={() => navigate('/services')}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors hover-scale"
                >
                  Xem Dịch Vụ
                </button>
              </div>
            </div>
            <div className="fade-in">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Đặt Lịch Nhanh</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-2">Chọn Chuyên Khoa</label>
                    <select className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white">
                      <option>Nội Khoa</option>
                      <option>Ngoại Khoa</option>
                      <option>Sản Phụ Khoa</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Chọn Ngày</label>
                    <input type="date" className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white" />
                  </div>
                  <button
                    onClick={() => navigate('/appointment')}
                    className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                  >
                    Tìm Lịch Trống
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Tại Sao Chọn MedCare?</h2>
            <p className="text-xl text-gray-600">Chúng tôi cam kết mang đến dịch vụ chăm sóc sức khỏe tốt nhất</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow hover-scale">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Chuyên Khoa Nổi Bật</h2>
            <p className="text-xl text-gray-600">Đa dạng các chuyên khoa với đội ngũ bác sĩ giàu kinh nghiệm</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Nội Khoa", icon: "🫀", desc: "Chẩn đoán và điều trị các bệnh nội khoa" },
              { name: "Ngoại Khoa", icon: "🏥", desc: "Phẫu thuật và điều trị ngoại khoa" },
              { name: "Sản Phụ Khoa", icon: "👶", desc: "Chăm sóc sức khỏe phụ nữ và trẻ em" },
              { name: "Nhi Khoa", icon: "🧸", desc: "Chuyên khoa dành cho trẻ em" },
              { name: "Tim Mạch", icon: "❤️", desc: "Chẩn đoán và điều trị bệnh tim mạch" },
              { name: "Da Liễu", icon: "✨", desc: "Điều trị các bệnh về da" }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow hover-scale">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <button
                  onClick={() => navigate('/appointment')}
                  className="text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center"
                >
                  Đặt Lịch
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Ý Kiến Bệnh Nhân</h2>
            <p className="text-xl text-gray-600">Những chia sẻ chân thực từ bệnh nhân</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover-scale">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Sẵn Sàng Đặt Lịch Khám?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Đừng để sức khỏe chờ đợi. Đặt lịch ngay hôm nay để được chăm sóc tốt nhất!
          </p>
          <button
            onClick={() => navigate('/appointment')}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors hover-scale text-lg"
          >
            Đặt Lịch Khám Ngay
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
