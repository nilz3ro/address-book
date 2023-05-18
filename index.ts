import beet from "@metaplex-foundation/beet";
import beetSolana from "@metaplex-foundation/beet-solana";
import {Keypair, PublicKey} from "@solana/web3.js";

class AddressBook {
    constructor(
        readonly entries: Set<number>
    ) {}

    static readonly struct = new beet.BeetStruct<AddressBook>([
        ["entries", beet.set(beet.u8)]
    ], (args) => {
        let s: Set<number> = new Set();
        // let pk = Keypair.generate().publicKey;
        s.add(8);
        return new AddressBook(s)
    }, "AddressBook");
}