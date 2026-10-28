// People displayed in the "Meet the Team" section of "About Us"
// If no image set, an animated gray circle appears
import type { ExecProps } from "./components/PeopleSection";

export const teamData: TeamData = {
  2018: {
    executives: [
      { name: "Amri Chamela", title: "Projects Director", imgUrl: "/people/placeholder.jpg" },
    ],
    subcommittees: []
  },
  2019: {
    executives: [
      { name: "Tom Kunc", title: "Projects Director", imgUrl:"/people/2019/1521010349210.jpeg" },
      { name: "Shane Kadish", title: "Projects Director", imgUrl: "/people/2019/1547879297950.jpeg" },
    ],
    subcommittees: [
      {
        name: "Degree\u00A0Planner",
        directors: [
          { name: "Jonathan Charles"},
        ],
        subcommittee: []
      },
      {
        name: "Notangles",
        directors: [
          { name: "Tony Tang"},
        ],
        subcommittee: []
      },
      {
        name: "uBark",
        directors: [
          { name: "Adam Tizzone"},
        ],
        subcommittee: []
      },
      {
        name: "Freerooms",
        directors: [
          { name: "Callum Avery"},
        ],
        subcommittee: []
      },
      {
        name: "Jobsboard",
        directors: [
          { name: "Adam Tizzone"},
        ],
        subcommittee: []
      },
      {
        name: "Website\u00A0(CSESoc)",
        directors: [
          { name: "Gordon Zhong"},
        ],
        subcommittee: []
      },
      {
        name: "Website\u00A0(CompClub)",
        directors: [
          { name: "Thomas Lam"},
        ],
        subcommittee: []
      },
      {
        name: "Handbook\u00A0API",
        directors: [
          { name: "Zac Kologlu"},
        ],
        subcommittee: []
      },
      {
        name: "isSocsOpen",
        directors: [
          { name: "Inura De Zoysa"},
        ],
        subcommittee: []
      },
      {
        name: "Payments\u00A0Platform",
        directors: [
          { name: "Adam Tizzone"},
        ],
        subcommittee: []
      }
    ]
  },
  2020: {
    executives: [
      { name: "Gordon Zhong", title: "Projects Director", imgUrl: "/people/2020/1655776311291.jpeg" },
      { name: "Leesa Dang", title: "Projects Director", imgUrl: "/people/2020/1557634147933.jpeg" },
    ],
    subcommittees: [
      {
        name: "Notangles",
        directors: [
          { name: "Max Wo"},
        ],
        subcommittee: []
      },
      {
        name: "Degree\u00A0Planner",
        directors: [
          { name: "Olga Popovic"},
          { name: "Max Wo"},
        ],
        subcommittee: []
      },
      {
        name: "Slackbot",
        directors: [
          { name: "Parviz Ahmadi"},
        ],
        subcommittee: []
      },
      {
        name: "Freerooms",
        directors: [
          { name: "Callum Avery"},
        ],
        subcommittee: []
      },
      {
        name: "Jobsboard",
        directors: [
          { name: "Adam Tizzone"},
        ],
        subcommittee: []
      },
      {
        name: "Website\u00A0(CSESoc)",
        directors: [
          { name: "Tommy Truong"},
        ],
        subcommittee: []
      },
      {
        name: "Website\u00A0(CompClub)",
        directors: [
          { name: "Leesa Dang"},
          { name: "Gordon Zhang"},
        ],
        subcommittee: []
      },
      {
        name: "Attendance\u00A0Tracker",
        directors: [],
        subcommittee: []
      },
      {
        name: "uBark",
        directors: [
          { name: "Adam Tizzone"},
        ],
        subcommittee: []
      }
    ]
  },
  2021: {
    executives: [
      { name: "Esther Wong", title: "Projects Director", imgUrl: "/people/2021/1653634901266.jpeg" },
      { name: "Zac Kologlu", title: "Projects Director", imgUrl: "/people/2021/1673959501551.jpeg" },
    ],
    subcommittees: [
      {
        name: "Circles",
        directors: [
          { name: "James Ji"},
          { name: "Jennifer Xu"},
        ],
        subcommittee: [
          { name: "Yiyan Yang"},
          { name: "Adam Brieger" },
          { name: "Vincent Xiao"},
          { name: "Kevin Huang" },
          { name: "Gabriella Hartanto" },
          { name: "Sally Sun" },
          { name: "Sanojan Thiyagaraja"},
        ]
      },
      {
        name: "Discord\u00A0Bot",
        directors: [
          { name: "Waleed Shahid"},
        ],
        subcommittee: [
          { name: "Jack Li" },
          { name: "Oliver Bowers" },
          { name: "Kamiyu Hijikata"},
          { name: "Sanyam Jain" },
          { name: "Rifa Jamal" },
          { name: "Maria Zhang"},
        ]
      },
      {
        name: "Freerooms",
        directors: [
          { name: "Mun Joon Teo" },
        ],
        subcommittee: [
          { name: "Keshiga Gopalarajah" },
          { name: "Grace Kan" },
          { name: "Arsham Emad"},
          { name: "Sarah Leung" },
          { name: "Damjan Stevanoski" },
        ]
      },
      {
        name: "Notangles",
        directors: [
          { name: "Luke Fisk-Lennon"},
        ],
        subcommittee: [
          { name: "Farnaz Tavakol"},
          { name: "Abiram Nadarajah"},
          { name: "Emily Tang"},
          { name: "Andrew Lin"},
          { name: "Oliver Xu"},
          { name: "Mehak Arya"},
          { name: "Martin Knezevic"},
        ]
      },
      {
        name: "Structs",
        directors: [
          { name: "Tim Zhang" },
        ],
        subcommittee: [
          { name: "Alexander Cunio" },
          { name: "Joanna Lin" },
          { name: "Dominic Allas" },
          { name: "Yunze Shi" },
          { name: "Rachel Yu"},
          { name: "Raghav Lall"},
          { name: "Joseph Xu" },
        ]
      },
      {
        name: "Website",
        directors: [
          { name: "Matt Rossouw" },
        ],
        subcommittee: [
          { name: "Priscilla Soo" },
          { name: "Jacky Xie" },
          { name: "Nian Li"},
          { name: "Varun Sethu" },
          { name: "Nathan Cao"},
          { name: "Zoe Ramirez"},
        ]
      },
    ]
  },
  2022: {
    executives: [
      { name: "James Ji", title: "Projects Director", imgUrl: "/people/2022/1671790198748.jpeg" },
      { name: "Vicky Wu", title: "Projects Director", imgUrl: "/people/2022/1677625183062.jpeg" },
      { name: "Abiram Nadarajah", title: "Technical Director", imgUrl: "/people/2022/1619801785542.jpeg" },
      { name: "Jared L", title: "Technical Director", imgUrl: "/people/placeholder.jpg" },
      { name: "Shrey Somaiya", title: "Projects Lead", imgUrl: "/people/2022/1653994970103.jpeg" },
    ],
    subcommittees: [
      {
        name: "Chaos",
        directors: [
          { name: "Lewis Cullen" },
          { name: "Evan Williams" },
        ],
        subcommittee: [
          { name: "Mica Vo" },
          { name: "Jack Li" },
          { name: "Verdy Guo" },
          { name: "Dane Urban" },
          { name: "Oscar Kologlu" },
        ]
      },
      {
        name: "Circles",
        directors: [
          { name: "Sanojan Thiyagara" },
          { name: "Gabriel Ting" },
          { name: "Peter Derias" },
        ],
        subcommittee: [
          { name: "Leonardo Fan" },
          { name: "Uzaif Sheikh" },
          { name: "Kellie Yau" },
          { name: "Xing He" },
          { name: "Oliver Bowers" },
          { name: "Christian Lam" },
          { name: "Hussain Nawaz" },
          { name: "Elliot Rotenstein"},
          { name: "Joel West" },
          { name: "Josh Harcombe" },
          { name: "Mae Vuong" },
          { name: "Nyah Inglis"},
          { name: "Sona Reddy"},
        ]
      },
      {
        name: "CSElectives",
        directors: [
          { name: "Vivian Wang" },
          { name: "Victoria Vu" },
        ],
        subcommittee: [
          { name: "Aimen Hamed" },
          { name: "Joel Huang" },
          { name: "Sarah Leung" },
          { name: "Sean Wibisono" },
          { name: "Damjan Stevanoski" },
          { name: "Kevin Tong" },
          { name: "Archit Mahajan" },
          { name: "Steven Chye" },
        ]
      },
      {
        name: "Discord\u00A0Bot",
        directors: [
          { name: "Emily Lu" },
          { name: "Riz Manter" },
          { name: "Sanyam Jain" },
        ],
        subcommittee: [
          { name: "Harry Zhang" },
          { name: "Sam Schreyer" },
          { name: "Jason Gong" },
          { name: "Yuvraj Singh" },
          { name: "Jane Wang"},
          { name: "Dominic Cheung"},
          { name: "Murtaza Pakawala" },
          { name: "Alexander Chen" },
        ]
      },
      {
        name: "Freerooms",
        directors: [
          { name: "Brittany Li" },
          { name: "Bob Chen" },
        ],
        subcommittee: [
          { name: "Franco Reyes" },
          { name: "William Zhong" },
          { name: "Benjamin Hung" },
          { name: "Cheryl Ouyang" },
          { name: "Celia He" },
          { name: "Eric Liu" },
          { name: "Justin Wu" },
          { name: "Liam Chen" },
        ]
      },
      {
        name: "Jobsboard",
        directors: [
          { name: "Darian Lee" },
          { name: "Joanna He" },
        ],
        subcommittee: [
          { name: "Matthew Liu" },
          { name: "Avijit Prasad" },
          { name: "Sam Yu" },
          { name: "Sunny Wang" },
          { name: "Adrian Tan" },
        ]
      },
      {
        name: "Notangles",
        directors: [
          { name: "Mun Joon Teo" },
          { name: "Oliver Xu" },
        ],
        subcommittee: [
          { name: "Raiyan Ahmed" },
          { name: "Manhua Lu" },
          { name: "Grace Kan" },
          { name: "Martin Knezevic" },
          { name: "Angella Pham" },
          { name: "Sijin Soon" },
          { name: "Wanning Cai" },
        ]
      },
      {
        name: "Structs",
        directors: [
          { name: "Dominic Allas" },
          { name: "Joanna Lin" },
        ],
        subcommittee: [
          { name: "Edward Qian" },
          { name: "Cece Zhu"},
          { name: "Justin Young" },
          { name: "Jin Sunwoo" },
          { name: "Rifa Jamal" },
        ]
      },
      {
        name: "Website",
        directors: [
          { name: "Varun Sethu" },
          { name: "Jacky Xie" },
        ],
        subcommittee: [
          { name: "Laura Wen" },
          { name: "James Teng" },
          { name: "Richard Zhou"},
          { name: "Winnie Tan" },
          { name: "Jane Wang"},
          { name: "Edwin Lam" },
          { name: "Leanna Chan" },
          { name: "Hanyuan Li" },
          { name: "Brian Zhang" },
          { name: "Gary Sun" },
          { name: "Alex Chen" },
          { name: "Thomas Liang" },
          { name: "Thomas Qian"},
          { name: "Lachlan Blair"},
        ]
      },
    ]
  },
  2023: {
    executives: [
      { name: "Angella Pham", title: "Vice President Development", imgUrl: "/people/2023/vpd1.jfif" },
      { name: "Hanyuan Li", title: "Vice President Development/Secretary", imgUrl: "/people/2023/vpd2.jfif" },
      { name: "Jared L", title: "Chief Technology Officer", imgUrl: "/people/placeholder.jpg" },
      { name: "Winnie Zhang", title: "Treasurer/Arc Delegate/GEDI", imgUrl: "/people/2023/arcdel.jfif" },
      { name: "Max Xue", title: "Vice President", imgUrl: "/people/2023/vp.jpg" },
    ],
    subcommittees: [
      {
        name: "Chaos",
        directors: [
          { name: "Mica Vo" },
          { name: "Alex Miao" },
          { name: "Henry Wan" },
        ],
        subcommittee: [
          { name: "Oscar Kologlu" },
          { name: "Mohamed Uzman Zawahir" },
          { name: "Dane Urban" },
          { name: "William Zhang"},
          { name: "Kavika Palletenne" },
          { name: "Muhammed Kumsuz" },
          { name: "Helen Song" },
        ]
      },
      {
        name: "Circles",
        directors: [
          { name: "Leonardo Fan" },
          { name: "Hussain Nawaz" },
        ],
        subcommittee: [
          { name: "Christian Lam" },
          { name: "Martin Knezevic" },
          { name: "Olli Bowers" },
          { name: "Vinayak Fialok (Vinnie)" },
          { name: "Luke Prior" },
          { name: "Lucas Harvey" },
          { name: "Kobi Beckett" },
          { name: "Sandeep Das" },
          { name: "Nyah Inglis" },
        ]
      },
      {
        name: "CSElectives",
        directors: [
          { name: "Joanna He" },
          { name: "Aimen Hamed" },
        ],
        subcommittee: [
          { name: "Joel Huang" },
          { name: "Merry Rosalie" },
          { name: "Vincent Le" },
          { name: "Timmy Huang" },
          { name: "Helen Mai" },
          { name: "Dylan Wang" },
          { name: "Ahnaf Tazwar" },
          { name: "Edward Lukman" },
        ]
      },
      {
        name: "Discord\u00A0Bot",
        directors: [
          { name: "Alexander Chen" },
          { name: "Richard Zhong" },
        ],
        subcommittee: [
          { name: "Murtaza Pakawala" },
          { name: "Thomas Zhao" },
          { name: "Dominic Cheung"},
          { name: "Zhitao Chen" },
          { name: "Abraham Assariparambil Earnest" },
          { name: "Jeffrey Meng" },
          { name: "Kaniz Kader" },
          { name: "Jessica Xu" },
        ]
      },
      {
        name: "Freerooms",
        directors: [
          { name: "Bob Chen" },
          { name: "Franco Reyes" },
        ],
        subcommittee: [
          { name: "Benjamin Hung" },
          { name: "William Zhong" },
          { name: "Sean Wibisono" },
          { name: "Harry Zhang" },
          { name: "Agnes Clemente" },
          { name: "Richard Xue" },
          { name: "Jessica Feng" },
          { name: "Tommy Truong" },
          { name: "Urja Arora" },
          { name: "Alec Tan" },
          { name: "Nicole Yan" },
        ]
      },
      {
        name: "Jobsboard",
        directors: [
          { name: "Matthew Liu" },
          { name: "Gabriel Ting" },
        ],
        subcommittee: [
          { name: "Sunny Wang" },
          { name: "Adrian Tan" },
          { name: "Xing He" },
          { name: "Edwin Lam" },
          { name: "Richard Bao" },
          { name: "William Owen Setiawan" },
          { name: "Derek Xu" },
        ]
      },
      {
        name: "Notangles",
        directors: [
          { name: "Raiyan Ahmed" },
          { name: "Manhua Lu" },
        ],
        subcommittee: [
          { name: "Sijin Soon" },
          { name: "Wanning Cai" },
          { name: "Sally Sun" },
          { name: "Eklavya Joshi" },
          { name: "Jasmine Tran" },
          { name: "Michael Siu" },
          { name: "Shaam Jevan" },
        ]
      },
      {
        name: "Structs",
        directors: [
          { name: "Edward Qian" },
          { name: "Luke Fisk-Lennon" },
          { name: "Gordon Huang" },
        ],
        subcommittee: [
          { name: "Jin Sunwoo" },
          { name: "Justin Yang" },
          { name: "Jonah Hopkin" },
          { name: "Ben Luke Patel" },
          { name: "Sohum Shah" },
          { name: "Fiona Chau" },
          { name: "David Zhou" },
          { name: "Shubh Shah" },
          { name: "Manav Dodia" },
          { name: "James Treloar" },
          { name: "Audrey Tanama" },
        ]
      },
      {
        name: "Website",
        directors: [
          { name: "Laura Wen" },
          { name: "Mae Vuong" },
          { name: "James Teng" },
          { name: "Thomas Liang" },
        ],
        subcommittee: [
          { name: "Thomas Qu" },
          { name: "Winnie Tan" },
          { name: "Emily Lu" },
          { name: "Brian Wang" },
          { name: "Westley Lo" },
          { name: "Josh Ramos" },
          { name: "Brian Zhang" },
          { name: "Derek Tran" },
        ]
      },
      {
        name: "Culture",
        directors: [
          { name: "Jane Wang"},
          { name: "Sharon Zhong"},
        ],
        subcommittee: [
          { name: "Kellie Yau"},
          { name: "Ramanpreet Singh"},
          { name: "William Feng"},
          { name: "Madeline Robinson"},
          { name: "Angeline Tran"},
          { name: "Brandon Tan"},
          { name: "Dylan Zhang"},
          { name: "Ashley Luong" },
          { name: "Rokika Khondaker"},
        ]
      },
      {
        name: "Content",
        directors: [
          { name: "Rachel Ahn"},
          { name: "Omar Al Zeidat"},
        ],
        subcommittee: [
          { name: "Jasmin Wu"},
          { name: "Ming Xuan Yong"},
          { name: "Vicky Lee"},
          { name: "Brendan Ngo"},
          { name: "James Kirkpatrick"},
          { name: "Alexandria Fee"},
          { name: "Matthew Lim" },
          { name: "Sophia Zheng"},
        ]
      },
      {
        name: "UI\/UX",
        directors: [
          { name: "Darian Lee" },
          { name: "Grace Kan" },
        ],
        subcommittee: [
          { name: "Vivian Wang" },
          { name: "Daniel Huynh" },
          { name: "Lucy Chhuo" },
          { name: "Christina Thevasaeyan" },
          { name: "Brianna Kim" },
          { name: "Derek Kim" },
        ]
      },
      {
        name: "Platforms",
        directors: [
          { name: "Sacha Korban" },
        ],
        subcommittee: []
      },
      {
        name: "Architects",
        directors: [
          { name: "Peter Derias" },
          { name: "Varun Sethu" },
        ],
        subcommittee: []
      },
      {
        name: "Education",
        directors: [
          { name: "Simon Nguyen" },
          { name: "Terence Lau" },
          { name: "Maxwell Phillips" },
          { name: "Madhav Kumar" },
        ],
        subcommittee: [
          { name: "Luke Wang" },
          { name: "Gerald Huang" },
          { name: "Ashley Chan" },
          { name: "Tracy Qin" },
          { name: "Morgan Swaak" },
          { name: "Daniel Xie Chen" },
          { name: "William Huynh" },
          { name: "Parv Rehan" },
          { name: "Liam Smith" },
        ]
      },
      {
        name: "Training\u00A0Program",
        directors: [
          { name: "Henry Guo" },
          { name: "Joshi Ha" },
        ],
        subcommittee: []
      }
    ]
  },
  2024: {
    executives: [
      { name: "Bob Chen", title: "Co-President", imgUrl: "/people/2024/pres-nf.jpeg" },
      { name: "Sally Sun", title: "Co-President", imgUrl: "/people/2024/pres-nm.png" },
      { name: "Jeremy Le", title: "Administrative Officer", imgUrl: "/people/2024/admin.jpg" },
      { name: "Michael Girikallo", title: "GEDI Officer", imgUrl: "/people/2024/gedi.jpeg" },
      { name: "Audrey Tanama", title: "VP (Internals)", imgUrl: "/people/2024/vpi.jpeg" },
      { name: "Henry Guo", title: "VP (Operations)", imgUrl: "/people/2024/vpo.jpeg" },
      { name: "Manhua Lu", title: "VP (Course Projects)", imgUrl: "/people/2024/vpc.jpeg" },
      { name: "Franco Reyes", title: "VP (Standalone Projects)", imgUrl: "/people/2024/vps.jpeg" },
    ],
    subcommittees: [
      {
        name: "Chaos",
        directors: [
          { name: "Kavika Palletenne" },
          { name: "Josh Lim" },
          { name: "Peter Osborne" },
        ],
        subcommittee: [
          { name: "Alex Miao" },
          { name: "Fritz Rehde" },
          { name: "Skye Blair" },
          { name: "Zac Ecob" },
          { name: "Hellen Wang" },
          { name: "Alexander Lai" },
          { name: "Yunshu Dai" },
        ]
      },
      {
        name: "Circles",
        directors: [
          { name: "Martin Knezevic" },
          { name: "Oliver Bowers" },
        ],
        subcommittee: [
          { name: "Lucas Harvey" },
          { name: "Deki Lhamu" },
          { name: "Jackson Wang" },
          { name: "Salina Huang" },
          { name: "Fai Chan" },
          { name: "Hussain Nawaz" },
          { name: "Joel Jose" },
        ]
      },
      {
        name: "Freerooms",
        directors: [
          { name: "Jessica Feng" },
          { name: "Richard Xue" },
        ],
        subcommittee: [
          { name: "Andrew Zhang" },
          { name: "Cherise Chan" },
          { name: "Hung Pham" },
          { name: "Kelly Su" },
          { name: "Livia Wang" },
          { name: "Mark Tran" },
          { name: "Sophia Liu" },
          { name: "Hannah Ahn" },
        ]
      },
      {
        name: "Jobsboard",
        directors: [
          { name: "Richard Bao" },
          { name: "Flynn Lambrechts" },
        ],
        subcommittee: [
          { name: "Brian Nhan" },
          { name: "Natalie Jordanov" },
          { name: "Emily Ngo" },
          { name: "Rishabh Alajpur" },
          { name: "Keven Liu" },
          { name: "Alec Liu" },
          { name: "Han Nguyen" },
        ]
      },
      {
        name: "Notangles",
        directors: [
          { name: "Raiyan Ahmed" },
          { name: "Shaam Jevan" },
        ],
        subcommittee: [
          { name: "Jasmine Tran" },
          { name: "Michael Siu" },
          { name: "Jordan Benjamin" },
          { name: "Nikki Qin" },
          { name: "Lucy Chhuo" },
          { name: "Sohum Shah" },
          { name: "Chanel Bouchaaya" },
          { name: "Dylan Zhang" },
        ]
      },
      {
        name: "Structs",
        directors: [
          { name: "Shubhum Shah" },
          { name: "David Zhou" },
        ],
        subcommittee: [
          { name: "Alex Lee" },
          { name: "Sylvia Wang" },
          { name: "Yian Li" },
          { name: "Krista Chen" },
          { name: "Cyril Vivek Subramanian" },
          { name: "Andrea Kuchuk" },
          { name: "Vincent Yu" },
          { name: "Tim Tang" },
          { name: "Hindie Suputra" },
        ]
      },
      {
        name: "Unilectives",
        directors: [
          { name: "Dylan Wang" },
          { name: "Dimas Putra Anugerah" },
        ],
        subcommittee: [
          { name: "Alice Tang" },
          { name: "Urja Arora" },
          { name: "Falco Widjaya" },
          { name: "Tom Forsyth" },
          { name: "Adrian Balbalosa" },
          { name: "Kevin Sutandi" },
          { name: "Christine Phung" },
        ]
      },
      {
        name: "Marketing",
        directors: [
          { name: "Angella Pham" },
          { name: "Eric Wu"},
          { name: "Mark Quach" },
        ],
        subcommittee: [
          { name: "Himani Mittal"},
          { name: "Joye Fu"},
          { name: "Omar Al Zeidat"},
          { name: "Vincent Tannos"},
          { name: "Missy Chhuo"},
          { name: "Derik Sourignavong" },
          { name: "Xing He" },
        ]
      },
      {
        name: "HR",
        directors: [
          { name: "Jade Kam"},
          { name: "Ashley Luong" },
        ],
        subcommittee: [
          { name: "Tom Liu"},
          { name: "Stephanie Lu"},
          { name: "Angeline Tran"},
          { name: "Bryan Zou"},
          { name: "Kim Lam"},
          { name: "Edward Zhang"},
          { name: "Bella Cu"},
          { name: "Brandon Tan"},
          { name: "William Dang" },
          { name: "Arnold Tan"},
        ]
      },
      {
        name: "UI\/UX",
        directors: [
          { name: "Daniel Huynh" },
          { name: "Merry Rosalie" },
        ],
        subcommittee: [
          { name: "Cindy Zhang"},
          { name: "Sandy Tran"},
          { name: "Rachel Bai" },
          { name: "Veer Sheth" },
          { name: "Vedad Neday Diznab" },
          { name: "Ricky Guan" },
          { name: "Junya Wang" },
        ]
      },
      {
        name: "Platforms",
        directors: [
          { name: "Jared L" },
          { name: "Sacha Korban" },
        ],
        subcommittee: [
          { name: "Mazen Zahr" },
          { name: "Dragon Fan" },
          { name: "Ada Mu" },
          { name: "Ethan Scott" },
        ]
      },
      {
        name: "Training\u00A0Program",
        directors: [
          { name: "Nicole Chun" },
          { name: "Dylan Huynh" }
        ],
        subcommittee: [],
        other: [
          {
            role: "Workshop Presenter",
            people: [
              { name: "Lachlan Shoesmith" },
              { name: "Jayden Nguyen" },
              { name: "Tim Tang" },
            ]
          },
          {
            role: "Exercise Writer",
            people: [
              { name: "Hanyuan Li" },
              { name: "Alex Lee" },
              { name: "Rachel Bai" },
            ]
          },
          {
            role: "UI/UX Workshop",
            people: [
              { name: "Daniel Huynh" },
              { name: "Merry Rosalie" },
            ]
          }
        ]
      }
    ]
  },
  2025: {
    executives: [
      { name: "Dylan Huynh", title: "Co-President", imgUrl: "/people/2025/pres-nf.jpg" },
      { name: "Ashley Luong", title: "Co-President", imgUrl: "/people/2025/pres-nm.jpg" },
      { name: "Jayden Nguyen", title: "Administrative Officer", imgUrl: "/people/2025/admin.png" },
      { name: "Mark Quach", title: "VP (Internals)", imgUrl: "/people/2025/vpi.png" },
      { name: "Jade Kam", title: "VP (Externals)", imgUrl: "/people/2025/vpe.png" },
      { name: "Flynn Lambrechts", title: "VP (Projects)", imgUrl: "/people/2025/vpp1.png" },
      { name: "Nicole Chun", title: "VP (Projects)", imgUrl: "/people/2025/vpp3.png" },
      { name: "Jackson Wang", title: "VP (Project Operations)", imgUrl: "/people/2025/vpo.png" },
    ],
    subcommittees: [
      {
        name: "Bridges",
        directors: [
          { name: "Brian Nhan" },
          { name: "Urja Arora" },
        ],
        subcommittee: [
          { name: "Dylan Zhang" },
          { name: "Emily Ngo" },
          { name: "Jeremy Le" },
          { name: "Jesslyn Wu" },
          { name: "Natalie Jordanov" },
          { name: "Roger Truong" },
          { name: "Salina Huang" },
          { name: "Sebastian Zgheyb" },
          { name: "Yian Li" },
        ]
      },
      {
        name: "Chaos",
        directors: [
          { name: "Isaac Kim" },
          { name: "Kavika Palletenne" },
        ],
        subcommittee: [
          { name: "Alex Miao" },
          { name: "Chloe Yeung" },
          { name: "Ibrahim Ghoneim" },
          { name: "Jeremy Lee" },
          { name: "Le Thao Minh" },
          { name: "Peter Nguyen" },
          { name: "Sandy Tran" },
          { name: "Jared Schulz" },
          { name: "Ryan Tan Kang Khen" },
          { name: "Christian Martinez" },
          { name: "Regan Benedetti" },
        ]
      },
      {
        name: "Circles",
        directors: [
          { name: "Keats Mackay" },
          { name: "Matthew Lim" },
        ],
        subcommittee: [
          { name: "Alex Lee" },
          { name: "Dylan Liang" },
          { name: "Elaine Zhang" },
          { name: "Jason Chen" },
          { name: "Jenny Mengzhen Liu" },
          { name: "Kevin Lin" },
          { name: "Valentina Guedez Mercado" },
          { name: "Winnie Chan" },
          { name: "Eugene Briones" },
        ]
      },
      {
        name: "Clusters",
        directors: [
          { name: "Rin DeVisser" },
          { name: "Ryan Hay" }
        ],
        subcommittee: [
          { name: "Andy Atmadja" },
          { name: "Bhawan Dhillon" },
          { name: "Brigette Hu" },
          { name: "Fareed Farooqi" },
          { name: "Holly Field" },
          { name: "Jason Wang" },
          { name: "Markus Bian" },
          { name: "Rosemary AI" },
        ]
      },
      {
        name: "Freerooms",
        directors: [
          { name: "Anh Viet Duc Nguyen" },
          { name: "Michael Tanto" },
          { name: "Chris Wong" },
          { name: "Dicko Evaldo" },
        ],
        subcommittee: [
          { name: "Ben Godwin" },
          { name: "Brandon Tan" },
          { name: "Connie Du" },
          { name: "Muqueet Mohsen Chowdhury" },
          { name: "Shabinda Sarkaria" },
          { name: "Yi Yao Wang" },
          { name: "Yanlin Li" },
          { name: "Ryan Yensch" },
          { name: "Gabriella Lianti" },
        ]
      },
      {
        name: "Notangles",
        directors: [
          { name: "Lucas Harvey" },
          { name: "Mark Tran" },
        ],
        subcommittee: [
          { name: "Ana Kiperas" },
          { name: "Ben Quin" },
          { name: "Fritz Rehde" },
          { name: "Jason Poon" },
          { name: "Kailash Siva" },
          { name: "Meredith Zhang" },
          { name: "Sunny Chen" },
          { name: "Sophie Fox" },
          { name: "Tet Nay Lin" },
          { name: "Yumna Zaheed" },
          { name: "Louis Fang Zhi Lim" },
        ]
      },
      {
        name: "Structs",
        directors: [
          { name: "Sylvia Wang" },
          { name: "Tian Tang" },
        ],
        subcommittee: [
          { name: "Abraham Assariparambil Earnest" },
          { name: "Angelin Francis" },
          { name: "Angelo Wu" },
          { name: "Felicia Octaviona Chang" },
          { name: "Ilha Jung" },
          { name: "Joanne Ou" },
          { name: "Muhammad Amirul Haziq Juarimi" },
          { name: "Patrick Truong" },
        ]
      },
      {
        name: "Unilectives",
        directors: [
          { name: "Alec Liu" },
          { name: "Rokika Khondaker" },
        ],
        subcommittee: [
          { name: "Annelise Fu Ern Koh" },
          { name: "Auston Yang" },
          { name: "Lyn Duong" },
          { name: "Violet Mynn Nwer" },
          { name: "William Lu" },
          { name: "Sheen Sandhu" },
        ]
      },
      {
        name: "Platforms",
        directors: [
          { name: "Ethan Scott" },
          { name: "Sacha Korban" },
        ],
        subcommittee: [
          { name: "Aiden Tubman" },
          { name: "Arundhathi Madhu" },
          { name: "Haniya Nejeeb" },
          { name: "Jakob Lohtaja" },
          { name: "Raine Park" },
          { name: "Taku Kodama" },
        ]
      },
      {
        name: "UI\/UX",
        directors: [
          { name: "Cindy Zhang"},
          { name: "Rita Lin" },
        ],
        subcommittee: [
          { name: "Adam Almansor"},
          { name: "Carlson Perez" },
          { name: "Donald Chung"},
          { name: "Jimmy Kirkpatrick" },
          { name: "Ashley Lee" },
          { name: "Nathaniel Tan" },
        ]
      },
      {
        name: "Training\u00A0Program",
        directors: [
            { name: "Ray Falkner" },
            { name: "Khye Jac Low" },
            { name: "Lachlan Shoesmith" },
        ],
        subcommittee: [
          { name: "Alfie Chen" },
          { name: "Alyssa Cheong" },
          { name: "Giselle Angela Hanjaya Putri" },
          { name: "Kim Lam" },
          { name: "Aryaman Sakthivel" },
          { name: "Chris Casolin" },
          { name: "Danny Zhang" },
          { name: "Jenny Liu" },
        ],
        other: [
        ]
      },
      {
        name: "Events",
        directors: [
          { name: "Stephanie Lu"},
          { name: "Tom Liu"},
        ],
        subcommittee: [
          { name: "Alex Mo"},
          { name: "Brian Liang"},
          { name: "Derek Wen"},
          { name: "Jimmy Khanijow"},
          { name: "Laura Zhang"},
          { name: "Prisha Rao"},
          { name: "Ricky Guan" },
          { name: "Vanessa Huang"},
        ]
      },
      {
        name: "Marketing",
        directors: [
          { name: "Joye Fu"},
          { name: "Vincent Tannos" },
          { name: "William Yang"},
        ],
        subcommittee: [
          { name: "Aadhi Senthil Kumar" },
          { name: "David Shun"},
          { name: "Esther Djaidiguna"},
          { name: "Ethan Low"},
          { name: "Kristine Lim"},
          { name: "Louis Diep" },
          { name: "Maggie Wong" },
          { name: "Rooney Pham"},
        ]
      },
      {
        name: "HR",
        directors: [
          { name: "Edward Zhang"},
          { name: "Kelly Chour"},
        ],
        subcommittee: [
          { name: "Christine Park"},
          { name: "Emma Liang"},
          { name: "Ethan Richard" },
          { name: "Jason Yan"},
          { name: "John Wu"},          { name: "Olivianne Kho" },
          { name: "Sammi Cheung"},
        ]
      },
      {
        name: "Sponsorships",
        directors: [
          { name: "Bob Chen" },
        ],
        subcommittee: [
          { name: "Alisa Hsi"},
          { name: "Arshia John"},
          { name: "Aryan Rajnandan" },
          { name: "Justin Zaia" },
          { name: "Nuren Alahee"},
          { name: "Tina Dang"},
        ]
      },
    ]
  },
  2026: {
    executives: [
      { name: "Cindy Zhang", title: "Co-President", imgUrl: "/people/2026/pres-nm.png" },
      { name: "Lucas Harvey", title: "Co-President", imgUrl: "/people/2026/pres-nf.png" },
      { name: "Aryan Rajnandan", title: "Administrative Officer", imgUrl: "/people/2026/admin.png" },
      { name: "Edward Zhang", title: "VP (Internals)", imgUrl: "/people/2026/vpi.png" },
      { name: "Danny Zhang", title: "VP (Externals)", imgUrl: "/people/2026/vpe.png" },
      { name: "Tianming Tang", title: "VP (Projects)", imgUrl: "/people/2026/vpp1.png" },
      { name: "Kavika Palletenne", title: "VP (Projects)", imgUrl: "/people/2026/vpp2.png" },
      { name: "Ethan Scott", title: "VP (Project Operations)", imgUrl: "/people/2026/vpo.jpg" },
    ],
    subcommittees: [
      {
        name: "Chaos",
        directors: [
          { name: "Jared Schulz" },
          { name: "Peter Nguyen" },
        ],
        subcommittee: [
          { name: "Giselle Angela Hanjaya Putri" },
          { name: "Adithya Udupa" },
          { name: "Gede Agus Sudarmawan" },
          { name: "Carrie Wu" },
          { name: "Christian Martinez" },
          { name: "Azhad Haziq Kamarul Zaman" },
          { name: "Siya Yuan" },
          { name: "Vladimir Pak" },
          { name: "William Setiawan" },
          { name: "Kelly Huang" },
        ]
      },
      {
        name: "Circles",
        directors: [
          { name: "Jason Cong Chen" },
          { name: "Kevin Lin" },
        ],
        subcommittee: [
          { name: "Jeniffer Leong" },
          { name: "Olivianne Kho" },
          { name: "Jonathan Liu" },
          { name: "Aranchai Khanijow" },
          { name: "Woojae Lim" },
          { name: "Kieran Teh" },
          { name: "Luyan Chen" },
          { name: "Vivian Dai" },
        ]
      },
      {
        name: "Freerooms",
        directors: [
          { name: "Chris Wong" },
          { name: "Ryan Yensch" },
          { name: "Yanlin Li" },
        ],
        subcommittee: [
          { name: "Nareeco Amadea William" },
          { name: "Ray Falkner" },
          { name: "Christopher Khim" },
          { name: "Nicole Xie" },
          { name: "Jesslyn Wu" },
          { name: "Matthew Yuen" },
          { name: "Brian Wibawa Adi" },
          { name: "Gabriella Lianti" },
          { name: "Cormac Flahive" },
          { name: "Shaun Tan" },
          { name: "Joshua Pozzolungo" },
          { name: "Nguyen Nguyen" },
          { name: "Christopher Liang" },
          { name: "Eric Wong" },
        ]
      },
      {
        name: "Notangles",
        directors: [
          { name: "David Hua" },
          { name: "Lachlan Shoesmith" },
          { name: "Lyn Duong" },
        ],
        subcommittee: [
          { name: "Sophie Fox" },
          { name: "Lyn Duong" },
          { name: "Jenny Liu" },
          { name: "Samuel Luo" },
          { name: "Gurtej Sambhy" },
          { name: "John Teoh" },
          { name: "Nathaniel Tan" },
          { name: "Austin Ge" },
          { name: "Emily Yan" },
        ]
      },
      {
        name: "Structs",
        directors: [
          { name: "Abraham Earnest" },
          { name: "Patrick Tuong" },
        ],
        subcommittee: [
          { name: "Sushma Viswanathan" },
          { name: "Justin Prasad" },
          { name: "Aaron Yang" },
          { name: "Rohith Senthil Murugan" },
          { name: "Danar Abiyoga Prakosa" },
          { name: "Felicia Chang" },
          { name: "Zack Zeng" },
          { name: "Andy Ruan" },
          { name: "Andrew Chan" },
        ]
      },
      {
        name: "Warchest",
        directors: [
          { name: "Isaac Kim" },
          { name: "Kevin Jin"},
        ],
        subcommittee: [
          { name: "Regan Benedetti" },
          { name: "Meredith Zhang" },
          { name: "Eugene Briones" },
          { name: "Menghan Zhao" },
          { name: "Tomi Chong" },
          { name: "Xianbin Chen" },
          { name: "Jordan Zeng" },
          { name: "Laura Ha" },
          { name: "Hanwen Xiao" },
          { name: "Karyn Tjang" },
          { name: "Alex Varughese" },
          { name: "Jason Widjaja" },
        ]
      },
      {
        name: "Platforms",
        directors: [
          { name: "Ethan Scott" },
          { name: "Taku Kodama" },
          { name: "Toby Smith" },
        ],
        subcommittee: [
          { name: "Ben Quin" },
          { name: "Toby Smith" },
          { name: "Tet Nay Lin" },
          { name: "Elaine Zhang" },
          { name: "Brigette Hu" },
        ]
      },
      {
        name: "HR",
        directors: [
          { name: "Jian Wang"},
          { name: "Vansh Kalra"},
        ],
        subcommittee: [
          { name: "Frank Wu" },
          { name: "Giselle Teo Mun Kei" },
          { name: "Harrison Guo" },
          { name: "Corinne Zhou" },
          { name: "Amulyaa Bhatnagar" },
          { name: "Yuhan Zhang" },
          { name: "Shurui Zhang" },
          { name: "Benjamin Chau" },
        ]
      },
      {
        name: "Training\u00A0Program",
        directors: [
          { name: "Alyssa Cheong" },
          { name: "Andy Atmadja"},
          { name: "Sunny Chen" },
        ],
        subcommittee: [
          { name: "Naman Lalwani" },
          { name: "Jake Lee" },
          { name: "Tashvi Arora" },
          { name: "Aaron Siew" },
          { name: "Tara Atashbar" },
        ]
      },
      {
        name: "Technical\u00A0Workshop",
        directors: [
          { name: "Mourya Dave"},
          { name: "James Jiang" },
        ],
        subcommittee: [
          { name: "Kusuma Tatineni" },
          { name: "Humayra Iram" },
          { name: "Jun Wei Tay" },
          { name: "Jason Liu" },
          { name: "Grace Thomas" },
          { name: "Leon Sun" },
          { name: "Kevin Ming Hao Pei" },
        ]
      },
      {
        name: "Events",
        directors: [
          { name: "Arshia John"},
          { name: "Ricky Guan" },
        ],
        subcommittee: [
          { name: "Shania Chen" },
          { name: "Ashutosh Rai" },
          { name: "Yolo Chai" },
          { name: "Kelly Huang" },
          { name: "Pranav Moorthy" },
          { name: "Pranav Raja" },
          { name: "Amrita Nag" },
        ]
      },
      {
        name: "Marketing",
        directors: [
          { name: "Aadhi Senthil Kumar"},
          { name: "Avani Jain"},
          { name: "Shreya Verma"},
        ],
        subcommittee: [
          { name: "Helen Guo" },
          { name: "Andrew Sumanto" },
          { name: "Katelyn Lau" },
          { name: "Riddick Smith" },
          { name: "Katherine Yeh" },
          { name: "Junran Tian" },
        ]
      },
      {
        name: "Sponsorships",
        directors: [
          { name: "Mannan Zaveri"},
          { name: "Mark Quach" },
          { name: "Aryan Rajnandan" },
        ],
        subcommittee: [
          { name: "Salome Blandon Cano" },
          { name: "Conan Cheang" },
          { name: "Bryan Rijanto" },
          { name: "Meryl Lobo" },
          { name: "Austin Ge" },
          { name: "Derek Wen" },
        ]
      },
    ]
  },
};
export type PersonProps = Omit<ExecProps, 'title'>;
interface TeamData {
  [key: number]: {
    executives: ExecProps[];
    subcommittees: {
      name: string,
      directors: PersonProps[],
      subcommittee: PersonProps[],
      other?: {
        role: string
        people: PersonProps[]
      }[]
    }[]
  }
}
