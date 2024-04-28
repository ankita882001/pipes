import { Pipe, PipeTransform } from '@angular/core';
import { Iplayer } from './models/players.interface';

@Pipe({
  name: 'filterPlayers'
})
export class FilterPlayersPipe implements PipeTransform {

  transform(value: Iplayer[] , searchVal:string,playerCategory:string):Iplayer[]{
    if(!searchVal){
      return value;
    }
   if(!value){
    return[]
   }

  let filterAr=value.filter(player=>{
     return  player.team.toLowerCase().includes(searchVal)||
     player.name.toLowerCase().includes(searchVal)||
    player.odiRuns.toString().includes(searchVal)||
   player.testRuns.toString().includes(searchVal)||
    player.yearDebut.toString().includes(searchVal)
  })
  return filterAr;
}}



