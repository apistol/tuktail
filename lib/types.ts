export type Product = {
    id: number;
    name: string;
    price: number;
};

export type State = {
    products: Product[];
    shoppingCart: number;
};

export enum ActionType {
    AddProduct = 'ADD_PRODUCT',
    RemoveProduct = 'REMOVE_PRODUCT',
    IncrementCart = 'INCREMENT_CART',
}

export type Action =
    | { type: ActionType.AddProduct; payload: Product }
    | { type: ActionType.RemoveProduct; payload: { id: number } }
    | { type: ActionType.IncrementCart };
