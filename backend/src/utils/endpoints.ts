enum session_endpoints {
    GET_SESSION = "/session/:session_id", // SESSION_ID REQUIRED
    POST_SESSION = "/create",
    UPDATE_SESSION = "/update/session/:session_id", // SESSION_ID REQUIRED
    DELETE_SESSION = "/delete/session/:session_id", // SESSION_ID REQUIRED
    GET_ALL_SESSIONS = "/get/all",
}

enum user_endpoints {
    GET_USER = "/user/:user_id",
    POST_USER = "/create",
    UPDATE_USER = "/update/user/:user_id", // USER_ID REQUIRED
    DELETE_USER = "/delete/user/:user_id", // USER_ID REQUIRED
    GET_ALL_USERS = "/get/all",
}

export { session_endpoints, user_endpoints };