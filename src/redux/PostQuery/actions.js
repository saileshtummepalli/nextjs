export const postActionTypes = {
  FAILURE: "FAILURE",
  CREATE_DATA: "CREATE_DATA",
  CREATE_DATA_SUCCESS: "CREATE_DATA_SUCCESS",
  HYDRATE: "HYDRATE",
};

export function failure(error) {
  return {
    type: postActionTypes.FAILURE,
    error,
  };
}

export const CreateData = ({ data }) => {
  return {
    type: postActionTypes.CREATE_DATA,
    data,
  };
};

export const createDataSaga = ({ data }) => {
  return {
    type: postActionTypes.CREATE_DATA_SUCCESS,
    data,
  };
};
