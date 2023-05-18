use std::collections::HashSet;
use solana_sdk::pubkey::Pubkey;
use borsh::{BorshSerialize, BorshDeserialize};

fn main() {
    let p1 = Pubkey::new_unique();
    let p2 = Pubkey::new_unique();
    let mut s = HashSet::new();

    println!("p1 {:?}", p1);
    println!("p2 {:?}", p2);

    s.insert(p1);
    s.insert(p2);

    println!("entries {:?}", s);

    let adb = AddressBook { entries: s };
    let bytes = adb.try_to_vec().expect("should serialize");

    println!("bytes? {:?}", bytes);

    let rehydrated = AddressBook::try_from_slice(&bytes).expect("should deserialized");
    println!("rehydrated? {:?}", rehydrated);
}

#[derive(Debug, BorshDeserialize, BorshSerialize)]
struct AddressBook {
    pub entries: HashSet<Pubkey>
}