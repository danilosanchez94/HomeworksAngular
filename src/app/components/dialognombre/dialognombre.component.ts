import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-dialognombre',
  templateUrl: './dialognombre.component.html',
  styleUrl: './dialognombre.component.scss'
})
export class DialognombreComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialognombreComponent>, @Inject(MAT_DIALOG_DATA) public data: {name: string}) {}

  ngOnInit() {
  }

  cancelar() {
    this.dialogRef.close();
  }
}
