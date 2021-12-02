import React, {ChangeEvent, useEffect, useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {bodyType, requestAPI} from "./RequestAPI";
import {AxiosError} from "axios";

function Request() {
    const [checked, setChecked] = useState<boolean>(false)
    const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)


    const [result, setResult] = useState<string>("")
    const [errorShow, setError] = useState<string>("")

    const body: bodyType = {success: checked}

    useEffect(() => {
        requestAPI.postRequest(body)
            .then((res) => {
                const result = res.data.errorText
                console.log("RESULT", result)
                setResult(result)
            })
            .catch((error: AxiosError) => {
                const errorShow =error.response ? error.response.data.errorText : error.message ;
                console.log("ERROR", error.response ? error.response.data.errorText : error.message)
                setError(errorShow)
            })
    }, [checked])


    const showResult = () => {
        if (result) {
            alert(result)
        } else {
            alert(errorShow)
        }
    }


    return (
        <div>
            <SuperButton onClick={showResult}>
                show result
            </SuperButton>

            <SuperCheckbox checked={checked}
                           onChange={onChangeChecked}/>
        </div>
    );
}

export default Request;
