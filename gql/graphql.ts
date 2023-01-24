/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export enum Direction {
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
  Up = 'Up'
}

export type Game = {
  __typename?: 'Game';
  finished: Scalars['Boolean'];
  score: Scalars['Int'];
  state: Array<Array<Scalars['Int']>>;
};

export type GameInput = {
  direction: Direction;
  score: Scalars['Int'];
  state: Array<Array<Scalars['Int']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**  Authenticate and generate a token for a User with the Password Authentication Strategy.  */
  authenticateUserWithPassword?: Maybe<AuthenticateUserOutput>;
  /**  Create a single Score item.  */
  createScore?: Maybe<Score>;
  /**  Create multiple Score items.  */
  createScores?: Maybe<Array<Maybe<Score>>>;
  /**  Create a single User item.  */
  createUser?: Maybe<User>;
  /**  Create multiple User items.  */
  createUsers?: Maybe<Array<Maybe<User>>>;
  /**  Delete a single Score item by ID.  */
  deleteScore?: Maybe<Score>;
  /**  Delete multiple Score items by ID.  */
  deleteScores?: Maybe<Array<Maybe<Score>>>;
  /**  Delete a single User item by ID.  */
  deleteUser?: Maybe<User>;
  /**  Delete multiple User items by ID.  */
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  processGame?: Maybe<Game>;
  unauthenticateUser?: Maybe<UnauthenticateUserOutput>;
  updateAuthenticatedUser?: Maybe<User>;
  /**  Update a single User item by ID.  */
  updateUser?: Maybe<User>;
  /**  Update multiple User items by ID.  */
  updateUsers?: Maybe<Array<Maybe<User>>>;
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};


export type MutationCreateScoreArgs = {
  data?: InputMaybe<ScoreCreateInput>;
};


export type MutationCreateScoresArgs = {
  data?: InputMaybe<Array<InputMaybe<ScoresCreateInput>>>;
};


export type MutationCreateUserArgs = {
  data?: InputMaybe<UserCreateInput>;
};


export type MutationCreateUsersArgs = {
  data?: InputMaybe<Array<InputMaybe<UsersCreateInput>>>;
};


export type MutationDeleteScoreArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteScoresArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
};


export type MutationProcessGameArgs = {
  game: GameInput;
};


export type MutationUpdateAuthenticatedUserArgs = {
  data?: InputMaybe<UserUpdateInput>;
};


export type MutationUpdateUserArgs = {
  data?: InputMaybe<UserUpdateInput>;
  id: Scalars['ID'];
};


export type MutationUpdateUsersArgs = {
  data?: InputMaybe<Array<InputMaybe<UsersUpdateInput>>>;
};

export type Query = {
  __typename?: 'Query';
  /**  Search for the Score item with the matching ID.  */
  Score?: Maybe<Score>;
  /**  Search for the User item with the matching ID.  */
  User?: Maybe<User>;
  /**  Retrieve the meta-data for the Score list.  */
  _ScoresMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the User list.  */
  _UsersMeta?: Maybe<_ListMeta>;
  /**  Perform a meta-query on all Score items which match the where clause.  */
  _allScoresMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all User items which match the where clause.  */
  _allUsersMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for all lists.  */
  _ksListsMeta?: Maybe<Array<Maybe<_ListMeta>>>;
  /**  Search for all Score items which match the where clause.  */
  allScores?: Maybe<Array<Maybe<Score>>>;
  /**  Search for all User items which match the where clause.  */
  allUsers?: Maybe<Array<Maybe<User>>>;
  /** The version of the Keystone application serving this API. */
  appVersion?: Maybe<Scalars['String']>;
  authenticatedUser?: Maybe<User>;
  newGame?: Maybe<Game>;
};


export type QueryScoreArgs = {
  where: ScoreWhereUniqueInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type Query_AllScoresMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortScoresBy>>;
  where?: InputMaybe<ScoreWhereInput>;
};


export type Query_AllUsersMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortUsersBy>>;
  where?: InputMaybe<UserWhereInput>;
};


export type Query_KsListsMetaArgs = {
  where?: InputMaybe<_KsListsMetaInput>;
};


export type QueryAllScoresArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortScoresBy>>;
  where?: InputMaybe<ScoreWhereInput>;
};


export type QueryAllUsersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortUsersBy>>;
  where?: InputMaybe<UserWhereInput>;
};

/**  A keystone list  */
export type Score = {
  __typename?: 'Score';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the Score List config, or
   *  2. As an alias to the field set on 'labelField' in the Score List config, or
   *  3. As an alias to a 'name' field on the Score List (if one exists), or
   *  4. As an alias to the 'id' field on the Score List.
   */
  _label_?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  player?: Maybe<User>;
  score?: Maybe<Scalars['Int']>;
};

export type ScoreCreateInput = {
  score?: InputMaybe<Scalars['Int']>;
};

export type ScoreWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<ScoreWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<ScoreWhereInput>>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  player?: InputMaybe<UserWhereInput>;
  player_is_null?: InputMaybe<Scalars['Boolean']>;
  score?: InputMaybe<Scalars['Int']>;
  score_gt?: InputMaybe<Scalars['Int']>;
  score_gte?: InputMaybe<Scalars['Int']>;
  score_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  score_lt?: InputMaybe<Scalars['Int']>;
  score_lte?: InputMaybe<Scalars['Int']>;
  score_not?: InputMaybe<Scalars['Int']>;
  score_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type ScoreWhereUniqueInput = {
  id: Scalars['ID'];
};

export type ScoresCreateInput = {
  data?: InputMaybe<ScoreCreateInput>;
};

export enum SortScoresBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PlayerAsc = 'player_ASC',
  PlayerDesc = 'player_DESC',
  ScoreAsc = 'score_ASC',
  ScoreDesc = 'score_DESC'
}

export enum SortUsersBy {
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsAdminAsc = 'isAdmin_ASC',
  IsAdminDesc = 'isAdmin_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

/**  A keystone list  */
export type User = {
  __typename?: 'User';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the User List config, or
   *  2. As an alias to the field set on 'labelField' in the User List config, or
   *  3. As an alias to a 'name' field on the User List (if one exists), or
   *  4. As an alias to the 'id' field on the User List.
   */
  _label_?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  password_is_set?: Maybe<Scalars['Boolean']>;
};

export type UserCreateInput = {
  email?: InputMaybe<Scalars['String']>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type UserRelateToOneInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
  disconnect?: InputMaybe<UserWhereUniqueInput>;
  disconnectAll?: InputMaybe<Scalars['Boolean']>;
};

export type UserUpdateInput = {
  email?: InputMaybe<Scalars['String']>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  email?: InputMaybe<Scalars['String']>;
  email_contains?: InputMaybe<Scalars['String']>;
  email_contains_i?: InputMaybe<Scalars['String']>;
  email_ends_with?: InputMaybe<Scalars['String']>;
  email_ends_with_i?: InputMaybe<Scalars['String']>;
  email_i?: InputMaybe<Scalars['String']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_not?: InputMaybe<Scalars['String']>;
  email_not_contains?: InputMaybe<Scalars['String']>;
  email_not_contains_i?: InputMaybe<Scalars['String']>;
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  email_not_ends_with_i?: InputMaybe<Scalars['String']>;
  email_not_i?: InputMaybe<Scalars['String']>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  email_not_starts_with_i?: InputMaybe<Scalars['String']>;
  email_starts_with?: InputMaybe<Scalars['String']>;
  email_starts_with_i?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  isAdmin_not?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_i?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_i?: InputMaybe<Scalars['String']>;
  name_i?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_i?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_i?: InputMaybe<Scalars['String']>;
  name_not_i?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_i?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_i?: InputMaybe<Scalars['String']>;
  password_is_set?: InputMaybe<Scalars['Boolean']>;
};

export type UserWhereUniqueInput = {
  id: Scalars['ID'];
};

export type UsersCreateInput = {
  data?: InputMaybe<UserCreateInput>;
};

export type UsersUpdateInput = {
  data?: InputMaybe<UserUpdateInput>;
  id: Scalars['ID'];
};

export type _ListAccess = {
  __typename?: '_ListAccess';
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'auth' operations.
   */
  auth?: Maybe<Scalars['JSON']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'create' operations.
   * NOTE: 'create' can only return a Boolean.
   * It is not possible to specify a declarative Where clause for this
   * operation
   */
  create?: Maybe<Scalars['Boolean']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'delete' operations.
   */
  delete?: Maybe<Scalars['JSON']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'read' operations.
   */
  read?: Maybe<Scalars['JSON']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'update' operations.
   */
  update?: Maybe<Scalars['JSON']>;
};

export type _ListInputTypes = {
  __typename?: '_ListInputTypes';
  /** Create mutation input type name */
  createInput?: Maybe<Scalars['String']>;
  /** Create many mutation input type name */
  createManyInput?: Maybe<Scalars['String']>;
  /** Update mutation name input */
  updateInput?: Maybe<Scalars['String']>;
  /** Update many mutation name input */
  updateManyInput?: Maybe<Scalars['String']>;
  /** Input type for matching multiple items */
  whereInput?: Maybe<Scalars['String']>;
  /** Input type for matching a unique item */
  whereUniqueInput?: Maybe<Scalars['String']>;
};

export type _ListMeta = {
  __typename?: '_ListMeta';
  /** Access control configuration for the currently authenticated request */
  access?: Maybe<_ListAccess>;
  /** The list's user-facing description */
  description?: Maybe<Scalars['String']>;
  /** The Keystone list key */
  key?: Maybe<Scalars['String']>;
  /** The list's display name in the Admin UI */
  label?: Maybe<Scalars['String']>;
  /**
   * The Keystone List name
   * @deprecated Use `key` instead
   */
  name?: Maybe<Scalars['String']>;
  /** The list's data path */
  path?: Maybe<Scalars['String']>;
  /** The list's plural display name */
  plural?: Maybe<Scalars['String']>;
  /** Information on the generated GraphQL schema */
  schema?: Maybe<_ListSchema>;
  /** The list's singular display name */
  singular?: Maybe<Scalars['String']>;
};

export type _ListMutations = {
  __typename?: '_ListMutations';
  /** Create mutation name */
  create?: Maybe<Scalars['String']>;
  /** Create many mutation name */
  createMany?: Maybe<Scalars['String']>;
  /** Delete mutation name */
  delete?: Maybe<Scalars['String']>;
  /** Delete many mutation name */
  deleteMany?: Maybe<Scalars['String']>;
  /** Update mutation name */
  update?: Maybe<Scalars['String']>;
  /** Update many mutation name */
  updateMany?: Maybe<Scalars['String']>;
};

export type _ListQueries = {
  __typename?: '_ListQueries';
  /** Single-item query name */
  item?: Maybe<Scalars['String']>;
  /** All-items query name */
  list?: Maybe<Scalars['String']>;
  /** List metadata query name */
  meta?: Maybe<Scalars['String']>;
};

export type _ListSchema = {
  __typename?: '_ListSchema';
  /** Information about fields defined on this list */
  fields?: Maybe<Array<Maybe<_ListSchemaFields>>>;
  /** Top-level GraphQL input types */
  inputTypes?: Maybe<_ListInputTypes>;
  /** Top-level GraphQL mutation names */
  mutations?: Maybe<_ListMutations>;
  /**
   * Top level GraphQL query names which either return this type, or
   * provide aggregate information about this type
   */
  queries?: Maybe<_ListQueries>;
  /**
   * Information about fields on other types which return this type, or
   * provide aggregate information about this type
   */
  relatedFields?: Maybe<Array<Maybe<_ListSchemaRelatedFields>>>;
  /** The typename as used in GraphQL queries */
  type?: Maybe<Scalars['String']>;
};


export type _ListSchemaFieldsArgs = {
  where?: InputMaybe<_ListSchemaFieldsInput>;
};

export type _ListSchemaFields = {
  __typename?: '_ListSchemaFields';
  /**
   * The name of the field in its list
   * @deprecated Use `path` instead
   */
  name?: Maybe<Scalars['String']>;
  /** The path of the field in its list */
  path?: Maybe<Scalars['String']>;
  /** The field type (ie, Checkbox, Text, etc) */
  type?: Maybe<Scalars['String']>;
};

export type _ListSchemaFieldsInput = {
  type?: InputMaybe<Scalars['String']>;
};

export type _ListSchemaRelatedFields = {
  __typename?: '_ListSchemaRelatedFields';
  /** A list of GraphQL field names */
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The typename as used in GraphQL queries */
  type?: Maybe<Scalars['String']>;
};

export type _QueryMeta = {
  __typename?: '_QueryMeta';
  count?: Maybe<Scalars['Int']>;
};

export type _KsListsMetaInput = {
  /** Whether this is an auxiliary helper list */
  auxiliary?: InputMaybe<Scalars['Boolean']>;
  key?: InputMaybe<Scalars['String']>;
};

export type AuthenticateUserOutput = {
  __typename?: 'authenticateUserOutput';
  /**  Retrieve information on the newly authenticated User here.  */
  item?: Maybe<User>;
  /**  Used to make subsequent authenticated requests by setting this token in a header: 'Authorization: Bearer <token>'.  */
  token?: Maybe<Scalars['String']>;
};

export type UnauthenticateUserOutput = {
  __typename?: 'unauthenticateUserOutput';
  /**
   * `true` when unauthentication succeeds.
   * NOTE: unauthentication always succeeds when the request has an invalid or missing authentication token.
   */
  success?: Maybe<Scalars['Boolean']>;
};

export type GameFragmentFragment = { __typename?: 'Game', state: Array<Array<number>>, score: number, finished: boolean };

export type NewGameQueryVariables = Exact<{ [key: string]: never; }>;


export type NewGameQuery = { __typename?: 'Query', newGame?: { __typename?: 'Game', state: Array<Array<number>>, score: number, finished: boolean } | null };

export type ProcessGameMutationVariables = Exact<{
  game: GameInput;
}>;


export type ProcessGameMutation = { __typename?: 'Mutation', processGame?: { __typename?: 'Game', state: Array<Array<number>>, score: number, finished: boolean } | null };

export type HighScoreQueryVariables = Exact<{
  where?: InputMaybe<ScoreWhereInput>;
  first?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortScoresBy> | SortScoresBy>;
}>;


export type HighScoreQuery = { __typename?: 'Query', allScores?: Array<{ __typename?: 'Score', id?: string | null, score?: number | null } | null> | null };

export type TopScoresQueryVariables = Exact<{
  where?: InputMaybe<ScoreWhereInput>;
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortScoresBy> | SortScoresBy>;
}>;


export type TopScoresQuery = { __typename?: 'Query', allScores?: Array<{ __typename?: 'Score', id?: string | null, score?: number | null, player?: { __typename?: 'User', id?: string | null, name?: string | null } | null } | null> | null };

export type ViewerFragmentFragment = { __typename?: 'User', id?: string | null, email?: string | null, name?: string | null };

export type ViewerQueryVariables = Exact<{ [key: string]: never; }>;


export type ViewerQuery = { __typename?: 'Query', viewer?: { __typename?: 'User', id?: string | null, email?: string | null, name?: string | null } | null };

export type AuthenticateUserWithPasswordMutationVariables = Exact<{
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
}>;


export type AuthenticateUserWithPasswordMutation = { __typename?: 'Mutation', authenticateUserWithPassword?: { __typename?: 'authenticateUserOutput', token?: string | null } | null };

export type CreateUserMutationVariables = Exact<{
  data?: InputMaybe<UserCreateInput>;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'User', id?: string | null } | null };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', unauthenticateUser?: { __typename?: 'unauthenticateUserOutput', success?: boolean | null } | null };

export const GameFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GameFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Game"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"finished"}}]}}]} as unknown as DocumentNode<GameFragmentFragment, unknown>;
export const ViewerFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ViewerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<ViewerFragmentFragment, unknown>;
export const NewGameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NewGame"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newGame"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GameFragment"}}]}}]}},...GameFragmentFragmentDoc.definitions]} as unknown as DocumentNode<NewGameQuery, NewGameQueryVariables>;
export const ProcessGameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"processGame"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"game"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GameInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"processGame"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"game"},"value":{"kind":"Variable","name":{"kind":"Name","value":"game"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GameFragment"}}]}}]}},...GameFragmentFragmentDoc.definitions]} as unknown as DocumentNode<ProcessGameMutation, ProcessGameMutationVariables>;
export const HighScoreDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HighScore"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ScoreWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SortScoresBy"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allScores"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"score"}}]}}]}}]} as unknown as DocumentNode<HighScoreQuery, HighScoreQueryVariables>;
export const TopScoresDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TopScores"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ScoreWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SortScoresBy"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allScores"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"player"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"score"}}]}}]}}]} as unknown as DocumentNode<TopScoresQuery, TopScoresQueryVariables>;
export const ViewerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"viewer"},"name":{"kind":"Name","value":"authenticatedUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ViewerFragment"}}]}}]}},...ViewerFragmentFragmentDoc.definitions]} as unknown as DocumentNode<ViewerQuery, ViewerQueryVariables>;
export const AuthenticateUserWithPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"authenticateUserWithPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticateUserWithPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<AuthenticateUserWithPasswordMutation, AuthenticateUserWithPasswordMutationVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserCreateInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unauthenticateUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;