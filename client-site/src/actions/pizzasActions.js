import axios from "axios";
import swal from "sweetalert";
export const getAllPizzas = () => async (dispatch) => {
    dispatch({ type: 'GET_PIZZAS_REQUIEST' })
    try {
        const res = await axios.get('/api/pizzas/getAllPizzas')
        dispatch({ type: 'GET_PIZZAS_SUCCESS', payload: res.data })
    } catch (err) {
        dispatch({ type: 'GET_PIZZAS_FAIL', payload: err })
    }
}


export const addPizzas = (pizza) => async (dispatch) => {
    dispatch({ type: 'ADD_PIZZAS_REQUIEST' })
    try {
        const res = await axios.post('/api/pizzas/addpizza', { pizza })
        dispatch({ type: 'ADD_PIZZAS_SUCCESS', payload: res.data })
    } catch (err) {
        dispatch({ type: 'ADD_PIZZAS_FAIL', payload: err })
    }
}

export const getPizzaById = (pizzaId) => async (dispatch) => {
    dispatch({ type: "GET_PIZZABYID_REQUEST" });
    try {
        const response = await axios.post("/api/pizzas/getpizzabyid", { pizzaId });
        dispatch({ type: "GET_PIZZABYID_SUCCESS", payload: response.data });
    } catch (err) {
        dispatch({ type: "GET_PIZZABYID_FAIL", payload: err });
    }
};


export const updatePizza = (updatedPizza) => async (dispatch) => {
    dispatch({ type: "UPDATE_PIZZABYID_REQUEST" });
    try {
        const response = await axios.post("/api/pizzas/updatepizza", {
            updatedPizza,
        });
        dispatch({ type: "UPDATE_PIZZABYID_SUCCESS", payload: response.data });
        swal("Good job!", "Item Update Successfully!", "success").then((willDelete) => {
            if (willDelete) {
                window.location.href = "/admin/pizzalist"
            } else {
                window.location.href = "/admin/pizzalist"

            }
        })

    } catch (err) {
        dispatch({ type: "UPDATE_PIZZABYID_FAIL", payload: err });
    }
};

export const deletePizza = (pizzaId) => async (dispatch) => {
    try {
        await axios.post("/api/pizzas/deletepizza", { pizzaId });
        swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
        }).then((willDelete) => {
            if (willDelete) {
                window.location.href = "/admin/pizzalist"
            } else {
                window.location.href = "/admin/pizzalist"
            }
        })
        // console.log(res);
    } catch (error) {
        swal("Errro While Deleteing Pizza");
    }
};



export const filterPizza = (searchkey) => async (dispatch) => {
    let filterdPizza;
    dispatch({ type: "GET_PIZZAS_REQUEST" });
    try {
        const res = await axios.get("/api/pizzas/getAllPizzas");
        filterdPizza = res.data.filter((pizza) =>
            pizza.name.toLowerCase().includes(searchkey),
        );
        dispatch({ type: "GET_PIZZAS_SUCCESS", payload: filterdPizza });
    } catch (error) {
        dispatch({ type: "GET_PIZZAS_FAIL", payload: error });
    }
};
