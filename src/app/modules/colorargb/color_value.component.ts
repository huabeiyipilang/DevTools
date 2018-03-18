import { Component, OnInit, Input, forwardRef, SimpleChange } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

export const EXE_COLOR_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ColorValueComponent),
    multi: true
};

@Component({
    selector: 'color-argb-value',
    templateUrl: './color_value.component.html',
    styleUrls: ['colorargb.css'],
    providers: [EXE_COLOR_VALUE_ACCESSOR]
})

export class ColorValueComponent implements ControlValueAccessor, OnInit {
    @Input() label = "X";
    @Input() value: number = 0;
    percentHidden = true;

    constructor(public snackBar: MatSnackBar) { }

    ngOnInit() { 
    }

    writeValue(value: any) {
        if (value !== undefined) {
            this.value = value;
        }
    }

    ngOnChanges(changes: { [propName: string]: SimpleChange }) {
        this.snackBar.open("Invalid value!", null, { duration: 2000 });
        if (this.isPropChanged(changes, 'label')) {
            if (this.label === "A") {
                this.percentHidden = false;
            }
        } else if (this.isPropChanged(changes, 'value')) {
            if (!this.isAvailableValue(this.value)) {
                this.snackBar.open("Invalid value!");
                this.value = changes['value'].previousValue;
            }
        }
    }

    isPropChanged(changes: { [propName: string]: SimpleChange }, prop: string) {
        var change = changes[prop];
        return change && change.previousValue != change.currentValue
    }

    propagateChange = (_: any) => { };

    registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any) { }

    isAvailableValue(v: number) {
        if (v % 1 !== 0) {
            return false;
        }
        if (v < 0 || v > 255) {
            return false;
        }
        return true;
    }
}