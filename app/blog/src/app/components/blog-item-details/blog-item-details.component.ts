
import {Component, OnInit} from '@angular/core';
import {DataService} from 'C:/Users/root/Desktop/11/IAI_Lab9/app/blog/src/app/services/data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-blog-item-details',
  templateUrl: './blog-item-details.component.html',
  styleUrls: ['./blog-item-details.component.css']
})
export class BlogItemDetailsComponent implements OnInit {

  public image = '';
  public text: string;
  public id: number;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
  }

  ngOnInit() {
	let id: string;
	this.route.paramMap
  	   .subscribe(params => {
    	   id = params.get('id');
  	});
	if (id) {
  	   this.dataService.getById(id).subscribe(res => {
    	   this.image = res['image'];
    	   this.text = res['text'];
  	});
	} else {
  	   this.id = 1;
	}
  }
}

