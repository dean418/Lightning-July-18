import { Boot } from '../pages/Boot';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { NotFound } from '../pages/NotFound';

export default {
    routes: [
        {
            path: '$',
            component: Boot
        },
        {
            path: '*',
            component: NotFound
        },
        {
            path: 'home',
            component: Home,
            widgets: ['Menu', 'Notification']
        },
        {
            path: 'home/:fail',
            component: Home,
            widgets: ['Menu', 'Notification']
        },
        {
            path: 'about',
            component: About,
            widgets: ['Menu']
        },
        {
            path: 'about/:message',
            component: About,
            widgets: ['Menu']
        },
    ],

    beforeEachRoute(from, to) {
        // return true - user goes to reuqested page
        // return false - keep user on same page

        // return new Promise(resolve => {
            let loggedIn = false
            
            if (to._hash == 'about' && !loggedIn) {
                console.log('user is not allowed on this page');
                // resolve(from)
                return 'home/fail'
            } else {
                console.log('user is allowed on this page: ' + to._hash);
                return true
            }
        // })
    },
    afterEachRoute(to) {
        // console.log(to._route._cfg.component);
        // to.widgets.notification.notify('success', 0xff32ed0c)
        console.log('user navigated to: ' + to._hash);
    }
}




// beforeEachRoute: (from, to) => {
//     console.log(to);
//     if (to._hash == 'home' && from == '$' && !to._register.get('msg')) {
//         return {
//             true: true,
//             path: 'home',
//             params: {
//                 msg: 'lmao'
//             }
//         }
//     }

//     return true
// }