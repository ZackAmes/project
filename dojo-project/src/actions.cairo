// define the interface
#[starknet::interface]
trait IActions<TContractState> {
    fn spawn(self: @TContractState);
    fn setSecret(self: @TContractState, value: u8);
    fn takeTurn(self: @TContractState, game_id: felt252, x: u8, y: u8);

}

// dojo decorator
#[dojo::contract]
mod actions {
    use starknet::{ContractAddress, get_caller_address};
    use project::models::{Secret, Square, TicTacToe, SquareValue};
    use super::IActions;

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
            let player = get_caller_address();

            // Update the world state with the new data.
            // 1. Increase the player's remaining moves by 10.
            // 2. Move the player's position 10 units in both the x and y direction.
            set!(
                world,
                (
                    Secret {
                        player, value:0
                    },
                    TicTacToe {
                        game_id: 0, turn: true
                    },
                    Square {
                        game_id: 0, x: 0, y:0, state: SquareValue::N
                    },
                    Square {
                        game_id: 0, x: 1, y:0, state: SquareValue::N
                    },
                    Square {
                        game_id: 0, x: 2, y:0, state: SquareValue::N
                    },
                    Square {
                        game_id: 0, x: 0, y:1, state: SquareValue::N
                    },
                    Square {
                        game_id: 0, x: 1, y:1, state: SquareValue::N
                    },
                    Square {
                        game_id: 0, x: 2, y:1, state: SquareValue::N
                    },
                    Square {
                        game_id: 0, x: 0, y:2, state: SquareValue::N
                    },
                    Square {
                        game_id: 0, x: 1, y:2, state: SquareValue::N
                    },
                    Square {
                        game_id: 0, x: 2, y:2, state: SquareValue::N
                    }


                )
            );
        }

        fn takeTurn(self: @ContractState, game_id: felt252, x: u8, y: u8) {
            let world = self.world_dispatcher.read();
            let square = get!(world, (game_id, x, y), (Square));
            
            assert(square.state == SquareValue::N, 'square taken');

            let game = get!(world, game_id, (TicTacToe));
            let turn = game.turn;
            
            if(turn) {
                set!(world, Square {
                    game_id: game_id, x: x, y: y, state: SquareValue::X
                })
            }
            else {
                 set!(world, Square {
                    game_id: game_id, x: x, y: y, state: SquareValue::O
                })
            }            

        }

        fn setSecret(self: @ContractState, value: u8) {
            let world = self.world_dispatcher.read();

            let player = get_caller_address();

            set!(world, (Secret { player, value}));

            emit!(world, Update { player, value})
        }
    }
}
