/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  fragment GameFragment on Game {\n    state\n    score\n    finished\n  }\n": types.GameFragmentFragmentDoc,
    "\n  query NewGame {\n    newGame {\n      ...GameFragment\n    }\n  }\n": types.NewGameDocument,
    "\n  mutation processGame($game: GameInput!) {\n    processGame(game: $game) {\n      ...GameFragment\n    }\n  }\n": types.ProcessGameDocument,
    "\n  query HighScore($where: ScoreWhereInput, $first: Int, $sortBy: [SortScoresBy!]) {\n    allScores(where: $where, first: $first, sortBy: $sortBy) {\n      id\n      score\n    }\n  }\n": types.HighScoreDocument,
    "\n  query TopScores($where: ScoreWhereInput, $first: Int, $skip: Int, $sortBy: [SortScoresBy!]) {\n    allScores(where: $where, first: $first, skip: $skip, sortBy: $sortBy) {\n      id\n      player {\n        id\n        name\n      }\n      score\n    }\n  }\n": types.TopScoresDocument,
    "\n    fragment ViewerFragment on User {\n        id\n        email\n        name\n    }\n": types.ViewerFragmentFragmentDoc,
    "\n    query Viewer {\n        viewer: authenticatedUser {\n            id\n            ...ViewerFragment\n        }\n    }\n": types.ViewerDocument,
    "\n  mutation authenticateUserWithPassword($email: String, $password: String) {\n    authenticateUserWithPassword(email: $email, password: $password) {\n      token\n    }\n  }\n": types.AuthenticateUserWithPasswordDocument,
    "\n  mutation createUser($data: UserCreateInput) {\n    createUser(data: $data) {\n      id\n    }\n  }\n": types.CreateUserDocument,
    "\n  mutation logout {\n    unauthenticateUser {\n      success\n    }\n  }\n": types.LogoutDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment GameFragment on Game {\n    state\n    score\n    finished\n  }\n"): (typeof documents)["\n  fragment GameFragment on Game {\n    state\n    score\n    finished\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query NewGame {\n    newGame {\n      ...GameFragment\n    }\n  }\n"): (typeof documents)["\n  query NewGame {\n    newGame {\n      ...GameFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation processGame($game: GameInput!) {\n    processGame(game: $game) {\n      ...GameFragment\n    }\n  }\n"): (typeof documents)["\n  mutation processGame($game: GameInput!) {\n    processGame(game: $game) {\n      ...GameFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query HighScore($where: ScoreWhereInput, $first: Int, $sortBy: [SortScoresBy!]) {\n    allScores(where: $where, first: $first, sortBy: $sortBy) {\n      id\n      score\n    }\n  }\n"): (typeof documents)["\n  query HighScore($where: ScoreWhereInput, $first: Int, $sortBy: [SortScoresBy!]) {\n    allScores(where: $where, first: $first, sortBy: $sortBy) {\n      id\n      score\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query TopScores($where: ScoreWhereInput, $first: Int, $skip: Int, $sortBy: [SortScoresBy!]) {\n    allScores(where: $where, first: $first, skip: $skip, sortBy: $sortBy) {\n      id\n      player {\n        id\n        name\n      }\n      score\n    }\n  }\n"): (typeof documents)["\n  query TopScores($where: ScoreWhereInput, $first: Int, $skip: Int, $sortBy: [SortScoresBy!]) {\n    allScores(where: $where, first: $first, skip: $skip, sortBy: $sortBy) {\n      id\n      player {\n        id\n        name\n      }\n      score\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment ViewerFragment on User {\n        id\n        email\n        name\n    }\n"): (typeof documents)["\n    fragment ViewerFragment on User {\n        id\n        email\n        name\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query Viewer {\n        viewer: authenticatedUser {\n            id\n            ...ViewerFragment\n        }\n    }\n"): (typeof documents)["\n    query Viewer {\n        viewer: authenticatedUser {\n            id\n            ...ViewerFragment\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation authenticateUserWithPassword($email: String, $password: String) {\n    authenticateUserWithPassword(email: $email, password: $password) {\n      token\n    }\n  }\n"): (typeof documents)["\n  mutation authenticateUserWithPassword($email: String, $password: String) {\n    authenticateUserWithPassword(email: $email, password: $password) {\n      token\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createUser($data: UserCreateInput) {\n    createUser(data: $data) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation createUser($data: UserCreateInput) {\n    createUser(data: $data) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation logout {\n    unauthenticateUser {\n      success\n    }\n  }\n"): (typeof documents)["\n  mutation logout {\n    unauthenticateUser {\n      success\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;