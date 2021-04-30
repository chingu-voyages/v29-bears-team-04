export const login = (formData:any) => {
    return (dispatch:any) => {
        fetch("https://unsplash-clone-server.herokuapp.com/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((resp) => resp.json())
            .then((user) => {
                if (user.success) {
                    dispatch({ type: "LOGIN_SUCCESS", payload: user });
                } else {
                    dispatch({ type: "LOGIN_FAILURE", payload: user.errors });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
};
