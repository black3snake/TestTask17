import {Worker} from "./worker.js";

const workers = [];
const worker = new Worker('Иван','Забиака','08-12-1976', 'Учащийся');
const worker1 = new Worker('Руслан','Хоботов','04-10-2006', 'Учащийся');
const worker2 = new Worker('Инокентий','Мороз','01-21-2003', 'Учащийся');
const worker3 = new Worker('Зефир','Радригес','11-01-2007', 'Учащийся');
const worker4 = new Worker('Виталий','Завьялов','07-04-2007', 'Учащийся');

worker1.rate = 700;
worker2.rate = 1200;
worker4.rate = 1500;

worker.addDays(50);
worker1.addDays(20);
worker2.addDays(25);
worker3.addDays(25);

worker4.addDays(10);
worker4.addDays(-2);

// Можно так сделать положить объекты в массив
workers.push(worker);
workers.push(worker1);
workers.push(worker2);
workers.push(worker3);
workers.push(worker4);
Worker.whoWorkedMore(workers);
// или так
// Worker.whoWorkedMore(worker, worker1, worker2, worker3);

Worker.whoIsYounger(workers);

workers.forEach(worker => {
    console.log(`зарплата ${worker.getFullName()} - ${worker.getSalary()} рублей`);
})

