import {Address, ErgoBox, TxId} from "@patternglobal/ergo-sdk"

export type RefundParams = {
  txId: TxId // txId the operation request to refund was submitted in
  recipientAddress: Address
  utxos?: ErgoBox[]
}
