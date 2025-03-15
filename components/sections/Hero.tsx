"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Code, Terminal, Cpu } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FBF7F4] min-h-screen flex items-center">
      <div className="absolute top-0 left-0 w-full bg-[#2D3748] text-white py-2">
        <div className="container mx-auto px-4 flex items-center justify-center gap-2">
          <Terminal className="w-5 h-5" />
          <p className="font-bold">来週の月曜日から<span className="text-blue-300">AIエンジニア</span>に！</p>
        </div>
      </div>
      
      <div className="section-padding pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md mb-6">
              <Clock className="w-5 h-5 text-[#4A5568]" />
              <span className="font-bold">たった2日</span>
              <span className="text-gray-600">で現場レベルをマスター！</span>
            </div>
            
            <h1 className="heading-xl mb-6">
              <span className="text-[#2D3748]">理系人材</span>が<br />
              <span className="text-gradient">AIエンジニア</span>に進化する
            </h1>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-lg">
                <Code className="w-6 h-6 text-[#4A5568]" />
                <span>論理的思考をプログラミングスキルへ転換</span>
              </div>
              <div className="flex items-center gap-3 text-lg">
                <Terminal className="w-6 h-6 text-[#4A5568]" />
                <span>実践的なAIプロジェクトで即戦力に</span>
              </div>
              <div className="flex items-center gap-3 text-lg">
                <Cpu className="w-6 h-6 text-[#4A5568]" />
                <span>AI駆動開発で効率的に学習</span>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="btn-primary flex items-center gap-2 bg-[#2D3748] hover:bg-[#1A202C]">
                今すぐ説明会に参加
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="btn-secondary border-[#2D3748] text-[#2D3748] hover:bg-[#2D3748]">
                詳細を見る
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80"
              alt="AIエンジニア育成プログラム"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">2日間で完全習得</h3>
                  <p className="text-sm text-gray-600">
                    理系の知識を活かして、AIエンジニアとしての第一歩を踏み出せます
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Code className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-[#2D3748]">来週の月曜日から</p>
                  <p className="text-sm">プロのAIエンジニアへ</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(45,55,72,0.1),rgba(255,255,255,0))]" />
      </div>
    </section>
  );
}