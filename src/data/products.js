// this is my products array of objects which i'm exporting to use in other places in my code
const Products = [
    {
        id: 1,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780078469/WhatsApp_Image_2026-05-29_at_07.55.59_mqvz3l.jpg",
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780078605/WhatsApp_Image_2026-05-29_at_08.01.07_m2gcrg.jpg",
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780078604/WhatsApp_Image_2026-05-29_at_07.58.12_guoejb.jpg",
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780078605/WhatsApp_Image_2026-05-29_at_08.02.17_hrgw4e.jpg",
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780256825/WhatsApp_Image_2026-05-31_at_00.30.37_mk458y.jpg",
        ],
        price: 30000.00,
        name: "Ruched Gathered Dress",
        size: ["S", "M", "L", "XL", "XXL"],
        des1: "fgfgg".repeat(150),
        category: "women",

        colour: [
            { name: "Red", hex: "#FF0000" },
            { name: "Blue", hex: "#0000FF" },
            { name: "Black", hex: "#000000" },
            { name: "Brown", hex: "#8B4513" },
            { name: "Tropical Print", hex: "#4CAF50" },
        ],

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
        name: "Cowl Drape Set",
        size: ["S", "M", "L", "XL", "XXL"],
        des1: "",
        category: "women",

        colour: [
            { name: "Red", hex: "#FF0000" },
        ],

        inStock: 10,
    },

    {
        id: 3,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780257633/WhatsApp_Image_2026-05-31_at_00.14.15_ki2s3w.jpg",
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780257633/WhatsApp_Image_2026-05-31_at_00.12.38_uaiwnf.jpg",
        ],
        price: 25000.00,
        name: "Satin Ruched Maxi Dress",
        size: ["S", "M", "L", "XL", "XXL"],
        des1: "",
        category: "women",

        colour: [
            { name: "Red", hex: "#FF0000" },
            { name: "Black", hex: "#000000" },
        ],

        inStock: 10,
    },

    {
        id: 4,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780257908/WhatsApp_Image_2026-05-31_at_00.27.58_x4krfh.jpg",
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780257908/WhatsApp_Image_2026-05-31_at_00.27.58_x4krfh.jpg",
        ],
        price: 28000.00,
        name: "Radiance Gold Trim Kaftan",
        size: ["S", "M", "L", "XL", "XXL"],
        des1: "",
        category: "women",

        colour: [
            { name: "White", hex: "#ffffff" },
        ],

        inStock: 10,
    },

    {
        id: 5,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1779218500/img1_rlbwpa.webp",
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1779218500/img1_rlbwpa.webp",
        ],
        price: 299000.00,
        name: "YCFT-007",
        size: ["38", "39", "40", "41", "42", "44", "45"],
        des1: "",
        category: "footwear",

        colour: [
            { name: "Brown", hex: "#723509be" },
            { name: "Black", hex: "#000000" },
        ],

        inStock: 10,
    },

    {
        id: 6,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1779218504/img2_kqtakp.webp",
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1779218504/img2_kqtakp.webp",
        ],
        price: 299000.00,
        name: "YCFT-006",
        size: ["38", "39", "40", "41", "42", "44", "45"],
        des1: "",
        category: "footwear",

        colour: [
            { name: "Brown", hex: "#723509be" },
            { name: "Black", hex: "#000000" },
        ],

        inStock: 10,
    },

    {
        id: 7,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1779218502/img3_yhkagw.webp",
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1779218502/img3_yhkagw.webp",
        ],
        price: 299000.00,
        name: "YCFT-005",
        size: ["38", "39", "40", "41", "42", "44", "45"],
        des1: "",
        category: "footwear",

        colour: [
            { name: "Brown", hex: "#723509be" },
            { name: "Black", hex: "#000000" },
        ],

        inStock: 10,
    },

    {
        id: 7,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1779218502/img4_rgp1nb.webp",
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1779218502/img4_rgp1nb.webp",
        ],
        price: 299000.00,
        name: "YCFT-004",
        size: ["38", "39", "40", "41", "42", "44", "45"],
        des1: "",
        category: "footwear",

        colour: [
            { name: "Brown", hex: "#723509be" },
            { name: "Black", hex: "#000000" },
        ],

        inStock: 10,
    },

    {
        id: 8,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1779218502/img5_zcsaga.webp",
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1779218502/img5_zcsaga.webp",
        ],
        price: 299000.00,
        name: "YCFT-003",
        size: ["38", "39", "40", "41", "42", "44", "45"],
        des1: "",
        category: "footwear",

        colour: [
            { name: "Brown", hex: "#723509be" },
            { name: "Black", hex: "#000000" },
        ],

        inStock: 10,
    },

    {
        id: 9,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1779218502/img6_x5sphp.webp",
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1779218502/img6_x5sphp.webp",
        ],
        price: 299000.00,
        name: "YCFT-002",
        size: ["38", "39", "40", "41", "42", "44", "45"],
        des1: "",
        category: "footwear",

        colour: [
            { name: "Brown", hex: "#723509be" },
            { name: "Black", hex: "#000000" },
        ],

        inStock: 10,
    },

    {
        id: 10,
        img: [
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1779218505/img7_rbzjls.webp",
            "https://res.cloudinary.com/duoy2tsyc/image/upload/v1779218505/img7_rbzjls.webp",
        ],
        price: 299000.00,
        name: "YCFT-001",
        size: ["38", "39", "40", "41", "42", "44", "45"],
        des1: "",
        category: "footwear",

        colour: [
            { name: "Brown", hex: "#723509be" },
            { name: "Black", hex: "#000000" },
        ],

        inStock: 10,
    },



]

export default Products