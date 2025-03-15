"use client";

import { motion } from "framer-motion";
import { Check, Minus, X } from "lucide-react";

const comparisonData = {
  headers: ["当社サービス", "他社プログラミングスクール", "資格取得（E資格）"],
  features: [
    {
      name: "受講期間",
      values: ["2日", "3ヶ月～", "6ヶ月以上"],
      descriptions: ["短期集中で効率的に学習", "コースによって異なる", "試験対策に時間がかかる"]
    },
    {
      name: "受講料金",
      values: ["99,000円", "200,000円～", "330,000円"],
      descriptions: ["リーズナブルな料金設定", "長期のコースほど高額", "受験料・教材費含む"]
    },
    {
      name: "実践的な演習",
      values: [true, true, false],
      descriptions: ["実データを使用した実践的な課題", "基本的な演習あり", "理論中心の学習"]
    },
    {
      name: "AI実務スキル",
      values: [true, false, true],
      descriptions: ["実務で使える実践力を習得", "基礎的なプログラミングが中心", "理論的な知識を習得"]
    },
    {
      name: "サポート体制",
      values: [true, true, false],
      descriptions: ["AI駆動開発（Cursor）にその場で質問し放題", "質問対応あり", "独学での学習が中心"]
    }
  ]
};

const ValueCell = ({ value, description, isHighlight }: { value: boolean | string; description: string; isHighlight?: boolean }) => {
  if (typeof value === "boolean") {
    return (
      <div className="flex items-center gap-2">
        {value ? (
          <Check className="w-6 h-6 text-green-500" />
        ) : (
          <X className="w-6 h-6 text-red-500" />
        )}
        <span className="text-sm text-gray-600">{description}</span>
      </div>
    );
  }
  return (
    <div>
      <div className={`font-bold text-lg mb-1 ${isHighlight ? 'bg-yellow-100 px-2 py-1 rounded-lg inline-block text-[#BC9A73]' : ''}`}>
        {value}
      </div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  );
};

export default function Comparison() {
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
            <span className="text-gradient">サービス</span>比較
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            他のAI学習サービスと比較して、より効率的で実践的な学習を実現します
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="p-4 text-left"></th>
                {comparisonData.headers.map((header, index) => (
                  <th
                    key={index}
                    className={`p-4 ${
                      index === 0
                        ? "bg-[#BC9A73] text-white"
                        : "bg-gray-100"
                    } rounded-t-lg text-center min-w-[200px]`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonData.features.map((feature, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4 font-medium">{feature.name}</td>
                  {feature.values.map((value, i) => (
                    <td key={i} className="p-4">
                      <ValueCell 
                        value={value} 
                        description={feature.descriptions[i]} 
                        isHighlight={i === 0 && (value === "2日" || value === "99,000円")}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}