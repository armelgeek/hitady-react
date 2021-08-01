export const isLogin = () => {
    if (localStorage.getItem('profile')) return true;
    return false;
}
export const logout =() =>{
    localStorage.removeItem('profile');
}