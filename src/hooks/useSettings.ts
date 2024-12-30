import { useState } from "react"

const useSettings = () => {
    const [viewSettings, SetViewSettings] = useState<boolean>(false);
    const [InputSettings, SetInputSettings] = useState<string>("");


    return {
        InputSettings,
        SetInputSettings,
        viewSettings,
        SetViewSettings
    }
}

export default useSettings