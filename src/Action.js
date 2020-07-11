import {CHANGE_SEARCHFIELD,REQUEST_ROBOTS_PENDING,REQUEST_ROBOTS_SUCCESS,REQUEST_ROBOTS_FAILED} from "./constants";
export const setSearchField = (text)=>{
    console.log("action");
return {    
    type:CHANGE_SEARCHFIELD,
    payload: text
}

}

export const requestRobots = () => (dispatch) => {
    console.log("apiaction");
    dispatch({ type: REQUEST_ROBOTS_PENDING })
    
    fetch("https://jsonplaceholder.typicode.com/users").then(Response=>Response.json())
    .then(data=> dispatch({type:REQUEST_ROBOTS_SUCCESS, payload:data}),console.log("REQUEST_ROBOTS_SUCCESS"))
    .catch(error=>dispatch({type:REQUEST_ROBOTS_FAILED, payload: error}));

      
}