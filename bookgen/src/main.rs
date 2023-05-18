use std::collections::HashSet;
use solana_sdk::pubkey::Pubkey;
use borsh::{BorshSerialize, BorshDeserialize};
use std::fs;

fn main() {
    let p1 = Pubkey::new_unique();
    let p2 = Pubkey::new_unique();
    let mut s = HashSet::new();

    s.insert(p1);
    s.insert(p2);


    let adb = AddressBook { entries: s };
    let bytes = adb.try_to_vec().expect("should serialize");

    fs::write("../addressbook.bin", bytes).expect("should write");
}

#[derive(Debug, BorshDeserialize, BorshSerialize)]
struct AddressBook {
    pub entries: HashSet<Pubkey>
}