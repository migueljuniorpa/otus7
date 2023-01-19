import {Component, OnInit} from '@angular/core';
import {PilotsService} from "../../services/pilots.service";

@Component({
  selector: 'app-pilots',
  templateUrl: './pilots.component.html',
  styleUrls: ['./pilots.component.scss']
})
export class PilotsComponent implements OnInit {

  listOfColumns: ColumnItem[] = [
    {
      name: 'ID',
      compare: null,
      priority: false,
      width: 'auto'
    },
    {
      name: 'Name',
      compare: (a: DataItem, b: DataItem) => a.givenName.localeCompare(b.givenName),
      priority: 1,
      width: 'auto'
    },
    {
      name: 'Sobrenome',
      compare: (a: DataItem, b: DataItem) => a.familyName.localeCompare(b.familyName),
      priority: 2,
      width: 'auto'
    },
    {
      name: 'Data de nascimento',
      compare: (a: DataItem, b: DataItem) => a.dateOfBirth.localeCompare(b.dateOfBirth),
      priority: 3,
      width: 'auto'
    },
    {
      name: 'Nacionalidade',
      compare: (a: DataItem, b: DataItem) => a.nationality.localeCompare(b.nationality),
      priority: 4,
      width: 'auto'
    },
    {
      name: 'Biografia',
      compare: null,
      priority: false,
      width: '350px'
    },
    {
      name: 'Opções',
      compare: null,
      priority: false,
      width: '80px'
    }
  ];

  listOfData: DataItem[] = [];

  constructor(private pilotsService: PilotsService) {}

  ngOnInit() {
    this.getPilots()
  }

  getPilots() {
    this.pilotsService.getPilots().subscribe(result => {
      this.listOfData = result.MRData.DriverTable.Drivers;
    })
  }
}

// TODO CRIAR INTERFACE PARA SEPARAR
interface DataItem {
  driverId: string,
  givenName: string,
  familyName: string,
  dateOfBirth: string,
  nationality: string,
  url: string,
}

interface ColumnItem {
  name: string,
  compare: any,
  priority: any,
  width: string
}
