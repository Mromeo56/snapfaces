import {Component, OnDestroy, OnInit} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import {interval, Observable, Subject} from "rxjs";
import {takeUntil, tap} from "rxjs/operators";

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit, OnDestroy {
  faceSnaps$!: Observable<FaceSnap[]>;
  private destroy$: Subject<boolean> | undefined;

  constructor(private faceSnapsService: FaceSnapsService) { }

  ngOnInit(): void {
    this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();
  }

  ngOnDestroy(): void {
    // @ts-ignore
    this.destroy$.next(true);
  }

}
