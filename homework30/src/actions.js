export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export const fetchSwapi = (endpoint) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_START });

    try {
      const response = await fetch(`https://swapi.py4e.com/api/${endpoint}`);
      const data = await response.json();
      dispatch({ type: FETCH_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_ERROR, payload: error.message });
    }
  };
};
