import { Component, OnInit } from '@angular/core';
import { IPeriod } from 'src/app/models/period';
import { ISoiResume } from 'src/app/models/soiresume';
import { PeriodService } from 'src/app/services/period.service';
import { SoiresumeService } from 'src/app/services/soiresume.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  public resume: ISoiResume[] = [];
  public currentPeriod: IPeriod = <IPeriod>{};

  constructor(private periodService: PeriodService,
    private soiResumeService: SoiresumeService) { }

  ngOnInit(): void {
      this.getCurrentPeriod();
      this.getSoiResume();
  }

  getCurrentPeriod() {
    this.periodService.getCurrentPeriod().subscribe((period) => {
      this.currentPeriod = period;
    });
  }

  getSoiResume() {
    this.soiResumeService.getSoiResume().subscribe((soiResume) => {
      this.resume = soiResume;
    });
  }
}
