import {UPDATE_MENU} from '../actions/menu-actions';

export default function menuReducer(state = Boolean, {type, payload}) {
    switch (type) {
        case UPDATE_MENU:
            return payload.menu;
        default:
            return state;
    }
}
