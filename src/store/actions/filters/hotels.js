function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
export const fetchData = type => (dispatch, getState) => {
    //for loading spinner later
   
    dispatch({
        type: "FETCHING_DATA_HOTEL"
    });

    console.log("Making request with criteria: ", getState().hotels.criteria);
    const data=[{
        id:1,
        name:'Vannie hotel'
    },
    {
        id:2,
        name:'Salem hotel'
    },
    {
        id:3,
        name:'Karibo hotel'
    },
    {
        id:4,
        name:'Zomatel hotel'
    },
    {
        id:5,
        name:'Soratel hotel'
    }]
   
   
    sleep(2000).then(() => {
         data.push({
            id: Math.random(1000),
            name : Math.random(2000)
        });
        console.log(data);
        dispatch({
            type: "FETCH_DATA_HOTEL_SUCCESS",
            payload:data
        });
    },(err) => {
            console.log(err.response);
            dispatch({
                type: "FETCH_DATA_ERROR",
                payload: err
            });
    });
    /*api
        .post("/vehicles", getState().hotels.criteria)
        .then(response => {
            dispatch({
                type: "FETCH_DATA_SUCCESS",
                payload: response.data
            });
        })
        .catch(err => {
            console.log(err.response);
            dispatch({
                type: "FETCH_DATA_ERROR",
                payload: err
            });
        });*/
};
export const editCriteria = (name, value, minName, maxName) => dispatch => {
    if (name instanceof Object && !(name instanceof Array)) {
        //si name est un objet sûr, modifiez l'objet criteria avec chaque propriété et valeur de ce nom
    
        return Object.keys(name).forEach(key => {
            dispatch({
                type: "EDIT_CRITERIA_HOTEL",
                payload: { [key]: name[key] }
            });
        });
    } else if (minName && maxName) {
        //ce bloc gère les valeurs d'entrée du curseur/plage
        dispatch({
            type: "EDIT_CRITERIA_HOTEL",
            payload: { [minName]: value.min, [maxName]: value.max }
        });
    } else if (name === "tags") {
        //tags  besoin d'un tableau comme valeur pour le backend
        dispatch({
            type: "EDIT_CRITERIA_HOTEL",
            payload: { [name]: value === "" ? "" : [value] }
        });
    } else if (!name && !minName && !maxName) {
        //gère les valeurs de liste déroulante de tri
        dispatch({
            type: "EDIT_CRITERIA_HOTEL",
            payload: {
                order_by: value.order_by,
                order_direction: value.order_direction
            }
        });
    } else {
        //gère toutes les autres valeurs de liste déroulante
        dispatch({
            type: "EDIT_CRITERIA_HOTEL",
            payload: { [name]: value }
        });
    }
};
export const resetCriteria = obj => {
    return {
        type: "RESET_CRITERIA_HOTEL",
        payload: obj
    };
};