import React from 'react';

const Info = () => {
  const infoItems = [
    {
      id: 1,
      title: 'LINE友だち募集中！',
      description: '最新情報やお得な情報をLINEでお届けします。友だち追加で特典あり！',
      bgColor: 'bg-green-500',
      textColor: 'text-white',
      buttonText: '友だち追加',
      buttonLink: '/line',
      icon: '💬',
    },
    {
      id: 2,
      title: 'わかりやすい相続の知識',
      description: '相続についてのよくある質問や基礎知識をわかりやすく解説しています。',
      bgColor: 'bg-[#B3E5FC]',
      textColor: 'text-gray-800',
      buttonText: '読んでみる',
      buttonLink: '/knowledge',
      icon: '📚',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2E7D32] mb-4">お役立ち情報</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            相続や不動産に関する役立つ情報をご紹介します
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {infoItems.map((item) => (
            <div
              key={item.id}
              className={`${item.bgColor} ${item.textColor} rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105`}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{item.icon}</span>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                <p className="mb-6">{item.description}</p>
                <a
                  href={item.buttonLink}
                  className="inline-block bg-white text-gray-800 px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors shadow-md"
                >
                  {item.buttonText} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Info;
