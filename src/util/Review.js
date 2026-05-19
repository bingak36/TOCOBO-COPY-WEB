const img = (path) => `/img/${path}`;

const reviewData = [
    {
        id: 1,
        rating: 5,
        text: "끈적임 없이 촉촉하게 스며드는 제형이라 여름에 쓰기 너무 좋아요. 향도 은은해서 부담스럽지 않고 데일리로 딱입니다!",
        user: "jiwon***",
        product: "Bio Watery Sun Cream",
        image: img("product_1.png")
    },
    {
        id: 2,
        rating: 5,
        text: "패키지가 너무 예뻐서 샀는데 제품력에 더 반했어요. 입술 각질 잠재워주는 데 최고입니다.",
        user: "minji***",
        product: "Vita Glazed Lip Mask",
        image: img("product_2.png")
    },
    {
        id: 3,
        rating: 4,
        text: "민감성 피부인데 트러블 없이 잘 쓰고 있어요. 순하고 자극이 없어서 정착할 것 같아요.",
        user: "sohee***",
        product: "Multi Ceramide Cream",
        image: img("product_3.png")
    },
    {
        id: 4,
        rating: 5,
        text: "친구 선물로 줬는데 너무 좋아하네요. 배송도 빠르고 포장도 꼼꼼해서 만족합니다.",
        user: "hana***",
        product: "Cotton Soft Sun Stick",
        image: img("product_4.png")
    },
    {
        id: 5,
        rating: 5,
        text: "토코보 제품은 믿고 씁니다. 이번 신상도 역시나 좋네요. 촉촉함이 오래가요.",
        user: "yuna***",
        product: "Collagen Brightening Eye Gel",
        image: img("product_5.png")
    }
];

export default reviewData;