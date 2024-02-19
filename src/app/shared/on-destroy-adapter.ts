import { Component, Injectable, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

@Injectable()
export class OnDestroyAdapter implements OnDestroy {
    subSink: Subscription = new Subscription();

    ngOnDestroy(): void {
        this.subSink.unsubscribe();
    }
}