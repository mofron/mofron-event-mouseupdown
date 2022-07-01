/**
 * @file mofron-event-mouseupdown/index.js
 * @brief mouseup/mousedown event for mofron
 *        this event notifies when the mouse leave on the component.
 * ## event function parameter
 *  - component: event target component object
 *  - event: "mouseover" event object by addEventListener
 *  - mixed: user specified parameter
 * @license MIT
 */

const MsUp   = require('mofron-event-mouseup');
const MsDown = require('mofron-event-mousedown');
const ConfArg = mofron.class.ConfArg;

module.exports = class extends mofron.class.Event {
    /**
     * initialize event
     * 
     * @param (mixed) short-form parameter
     *                key-value: event config
     * @type private
     */
    constructor (prm) {
        try {
            super();
            this.modname('MouseUpDown');
	    if (undefined !== prm) {
                this.config(prm);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * event contents
     * 
     * @param (mofron.class.dom) target dom object
     * @type private
     */
    contents (tgt_dom) {
        try {
            let updown = this;
            let evt = (p1,p2,p3) => {
                try {
                    updown.execListener(p3);
                } catch (e) {
                    console.error(e.stack);
                    throw e;
                }
            }
            this.component().event([
                new MsUp(new ConfArg(evt,false)),
                new MsDown(new ConfArg(evt, true))
            ]);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
