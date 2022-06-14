export default class HpApiService {

  _apiBase = 'https://fedeperin-harry-potter-api-en.herokuapp.com';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`)
    }

    return await res.json();
  }

  getAllPlayers = async () => {
    const allPlayers = await this.getResource(`/characters`);
    return allPlayers.map(this._transformPlayer);
  }

  getWithRandomErrorAllPlayers = async () => {
    const allPlayers = await this.getResource(`/characters`);
    const res = allPlayers.map(this._transformPlayer);

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

  _transformPlayer = (player) => {
    const age = this._getRandomAge(16, 38);

    const position = (age > 35) ? 'GK' :
      (35 >= age && age > 31) ? 'CB' :
        (31 >= age && age > 29) ? 'RB' :
          ((29 >= age && age > 26) ||
            (18 >= age)) ? 'CM' :
            (26 >= age && age > 24) ? 'ST' :
              (24 >= age && age > 22) ? 'LW' :
                (22 >= age && age > 20) ? 'LB' :
                  'RW';

    const nationality = (age % 3 === 0) ? 'scottish' :
      (age % 3 === 1) ? 'british' :
        'irish';

    return {
      id: player.id,
      name: player.character,
      nickname: player.nickname,
      hogwartsHouse: player.hogwartsHouse,
      image: player.image,
      actor: player.interpretedBy,
      nationality,
      age,
      position
    }
  }

  getPlayer = async (id) => {
    const player = await this.getResource(`/characters/${id}`);

    return this._transformPlayer(player);
  }

  getPlayerImage = ({ id }) => {
    return this.getPlayer(id).image;
  }

  _getRandomAge = (min, max) => {
    // random number from min to (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
}