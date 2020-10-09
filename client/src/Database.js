import oneOfBest1 from "./images/hotels/oneOfBest1.jpg";
import oneOfBest2 from "./images/hotels/oneOfBest2.jpg";
import oneOfBest3 from "./images/hotels/oneOfBest3.jpg";
import oneOfBest4 from "./images/hotels/oneOfBest4.jpg";
import oneOfBest5 from "./images/hotels/oneOfBest5.jpg";
import oneOfBest6 from "./images/hotels/oneOfBest6.jpg";
import hotel7 from './images/hotels/hotel7.jpg';
import hotel8 from './images/hotels/hotel8.jpg';
import hotel9 from './images/hotels/hotel9.jpg';
import hotel10 from './images/hotels/hotel10.jpg';
import room1 from './images/rooms/room1.jpg';
import room2 from './images/rooms/room2.jpg';
import room3 from './images/rooms/room3.jpg';
import room4 from './images/rooms/room4.jpg';
import room5 from './images/rooms/room5.jpg';
import room6 from './images/rooms/room6.jpg';
import room7 from './images/rooms/room7.jpg';
import room8 from './images/rooms/room8.jpg';
import room9 from './images/rooms/room9.jpg';
import room10 from './images/rooms/room10.jpg';
import room11 from './images/rooms/room11.jpg'
import room12 from './images/rooms/room12.jpg';
import room13 from './images/rooms/room13.jpg';
import room14 from './images/rooms/room14.jpg';
import room15 from './images/rooms/room15.jpg';
import room16 from './images/rooms/room16.jpg';
import room17 from './images/rooms/room17.jpg';
import room18 from './images/rooms/room18.jpg';
import room19 from './images/rooms/room19.jpg';
import room20 from './images/rooms/room20.jpg';
import room21 from './images/rooms/room21.jpg';
import room22 from './images/rooms/room22.jpg';
import room23 from './images/rooms/room23.jpg';
import room24 from './images/rooms/room24.jpg';
import room25 from './images/rooms/room25.jpg';
import room26 from './images/rooms/room26.jpg';
import room27 from './images/rooms/room27.jpg';
import room28 from './images/rooms/room28.jpg';
import room29 from './images/rooms/room29.jpg';
import room30 from './images/rooms/room30.jpg';
import presidential1 from './images/presidential/presidential1.jpg';
import presidential2 from './images/presidential/presidential2.jpg';
import presidential3 from './images/presidential/presidential3.jpg';
import presidential4 from './images/presidential/presidential4.jpg';
import presidential5 from './images/presidential/presidential5.jpg';
import presidential6 from './images/presidential/presidential6.jpg';
import presidential7 from './images/presidential/presidential7.jpg';
import presidential8 from './images/presidential/presidential8.jpg';
import presidential9 from './images/presidential/presidential9.jpg';
import presidential10 from './images/presidential/presidential10.jpg';
import reviewer1 from './images/reviewers/reviewer1.jpeg'
import reviewer2 from './images/reviewers/reviewer2.jpg'
import reviewer3 from './images/reviewers/reviewer3.jpeg'
import reviewer4 from './images/reviewers/reviewer4.jpg'

export default  {
    hotels : [
        {
            id:1,
            img:oneOfBest1,
            name:"The Punisher",
            price: "$399",
            featured:true,
            location:`City1`,
            checkIn:'2 pm',
            checkout:'1 pm',
            specialOccasions: [],
            contacts:{
                email:`ThePunisher@gmail.com`,
                phone:'(123)456-789'
            },
            rooms:[{
                img:room1,
                single:true,
                price:'',
                size:'',
                breakfast:true,
                pets:false
            },
            {
                img:room2,
                double:true,
                price:'',
                size:'',
                breakfast:true,
                pets:false
            },
            {
                img:room3,
                family:true,
                price:'',
                size:'',
                breakfast:true,
                pets:true,
            },
            {
                img:presidential1,
                presidential:true,
                price:'',
                size:'',
                breakfast:true,
                pets:true
            },
        ],
            description : 
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
            
            reviews : [
                {
                    name: 'Person1',
                    img : reviewer1,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula.'
                },
                {
                    name: 'Person2',
                    img : reviewer2,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula.'
                },
                {
                    name: 'Person3',
                    img : reviewer3,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula.'
                },
                {
                    name: 'Person4',
                    img : reviewer4,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula.'
                }
            ]
            
        },
        {
            id:2,
            img:oneOfBest2,
            name:"Daredevil",
            price:"$499",
            featured:true,
            location:`City2`,
            checkIn:'2 pm',
            checkout:'1 pm',
            specialOccasions:[],
            contacts:{
                email:`Daredevil@gmail.com`,
                phone:'(123)456-789'
            },
            rooms:[{
                img:room4,
                single:true,
                price:'',
                size:'',
                breakfast:true,
                pets:false
            },
            {
                img:room5,
                double:true,
                price:'',
                size:'',
                breakfast:true,
                pets:false
            },
            {
                img:room6,
                family:true,
                price:'',
                size:'',
                breakfast:true,
                pets:true,
            },
            {
                img:presidential2,
                presidential:true,
                price:'',
                size:'',
                breakfast:true,
                pets:true
            },
        ],
            description : 
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
            
            reviews : [{
                    name: 'Person1',
                    img : reviewer1,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula.'
                },
                {
                    name: 'Person2',
                    img : reviewer2,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula.'
                },
                {
                    name: 'Person3',
                    img : reviewer3,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula.'
                },
                {
                    name: 'Person4',
                    img : reviewer4,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula.'
                }
            ]
        },
        {
            id:3,
            img:oneOfBest3,
            name:"Vengance",
            price:"$429",
            featured:true,
            location:`City3`,
            checkIn:'2 pm',
            checkout:'1 pm',
            specialOccasions:[],
            contacts:{
                email:`Vengance@gmail.com`,
                phone:'(123)456-789'
            },
            rooms:[{
                img:room7,
                single:true,
                price:'',
                size:'',
                breakfast:true,
                pets:false
            },
            {
                img:room8,
                double:true,
                price:'',
                size:'',
                breakfast:true,
                pets:false
            },
            {
                img:room9,
                family:true,
                price:'',
                size:'',
                breakfast:true,
                pets:true,
            },
            {
                img:presidential3,
                presidential:true,
                price:'',
                size:'',
                breakfast:true,
                pets:true
            },
        ],
            description : 
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
            
            reviews : [{
                name: 'Person1',
                img : reviewer1,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula.'
            },
            {
                name: 'Person2',
                img : reviewer2,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula.'
            },
            {
                name: 'Person3',
                img : reviewer3,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula.'
            },
            {
                name: 'Person4',
                img : reviewer4,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula.'
            }
        ]
        },
        {
            id:4,
            img:oneOfBest4,
            name:"Stan",
            price:"$469",
            featured:true,
            location:`City4`,
            checkIn:'2 pm',
            checkout:'1 pm',
            specialOccasions:[],
            contacts:{
                email:`Stan@gmail.com`,
                phone:'(123)456-789'
            },
            rooms:[{
                img:room10,
                single:true,
                price:'',
                size:'',
                breakfast:true,
                pets:false
            },
            {
                img:room11,
                double:true,
                price:'',
                size:'',
                breakfast:true,
                pets:false
            },
            {
                img:room12,
                family:true,
                price:'',
                size:'',
                breakfast:true,
                pets:true,
            },
            {
                img:presidential4,
                presidential:true,
                price:'',
                size:'',
                breakfast:true,
                pets:true
            },
        ],
            description : 
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
            
            reviews : [{
                name: 'Person1',
                img : reviewer1,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula.'
            },
            {
                name: 'Person2',
                img : reviewer2,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula.'
            },
            {
                name: 'Person3',
                img : reviewer3,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula.'
            },
            {
                name: 'Person4',
                img : reviewer4,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula.'
            }
        ]
        },
        {
            id:5,
            img:oneOfBest5,
            name:"Loose yourself",
            price:"$499",
            featured:true,
            location: `City5`,
            checkIn:'2 pm',
            checkout:'1 pm',
            specialOccasions:[],
            contacts:{
                email:`LooseYourself@gmail.com`,
                phone:'(123)456-789'
            },
            rooms:[{
                img:room13,
                single:true,
                price:'',
                size:'',
                breakfast:true,
                pets:false
            },
            {
                img:room14,
                double:true,
                price:'',
                size:'',
                breakfast:true,
                pets:false
            },
            {
                img:room15,
                family:true,
                price:'',
                size:'',
                breakfast:true,
                pets:true,
            },
            {
                img:presidential5,
                presidential:true,
                price:'',
                size:'',
                breakfast:true,
                pets:true
            },
        ],
            description : 
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
            
            reviews : [{
                name: 'Person1',
                img : reviewer1,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula.'
            },
            {
                name: 'Person2',
                img : reviewer2,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula.'
            },
            {
                name: 'Person3',
                img : reviewer3,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula.'
            },
            {
                name: 'Person4',
                img : reviewer4,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula.'
            }
        ]
        },
        {
            id:6,
            img:oneOfBest6,
            name:"Wonder Man",
            price:"$419",
            featured:true,
            location: `City6`,
            checkIn:'2 pm',
            checkout:'1 pm',
            specialOccasions:[],
            contacts:{
                email:`WonderMan@gmail.com`,
                phone:'(123)456-789'
            },
            rooms:[{
                img:room16,
                single:true,
                price:'',
                size:'',
                breakfast:true,
                pets:false
            },
            {
                img:room17,
                double:true,
                price:'',
                size:'',
                breakfast:true,
                pets:false
            },
            {
                img:room18,
                family:true,
                price:'',
                size:'',
                breakfast:true,
                pets:true,
            },
            {
                img:presidential6,
                presidential:true,
                price:'',
                size:'',
                breakfast:true,
                pets:true
            },
        ],
            description : 
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
            
            reviews : [{
                name: 'Person1',
                img : reviewer1,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula.'
            },
            {
                name: 'Person2',
                img : reviewer2,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula.'
            },
            {
                name: 'Person3',
                img : reviewer3,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula.'
            },
            {
                name: 'Person4',
                img : reviewer4,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula.'
            }
        ]
        },
        {
            id:7,
            img:hotel7,
            name:"LexCorp",
            price:"$219",
            featured:false,
            location:`City7`,
            checkIn:'2 pm',
            checkout:'1 pm',
            specialOccasions:[],
            contacts:{
                email:`LexCorp@gmail.com`,
                phone:'(123)456-789'
            },
            rooms:[{
                img:room19,
                single:true,
                price:'',
                size:'',
                breakfast:true,
                pets:false
            },
            {
                img:room20,
                double:true,
                price:'',
                size:'',
                breakfast:true,
                pets:false
            },
            {
                img:room21,
                family:true,
                price:'',
                size:'',
                breakfast:true,
                pets:true,
            },
            {
                img:presidential7,
                presidential:true,
                price:'',
                size:'',
                breakfast:true,
                pets:true
            },
        ],
            description : 
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
            
            reviews : [{
                name: 'Person1',
                img : reviewer1,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula.'
            },
            {
                name: 'Person2',
                img : reviewer2,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula.'
            },
            {
                name: 'Person3',
                img : reviewer3,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula.'
            },
            {
                name: 'Person4',
                img : reviewer4,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula.'
            }
        ]
        },
        {
            id:8,
            img:hotel8,
            name:"Doomsday",
            price:"$199",
            featured:false,
            location:`City8`,
            checkIn:'2 pm',
            checkout:'1 pm',
            specialOccasions:[],
            contacts:{
                email:`Doomsday8@gmail.com`,
                phone:'(123)456-789'
            },
            rooms:[
            {
                img:room22,
                single:true,
                price:'',
                size:'',
                breakfast:true,
                pets:false
            },
            {
                img:room23,
                double:true,
                price:'',
                size:'',
                breakfast:true,
                pets:false
            },
            {
                img:room24,
                family:true,
                price:'',
                size:'',
                breakfast:true,
                pets:true,
            },
            {
                img:presidential8,
                presidential:true,
                price:'',
                size:'',
                breakfast:true,
                pets:true
            }
            ],
                description : 
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',

                reviews : [{
                    name: 'Person1',
                    img : reviewer1,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula.'
                },
                {
                    name: 'Person2',
                    img : reviewer2,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula.'
                },
                {
                    name: 'Person3',
                    img : reviewer3,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula.'
                },
                {
                    name: 'Person4',
                    img : reviewer4,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula.'
                }
            ]
        },
        {
            id:9,
            img:hotel9,
            name:"Robin",
            price:"$299",
            featured:false,
            location:`City9`,
            checkIn:'2 pm',
            checkout:'1 pm',
            specialOccasions:[],
            contacts:{
                email:`Robin@gmail.com`,
                phone:'(123)456-789'
            },
            rooms:[{
                img:room25,
                single:true,
                price:'',
                size:'',
                breakfast:true,
                pets:false
            },
            {
                img:room26,
                double:true,
                price:'',
                size:'',
                breakfast:true,
                pets:false
            },
            {
                img:room27,
                family:true,
                price:'',
                size:'',
                breakfast:true,
                pets:true,
            },
            {
                img:presidential9,
                presidential:true,
                price:'',
                size:'',
                breakfast:true,
                pets:true
            },
        ],
            description : 
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
            
            reviews : [{
                name: 'Person1',
                img : reviewer1,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula.'
            },
            {
                name: 'Person2',
                img : reviewer2,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula.'
            },
            {
                name: 'Person3',
                img : reviewer3,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula.'
            },
            {
                name: 'Person4',
                img : reviewer4,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula.'
            }
        ]
        },
        {
            id:10,
            img:hotel10,
            name:"TheCave",
            price:"$259",
            featured:false,
            location:`City10`,
            checkIn:'2 pm',
            checkout:'1 pm',
            specialOccasions:[],
            contacts:{
                email:`TheCave0@gmail.com`,
                phone:'(123)456-789'
            },
            rooms:[{
                img:room28,
                single:true,
                price:'',
                size:'',
                breakfast:true,
                pets:false
            },
            {
                img:room29,
                double:true,
                price:'',
                size:'',
                breakfast:true,
                pets:false
            },
            {
                img:room30,
                family:true,
                price:'',
                size:'',
                breakfast:true,
                pets:true,
            },
            {
                img:presidential10,
                presidential:true,
                price:'',
                size:'',
                breakfast:true,
                pets:true
            },
        ],
            description : 
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
            
            reviews : [{
                name: 'Person1',
                img : reviewer1,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula.'
            },
            {
                name: 'Person2',
                img : reviewer2,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula.'
            },
            {
                name: 'Person3',
                img : reviewer3,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula.'
            },
            {
                name: 'Person4',
                img : reviewer4,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula.'
            }
        ]
        }
    ]
}