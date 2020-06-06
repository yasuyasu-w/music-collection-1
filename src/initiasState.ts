import {nowTime} from './nowTime'


//白紙フォーマットとして、content新規作成時に、利用する
export const initialState=[
    {
      id:0,
      ArtistName:'',
      SongName:'',
      ArtistImage:'',
      iPoint:'',
      Desc:'',
      time:nowTime()
    }
  ]