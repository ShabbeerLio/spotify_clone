export const initialState = {
    usre: null,
    playlists: [],
    playing: false,
    item: null,
    token: "BQBD9GnIXJ0RDfpUK1lh5GzPdRvSkkOiuGOGMvq65xM8BPWw3lfR",
};

const reducer = (state, action) => {
    console.log(action);

    //Action -> type, [payload]

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };

            case "SET_PLAYLISTS":
                return {
                    ...state,
                    playlists: action.playlists,
                };
        // case "SET_DISCOVER_WEEKLY":
        //     return {
        //         ...state,
        //         discover_weekly: action.discover_weekly,
        //     }

        default:
            return state;
    }
}
export default reducer;