import {AssetAmount, isNative, OverallAmount} from "@patternglobal/ergo-sdk"

export function makeTarget(assetsIn: AssetAmount[], minNErgForFee: bigint): OverallAmount {
  const nativeAsset = assetsIn.filter(i => isNative(i.asset))[0]
  const isNativePool = !!nativeAsset

  const totalNErgs = isNativePool ? nativeAsset.amount + minNErgForFee : minNErgForFee

  const assets = assetsIn.filter(i => !isNative(i.asset)).map(am => am.toToken())

  return {
    nErgs: totalNErgs,
    assets
  }
}
