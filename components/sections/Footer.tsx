"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="section-padding">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">AI Talent Development</h3>
            <p className="text-gray-400">
              次世代のリーダーを育成する、
              革新的な人材育成プラットフォーム
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">サービス</h4>
            <ul className="space-y-2 text-gray-400">
              <li>AI活用スキル開発</li>
              <li>リーダーシップ育成</li>
              <li>カスタマイズ研修</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">会社情報</h4>
            <ul className="space-y-2 text-gray-400">
              <li>会社概要</li>
              <li>採用情報</li>
              <li>お問い合わせ</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">ソーシャルメディア</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#BC9A73] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#BC9A73] transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#BC9A73] transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2024 AI Talent Development. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}