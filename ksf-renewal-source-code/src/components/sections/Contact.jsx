import React from 'react';

const Contact = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2E7D32] mb-4">お問い合わせ</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            相続や不動産に関するご質問・ご相談は、お気軽にお問い合わせください。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold text-[#2E7D32] mb-6">お問い合わせフォーム</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  電話番号
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 mb-2">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                  required
                >
                  <option value="">選択してください</option>
                  <option value="inheritance">相続について</option>
                  <option value="real-estate">不動産について</option>
                  <option value="other">その他</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  メッセージ <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#4CAF50] text-white py-3 rounded-md font-medium hover:bg-[#2E7D32] transition-colors shadow-md"
              >
                送信する
              </button>
            </form>
          </div>
          
          {/* Map and Contact Info */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-[#2E7D32] mb-6">アクセス</h3>
              
              {/* Map Placeholder */}
              <div className="w-full h-64 bg-gray-200 mb-6 rounded-md flex items-center justify-center">
                <p className="text-gray-500">Google Mapが表示されます</p>
              </div>
              
              <div className="space-y-4">
                <p className="flex items-start">
                  <span className="text-[#4CAF50] mr-3">📍</span>
                  <span>〒890-0053 鹿児島県鹿児島市中央町</span>
                </p>
                <p className="flex items-start">
                  <span className="text-[#4CAF50] mr-3">📞</span>
                  <span>TEL: 099-123-4567</span>
                </p>
                <p className="flex items-start">
                  <span className="text-[#4CAF50] mr-3">📠</span>
                  <span>FAX: 099-123-4568</span>
                </p>
                <p className="flex items-start">
                  <span className="text-[#4CAF50] mr-3">🕒</span>
                  <span>営業時間: 9:00〜18:00（定休日: 土日祝）</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
