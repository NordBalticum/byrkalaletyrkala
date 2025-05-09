"use client";

// 1️⃣ IMPORTAI
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaWallet, FaArrowUp, FaArrowDown, FaClock, FaUserCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useMinimalReady } from "@/hooks/useMinimalReady"; // ✅ readiness hook

import styles from "@/components/bottomnav.module.css";

// 2️⃣ NAVIGACIJOS ELEMENTAI
const navItems = [
  { path: "/dashboard", icon: <FaWallet />, label: "Wallet" },
  { path: "/send", icon: <FaArrowUp />, label: "Send" },
  { path: "/receive", icon: <FaArrowDown />, label: "Receive" },
  { path: "/history", icon: <FaClock />, label: "History" },
  { path: "/settings", icon: <FaUserCircle />, label: "Settings" },
];

// 3️⃣ PAGRINDINIS KOMPONENTAS
export default function BottomNavigation() {
  const pathname = usePathname();
  const { ready, loading } = useMinimalReady(); // ✅ readiness hook

  const [isMobile, setIsMobile] = useState(false);

  // ✅ Mobile detekcija
  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkMobile = () => setIsMobile(window.innerWidth <= 768);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);

  const onLoginPage = pathname === "/" || pathname === "" || pathname === null;

  // ✅ Jei login puslapyje arba ne mobile arba kraunasi arba nepasiruošęs → nerodom
  if (onLoginPage || !isMobile || loading || !ready) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        className={styles.bottomWrapper}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
      >
        <nav className={styles.navbar} role="navigation" aria-label="Bottom Navigation">
          {navItems.map(({ path, icon, label }) => {
            const isActive = pathname === path;

            return (
              <Link
                key={path}
                href={path}
                className={`${styles.navItem} ${isActive ? styles.active : ""}`}
                aria-current={isActive ? "page" : undefined}
                aria-label={label}
              >
                <motion.div
                  className={styles.icon}
                  whileTap={{ scale: 0.92 }}
                  whileHover={{ scale: 1.06 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {icon}
                </motion.div>
                <span className={styles.label}>{label}</span>
              </Link>
            );
          })}
        </nav>
      </motion.div>
    </AnimatePresence>
  );
}
