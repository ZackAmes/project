import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import { print } from 'graphql'
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  ContractAddress: { input: any; output: any; }
  Cursor: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Enum: { input: any; output: any; }
  bool: { input: any; output: any; }
  felt252: { input: any; output: any; }
  u8: { input: any; output: any; }
};

export type ModelUnion = Secret | Square | TicTacToe;

export enum OrderDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Secret = {
  __typename?: 'Secret';
  entity?: Maybe<World__Entity>;
  player?: Maybe<Scalars['ContractAddress']['output']>;
  value?: Maybe<Scalars['u8']['output']>;
};

export type SecretConnection = {
  __typename?: 'SecretConnection';
  edges?: Maybe<Array<Maybe<SecretEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type SecretEdge = {
  __typename?: 'SecretEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Secret>;
};

export type SecretOrder = {
  direction: OrderDirection;
  field: SecretOrderField;
};

export enum SecretOrderField {
  Player = 'PLAYER',
  Value = 'VALUE'
}

export type SecretWhereInput = {
  player?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  value?: InputMaybe<Scalars['u8']['input']>;
  valueEQ?: InputMaybe<Scalars['u8']['input']>;
  valueGT?: InputMaybe<Scalars['u8']['input']>;
  valueGTE?: InputMaybe<Scalars['u8']['input']>;
  valueLT?: InputMaybe<Scalars['u8']['input']>;
  valueLTE?: InputMaybe<Scalars['u8']['input']>;
  valueNEQ?: InputMaybe<Scalars['u8']['input']>;
};

export type Square = {
  __typename?: 'Square';
  entity?: Maybe<World__Entity>;
  game_id?: Maybe<Scalars['felt252']['output']>;
  state?: Maybe<Scalars['Enum']['output']>;
  x?: Maybe<Scalars['u8']['output']>;
  y?: Maybe<Scalars['u8']['output']>;
};

export type SquareConnection = {
  __typename?: 'SquareConnection';
  edges?: Maybe<Array<Maybe<SquareEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type SquareEdge = {
  __typename?: 'SquareEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Square>;
};

export type SquareOrder = {
  direction: OrderDirection;
  field: SquareOrderField;
};

export enum SquareOrderField {
  GameId = 'GAME_ID',
  State = 'STATE',
  X = 'X',
  Y = 'Y'
}

export type SquareWhereInput = {
  game_id?: InputMaybe<Scalars['felt252']['input']>;
  game_idEQ?: InputMaybe<Scalars['felt252']['input']>;
  game_idGT?: InputMaybe<Scalars['felt252']['input']>;
  game_idGTE?: InputMaybe<Scalars['felt252']['input']>;
  game_idLT?: InputMaybe<Scalars['felt252']['input']>;
  game_idLTE?: InputMaybe<Scalars['felt252']['input']>;
  game_idNEQ?: InputMaybe<Scalars['felt252']['input']>;
  state?: InputMaybe<Scalars['Enum']['input']>;
  x?: InputMaybe<Scalars['u8']['input']>;
  xEQ?: InputMaybe<Scalars['u8']['input']>;
  xGT?: InputMaybe<Scalars['u8']['input']>;
  xGTE?: InputMaybe<Scalars['u8']['input']>;
  xLT?: InputMaybe<Scalars['u8']['input']>;
  xLTE?: InputMaybe<Scalars['u8']['input']>;
  xNEQ?: InputMaybe<Scalars['u8']['input']>;
  y?: InputMaybe<Scalars['u8']['input']>;
  yEQ?: InputMaybe<Scalars['u8']['input']>;
  yGT?: InputMaybe<Scalars['u8']['input']>;
  yGTE?: InputMaybe<Scalars['u8']['input']>;
  yLT?: InputMaybe<Scalars['u8']['input']>;
  yLTE?: InputMaybe<Scalars['u8']['input']>;
  yNEQ?: InputMaybe<Scalars['u8']['input']>;
};

export type TicTacToe = {
  __typename?: 'TicTacToe';
  entity?: Maybe<World__Entity>;
  game_id?: Maybe<Scalars['felt252']['output']>;
  turn?: Maybe<Scalars['bool']['output']>;
};

export type TicTacToeConnection = {
  __typename?: 'TicTacToeConnection';
  edges?: Maybe<Array<Maybe<TicTacToeEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type TicTacToeEdge = {
  __typename?: 'TicTacToeEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<TicTacToe>;
};

export type TicTacToeOrder = {
  direction: OrderDirection;
  field: TicTacToeOrderField;
};

export enum TicTacToeOrderField {
  GameId = 'GAME_ID',
  Turn = 'TURN'
}

export type TicTacToeWhereInput = {
  game_id?: InputMaybe<Scalars['felt252']['input']>;
  game_idEQ?: InputMaybe<Scalars['felt252']['input']>;
  game_idGT?: InputMaybe<Scalars['felt252']['input']>;
  game_idGTE?: InputMaybe<Scalars['felt252']['input']>;
  game_idLT?: InputMaybe<Scalars['felt252']['input']>;
  game_idLTE?: InputMaybe<Scalars['felt252']['input']>;
  game_idNEQ?: InputMaybe<Scalars['felt252']['input']>;
  turn?: InputMaybe<Scalars['bool']['input']>;
  turnEQ?: InputMaybe<Scalars['bool']['input']>;
  turnGT?: InputMaybe<Scalars['bool']['input']>;
  turnGTE?: InputMaybe<Scalars['bool']['input']>;
  turnLT?: InputMaybe<Scalars['bool']['input']>;
  turnLTE?: InputMaybe<Scalars['bool']['input']>;
  turnNEQ?: InputMaybe<Scalars['bool']['input']>;
};

export type World__Content = {
  __typename?: 'World__Content';
  cover_uri?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  icon_uri?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  socials?: Maybe<Array<Maybe<World__Social>>>;
  website?: Maybe<Scalars['String']['output']>;
};

export type World__Entity = {
  __typename?: 'World__Entity';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  event_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  model_names?: Maybe<Scalars['String']['output']>;
  models?: Maybe<Array<Maybe<ModelUnion>>>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type World__EntityConnection = {
  __typename?: 'World__EntityConnection';
  edges?: Maybe<Array<Maybe<World__EntityEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type World__EntityEdge = {
  __typename?: 'World__EntityEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<World__Entity>;
};

export type World__Event = {
  __typename?: 'World__Event';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  data?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id?: Maybe<Scalars['ID']['output']>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  transaction_hash?: Maybe<Scalars['String']['output']>;
};

export type World__EventConnection = {
  __typename?: 'World__EventConnection';
  edges?: Maybe<Array<Maybe<World__EventEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type World__EventEdge = {
  __typename?: 'World__EventEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<World__Event>;
};

export type World__Metadata = {
  __typename?: 'World__Metadata';
  content?: Maybe<World__Content>;
  cover_img?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  icon_img?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  uri?: Maybe<Scalars['String']['output']>;
};

export type World__MetadataConnection = {
  __typename?: 'World__MetadataConnection';
  edges?: Maybe<Array<Maybe<World__MetadataEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type World__MetadataEdge = {
  __typename?: 'World__MetadataEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<World__Metadata>;
};

export type World__Model = {
  __typename?: 'World__Model';
  class_hash?: Maybe<Scalars['felt252']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  transaction_hash?: Maybe<Scalars['felt252']['output']>;
};

export type World__ModelConnection = {
  __typename?: 'World__ModelConnection';
  edges?: Maybe<Array<Maybe<World__ModelEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type World__ModelEdge = {
  __typename?: 'World__ModelEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<World__Model>;
};

export type World__Query = {
  __typename?: 'World__Query';
  entities?: Maybe<World__EntityConnection>;
  entity: World__Entity;
  events?: Maybe<World__EventConnection>;
  metadatas?: Maybe<World__MetadataConnection>;
  model: World__Model;
  models?: Maybe<World__ModelConnection>;
  secretModels?: Maybe<SecretConnection>;
  squareModels?: Maybe<SquareConnection>;
  tictactoeModels?: Maybe<TicTacToeConnection>;
  transaction: World__Transaction;
  transactions?: Maybe<World__TransactionConnection>;
};


export type World__QueryEntitiesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type World__QueryEntityArgs = {
  id: Scalars['ID']['input'];
};


export type World__QueryEventsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type World__QueryMetadatasArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type World__QueryModelArgs = {
  id: Scalars['ID']['input'];
};


export type World__QueryModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type World__QuerySecretModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SecretOrder>;
  where?: InputMaybe<SecretWhereInput>;
};


export type World__QuerySquareModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SquareOrder>;
  where?: InputMaybe<SquareWhereInput>;
};


export type World__QueryTictactoeModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<TicTacToeOrder>;
  where?: InputMaybe<TicTacToeWhereInput>;
};


export type World__QueryTransactionArgs = {
  id: Scalars['ID']['input'];
};


export type World__QueryTransactionsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type World__Social = {
  __typename?: 'World__Social';
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type World__Subscription = {
  __typename?: 'World__Subscription';
  entityUpdated: World__Entity;
  eventEmitted: World__Event;
  modelRegistered: World__Model;
};


export type World__SubscriptionEntityUpdatedArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type World__SubscriptionEventEmittedArgs = {
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type World__SubscriptionModelRegisteredArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type World__Transaction = {
  __typename?: 'World__Transaction';
  calldata?: Maybe<Array<Maybe<Scalars['felt252']['output']>>>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  max_fee?: Maybe<Scalars['felt252']['output']>;
  nonce?: Maybe<Scalars['felt252']['output']>;
  sender_address?: Maybe<Scalars['felt252']['output']>;
  signature?: Maybe<Array<Maybe<Scalars['felt252']['output']>>>;
  transaction_hash?: Maybe<Scalars['felt252']['output']>;
};

export type World__TransactionConnection = {
  __typename?: 'World__TransactionConnection';
  edges?: Maybe<Array<Maybe<World__TransactionEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type World__TransactionEdge = {
  __typename?: 'World__TransactionEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<World__Transaction>;
};

export type GetEntitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEntitiesQuery = { __typename?: 'World__Query', entities?: { __typename?: 'World__EntityConnection', edges?: Array<{ __typename?: 'World__EntityEdge', node?: { __typename?: 'World__Entity', keys?: Array<string | null> | null, models?: Array<{ __typename: 'Secret', value?: any | null } | { __typename: 'Square', state?: any | null } | { __typename: 'TicTacToe', turn?: any | null } | null> | null } | null } | null> | null } | null };


export const GetEntitiesDocument = gql`
    query getEntities {
  entities(keys: ["*"]) {
    edges {
      node {
        keys
        models {
          __typename
          ... on Secret {
            value
          }
          ... on TicTacToe {
            turn
          }
          ... on Square {
            state
          }
        }
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();
const GetEntitiesDocumentString = print(GetEntitiesDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getEntities(variables?: GetEntitiesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetEntitiesQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetEntitiesQuery>(GetEntitiesDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getEntities', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;