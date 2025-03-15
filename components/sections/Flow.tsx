"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "無料相談",
    description: "お客様のニーズをヒアリングし、最適なプランをご提案します。",
  },
  {
    title: "カスタマイズ",
    description: "企業に合わせた研修プログラムを設計します。",
  },
  {
    title: "導入・運用",
    description: "スムーズな導入とサポート体制で、確実な成果を実現します。",
  },
];

export default function Flow() {
  return (
    <section className="bg-[#FBF7F4]">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">
            導入の<span className="text-gradient">流れ</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            スムーズな導入をサポートいたします
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-white p-8 rounded-2xl">
                <div className="text-[#BC9A73] text-6xl font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="heading-md mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-[#BC9A73]" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}