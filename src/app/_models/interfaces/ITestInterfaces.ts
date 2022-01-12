// import { Observer } from "rxjs"

import { Observer } from "../concretes/Testfile"


export interface ISubject {
    subscribe(observer: Observer):void
    unsubscribe(observer: Observer):void
    notify():void
}

export interface IObserver {
    update():void
}