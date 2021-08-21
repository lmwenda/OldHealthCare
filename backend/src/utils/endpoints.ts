enum session_endpoints {
    GET_SESSION = "/session/:session_id", // SESSION_ID REQUIRED
    POST_SESSION = "/create",
    UPDATE_SESSION = "/update/session/:session_id", // SESSION_ID REQUIRED
    DELETE_SESSION = "/delete/session/:session_id", // SESSION_ID REQUIRED
    GET_ALL_SESSIONS = "/get/all",
}

export { session_endpoints };