let cards_info_copy = [
    [
        "img/image 4.png",
        "Крепкий орешек (1988)",
        "Боевик, Триллер",
        "16+",
        8
    ],
    [
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/6bbc44be-6d36-4037-a9c8-889b65f4550b/300x450',
        'El Camino (2019)',
        'Драма',
        '18+',
        7.2
    ],
    [
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/87298984-6286-425f-ab61-9afbf2c78afb/300x450',
        'Лучше звоните Солу (2015)',
        'Драма',
        '18+',
        8.3
    ],
    [
        'https://images.kinorium.com/movie/poster/669090/w1500_50436561.jpg',
        'Острые Козырьки (2021)',
        'Драма',
        '18+',
        8.4
    ],
    [
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/fb35416f-3b0d-4b96-bc65-cf6923f9e329/300x450',
        'Во все тяжкие (2008)',
        'Драма, Триллер',
        '18+',
        8.9
    ],
    [
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/37f88226-546b-4779-a074-c92202eb9374/300x450',
        'Кухня (2012)',
        'Комедия',
        '16+',
        8.2
    ],
    [
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/430042eb-ee69-4818-aed0-a312400a26bf/300x450',
        'Интерстеллар (2014)',
        'Фантастика, драма',
        '16+',
        8.6

    ],
    [
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/c1b01d13-73ff-407f-82b3-f5dda7e3cce3/300x450',
        'Возвращение Мухтара (2003)',
        'Комедия',
        '16+',
        4.3
    ],
    [
        'https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/f0ae94af-050a-433b-a2a9-d6c96d644fd8/1920x',
        'Барби (2023)',
        'Комедия, Фантастика',
        '12+',
        7.3
    ],
    [
        'https://avatars.mds.yandex.net/get-kinopoisk-image/4486454/c5292109-642c-4ab0-894a-cc304e1bcec4/1920x',
        'Оппенгеймер (2023)',
        'Биографический, Драма',
        '16+',
        8.4
    ],
    [
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/8e405bdd-3381-41e3-9375-03eb4411375e/300x',
        'Перевозчик (2002)',
        'Боевик, Триллер',
        '16+',
        7.4
    ],
    [
        'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/aad6efb9-61c4-4e7d-acd0-7f9a30951b03/1920x',
        'Переводчик (2022)',
        'Боевик, Триллер, Драма',
        '18+',
        7.4
    ],
    [
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/d9c4e79e-9603-4df0-b464-0ee64b05d91e/1920x',
        'Кот в сапогах (2011)',
        'Мультфильм, Фантастика, Мелодрама, Детектив',
        '0+',
        7.1
    ],
    [
        'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/acbbd8ea-1763-4267-9042-0e05af5579c4/1920x',
        'Кот в сапогах 2: Последнее желание (2022)',
        'Мультфильм, Фантастика, Комедия',
        '6+',
        8.1
    ],
    [
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/ef98d170-1128-4057-895a-f3cbaf2cf775/1920x',
        'Шрэк (2001)',
        'Мультфильм, Фантастика, Комедия, Мелодрама',
        '12+',
        8.1
    ],
    [
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/30c8c057-deaf-4e91-b5ef-9353c11c1d4d/300x450',
        'Топ Гир (сериал 2002)',
        'Документальный, Комедия',
        '12+',
        8.6
    ],
    [
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/09d3efb2-2abe-47fc-bbdf-62460798f228/1920x',
        "Настоящий детектив (сериал 2014)",
        'Детектив, Триллер, Драма',
        '18+',
        8.7
    ],
    [
        'https://www.kinopoisk.ru/u1s64R117/786b74LJ8j_/fn6MMESYAOqfZmt7-CYFMBfUu02nSKpCuFAMaNlVqztiZ_7O8jDk3VFiJoC1LZfUklOZN_mSS8fYg84E2GEb7-v7zOeAyhZqCPT47m4zhOORV_uc4Rq_078U2z4Onmcxbu2iR3367NZJMvaQs7tAA0JCznS8UFiWiN9AgtRwzfB4Mgj5iUYCoFn9p_k9JcH1Tt-yhDgC4Q8nFgVjEtNu9e5uZcUxPCtaT_06VCtyxA7Igwx1dByKXIzbDJ7bsoj6PXGMMsPHTqfTfWE4OOtKOA2dtgB2zyZDohFOplwQq3Dk6WSHOnssmEI_sFmmOM_Fi4sONfPTg1jB3YRX1PSA8__2DDnKyw7i2HevMbtsQvNFUTbIPoGgyaOfTSjRmmsz5eTuznv2qR-MsjkQrfJEyEAAx_P2kgIZxxSBFFbxAvizP0-4gYYA75C2pj42ZUc-ghx2SfGP6cEj0gAr35ym-expZsBzdODWAHsxmCtwTMAAzgM2cF_CEQbbRx-TMUn5PvHItQAHAmHe9af2N-6CdUiWecT9zG4DZh9EbdFV5XWu4a8HenYv3wa_ft7rNIGECkvA9_3YyphP1clUXb2Jt3RxyjDIyYemEvxocT-njPJHErZC8MBmDatZA-VcHy54ZCYuyTI47dGENPKWI7JHiQfFSbD4WY1aTNAO2pR2QXg-vY1-zccIoRK-bLe47U67RJX5jjGBoE3r3gXm3pjsOGLm68C0--BewD77EKT6AEyBw8OzdBDBnkEbRJyVugMw-HgBN4uJjaoV-Gx6uaKKNYwW_Au_TCkLoB8FYteSIjwlb-UKs_UrWY9_eVeh_YIASEoL-PUQzh4Ok47Y0vTLMnawBPqKRcdmkTjhMPshATPFFPHG-EfgCy6Rzy4eH6Iy4-DriHL1qVpGv_AeaLnCysBGhrizUYVexJENH5Q3jTm6NQB1zInJ4tExo33_b4f3ztQ5yb8Pa8Yu208tHJ3kMuZnpMk9NaxVQDe31eByTovBzYE08NTNWQgaAxfQP4r7_LYEOIqHBiXVOSu6cqoI_wHa_IN5B-KNplCDpV_YYvOiLqUPd_ugkoP5vxPqsIGITMvPN7qSQhFB2c3WVP8Md3B-iTCJR4DinfCsP3UrR3eE13lGuQPtQicZC2ZXXeQy7awmCTf1JpfHejGfqfpAAUENTTizEE5WgVkNW1P4zfO_cMy-SUhL5551qP8z48VwShV3zX7CZUwn04XtVtgjsaIk78F7dSBfQ7p9X6J1iwBByE-_OhrPUwPTyxhefQF_eHUMsIvGhm9XuG45-y5Etwncvww1ga-N7RAKYtATYnOsoG1MO7tunYpy8Z7jd8kJyAuFNLJYQFSN3YxfXDpF87q1BvgDygcimPBgtripCPpJ0jiBtYCnQaAcg67RW2nyreZviD_85x7DvDkRa7XBQICKBr110IHQQ5XEEdQxifM8vYz4DIhJa9Iwbbd9pEA2wVp5jvhJKYKjV4pr3lAtt2XuoAi6cuxdwP0y36E8istIR4008ZLLVAEczFzT_QP4tnXMtskBy27QvGE-uOMPMA_cNABwAyINr9aD6hBZajwuYeCAMvWk0c70-Fej8QlMDAIJ__GYTZxEXswY1bfEPjI6BXANy8opHnRs8nliBXyE1fvFtgopyqJaQmXQFWRxbKQkCjGyLxlCNPVQ4LfDAIjCzvUzngtZwRHB3hK2ivEytsX0jMJALx5xoDg_akD0AhK7i7CJp0fvHkbvkRSgNCJsLk_3NeBSRva5kWv8SUlER0g9PBwNk8nbzN6YvwXzev6GP4wOAmdVtu4yMSsI9QLUO4DwSCNMppPE6Jedqvqtp2CE-3LmVob2sB8q80_ACo_NdXUfThBD1EYZFfyMv7t6jj0DwcctGPjk-TjjyLyOnffDeILrhmrZjWiWU-Z9aympB_jyrJACPj9fqbuGzI2NzLM70I6eTpqPE1mwRXh-8YW9y8EP69twrbd278kyCRu6zvaKL0Hnkwpm0hFiM2Lk7kI5PG-aBDb-neG4zkzMgES_tRvCnIgaQ9DduYkxtDdGsQZPiurY_iG_OmyEMsmX90v-CugNbRJLZ1edrbpnYKBMOnbnHEQ0OhmleseBCccHejpRxpBJkY4REX3CsfQ_CngAzwJgWPnuMT8uwX-GE_KBsgunxS_bgq0aFeK1Zy1pRnA66FAHP7hYafWKykHGhXPxF0iUh1mMG5k4Df7z9wF-zgPI7ph46TL6ogfzgNG_wvKIKc9j18itFxWldaeva8q0eGMXgD6-HKG8x8wDQ4ZytVkJX8AchlxV98X49rfNNUHNxarVNWTxt2UCd8XZc842j-KHZZeH6JZdJLhoLWUHsLVo1Uk5cpBoewiCRA6M_rGUylZHWEyTVTFCOb32hrABCoAllb8guzHtBXVNHj_FPUJnCm2bg2MZGSIzb6agBPf055DCP3MQrjtPBYNKzv0w1oEWgdDG3Jy2yPD7v8n4DEjPbxH2LzAzLE40CBaxwTLDZoEoGgXi2t8rcWdo6wh1MWhVz_6zl2Kxxk6EwMf1_p7PmwQeChCRsgq2tzbB-A2BAG-ftORxv20Nfscbuo32SK9HZ9yP75oZ4rroraXNNHkmnguydRDs-A4Cyc_Ndb1cDZtIXU2Rk7_Jv3dygDCFh0CtGnnkOLAkgDMIHXHI8sDtQ2mcQq0b3OF_a6guyjs8aZiEPfIW6jhAAwXNxDp6kMaci5rOnF1-ibM__Yf8QcECqJD05fI1qwd0TZlzQv1F5oWmkEbj2FJusGRuJc0y-i4WAbo23aN8BAHLh4b3_p_PlsBWjFBYcIlxNvIB9IDBhSadsOYyduXPdI3Tfso9gOCMJRsCqxrQ6finp-AA8zUnFsg6t53o-gDFwEyHsrYbwpJLmgEWEv6JcfNwAPZOzgIpFvFuujLsBjQG1XnEds2lRy_aiKBYVOQ96q9kSXvyrVxJuTdUqjvBiI2HSXL1m86YDI',
        'Король и Шут: Экстра (сериал 2023)',
        'Документальный',
        '18+',
        8
    ],
    [
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/4483402c-c1bb-4768-8b67-aa2b25355b7b/1920x',
        'Ford против Ferrari (2019)',
        'Биографический, Драма, Боевик',
        '16+',
        8.2
    ],
    [
        'https://www.kinopoisk.ru/u1s64R117/786b74LJ8j_/fn6MMESYAOqfZmt7-CYFMBfUu02nSKpCuFAMaNlVqztiZ_7O8jDk3VFjZoF1L9dVUlNZo27GC8cbw9uSGKAb7-u6zWeWHwK-iPTtr25ykKOFwTsd9Bq_078U2z4Onmcxbu2iR3367NZJMvaQs7tAA0JCznS8UFiWiN9AgtRwzfB4Mgj5iUYCoFn9p_k9JcH1Tt-yhDgC4Q8nFgVjEtNu9e5uZcUxPCtaT_06VCtyxA7Igwx1dByKXIzbDJ7bsoj6PXGMMsPHTqfTfWE4OOtKOA2dtgB2zyZDohFOplwQq3Dk6WSHOnssmEI_sFmmOM_Fi4sONfPTg1jB3YRX1PSA8__2DDnKyw7i2HevMbtsQvNFUTbIPoGgyaOfTSjRmmsz5eTuznv2qR-MsjkQrfJEyEAAx_P2kgIZxxSBFFbxAvizP0-4gYYA75C2pj42ZUc-ghx2SfGP6cEj0gAr35ym-expZsBzdODWAHsxmCtwTMAAzgM2cF_CEQbbRx-TMUn5PvHItQAHAmHe9af2N-6CdUiWecT9zG4DZh9EbdFV5XWu4a8HenYv3wa_ft7rNIGECkvA9_3YyphP1clUXb2Jt3RxyjDIyYemEvxocT-njPJHErZC8MBmDatZA-VcHy54ZCYuyTI47dGENPKWI7JHiQfFSbD4WY1aTNAO2pR2QXg-vY1-zccIoRK-bLe47U67RJX5jjGBoE3r3gXm3pjsOGLm68C0--BewD77EKT6AEyBw8OzdBDBnkEbRJyVugMw-HgBN4uJjaoV-Gx6uaKKNYwW_Au_TCkLoB8FYteSIjwlb-UKs_UrWY9_eVeh_YIASEoL-PUQzh4Ok47Y0vTLMnawBPqKRcdmkTjhMPshATPFFPHG-EfgCy6Rzy4eH6Iy4-DriHL1qVpGv_AeaLnCysBGhrizUYVexJENH5Q3jTm6NQB1zInJ4tExo33_b4f3ztQ5yb8Pa8Yu208tHJ3kMuZnpMk9NaxVQDe31eByTovBzYE08NTNWQgaAxfQP4r7_LYEOIqHBiXVOSu6cqoI_wHa_IN5B-KNplCDpV_YYvOiLqUPd_ugkoP5vxPqsIGITMvPN7qSQhFB2c3WVP8Md3B-iTCJR4DinfCsP3UrR3eE13lGuQPtQicZC2ZXXeQy7awmCTf1JpfHejGfqfpAAUENTTizEE5WgVkNW1P4zfO_cMy-SUhL5551qP8z48VwShV3zX7CZUwn04XtVtgjsaIk78F7dSBfQ7p9X6J1iwBByE-_OhrPUwPTyxhefQF_eHUMsIvGhm9XuG45-y5Etwncvww1ga-N7RAKYtATYnOsoG1MO7tunYpy8Z7jd8kJyAuFNLJYQFSN3YxfXDpF87q1BvgDygcimPBgtripCPpJ0jiBtYCnQaAcg67RW2nyreZviD_85x7DvDkRa7XBQICKBr110IHQQ5XEEdQxifM8vYz4DIhJa9Iwbbd9pEA2wVp5jvhJKYKjV4pr3lAtt2XuoAi6cuxdwP0y36E8istIR4008ZLLVAEczFzT_QP4tnXMtskBy27QvGE-uOMPMA_cNABwAyINr9aD6hBZajwuYeCAMvWk0c70-Fej8QlMDAIJ__GYTZxEXswY1bfEPjI6BXANy8opHnRs8nliBXyE1fvFtgopyqJaQmXQFWRxbKQkCjGyLxlCNPVQ4LfDAIjCzvUzngtZwRHB3hK2ivEytsX0jMJALx5xoDg_akD0AhK7i7CJp0fvHkbvkRSgNCJsLk_3NeBSRva5kWv8SUlER0g9PBwNk8nbzN6YvwXzev6GP4wOAmdVtu4yMSsI9QLUO4DwSCNMppPE6Jedqvqtp2CE-3LmVob2sB8q80_ACo_NdXUfThBD1EYZFfyMv7t6jj0DwcctGPjk-TjjyLyOnffDeILrhmrZjWiWU-Z9aympB_jyrJACPj9fqbuGzI2NzLM70I6eTpqPE1mwRXh-8YW9y8EP69twrbd278kyCRu6zvaKL0Hnkwpm0hFiM2Lk7kI5PG-aBDb-neG4zkzMgES_tRvCnIgaQ9DduYkxtDdGsQZPiurY_iG_OmyEMsmX90v-CugNbRJLZ1edrbpnYKBMOnbnHEQ0OhmleseBCccHejpRxpBJkY4REX3CsfQ_CngAzwJgWPnuMT8uwX-GE_KBsgunxS_bgq0aFeK1Zy1pRnA66FAHP7hYafWKykHGhXPxF0iUh1mMG5k4Df7z9wF-zgPI7ph46TL6ogfzgNG_wvKIKc9j18itFxWldaeva8q0eGMXgD6-HKG8x8wDQ4ZytVkJX8AchlxV98X49rfNNUHNxarVNWTxt2UCd8XZc842j-KHZZeH6JZdJLhoLWUHsLVo1Uk5cpBoewiCRA6M_rGUylZHWEyTVTFCOb32hrABCoAllb8guzHtBXVNHj_FPUJnCm2bg2MZGSIzb6agBPf055DCP3MQrjtPBYNKzv0w1oEWgdDG3Jy2yPD7v8n4DEjPbxH2LzAzLE40CBaxwTLDZoEoGgXi2t8rcWdo6wh1MWhVz_6zl2Kxxk6EwMf1_p7PmwQeChCRsgq2tzbB-A2BAG-ftORxv20Nfscbuo32SK9HZ9yP75oZ4rroraXNNHkmnguydRDs-A4Cyc_Ndb1cDZtIXU2Rk7_Jv3dygDCFh0CtGnnkOLAkgDMIHXHI8sDtQ2mcQq0b3OF_a6guyjs8aZiEPfIW6jhAAwXNxDp6kMaci5rOnF1-ibM__Yf8QcECqJD05fI1qwd0TZlzQv1F5oWmkEbj2FJusGRuJc0y-i4WAbo23aN8BAHLh4b3_p_PlsBWjFBYcIlxNvIB9IDBhSadsOYyduXPdI3Tfso9gOCMJRsCqxrQ6finp-AA8zUnFsg6t53o-gDFwEyHsrYbwpJLmgEWEv6JcfNwAPZOzgIpFvFuujLsBjQG1XnEds2lRy_aiKBYVOQ96q9kSXvyrVxJuTdUqjvBiI2HSXL1m86YDI',
        'Я — легенда (2007)',
        'Хоррор, Драма, Боевик, Фантастика, Триллер',
        '16+',
        7.9
    ],
    [
        'https://www.kinopoisk.ru/u1s64R117/786b74LJ8j_/fn6MMESYAOqfZmt7-CYFMBfUu02nSKpCuFAMaNlVqztiZ_7O8jDk3VFjZgM2bZbW0lOb9ixGX9MMA8-TmaDb7-uvGeeA3df-SOO5uvtmBOKFwS7ddRq_078U2z4Onmcxbu2iR3367NZJMvaQs7tAA0JCznS8UFiWiN9AgtRwzfB4Mgj5iUYCoFn9p_k9JcH1Tt-yhDgC4Q8nFgVjEtNu9e5uZcUxPCtaT_06VCtyxA7Igwx1dByKXIzbDJ7bsoj6PXGMMsPHTqfTfWE4OOtKOA2dtgB2zyZDohFOplwQq3Dk6WSHOnssmEI_sFmmOM_Fi4sONfPTg1jB3YRX1PSA8__2DDnKyw7i2HevMbtsQvNFUTbIPoGgyaOfTSjRmmsz5eTuznv2qR-MsjkQrfJEyEAAx_P2kgIZxxSBFFbxAvizP0-4gYYA75C2pj42ZUc-ghx2SfGP6cEj0gAr35ym-expZsBzdODWAHsxmCtwTMAAzgM2cF_CEQbbRx-TMUn5PvHItQAHAmHe9af2N-6CdUiWecT9zG4DZh9EbdFV5XWu4a8HenYv3wa_ft7rNIGECkvA9_3YyphP1clUXb2Jt3RxyjDIyYemEvxocT-njPJHErZC8MBmDatZA-VcHy54ZCYuyTI47dGENPKWI7JHiQfFSbD4WY1aTNAO2pR2QXg-vY1-zccIoRK-bLe47U67RJX5jjGBoE3r3gXm3pjsOGLm68C0--BewD77EKT6AEyBw8OzdBDBnkEbRJyVugMw-HgBN4uJjaoV-Gx6uaKKNYwW_Au_TCkLoB8FYteSIjwlb-UKs_UrWY9_eVeh_YIASEoL-PUQzh4Ok47Y0vTLMnawBPqKRcdmkTjhMPshATPFFPHG-EfgCy6Rzy4eH6Iy4-DriHL1qVpGv_AeaLnCysBGhrizUYVexJENH5Q3jTm6NQB1zInJ4tExo33_b4f3ztQ5yb8Pa8Yu208tHJ3kMuZnpMk9NaxVQDe31eByTovBzYE08NTNWQgaAxfQP4r7_LYEOIqHBiXVOSu6cqoI_wHa_IN5B-KNplCDpV_YYvOiLqUPd_ugkoP5vxPqsIGITMvPN7qSQhFB2c3WVP8Md3B-iTCJR4DinfCsP3UrR3eE13lGuQPtQicZC2ZXXeQy7awmCTf1JpfHejGfqfpAAUENTTizEE5WgVkNW1P4zfO_cMy-SUhL5551qP8z48VwShV3zX7CZUwn04XtVtgjsaIk78F7dSBfQ7p9X6J1iwBByE-_OhrPUwPTyxhefQF_eHUMsIvGhm9XuG45-y5Etwncvww1ga-N7RAKYtATYnOsoG1MO7tunYpy8Z7jd8kJyAuFNLJYQFSN3YxfXDpF87q1BvgDygcimPBgtripCPpJ0jiBtYCnQaAcg67RW2nyreZviD_85x7DvDkRa7XBQICKBr110IHQQ5XEEdQxifM8vYz4DIhJa9Iwbbd9pEA2wVp5jvhJKYKjV4pr3lAtt2XuoAi6cuxdwP0y36E8istIR4008ZLLVAEczFzT_QP4tnXMtskBy27QvGE-uOMPMA_cNABwAyINr9aD6hBZajwuYeCAMvWk0c70-Fej8QlMDAIJ__GYTZxEXswY1bfEPjI6BXANy8opHnRs8nliBXyE1fvFtgopyqJaQmXQFWRxbKQkCjGyLxlCNPVQ4LfDAIjCzvUzngtZwRHB3hK2ivEytsX0jMJALx5xoDg_akD0AhK7i7CJp0fvHkbvkRSgNCJsLk_3NeBSRva5kWv8SUlER0g9PBwNk8nbzN6YvwXzev6GP4wOAmdVtu4yMSsI9QLUO4DwSCNMppPE6Jedqvqtp2CE-3LmVob2sB8q80_ACo_NdXUfThBD1EYZFfyMv7t6jj0DwcctGPjk-TjjyLyOnffDeILrhmrZjWiWU-Z9aympB_jyrJACPj9fqbuGzI2NzLM70I6eTpqPE1mwRXh-8YW9y8EP69twrbd278kyCRu6zvaKL0Hnkwpm0hFiM2Lk7kI5PG-aBDb-neG4zkzMgES_tRvCnIgaQ9DduYkxtDdGsQZPiurY_iG_OmyEMsmX90v-CugNbRJLZ1edrbpnYKBMOnbnHEQ0OhmleseBCccHejpRxpBJkY4REX3CsfQ_CngAzwJgWPnuMT8uwX-GE_KBsgunxS_bgq0aFeK1Zy1pRnA66FAHP7hYafWKykHGhXPxF0iUh1mMG5k4Df7z9wF-zgPI7ph46TL6ogfzgNG_wvKIKc9j18itFxWldaeva8q0eGMXgD6-HKG8x8wDQ4ZytVkJX8AchlxV98X49rfNNUHNxarVNWTxt2UCd8XZc842j-KHZZeH6JZdJLhoLWUHsLVo1Uk5cpBoewiCRA6M_rGUylZHWEyTVTFCOb32hrABCoAllb8guzHtBXVNHj_FPUJnCm2bg2MZGSIzb6agBPf055DCP3MQrjtPBYNKzv0w1oEWgdDG3Jy2yPD7v8n4DEjPbxH2LzAzLE40CBaxwTLDZoEoGgXi2t8rcWdo6wh1MWhVz_6zl2Kxxk6EwMf1_p7PmwQeChCRsgq2tzbB-A2BAG-ftORxv20Nfscbuo32SK9HZ9yP75oZ4rroraXNNHkmnguydRDs-A4Cyc_Ndb1cDZtIXU2Rk7_Jv3dygDCFh0CtGnnkOLAkgDMIHXHI8sDtQ2mcQq0b3OF_a6guyjs8aZiEPfIW6jhAAwXNxDp6kMaci5rOnF1-ibM__Yf8QcECqJD05fI1qwd0TZlzQv1F5oWmkEbj2FJusGRuJc0y-i4WAbo23aN8BAHLh4b3_p_PlsBWjFBYcIlxNvIB9IDBhSadsOYyduXPdI3Tfso9gOCMJRsCqxrQ6finp-AA8zUnFsg6t53o-gDFwEyHsrYbwpJLmgEWEv6JcfNwAPZOzgIpFvFuujLsBjQG1XnEds2lRy_aiKBYVOQ96q9kSXvyrVxJuTdUqjvBiI2HSXL1m86YDI',
        'Война миров Z (2013)',
        'Боевик, Фантастика, Хоррор',
        '12+',
        8.2
    ],
];

document.querySelectorAll(".card").forEach(element => {
    element.onmouseover = function(){
        element.style.transform = "scale(1.05)";
    }
    element.onmouseout = function(){
        element.style.transform = "scale(1)";
    }
});

document.querySelector(".search_btn").onmouseover = function(){
    document.querySelector(".search_btn_text").style.transform = "scale(1.1)";
}
document.querySelector(".search_btn").onmouseout = function(){
    document.querySelector(".search_btn_text").style.transform = "scale(1)";
}

document.querySelectorAll(".search_setting").forEach(element => {
    element.onmouseover = function(){
        element.children[0].style.transform = "scale(1.1)";
    }
    element.onmouseout = function(){
        element.children[0].style.transform = "scale(1)";
    }
    element.onclick = function(){
        let number = element.id.replace(/[a-zа-яё]|_/gi,"");
        let choose_list = document.querySelectorAll(".choose_list")[number-1]
        if(element.children[1].style.transform == "rotate(-90deg)"){
            element.children[1].style.transform = "rotate(0deg)";
            choose_list.style.marginTop = "0px"
        } else{
            element.children[1].style.transform = "rotate(-90deg)";
            if(number == 1){
                choose_list.style.marginTop = "-140px"
            }
            if(number == 2){
                choose_list.style.marginTop = "-320px"
            }
            if(number == 3){
                choose_list.style.marginTop = "-200px"
            }
            if(number == 4){
                choose_list.style.marginTop = "-121px"
            }
        }
    }
});

let options_array = []
let nothing

document.querySelectorAll(".option").forEach(element =>{
    element.onmouseover = function(){
        element.style.transform = "scale(1.1)";
    }
    element.onmouseout = function(){
        element.style.transform = "scale(1)";
    }
    element.onclick = function(){
        if(element.classList.contains("option") == true && element.parentElement.id != "age" && element.parentElement.id != "raiting"){
            element.classList.remove("option")
            element.classList.add("option_red")
        } 
        else if(element.classList.contains("option_red") == true){
            element.classList.remove("option_red")
            element.classList.add("option")
        }
        else if(element.parentElement.id == "age"){
            for(let i = 0; i < 5; i++){
                element.parentElement.children[i].classList.remove("option_red");
            }
            element.classList.add("option_red")
        }
        else if(element.parentElement.id == "raiting"){
            for(let i = 0; i < 2; i++){
                element.parentElement.children[i].classList.remove("option_red");
            }
            element.classList.add("option_red")
        }

        if(options_array.includes(nothing) == true){
            options_array.splice(options_array.indexOf(nothing), 1);
        }
        if(options_array.includes(element.innerHTML) == true){
            options_array.splice(options_array.indexOf(element.innerHTML), 1);
        } else{
            options_array.push(element.innerHTML);
        }
        if(element.innerHTML == 'Сначала лучшие' && options_array.includes('Сначала худшие') == true){
            options_array.splice(options_array.indexOf(`Сначала худшие`), 1);
        }     
        if(element.innerHTML == 'Сначала худшие' && options_array.includes('Сначала лучшие') == true){
            options_array.splice(options_array.indexOf(`Сначала лучшие`), 1);
        }
        if(element.innerHTML == '0+'){
            if(options_array.includes('6+') == true){
                options_array.splice(options_array.indexOf(`6+`), 1);
            }
            if(options_array.includes('12+') == true){
                options_array.splice(options_array.indexOf(`12+`), 1);
            }
            if(options_array.includes('16+') == true){
                options_array.splice(options_array.indexOf(`16+`), 1);
            }
            if(options_array.includes('18+') == true){
                options_array.splice(options_array.indexOf(`18+`), 1);
            }
        }
        if(element.innerHTML == '6+'){
            if(options_array.includes('0+') == true){
                options_array.splice(options_array.indexOf(`0+`), 1);
            }
            if(options_array.includes('12+') == true){
                options_array.splice(options_array.indexOf(`12+`), 1);
            }
            if(options_array.includes('16+') == true){
                options_array.splice(options_array.indexOf(`16+`), 1);
            }
            if(options_array.includes('18+') == true){
                options_array.splice(options_array.indexOf(`18+`), 1);
            }
        }
        if(element.innerHTML == '12+'){
            if(options_array.includes('6+') == true){
                options_array.splice(options_array.indexOf(`6+`), 1);
            }
            if(options_array.includes('0+') == true){
                options_array.splice(options_array.indexOf(`0+`), 1);
            }
            if(options_array.includes('16+') == true){
                options_array.splice(options_array.indexOf(`16+`), 1);
            }
            if(options_array.includes('18+') == true){
                options_array.splice(options_array.indexOf(`18+`), 1);
            }
        }
        if(element.innerHTML == '16+'){
            if(options_array.includes('6+') == true){
                options_array.splice(options_array.indexOf(`6+`), 1);
            }
            if(options_array.includes('12+') == true){
                options_array.splice(options_array.indexOf(`12+`), 1);
            }
            if(options_array.includes('0+') == true){
                options_array.splice(options_array.indexOf(`0+`), 1);
            }
            if(options_array.includes('18+') == true){
                options_array.splice(options_array.indexOf(`18+`), 1);
            }
        }
        if(element.innerHTML == '18+'){
            if(options_array.includes('6+') == true){
                options_array.splice(options_array.indexOf(`6+`), 1);
            }
            if(options_array.includes('12+') == true){
                options_array.splice(options_array.indexOf(`12+`), 1);
            }
            if(options_array.includes('16+') == true){
                options_array.splice(options_array.indexOf(`16+`), 1);
            }
            if(options_array.includes('0+') == true){
                options_array.splice(options_array.indexOf(`0+`), 1);
            }
        }
        if(options_array.includes(nothing) == true){
            options_array.splice(options_array.indexOf(nothing), 1);
        }
    }
});

let sorted_cards = []
let array_check = []
let raiting
let age = []
let age_spec
let year_memory
let name_memory
let cards_arr = document.querySelectorAll(".card");
document.querySelector(".search_btn").onclick = function(){
    let year = document.querySelector(".year_input").value
    let name = document.querySelector(".name_input").value
    if(year != ""){
        if(options_array.includes(`year ${year}`) == false && options_array.includes(`year ${year_memory}`) == false){
            options_array.push(`year ${year}`);
            year_memory = year
        }
        if(options_array.includes(`year ${year}`) == true && options_array.includes(`year ${year_memory}`) == false){
            options_array.splice(options_array.indexOf(year), 1);
            year_memory = ""
        }
        if(options_array.includes(`year ${year}`) == false && options_array.includes(`year ${year_memory}`) == true){
            options_array.splice(options_array.indexOf(`year ${year_memory}`), 1);
            options_array.push(`year ${year}`);
            year_memory = year
        }
        if(options_array.includes(`year ${year}`) == true && options_array.includes(`year ${year_memory}`) == true){
            options_array.splice(options_array.indexOf(`year ${year_memory}`), 1);
            options_array.push(`year ${year}`);
            year_memory = year
        }
    }
    if(year == "" && options_array.includes(`year ${year_memory}`)){
        options_array.splice(options_array.indexOf(`year ${year_memory}`), 1);
        year_memory = ""
    }

    if(name != ""){
        if(options_array.includes(name) == false && options_array.includes(name_memory) == false){
            options_array.push(name);
            name_memory = name
        }
        if(options_array.includes(name) == true && options_array.includes(name_memory) == false){
            options_array.splice(options_array.indexOf(name), 1);
            name_memory = ""
        }
        if(options_array.includes(name) == false && options_array.includes(name_memory) == true){
            options_array.splice(options_array.indexOf(name_memory), 1);
            options_array.push(name);
            name_memory = name
        }
        if(options_array.includes(name) == true && options_array.includes(name_memory) == true){
            options_array.splice(options_array.indexOf(name_memory), 1);
            options_array.push(name);
            name_memory = name
        }
    }
    if(name == "" && options_array.includes(name_memory)){
        options_array.splice(options_array.indexOf(name_memory), 1);
        name_memory = ""
    }
    if(options_array.includes(nothing) == true){
        options_array.splice(options_array.indexOf(nothing), 1);
    }
    if(options_array.length == 0){
        age = []
        age_spec = 0
    }
    if(options_array.includes("0+") == true){
        age = []
        age.push("0+")
        options_array.splice(options_array.indexOf(`6+`), 1);
        age_spec = "0+"
    }
    if(options_array.includes("6+") == true){
        age = []
        age.push("0+", "6+")
        options_array.splice(options_array.indexOf(`6+`), 1);
        age_spec = "6+"
    }
    if(options_array.includes("12+") == true){
        age = []
        age.push("0+", "6+", "12+")
        options_array.splice(options_array.indexOf(`12+`), 1);
        age_spec = "12+"
    }
    if(options_array.includes("16+") == true){
        age = []
        age.push("0+", "6+", "12+", "16+")
        options_array.splice(options_array.indexOf(`16+`), 1);
        age_spec = "16+"
    }
    if(options_array.includes("18+") == true){
        age = []
        age.push("0+", "6+", "12+", "16+", "18+")
        options_array.splice(options_array.indexOf(`18+`), 1);
        age_spec = "18+"
    }

    if(options_array.includes("Сначала лучшие") == true){
        options_array.splice(options_array.indexOf(`Сначала лучшие`), 1);
        raiting = `Сначала лучшие`
    }
    if(options_array.includes("Сначала худшие") == true){
        options_array.splice(options_array.indexOf(`Сначала худшие`), 1);
        raiting = `Сначала худшие`
    }

    cards_info_copy.forEach(element_1 => {
        options_array.forEach(element_2 => {

            let corrected_for_sorting = [];
            corrected_for_sorting = JSON.stringify(element_1[2]).split(", ");
            corrected_for_sorting.forEach(element_3 => {
                element_1.push(element_3.replace(/[^a-zа-яё]/gi, ""));
            });

            element_1.push(element_1[1].split(" (")[0])
            element_1.push(`year ${(element_1[1].split(/[(]/))[1].replace(/[)]/, "")}`)
            
            if(element_1.includes(element_2) == true){
                array_check.push(element_2);
            }
        });

        let age_check = false;
        age.forEach(element_4 => {
            if(element_1.includes(element_4) == true || element_4 == nothing){
                age_check = true;
            }
        });
        if(age.length == 0){
            age_check = true;
        }

        if(JSON.stringify(array_check) == JSON.stringify(options_array) && age_check == true){
            element_1.splice(5, 10);
            sorted_cards.push(element_1);
        }
        array_check = [];
    });

    if(raiting != nothing){
        options_array.push(raiting);
    }
    let number_sorting = []
    if(options_array.includes("Сначала лучшие") == true){
        sorted_cards.forEach(element =>{
            number_sorting.push(element[4]);
        });
        number_sorting.sort((a, b) => b - a);
        sorted_cards.forEach(element_1 => {
            number_sorting.forEach(element_2 => {
                if(element_1.includes(element_2) == true && number_sorting.includes(element_1) != true){
                    number_sorting.splice(number_sorting.indexOf(element_2) , 1, element_1)
                }
            });
        });
        sorted_cards = number_sorting;
    }
    else if(options_array.includes("Сначала худшие") == true){
        sorted_cards.forEach(element =>{
            number_sorting.push(element[4]);
        });
        number_sorting.sort((a, b) => a - b);
        sorted_cards.forEach(element_1 => {
            number_sorting.forEach(element_2 => {
                if(element_1.includes(element_2) == true && number_sorting.includes(element_1) != true){
                    number_sorting.splice(number_sorting.indexOf(element_2) , 1, element_1)
                }
            });
        });
        sorted_cards = number_sorting;
    }

    document.querySelector(".cards").innerHTML = ``
    sorted_cards.forEach(element => {
        document.querySelector(".cards").innerHTML += `
        <div class="card">
                <div class="img">
                    <img  src="${element[0]}" alt="">
                </div>
                <div class="card_other">
                    <div class="title">
                        <p>${element[1]}</p>
                    </div>
                    <div class="description">
                        <p class="genre">${element[2]}</p>
                        <p class="age_restrictions">${element[3]}</p>
                    </div>
                    <div class="raiting">
                        <div class="stars">
                            <div style="width: ${200 * (element[4]/10)}px;" class="rate_color"></div>
                            <div class="raiting_background_color"></div>
                            <img src="img/Exclude.svg" alt="">
                        </div>
                        <div class="number">${element[4]}</div>
                    </div>
                </div>
            </div>
            `
    });
    if(options_array.includes(nothing) == true){
        options_array.splice(options_array.indexOf(nothing), 1);
    }
    if(age_spec != 0){
        options_array.push(age_spec)
    }
    age_spec = 0
    age_check = false;
    sorted_cards = []
    cards_arr = document.querySelectorAll(".card");
    cards_arr.forEach(element => {
        element.onclick = function(){
            localStorage.setItem(0, element.children[1].children[0].children[0].innerHTML)
            window.location = 'new_page.html'
        }
    document.querySelectorAll(".card").forEach(element => {
        element.onmouseover = function(){
            element.style.transform = "scale(1.05)";
            element.children[1].children[2].children[0].children[0].style.width = "257px"
            element.children[1].children[2].children[0].children[0].style.marginLeft = "8px"
            element.children[1].children[2].children[0].style.height = "30px"
            element.children[1].children[2].children[0].children[1].style.height = "22px"
        }
        element.onmouseout = function(){
            element.style.transform = "scale(1)";
            element.children[1].children[2].children[0].children[0].style.width = "256px"
            element.children[1].children[2].children[0].children[0].style.marginLeft = "10px"
            element.children[1].children[2].children[0].style.height = "30px"
            element.children[1].children[2].children[0].children[1].style.height = "23px"
        }
    });
    });
}

document.querySelector(".settings_reset").onmouseover = function(){
    document.querySelector(".settings_reset p").style.transform = "scale(1.1)";
}
document.querySelector(".settings_reset").onmouseout = function(){
    document.querySelector(".settings_reset p").style.transform = "scale(1)";
}
document.querySelector(".settings_reset").onclick = function(){
    document.querySelectorAll("input").forEach(element => {
        element.value = ""
        sorted_cards = []
        options_array = []
        age = []
        age_spec = 0
        age_check = false;
        document.querySelectorAll(".option_red").forEach(element =>{
            element.classList.remove("option_red")
            element.classList.add("option")
        });
    });
}

cards_arr.forEach(element => {
    element.onclick = function(){
        localStorage.setItem(0, element.children[1].children[0].children[0].innerHTML)
        window.location = 'new_page.html'
    }
});