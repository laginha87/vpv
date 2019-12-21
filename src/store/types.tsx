import { DocumentNode } from 'graphql'
import { FC } from 'react'

export interface AppState {
};

export interface FCWithFragment<T> extends FC<T> {
    fragments: DocumentNode
}
