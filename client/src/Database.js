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
                id:1,
                SQFT:'450 SQFT',
                capacity:1,
                img:room1,
                img1:room30,
                img2:room29,
                img3:room28,
                jacuzzi:false,
                price:'$399',
                size:'single',
                breakfast:true,
                pets:false,
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
            },
            {
                id:2,
                SQFT:'550 SQFT',
                capacity:2,
                img:room2,
                img1:room27,
                img2:room26,
                img3:room25,
                jacuzzi:true,
                price:'$499',
                size:'double',
                breakfast:true,
                pets:false,
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
            },
            {
                id:3,
                SQFT:'650 SQFT',
                capacity:3,
                img:room3,
                img1:room24,
                img2:room23,
                img3:room22,
                jacuzzi:true,
                price:'$519',
                size:'family',
                breakfast:true,
                pets:true,
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
            },
            {
                id:4,
                SQFT:'750 SQFT',
                capacity:4,
                img:presidential1,
                img1:presidential3,
                img2:presidential7,
                img3:presidential9,
                jacuzzi:true,
                price:'$999',
                size:'presidential',
                breakfast:true,
                pets:true,
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
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
                id:1,
                img:room4,
                SQFT:'550 SQFT',
                capacity:1,
                img1:room21,
                img2:room20,
                img3:room19,
                jacuzzi:true,
                price:'$499',
                size:'single',
                breakfast:true,
                pets:false,
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
            },
            {
                id:2,
                SQFT:'500 SQFT',
                capacity:2,
                img:room5,
                img1:room18,
                img2:room17,
                img3:room16,
                jacuzzi:true,
                price:'$599',
                size:'double',
                breakfast:true,
                pets:false,
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
            },
            {
                id:3,
                SQFT:'550 SQFT',
                capacity:3,
                img:room6,
                img1:room15,
                img2:room14,
                img3:room13,
                jacuzzi:true,
                price:'$699',
                size:'family',
                breakfast:true,
                pets:true,
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
            },
            {
                id:4,
                SQFT:'750 SQFT',
                capacity:4,
                img:presidential2,
                img1:presidential9,
                img2:presidential10,
                img3:presidential6,
                jacuzzi:false,
                price:'$959',
                size:'presidential',
                breakfast:true,
                pets:true,
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
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
                id:1,
                SQFT:'450 SQFT',
                capacity:1,
                img:room7,
                img1:room12,
                img2:room11,
                img3:room10,
                jacuzzi:false,
                price:'$429',
                size:'single',
                breakfast:true,
                pets:false,
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
            },
            {
                id:2,
                SQFT:'550 SQFT',
                capacity:2,
                img:room8,
                img1:room9,
                img2:room8,
                img3:room7,
                jacuzzi:false,
                price:'$489',
                size:'double',
                breakfast:true,
                pets:false,
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
            },
            {
                id:3,
                SQFT:'550 SQFT',
                capacity:3,
                img:room9,
                img1:room6,
                img2:room5,
                img3:room4,
                jacuzzi:true,
                price:'$519',
                size:'family',
                breakfast:true,
                pets:true,
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
            },
            {
                id:4,
                SQFT:'750 SQFT',
                capacity:4,
                img:presidential3,
                img1:presidential1,
                img2:presidential2,
                img3:presidential4,
                jacuzzi:true,
                price:'$899',
                size:'presidential',
                breakfast:true,
                pets:true,
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
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
                id:1,
                SQFT:'450 SQFT',
                capacity:1,
                img:room10,
                img1:room21,
                img2:room12,
                img3:room14,
                jacuzzi:false,
                price:'$469',
                size:'single',
                breakfast:true,
                pets:false,
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
            },
            {
                id:2,
                SQFT:'550 SQFT',
                capacity:2,
                img:room11,
                img1:room19,
                img2:room17,
                img3:room1,
                jacuzzi:false,
                price:'$519',
                size:'double',
                breakfast:true,
                pets:false,
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
            },
            {
                id:3,
                SQFT:'450 SQFT',
                capacity:3,
                img:room12,
                img1:room4,
                img2:room7,
                img3:room14,
                jacuzzi:false,
                price:'$599',
                size:'family',
                breakfast:true,
                pets:true,
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
            },
            {
                id:4,
                SQFT:'750 SQFT',
                capacity:4,
                img:presidential4,
                img1:presidential3,
                img2:presidential7,
                img3:presidential10,
                jacuzzi:true,
                price:'$899',
                size:'presidential',
                breakfast:true,
                pets:true,
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
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
                id:1,
                SQFT:'550 SQFT',
                capacity:1,
                img:room13,
                img1:room5,
                img2:room27,
                img3:room17,
                jacuzzi:false,
                price:'$499',
                size:'single',
                breakfast:true,
                pets:false,
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
            },
            {
                id:2,
                SQFT:'550 SQFT',
                capacity:2,
                img:room14,
                img1:room22,
                img2:room4,
                img3:room3,
                jacuzzi:false,
                price:'$519',
                size:'double',
                breakfast:true,
                pets:false,
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
            },
            {
                id:3,
                SQFT:'450 SQFT',
                capacity:3,
                img:room15,
                img1:room22,
                img2:room23,
                img3:room25,
                jacuzzi:true,
                price:'$569',
                size:'family',
                breakfast:true,
                pets:true,
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
            },
            {
                id:4,
                SQFT:'750 SQFT',
                capacity:4,
                img:presidential5,
                img1:presidential1,
                img2:presidential8,
                img3:presidential3,
                jacuzzi:true,
                price:'$899',
                size:'presidential',
                breakfast:true,
                pets:true,
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
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
                id:1,
                SQFT:'550 SQFT',
                capacity:1,
                img:room16,
                img1:room6,
                img2:room9,
                img3:room29,
                jacuzzi:false,
                price:'$419',
                size:'single',
                breakfast:true,
                pets:false,
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
            },
            {
                id:2,
                SQFT:'550 SQFT',
                capacity:2,
                img:room17,
                img1:room7,
                img2:room9,
                img3:room8,
                jacuzzi:false,
                price:'$499',
                size:'double',
                breakfast:true,
                pets:false,
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
            },
            {
                id:3,
                SQFT:'500 SQFT',
                capacity:3,
                img:room18,
                img1:room28,
                img2:room26,
                img3:room13,
                jacuzzi:false,
                price:'$499',
                size:'family',
                breakfast:true,
                pets:true,
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
            },
            {
                id:4,
                SQFT:'750 SQFT',
                capacity:4,
                img:presidential6,
                img1:presidential7,
                img2:presidential5,
                img3:presidential8,
                jacuzzi:true,
                price:'$799',
                size:'presidential',
                breakfast:true,
                pets:true,
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
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
                id:1,
                SQFT:'550 SQFT',
                capacity:1,
                img:room19,
                img1:room9,
                img2:room22,
                img3:room23,
                jacuzzi:false,
                price:'$219',
                size:'single',
                breakfast:true,
                pets:false,
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
            },
            {
                id:2,
                SQFT:'550 SQFT',
                capacity:2,
                img:room20,
                img1:room4,
                img2:room1,
                img3:room10,
                jacuzzi:false,
                price:'$299',
                size:'double',
                breakfast:true,
                pets:false,
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
            },
            {
                id:3,
                SQFT:'550 SQFT',
                capacity:3,
                img:room21,
                img1:room12,
                img2:room26,
                img3:room2,
                price:'$299',
                jacuzzi:false,
                size:'family',
                breakfast:true,
                pets:true,
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
            },
            {
                id:4,
                SQFT:'750 SQFT',
                capacity:4,
                img:presidential7,
                img1:presidential10,
                img2:presidential9,
                img3:presidential3,
                jacuzzi:true,
                price:'$799',
                size:'presidential',
                breakfast:true,
                pets:true,
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
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
                id:1,
                SQFT:'450 SQFT',
                capacity:1,
                img:room22,
                img1:room30,
                img2:room12,
                img3:room8,
                jacuzzi:false,
                price:'$199',
                size:'single',
                breakfast:true,
                pets:false,
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
            },
            {
                id:2,
                SQFT:'550 SQFT',
                capacity:2,
                img:room23,
                img1:room2,
                img2:room1,
                img3:room18,
                jacuzzi:false,
                price:'$219',
                size:'double',
                breakfast:true,
                pets:false,
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
            },
            {
                id:3,
                SQFT:'550 SQFT',
                capacity:3,
                img:room24,
                img1:room23,
                img2:room26,
                img3:room25,
                jacuzzi:false,
                price:'$299',
                size:'family',
                breakfast:true,
                pets:true,
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
            },
            {
                id:4,
                SQFT:'850 SQFT',
                capacity:4,
                img:presidential8,
                img1:presidential2,
                img2:presidential4,
                img3:presidential6,
                jacuzzi:true,
                price:'$599',
                size:'presidential',
                breakfast:true,
                pets:true,
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
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
                id:1,
                SQFT:'450 SQFT',
                capacity:1,
                img:room25,
                img1:room5,
                img2:room15,
                img3:room17,
                jacuzzi:false,
                price:'$299',
                size:'single',
                breakfast:true,
                pets:false,
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
            },
            {
                id:2,
                SQFT:'500 SQFT',
                capacity:2,
                img:room26,
                img1:room6,
                img2:room16,
                img3:room26,
                jacuzzi:false,
                price:'$319',
                size:'double',
                breakfast:true,
                pets:false,
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
            },
            {
                id:3,
                SQFT:'550 SQFT',
                capacity:3,
                img:room27,
                img1:room7,
                img2:room17,
                img3:room28,
                jacuzzi:true,
                price:'$319',
                size:'family',
                breakfast:true,
                pets:true,
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
            },
            {
                id:4,
                SQFT:'750 SQFT',
                capacity:4,
                img:presidential9,
                img1:presidential1,
                img2:presidential3,
                img3:presidential5,
                jacuzzi:true,
                price:'$699',
                size:'presidential',
                breakfast:true,
                pets:true,
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
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
                id:1,
                SQFT:'550 SQFT',
                capacity:1,
                img:room28,
                img1:room18,
                img2:room23,
                img3:room9,
                jacuzzi:false,
                price:'$259',
                size:'single',
                breakfast:true,
                pets:false,
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
            },
            {
                id:2,
                SQFT:'550 SQFT',
                capacity:2,
                img:room29,
                img1:room9,
                img2:room11,
                img3:room13,
                jacuzzi:false,
                price:'$259',
                size:'double',
                breakfast:true,
                pets:false,
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
            },
            {
                id:3,
                SQFT:'600 SQFT',
                capacity:3,
                img:room30,
                img1:room3,
                img2:room23,
                img3:room13,
                jacuzzi:false,
                price:'$299',
                size:'family',
                breakfast:true,
                pets:true,
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
            },
            {
                id:4,
                SQFT:'850 SQFT',
                capacity:4,
                img:presidential10,
                img1:presidential2,
                img2:presidential6,
                img3:presidential7,
                jacuzzi:true,
                price:'$599',
                size:'presidential',
                breakfast:true,
                pets:true,
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam mi sed urna lobortis malesuada. Nulla varius, purus eget maximus tristique, quam sapien mollis enim, vitae efficitur neque mauris et ligula. Vivamus dignissim dui id neque ornare aliquam. Quisque arcu justo, gravida sit amet consectetur gravida, sollicitudin vitae justo. Sed eleifend velit a augue mollis, nec vehicula eros ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus, ex vitae consectetur vulputate, felis nibh blandit quam, non tincidunt eros lectus eget neque. Etiam a lobortis magna. Nunc pulvinar dui in ante efficitur scelerisque.Suspendisse euismod sapien et ex euismod, in cursus ex mollis. Integer vel odio auctor, mattis ex et, rhoncus ante. Donec pretium tristique quam, in condimentum eros semper at.',
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