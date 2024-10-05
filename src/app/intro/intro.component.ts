import { Component } from '@angular/core'
import {
    Color,
    getColorIndex,
    getNextFill,
    getNextStroke,
} from '../misc/colorChange'
import { StoreService } from '../store.service'
import { Subscription } from 'rxjs'
import { TerminalService } from 'primeng/terminal'
import { cmdList, handlerList } from '../misc/shell'

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
    styleUrl: './intro.component.scss',
})
export class IntroComponent {
    subscription: Subscription
    color!: Color
    cmdList = cmdList
    handlerList = handlerList

    constructor(
        private storeService: StoreService,
        private terminalService: TerminalService
    ) {
        this.subscription = this.terminalService.commandHandler.subscribe(
            async (command) => {
                const bin = command.split(' ')[0]

                let response = 'Unknown command: ' + command

                if (!command || !this.cmdList.includes(bin)) {
                    this.terminalService.sendResponse(response)
                    return
                }

                const handler = this.handlerList[this.cmdList.indexOf(bin)]

                response = handler(this.storeService.github, command)

                this.terminalService.sendResponse(response)
            }
        )
    }

    ngOnInit(): void {
        this.color = this.storeService.introColor
    }

    ngOnDestroy() {
        this.storeService.introColor = this.color
        if (this.subscription) {
            this.subscription.unsubscribe()
        }
    }

    ChangeColor(): void {
        const index = getColorIndex(this.color.fill)
        const fill = getNextFill(index)
        const stroke = getNextStroke(index)
        this.color.fill = fill
        this.color.stroke = stroke
    }
}
