import {useState} from 'react'

const useLocalStorage=(key="", initialValue="")=>{
    
const [state,setState] = useState(()=>{
    try{
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item): initialValue

    }catch(err){
        return initialValue
    }
})

const setLocalStorageState= newState=>{
    try{
const newStateValue = typeof newState ==='function'? newState(state):newState;
setState(newStateValue);
window.localStorage.setItem(key,JSON.stringify(newStateValue))
    }catch(err){
        console.log(`Unable to store new value for ${key} in local Storage`)
    }
}
return [state, setLocalStorageState]
}
export default useLocalStorage