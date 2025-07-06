
import React from 'react';
import { Calendar, Clock, Users, Award, ArrowRight, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 'noi-khoa',
      name: 'Nội Khoa',
      icon: '🫀',
      description: 'Chẩn đoán và điều trị các bệnh lý nội khoa như tim mạch, tiêu hóa, hô hấp',
      features: [
        'Khám sức khỏe tổng quát',
        'Điều trị bệnh tim mạch',
        'Điều trị tiểu đường',
        'Bệnh lý tiêu hóa',
        'Bệnh hô hấp'
      ],
      doctors: ['BS. Nguyễn Văn An', 'BS. Trần Thị Bình'],
      price: '200.000 - 500.000 VNĐ'
    },
    {
      id: 'ngoai-khoa',
      name: 'Ngoại Khoa',
      icon: '🏥',
      description: 'Phẫu thuật và điều trị các bệnh lý ngoại khoa',
      features: [
        'Phẫu thuật tổng hợp',
        'Phẫu thuật nội soi',
        'Điều trị chấn thương',
        'Phẫu thuật thẩm mỹ',
        'Phẫu thuật cấp cứu'
      ],
      doctors: ['BS. Lê Văn Cường', 'BS. Phạm Thị Dung'],
      price: '300.000 - 1.000.000 VNĐ'
    },
    {
      id: 'san-phu-khoa',
      name: 'Sản Phụ Khoa',
      icon: '👶',
      description: 'Chăm sóc sức khỏe phụ nữ trong thai kỳ và các bệnh phụ khoa',
      features: [
        'Khám thai định kỳ',
        'Siêu âm thai nhi',
        'Điều trị vô sinh',
        'Phẫu thuật sản khoa',
        'Tư vấn kế hoạch hóa gia đình'
      ],
      doctors: ['BS. Hoàng Thị Em', 'BS. Vũ Văn Phúc'],
      price: '250.000 - 800.000 VNĐ'
    },
    {
      id: 'nhi-khoa',
      name: 'Nhi Khoa',
      icon: '🧸',
      description: 'Chuyên khoa dành cho trẻ em từ sơ sinh đến 16 tuổi',
      features: [
        'Khám sức khỏe trẻ em',
        'Tiêm chủng đầy đủ',
        'Điều trị bệnh nhiễm trùng',
        'Tư vấn dinh dưỡng',
        'Theo dõi phát triển'
      ],
      doctors: ['BS. Đỗ Thị Giang', 'BS. Bùi Văn Hải'],
      price: '150.000 - 400.000 VNĐ'
    },
    {
      id: 'tim-mach',
      name: 'Tim Mạch',
      icon: '❤️',
      description: 'Chuyên sâu về các bệnh lý tim mạch và huyết áp',
      features: [
        'Siêu âm tim',
        'Điện tâm đồ',
        'Điều trị tăng huyết áp',
        'Bệnh mạch vành',
        'Rối loạn nhịp tim'
      ],
      doctors: ['BS. Ngô Văn Inh', 'BS. Tôn Thị Kim'],
      price: '300.000 - 700.000 VNĐ'
    },
    {
      id: 'da-lieu',
      name: 'Da Liễu',
      icon: '✨',
      description: 'Điều trị các bệnh về da và thẩm mỹ da',
      features: [
        'Điều trị mụn trứng cá',
        'Điều trị bệnh da',
        'Laser điều trị',
        'Thẩm mỹ da',
        'Tư vấn chăm sóc da'
      ],
      doctors: ['BS. Cao Thị Lan', 'BS. Đinh Văn Minh'],
      price: '200.000 - 600.000 VNĐ'
    }
  ];

  const additionalServices = [
    {
      name: 'Khám Sức Khỏe Tổng Quát',
      description: 'Gói khám sức khỏe định kỳ đầy đủ',
      price: '800.000 - 2.000.000 VNĐ'
    },
    {
      name: 'Xét Nghiệm Y Khoa',
      description: 'Đầy đủ các loại xét nghiệm cơ bản và chuyên sâu',
      price: '100.000 - 500.000 VNĐ'
    },
    {
      name: 'Chẩn Đoán Hình Ảnh',
      description: 'X-quang, CT, MRI, siêu âm',
      price: '200.000 - 1.500.000 VNĐ'
    },
    {
      name: 'Vật Lý Trị Liệu',
      description: 'Phục hồi chức năng và điều trị đau',
      price: '150.000 - 300.000 VNĐ'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Dịch Vụ Y Tế</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chúng tôi cung cấp đầy đủ các dịch vụ y tế với đội ngũ bác sĩ chuyên khoa giàu kinh nghiệm
            và trang thiết bị y tế hiện đại nhất.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: <Users className="w-8 h-8" />, number: '50+', label: 'Bác Sĩ Chuyên Khoa' },
            { icon: <Award className="w-8 h-8" />, number: '15+', label: 'Năm Kinh Nghiệm' },
            { icon: <Calendar className="w-8 h-8" />, number: '10K+', label: 'Lượt Khám' },
            { icon: <Clock className="w-8 h-8" />, number: '24/7', label: 'Hỗ Trợ' }
          ].map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover-scale">
              <div className="text-blue-600 mb-3 flex justify-center">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Chuyên Khoa Chính</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow hover-scale">
                <div className="p-8">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Dịch vụ bao gồm:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Đội ngũ bác sĩ:</h4>
                    {service.doctors.map((doctor, index) => (
                      <p key={index} className="text-sm text-gray-600">{doctor}</p>
                    ))}
                  </div>

                  <div className="mb-6">
                    <p className="text-blue-600 font-semibold">Chi phí: {service.price}</p>
                  </div>

                  <button
                    onClick={() => navigate('/appointment')}
                    className="w-full gradient-bg text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center"
                  >
                    Đặt Lịch Khám
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Dịch Vụ Bổ Sung</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow hover-scale">
                <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-semibold">{service.price}</span>
                  <button
                    onClick={() => navigate('/appointment')}
                    className="text-blue-600 hover:text-blue-800 font-semibold flex items-center"
                  >
                    Đặt lịch
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Quy Trình Khám Bệnh</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Đặt Lịch', desc: 'Đặt lịch online hoặc gọi điện' },
              { step: '2', title: 'Xác Nhận', desc: 'Nhận xác nhận qua điện thoại' },
              { step: '3', title: 'Khám Bệnh', desc: 'Đến khám đúng giờ hẹn' },
              { step: '4', title: 'Theo Dõi', desc: 'Nhận kết quả và tư vấn' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 gradient-bg text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="gradient-bg text-white rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Sẵn Sàng Chăm Sóc Sức Khỏe?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Đặt lịch ngay hôm nay để được tư vấn và khám bệnh với đội ngũ y tế chuyên nghiệp
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/appointment')}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors hover-scale"
            >
              Đặt Lịch Ngay
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors hover-scale"
            >
              Liên Hệ Tư Vấn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
