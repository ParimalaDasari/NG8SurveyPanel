import {IObserver, ISubject} from '../interfaces/ITestInterfaces';

export class Subject implements ISubject {
    constructor(){}
    private observers:Observer[] = [];
    public subscribe(observer:Observer) {
        this.observers.push(observer)
    }
    unsubscribe(observer:Observer) {
        this.observers = this.observers.filter((element)=>element.id!==observer.id);
        console.log(this.observers);
    }
    notify() {
        this.observers.forEach(observer => {
            observer.update();
        })
    }
}


export class Observer implements IObserver{
    id :number;
    constructor(id:number){
        this.id= id;
    }
    update(): void {
        console.log("This is observer providing update on job : "+this.id);
    }

}