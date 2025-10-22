import React, { useState } from 'react';
import { DiCssdeck, DiDart, DiSafari, DiSnapSvg } from 'react-icons/di';
import { FaKickstarterK } from 'react-icons/fa';
import { GiKitchenKnives } from 'react-icons/gi';
import { LiaDnaSolid } from 'react-icons/lia';
import { SiD, SiD3Dotjs, SiDsautomobiles } from 'react-icons/si';
import { useParams } from 'react-router-dom';

const allProducts = {
    '1': {
        id: '1',
        name: 'REDMI A3X (Midnight Black, 128 GB)',
        price: '₹6,499',
        mrp: '₹10,999',
        discount: '40%',
        rating: 4.1,
        reviews: "7,529",
        questions: "311",
        deliveryDate: '20 Oct',
        images: [
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/w/t/c/-original-imah2hfpxtwagduh.jpeg?q=70&amp;crop=false", alt: 'Main Image' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/i/v/m/-original-imah2hfpgcarsaen.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 2' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/k/k/t/-original-imah2hfpqz9cub4z.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 3' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/l/2/a/-original-imah2hfpwrebe9qf.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 4' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/y/l/y/a3x-24048rn6cl-redmi-original-imah8zszhwdyuztv.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 5' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/n/t/j/a3x-24048rn6cl-redmi-original-imah8zszbxhmzphx.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 6' },
        ],
    },
    '2': {
        id: '2',
        name: 'REDMI A5 (Jaisalmer Gold, 128GB)',
        price: '₹7,499',
        mrp: '₹9,999',
        discount: '25%',
        rating: 4.2,
        reviews: "2,647",
        questions: "148",
        deliveryDate: '20 Oct',
        images: [
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/h/g/o/-original-imahb56zdk5ybj9r.jpeg?q=70&amp;crop=false", alt: 'Main Image' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/g/d/1/-original-imahb8fysg9zghye.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 2' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/5/8/g/-original-imahb8fy3ggjdznf.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 3' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/x/e/q/-original-imahb8fyfhrhkmyz.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 4' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/q/w/k/-original-imahb8fygvhuf5fh.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 5' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/p/6/1/-original-imahb8fyzkhhtgym.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 6' },
        ],
    },
       '3': {
        id: '3',
        name: 'Nokia 105 Single SIM, Keypad Mobile Phone',
        price: '₹939',
        mrp: '₹1,599',
        discount: '41%',
        rating: 4.1,
        reviews: "1,72,013",
        questions: "10,902",
        deliveryDate: '20 Oct',
        images: [
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/d/e/g/105-single-sim-keypad-mobile-phone-with-wireless-fm-radio-ta-original-imah3kw8zwfwn56h.jpeg?q=70&amp;crop=false", alt: 'Main Image' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/u/v/c/105-single-sim-keypad-mobile-phone-with-wireless-fm-radio-ta-original-imah45y5g5ghhnng.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 2' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/p/4/c/105-single-sim-keypad-mobile-phone-with-wireless-fm-radio-ta-original-imah45y5h2dyazek.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 3' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/r/s/h/105-single-sim-keypad-mobile-phone-with-wireless-fm-radio-ta-original-imah45y5nvjj2vhp.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 4' },
        ],
    },
       '4': {
        id: '4',
        name: 'Motorola g45 5G (Brilliant Blue, 128 GB)',
        price: '₹11,999',
        mrp: '₹14,999',
        discount: '20%',
        rating: 4.3,
        reviews: "2,13,881",
        questions: "10,880",
        deliveryDate: '20 Oct',
        images: [
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/r/l/c/-original-imah3xk892aj9gck.jpeg?q=70&amp;crop=false", alt: 'Main Image' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/h/7/s/-original-imah3xk8n93mhrqf.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 2' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/m/d/i/-original-imah3xgt8husycum.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 3' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/s/5/v/-original-imah3xgt3ap9vbwu.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 4' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/d/3/n/-original-imah3xgtnsnacbkz.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 5' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/a/e/d/-original-imah3xgt5qfzjfua.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 6' },
        ],
    },   
    '5': {
        id: '5',
        name: 'Samsung Galaxy F05 (Twilight Blue, 64 GB)',
        price: '₹6,249',
        mrp: '₹9,999',
        discount: '37%',
        rating: 4.2,
        reviews: "11,399",
        questions: "488",
        deliveryDate: '20 Oct',
        images: [
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/e/r/f/-original-imah56hkgehywn5b.jpeg?q=70&amp;crop=false", alt: 'Main Image' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/z/o/x/-original-imah59pnud5sv8nh.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 2' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/z/g/c/-original-imah59pneh9jmegm.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 3' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/b/u/t/-original-imah56hkzazfm6zj.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 4' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/u/1/z/-original-imah56hk2csyvfcw.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 5' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/t/e/u/-original-imah56hkhxw4bhkm.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 6' },
        ],
    },
     '6': {
        id: '6',
        name: 'realme Narzo 80 Lite 4G (Beach Gold, 64 GB)',
        price: '₹7,233',
        mrp: '₹8,999',
        discount: '19%',
        rating: 4.3,
        reviews: "11.399",
        questions: "488",
        deliveryDate: '20 Oct',
        images: [
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/n/r/c/narzo-80-lite-4g-rmx5313-realme-original-imahegxgdvbva7zf.jpeg?q=70&amp;crop=false", alt: 'Main Image' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/j/d/7/narzo-80-lite-4g-rmx5313-realme-original-imahegxgap6faxpj.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 2' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/6/t/h/narzo-80-lite-4g-rmx5313-realme-original-imahegxgrgwtmryz.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 3' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/e/7/3/narzo-80-lite-4g-rmx5313-realme-original-imahegxg4eay6yyv.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 4' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/b/l/f/narzo-80-lite-4g-rmx5313-realme-original-imahegxghhsmzzzz.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 5' },
        ],
    },
        '7': {
        id: '7',
        name: 'POCO C71 (Power Black, 128 GB)',
        price: '₹6,999',
        mrp: '₹9,999',
        discount: '30%',
        rating: 4.1,
        reviews: "14,636",
        questions: "721",
        deliveryDate: '20 Oct',
        images: [
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/7/z/w/-original-imahawgahmkbjxyj.jpeg?q=70&amp;crop=false", alt: 'Main Image' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/r/t/x/-original-imahawgayxpq85wj.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 2' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/y/b/w/-original-imahawgan3xcbr3e.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 3' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/f/p/l/-original-imahawgagg8xcuc7.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 4' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/q/s/0/-original-imahawgazzmxpwsn.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 5' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/7/f/m/-original-imahawga3u8n3pzk.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 6' },
        ],
    },
        '8': {
        id: '8',
        name: 'realme 15 Pro 5G(Flowing Silver, 256 GB)',  
        price: '₹33,9499',
        mrp: '₹37,999',
        discount: '10%',
        rating: 4.3,
        reviews: "4,888",
        questions: "446",
        deliveryDate: '20 Oct',
        images: [
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/d/n/3/-original-imahezrzhdddaudb.jpeg?q=70&amp;crop=false", alt: 'Main Image' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/2/c/r/-original-imahezrzhzr9pvrn.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 2' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/t/k/d/-original-imahezrzy9vc7njb.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 3' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/8/3/h/-original-imahezrzacpqageh.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 4' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/1/d/b/-original-imaheb4zzgjjtx7x.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 5' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/a/g/b/-original-imaheb4zbczaumxz.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 6' },
        ],
    },
        '9': {
        id: '9',
        name: 'vivo T4 5G (Phantom Grey, 128 GB)',
        price: '₹20,999',
        mrp: '₹25,999',
        discount: '19%',
        rating: 4.5,
        reviews: "70,252",
        questions: "3,204",
        deliveryDate: '20 Oct',
        images: [
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/k/t/x/-original-imahbgpzbumfzkbh.jpeg?q=70&amp;crop=false", alt: 'Main Image' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/i/0/l/-original-imahbfd4eqsjyu76.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 2' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/n/b/e/-original-imahbfd4s78rtazh.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 3' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/n/f/b/-original-imahbfd4mpuk5hk8.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 4' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/x/8/3/-original-imahbfd4pfqstsjy.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 5' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/z/n/r/-original-imahbfd4rsjptfds.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 6' },
        ],
    },
        '10': {
        id: '10',
        name: 'REDMI A5 (Just Black, 64 GB)',
        price: '₹6,499',
        mrp: '₹8,999',
        discount: '27%',
        rating: 4.2,
        reviews: "3,267",
        questions: "149",
        deliveryDate: '20 Oct',
        images: [
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/p/4/r/-original-imahb56zdgszp7tg.jpeg?q=70&amp;crop=false", alt: 'Main Image' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/t/p/w/-original-imahb8fyayg7gez7.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 2' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/x/e/q/-original-imahb8fyfhrhkmyz.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 3' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/q/w/k/-original-imahb8fygvhuf5fh.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 4' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/4/z/7/-original-imahb8fyqttxq2ec.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 5' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/h/m/b/-original-imahb8fymq7z7wzb.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 6' },
        ],
    },
        '11': {
        id: '11',
        name: 'POCO C75 5G (Aqua Bliss, 64 GB)',
        price: '₹7,699',
        mrp: '₹10,999',
        discount: '30%',
        rating: 4.2,
        reviews: "1,03,254",
        questions: "4,829",
        deliveryDate: '20 Oct',
        images: [
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/o/2/g/-original-imahbr2cz5apcwze.jpeg?q=70&amp;crop=false", alt: 'Main Image' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/k/h/t/-original-imahbr2czsfktdhj.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 2' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/x/k/b/-original-imahbr2c7nahpwmd.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 3' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/l/a/l/-original-imahbr2ctzwqeaxa.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 4' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/k/j/4/-original-imahbr2czukjd3dp.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 5' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/z/g/i/-original-imahbr2cekmbksz5.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 6' },
        ],
    },
        '12': {
        id: '12',
        name: 'Samsung Guru Music 2 B310ED',
        price: '₹898',
        mrp: '₹1,999',
        discount: '55%',
        rating: 3.1,
        reviews: "24,038",
        questions: "1,689",
        deliveryDate: '20 Oct',
        images: [
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/m/j/a/guru-music-2-b310ed-guru-music-2-samsung-original-imahepqaqpq3dnhg.jpeg?q=70&amp;crop=false", alt: 'Main Image' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/r/g/e/guru-music-2-b310ed-guru-music-2-samsung-original-imahepqae6quyw5b.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 2' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/b/d/v/guru-music-2-b310ed-guru-music-2-samsung-original-imahepqacgbeshyx.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 3' },
        ],
    },
        '13': {
        id: '13',
        name: 'HOTLINE TURTLE',
        price: '₹699',
        mrp: '₹999',
        discount: '30%',
        rating: 3.7,
        reviews: "376",
        questions: "27",
        deliveryDate: '20 Oct',
        images: [
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/1/v/i/classic-turtle-classic-turtle-hotline-original-imahb9ghf3g4hc9c.jpeg?q=70&amp;crop=false", alt: 'Main Image' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/t/9/g/classic-turtle-classic-turtle-hotline-original-imahb9ghkf6wupde.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 2' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/c/p/f/classic-turtle-classic-turtle-hotline-original-imahb9gh9jzf4fbm.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 3' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/p/l/a/classic-turtle-classic-turtle-hotline-original-imahb9ghzh4unvgp.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 4' },
        ],
    },
        '14': {
        id: '14',
        name: 'Samsung Galaxy S25 Ultra',
        price: '₹1,19,999',
        mrp: '₹1,29,999',
        discount: '7%',
        rating: 4.7,
        reviews: "2,012",
        questions: "222",
        deliveryDate: '20 Oct',
        images: [
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/7/n/l/-original-imahgfmzfgdzases.jpeg?q=70&amp;crop=false", alt: 'Main Image' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/x/f/l/-original-imahggexa53xyeq5.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 2' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/a/y/m/-original-imahggewgkmpcggq.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 3' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/w/7/q/-original-imahggetnje6tbpe.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 4' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/f/j/t/-original-imahggetqzszzxqh.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 5' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/e/q/g/-original-imahgget2pqvf8gq.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 6' },
        ],
    },
        '15': {
        id: '15',
        name: 'MOTOROLA g35 5G (Midnight Black, 128 GB)',
        price: '₹8,999',
        mrp: '₹12,499',
        discount: '28%',
        rating: 4.2,
        reviews: "75,633",
        questions: "5,241",
        deliveryDate: '20 Oct',
        images: [
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/z/q/m/g35-5g-pb3h0000in-motorola-original-imah7c6ykgz5rtgv.jpeg?q=70&amp;crop=false", alt: 'Main Image' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/2/i/f/g35-5g-pb3h0000in-motorola-original-imah7c6yxeg3uufu.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 2' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/p/e/b/g35-5g-pb3h0000in-motorola-original-imah7c6ysg3uderp.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 3' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/n/g/y/g35-5g-pb3h0000in-motorola-original-imah7c6yemwzbqjx.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 4' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/h/l/z/g35-5g-pb3h0000in-motorola-original-imah7c6yhudfwjqy.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 5' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/o/t/u/g35-5g-pb3h0000in-motorola-original-imah7c6y46upakqp.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 6' },
        ],
    },
        '16': {
        id: '16',
        name: 'Google Pixel 10 (Indigo, 256 GB)',
        price: '₹79,999',
        mrp: '₹1,10,999',
        discount: '40%',
        rating: 4.4,
        reviews: "549",
        questions: "52",
        deliveryDate: '20 Oct',
        images: [
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/w/b/8/-original-imahfjsf5gxbpfks.jpeg?q=70&amp;crop=false", alt: 'Main Image' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/l/b/1/-original-imahfjsfyzvr8zcz.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 2' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/5/a/g/-original-imahfjsfhmf4h9sw.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 3' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/q/u/1/-original-imahfjsfy2gga3gx.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 4' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/s/l/u/-original-imahfjsfck6yz73p.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 5' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/g/f/z/-original-imahfjsfffwgyyhe.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 6' },
        ],
    },
};


const ProductImageGallery = ({ images }) => (
    <div className="product-image-gallery">
        <div className="thumbnail-list">
            {images.slice(0, 6).map((img, index) => (
                <div key={index} className="thumbnail-item">
                    <img src={img.src} alt={`Thumbnail ${index + 1}`} />
                </div>
            ))}
        </div>
        <div className="main-image-display">
            <img src={images[0].src.replace('/128/128/', '/416/416/')} alt={images[0].alt} />
        </div>
    </div>
);

const ProductDetails = ({ data }) => (
    <div className="product-details-info">
        <h1 className="product-title">{data.name}</h1>
        
        <div className="rating-share-section">
            <span className="rating-badge">{data.rating} <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" className="Rza2QY" alt="star"/></span>
            <span className="review-text">{data.reviews.toLocaleString()} Ratings & {data.questions} Reviews</span>
            <span className="assured-badge" role="img" aria-label="Flipkart Assured"></span>
            <span className="compare-share-links">| Compare | Share</span>
        </div>
        
        <div className="price-section">
            <span className="current-price">{data.price}</span>
            <span className="mrp-price">M.R.P. {data.mrp}</span>
            <span className="discount-percent">{data.discount} Off</span>
        </div>

        <p className="warranty-text">+ ₹75 Protect Promise Fee <a href="#">Learn more</a></p>
        <p className="delivery-text" dangerouslySetInnerHTML={{ __html: `Secure delivery by **${data.deliveryDate}**` }} />

        <h4 className="offer-heading">Available offers</h4>
        <ul className="offers-list">
            <li>Bank Offer 5% cashback on Axis Bank Flipkart Debit Card up to ₹750</li>
            <li>Bank Offer 5% cashback on Flipkart SBI Credit Card up to ₹4,000 per calendar quarter</li>
            <li>No cost EMI ₹4,000/month. Standard EMI also available <a href="#">View Plans</a></li>
        </ul>
        <a href="#" className="view-more-offers">View 4 more offers</a>

        <div className="exchange-options">
            <div className="exchange-option">
                <input type="radio" name="buy_option" id="buy_no_exchange" defaultChecked />
                <label htmlFor="buy_no_exchange">Buy without Exchange</label>
                <span className="option-price">{data.price}</span>
            </div>   
            <div className="exchange-option">
                <input type="radio" name="buy_option" id="buy_with_exchange" />
                <label htmlFor="buy_with_exchange">Buy with Exchange</label>
                <span className="option-price">up to ₹9,000 off</span>
                <p className="pincode-check">Enter Pincode to check if exchange is available</p>
            </div>
        </div>
    </div>
);

const ProductActions = () => (
    <div className="product-actions-bar">
        <button className="add-to-cart-btn">
            <svg className="NwyjNT" width="16" height="16" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path className="" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg>ADD TO CART
        </button>
        <button className="buy-now-btn">
            <img src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMHY3LjdoMi4xVjE0TDcgNS42SDQuMkw3IDAiIGZpbGw9IiNGRkYiLz48L3N2Zz4=" alt="buy icon"/>BUY NOW</button>
    </div>
);

const ProductDetailPage = () => {
    const { id } = useParams(); 
    const productData = allProducts[id]; 
    
    if (!productData) {
        return <div className="product-detail-page-container">
            <h2>Product Not Found or Loading... (ID: {id})</h2>
        </div>;
    }

    const pageStyles = `
        :root {
            --primary-blue: #2874f0;
            --primary-green: #388e3c;
            --dark-text: #212121;
            --light-text: #fff;
        }

        .product-detail-page-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 20px 16px;
            background-color: #fff;
            font-family: 'Inter', sans-serif;
        }
        .product-main-content {
            display: flex;
            gap: 20px;
            padding-bottom: 20px;
            border-bottom: 1px solid #f0f0f0;
        }

        .product-left-column {
            flex-shrink: 0;
            width: 440px; 
            padding: 10px;
        }
        .product-image-gallery {
            display: flex;
            height: 500px; 
        }
        .thumbnail-list {
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding-right: 15px;
            width: 70px;
        }
        .thumbnail-item {
            border: 1px solid #f0f0f0;
            padding: 4px;
            cursor: pointer;
            width: 60px;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .thumbnail-item img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
        }
        .main-image-display {
            position: relative;
            flex-grow: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid #f0f0f0;
            padding: 20px;
        }
        .main-image-display img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
        }
        .product-actions-bar {
            display: flex;
            gap: 10px;
            padding: 15px 0;
            margin-top: 10px;
            justify-content: center;
        }
        .add-to-cart-btn, .buy-now-btn {
            padding: 12px 20px;
            font-size: 16px;
            font-weight: 500;
            border: none;
            border-radius: 2px;
            cursor: pointer;
            width: 180px; 
        }
        .add-to-cart-btn {
            background-color: #ff9f00; 
            color: var(--light-text);
        }
        .buy-now-btn {
            background-color: #fb641b; 
            color: var(--light-text);
        }

        .product-right-column {
            flex-grow: 1;
            position: relative;
        }
        .product-title {
            font-size: 18px;
            font-weight: 500;
            margin-bottom: 5px;
            color: var(--dark-text);
        }
        .rating-share-section {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 15px;
            padding-bottom: 15px;
            border-bottom: 1px dashed #f0f0f0;
            font-size: 14px;
        }
        .rating-badge {
            background-color: var(--primary-green);
            color: var(--light-text);
            padding: 2px 6px;
            border-radius: 4px;
            font-weight: bold;
        }
        .review-text {
            color: #878787;
        }
        .assured-badge {
            width: 77px;
            height: 15px;
            background-image: url('https://static-assets-web.flixcart.com/fk-p-s/assets/images/flipkart_assured.svg');
            background-repeat: no-repeat;
            background-size: contain;
        }
        .compare-share-links {
            color: var(--primary-blue);
            font-weight: 500;
            cursor: pointer;
        }
        .price-section {
            padding: 10px 0;
            margin-bottom: 10px;
        }
        .current-price {
            font-size: 32px;
            font-weight: 600;
            margin-right: 10px;
        }
        .mrp-price {
            text-decoration: line-through;
            color: #878787;
            margin-right: 10px;
        }
        .discount-percent {
            color: var(--primary-green);
            font-weight: 600;
        }
        .warranty-text, .delivery-text, .pincode-check {
            font-size: 14px;
            margin: 5px 0;
            color: #555;
        }
        .warranty-text a, .delivery-text a {
            color: var(--primary-blue);
            text-decoration: none;
        }
        .offer-heading {
            font-size: 16px;
            font-weight: 600;
            margin: 15px 0 10px;
        }
        .offers-list {
            list-style: none;
            padding: 0;
            font-size: 14px;
        }
        .offers-list li {
            margin-bottom: 5px;
            padding-left: 20px;
            position: relative;
        }
        .offers-list li::before {
            content: "•";
            color: var(--primary-green);
            font-weight: bold;
            display: inline-block; 
            width: 1em;
            margin-left: -1em;
            position: absolute;
            left: 0;
        }
        .view-more-offers {
            color: var(--primary-blue);
            font-size: 14px;
            text-decoration: none;
            display: block;
            margin-bottom: 20px;
        }
        .exchange-options {
            border: 1px solid #f0f0f0;
            padding: 15px;
            border-radius: 4px;
            margin-bottom: 20px;
        }
        .exchange-option {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
        }
        .exchange-option label {
            flex-grow: 1;
            font-size: 15px;
            margin-left: 10px;
        }
        .option-price {
            font-weight: 600;
            color: var(--dark-text);
        }
        .pincode-check {
            font-size: 12px;
            color: var(--primary-blue);
            cursor: pointer;
            margin-left: 30px;
        }
        .small-ad-card {
            position: absolute;
            top: 20px;
            right: 0;
            width: 150px;
            text-align: center;
        }
        .small-ad-card img {
            width: 80px;
            height: 80px;
            object-fit: contain;
        }
    `;
    return (
        <>
            <style>{pageStyles}</style>

            <div className="product-detail-page-container">
                <div className="product-main-content">
                    <div className="product-left-column">
                        <ProductImageGallery images={productData.images} />
                        <ProductActions />
                    </div>

                    <div className="product-right-column">
                        <ProductDetails data={productData} />
                        
                        <div className="small-ad-card">
                            <img src="https://rukminim2.flixcart.com/fk-p-lockin/100/100/image/c7c728e83b8a3e74.jpeg?q=90" alt="Samsung Ad" />
                            <p style={{fontSize: '12px', color: '#878787'}}>SAMSUNG Galaxy...</p>
                        </div>
                    </div>
                </div>

                <div className="bottom-sections">
                </div>
            </div>
        </>
    );
};

export default ProductDetailPage;