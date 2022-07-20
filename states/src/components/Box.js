import { Lightning } from "@lightningjs/sdk";

export class Box extends Lightning.Component {
    static _template() {
        return {
            rect: true,
            w: 100,
            h: 100,
            color: 0xffffffff,
            flexItem: {
                margin: 30
            }
        }
    }

    _handleEnter() {
        console.log('box ' + this.box + ' has been selected');
    }

    _focus() {
        this.patch({
            color: 0xff00ff00
        })
    }

    _unfocus() {
        this.patch({
            color: 0xffffffff
        })
    }
} 