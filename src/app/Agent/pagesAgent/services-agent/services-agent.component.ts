import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ClientService} from '../../../service/client.service';
import {IClient} from '../../../models/Client';
import {AgentservicesService} from '../../../service/agentservices.service';
import {IAgentServices} from '../../../models/AgentServices';

@Component({
  selector: 'app-services-agent',
  templateUrl: './services-agent.component.html',
  styleUrls: ['./services-agent.component.scss']
})
export class ServicesAgentComponent implements OnInit {

  constructor(private router: Router, private agentservices: AgentservicesService) { }

  services: IAgentServices[] = [];


  ngOnInit(): void {

  }
  addService() {
    this.router.navigate(['/add-service']);
  }




  getAllServicesByAgent(): void {
    this.agentservices.getAllServices().subscribe(
        (services: IAgentServices[]) => {
          this.services = services;
        },
        (error) => {
          console.error('Une erreur s\'est produite lors de la récupération des agents :', error);
        }
    );
  }

  deleteService(id: number) {
    console.log(id);
    this.agentservices.deleteService(id).subscribe(
        () => {
          console.log('Client deleted successfully.');
          this.getAllServicesByAgent();
        },
        (error) => {
          console.error('An error occurred while deleting the agent:', error);
        }
    );
  }

  updateService(id: number) {
    this.router.navigate(['/edit-agent', id]);
  }

}
