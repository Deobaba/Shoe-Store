interface Props{
    imgUrl : {
        thumbnail:string,
        bigShoe:string
    },
    changeBigShoeImage: (shoe:string)=> void,
    bigShoeImage:string
}

const ShoeCard = ({imgUrl,changeBigShoeImage,bigShoeImage}:Props) => {

    const handleClick = () => {
        if(bigShoeImage !== imgUrl.bigShoe){
            changeBigShoeImage(imgUrl.bigShoe)
        }
    }
  return (
    <div
    className={`border-2 runded-xl ${
        bigShoeImage === imgUrl.bigShoe ? "border-coral-red" : "border-transparent"}cursor-pointer max-sm:flex-1`}

    onClick={handleClick}
    >
      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <img
          src={imgUrl.thumbnail}
          alt='shoe colletion'
          width={127}
          height={103.34}
          className='object-contain'
        />
      </div>
      
    </div>
  )
}

export default ShoeCard
