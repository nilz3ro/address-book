// @ts-nocheck
import * as beet from "@metaplex-foundation/beet";
import * as beetSolana from "@metaplex-foundation/beet-solana";
import { Keypair, PublicKey } from "@solana/web3.js";

class AddressBook {
    constructor(
        readonly entries: Set<PublicKey>
    ) {}

    static readonly struct = new beet.FixableBeetStruct<AddressBook>(
        [
            ["entries", beet.set(beetSolana.publicKey)]
        ],
        (args) => {
            console.log("args from constructor helper");
            console.log(args);
           return  new AddressBook(args.entries!);
        },
        "AddressBook"
    );
}

let friendKeypair = Keypair.generate();
let anotherFriendKeypair = Keypair.generate();

let adb = new AddressBook(new Set([friendKeypair.publicKey, anotherFriendKeypair.publicKey]))
console.log(adb);


let [b] = AddressBook.struct.serialize(adb);
console.log(b);

let [rehydrated] = AddressBook.struct.deserialize(b); 

console.log("rehydrated");
console.log(rehydrated);
