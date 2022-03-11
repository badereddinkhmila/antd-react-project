import { API_BASE_URL, POLL_LIST_SIZE } from '../constants';
import axios from 'axios';

const request = (options, secure = false) => {
  // const headers = new Headers({
  //   'Content-Type': 'application/json',
  // });
  let headers = { 'Content-Type': 'application/json' };
  if (secure && JSON.parse(localStorage.getItem('persist:auth')).accessToken.replaceAll('"', '')) {
    headers = {
      ...headers,
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('persist:auth')).accessToken.replaceAll('"', ''),
    };
  }

  const defaults = { headers: headers };
  options = Object.assign({}, defaults, options);
  // return axios(options).then((response) => {
  //   console.log(response);
  //   if (response.status !== 201) {
  //     return Promise.reject(response.data);
  //   }
  //   return response.data;
  // });

  return fetch(options.url, options).then((response) =>
    response.json().then((json) => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    })
  );
};
export function login(loginRequest) {
  return request({
    url: API_BASE_URL + '/auth/signin',
    method: 'POST',
    body: JSON.stringify(loginRequest),
    // data: JSON.stringify(loginRequest),
  });
}

export function signup(signupRequest) {
  return request({
    url: API_BASE_URL + '/auth/signup',
    method: 'POST',
    body: JSON.stringify(signupRequest),
  });
}

export function checkUsernameAvailability(username) {
  return request({
    url: API_BASE_URL + '/user/checkUsernameAvailability?username=' + username,
    method: 'GET',
  });
}

export function checkEmailAvailability(email) {
  return request({
    url: API_BASE_URL + '/user/checkEmailAvailability?email=' + email,
    method: 'GET',
  });
}

export function getCurrentUser() {
  if (JSON.parse(localStorage.getItem('persist:auth')).accessToken) {
    return Promise.reject('No access token set.');
  }

  return request(
    {
      url: API_BASE_URL + '/users?me=true',
      method: 'GET',
    },
    true
  );
}

export function getUserProfile(username) {
  return request({
    url: API_BASE_URL + '/users/' + username,
    method: 'GET',
  });
}
export function getAllPolls(page, size) {
  page = page || 0;
  size = size || POLL_LIST_SIZE;

  return request({
    url: API_BASE_URL + '/polls?page=' + page + '&size=' + size,
    method: 'GET',
  });
}

export function createPoll(pollData) {
  return request({
    url: API_BASE_URL + '/polls',
    method: 'POST',
    body: JSON.stringify(pollData),
  });
}

export function castVote(voteData) {
  return request({
    url: API_BASE_URL + '/polls/' + voteData.pollId + '/votes',
    method: 'POST',
    body: JSON.stringify(voteData),
  });
}

export function getUserCreatedPolls(username, page, size) {
  page = page || 0;
  size = size || POLL_LIST_SIZE;

  return request({
    url: API_BASE_URL + '/users/' + username + '/polls?page=' + page + '&size=' + size,
    method: 'GET',
  });
}

export function getUserVotedPolls(username, page, size) {
  page = page || 0;
  size = size || POLL_LIST_SIZE;

  return request({
    url: API_BASE_URL + '/users/' + username + '/votes?page=' + page + '&size=' + size,
    method: 'GET',
  });
}
