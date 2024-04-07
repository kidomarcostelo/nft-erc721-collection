import CollectionConfigInterface from "../lib/CollectionConfigInterface";
import * as Networks from "../lib/Networks";
import * as Marketplaces from "../lib/Marketplaces";
import whitelistAddresses from "./whitelist.json";

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: "ElevineNFT",
  tokenName: "Elevine", // mao ni makita sa website title
  tokenSymbol: "ELVN",
  hiddenMetadataUri:
    "ipfs://QmWPriJGQN3QrC3nLRShARrV2Jrq2st66wn3S8sZMP19mD/hidden.json",
  maxSupply: 10,
  whitelistSale: {
    price: 0.015,
    maxMintAmountPerTx: 5,
  },
  preSale: {
    price: 0.015,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.02,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0x0dbb917a1AA94eAe48F66c17F6117ec7B902F362",
  marketplaceIdentifier: "ELEVINE-NI-CHUY",
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
