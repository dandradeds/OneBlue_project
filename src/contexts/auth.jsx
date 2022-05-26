import React, {useState, useEffect, createContext} from 'react';
import { api } from "../Services/api"

import Swal from 'sweetalert2'

import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-right',
        customClass: {
          popup: 'colored-toast'
        },
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true
      }) 

    const navigate = useNavigate()
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const recoveredUser = localStorage.getItem("user")

        if(recoveredUser) {
            setUser(JSON.parse(recoveredUser));
        }
        
        setLoading(false)
    }, [])


     async function login (email, password) {

        try {
            const loggedUser = {
                id: "123", 
                email, 
            }
            let response = await api.post("login",{
              name: email,
              password: password
            })

            if (response.status == 200){
                Toast.fire({
                    icon: 'success',
                    title: 'Success'
                })

                localStorage.setItem("user", JSON.stringify (loggedUser))
                setUser(loggedUser)
                navigate("/")

            }
      
            console.log(response)
           } catch {
            Toast.fire({
                icon: 'error',
                title: 'error'
            
           })

        }
    }

    const logout = () => {
        console.log("logout")
        localStorage.removeItem("user")
        setUser(null);
        navigate("/login")
    }

    return (
        <AuthContext.Provider 
        
        value={{authenticated: !!user, user, loading, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
