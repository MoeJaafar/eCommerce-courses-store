import Web3 from "web3";

const NETWORK_ID: number = parseInt(
  process.env.NEXT_PUBLIC_TARGET_CHAIN_ID || "1",
);

export const loadContract = async (name: string, web3: Web3) => {
  const res = await fetch(`/contracts/${name}.json`);
  const Artifact = await res.json();
  let contract = null;

  try {
    contract = new web3.eth.Contract(
      Artifact.abi,
      Artifact.networks[NETWORK_ID].address,
    );
  } catch {
    console.log(`Contract ${name} cannot be loaded`);
  }

  return contract;
};
