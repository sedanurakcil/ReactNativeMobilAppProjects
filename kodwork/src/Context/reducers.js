function reducers(state,action){
    let favourite = state.favouriteJob

    switch (action.type) {
        case 'ADD_FAVOURITE':
            const {favouriteJob} = action.payload;
            
            // dont add same job
            if(favourite.find((a)=> a.id === favouriteJob.id)){
                return state
            }

            const newFavourites = [...state.favouriteJob, favouriteJob]

            return {...state, favouriteJob: newFavourites}
            
        case 'REMOVE_FAVOURITE':
            const listfavourite = [
                ...state.favouriteJob.filter(job => job !== action.payload.job)
              ]

            
            return {...state, favouriteJob: listfavourite}
                
            
    
        default:
            return state
    }

}

export default reducers