const sitiosInteresArray = [
    {
        nombre: 'UNGS',
        descripcion: 'Universidad Nacional de General Sarmiento',
        foto:'https://www.ungs.edu.ar/wp-content/uploads/2019/08/Campus-aérea4.png',
        coordenadas: [-34.52182400868136, -58.70019793510438],
        atractivos: [
            {
                resumen: 'Biblioteca',
                descripcionCompleta: 'Amplia biblioteca publica disponible de 9 a 18 hs',
                foto: 'https://www.ungs.edu.ar/wp-content/uploads/2022/06/biblioteca-horacio-gonzalez-ungs.jpg',
            },
            {
                resumen: 'Teatro',
                descripcionCompleta: 'Obras de teatro',
                foto: 'https://scontent.faep9-1.fna.fbcdn.net/v/t39.30808-6/305156066_550292800226434_6685527277836115760_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=mEStGC8jrEsAX9XFhJ3&_nc_ht=scontent.faep9-1.fna&oh=00_AfAbjPvuhVvzIU6IIMz3pXCl728s9QZGpdRjjoDNzCFChA&oe=655610DB',
            }
        ]
    },
    {
        nombre: 'Terrazas de Mayo',
        descripcion: 'Shopping Terrazas de Mayo',
        foto:'https://dycasa.com/wp-content/uploads/2014/12/IMG_6151-rr.jpg',
        coordenadas: [-34.5484913018673, -58.71923915924889],
        atractivos: [
            {
                resumen: 'Neverland',
                descripcionCompleta: 'Parque de diversión indoor',
                foto: 'https://scontent.faep9-3.fna.fbcdn.net/v/t1.6435-9/52457869_1048091418711542_1889429840919003136_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=Rzq7p-SGLggAX9QtJ6k&_nc_ht=scontent.faep9-3.fna&oh=00_AfAax6-SBiCecesjPERHQPOyKlIuR7u13akP36kWbeT8FA&oe=6577B233',
            },
            {
                resumen: 'Arena GameX',
                descripcionCompleta: 'Sala recreativa de videojuegos',
                foto: 'https://www.terrazasdemayo.com.ar/wp-content/uploads/2023/02/arena-x-game.webp',
            },
            {
                resumen: 'CUBIX ',
                descripcionCompleta: 'Sala de escape',
                foto: 'https://www.terrazasdemayo.com.ar/wp-content/uploads/2023/09/Design-cubix_8.webp',
            }]

    },
    {
        nombre: 'Sumeru',
        descripcion: 'Ciudad de la Sabiduría',
        foto:'https://static.wikia.nocookie.net/gen-impact/images/9/9d/Localizaci%C3%B3n_Ciudad_de_Sumeru.png/revision/latest/scale-to-width-down/350?cb=20221010172343&path-prefix=es',
        coordenadas: [-34.52685358890572, -58.67574691772462],
        atractivos: [
            {
                resumen: 'Academia de Sabios',
                descripcionCompleta: 'Amplia biblioteca publica disponible de 9 a 18 hs',
                foto: 'https://cdn2.unrealengine.com/image-3-3840x2160-66f95019dcca.jpg',
            },
            {
                resumen: 'Taberna Yafar',
                descripcionCompleta: 'Conocido por sus extravagentes platos gastronómicos',
                foto: 'https://static.wikia.nocookie.net/gen-impact/images/2/21/Localizaci%C3%B3n_Taberna_Yafar.png/revision/latest/scale-to-width-down/180?cb=20221014141225&path-prefix=es',
            },
            {
                resumen: 'Piramide Invertida del Rey Deshret',
                descripcionCompleta: 'Monumento principal del Desierto ',
                foto: 'https://cdn2.unrealengine.com/01-3840x2160-daa2547ad5b8.jpg',
            }
        ]
    },
    {
        nombre: 'Fontaine',
        descripcion: 'Ciudad de la Justicia',
        foto:'https://live.staticflickr.com/65535/53084287801_1e0e7a718d_h.jpg',
        coordenadas: [-34.56838241670848, -58.67574691772462],
        atractivos: [
            {
                resumen: 'Corte de Fontaine',
                descripcionCompleta: 'La Corte de Fontaine es el tribunal de Focalors, la actual Arconte Hydro y la Diosa de la Justicia, establecido hace al menos mil años.',
                foto: 'https://cdn2.unrealengine.com/image-3-3840x2160-66f95019dcca.jpg',
            },
            {
                resumen: 'Aldea Espumarina',
                descripcionCompleta: 'La Aldea Espumarina es "un pueblo adorable y misterioso donde hasta las chimeneas burbujean"',
                foto: 'https://static.wikia.nocookie.net/gen-impact/images/2/21/Localizaci%C3%B3n_Taberna_Yafar.png/revision/latest/scale-to-width-down/180?cb=20221014141225&path-prefix=es',
            }
        ]
    },
    {
        nombre: 'Mondstadt',
        descripcion: 'Ciudad de la Libertad',
        foto:'https://www.gamingtalker.it/wp-content/uploads/2021/04/Genshin-Impact-update-1-5-Screenshot-14-900x506.jpg',
        coordenadas: [-34.49523909266902, -58.72690200805665],
        atractivos: [
            {
                resumen: 'Viñedo del Amanecer',
                descripcionCompleta: 'El viñedo que ha transmitido el legado de los vinos y sidras tradicionales de Mondstadt durante generaciones',
                foto: 'https://static.wikia.nocookie.net/gen-impact/images/4/4f/Vi%C3%B1edo_del_Amanecer.png/revision/latest/scale-to-width-down/350?cb=20210306213800&path-prefix=es',
            },
            {
                resumen: 'Templo de los Mil Vientos',
                descripcionCompleta: 'Una colección de ruinas de templos que se encuentra al noreste de Mondstadt',
                foto: 'https://genshin.honeyhunterworld.com/img/view_70100009.webp?x41765',
            }
        ]
    },
    {
        nombre: 'Liyue',
        descripcion: 'Ciudad de los contratos',
        foto:'https://live.staticflickr.com/65535/50859450722_9e47e52378_o.jpg',
        coordenadas: [-34.51702396789497, -58.74423980712891],
        atractivos: [
            {
                resumen: 'Lisha',
                descripcionCompleta: 'Es una región en la parte suroeste de Liyue, es la región que colida con la Sima.',
                foto: 'https://static.wikia.nocookie.net/gen-impact/images/4/45/Ruinas_de_Dunyu.png/revision/latest/scale-to-width-down/160?cb=20210503003716&path-prefix=es',
            },
            {
                resumen: 'Sima',
                descripcionCompleta: 'La Sima es un área en localizada al oeste de Lisha en Liyue, y es la principal fuente de minerales de la nación.',
                foto: 'https://static.wikia.nocookie.net/gen-impact/images/9/93/Sima.png/revision/latest/scale-to-width-down/158?cb=20220403072635&path-prefix=es',
            },

        ]
    }

]