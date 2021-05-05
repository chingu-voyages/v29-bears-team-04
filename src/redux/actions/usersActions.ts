export const getUsers = () => {
    return (dispatch:any) => {
        fetch("https://unsplash-clone-server.herokuapp.com/users", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((resp) => resp.json())
            .then((resp) => dispatch({ type: "USERS_RETRIEVED", payload: resp.data }))
            .catch((error) => {
                console.log(error);
            });
    };
};
