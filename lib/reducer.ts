import { State, Action, ActionType } from './types';

export const initialState: State = {
    products: [],
    shoppingCart: 0,
};

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case ActionType.AddProduct:
            return {
                ...state,
                products: [...state.products, action.payload],
            };
        case ActionType.RemoveProduct:
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload.id),
            };
        case ActionType.IncrementCart:
            return {
                ...state,
                shoppingCart: state.shoppingCart + 1,
            };
        default:
            return state;
    }
};
