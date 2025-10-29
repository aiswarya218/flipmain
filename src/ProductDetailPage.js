import React, { useState } from 'react';
import { BiVector } from 'react-icons/bi';
import { CgCPlusPlus, CgVercel } from 'react-icons/cg';
import { DiCoffeescript, DiCssdeck, DiDart, DiFirebase, DiSafari, DiSnapSvg } from 'react-icons/di';
import { FaDiceFive, FaKickstarterK } from 'react-icons/fa';
import { FaD } from 'react-icons/fa6';
import { FcFilledFilter } from 'react-icons/fc';
import { GiF1Car, GiGClef, GiKitchenKnives } from 'react-icons/gi';
import { LiaDiceD6Solid, LiaDnaSolid } from 'react-icons/lia';
import { LuLamp } from 'react-icons/lu';
import { MdMacroOff } from 'react-icons/md';
import { PiDiceFiveDuotone, PiFloppyDiskFill } from 'react-icons/pi';
import { RiRadarFill } from 'react-icons/ri';
import { SiAsahilinux, SiD, SiD3Dotjs, SiDarkreader, SiDlib, SiDsautomobiles, SiElsevier, SiWeb3Dotjs } from 'react-icons/si';
import { SlSocialFacebook } from 'react-icons/sl';
import { TbTrack } from 'react-icons/tb';
import { VscCalendar } from 'react-icons/vsc';
import { WiDaySleet } from 'react-icons/wi';
import { data, useParams } from 'react-router-dom';

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
        deliveryDate: '20 Oct, Sunday',
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
        deliveryDate: '20 Oct, Sunday',
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
        deliveryDate: '20 Oct, Sunday',
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
        deliveryDate: '20 Oct, Sunday',
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
        deliveryDate: '20 Oct, Sunday',
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
        deliveryDate: '20 Oct, Sunday',
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
        deliveryDate: '20 Oct, Sunday',
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
        deliveryDate: '20 Oct, Sunday',
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
        deliveryDate: '20 Oct, Sunday',
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
        deliveryDate: '20 Oct, Sunday',
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
        deliveryDate: '20 Oct, Sunday',
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
        deliveryDate: '20 Oct, Sunday',
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
        deliveryDate: '20 Oct, Sunday',
        images: [
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/z/p/q/classic-turtle-classic-turtle-hotline-original-imahb9gz8jgyn5y8.jpeg?q=70&amp;crop=false", alt: 'Main Image' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/7/s/a/classic-turtle-classic-turtle-hotline-original-imahb9gzkgg6j3zy.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 2' },
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
        deliveryDate: '20 Oct, Sunday',
        images: [
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/u/c/7/s24-ultra-sm-s928bzkhinx-samsung-original-imagxy2xmyfzygbc.jpeg?q=70&amp;crop=false", alt: 'Main Image' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/2/7/y/s24-ultra-sm-s928bzkhinx-samsung-original-imagxy2xngg9q39n.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 2' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/h/r/m/s24-ultra-sm-s928bzkhinx-samsung-original-imagxy2xj79h59b9.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 3' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/8/f/f/s24-ultra-sm-s928bzkhinx-samsung-original-imagxy2x5rzr8v3y.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 4' },
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
        deliveryDate: '20 Oct, Sunday',
        images: [
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/t/b/r/-original-imah7c6ykgz5rtgv.jpeg?q=70&amp;crop=false", alt: 'Main Image' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/g/w/g/-original-imah7c6yz4c8qg6b.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 2' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/j/d/b/-original-imah7c6yghr3wzff.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 3' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/q/g/q/-original-imah7c6yhz2r4hz7.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 4' },
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
        deliveryDate: '20 Oct, Sunday',
        images: [
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/n/j/h/-original-imagzy9eyzch56z8.jpeg?q=70&amp;crop=false", alt: 'Main Image' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/9/t/v/pixel-8-pro-ga04574-gb-google-original-imags39b7j22588c.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 2' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/a/r/a/-original-imags39b4f6pydm6.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 3' },
            { src: "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/j/j/m/pixel-8-pro-ga04574-gb-google-original-imags39b36q83dsh.jpeg?q=70&amp;crop=false", alt: 'Thumbnail 4' },
        ],
    }
};

const ProductImageGallery = ({ images, mainImage, setMainImage }) => (
    <div className="product-image-gallery">
        <div className="thumbnail-list">
            {images.map((img, index) => {
                const isActive = img.src === mainImage; 

                return (
                    <div key={img.src} className={`thumbnail-item ${isActive ? 'active-thumbnail' : ''}`} onClick={() => setMainImage(img.src)} >
                        <img src={img.src} alt={`Thumbnail ${index + 1}`} />
                    </div>
                );
            })}
        </div>
        <div className="main-image-display">
            <img src={mainImage.replace('/128/128/', '/416/416/')} alt="Main Product Display" />
        </div>
    </div>
);

const ProductDetails = ({ data }) => (
    <div className="product-details-info">
        <h1 className="product-title">{data.name}</h1>
        
        <div className="rating-share-section">
            <span className="rating-badge">{data.rating} <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" className="Rza2QY" alt="star"/></span>
            <span className="review-text">{data.reviews} Ratings & {data.questions} Reviews</span>
            <span className="assured-badge" role="img" aria-label="Flipkart Assured">
                <img height="21"src="/images/fa_9e47c1.png" />
            </span>
            <span className="compare-share-links">| Compare | Share</span>
        </div>
        
        <div className="price-section">
            <span className="current-price">{data.price}</span>
            <span className="mrp-price">{data.mrp}</span>
            <span className="discount-percent">{data.discount} Off</span>
            <span className="question"><svg width="20" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="dhBD+z"><defs><circle id="b" cx="8" cy="8" r="8"></circle><filter id="a" width="130%" height="130%" x="-15%" y="-8.8%" filterUnits="objectBoundingBox"><feMorphology in="SourceAlpha" operator="dilate" radius=".4" result="shadowSpreadOuter1"></feMorphology><feOffset dy="1" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"></feGaussianBlur><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"></feColorMatrix>
                </filter></defs><g fill="none" fillRule="evenodd"> <g transform="translate(2 1)"><use fill="#000" filter="url(#a)" href="#b"></use> <use fill="#FCFCFC" stroke="#000" strokeOpacity=".3" strokeWidth=".8" href="#b"></use> </g><text fill="#1D1D1D" fontFamily="Roboto-Medium, Roboto" fontSize="11" fontWeight="400" opacity=".59" transform="translate(2 1)"><tspan x="6.6" y="12.2">i</tspan></text> </g></svg>
            </span>
        </div>

        <p className="warranty-text">+ ₹75 Protect Promise Fee <a href="#">Learn more</a></p>
        <p className="delivery-text" dangerouslySetInnerHTML={{ __html: `Secure delivery by ${data.deliveryDate}` }} />

        <h4 className="offer-heading">Available offers</h4>
        <ul className="offers-list">
            <li key="offer-1"><img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" width="18" height="18" className="yNKwUY" /><span className="bold">Bank Offer</span> 5% cashback on Axis Bank Flipkart Debit Card up to ₹750<span className="spanned">T&C</span></li>
            <li key="offer-2"><img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" width="18" height="18" className="yNKwUY" /><span className="bold">Bank Offer</span> 5% cashback on Flipkart SBI Credit Card up to ₹4,000 per calendar quarter<span className="spanned">T&C</span></li>
            <li key="offer-3"><img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" width="18" height="18" className="yNKwUY" /><span className="bold">Bank Offer</span>5% cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarter<span className="spanned">T&C</span></li>
            <li key="offer-4"><img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" width="18" height="18" className="yNKwUY" /><span className="bold">Special Price</span> Get extra ₹5000 off<span className="spanned">T&C</span></li>
        </ul>
        <a href="#" className="view-more-offers">View 4 more offers</a>

        <div className="exchange-options">
            <div className="exchange-option">
                <input type="radio" name="buy_option" id="buy_no_exchange" defaultChecked />
                <label htmlFor="buy_no_exchange">Buy without Exchange</label>
                <div className="option-details">
                <span className="option-price">{data.price}</span>
                <p className="pincode-check empty-placeholder">&nbsp;</p>
            </div>
        </div>   
            <div className="exchange-option">
                <input type="radio" name="buy_option" id="buy_with_exchange" />
                <label htmlFor="buy_with_exchange">Buy with Exchange</label>
                <div className="option-details">
                <span className="option-price">up to ₹9,000 off</span>
                <p className="pincode-check">Enter Pincode to check if exchange is available</p>
            </div>
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

    const [mainImage, setMainImage] = useState(
        productData && productData.images.length > 0 
            ? productData.images[0].src 
            : '' 
    );
    
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
           
    ul {
         list-style: none;
         padding-left: 0;
    }
    li {
         display: flex;
         align-items: center; 
         gap: 5px; 
         margin-top: 12px;
    }
    li img {
         display: block; 
    }
    li a {
         text-decoration: none; 
    }
    .bold {
        color: #212121;
        font-weight: bold;
        padding-right: 4px;
        line-height: 1.43;
        font-size: 14px;
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
        .active-thumbnail {
            border: 2px solid var(--primary-blue) !important;
            padding: 3px; 
        }
        .spanned {
            color: #2874f0;
            font-weight: 500;
            display: inline-block;
            margin-left: 5px;
            cursor: pointer;
        }
        .question {
           margin: 14px 0 0 8px;
           cursor: pointer;
        }
        .dhBD\+z {  
           height: 18px;
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
        }
        .current-price {
            font-size: 32px;
            font-weight: 600;
            margin-right: 10px;
            vertical-align:sub;
        }
        .mrp-price {
            text-decoration: line-through;
            color: #878787;
            vertical-align: middle;
        }
        .discount-percent {
            margin-left: 12px;
            font-size: 16px;
            font-weight: bold;
            color: #388e3c;
            vertical-align: middle;
        }
        .warranty-text {
            font-size: 14px;
            margin: 5px 0;
            color: #555;
            padding-bottom: 4px;
        }
        .delivery-text, .pincode-check, .warranty-text {
            font-size: 14px;
            margin: 5px 0;
            color: #000000;
        }
        .warranty-text a, .delivery-text a {
            color: var(--primary-blue);
            text-decoration: none;
            font-weight: bold;
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
        .view-more-offers {
            color: var(--primary-blue);
            font-size: 14px;
            font-weight: bold;
            text-decoration: none;
            display: block;
            margin-bottom: 20px;
        }
.exchange-options {
    border: 1px solid #f0f0f0;
    border-radius: 4px;
    margin-bottom: 20px;
}
.exchange-option {
    display: flex;
    align-items: flex-start; 
    padding: 16px;
    border-bottom: 1px solid #e0e0e0;
}
.exchange-option label {
    flex-grow: 1;
    font-size: 15px;
    margin-left: 10px;
    padding-top: 2px; 
}
.option-details {
    display: flex;
    flex-direction: column; 
    align-items: flex-end; 
}
.option-price {
    font-weight: 600; 
    font-size: 16px;
    white-space: nowrap; 
}
.pincode-check {
    font-size: 13px;
    color: #ff6161; 
    margin: 5px 0 0 0; 
    line-height: 1.2;
    white-space: nowrap;
}
.empty-placeholder {
    color: transparent;
    visibility: hidden; 
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
                        <ProductImageGallery images={productData.images} mainImage={mainImage} setMainImage={setMainImage} />
                        <ProductActions />
                    </div>

                    <div className="product-right-column">
                        <ProductDetails data={productData} />
                    </div>
                </div>

                <div className="bottom-sections"></div>
            </div>
        </>
    );
};

export default ProductDetailPage;