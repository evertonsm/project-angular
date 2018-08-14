import { NgModule } from '@angular/core';

import { ThemeModule } from '../../../@theme/theme.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { Station1Component } from './station1.component'
import { TemperatureComponent } from './temperature/temperature.component';
import { TemperatureDraggerComponent } from './temperature/temperature-dragger/temperature-dragger.component';
import { Temperature1Component } from './temperature-1/temperature-1.component';
import { TemperatureDragger1Component } from './temperature-1/temperature-dragger-1/temperature-dragger-1.component';


@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
   
  ],
  declarations: [
    TemperatureComponent,
    TemperatureDraggerComponent,
    Station1Component,
    Temperature1Component,
    TemperatureDragger1Component,

  ],
})
export class Station1Module { }
