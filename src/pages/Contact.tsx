
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Thiếu thông tin",
        description: "Vui lòng điền đầy đủ thông tin bắt buộc",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitted(true);
    toast({
      title: "Gửi tin nhắn thành công!",
      description: "Chúng tôi sẽ phản hồi trong vòng 24h.",
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      title: 'Địa Chỉ',
      details: [
        '123 Đường ABC, Phường XYZ',
        'Quận 1, TP. Hồ Chí Minh',
        'Việt Nam'
      ]
    },
    {
      icon: <Phone className="w-8 h-8 text-blue-600" />,
      title: 'Điện Thoại',
      details: [
        'Hotline: 0123.456.789',
        'Khẩn cấp: 0987.654.321',
        'Tư vấn: 0111.222.333'
      ]
    },
    {
      icon: <Mail className="w-8 h-8 text-blue-600" />,
      title: 'Email',
      details: [
        'info@medcare.com',
        'support@medcare.com',
        'appointment@medcare.com'
      ]
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: 'Giờ Làm Việc',
      details: [
        'Thứ 2 - Thứ 6: 7:00 - 20:00',
        'Thứ 7 - Chủ nhật: 8:00 - 17:00',
        'Khẩn cấp: 24/7'
      ]
    }
  ];

  const departments = [
    { name: 'Tổng Đài', phone: '0123.456.789' },
    { name: 'Đặt Lịch Hẹn', phone: '0123.456.790' },
    { name: 'Khẩn Cấp', phone: '0123.456.791' },
    { name: 'Tư Vấn Y Khoa', phone: '0123.456.792' },
    { name: 'Kế Toán', phone: '0123.456.793' },
    { name: 'Khiếu Nại', phone: '0123.456.794' }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Tin Nhắn Đã Được Gửi!</h2>
          <p className="text-gray-600 mb-6">
            Cảm ơn bạn đã liên hệ với chúng tôi. Chúng tôi sẽ phản hồi trong vòng 24h.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: '', email: '', phone: '', subject: '', message: ''
              });
            }}
            className="w-full gradient-bg text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Gửi Tin Nhắn Mới
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Liên Hệ Với Chúng Tôi</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy liên hệ để được tư vấn 
            và giải đáp mọi thắc mắc về dịch vụ y tế.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow hover-scale">
              <div className="mb-6 flex justify-center">{info.icon}</div>
              <h3 className="text-xl font-bold text-center mb-4">{info.title}</h3>
              <div className="space-y-2">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-center text-sm">{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-8 gradient-text">Gửi Tin Nhắn</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nhập họ và tên"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nhập email"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Số điện thoại</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nhập số điện thoại"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Chủ đề</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Chọn chủ đề</option>
                    <option value="appointment">Đặt lịch hẹn</option>
                    <option value="consultation">Tư vấn y khoa</option>
                    <option value="complaint">Khiếu nại</option>
                    <option value="suggestion">Góp ý</option>
                    <option value="other">Khác</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nội dung <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Nhập nội dung tin nhắn..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full gradient-bg text-white py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Gửi Tin Nhắn
              </button>
            </form>
          </div>

          {/* Additional Info */}
          <div className="space-y-8">
            {/* Departments */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Số Điện Thoại Các Bộ Phận</h3>
              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="font-medium">{dept.name}</span>
                    <a href={`tel:${dept.phone}`} className="text-blue-600 hover:text-blue-800 font-semibold">
                      {dept.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency */}
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-red-600">Trường Hợp Khẩn Cấp</h3>
              <p className="text-red-700 mb-4">
                Nếu bạn gặp tình huống y tế khẩn cấp, vui lòng gọi ngay:
              </p>
              <div className="text-center">
                <a
                  href="tel:0987654321"
                  className="inline-block bg-red-600 text-white px-8 py-4 rounded-full font-bold text-xl hover:bg-red-700 transition-colors"
                >
                  📞 0987.654.321
                </a>
              </div>
              <p className="text-sm text-red-600 mt-4 text-center">
                Hoặc đến trực tiếp phòng cấp cứu 24/7
              </p>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Câu Hỏi Thường Gặp</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Làm thế nào để đặt lịch hẹn?</h4>
                  <p className="text-gray-600 text-sm">
                    Bạn có thể đặt lịch qua website, gọi điện hoặc đến trực tiếp phòng khám.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Có cần thanh toán trước không?</h4>
                  <p className="text-gray-600 text-sm">
                    Không cần thanh toán trước. Bạn chỉ thanh toán sau khi khám xong.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Có thể hủy lịch hẹn không?</h4>
                  <p className="text-gray-600 text-sm">
                    Có thể hủy hoặc đổi lịch trước 24h qua điện thoại hoặc website.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Vị Trí Phòng Khám</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Hướng Dẫn Đi Lại</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-600">🚗 Bằng ô tô:</h4>
                    <p className="text-gray-600">Có bãi đỗ xe miễn phí cho bệnh nhân</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">🚌 Bằng xe buýt:</h4>
                    <p className="text-gray-600">Tuyến 01, 08, 19 dừng ngay trước cửa</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">🚇 Bằng metro:</h4>
                    <p className="text-gray-600">Ga Metro ABC cách 200m</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">🏍️ Bằng xe máy:</h4>
                    <p className="text-gray-600">Chỗ để xe máy rộng rãi, an toàn</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>Bản đồ sẽ được hiển thị tại đây</p>
                  <p className="text-sm">123 Đường ABC, Quận 1, TP.HCM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
