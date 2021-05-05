import Cookies from 'js-cookie'

export const cookieHasChanged = () => {
    let initCookies = Cookies.get();
    setInterval(() => {
        if (initCookies !== Cookies.get()) {
            console.log("cookie has changed")
            return true;
        } 
    }, 100)
    return false;

}