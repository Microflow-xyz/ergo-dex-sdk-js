import {AssetAmount} from "@patternglobal/ergo-sdk"
import {PoolId} from "../types"

export type AmmPoolInfo = {
  id: PoolId
  lp: AssetAmount
  reservesX: AssetAmount
  reservesY: AssetAmount
}
