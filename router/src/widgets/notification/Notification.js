import { Lightning } from "@lightningjs/sdk";

export class Notification extends Lightning.Component {
    static _template() {
        return {
            Background: {
                visible: false,
                alpha: 1,
                rect: true,
                w: 300,
                h: 100,
                x: 1520,
                color: 0xff39ed0c,
                flex:{
                    alignItems: 'center',
                    justifyContent: 'space-around'
                },
                Text: {
                    w: 300,
                    text: {
                        text: 'hello world'
                    }
                }
            },
        }
    }

    notify(message, color) {
        this.patch({
            Background: {
                visible: true,
                color: color,
                Text: {
                    text: {
                        text: message
                    }
                }
            }
        })

        setTimeout(() => {
            this.patch({
                Background: {
                    visible: false
                }
            })
        }, 3000)
    }
}