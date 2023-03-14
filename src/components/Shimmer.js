const Shimmer = ()=>{
    return(
        <div className="shimmer_wrapper">
        {
            Array(10).fill("").map((e, ind) => 
            <div className="shimmer" key={ind}> </div>)
        }
        </div>
    )
}

export default Shimmer;