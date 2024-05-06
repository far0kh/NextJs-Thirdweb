/** Change these values to configure the application for your own use. **/

export const clientId = "d35e1e903543dd0503555c6aa835e127";

// Your smart contract address (available on the thirdweb dashboard)
// For existing collections: import your existing contracts on the dashboard: https://thirdweb.com/dashboard
export const contractConst = "0x9A039F4343D838138B436D048B02E448821d440b";

// The name of the chain your contract is deployed to.
// Refer to README.md on how to specify the chain name.
// export const chainConst = "mumbai";
import { sepolia } from 'thirdweb/chains';
export const defaultChain = sepolia;

// Configure the primary color for buttons and other UI elements
export const primaryColorConst = "blue";

// Choose between "light" and "dark" mode
export const themeConst = "dark";

// Gasless relayer configuration options
export const relayerUrlConst = ""; // OpenZeppelin relayer URL
export const biconomyApiKeyConst = ""; // Biconomy API key
export const biconomyApiIdConst = ""; // Biconomy API ID
