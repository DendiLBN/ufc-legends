"use client";

import { FacebookIcon } from "@/app/common/icons/facebook";
import { InstagramIcon } from "@/app/common/icons/instagram";
import { YoutubeIcon } from "@/app/common/icons/youtube";
import { motion } from "framer-motion";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-white font-display tracking-wider">
                Follow us on:
              </span>
            </div>

            <div className="flex space-x-4">
              <Link href="#">
                <InstagramIcon />
              </Link>
              <Link href="#">
                <FacebookIcon />
              </Link>
              <Link href="#">
                <YoutubeIcon />
              </Link>
              <Link href="#">
                <InstagramIcon />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-display uppercase tracking-wider text-sm mb-4">
              UFC Series
            </h3>
            <motion.ul>
              {[
                "Champions",
                "Legends",
                "Rising Stars",
                "Knockouts",
                "Submissions",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  style={{ margin: "10px 0" }}
                >
                  <FooterLink
                    href={`/series/${item.toLowerCase().replace(" ", "-")}`}
                    text={item}
                  />
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <motion.ul>
              {[
                "Marketplace",
                "Packs",
                "Collections",
                "Trading",
                "Leaderboard",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  style={{ margin: "10px 0" }}
                >
                  <FooterLink href={`/${item.toLowerCase()}`} text={item} />
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <motion.ul>
              {[
                "Help Center",
                "Contact Us",
                "FAQ",
                "Terms of Service",
                "Privacy Policy",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  style={{ margin: "10px 0" }}
                >
                  <FooterLink
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    text={item}
                  />
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, text }: { href: string; text: string }) {
  return (
    <Link
      href={href}
      className="text-sm text-white-700 hover:text-red-700 transition-colors"
    >
      {text}
    </Link>
  );
}
