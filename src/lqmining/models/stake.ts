import {AssetAmount} from "@patternglobal/ergo-sdk"
import {PoolId} from "../types"

export type Stake = {
  readonly poolId: PoolId
  readonly lockedLq: AssetAmount
  readonly bundleKeyAsset: AssetAmount
}
