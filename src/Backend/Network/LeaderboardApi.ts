import { Leaderboard } from '@darkforest_eth/types';
import { getEthConnection, loadCoreContract } from "./Blockchain";
import { CORE_CONTRACT_ADDRESS } from "@darkforest_eth/contracts";
import { EthAddress } from "@darkforest_eth/types/dist/identifier";
import { DAO_A_CONTRACT_ADDRESS, DAO_B_CONTRACT_ADDRESS } from "../Utils/constants";
import { EMPTY_ADDRESS } from "@darkforest_eth/constants";


export async function loadLeaderboard(): Promise<Leaderboard> {
  return getEthConnection()
    .then((ethConnection) => {
        return ethConnection.loadContract(
          CORE_CONTRACT_ADDRESS,
          loadCoreContract
        )
      })
    .then((core) => {
        const a = core.players(DAO_A_CONTRACT_ADDRESS.toLowerCase());
        const b = core.players(DAO_B_CONTRACT_ADDRESS.toLowerCase());
        return Promise.all([a, b])
      })
    .then((players) => {
      return {
        entries: players
          .filter(p => p.player !== EMPTY_ADDRESS)
          .map((p) => {
              return {
                score: Number(p.score),
                ethAddress: p.player as EthAddress,
                twitter: p.player.toLowerCase() === DAO_A_CONTRACT_ADDRESS.toLowerCase() ? "Red Team" : "Blue Team"
              }
            }
          )
      };
    })
      .catch((e) => {
        alert('error connecting to blockchain');
        throw e;
      });
}
