import { useSelector, c } from "react-redux";
import axios from "axios";
import { getChainData } from "src/redux/actions/chainActions";
import { getLaunchpadData } from "src/redux/actions/launchpadAction";
import { getCurrencyData } from "src/redux/actions/currencyAction";
import { BASE_API_URL } from "src/configs/constants";
export const fetchData = async (dispatch) => {
  axios.get(`${BASE_API_URL}/api/chains`).then((res) => dispatch(getChainData(res.data)));
  axios.get(`${BASE_API_URL}/api/launchpads?populate[tokenInfo][populate]=*`).then((res) => {
    dispatch(getLaunchpadData(res.data));
  });
  axios.get(`${BASE_API_URL}/api/currencies`).then((res) => {
    console.log("@res", res);
    dispatch(getCurrencyData(res.data));
  });
};
