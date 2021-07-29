export const editCriteria = (name, value, minName, maxName) => dispatch => {
    if (name instanceof Object && !(name instanceof Array)) {
        //si name est un objet sûr, modifiez l'objet criteria avec chaque propriété et valeur de ce nom
        return Object.keys(name).forEach(key => {
            dispatch({
                type: "EDIT_CRITERIA",
                payload: { [key]: name[key] }
            });
        });
    } else if (minName && maxName) {
        //ce bloc gère les valeurs d'entrée du curseur/plage
        dispatch({
            type: "EDIT_CRITERIA",
            payload: { [minName]: value.min, [maxName]: value.max }
        });
    } else if (name === "tags") {
        //tags  besoin d'un tableau comme valeur pour le backend
        dispatch({
            type: "EDIT_CRITERIA",
            payload: { [name]: value === "" ? "" : [value] }
        });
    } else if (!name && !minName && !maxName) {
        //gère les valeurs de liste déroulante de tri
        dispatch({
            type: "EDIT_CRITERIA",
            payload: {
                order_by: value.order_by,
                order_direction: value.order_direction
            }
        });
    } else {
        //gère toutes les autres valeurs de liste déroulante
        dispatch({
            type: "EDIT_CRITERIA",
            payload: { [name]: value }
        });
    }
};
export const resetCriteria = obj => {
    return {
        type: "RESET_CRITERIA",
        payload: obj
    };
};