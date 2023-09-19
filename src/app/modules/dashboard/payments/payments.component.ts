import { Component } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent {
  colleges: college[] = [
    { id: 1, Fee_Structure: 'kct', Weekly_Report: 'saravanampatti', followupnotification: 'A' },
    { id: 2, Fee_Structure: 'psg', Weekly_Report: 'peelemedu', followupnotification: 'B' },
    { id: 3, Fee_Structure: 'Anthony Russo, Joe Russo', Weekly_Report: 'Scarlett Johansson, Elizabeth Olsen, Chris Evans', followupnotification: 'C' },
    { id: 4, Fee_Structure: 'Bryan Singer', Weekly_Report: 'Jennifer Lawrence, Olivia Munn, Oscar Isaac', followupnotification: 'D' },

  ]
}
class college {
  id!: number;
  Fee_Structure!: string;
  Weekly_Report!: string;
  followupnotification!: string;
}

