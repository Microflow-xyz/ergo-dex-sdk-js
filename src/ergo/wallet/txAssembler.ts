import {TxRequest} from "./entities/txRequest"
import {UnsignedErgoTx} from "../entities/unsignedErgoTx"
import {NetworkContext} from "../entities/networkContext"
import {EmptyRegisters} from "../entities/registers"
import {MinerAddressMainnet, MinerAddressTestnet} from "../constants"
import {ergoTreeFromAddress} from "../entities/ergoTree"

export interface TxAssembler {
  assemble(req: TxRequest, ctx: NetworkContext): UnsignedErgoTx
}

export class DefaultTxAssembler implements TxAssembler {
  constructor(public readonly mainnet: boolean) {}

  assemble(req: TxRequest, ctx: NetworkContext): UnsignedErgoTx {
    let change = req.inputs.change
    let changeBox = change
      ? [
          {
            value: change.value,
            ergoTree: ergoTreeFromAddress(req.changeAddress),
            creationHeight: ctx.height,
            assets: change.assets,
            additionalRegisters: EmptyRegisters
          }
        ]
      : []
    let feeBox = req.feeNErgs
      ? [
          {
            value: req.feeNErgs,
            ergoTree: ergoTreeFromAddress(this.mainnet ? MinerAddressMainnet : MinerAddressTestnet),
            creationHeight: ctx.height,
            assets: [],
            additionalRegisters: EmptyRegisters
          }
        ]
      : []
    let outputs = [...req.outputs, ...changeBox, ...feeBox]
    return {
      inputs: req.inputs.unsignedInputs,
      dataInputs: req.dataInputs,
      outputs: outputs
    }
  }
}