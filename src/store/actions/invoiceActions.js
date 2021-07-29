export const setHeaderInvoices = (headerInvoice) => {
    return {
        type: 'SET_HEADERINVOICES',
        payload: headerInvoice
    };
};
export const clearHeaderInvoice = () => {
    return {
        type: 'CLEAR_HEADERINVOICES'
    };
}