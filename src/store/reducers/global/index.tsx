const config = require("../../../../app.json");

const INITIAL_STATE = {
	loading: false,
	name: config.expo.name,
	listaDias: [],
};

export const reducer = (state: any = INITIAL_STATE, action: any) => {
	switch (action.type) {
		case "LOADING":
			return {
				...state,
				loading: action.loading,
			};
		default:
			return state;
		case "SET_LISTA_DIAS":
			return {
				...state,
				listaDias: action.dias,
			};
	}
  
};

//faça as funções e tratamentos aqui dentro
export const actionLoading = (status: any) => {
	return {
		type: "LOADING", // qual ação esta sendo realizada ex: SET_STATUS_ACTIVE
		loading: status,
	};
};

export const actionSetlistaDias = (dias: any) => {
	return {
	  type: "SET_LISTA_DIAS", // qual ação esta sendo realizada ex: SET_STATUS_ACTIVE
	  dias,
	};
  };
  


const reducerGlobal = {
	reducer,
	actionLoading,
	actionSetlistaDias,
};

export default reducerGlobal;
