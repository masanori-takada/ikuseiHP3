"use client";

import { motion } from "framer-motion";
import { CheckCircle, Sparkles, Bot, Code, Terminal } from "lucide-react";

const features = [
  {
    title: "CursorによるAI駆動開発支援",
    description: "最新のAIツールCursorを活用し、コーディングのサポートからデバッグまで、実践的な開発スキルを効率的に習得できます。",
    content: {
      title: "AI駆動開発の実践",
      task: "Cursorを使用して効率的なコーディングとデバッグを学ぶ",
      details: [
        "AIによるコード補完と提案機能の活用",
        "自然言語でのコード生成と修正",
        "インテリジェントなデバッグ支援"
      ]
    }
  },
  {
    title: "4つの実践的なAIデータセット",
    description: "目的に応じて4つの異なるデータセットから選択可能。実務で活用できる実践的なAIスキルを習得できます。",
    content: {
      title: "選択可能なデータセット",
      options: [
        {
          name: "数値データ分析",
          description: "回帰分析と予測モデル",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
        },
        {
          name: "画像データ処理",
          description: "物体検出と画像分類",
          image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&q=80"
        },
        {
          name: "時系列データ分析",
          description: "予測モデルの構築",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
        },
        {
          name: "自然言語処理",
          description: "テキスト生成と要約",
          image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80"
        }
      ]
    }
  }
];

export default function Features() {
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
            <span className="text-gradient">カリキュラム</span>と特徴
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            最新のAI技術と実践的なデータセットで、即戦力となるスキルを習得
          </p>
        </motion.div>
        <div className="space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="relative">
                {index === 0 ? (
                  <div className="bg-[#4A90E2] rounded-2xl overflow-hidden">
                    <div className="bg-white m-1 rounded-xl">
                      <div className="flex items-center gap-2 bg-[#4A90E2] text-white p-4">
                        <Bot className="w-8 h-8" />
                        <h3 className="text-xl font-bold">Cursor AI開発支援</h3>
                      </div>
                      <div className="p-6">
                        <div className="bg-gray-50 rounded-xl p-4 mb-6">
                          <div className="flex items-start gap-3 mb-4">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                              <Terminal className="w-5 h-5 text-blue-600" />
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-600 text-sm mb-2">入力:</p>
                              <div className="bg-white p-3 rounded-lg border border-gray-200">
                                <p className="text-sm">画像認識のモデルを作成してください</p>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                              <Sparkles className="w-5 h-5 text-green-600" />
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-600 text-sm mb-2">AI応答:</p>
                              <div className="bg-white p-3 rounded-lg border border-gray-200">
                                <Code className="w-5 h-5 text-gray-400 mb-2" />
                                <div className="space-y-1 text-sm font-mono">
                                  <p className="text-blue-600">import tensorflow as tf</p>
                                  <p className="text-purple-600">from tensorflow.keras import layers</p>
                                  <p className="text-gray-800">model = tf.keras.Sequential([</p>
                                  <p className="text-gray-800 pl-4">layers.Conv2D(32, 3, activation='relu'),</p>
                                  <p className="text-gray-800 pl-4"># ...</p>
                                  <p className="text-gray-800">])</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          {feature.content.details.map((detail, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-[#4A90E2] flex-shrink-0 mt-1" />
                              <p>{detail}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-2xl shadow-xl p-6">
                    <h3 className="text-2xl font-bold mb-6">選択可能なデータセット</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {feature.content.options.map((option, i) => (
                        <div key={i} className="bg-[#F8F9FA] rounded-lg p-4">
                          <img
                            src={option.image}
                            alt={option.name}
                            className="w-full h-32 object-cover rounded-lg mb-3"
                          />
                          <h4 className="font-bold mb-1">{option.name}</h4>
                          <p className="text-sm text-gray-600">{option.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div>
                <h3 className="heading-md mb-6">{feature.title}</h3>
                <p className="text-gray-600 text-lg">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}