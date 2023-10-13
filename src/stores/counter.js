import { ref } from 'vue';
import { defineStore } from 'pinia'

export const HealPage_menu = defineStore('menu01', () => {

    const HealPage_data = ref([
          {
            id: '1',
            name: "Espresso",
            coverimage: "https://img.salehere.co.th/p/1200x0/2021/11/27/0rta2kzzmpjp.jpg",
            price: "45"
          },
          {
            id: '2',
            name: "Espresso con panna coffee",
            coverimage: "https://img.salehere.co.th/p/1200x0/2021/11/27/ba8tsfypxocw.jpg",
            price: "55"
          },
          {
            id: '3',
            name: "Long Black",
            coverimage: "https://img.salehere.co.th/p/1200x0/2021/11/27/jvbo4z0urqfp.jpg",
            price: "45"
          }
    ])
    
    return { HealPage_data }
})

export const HealBoby_menu = defineStore('menu02', () => {

    const HealBoby_data = ref([
          {
            id: 4,
            name: "Latte",
            coverimage: "https://img.salehere.co.th/p/1200x0/2021/11/27/vrrocyts6ngu.jpg",
            price: "40"
          },
          {
            id: 5,
            name: "Flat White",
            coverimage: "https://img.salehere.co.th/p/1200x0/2021/11/27/jeumhnaierva.jpg",
            price: "65"
          },
          {
            id: 6,
            name: "Cappuccino",
            coverimage: "https://img.salehere.co.th/p/1200x0/2021/11/27/3b2xlwjr0dp1.jpg",
            price: "60",
          }
    ])
    
    return { HealBoby_data }
    })


    export const FoodHeal_menu = defineStore('menu03', () => {

        const FoodHeal_data = ref([
              {
                id: 7,
                name: "Piccolo",
                coverimage: "https://img.salehere.co.th/p/1200x0/2021/11/27/eabxqspvserw.jpg",
                price: "60"
              },
              {
                id: 8,
                name: "Mocha",
                coverimage: "https://img.salehere.co.th/p/1200x0/2021/11/27/1qvzuvtyfzw4.jpg",
                price: "45"
              },
              {
                id: 9,
                name: "Caramel Macchiato",
                coverimage: "https://img.salehere.co.th/p/1200x0/2021/11/27/dlokkom1qe86.jpg",
                price: "50"
              }
        ])
        
        return { FoodHeal_data }
        })

        export const Hospitel_menu = defineStore('menu04', () => {

            const Hospitel_data = ref([
                  {
                    id: 10,
                    name: "Dirty Coffee",
                    coverimage: "https://img.salehere.co.th/p/1200x0/2021/11/27/rsnexrqi9xhp.jpg",
                    price: "45"
                  },
                  {
                    id: 11,
                    name: "Dalgona Coffee",
                    coverimage: "https://img.salehere.co.th/p/1200x0/2021/11/27/4dl7s4grlgit.jpg",
                    price: "55"
                  },
                  {
                    id: 12,
                    name: "Americano",
                    coverimage: "https://img.salehere.co.th/p/1200x0/2021/11/27/t411m0ct7h7j.jpg",
                    price: "40"
                  }
            ])
            
            return { Hospitel_data }
            })

export const useArt_listStore = defineStore('Art', () => {

const Art_list  = ref([
  {
    id: 'art1',
    title: 'Cyber Skull',
    Owned_by: 'Nocturnal Media',
    price: 975.00,
    description: 'Cyber Skull Virtual Reality Cyberpunk floppy disc wires 80s 90s',
    image: 'https://www.shutterstock.com/shutterstock/photos/1318065872/display_1500/stock-vector-cyber-skull-virtual-reality-cyberpunk-floppy-disc-wires-s-s-1318065872.jpg',
    category: 'Art'
},
{
    id: 'art2',
    title: 'vector',
    Owned_by: 'nattapon kanchanaket',
    price: 675.00,
    description: 'David michelangelo portraits Illustration vector art    ',
    image: 'https://www.shutterstock.com/shutterstock/photos/1665555634/display_1500/stock-vector-david-michelangelo-portraits-illustration-vector-art-1665555634.jpg',
    category: 'Art'
},
{
    id: 'art3',
    title: 'catttttt',
    Owned_by: 'Md Abdul Barek',
    price: 435.00,
    description: 'Angry cat destroyed the world in pop-art style flat',
    image: 'https://www.shutterstock.com/shutterstock/photos/2277302713/display_1500/stock-vector-angry-cat-distroyed-the-world-in-pop-art-style-flat-2277302713.jpg',
    category: 'Art'
},
{
    id: 'art4',
    title: 'english bulldog',
    Owned_by: 'ARTEMENKO VALENTYN',
    price: 790.00,
    description: 'english bulldog portrait intellectual art',
    image: 'https://www.shutterstock.com/shutterstock/photos/1926395366/display_1500/stock-photo-english-bulldog-portrait-intellectual-art-1926395366.jpg',
    category: 'Art'
},
{
    id: 'art5',
    title: 'Woman, graffiti street art fashion.',
    Owned_by: 'Fortis Design',
    price: 1580.49,
    description: 'Vector graphic, beautiful, strong, lady spray painted. Paint splatter. Cool urban modern poster texture. Powerful contemporary wall art sketch. home decor style.',
    image: 'https://www.shutterstock.com/shutterstock/photos/2279521423/display_1500/stock-vector-woman-graffiti-street-art-fashion-vector-graphic-beautiful-strong-lady-spray-painted-paint-2279521423.jpg',
    category: 'Art'
},
{
    id: 'art6',
    title: 'Space background',
    Owned_by: 'Fortis Design',
    price: 1245.35,
    description: 'Colorful explosion on dark wallpaper. Vector art. Futuristic explosion. Creative banner for website. Astronomy. Wave of light. Shining stars nebula. Cartoon drawing night painting',
    image: 'https://www.shutterstock.com/shutterstock/photos/2272132841/display_1500/stock-vector-space-background-colorful-explosion-on-dark-wallpaper-vector-art-futuristic-explosion-creative-2272132841.jpg',
    category: 'Art'
},
{
    id: 'art7',
    title: 'Colorful seamless',
    Owned_by: 'Talirina',
    price: 1205.64,
    description: 'Colorful seamless pattern with leaves, spots. Decorative colored wallpaper, good for printing. Hand drawn overlapping background, texture with decor elements, lines and shapes. Design backdrop vector',
    image: 'https://www.shutterstock.com/shutterstock/photos/1282448455/display_1500/stock-vector-colorful-seamless-pattern-with-leaves-spots-decorative-colored-wallpaper-good-for-printing-hand-1282448455.jpg',
    category: 'Art'
},
{
    id: 'art8',
    title: 'Japanese Landscape Watercolor',
    Owned_by: 'Bankphotographer',
    price: 1565.89,
    description: 'It is a traditional garden designed with Japanese aesthetics and philosophical concepts, avoiding artificial decorations and emphasizing the natural landscape.',
    image: 'https://www.shutterstock.com/shutterstock/photos/2313039995/display_1500/stock-vector-japanese-landscape-watercolor-asia-art-2313039995.jpg',
    category: 'Art'
},
{
    id: 'art9',
    title: "David's head. Man",
    Owned_by: 'Unknown man',
    price: 667.00,
    description: 'Statue. Earphone. Isolated. Gypsum statue of David\'s head. Man. Creative. Plaster statue of David\'s head in pixel glasses. Minimal concept art.',
    image: 'https://www.shutterstock.com/shutterstock/photos/1650203437/display_1500/stock-photo-statue-earphone-isolated-gypsum-statue-of-david-s-head-man-creative-plaster-statue-of-david-s-1650203437.jpg',
    category: 'Art'
},
{
    id: 'art10',
    title: 'New year sunrise',
    Owned_by: 'Abstract the studio',
    price: 1005.33,
    description: 'Beautiful Korea, new year sunrise and natural scenery, family wearing traditional hanbok, Korean traditional painting vector illustration.',
    image: 'https://www.shutterstock.com/shutterstock/photos/1880178172/display_1500/stock-vector-beautiful-korea-new-year-sunrise-and-natural-scenery-family-wearing-traditional-hanbok-korean-1880178172.jpg',
    category: 'Art'
},
{
    id: 'art11',
    title: '☕',
    Owned_by: 'Master1305',
    price: 235.00,
    description: 'Caffeine in coffee beans Will awaken from sleep It our nature when we just wake up. There will be a feeling of drowsiness.',
    image: 'https://www.shutterstock.com/shutterstock/photos/1909641286/display_1500/stock-photo-morning-coffee-makes-things-better-comics-styled-yellow-suit-modern-design-contemporary-art-1909641286.jpg',
    category: 'Art'
},
{
    id: 'art12',
    title: 'Paper Moon',
    Owned_by: 'yesdoubleyes',
    price: 1325.65,
    description: 'Weird surreal dreamscape abstracts for music visualizers, acid flashback montages, strange and glitchy effects that hypnotize and inspire',
    image: 'https://www.shutterstock.com/shutterstock/photos/2144014629/display_1500/stock-vector-forest-layered-paper-cut-out-style-forest-vector-file-shadow-box-idea-layered-paper-cut-design-2144014629.jpg',
    category: 'Art'
},
{
    id: 'art11',
    title: 'pagoda tower',
    Owned_by: 'Jonistudio' ,
    price: 1846.00 ,
    description: "pagoda tower on the side of a quiet flowing river with cherry trees. background of Mount Fujiyama, afternoon atmosphere.",
    image: "https://www.shutterstock.com/shutterstock/photos/2322034225/display_1500/stock-vector-japan-landscape-flat-vector-art-illustration-retro-vintage-background-2322034225.jpg",
    category: 'Art'
},
{
    id: 'art13',
    title: 'heart musical',
    Owned_by: 'rogistok',
    price: 256.00,
    description: 'Music in your heart that is free in life orchestral musical instruments Cartoon cartoon pop art vector illustration, retro vintage art',
    image: 'https://www.shutterstock.com/shutterstock/photos/1021588924/display_1500/stock-vector-music-in-the-heart-musical-orchestral-instruments-comic-cartoon-pop-art-illustration-retro-1021588924.jpg',
    category: 'Art'
},
{
    id: 'art12',
    title: 'joysticks gamepad',
    Owned_by: 'cddesign.co',
    price: 300.00,
    description: 'Vector Seamless pattern with joysticks gamepad illustration and slogan text, for t-shirt prints and other uses.',
    image: 'https://www.shutterstock.com/shutterstock/photos/1805459848/display_1500/stock-vector-vector-seamless-pattern-with-joysticks-gamepad-illustration-and-slogan-text-for-t-shirt-prints-1805459848.jpg',
    category: 'Art'
},
{
    id: 'art14',
    title: 'Monkey',
    Owned_by: 'Max9545',
    price: 999.00,
    description: 'Monkey with headphones listening to music. Colored digital vector drawing illustration. Abstract monkey for wall art, t-shirt, or poster. Digital art.',
    image: 'https://www.shutterstock.com/shutterstock/photos/2019487502/display_1500/stock-vector-monkey-with-headphones-listening-to-music-colored-digital-vector-drawing-illustration-abstract-2019487502.jpg',
    category: 'Art'
},
{
    id: 'art15',
    title: 'eye',
    Owned_by: 'Mari Dein',
    price: 999.00,
    description: 'Conceptual abstract picture of the eye. Conceptual abstract closeup of an oil painting and palette knife on canvas.',
    image: 'https://www.shutterstock.com/shutterstock/photos/1445018480/display_1500/stock-photo--fluorite-oil-painting-conceptual-abstract-picture-of-the-eye-oil-painting-in-colorful-1445018480.jpg',
    category: 'Art'
},
{
    id: 'art16',
    title: 'Lofi girl illustration',
    Owned_by: 'Fortis Design',
    price: 255.40,
    description: 'Try looking at the sky and see if its still blueLooking at the ground its still ground.As such the world is still the same.',
    image: 'https://www.shutterstock.com/shutterstock/photos/2279016883/display_1500/stock-vector-lofi-girl-illustration-young-woman-looking-in-the-distance-cartoon-drawing-of-chill-relaxed-lady-2279016883.jpg',
    category: 'Art'
},
{
    id: 'art17',
    title: 'Sunflowers',
    Owned_by: 'Ivailo Nikolov',
    price: 800.00,
    description: 'Oil painting on canvas. Sunflower painting. modern impressionism It is a symbol of confidence and stability in good love.',
    image: 'https://www.shutterstock.com/shutterstock/photos/2177029373/display_1500/stock-photo-oil-painting-on-canvas-sunflowers-painting-modern-impressionism-2177029373.jpg',
    category: 'Art'
},
{
    id: 'art18',
    title: 'Ancient torii gate',
    Owned_by: 'Bankphotographer',
    price: 1234.59,
    description: 'Japanese art with ancient torii gate designs The territory behind the torii gate is the territory of the gods. And beautiful nature of Japan.',
    image: 'https://www.shutterstock.com/shutterstock/photos/2321626339/display_1500/stock-vector-japanese-art-with-ancient-design-of-torii-gate-and-the-beautiful-nature-of-japan-vector-illustration-2321626339.jpg',
    category: 'Art'
},
{
    id: 'art19',
    title: 'van gogh',
    Owned_by: 'nattapon kanchanaket',
    price: 565.00,
    description: 'He transforms pain into blissful beauty. Expressing it is easy.',
    image: 'https://www.shutterstock.com/shutterstock/photos/1506765383/display_1500/stock-vector-van-gogh-vector-art-illustration-design-1506765383.jpg',
    category: 'Art'
},
{
    id: 'art20',
    title: 'Chinese New Year 2023',
    Owned_by: 'extripod',
    price: 1756.70,
    description: 'Dynamic perfect animation for the year of rabbit',
    image: 'https://www.shutterstock.com/shutterstock/photos/2137532615/display_1500/stock-vector-happy-chinese-new-year-rabbit-zodiac-sign-with-gold-paper-cut-art-and-craft-style-on-color-2137532615.jpg',
    category: 'Art'
},
{
    id: 'art21',
    title: 'Ultra Cat',
    Owned_by: 'Vectordidak',
    price: 215.10,
    description: 'Cat Vector Illustration Superhero.Cat Simple Mascot Style',
    image: 'https://www.shutterstock.com/shutterstock/photos/2122284392/display_1500/stock-vector-cat-vector-illustration-superhero-cat-simple-mascot-style-2122284392.jpg'
},
{
    id: 'art22',
    title: 'Cyber Cat',
    Owned_by: 'frozenbunn',
    price: 345.00,
    description: 'Key to success Let the investigators strive to be an evolution of the cat.',
    image: 'https://www.shutterstock.com/shutterstock/photos/2226852425/display_1500/stock-vector-vector-art-illustration-cyber-cat-2226852425.jpg',
    category: 'Art'
},
])
return { Art_list }
})

export const useGame_listStore = defineStore('Game_list', () => {
    const Game_list = ref([
        {
            id: 'game1',
            title: 'Pokemon - Emerald ',
            Owned_by: 'Shigeki Morimoto',
            price: 777.00,
            description: 'The Pokémon game series involves catching and battling Pokémon. Lets start with the starter Pokémon. Players can catch wild Pokémon by weakening them and catching them with Pokéballs. ',
            image: 'https://i.pinimg.com/originals/78/b7/70/78b77044c0f2add302f2e81beb3a0f9b.gif',
            category: 'Game'
        },
        {
            id: 'game2',
            title: 'Pixel Game',
            Owned_by: 'PixelChoice',
            price: 125.00,
            description: 'Pixel art design with outdoor landscape background. Colorful pixel arcade screen for game design. Banner with button level up. Game design concept in retro style. Vector illustration.',
            image: 'https://i.pinimg.com/originals/7b/2d/d7/7b2dd78b2d4f87ce82033ad195a6c6ea.gif',
            category: 'Game'
        },
        {
            id: 'game3',
            title: 'Pixel Mona Lisa',
            Owned_by: 'NLD Illustration',
            price: 777.00,
            description: 'Pixel Art, Portrait of Mona Lisa, Leonardo da Vinci in frame. Creative artwork, crypto art, modern digital pixelated canvas, NFT nonfungible token. World\'s Most Famous Painting. Vector illustration.',
            image: 'https://www.shutterstock.com/shutterstock/photos/2254415147/display_1500/stock-vector-pixel-art-portrait-of-mona-lisa-leonardo-da-vinci-in-frame-creative-artwork-crypto-art-modern-2254415147.jpg',
            category: 'Game'
        },
        {
            id: 'game4',
            title: 'Final Fantasy',
            Owned_by: 'FGFACTORY',
            price: 777.00,
            description: 'Final Fantasy VII Remake is the remake of the classic PlayStation 1997 game, Final Fantasy VII. For awhile, the game was only available for PlayStation consoles. Fitting properly on your desktop devices',
            image: 'https://i.pinimg.com/736x/23/4b/ca/234bcaa2dafbea1f1f4799a13388ab13.jpg',
            category: 'Game'
        },
        {
            id: 'game5',
            title: 'Apex Legends',
            Owned_by: 'StormerX',
            price: 552.27,
            description: 'Is a hero shooter game from Respawn Entertainment. that has received many awards Discover strategic team play with a new gameplay system that is the next evolution in the hero shooter and battle genre.',
            image: 'https://i.pinimg.com/originals/df/8b/7f/df8b7f1db0dd1db98a4309db03241efa.gif',
            category: 'Game'
        },
        {
            id : 'game6',
            title: 'cyberpunk skull robot',
            Owned_by: 'GrandeDuc ',
            price: 1152.82,
            description: 'What will happen? When a Wired Cyberpunk Skull Robot - 3D Illustration of a Science Fiction Cyberpunk Skull Faces Other Bespectacled Smiling Robots Virtual reality of the future world',
            image: 'https://www.shutterstock.com/shutterstock/photos/2022343115/display_1500/stock-photo-hardwired-cyberpunk-skull-robot-d-illustration-of-science-fiction-cyberpunk-skull-faced-grinning-2022343115.jpg',
            category: 'Game'
        },
        {
            id: 'game7',
            title: 'Rockman',
            Owned_by: 'Jonistudio',
            price: 1846.00,
            description: ' The series is so important to the original Rockman games that the expansions in the series and additional important games like the Game Boy would become the story of the Rockman legend.',
            image: 'https://i.pinimg.com/originals/28/33/ff/2833fff47e5d8840a6aed1b23b599456.gif',
            category: 'Game'
        },
        {
            id: 'game8',
            title: 'mountains in style sumi-e, u-sin.',
            Owned_by: 'Bankphotographer',
            price: 985.63,
            description: 'Watercolor and ink illustration of Chinese landscape with pagoda and mountains in style sumi-e, u-sin. Traditional Asian architecture. Oriental traditional painting.',
            image: 'https://www.shutterstock.com/shutterstock/photos/2310172265/display_1500/stock-vector-watercolor-and-ink-illustration-of-chinese-landscape-with-pagoda-and-mountains-in-style-sumi-e-u-2310172265.jpg',
            category: 'Game'
        },
        {
            id: 'game9',
            title: 'Among us',
            Owned_by: 'InnerSloth LLC',
            price: 756.29,
            description: 'Is a multiplayer video game developed and published by Inner Sloth Company. The game is set in space. that can be specified The crews goal is to complete various missions.',
            image: 'https://i.pinimg.com/originals/71/2c/0c/712c0cba7f0b69ca25a27cd789b9bcca.gif',
            category: 'Game'
        },
        {
            id: 'game10',
            title: 'Portrait of a futuristic',
            Owned_by: 'Digital Storm',
            price: 1152.82,
            description: 'Portrait of a futuristic sci-fi woman wearing a jumpsuit and a choice of weapons, tactical gear and a cool science fiction mask. Blurred light background with lens flare.',
            image: 'https://www.shutterstock.com/shutterstock/photos/2043994739/display_1500/stock-photo-portrait-of-a-futuristic-sci-fi-female-wearing-a-tactical-jump-suit-and-a-science-fiction-visor-2043994739.jpg',
            category: 'Game'
        },
        {
            id : 'game11',
            title: 'Street Fighter',
            Owned_by: 'CAPCOM',
            price: 1572.82,
            description: 'Experience the thrilling, one-on-one battle. Challenge your friends Can be used both online and offline Plus, you can choose to fight your opponent in a variety of formats.',
            image: 'https://i.pinimg.com/originals/50/26/8b/50268b80812f0ba0057af3ee00dcfd24.gif',
            category: 'Game'
        },
        {
            id: 'game12',
            title: 'valorant',
            Owned_by: 'Riot Games',
            price: 946.60,
            description: ' Mix your style and experience Attack and defend your team with your sharp shooting and tactical abilities. and wants to survive with the only life that is available',
            image: 'https://i.pinimg.com/originals/1c/ba/66/1cba66c98464da8d4c04d020c9e31f0a.gif',
            category: 'Game'
        },
    ])
    

    return { Game_list }
})

export const usePhotography_listStore = defineStore('Photography_list', () => {
    const Photography_list = ref([
        {
            id: 'pro1',
            title: 'Sunshine',
            Owned_by: 'Pvoak ',
            price: 725.38,
            description: 'The way we think about what is happening in front of us is saddened by giving up. But we will be strong in our acceptance. And people who can accept the truth of life in every situation without going into hysterics for us.',
            image: 'https://i.pinimg.com/564x/8e/84/4e/8e844e31af6c458a6870d1342ac05474.jpg',
            category: 'Pro'
        },
        {
            id: 'pro2',
            title: 'Every time I see youn',
            Owned_by: 'Deachasris Master',
            price: 485.79,
            description: 'Representative of new love And it is also the flower of the first wedding anniversary, so people like to use carnations to express their love. The color red means admiration, liking, and affection. White means pure love and good luck.',
            image: 'https://i.pinimg.com/564x/d5/f9/fa/d5f9fad2a5cbdf8a7a005e10da897694.jpg',
            category: 'Pro'
        },
        {
            id: 'pro3',
            title: 'Your own value',
            Owned_by: 'M. Scott Peck',
            price: 862,
            description: 'having a crush on someone It is a classic heartfelt flower that lets you know that someone is delighted. There is love that is extremely deep, stable, and will never fade away.  They bring good luck and love to the woman or man who receives them.',
            image: 'https://i.pinimg.com/564x/a9/fa/08/a9fa0836ac7edb7b707a0306e805b439.jpg',
            category: 'Pro'
        },
        {
            id: 'pro4',
            title: 'cat in morning',
            Owned_by: 'Matteo Petralli',
            price: 300.00,
            description: 'In the refreshing morning, Emma slowly woke up from her bed, as if her body was emerging from a state of weakness from sleep. Her eyes began to open, gradually adjusting to the warm, cozy surroundings of her bedroom.',
            image: 'https://images.pexels.com/photos/1828875/pexels-photo-1828875.jpeg',
            category: 'Pro'
        },
        {
            id: 'pro5',
            title: 'Night Town',
            Owned_by: "imase",
            price: 798.99,
            description: 'Psychological changes cause an influx of creativity. This made it very unlikely that anything would pull him away from those writings.',
            image: 'https://images.pexels.com/photos/2389349/pexels-photo-2389349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            category: 'Pro'
        },
        {
            id: 'pro6',
            title: 'NIGHT DANCER',
            Owned_by: 'MUSKETEERS',
            price: 300.00,
            description: 'Dancing together to the music radiance and youIt was just an ordinary, boring night.But we made some very special memories together.',
            image: 'https://i.pinimg.com/564x/d0/62/89/d06289c19214ad26a4dceb4d4cb60748.jpg',
            category: 'Pro'
        },
        {
            id: 'pro7',
            title: 'Spider-Man',
            Owned_by: 'Matteo Petralli',
            price: 300.00,
            description: 'Anyone can win a battle when things are easy. When things get tough, when it seems like there is really no chance, that is when it counts.',
            image: 'https://i.pinimg.com/564x/93/9d/53/939d5361bf2df4d946a4c14eb0f9ad75.jpg',
            category: 'Pro'
        },
        {
            id: 'pro8',
            title: 'Silver Wolf',
            Owned_by: 'Linda ',
            price: 675.37,
            description: 'Wolves are nocturnal hunters, expert hunters, Wolves are warriors, great leaders and protectors of innocent creatures.',
            image: 'https://i.pinimg.com/564x/95/f4/82/95f4824c38e10f10bdf2a778d3823937.jpg',
            category: 'Pro'
        },
        {
            
            id: 'pro9',
            title: 'milky way above frozen',
            Owned_by: 'Addictive Creative',
            price: 685.79,
            description: 'The Milky Ways dazzling stars shine above the frozen sea surrounding the snow-capped Vestrahorn mountains in Stockness Beach.',
            image: 'https://www.shutterstock.com/shutterstock/photos/2250976357/display_1500/stock-photo-picturesque-glowing-stars-of-milky-way-above-frozen-sea-surrounding-high-rocky-snowy-vestrahorn-2250976357.jpg',
            category: 'Pro'
        },
        {
            id: 'pro10',
            title: 'The moon',
            Owned_by: 'Travel Lifestyle',
            price: 699.26,
            description: 'The moon has two sides: the light side and the dark side. Just like a person must have both good and bad sides. So we complement each other.',
            image: 'https://i.pinimg.com/564x/cc/a1/cd/cca1cdf862c179dcce94ef2d77eaa557.jpg',
            category: 'Pro'
        },
        {
            id: 'pro11',
            title: 'Star trail',
            Owned_by: 'Amazing Travel Lifestyle',
            price: 565.69,
            description: 'View of Table Mountain with beautiful star trails from Lions Head Mountain. Cape Town city South Africa Cape Towns Top Tourist Attractions',
            image: 'https://www.shutterstock.com/shutterstock/photos/2180472695/display_1500/stock-photo-view-of-table-mountain-with-star-trail-form-lion-s-head-mountain-cape-town-cape-town-south-2180472695.jpg',
            category: 'Pro'
        },
        {
            id: 'pro12',
            title: 'City ​​Center',
            Owned_by: 'MUSKETEERS',
            price: 300.00,
            description: 'In a city full of problems looking up at the sky What are we searching for so much? Dreams are bigger than meets the eye.',
            image: 'https://i.pinimg.com/564x/c8/2d/b5/c82db55998e4255a47a8a652fdf99064.jpg',
            category: 'Pro'
        },





    ])


    return { Photography_list }
})

export const NewsPage_menu = defineStore('menu05', () => {

    const NewsPage_data = ref([
          {
            id: '1',
            name: "Espresso",
            coverimage: "https://img.salehere.co.th/p/1200x0/2021/11/27/0rta2kzzmpjp.jpg",
            price: "45"
          },
          {
            id: '2',
            name: "Espresso con panna coffee",
            coverimage: "https://img.salehere.co.th/p/1200x0/2021/11/27/ba8tsfypxocw.jpg",
            price: "55"
          },
          {
            id: '3',
            name: "Long Black",
            coverimage: "https://img.salehere.co.th/p/1200x0/2021/11/27/jvbo4z0urqfp.jpg",
            price: "45"
          },
          {
            id: '4',
            name: "Latte",
            coverimage: "https://img.salehere.co.th/p/1200x0/2021/11/27/vrrocyts6ngu.jpg",
            price: "40"
          },
          {
            id: 5,
            name: "Flat White",
            coverimage: "https://img.salehere.co.th/p/1200x0/2021/11/27/jeumhnaierva.jpg",
            price: "65"
          },
          {
            id: 6,
            name: "Cappuccino",
            coverimage: "https://img.salehere.co.th/p/1200x0/2021/11/27/3b2xlwjr0dp1.jpg",
            price: "60",
          }
    ])
        
    return { NewsPage_data }
    })