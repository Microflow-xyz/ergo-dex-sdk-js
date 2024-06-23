import {Address} from "@patternglobal/ergo-sdk"
import {NetworkContext} from "@patternglobal/ergo-sdk/build/main/entities/networkContext"

export type ActionContext = {
  readonly changeAddress: Address
  readonly minBoxValue: bigint
  readonly minerFee: bigint
  readonly uiFee: bigint
  readonly network: NetworkContext
}
