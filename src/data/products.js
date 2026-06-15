// this is my products array of objects which i'm exporting to use in other places in my code
const Products = [
    {
        id: 1,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780078469/WhatsApp_Image_2026-05-29_at_07.55.59_mqvz3l.jpg",
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780078605/WhatsApp_Image_2026-05-29_at_08.01.07_m2gcrg.jpg",
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780078604/WhatsApp_Image_2026-05-29_at_07.58.12_guoejb.jpg",
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780078605/WhatsApp_Image_2026-05-29_at_08.02.17_hrgw4e.jpg",
        ],
        price: 30000.00,
        name: "PG-001",
        size: ["S", "M", "L", "XL", "XXL"],
        des1: "A timeless maxi gown featuring a flattering V-neckline, elegant puff sleeves, a fitted waist, and a flowing full-length skirt. Designed to make a statement at weddings, dinners, and special occasions. Effortlessly sophisticated and undeniably chic.",
        category: "women",

        colour: [
            { name: "Red", hex: "#FF0000" },
            { name: "Blue", hex: "#0000FF" },
            { name: "Black", hex: "#000000" },
            { name: "Brown", hex: "#8B4513" },
        ],

        rating: 2,


        inStock: 10,
    },


    {
        id: 2,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780257081/WhatsApp_Image_2026-05-31_at_01.01.50_ktm7tc.jpg",
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780346268/WhatsApp_Image_2026-06-01_at_16.06.53_1_ef4rb5.jpg",
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780346269/WhatsApp_Image_2026-06-01_at_16.06.53_h81tln.jpg",
        ],
        price: 30000.00,
        name: "PG-002",
        size: ["S", "M", "L", "XL", "XXL"],
        des1: "A timeless maxi gown featuring a flattering V-neckline, elegant puff sleeves, a fitted waist, and a flowing full-length skirt. Designed to make a statement at weddings, dinners, and special occasions. Effortlessly sophisticated and undeniably chic.",
        category: "women",

        colour: [
            { name: "Red", hex: "" },
            { name: "Brown", hex: "" },
            { name: "Black", hex: "" },
        ],

        rating: 4,


        inStock: 10,
    },

    {
        id: 3,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780486375/WhatsApp_Image_2026-05-31_at_00.10.26_j6chzu.jpg",
        ],
        price: 40000.00,
        name: "PG-003",
        size: ["S", "M", "L", "XL", "XXL"],
        des1: "A stunning floor-length gown designed to captivate. Featuring a sophisticated halter neckline, intricate black embellishments, and a figure-flattering silhouette, the Black Diamond Halter Gown exudes timeless elegance and effortless glamour for your most memorable occasions.",
        category: "women",

        colour: [
            { name: "", hex: "" },
        ],

        rating: 4,


        inStock: 10,
    },

    {
        id: 4,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780484458/WhatsApp_Image_2026-06-03_at_06.55.09_gvn5ez.jpg",
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780484457/WhatsApp_Image_2026-06-03_at_06.55.08_gmv6co.jpg",
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780484416/WhatsApp_Image_2026-06-03_at_06.55.08_1_pjubxb.jpg",
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780484416/WhatsApp_Image_2026-06-03_at_06.54.30_viwjts.jpg",
        ],
        price: 35000.00,
        name: "PG-004",
        size: ["S", "M", "L", "XL", "XXL"],
        des1: "A flowing full-length Lycra kaftan designed for effortless elegance and comfort. Featuring a relaxed silhouette, wide sleeves, and signature geometric accent details.",
        category: "women",

        colour: [
            { name: "Blue", hex: "" },
            { name: "Black", hex: "" },
            { name: "Red", hex: "" },
            { name: "Burnt Orange", hex: "" },
        ],

        rating: 3,


        inStock: 10,
    },


    {
        id: 5,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780256825/WhatsApp_Image_2026-05-31_at_00.30.37_mk458y.jpg",
        ],
        price: 30000.00,
        name: "PG-005",
        size: ["S", "M", "L", "XL", "XXL"],
        des1: "A timeless maxi gown featuring a flattering V-neckline, elegant puff sleeves, a fitted waist, and a flowing full-length skirt. Designed to make a statement at weddings, dinners, and special occasions. Effortlessly sophisticated and undeniably chic.",
        category: "women",

        colour: [
            { name: "Tropical Print", hex: "" },
        ],

        rating: 3,


        inStock: 10,
    },

    {
        id: 6,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780483187/WhatsApp_Image_2026-06-03_at_06.35.32_zctknl.jpg",
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780483186/WhatsApp_Image_2026-06-03_at_06.39.18_q76el5.jpg",
        ],
        price: 20000.00,
        name: "PG-006",
        size: ["S", "M", "L", "XL", "XXL"],
        des1: "A timeless maxi gown featuring a flattering V-neckline, elegant puff sleeves, a fitted waist, and a flowing full-length skirt. Designed to make a statement at weddings, dinners, and special occasions. Effortlessly sophisticated and undeniably chic.",
        category: "women",

        colour: [
            { name: "", hex: "" },
        ],

        rating: 2,


        inStock: 10,
    },

    {
        id: 7,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780482776/WhatsApp_Image_2026-06-03_at_02.12.28_1_g3qedq.jpg",
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780482776/WhatsApp_Image_2026-06-03_at_02.12.28_qck36h.jpg",
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780482776/WhatsApp_Image_2026-06-03_at_02.12.29_rujo2s.jpg",
        ],
        price: 35000.00,
        name: "PG-007",
        size: ["S", "M", "L", "XL", "XXL"],
        des1: "A timeless maxi gown featuring a flattering V-neckline, elegant puff sleeves, a fitted waist, and a flowing full-length skirt. Designed to make a statement at weddings, dinners, and special occasions. Effortlessly sophisticated and undeniably chic.",
        category: "women",

        colour: [
            { name: "Black", hex: "" },
            { name: "Brown", hex: "" },
            { name: "Burgundy", hex: "" },
        ],

        rating: 5,


        inStock: 10,
    },

    {
        id: 8,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780483146/WhatsApp_Image_2026-06-03_at_02.12.31_gxnqre.jpg",
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780483145/WhatsApp_Image_2026-06-03_at_02.12.29_1_vxmrqd.jpg",
        ],
        price: 35000.00,
        name: "PG-008",
        size: ["S", "M", "L", "XL", "XXL"],
        des1: "A timeless maxi gown featuring a flattering V-neckline, elegant puff sleeves, a fitted waist, and a flowing full-length skirt. Designed to make a statement at weddings, dinners, and special occasions. Effortlessly sophisticated and undeniably chic.",
        category: "women",

        colour: [
            { name: "Blue", hex: "" },
            { name: "Red", hex: "" },
        ],

        rating: 4,


        inStock: 10,
    },

    {
        id: 9,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780257908/WhatsApp_Image_2026-05-31_at_00.27.58_x4krfh.jpg",
        ],

        price: 28000.00,
        name: "PG-009",
        size: ["S", "M", "L", "XL", "XXL"],
        des1: "A timeless maxi gown featuring a flattering V-neckline, elegant puff sleeves, a fitted waist, and a flowing full-length skirt. Designed to make a statement at weddings, dinners, and special occasions. Effortlessly sophisticated and undeniably chic.",
        category: "women",

        colour: [
            { name: "White", hex: "#ffffff" },
        ],

        rating: 4,


        inStock: 10,
    },



    {
        id: 10,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780486111/WhatsApp_Image_2026-05-30_at_23.53.17_bstcur.jpg",
        ],
        price: 22000.00,
        name: "PG-0010",
        size: ["S", "M", "L", "XL", "XXL"],
        des1: "A timeless maxi gown featuring a flattering V-neckline, elegant puff sleeves, a fitted waist, and a flowing full-length skirt. Designed to make a statement at weddings, dinners, and special occasions. Effortlessly sophisticated and undeniably chic.",
        category: "women",

        colour: [
            { name: "", hex: "" },
        ],

        rating: 2,


        inStock: 10,
    },

    {
        id: 11,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780486111/WhatsApp_Image_2026-05-30_at_23.55.29_xtwe81.jpg",
        ],
        price: 22000.00,
        name: "PG-0011",
        size: ["S", "M", "L", "XL", "XXL"],
        des1: "A timeless maxi gown featuring a flattering V-neckline, elegant puff sleeves, a fitted waist, and a flowing full-length skirt. Designed to make a statement at weddings, dinners, and special occasions. Effortlessly sophisticated and undeniably chic.",
        category: "women",

        colour: [
            { name: "", hex: "" },
        ],

        rating: 4,


        inStock: 10,
    },

    {
        id: 12,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780486374/WhatsApp_Image_2026-05-31_at_00.02.01_iwf5zw.jpg",
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780486403/WhatsApp_Image_2026-05-31_at_00.29.20_am12k7.jpg",
        ],
        price: 30000.00,
        name: "PG-0012",
        size: ["S", "M", "L", "XL", "XXL"],
        des1: "A timeless maxi gown featuring a flattering V-neckline, elegant puff sleeves, a fitted waist, and a flowing full-length skirt. Designed to make a statement at weddings, dinners, and special occasions. Effortlessly sophisticated and undeniably chic.",
        category: "women",

        colour: [
            { name: "", hex: "" },
        ],

        rating: 4,


        inStock: 10,
    },

    {
        id: 13,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780257633/WhatsApp_Image_2026-05-31_at_00.14.15_ki2s3w.jpg",
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780257633/WhatsApp_Image_2026-05-31_at_00.12.38_uaiwnf.jpg",
        ],
        price: 25000.00,
        name: "PG-0013",
        size: ["S", "M", "L", "XL", "XXL"],
        des1: "A timeless maxi gown featuring a flattering V-neckline, elegant puff sleeves, a fitted waist, and a flowing full-length skirt. Designed to make a statement at weddings, dinners, and special occasions. Effortlessly sophisticated and undeniably chic.",
        category: "women",

        colour: [
            { name: "Red", hex: "#FF0000" },
            { name: "Black", hex: "#000000" },
        ],

        rating: 3,


        inStock: 10,
    },

    {
        id: 14,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780486111/WhatsApp_Image_2026-05-30_at_23.49.26_kaeuig.jpg",
        ],
        price: 40000.00,
        name: "PG-0014",
        size: ["S", "M", "L", "XL", "XXL"],
        des1: "A timeless maxi gown featuring a flattering V-neckline, elegant puff sleeves, a fitted waist, and a flowing full-length skirt. Designed to make a statement at weddings, dinners, and special occasions. Effortlessly sophisticated and undeniably chic.",
        category: "women",

        colour: [
            { name: "", hex: "" },
        ],

        rating: 5,


        inStock: 10,
    },

    {
        id: 15,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780486374/WhatsApp_Image_2026-05-31_at_00.05.47_qekhoy.jpg",
        ],
        price: 28999.00,
        name: "PG-0015",
        size: ["S", "M", "L", "XL", "XXL"],
        des1: "A timeless maxi gown featuring a flattering V-neckline, elegant puff sleeves, a fitted waist, and a flowing full-length skirt. Designed to make a statement at weddings, dinners, and special occasions. Effortlessly sophisticated and undeniably chic.",
        category: "women",

        colour: [
            { name: "", hex: "" },
        ],

        rating: 5,


        inStock: 10,
    },

    {
        id: 16,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780486111/WhatsApp_Image_2026-05-30_at_23.57.26_pdr5ws.jpg",
        ],
        price: 22000.00,
        name: "PG-0016",
        size: ["S", "M", "L", "XL", "XXL"],
        des1: "A timeless maxi gown featuring a flattering V-neckline, elegant puff sleeves, a fitted waist, and a flowing full-length skirt. Designed to make a statement at weddings, dinners, and special occasions. Effortlessly sophisticated and undeniably chic.",
        category: "women",

        colour: [
            { name: "", hex: "" },
        ],

        rating: 3,


        inStock: 10,
    },

    {
        id: 17,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780486375/WhatsApp_Image_2026-05-31_at_00.08.47_gzxbvu.jpg",
        ],
        price: 22000.00,
        name: "PG-0017",
        size: ["S", "M", "L", "XL", "XXL"],
        des1: "A timeless maxi gown featuring a flattering V-neckline, elegant puff sleeves, a fitted waist, and a flowing full-length skirt. Designed to make a statement at weddings, dinners, and special occasions. Effortlessly sophisticated and undeniably chic.",
        category: "women",

        colour: [
            { name: "", hex: "" },
        ],

        rating: 3,


        inStock: 10,
    },

    {
        id: 18,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780486374/WhatsApp_Image_2026-05-31_at_00.01.08_zjvx4w.jpg",
        ],
        price: 30000.00,
        name: "PG-0018",
        size: ["S", "M", "L", "XL", "XXL"],
        des1: "A timeless maxi gown featuring a flattering V-neckline, elegant puff sleeves, a fitted waist, and a flowing full-length skirt. Designed to make a statement at weddings, dinners, and special occasions. Effortlessly sophisticated and undeniably chic.",
        category: "women",

        colour: [
            { name: "", hex: "" },
        ],

        rating: 5,


        inStock: 10,
    },

    {
        id: 19,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780487324/WhatsApp_Image_2026-06-03_at_07.48.18_vjljdf.jpg",
        ],
        price: 22000.00,
        name: "PG-0019",
        size: ["S", "M", "L", "XL", "XXL"],
        des1: "A timeless maxi gown featuring a flattering V-neckline, elegant puff sleeves, a fitted waist, and a flowing full-length skirt. Designed to make a statement at weddings, dinners, and special occasions. Effortlessly sophisticated and undeniably chic.",
        category: "women",

        colour: [
            { name: "", hex: "" },
        ],

        rating: 3,


        inStock: 10,
    },

    {
        id: 20,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780486964/WhatsApp_Image_2026-05-31_at_00.34.38_puhpxi.jpg",
        ],
        price: 30000.00,
        name: "PG-0020",
        size: ["S", "M", "L", "XL", "XXL"],
        des1: "A timeless maxi gown featuring a flattering V-neckline, elegant puff sleeves, a fitted waist, and a flowing full-length skirt. Designed to make a statement at weddings, dinners, and special occasions. Effortlessly sophisticated and undeniably chic.",
        category: "women",

        colour: [
            { name: "", hex: "" },
        ],

        rating: 5,


        inStock: 10,
    },

    {
        id: 21,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780483146/WhatsApp_Image_2026-06-03_at_02.12.30_r5dyxe.jpg",
        ],
        price: 35000.00,
        name: "PG-0021",
        size: ["S", "M", "L", "XL", "XXL"],
        des1: "Effortlessly elegant and beautifully crafted, our Bubu gowns combine comfort, style, and sophistication. Designed with flowing silhouettes and premium fabrics, each piece offers a timeless look perfect for any occasion.",
        category: "women",

        colour: [
            { name: "", hex: "" },
        ],

        rating: 4,


        inStock: 10,
    },

    {
        id: 22,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780483116/WhatsApp_Image_2026-06-03_at_02.12.30_1_hqbymb.jpg",
        ],
        price: 35000.00,
        name: "PG-0022",
        size: ["S", "M", "L", "XL", "XXL"],
        des1: "Effortlessly elegant and beautifully crafted, our Bubu gowns combine comfort, style, and sophistication. Designed with flowing silhouettes and premium fabrics, each piece offers a timeless look perfect for any occasion.",
        category: "women",

        colour: [
            { name: "", hex: "" },
        ],

        rating: 3,


        inStock: 10,
    },

    {
        id: 23,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780485406/WhatsApp_Image_2026-06-03_at_04.41.42_1_re4ztd.jpg",
        ],
        price: 35000.00,
        name: "PG-0023",
        size: ["S", "M", "L", "XL", "XXL"],
        des1: "Effortlessly elegant and beautifully crafted, our Bubu gowns combine comfort, style, and sophistication. Designed with flowing silhouettes and premium fabrics, each piece offers a timeless look perfect for any occasion.",
        category: "women",

        colour: [
            { name: "", hex: "" },
        ],

        rating: 3,


        inStock: 10,
    },

    {
        id: 24,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780485407/WhatsApp_Image_2026-06-03_at_04.41.42_2_bssris.jpg",
        ],
        price: 35000.00,
        name: "PG-0024",
        size: ["S", "M", "L", "XL", "XXL"],
        des1: "Effortlessly elegant and beautifully crafted, our Bubu gowns combine comfort, style, and sophistication. Designed with flowing silhouettes and premium fabrics, each piece offers a timeless look perfect for any occasion.",
        category: "women",

        colour: [
            { name: "", hex: "" },
        ],

        rating: 2,


        inStock: 10,
    },

    {
        id: 25,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780485406/WhatsApp_Image_2026-06-03_at_02.12.31_2_cxwyap.jpg",
        ],
        price: 35000.00,
        name: "PG-0025",
        size: ["S", "M", "L", "XL", "XXL"],
        des1: "Effortlessly elegant and beautifully crafted, our Bubu gowns combine comfort, style, and sophistication. Designed with flowing silhouettes and premium fabrics, each piece offers a timeless look perfect for any occasion.",
        category: "women",

        colour: [
            { name: "", hex: "" },
        ],

        rating: 5,


        inStock: 10,
    },

    {
        id: 26,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780485407/WhatsApp_Image_2026-06-03_at_04.41.42_meg5h7.jpg",
        ],
        price: 35000.00,
        name: "PG-0026",
        size: ["S", "M", "L", "XL", "XXL"],
        des1: "Effortlessly elegant and beautifully crafted, our Bubu gowns combine comfort, style, and sophistication. Designed with flowing silhouettes and premium fabrics, each piece offers a timeless look perfect for any occasion.",
        category: "women",

        colour: [
            { name: "", hex: "" },
        ],

        rating: 4,


        inStock: 10,
    },

    {
        id: 27,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780485406/WhatsApp_Image_2026-06-03_at_02.12.31_1_oumtjf.jpg",
        ],
        price: 35000.00,
        name: "PG-0027",
        size: ["S", "M", "L", "XL", "XXL"],
        des1: "Effortlessly elegant and beautifully crafted, our Bubu gowns combine comfort, style, and sophistication. Designed with flowing silhouettes and premium fabrics, each piece offers a timeless look perfect for any occasion.",
        category: "women",

        colour: [
            { name: "", hex: "" },
        ],

        rating: 5,


        inStock: 10,
    },

    {
        id: 28,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780485407/WhatsApp_Image_2026-06-03_at_04.41.43_uycomh.jpg",
        ],
        price: 35000.00,
        name: "PG-0028",
        size: ["S", "M", "L", "XL", "XXL"],
        des1: "Effortlessly elegant and beautifully crafted, our Bubu gowns combine comfort, style, and sophistication. Designed with flowing silhouettes and premium fabrics, each piece offers a timeless look perfect for any occasion.",
        category: "women",

        colour: [
            { name: "", hex: "" },
        ],

        rating: 4,


        inStock: 10,
    },

    {
        id: 29,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780490741/WhatsApp_Image_2026-06-03_at_07.06.51_uxetyw.jpg",
        ],
        price: 51000.00,
        name: "PG-0029",
        size: ["S", "M", "L", "XL", "XXL"],
        des1: "A timeless maxi gown featuring a flattering V-neckline, elegant puff sleeves, a fitted waist, and a flowing full-length skirt. Designed to make a statement at weddings, dinners, and special occasions. Effortlessly sophisticated and undeniably chic.",
        category: "men",

        colour: [
            { name: "", hex: "" },
        ],

        rating: 3,


        inStock: 10,
    },

    {
        id: 30,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780490740/WhatsApp_Image_2026-06-03_at_07.06.51_3_dnvtcr.jpg",
        ],
        price: 52000.00,
        name: "PG-0030",
        size: ["S", "M", "L", "XL", "XXL"],
        des1: "A timeless maxi gown featuring a flattering V-neckline, elegant puff sleeves, a fitted waist, and a flowing full-length skirt. Designed to make a statement at weddings, dinners, and special occasions. Effortlessly sophisticated and undeniably chic.",
        category: "men",

        colour: [
            { name: "", hex: "" },
        ],

        rating: 2,


        inStock: 10,
    },

    {
        id: 31,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780490740/WhatsApp_Image_2026-06-03_at_07.06.51_2_xfmm40.jpg",
        ],
        price: 53000.00,
        name: "PG-0031",
        size: ["S", "M", "L", "XL", "XXL"],
        des1: "A timeless maxi gown featuring a flattering V-neckline, elegant puff sleeves, a fitted waist, and a flowing full-length skirt. Designed to make a statement at weddings, dinners, and special occasions. Effortlessly sophisticated and undeniably chic.",
        category: "men",

        colour: [
            { name: "", hex: "" },
        ],

        rating: 2,


        inStock: 10,
    },

    {
        id: 32,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780490740/WhatsApp_Image_2026-06-03_at_07.06.51_1_vk5n99.jpg",
        ],
        price: 54000.00,
        name: "PG-0032",
        size: ["S", "M", "L", "XL", "XXL"],
        des1: "A timeless maxi gown featuring a flattering V-neckline, elegant puff sleeves, a fitted waist, and a flowing full-length skirt. Designed to make a statement at weddings, dinners, and special occasions. Effortlessly sophisticated and undeniably chic.",
        category: "men",

        colour: [
            { name: "", hex: "" },
        ],

        rating: 5,


        inStock: 10,
    },


    {
        id: 33,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780490740/WhatsApp_Image_2026-06-03_at_07.06.50_qlbgd9.jpg",
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780490740/WhatsApp_Image_2026-06-03_at_07.06.50_1_blc0id.jpg",
        ],
        price: 55000.00,
        name: "PG-0033",
        size: ["S", "M", "L", "XL", "XXL"],
        des1: "A timeless maxi gown featuring a flattering V-neckline, elegant puff sleeves, a fitted waist, and a flowing full-length skirt. Designed to make a statement at weddings, dinners, and special occasions. Effortlessly sophisticated and undeniably chic.",
        category: "men",

        colour: [
            { name: "", hex: "" },
        ],

        rating: 3,


        inStock: 10,
    },


    {
        id: 34,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1779218500/img1_rlbwpa.webp",
        ],
        price: 299000.00,
        name: "PG-0034",
        size: ["38", "39", "40", "41", "42", "44", "45"],
        des1: "A timeless maxi gown featuring a flattering V-neckline, elegant puff sleeves, a fitted waist, and a flowing full-length skirt. Designed to make a statement at weddings, dinners, and special occasions. Effortlessly sophisticated and undeniably chic.",
        category: "footwear",

        colour: [
            { name: "Brown", hex: "#723509be" },
            { name: "Black", hex: "#000000" },
        ],

        rating: 4,


        inStock: 10,
    },

    {
        id: 35,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1779218504/img2_kqtakp.webp",
        ],
        price: 299000.00,
        name: "PG-0035",
        size: ["38", "39", "40", "41", "42", "44", "45"],
        des1: "A timeless maxi gown featuring a flattering V-neckline, elegant puff sleeves, a fitted waist, and a flowing full-length skirt. Designed to make a statement at weddings, dinners, and special occasions. Effortlessly sophisticated and undeniably chic.",
        category: "footwear",

        colour: [
            { name: "", hex: "" },
        ],

        rating: 4,


        inStock: 10,
    },

    {
        id: 36,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1779218502/img3_yhkagw.webp",
        ],
        price: 299000.00,
        name: "PG-0036",
        size: ["38", "39", "40", "41", "42", "44", "45"],
        des1: "A timeless maxi gown featuring a flattering V-neckline, elegant puff sleeves, a fitted waist, and a flowing full-length skirt. Designed to make a statement at weddings, dinners, and special occasions. Effortlessly sophisticated and undeniably chic.",
        category: "footwear",

        colour: [
            { name: "", hex: "" },
        ],

        rating: 4,


        inStock: 10,
    },

    {
        id: 37,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1779218502/img4_rgp1nb.webp",
        ],
        price: 299000.00,
        name: "PG-0037",
        size: ["38", "39", "40", "41", "42", "44", "45"],
        des1: "A timeless maxi gown featuring a flattering V-neckline, elegant puff sleeves, a fitted waist, and a flowing full-length skirt. Designed to make a statement at weddings, dinners, and special occasions. Effortlessly sophisticated and undeniably chic.",
        category: "footwear",

        colour: [
            { name: "", hex: "" },
        ],

        rating: 4,


        inStock: 10,
    },

    {
        id: 38,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1779218502/img5_zcsaga.webp",
        ],
        price: 299000.00,
        name: "PG-0038",
        size: ["38", "39", "40", "41", "42", "44", "45"],
        des1: "A timeless maxi gown featuring a flattering V-neckline, elegant puff sleeves, a fitted waist, and a flowing full-length skirt. Designed to make a statement at weddings, dinners, and special occasions. Effortlessly sophisticated and undeniably chic.",
        category: "footwear",

        colour: [
            { name: "", hex: "" },
        ],

        rating: 4,


        inStock: 10,
    },

    {
        id: 39,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1779218502/img6_x5sphp.webp",
        ],
        price: 299000.00,
        name: "PG-0039",
        size: ["38", "39", "40", "41", "42", "44", "45"],
        des1: "A timeless maxi gown featuring a flattering V-neckline, elegant puff sleeves, a fitted waist, and a flowing full-length skirt. Designed to make a statement at weddings, dinners, and special occasions. Effortlessly sophisticated and undeniably chic.",
        category: "footwear",

        colour: [
            { name: "", hex: "" },
        ],

        rating: 5,


        inStock: 10,
    },

    {
        id: 40,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1779218505/img7_rbzjls.webp",
        ],
        price: 299000.00,
        name: "PG-0040",
        size: ["38", "39", "40", "41", "42", "44", "45"],
        des1: "A timeless maxi gown featuring a flattering V-neckline, elegant puff sleeves, a fitted waist, and a flowing full-length skirt. Designed to make a statement at weddings, dinners, and special occasions. Effortlessly sophisticated and undeniably chic.",
        category: "footwear",

        colour: [
            { name: "", hex: "" },
        ],

        rating: 4,


        inStock: 10,
    },



]

export default Products