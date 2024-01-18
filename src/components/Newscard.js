import React,{useState} from 'react'
import '../styles/style.css'
import '../styles/global.css'

function Newscard({data,indexValue,homedata}) {
    const [dataValue,setDataValue]=useState(data);

  return (
     <div class="flip-card  ">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <div class="m-[1rem] flex justify-between">
      <img class=" w-[40%] h-[40%] m-[5px]" src={homedata.newslogo[indexValue].localFile.url}/>
      <h2 className='font-use-one m-[5px]'>{dataValue.date}</h2>
      </div>
      <p class="m-[1rem] text-left text-[26px] tracking-[1px] font-use-one">
        {dataValue.newscontent.data.newscontent}
            </p>
    </div>
    <div class="flip-card-back">
      <p class="m-[2rem] font-use-one sm:text-[12px]">
      {dataValue.news_head.data.news_head}
</p>
<a href={dataValue.News_Url} target="_blank" class=" text-[#03e9f4] no-underline hover:underline">Read More</a>
    </div>
  </div>
</div>

  )
}

export default Newscard
