import React from "react";

import {MainTemplate} from "@components/Templates";
import LoginForm from "@components/Organisms/Form/LoginForm";
import {ThemeLayout} from "@components/Templates/Layouts";

export default function loginPage(){
    return(
        <ThemeLayout>
            <LoginForm/>
        </ThemeLayout>
    )
}