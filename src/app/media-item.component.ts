import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component ({
    selector: 'ajay-media-item',
    templateUrl: './media-item.component.html',
    styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {
    @Input() mediaItem;
    @Output() delete = new EventEmitter;
    onDelete() {
        console.log('Item has been deleted');
        this.delete.emit(this.mediaItem);
    }
}