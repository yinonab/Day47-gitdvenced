import { loadContact } from "../store/actions/contact.action.js"

const { useEffect } = React
// const { useSelector } = ReactRedux

export function ContactIndex() {
    // const { contacts } = useSelector(storeState => storeState)


    useEffect(() => {
        loadContact()
    }, [])


}