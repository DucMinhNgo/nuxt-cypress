import { filter, map, Observable, range } from 'rxjs';
// import { filter, map } from 'rxjs/operators';

const observable = Observable.create(observer => {
    observer.next( 'hello' );
    observer.next( 'world' );
    observer.next({
        name: "Dustin"
    })
})

observable.subscribe(val => {
    console.log(val);
})

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Done")
//     }, 1000)
// })

// const obsvPromise = Observable.fromPromise(promise)
// obsvPromise.subscribe(val => console.log(val));

// const timer = Observable.timer(1000);
// timer.subscribe((val) => {
//     console.log("DONE");
// })

const observableRange = range(1, 200).pipe(
    filter(x => x%2 == 1),
    map(x => x + x)
);

observableRange.subscribe((val) => console.log(val));