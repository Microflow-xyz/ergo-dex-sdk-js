import {AssetAmount, BoxId, PublicKey} from "@patternglobal/ergo-sdk"

export type TokenLock = {
  readonly boxId: BoxId
  readonly lockedAsset: AssetAmount
  readonly deadline: number
  readonly redeemer: PublicKey
  readonly active: boolean
}
