import {AssetInfo} from "./assetInfo"
import {TokenAmount} from "./tokenAmount"

export class AssetAmount {
  constructor(public readonly asset: AssetInfo, public readonly amount: bigint) {}

  static fromToken(token: TokenAmount): AssetAmount {
    return new this(
      {
        id: token.tokenId,
        name: token.name,
        decimals: token.decimals
      },
      token.amount
    )
  }

  withAmount(amount: bigint): AssetAmount {
    return new AssetAmount(this.asset, amount)
  }
}