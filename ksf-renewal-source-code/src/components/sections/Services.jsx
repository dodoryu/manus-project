import React from 'react';

const Services = () => {
  const serviceItems = [
    {
      id: 1,
      title: '不動産売買',
      description: '不動産の購入や売却をサポートいたします。お客様のニーズに合わせた最適な物件選びから、契約までトータルにサポートします。',
      icon: '🏠',
    },
    {
      id: 2,
      title: '相続相談',
      description: '相続に関する様々なお悩みを解決します。専門知識を持ったスタッフが、相続税や遺産分割などの複雑な問題をサポートします。',
      icon: '📝',
    },
    {
      id: 3,
      title: '不動産管理',
      description: '所有不動産の管理から賃貸管理まで、オーナー様の大切な資産を適切に管理いたします。',
      icon: '🔑',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2E7D32] mb-4">サービス内容</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            株式会社さいはらでは、不動産売買から相続相談まで、お客様の様々なニーズにお応えするサービスを提供しています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#2E7D32] mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <a
                href={`/services/${service.id}`}
                className="inline-block mt-4 text-[#4CAF50] font-medium hover:text-[#2E7D32] transition-colors"
              >
                詳しく見る →
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/services"
            className="inline-block bg-[#4CAF50] text-white px-6 py-3 rounded-md font-medium hover:bg-[#2E7D32] transition-colors shadow-md"
          >
            サービス一覧を見る
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
