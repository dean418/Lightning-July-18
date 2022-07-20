import { Lightning, Router, Utils } from "@lightningjs/sdk";

export class Home extends Lightning.Component {
    static _template() {
        return {
            Background: {
                rect: true,
                w: 1920,
                h: 1080,
                color: 0xffff7e57
            },
            Title: {
                x: 960,
                y: 100,
                mount: 0.5,
                text: {
                    text: 'Home Page',
                    fontSize: 80
                }
            },
            NavIndicator: {
                x: 1800,
                y: 540,
                flex: {},
                mount: 0.5,

                Label: {
                  text: {
                      text: 'About'
                  }  
                },
                Arrow: {
                    src: Utils.asset('images/arrow.png'),
                    rotation: Math.PI * 0.5
                }
            }
        }
    }

    
    pageTransition() {
        return 'right'
    }
    
    _handleRight() {
        Router.navigate('about', {message: 'hello world'});
    }

    _handleLeft() {
        Router.focusWidget('Menu');
    }

    _focus() {
        console.log('init');
        if (this.message) {
        
            this.widgets.notification.notify(this.message, 0xff32ed0c)
        }
    }

    _handleEnter() {
        this.widgets.notification.notify('error', 0xffed0c0c);
    }
    
    set params(data) {
        console.log(data);
        this.message = data.fail
    }

}


