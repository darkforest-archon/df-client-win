import { Leaderboard } from '@darkforest_eth/types';
import {getEthConnection, loadCoreContract} from "./Blockchain";
import { CORE_CONTRACT_ADDRESS } from "@darkforest_eth/contracts";
import {EthAddress} from "@darkforest_eth/types/dist/identifier";

const DAO_A_CONTRACT_ADDRESS = "0xEcC8572e9ffCA02Aba6f89D127541b0984a6B511"
const DAO_B_CONTRACT_ADDRESS = "0x27E0053f853dB33588D18030e79aCECd52C8bfC4"

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
      console.log(players);
      return {entries: players.map((p) => {return {
        score: Number(p.score),
        ethAddress: p.player as EthAddress,
        twitter: p.player.toLowerCase() === DAO_A_CONTRACT_ADDRESS.toLowerCase() ? "Red Team" : "Blue Team"
      }})};
    })
      .catch((e) => {
        alert('error connecting to blockchain');
        throw e;
      });
}
