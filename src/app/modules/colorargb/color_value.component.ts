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
    vlauePre: number;
    percentHidden = true;

    constructor(public snackBar: MatSnackBar) { }

    ngOnInit() {
    }

    writeValue(value: any) {
        if (value !== undefined) {
            this.value = value;
            this.updateValue(value);
        }
    }

    ngOnChanges(changes: { [propName: string]: SimpleChange }) {
        if (this.isPropChanged(changes, 'label')) {
            if (this.label === "A") {
                this.percentHidden = false;
            }
        }
    }

    onColorDecimalValueChanged(decValue: number) {
        this.updateValue(decValue);
    }

    updateValue(decValue: number) {
        if (this.isAvailableValue(decValue)) {
            this.vlauePre = decValue;
        } else {
            this.snackBar.open("Invalid value!");
            this.value = this.vlauePre;
            console.log("updateValue invalid value:" + this.value);
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