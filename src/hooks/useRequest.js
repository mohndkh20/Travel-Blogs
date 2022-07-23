import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"

export const useRequest = () => {
    const ctx = useContext(AuthContext)
    const navigate = useNavigate()
    const sendRequest = (url, headers = {}, body = {}, config = {}, method = 'GET' ) => {
        let options = {
            headers: {}
        };
        if (body?.constructor.name === 'FormData') {
            options.body = body
        } else if (body?.constructor.name === 'object') {
            options['body'] = {...body}
        }
        options['method'] = method
        if (config?.auth) {
            options['headers']['Authorization'] = 'Bearer ' + ctx?.token
        };
        if (config?.type === 'json') {
            options['headers']['Content-Type'] = 'application/json'
            options['body'] = JSON.stringify(body)
        }
        options['headers'] = { ...options.headers, ...headers }

        return fetch(url, options)
            .then(response => {
                if (response.status === 401) {
                    navigate('/login')
                    return
                }
                return response.json().then(data => {
                    return data
                })
            })
            .catch(e => console.log(e))
    };
    return sendRequest
}
