'use strict';

class Timer {
    constructor(){
        this.paused = true;
        this.remaining = 0;
    }

    // start timer
    start(){
        this.paused = false;
        //this.tick();
        this.timer = setInterval(() => this.tick(this), 1000);
    }

    // get new time and update display
    tick(){
        this.remaining--;
        let tickEvent = new CustomEvent('tick', { detail: this.remaining });
        dispatchEvent(tickEvent);

        if(this.remaining <= 0){
            clearInterval(this.timer);
            this.paused = true;
        }
    }

    // start/stop
    startStop(){
        if(! this.paused){
            console.log('paused');
            this.paused = true;
            clearInterval(this.timer);
        } else{
            this.paused = false;
            this.start();
        }
    }
}
