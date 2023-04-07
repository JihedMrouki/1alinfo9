import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';

@Component({
  selector: 'app-articles-component',
  templateUrl: './articles-component.component.html',
  styleUrls: ['./articles-component.component.css']
})
export class ArticlesComponentComponent implements OnInit {
  listArticle: Article[] = [
    {
      title: "Le championship du monde",
      contenu: "le championship du monde de cette anneé",
      auteur: "Med Taher",
      date: "12/12/2015",
      category: "Sport"
    },
    {
      title: "les nouveaux",
      contenu: "les nouveaux parents",
      auteur: "ahmed said",
      date: "12/12/2018",
      category: "Education"
    },


  ]
  constructor() { }

  ngOnInit(): void {
  }

}
