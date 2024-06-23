import {ErgoBoxCandidate, TransactionContext, TxRequest} from "@patternglobal/ergo-sdk"
import {PoolSetupParams} from "../models/poolSetupParams"

export interface PoolSetupAction {
  setup(
    params: PoolSetupParams,
    ctx: TransactionContext,
    uiRewardOut: ErgoBoxCandidate[]
  ): Promise<TxRequest[]>
}
