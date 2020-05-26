import { Component, OnInit,Input } from '@angular/core';
import { Movie } from '../../models/Movie';
import {FormGroup, FormControl} from '@angular/forms';
import { ApiService } from '../../api.service';
@Component({
  selector: 'app-movie-forms',
  templateUrl: './movie-forms.component.html',
  styleUrls: ['./movie-forms.component.css']
})
export class MovieFormsComponent implements OnInit {

  movieForm;
  @Input() set movie(val: Movie) {
    this.movieForm= new FormGroup ({
      title: new FormControl(val.title),
      description: new FormControl(val.description)
    });
  }
  

  constructor( private apiService: ApiService) { }

  ngOnInit() {
  }
  saveForm()
  {
    this.apiService.createMovie(this.movieForm.value.title,this.movieForm.value.description).subscribe(
      result=>console.log(result),
      error=>console.log(error)
    );
  }

}
