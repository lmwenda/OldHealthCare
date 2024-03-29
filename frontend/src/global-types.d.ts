import React from "react";

// Declaring Image File Types

declare module "*.svg";
declare module "*.jpeg";
declare module "*.png";

// Declare React Types

declare namespace ReactTypes {
    type RFE = React.FormEvent;
    type RCE = React.ChangeEvent<HTMLInputElement>;
}

// Declare AxiosTypes

declare namespace AxiosTypes{
    
    interface UserLoginTypes{
        message: string
    }

    interface UserRegisterTypes{
        message: string
    }
}
