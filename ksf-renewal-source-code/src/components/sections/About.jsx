import React from 'react';

const About = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2E7D32] mb-4">株式会社さいはらが選ばれる理由</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            お客様の安心と満足のために大切にしていること
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 理由1: ハンワタシ */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-center mb-6">ハンワタシ</h3>
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 bg-[#FFCDD2] rounded-full flex items-center justify-center">
                  <span className="text-5xl">👋</span>
                </div>
              </div>
              <p className="text-gray-600 text-center mb-4">
                お困りごとがワンストップで解決！
              </p>
              <p className="text-gray-600">
                相続や不動産に関する様々な問題を、ワンストップで解決いたします。専門知識を持ったスタッフが連携し、お客様の負担を最小限に抑えながら、最適な解決策をご提案します。
              </p>
            </div>
          </div>

          {/* 理由2: 大切にしていること */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-center mb-6">大切にしていること</h3>
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 bg-[#B3E5FC] rounded-full flex items-center justify-center">
                  <span className="text-5xl">❤️</span>
                </div>
              </div>
              <p className="text-gray-600 text-center mb-4">
                お客様の安心と満足のために大切にしていること
              </p>
              <p className="text-gray-600">
                私たちは、お客様一人ひとりに寄り添い、真摯に向き合うことを大切にしています。相続や不動産に関する不安や悩みを丁寧にヒアリングし、お客様にとって最善の選択ができるようサポートいたします。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
