import {nowTime} from './nowTime'
import eminemMusic from './eminem_loseYourSelf.jpg'

//白紙フォーマットとして、content新規作成時に、利用する
export const initialState=[
    {
      id:0,
      ArtistName:'Eminem',
      SongName:'Lose Yourself',
      ArtistImage:eminemMusic,
      iPoint:'韻の畳みかけ!(これは例です)',
      Desc:'曲中に、同じ韻で何度も畳みかけることにより、リスナーを虜に',
      time:nowTime()
    }
  ]