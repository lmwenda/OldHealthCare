const BASE_URL = "http://localhost:5000/api";

enum session_endpoints {
    GET_SESSION = "/sessions/session/:session_id", // SESSION_ID REQUIRED
    POST_SESSION = "/sessions/create",
    UPDATE_SESSION = "/sessions/update/session/:session_id", // SESSION_ID REQUIRED
    DELETE_SESSION = "/sessions/delete/session/:session_id", // SESSION_ID REQUIRED
    GET_ALL_SESSIONS = "/sessions/get/all",
    GET_ALL_USER_SESSIONS = "/user/get/all"
}

enum user_endpoints {
    GET_USER = "/users/user/:user_id",
    POST_USER = "/users/create",
    UPDATE_USER = "/users/update/user/:user_id", // USER_ID REQUIRED
    DELETE_USER = "/users/delete/user/:user_id", // USER_ID REQUIRED
    GET_ALL_USERS = "/users/get/all",
}

export { session_endpoints, user_endpoints, BASE_URL };