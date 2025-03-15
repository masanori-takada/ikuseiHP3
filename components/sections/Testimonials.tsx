"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80",
    company: "株式会社テクノロジー",
    text: "AIを活用した人材育成で、社員のスキルアップを効率的に実現できました。",
  },
  {
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80",
    company: "グローバル商事",
    text: "カスタマイズされた研修プログラムで、具体的な成果を出すことができました。",
  },
  {
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    company: "フューチャーコンサルティング",
    text: "次世代リーダーの育成に大きな効果を感じています。",
  },
];

export default function Testimonials() {
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
            導入企業の<span className="text-gradient">声</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            多くの企業様にご利用いただいています
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#FBF7F4] p-8 rounded-2xl"
            >
              <img
                src={testimonial.logo}
                alt={testimonial.company}
                className="w-16 h-16 object-cover rounded-lg mb-6"
              />
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <p className="font-semibold">{testimonial.company}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}