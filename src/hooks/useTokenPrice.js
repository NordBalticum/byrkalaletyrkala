"use client";

/**
 * useTokenPrice — MetaMask-Grade v2.1 (USD + EUR)
 * ===============================================
 * Returns USD and EUR price for both native and ERC20 tokens.
 * Uses CoinGecko API. Supports all EVM networks.
 */

import { useEffect, useState } from "react";
import axios from "axios";
import { useNetworkMeta } from "./useNetworkMeta";
import { getCoinGeckoId } from "@/data/networks";

export function useTokenPrice(tokenType = "native") {
  const { chainId, tokenAddress, isTestnet } = useNetworkMeta();
  const [priceUSD, setPriceUSD] = useState(null);
  const [priceEUR, setPriceEUR] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!chainId || isTestnet) return;

    const fetchPrice = async () => {
      setLoading(true);
      setError(null);

      try {
        let url = "";

        // Fetching price for native token
        if (tokenType === "native") {
          const id = getCoinGeckoId(chainId);
          if (!id) throw new Error("Missing CoinGecko ID for native token");
          url = `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd,eur`;
        }
        // Fetching price for ERC20 token
        else if (tokenAddress) {
          url = `https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=${tokenAddress}&vs_currencies=usd,eur`;
        } else {
          throw new Error("Missing token address");
        }

        const { data } = await axios.get(url);

        // Extract prices based on token type
        if (tokenType === "native") {
          const id = getCoinGeckoId(chainId);
          setPriceUSD(data?.[id]?.usd || null);
          setPriceEUR(data?.[id]?.eur || null);
        } else {
          const key = Object.keys(data)[0];
          setPriceUSD(data?.[key]?.usd || null);
          setPriceEUR(data?.[key]?.eur || null);
        }
      } catch (err) {
        console.warn("❌ useTokenPrice error:", err.message);
        setPriceUSD(null);
        setPriceEUR(null);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPrice();
  }, [chainId, tokenAddress, tokenType, isTestnet]);

  return {
    priceUSD,
    priceEUR,
    loading,
    error,
  };
}
