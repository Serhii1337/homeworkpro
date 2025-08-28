const contactsBook = {
    contacts: [
        {name: `Bill`, tel: `+380992728222`, mail: `bill@gmail.com`},
        {name: `Alex`, tel: `+380993344555`, mail: `alex@gmail.com`},
        {name: `Anna`, tel: `+380997788999`, mail: `anna@gmail.com`},
        {name: `Robert`, tel: `+380991122333`, mail: `robert@gmail.com`},
    ],
    
    findContact(name) {
        return this.contacts.find(contact => contact.name.toLowerCase(  ) === name.toLowerCase()) || `Контант не знайдено`
    },
    
    addContact(name, tel, mail) {
        this.contacts.push({name, tel, mail})
        return `Contact ${name} added`
    },
}

console.log(contactsBook.findContact(`bill`));

console.log(contactsBook.addContact(`Andrew`, `+380996677888`, `andrew@gmail.com`))

