const data = [
    {
        "roza": "1",
        "date": "25 Apr 2020",
        "sehr": "04:48 am",
        "iftaar": "06:59 pm",
        'dua': ' O Allah, on this day make my fasts the fasts of those who fast (sincerely), and my standing up in prayer of those who stand up in prayer (obediently), awaken me in it from the sleep of the heedless, and forgive me my sins , O God of the worlds, and forgive me, O one who forgives the sinners'
    },
    {
        "roza": "2",
        "date": "26 Apr 2020",
        "sehr": "04:47 am",
        "iftaar": "07:00 pm",
        "dua" : " O Allah, on this day, take me closer towards Your pleasure, keep me away from Your anger and punishment, grant me the opportunity to recite Your verses (of the Qur'an), by Your mercy, O the most Merciful"
    },
    {
        "roza": "3",
        "date": "27 Apr 2020",
        "sehr": "04:46 am",
        "iftaar": "07:00 pm",
        "dua" : "O Allah, on this day, grant me wisdom and awareness, keep me away from foolishness and pretention, grant me a share in every blessing You send down, by You generosity, O the most Generous."
    },
    {
        "roza": "4",
        "date": "28 Apr 2020",
        "sehr": "04:45 am",
        "iftaar": "07:00 pm",
        "dua" : "O Allah, on this day, strengthen me in carrying out Your commands, let me taste the sweetness of Your rememberance, grant me, through Your graciousness, that I give thanks to You. Protect me, with Your protection and cover, O the most discerning of those who see."
    },
    {
        "roza": "5",
        "date": "29 Apr 2020",
        "sehr": "04:45 am",
        "iftaar": "07:00 pm",
        "dua" : "O Allah, on this day, place me among those who seek forgiveness. Place me among Your righteous and obedient servants, and place me among Your close friends, by Your kindness, O the most Merciful"
    },
    {
        "roza": "6",
        "date": "30 Apr 2020",
        "sehr": "04:44 am",
        "iftaar": "07:01 pm",
        "dua" : "O Allah, on this day, do not let me abase myself by incurring Your disobedience, and do not strike me with the whip of Your punishment, keep me away from the causes of Your anger, by Your kindness and Your power, O the ultimate wish of those who desire."
    },
    {
        "roza": "7",
        "date": "01 May 2020",
        "sehr": "04:43 am",
        "iftaar": "07:01 pm",
        "dua" : "O Allah, on this day, help me with its fasts and prayers, and keep me away from mistakes and sins of the day, grant me that I remember You continously through the day, by Your assistance, O the Guide of those who stray."
    },
    {
        "roza": "8",
        "date": "02 May 2020",
        "sehr": "04:43 am",
        "iftaar": "07:01 pm",
        "dua" : "O Allah, on this day, let me have mercy on the orphans, and feed [the hungry], and spread peace, and keep company with the noble�minded, O the shelter of the hopeful."
    },
    {
        "roza": "9",
        "date": "03 May 2020",
        "sehr": "04:42 am",
        "iftaar": "07:02 pm",
        "dua" : "O Allah, on this day, grant me a share from Your mercy which is wide, guide me towards Your shining proofs, lead me to Your all encompassing pleasure, by Your love, O the hope of the desirous."
    },
    {
        "roza": "10",
        "date": "04 May 2020",
        "sehr": "04:42 am",
        "iftaar": "07:02 pm",
        "dua" : "O Allah, on this day, make me, among those who rely on You, from those who You consider successful, and place me among those who are near to you, by Your favour, O goal of the seekers."
    },
    {
        "roza": "11",
        "date": "05 May 2020",
        "sehr": "04:41 am",
        "iftaar": "07:02 pm",
        "dua" : "O Allah, on this day, make me love goodness, and dislike corruption and disobedience, bar me from anger and the fire [of Hell], by Your help, O the helper of those who seek help."
    },
    {
        "roza": "12",
        "date": "06 May 2020",
        "sehr": "04:40 am",
        "iftaar": "07:03 pm",
        "dua" : "O Allah, on this day, beautify me with covering and chastity, cover me with the clothes of contentment and chastity, let me adhere to justice and fairness, and keep me safe from all that I fear, by Your protection, O the protector of the frightened."
    },
    {
        "roza": "13",
        "date": "07 May 2020",
        "sehr": "04:39 am",
        "iftaar": "07:03 pm",
        "dua" : "O Allah, on this day, purify me from uncleanliness and dirt, make me patient over events that are decreed, grant me the ability to be pious, and keep company with the good, by Your help, O the beloved of the destitute."
    },
    {
        "roza": "14",
        "date": "08 May 2020",
        "sehr": "04:39 am",
        "iftaar": "07:04 pm",
        "dua" : "O Allah, on this day, do not condemn me for slips, make me decrease mistakes and errors, do not make me a target for afflictions and troubles, by Your honor, O the honor of the Muslims."
    },
    {
        "roza": "15",
        "date": "09 May 2020",
        "sehr": "04:38 am",
        "iftaar": "07:04 pm",
        "dua" : "O Allah, on this day, grant me the obedience of the humble expand my chest through the repentance of the humble, by Your security, O the shelter of the fearful."
    },
    {
        "roza": "16",
        "date": "10 May 2020",
        "sehr": "04:37 am",
        "iftaar": "07:04 pm",
        "dua" : "O Allah, on this day, grant me compatability with the good, keep me away from patching up with the evil, lead me in it, by Your mercy, to the permanent abode, by Your Godship, O the God of the worlds."
    },
    {
        "roza": "17",
        "date": "11 May 2020",
        "sehr": "04:36 am",
        "iftaar": "07:05 pm",
        "dua" : "O Allah, on this day, guide me towards righteous actions, fulfil my needs and hopes, O One who does not need explanations nor questions, O One who knows what is in the chests of the (people of the) world. Bless Muhammad and his family, the Pure."
    },
    {
        "roza": "18",
        "date": "12 May 2020",
        "sehr": "04:36 am",
        "iftaar": "07:05 pm",
        "dua" : "O Allah, on this day, awaken me with the blessings of its early mornings, Illuminate my heart with the brightness of its rays, let every part of my body follow its effects, by Your light, O the illuminator of the hearts of those who know."
    },
    {
        "roza": "19",
        "date": "13 May 2020",
        "sehr": "04:35 am",
        "iftaar": "07:05 pm",
        "dua" : "O Allah, on this day, multiply for me its blessings, and ease my path towards its bounties, do not deprive me of the acceptance of its good deeds, O the Guide towards the clear truth"
    },
    {
        "roza": "20",
        "date": "14 May 2020",
        "sehr": "04:35 am",
        "iftaar": "07:06 pm",
        "dua" : "O Allah, on this day, open for me the doors of the heavens, and lock the doors of Hell from me, help me to recite the Qur'an, O the One who sends down tranquility into the hearts of believers"
    },
    {
        "roza": "21",
        "date": "15 May 2020",
        "sehr": "04:34 am",
        "iftaar": "07:06 pm",
        "dua" : "O Allah, on this day, show me the way to win Your pleasure, do not let Shaytan have a means over me, make Paradise an abode and a resting place for me, O the One who fulfills the requests of the needy."
    },
    {
        "roza": "22",
        "date": "16 May 2020",
        "sehr": "04:34 am",
        "iftaar": "07:07 pm",
        "dua" : "O Allah, on this day, open for me the doors of Your Grace, send down on me its blessings, help me towards the causes of Your mercy, and give me a place in the comforts of Paradise, O the one who answers the call of the distressed."
    },
    {
        "roza": "23",
        "date": "17 May 2020",
        "sehr": "04:33 am",
        "iftaar": "07:07 pm",
        "dua" : "O Allah, on this day, wash away my sins, purify me from all flaws, examine my heart with (for) the piety of the hearts, O One who overlooks the shortcomings of the sinners."
    },
    {
        "roza": "24",
        "date": "18 May 2020",
        "sehr": "04:32 am",
        "iftaar": "07:07 pm",
        "dua" : "O Allah, on this day, I ask You for what pleases You, and I seek refuge in You from what displeases You, I ask You to grant me the opportunity to obey You and not disobey You, O One who is generous with those who ask."
    },
    {
        "roza": "25",
        "date": "19 May 2020",
        "sehr": "04:32 am",
        "iftaar": "07:08 pm",
        "dua" : "O Allah, on this day, make me among those who love Your friends, and hate Your enemies, following the way of Your last Prophet, O the Guardian of the hearts of the Prophets."
    },
    {
        "roza": "26",
        "date": "20 May 2020",
        "sehr": "04:32 am",
        "iftaar": "07:08 pm",
        "dua" : "O Allah, on this day, make my efforts worthy of appreciation, and my sins forgiven, my deeds accepted, my flaws concealed, O the best of those who hear."
    },
    {
        "roza": "27",
        "date": "21 May 2019",
        "sehr": "04:31 am",
        "iftaar": "07:09 pm",
        "dua" : "O Allah, on this day, bestow on me the blessings of Laylatul Qadr, change my affairs from (being) difficult to (being) easy, accept my apologies, and decrease for me [my] sins and burdens, O the Compassionate with His righteous servants."
    },
    {
        "roza": "28",
        "date": "22 May 2019",
        "sehr": "04:31 am",
        "iftaar": "07:09 pm",
        "dua" : "O Allah, on this day, grant me a share in its nawafil (recommended prayers), honor me by attending to my problems, make closer the means to approach You, from all the means, O One who is not preoccupied by the requests of the beseechers."
    },
    {
        "roza": "29",
        "date": "23 May 2019",
        "sehr": "04:31 am",
        "iftaar": "07:09 pm",
        "dua" : "O Allah, on this day, cover me with Your mercy, grant me in it success and protection, purify my heart from the darkness of false accusations, O the Merciful to His believing servants."
    },
    {
        "roza": "30",
        "date": "24 May 2019",
        "sehr": "04:30 am",
        "iftaar": "07:10 pm",
        "dua" : "O Allah, on this day, make my fasts worthy of appreciation and acceptance, according to what pleases You, and pleases the Messenger, the branches being strengthened by the roots, for the sake of our leader, Muhammad, and his purified family. Praise be to Allah, the Lord of the worlds."
    },
    
]

export default data

