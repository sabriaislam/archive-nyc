const PLACES = [
  {
    "id": 1,
    "title": "The Steinway Billards spot",
    "address": "35-25 Steinway St, Astoria, NY 11102",
    "description": "Taking all my friends, my family, etc",
    "name": "Abed Islam",
    "lat": 40.7595,
    "lng": -73.9170,
    "images": ['images/steinway.png'],
    "audio_clips": []
  },
  {
    "id": 2,
    "title": "Yogurt la Crepe",
    "address": "29-02 Ditmars Blvd, Astoria, NY 11105",
    "description": "- one of the first times I was allowed to hang out with friends outside of school was when I went here with them.\n- I used to meet my friend here for her birthday and we would eat froyo and chat\n- I was there for the grand opening with my family\n- I had an iPad that I shared with my sisters but when we went there, they had iPads attached to the tables so we would all play together and compete against each other in games like Subway Surfers or Temple Run",
    "name": "Kima Radoncic",
    "lat": 40.7739,
    "lng": -73.9085,
    "images": ['images/yogurt.png'],
    "audio_clips": []
  },
  {
    "id": 3,
    "title": "Fatima's Halal Kitchen",
    "address": "25-25 Broadway, Astoria, NY 11106",
    "description": "I grew up in Astoria for 16 years and Fatima's was my family's go-to spot for Chinese cuisine for so long. I wrote about this place in my Common App personal essay because of how much this place shaped me as a person...",
    "name": "Arundhuty Mondal",
    "lat": 40.7619,
    "lng": -73.9275,
    "images": ['images/fatimas.png'],
    "audio_clips": ['memos/Arundhuty.mp3']
  },
  {
    "id": 4,
    "title": "Pizza Palace",
    "address": "29-29 Ditmars Blvd, Astoria, NY 11105",
    "description": "My mom would cut a pizza slice into countless small pieces to feed it to me when I was little...",
    "name": "Farabi Azad",
    "lat": 40.7741,
    "lng": -73.9099,
    "images": ['images/pizza-palace.png'],
    "audio_clips": ['memos/Farabi.mp3']
  },
  {
    "id": 5,
    "title": "Vanilla Sky - Frozen Yogurt Spot",
    "address": "33-18 Broadway, Astoria, NY 11106",
    "description": "I remember going here back in 2013–14 when frozen yogurt was very popular...",
    "name": "Maisha Sarker",
    "lat": 40.7613,
    "lng": -73.9233,
    "images": ['images/vanilla-sky.png'],
    "audio_clips": []
  },
  {
    "id": 6,
    "title": "Large 99 cent store near my old elementary school",
    "address": "34-39 31st St, Astoria, NY 11106",
    "description": "Fond memories of going to the 99 cents store to look at toys with my mom after school.",
    "name": "Afsana Ahmed",
    "lat": 40.7640,
    "lng": -73.9287,
    "images": ['images/homemark99.png'],
    "audio_clips": []
  },
  {
    "id": 7,
    "title": "Yummy’s",
    "address": "Hillside Ave & 168th St Queens, NY 11432",
    "description": "Going there after school and getting food with my aunt and cousin.",
    "name": "Shahriar Huda",
    "lat": 40.7107,
    "lng": -73.7931,
    "images": ['images/yummys.png'],
    "audio_clips": ['memos/Siam.mp3']
  },
  {
    "id": 8,
    "title": "Burger Garage",
    "address": "25-36 Jackson Avenue, Long Island City, NY 11101",
    "description": "First company sponsorship, lots of good burgers, lots of memorable conversations...",
    "name": "Jafreen Khan",
    "lat": 40.7449,
    "lng": -73.9475,
    "images": ['images/burger-garage.png'],
    "audio_clips": []
  },
  {
    "id": 9,
    "title": "Bensonhurst Mini Mall",
    "address": "6401 18th Ave, Brooklyn, NY 11204",
    "description": "I remember it used to be a bunch of clothing stores with a carousel inside...",
    "name": "Charlene Chow",
    "lat": 40.6089,
    "lng": -73.9847,
    "images": ['images/mini-mall.png'],
    "audio_clips": []
  },
  {
    "id": 10,
    "title": "Pizza Boy",
    "address": "73-14 37th Ave, Jackson Heights, NY 11372",
    "description": "Pizza as a child smelled good and was cheesy.",
    "name": "Anonymous",
    "lat": 40.7493,
    "lng": -73.8923,
    "images": ['images/pizza-boy.png'],
    "audio_clips": []
  },
  {
    "id": 11,
    "title": "Burger Garage",
    "address": "25-36 Jackson Ave, Long Island City, NY 11101",
    "description": "got my first sponsorship for my largest fundraising campaign, and ate like burgers every day",
    "name": "Brandon",
    "lat": 40.7449,
    "lng": -73.9475,
    "images": ['images/burger-garage.png'],
    "audio_clips": []
  },
  {
    "id": 12,
    "title": "Brilliant Minds (afterschool building)",
    "address": "1702 86th St Brooklyn, NY 11214",
    "description": "Back in elementary school, I used to go to an afterschool program called Brilliant Minds...",
    "name": "Helen",
    "lat": 40.6054,
    "lng": -73.9974,
    "images": ['images/brilliant-minds.png'],
    "audio_clips": []
  },
  {
    "id": 13,
    "title": "Pizza Palace",
    "address": "29-29 Ditmars Blvd, Astoria, NY 11105",
    "description": "Grabbing food after school with friends often — you’d see everyone from the neighborhood there...",
    "name": "Oscar de los Santos",
    "lat": 40.7741,
    "lng": -73.9099,
    "images": [],
    "audio_clips": []
  },
  {
    "id": 14,
    "title": "Gamestop",
    "address": "22-48 31st St Queens, NY 11105",
    "description": "Grabbing food after school with friends often — you’d see everyone from the neighborhood there...",
    "name": "Fabiha Chowdhury",
    "lat": 40.775114,
    "lng": -73.912038,
    "images": ['images/gamestop.png'],
    "audio_clips": ['memos/Fabiha.mp3']
  },
  {
    "id": 15,
    "title": "Fei Long Food Court",
    "address": "6301 8th Ave, Brooklyn, NY 11220",
    "description": "Back in elementary school, I used to go to abacus nearby. After class, my mom would take me to the food court for lunch. That was honestly the highlight of my day because I had the luxury of trying different types of foods in one place. I also went whenever we were near 8 Ave because it was affordable and convenient to be able to eat and shop for groceries nearby. Unfortunately, it shut down after COVID :(",
    "name": "Helen",
    "lat": 40.6367,
    "lng": -74.0098,
    "images": ['images/fei-long.png'],
    "audio_clips": ['memos/Helen.mp3']
  } 
];
