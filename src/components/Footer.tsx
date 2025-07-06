
import React from 'react';
import { Calendar, MapPin, Phone, Mail, Clock, Facebook, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo và thông tin */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center">
                <Calendar className="text-white w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">MedCare</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Hệ thống đặt lịch khám bệnh trực tuyến hiện đại, mang đến sự tiện lợi và chất lượng dịch vụ tốt nhất cho bệnh nhân.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-blue-400 hover:text-blue-300 cursor-pointer" />
              <Youtube className="w-5 h-5 text-red-400 hover:text-red-300 cursor-pointer" />
              <Instagram className="w-5 h-5 text-pink-400 hover:text-pink-300 cursor-pointer" />
            </div>
          </div>

          {/* Liên kết nhanh */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Liên Kết Nhanh</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Trang Chủ</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">Giới Thiệu</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-white transition-colors">Dịch Vụ</a></li>
              <li><a href="/appointment" className="text-gray-300 hover:text-white transition-colors">Đặt Lịch</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Liên Hệ</a></li>
            </ul>
          </div>

          {/* Dịch vụ */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Chuyên Khoa</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Nội Khoa</span></li>
              <li><span className="text-gray-300">Ngoại Khoa</span></li>
              <li><span className="text-gray-300">Sản Phụ Khoa</span></li>
              <li><span className="text-gray-300">Nhi Khoa</span></li>
              <li><span className="text-gray-300">Tim Mạch</span></li>
            </ul>
          </div>

          {/* Thông tin liên hệ */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Thông Tin Liên Hệ</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <span className="text-gray-300">123 Đường ABC, Quận XYZ, TP.HCM</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">0123.456.789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">info@medcare.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-400 mt-1" />
                <div className="text-gray-300">
                  <p>T2-T6: 7:00 - 20:00</p>
                  <p>T7-CN: 8:00 - 17:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 MedCare. Tất cả quyền được bảo lưu. Thiết kế bởi Nhóm Đồ Án Tốt Nghiệp.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
