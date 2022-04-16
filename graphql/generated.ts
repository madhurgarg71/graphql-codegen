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
