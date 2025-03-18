import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#2E7D32] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">株式会社さいはら</h3>
            <p className="mb-2">〒890-0053</p>
            <p className="mb-2">鹿児島県鹿児島市中央町</p>
            <p className="mb-2">TEL: 099-123-4567</p>
            <p className="mb-2">FAX: 099-123-4568</p>
            <p className="mb-2">営業時間: 9:00〜18:00</p>
            <p>定休日: 土日祝</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">リンク</h3>
            <ul className="space-y-2">
              <li>
                <a href="/company" className="hover:text-gray-300 transition-colors">
                  企業情報
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-gray-300 transition-colors">
                  事業内容
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-300 transition-colors">
                  お問合わせ
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-gray-300 transition-colors">
                  プライバシーポリシー
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-bold mb-4">お問い合わせ</h3>
            <p className="mb-4">
              相続や不動産に関するご質問やご相談は、お気軽にお問い合わせください。
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#FFCDD2] text-[#424242] px-6 py-2 rounded hover:bg-opacity-90 transition-colors font-medium"
            >
              お問い合わせフォーム
            </a>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-6 text-center">
          <p>© {new Date().getFullYear()} Saihara Corporation. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
