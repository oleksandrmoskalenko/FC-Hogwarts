export default class FixturesPhotosApiService {
  _apiBase = [
    {
      id: 0,
      title: 'Brentford 2-0 Arsenal',
      image: 'https://resources.premierleague.com/photos/2022/06/01/edf0949b-da1c-4dff-bf52-ccd1d8a1f9e0/Thomas-Frank-BRE-2-0-ARS.jpg?width=1350&height=759',
      description: "Head coach Thomas Frank celebrates with a young supporter following Brentford's win over Arsenal as the Premier League season opened in spectacular style"
    },
    {
      id: 1,
      title: 'West Ham United 4-1 Leicester City',
      image: 'https://resources.premierleague.com/photos/2022/06/01/2a9e6f6c-5ffe-490a-b023-0544c7d647a7/West-Ham-United-4-1-Leicester-City.jpg?width=1350&height=759',
      description: "Michail Antonio celebrates by lifting a cardboard cutout of himself after becoming West Ham's all-time Premier League top scorer in their 4-1 win over Leicester City"
    },
    {
      id: 2,
      title: 'Manchester United 4-1 Newcastle United',
      image: 'https://resources.premierleague.com/photos/2022/06/01/33c2d483-6e1c-45fc-bda5-8bec7fb9c91a/Manchester-United-4-1-Newcastle-United.jpg?width=1350&height=759',
      description: "After sealing a sensational return to Manchester United, Cristiano Ronaldo scores twice on his second debut for the club against Newcastle United"
    },
    {
      id: 3,
      title: 'Aston Villa 1-1 Crystal Palace',
      image: 'https://resources.premierleague.com/photos/2022/05/15/c71de036-18d9-4579-af55-34c856ff2b76/Aston-Villa-1-1-Crystal-Palce.jpg?width=1350&height=759',
      description: "Levels of concentration show on Wilfried Zaha and John McGinn in this aerial battle"
    },
    {
      id: 4,
      title: 'Arsenal 0-0 Burnley',
      image: 'https://resources.premierleague.com/photos/2022/06/03/9aa30b6f-af48-4f24-8704-055ce7741450/Arsenal-0-0-Burnley.png?width=1350&height=759',
      description: "The Burnley defence do everything they can to block a shot from Alexandre Lacazette"
    },
    {
      id: 5,
      title: 'Liverpool 2-2 Manchester City',
      image: 'https://resources.premierleague.com/photos/2022/06/01/15bf6987-5d3c-4c6c-b6bc-c232c3a3af2c/Liverpool-2-2-Manchester-City.jpg?width=1350&height=759',
      description: "Mohamed Salah nets a stunning solo goal against Man City, which won the Budweiser Goal of the Season award"
    },
    {
      id: 6,
      title: 'Aston Villa 2-3 Wolverhampton Wanderers',
      image: 'https://resources.premierleague.com/photos/2022/06/01/5c5de8b3-0efb-4091-8258-ed4067743462/Aston-Villa-2-3-Wolverhampton-Wanderers.jpg?width=1350&height=759',
      description: "Wolves celebrate after scoring three times in the final 15 minutes to seal an unlikely comeback victory over Midlands rivals Aston Villa"
    },
    {
      id: 7,
      title: 'Norwich 0-0 Brighton',
      image: 'https://resources.premierleague.com/photos/2022/06/03/cf4da42d-fd9d-4370-888b-cd00832d892e/Norwich-0-0-Brighton.png?width=1350&height=759',
      description: "It's agony for Josh Sargent and the Norwich City fans as a chance goes begging"
    },
    {
      id: 8,
      title: 'Manchester United 0-5 Liverpool',
      image: 'https://resources.premierleague.com/photos/2022/06/01/812b7c6d-18ed-4102-9695-96e526f84760/Manchester-United-0-5-Liverpool.jpg?width=1350&height=759',
      description: "Salah revels in his hat-trick as Liverpool secure a resounding win over their fierce rivals at Old Trafford"
    },
    {
      id: 9,
      title: 'Leeds 0-4 Spurs',
      image: 'https://resources.premierleague.com/photos/2022/06/03/8bc2997f-16f4-4032-80fb-5727c1b3914f/Leeds-0-4-Spurs.png?width=1350&height=759',
      description: "Harry Winks puts his body on the line to protect the Spurs goal during a Leeds free-kick"
    },
    {
      id: 10,
      title: 'Leicester 0-2 Arsenal',
      image: 'https://resources.premierleague.com/photos/2022/06/06/81cca043-7646-45c5-b0d9-4aa19e04f766/Leicester-0-2-Arsenal.png?width=1350&height=759',
      description: "Gunners goalkeeper Aaron Ramsdale produces a stunning save to deny James Maddison at the King Power Stadium"
    },
    {
      id: 11,
      title: 'Watford 2-3 Arsenal',
      image: 'https://resources.premierleague.com/photos/2022/06/03/743ec251-423e-403c-83fc-07d9583e1bd0/Watford-2-3-Arsenal.png?width=1350&height=759',
      description: "This season the Premier League, clubs, players, fans and officials have given their support to the people of Ukraine"
    },
    {
      id: 12,
      title: 'Aston Villa 2-0 Brighton and Hove Albion',
      image: 'https://resources.premierleague.com/photos/2022/06/01/da899d9d-7c28-490e-9673-6112b4aa5c9e/Aston-Villa-2-0-Brighton-and-Hove-Albion.jpg?width=1350&height=759',
      description: "Steven Gerrard enjoys a dream debut after being appointed as Aston Villa head coach"
    },
    {
      id: 13,
      title: 'Wolverhampton Wanderers 0-1 Liverpool',
      image: 'https://resources.premierleague.com/photos/2022/06/01/2eb440ee-d836-4bd5-8ddf-5d9e1f0f381a/Wolverhampton-Wanderers-0-1-Liverpool.jpg?width=1350&height=759',
      description: "A stoppage-time winner from Divock Origi gives Liverpool a dramatic win at Wolves"
    },
    {
      id: 14,
      title: 'Everton 0-1 Wolves',
      image: 'https://resources.premierleague.com/photos/premierleague/photo/2022/03/13/4ca4f5cb-45ec-4dbd-a387-9e179efbd306/2022-03-13T164850Z_1180413914_UP1EI3D1APB0D_RTRMADP_3_SOCCER-ENGLAND-EVE-WLV-REPORT.JPG?width=1350&height=759',
      description: "Wolves striker Raul Jimenez displays his acrobatic side"
    },
    {
      id: 15,
      title: 'Leeds United 2-1 Norwich City',
      image: 'https://resources.premierleague.com/photos/2022/06/01/944b8d3b-25ef-48b1-9022-087e63bd948b/Leeds-United-2-1-Norwich-City.jpg?width=1350&height=759',
      description: "Jesse Marsch and the Leeds bench go wild after the Whites secure a dramatic and crucial victory over Norwich"
    },
    {
      id: 16,
      title: 'Everton 1-0 Chelsea',
      image: 'https://resources.premierleague.com/photos/2022/06/01/b081a3b1-8970-42bc-8ac7-5668faeb2ff9/Everton-1-0-Chelsea.jpg?width=1350&height=759',
      description: "Jordan Pickford somehow keeps out a Cesar Azpilicueta shot as Everton claim three vital points against Chelsea. That stop would go on to win the Castrol Save of the Season award"
    },
    {
      id: 17,
      title: 'Newcastle 2-1 Brighton',
      image: 'https://resources.premierleague.com/photos/premierleague/photo/2022/03/05/0b8c0506-1d79-4a1c-ad11-103e10561cea/2022-03-05T163519Z_245316489_UP1EI351A2TAO_RTRMADP_3_SOCCER-ENGLAND-NEW-BRH-REPORT.JPG?width=1350&height=759',
      description: "Joe Willock puts his head where it hurts in order to win the ball"
    },
    {
      id: 18,
      title: 'West Ham United 2-2 Manchester City',
      image: 'https://resources.premierleague.com/photos/2022/06/03/89bf67d7-c482-4ef9-b65c-8c104c5ee19d/2022-05-15T133934Z_1173119235_UP1EI5F11XWJD_RTRMADP_3_SOCCER-ENGLAND-WHU-MCI-REPORT.JPG?width=1350&height=759',
      description: "An emotional Mark Noble prepares to say goodbye to the West Ham United fans at their final home match of the season"
    },
    {
      id: 19,
      title: 'Brentford 1-2 Leeds United',
      image: 'https://resources.premierleague.com/photos/2022/06/01/5b0581b3-d06d-46e5-900a-80452959c09f/Brentford-1-2-Leeds-United.jpg?width=1350&height=759',
      description: "Raphinha celebrates with the Leeds supporters after they beat Brentford on the final day to secure their Premier League status"
    },
    {
      id: 20,
      title: 'Man City 2-2 Liverpool',
      image: 'https://resources.premierleague.com/photos/2022/06/03/4f3b3e46-d513-47b9-b066-286418a1f33b/Man-City-2-2-Liverpool.png?width=1350&height=759',
      description: "Pep Guardiola and Trent Alexander-Arnold share a light-hearted moment during this season's intense title battle"
    },
    {
      id: 21,
      title: 'Everton 3-2 Crystal Palace',
      image: 'https://resources.premierleague.com/photos/premierleague/photo/2022/05/20/5361e05f-d1f1-4f4a-b2e6-1d8084d02989/1398210186.jpg?width=1350&height=759',
      description: "Conor Gallagher is at full stretch but he can't prevent Richarlison from scoring at Goodison Park"
    },
    {
      id: 22,
      title: 'Burnley 1-2 Newcastle United',
      image: 'https://resources.premierleague.com/photos/2022/06/01/ee84aaec-1303-4d5b-81bb-a075c0acb2d5/Burnley-1-2-Newcastle-United.jpg?width=1350&height=759',
      description: "Defeat for the Clarets against Newcastle ends their six-year stay in the Premier League"
    },
    {
      id: 23,
      title: 'Manchester City 3-2 Aston Villa',
      image: 'https://resources.premierleague.com/photos/2022/06/02/92e71670-623b-4441-b0e6-ccab9e6eb06c/Ilkay-Gundogan-Man-City.jpg?width=1350&height=759',
      description: "Ilkay Gundogan taps in the decisive goal for Man City against Aston Villa on the final day, winning the title for his club"
    },
    {
      id: 24,
      title: 'Man City 3-2 Aston Villa',
      image: 'https://resources.premierleague.com/photos/2022/06/02/3c6cb797-f41d-46cf-93e5-21db943e1abb/Man-City-lift-the-title.jpg?width=1350&height=759',
      description: "Fernandinho lifts the Premier League Trophy as Man City retain their crown"
    },
  ];

  getAllFixturesPhotos = async () => {
    return this._apiBase;
  }

  getWithRandomErrorAllFixturesPhotos = async () => {
    const res = this._apiBase;

    return new Promise((resolve, reject) => {

      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error('Something bad happened'))
        } else {
          resolve(res);
        }
      }, 800);
    });
  }

}