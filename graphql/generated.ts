import { useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(endpoint: string, requestInit: RequestInit, query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: 'POST',
      ...requestInit,
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  getTodo?: Maybe<Todo>;
  getUser?: Maybe<TUser>;
};


export type QueryGetTodoArgs = {
  id: Scalars['Int'];
};

export type TEducation = {
  __typename?: 'TEducation';
  degree?: Maybe<Scalars['String']>;
  school?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['String']>;
};

export type TExperience = {
  __typename?: 'TExperience';
  company?: Maybe<Scalars['String']>;
  designation?: Maybe<Scalars['String']>;
};

export type TUser = {
  __typename?: 'TUser';
  education?: Maybe<TEducation>;
  experience?: Maybe<Array<Maybe<TExperience>>>;
  name?: Maybe<Scalars['String']>;
};

export type Todo = {
  __typename?: 'Todo';
  completed?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { __typename?: 'Query', getUser?: { __typename?: 'TUser', name?: string | null, education?: { __typename?: 'TEducation', degree?: string | null, year?: string | null } | null, experience?: Array<{ __typename?: 'TExperience', company?: string | null, designation?: string | null } | null> | null } | null };

export type GetTodoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTodoQuery = { __typename?: 'Query', getTodo?: { __typename?: 'Todo', id?: number | null, title?: string | null, completed?: boolean | null } | null };


export const GetUserDocument = `
    query getUser {
  getUser {
    name
    education {
      degree
      year
    }
    experience {
      company
      designation
    }
  }
}
    `;
export const useGetUserQuery = <
      TData = GetUserQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables?: GetUserQueryVariables,
      options?: UseQueryOptions<GetUserQuery, TError, TData>
    ) =>
    useQuery<GetUserQuery, TError, TData>(
      variables === undefined ? ['getUser'] : ['getUser', variables],
      fetcher<GetUserQuery, GetUserQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, GetUserDocument, variables),
      options
    );
export const GetTodoDocument = `
    query getTodo {
  getTodo(id: 1) {
    id
    title
    completed
  }
}
    `;
export const useGetTodoQuery = <
      TData = GetTodoQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables?: GetTodoQueryVariables,
      options?: UseQueryOptions<GetTodoQuery, TError, TData>
    ) =>
    useQuery<GetTodoQuery, TError, TData>(
      variables === undefined ? ['getTodo'] : ['getTodo', variables],
      fetcher<GetTodoQuery, GetTodoQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, GetTodoDocument, variables),
      options
    );