import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './time_convert.component.html'
})

export class TimeConvertComponent {
    date = new Date().getTime();

    formatedDate() {
        var d = new Date();
        d.setTime(this.date);
        return d.toLocaleString();
    }
}