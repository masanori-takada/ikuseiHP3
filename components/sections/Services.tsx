"use client";

import { motion } from "framer-motion";
import { Brain, Users, Target, TrendingUp, DollarSign, Building } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "世界的なAIエンジニア不足に対応",
    description: "たった2日間で即戦力のAIエンジニアを育成。社内の優秀な理系人材を活用し、人材不足を解決します。",
    points: [
      "理系人材の論理的思考力を活用",
      "実践的なプロジェクトで即戦力化",
      "短期間での確実なスキル習得"
    ]
  },
  {
    icon: DollarSign,
    title: "超短期間＆格安の転職支援",
    description: "最短2日間、99,000円という破格の料金で、AIエンジニアとしての転職に必要なスキルを習得できます。",
    points: [
      "業界最安値の受講料",
      "転職に必要なスキルを網羅",
      "即戦力として評価される実践力"
    ]
  },
  {
    icon: Building,
    title: "カスタマイズ研修",
    description: "企業のニーズに合わせた独自のカリキュラムを設計。組織全体のAIリテラシー向上を実現します。",
    points: [
      "企業ごとの課題に対応",
      "段階的な学習プラン",
      "AIツールへの質問し放題で自立学習を継続"
    ]
  },
];

export default function Services() {
  return (
    <section className="bg-white">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">
            <span className="text-gradient">サービス</span>紹介
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            AIと人材育成の専門家が設計した、次世代のリーダー育成プログラム
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#FBF7F4] p-8 rounded-2xl"
            >
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                <service.icon className="w-8 h-8 text-[#BC9A73]" />
              </div>
              <h3 className="heading-md mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-[#BC9A73] rounded-full" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}