import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
    templateUrl: 'app/home/home.html',
    directives: [ROUTER_DIRECTIVES],
    styleUrls: ['app/home/home.css'],
})

export class HomeComponent implements OnInit { 

    ngOnInit() { 
        window.scrollTo(0, 0)
    }

}

