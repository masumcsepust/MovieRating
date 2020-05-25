import { Component, OnInit,Input } from '@angular/core';
import { Movie } from '../../models/Movie';
import {FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'app-movie-forms',
  templateUrl: './movie-forms.component.html',
  styleUrls: ['./movie-forms.component.css']
})
export class MovieFormsComponent implements OnInit {

  @Input() movie: Movie;
  movieForm= new FormGroup ({
    title: new FormControl(''),
    description: new FormControl('')
  })

  constructor() { }

  ngOnInit() {
  }
  saveForm()
  {
    console.log("new: ",this.movieForm.value);
  }

}
