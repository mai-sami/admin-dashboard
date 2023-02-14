const { default: axios } = require("axios");
const { useState } = require("react");
const { useHistory } = require("react-router-dom");
const { toast } = require("react-toastify");
const { default: API_URL } = require("./Api");

const UseApi = () => {
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
            history.push('/login')
        }
    }
    const RegisterAction = async (userData) => {
        try {
            setIsLoading(true);
            const response = await axios.post(`${API_URL}/users/signup`, userData);
            setIsLoading(false);
            toast.success('تم انشاء الحساب بنجاح ', {
                icon: "👏",
                disableTimeOut: false,
                titleClass: 'toaster_title',
                messageClass: 'toaster_messge',
                timeOut: 5000,
                closeButton: true
            })
            history.push('/')

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