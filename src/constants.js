import Pagea from './contextApp/Pagea';
import Pageb from './redux/Pageb';
import Pagec from './styledComponents/Pagec';

const projects = [
    {
        name: "React context",
        description: "some description",
        link: "/context",
        component: Pagea
    },
    {
        name: "Redux",
        description: "some description",
        link: "/redux",
        component: Pageb
    },
    {
        name: "Styled Components",
        description: "some description",
        link: "/styled-components",
        component: Pagec
    }
]

export default projects;