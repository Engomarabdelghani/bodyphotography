const CLOUD = 'djxxsn3dh';
const IBASE = `https://res.cloudinary.com/${CLOUD}/image/upload`;
const VBASE = `https://res.cloudinary.com/${CLOUD}/video/upload`;

// image URL helper
export const img = (publicId, width = 800) =>
  `${IBASE}/w_${width},q_auto,f_auto/${publicId}`;

// video URL helper
export const vid = (publicId) =>
  `${VBASE}/q_auto/${publicId}.mp4`;

// video thumbnail helper
export const vidThumb = (publicId) =>
  `${IBASE}/w_600,q_auto,f_auto,so_0/${publicId}.jpg`;

// ============================================
export const galleryImages = {
  profile:  'Profile_fhcwts.jpg',
  wedding:  '4_m1optx.jpg',
  football: '112_urpyto.jpg',
  events:   '78_uuvrpt.jpg',
  products: '51_earsgq.png',
  party:    '97_ff0www.jpg',
  sessions: '69_smpuq7.jpg',
  gym:      'BODI_PH-77_vio3dg.jpg',
};

export const heroImages = [
  { src: img('112_urpyto.jpg', 1920), title: 'Football Photography', description: '', alt: 'Football' },
  { src: img('4_m1optx.jpg',   1920), title: 'Wedding Photography',  description: '', alt: 'Wedding'  },
  { src: img('78_uuvrpt.jpg',  1920), title: 'Events Photography',   description: '', alt: 'Events'   },
  { src: img('51_earsgq.png',  1920), title: 'Product Photography',  description: '', alt: 'Products' },
  { src: img('69_smpuq7.jpg',  1920), title: 'Session Photography',  description: '', alt: 'Sessions' },
  { src: img('97_ff0www.jpg',  1920), title: 'Party Photography',    description: '', alt: 'Party'    },
  // { src: img('BODI_PH-77_vio3dg.jpg',  1920), title: 'Gym Photography',    description: '', alt: 'Gym'    },
];

// ============================================
// Images
// ============================================
const weddingIds = [
  '4_m1optx.jpg',  '36_r4ghie.jpg', '8_bha2gx.jpg',  '15_ub6jsg.jpg',
  '7_unwmry.jpg',  '27_lqvxe9.jpg', '35_dbg5rn.jpg', '10_fg5wrl.jpg',
  '3_o9egyd.jpg',  '20_ldd0iw.jpg', '16_ozvxex.jpg', '17_attdaw.jpg',
  '2_bndawr.jpg',  '19_c4afdr.jpg', '5_e4kwoo.jpg',  '11_tn96ef.jpg',
  '1_a9tshg.jpg',  '20_c0emxx.jpg', '19_qw9uzz.jpg', '3_kxgxja.jpg',
  '4_kbkgtr.jpg',  '2_fe12b2.jpg',  '5_cwomvl.jpg',  '1_lrjfpq.jpg',
  '17_enr0ng.jpg',
];

const productsIds = [
  '46_m6j9qf.jpg', '40_blvvmm.png', '47_d0pxf6.jpg', '43_hwwqjf.jpg',
  '44_gxfhcc.jpg', '41_jmhrxu.jpg', '39_nyr3x5.jpg', '48_y761ys.jpg',
  '49_xthwfl.jpg', '38_ire6k1.jpg', '51_earsgq.png', '52_agoqhf.jpg',
];

const partyIds = [
  '97_ff0www.jpg',  '104_wfgsvn.jpg', '105_sjzoyz.jpg', '103_e1sble.jpg',
  '100_ubj3hu.jpg', '98_tc6akn.jpg',  '96_jj96zv.jpg',  '95_ka5zef.jpg',
  '94_zocfpd.jpg',  '93_vsoao4.jpg',  '92_z24lkg.jpg',  '91_dyo4yx.jpg',
  '90_zkqmbs.jpg',  '89_rzkfkh.jpg',  '102_vssxsu.jpg', '101_j7ywe0.jpg',
];

const sessionsIds = [
  '55_qa5c1p.jpg', '64_eztvqx.jpg', '56_fyyuxh.jpg', '57_bk16fm.jpg',
  '70_hu9opv.jpg', '71_qflmhh.jpg', '72_k64ok8.jpg', '73_ubjygv.jpg',
  '74_e1a7fz.jpg', '75_kpjc07.jpg', '53_xedcr5.jpg', '54_lgryoe.jpg',
  '58_bhxe16.jpg', '59_e8momd.jpg', // ← تم تصحيح .gpj → .jpg
];

const footballIds = [
  '112_urpyto.jpg', '113_sxogx2.jpg', '131_shgnva.jpg', '114_bgmpcz.jpg',
  '115_w9v9sb.jpg', '118_wlupt5.jpg', '130_rwmvoa.jpg', '117_opczev.jpg',
  '133_wrd3jk.jpg', '119_kiofuf.jpg', '110_qeo5mf.jpg', '135_rhn8hx.jpg',
  '120_s2wupl.jpg', '108_i9q7uk.jpg', '109_benfzz.jpg', '125_oqwpz8.jpg',
  '124_jkxvqd.jpg', '123_c4uhpj.jpg', '122_h9gkyx.jpg', '121_odowyt.jpg',
  '107_uhuvoh.jpg', '118_ebwakk.jpg', '126_san36w.jpg', '127_vhu0c5.jpg',
  '128_a2wxv8.jpg', '129_zcj0th.jpg', '132_cxfjq1.jpg', '134_a9vhiz.jpg',
  '106_e4iutw.jpg',
];

const eventsIds = [
  '84_y0m2ga.jpg', '87_ahmonn.jpg', '77_fszohs.jpg', '86_gurk0h.jpg',
  '85_iivgaa.jpg', '76_zqnjfk.jpg', '78_uuvrpt.jpg', '88_abgqrq.jpg',
  '83_d6wk8t.jpg', '82_wikcmy.jpg', '81_bibpkd.jpg', '80_fcsitv.jpg',
];
const gymImageIds = [
  'BODI_PH-49_zvbecr.jpg', 'BODI_PH-77_vio3dg.jpg', 'BODI_PH-133_vpnbdk.jpg',
  'BODI_PH-219_hsbgg2.jpg', 'BODI_PH-149_heyopz.jpg', 'BODI_PH-152_z7sku1.jpg',
  'BODI_PH-153_gac9dk.jpg'
];

// ============================================
// Videos
// ============================================
const eventsVideoIds      = ['1_nz9z9p', '2_yyp6t3', '3_dbhlpj', '4_fvawd2'];
const footballClubsIds    = ['16_lzc1g9', '17_uxdomc', '18_rkbntq'];
const footballAcademyIds  = ['12_ox4rfu', '13_tqmqw3', '14_pdril1', '15_kbufrv' , '45_xcfgya'];
const footballRamadanIds  = ["19_njpu3f", '20_sxgefs'];
const footballCVIds       = ['6_jqzdcn', '7_jdmnfz', '10_qorfpz', '11_vtsuos', '8_1_qdbocy', '23_bru7wc', '9_rih3i1', '25_xggb2j', '24_ex0i19', '26_loyts5', '27_nfn04z'];
const gymIds              = ['GYM_1_n5mzuu'];
const podcastIds           = ['E1_1_1_ctckux'];
const FoodVideoIds    = ['7_nqe1yf', '4_airstu', '3_dw9fku', '8_j0nono', '5_k7wb23', '2_eyphsx', '9_qs5mpt', '1_td27yg'];
// ============================================
// Helpers
// ============================================
const toMedia = (ids, label) =>
  ids.map((id, i) => ({ src: img(id), type: 'image', title: `${label} ${i + 1}` }));

const toVideoMedia = (ids, label) =>
  ids.map((id, i) => ({
    src:       vid(id),
    thumbnail: vidThumb(id),
    type:      'video',
    title:     `${label} ${i + 1}`,
  }));

// ============================================
// GALLERIES
// ============================================
export const GALLERIES = [
  {
    id: 'wedding-2025',
    title: 'Wedding Moments',
    description: 'Beautiful wedding ceremonies and celebrations',
    thumbnail: img(galleryImages.wedding),
    category: 'Wedding',
    color: 'from-rose-500 to-pink-600',
    media: toMedia(weddingIds, 'Wedding'),
  },
  {
    id: 'products-2025',
    title: 'Products',
    description: 'High-quality product photography',
    thumbnail: img(galleryImages.products),
    category: 'Products',
    color: 'from-purple-500 to-indigo-600',
    media: toMedia(productsIds, 'Product'),
  },
  {
    id: 'sessions-2025',
    title: 'Sessions - Classic',
    description: 'Session photos - classic style',
    thumbnail: img(galleryImages.sessions),
    category: 'Sessions',
    color: 'from-blue-500 to-cyan-600',
    media: toMedia(sessionsIds, 'Session'),
  },
  {
    id: 'events-2025',
    title: 'Event Coverage',
    description: 'Professional event documentation',
    thumbnail: img(galleryImages.events),
    category: 'Events',
    color: 'from-emerald-500 to-teal-600',
    media: toMedia(eventsIds, 'Event'),
  },
  {
    id: 'party-2025',
    title: 'Party Moments',
    description: 'Vibrant celebration photography',
    thumbnail: img(galleryImages.party),
    category: 'Party',
    color: 'from-amber-500 to-orange-600',
    media: toMedia(partyIds, 'Party'),
  },
  {
    id: 'football-2025',
    title: 'Football Action',
    description: 'Dynamic sports photography',
    thumbnail: img(galleryImages.football),
    category: 'Football',
    color: 'from-green-500 to-emerald-600',
    media: toMedia(footballIds, 'Football'),
  },
  {
  id: 'gym-2025',
  title: 'Gym Photography',
  description: 'Fitness and bodybuilding photography',
  thumbnail: img(galleryImages.gym),
  category: 'Gym',
  color: 'from-red-500 to-orange-600',
  media: toMedia(gymImageIds, 'Gym'),
},
  // ── Video Galleries ──
  {
    id: 'events-videos',
    title: 'Events Videos',
    description: 'Event highlights and reels',
    thumbnail: img('136_i1zkk9.jpg'),
    category: 'Events',
    color: 'from-emerald-500 to-teal-600',
    media: toVideoMedia(eventsVideoIds, 'Event'),
  },
  {
    id: 'football-clubs-videos',
    title: 'Football — Clubs',
    description: 'Club match highlights',
    thumbnail: img('137_mepsql.jpg'),
    category: 'Football',
    color: 'from-green-500 to-emerald-600',
    media: toVideoMedia(footballClubsIds, 'Club'),
  },
  {
    id: 'football-academy-videos',
    title: 'Football — Academy',
    description: 'Training and development',
    thumbnail: img('138_elwgex.jpg'),
    category: 'Football',
    color: 'from-amber-500 to-orange-600',
    media: toVideoMedia(footballAcademyIds, 'Academy'),
  },
  {
    id: 'football-ramadan-videos',
    title: 'Football — Ramadan League',
    description: 'Ramadan league matches',
    thumbnail: img('139_n3x8k1.jpg'),
    category: 'Football',
    color: 'from-indigo-500 to-purple-600',
    media: toVideoMedia(footballRamadanIds, 'Ramadan'),
  },
  {
    id: 'football-cv-videos',
    title: 'Football — CV Videos',
    description: 'CV and profile videos',
    thumbnail: img('140_nexgdm.jpg'),
    category: 'Football',
    color: 'from-orange-500 to-red-600',
    media: toVideoMedia(footballCVIds, 'CV'),
  },
  {
    id: 'gym-videos',
    title: 'Gym Videos',
    description: 'Fitness and training workouts',
    thumbnail: img('Gym_tocjwy.jpg'),
    category: 'Gym',
    color: 'from-red-500 to-orange-600',
    media: toVideoMedia(gymIds, 'Gym'),
  },
  {
    id: 'podcast-videos',
    title: 'Podcast Videos',
    description: 'Engaging podcast sessions',
    thumbnail: img('podcast_beuscu.jpg'),
    category: 'Podcast',
    color: 'from-purple-500 to-indigo-600',
    media: toVideoMedia(podcastIds, 'Podcast'),
  },
  { 
    id: 'food-videos',
    title: 'Food Videos',
    description: 'Delicious food and recipe videos',
    thumbnail: img('food_pdhdlm.jpg'),
    category: 'Food',
    color: 'from-yellow-500 to-orange-600',
    media: toVideoMedia(FoodVideoIds, 'Food'),
  },

].filter((g) => g.media.length > 0); 

export const featuredGalleries = GALLERIES.slice(0, 6).map((g) => ({
  title:       g.title,
  category:    g.id,
  image:       g.thumbnail,
  description: g.description,
}));

export const getGalleryById = (id) => GALLERIES.find((g) => g.id === id);
export const getAllGalleries = ()   => GALLERIES;