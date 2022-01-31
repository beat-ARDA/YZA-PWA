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
  }

  getCurrentPeriod() {
    this.periodService.getCurrentPeriod().subscribe((period) => {
      this.currentPeriod = period;
      this.savePeriodId(this.currentPeriod.id);
      this.getSoiResume();
    });
  }

  getSoiResume() {
    let periodId = this.getPeriodId();

    this.soiResumeService.getSoiResume(periodId).subscribe((soiResume) => {
      this.resume = soiResume;
    });
  }

  savePeriodId(periodId: string) {
    localStorage.setItem('periodId', periodId);
  }

  getPeriodId(): string {
    let periodId = localStorage.getItem('periodId');
    return periodId == null ? '': periodId;
  }
}
