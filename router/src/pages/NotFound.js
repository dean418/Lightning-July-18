import { Lightning, Router } from "@lightningjs/sdk";

export class NotFound extends Lightning.Component {
    static _template() {
        return {
            Background: {
                rect: true,
                w: 1920,
                h: 1080,
                color: 0xffff4242
            },
            Title: {
                x: 960,
                y: 540,
                mount: 0.5,
                text: {
                    text: '404: Not Found',
                    fontSize: 80
                }
            },
        }
    }

    _handleBack() {
        Router.navigate('home');
    }
}