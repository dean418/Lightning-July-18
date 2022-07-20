import { Lightning } from "@lightningjs/sdk";

export class Box extends Lightning.Component {
    static _template() {
        return {
        //   rect: true,
          w: 150,
          h: 150,
          color: this.bindProp('shade'),
          flexItem: {
            margin: 20
          },

          text: {
              text: this.bindProp('message'),
              fontSize: 70
          }
        }
    }

    _construct() {
        console.log('box construct');
      }
    
      _build() {
        console.log('box build');
      }
    
      _setup() {
        console.log('box setup');
      }
    
      _init() {
        console.log('box init');
      }
    
      _enable() {
        console.log('box enable');
      }

    // _init() {
    //     this.patch({
    //         color: this.shade
    //     })
    // }
}