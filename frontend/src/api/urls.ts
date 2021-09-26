const BASE_URL = "http://localhost:5000/api";

enum session_endpoints {
    GET_SESSION = "/sessions/session/:session_id", // SESSION_ID REQUIRED
    POST_SESSION = "/sessions/create",
    UPDATE_SESSION = "/sessions/update/session/:session_id", // SESSION_ID REQUIRED
    DELETE_SESSION = "/sessions/delete/session/:session_id", // SESSION_ID REQUIRED
    GET_ALL_SESSIONS = "/sessions/get/all"
}

enum user_endpoints {
    GET_USER = "/users/user/", // USER_ID REQUIRED
    POST_USER = "/users/create",
    UPDATE_USER = "/users/update/user/", // USER_ID REQUIRED
    DELETE_USER = "/users/delete/user/", // USER_ID REQUIRED
    GET_ALL_USERS = "/users/get/all",
    GET_ALL_USER_SESSIONS = "/users/sessions/get/all",
    LOGIN_USER = "/users/login"
}

export { session_endpoints, user_endpoints, BASE_URL };