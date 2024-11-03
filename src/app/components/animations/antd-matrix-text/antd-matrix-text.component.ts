import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-antd-matrix-text',
  templateUrl: './antd-matrix-text.component.html',
  styleUrls: ['./antd-matrix-text.component.scss']
})
export class AntdMatrixTextComponent {

  text: string[] = [];

  private matrixText: string = "Bienvenido a la matrix. Prepárate para explorar...";

  ngOnInit(): void {
    this.text = this.matrixText.split(' '); // Divide el texto en caracteres individuales
  }

}
