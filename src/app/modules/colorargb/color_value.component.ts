import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
    @Input() label = "A";
    @Input() value: number = 0;
    percentHidden = true;

    constructor() { }

    ngOnInit() { }

    setLabel(label: string) {
        this.label = label;
        if (label === "A") {
            this.percentHidden = false;
        }
    }

    writeValue(value: any) {
        if (value !== undefined) {
            if (this.isAvailableValue(value)) {
                this.value = value;
            } else {
                // todo 错误提示
            }
        }
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