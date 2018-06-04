import {Component, OnInit} from '@angular/core';
import {EventService} from '../event/event.service';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
    public loaderOn: Boolean;

    constructor(private eventService: EventService) {
        const _this = this;
        this.eventService.on('loaderOn', function (switchLoader) {
            _this.loader(switchLoader);
        });
    }
    
    ngOnInit() {
    }

    public loader(switchLoader: Boolean) {
        this.loaderOn = switchLoader;
    }
}
