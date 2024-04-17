import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class Test {

    nowSecond?: number;
    constructor() {
        this.nowSecond = new Date().getMilliseconds();
    }

    public get getNowSecond(): number {
        return this.nowSecond!;
    }

}