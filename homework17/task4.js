class House {
    constructor(house) {
        if(!house) {
            console.log(`Назва будинку вказана не вірно`)
            return
        }

        this.house = house
        this.appartments = new Map()
    }

    addAppartment(appartment) {
        if(!(appartment instanceof Appartment)) {
            console.log(`Не є об'єктом Appartment`)
            return
        }
        this.appartments.set(appartment.number, appartment)
    }

    showInfo() {
        if (!this.house) {
            console.log(`Назва будинку вказана не вірно`)
            return;
        }

        console.log(`Будинок: ${this.house}`)

        this.appartments.forEach((appartment, number) => {
            console.log(`Квартира №${number}, Кількість кімнат: ${appartment.roomsAmount}`)

            if (appartment.residents.size === 0) {
                console.log(`Мешканців немає`)
            } else {
                console.log(`Мешканці: ` + [...appartment.residents])
            }
        });
    }
}

class Appartment {
    constructor(number, roomsAmount) {
        if(!number || !roomsAmount) {
            console.log(`Дані про квартиру вказано не вірно`)
            return
        }

        this.number = number
        this.roomsAmount = roomsAmount
        this.residents = new Set()
    }

    addResident(fullname) {
        if(!fullname) {
            console.log(`Ім'я вказано не вірно`)
            return
        }
        this.residents.add(fullname)
    }
}



const house1 = new House(`Будинок №1`)

const appartment1_1 = new Appartment(101, 3)
const appartment1_2 = new Appartment(102, 4)

appartment1_1.addResident(`Іван Іванов`)
appartment1_1.addResident(`Марія Іванова`)

appartment1_2.addResident(`Микола Василенко`)
appartment1_2.addResident(`Наталія Василенко`)
appartment1_2.addResident(`Максим Василенко`)

house1.addAppartment(appartment1_1)
house1.addAppartment(appartment1_2)

house1.showInfo()



const house2 = new House(`Будинок №2`)

const appartment2_1 = new Appartment(103, 2)

appartment2_1.addResident(`Тарас Шевченко`)

house2.addAppartment(appartment2_1)

house2.showInfo()