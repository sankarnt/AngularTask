import { trigger, state, style, animate, transition, query, animateChild, group } from '@angular/animations';
export const slideInAnimation =
    trigger('routeAnimation', [
        transition('TaskPage => DashboardPage, DashboardPage => TaskPage', [
            style({ height: '!' }),
            query(':enter', style({ transform: 'translateY(100%)' })),
            query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
            // animate the leave page away
            group([
                query(':leave', [
                    animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(-100%)' })),
                ]),
                // and now reveal the enter
                query(':enter', animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' }))),
            ]),
        ])
    ]);