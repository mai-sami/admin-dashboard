import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import API_URL from "./Api";

const UseAuth = () => {
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const loginAction = async (userData) => {
        try {
            setIsLoading(true);
            const response = await axios.post(`${API_URL}/users/login`, userData);
            setIsLoading(false);
            toast.success('تم تسجيل الدخول بنجاح ', {
                icon: "👏",
                disableTimeOut: false,
                titleClass: 'toaster_title',
                messageClass: 'toaster_messge',
                timeOut: 5000,
                closeButton: true
            })
            localStorage.setItem("user", JSON.stringify(response.data));
            localStorage.setItem('token', response.data.token);
            history.push('/')

        }
        catch (e) {
            setIsLoading(false);
            toast.error('البريد الالكتروني او كلمة المرور غير صحيحة', {
                icon: "😔",
                disableTimeOut: false,
                titleClass: 'toaster_title',
                messageClass: 'toaster_messge',
                timeOut: 5000,
                closeButton: true,
            })
            setError(e.message);
            console.log(e.message)
            history.push('/login')
        }
    }
    const RegisterAction = async (userData) => {
        try {
            setIsLoading(true);
            const response = await axios.post(`${API_URL}/users/signup`, userData);
            setIsLoading(false);
            console.log(response)
            toast.success('تم انشاء الحساب بنجاح ', {
                icon: "👏",
                disableTimeOut: false,
                titleClass: 'toaster_title',
                messageClass: 'toaster_messge',
                timeOut: 5000,
                closeButton: true
            })
            history.push('/login')

        }
        catch (e) {
            setIsLoading(false);
            toast.error('تم استخدام هذا الايميل مسبقا حاول مرة أخرى ', {
                icon: "😔",
                disableTimeOut: false,
                titleClass: 'toaster_title',
                messageClass: 'toaster_messge',
                timeOut: 5000,
                closeButton: true,

            })
            setError(e.message);
            history.push('/register')
        }
    }
    return { loginAction, isLoading, RegisterAction, error }
}
export default UseAuth
