import { Component, OnInit } from '@angular/core';
import { Allocation } from './models/allocations/allocation';
import { Course } from "./models/courses/course";
import { AllocationService } from './services/allocations/allocation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-professor-allocation';
  allocations?: Allocation[];
  currentAllocation?: Allocation;
  currentIndex = -1;
  id = '';

  constructor(private allocationService: AllocationService) { }


  ngOnInit(): void {
    this.retrieveAllocation();
  }


  retrieveAllocation(): void {
    this.allocationService.getAll()
      .subscribe(
        data => {
          this.allocations = data;
        },
        error => {
          console.log(error);
        });
  }
  searchId(): void {
    this.currentAllocation = undefined;
    this.currentIndex = -1;

    this.allocationService.get(this.id)
      .subscribe(
        data => {
          this.currentAllocation = data;
        },
        error => {
          console.log(error);
        });
  }

  setActiveAllocation(allocation: Allocation, index: number): void {
    this.currentAllocation = allocation;
    this.currentIndex = index;
    console.log(allocation);
  }



}


