import http from './http-service';

class ContactsService {

    getContacts(page = 1) {
        return http.get('/contacts', { params: { page }})
            .then(({ data }) => data)
    }
}

const contactsService = new ContactsService();
export default contactsService;