import { Component } from '@angular/core';


@Component({
  templateUrl: 'app/blog/blog.html',
  styleUrls: ['app/blog/blog.css'],
})
export class blogComponent {
	
	ngOnInit() { 
        window.scrollTo(0, 0)
    }
}


