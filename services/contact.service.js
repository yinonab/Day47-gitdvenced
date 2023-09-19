
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

const STORAGE_KEY = 'contactDB'
// const PAGE_SIZE = 3
_createContact()

export const contactService = {
    query,
    getById,
    save,
    remove,
    getEmptyContact,
    // getDefaultFilter
}

function query() {
    // return axios.get(BASE_URL).then(res => res.data)
    return storageService.query(STORAGE_KEY)
}


function getById(contactId) {
    return storageService.get(STORAGE_KEY, contactId)
}

function remove(contactId) {
    // return Promise.reject('Not now!')
    return storageService.remove(STORAGE_KEY, contactId)
}

function save(contact) {
    if (contact._id) {
        return storageService.put(STORAGE_KEY, contact)
    } else {
        // when switching to backend - remove the next line
        return storageService.post(STORAGE_KEY, contact)
    }
}


function getEmptyContact() {
    return {
        firstName: utilService.makeLorem(),
        lastName: utilService.makeLorem(),
        email: utilService.makeLorem()+'@gmail.com',
        phone:'052-'+ utilService.makePhoneNumber(),
    }
}

// function getDefaultFilter() {
//     return { txt: '', isDone: false }
// }
function _createContact() {
    let contacts = storageService.loadFromStorage(STORAGE_KEY)
    if (!contacts || !contacts.length) {
        contacts = [
            {
                _id:utilService.makeId(),
                firstName: 'Yinon',
                lastName: 'Abarjel',
                email: 'yinon@gmail.com',
                phone: '0523406534',

            },
            {
                _id:utilService.makeId(),
                firstName: 'Oz',
                lastName: 'Hodeda',
                email: 'oz@gmail.com',
                phone: '0523406535',

            },
            {
                _id:utilService.makeId(),
                firstName: 'Itamar',
                lastName: 'Sasson',
                email: 'itamar@gmail.com',
                phone: '0523406536',

            }

        ]
        storageService.saveToStorage(STORAGE_KEY, contacts)
    }
}

