use starknet::ContractAddress;

#[derive(Model, Drop, Serde)]
struct Secret {
    #[key]
    player: ContractAddress,
    value: u8
}

#[derive(Model, Drop, Serde)]
struct TicTacToe { 
    #[key]
    game_id: felt252,
    turn: bool
}

#[derive(Model, Drop, Serde)]
struct Square {
    #[key]
    game_id: felt252,
    #[key]
    x: u8,
    #[key]
    y: u8,
    state: SquareValue

}

enum SquareValue {
    N: (),
    X: (),
    O: ()
}