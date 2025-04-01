import {Person} from "./person.js";

export class Worker extends Person {
    #rate = 1000;
    #days = 0;
    constructor(firstName, lastName, birthday, position) {
        super(firstName, lastName, birthday);
        this.position = position;

    }

    get rate() {
        return this.#rate;
    }
    set rate(value) {
        value > 1000 ? this.#rate = value : this.#rate;
    }

    addDays(value) {
        const today = new Date();
        const options = {month:'numeric'}
        // получим число дня нашего месяца, нулевое число месяца.
        const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

        if (this.#days + value <= daysInMonth && value > 0) {
            this.#days += value;
            console.log(`${this.getFullName()}: отработанных дней в ${today.toLocaleDateString("ru-RU", options)} месяце : ${this.#days}`);
        } else if (value === 0) {
            console.log(`${this.getFullName()}: количество добавляемых дней: 0 \"нельзя добавлять\". Итого: ${this.#days} отработанных дней`);
        } else {
            console.log(`${this.getFullName()}: количество добавляемых дней: ${value} вне допустимого диапазона. Ошибка`);
        }
    }

    getSalary() {
        const today = new Date();
        const birthDate = new Date(this.birthday);
        let salary = 0;
        if(today.getMonth() + 1 === birthDate.getMonth() + 1) {
            return (this.rate * this.#days) * 1.10;
        } else {
            return this.rate * this.#days;
        }
    }

    static whoWorkedMore(workers) {
        let maxDays = -1;
        const topWorkers = [];
        workers.forEach(worker => {
            if( worker.#days > maxDays ) {
                maxDays = worker.#days;
                topWorkers.length = 0;
                topWorkers.push(worker);
            } else if (worker.#days === maxDays) {
                topWorkers.push(worker);
            }
        });
        if (topWorkers.length > 0) {
            const names = topWorkers.map(worker => worker.getFullName()).join(', ');
            console.log(`Больше всех отработал(и) ${names}. Количество рабочих дней - ${maxDays}.`);
        }
    }

    static whoIsYounger(workers) {
        let minAge = 100;
        const youngWorkers = [];
        workers.forEach(worker => {
            let age = parseInt(worker.getAge().split(' ')[0]);
            if( age < minAge ) {
                minAge = age;
                youngWorkers.length = 0;
                youngWorkers.push(worker);
            } else if (age === minAge) {
                youngWorkers.push(worker);
            }
        });
        if (youngWorkers.length > 0) {
            const names = youngWorkers.map(worker => {
                let string = '';
                string = worker.getFullName() + ' ' + worker.getAge();
                return string
            }).join(', ');
            if(youngWorkers.length > 1) {
                console.log(`Cамые молодые работники: ${names}.`);
            } else {
                console.log(`Cамый молодой работник: ${names}.`);
            }
        }

    }
}
