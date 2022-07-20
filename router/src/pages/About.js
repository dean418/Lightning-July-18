import { Lightning, Router, Utils } from "@lightningjs/sdk";

export class About extends Lightning.Component {
    static _template() {
        return {
            Background: {
                rect: true,
                w: 1920,
                h: 1080,
                color: 0xff4cf671
            },
            Title: {
                x: 960,
                y: 100,
                mount: 0.5,
                text: {
                    text: 'About Page',
                    fontSize: 80
                }
            },
            NavIndicator: {
                x: 120,
                y: 540,
                flex: {},
                mount: 0.5,

                Arrow: {
                    src: Utils.asset('images/arrow.png'),
                    rotation: Math.PI * -0.5
                },
                Label: {
                  text: {
                      text: 'Home'
                  }  
                },
            }
        }
    }

    set params({message}) {
        console.log(message);
    }

    pageTransition() {
        return 'left'
        //fade
        //crossFade
    }

    // _handleLeft() {
    //     Router.navigate('home');
    // }

    _handleLeft() {
        Router.focusWidget('Menu');
    }
}