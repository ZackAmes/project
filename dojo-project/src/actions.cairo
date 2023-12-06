// define the interface
use starknet::{ContractAddress};

#[starknet::interface]
trait IActions<TContractState> {
    fn spawn(self: @TContractState);
    fn setSecret(self: @TContractState, value: u8);
    fn takeTurn(self: @TContractState, game_id: felt252, x: u8, y: u8);
    fn challenge(self: @TContractState, opp: ContractAddress);

}

// dojo decorator
#[dojo::contract]
mod actions {
    use starknet::{ContractAddress, get_caller_address};
    use project::models::{Secret, Square, TicTacToe, SquareValue};
    use super::IActions;

    const counter: u32 = 0_u32;

    // declaring custom event struct
    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {
        Update: Update,
        NewGame: NewGame
    }

    #[derive(Drop, starknet::Event)]
    struct Update {
        player: ContractAddress,
        value: u8
    }

    #[derive(Drop, starknet::Event)]
    struct NewGame {
        game_id: felt252
    }

    // impl: implement functions specified in trait
    #[external(v0)]
    impl ActionsImpl of IActions<ContractState> {
        // ContractState is defined by system decorator expansion
        fn spawn(self: @ContractState) {
            // Access the world dispatcher for reading.
            let world = self.world_dispatcher.read();

            // Get the address of the current caller, possibly the player's address.
            let caller = get_caller_address();

            // Update the world state with the new data.
            // 1. Increase the player's remaining moves by 10.
            // 2. Move the player's position 10 units in both the x and y direction.
            set!(
                world,
                (
                    Secret {
                        player: caller, value:0
                    },
                    TicTacToe {
                        player_one: caller, player_two:caller, game_id: 0, turn: true
                    },
                    Square {
                        game_id: 0, x: 0, y:0, value:0
                    },
                    Square {
                        game_id: 0, x: 1, y:0, value:0
                    },
                    Square {
                        game_id: 0, x: 2, y:0, value:0
                    },
                    Square {
                        game_id: 0, x: 0, y:1, value:0
                    },
                    Square {
                        game_id: 0, x: 1, y:1, value:0
                    },
                    Square {
                        game_id: 0, x: 2, y:1, value:0
                    },
                    Square {
                        game_id: 0, x: 0, y:2, value:0
                    },
                    Square {
                        game_id: 0, x: 1, y:2, value:0
                    },
                    Square {
                        game_id: 0, x: 2, y:2, value:0
                    }


                )
            );
            let counter = counter + 1;
        }

        fn takeTurn(self: @ContractState, game_id: felt252, x: u8, y: u8) {
            let world = self.world_dispatcher.read();
            let square = get!(world, (game_id, x, y), (Square));
            let game = get!(world, game_id, (TicTacToe));
            let turn = game.turn;
            let caller = get_caller_address();
            let player_one = game.player_one;
            let player_two = game.player_two;

            if(turn) {
                assert(caller == player_one, 'not turn player, 1s turn')
            }
            else {
                assert(caller == player_two, 'not turn player, 2s turn')
            }
            
            assert(square.value == 0, 'square taken');

            if(turn) {
                set!(world, Square {
                    game_id: game_id, x: x, y: y, value: 1
                })
            }
            else {
                 set!(world, Square {
                    game_id: game_id, x: x, y: y, value: 2
                })
            }           
            set!(world, TicTacToe {
                player_one: player_one, player_two:player_two, game_id: game_id, turn: !turn
            }) 

        }

        fn challenge(self: @ContractState, opp: ContractAddress){
            let world = self.world_dispatcher.read();
            let caller = get_caller_address();

            let id:felt252 = counter.into();

            set!(world, (
                TicTacToe {
                        player_one: caller, player_two:opp, game_id: id, turn: true
                    },
                    Square {
                        game_id: id, x: 0, y:0, value:0
                    },
                    Square {
                        game_id: id, x: 1, y:0, value:0
                    },
                    Square {
                        game_id: id, x: 2, y:0, value:0
                    },
                    Square {
                        game_id: id, x: 0, y:1, value:0
                    },
                    Square {
                        game_id: id, x: 1, y:1, value:0
                    },
                    Square {
                        game_id: id, x: 2, y:1, value:0
                    },
                    Square {
                        game_id: id, x: 0, y:2, value:0
                    },
                    Square {
                        game_id: id, x: 1, y:2, value:0
                    },
                    Square {
                        game_id: id, x: 2, y:2, value:0
                    }
            ));
            let counter = counter + 1;

        }

        fn setSecret(self: @ContractState, value: u8) {
            let world = self.world_dispatcher.read();

            let player = get_caller_address();

            set!(world, (Secret { player, value}));

            emit!(world, Update { player, value})
        }
    }
}
