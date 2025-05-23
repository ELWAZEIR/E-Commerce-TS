import { isAxiosError } from "axios"

const axiosErrorHandler =(error:unknown)=>{
    if (isAxiosError(error)) {
        return error.response?.data||error.message||error.response?.data.message
    }else{
        return "An unexpected error"
    }
}

export default axiosErrorHandler 