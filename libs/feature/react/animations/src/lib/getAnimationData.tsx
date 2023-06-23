import { communication, ux, builder, foreman, project, tasks, HomeAnimation } from './home';

export function getAnimationData(animationName: HomeAnimation) {
    switch (animationName) {
        case 'communication':
            return communication
        case 'ux':
            return ux
        case 'tasks':
            return tasks
        case 'builder':
            return builder
        case 'foreman':
            return foreman
        case 'project':
            return project
        default:
            break;
    }
}
export default getAnimationData;