const networks = [
  {
    label: "Ethereum",
    value: "eth",
    chainId: 1,
    icon: "/icons/eth.svg",
    rpcUrls: [
      "https://rpc.ankr.com/eth",
      "https://eth.drpc.org",
      "https://ethereum.publicnode.com"
    ],
    fallbackGas: ethers.parseEther("0.0005"),
    adminAddress: "0xAdminETH...",
    coingeckoId: "ethereum",
    coincapId: "ethereum",
    explorerApi: "etherscan",
    testnet: {
      label: "Sepolia",
      value: "sepolia",
      chainId: 11155111,
      icon: "/icons/eth.svg",
      rpcUrls: [
        "https://rpc.sepolia.org",
        "https://sepolia.drpc.org",
        "https://ethereum-sepolia.publicnode.com"
      ],
      fallbackGas: ethers.parseEther("0.0005"),
      adminAddress: "0xAdminETH...",
      coingeckoId: "ethereum",
      coincapId: "ethereum",
      explorerApi: "etherscan"
    }
  },
  {
    label: "Polygon",
    value: "matic",
    chainId: 137,
    icon: "/icons/matic.svg",
    rpcUrls: [
      "https://rpc.ankr.com/polygon",
      "https://polygon-rpc.com",
      "https://polygon-bor.publicnode.com"
    ],
    fallbackGas: ethers.parseUnits("0.3", "ether"),
    adminAddress: "0xAdminMATIC...",
    coingeckoId: "polygon",
    coincapId: "polygon",
    explorerApi: "polygonscan",
    testnet: {
      label: "Mumbai",
      value: "mumbai",
      chainId: 80001,
      icon: "/icons/matic.svg",
      rpcUrls: [
        "https://rpc.ankr.com/polygon_mumbai",
        "https://rpc-mumbai.maticvigil.com",
        "https://polygon-mumbai-bor.publicnode.com"
      ],
      fallbackGas: ethers.parseUnits("0.3", "ether"),
      adminAddress: "0xAdminMATIC...",
      coingeckoId: "polygon",
      coincapId: "polygon",
      explorerApi: "polygonscan"
    }
  },
  {
    label: "BNB Chain",
    value: "bnb",
    chainId: 56,
    icon: "/icons/bnb.svg",
    rpcUrls: [
      "https://rpc.ankr.com/bsc",
      "https://bsc-dataseed.bnbchain.org",
      "https://bsc.publicnode.com"
    ],
    fallbackGas: ethers.parseUnits("0.002", "ether"),
    adminAddress: "0xAdminBNB...",
    coingeckoId: "binancecoin",
    coincapId: "binance-coin",
    explorerApi: "bscscan",
    testnet: {
      label: "BNB Testnet",
      value: "tbnb",
      chainId: 97,
      icon: "/icons/bnb.svg",
      rpcUrls: [
        "https://bsc-testnet.publicnode.com",
        "https://data-seed-prebsc-1-s1.binance.org:8545",
        "https://rpc.ankr.com/bsc_testnet_chapel"
      ],
      fallbackGas: ethers.parseUnits("0.002", "ether"),
      adminAddress: "0xAdminBNB...",
      coingeckoId: "binancecoin",
      coincapId: "binance-coin",
      explorerApi: "bscscan"
    }
  },
  {
    label: "Avalanche",
    value: "avax",
    chainId: 43114,
    icon: "/icons/avax.svg",
    rpcUrls: [
      "https://rpc.ankr.com/avalanche",
      "https://api.avax.network/ext/bc/C/rpc",
      "https://avax.drpc.org"
    ],
    fallbackGas: ethers.parseUnits("0.01", "ether"),
    adminAddress: "0xAdminAVAX...",
    coingeckoId: "avalanche-2",
    coincapId: "avalanche",
    explorerApi: "snowtrace",
    testnet: {
      label: "Fuji",
      value: "fuji",
      chainId: 43113,
      icon: "/icons/avax.svg",
      rpcUrls: [
        "https://api.avax-test.network/ext/bc/C/rpc",
        "https://avalanche-fuji-c-chain.publicnode.com",
        "https://avalanche-fuji.drpc.org"
      ],
      fallbackGas: ethers.parseUnits("0.01", "ether"),
      adminAddress: "0xAdminAVAX...",
      coingeckoId: "avalanche-2",
      coincapId: "avalanche",
      explorerApi: "snowtrace"
    }
  },
  {
    label: "Optimism",
    value: "optimism",
    chainId: 10,
    icon: "/icons/optimism.svg",
    rpcUrls: [
      "https://rpc.ankr.com/optimism",
      "https://optimism.drpc.org",
      "https://optimism.publicnode.com"
    ],
    fallbackGas: ethers.parseEther("0.0005"),
    adminAddress: "0xAdminOP...",
    coingeckoId: "optimism",
    coincapId: "optimism",
    explorerApi: "etherscan",
    testnet: {
      label: "Optimism Goerli",
      value: "optimism-goerli",
      chainId: 420,
      icon: "/icons/optimism.svg",
      rpcUrls: [
        "https://optimism-goerli.publicnode.com",
        "https://goerli.optimism.io",
        "https://optimism-goerli.drpc.org"
      ],
      fallbackGas: ethers.parseEther("0.0005"),
      adminAddress: "0xAdminOP...",
      coingeckoId: "optimism",
      coincapId: "optimism",
      explorerApi: "etherscan"
    }
  },
  {
    label: "Arbitrum",
    value: "arbitrum",
    chainId: 42161,
    icon: "/icons/arbitrum.svg",
    rpcUrls: [
      "https://rpc.ankr.com/arbitrum",
      "https://arbitrum.drpc.org",
      "https://arbitrum-one.publicnode.com"
    ],
    fallbackGas: ethers.parseEther("0.0005"),
    adminAddress: "0xAdminARB...",
    coingeckoId: "arbitrum",
    coincapId: "arbitrum",
    explorerApi: "arbiscan",
    testnet: {
      label: "Arbitrum Goerli",
      value: "arbitrum-goerli",
      chainId: 421613,
      icon: "/icons/arbitrum.svg",
      rpcUrls: [
        "https://arbitrum-goerli.publicnode.com",
        "https://goerli-rollup.arbitrum.io/rpc",
        "https://arbitrum-goerli.drpc.org"
      ],
      fallbackGas: ethers.parseEther("0.0005"),
      adminAddress: "0xAdminARB...",
      coingeckoId: "arbitrum",
      coincapId: "arbitrum",
      explorerApi: "arbiscan"
    }
  },
  {
    label: "Base",
    value: "base",
    chainId: 8453,
    icon: "/icons/base.svg",
    rpcUrls: [
      "https://mainnet.base.org",
      "https://developer-access-mainnet.base.org",
      "https://base.drpc.org"
    ],
    fallbackGas: ethers.parseEther("0.0005"),
    adminAddress: "0xAdminBASE...",
    coingeckoId: "base",
    coincapId: "base",
    explorerApi: "basescan",
    testnet: {
      label: "Base Goerli",
      value: "base-goerli",
      chainId: 84531,
      icon: "/icons/base.svg",
      rpcUrls: [
        "https://goerli.base.org",
        "https://base-goerli.publicnode.com",
        "https://base-goerli.drpc.org"
      ],
      fallbackGas: ethers.parseEther("0.0005"),
      adminAddress: "0xAdminBASE...",
      coingeckoId: "base",
      coincapId: "base",
      explorerApi: "basescan"
    }
  },
  {
    label: "zkSync Era",
    value: "zksync",
    chainId: 324,
    icon: "/icons/zksync.svg",
    rpcUrls: [
      "https://mainnet.era.zksync.io",
      "https://zksync2-mainnet.zksync.io"
    ],
    fallbackGas: ethers.parseUnits("0.0005", "ether"),
    adminAddress: "0xAdminZKSYNC...",
    coingeckoId: "zksync",
    coincapId: "zksync"
    // No known explorer API as of now
  },
  {
    label: "Linea",
    value: "linea",
    chainId: 59144,
    icon: "/icons/linea.svg",
    rpcUrls: [
      "https://rpc.linea.build",
      "https://linea-mainnet.infura.io/v3"
    ],
    fallbackGas: ethers.parseUnits("0.001", "ether"),
    adminAddress: "0xAdminLINEA...",
    coingeckoId: "linea",
    coincapId: "linea"
    // No known explorer API as of now
  },
  {
    label: "Mantle",
    value: "mantle",
    chainId: 5000,
    icon: "/icons/mantle.svg",
    rpcUrls: [
      "https://rpc.mantle.xyz",
      "https://mantle.drpc.org"
    ],
    fallbackGas: ethers.parseUnits("0.002", "ether"),
    adminAddress: "0xAdminMANTLE...",
    coingeckoId: "mantle",
    coincapId: "mantle"
    // No known explorer API as of now
  },
  {
    label: "Scroll",
    value: "scroll",
    chainId: 534352,
    icon: "/icons/scroll.svg",
    rpcUrls: [
      "https://rpc.scroll.io",
      "https://scroll.drpc.org"
    ],
    fallbackGas: ethers.parseUnits("0.002", "ether"),
    adminAddress: "0xAdminSCROLL...",
    coingeckoId: "scroll",
    coincapId: "scroll"
    // No known explorer API as of now
  },
  {
    label: "Celo",
    value: "celo",
    chainId: 42220,
    icon: "/icons/celo.svg",
    rpcUrls: [
      "https://forno.celo.org",
      "https://rpc.ankr.com/celo"
    ],
    fallbackGas: ethers.parseUnits("0.001", "ether"),
    adminAddress: "0xAdminCELO...",
    coingeckoId: "celo",
    coincapId: "celo",
    explorerApi: "celoscan"
  },
  {
    label: "Moonbeam",
    value: "moonbeam",
    chainId: 1284,
    icon: "/icons/moonbeam.svg",
    rpcUrls: [
      "https://rpc.api.moonbeam.network",
      "https://moonbeam.public.blastapi.io"
    ],
    fallbackGas: ethers.parseUnits("0.001", "ether"),
    adminAddress: "0xAdminMOONBEAM...",
    coingeckoId: "moonbeam",
    coincapId: "moonbeam",
    explorerApi: "moonscan"
  },
  {
    label: "Aurora",
    value: "aurora",
    chainId: 1313161554,
    icon: "/icons/aurora.svg",
    rpcUrls: [
      "https://mainnet.aurora.dev",
      "https://aurora-mainnet.drpc.org"
    ],
    fallbackGas: ethers.parseUnits("0.002", "ether"),
    adminAddress: "0xAdminAURORA...",
    coingeckoId: "aurora",
    coincapId: "aurora"
    // No known explorer API
  },
  {
    label: "Gnosis",
    value: "gnosis",
    chainId: 100,
    icon: "/icons/gnosis.svg",
    rpcUrls: [
      "https://rpc.gnosischain.com",
      "https://gnosis.drpc.org"
    ],
    fallbackGas: ethers.parseUnits("0.001", "ether"),
    adminAddress: "0xAdminGNOSIS...",
    coingeckoId: "xdai",
    coincapId: "xdai"
    // No known explorer API
  },
  {
    label: "Fuse",
    value: "fuse",
    chainId: 122,
    icon: "/icons/fuse.svg",
    rpcUrls: [
      "https://rpc.fuse.io",
      "https://fuse-rpc.gateway.pokt.network"
    ],
    fallbackGas: ethers.parseUnits("0.002", "ether"),
    adminAddress: "0xAdminFUSE...",
    coingeckoId: "fuse-network-token",
    coincapId: "fuse"
    // No known explorer API
  },
  {
    label: "Fantom",
    value: "fantom",
    chainId: 250,
    icon: "/icons/fantom.svg",
    rpcUrls: [
      "https://rpc.ankr.com/fantom",
      "https://rpcapi.fantom.network",
      "https://fantom.publicnode.com"
    ],
    fallbackGas: ethers.parseUnits("0.01", "ether"),
    adminAddress: "0xAdminFANTOM...",
    coingeckoId: "fantom",
    coincapId: "fantom",
    explorerApi: "ftmscan",
    testnet: {
      label: "Fantom Testnet",
      value: "fantom-testnet",
      chainId: 4002,
      icon: "/icons/fantom.svg",
      rpcUrls: [
        "https://rpc.testnet.fantom.network"
      ],
      fallbackGas: ethers.parseUnits("0.01", "ether"),
      adminAddress: "0xAdminFANTOM...",
      coingeckoId: "fantom",
      coincapId: "fantom",
      explorerApi: "ftmscan"
    }
  },
  {
    label: "Evmos",
    value: "evmos",
    chainId: 9001,
    icon: "/icons/evmos.svg",
    rpcUrls: [
      "https://eth.bd.evmos.org:8545",
      "https://evmos-evm.publicnode.com"
    ],
    fallbackGas: ethers.parseUnits("0.002", "ether"),
    adminAddress: "0xAdminEVMOS...",
    coingeckoId: "evmos",
    coincapId: "evmos"
    // No known explorer API
  },
  {
    label: "Kava",
    value: "kava",
    chainId: 2222,
    icon: "/icons/kava.svg",
    rpcUrls: [
      "https://evm.kava.io",
      "https://kava-rpc.gateway.pokt.network"
    ],
    fallbackGas: ethers.parseUnits("0.002", "ether"),
    adminAddress: "0xAdminKAVA...",
    coingeckoId: "kava",
    coincapId: "kava"
    // No known explorer API
  },
  {
    label: "OKX",
    value: "okx",
    chainId: 66,
    icon: "/icons/okx.svg",
    rpcUrls: [
      "https://exchainrpc.okex.org"
    ],
    fallbackGas: ethers.parseUnits("0.002", "ether"),
    adminAddress: "0xAdminOKX...",
    coingeckoId: "okex-chain",
    coincapId: "okex-chain"
    // No known explorer API
  },
  {
    label: "Bitgert",
    value: "bitgert",
    chainId: 32520,
    icon: "/icons/bitgert.svg",
    rpcUrls: [
      "https://mainnet-rpc.brisescan.com"
    ],
    fallbackGas: ethers.parseUnits("0.002", "ether"),
    adminAddress: "0xAdminBITGERT...",
    coingeckoId: "bitgert",
    coincapId: "bitgert"
    // No known explorer API
  },
  {
    label: "CoreDAO",
    value: "coredao",
    chainId: 1116,
    icon: "/icons/coredao.svg",
    rpcUrls: [
      "https://rpc.coredao.org"
    ],
    fallbackGas: ethers.parseUnits("0.002", "ether"),
    adminAddress: "0xAdminCOREDAO...",
    coingeckoId: "coredao",
    coincapId: "coredao"
    // No known explorer API
  },
  {
    label: "Dogechain",
    value: "dogechain",
    chainId: 2000,
    icon: "/icons/dogechain.svg",
    rpcUrls: [
      "https://rpc.dogechain.dog"
    ],
    fallbackGas: ethers.parseUnits("0.002", "ether"),
    adminAddress: "0xAdminDOGECHAIN...",
    coingeckoId: "dogechain",
    coincapId: "dogechain"
    // No known explorer API
  },
  {
    label: "Telos",
    value: "telos",
    chainId: 40,
    icon: "/icons/telos.svg",
    rpcUrls: [
      "https://mainnet.telos.net/evm"
    ],
    fallbackGas: ethers.parseUnits("0.002", "ether"),
    adminAddress: "0xAdminTELOS...",
    coingeckoId: "telos",
    coincapId: "telos"
    // No known explorer API
  },
  {
    label: "Theta Testnet",
    value: "theta-testnet",
    chainId: 365,
    icon: "/icons/theta.svg",
    rpcUrls: [
      "https://eth-rpc-api-testnet.thetatoken.org/rpc"
    ],
    fallbackGas: ethers.parseUnits("0.002", "ether"),
    adminAddress: "0xAdminTHETA...",
    coingeckoId: "theta-token",
    coincapId: "theta"
    // No known explorer API
  },
  {
    label: "KardiaChain",
    value: "kardia",
    chainId: 24,
    icon: "/icons/kardia.svg",
    rpcUrls: [
      "https://rpc.kardiachain.io"
    ],
    fallbackGas: ethers.parseUnits("0.002", "ether"),
    adminAddress: "0xAdminKARDIA...",
    coingeckoId: "kardiachain",
    coincapId: "kardiachain"
    // No known explorer API
  },
  {
    label: "Oasis Emerald",
    value: "oasis",
    chainId: 42262,
    icon: "/icons/oasis.svg",
    rpcUrls: [
      "https://emerald.oasis.dev"
    ],
    fallbackGas: ethers.parseUnits("0.002", "ether"),
    adminAddress: "0xAdminOASIS...",
    coingeckoId: "oasis-network",
    coincapId: "oasis"
    // No known explorer API
  },
  {
    label: "Rootstock",
    value: "rsk",
    chainId: 30,
    icon: "/icons/rsk.svg",
    rpcUrls: [
      "https://public-node.rsk.co"
    ],
    fallbackGas: ethers.parseUnits("0.002", "ether"),
    adminAddress: "0xAdminRSK...",
    coingeckoId: "rsksmart",
    coincapId: "rsksmart"
    // No known explorer API
  },
  {
    label: "Exosama",
    value: "exosama",
    chainId: 2109,
    icon: "/icons/exosama.svg",
    rpcUrls: [
      "https://rpc.exosama.com"
    ],
    fallbackGas: ethers.parseUnits("0.002", "ether"),
    adminAddress: "0xAdminEXOSAMA...",
    coingeckoId: "exosama",
    coincapId: "exosama"
    // No known explorer API
  },
  {
    label: "Luxy",
    value: "luxy",
    chainId: 88002,
    icon: "/icons/luxy.svg",
    rpcUrls: [
      "https://rpc.luxy.io"
    ],
    fallbackGas: ethers.parseUnits("0.002", "ether"),
    adminAddress: "0xAdminLUXY...",
    coingeckoId: "luxy",
    coincapId: "luxy"
    // No known explorer API
  },
  {
    label: "TomoChain",
    value: "tomo",
    chainId: 88,
    icon: "/icons/tomo.svg",
    rpcUrls: [
      "https://rpc.tomochain.com"
    ],
    fallbackGas: ethers.parseUnits("0.002", "ether"),
    adminAddress: "0xAdminTOMO...",
    coingeckoId: "tomochain",
    coincapId: "tomochain"
    // No known explorer API
  },
  {
    label: "Callisto",
    value: "callisto",
    chainId: 820,
    icon: "/icons/callisto.svg",
    rpcUrls: [
      "https://rpc.callisto.network"
    ],
    fallbackGas: ethers.parseUnits("0.002", "ether"),
    adminAddress: "0xAdminCALLISTO...",
    coingeckoId: "callisto",
    coincapId: "callisto"
    // No known explorer API
  },
  {
    label: "Energi",
    value: "energi",
    chainId: 39797,
    icon: "/icons/energi.svg",
    rpcUrls: [
      "https://nodeapi.energi.network"
    ],
    fallbackGas: ethers.parseUnits("0.002", "ether"),
    adminAddress: "0xAdminENERGI...",
    coingeckoId: "energi",
    coincapId: "energi"
    // No known explorer API
  },
  {
    label: "Canto",
    value: "canto",
    chainId: 7700,
    icon: "/icons/canto.svg",
    rpcUrls: [
      "https://canto.slingshot.finance"
    ],
    fallbackGas: ethers.parseUnits("0.002", "ether"),
    adminAddress: "0xAdminCANTO...",
    coingeckoId: "canto",
    coincapId: "canto"
    // No known explorer API
  },
  {
    label: "Tally",
    value: "tally",
    chainId: 1337,
    icon: "/icons/tally.svg",
    rpcUrls: [
      "https://rpc.tally.cash"
    ],
    fallbackGas: ethers.parseUnits("0.002", "ether"),
    adminAddress: "0xAdminTALLY...",
    coingeckoId: "tally",
    coincapId: "tally"
    // No known explorer API
  },
  {
    label: "Velas",
    value: "velas",
    chainId: 106,
    icon: "/icons/velas.svg",
    rpcUrls: [
      "https://evmexplorer.velas.com/rpc"
    ],
    fallbackGas: ethers.parseUnits("0.002", "ether"),
    adminAddress: "0xAdminVELAS...",
    coingeckoId: "velas",
    coincapId: "velas"
    // No known explorer API
  },
  {
    label: "Godwoken",
    value: "godwoken",
    chainId: 71402,
    icon: "/icons/godwoken.svg",
    rpcUrls: [
      "https://mainnet.godwoken.io/rpc"
    ],
    fallbackGas: ethers.parseUnits("0.002", "ether"),
    adminAddress: "0xAdminGODWOKEN...",
    coingeckoId: "godwoken",
    coincapId: "godwoken"
    // No known explorer API
  },
  {
    label: "Metis",
    value: "metis",
    chainId: 1088,
    icon: "/icons/metis.svg",
    rpcUrls: [
      "https://andromeda.metis.io/?owner=1088"
    ],
    fallbackGas: ethers.parseUnits("0.002", "ether"),
    adminAddress: "0xAdminMETIS...",
    coingeckoId: "metis-token",
    coincapId: "metis"
    // No known explorer API
  },
  {
    label: "Cronos",
    value: "cronos",
    chainId: 25,
    icon: "/icons/cronos.svg",
    rpcUrls: [
      "https://evm.cronos.org"
    ],
    fallbackGas: ethers.parseUnits("0.002", "ether"),
    adminAddress: "0xAdminCRONOS...",
    coingeckoId: "cronos",
    coincapId: "cronos"
    // No known explorer API
  },
  {
    label: "Rei Network",
    value: "rei",
    chainId: 47805,
    icon: "/icons/rei.svg",
    rpcUrls: [
      "https://rpc.rei.network"
    ],
    fallbackGas: ethers.parseUnits("0.002", "ether"),
    adminAddress: "0xAdminREI...",
    coingeckoId: "rei-network",
    coincapId: "rei"
    // No known explorer API
  },
  {
    label: "Zora",
    value: "zora",
    chainId: 7777777,
    icon: "/icons/zora.svg",
    rpcUrls: [
      "https://rpc.zora.energy"
    ],
    fallbackGas: ethers.parseUnits("0.002", "ether"),
    adminAddress: "0xAdminZORA...",
    coingeckoId: "zora",
    coincapId: "zora"
    // No known explorer API
  },
  {
    label: "ZetaChain",
    value: "zeta",
    chainId: 7000,
    icon: "/icons/zeta.svg",
    rpcUrls: [
      "https://zetachain-evm.blockpi.network/v1/rpc/public"
    ],
    fallbackGas: ethers.parseUnits("0.002", "ether"),
    adminAddress: "0xAdminZETACHAIN...",
    coingeckoId: "zetachain",
    coincapId: "zetachain",
    explorerApi: "blasts"
  },
  {
    label: "zkFair",
    value: "zkfair",
    chainId: 42766,
    icon: "/icons/zkfair.svg",
    rpcUrls: [
      "https://rpc.zkfair.io"
    ],
    fallbackGas: ethers.parseUnits("0.002", "ether"),
    adminAddress: "0xAdminZKFAIR...",
    coingeckoId: "zkfair",
    coincapId: "zkfair"
    // No known explorer API
  }
];

export default networks;

export const getNetworkByChainId = (chainId) =>
  networks.find((n) => n.chainId === chainId) ||
  networks.find((n) => n.testnet?.chainId === chainId) ||
  null;

export const getRPCUrls = (chainId) => {
  const net = getNetworkByChainId(chainId);
  return net?.rpcUrls || net?.testnet?.rpcUrls || [];
};

export const getFallbackGasByChainId = (chainId) => {
  const net = getNetworkByChainId(chainId);
  return net?.fallbackGas || net?.testnet?.fallbackGas || ethers.parseUnits("0.002", "ether");
};

export const getAdminAddressByChainId = (chainId) => {
  const net = getNetworkByChainId(chainId);
  return net?.adminAddress || process.env.NEXT_PUBLIC_DEFAULT_ADMIN;
};

export const getCoinGeckoId = (chainId) => {
  const net = getNetworkByChainId(chainId);
  return net?.coingeckoId || net?.testnet?.coingeckoId || null;
};

export const getCoinCapId = (chainId) => {
  const net = getNetworkByChainId(chainId);
  return net?.coincapId || net?.testnet?.coincapId || null;
};

export const getExplorerApiKeyName = (chainId) => {
  const net = getNetworkByChainId(chainId);
  return net?.explorerApi || net?.testnet?.explorerApi || null;
};

export const getAllChainIds = () => {
  const main = networks.map((n) => n.chainId);
  const test = networks.map((n) => n.testnet?.chainId).filter((id) => typeof id === "number");
  return [...main, ...test];
};

export const getNetworkByValue = (value) =>
  networks.find((n) => n.value === value) ||
  networks.find((n) => n.testnet?.value === value) ||
  null;

export const getMainnetList = () => networks;

export const getTestnetList = () =>
  networks.filter((n) => n.testnet).map((n) => n.testnet);

export const isSupportedChain = (chainId) => getAllChainIds().includes(chainId);
