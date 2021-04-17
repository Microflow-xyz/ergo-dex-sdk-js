import {Contract} from "ergo-lib-wasm-browser";
import {ArbPoolBootScriptTemplate} from "./arbPoolBoot";
import {ArbPoolScriptTemplate} from "./arbPool";
import {PoolId} from "../types";
import {PublicKey} from "../../wallet/types";
import {GenericDepositTemplate} from "./genericDeposit";
import {GenericRedeemTemplate} from "./genericRedeem";

export class ArbPoolContracts {

    static arbPoolBootScript(emissionLP: bigint): Contract {
        let script = ArbPoolBootScriptTemplate.replace("$emissionLP", emissionLP.toString())
        return Contract.compile(script)
    }

    static arbPoolScript(emissionLP: bigint): Contract {
        let script = ArbPoolScriptTemplate.replace("$emissionLP", emissionLP.toString())
        return Contract.compile(script)
    }

    static genericDepositScript(emissionLP: bigint, poolId: PoolId, pk: PublicKey): Contract {
        let script = GenericDepositTemplate
            .replace("$emissionLP", emissionLP.toString())
            .replace("$poolNFT", poolId.toString())
            .replace("$pk", pk)
        return Contract.compile(script)
    }

    static genericRedeemScript(emissionLP: bigint, poolId: PoolId, pk: PublicKey): Contract {
        let script = GenericRedeemTemplate
            .replace("$emissionLP", emissionLP.toString())
            .replace("$poolNFT", poolId.toString())
            .replace("$pk", pk)
        return Contract.compile(script)
    }
}