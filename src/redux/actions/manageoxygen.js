import axios from 'axios';
import {url} from '../../constants';
export const addOxygen = 'addOxygen';
// export const deleteOxygen = 'deleteOxygen';
export const fetchOxygen = 'fetchOxygen';
export const removeOxygen = 'removeOxygen';
export const fetchOxygenReq = 'fetchOxygenReq';
export const makeOxygenReq = 'makeOxygenReq';
export const authorizedOxygenReq = 'authorizedOxygenReq';
export const removeOxygenReq = 'removeOxygenReq';
export const fetchUserOxygenReq = 'fetchUserOxygenReq';
export const getUserApprovedOxygen = 'getUserApprovedBed';
export const createOxygen = oxygenData => {
  return async dispatch => {
    var config = {
      method: 'post',
      url: `${url}/oxygen/addOxygen`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: oxygenData,
    };
    try {
      const {data} = await axios(config);
      dispatch({type: addOxygen, payload: data});
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
};

export const getOxygen = () => {
  var config = {
    method: 'get',
    url: `${url}/oxygen/fetchOxygen`,
    headers: {},
  };
  return async dispatch => {
    try {
      const {data} = await axios(config);
      dispatch({type: fetchOxygen, payload: data});
      //   console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteOxygen = oxygen_id => {
  return async dispatch => {
    var config = {
      method: 'delete',
      url: `${url}/oxygen/${oxygen_id}`,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const {data} = await axios(config);
      dispatch({type: addOxygen, payload: data});
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
};

export const getOxygenRequestList = () => {
  var config = {
    method: 'get',
    url: `${url}/getalloxygenrequests`,
    headers: {},
  };
  return async dispatch => {
    try {
      const {data} = await axios(config);
      console.log('dispatch successfull');
      dispatch({type: fetchOxygenReq, payload: data});
    } catch (err) {
      console.log(err);
    }
  };
};

export const getUserOxygenRequestList = userid => {
  var config = {
    method: 'get',
    url: `${url}/getUoxygenrequests/${userid}`,
    headers: {},
  };
  return async dispatch => {
    try {
      const {data} = await axios(config);
      console.log(data[0].request_type.title);
      dispatch({type: fetchUserOxygenReq, payload: data});
    } catch (err) {
      console.log(err);
    }
  };
};

export const userApprovedOxygenReq = id => {
  var config = {
    method: 'get',
    url: `${url}/apOxygen/${id}`,
  };
  return async dispatch => {
    try {
      const {data} = await axios(config);
      console.log(data[0].request_type.title);
      dispatch({type: getUserApprovedOxygen, payload: data});
    } catch (err) {
      console.log(err);
    }
  };
};

export const createOxygenReq = (oxygenId, userId, reqUrgency) => {
  var config = {
    method: 'post',
    url: `${url}/createoxygen/${oxygenId}/${userId}`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: reqUrgency,
  };
  return async dispatch => {
    try {
      const {data} = await axios(config);
      console.log(data);
      dispatch({type: makeOxygenReq, payload: data});
    } catch (err) {
      console.log(err);
    }
  };
};

export const acceptOxygenReq = oxygenreqId => {
  console.log(oxygenreqId);
  var config = {
    method: 'put',
    url: `${url}/apOxygen/${oxygenreqId}`,
    headers: {},
  };
  return async dispatch => {
    try {
      const {data} = await axios(config);
      console.log(data);
      dispatch({type: authorizedOxygenReq, payload: data});
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteOxygenReq = oxygenreqId => {
  console.log(oxygenreqId);
  var config = {
    method: 'delete',
    url: `${url}/oxygenReq/delete/${oxygenreqId}`,
    headers: {},
  };
  return async dispatch => {
    try {
      const {data} = await axios(config);
      console.log(data);
      dispatch({type: removeOxygenReq, payload: data});
    } catch (err) {
      console.log(err);
    }
  };
};
