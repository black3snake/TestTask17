export class Person {
    #birthday;
    constructor(firstName, lastName, birthday) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.#birthday = birthday;
    }

    get birthday() {
        return this.#birthday;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getAge() {
        const today = new Date();
        const birthDate = new Date(this.#birthday);
        let age = today.getFullYear() - birthDate.getFullYear();

        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--; // Уменьшаем на 1, если день рождения еще не наступил
        }

        // Форматируем вывод в зависимости от возраста
        if (age % 10 === 1 && age % 100 !== 11) {
            return `${age} год`;
        } else if (age % 10 >= 2 && age % 10 <= 4 && !(age % 100 >= 12 && age % 100 <= 14)) {
            return `${age} года`;
        } else {
            return `${age} лет`;
        }

    }
}

