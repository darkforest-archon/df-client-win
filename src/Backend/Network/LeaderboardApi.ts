import { Leaderboard } from '@darkforest_eth/types';
import { getEthConnection, loadCoreContract } from "./Blockchain";
import { CORE_CONTRACT_ADDRESS } from "@darkforest_eth/contracts";
import { EthAddress } from "@darkforest_eth/types/dist/identifier";
import { DAO_A_CONTRACT_ADDRESS, DAO_B_CONTRACT_ADDRESS } from "../Utils/constants";
import { EMPTY_ADDRESS } from "@darkforest_eth/constants";

export async function loadLeaderboard(): Promise<Leaderboard> {
  if (!process.env.DF_WEBSERVER_URL) {
    return { entries: [] };
  }

  const address = `${process.env.DF_WEBSERVER_URL}/leaderboard`;
  const res = await fetch(address, {
    method: 'GET',
  });

  const rep = await res.json();

  if (rep.error) {
    throw new Error(rep.error);
  }

  return rep;
}
