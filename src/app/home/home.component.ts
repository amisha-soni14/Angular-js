import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';

import { interval, Observable } from 'rxjs';
import { Subscription } from 'rxjs-compat/Subscription'
import { map, filter } from 'rxjs/operators';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {




  constructor( private firstObsSubscription: Subscription ) {
  }

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });
    const customIntervalObservable = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 5) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater 3!'));
        }
        count++;
      }, 1000);
    });


    this.firstObsSubscription = customIntervalObservable.pipe(filter((data :number) => {
        return data > 0;
      }),
      map((data: number) => {
        return 'Round: ' + (data + 1);
      }))
      .subscribe((data:number) => {
        console.log(data);
      },
      (error:any) => {
        console.log(error);
        alert(error.message);
      },
      () => {
        console.log('Completed!');
      });
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }

}
