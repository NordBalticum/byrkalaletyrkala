// src/app/history.js
"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import debounce from "lodash.debounce";

import { useAuth } from "@/contexts/AuthContext";
import { useMinimalReady } from "@/hooks/useMinimalReady";
import { fetchNetworkTransactions } from "@/utils/networkApi";

import MiniLoadingSpinner from "@/components/MiniLoadingSpinner";
import styles from "@/styles/history.module.css";
import background from "@/styles/background.module.css";

const NETWORK_OPTIONS = [
  { label: "BNB Mainnet", value: "bnb", icon: "/icons/bnb.svg" },
  { label: "BNB Testnet", value: "tbnb", icon: "/icons/bnb.svg" },
  { label: "Ethereum Mainnet", value: "eth", icon: "/icons/eth.svg" },
  { label: "Polygon Mainnet", value: "polygon", icon: "/icons/matic.svg" },
  { label: "Avalanche Mainnet", value: "avax", icon: "/icons/avax.svg" },
];

const METHOD_FILTERS = ["all", "sent", "received"];

export default function HistoryPage() {
  const router = useRouter();
  const { wallet } = useAuth();
  const { ready, loading } = useMinimalReady();

  const [network, setNetwork] = useState("bnb");
  const [transactions, setTransactions] = useState([]);
  const [txLoading, setTxLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(5);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const [filter, setFilter] = useState("all");

  const dropdownRef = useRef();
  const selectedNetwork = NETWORK_OPTIONS.find((net) => net.value === network);

  const fetchTransactions = useCallback(async (isSilent = false) => {
    if (!wallet?.wallet?.address) return;
    try {
      if (!isSilent) setTxLoading(true);
      const txs = await fetchNetworkTransactions(network, wallet.wallet.address);
      setTransactions(txs);
    } catch (err) {
      console.error("❌ Error fetching transactions:", err);
      setTransactions([]);
    } finally {
      if (!isSilent) setTxLoading(false);
    }
  }, [network, wallet]);

  useEffect(() => {
    if (ready && wallet?.wallet?.address) {
      fetchTransactions(true);
      const silent = debounce(() => fetchTransactions(true), 60000);
      const interval = setInterval(silent, 60000);
      return () => clearInterval(interval);
    }
  }, [ready, wallet, fetchTransactions]);

  useEffect(() => {
    setVisibleCount(5);
  }, [filter, network]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getExplorerLink = (net, txHash) => {
    switch (net) {
      case "bnb": return `https://bscscan.com/tx/${txHash}`;
      case "tbnb": return `https://testnet.bscscan.com/tx/${txHash}`;
      case "eth": return `https://etherscan.io/tx/${txHash}`;
      case "polygon": return `https://polygonscan.com/tx/${txHash}`;
      case "avax": return `https://snowtrace.io/tx/${txHash}`;
      default: return "#";
    }
  };

  const renderStatusBadge = (tx) => {
    const animationClass =
      tx.txreceipt_status === "1"
        ? styles.pulseSuccess
        : tx.txreceipt_status === "0"
        ? styles.pulseError
        : styles.pulsePending;

    if (tx.isError === "0" || tx.txreceipt_status === "1") {
      return <span className={`${styles.statusSuccess} ${animationClass}`}>✔️ Success</span>;
    }

    if (tx.txreceipt_status === "0") {
      return <span className={`${styles.statusFailed} ${animationClass}`}>❌ Failed</span>;
    }

    return <span className={`${styles.statusPending} ${animationClass}`}>⏳ Pending</span>;
  };

  // === ADMIN FILTER LOGIKA ===
  const adminWallet = (process.env.NEXT_PUBLIC_ADMIN_WALLET || "").toLowerCase();
  const userAddress = wallet?.wallet?.address?.toLowerCase();

  const cleanTxs = transactions.filter((tx) => {
    const from = tx.from?.toLowerCase();
    const to = tx.to?.toLowerCase();
    return !(from === adminWallet && to === userAddress);
  });

  const filteredTxs =
    filter === "all"
      ? cleanTxs
      : filter === "sent"
      ? cleanTxs.filter((tx) => tx.from?.toLowerCase() === userAddress)
      : cleanTxs.filter((tx) => tx.to?.toLowerCase() === userAddress);

  if (loading || !ready) return null;
  if (!wallet?.wallet?.address) {
    router.replace("/");
    return null;
  }

  return (
    <main className={`${styles.container} ${background.gradient}`} style={{ width: "100vw", height: "100vh", overflowY: "auto" }}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Transaction History</h1>

        <div className={styles.filters}>
          {METHOD_FILTERS.map((item) => (
            <button
              key={item}
              className={filter === item ? styles.activeFilter : styles.filterButton}
              onClick={() => setFilter(item)}
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>

        <div className={styles.networkSelector} ref={dropdownRef}>
          <button
            className={styles.dropdownButton}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <Image src={selectedNetwork.icon} alt="" width={20} height={20} />
            <span>{selectedNetwork.label}</span>
          </button>

          {dropdownOpen && (
            <div className={styles.dropdownList}>
              {NETWORK_OPTIONS.map((net) => (
                <div
                  key={net.value}
                  className={styles.dropdownItem}
                  onClick={() => {
                    setNetwork(net.value);
                    setDropdownOpen(false);
                  }}
                >
                  <Image src={net.icon} alt="" width={20} height={20} />
                  {net.label}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className={styles.txList}>
          <AnimatePresence>
            {filteredTxs.length === 0 ? (
              <div className={styles.noTxMessage}>No Transactions Made Yet</div>
            ) : (
              filteredTxs.slice(0, visibleCount).map((tx) => {
                const isExpanded = expanded === tx.hash;
                const direction = tx.from.toLowerCase() === userAddress ? "SENT" : "RECEIVED";

                return (
                  <motion.div
                    key={tx.hash}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className={styles.txItem}
                    onClick={() => setExpanded(isExpanded ? null : tx.hash)}
                  >
                    <div className={styles.txHeader}>
                      <div className={styles.txIconHash}>
                        <Image src={selectedNetwork.icon} alt="" width={20} height={20} />
                        <a
                          href={getExplorerLink(network, tx.hash)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.txHash}
                          style={{ textDecoration: "underline" }}
                        >
                          {tx.hash.substring(0, 10)}...{tx.hash.slice(-6)}
                        </a>
                      </div>
                      <div className={styles.txStatus}>{renderStatusBadge(tx)}</div>
                    </div>

                    <div className={styles.txDetails}>
                      <p><strong>From:</strong> {tx.from}</p>
                      <p><strong>To:</strong> {tx.to}</p>
                      <p><strong>Value:</strong> {(parseFloat(tx.value) / 1e18).toFixed(6)} {network.toUpperCase()}</p>
                      <p><strong>Time:</strong> {new Date(tx.timeStamp * 1000).toLocaleString()}</p>
                      <p><strong>Type:</strong> {direction}</p>
                    </div>

                    {isExpanded && (
                      <div className={styles.txMeta}>
                        <p><strong>Nonce:</strong> {tx.nonce}</p>
                        <p><strong>Gas:</strong> {tx.gas}</p>
                        <p><strong>Gas Price:</strong> {tx.gasPrice}</p>
                        <p><strong>Function:</strong> {tx.functionName || "N/A"}</p>
                      </div>
                    )}
                  </motion.div>
                );
              })
            )}
          </AnimatePresence>

          {filteredTxs.length > visibleCount && (
            <button
              className={styles.loadMoreBtn}
              onClick={() => setVisibleCount(visibleCount + 5)}
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
