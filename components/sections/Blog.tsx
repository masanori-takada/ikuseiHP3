"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "AI人材育成の最新トレンド",
    date: "2024.02.20",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
  },
  {
    title: "次世代リーダーに必要なスキルとは",
    date: "2024.02.15",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
  },
  {
    title: "効果的なオンライン研修の実施方法",
    date: "2024.02.10",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80",
  },
];

export default function Blog() {
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
            <span className="text-gradient">ブログ</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            人材育成に関する最新情報をお届けします
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              <h3 className="text-xl font-semibold group-hover:text-[#BC9A73] transition-colors">
                {post.title}
              </h3>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="btn-secondary inline-flex items-center gap-2">
            ブログをもっと見る
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}